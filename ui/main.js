console.log('Loaded!');

var ele=document.getElementById('txt');
ele.innerHTML='Changed to new one';

var img=document.getElementById('im1');
//var mar=0;
//function move()
//{
   // mar=mar+10;
   // img.style.mar=mar+'px';
//}
img.onclick=function(){
    img.style.marginLeft='100px';
    //var interval=setInterval(move,100);
};