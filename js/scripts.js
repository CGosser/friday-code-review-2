$(document).ready(function() {
  // var name = $("#name")
  var likes = $("#likes").val();
  var where = $("#where").val();
  var movies = $("#movies").val();
  var runner = $("#runner").val();
  var vintage = $("#vintage").val();
  var i = 0
  var resultdata = []
  var ruby = 0
  var react = 0
  var cSharp = 0
  // var lang = ""

  $("#submit").click(function(){
    if (likes == "" || where == "" || movies =="" || runner == "" || vintage ==""){
      alert ("please answer all questions");
    } else if (react == 0 && ruby == 0 && cSharp == 0) {

      resultdata.push(likes)
      resultdata.push(where)
      resultdata.push(movies)
      resultdata.push(runner)
      resultdata.push(vintage)
      while(resultdata[i]){
        if(resultdata[i] == "a"){
          react += 1
        } else if(resultdata[i] == "b"){
          ruby += 1
        } else if(resultdata[i] == "c"){
          cSharp += 1
        }
        i++
      }
      if (Math.max(ruby, react, cSharp) == ruby) {
        lang = "Ruby"
      } else if(Math.max(ruby, react, cSharp) == react){
        lang = "React"
      } else if(Math.max(ruby, react, cSharp) == cSharp){
        lang = "C#"
      }

    }

    console.log(react);
    console.log(ruby);
    console.log(cSharp);
    console.log(resultdata);
    console.log(lang);

  });
});
