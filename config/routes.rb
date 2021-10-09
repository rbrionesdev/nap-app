Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'api/auth'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  namespace :api do
    resources :users do
    end
    get 'leaderboard', to: "users#leaderboard"
    resources :users
    resources :naps 
    resources :nap_times
  end
end
         