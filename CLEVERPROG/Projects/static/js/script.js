// alert("hello");
// console.log('hello world');
function ageindays(){
var birthyear=prompt('what is your age');
var ageindayss= (2020-birthyear)*365;
var h1=document.createElement('h1');
var textindays =document.createTextNode('you are '+ageindayss+' old');
h1.setAttribute('id','ageindays');
h1.appendChild(textindays);
document.getElementById('flex-box-result').appendChild(h1);
console.log(ageindayss);
}
function reset(){
    document.getElementById('ageindays').remove();

}

function generate(){

     let image=document.createElement('img');  
     let div=document.getElementById('flex-cat-gen');  
     image.src="https://i.pinimg.com/originals/c3/2b/fa/c32bfa16bcf864e478d3ddfe32440268.gif";
     div.appendChild(image);
    
}

//challenge 3 rock paper scissor
function rpsgame(yourchoice){
    //  console.log(yourchoice.id);
      let humanchoice=yourchoice.id;
      botchoice=numbertochoice(number());
     //console.log(botchoice);
     let result=decidewinner(humanchoice,botchoice);
     console.log(result);
     let message =finalmessage(result);
     console.log(message);
     fpsfrontend(humanchoice,botchoice,message);
}

function number(){
    return Math.floor(Math.random() * 3);
}
function numbertochoice(num){
    return ['rock','paper','scissor'][num];
}
function decidewinner(yourchoice,compchoice){
   rpsdatabase={
       'rock':{'scissor':1,'rock':0.5,'paper':0},
       'paper':{'rock':1,'paper':0.5,'scissor':0},
       'scissor':{'paper':1,'scissor':0.5,'rock':0}
   };
   let yourscore=rpsdatabase[yourchoice][compchoice];
   let compscore=rpsdatabase[compchoice][yourchoice];
   return [yourscore,compscore];

}
function finalmessage([yourscore,compscore]){
       if(yourscore == 0){
        return {'message':'youlost','color':'red'};
       }else if(yourscore == 0.5){
        return {'message':'youtied','color':'yellow'};
       }else{
        return {'message':'youwon','color':'green'};
       }
}

function fpsfrontend(humanchoice,botchoice,finalmessage){
    let imagesdatabase={
        'rock':document.getElementById('rock').src,
        'paper':document.getElementById('paper').src,
        'scissor':document.getElementById('scissor').src
      }
 //remove images on click
      document.getElementById('rock').remove();
      document.getElementById('paper').remove();
      document.getElementById('scissor').remove();

      let humanchoicediv=document.createElement('div');
      let botchoicediv =document.createElement('div');
      let finalmessagediv=document.createElement('div');

      humanchoicediv.innerHTML="<img src ='"+imagesdatabase[humanchoice]+"'height=150 width=150 style='box-shadow:0px 5px 50px rgba(0,0,225,1);'>"
      finalmessagediv.innerHTML="<h1 style='color: "+finalmessage['color']+";font-size:60px; padding:10px;'>"+finalmessage['message']+ "</h1>"
      botchoicediv.innerHTML="<img src='"+imagesdatabase[botchoice]+"' height=150 width=150 style='box-shadow: 0px 5px 50px rgba(225,0,0,1);'>"
      
      document.getElementById('flex-box-rps-div').appendChild(humanchoicediv);
      document.getElementById('flex-box-rps-div').appendChild(finalmessagediv);
      document.getElementById('flex-box-rps-div').appendChild(botchoicediv);
      

}

//challenge change color
var allbuttons = document.getElementsByTagName('button');
var storebuttons = ['btn-primary','btn-danger','btn-success','btn-primary','btn-danger','btn-warning','btn-success'];
// for (var i = 0; i < allbuttons.length; i++) {
//     console.log(i);
    // console.log('hello');
    // storebuttons.push(allbuttons[i].classList[1]);
    
//  }

console.log(storebuttons);
console.log(allbuttons);

   


function changecolorall(buttonthingy){
        if(buttonthingy.value === 'red'){
              allred();
        }else if(buttonthingy.value === 'green'){
             allgreen();
        }else if(buttonthingy.value === 'reset'){
          allreset();
        }else if(buttonthingy.value === 'random'){
          allrandom();
        }
}

function allred(){
    for(let i=0;i<allbuttons.length;i++){
    allbuttons[i].classList.remove(allbuttons[i].classList[1]);
    allbuttons[i].classList.add('btn-danger');
    console.log('red');
}}
function allgreen(){
    for(let i=0;i<allbuttons.length;i++){
    allbuttons[i].classList.remove(allbuttons[i].classList[1]);
    allbuttons[i].classList.add('btn-success');
}}
function allreset(){
    for(let i=0;i<allbuttons.length;i++){
    allbuttons[i].classList.remove(allbuttons[i].classList[1]);
    allbuttons[i].classList.add(storebuttons[i]);
}}

