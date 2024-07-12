function searchvalue() {
    var containerone = document.querySelectorAll(".thirdcontent .third-sub");
    var enterdvalue = document.getElementById("collectionsearch").value.toLowerCase();

    for (var i = 0; i < containerone.length; i++) {
        var paravalue = containerone[i].querySelector("p").textContent.toLowerCase();
        if (paravalue.indexOf(enterdvalue) >= 0) {
            containerone[i].style.display = "block";
        } else {
            containerone[i].style.display = "none";
        }
    }
}
