let aboutOffset= $("#about").offset().top;

    $(window).scroll(function () { 
        let windowHeight=$(window).scrollTop();
        if(windowHeight>=aboutOffset){
            $("#headerNav").css("backgroundColor", "#333");
            $(".slideUp").fadeIn(500);
            
        }
        else{
            $("#headerNav").css("backgroundColor", "transparent");
            $(".slideUp").fadeOut(500);
        }
        
    });

$("#btnUp").click(function () { 
    $("html,body").animate({scrollTop:'0'},700);
});

$(".nav-item a").click(function(){
    let href=$(this).attr("href");
    let sectionOffsetTop=$(href).offset().top;
    $("html,body").animate({scrollTop:sectionOffsetTop},700);
});


let colorItem=$(".color-item");
colorItem.eq(0).css("backgroundColor","teal");
colorItem.eq(1).css("backgroundColor","#ff305b");
colorItem.eq(2).css("backgroundColor","rgb(250, 198, 28)");
colorItem.eq(3).css("backgroundColor","rgb(212, 0, 0)");

colorItem.click(function () { 
   let color= $(this).css("backgroundColor");
   $(".change").css("color",color);
   $(".active").css("color",color);
   $(".bg-change").css("backgroundColor",color);
    
   //army class change 3la 7gat el 3ayzaha tet8er w ana b2ases f awel
 });
 
 $("#settings i").click(function(){
     let colorBoxWidth=$(".color-box").outerWidth();
     if($("#settings").css("left")=="0px"){
        $("#settings").animate({left:`-${colorBoxWidth}`},1000);
     }else{
     $("#settings").animate({left:"0px"},1000);
     }
    

 });