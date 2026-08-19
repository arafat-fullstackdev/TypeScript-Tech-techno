// Type Alias
type User={
      id:number;
      name:{
        firstName: string;
        lastName:string;
      };
      gender: 'male'|'female';
      contactNo: string;
      address:{
        division:string;
        city:string;
      };
}


const user1: User={

    id:123,
    name:{
        firstName:'Mr. tong',
        lastName:'tong',
    },
    gender:'male',
    contactNo:'01286',
    address:{
    division:'Çomilla',
    city:'Chouddagram'
    },

};

//? user 2
const user2:User={
      
    id:123,
    name:{
        firstName:'Mr. tong',
        lastName:'tong',
    },
    gender:'male',
    contactNo:'01286',
    address:{
    division:'Çomilla',
    city:'Chouddagram'
    },

};

// 
type IsAdmin= boolean;
const isAdmin:IsAdmin= true;

type Name= string;
const myName:Name= 'Hablu Programmer'

//? function

type AddFunction=(num1:number,num2:number)=> number;
const add:AddFunction=(num1,num2)=> num1 + num2;