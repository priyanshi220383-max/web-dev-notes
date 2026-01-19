// Q1 reverse the array by using push and pop method
// sol let array=[1,2,3,4]
// let reverse = []
// while (array.length>0){
//     reverse.push(array.pop())
// }
// console.log(reverse);
// Q2. remove all the negative elements for the following aray
// let arr = [5,-7,12,-6,-13,15,2]
// let positive = []
// while (arr.length>0){
//     let val = arr.shift();
//     if(val>0){
//         positive.push(val);
//     }
// }
// console.log(positive);
// Q3 palindrome series by above 4 methods
let arr=[1,2,1]
let arr2=[]
let reverse=[]
// push given array elements into arr2 array
for(let i=0;i<arr.length;i++){
    arr2.push(arr[i])
}
// reverse the given array
while(arr.length>0){
    reverse.push(arr.pop())

}
for(let i=0;i<arr2.length;i++){
    if(original[i !== reverse[i]]){
        return("not a palindrome");

    }
}
return(palindrome);

