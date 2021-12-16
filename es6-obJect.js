let cars = { brand: "Toyots",
 color: "red",
 year: 2010,


 fullName : function(){
    return `${this.brand} : ${this.year}`;
},
};

cars.color = "blue";
console.log(cars.color);

const x = cars;
x.year = 2020; 
console.log(cars.year);


//
const number = [10,20,30];
const [a, b] = number;
console.log(b);

const { bran,color,year } = cars;
console.log(year);
