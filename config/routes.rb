Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'api/auth'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  namespace :api do
    resources :users do
      resources :restaurants do
        resources :punchcards do
          resources :rewards 
        end
      end
    end
    get 'restaurants/all', to: 'restaurants#all'
    get 'user/:id/punchcard_by_user', to: 'punchcards#punchcard_by_user'
  end

    get 'things', to: 'things#index'
  

end
         