//? Function
//* arrow function, normal function

function  add(num1:number,num2:number):number{
    return num1 + num2;
}

add(45,98);

const addArrow =(num1:number,num2:number):number => num1 + num2;
 addArrow(56,99);

 // method declar => define function inside object
const busyUser={
    name: 'busyMan',
    balance:0,

    addBalance(newBalance:number){
        const totalBalance= this.balance + newBalance;
        return totalBalance;

    }
}

busyUser.addBalance(20000);

//call back function

const arrNumber: number[]=[1,2,34,7];

const sqrArray= arrNumber.map((element:number): number=> element*element);

