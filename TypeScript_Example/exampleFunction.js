var people = [
    { name: "John Lee", age: 30 },
    { name: "Marry Burner", age: 25 },
    { name: "Harry Kill", age: 35 },
];
//Function to filter proplr who are at least 30 years old
function filterAdults(persons) {
    return persons.filter(function (person) {
        person.age >= 30;
    });
}
// using function and logging the result
var adults = filterAdults(people);
console.log(adults);
