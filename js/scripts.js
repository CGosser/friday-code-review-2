

$(document).ready(function() {
  // var name = $("#name")
  var likes = $("#likes").val();
  var where = $("#where").val();
  var movies = $("#movies").val();
  var runner = $("#runner").val();
  var vintage = $("#vintage").val();

  var resultdata = []

    $("#submit").click(function(){
      if (likes == "" || where == "" || movies =="" || runner == "" || vintage ==""){
        alert ("please answer all questions");
      };
      alert(likes)
    });
  });
