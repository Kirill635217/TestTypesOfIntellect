var BRAINYMO = BRAINYMO || {};
var generatedCards = new Array(16);
var allQuestionsText = new Array(16);
var buttons;
var generatedQuestionTexts;
var clickedTimes = 0;
// 0 - лінгвістичний, 1 - логіко-мат, 2 - музичний, 3 - кінстч, 4 - візуаль, 5 - міжособ, 6 - внутршн, 7 - природний 
var typesOfintelligence = new Array(0, 0, 0, 0, 0, 0, 0, 0);

function sendEmail() {       console.log("mail");
    Email.send({
      Host: "smtp.gmail.com",
      Username: "thega.connorr@gmail.com",
      Password: "landmarker587",
      To: 'kirill.developer49@gmail.com',
      From: "thega.connorr@gmail.com",
      Subject: "Sending Email using javascript",
      Body: "Well that was easy!!",
    })
      .then(function (message) {
        alert("mail sent unsuccessfully")
      });
  }

  function changeText(){

  }

BRAINYMO.Game = (function() {
  
    var activeCards = [];
    var numOfCards;
    var cardHitCounter = 0;
    var card;
    // var timer;
    var storage;
    // var points = 10;

    /**
     * Method that will be invoked on card click
     */
    function handleCardClick() {
        // if(points <= 0)
        //     return;
        var connection = $(this).data('connection');
        var hit;

        // Set card in active state
        // 'this' needs to be attached to context of card which is clicked
        if ( !$(this).hasClass('active') ) {
            $(this).addClass('active');
            activeCards.push($(this));

            // // If user click on two cards then check
            // if (activeCards.length == 2) {
            //     hit = checkActiveCards(activeCards);
            // }

            // if (hit === true) {
            //     cardHitCounter++;
            //     activeCards[0].add(activeCards[1]).unbind().addClass('wobble cursor-default');
            //     activeCards = [];

            //     // Game End
            //     if(cardHitCounter === (numOfCards / 2)) {
            //         // Reset active cards
            //         activeCards = [];
            //         // Reset counter
            //         cardHitCounter = 0;
            //         // End game
            //         endGame();
            //     }
            // }
            // else if(hit === false){
                // points--;
                // document.getElementById("points").textContent=points + "";
                // if(points === 0)
                //     endGame();
            // }
            // In case when user open more then 2 cards then automatically close first two
            // else if(activeCards.length === 3) {
            //     for(var i = 0; i < activeCards.length - 1; i++) {
            //         activeCards[i].removeClass('active');
            //     }
            //     activeCards.splice(0, 2);
            // }
        }
    }

    function endGame() {
        // timer.stopTimer();
        // Retrieve current time
        // var time = timer.retrieveTime();

        // Retrieve time from storage
        // var timeFromStorage = storage.retrieveBestTime();
        // if there's already time saved in storage check if it's better than current one
        // if (timeFromStorage != undefined && timeFromStorage != '' && points > 0) {
        //     // if current game time is better than one saved in store then save new one
        //     if (time.minutes < timeFromStorage.minutes || (time.minutes == timeFromStorage.minutes && time.seconds < timeFromStorage.seconds) ) {
        //         storage.setBestTime(time);
        //     }
        // }
        // // else if time is not saved in storage save it
        // else if(points > 0){
        //     storage.setBestTime(time);
        // }
        // var restartButton = document.getElementById("btn-start");
        // restartButton.remove();
        // Update best time
        // timer.updateBestTime();
        // var delayInMilliseconds =3500000; 

        // setTimeout(function() { 
        //     refreshPage();
        //     }, delayInMilliseconds);
    }



    function refreshPage(){
        location.reload();
    }

    function checkActiveCards(connections) {
        // return connections[0].data('connection') === connections[1].data('connection');
    }

    return function(config) {

        /**
         * Main method for game initialization
         */
        this.startGame = function() {
            // points = 10;
            card = new BRAINYMO.Card();
            // timer = new BRAINYMO.Timer();
            storage = new BRAINYMO.Storage();
            numOfCards = config.cards.length;
            console.log(generatedCards[1]);
            console.log(generatedCards);
            // storage.setBestTime(null);
            // card.attachCardEvent(handleCardClick, config);
        };

        /**
         * After game initialization call this method in order to generate cards
         */
        this.generateCardSet = function() 
        {
            document.getElementById("btn-start").classList.toggle('hideShow');
            // Generate new card set
            card.generateCards(config.cards);
            console.log("1h");
            // Reset active cards array
            activeCards = [];
            var cards = document.getElementsByClassName("back");
            if(cards.length === allQuestionsText.length){
            for (var i = 0, len = cards.length; i < len; i++) {
                console.log(i);
                generatedCards[i] = cards[i];
                generatedCards[i].classList.add('active');
                console.log(generatedCards[i]);
            }
            buttons = document.getElementsByClassName("button-1");
            generatedQuestionTexts = document.getElementsByClassName("questionTexts");
            generatedQuestionTextss = document.getElementsByClassName("questionText");
            console.log(buttons.length);
            for (var i = 0, len = generatedQuestionTexts.length; i < len; i++) {
                console.log(i);
                generatedQuestionTexts[i].
                textContent == 
                generatedQuestionTextss[i].textContent; 
                console.log(generatedQuestionTexts[i].textContent);
                console.log(generatedQuestionTextss[i].textContent);    
            }
            // var j = 0;
            // buttons[0].onclick = function(){
            //     console.log("here");
            //     if(j < buttons.length){
            //         buttons[j+1].scrollIntoView();
            //         console.log("clicked " + buttons[j] + " " + j);}
            //         j++;
            // }
            for (var i = 0, len = buttons.length; i < len; i++) {
                console.log(buttons[i]);
                if(i != 0)
                    buttons[i].classList.toggle('hideShow');
                // buttons[i].onclick = clicked(i);
                    // if(i == 0)
                    // {
                    //     console.log("clicked " + buttons[i] + " " + i);
                    //     buttons[1].scrollIntoView();
                    // }else{
                    //     console.log(i);
                    //     buttons[17-i].scrollIntoView();
                    // }
                }
        }
            // if(document.getElementById("btn-start").textContent==="Заново"){
            //     refreshPage();}
            // Reset timer
            // timer.stopTimer();
            // Set timer
            // timer.startTimer();
        };

        this.startGame();
    }
})();

