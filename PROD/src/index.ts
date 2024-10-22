// Class

// Example-1

class User {
  name: string;
  email: string;
  constructor(name: string, email: string) {
    this.name = name;
    this.email = email;
  }
}

const user1 = new User("Debarshi", "email@email.com");

// Example-2

class User2 {
  name: string;
  email: string;
  password: string = "";
  city: string; // since city has type = string and we are not initializing city property in the constructor so error occurs
  constructor(name: string, email: string) {
    this.name = name;
    this.email = email;
  }
}

// Example-3

class User3 {
  name: string;
  email: string;
  city: string = "";
  constructor(name: string, email: string) {
    this.name = name;
    this.email = email;
  }
}

const user3 = new User3("debarshi", "email");
user3.city = "Kolkata";

// Example-4

class User4 {
  name: string;
  email: string;
  readonly city: string = "";
  state?: string; // state property is optional -> not mandatory to initialize it in the class definition or constructor
  constructor(name: string, email: string) {
    this.name = name;
    this.email = email;
  }
}

const user4 = new User4("debarshi", "email");
user4.city = "Kolkata"; // since city property was set as readonly in the class definition so error occurs when we try to modify it

// Public, private and protected modifiers
// By default every property and method inside a TS class is public

class User5 {
  name: string;
  private email: string; // marking email as private makes it accessible only within this class definition block scope only, not even a child that extends User5 class can access the private properties/methods
  protected dob: string;
  readonly city: string = "";
  state?: string; // state property is optional -> not mandatory to initialize it in the class definition or constructor
  constructor(name: string, email: string, dob: string) {
    this.name = name;
    this.email = email;
    this.dob = dob;
  }
  private privateMethod(): string {
    return "Inside privateMethod";
  }
}

let user5: User5 = new User5("debarshi", "email", "dob");
user5.email = "debarshi.email"; // error occurs since email is marked as private
user5.privateMethod(); // error occurs since privateMethod() is marked as private

class SubUser5 extends User5 {
  githubId?: string;
  set setEmail(userEmail: string) {
    this.email = userEmail; // here this.email refers to the private "email" property defined inside User5, to access properties/methods within a class or within the inherited classes only we should mark those properties/methods as protected
  }
  set setDob(dob: string) {
    this.dob = dob; // since dob was marked as protected so no error occurs here
  }
}

let subUser1: SubUser5 = new SubUser5("debarshi", "email", "dob");
subUser1.dob = "updated-dob"; // since dob property is protected so it is accessible only within User5 and it's children classes

// Getters and setters

class User6 {
  name: string;
  private email: string; // marking email as private makes it accessible only within this class definition block scope only
  readonly city: string = "";
  state?: string; // state property is optional -> not mandatory to initialize it in the class definition or constructor
  constructor(name: string, email: string) {
    this.name = name;
    this.email = email;
  }
  get getName(): string {
    return this.name;
  }

  get getEmail(): string {
    return this.email;
  }

  //   In TS we should not explicitly set return type on a setter
  set setEmail(userEmail): void {
    this.email = userEmail;
  }

  set setEmail1(userEmail: string) {
    this.email = userEmail;
  }
}

// Real life usecase of Interfaces
// Scenario: If we want to use the device camera then there must be some bare minimum guidelines/protocols for using it properly -> create an interface for device's camera

interface Camera {
  photoMode: boolean;
  burstMode: string;
  shutterClicks: number;
}

interface DeviceLocation {
  location: string;
}

// Now if Facebook app wants to use the device camera then they should implement the Camera interface as follows:

class Facebook implements Camera {} // since the bare minimum requirements of Camera interface are not followed here so error occurs

class Facebook2 implements Camera {
  photoMode: boolean;
  burstMode: string;
  shutterClicks: number;
  constructor(photoMode: boolean, burstMode: string, shutterClicks: number) {
    this.photoMode = photoMode;
    this.burstMode = burstMode;
    this.shutterClicks = shutterClicks;
  }
}

