document.getElementsByClassName("sub_container")[0].addEventListener('click', function(){
    document.getElementsByClassName("sub_container")[0].classList.toggle('off');
    if(document.getElementById("header").innerText == "Sign In"){
        document.getElementById("header").innerText = "Sign Out"
    }
    else{
        document.getElementById("header").innerText = "Sign In"
    }
})