function clicked(button, intelligence, points){
    console.log(clickedTimes);
    if(clickedTimes+1 < buttons.length){
        buttons[clickedTimes+1].classList.toggle('hideShow');
        buttons[clickedTimes+1].scrollIntoView({
            behavior: 'auto',
            block: 'center',
            inline: 'center'
        });
        button.classList.toggle('hideShow')
        clickedTimes++;
    }else if(clickedTimes+1 == buttons.length){
        buttons[0].classList.toggle('hideShow');
        buttons[0].scrollIntoView({
            behavior: 'auto',
            block: 'center',
            inline: 'center'
        });
        button.classList.toggle('hideShow');
        clickedTimes = 0;
    }
    typesOfintelligence[intelligence] += points;
    console.log(typesOfintelligence[intelligence]);
}
// function onClicked(){
//     buttons[0].scrollIntoView();
// }

function hideShow (){
    document.getElementById('rick').classList.toggle('hideShow')
}


BRAINYMO.Card = (function () {

    // Private variables
    var $cardsContainer = $('.cards-container');
    var $cardTemplate = $('#card-template');

    /**
     * Private method
     * Take card template from DOM and update it with card data
     * @param {Object} card - card object
     * @return {Object} template - jquery object
     */
    function prepareCardTemplate (card) {
        var template = $cardTemplate
                            .clone()
                            .removeAttr('id')
                            .removeClass('hide')
                            .attr('data-connection', card.connectionID);

        // If card has background image
        if (card.backImg != '' && card.backImg != undefined) {
            template.find('.front').css({
                'background': 'url(' + card.backImg + ') no-repeat center center',
                'background-size': 'cover'
            });
        }
        // Else if card has no background image but has text
        else if (card.backTxt != '' && card.backTxt != undefined) {
            console.log("wygwtfxuguxa");    
            template.find('.front > label').html(card.backTxt);
        }

        return template;
    }

    /**
     * Private method
     * Method for random shuffling array
     * @param {Object} cardsArray - array of card objects
     * @return {Object} returns random shuffled array
     */
    function shuffleCards(cardsArray) {
        var currentIndex = cardsArray.length, temporaryValue, randomIndex;
        while (0 !== currentIndex) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            temporaryValue = cardsArray[currentIndex];
            cardsArray[currentIndex] = cardsArray[randomIndex];
            cardsArray[randomIndex] = temporaryValue;
        }

        return cardsArray;
    }
    
    return function() {

        /**
         * Public method
         * Prepare all cards and insert them into DOM
         * Before inserting new set of cards method will erase all previous cards
         * @param {Object} cards - array of card objects
         */
        this.generateCards = function(cards) {
            var templates = [];
            var preparedTemplate;
            var index = 0;
            // Prepare every card and push it to array
            cards.forEach(function (card) {
                preparedTemplate = prepareCardTemplate(card);
                console.log(card)
                allQuestionsText[index] = card.backTxt;
                index++;
                templates.push(preparedTemplate);
            });

            // Shuffle card array
            templates = shuffleCards(templates);

            // Hide and empty card container
            $cardsContainer.hide().empty();

            // Append all cards to cards container
            templates.forEach(function(card) {
                $cardsContainer.append(card);
            });

            // Show card container
            $cardsContainer.fadeIn('slow');
            console.log("2h");
        };

        /**
         * Public method
         * Attach click event on every card
         * Before inserting new set of cards method will erase all previous cards
         * @param {Function} func - function that will be invoked on card click
         */
        this.attachCardEvent = function(func) {
            // $cardsContainer.unbind().on('click', '.flip-container', function() {
            //     func.call(this);
            };
        }
    }
    )();

