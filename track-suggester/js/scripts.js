$(document).ready(function(){
  $("#epicodus").submit(function(event){
    var firstNameInput = $("input#firstName").val();
    var environmentInput = $("input:radio[name=environment]:checked").val();
    var companyInput = $("input:radio[name=company]:checked").val();
    var contentInput = $("#content").val();
    var usersInput = $("#users").val();
    var foodInput = $("#food").val();

    $(".firstName").text(firstNameInput);

    if (environmentInput === "front" ){
      $("#cssMessage").show();
    }

    if (companyInput === "large"){
      $("#cSharpMessage").show();
    } else if (companyInput === "small"){
      $("#javaMessage").show();
    }

    if (foodInput === "Pizza"){
      alert("We suggest taking the PHP/Drupal track at Epicodus.")
    } else if (foodInput === "BBQ"){
      $("#cSharpMessage").show();
    } else {
      $("#javaMessage").show();
    }



    event.preventDefault();
  });
});
