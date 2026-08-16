//? Spreed operstor

const friends= ['Rahim','Karim'];
const schoolFriends=['Pintu','Mintu','Zontu']
const collegeFriends=['Bulbul','Moonmon'];

friends.push(...schoolFriends);
// console.log(friends) 
const userInfo={
    name:'Patwary',
    MobileNO: '239990'
    
}
const otherInfo={
    hobby: "Coding",
    travel:true
}

const userData={...userInfo,...otherInfo};

console.log(userData)

//**Rest */
const invitation=(...friends:string[])=>{

    friends.forEach((friend:String) => console.log(`Invitaion to ${friend}`))
}
invitation('pintu','cintu','montu');


