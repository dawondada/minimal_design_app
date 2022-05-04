// main.js

window.addEventListener("load",function(){

/*  클릭  */

const menuBtn = document.querySelector(".btn_menu");
const srchBtn = document.querySelector(".srch");
const srchBox = document.querySelector(".srch_box");
const srchClose = document.querySelector(".btn_close");
const filterBox = document.querySelector(".filter_box");
const filterClose = document.querySelector(".filter_close");
const bg = document.querySelector(".bg");
const bodyAll = document.querySelector("body");

menuBtn.addEventListener("click",function(e){
    e.preventDefault();
    filterBox.classList.add("on");
    bg.classList.add("on");
    bodyAll.classList.add("on");
});

filterClose.addEventListener("click",function(e){
    e.preventDefault();
    filterBox.classList.remove("on");
    bg.classList.remove("on");
    bodyAll.classList.remove("on");
});

srchBtn.addEventListener("click",function(e){
    e.preventDefault();
    srchBox.classList.add("on");
    bg.classList.add("on");
    bodyAll.classList.add("on");
});

srchClose.addEventListener("click",function(e){
    e.preventDefault();
    srchBox.classList.remove("on");
    bg.classList.remove("on");
    bodyAll.classList.remove("on");
});

/*  banner  */
//main_banner

const mainBtnPrev = document.querySelector(".main_btnPrev");
const mainBtnNext = document.querySelector(".main_btnNext");
const bnnWrap = document.querySelector(".banner_wrap");
const sectionAll = document. querySelectorAll(".banner_wrap > section");
const bnnWid = document.querySelector(".banner_wrap > section").offsetWidth;
const lastIdx = bnnWrap.children.length;
const sectionLen = sectionAll.length;

let sectionNum = 0;
const sectionSpeed = 600;

let firstSection = bnnWrap.firstElementChild.cloneNode(true);
let lastSection = bnnWrap.lastElementChild.cloneNode(true);

bnnWrap.appendChild(firstSection);
bnnWrap.insertBefore(lastSection,bnnWrap.children[0]);

bnnWrap.style.transform = "translateX(-" + (bnnWid*(sectionNum+1))+ "px)"

let curNum = sectionNum;
console.log(sectionLen);

mainBtnNext.addEventListener("click",function(e){
    curNum++;
    e.preventDefault();
    if(curNum<=sectionLen-1){
        bnnWrap.style.transform = "translateX(-" + (bnnWid*(curNum + 2))+ "px)" 
        bnnWrap.style.transition = sectionSpeed + "ms"
    }
    if(curNum===sectionLen-1){
        setTimeout(function(){
            bnnWrap.style.transform = "translateX(-" + bnnWid + "px)" 
            bnnWrap.style.transition = "0ms"
        },sectionSpeed);
        curNum = -1;
    }
});


mainBtnPrev.addEventListener("click",function(e){
    curNum--;
    e.preventDefault();
    if(curNum>=-1){
        bnnWrap.style.left = -(bnnWid*curNum) + "px"
        bnnWrap.style.transition = sectionSpeed + "ms"
    }
    if(curNum===-1){
        setTimeout(function(){
            bnnWrap.style.left = -(bnnWid*(sectionLen)) + "px"
            bnnWrap.style.transition = "0ms"
        },sectionSpeed);
        curNum = sectionLen;
    }

});
/*

bnnWrap.appendChild(firstSection);
bnnWrap.insertBefore(lastSection,bnnWrap.children[0]);

bnnWrap.style.left = -(bnnWid*(sectionNum+1)) + "px"

mainBtnNext.addEventListener("click",function(e){
    curNum++;
    e.preventDefault();
    if(curNum<=lastIdx){
        bnnWrap.style.left = -(bnnWid*(curNum+2)) + "px"
        bnnWrap.style.transition = sectionSpeed + "ms"
    }
    if(curNum===lastIdx){
        setTimeout(function(){
            bnnWrap.style.left = -bnnWid + "px"
            bnnWrap.style.transition = "0ms"
        },sectionSpeed);
        curNum = -1;
    }
});

mainBtnPrev.addEventListener("click",function(e){
    curNum--;
    e.preventDefault();
    if(curNum>=0){
        bnnWrap.style.left = -(bnnWid*curNum) + "px"
        bnnWrap.style.transition = sectionSpeed + "ms"
    }
    if(curNum===0){
        setTimeout(function(){
            bnnWrap.style.left = -(bnnWid*(lastIdx+1)) + "px"
            bnnWrap.style.transition = "0ms"
        },sectionSpeed);
        curNum = lastIdx+1;
    }

});


*/ 


});