const crypto = require("crypto");

// Function to hash a string using SHA3-512 algorithm
const hashString = (data) => crypto.createHash("sha3-512").update(data).digest("hex");

// Function to determine the partition key
exports.deterministicPartitionKey = (event) => {
  const TRIVIAL_PARTITION_KEY = "0";
  const MAX_PARTITION_KEY_LENGTH = 256;

  // If the event is falsy, return the trivial partition key
  if (!event) {
    return TRIVIAL_PARTITION_KEY;
  }

  // Check if the event has a partition key, otherwise hash the event JSON
  const candidate = event.partitionKey ? event.partitionKey : hashString(JSON.stringify(event));

  // If the candidate is not a string, stringify it
  if (typeof candidate !== "string") {
    candidate = JSON.stringify(candidate);
  }

  // If the candidate length exceeds the maximum, hash it
  if (candidate.length > MAX_PARTITION_KEY_LENGTH) {
    return hashString(candidate);
  }

  // Return the candidate as the partition key
  return candidate;
};
