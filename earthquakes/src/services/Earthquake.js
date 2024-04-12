import { SERVER_URL } from "./config";
import parsePagination from "./utils";

const API_URL = new URL("api/features", SERVER_URL);

export class Earthquake {
  static async index(page = 1, limit = 10, filters = "") {
    let url;

    if (filters === "") {
      url = new URL(
        `?page=${page}&per_page=${limit}`,
        API_URL
      );
    } else {
      url = new URL(
        `?page=${page}&per_page=${limit}&mag_types=${filters}`,
        API_URL
      );
    }
    
    const response = await fetch(url);

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
    pagination: parsePagination(features?.pagination),
    data,
  };
};
