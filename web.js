let barMenu =document.getElementById('icon-bar');
let allUl =document.querySelector('.text-menu')
allUl.style.maxHeight='0px'
barMenu.onclick=function(){
    if(allUl.style.maxHeight=='0px'){
        allUl.style.maxHeight='340px'
    }
    else{
        allUl.style.maxHeight='0px'
    }
}
// barMenu.onclick=function(){
//     allUl.classList.remove('text-menu')
// }


       

