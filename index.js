let home=0
let gust=0
let count=1
let isStart=false
let HomeS=document.getElementById('home-score').innerHTML=0
let Gscore=document.getElementById('gust-score').innerHTML=0
/****************Home*********** */

function homeAdd(num){
    home +=num
    
     document.getElementById('home-score').innerText=home
if(home > gust)
{
       document.getElementById('home-score').classList.add('green') 
       document.getElementById('gust-score').classList.remove('green')

    }
    else if(home==gust){
        document.getElementById('gust-score').classList.remove('green')
        document.getElementById('home-score').classList.remove('green')
    }
else{ 
        document.getElementById('home-score').classList.remove('green')
        document.getElementById('gust-score').classList.add('green')
     }
    
 

}


/********GUST************* */

function gustAdd(num){
    gust +=num
    document.getElementById('gust-score').innerText=gust

      if(gust > home)
      {
       document.getElementById('gust-score').classList.add('green') 
       document.getElementById('home-score').classList.remove('green')

    }   else if(home==gust){
        document.getElementById('gust-score').classList.remove('green')
        document.getElementById('home-score').classList.remove('green')
    }
    else {
    document.getElementById('gust-score').classList.remove('green')
    document.getElementById('home-score').classList.add('green')
  }

}

/*************START************** */


function start(){
    
isStart = !isStart
gust=0;
home=0;
document.getElementById('home-score').innerText=0
document.getElementById('gust-score').innerText=0
document.getElementById('time').innerText=0

    
        if(document.getElementById('start').innerHTML =='Start')
    {
        timee(isStart=true)
        count=1
        document.getElementById('start').innerHTML='End'
          /**********INABLING THE BUTTONS************************/   
          for(let i=1;i<=7;i++){
               document.getElementById(`${i}`) .disabled=false
          }
       

      
    }else  {
       
         document.getElementById('start').innerHTML='Start'
         timee(isStart=false)
         
        for(let i=1;i<=7;i++){
               document.getElementById(`${i}`) .disabled=true
          }
       
        }       
}



/************TIMER************ */

function timee(start){
 
        
if(start == true){
        time = setInterval(()=>{
        if(document.getElementById('time').innerText === 0){
            
           return 0
        }else{
        document.getElementById('time').innerText=count
                count++}
            }, 1000);
    
}else{
    clearTimeout(time)
     
}

}
/******************PAUSE*************** */
let ispaused=false
function pause(){
    
    ispaused = !ispaused
    console.log(ispaused)
     if(document.getElementById('start').innerHTML =='Start')
    {
       
     count=0
    }
    if(ispaused){ 
        for(let i=1;i<7;i++){
               document.getElementById(`${i}`) .disabled=true
          
          }
          document.getElementById('7').innerText='Resume'
   }else{
          for(let i=1;i<7;i++){
               document.getElementById(`${i}`) .disabled=false
               }
               document.getElementById('7').innerText='Pause'
               }
    console.log(59-count)
    document.getElementById('time').innerText=count
    isStart =  !isStart
    timee(isStart)
}
/**************************** */