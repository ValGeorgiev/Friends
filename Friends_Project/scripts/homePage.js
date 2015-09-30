$(document).ready(function(){
    $("#registerButton").click(function(){
        $("#inputUserName").focus();
    });
    $("#logInButton").click(function(){
        $("#inputLogInUserName").focus();
    });

    $("#register").click(function(){
        if(!validateRegisterUserName()){
            location.href= "#inputUserName";
        }
        if(!validateRegisterPass() || !validateRegisterPasswords()){
           location.href= "#inputPassword";
        }
        if(!validateEmail()){
            location.href = "#inputEmail";
        }
        if(validateEmail() && validateRegisterPass() && validateRegisterPasswords() && validateRegisterUserName()){
            location.href = "information.html";
        }
    });
    $("#checkPassword").keyup(validateRegisterPasswords);

    $("#logIn").click(function(){
        if(!validateLogInUserName()){
            location.href = "#inputLogInUserName";
        }
        if(!validateLogInPass()){
            location.href = "#inputLogInPassword";
        }else{
            location.href = "information.html";
        }
    });

    $(window).scroll(function(){
        var friends = $("#friendsImg");
        var scroll = $(window).scrollTop();
        var formPosition = $("#registrationForm").offset().top;
        var imgBottomPosition = friends.position().top + friends.outerHeight(true);
        if(scroll >= formPosition){
            $("nav").removeClass("navbar-fixed-top");
        }
        else if(scroll < imgBottomPosition){
            $("nav").addClass("navbar-fixed-top");
        }
    });



});

function validateLogInUserName(){
    var userName = $("#inputLogInUserName").val();
    if(userName == null || userName.length == 0){
        $("#inputLogInUserName").css("border-color", "#d4000a");
        return false;
    }else{
        $("#inputLogInUserName").css("border-color", "#292E87");
        return true;
    }
}

function validateLogInPass(){
    var password = $("#inputLogInPassword").val();
    if(password.length < 6 ){
        $('#inputLogInPassword').css('border-color', '#d4000a');
        return false;
    }
    else{
        $('#inputLogInPassword').css('border-color', '#292E87');
        return true;
    }
}

function validateRegisterUserName(){
    var userName = $("#inputUserName").val();
    if(userName == null || userName.length == 0){
        $("#inputUserName").css("border-color", "#d4000a");
        return false;
    }else{
        $("#inputUserName").css("border-color", "#292E87");
        return true;
    }
}

function validateRegisterPass(){
    var password = $("#inputPassword").val();
    if(password.length < 6 ){
        $('#inputPassword').css('border-color', '#d4000a');
        return false;
    }
    else{
        $('#inputPassword').css('border-color', '#292E87');
        return true;
    }
}

function validateRegisterPasswords(){
    var password = $("#inputPassword").val();
    var checkPassword = $("#checkPassword").val();
    if(password === checkPassword){
        $('#checkPassword').css('border-color', '#292E87');
        return true;
    }else{
        $('#checkPassword').css('border-color', '#d4000a');
        return false;
    }
}

function validateEmail(){
    var email = $("#inputEmail").val();
    if(email) {
        var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        var result = regex.test(email);
        if (result) {
            $("#inputEmail").css('border-color', '#292E87');
            return true;
        }
    }else{
        $('#inputEmail').css('border-color', '#d4000a');
        return true;
    }
}