//? array ,object

let bazerList: string[] = ["eggs", "potato", "milk", "suger", "Ata"];

bazerList.push("tomato");

let mixedArray: (string | number)[] = ["Alu", "begun", 67, "suger", 90];
mixedArray.push(89, "apple");

//** Tuple

let coordinates: [number, number] = [20, 30];

let couple: [string, string, boolean] = ["Amico", "Amica", true];

let student: [string, number] = ["Marco", 98];
student.push();

//? reference => object

const user: {
  //organization: "Heviweight Code";//literal type(when value use type of)
readonly organization: string;
  firstName: string;
  middleName?: string; // ? = optional type
  lastName: string;
  isCoder: boolean;
} = {
  firstName: "Chaine Coder",
  middleName: "HeavyWeight",
  lastName: "FullStack",
  isCoder: true,
  organization: "Heviweight Code",
};

//user.organization = "Let Coder";
