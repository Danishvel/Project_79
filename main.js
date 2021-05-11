menu_list_array = ["Country Feast",
                   "Tandoori Paneer",
                   "Chicken Italiano",
                   "Chicken Exotica",
                   "Margherita",
                   "Classic Tomato",
                   "Classic Corn",
                   "Veggie Feast",
                   "Spiced Paneer",
                   "Double Cheese",
                   "Soya Masala",
                   "Veggie Lover",
                   "Farmer's Pick",
                   "Veggie Supreme",
                   "Veg Exotica",
                   "Paneer Soya Supreme",
                   "Veg Italiano",
                   "Chicken Sausage",
                   "Spiced Chicken Meatballs",
                   "Chicken Pepperoni",
                   "Lebanese Chicken",
                   "Chicken Tikka",
                   "Chicken Sausage & Tikka",
                   "Smoked Chicken",
                   "Chicken Supreme",
                   "Triple Chicken Feast"
                ];
function getmenu(){
var htmldata;
htmldata = "<ol class'menulist'>";
menu_list_array.sort();
for (var i=0; i <menu_list_array.length; i++) {
     htmldata=htmldata+'<li>' + menu_list_array[i]    
}
htmldata=htmldata + "</ol>"
document.getElementById("display_menu").innerHTML = htmldata;
}

function add_item(){
var htmldata;
var item=document.getElementById("add_item").value;
menu_list_array.sort();
htmldata = "<section class='cards'>"
for (var i=0; i<menu_list_array.length; i++) {
    htmldata = htmldata + '<div class="card">' + '<img src ="pizzaImg.png"/> ' + menu_list_array[i] + '</div>'
}
htmldata=htmldata+"</section>"
document.getElementById("display_addedmenu").innerHTML = htmldata;
}

function add_top(){
var item = document.getElementById("add_item").value;
menu_list_array.push(item);
add_item();
}