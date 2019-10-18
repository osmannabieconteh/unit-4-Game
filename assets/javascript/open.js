
$(document).ready(function() {


    var yourMatchingNumber = 0;
  
    
    var randomNum = randomNumGen();

    var wins = 0;
    var losses = 0;
    var crystals;
  
    
    function randomNumCrystals() {
      
      return {
        red: {
          points: Math.floor(Math.random() * 12) + 1,
          imageUrl: "assets/images/red3.jpg"
        },
        blue: {
          points: Math.floor(Math.random() * 12) + 1,
          imageUrl: "assets/images/blue2.jpg"
        },  
        yellow: {
          points: Math.floor(Math.random() * 12) + 1,
          imageUrl: "assets/images/yell0w4.jpg"
        },
        green: {
          points: Math.floor(Math.random() * 12) + 1,
          imageUrl: "assets/images/green1.jpg"
        }
      };
    }
  
    
    function randomNumGen() {
      return Math.floor(Math.random() * 102) + 19;
    }
  
    
    function setGame() {
      
      yourMatchingNumber = 0;
      
      crystals = randomNumCrystals();
      
      randomNum = randomNumGen();
      $("#random-area").text(randomNum);
    }
  
    
    function updateDom(didUserWin) {
      $("#win-area").empty();
  
      
      if (didUserWin === true) {

        $("#win-area").append($("<p>").text("You won!!"));
        setGame();
        renderMatchingNumber();
      }
      
      else if (didUserWin === false) {
    
        $("#win-area").append($("<p>").text("You lost!!"));
        setGame();
        renderMatchingNumber();
      }
  
      
      var wSpan = $("<span>").text(wins);
      var lSpan = $("<span>").text(losses);
  
      var pWins = $("<p>").text("Wins: ");
      var pLosses = $("<p>").text("Losses: ");
  
      pWins.append(wSpan);
      pLosses.append(lSpan);
  
      $("#win-area").append(pWins);
      $("#win-area").append(pLosses);
    }
  
    
    function renderCrystals() {
      for (var key in crystals) {
        var crystalDiv = $("<div class='crystals-button' data-name='" + key + "'>");
        var crystalImg = $("<img alt='image' class='crystal-img'>").attr("src", crystals[key].imageUrl);
        crystalDiv.append(crystalImg);
        $("#crystal-area").append(crystalDiv);
      }
    }
  
    
    function updateMatchingNumber(crystal) {
      
      yourMatchingNumber += crystals[crystal.attr("data-name")].points;
    }
  
    
    function renderMatchingNumber() {
      var scoreNumDiv = $("<div id='score-number'>").text(yourMatchingNumber);
      $("#score-area").html();
      $("#score-area").html(scoreNumDiv);
    }
  
    
    setGame();
    updateDom();
    renderCrystals();
    renderMatchingNumber();
  
    
    $(".crystals-button").on("click", function(event) {
      
      updateMatchingNumber($(this));
      renderMatchingNumber();
  
      
      if (yourMatchingNumber === randomNum) {
        
        wins++;
        setGame();
        updateDom(true);
      }
    
      else if (yourMatchingNumber > randomNum) {
        
        losses++;
        setGame();
        updateDom(false);
      }
    });
  
  });
  