import "mocha";
import "should";
import "assert";
import { safeJsonParse } from "./safe-json-parse";

describe("safe-json-parse", () => {
  it("normal", () => {
    const str = JSON.stringify({ data: "hello" });
    const res = safeJsonParse(str);
    res.data.should.equal("hello");
  });

  it("error", () => {
    const res = safeJsonParse("{", { data: "hello" });
    res.data.should.equal("hello");
  });
});
