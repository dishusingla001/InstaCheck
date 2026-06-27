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

export function parseFollowers(payload) {
  const list = extractArray(payload, ["relationships_followers", "followers"]);

  const usernames = list
    .flatMap((entry) => entry?.string_list_data ?? [])
    .map((item) => item?.value?.trim())
    .filter(Boolean);

  if (!usernames.length) {
    throw new Error("Wrong Instagram file.");
  }

  return usernames;
}
