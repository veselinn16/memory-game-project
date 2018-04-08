function main() {
    const $moves = $(".information__data__moves");
    const $star1 = $("i").first();
    const $star2 = $star1.next();
    const $star3 = $star2.next();
    const $cards = $(".card_side--back");
    let $num = 0;
    const $resetIcon = $(".icon-basic-ban");
    const $startTime = $(".seconds");
    let $var = 0;
    let $min = 0;
    const $minutes = $('.minutes');

    const $classes = ['<i class="card__symbol card_side--back icon-basic-clubs"></i><span>a</span>', '<i class="card__symbol card_side--back icon-basic-clubs"></i><span>a</span>', '<i class="card__symbol card_side--back icon-basic-heart"></i><span>b</span>', '<i class="card__symbol card_side--back icon-basic-heart"></i><span>b</span>', '<i class="card__symbol card_side--back icon-basic-diamonds"></i><span>c</span>', '<i class="card__symbol card_side--back icon-basic-diamonds"></i><span>c</span>', '<i class="card__symbol card_side--back icon-basic-spades"></i><span>d</span>', '<i class="card__symbol card_side--back icon-basic-spades"></i><span>d</span>', '<i class="card__symbol card_side--back icon-basic-signs"></i><span>e</span>', '<i class="card__symbol card_side--back icon-basic-signs"></i><span>e</span>', '<i class="card__symbol card_side--back icon-basic-helm"></i><span>f</span>', '<i class="card__symbol card_side--back icon-basic-helm"></i><span>f</span>', '<i class="card__symbol card_side--back icon-basic-flag1"></i><span>g</span>', '<i class="card__symbol card_side--back icon-basic-flag1"></i><span>g</span>', '<i class="card__symbol card_side--back icon-basic-globe"></i><span>h</span>', '<i class="card__symbol card_side--back icon-basic-globe"></i><span>h</span>'];

    // timer function
      setInterval(function() {
        $var += 1;
        
        if ($var < 10) {
          $startTime.text("0" + $var);
        } else if ($var > 59) {
          $min += 1;
          $minutes.text($min);
          $var = 0;
          $startTime.text('00');
        } else if ($var >= 10) {
          $startTime.text($var);
        };
      }, 1000);

    // add classes
    $cards.each(function() {
        let $ranNum = Math.floor(Math.random() * $classes.length);
        $(this).html($classes[$ranNum]);
        $classes.splice($ranNum, 1);
    });

    // flip front of cards
    $(".card_side--back").click(function() {
      $(this).css("transform", "rotateY(180deg)");
      $(this).prev().css('transform', 'rotateY(0)');
    });

    let $symbols = [];
    let $matches = 0;
    $(".card_side--front").click(function() {
      // click counter
      $num += 1;
      $moves.text($num);
      
      // flip back of cards
      $(this).css("transform", "rotateY(-180deg)");
      $(this).next().css('transform', 'rotateY(0)');


      // gets letter of card 
      let $symbol = $(this).next().children('span').text();
      $symbols.push($symbol);
      console.log($symbols);

      if($symbols.length === 2) {
        if ($symbols[0] !== $symbols[1]) {
          // $(this).css("transform", "rotateX(90deg)");
          $(this).css("transform", "rotateX(360deg)");
          $(this).next().css('transform', 'rotateY(0)');
          $(this).find()
          $symbols = [];
          console.log("nope");
        } else {
          console.log("yay");
          $(this).css("color", "red");
          $(this).next().css("color", "red");
          $symbols = [];
          $matches += 1;
        }
      }      

      // remove stars switch statement
      switch ($num) {
        case 4:
          $star1.remove();
          break;
        case 8:
          $star2.remove();
          break;
        case 12:
          $star3.remove();
      };

      if($matches === 8) {
        $('.modal__subheading').text('You did it in ' + $num + ' moves, with a rating of !');//include STARS
        $('.modal__time').text('Your time was ' + $minutes.text() + ':' + $startTime.text());
        $('.modal').css('display', 'block');
      }
    });

    //reset function
    $resetIcon.click(function() {
      location.reload(true);
    });    
};

$(document).ready(main);
