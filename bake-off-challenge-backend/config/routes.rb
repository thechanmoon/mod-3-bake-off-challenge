Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  resources :bakes, only: [:index, :show, :create] do
    resources :ratings, only: :create
  end
end
