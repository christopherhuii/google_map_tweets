class Tweet
  attr_accessor :query, :lat, :lng, :tweet_texts

  def initialize(query, lat, lng)
    self.query = query
    self.lat = lat
    self.lng = lng
    fetch_tweets
    view_tweet
  end

  def fetch_tweets
    @tweets_container = []
    @tweet_objects = $twitter_client.search(query, options = {geocode: "#{lat},#{lng},7mi", result_type: "recent", count: 50})

    @tweet_objects.each do |tweet|
      @tweets_container << tweet
    end
  end

  def view_tweet
    @tweet_texts = []
    @tweets_container.each do |tweet|
      $twitter_client.status(tweet).geo.coordinates
      @tweet_texts << tweet.text

    end
  end
end