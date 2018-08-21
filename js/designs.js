function main() {
    // MOVES VARIABLES
    const $moves = $(".information__data__moves");
    const $movesText = $(".information__data__text");

    // stars selector variables
    const $star1 = $("i").first();
    const $star2 = $star1.next();
    const $star3 = $star2.next();
    const $cardsFront = $('.card_side--front');
    const $cardsBack = $(".card_side--back");
    let $num = 0;

    // RESET BUTTON
    const $reset = $(".btn");

    // TIMER VARIABLES
    const $minutes = $(".minutes");
    const $seconds = $(".seconds");
    let $sec = 0;
    let $min = 0;
    let $on = null;
    
    // CARD VARIABLES
    let $cardArray = [];
    let $symbols = [];

    let $matches = 0;
    

    // CLASSES ARRAY
    const $classes = ['<i class="card__symbol icon-basic-clubs"></i>', '<i class="card__symbol icon-basic-clubs"></i>', '<i class="card__symbol icon-basic-heart"></i>', '<i class="card__symbol icon-basic-heart"></i>', '<i class="card__symbol icon-basic-diamonds"></i>', '<i class="card__symbol icon-basic-diamonds"></i>', '<i class="card__symbol icon-basic-spades"></i>', '<i class="card__symbol icon-basic-spades"></i>', '<i class="card__symbol icon-basic-signs"></i>', '<i class="card__symbol icon-basic-signs"></i>', '<i class="card__symbol icon-basic-helm"></i>', '<i class="card__symbol icon-basic-helm"></i>', '<i class="card__symbol icon-basic-flag1"></i>', '<i class="card__symbol icon-basic-flag1"></i>', '<i class="card__symbol icon-basic-globe"></i>', '<i class="card__symbol icon-basic-globe"></i>'];

    // RANDOMLY ADD CLASSES
    $cardsBack.each(function() {
        let $ranNum = Math.floor(Math.random() * $classes.length);
        $(this).html($classes[$ranNum]);
        $classes.splice($ranNum, 1);
    });

    //  CLICK EVENT LISTENER
    $(".card_side--front").click(function() {
      //variable for timer
      $on = true;

      //START TIMER
      if ($on && $moves.text() === "0") {
        $timer = setInterval(function() {
          $sec += 1;

          if ($sec < 10) {
            $seconds.text("0" + $sec);
          } else if ($sec > 59) {
            $min += 1;
            $minutes.text($min);
            $sec = 0;
            $seconds.text("00");
          } else if ($sec >= 10) {
            $seconds.text($sec);
          }
        }, 1000);
      }
      //STOP TIMER 
      if ($on === false) {
        clearInterval($timer);
      }

      // CLICK COUNTER
      $num += 1;
      if($num === 1) {
        $movesText.text('Move');
      } else {
        $movesText.text("Moves");
      }
      $moves.text($num);

      let $firstCard = $(this);
      $cardArray.push($firstCard);

      // FLIP CARDS
      $(this).css('transform', 'rotateY(-180deg)');
      $(this).next().css('transform', 'rotateY(0)');


      // GET CLASS OF CARD AND PUSH IT TO SYMBOLS ARRAY
      let $symbol = $(this).next().children().attr('class').split(/\s+/);
      // console.log($symbol);
      $symbols.push($symbol[1]);
      
      // COMPARE SYMBOLS AND ROTATE IF NOT MATCHING OR ADD SHAKE ANIMATION IF MATCHING
      if ($symbols.length === 2) {
        if ($symbols[0] !== $symbols[1]) {
          // reviewer suggestion
          console.log($symbols);
          $cardArray[0].css("transform", "rotateY(0)");
          $cardArray[0].next().css("transform", "rotateY(180deg)");
          $cardArray[1].css("transform", "rotateY(-360deg)");
          $cardArray[1].next().css("transform", "rotateY(-180deg)");          
          $cardArray = []
          $symbols = [];
          console.log("nope");
        } else {
          console.log("yay");
          for (let card of $cardArray) {
            card.addClass('card__match');
            card.next().addClass("card__match");
          }
          $cardArray = [];
          $symbols = [];
          $matches += 1;
        }
      }

      // REMOVE STARS AT SPECIFIED MOVE COUNT
      switch ($num) {
        case 20:
          $star1.remove();
          break;
        case 30:
          $star2.remove();
          break;
        case 50:
          $star3.remove();
      };

      // WINNING CONDITION + DISPLAY MODAL
      if($matches === 8) {
        $(".modal__subheading").html("You did it in " + $num + " moves, with a rating of " + $(".information__data-stars").html() + "!");
        $('.modal__time').text('Your time was ' + $minutes.text() + ':' + $seconds.text());
        $(".modal").fadeIn('slow');
        $on = false;
      }       
    });
    
    // FLIP BACK CARD
    $(".card_side--back").click(function() {
      if ($(this).hasClass("card__match")) {
        return false;
      }
      $(this).css("transform", "rotateY(180deg)");
      $(this).prev().css('transform', 'rotateY(0)');
      $cardArray = [];
      $symbols = [];
    });

    // RESET FUNCTION
    $reset.click(function() {
      location.reload(true);
    });    
};

$(document).ready(main);