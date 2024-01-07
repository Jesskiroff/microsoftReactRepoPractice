//react components are designed to be reuseable units. To enable reuse, components allow for data to be passed into them through properties or props.
// you will find urself working w collections of data stored in a na array. Although working w an array is similar to working w any other obj, u need the ability to loop through the data and display it to the user.
// ^ u do this by using JS code (the map funvtion in particular) in the JSX
// map allows u to create a modified copy of an array. this is useful when u need to convert the values of an array for display purposes. To diplay values to a user, u take the value and embed it inside an HTML element. This is a perfect job for map.
// With map, u can create a new array that consists of HTML containing individual values in the array for display

const numbers = [2, 5, 8];
const squared = numbers.map((number) => {
    return number * number;
});
console.log(squared);
// Output: [4, 25, 64]

const squaredA = numbers.map((number, index) => {
    console.log(`Processing item ${index + 1}`);
    return number * number;
});