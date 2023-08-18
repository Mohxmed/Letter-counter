function getVal(){
    x = document.querySelector('textarea').value
    document.getElementById('counter').innerHTML=x.length;
    document.getElementById('counterw').innerHTML= (x.split(" ").length);
}
