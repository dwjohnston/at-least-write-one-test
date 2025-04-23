type Foo = {
    id: string; 
    values: Array<number>;
}

class FooService {

    public getFooValue(fooId: string) : Promise<Foo> {
        throw new Error("not implemented");
    }

    public _setFooValueFn(fn: (fooId: string) => Promise<Foo>) {
        this.getFooValue = fn;
    }
}

export const fooService = new FooService();

export async function getFooValue(fooId: string) : Promise<number>{
    const json = await fooService.getFooValue(fooId);  
    
    return json.values.reduce((acc, cur) => acc + cur, 0);
}