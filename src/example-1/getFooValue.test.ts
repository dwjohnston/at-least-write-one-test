import { describe,expect,it} from "@jest/globals";
import { getFooValue } from "./getFooValue";

import { http, HttpResponse } from 'msw'
import { setupServer } from 'msw/node'


describe(getFooValue, () => {

    it("sums the values", async () => {

        const handlers = [
            http.get('https://example.com/foo/1', () => {
                return HttpResponse.json({
                   id: '1',
                   values: [1,2,3],
                })
            }),
        ]; 

        const server = setupServer(...handlers);
        server.listen();


        const result = await getFooValue("1"); 
        expect(result).toBe(6);

    })
});
