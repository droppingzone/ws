import { describe, expect, it } from "vitest";
import { greeting } from "../src/lib/greeting";

describe("greeting", () => {
    it("greets a name", () => {
        expect(greeting("Maria")).toBe("Hello, Maria");
    });

    it("handles an empty name", () => {
        expect(greeting("")).toBe("Hello, ");
    });
});


