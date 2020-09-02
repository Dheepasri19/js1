

var s1=document.getElementById('email');
var s2=document.getElementById('ps');
var s3=document.getElementById('b');
var s4=document.getElementById('111');
var s5=document.getElementById('222');
s3.addEventListener("submit",function(e){
    e.preventDefault();
    s4.textContent=s1.value;
    s5.textContent=s2.value;
})