function allrandom(){
    let choices=['btn-primary','btn-danger','btn-warning','btn-success'];
    
    for(let i=0;i<allbuttons.length;i++){
        let randomnum=Math.floor(Math.random()*4);
         allbuttons[i].classList.remove(allbuttons[i].classList[1]);
         allbuttons[i].classList.add(choices[randomnum]);
    }
    
}
//challenge 5 blackjack
let blackjackgame={
    'you':{'scoreSpan':'#userresult','div':'#userplays','score':0},
    'bot':{'scoreSpan':'#botresult','div':'#botplays','score':0},
    'cards':['2','3','4','5','6','7','8','9','10','A','J','K','Q'],
    'cardsmap':{'2':2,'3':3,'4':4,'5':5,'6':6,'7':7,'8':8,'9':9,'10':10,'J':10,'K':10,'Q':10,'A':[1,11]},
    'wins':0,
    'losses':0,
    'draws':0,
    'isstand':false,
    'turnsover':false,
};
const YOU=blackjackgame['you']
const BOT=blackjackgame['bot']
const hitsound=new Audio('static/sounds/swish.m4a');
const winsound =new Audio('static/sounds/cash.mp3');
const losssound =new Audio('static/sounds/aww.mp3');
document.querySelector('#hitbutton').addEventListener('click',blackjackhit);
document.querySelector('#dealbutton').addEventListener('click',blackjackdeal);
document.querySelector('#standbutton').addEventListener('click',dealercase);
function blackjackhit(){
    if(blackjackgame['isstand']== false){
    let card=randomcard();
    console.log(card);
  showcard(card,YOU);
  updatescore(card,YOU);
  console.log(YOU['score']);
   showscore(YOU);
    }
}
function randomcard(){
    let index=Math.floor(Math.random()*13);
    return blackjackgame['cards'][index];
}
function showcard(card,activeplayer){
    if(activeplayer['score']<=21){
    let cardimage=document.createElement('img');
    cardimage.src=`static/images/${card}.png`;
    document.querySelector(activeplayer['div']).appendChild(cardimage);
    hitsound.play();
    }
}
function blackjackdeal(){
    if(blackjackgame['turnsover']==true){
        blackjackgame['isstand']=false;
    let yourimages=document.querySelector('#userplays').querySelectorAll('img');
   let botimages=document.querySelector('#botplays').querySelectorAll('img');
   

    for(let i=0;i<yourimages.length;i++){
     yourimages[i].remove();
    }
    for(let i=0;i<botimages.length;i++){
        botimages[i].remove();
       }
    YOU['score']=0;
    BOT['score']=0;
    document.querySelector('#userresult').textContent=0;
    document.querySelector('#userresult').style.color='white';
    document.querySelector('#botresult').textContent=0;
    document.querySelector('#botresult').style.color='white';
    document.querySelector('#blackjack-result').textContent='Let\'s play';
    document.querySelector('#blackjack-result').style.color='black';
    blackjackgame['turnsover']=false;
    }
}

function updatescore(card,activeplayer){
    //if adding  keeps me below 21,add 11.otherwise add 1
    if(card=='A'){
        if(activeplayer['score']+blackjackgame['cardsmap'][card][1]<=21){
            activeplayer['score']+=blackjackgame['cardsmap'][card][1];
        }else{
        activeplayer['score']+=blackjackgame['cardsmap'][card][0];
        }
    }else{
    activeplayer['score']+=blackjackgame['cardsmap'][card];
    }
    
}

function showscore(activeplayer){
    if(activeplayer['score']>21){
document.querySelector(activeplayer['scoreSpan']).textContent='BUSTED!';
 document.querySelector(activeplayer['scoreSpan']).style.color='red';
    }else{
     document.querySelector(activeplayer['scoreSpan']).textContent=activeplayer['score'];
    }
}
function sleep(ms){
    return new Promise(resolve =>setTimeout(resolve,ms));
}

async function dealercase(){
    
    blackjackgame['isstand']=true;
    while(BOT['score']<16 && blackjackgame['isstand']==true){
    let card =randomcard();
    showcard(card,BOT);
    updatescore(card,BOT);
    showscore(BOT);
    await sleep(1000);
}
  
       blackjackgame['turnsover']=true;
   let winner=computewinner();
   showresult(winner);
  
   
    
}
//compute winner and return who won
function computewinner(){
    let winner;
    if(YOU['score']<=21){
        //HIGHER SCORE THAN BOT OR WHEN BOT BUSTS BUT YOURE
        if(YOU['score']>BOT['score'] || BOT['score']>21){
            blackjackgame['wins']++;
        console.log('you won!');
        winner=YOU;
        }else if(YOU['score']<BOT['score']){
            blackjackgame['losses']++;
            console.log('you lost!');
            winner=BOT;
        }else if(YOU['score']==BOT['score']){
            blackjackgame['draws']++;
            console.log('you drew!');
        }

    }
    //when user busts but bot doesnt
    else if(YOU['score']>21 && BOT['score']<=21){
        blackjackgame['losses']++;
        console.log('you lost!');
        winner=BOT;
        //WHEN YOU AND BOT BUSTS
    }else if(YOU['score']>21 && BOT['score']>21){
        blackjackgame['draws']++;
        console.log('you drew!');
    }
    console.log('winner is ',winner);
    console.log(blackjackgame);
    return winner;
}

function showresult(winner){
    if(blackjackgame['turnsover']==true){
  let message,messagecolor;
  if(winner==YOU){
      document.querySelector('#wins').textContent=blackjackgame['wins'];
   message='you won!';
   messagecolor='green';
   winsound.play();
  }else if(winner==BOT){
    document.querySelector('#losses').textContent=blackjackgame['losses'];
     message='you lost!';
     messagecolor='red';
     losssound.play();
  }else{
    document.querySelector('#draws').textContent=blackjackgame['draws'];
      message='you drew!';
      messagecolor='black';
  }
  document.querySelector('#blackjack-result').textContent=message;
  document.querySelector('#blackjack-result').style.color=messagecolor;
}
}