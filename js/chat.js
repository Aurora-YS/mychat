$(document).ready(function(){

    $("#message").focus();

    $("#chat_msg").keyup(function(e){
        // console.log(e.keyCode);
        if(e.keyCode == 13){
            if($(this).find("#message").val().length <= 1){
                $(this).find("#message").val("");
                alert("메시지 입력란에 메시지를 입력해주세요.");
            }else{
                $(this).submit();
                $(this).find("#message").val("");
            }
        }
    });


});