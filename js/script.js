function restartAC() {
    document.getElementById('display').value='';
}


function n(dato) {
    document.getElementById('display').value+=dato
}


function operation() {
    document.getElementById('display').value=eval(document.getElementById('display').value);

}