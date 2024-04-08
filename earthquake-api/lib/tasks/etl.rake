namespace :etl do

  require 'net/http'

  # https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_month.geojson
  desc "Run ETL process for Earthquake data from USGS"
  task run: :environment do
    last_month_earhquakes_url = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_month.geojson"
    url = URI.parse(last_month_earhquakes_url)

    puts "Start ETL process for Earthquake data from USGS 🌍"
    raw_data = extract_data(url)
    transformed_data = transform_data(raw_data)
    load_data(transformed_data)
    puts "ETL process finished successfully ✅"
  end

  def extract_data(url)
    puts "Extracting data from #{url}"
    response = Net::HTTP.get_response(url)
    response_body = response.body if response.is_a?(Net::HTTPSuccess)

    response_json = JSON.parse(response_body)
    total = response_json["features"].length
    puts "Data extracted successfully ✅, total #{total}"
    return response_json
  end

  def transform_data(data)
    puts "Transforming data"
    elements = data["features"]

    transformed_elements = elements.map do |element|

      # if valid_element?(element) == false
      #   puts "Element #{element} is invalid"
      # end

      next unless valid_element?(element)

      properties = element["properties"]
      longitude = element["geometry"]["coordinates"][0]
      latitude = element["geometry"]["coordinates"][1]

      {
        event_type: element["type"],
        external_id: element["id"],
        magnitude: properties["mag"],
        place: properties["place"],
        time: transform_time(properties["time"]),
        tsunami: transform_tsunami(properties["tsunami"]),
        mag_type: properties["magType"],
        title: properties["title"],
        coordinates: transform_coordinates(longitude, latitude),
        external_link: properties["url"],
      }
    end

    transformed_elements.compact!

    puts "Data transformed successfully ✅, total #{transformed_elements.length}"
    return transformed_elements
  end

  def load_data(transformed_data)
    puts "Loading data"
    Feature.insert_all(transformed_data)
    puts "Data loaded successfully ✅"
  end

  # useful methods for transform

  def valid_element?(element)
    properties = element["properties"]
    coordinates = element["geometry"]["coordinates"]

    # if any of these properties are nil, the element is invalid
    return false if properties["title"].nil? || properties["url"].nil? || properties["place"].nil? || properties["magType"].nil? || coordinates[0].nil? || coordinates[1].nil?

    # if any of these properties are not in the expected range, the element is invalid
    mag = properties["mag"]
    longitude = coordinates[0]
    latitude = coordinates[1]

    mag.between?(-1.0, 10.0) && longitude.between?(-180.0, 180.0) && latitude.between?(-90.0, 90.0)
  end

  def transform_coordinates(longitude, latitude)
    return "POINT(#{longitude} #{latitude})"
  end

  def transform_time(time)
    Time.at(time.to_i / 1000).to_datetime
  end

  def transform_tsunami(value)
    value.to_i == 0 ? false : true
  end

end
