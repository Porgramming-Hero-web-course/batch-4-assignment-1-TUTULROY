
The significance of union and intersection types in Typescript?

Union type:

A union type is a type where a variable can be of more than one type.
This is usually useful when there are more than one possible type for a variable.
The advantage of union type is that variables can hold different types of values, so code is more flexible.

code: 

let value: string | number;
value = "Hello";
value = 123;

Intersection type: 

A Intersection type joins two or more types to create a new type, where a variable must contain all the properties of both types.
The advantage of intersection is that it allows multiple type properties to be applied together, making the object's type specification more explicit.

code:

type Person {
    name: string,
    age: number
}

type Student {
    studentId: number
}

let Roy: Person & Student = {
    name: "Tutul",
    age: 25,
    studentId: 01406
}

The Union type is used for alternating types, and the Intersection type is used for combining multiple types.Both together make typescript simple and powerful.