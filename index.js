// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name){
    cats.push(name);
}

function destructivelyPrependCat(name){
    cats.unshift(name);
}

function destructivelyRemoveLastCat(){
    cats.pop();
}

function destructivelyRemoveFirstCat(){
    cats.shift();
}

function appendCat(name){
    const newAppendedCats = [...cats, name];
    return newAppendedCats;
}

function prependCat(name){
    const newPrependedCats = [name, ...cats];
    return newPrependedCats;
}

function removeLastCat(){
    const newCats = cats.slice(0, -1);
    return newCats;
}

function removeFirstCat(){
    const newCats = cats.slice(1);
    return newCats;
}