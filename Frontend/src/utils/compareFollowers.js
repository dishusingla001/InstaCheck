function buildUsernameMap(usernames) {
  const usernameMap = new Map();

  usernames.forEach((username) => {
    const normalized = username.trim().toLowerCase();

    if (!normalized) {
      return;
    }

    if (!usernameMap.has(normalized)) {
      usernameMap.set(normalized, username.trim());
    }
  });

  return usernameMap;
}

function uniqueOrderedUsernames(usernames) {
  const seen = new Set();
  const orderedUsernames = [];

  usernames.forEach((username) => {
    const normalized = username.trim().toLowerCase();

    if (!normalized || seen.has(normalized)) {
      return;
    }

    seen.add(normalized);
    orderedUsernames.push(username.trim());
  });

  return orderedUsernames;
}

export function compareFollowers(followers, following) {
  const orderedFollowers = uniqueOrderedUsernames(followers);
  const orderedFollowing = uniqueOrderedUsernames(following);
  const followersMap = buildUsernameMap(followers);
  const followingMap = buildUsernameMap(following);

  const followersSet = new Set(followersMap.keys());
  const followingSet = new Set(followingMap.keys());

  const mutual = orderedFollowers.filter((username) =>
    followingSet.has(username.trim().toLowerCase()),
  );

  const notFollowingBack = orderedFollowing.filter(
    (username) => !followersSet.has(username.trim().toLowerCase()),
  );

  const youDontFollowBack = orderedFollowers.filter(
    (username) => !followingSet.has(username.trim().toLowerCase()),
  );

  return {
    followersCount: followersSet.size,
    followingCount: followingSet.size,
    mutual,
    notFollowingBack,
    youDontFollowBack,
    followersSet,
    followingSet,
  };
}
