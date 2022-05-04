// main.js

window.addEventListener("load",function(){

    //뒤로가기 버튼
    const pageBack = document.querySelector(".pagePrev");
    
    pageBack.addEventListener("click",function(){
        history.go(-1);
    });

    /* 하단버튼 */
    

    /*  인테리어 메인 배너  */ 
    const bannerWrap = document.querySelector(".main_frame > ul");
    const bnnWid = document.querySelector(".main_frame > ul > li").offsetWidth;
    const bnnLen = bannerWrap.children.length-1;
    const btnPrev = document.querySelector(".btnPrev");
    const btnNext = document.querySelector(".btnNext");
    const bnnRoll = document.querySelectorAll(".banner_roll > p");
    let bnnNum = 0;

    //버튼
    btnNext.addEventListener("click",function(){
        bnnNum++;
        if(bnnNum>bnnLen) bnnNum=0;
        bannerWrap.style.left = -(bnnNum*bnnWid) + "px";

        for(var i=0;i<bnnRoll.length;i++){
            bnnRoll[i].classList.remove("on");
        } 
        bnnRoll[bnnNum].classList.add("on");     
    });

    btnPrev.addEventListener("click",function(){
        bnnNum--;
        if(bnnNum<0) bnnNum=bnnLen;
        bannerWrap.style.left = -(bnnNum*bnnWid) + "px";
        
        for(var i=0;i<bnnRoll.length;i++){
            bnnRoll[i].classList.remove("on");
        } 
        bnnRoll[bnnNum].classList.add("on");  
    });

    //롤
    bnnRoll.forEach(function(item){
        item.addEventListener("click",bnnRollAction)
    });

    function bnnRollAction(item){
        curRoll = item.currentTarget;
        rollParent = curRoll.parentElement;
        rollChild = rollParent.children;
        $rollNum = Array.from(rollChild).indexOf(curRoll);

        bannerWrap.style.left = -($rollNum*bnnWid) +"px";

        for(var i=0;i<bnnRoll.length;i++){
            bnnRoll[i].classList.remove("on");
        } 
        bnnRoll[$rollNum].classList.add("on");

        bnnNum = $rollNum;
    }

    //오토배너
    function autoBnn(){
        bnnNum++;
        if(bnnNum>bnnLen) bnnNum=0;
        bannerWrap.style.left = -(bnnNum*bnnWid) + "px";

        for(var i=0;i<bnnRoll.length;i++){
            bnnRoll[i].classList.remove("on");
        } 
        bnnRoll[bnnNum].classList.add("on");  
    }

    let autoBanner = setInterval(autoBnn,5000);


    const livingFrame = document.querySelector(".living_frame");
    const livingUl = document.querySelector(".living_frame > ul");
    const liNum = document.querySelectorAll(".living_frame > ul > li").length-2;
    const Wid = document.querySelector(".living_frame > ul > li").offsetWidth;
    let lnum = 0;

    function liSlide(){
        lnum++;
        if(lnum>liNum) lnum=0;
        livingUl.style.left = -(lnum*Wid) +"px";        
    }

    let liAuto = setInterval(liSlide,3000);


    const smallFrame = document.querySelector(".small_frame");
    const smallUl = document.querySelector(".small_frame > ul");
    const sNum = document.querySelectorAll(".small_frame > ul > li").length-2;
    let snum = 0;

    function sSlide(){
        snum++;
        if(snum>sNum) snum=0;
        smallUl.style.left = -(snum*Wid) + "px";
    }

    let sAuto = setInterval(sSlide,4000);
    
    const workFrame = document.querySelector(".work_frame");
    const workUl = document.querySelector(".work_frame > ul");
    const wNum = document.querySelectorAll(".work_frame > ul > li").length-2;
    let wnum = 0;

    function wSlide(){
        wnum++
        if(wnum>wNum) wnum = 0;
        workUl.style.left = -(wnum*Wid) + "px";
    }

    let wAuto = setInterval(wSlide,3500);
    
    /*
    //드래그 이벤트
    let livingFrame = document.querySelector(".living_frame");
    let livingUl = document.querySelector(".living_frame > ul");
    let livingPressed = false;
    let liStartx
    let liX
    
    livingFrame.addEventListener("mousedown" , (e) => {
        e.preventDefault();
        livingPressed = true;
        liStartx = e.offsetX - livingUl.offsetLeft;
        livingFrame.style.cursor = "grabbing"
    });
    
    livingFrame.addEventListener("mouseenter", () => {
        livingFrame.style.cursor = "grab"
    });

    livingFrame.addEventListener("mouseup", () => {
        livingFrame.style.cursor = "grab"
    });

    window.addEventListener("mouseup" , () => {
        livingPressed = false;
    });
 
    livingFrame.addEventListener("mousemove" , (e) => {
        if(!livingPressed) return
        e.preventDefault();
        liX = e.offsetX;

        livingUl.style.left = liX - liStartx +"px";
        licheckBoundary()
    });

    function licheckBoundary() {
        let liOuter = livingFrame.getBoundingClientRect();
        let liInner = livingUl.getBoundingClientRect();

        if(parseInt(livingUl.style.left) > 0){
            livingUl.style.left = "0px";
        }else if(liInner.right < liOuter.right){
            livingUl.style.left = -(liInner.width - liOuter.width) + "px";
        }
    }

    let smallFrame = document.querySelector(".small_frame");
    let smallUl = document.querySelector(".small_frame > ul");
    let smallPressed = false;
    let sStartx
    let sX
  
    smallFrame.addEventListener("mousedown" , (e) => {
        e.preventDefault();
        smallPressed = true;
        sStartx = e.offsetX - smallUl.offsetLeft;
        smallFrame.style.cursor = "grabbing"
    });
    
    smallFrame.addEventListener("mouseenter", () => {
        smallFrame.style.cursor = "grab"
    });

    smallFrame.addEventListener("mouseup", () => {
        smallFrame.style.cursor = "grab"
    });

    window.addEventListener("mouseup" , () => {
        smallPressed = false;
    });
 
    smallFrame.addEventListener("mousemove" , (e) => {
        if(!smallPressed) return
        e.preventDefault();
        sX = e.offsetX;

        smallUl.style.left = sX - sStartx +"px";
        scheckBoundary()
    });

    function scheckBoundary() {
        let sOuter = smallFrame.getBoundingClientRect();
        let sInner = smallUl.getBoundingClientRect();

        if(parseInt(smallUl.style.left) > 0){
            smallUl.style.left = "0px";
        }else if(sInner.right < sOuter.right){
            smallUl.style.left = -(sInner.width - sOuter.width) + "px";
        }
    }

    let workFrame = document.querySelector(".work_frame");
    let workUl = document.querySelector(".work_frame > ul");
    let workPressed = false;
    let wStartx
    let wX

    workFrame.addEventListener("mousedown" , (e) => {
        e.preventDefault();
        workPressed = true;
        wStartx = e.offsetX - workUl.offsetLeft;
        workFrame.style.cursor = "grabbing"
    });
    
    workFrame.addEventListener("mouseenter", () => {
        workFrame.style.cursor = "grab"
    });

    workFrame.addEventListener("mouseup", () => {
        workFrame.style.cursor = "grab"
    });

    window.addEventListener("mouseup" , () => {
        workPressed = false;
    });
 
    workFrame.addEventListener("mousemove" , (e) => {
        if(!workPressed) return
        e.preventDefault();
        wX = e.offsetX;

        workUl.style.left = wX - wStartx +"px";
        wcheckBoundary()
    });

    function wcheckBoundary() {
        let wOuter = workFrame.getBoundingClientRect();
        let wInner = workUl.getBoundingClientRect();

        if(parseInt(workUl.style.left) > 0){
            workUl.style.left = "0px";
        }else if(wInner.right < wOuter.right){
            workUl.style.left = -(wInner.width - wOuter.width) + "px";
        }
    }

    let liLI = document.querySelectorAll(".living_frame > ul >li");
    let sLi = document.querySelectorAll(".small_frame > ul > li");
    let wLi = document.querySelectorAll(".work_frame > ul > li");

    for(var i=0; i<liLI.length;i++){
        liLI[i].addEventListener("click", (e) => {
            e.preventDefault();
        })
    }
    for(var i=0; i<sLi.length;i++){
        sLi[i].addEventListener("click", (e) => {
            e.preventDefault();
        })
    }
    for(var i=0; i<wLi.length;i++){
        wLi[i].addEventListener("click", (e) => {
            e.preventDefault();
        })
    }
    */

    
    /*
    //  스와이프 ??  
    const livingFrame = document.querySelector(".living_frame");
    const livingUl = document.querySelector(".living_frame > ul");

    let livingStartPos = 0;
    let livingOffset= 0;
    let livingCurPos = 0;
    const livingScreenWid = livingFrame.clientWidth;

    livingFrame.addEventListener("touchstart", (e) => {
        e.preventDefault();
        livingStartPos = e.touches[0].pageX;
        console.log(livingStartPos);
    });

    livingFrame.addEventListener("touchmove", (e) =>{
        livingOffset = livingCurPos + (e.targetTouches[0].pageX - livingStartPos);
        livingUl.style.transform = "translate3d("+ livingOffset + "px, 0px 0px)";
        livingUl.style.transitionDuration = "0s";
    });

    livingFrame.addEventListener("touchend", (e) =>{
        e.preventDefault();
        const livingSum = livingCurPos + (e.changedTouches[0].pageX - livingStartPos);
        let destination = Math.round(sum/ livingScreenWid)* livingScreenWid;
        if(destination > 0) {
            destination = 0;
        }
        else if(destination < -(livingScreenWid*4 )){
            destination = -(livingScreenWid*4);
        }
        livingUl.style.transform = "translate3d(" + destination + "px, 0px, 0px)";
        livingUl.style.transitionDuration = "300ms";
        livingCurPos = destination;

        setTimeout(() => {
            livingUl.style.transitionDuration = "0s";
        },300);
    });
    */


});