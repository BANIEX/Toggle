document.addEventListener('DOMContentLoaded', function(){
    let colourStore = localStorage.getItem("color");
    // alert(colourStore)
    if (colourStore){
        if (colourStore == 'right'){
            document.getElementById("header").classList = "off"; 
            document.getElementById("header").innerText = "Sign Out";
            document.getElementsByTagName('body')[0].style.backgroundColor = 'black'
            document.getElementsByClassName("off")[0].addEventListener('click', function(){
                document.getElementsByClassName("off")[0].classList.toggle('three');
                // console.log(document.getElementById('header').classList.value);
                
                if(document.getElementById("header").innerText == "Sign In"){
                    document.getElementById("header").innerText = "Sign Out";

                    setter();
                }
                else{
                    document.getElementById("header").innerText = "Sign In";

                    setter();
                }
            })



        }
        if(colourStore == "left"){
            document.getElementById("header").classList = "sub_container";
            document.getElementsByTagName('body')[0].style.backgroundColor = 'yellow'
            document.getElementsByClassName("sub_container")[0].addEventListener('click', function(){
                document.getElementsByClassName("sub_container")[0].classList.toggle('off');
                // console.log(document.getElementById('header').classList.value);
                if(document.getElementById("header").innerText == "Sign In"){
                    document.getElementById("header").innerText = "Sign Out";
                    setter();
                }
                else{
                    document.getElementById("header").innerText = "Sign In";
                    setter();
                }
            })
              
        }

    }
    else{
        localStorage.setItem("color", "left");
        document.getElementsByTagName('body')[0].style.backgroundColor = 'yellow'
        document.getElementsByClassName("sub_container")[0].addEventListener('click', function(){
            document.getElementsByClassName("sub_container")[0].classList.toggle('off');
            if(document.getElementById("header").innerText == "Sign In"){
                document.getElementById("header").innerText = "Sign Out";
                setter();
            }
            else{
                document.getElementById("header").innerText = "Sign In";
                setter();
            }
        })
    }


} )








function setter(){
    let currentPosition = document.getElementById("header").innerText
    if(currentPosition == "Sign Out"){
        localStorage.setItem("color", "right");
        document.getElementsByTagName('body')[0].style.backgroundColor = 'black'
    }
    else{
        localStorage.setItem("color", "left");
        document.getElementsByTagName('body')[0].style.backgroundColor = 'yellow'

    }
}




