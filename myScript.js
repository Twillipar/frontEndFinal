$(document).ready(function() {
        $("#cue").click(function(){
                $(".CSSEdit").slideToggle("slow");
        });
        $("#jsq").click(function(){
                $("#fi").fadeIn("slow");
                $("#fo").fadeIn("slow", function(){
                        $("#fo").fadeOut("slow");
                });
        });
});
