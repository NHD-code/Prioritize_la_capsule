
var criticality = document.getElementsByClassName('criticality')
var l = document.getElementsByClassName('criticality').length

for (let i = 0 ; i < l ; i++) {

    if(criticality[i].textContent == 1) {
        criticality[i].style.backgroundColor = "#2DCC70"};
    
    if (criticality[i].textContent == 2) {
        criticality[i].style.backgroundColor = "#F1C40F" };
    
    if (criticality[i].textContent == 3) {
        criticality[i].style.backgroundColor = "#E67F22" }
    
    if (criticality[i].textContent == 4) {
        criticality[i].style.backgroundColor = "#E84C3D" }

}

document.getElementById("div_Priority").style.display = "block"

var row = document.getElementsByClassName('row')

function myFunction() {
    var checkBox1 = document.getElementById("Priority_1");
    var checkBox2 = document.getElementById("Priority_2");
    var checkBox3 = document.getElementById("Priority_3");
    var checkBox4 = document.getElementById("Priority_4");
    var div = document.getElementById("div_Priority");
    if (checkBox1.checked == true) {
        for (let i = 0 ; i < l ; i++) {
            if(criticality[i].textContent == 1) {
                row[i].style.display = "flex"};};
        } 
    if (checkBox1.checked == false) {
        for (let i = 0 ; i < l ; i++) {
            if(criticality[i].textContent == 1) {
                row[i].style.display = "none"};}; 
        }
    if (checkBox2.checked == true) {
        for (let i = 0 ; i < l ; i++) {
            if(criticality[i].textContent == 2) {
                row[i].style.display = "flex"};};
        } 
    if (checkBox2.checked == false) {
        for (let i = 0 ; i < l ; i++) {
            if(criticality[i].textContent == 2) {
                row[i].style.display = "none"};}; 
        } 
    if (checkBox3.checked == true) {
        for (let i = 0 ; i < l ; i++) {
            if(criticality[i].textContent == 3) {
                row[i].style.display = "flex"};};
            } 
    if (checkBox3.checked == false) {
        for (let i = 0 ; i < l ; i++) {
            if(criticality[i].textContent == 3) {
                row[i].style.display = "none"};}; 
            } 
    if (checkBox4.checked == true) {
        for (let i = 0 ; i < l ; i++) {
            if(criticality[i].textContent == 4) {
                row[i].style.display = "flex"};};
            } 
    if (checkBox4.checked == false) {
        for (let i = 0 ; i < l ; i++) {
            if(criticality[i].textContent == 4) {
                row[i].style.display = "none"};}; 
            }
        else {
            for (let i = 0 ; i < l ; i++) {
                div.style.display = "block";}
            }
}


