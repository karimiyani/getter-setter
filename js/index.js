//Getter and Setter

const person = {
    name : "gomnam",
    lastName : "gomnaman",
};
console.log(`${person.name} ${person.lastName}`);
// gomnam gomnaman

// think about when we need alot of that
console.log(`${person.name} ${person.lastName}`);
console.log(`${person.name} ${person.lastName}`);
console.log(`${person.name} ${person.lastName}`);
console.log(`${person.name} ${person.lastName}`);
console.log(`${person.name} ${person.lastName}`);
// gomnam gomnaman
// gomnam gomnaman
// gomnam gomnaman
// gomnam gomnaman
// gomnam gomnaman
// ??this is bad way??
console.log("************");

const person2 = {
    name : "gomnam",
    lastName : "gomnaman",
    fullName : function () {
        console.log(`${person.name} ${person.lastName}`);
    },
};
person2.fullName();
// gomnam gomnaman


// in ES6 we can write ...
const person3 = {
    name : "gomnam",
    lastName : "gomnaman",
    fullName(){
        console.log(`${person.name} ${person.lastName}`);
    },
};
person3.fullName();
// gomnam gomnaman


// 1.person.fullName ==>>  getter access to data
const person4 = {
    name : "gomnam",
    lastName : "gomnaman",
    get fullName(){
        console.log(`${person.name} ${person.lastName}`);
    },
};
person4.fullName;
// gomnam gomnaman
//this is readonly just


// how we can mutate and change date?
const person5 = {
    name : "gomnam",
    lastName : "gomnaman",
    get fullName(){
        console.log(`${person.name} ${person.lastName}`);
    },
    set fullName (value){
        console.log (value);
    },
};
person5.fullName;
person5.fullName = "amar amaran";
// gomnam gomnaman
// amar amaran