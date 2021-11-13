function findTotal() {
    let arr = document.getElementsByName('input-number');
    let tot=0;
   

    for (let i = 0; i < arr.length; i++) {
        
        if(parseInt(arr[i].value))
            tot += parseInt(arr[i].value);
    }
    document.getElementById('total').value =`${"$"+(tot*1.1).toFixed(2)}` ;
    document.getElementById('total2').value = `${"$"+(tot*1.2).toFixed(2)}`;
    
}


function openInput() {
    let elems=  document.getElementsByClassName("result");
    for (let i = 0; i < elems.length; i+=1) {
        elems[i].style.display = 'block';       
    }
}

function findTotalforBrex() {
    let arr = document.getElementsByName('input-number');
    let tot=0;
   

    for (let i = 0; i < arr.length; i++) {
        
        if(parseInt(arr[i].value))
            tot += parseInt(arr[i].value);
    }
    document.getElementById('total3').value =`${"$"+(tot*0.3).toFixed(2)}` ;
    
}
function findTotalforStripe() {
    let arr = document.getElementsByName('input-number');
    let tot=0;
   

    for (let i = 0; i < arr.length; i++) {
        
        if(parseInt(arr[i].value))
            tot += parseInt(arr[i].value);
    }
    document.getElementById('total3').value =`${"$"+(tot*2.9).toFixed(2)}` ;
    
}
function findTotalforAmex() {
    let arr = document.getElementsByName('input-number');
    let tot=0;
   

    for (let i = 0; i < arr.length; i++) {
        
        if(parseInt(arr[i].value))
            tot += parseInt(arr[i].value);
    }
    document.getElementById('total3').value =`${"$"+(tot*1.3).toFixed(2)}` ;
    
}

let flexiblebar=document.querySelector("#b-bar");

console.log(flexiblebar.dataset.parcent);
let count=0
function progressbar(){
    flexiblebar.style.width=`${count}%`
    count++
    if(count>flexiblebar.dataset.parcent)
    {
        clearInterval(tham)
    }
}

let tham=setInterval(function(){
    progressbar()
},60)

let flexiblebar2=document.querySelector("#b-bar2");

console.log(flexiblebar2.dataset.parcent2);
let count2=0
function progressbar2(){
    flexiblebar2.style.width=`${count2}%`
    count2++
    if(count2>flexiblebar2.dataset.parcent2)
    {
        clearInterval(tham2)
    }
}

let tham2=setInterval(function(){
    progressbar2()
},60)
let flexiblebar3=document.querySelector("#b-bar3");

console.log(flexiblebar3.dataset.parcent3);
let count3=0
function progressbar3(){
    flexiblebar3.style.width=`${count3}%`
    count3++
    if(count3>flexiblebar3.dataset.parcent3)
    {
        clearInterval(tham3)
    }
}

let tham3=setInterval(function(){
    progressbar3()
},60)