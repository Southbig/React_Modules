export type ArrayUnion<T extends ReadonlyArray<any>> = T[number];

export type ObjectUnion<T extends {[k: string]: unknown}> = T[keyof T];

export type Union<T> = T extends {[k:string]: unknown} ? ObjectUnion<T> : T extends ReadonlyArray<any> ? ArrayUnion<T> : never;