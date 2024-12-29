function calculateSum() {
    const input = prompt("Enter a number between 0 and 1 million:");
    const number = Number(input);

    if (number < 0 || number > 1000000 || isNaN(number)) {
        alert("Invalid number");
    } else {
        let sum = 0;
        for (let i = 1; i <= number; i++) {
            sum += i;
        }
        alert(`Sum of numbers up to ${number} is ${sum}`);
    }
}

calculateSum();