class PagesController < ApplicationController
  def index
    @location = Geolocation.new(params[:zip_code])
    @tweets = Tweet.new("august", @location.lat, @location.lng)
  end

  def search
  end
end
