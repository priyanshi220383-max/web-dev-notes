let user={
    name:"Priyanshi Bisht",
    address:"New Delhi",
    favcolor:"Purple",
    dumbo: function(){
        return "dumbo"
    }
}
 console.log("My name is " + user.name+". My fav person is "+user.favcolor[1],user.dumbo());
// string literals
// console.log(`My name is ${user.name}. My fav person is ${user.favcolor[1]}`)

const car = {
    make: "Mahindra",
    model: "Thar"
};
//  Object.seal(car)
//  in seal we can't add a new key value but we can change or update the values
 Object.freeze(car)
// in freeze we can't add a new key value also can't change or update the values
 car.model = "XUV"
car.color = "Purple";
console.log(car)