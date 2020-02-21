const score=document.querySelector('#score')
const startbutton=document.querySelector('#start')
const quitbutton=document.querySelector('#quit')
const blocks= document.querySelectorAll('.blocks')
var userInput=[];
let randomarray=[];
let patrennumber=0
let count=0
let scorenumber=0

function randomnumber(){
    patrennumber=Math.floor(Math.random() * 4)+1
     randomarray.push(patrennumber)
}

function settimeinterval(colorblock,time){
    setTimeout(function(){ 
        colorblock.style.filter="brightness(2)"
     }, (time+1)*1000);
     setTimeout(function(){ 
        colorblock.style.filter="brightness(1)"
      },(time+1)*1300);
}

function highlightblock(){
    for(let i=0;i<randomarray.length;i++){  
        var highlightblock= document.querySelector(`#block${randomarray[i]}`)
        settimeinterval(highlightblock,i)
     }
}

function player(){

    if (randomarray[count]==this.getAttribute("name") && count<=randomarray.length-1){  
        count++
        if (count>randomarray.length-1){ 
            scorenumber= scorenumber+1
            score.innerHTML=scorenumber
            count=0
            randomnumber()
            highlightblock()
           }
    } else if(randomarray.length==0 && count==0){
            alert("please click on start button to start new game ")
    }else if(randomarray[count]!=this.getAttribute("name")){
        alert("you have lost the game ")
        scorenumber=0
        count=0
        score.innerHTML=0
        randomarray=[]
    } 
}

startbutton.addEventListener("click",()=>{
    console.log("start")
    scorenumber=0
    score.innerHTML=0
    randomarray=[]
    randomnumber()
    blocks.forEach(block => {
        block.addEventListener('click',player)  
    }) 
    
    highlightblock()
})

quitbutton.addEventListener("click",()=>{
    console.log("quit")
    scorenumber=0
    count=0
    score.innerHTML=0
    randomarray=[]
}) 

