$(document).ready(function(){  
    
    

var sum;
var deadline;
var day;
function convert(){
	sum = Number($("#Type option:selected").attr("value")) + 
		Number($("#Design option:selected").attr("value")) + 
		Number($("#Adapt option:selected").attr("value"));

	if (isNaN(sum)) {sum = "0"};
}
function time(){
	deadline = Number($("#Type option:selected").attr("data-days")) * 
		(Number($("#Design option:selected").attr("data-daysTwo")) + 
		Number($("#Adapt option:selected").attr("data-daysThree")));
}
$("#Type").change(function(){
	convert();
	$("#Result").text(sum);
	time();
	$("#Deadline").text(deadline);
});
$("#Design").change(function(){
	convert();
	$("#Result").text(sum);
	time();
	$("#Deadline").text(deadline);
});
$("#Adapt").change(function(){
	convert();
	$("#Result").text(sum);
	time();
	$("#Deadline").text(deadline);
});
   
$(window).scroll(function(){
    let scrollDistance = $(window).scrollTop();
    $(".section").each(function(i, el){
       if($(el).offset().top - $("nav").outerHeight() <= scrollDistance){
           $("nav a").each(function(i, el){
               if ($(el).hasClass("visited")){
                   $(el).removeClass("visited");
               }
           });
           $('nav li:eq('+ i +')').find('a').addClass('visited');
       }
    });
}); 

  
$('select').change(sum);

function sum(){
    let result=0;
    $('#sum').find('select').each(function(){
        let value = 0;
        if (typeof $(this).val() == 'object'){
          $.each($(this).val(), function(index, val) {
            value += val*1;
          });
        } else {
          value = $(this).val()
        }
        result+=value*1;
    });
    $('#result').val(result);
} 
   
$('.price').on('change', 'select', ({ delegateTarget: formEl }) => {
  $('#result').val($('select', formEl).get().reduce((acc, n) => acc + (+n.value || 0), 0));
});        
    
$(function(){
	var target_block = $(".number");  
    var blockStatus = true;
    $(window).scroll(function(){
        var scrollEvent = ($(window).scrollTop() > (target_block.position().top - $(window).height()));
        if(scrollEvent && blockStatus) {
			blockStatus = false;
        $({numberValue: 0}).animate({numberValue: 120}, {
        duration: 1500, easing: "linear",
        step: function(val) {
            $(".numberOne").html(Math.ceil(val)); 
        }
        });
        $({numberValue: 0}).animate({numberValue: 4600}, {
        duration: 1500, 
        easing: "linear",
        step: function(val) {
            $(".numberTwo").html(Math.ceil(val)); 
        }
        });    
        $({numberValue: 0}).animate({numberValue: 340}, {
        duration: 1500, 
        easing: "linear",
        step: function(val) {
            $(".numberThree").html(Math.ceil(val)); 
        }
        });    
        $({numberValue: 0}).animate({numberValue: 23}, {
        duration: 1500, 
        easing: "linear",
        step: function(val) {
            $(".numberFour").html(Math.ceil(val)); 
}            
});
        }
    });
});   
      
let options = {threshold: [0.5]};
let observer = new IntersectionObserver(onEntry, options);
let elements = $(".price_animation");
elements.each(function(i, el){
    observer.observe(el);
});
function onEntry (entry){
    entry.forEach(function(change){
        if(change.isIntersecting){
            change.target.classList.add("show-animation");
        }
    });
}; 

let optionsOne = {threshold: [0.8]};
let observerOne = new IntersectionObserver(onEntryOne, optionsOne);
let elementsOne = $(".imgOne");
elementsOne.each(function(i, el){
    observerOne.observe(el);
});
function onEntryOne (entry){
    entry.forEach(function(change){
        if(change.isIntersecting){
            change.target.src = change.target.dataset.src;
        }
    });
}; 
    
$('a[href^="#"]').click(function(){
    let valHref = $(this).attr("href");
    $('html, body').animate({scrollTop: $(valHref).offset().top - 60 + "px"});
}); 
    
 setTimeout(function(){ 
    $("#myModal").click();
}, 3000); 
    
});