/* WDW_Javascript Notes
Maggie_Z
This is the block
comment syntax!!!!!!!
*/


//javascript def variable by the opening
var message="hello"
// var types: number, string, bool, object ({}), function, undefined

//In js, there is truthiness
//lack of things/undefined is falsy, otherwise true
var val=1 //truthy

if (x%2==0){
    console.log("even");
}else{
    console.log("odd")
}

if (val){
    console.log("yes!")
}

//Abstract equality
//resolves type difference
3=="3" --> True
//Strict equality: returns false if types are different
3==="3" --> False

//Loops
for (var i=1; i<=10; i++){ //++ --> i=i+1
    console.log(i);
}
//very similar to a while loop actually

//function
function add(x,y){
    return x+y
}

//anonymous function
//set the function, then assign it to name: multiply
var multiply=function(x,y){
    return x*y
}

//Object: mapping between keys and values (python dict!)
var coord={
    x:5, //keys are implicitly defined as str (x-->"x")
    y:-3
}
//Call values:
coord.x OR coord["x"]

var myPerson={
    name: "Jane",
    age: 29,
    eat: function(food){
        console.log(this.name+"ate"+food) //this: refer to this instance
    }
};

console.log(myPerson["bday"]) //undefined
myPerson["bday"]: 7/14/2000

//Constructors
function Person(name,age){
    this.name=name;
    this.age=age;
}


//!!!Interaction with DOM: document object model
Document-->Root elem
            -->head
            -->body

//
document.getElementById(ID) //get the element from the over-arching doc
"myPara".innerHTML
"myPara".onclick 

//Misc
|| --> OR


