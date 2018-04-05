function main() {
    const $moves = $(".information__data__moves");
    const $star1 = $("i").first();
    const $star2 = $star1.next();
    const $star3 = $star2.next();
    const $cards = $(".game i");
    let $num = 0;

    const $classes = ["card__symbol icon-basic-clubs", "card__symbol icon-basic-clubs", "card__symbol icon-basic-heart", "card__symbol icon-basic-heart", "card__symbol icon-basic-diamonds", "card__symbol icon-basic-diamonds", "card__symbol icon-basic-spades", "card__symbol icon-basic-spades", "card__symbol icon-basic-signs", "card__symbol icon-basic-signs", "card__symbol icon-basic-helm", "card__symbol icon-basic-helm", "card__symbol icon-basic-flag1", "card__symbol icon-basic-flag1", "card__symbol icon-basic-globe", "card__symbol icon-basic-globe"];
    
    // add classes
    $cards.each(function() {
        let $ranNum = Math.floor(Math.random() * $classes.length);
        $(this).addClass($classes[$ranNum]);
        $classes.splice($ranNum, 1);
    });

    $(".card").click(function(event) {
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
    });
};

$(document).ready(main);
