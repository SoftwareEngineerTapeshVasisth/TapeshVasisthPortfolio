
function showsidebar()
{
  var sidebarpanelmaindiv = document.getElementById('sidebarpanelside');
  document.getElementById('navbarNav').style.display='none';

    if (sidebarpanelmaindiv.style.margin==='0px')
    {
        sidebarpanelmaindiv.style.marginLeft="-300px";
        document.getElementById('sidebarbgblackdiv').style.display='none';
        document.getElementById('sidebarbgblackdiv').style.backgroundColor='none';
    }
    else
    {
      sidebarpanelmaindiv.style.margin="0px";
      document.getElementById('sidebarbgblackdiv').style.display='block';
      document.getElementById('sidebarbgblackdiv').style.backgroundColor='rgba(0,0,0,0.6)';
    }

    var navhumbarchangetocross = document.getElementById('navhumbbar');
    navhumbarchangetocross.classList.toggle("changenavbar");
}














 
 function hidesidebaroverlay()
 {
    document.getElementById('sidebarpanelside').style.marginLeft="-300px";
    document.getElementById('sidebarbgblackdiv').style.display='none';
    
    var navhumbarchangetocross = document.getElementById('navhumbbar');
    navhumbarchangetocross.classList.toggle("changenavbar");
 }
