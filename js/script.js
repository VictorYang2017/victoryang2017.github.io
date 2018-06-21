$(function(){
    function Portfolio(image){
        this.image = image;
        this.addFlipClass = function(){
            this.image.addClass('logo-flip');
        }
        this.removeFlipClass = function(){
            this.image.removeClass('logo-flip');
        }
    }
    var portfolio = new Portfolio($('#logo-container'));


    portfolio.image.on({
        'mouseenter':function(){portfolio.addFlipClass();},
        'mouseleave':function(){portfolio.removeFlipClass();}
    });

});
