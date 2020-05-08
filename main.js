function shtoLajm(){
var d=document.createElement("div");
var titulli=document.getElementById("titulli-new");
var teksti=document.getElementById("permbajtja-new");
if(titulli!=""||teksti!=""){
    var img=document.createElement("img");
var ti=document.createElement("h3");
var te=document.createElement("p");
img.setAttribute("src","logo.png");
img.setAttribute("class","foto-lajmi");
ti.innerHTML=titulli.value;
te.innerHTML=teksti.value;
d.appendChild(img);
d.appendChild(ti);
d.appendChild(te);
d.setAttribute("class","form-group");
document.getElementById("ballina").prepend(d);
titulli.value="";
teksti.value="";
}else{
    alert("Hapsirat nuk duhen te jene te zbrazeta");
}

}