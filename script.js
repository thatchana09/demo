<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Prime Number Calculator</title>
    <script>
        // Function to check if a number is prime
        function isPrime(num) {
            if (num <= 1) return false; // 1 and numbers less than 1 are not prime
            for (let i = 2; i <= Math.sqrt(num); i++) {
                if (num % i === 0) return false; // If divisible by i, not prime
            }
            return true;
        }

        // Function to display prime numbers up to a given limit
        function findPrimeNumbers(limit) {
            let primeNumbers = [];
            for (let i = 2; i <= limit; i++) {
                if (isPrime(i)) {
                    primeNumbers.push(i);
                }
            }
            return primeNumbers;
        }

        // Function to handle form submission and display the prime numbers
        function calculatePrimes() {
            const limit = parseInt(document.getElementById('limit').value);
            if (isNaN(limit) || limit <= 1) {
                alert('Please enter a valid number greater than 1');
                return;
            }
            const primes = findPrimeNumbers(limit);
            document.getElementById('result').innerHTML = `Prime numbers up to ${limit}: <br> ${primes.join(', ')}`;
        }
    </script>
</head>
<body>
    <h1>Prime Number Calculator</h1>
    <label for="limit">Enter the limit:</label>
    <input type="number" id="limit" placeholder="Enter a number">
    <button onclick="calculatePrimes()">Find Primes</button>

    <div id="result"></div>
</body>
</html>
