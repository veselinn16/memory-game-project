function main() {
    const $moves = $(".information__data__moves");
    const $star1 = $("i").first();
    const $star2 = $star1.next();
    const $star3 = $star2.next();
    const $cards = $(".game i");
    let $num = 0;
    const $resetIcon = $(".icon-basic-ban");
    const $startTime = $(".seconds");
    let $var = 0;
    let $min = 0;
    const $minutes = $('.minutes');

    const $classes = ["card__symbol card_side--back icon-basic-clubs", "card__symbol card_side--back icon-basic-clubs", "card__symbol card_side--back icon-basic-heart", "card__symbol card_side--back icon-basic-heart", "card__symbol card_side--back icon-basic-diamonds", "card__symbol card_side--back icon-basic-diamonds", "card__symbol card_side--back icon-basic-spades", "card__symbol card_side--back icon-basic-spades", "card__symbol card_side--back icon-basic-signs", "card__symbol card_side--back icon-basic-signs", "card__symbol card_side--back icon-basic-helm", "card__symbol card_side--back icon-basic-helm", "card__symbol card_side--back icon-basic-flag1", "card__symbol card_side--back icon-basic-flag1", "card__symbol card_side--back icon-basic-globe", "card__symbol card_side--back icon-basic-globe"];

    // let lol = setInterval(timer(), 1000);
    // function timer() {
    //     $today = new Date(); 
    //     $startTime.innerHTML = $today.toLocaleTimeString();
    // };
    // setTimeout(function() {
    //   $startTime.text($startTime + 1);
    // }, 1000);
    // add classes
    $cards.each(function() {
        let $ranNum = Math.floor(Math.random() * $classes.length);
        $(this).addClass($classes[$ranNum]);
        $classes.splice($ranNum, 1);
    });

    // flip back of cards
    $(".card_side--front").click(function() {
      $(this).css("transform", "rotateY(-180deg)");
      $(this).next().css('transform', 'rotateY(0)');
    });

    // flip front of cards
    $(".card_side--back").click(function() {
      $(this).css("transform", "rotateY(180deg)");
      $(this).prev().css('transform', 'rotateY(0)');      
    });

    $(".card").click(function() {
      // click counter function
      $num += 1;
      $moves.text($num);
      // INSERT SMOOTH TRANSITION
      //remove stars switch statement
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

      setInterval(function() {
        $var += 1;
        
        // timer functions
        if ($var < 10) {
          $startTime.text("0" + $var);
        } else if ($var > 59) {
          $var = 0;
          $startTime.text('00');
        } else if ($var >= 10) {
          $startTime.text($var);
        };
      }, 1000);

      setInterval(function() {
        $min += 1;
        $minutes.text($min);
      }, 60000);
    });

    //reset function
    $resetIcon.click(function() {
      location.reload(true);
    });    
};

$(document).ready(main);
