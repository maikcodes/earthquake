import features from "../mock/earthquakes.json";

export class Earthquakes {
  static async index() {
    return features;
  }
}
