// THIS IS THE ARRAY THAT THE FUNCTION WILL LOOP THROUGH
let prefixArrayOne = ["Given", "Give", "Gifted"];

let prefixArrayTwo = ["Pass", "Grace", "Word"];

let prefixFunction = (word) => {

    let prefix = word[0];

    if (!word || word.length === 0) return "";

    for (let i = 1; i < word.length; i++) {
        while (!word[i].startsWith(prefix)) {
            prefix = prefix.slice(0, -1);
            if (prefix === "") return "Not Found Any Prefixed Word"; 
        }
    }

    return prefix;
}

// IT COMPARES THE FIRST ARRAY TO BRING THE RESULT IF IT FINDS ANY PREFIX WORD
console.log(prefixFunction(prefixArrayOne))
// IT COMPARES THE SECOND ARRAY TO BRING THE RESULT IF IT DOES NOT FIND ANY PREFIX
console.log(prefixFunction(prefixArrayTwo))