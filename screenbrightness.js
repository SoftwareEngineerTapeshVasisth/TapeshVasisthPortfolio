function checknightmode()
{

  var checkboxnight = document.getElementById("checknightmodeid");

  if (checkboxnight.checked == true)
  {
      document.body.style.backgroundColor ="black";
      document.body.style.transition = "1s";
      document.body.style.color ="white";
  }
  else
  {
    document.body.style.backgroundColor ="";
    document.body.style.color = "";
    document.body.style.transition = "1s";
  }
}