// Now if FacebookStory wants to use the device camera and add additional functionality to it then it can do it as follows:
// since FacebookStory class also implements DeviceLocation interface so we need to include the bare minimum requirements of DeviceLocation interface as well
class FacebookStory implements Camera, DeviceLocation {
  photoMode: boolean;
  burstMode: string;
  shutterClicks: number;
  isStoryCreated: boolean; // additional property that FacebookStory class needs
  constructor(
    photoMode: boolean,
    burstMode: string,
    shutterClicks: number,
    isStoryCreated: boolean
  ) {
    this.photoMode = photoMode;
    this.burstMode = burstMode;
    this.shutterClicks = shutterClicks;
    this.isStoryCreated = isStoryCreated;
  }
  //   additional method that FacebookStory class needs
  createStory(): void {
    console.log("story created!");
  }
}

// bare minimum of DeviceLocation interface followed so no errors
class FacebookStory2 implements Camera, DeviceLocation {
  photoMode: boolean;
  burstMode: string;
  shutterClicks: number;
  location: string;
  isStoryCreated: boolean; // additional property that FacebookStory class needs
  constructor(
    photoMode: boolean,
    burstMode: string,
    shutterClicks: number,
    location: string,
    isStoryCreated: boolean
  ) {
    this.photoMode = photoMode;
    this.burstMode = burstMode;
    this.shutterClicks = shutterClicks;
    this.location = location;
    this.isStoryCreated = isStoryCreated;
  }
  //   additional method that FacebookStory class needs
  createStory(): void {
    console.log("story created!");
  }
}

// Abstract classes and methods

abstract class AbstractClass1 {
  //   only creating a skeleton class for other classes to inherit
  photoMode: string;
  videoMode: boolean;
  constructor(photoMode: string, videoMode: boolean) {
    this.photoMode = photoMode;
    this.videoMode = videoMode;
  }
  abstract takePhoto(): void;
  getReelTime(): number {
    // some logic
    return 1;
  }
}

// now if I try to create object of AbstractClass1 then TS engine will throw error
const abstractObj1: AbstractClass1 = new AbstractClass1("photoMode", true);

// the only way to use the abstract class is by inheriting/extending it -> while inheriting the abstract I will need to make sure all properties and functions defined in the abstract class are defined by the child class
class Instagram extends AbstractClass1 {
  constructor(
    public photoMode: string,
    public videoMode: boolean,
    public burstMode: string
  ) {
    super(photoMode, videoMode);
  }
  public takePhoto(): void {
    console.log("photo taken!");
  }
}

const instaObj1 = new Instagram("insta photoMode", true, "insta burstMode");
instaObj1.takePhoto();
instaObj1.getReelTime();

// overloading the getReelTime() method by child class of AbstractClass1
class Facebook3 extends AbstractClass1 {
  constructor(
    public photoMode: string,
    public videoMode: boolean,
    public portraitModeCount: number
  ) {
    super(photoMode, videoMode);
  }
  public takePhoto(): void {
    console.log("photo taken");
  }
  // takePortrait() method is specific to this class
  public takePortrait(): number {
    console.log(this.portraitModeCount);
    return 1;
  }
  // method overloading
  public getReelTime(): number {
    return 100;
  }
}

// Generics: consider the scenario where we have a function that will return different types of data. Also the function accepts the same type of data as argument.
// We can achieve above functionality using below code:
function genericFun1(arg1: string): string {
  return `hello world ${arg1}`;
}

// Now to extend genericFun1 by making it accept different types of argument and also return the same type we can either use the "|" operator and define 1-by-1 all the types that it can accept:
function genericFun2(
  arg1: string | number | boolean | Instagram
): string | number | Instagram {
  return `hello world ${arg1}`;
}
// or we can use the keyword "any":
function genericFun3(arg1: any): any {
  return `hello world ${arg1}`;
}
// but use of any is not recommended as it defeats the purpose of having strong type checking. To factor in all these, generics are used as follows:
function genericFun4<Type>(arg1: Type): Type {
  return arg1;
}

genericFun4(3); // accepting a number and returning a number
genericFun4("3"); // accepting a string and returning a string
genericFun4(new Instagram("photo mode", true, "burst mode")); // accepting an object of type Instagram and returning an object of type Instagram
