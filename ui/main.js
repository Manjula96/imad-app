console.log('Loaded!');

var ele=document.getElementById('txt');
ele.innerHTML='Changed to new one';

var img=document.getElementById('im1');
var marginLeft=0;
function move()
{
    marginLeft=marginLeft+10;
    img.style.marginLeft=marginLeft+'px';
}
img.onclick=function(){
    
    var interval=setInterval(move,100);
};