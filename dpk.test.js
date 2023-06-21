const { deterministicPartitionKey } = require("./dpk");

const crypto = require("crypto");

// Function to hash a string using SHA3-512 algorithm
const hashString = (data) => crypto.createHash("sha3-512").update(data).digest("hex");

describe("deterministicPartitionKey", () => {
  it("Returns the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey();
    expect(trivialKey).toBe("0");
  });

  it("Returns the provided partition key from the event object", () => {
    const event = { partitionKey: "custom-key" };
    const partitionKey = deterministicPartitionKey(event);
    expect(partitionKey).toBe("custom-key");
  });

  it("Returns a hash of the event JSON when no partition key is provided", () => {
    const event = { key: "value" };
    const expectedHash = hashString(JSON.stringify(event));
    const partitionKey = deterministicPartitionKey(event);
    expect(partitionKey).toBe(expectedHash);
  });

  // it("Returns a hash of the candidate when its length exceeds the maximum", () => {
  //   const longString = "a".repeat(300);
  //   const expectedHash = hashString(longString);
  //   const partitionKey = deterministicPartitionKey(longString);
  //   expect(partitionKey).toBe(expectedHash);
  // });

});
