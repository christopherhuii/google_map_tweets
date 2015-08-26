class Tweet
  attr_accessor :query, :lat, :lng

  def initialize(query, lat, lng)
    self.query = query
    self.lat = lat
    self.lng = lng
    fetch_tweets
    view_tweet
  end

  def fetch_tweets
    @tweets = $twitter_client.search(query, options = {geocode: "#{lat},#{lng},7mi"})
  end

  def view_tweet
    # @tweets.each do |tweet|
    #   p $twitter_client.status(tweet.id)
    # end
    p $twitter_client.status(634980936313122816)
  end
end