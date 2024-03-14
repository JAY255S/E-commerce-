let card =document.querySelectorAll('.card');
let num=0;
let submit=document.getElementById('submit');
document.querySelector('.carditems').style.display="none"
card.forEach(function(cards){
    cards.addEventListener("click",function(){
        console.log("cards");
        document.querySelector('.carditems').style.display="block"
        num++;
        document.querySelector('#cardnum').innerHTML=num;
        let div = document.createElement("div");
        div.classList.add("cardList");
        div.innerHTML=`
        <i class="fa-solid fa-xmark" onclick="remove()" ></i>
        <img src=${
            cards.firstElementChild.src
        }
        <p>$199</p>
        `
        document.querySelector('.carditems').appendChild(div);    
    })
})
function remove(){
    num--;
    let cardlist=document.querySelectorAll('.cardList');
    cardlist.forEach(function(currentitems){
        currentitems.addEventListener("click",function(){
            if(num==0){
                document.querySelector('.carditems').style.display="none"
            }
            currentitems.style.display="none"
            // cardlist.removeChild(div);
            document.querySelector('#cardnum').innerHTML=num;
        })
    })
}
submit.addEventListener("click",function(){
    let email=document.getElementById("email");
    let pass=document.getElementById("pass");
    if(email.value == ""  && pass == ""){
        alert("Enter the email and password");
    }
    else{
        alert("Thank for logged in");
    }
})