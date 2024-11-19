1. The significance of union and intersection types in Typescript.

Union and intersection types in TypeScript are powerful features. They help us define more flexible, precise, and reusable type definitions in our applications. 

Union Types (|):
A union type allows a value to be of one of several types. It is defined using the (|) symbol.
Example:
function myValue(value: string | number) {
    console.log(value);
}
myValue("Hello World"); // Valid
myValue(10); // Valid
myValue(true); // Error