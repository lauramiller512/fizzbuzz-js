

// Here, we create our main function.
function fizzbuzz() {
    
    console.log('Welcome to FizzBuzz!');

    // n = parseInt(prompt("Please enter a number: "));
    var results = ['Buzz', 'Fizz', 'Bang', 'Fezz', 'Bong'];

    function reverseWords(str) {
        var words = [];
        words = str.match(/\S+/g);
        var result = "";
        for (var i = 0; i < words.length; i++) {
             result += words[i].split('').reverse().join('') + " ";
        }
        return result
    }

    for (let i = 1; i <= 100; i++) {
        let result = '';
        if (i % 3 === 0) result += 'Fizz';
        if (i % 5 === 0) result += 'Buzz';
        if (i % 7 === 0) result += 'Bang';
        else if (i % 17 === 0) reverseWords(result);
        console.log(result || i);

    };

}
// Now we run the main function...
fizzbuzz();
