import { safeJsonParse } from "./safe-json-parse";

describe("safe-json-parse", () => {
  it("normal", () => {
    const str = JSON.stringify({ data: "hello" });
    const res = safeJsonParse(str);
    expect(res.data).toBe("hello");
  });

  it("error", () => {
    const res = safeJsonParse("{", { data: "hello" });
    expect(res.data).toBe("hello");
  });
});
