function main() {
    const $moves = $(".information__data__moves");
    const $star1 = $("i").first();
    const $star2 = $star1.next();
    const $star3 = $star2.next();
    const $cards = $(".card_side--back");
    let $num = 0;
    const $reset = $(".btn");
    const $startTime = $(".seconds");
    let $var = 0;
    let $min = 0;
    const $minutes = $('.minutes');
    $on = null;
    let $card = null;
    let $symbols = [];
    let $matches = 0;
    let $cardArray = [];

    // CLASSES ARRAY
    const $classes = ['<i class="card__symbol card_side--back icon-basic-clubs"></i><span>a</span>', '<i class="card__symbol card_side--back icon-basic-clubs"></i><span>a</span>', '<i class="card__symbol card_side--back icon-basic-heart"></i><span>b</span>', '<i class="card__symbol card_side--back icon-basic-heart"></i><span>b</span>', '<i class="card__symbol card_side--back icon-basic-diamonds"></i><span>c</span>', '<i class="card__symbol card_side--back icon-basic-diamonds"></i><span>c</span>', '<i class="card__symbol card_side--back icon-basic-spades"></i><span>d</span>', '<i class="card__symbol card_side--back icon-basic-spades"></i><span>d</span>', '<i class="card__symbol card_side--back icon-basic-signs"></i><span>e</span>', '<i class="card__symbol card_side--back icon-basic-signs"></i><span>e</span>', '<i class="card__symbol card_side--back icon-basic-helm"></i><span>f</span>', '<i class="card__symbol card_side--back icon-basic-helm"></i><span>f</span>', '<i class="card__symbol card_side--back icon-basic-flag1"></i><span>g</span>', '<i class="card__symbol card_side--back icon-basic-flag1"></i><span>g</span>', '<i class="card__symbol card_side--back icon-basic-globe"></i><span>h</span>', '<i class="card__symbol card_side--back icon-basic-globe"></i><span>h</span>'];

    // RANDOMLY ADD CLASSES
    $cards.each(function() {
        let $ranNum = Math.floor(Math.random() * $classes.length);
        $(this).html($classes[$ranNum]);
        $classes.splice($ranNum, 1);
    });

    $('.card__match').click(false);

    //  BEGINNNNNNNNNNNNIIIIIIIIIIIINGGGGGGGGGGGGGG
    //
    $(".card_side--front").click(function() {
      //variable for timer
      $on = true;

      // if ($(this).hasClass("card__match")) {
      //   console.log('matched');
      // }

      let firstCard = $(this);
      $cardArray.push(firstCard);

      // flip back of cards
      $(this).css('transform', 'rotateY(-180deg)');
      $(this).next().css('transform', 'rotateY(0)');


      // GET LETTER OF CARD 
      let $symbol = $(this).next().children('span').text();
      $symbols.push($symbol);
      
      if ($symbols.length === 2) {
        if ($symbols[0] !== $symbols[1]) {
          $cardArray[0].css("transform", "rotateY(0)");
          $cardArray[0].next().css("transform", "rotateY(180deg)");
          $cardArray[1].css("transform", "rotateY(-360deg)");
          $cardArray[1].next().css("transform", "rotateY(-180deg)");          
          $cardArray = []
          $symbols = [];
          console.log("nope");
        } else {
          console.log("yay");
          for (let i = 0; i < $cardArray.length; i++) {
            $cardArray[i].addClass('card__match');
            $cardArray[i].next().addClass("card__match");
          }
          $cardArray = [];
          $symbols = [];
          $matches += 1;
        }
      }

      // remove stars at move count
      switch ($num) {
        case 8:
          $star1.remove();
          break;
        case 12:
          $star2.remove();
          break;
        case 16:
          $star3.remove();
      };

      if($matches === 8) {
        $('.modal__subheading').text('You did it in ' + $num + ' moves, with a rating of ' + $star1 + $star2 + $star3 + '!');
        $('.modal__time').text('Your time was ' + $minutes.text() + ':' + $startTime.text());
        $('.modal').css('display', 'block');
        $on = false;
      }
      
      //START TIMER
      if ($on && $moves.text() === "0") {
        $timer = setInterval(function() {
          $var += 1;

          if ($var < 10) {
            $startTime.text("0" + $var);
          } else if ($var > 59) {
            $min += 1;
            $minutes.text($min);
            $var = 0;
            $startTime.text("00");
          } else if ($var >= 10) {
            $startTime.text($var);
          }
        }, 1000);
      }
      //STOP TIMER 
      if ($on === false) {
        clearInterval($timer);
      }
       
       
      // click counter
      $num += 1;
      $moves.text($num);
    });
    
    // FLIP BACK CARD
    $(".card_side--back").click(function() {
      $(this).css("transform", "rotateY(180deg)");
      $(this).prev().css('transform', 'rotateY(0)');
      $cardArray = [];
      $symbols = [];
    });

    //reset function
    $reset.click(function() {
      location.reload(true);
    });    
};

$(document).ready(main);
