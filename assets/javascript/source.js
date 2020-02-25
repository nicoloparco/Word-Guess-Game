var wordGuessGame = {

    // Object of all words that can be chosen, along with info such as their picture and a song clip.
    wordsToPick: {
        cardinals: {
            image: "https://sportslogohistory.com/wp-content/uploads/2017/12/arizona_cardinals_2005-pres.png",
            teamName: "Arizona Cardinals"
        },
        falcons: {
            image: "https://rfathead-res.cloudinary.com/image/upload/q_auto,f_auto/c_pad,h_3000/g_north,c_crop,h_3000,w_3000/c_pad,h_3000,w_3000/room/applied_icon/pool_images/NFL/AI-NFPO0203_Atlanta_Falcons_Logo_Giant_Officially_Licensed_Pool_Graphic_prod-all.jpg",
            teamName: "Atlanta Falcons"
        },
        ravens: {
            image: "https://i.pinimg.com/originals/85/a9/c5/85a9c5624ab4c210de3841e1e39e7730.jpg",
            teamName: "Baltimore Ravens"
        },
        bills: {
            image: "https://images-na.ssl-images-amazon.com/images/I/71IuIW7SPpL._AC_SX425_.jpg",
            teamName: "Buffalo Bills"
        },
        panthers: {
            image: "https://dks.scene7.com/is/image/dkscdn/19ASSUNFLPNTHRS12CAR_is?wid=685&fmt=jpg",
            teamName: "Carolina Panthers"
        },
        bears: {
            image: "https://images.homedepot-static.com/productImages/6ded15a8-56db-4b7a-b862-959c328734dc/svn/orange-applied-icon-wall-decals-nfop0603-64_1000.jpg",
            teamName: "Chicago Bears"
        },
        bengals: {
            image: "https://rfathead-res.cloudinary.com/image/upload/q_auto,f_auto/c_pad,h_900/g_north,c_crop,h_900,w_900/c_pad,h_900,w_900/room/applied_icon/pool_images/NFL/AI-NFPO0703_Cincinnati_Bengals_Logo_Giant_Officially_Licensed_Pool_Graphic_prod-all.jpg",
            teamName: "Cincinnati Bengals"
        },
        browns: {
            image: "https://usatftw.files.wordpress.com/2015/02/helmet_top_center1.png?w=1000",
            teamName: "Cleveland Browns"
        },
        cowboys: {
            image: "https://i.pinimg.com/originals/9b/d7/4f/9bd74fc0e9547d6da161c2c9c6e485e3.jpg",
            teamName: "Dallas Cowboys"
        },
        broncos: {
            image: "https://images-na.ssl-images-amazon.com/images/I/71n4eFBg87L._AC_SL1500_.jpg",
            teamName: "Denver Broncos"
        },
        lions: {
            image: "https://i.pinimg.com/originals/6f/4b/af/6f4baf1eeb3f109ba06048e39062f416.jpg",
            teamName: "Detroit Lions"
        },
        packers: {
            image: "https://images-na.ssl-images-amazon.com/images/I/51H4DWAOYwL._AC_SY355_.jpg",
            teamName: "Green Bay Packers"
        },
        texans: {
            image: "https://images-na.ssl-images-amazon.com/images/I/41hSIKVY73L._AC_SX425_.jpg",
            teamName: "Houston Texans"
        },
        colts: {
            image: "https://rfathead-res.cloudinary.com/image/upload/q_auto,f_auto/c_pad,h_3000/g_north,c_crop,h_3000,w_3000/c_pad,h_3000,w_3000/room/applied_icon/pool_images/NFL/AI-NFPO1403_Indianapolis_Colts_Logo_Giant_Officially_Licensed_Pool_Graphic_prod-all.jpg",
            teamName: "Indianapolis Colts"
        },
        jaguars: {
            image: "https://i.pinimg.com/originals/74/3e/42/743e429c9b2142330f2471be8ae885ff.png",
            teamName: "Jacksonville Jaguars"
        },
        chiefs: {
            image: "https://i.pinimg.com/originals/e6/7f/4f/e67f4fd39305d4c5fdd5d9b7ff3a629e.jpg",
            teamName: "Kansas City Chiefs"
        },
        chargers: {
            image: "https://rfathead-res.cloudinary.com/image/upload/q_auto,f_auto/c_pad,h_900/g_north,c_crop,h_900,w_900/c_pad,h_900,w_900/room/applied_icon/pool_images/NFL/AI-NFPO2703_Los_Angeles_Chargers_Logo_Giant_Officially_Licensed_Pool_Graphic_prod-all.jpg",
            teamName: "Los Angeles Chargers"
        },
        rams: {
            image: "https://images.fun.com/products/51410/1-1/nfl-los-angeles-rams-logo-foam-sign-update1.jpg",
            teamName: "Los Angeles Rams"
        },
        dolphins: {
            image: "https://images.homedepot-static.com/productImages/08a09b25-a938-4318-b5c9-dcffeebc9f05/svn/teal-applied-icon-wall-decals-nfop1803-64_1000.jpg",
            teamName: "Miami Dolphins"
        },
        vikings: {
            image: "https://rfathead-res.cloudinary.com/image/upload/q_auto,f_auto/c_pad,h_900/g_north,c_crop,h_900,w_900/c_pad,h_900,w_900/room/applied_icon/pool_images/NFL/AI-NFPO1903_Minnesota_Vikings_Logo_Giant_Officially_Licensed_Pool_Graphic_prod-all.jpg",
            teamName: "Minnesota Vikings"
        },
        patriots: {
            image: "https://i5.walmartimages.com/asr/b1abfa00-13e6-4e33-957d-e119fab40b48_1.d6fdb90d5d709fdd4b560811da1291d5.jpeg",
            teamName: "New England Patriots"
        },
        saints: {
            image: "https://fanatics.frgimages.com/FFImage/thumb.aspx?i=/productimages/_2746000/ff_2746583_full.jpg&w=900",
            teamName: "New Orleans Saints"
        },
        giants: {
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT0S4hmGZs87ChkEoKw6p7LMXMBrthELK7pfo_2p2LRdwz9lE_6",
            teamName: "New York Giants"
        },
        jets: {
            image: "https://cdn-profiles.tunein.com/s276408/images/logog.png",
            teamName: "New York Jets"
        },
        raiders: {
            image: "https://images.homedepot-static.com/productImages/c9123b60-dfbb-4171-a1db-f018f6b4202e/svn/team-adventure-furniture-wall-signs-n0843-oak-64_600.jpg",
            teamName: "Oakland Raiders"
        },
        eagles: {
            image: "https://images.homedepot-static.com/productImages/26120e54-c2df-4017-8d28-71dcf11193f2/svn/green-applied-icon-wall-decals-nfop2501-64_1000.jpg",
            teamName: "Philadelphia Eagles"
        },
        steelers: {
            image: "https://m.media-amazon.com/images/I/410hPrGu1RL._SR500,500_.jpg",
            teamName: "Pittsburgh Steelers"
        },
        niners: {
            image: "https://rfathead-res.cloudinary.com/image/upload/q_auto,f_auto/c_pad,h_3000/g_north,c_crop,h_3000,w_3000/c_pad,h_3000,w_3000/room/applied_icon/pool_images/NFL/AI-NFPO2803_San_Francisco_49ers_Logo_Giant_Officially_Licensed_Pool_Graphic_prod-all.jpg",
            teamName: "San Francisco 49ers"
        },
        seahawks: {
            image: "https://rfathead-res.cloudinary.com/image/upload/q_auto,f_auto/c_pad,h_900/g_north,c_crop,h_900,w_900/c_pad,h_900,w_900/room/applied_icon/pool_images/NFL/AI-NFPO2903_Seattle_Seahawks_Logo_Giant_Officially_Licensed_Pool_Graphic_prod-all.jpg",
            teamName: "Seattle Seahawks"
        },
        buccaneers: {
            image: "https://images.homedepot-static.com/productImages/c60e3818-fb32-4298-a6a1-76a6099619d9/svn/red-applied-icon-wall-decals-nfop3003-64_600.jpg",
            teamName: "Tampa Bay Buccaneers"
        },
        titans: {
            image: "https://rfathead-res.cloudinary.com/image/upload/q_auto,f_auto/c_pad,h_900/g_north,c_crop,h_900,w_900/c_pad,h_900,w_900/room/applied_icon/pool_images/NFL/AI-NFPO3103_Tennessee_Titans_Logo_Giant_Officially_Licensed_Pool_Graphic_prod-all.jpg",
            teamName: "Tennessee Titans"
        },
        redskins: {
            image: "https://rfathead-res.cloudinary.com/image/upload/q_auto,f_auto/c_pad,h_3000/g_north,c_crop,h_3000,w_3000/c_pad,h_3000,w_3000/room/applied_icon/pool_images/NFL/AI-NFPO3203_Washington_Redskins_Logo_Giant_Officially_Licensed_Pool_Graphic_prod-all.jpg",
            teamName: "Washington Redskins"
        }
    },
  
    // Variables that set the initial state of our wordGuess game.
    wordInPlay: null,
    lettersOfTheWord: [],
    matchedLetters: [],
    guessedLetters: [],
    guessesLeft: 0,
    totalGuesses: 0,
    letterGuessed: null,
    wins: 0,
  
    // The setupGame method is called when the page first loads.
    setupGame: function() {
      // Here we pick a random word.
      var objKeys = Object.keys(this.wordsToPick);
      this.wordInPlay = objKeys[Math.floor(Math.random() * objKeys.length)];
  
      // Split the chosen word up into its individual letters.
      this.lettersOfTheWord = this.wordInPlay.split("");
      // Builds the representation of the word we are trying to guess and displays it on the page.
      // At the start it will be all underscores since we haven't guessed any letters ("_ _ _ _").
      this.rebuildWordView();
      // This function sets the number of guesses the user gets, and renders it to the HTML.
      this.processUpdateTotalGuesses();
    },
  
    // This function is run whenever the user guesses a letter..
    updatePage: function(letter) {
      // If the user has no guesses left, restart the game.
      if (this.guessesLeft === 1) {
        this.restartGame();
      }
      // Otherwise...
      else {
        // Check for and handle incorrect guesses.
        this.updateGuesses(letter);
  
        // Check for and handle correct guesses.
        this.updateMatchedLetters(letter);
  
        // Rebuild the view of the word. Guessed letters are revealed, non-guessed letters have a "_".
        this.rebuildWordView();
  
        // If the user wins, restart the game.
        if (this.updateWins() === true) {
          this.restartGame();
        }
      }
  
    },
  
    // This function governs what happens when the user makes an incorrect guess (that they haven't guessed before).
    updateGuesses: function(letter) {
      // If the letter is not in the guessedLetters array, and the letter is not in the lettersOfTheWord array..
      if ((this.guessedLetters.indexOf(letter) === -1) && (this.lettersOfTheWord.indexOf(letter) === -1)) {
  
        // Add the letter to the guessedLetters array.
        this.guessedLetters.push(letter);
  
        // Decrease guesses by one.
        this.guessesLeft--;
  
        // Update guesses remaining and guesses letters on the page.
        document.querySelector("#guessesRemaining").innerHTML = this.guessesLeft;
        document.querySelector("#guessedLetters").innerHTML =
        this.guessedLetters.join(", ");
      }
    },
  
    // This function sets the initial guesses the user gets.
    processUpdateTotalGuesses: function() {
      // The user will get more guesses the longer the word is.
      this.totalGuesses = this.lettersOfTheWord.length + 5;
      this.guessesLeft = this.totalGuesses;
  
      // Render the guesses left to the page.
      document.querySelector("#guessesRemaining").innerHTML = this.guessesLeft;
    },
  
    // This function governs what happens if the user makes a successful guess.
    updateMatchedLetters: function(letter) {
      // Loop through the letters of the "solution".
      for (var i = 0; i < this.lettersOfTheWord.length; i++) {
        // If the guessed letter is in the solution, and we haven't guessed it already..
        if ((letter === this.lettersOfTheWord[i]) && (this.matchedLetters.indexOf(letter) === -1)) {
          // Push the newly guessed letter into the matchedLetters array.
          this.matchedLetters.push(letter);
        }
      }
    },
  
    // This function builds the display of the word that is currently being guessed.
    // For example, if we are trying to guess "blondie", it might display "bl_ndi_".
    rebuildWordView: function() {
      // We start with an empty string.
      var wordView = "";
  
      // Loop through the letters of the word we are trying to guess..
      for (var i = 0; i < this.lettersOfTheWord.length; i++) {
        // If the current letter has been guessed, display that letter.
        if (this.matchedLetters.indexOf(this.lettersOfTheWord[i]) !== -1) {
          wordView += this.lettersOfTheWord[i];
        }
        // If it hasn't been guessed, display a "_" instead.
        else {
          wordView += "&nbsp;_&nbsp;";
        }
      }
  
      // Update the page with the new string we built.
      document.querySelector("#wordToGuess").innerHTML = wordView;
    },
  
    // Function that "restarts" the game by resetting all of the variables.
    restartGame: function() {
      document.querySelector("#guessedLetters").innerHTML = "";
      this.wordInPlay = null;
      this.lettersOfTheWord = [];
      this.matchedLetters = [];
      this.guessedLetters = [];
      this.guessesLeft = 0;
      this.totalGuesses = 0;
      this.letterGuessed = null;
      this.setupGame();
      this.rebuildWordView();
    },
  
    // Function that checks to see if the user has won.
    updateWins: function() {
      var win;
  
      // this won't work for words with double or triple letters
      // var lettersOfTheWordClone = this.lettersOfTheWord.slice(); //clones the array
      // this.matchedLetters.sort().join('') == lettersOfTheWordClone.sort().join('')
  
      // If you haven't correctly guessed a letter in the word yet, we set win to false.
      if (this.matchedLetters.length === 0) {
        win = false;
      }
      // Otherwise, we set win to true.
      else {
        win = true;
      }
  
      // If a letter appears in the lettersOfTheWord array, but not in the matchedLetters array, set win to false.
      // In English, if you haven't yet guessed all the letters in the word, you don't win yet.
      for (var i = 0; i < this.lettersOfTheWord.length; i++) {
        if (this.matchedLetters.indexOf(this.lettersOfTheWord[i]) === -1) {
          win = false;
        }
      }
  
      // If win is true...
      if (win) {
  
        // Increment wins.
        this.wins = this.wins + 1;
  
        // Update wins on the page.
        document.querySelector("#wins").innerHTML = this.wins;
  
        // Update the image of the band on the page.
        document.querySelector("#teamLogo").innerHTML =
          "<img src=" +this.wordsToPick[this.wordInPlay].image + "/>"
  
        //Update the full team name on the page
        document.querySelector("#teamName").innerHTML =
        this.wordsToPick[this.wordInPlay].teamName

        // return true, which will trigger the restart of our game in the updatePage function.
        return true;
      }
      // If win is false, return false to the updatePage function. The game goes on!
      return false;
    }
  };
  
  // Initialize the game when the page loads.
  wordGuessGame.setupGame();
  
  // When a key is pressed..
  document.onkeyup = function(event) {
    // Check if the key pressed is a letter.
    if (event.keyCode >= 49 && event.keyCode <= 90) {
      // Capture pressed key and make it lowercase.
      wordGuessGame.letterGuessed = event.key.toLowerCase();
      // Pass the guessed letter into our updatePage function to run the game logic.
      wordGuessGame.updatePage(wordGuessGame.letterGuessed);
    }
    
  };
  