// Tuple
let user: [number, string] = [1, "Ren"];
console.log(user)


// Enum
const enum Size { Small = 1, Medium, Large }
let mySize: Size = Size.Medium;
console.log(mySize)

// Function
function CalculateTax(income: number, taxYear = 2022): number {
    if (taxYear < 2022) return income * 1.2;
    return income * 1.3;
}

const calculateTax = CalculateTax(10_000, 2055);
console.log(calculateTax);

// Object & Type-Aliases
type Employee = {
    readonly id: number,
    name: string,
    retire: (date: Date) => void
}

let employee: Employee = {
    id: 1,
    name: "Ren",
    retire: (date: Date) => {
        console.log(date);
    }
}

console.log(employee.name);

// Union
function kgToLbs(weight: number | string): number {
    // Narrowing
    if (typeof weight === "number") return weight * 2.2
    else return parseInt(weight) * 2.2;
}

kgToLbs(10)
kgToLbs("10")

// Intersection
type Draggable = {
    drag: () => void
}

type Resizeable = {
    resize: () => void
}

type UIWidget = Draggable & Resizeable;

let textBox: UIWidget = {
    drag: () => {},
    resize: () => {}
}
console.log(textBox);

// Literal Types
type Quantity = 50 | 100;
let quantity: Quantity = 100;
console.log(quantity)


// Nullable Types
function greet(name: string | null | undefined){
    if(name) console.log(name.toUpperCase());
    else console.log("Hola!");
}

greet("Ren");
greet(null);
greet(undefined);


