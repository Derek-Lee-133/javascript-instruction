for (let fizz = 1; fizz <= 100; fizz += 1) {
    if ((fizz%3 + fizz%5)==0) {
        console.log("fizzbuzz")
    }
else if (fizz%5==0){console.log("buzz");
}
else if(fizz%3==0){ console.log("fizz");
}else {
    console.log(fizz)}
}
