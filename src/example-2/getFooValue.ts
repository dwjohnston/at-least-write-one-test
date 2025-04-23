type Foo = {
    id: string; 
    values: Array<number>;
}


export async function getFooValue(fooId: string, getFooFn: (id: string) => Promise<Foo>) : Promise<number>{
    const json = await getFooFn(fooId);

    return json.values.reduce((acc, cur) => acc + cur, 0);
}