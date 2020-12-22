Rails.application.routes.draw do
  namespace :api do
    get 'pets/index'
    get 'pets/create'
    get 'pets/show/:id', to: 'pets#show'
    get 'pets/destroy'
  end
  root 'homepage#index'
  get '*path', to: 'homepage#index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
