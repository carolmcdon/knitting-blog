class CommentsController < ApplicationController

  def index
    render json: Comment.all
  end

  def create
    comment = Comment.create(comment_params)
    if comment
      render json: comment, status: :ok
    else
      render json: { error: "Not a valid comment" }, status: :unprocessable_entity
    end
  end

  private

  def comment_params
    params.permit(:comment_content, :comment_date, :user_id, :post_id)
  end

end
