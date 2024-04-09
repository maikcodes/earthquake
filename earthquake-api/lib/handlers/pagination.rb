module PaginationHandler
  extend ActiveSupport::Concern

  included do
    before_action :set_pagination, only: [:index]
    rescue_from ArgumentError, with: :invalid_pagination_params
  end

  def parse_pagination_params
    page = Integer(params[:page] || Pagination::DEFAULT_PAGE)
    per_page = Integer(params[:per_page] || Pagination::DEFAULT_PER_PAGE)
    per_page = [per_page, Pagination::MAX_PER_PAGE].min

    if page < 1 || per_page < 1
      raise ArgumentError
    end

    { page: page, per_page: per_page }
  end

  private

  def set_pagination
    @pagination = parse_pagination_params
  end

  def invalid_pagination_params
    render json: { error: 'Invalid pagination parameters' }, status: :bad_request
  end
end
