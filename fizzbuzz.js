

// Here, we create our main function.
function fizzbuzz() {
    
    console.log('Welcome to FizzBuzz!');

    // n = parseInt(prompt("Please enter a number: "));
    var results = ['Buzz', 'Fizz', 'Bang', 'Fezz', 'Bong'];

    function reverseWords(str) {

        var words = str.split(/(?=[A-Z])/);
        var result = [];
        for (var i = 0; i < words.length; i++) {
             result.unshift(words[i]);
        }
        return result.join("")
    }

    for (let i = 1; i <= 255; i++) {
        if (i % 3|5|7|11|13) {
            let result = '';
            if (i % 3 === 0) result += 'Fizz';
            if (i % 5 === 0) result += 'Buzz';
            if (i % 11 === 0 && i % 3|5|7 == 0) result == 'Bong';
            if (i % 13 === 0) result += 'Fezz';
            if (i % 11 === 0 && i % 13 === 0) result += 'Bong'; 
            if (i % 7 === 0) result += 'Bang';
            if (i % 17 === 0) result = reverseWords(result);
            console.log(result || i);
        }
    };

}
// Now we run the main function...
fizzbuzz();
