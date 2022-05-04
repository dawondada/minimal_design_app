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
    const btnFilter = document.querySelector(".gotoFilter");
    console.log(bodyAll);
    
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

    btnFilter.addEventListener("click",function(e){
        e.preventDefault();
        srchBox.classList.remove("on");
        filterBox.classList.add("on");
        bg.classList.add("on");
        bodyAll.classList.add("on");
    });
    

    /*  filter  */
    const filterList = document.querySelectorAll(".filterList");
    const resetBtn = document.querySelector(".reset");

    for(var i=0;i<filterList.length;i++){
        filterList[i].addEventListener("click",function(){
           this.classList.toggle("on");
        });
    }

    resetBtn.addEventListener("click",function(e){
        e.preventDefault();
        for(var i=0;i<filterList.length;i++){
            filterList[i].classList.remove("on");
        }
    });

    /*  banner  */
    //main_banner
    
    const mainBtnPrev = document.querySelector(".main_btnPrev");
    const mainBtnNext = document.querySelector(".main_btnNext");
    const bnnWrap = document.querySelector(".banner_wrap");
    const bnnWid = document.querySelector(".banner_wrap > section").offsetWidth;
    const lastIdx = bnnWrap.children.length-1;
    const mainRoll = document.querySelectorAll(".banner_roll > p");
    console.log(mainRoll);
  
    let sectionNum = 0;


    mainBtnNext.addEventListener("click",function(){
        sectionNum++;
        if(sectionNum>lastIdx) sectionNum=0;
        bnnWrap.style.left = (-bnnWid*sectionNum) +"px";

        for(var i=0;i<mainRoll.length;i++){
            mainRoll[i].classList.remove("on");
        }
        mainRoll[sectionNum].classList.add("on");

    });
    
    mainBtnPrev.addEventListener("click",function(){
        sectionNum--;
        if(sectionNum<0) sectionNum=lastIdx;
        bnnWrap.style.left = (-bnnWid*sectionNum) +"px";

        for(var i=0;i<mainRoll.length;i++){
            mainRoll[i].classList.remove("on");
        }
        mainRoll[sectionNum].classList.add("on");
    });
    
    function mainAuto() {
        sectionNum++;
        if(sectionNum>lastIdx) sectionNum=0;
        bnnWrap.style.left = (-bnnWid*sectionNum) +"px";

        for(var i=0;i<mainRoll.length;i++){
            mainRoll[i].classList.remove("on");
        }
        mainRoll[sectionNum].classList.add("on");
    }

    let $mainAuto = setInterval(mainAuto,5000)

    mainRoll.forEach(function(item){
        item.addEventListener("click",mainRollAction)
    });


    function mainRollAction(item){
        carRollMain = item.currentTarget;
        parentRollm = carRollMain.parentElement;
        childRollm = parentRollm.children;
        $rollNum = Array.from(childRollm).indexOf(carRollMain);

        bnnWrap.style.left = (-bnnWid*$rollNum) +"px";

        for(var i=0;i<mainRoll.length;i++){
            mainRoll[i].classList.remove("on");
        }
        mainRoll[$rollNum].classList.add("on");

        sectionNum = $rollNum;
    };


    //content_banner
    const contentUl = document.querySelector(".content_frame > ul");
    const contentLi = document.querySelectorAll(".content_frame > ul > li")
    const contentWid = document.querySelector(".content_frame > ul > li").offsetWidth;
    let contentNum = 0;
    const lastContent = contentUl.children.length-1;
    const contentRoll = document.querySelectorAll(".content_roll > p");
    console.log();

    let $contentAuto = setInterval(contentAuto,6000)

    function contentAuto(){
        contentNum++;
        if(contentNum>lastContent) contentNum=0;
        contentUl.style.left = -(contentWid*contentNum) +"px";
        
        for(var i=0;i<contentRoll.length;i++){
            contentRoll[i].classList.remove("on");
        }
        contentRoll[contentNum].classList.add("on");
    };

    
    contentRoll.forEach(function(idx){
        idx.addEventListener("click",conRollAction);
    });

    function conRollAction(idx){
        curRollc = idx.currentTarget;
        curRollparent = curRollc.parentElement;
        curRollchild = curRollparent.children;
        curRollNum = Array.from(curRollchild).indexOf(curRollc);

        contentUl.style.left = -(contentWid*curRollNum) +"px";

        for(var i=0;i<contentRoll.length;i++){
            contentRoll[i].classList.remove("on");
        }
        contentRoll[curRollNum].classList.add("on");

        contentNum = curRollNum;
    };



    /*
    
    //무한루프배너
    
    const sectionSpeed = 600;
    
    let firstSection = bnnWrap.children[0].cloneNode(true);
    let lastSection = bnnWrap.children[lastIdx].cloneNode(true);
    
    console.log(bnnWid);
    bnnWrap.appendChild(firstSection);
    bnnWrap.insertBefore(lastSection,bnnWrap.children[0]);
    
    bnnWrap.style.left = -(bnnWid*(sectionNum+1)) + "px"
    
    
    mainBtnNext.addEventListener("click",function(e){
        e.preventDefault();
    
    });
    
    
    
    */ 
    
    
    });