//? Union | Or
type  UserRole = 'admin' | 'user' | 'guest';

const getDashboard= (role:UserRole)=>{
    if(role="admin"){
        return 'Admin Dash Board';
    }else if(role= 'user'){
        return 'User Dash Board'
    } else{
        return 'Guest dashBoard'
    }
}

getDashboard('admin')

0//? Intersection  & all
type Employee={
    name:string;
    id:string;
    phoneNo: string;
}

type Manager={
    
    designation: string;
    teamSize:number;
}

type EmployeeAndManager= Employee & Manager;

const KhanShaeb: EmployeeAndManager={
    name:'Khan Bahadur',
    id: "4567",
    phoneNo:'09875',
    designation:'Supervisor',
    teamSize:43
}
