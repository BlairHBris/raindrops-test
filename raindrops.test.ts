import { convert } from "./raindrops";

describe("Simple tests for the convert function", () => {
    it("deals with 3", () => {
        const result = convert(3)
        expect(result).toEqual("Pling")
    })
    it("deals with 5", () => {
        const result = convert(5)
        expect(result).toEqual("Plang")
    })
    it("deals with 7", () => {
        const result = convert(7)
        expect(result).toEqual("Plong")
    })
})

describe("Complex tests for the convert function", () => {
    it("deals with 3", () => {
        const result = convert(9)
        expect(result).toEqual("Pling")
    })
    it("deals with 5", () => {
        const result = convert(10)
        expect(result).toEqual("Plang")
    })
    it("deals with 7", () => {
        const result = convert(14)
        expect(result).toEqual("Plong")
    })
})

describe("Combination tests for the convert function", () => {
    it("deals with 3", () => {
        const result = convert(15)
        expect(result).toEqual("PlingPlang")
    })
    it("deals with 5", () => {
        const result = convert(35)
        expect(result).toEqual("PlangPlong")
    })
})