Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'api/auth'
  # devise_for :users, :controllers
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  namespace :api do
    resources :users do
      resources :user_punchcard do
        resources :restaurants do
          resources :punchcards do
            resources :rewards 
        end
      end
    end
  end
    get 'restaurants/all', to: 'restaurants#all'
    get 'punchcards/all', to: 'punchcards#all'
    get 'user/:id/punchcard_by_user', to: 'punchcards#punchcard_by_user'
  end

    get 'things', to: 'things#index'
  
    delete 'users/:id', to: 'users#delete'


end
         