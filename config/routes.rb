Rails.application.routes.draw do
  root 'welcome#index'

  resources :facilities, only: [:index, :show] do
    collection { post :search }
  end

  resources :search, only: [:index] do
  end

  # heartbeat page
  get 'heartbeat', to: 'heartbeat#show'


  namespace :rfa do
    resources :a01 do
      resources :applicants, only: [] do
        resources :b01, only: [:index], action: 'create_applicant'
      end

      resources :other_adults, only: [] do
        resources :b01, only: [:index], action: 'create_other_adult'
      end

      resources :packet

    end

    resources :b01, only: [:edit, :update]
  end


  #get 'geoservice', to: 'geoservice#show'
  resources :geoservice, only: [:create] do
    collection { post :validate }
  end
end
