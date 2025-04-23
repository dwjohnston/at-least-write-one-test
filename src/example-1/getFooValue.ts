type Foo = {
    id: string; 
    values: Array<number>;
}


export async function getFooValue(fooId: string) : Promise<number>{
    const res = await fetch(`https://example.com/foo/${fooId}`); 
    const json = await res.json() as Foo; 

    return json.values.reduce((acc, cur) => acc + cur, 0);
}