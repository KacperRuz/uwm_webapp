function setColor(mode){
    if(mode == "dark"){
        color1 = '#544E61';
        color2 = '#67597A';
    }
    if(mode == "light"){
        color1 = '#f5deb3';
        color2 = '#D33F49';
    }
    document.body.style.backgroundColor = color1;

    document.getElementById("navbar").style.backgroundColor = color2;

    const jumbotrons = document.querySelectorAll('.jumbotron');
    jumbotrons.forEach(jumb => {
        jumb.style.backgroundColor = color1;
    });
    const containers = document.querySelectorAll('.container-fluid');
    containers.forEach(cont => {
        cont.style.backgroundColor = color1;
    });
}


window.onload = () => {
let init = sessionStorage.getItem("mode");

if(init == null){
    sessionStorage.setItem("mode", "light");
}

if(init == "dark"){
    $(function() {
    $("#toogleMode").animate({
        right: "+=30px"
    }, 0);
    });
    setColor("dark");
}
};


function modeToogler(){
    let mode = sessionStorage.getItem("mode");
    if(mode == "light"){
        $("#toogleMode").animate({
            right: "+=30px"
        }, 500)
        sessionStorage.setItem("mode", "dark");
        setColor("dark");
        return;
    }
    if(mode == "dark"){
        $("#toogleMode").animate({
            right: "-=30px"
        }, 500);
        sessionStorage.setItem("mode", "light");
        setColor("light");
        return;
    }
}
