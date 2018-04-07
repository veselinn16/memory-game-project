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

    const $classes = ['<i class="card__symbol card_side--back icon-basic-clubs"></i>', '<i class="card__symbol card_side--back icon-basic-clubs"></i>', '<i class="card__symbol card_side--back icon-basic-heart"></i>', '<i class="card__symbol card_side--back icon-basic-heart"></i>', '<i class="card__symbol card_side--back icon-basic-diamonds"></i>', '<i class="card__symbol card_side--back icon-basic-diamonds"></i>', '<i class="card__symbol card_side--back icon-basic-spades"></i>', '<i class="card__symbol card_side--back icon-basic-spades"></i>','<i class="card__symbol card_side--back icon-basic-signs"></i>', '<i class="card__symbol card_side--back icon-basic-signs"></i>', '<i class="card__symbol card_side--back icon-basic-helm"></i>', '<i class="card__symbol card_side--back icon-basic-helm"></i>', '<i class="card__symbol card_side--back icon-basic-flag1"></i>', '<i class="card__symbol card_side--back icon-basic-flag1"></i>', '<i class="card__symbol card_side--back icon-basic-globe"></i>', '<i class="card__symbol card_side--back icon-basic-globe"></i>'];

    // timer functions
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

      // setInterval(function() {
      //   $min += 1;
      //   $minutes.text($min);
      // }, 60000);

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

    $(".card_side--front").click(function() {
      // click counter
      $num += 1;
      $moves.text($num);
      
      // flip back of cards
      $(this).css("transform", "rotateY(-180deg)");
      $(this).next().css('transform', 'rotateY(0)');

      console.log($(this).className);

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
    });

    //reset function
    $resetIcon.click(function() {
      location.reload(true);
    });    
};

$(document).ready(main);