// BRAINYMO.Timer = (function() {

//     var $timer = $('.timer');
//     var $seconds = $timer.find('#seconds');
//     var $minutes = $timer.find('#minutes');
//     var $bestTimeContainer = $timer.find('.time');


//     var minutes, seconds;
    
//     function decorateNumber(value) {
//         return value > 9 ? value : '0' + value;
//     }

//     return function() {
//         var interval;
//         var storage = new BRAINYMO.Storage();
        
//         this.startTimer = function() {
//             var sec = 0;
//             var bestTime;

//             // Set timer interval
//             interval = setInterval( function() {
//                 seconds = ++sec % 60;
//                 minutes = parseInt(sec / 60, 10);
//                 $seconds.html(decorateNumber(seconds));
//                 $minutes.html(decorateNumber(minutes));
//             }, 1000);

//             // Show timer
//             $timer.delay(1000).fadeIn();

//             this.updateBestTime();
//         };

//         this.updateBestTime = function() {
//             // Check if user have saved best game time
//             bestTime = storage.retrieveBestTime();
//             if(bestTime != undefined && bestTime != '') {
//                 $bestTimeContainer
//                     .find('#bestTime')
//                     .text(bestTime.minutes + ':' + bestTime.seconds)
//                     .end()
//                     .fadeIn();
//             }
//         };
        
//         this.stopTimer = function() {
//             clearInterval(interval);  
//         };

//         this.retrieveTime = function() {
//             return {
//                 minutes: decorateNumber(minutes),
//                 seconds: decorateNumber(seconds)
//             }
//         };
//     }
// })();


BRAINYMO.Storage = (function() {

    return function() {

        /**
         * Save best time to localStorage
         * key = 'bestTime'
         * @param {Object} time - object with keys: 'minutes', 'seconds'
         */
        this.setBestTime = function(time) {
            localStorage.setItem('bestTime', JSON.stringify(time));
        };

        /**
         * Retrieve best time from localStorage
         */
        this.retrieveBestTime = function() {
            return JSON.parse(localStorage.getItem('bestTime'));
        };

    }
})();



// Game init
$(function() {
  
        var brainymo = new BRAINYMO.Game({
            cards: [
                {
                    backTxt: ("Я лгу очень убедительно"),
                    connectionID: 1
                },
                {
                    backTxt: ('У меня дома много фотографий и картин'),
                    connectionID: 1
                },
                {
                    backTxt: './Assets/6.png',
                    connectionID: 2
                },
                {
                    backTxt:  './Assets/3.1.png',
                    connectionID: 2
                },
                {
                    backTxt: './Assets/6.1.png',
                    connectionID: 3
                },
                {
                    backTxt: './Assets/5.png',
                    connectionID: 3
                },
                {
                    backTxt: './Assets/5.1.png',
                    connectionID: 4
                },
                {
                    backTxt: './Assets/3.png',
                    connectionID: 4
                },
                {
                    backTxt: './Assets/2.png',
                    connectionID: 5
                },
                {
                    backTxt: './Assets/1.1.png', 
                    connectionID: 5
                },
                {
                    backTxt: './Assets/4.png',
                    connectionID: 6
                },
                {
                    backTxt: './Assets/8.1.png',
                    connectionID: 6
                },
                {
                    backTxt: './Assets/8.png',
                    connectionID: 7
                },
                {
                    backTxt: './Assets/7.1.png',
                    connectionID: 7
                },
                {
                    backTxt: './Assets/2.1.png',
                    connectionID: 8
                },
                {
                    backTxt: './Assets/1.png',
                    connectionID: 8
                },
            ]
        });
        // allQuestionsText = new Array(brainymo.cards.length);

        $('#btn-start').click(function() {
            brainymo.generateCardSet();
            $(this).text('Заново');
        });
    });