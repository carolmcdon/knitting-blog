Rails.application.routes.draw do
  
  resources :comments
  resources :posts
  resources :users

  post "/login", to: "sessions#create"

  get "/user_in_session", to: "sessions#user_in_session"

  delete "/logout", to: "sessions#destroy"

  get "/users_posts", to: "posts#get_users_posts"

  post "/users_posts", to: "posts#create_users_posts"

  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
