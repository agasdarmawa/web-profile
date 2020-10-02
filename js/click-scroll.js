//jquery-click-scroll
//by syamsul'isul' Arifin

var sectionArray = [0, 1, 2, 3];

$.each(sectionArray, function(index, value){
          
     $(document).scroll(function(){
         var offsetSection = $('#' + 'section_' + value).offset().top;
         var docScroll = $(document).scrollTop() + 350;
         var docScroll1 = docScroll + 1;
         
        
         if ( docScroll1 >= offsetSection ){
             $('.bg-screen-menu ul.menu li a').removeClass('active');
             $('.bg-screen-menu ul.menu li a:link').addClass('inactive');  
             $('.bg-screen-menu ul.menu li a').eq(index).addClass('active');
             $('.bg-screen-menu ul.menu li a:link').eq(index).removeClass('inactive');

             $('.bg-menu ul.menu li a').removeClass('active');
             $('.bg-menu ul.menu li a:link').addClass('inactive');  
             $('.bg-menu ul.menu li a').eq(index).addClass('active');
             $('.bg-menu ul.menu li a:link').eq(index).removeClass('inactive');
         }
         
     });
    
    $('.bg-screen-menu ul.menu li a').eq(index).click(function(e){
        var offsetClick = $('#' + 'section_' + value).offset().top;
        e.preventDefault();
        $('html, body').animate({
            'scrollTop':offsetClick - 150
        }, 800)
        
        
    });

    $('.bg-menu ul.menu li a').eq(index).click(function(e){
        var offsetClick = $('#' + 'section_' + value).offset().top;
        e.preventDefault();
        $('html, body').animate({
            'scrollTop':offsetClick
        }, 800)
        
        
    });
 
    
});

$(document).ready(function(){
    $('.bg-screen-menu ul.menu li a:link').addClass('inactive');    
    $('.bg-screen-menu ul.menu li a').eq(0).addClass('active');
    $('.bg-screen-menu ul.menu li a:link').eq(0).removeClass('inactive');

    $('.bg-menu ul.menu li a:link').addClass('inactive');    
    $('.bg-menu ul.menu li a').eq(0).addClass('active');
    $('.bg-menu ul.menu li a:link').eq(0).removeClass('inactive');
});
