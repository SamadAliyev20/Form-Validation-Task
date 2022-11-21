function Search() {
    var hb = document.getElementById("hb");
    var hb_2 = document.getElementById("hb_2");
    
    
    if (hb.style.opacity == "1") {
        hb.style.opacity = "0";

        hb_2.style.opacity = "1";
    }else{
        hb.style.opacity = "1";
     
        hb_2.style.opacity = "0";
    }
    if(hb_2.style.opacity =="0"){
        hb_2.style.display = "none";

    }else{
        hb_2.style.display = "inline";

    }
}
function Language() {
    var language = document.querySelector(".language");
    var down = document.getElementById("Down")
    if (language.style.opacity == 0) {
        language.style.opacity = "1";
        down.style.transform = "rotate(180deg)";
        language.style.display = "block"
        
    }else{
        language.style.opacity = "0";
        down.style.transform = "rotate(0deg)";
        language.style.display = "none"
    }
}