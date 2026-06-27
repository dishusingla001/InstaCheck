import { useState } from "react";
import { parseFollowers } from "../utils/parseFollowers.js";
import { parseFollowing } from "../utils/parseFollowing.js";
import { compareFollowers } from "../utils/compareFollowers.js";

function useAnalyzer(navigate) {
  const [followersFile, setFollowersFile] = useState(null);
  const [followingFile, setFollowingFile] = useState(null);
  const [results, setResults] = useState(null);
  const [loading, setLoading] = useState(false);
  const [toasts, setToasts] = useState([]);

  const addToast = (type, message) => {
    const id = crypto.randomUUID();
    setToasts((currentToasts) => [...currentToasts, { id, type, message }]);
    window.setTimeout(() => {
      setToasts((currentToasts) =>
        currentToasts.filter((toast) => toast.id !== id),
      );
    }, 4000);
  };

  const removeToast = (id) => {
    setToasts((currentToasts) =>
      currentToasts.filter((toast) => toast.id !== id),
    );
  };

  const readFileAsText = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();

      reader.onload = () => resolve(String(reader.result ?? ""));
      reader.onerror = () => reject(new Error("Unable to read the file."));
      reader.readAsText(file);
    });

  const parseText = (text) => {
    if (!text.trim()) {
      throw new Error("Empty file.");
    }

    try {
      return JSON.parse(text);
    } catch {
      throw new Error("Invalid JSON file.");
    }
  };

  const handleFileSelect = (kind, file) => {
    if (!file) {
      return;
    }

    const isJson =
      file.name.toLowerCase().endsWith(".json") ||
      file.type === "application/json";

    if (!isJson) {
      addToast("error", "Only JSON files are accepted.");
      return;
    }

    if (kind === "followers") {
      setFollowersFile(file);
    } else {
      setFollowingFile(file);
    }
  };

  const handleInvalidFile = (message = "Only JSON files are accepted.") => {
    addToast("error", message);
  };

  const analyzeFollowers = async () => {
    if (!followersFile || !followingFile) {
      addToast("error", "Please upload both JSON files.");
      return null;
    }

    setLoading(true);

    try {
      const [followersText, followingText] = await Promise.all([
        readFileAsText(followersFile),
        readFileAsText(followingFile),
      ]);

      const followersPayload = parseText(followersText);
      const followingPayload = parseText(followingText);

      const followers = parseFollowers(followersPayload);
      const following = parseFollowing(followingPayload);
      const analysis = compareFollowers(followers, following);

      setResults(analysis);
      navigate("/results", { state: { results: analysis } });
      return analysis;
    } catch (error) {
      addToast(
        "error",
        error instanceof Error ? error.message : "Something went wrong.",
      );
      return null;
    } finally {
      setLoading(false);
    }
  };

  return {
    followersFile,
    followingFile,
    followersFileName: followersFile?.name ?? "",
    followingFileName: followingFile?.name ?? "",
    results,
    loading,
    toasts,
    removeToast,
    handleFileSelect,
    handleInvalidFile,
    analyzeFollowers,
    canAnalyze: Boolean(followersFile && followingFile),
  };
}

export default useAnalyzer;
