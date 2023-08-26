//ADD SET VALUE

let data = new Set();
data.add(67);
data.add(87);
data.add(89);
console.log(data.size); //check the size of set 


let myset = new Set();
myset.add(45);
myset.add(13);
myset.add(67);
myset.add(87);
myset.add(16);

myset.delete(13); //delete set value
console.log(myset.has(13)); //(check exists value in set)


for(let setvalue of myset){
    console.log(setvalue); // (iterate of the set value)
}


// CONVERT AN AARAY IN set

const arr = ['a', 'a', 'b', 'c', 'c'];

const set = new Set(arr);

console.log(set); 
