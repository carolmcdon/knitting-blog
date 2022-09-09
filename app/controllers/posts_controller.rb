class PostsController < ApplicationController

  def index
    render json: Post.all
  end

  def create
    new_post = Post.create(post_params)
    if new_post
      render json: new_post, status: :ok
    else
      render json: { error: "Not a valid post" }, status: :unprocessable_entity
    end
  end

  def get_users_posts
    users_posts = Post.where(user_id: session[:user_id])
    render json: users_posts 
  end

  def create_users_posts
    users_posts = Post.create(post_params)
    if users_posts
      render json: users_posts, status: :ok
    else
      render json: { error: "Not a valid post" }, status: :unprocessable_entity
    end
  end

  def destroy
    post_to_destroy = Post.find_by(id: params[:id])
    if post_to_destroy
        post_to_destroy.destroy
        # head :no_content
        render json: {}
    else
        render json: { error: "Post Not Found :(" }, status: :not_found
    end
  end

  def show
    post = Post.find_by(id: params[:id])
    render json: post
  end


  private

  def post_params
    params.permit(:user_id, :materials, :post_title, :post_content, :post_image1, :post_date)
  end

end
