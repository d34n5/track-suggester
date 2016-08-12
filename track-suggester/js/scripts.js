$(document).ready(function(){
  $("#epicodus").submit(function(event){
    var firstNameInput = $("input#firstName").val();
    var environmentInput = $("input:radio[name=environment]:checked").val();
    var companyInput = $("input:radio[name=company]:checked").val();
    var contentInput = $("#content").val();
    var usersInput = $("#users").val();
    var foodInput = $("#food").val();

    if (environmentInput === "front" ){
      $("#cssMessage").show();
    }



    event.preventDefault();
  });
});
