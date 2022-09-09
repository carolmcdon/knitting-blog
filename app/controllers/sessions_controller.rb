class SessionsController < ApplicationController

 def create
    user = User.find_by(username: params[:username])
    if user
      if user.authenticate(params[:password])
        session[:user_id] = user.id 
        render json: user
      else
        render json: { error: "Check your password" }
      end
    else
      render json: { error: "Username or password does not match" }
    end
  end

  def user_in_session
    user_logged_in = User.find_by(id: session[:user_id])
    render json: user_logged_in
  end

  def destroy
    session.delete(:user_id)
    render json: {}
  end

end
