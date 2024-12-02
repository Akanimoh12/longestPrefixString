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

console.log(prefixFunction(prefixArrayOne))

console.log(prefixFunction(prefixArrayTwo))