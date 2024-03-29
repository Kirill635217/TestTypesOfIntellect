var BRAINYMO = BRAINYMO || {};
var generatedCards = new Array(16);
var generatedCardsBrain;
var generatedQuestionsTexts;
var buttonsContainer;
var buttonsInteractable;
var questionRoundsCompleted = 0;
// 0 - лінгвістичний, 1 - логіко-мат, 2 - музичний, 3 - кінстч, 4 - візуаль, 5 - міжособ, 6 - внутршн, 7 - природний 
var typesOfintelligence = new Array(0, 0, 0, 0, 0, 0, 0, 0);

function sendEmail() {       console.log("mail");
    Email.send({
      Host: "smtp.elasticemail.com",
      Username: "thega.connorr@gmail.com",
      Password: "855193F15B1A23F9B3D5F12F49C2259575B3",
      To: 'kirill.developer49@gmail.com',
      From: "thega.connorr@gmail.com",
      Subject: "Тест на визначення типу інтелекта",
      Body: "Лінгвістичний: " + typesOfintelligence[0] + ". Логіко-математичний: " + typesOfintelligence[1] + ". Музичний: " + typesOfintelligence[2] + ". Кінестетичний: " + typesOfintelligence[3] + ". Візуально-просторовий: " + typesOfintelligence[4] + ". Міжособистістний: " + typesOfintelligence[5] + ". Внутрішньоособистістний: " + typesOfintelligence[6] + ". Природничий: " + typesOfintelligence[7],
    })
      .then(function (message) {
        console.log("mail sent unsuccessfully");
      });
  }

  function endTest(){
      console.log("endtest");
        sendEmail();
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
            generatedCardsBrain = new Array(config.cards.length);
            for (var i = 0, len = generatedCardsBrain.length; i < len; i++) {
                generatedCardsBrain[i] = config.cards[i];
                console.log("added " + config.cards[i] + " #" + i);
            }
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
            var cardsToGenerate = new Array(10);
            for (var i = 0, len = cardsToGenerate.length; i < len; i++) {
                cardsToGenerate[i] = config.cards[i];
            }
            card.generateCards(cardsToGenerate);
            console.log(cardsToGenerate);
            console.log("1rst");
            // Reset active cards array
            activeCards = [];
            var cards = document.getElementsByClassName("back");
            if(cards.length > 1){
            for (var i = 0, len = cards.length; i < len; i++) {
                console.log(i);
                generatedCards[i] = cards[i];
                console.log(generatedCards[i]);
            }
            buttonsContainer = document.getElementsByClassName("buttonContainer");
            buttonsInteractable = document.getElementsByClassName("buttonsInteractable");
            generatedQuestionsTexts = document.getElementsByClassName("questionText");
            // var j = 0;
            // buttons[0].onclick = function(){
            //     console.log("here");
            //     if(j < buttons.length){
            //         buttons[j+1].scrollIntoView();
            //         console.log("clicked " + buttons[j] + " " + j);}
            //         j++;
            // }
            for (var i = 0, len = generatedQuestionsTexts.length; i < len; i++) {
                generatedQuestionsTexts[i].innerHTML = generatedCardsBrain[i].backTxt;
            }
            for (var i = 0, len = buttonsContainer.length; i < len; i++) {
                buttonsContainer[i].id = "btnContainer" + i;
                if(i > 0)
                    buttonsInteractable[i].classList.toggle('hideShow');
                console.log(generatedQuestionsTexts[i]);
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

function clicked(button, points){
    console.log(button);
    console.log(buttonsContainer[1]);
    let str = button.id;
    var index = parseInt(str.replace("btnContainer", ""), 10);    
    console.log(index);
    if(index+1 < buttonsContainer.length){
        var child = buttonsContainer[index+1].firstElementChild;
        child.scrollIntoView({
            behavior: 'auto',
            block: 'center',
            inline: 'center'
        });
        buttonsInteractable[index].classList.toggle('hideShow');
        buttonsInteractable[index+1].classList.toggle('hideShow');
    }else{
        if(index+1 + questionRoundsCompleted * 10 < generatedCardsBrain.length){
        var child = buttonsContainer[0].firstElementChild;
        child.scrollIntoView({
            behavior: 'auto',
            block: 'center',
            inline: 'center'
        });
        buttonsInteractable[index].classList.toggle('hideShow');
        buttonsInteractable[0].classList.toggle('hideShow');
        questionRoundsCompleted++;
        nextQuestionRound();
    }else{
        buttonsInteractable[index].classList.toggle('hideShow');
    }
    }
    console.log(generatedCards[generatedCards.length-1] + " " + generatedCards.length);
    typesOfintelligence[generatedCardsBrain[index].connectionID] += points;
    for (var i = 0, len = typesOfintelligence.length; i < len; i++) {
        console.log(typesOfintelligence[i]);
    }
    console.log(typesOfintelligence[generatedCardsBrain[index].connectionID] + " " + points + " " + generatedCardsBrain[index].connectionID);
    if(index+1 + questionRoundsCompleted*10 === generatedCardsBrain.length){
        endTest();
    }
}

function nextQuestionRound(){
    if(questionRoundsCompleted * 10 < generatedCardsBrain.length){
        for (var i = 0, len = generatedQuestionsTexts.length; i < len; i++) {
            generatedQuestionsTexts[i].innerHTML = generatedCardsBrain[i + questionRoundsCompleted*10].backTxt;
        }
    }
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
            template.find('.front  > label').html(card.backTxt);
        }
        console.log(card.backTxt);

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
            // Prepare every card and push it to array
            cards.forEach(function (card) {
                preparedTemplate = prepareCardTemplate(card);
                templates.push(preparedTemplate);
            });

            // Shuffle card array
            // templates = shuffleCards(templates);

            // Hide and empty card container
            $cardsContainer.hide().empty();

            // Append all cards to cards container
            templates.forEach(function(card) {
                $cardsContainer.append(card);
            });

            // Show card container
            $cardsContainer.fadeIn('slow');
            console.log("2nd");
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

// 0 - лінгвістичний, 1 - логіко-мат, 2 - музичний, 3 - кінстч, 4 - візуаль, 5 - міжособ, 6 - внутршн, 7 - природний 

// Game init
$(function() {
  
        var brainymo = new BRAINYMO.Game({
            cards: [
                {
                    backTxt: ('Якщо мені потрібно зосередиться, я зазвичай починаю машинально малювати / креслити'),
                    connectionID: 4
                },
                {
                    backTxt: ('Мені легко дається розуміння графіків і схем'),
                    connectionID: 4
                },
                {  
                    backTxt: ('Я часто розмовляю сам з собою - вголос або про себе'),
                    connectionID: 0
                },
                {
                    backTxt:  ('Я не люблю туманність, вважаю за краще ясність'),
                    connectionID: 1
                },
                {
                    backTxt: ('Коли я слухаю людину, я зазвичай прислухаюся не тільки до суті того, що вона говорить, але і до його слів'),
                    connectionID: 5
                },
                {
                    backTxt: ('Я постійно звертаю увагу на невербальнy мовy (жести, міміку) оточуючих'),
                    connectionID: 5
                },
                {
                    backTxt: ('Мені подобається думати'),
                    connectionID: 1
                },
                {
                    backTxt: ('Коли я співаю, я відчуваю себе щасливим'),
                    connectionID: 5
                },
                {
                    backTxt: ('Мені подобаються види спорту з високим ступенем ризику і небезпечні атракціони'),
                    connectionID: 3
                },
                {
                    backTxt: ('Мені подобаються дебати і дискусії'),
                    connectionID: 0
                },
                {
                    backTxt: ('Мені легко дається складання бюджету та розпорядження грошима'),
                    connectionID: 0
                },
                {
                    backTxt: ('Друзі вважають, що я вмію поводитися з рослинами'),
                    connectionID: 7
                },
                {
                    backTxt: ('Мій улюблений предмет в школі (був) - образотворче мистецтво'),
                    connectionID: 4
                },
                {
                    backTxt: ('Я віддаю перевагу командні види спорту'),
                    connectionID: 5
                },
                {
                    backTxt: ('Коли я опиняюся в незнайомому місці, я ніколи не гублюся'),
                    connectionID: 4
                },
                {
                    backTxt: ('У мене вдома багато фотографій і картин'),
                    connectionID: 4
                },
                {
                    backTxt: ('Коли я вивчаю щось, я вважаю за краще бачити схеми або діаграми того, як це працює'),
                    connectionID: 4
                },
                {
                    backTxt: ('Коли я рахую, я не загинаю пальці'),
                    connectionID: 1
                },
                {
                    backTxt: ('Я легко можу заговорити з незнайомою людиною'),
                    connectionID: 5
                },
                {
                    backTxt: ('Я засмучуюсь, коли бачу, як хтось плаче, але не можу допомогти'),
                    connectionID: 5
                },
                {
                    backTxt: ('Я завжди дізнаюся ті місця, де колись побував, навіть якщо я був там в дитинстві'),
                    connectionID: 4
                },
                {
                    backTxt: ('Мені більше подобаються індивідуальні види спорту'),
                    connectionID: 6
                },
                {
                    backTxt: ('Для мене дуже важлива музика'),
                    connectionID: 2
                },
                {
                    backTxt: ('Для мене дуже важливі дотики'),
                    connectionID: 5
                },
                {
                    backTxt: ('Мені подобаються різні жанри музики'),
                    connectionID: 2
                },
                {
                    backTxt: ('Я набагато легше вирішую задачі, якщо можу в цей час рухатися'),
                    connectionID: 3
                },
                {
                    backTxt: ('Я насолоджуюся красивим видом, пейзажем, лендскейпом'),
                    connectionID: 4
                },
                {
                    backTxt: ('У мене легко виходить вирішувати розбіжності з оточуючими'),
                    connectionID: 5
                },
                {
                    backTxt: ('Я вважаю за краще систематичний і логічний підхід'),
                    connectionID: 1
                },
                {
                    backTxt: ('Я завжди хотів стати ветеринаром / біологом / геологом / археологом і т.п.'),
                    connectionID: 7
                },
                {
                    backTxt: ('Мені дуже подобається читати'),
                    connectionID: 6
                },
                {
                    backTxt: ('Мені подобаються (подобалися) уроки музики'),
                    connectionID: 2
                },
                {
                    backTxt: ('У дитинстві мені подобалося ловити метеликів / жаб, спостерігати за комахами'),
                    connectionID: 7
                },
                {
                    backTxt: ('Я легко розбираюся в картах'),
                    connectionID: 4
                },
                {
                    backTxt: ('У мене немає ілюзій щодо моїх слабких і сильних сторін'),
                    connectionID: 6
                },
                {
                    backTxt: ('Я вважаю за краще перебувати на свіжому повітрі, і, бажано, за містом'),
                    connectionID: 7
                },
                {
                    backTxt: ('Якби я захотів, я міг би маніпулювати людьми'),
                    connectionID: 0
                },
                {
                    backTxt: ('Коли я закриваю очі, я часто бачу чіткі картинки'),
                    connectionID: 4
                },
                {
                    backTxt: ('Коли я перебуваю в іншій країні, я зазвичай легко освоюю ази іноземної мови'),
                    connectionID: 0
                },
                {
                    backTxt: ('Я ніколи не користуюся інструкціями, коли збираю корпусні меблі'),
                    connectionID: 4
                },
                {
                    backTxt: ('Я вмію грати на музичному інструменті'),
                    connectionID: 2
                },
                {
                    backTxt: ('Один з моїх улюблених шкільних предметів (був) - українською / російською мовою'),
                    connectionID: 0
                },
                {
                    backTxt: ('Я веду щоденник'),
                    connectionID: 6
                },
                {
                    backTxt: ('Мені подобається, коли звучить фонова музика'),
                    connectionID: 2
                },
                {
                    backTxt: ('Я помічаю, що певні види музики подобаються мені в залежності від настрою'),
                    connectionID: 2
                },
                {
                    backTxt: ('Я намагаюся економити воду і електрику, а також сортую відходи, коли є така можливість'),
                    connectionID: 7
                },
                {
                    backTxt: ('Коли я слухаю людини, я зазвичай прислухаюся не тільки до суті того, що він каже, а й до його словами'),
                    connectionID: 7
                },
                {
                    backTxt: ('Мені подобаються кросворди, завдання та загадки зі словами'),
                    connectionID: 7
                },
                {
                    backTxt: ('Я не люблю неясності, я люблю ясність'), 
                    connectionID: 7
                },
                {
                    backTxt: ('Мені подобаються логічні завдання, такі як судоку'),
                    connectionID: 7
                },
                {
                    backTxt: ('Мені часто приходить на розум пісня або мелодія'),
                    connectionID: 2
                },
                {
                    backTxt: ('Я завжди мріяв про те, щоб стати музикантом чи співаком'),
                    connectionID: 2
                },
                {
                    backTxt: ('Я завжди можу визначити, як я себе почуваю (в якому я стані)'),
                    connectionID: 6
                },
                {
                    backTxt: ('Я завжди добре володів своїм тілом'),
                    connectionID: 3
                },
                {
                    backTxt: ('Мені легко дається запам`ятовування цитат і фраз'),
                    connectionID: 0
                },
                {
                    backTxt: ('Мені легко придумувати історії'),
                    connectionID: 0
                },
                {
                    backTxt: ('Я брешу дуже переконливо'),
                    connectionID: 0
                },
                {
                    backTxt: ('Мені подобається бути на самоті'),
                    connectionID: 6
                },
                {
                    backTxt: ('Мені подобаються кросворди, завдання та загадки зі словами'),
                    connectionID: 0
                },
                {
                    backTxt: ('Мій улюблений предмет в школі - (був) математика'),
                    connectionID: 1
                },
                {
                    backTxt: ('Я легко рахую про себе'),
                    connectionID: 1
                },
                {
                    backTxt: ('Я можу визначити джерело звуку навіть не бачачи, хто або що його виробляє'),
                    connectionID: 2
                },
                {
                    backTxt: ('Мені подобається більше дізнаватися про себе'),
                    connectionID: 6
                },
                {
                    backTxt: ('Мені подобається продумувати проблеми ретельно, враховуючи всі наслідки'),
                    connectionID: 1
                },
                {
                    backTxt: ('Я легко визначаю, подобаюся я або не подобаюся тієї чи іншої людини'),
                    connectionID: 5
                },
                {
                    backTxt: ('Мене дратують люди, які ведуть себе нерозумно'),
                    connectionID: 1
                },
                {
                    backTxt: ('Мені подобаються логічні завдання, такі як судоку'),
                    connectionID: 1
                },
                {
                    backTxt: ('Мене дуже турбує зникнення / грубе поводження з тваринами і зміни клімату'),
                    connectionID: 7
                },
                {
                    backTxt: ('Мені легко даються і подобаються ігри з м`ячем'),
                    connectionID: 3
                },
                {
                    backTxt: ('Я легко запам`ятовую номери телефонів'),
                    connectionID: 1
                },
                {
                    backTxt: ('Друзі завжди приходять до мене, щоб отримати емоційну поддрежки або рада'),
                    connectionID: 5
                },
                {
                    backTxt: ('Мене цікавить психометрики (тести для визначення характеристик особистості) і IQ тести'),
                    connectionID: 6
                },
                {
                    backTxt: ('Я ставлю цілі / складаю плани на майбутнє'),
                    connectionID: 1
                },
                {
                    backTxt: ('Мені не байдуже, що відчувають оточуючі'),
                    connectionID: 5
                },
                {
                    backTxt: ('У мене добре виходять кидки, напр., Під час гри в дартс, фрізбі, і т.д.'),
                    connectionID: 3
                },
                {
                    backTxt: ('Я - людина товариська, мені подобається бути в колі людей'),
                    connectionID: 5
                },
                {
                    backTxt: ('Я легко уявляю собі, як виглядає предмет з іншої точки зору'),
                    connectionID: 4
                },
                {
                    backTxt: ('Я можу досить точно передбачити свої почуття і дії в певних ситуаціях'),
                    connectionID: 6
                },
                {
                    backTxt: ('Я можу легко визначити, яка переді мною рослина / тварина'),
                    connectionID: 7
                },
                {
                    backTxt: ('Щоб оволодіти новим вмінням, мені потрібно просто спробувати і попрактикуватися'),
                    connectionID: 4
                },
                {
                    backTxt: ('Я займаюся спортом / танцюю'),
                    connectionID: 3
                },
                {
                    backTxt: ('Мені подобається / у мене виходить майструвати / займатися рукоділлям'),
                    connectionID: 4
                },
                {
                    backTxt: ('Мені подобається дивитися документальні фільми про науку і природy'),
                    connectionID: 7
                },
                {
                    backTxt: ('Мій домашній улюбленець - один з моїх кращих друзів, я не можу уявити своє життя без нього'),
                    connectionID: 7
                },
            ]
            // 0 - лінгвістичний, 1 - логіко-мат, 2 - музичний, 3 - кінстч, 4 - візуаль, 5 - міжособ, 6 - внутршн, 7 - природний
        });

        $('#btn-start').click(function() {
            brainymo.generateCardSet();
            $(this).text('Заново');
        });
    });