Rails.application.routes.draw do

  namespace :api do
    # resources :days, only: [:index, :create]
    get '/clockdata', to: 'days#index'
    post '/clockin', to: 'days#create'
    put '/clockout', to: 'days#update'
  end

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
