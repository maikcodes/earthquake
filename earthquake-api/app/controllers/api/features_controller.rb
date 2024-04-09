class Api::FeaturesController < ApplicationController
  before_action :set_feature, only: %i[ show update destroy ]

  # GET /features
  def index
    page = params[:page].to_i
    per_page = params[:per_page].to_i

    begin
      parsed_page = Integer(page)
      parsed_per_page = Integer(per_page)

      if parsed_page < 1 || parsed_per_page < 1 || parsed_per_page > 1000
        return render json: { error: 'invalid pagination queries' }, status: :bad_request
      end

      @features = Feature.paginate(page: parsed_page, per_page: parsed_per_page)

      render json: {
        data: @features,
        pagination: {
          current_page: @features.current_page,
          total: @features.total_entries,
          per_page: @features.per_page
        }
      }
    rescue ArgumentError
      render json: { error: 'invalid pagination queries' }, status: :bad_request
    end
  end

  # GET /features/1
  def show
    render json: @feature
  end

  # POST /features
  def create
    @feature = Feature.new(feature_params)

    if @feature.save
      render json: @feature, status: :created, location: @feature
    else
      render json: @feature.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /features/1
  def update
    if @feature.update(feature_params)
      render json: @feature
    else
      render json: @feature.errors, status: :unprocessable_entity
    end
  end

  # DELETE /features/1
  def destroy
    @feature.destroy!
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_feature
      @feature = Feature.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def feature_params
      params.require(:feature).permit(:type)
    end
end
