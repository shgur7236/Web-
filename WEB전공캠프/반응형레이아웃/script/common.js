$(function() {

    var idx=0;

    setInterval(function() {
        if(idx<2){
            idx++;
        }else {
            idx=0;
        }
        console.log(idx);

        $("#content3 img").eq(idx).fadeIn();
        $("#content3 img").eq(idx-1).fadeOut();
    },2000);

    $("#m_btn").click(function(e) {
        e.preventDefault();

        if($("nav").is(":visible")){
            $("nav").hide();
            $("#m_btn").removeClass("on");

        } else {
        
            $("nav").show();
            $("#m_btn").addClass("on");

        } 
    });

    $("nav>ul>li>a").click(function(e) {

        $(this).next("ul").slideToggle();
       /* if($(this).next("ul").is(":visible")) {
            $(this).next("ul").slideUp();
        } else {
            $(this).next("ul").slideDown();
        }*/
    });
    $("#tab a").click(function(e) {
        e.preventDefault();

        var btnName = $(this).attr("name");

        console.log(btnName);
       
        $(this).siblings("a").removeClass("on");
        $(this).addClass("on")
        $("#"+btnName).siblings("section").hide();

        $("#"+btnName).css("display","flex");
    });
});