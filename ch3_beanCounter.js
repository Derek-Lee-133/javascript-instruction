function countBs(str) {
    let count = 0;
    for (var i = 0; i < str.length; i++) {
        if (str.charAt(i) === "B") {
            count++;

        }
    }
        return (count); 
}



console.log(countBs("BBBBBBBuC"));

function countChar(str , charAt){
let count = 0;
for (var i = 0; i < str.length; i++) {
    if (str.charAt(i) === charAt) {
        count++;

    }
}
    return (count); 
}

console.log(countChar("DEREKLEE", "E"))
