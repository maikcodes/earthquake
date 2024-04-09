require 'handlers/pagination'

class Api::FeaturesController < ApplicationController
  include PaginationHandler

  before_action :set_feature, only: %i[ show update destroy ]

  # GET /features
  def index
    @features = Feature.paginate(page: @pagination[:_page], per_page: @pagination[:per_page])

    render json: {
      data: @features,
      pagination: {
        current_page: @features.current_page,
        total: @features.total_entries,
        per_page: @features.per_page
      }
    }
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
