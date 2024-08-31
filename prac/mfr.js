const users = [
    {
          name: 'Aleeha',
      age: 20,
      cars: [
          {
            make: 'Toyota',
          model: 2021,
          variant: 'Swift'
        },
          {
            make: 'Suzuki',
          model: 2021,
          variant: 'Cultus'
        },
          {
            make: 'Honda',
          model: 2021,
          variant: 'Civic'
        },
      ]
    }, 
    {
          name: 'Umair',
      age: 25,
      cars: [
          {
            make: 'Toyota',
          model: 2021,
          variant: 'Swift'
        },
          {
            make: 'Suzuki',
          model: 2021,
          variant: 'Cultus'
        },
          {
            make: 'Honda',
          model: 2024,
          variant: 'Civic'
        },
      ]
    }
  ]
// user names
  const userNames = users.map(user => user.name);
console.log(userNames); 

// users who have a car model from the year = 2024
const usersWith2024Cars = users.filter(user =>
    user.cars.some(car => car.model === 2024)
  );
  console.log(usersWith2024Cars);


  //get the names of users who own a car from the year 2024:
  const namesWith2024Cars = users
  .filter(user => user.cars.some(car => car.model === 2024))
  .map(user => user.name);

console.log(namesWith2024Cars); 


// Reduce function
let array = [2,3,4,5,6] 
const add = (a,b)=> a+b;
console.log(array.reduce(add));
