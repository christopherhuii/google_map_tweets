class PagesController < ApplicationController
  def index
    @location = Geolocation.new(params[:zip_code])
  end

  def search
  end
end
