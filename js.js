const changeH1Text = function(){
    document.getElementsByTagName("h1")[0].innerHTML = "Not So Smartphone Shop";
}

const changeBackgroundColor = function(){
    document.body.style.backgroundColor = "lightgreen";
}

const changeFooterAddress = function(){
    document.getElementById("address").innerHTML = "<strong>Address: Mars</strong>";
}

const addClass = function(){
    for (let node of document.querySelectorAll("a")) {
        node.classList.add("amazon");
    }
}

const imgInvi = function(){
    for (let image of document.querySelectorAll("img")) {
        image.classList.toggle("hidden"); // if the class is already set, remove it. otherwise, add it
    }
}

const setRandomColor = function() {
    const color = getRandomColor();

    for (let price of document.querySelectorAll("tr > td:nth-child(2)")) {
        price.style.color = color;
    }
}

const getRandomColor = function() {
    const red = Math.round(Math.random() * 255);
    const green = Math.round(Math.random() * 255);
    const blue = Math.round(Math.random() * 255);

    return "rgb(" + red + ", " + green + ", " + blue + ")";
}