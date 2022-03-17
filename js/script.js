$("#emailForm").submit(function(event) {
    event.preventDefault();
    let email = $("#mail").val();
    let mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(email.match(mailFormat)) {
        $("#mail").css("border", "1px solid rgb(216, 208, 208)");
        $("#error-paragraph").css("visibility", "hidden");
        $("#error-arrow").css("display", "none")
      console.log(email);
    } else {
        $("#mail").css("border", "1px solid red");
        $("#error-paragraph").css("visibility", "visible");
        $("#error-arrow").css("display", "inline-block")
        console.log("invalid email");
    }
});

