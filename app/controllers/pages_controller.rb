class PagesController < ApplicationController
  def index
    @location = Geolocation.new(params[:zip_code])
    @tweets = Tweet.new(params[:query], @location.lat, @location.lng)
    gon.tweet_coords = @tweets.tweet_coordinates

    respond_to do |format|
      format.html
      format.json { render json: @tweets.tweet_coordinates }
    end
  end

  def search
  end
end
