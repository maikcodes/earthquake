import { SERVER_URL } from "./config";
import parsePagination from "./utils";

const API_URL = new URL("api/comments", SERVER_URL);

export class Comment {
  static async indexByFeatureId(id, page = 1, limit = 10) {
    const response = await fetch(
      new URL(`?feature_id=${id}&page=${page}&per_page=${limit}`, API_URL)
    );

    if (!response.ok) {
      throw new Error("Cannot fetch data from the server.");
    }

    const jsonData = await response.json();
    const parsedResponse = parseFeatures(jsonData);
    return parsedResponse;
  }

  static async sendNewComment(comment, feature_id) {
    await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ feature_id, body: comment }),
    });
  }
}

function parseComments(comment) {
  const time = new Date(comment.created_at);

  return {
    id: comment.id,
    body: comment.body,
    time: `${time.toLocaleDateString()} at ${time
      .toLocaleTimeString()
      .toString()}`,
  };
}

function parseFeatures(comments) {
  const data = comments.data.map(parseComments);
  return {
    pagination: parsePagination(comments?.pagination),
    data,
  };
}
