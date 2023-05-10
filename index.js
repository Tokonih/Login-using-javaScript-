let users = [
    { firstName: 'martha', lastNaame: "Jonas", age: 26, gender: "female", email: "tokonihstandwell@gmail.com", phone: "07048299390", location: "Abuja", maritalStatus: "single" },
    { firstName: 'Debby', lastName: "Chika", age: 46, gender: "female", email: "deddy@gmail.com", phone: "07048299390", location: "Delta", maritalStatus: "married" },
    { firstName: 'Gerald', lastName: "fakaa", age: 14, gender: "male", email: "badboyFaka@gmail.com", phone: "07048299390", location: "enugu", maritalStatus: "single" },
    { firstName: 'Bivan', lastName: "Nath", age: 20, gender: "male", email: "bivannath@gmail.com", phone: "07048299390", location: "Kaduna", maritalStatus: "married" },
    { firstName: 'kingsley', lastName: "man", age: 26, gender: "male", email: "kingsley@gmail.com", phone: "07048299390", location: "Edo", maritalStatus: "single" },
    { firstName: 'Jahnedu', lastName: "Ibekwuelu", age: 36, gender: "male", email: "Jahnedu@gmail.com", phone: "07048299390", location: "Anambra", maritalStatus: "single" },
    { firstName: 'Abdul', lastName: "Shakul", age: 19, gender: "male", email: "Abdulshakul@gmail.com", phone: "07048299390", location: "Zamfara", maritalStatus: "single" },
    { firstName: 'Aisha', lastName: "Shakul", age: 18, gender: "female", email: "Aisha@gmail.com", phone: "07048299390", location: "Abuja", maritalStatus: "single" },
    { firstName: "Alice", lastName: "Smith", age: 25, gender: "female", email: "alice@gmail.com", phone: "123-456-7890", location: "New York", maritalStatus: "single" },
    { firstName: "Bob", lastName: "Jones", age: 32, gender: "male", email: "bob@yahoo.com", phone: "987-654-3210", location: "Los Angeles", maritalStatus: "married" },
    { firstName: "Charlie", lastName: "Brown", age: 28, gender: "male", email: "charlie@outlook.com", phone: "555-555-5555", location: "Chicago", maritalStatus: "divorced" },
    { firstName: "David", lastName: "Lee", age: 30, gender: "male", email: "david@gmail.com", phone: "111-111-1111", location: "Boston", maritalStatus: "single" },
    { firstName: "Emma", lastName: "Watson", age: 31, gender: "female", email: "emma@outlook.com", phone: "222-222-2222", location: "London", maritalStatus: "married" },
    { firstName: "Frank", lastName: "Liu", age: 29, gender: "male", email: "frank@yahoo.com", phone: "333-333-3333", location: "San Francisco", maritalStatus: "divorced" },
    { firstName: "Grace", lastName: "Kim", age: 27, gender: "female", email: "grace@outlook.com", phone: "444-444-4444", location: "Seoul", maritalStatus: "single" },
    { firstName: "Harry", lastName: "Potter", age: 33, gender: "male", email: "harry@outlook.com", phone: "5555555555", location: "Hogwarts", maritalStatus: "married" },
    { firstName: "Irene", lastName: "Adler", age: 35, gender: "female", email: "irene@gmail.com", phone: "666-666-6666", location: "London", maritalStatus: "single" }

];

document.getElementById('btn').onclick = () => {
    let email = document.getElementById('email')
    let number = document.getElementById('number')

    let getUsers=  users.find((user) => {
        return user.email == email.value && user.phone == number.value
    })

    if (getUsers){
        alert('Login successful')
    }else alert('Invalid Email or Password')
}