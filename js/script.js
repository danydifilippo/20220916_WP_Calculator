function restartAC() {
    document.getElementById('display').value='';
    document.getElementById('disOper').value='';
    document.getElementById('prevDisplay').value='';
}



function n(dato) {
    if ((dato==="+") || (dato==="*") || (dato==="/") || (dato==="-")) {
        document.getElementById('disOper').value=dato;
        let firstOp=document.getElementById('display').value
        document.getElementById('prevDisplay').value=firstOp
        document.getElementById('display').value=''
    }
    else {document.getElementById('display').value+=dato;}
}

function operation_() {
    let a=Number(document.getElementById('prevDisplay').value);
    let b=Number(document.getElementById('display').value);
    let c=document.getElementById('disOper').value;
    if (c==="+") {document.getElementById('display').value=a+b}
 else if(c==="-") {document.getElementById('display').value=a-b}
 else if(c==="*") {document.getElementById('display').value=a*b}
 else if(c==="/") {document.getElementById('display').value=a/b}
 document.getElementById('disOper').value=''
}

function perc(dato) {
    let a=Number(document.getElementById('prevDisplay').value);
    let b=Number(document.getElementById('display').value);
    let c=document.getElementById('disOper').value;
    if (c==="+") {document.getElementById('display').value=a+((a*b)/100)}
 else if(c==="-") {document.getElementById('display').value=a-((a*b)/100)}
 else if(c==="*") {document.getElementById('display').value=(a*b)/100}
 else if(c==="/") {document.getElementById('display').value=a/((a*b)/100)}
 document.getElementById('disOper').value=''
}


