
var values = new Array();
var textToShow = "";
var addedMessage = "";

function addEntry() {
    var newEntry = document.getElementById("entryView").value;
    if(newEntry != "") {
        values.push(newEntry)
        document.getElementById("entryView").value = "";
        document.getElementById("addedMessage").value = "Added!"
    }
}

function showEntries() {
    removeList();
    document.getElementById("myListTitle").innerHTML = "Here are the values in your list: \n";
    let list = document.getElementById("myList");
     for (i = 0; i < values.length; ++i) {
        let li = document.createElement('li');
        li.innerText = values[i];
        list.appendChild(li);
    }
}

function deleteEntry() {
    self.removeList();
    values.pop();
}

function textInput() {
    document.getElementById("addedMessage").value = "";
    self.removeList();
}

function removeList() {
    let list = document.getElementById("myList");
    list.innerHTML = "";
    document.getElementById("myListTitle").innerHTML = '';
}