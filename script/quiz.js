let name = document.getElementById('n1');
let id = document.getElementById('n2');

document.getElementById('btn').addEventListener("click", submit);

function checkField1() {
    if (name.value.length == 0) {
        document.getElementById('error1').innerHTML = "Cannot leave this field empty";
        return false;
    } else {
        document.getElementById('error1').innerHTML = "";
        return true;
    }
}

function checkField2() {
    if (id.value.length == 0) {
        document.getElementById('error2').innerHTML = "Cannot leave this field empty";
        return false;
    } else {
        document.getElementById('error2').innerHTML = "";
        return true;
    }
}

function submit() {
    if(checkField1() && checkField2() == true){
        localStorage.setItem("Name",name);
        localStorage.setItem("ID",id);
    }else{
        alert("Please enter your name and ID");
    }
}