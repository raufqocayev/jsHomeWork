"use strict";

function validateForm() {
    let fname = document.forms["myForm"]["fname"].value;
    let fsurname = document.forms["myForm"]["fsurname"].value;
    let fage = document.forms["myForm"]["fage"].value;
    let femail = document.forms["myForm"]["femail"].value;
    let fID = document.forms["myForm"]["fid"].value;
    if (fname == "") {
        alert("Name must be filled out")
        return false
    }
    if (fsurname == "") {
        alert("Surname must be filled out")
        return false
    }
    if (fage == "") {
        alert("Age must be filled out")
        return false
    }
    if (femail == "") {
        alert("Email must be filled out")
        return false
    }
    if (fID == "") {
        alert("ID must be filled out")
        return false
    }
    emptyInput()
    return false
}



function Person(name, surname, age, email, id) {
    this.name = name;
    this.surname = surname;
    this.age = age;
    this.email = email;
    this.id = id;
}

let peopleArray = [];
let wrapper = document.getElementById("Peoplehere")

function getValue() {
    let name = document.forms["myForm"]["fname"].value;
    let surname = document.forms["myForm"]["fsurname"].value;
    let age = document.forms["myForm"]["fage"].value;
    let email = document.forms["myForm"]["femail"].value;
    let id = document.forms["myForm"]["fid"].value;

    let newPerson = new Person(name, surname, age, email, id);
    peopleArray.push(newPerson);
    console.log()
    displayTable();
}


function displayTable() {
    let list = "<table class='table table-dark'> <thead> " +
        '<tr>' +
        '<th scope="col">Number</th>' + '<th scope="col">Name</th>' + '<th scope="col">Surname</th>' +
        '<th scope="col">Age</th>' + '<th scope="col">Email</th>'
        + '<th scope="col">Password ID </th>' + '</tr>'
    '</thead> <tbody>';
    for (let i = 0; i < peopleArray.length; i++) {
        list += "<tr><th scope='row'>" + (i + 1) + "</td><td>"
            + peopleArray[i].name + "</td>+<td>" + peopleArray[i].surname +
            "</td>+<td>" + peopleArray[i].age + "</td>+<td>" + peopleArray[i].email +
            "</td>+<td>" + peopleArray[i].id + "</td></tr>";
    }
    list += "</tbody></table>";
    wrapper.innerHTML = list;
}

function emptyInput() {
    document.forms["myForm"]["fname"].value = "";
    document.forms["myForm"]["fsurname"].value = "";
    document.forms["myForm"]["fage"].value = "";
    document.forms["myForm"]["femail"].value = "";
    document.forms["myForm"]["fid"].value = "";
}


function deleteEl(){
    let thisindex = document.getElementById("deleted").value;
    peopleArray.splice(thisindex-1,1);
    displayTable();
    if(thisindex > peopleArray.length){
        alert("Write number within lenght");
        return false
    }
    else if(isNaN(thisindex)){
        peopleArray.splice(0,0);
        alert("Write only number");
        return false;
        
    }
}

function sortName() {
    peopleArray.sort(function (a, b) {
        var x = a.name.toLowerCase();
        var y = b.name.toLowerCase();
        if (x < y) { return -1; }
        if (x > y) { return 1; }
        return 0;
    });
    displayTable()
}

function sortSurn() {
    peopleArray.sort(function (a, b) {
        var x = a.surname.toLowerCase();
        var y = b.surname.toLowerCase();
        if (x < y) { return -1; }
        if (x > y) { return 1; }
        return 0;
    });
    displayTable()
}