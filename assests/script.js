function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

let commentName = document.getElementById("Name_input");
let commentSec = document.getElementById("comment_input");
let btn = document.getElementById("submit_btn");
function commentsection (){
    let name = commentName.value = "";
    let comment = commentSec.value = "";
    
}
btn.addEventListener('click' ,() => {
    commentsection();
})