let card = document.querySelectorAll('.card');
let submit=document.getElementById('submit');
let num = 0;
document.querySelector(".carditems").style.display = "none";
card.forEach(function (cards) {
    cards.addEventListener("click", function () {
        console.log(cards);
        document.querySelector(".carditems").style.display = "block";  // Show the carditems.

        num++;
        document.querySelector("#cardnum").innerHTML = num;
        let div = document.createElement("div");
        div.classList.add("cardList");  //  url of image tag assign in src of image tag.
        div.innerHTML = `
        <i class="fa-solid fa-xmark" onclick="remove()"></i>
        <img src=${cards.firstElementChild.src}>  
        <p>$199</p>
        `
        document.querySelector(".carditems").appendChild(div);   // show the details of cards by using this.
    })
})
function remove() {
    num--;
    let cardList = document.querySelectorAll(".cardList");
    cardList.forEach(function (currentitem) {
        currentitem.addEventListener("click", function () {
            if (num == 0) {
                document.querySelector(".carditems").style.display = "none";
            }
            currentitem.style.display = "none";
            document.querySelector("#cardnum").innerHTML = num;
        })
    })
}
// Contact
submit.addEventListener("click",function(){
    let email=document.getElementById("email");
    let pass=document.getElementById("pass");
    if(email.value == "" && email.value== ""){
        alert("Enter email and password");
    }
    else{
        alert("Thank you for logged in");
    }
})