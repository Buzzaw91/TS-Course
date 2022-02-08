class Vehicle {
    constructor(public color: string) {
        this.color = color;
    }

    protected honk(): void {
        console.log('Honk honk!');
    }
}

const vehicle = new Vehicle('Green');

console.log('Vehicle.color:', vehicle.color);


class Car extends Vehicle {
    constructor(public wheels: number, color: string) {
        super(color);
    }

    private drive(): void {
        console.log('Vrooom!');
    }

    public startDrivingProcess(): void {
        this.honk();
        this.drive();
    }
}

const car = new Car(4, 'Blue');

console.log(car.color);
console.log(car.wheels);
console.log(car.startDrivingProcess());
