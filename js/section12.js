const para = 
            ['<div class="d-flex"><span class="fontSpan">❝</span><p class="lead px-5">If you are looking for the mouth deliciousness, then you should definitely try the goods from the Sweet Bakery.</p></div>','<div class="d-flex"><span class="fontSpan">❝</span><p class="lead px-5">If you are looking for the mouth deliciousness, then you should definitely try the goods from the Sweet Bakery.</p></div>','<div class="d-flex"><span class="fontSpan">❝</span><p class="lead px-5">If you are looking for the mouth deliciousness, then you should definitely try the goods from the Sweet Bakery.</p></div>','<div class="d-flex"><span class="fontSpan">❝</span><p class="lead px-5">If you are looking for the mouth deliciousness, then you should definitely try the goods from the Sweet Bakery.</p></div>']

const img = 
            ['<img src="../images/user-5-62x62.jpg" class="img-fluid rounded-circle imgCircleSlider me-3 ms-3">','<img src="../images/user-6-62x62.jpg" class="img-fluid rounded-circle imgCircleSlider me-3 ms-3">','<img src="../images/user-10-62x62.jpg" class="img-fluid rounded-circle imgCircleSlider me-3 ms-3">','<img src="../images/user-11-62x62.jpg" class="img-fluid rounded-circle imgCircleSlider me-3 ms-3">']

const clientNmae = 
['<span><span class="fw-bold">JANE SMITH</span> <p class="pinkP fst-italic">client</p></span>','<span><span class="fw-bold">SAM WILLEN </span><p class="pinkP fst-italic">client</p></span>','<span><span class="fw-bold">JANE PETERSONE </span><p class="pinkP fst-italic">client</p></span>','<span><span class="fw-bold">PATHRIC GOODEN </span><p class="pinkP fst-italic">client</p></span>']

export const section12 = document.createElement('section');
    section12.setAttribute('class','section12') 

    const sec12div1 = document.createElement('div');
    sec12div1.setAttribute('class','heading text-center pt-5');
    sec12div1.innerHTML = `<h2 class="py-5">TESTIMONIALS</h2>`;

    const sec12div2 = document.createElement('div');
    sec12div2.setAttribute('id','client-list')
    sec12div2.setAttribute('class',' py-4 owl-carousel owl-theme owl-stage container');

    const div2div1 = document.createElement('div');
    div2div1.setAttribute('class',' cardSlider client')
    div2div1.innerHTML = `<div class="p-3">${para[0]} <div class="d-flex border-top pt-3 ps-4">${img[0] + clientNmae[0]}</div></div>`

    const div2divimg = document.createElement('div')
    div2divimg.setAttribute('class',' cardSlider client')
    div2divimg.innerHTML = `<div class="p-3">${para[1]} <div class="d-flex border-top pt-3 ps-4">${img[1] + clientNmae[1]}</div></div>`

    const div2div3 = document.createElement('div');
    div2div3.setAttribute('class',' cardSlider client')
    div2div3.innerHTML = `<div class="p-3">${para[2]} <div class="d-flex border-top pt-3 ps-4">${img[2] + clientNmae[2]}</div></div>`
    
    const div2div4 = document.createElement('div');
    div2div4.setAttribute('class',' cardSlider client')
    div2div4.innerHTML = `<div class="p-3">${para[3]} <div class="d-flex border-top pt-3 ps-4">${img[3] + clientNmae[3]}</div></div>`



    sec12div2.append(div2div1,div2divimg,div2div3,div2div4)
section12.append(sec12div1,sec12div2);


$(() => {
    $("#client-list").owlCarousel({
        items : 2,
        margin : 10,
        loop : true,
        nav : false,
        dots: true,
        autoplay : true,
        autoplayHoverPause: true,
        smartSpeed: 300,
        responsive : {
            0 : {
                items: 1
            },

            480 : {
                items: 1
            },

            768 : {
                items : 2
            },

            992 : {
                items : 2
            },

            1200 : {
                items : 2
            }

        }
    });

});