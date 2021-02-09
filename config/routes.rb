Rails.application.routes.draw do
  resources :interests

  namespace :api do 
    namespace :v1 do 
     resources :interests, only: [:index, :create, :destroy, :update]
    end 
  end

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  root to: "home#index"
end
