<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Guess the Number Game</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background-color: #f0f0f0;
      margin: 0;
      padding: 0;
    }
    #app {
      max-width: 600px;
      margin: 50px auto;
      background-color: #fff;
      border-radius: 8px;
      padding: 20px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }
    header {
      text-align: center;
      margin-bottom: 20px;
    }
    main {
      text-align: center;
    }
    .input-container {
      margin-bottom: 20px;
    }
    input {
      padding: 8px;
      font-size: 16px;
      border-radius: 4px;
      border: 1px solid #ccc;
    }
    button {
      padding: 10px 20px;
      font-size: 16px;
      border-radius: 4px;
      background-color: #007bff;
      color: #fff;
      border: none;
      cursor: pointer;
    }
    button:hover {
      background-color: #0056b3;
    }
    p {
      font-size: 18px;
      margin-top: 0;
    }
  </style>
</head>
<body>
  <div id="app">
    <header>
      <h1>Guess the Number Game</h1>
    </header>
    <main>
      <div class="input-container">
        <label for="guess">Enter your guess (1-100):</label>
        <input type="number" id="guess" v-model="guess">
        <button @click="submitGuess">Submit</button>
      </div>
      <p v-if="resultMessage">{{ resultMessage }}</p>
    </main>
  </div>

  <script src="https://cdn.jsdelivr.net/npm/vue@2.6.14/dist/vue.js"></script>
  <script>
    new Vue({
      el: '#app',
      data: {
        randomNumber: Math.floor(Math.random() * 100) + 1,
        guess: null,
        resultMessage: ''
      },
      methods: {
        submitGuess() {
          if (this.guess === null || this.guess < 1 || this.guess > 100) {
            this.resultMessage = 'Please enter a valid number between 1 and 100.';
            return;
          }

          if (this.guess == this.randomNumber) {
            this.resultMessage = 'Congratulations! You guessed the correct number!';
          } else {
            this.resultMessage = this.guess > this.randomNumber ? 'Too high. Try again!' : 'Too low. Try again!';
          }
        }
      }
    });
  </script>
</body>
</html>

