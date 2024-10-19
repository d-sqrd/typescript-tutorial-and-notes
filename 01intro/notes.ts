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

// Example-3: readonly and optional properties inside a type aliase

type User2 = {
  readonly dbId: string;
  email: string;
  password: string;
  creditCardDetails?: boolean; // ? signifies this an optional property
};

let user2: User2 = {
  dbId: "13213",
  email: "email@email.com",
  password: "password", // here not filling in the creditCardDetails and still not getting error
};

user2.dbId = "89324"; // since dbId property was readonly so not allowed to change it's value

// Example-4: adding functions to a type alise

type User3 = {
  readonly dbId: string;
  email: string;
  password: string;
  creditCardDetails?: boolean; // ? signifies this an optional property
  trialUser: () => string; // return type of trialUser function is set to string
  getCouponCode(): string | number; // return type set to string or number; just another way of declaring a function property inside a type aliase
};

let user3: User3 = {
  dbId: "13213",
  email: "email@email.com",
  password: "password", // here not filling in the creditCardDetails and still not getting error
  trialUser: () => {
    return "hello";
  },
};

user3 = {
  dbId: "13213",
  email: "email@email.com",
  password: "password", // here not filling in the creditCardDetails and still not getting error
  // in case of functions as well the corresponding property name should match with the one mentioned in the type aliase
  trial1User: () => {
    return "hello";
  },
};

type User4 = {
  readonly dbId: string;
  email: string;
  password: string;
  creditCardDetails?: boolean; // ? signifies this an optional property
  trialUser: () => string | number; // return type of trialUser function is set to string or a number
};

type User5 = {
  readonly dbId: string;
  email: string;
  password: string;
  creditCardDetails?: boolean; // ? signifies this an optional property
  trialUser: (
    arg0: string,
    arg1: string | number,
    arg2: User3
  ) => string | number; // return type of trialUser function is set to string or a number; function signature defined
};

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

// Tuples
// it is specific to TS only, not present in JS
// if we need an array which can hold different element types and the order in which the elements are present in the array should also be maintained everytime that's where tuple comes in

// Example-1
let tupArr: [string, number, boolean] = ["hello", 123, true]; // order is maintained so no error
tupArr = [123, "hello", true]; // order not maintained
tupArr = ["hello123", 59234, false];

// Example-2
type TupleArr = [number, string];
let tupArr2: TupleArr = [12, "hello"];
tupArr2 = ["yellow", 56];

// Enums
// used for restricting choices to a given set, for example seats in an aeroplane(we can only have aisle, middle or window seats)

// Example-1

enum SeatChoice1 {
  AISLE, // here TS engine will default AISLE value to 0 and for the subsequent elements after this increase the default by 1
  MIDDLE, // default value = 1
  WINDOW, // default value = 2
}

const seat1 = SeatChoice.AISLE; // here seat1 will be of Type SeatChoice.AISLE

// Example-2

enum SeatChoice2 {
  AISLE, // default value = 0
  MIDDLE = 4, // no default value since it's value is initialized
  WINDOW, // default value = 5
}

// Example-3

enum SeatChoice3 {
  AISLE = "aisle",
  MIDDLE, // since the element before this element is of type = string so we need to initialize the subsequent elements
  WINDOW,
}

// Example-4

enum SeatChoice4 {
  AISLE = "aisle",
  MIDDLE = "middle", // compared to Example-3 above no errors here
  WINDOW = "window",
}

// Example-5

enum SeatChoice5 {
  AISLE = "aisle",
  MIDDLE = 4, // compared to Example-3 above no errors here
  WINDOW, // default value = 5
}

// Interface

interface UserInterface {
  readonly dbId: number;
  email: string;
  userId: number;
  googleId?: string;
  startTrial(): string;
  getCoupon(couponName: string, val: number): number;
}

interface UserInterface2 {
  readonly dbId: number;
  email: string;
  userId: number;
  googleId?: string;
  startTrial(): string;
  getCoupon(couponName: string, val: number): number;
}

// interface allows us to add properties to an existing interface -> this is re-opening of the UserInterface interface
interface UserInterface {
  githubId: string;
}

let user6: UserInterface = {
  dbId: 1234,
  email: "email@email.com",
  userId: 35454,
  startTrial: () => {
    return "Trial started!";
  },
  getCoupon: (name: "value", value: 123123) => {
    return 34234;
  },
  githubId: "git-13123-sdfsdf",
};

// inheritance in interfaces

interface Admin extends UserInterface, UserInterface2 {
  role: "admin" | "security" | "subordinate";
}

let adminUser: Admin = {
  dbId: 1234,
  email: "email@email.com",
  userId: 35454,
  startTrial: () => {
    return "Trial started!";
  },
  getCoupon: (name: "value", value: 123123) => {
    return 34234;
  },
  githubId: "git-13123-sdfsdf",
  role: "admin",
};
