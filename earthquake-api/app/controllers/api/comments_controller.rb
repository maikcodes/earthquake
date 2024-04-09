require 'constants/pagination'
require 'handlers/pagination'

class Api::CommentsController < ApplicationController
  include PaginationHandler
  before_action :set_comment, only: %i[ show update destroy ]

  # GET /comments
  def index
    @comments = Comment.paginate(page: @pagination[:page], per_page: @pagination[:per_page])

    render json: {
      data: @comments,
      pagination: {
        current_page: @comments.current_page,
        total: @comments.total_entries,
        per_page: @comments.per_page
      }
    }
  end

  # GET /comments/1
  def show
    render json: @comment
  end

  # POST /comments
  def create
    @comment = Comment.new(comment_params)
    puts "Comment params: #{comment_params}"

    if @comment.save
      render json: @comment, status: :created
    else
      render json: @comment.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /comments/1
  def update
    if @comment.update(comment_params)
      render json: @comment
    else
      render json: @comment.errors, status: :unprocessable_entity
    end
  end

  # DELETE /comments/1
  def destroy
    @comment.destroy!
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_comment
      @comment = Comment.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def comment_params
      params.require(:comment).permit(:feature_id, :body)
    end
end
