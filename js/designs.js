function main() {
    // click counter function
    const $moves = $(".information__data__moves");
    const $star1 = $("i").first();
    const $star2 = $star1.next();
    const $star3 = $star2.next();
  
    let $num = 0;
  
    $(".card").click(function() {
        $num += 1;
        $moves.text($num);
        // insert smooth transition
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
