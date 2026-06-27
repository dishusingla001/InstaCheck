function extractArray(payload, keys) {
  if (Array.isArray(payload)) {
    return payload;
  }

  if (payload && typeof payload === "object") {
    for (const key of keys) {
      if (Array.isArray(payload[key])) {
        return payload[key];
      }
    }
  }

  throw new Error("Wrong Instagram file.");
}

export function parseFollowing(payload) {
  const list = extractArray(payload, ["relationships_following", "following"]);

  const usernames = list.map((entry) => entry?.title?.trim()).filter(Boolean);

  if (!usernames.length) {
    throw new Error("Wrong Instagram file.");
  }

  return usernames;
}
