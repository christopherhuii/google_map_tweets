class Geolocation

  attr_accessor :zip_code, :lat, :lng

  def initialize(zip_code)
    self.zip_code = zip_code
    unless zip_code.blank?
      @location_json = fetch_geolocation(zip_code)
      zip_code_to_coords
      end
  end

  def fetch_geolocation(zip_code)
    HTTParty.get("https://maps.googleapis.com/maps/api/geocode/json?address=" + zip_code + "&key=" + ENV['GOOGLE_MAPS_KEY'])
  end

  def zip_code_to_coords
    @lat = @location_json['results'][0]['geometry']['location']['lat']
    @lng = @location_json['results'][0]['geometry']['location']['lng']
  end
end