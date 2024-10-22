"use strict";
// Class
// Example-1
class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
}
const user1 = new User("Debarshi", "email@email.com");
// Example-2
class User2 {
    constructor(name, email) {
        this.password = "";
        this.name = name;
        this.email = email;
    }
}
// Example-3
class User3 {
    constructor(name, email) {
        this.city = "";
        this.name = name;
        this.email = email;
    }
}
const user3 = new User3("debarshi", "email");
user3.city = "Kolkata";
// Example-4
class User4 {
    constructor(name, email) {
        this.city = "";
        this.name = name;
        this.email = email;
    }
}
const user4 = new User4("debarshi", "email");
user4.city = "Kolkata"; // since city property was set as readonly in the class definition so error occurs when we try to modify it
// Public, private and protected modifiers
// By default every property and method inside a TS class is public
class User5 {
    constructor(name, email, dob) {
        this.city = "";
        this.name = name;
        this.email = email;
        this.dob = dob;
    }
    privateMethod() {
        return "Inside privateMethod";
    }
}
let user5 = new User5("debarshi", "email", "dob");
user5.email = "debarshi.email"; // error occurs since email is marked as private
user5.privateMethod(); // error occurs since privateMethod() is marked as private
class SubUser5 extends User5 {
    set setEmail(userEmail) {
        this.email = userEmail; // here this.email refers to the private "email" property defined inside User5, to access properties/methods within a class or within the inherited classes only we should mark those properties/methods as protected
    }
    set setDob(dob) {
        this.dob = dob; // since dob was marked as protected so no error occurs here
    }
}
let subUser1 = new SubUser5("debarshi", "email", "dob");
subUser1.dob = "updated-dob"; // since dob property is protected so it is accessible only within User5 and it's children classes
// Getters and setters
class User6 {
    constructor(name, email) {
        this.city = "";
        this.name = name;
        this.email = email;
    }
    get getName() {
        return this.name;
    }
    get getEmail() {
        return this.email;
    }
    //   In TS we should not explicitly set return type on a setter
    set setEmail(userEmail): void {
        this.email = userEmail;
    }
    set setEmail1(userEmail) {
        this.email = userEmail;
    }
}
// Now if Facebook app wants to use the device camera then they should implement the Camera interface as follows:
class Facebook {
} // since the bare minimum requirements of Camera interface are not followed here so error occurs
class Facebook2 {
    constructor(photoMode, burstMode, shutterClicks) {
        this.photoMode = photoMode;
        this.burstMode = burstMode;
        this.shutterClicks = shutterClicks;
    }
}
// Now if FacebookStory wants to use the device camera and add additional functionality to it then it can do it as follows:
// since FacebookStory class also implements DeviceLocation interface so we need to include the bare minimum requirements of DeviceLocation interface as well
class FacebookStory {
    constructor(photoMode, burstMode, shutterClicks, isStoryCreated) {
        this.photoMode = photoMode;
        this.burstMode = burstMode;
        this.shutterClicks = shutterClicks;
        this.isStoryCreated = isStoryCreated;
    }
    //   additional method that FacebookStory class needs
    createStory() {
        console.log("story created!");
    }
}
// bare minimum of DeviceLocation interface followed so no errors
class FacebookStory2 {
    constructor(photoMode, burstMode, shutterClicks, location, isStoryCreated) {
        this.photoMode = photoMode;
        this.burstMode = burstMode;
        this.shutterClicks = shutterClicks;
        this.location = location;
        this.isStoryCreated = isStoryCreated;
    }
    //   additional method that FacebookStory class needs
    createStory() {
        console.log("story created!");
    }
}
// Abstract classes and methods
class AbstractClass1 {
    constructor(photoMode, videoMode) {
        this.photoMode = photoMode;
        this.videoMode = videoMode;
    }
}
