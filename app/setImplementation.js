

let a = new Set();
a.add(5);
a.add(43);
a.add("Wohoo");
a.add({x:50, y:200});

let numbers = [5,6,7,10,45];
let numSet = new Set(numbers);

export function printSet(){
    console.log(a);
    console.log("Size of an set is " +a.size);    

    console.log("Set has 5 " +a.has(5));
    console.log("Set has 7 " +a.has(7));

    console.log(numSet);

    for(let element of numSet.values()){
        console.log(element);
    }

    
}

