Rails.application.routes.draw do
  get 'pages/search'
  get '/:zip_code' => 'pages#search'

  root 'pages#index'
end
