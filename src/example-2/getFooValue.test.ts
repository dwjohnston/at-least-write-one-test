import { describe,expect,it} from "@jest/globals";
import { getFooValue } from "./getFooValue";

describe(getFooValue, () => {

    it("sums the values", async () => {
        const result = await getFooValue("1", async () => {
            return {
                id: '1',
                values: [1,2,3],
            }
        });  

        expect(result).toBe(6);
    })
});
