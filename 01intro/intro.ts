// type aliases

// Example-1

type User = {
  name: string;
  email: string;
  password: string;
  age: number;
  isActive: boolean;
};

function createUser(user: User): string {
  return "";
}

let user1: User = {
  name: "Debarshi",
  email: "debarshi@email.com",
  password: "pwd",
  age: 20,
  isActive: true,
};

createUser(user1);
// Example-2

type Order = {
  orderId: number;
  orderedBy: User;
};

function createOrder(order: Order): boolean {
  return true;
}

let order1: Order = {
  orderId: 1234,
  orderedBy: user1,
};

createOrder(order1);

// Concatenating multiple type aliases into a single type aliase

type cardNumber = {
  cardNumber: number;
};

type cardDate = {
  cardDate: string;
};

type cardDetails = cardNumber &
  cardDate & {
    cvvNumber: number;
  };

let card1: cardDetails = {
  cardNumber: 1234,
  cardDate: "01/01",
  cvvNumber: 222,
};

// Arrays in TS

const arr1 = []; // here type of arr1 is never
arr1.push("hello"); // this line of code will give error since arr1 can "never" store anything

const arr2: string[] = []; // to declare an array which can store only string elements
arr2.push("elem1");

const arr3: Array<string> = [];
arr3.push("str3");

const userArr: User[] = [];
userArr.push(user1);

const twoDArr: number[][] = [[1, 2, 3], []];

// Union

// Example-1

let unionTypeVar1: number | string = 1;
unionTypeVar1 = "1";

// Example-2

let unionTypeVar2: number | string | boolean = 1;
unionTypeVar2 = false;
unionTypeVar2 = "true";

// Example-3

let aliaseUnionVar1: User | Order = order1;
aliaseUnionVar1 = user1;

// Example-4

let aliaseUnionVar2: string | User = "hello";
aliaseUnionVar2 = user1;

// Example-5
function fun1(val: number): number | string {
  if (val > 1) return 2;
  return "2";
}

// Example-6
const arrUnion1: string[] | number[] = ["1", "2"];
const arrUnion2: string[] | number[] = ["1", 2];
const arrUnion3: (string | number)[] = ["1", 2];
const arrUnion4: (string | number | number[])[] = ["1", 2, [1, 2, 3]];
const arrUnion5: (string | number | number[])[] = ["1", 2, [1, 2, 3], ["1"]];

// Example-7

let seatAllotment: "aisle" | "window" | "middle";
seatAllotment = "aisle";
seatAllotment = "window";
seatAllotment = "middle";
seatAllotment = "crew"; // cannot do this!
