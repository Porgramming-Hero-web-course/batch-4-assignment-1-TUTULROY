class Car {
    name: string
    model: string;
    year: number;

    constructor (name: string, model: string, age: number){
        this.name = name;
        this.model = model;
        this.year = age;
    }
    getCarAge(): number {
        const currentYear  = new Date().getFullYear();
        return currentYear - this.year;
    }
}

// const car = new Car("Honda", "Civic", 2012);
// console.log(car.getCarAge());