document.addEventListener("DOMContentLoaded", function () 
{
    var sidenavbar = document.querySelector(".side-navbar");
    function opennav() {
        sidenavbar.style.left = "0";
    }

    var xmark = document.querySelector(".xmark");
    xmark.addEventListener("click", function ()
    {
        sidenavbar.style.left = "-50%";
    });
    window.opennav = opennav;
});
