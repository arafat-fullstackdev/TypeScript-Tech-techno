//? Array Destructure
const user={
    id: 456,

    name:{
        firstName:'Lalmia',
        middleName:'Sarder',
        lastName:'Canmia'
   },
   gender:'male',
   favouriteColor:'blue',
   info:{
    isAdmin:true,
    coder:'CPP'
   }

}

// const myColor= user.favouriteColor;

//destructure

const {favouriteColor, name:{middleName:myName}}= user
//const {isAdmin:roleAdmin} = user.info 
console.log(myName)
//console.log(user)

//? object Destructure

const friends =['karim','rahim','monte']

const [A,B,Besti]=friends;
console.log(Besti)