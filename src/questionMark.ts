//? ? :Ternary operator 
//? ?? :Nulish coalesing  operator 
//? ?.optional chaining operator 

const eligibleVoter=(age:number)=>{
    // if(age>= 21){
    //     console.log('Eligible for Voating')
    // }else{
    //     console.log('Not eligible')
    // }
    //* using ternary operator
    const eligibleAge= age >=21 ?'You are eligible for voating'
    : 'You are not eligible for voating';

// console.log(eligibleAge)
};
eligibleVoter(27)

// todo Nulist 
const userThem = "Blue them";
const selectTheme= userThem ?? 'Light Mode';
// console.log(selectTheme); 

//? nulish

const isAuthenticated= '';

const resultWithTernary= isAuthenticated ? isAuthenticated: "Your are guest";
const resultWithNulish= isAuthenticated ?? "You are guest";

console.log({resultWithTernary},{resultWithNulish})
