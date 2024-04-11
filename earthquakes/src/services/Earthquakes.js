const SERVER_URL = "http://localhost:3000";
const API_URL = new URL("api/features", SERVER_URL);

export class Earthquakes {
  static async index(page = 1, limit = 10) {
    const response = await fetch(
      new URL(`?page=${page}&per_page=${limit}`, API_URL)
    );

    if (!response.ok) {
      throw new Error("Cannot fetch data from the server.");
    }

    const jsonData = await response.json();
    const parsedResponse = parseFeatures(jsonData);
    return parsedResponse;
  }
}

const parseFeature = (feature) => {
  return {
    id: feature.id,
    type: feature.type,
    external_id: feature.attributes.external_id,
    magnitude: feature.attributes.magnitude,
    place: feature.attributes.place,
    time: feature.attributes.time,
    tsunami: feature.attributes.tsunami,
    mag_type: feature.attributes.mag_type,
    title: feature.attributes.title,
    longitude: feature.attributes.coordinates.longitude,
    latitude: feature.attributes.coordinates.latitude,
    external_url: feature.links.external_url,
  };
};

const parseFeatures = (features) => {
  const data = features.data.map(parseFeature);
  return {
    pagination: {
      current_page: features.pagination.current_page,
      total: features.pagination.total,
      per_page: features.pagination.per_page,
    },
    data,
  };
};
