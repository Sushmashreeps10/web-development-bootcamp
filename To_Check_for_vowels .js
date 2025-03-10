// create through functions
function vowels(str){
    let alp =0;
    for(const char of str){
        if(char === "a" || char === "e" || char === "i" || char === "o" || char === "u"){
            alp++;
        }
    }
    return(alp);
}

const res = vowels("sushma");
console.log(res);
----------------------------------------------------------------------------------------------
// create through arraw function

const var = (str){
  let alp =0;
    for(const char of str){
        if(char === "a" || char === "e" || char === "i" || char === "o" || char === "u"){
            alp++;
        }
    }
    return(alp);
}
  }
const res = vowels("sushma");
console.log(res);
  

