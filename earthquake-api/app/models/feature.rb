class Feature < ApplicationRecord
  validates :external_id, presence: true
  validates :magnitude, numericality: { greater_than_or_equal_to: -1.0, less_than_or_equal_to: 10.0 }, presence: true
  validates :place, presence: true
  validates :time, presence: true
  validates :tsunami, inclusion: { in: [true, false] }, presence: true
  validates :mag_type, presence: true
  validates :title, presence: true
  validates :longitude, numericality: { greater_than_or_equal_to: -180.0, less_than_or_equal_to: 180.0 }, presence: true
  validates :latitude, numericality: { greater_than_or_equal_to: -90.0, less_than_or_equal_to: 90.0 }, presence: true

  validates :external_link, presence: true


  def longitude
    coordinates.x if coordinates.present?
  end

  def latitude
    coordinates.y if coordinates.present?
  end

  def as_json(options = {})
    {
      id: id,
      type: event_type,
      attributes: {
        external_id: external_id,
        magnitude: magnitude,
        place: place,
        time: time,
        tsunami: tsunami,
        mag_type: mag_type,
        title: title,
        coordinates: {
          longitude: longitude,
          latitude: latitude
        }
      },
      links: {
        external_url: external_link
      }
    }
  end
end