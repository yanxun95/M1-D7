
// EX10.: Write a function to add a CSS class to every Amazon link

// EX11: Write a function to toggle a CSS class for all the images in the table; that class should set the visibility of the image

// EX12: Write a function to color the price of each product in a different one every time it's invoked
let changeH1Text = function(){
    document.getElementsByTagName("h1")[0].innerHTML = "Not So Smartphone Shop";
}

let changeBackgroundColor = function(){
    document.body.style.backgroundColor = "lightgreen";
}

let changeFooterAddress = function(){
    document.getElementById("address").innerHTML = "<strong>Address: Mars</strong>";
}

let addClass = function(){
    let table = document.getElementById('myTable');
    let rowLength = table.rows.length;
    for (i = 0; i < rowLength; i++){

        let oCells = oTable.rows.item(i).cells;
        let cellLength = oCells.length;
        for(let j = 0; j < cellLength; j++){
            
        }
     }
}