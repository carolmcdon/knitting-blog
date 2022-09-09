class UsersController < ApplicationController

  def create
    user = User.create(user_params)
    render json: user, status: :ok
    session[:user_id] = user.id 
  end

  private

  def user_params
      params.permit(:name, :username, :email, :password, :about, :profile_image)
  end

end
