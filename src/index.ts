let user: [number, string] = [1, "Ren"];
console.log(user)

const enum Size { Small = 1, Medium, Large }
let mySize: Size = Size.Medium;
console.log(mySize)

function CalculateTax (income: number, taxYear= 2022) : number {
    if (taxYear < 2022) return income * 1.2;
    return income * 1.3;
}

const calculateTax = CalculateTax(10_000, 2055);
console.log(calculateTax);
