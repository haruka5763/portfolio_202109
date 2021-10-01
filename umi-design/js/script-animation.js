window.addEventListener("scroll", function() {
    //現在のスクロール位置を取得
    let scroll = document.documentElement.scrollTop;
    console.log(scroll);

if (window.matchMedia('(max-width: 399px)').matches) {
//=========================スマホ処理=========================

    

    //STEP
    if (scroll > 920) {
        let obj = document.getElementById("flow-obj");
        let list = obj.classList;
        list.add("flow-js-animation-show");
    } else {
        console.log("error");
    }
    
    if (scroll > 930) {
        let obj = document.getElementById("flow-obj");
        let list = obj.classList;
        list.add("flow-js-animation-show");
    } else {
        console.log("error");
    }

    if (scroll > 930) {
        let obj = document.getElementById("step-01-1");
        let list = obj.classList;
        list.add("flow-js-animation-show");
        
        let obj1 = document.getElementById("step-01-2");
        let list1 = obj1.classList;
        list1.add("flow-js-animation-show");

        let obj12 = document.getElementById("step-01-3");
        let list12 = obj12.classList;
        list12.add("flow-js-animation-show");
        



        let obj2 = document.getElementById("step-02-1");
        let list2 = obj2.classList;
        list2.add("flow-js-animation-show");
        
        let obj3 = document.getElementById("step-02-2");
        let list3 = obj3.classList;
        list3.add("flow-js-animation-show");

        let obj31 = document.getElementById("step-02-3");
        let list31 = obj31.classList;
        list31.add("flow-js-animation-show");




        
        let obj4 = document.getElementById("step-03-1");
        let list4 = obj4.classList;
        list4.add("flow-js-animation-show");
        
        let obj5 = document.getElementById("step-03-2");
        let list5 = obj5.classList;
        list5.add("flow-js-animation-show");
        
        let obj51 = document.getElementById("step-03-3");
        let list51 = obj51.classList;
        list51.add("flow-js-animation-show");
    } else {
        console.log("error");
    }

    //問い合わせフォーム
    if (scroll > 1850) {
        let obj = document.getElementById("contact-obj");
        let list = obj.classList;
        console.log(list);
        list.add("flow-js-animation-show");
    } else {
        console.log("error");
    }

    //Blog
    if (scroll > 3200) {
        let obj = document.getElementById("blog-obj");
        let list = obj.classList;
        console.log(list);
        list.add("flow-js-animation-show");
    } else {
        console.log("error");
    }
    
    } else if (window.matchMedia('(min-width:400px)').matches) {
//=========================PC処理=========================
    if (scroll > 300) {
        let obj = document.getElementById("what-obj");
        let list = obj.classList;
        list.add("what-js-animation-show");
    } else {
        console.log("error");
    } 
    
    if(scroll > 1000) {
        let about_obj_01 = document.getElementById("about-obj-01");
        let about_list_01 = about_obj_01.classList;
        about_list_01.add("about-js-animation-show");

        let about_obj_02 = document.getElementById("about-obj-02");
        let about_list_02 = about_obj_02.classList;
        about_list_02.add("about-js-animation-show");

        let about_obj_03 = document.getElementById("about-obj-03");
        let about_list_03 = about_obj_03.classList;
        about_list_03.add("about-js-animation-show");

        let about_obj_04 = document.getElementById("about-obj-04");
        let about_list_04 = about_obj_04.classList;
        about_list_04.add("about-js-animation-show");

    } else {
        console.log("error");
    } 
    
    if(scroll > 1400) {
        let about_obj_05 = document.getElementById("about-obj-05");
        let about_list_05 = about_obj_05.classList;
        about_list_05.add("about-js-animation-show");

        let about_obj_06 = document.getElementById("about-obj-06");
        let about_list_06 = about_obj_06.classList;
        about_list_06.add("about-js-animation-show");

        let about_obj_07 = document.getElementById("about-obj-07");
        let about_list_07 = about_obj_07.classList;
        about_list_07.add("about-js-animation-show");

        let about_obj_08 = document.getElementById("about-obj-08");
        let about_list_08 = about_obj_08.classList;
        about_list_08.add("about-js-animation-show");

    } else {
        console.log("error");
    } 
    
    if (scroll > 2600) {
        let obj = document.getElementById("flow-obj");
        let list = obj.classList;
        console.log(list);
        list.add("flow-js-animation-show");
    } else {
        console.log("error");
    }
    
    if (scroll > 2700) {
        let obj = document.getElementById("flow-obj");
        let list = obj.classList;
        console.log(list);
        list.add("flow-js-animation-show");
    } else {
        console.log("error");
    }

    if (scroll > 2750) {
        let obj = document.getElementById("step-01-1");
        let list = obj.classList;
        list.add("flow-js-animation-show");
        
        let obj1 = document.getElementById("step-01-2");
        let list1 = obj1.classList;
        list1.add("flow-js-animation-show");

        let obj12 = document.getElementById("step-01-3");
        let list12 = obj12.classList;
        list12.add("flow-js-animation-show");
        



        let obj2 = document.getElementById("step-02-1");
        let list2 = obj2.classList;
        list2.add("flow-js-animation-show");
        
        let obj3 = document.getElementById("step-02-2");
        let list3 = obj3.classList;
        list3.add("flow-js-animation-show");

        let obj31 = document.getElementById("step-02-3");
        let list31 = obj31.classList;
        list31.add("flow-js-animation-show");




        
        let obj4 = document.getElementById("step-03-1");
        let list4 = obj4.classList;
        list4.add("flow-js-animation-show");
        
        let obj5 = document.getElementById("step-03-2");
        let list5 = obj5.classList;
        list5.add("flow-js-animation-show");
        
        let obj51 = document.getElementById("step-03-3");
        let list51 = obj51.classList;
        list51.add("flow-js-animation-show");
    } else {
        console.log("error");
    }

    //問い合わせフォーム
    if (scroll > 3300) {
        let obj = document.getElementById("contact-obj");
        let list = obj.classList;
        console.log(list);
        list.add("flow-js-animation-show");
    } else {
        console.log("error");
    }

    //Blog
    if (scroll > 4750) {
        let obj = document.getElementById("blog-obj");
        let list = obj.classList;
        console.log(list);
        list.add("flow-js-animation-show");
    } else {
        console.log("error");
    }
    }



});