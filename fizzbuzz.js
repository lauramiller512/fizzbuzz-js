

// Here, we create our main function.
function fizzbuzz() {
    
    console.log('Welcome to FizzBuzz!');

    // n = parseInt(prompt("Please enter a number: "));

    for (let i = 1; i <= 100; i++) {
        let result = '';
        if (i % 3 === 0) result += 'Fizz';
        if (i % 5 === 0) result += 'Buzz';
        if (i % 7 === 0) result += 'Bang';
        if (i % 11 === 0) result = 'Bong';
        console.log(result || i);

    };

}
// Now we run the main function...
fizzbuzz();
