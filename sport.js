const bar=document.getElementById('bar');
const close=document.getElementById('close');
const nav=document.getElementById('navbar');

if(bar)
{
bar.addEventListener('click',()=>{nav.classList.add('active');})
}

if(close)
{
close.addEventListener('click',()=>{nav.classList.remove('active');})
}


let cursor = document.querySelector(".cursor");
document.addEventListener("mousemove", (evt) => {
  cursor.style.top = evt.pageY + "px";
  cursor.style.left = evt.pageX + "px";
});