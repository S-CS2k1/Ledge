const infop = document.querySelector(".infop");
const infod = document.querySelector(".infod");
const nb = document.querySelector(".nb");
const nba = document.querySelector(".nb a");



window.addEventListener("scroll",()=>{
    let amt = window.scrollY;

    if(amt < 20){
        nb.style.backgroundColor = "rgba(0,0,0,0.5)";
        nb.style.color = "white";
        nba.style.color = "white";
    }
    if(amt > 20){
        nb.style.color = "black";
        nba.style.color = "black";
        nb.style.backgroundColor = "white";
    }
});

const cnew = document.querySelector(".new");
const cview = document.querySelector(".view");
const newButton = document.querySelector(".new span:nth-of-type(3)");
const viewButton = document.querySelector(".view span:nth-of-type(3)");
const getInfo = document.querySelector(".home .hs2");

getInfo.addEventListener("click", ()=>{
    window.scrollBy({
        top : 665,
        behavior : 'smooth'
    });
});

newButton.addEventListener("click",()=>{
    cnew.style.width = "100%";
    cview.style.width = "0%";
    cview.style.opacity = "0";
    const tran = document.querySelector("#tran");
    const tran2 = document.querySelector("#tran2");
        setTimeout(()=>{
            tran.classList.add("transition");
        },400);
        setTimeout(()=>{
            tran2.classList.add("inactive");
        },950);

    setTimeout(()=>{
        window.location.href = "CreateLedge";
    },1400);
});
viewButton.addEventListener("click",()=>{
    cview.style.width = "100%";
    cnew.style.width = "0%";
    cnew.style.opacity = "0";
    const tran = document.querySelector("#tran");
    const tran2 = document.querySelector("#tran2");
        setTimeout(()=>{
            tran.classList.add("transition");
        },400);
        setTimeout(()=>{
            tran2.classList.add("inactive2");
        },950);
});

const ledge = document.querySelector("#ledge");

ledge.addEventListener("click",()=>{
    window.scrollBy({
        top : 1650,
        behavior : 'smooth'
    });
});

const dropdown = document.querySelector(".dropdown");
const drop = document.querySelector(".drop");
const account = document.querySelector(".account");
const dropdown2 = document.querySelector(".nbd2 ul li:nth-of-type(4)");

dropdown.addEventListener("mouseover",()=>{
    drop.style.clipPath = "circle(100% at 50% 50%)";
    dropdown.style.borderBottom = "5px solid black";
});
dropdown.addEventListener("mouseout",()=>{
    drop.style.clipPath = "circle(0% at 50% 0%)";
    dropdown.style.borderBottom = "5px solid rgba(0,0,0,0)";
});
drop.addEventListener("mouseover",()=>{
    drop.style.clipPath = "circle(100% at 50% 50%)";
    dropdown.style.borderBottom = "5px solid black";
});
drop.addEventListener("mouseout",()=>{
    drop.style.clipPath = "circle(0% at 50% 0%)";
    dropdown.style.borderBottom = "5px solid rgba(0,0,0,0)";
});

dropdown2.addEventListener("mouseover",()=>{
    account.style.clipPath = "circle(100% at 50% 50%)";
    dropdown2.style.borderBottom = "5px solid black";
});
dropdown2.addEventListener("mouseout",()=>{
    account.style.clipPath = "circle(0% at 50% 0%)";
    dropdown2.style.borderBottom = "5px solid rgba(0,0,0,0)";
});
account.addEventListener("mouseover",()=>{
    account.style.clipPath = "circle(100% at 50% 50%)";
    dropdown2.style.borderBottom = "5px solid black";
});
account.addEventListener("mouseout",()=>{
    account.style.clipPath = "circle(0% at 50% 0%)";
    dropdown2.style.borderBottom = "5px solid rgba(0,0,0,0)";
});