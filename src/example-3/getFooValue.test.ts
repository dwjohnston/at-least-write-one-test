import { describe,expect,it} from "@jest/globals";
import { fooService, getFooValue } from "./getFooValue";

describe(getFooValue, () => {
    it("errors if the service function is not instantiated", () => {
        expect(async () => {
            await getFooValue("1");
        }).rejects.toThrow("not implemented");
    });

    it("sums the values", async () => {
        fooService._setFooValueFn(async () => {
            return {
                id: "1", 
                values: [1,2,3]
            }
        }); 

        const result = await getFooValue("1");
        expect(result).toBe(6);
    });
})