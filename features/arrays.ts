const carMakers = ['ford', 'tesla', 'GM'];
const dates = [new Date(), new Date()];

const carsByMake: string[][] = [];

// Help with inference when extracting values
const car = carMakers[0];
const myCar = carMakers.pop();

// Prevent incompatible values
carMakers.push(50);

// Help with 'map'
carMakers.map((car: string): string => {
    return car;
});

// Flexible types
const importantDates: (Date | string)[] = [];
importantDates.push('1991-03-13');
importantDates.push(new Date());