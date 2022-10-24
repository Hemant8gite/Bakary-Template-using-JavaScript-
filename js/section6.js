
const img = [
    '<div class="imageSlider"><img src="../images/product-1-152x160.png" class="img-fluid w-100 h-100"></div>',
    '<div class="imageSlider"><img src="../images/product-4-215x112.png" class="img-fluid w-100 h-100"></div>',
    '<div class="imageSlider"><img src="../images/product-3-179x114.png" class="img-fluid w-100 h-100 "></div>',
    '<div class="imageSlider"><img src="../images/product-2-157x127.png" class="img-fluid w-100 h-100 "></div>',
    '<div class="imageSlider"><img src="../images/product-1-152x160.png" class="img-fluid w-100 h-100 "></div>',
    '<div class="imageSlider"><img src="../images/product-4-215x112.png" class="img-fluid w-100 h-100 "></div>',
    '<div class="imageSlider"><img src="../images/product-3-179x114.png" class="img-fluid w-100 h-100 "></div>',
    '<div class="imageSlider"><img src="../images/product-2-157x127.png" class="img-fluid w-100 h-100 "></div>'
]

const heading = {
    headinOne:'<h5 class="py-3 card6Heading text-uppercase">chocolate pudding</h5>',
    headinTwo:'<h5 class="py-3 card6Heading text-uppercase">Chocolate coockies</h5>',
    headinThree:'<h5 class="py-3 card6Heading text-uppercase">Chocolate Truffles</h5>'
}

const para = {
    paraOne:  '<p class="">Chocolate Truffles</p>',
    paraTwo:  '<p class="">Chocolate Truffles</p>',
    paraThree: '<p class="">Chocolate Truffles</p>'
}

const button = [
    '<button class="SliderPinkButton"><i class="fas fa-search"></i></button>',
    '<button class="SliderPinkButton"><i class="fas fa-shopping-cart"></i></button>'
]

export const section6 = document.createElement('section');
    section6.setAttribute('class','section6 py-5');

    const container = document.createElement('div');
    container.setAttribute('class',' container overflow-hidden')


    const sec6div1 = document.createElement('div')
    sec6div1.setAttribute('class','heading text-center pt-5')
    sec6div1.innerHTML = `<h2 class=" pb-4">NEW  PRODUCTS</h2>`;

    const sec6div2 = document.createElement('div');
    sec6div2.setAttribute('class',' text-center owl-carousel owl-theme owl-stage');
    sec6div2.setAttribute('id','myCoursol2')
    
    const div2One =document.createElement('div');
    div2One.setAttribute('class','client sec6card')
    div2One.innerHTML = `
    <div class="p-4">
        ${img[0]}
        <div>
            ${heading.headinThree}
        </div>
        <div class="product-price"><del class="Delted pe-3">$20.00</del>$10.00</div>
        <div>
            ${button[0]+button[1]}
        </div>
    </div>`

    const div2Two =document.createElement('div');
    div2Two.setAttribute('class','client sec6card')
    div2Two.innerHTML = `
    <div class="p-4">
        ${img[1]}
        <div>
            ${heading.headinOne}
        </div>
        <div class="product-price">$20.00</div>
        <div>
            ${button[0]+button[1]}
        </div>
    </div>`

    const div2Three =document.createElement('div');
    div2Three.setAttribute('class','client sec6card')
    div2Three.innerHTML =`
    <div class="p-4">
        ${img[2]}
        <div>
            ${heading.headinOne}
        </div>
        <div class="product-price"><del class="Delted pe-3">$30.00</del>$25.00</div>
        <div>
            ${button[0]+button[1]}
        </div>
    </div>`

    const div2Four =document.createElement('div');
    div2Four.setAttribute('class','client sec6card')
    div2Four.innerHTML = `
    <div class="p-4">
        ${img[3]}
        <div>
            ${heading.headinThree}
        </div>
        <div class="product-price">$13.00</div>
        <div>
            ${button[0]+button[1]}
        </div>
    </div>`

    const div2Five =document.createElement('div');
    div2Five.setAttribute('class','client sec6card')
    div2Five.innerHTML = `
    <div class="p-4">
        ${img[4]}
        <div>
            ${heading.headinOne}
        </div>
        <div class="product-price"> <del class="Delted pe-3">$35.00</del> $25.00</div>
        <div>
            ${button[0]+button[1]}
        </div>
    </div>`

    const div2Six =document.createElement('div');
    div2Six.setAttribute('class','client sec6card')
    div2Six.innerHTML =`
    <div class="p-4">
        ${img[5]}
        <div>
            ${heading.headinTwo}
        </div>
        <div class="product-price">$25.00</div>
        <div>
            ${button[0]+button[1]}
        </div>
    </div>`

    const div2Seven =document.createElement('div');
    div2Seven.setAttribute('class','client sec6card')
    div2Seven.innerHTML =`
    <div class="p-4">
        ${img[6]}
        <div>
            ${heading.headinOne}
        </div>
        <div class="product-price">$23.00</div>
        <div>
            ${button[0]+button[1]}
        </div>
    </div>`

    const div2Eght =document.createElement('div');
    div2Eght.setAttribute('class','client sec6card')
    div2Eght.innerHTML = `
    <div class="p-4">
        ${img[7]}
        <div>
            ${heading.headinThree}
        </div>
        <div class="product-price">$15.00</div>
        <div>
            ${button[0]+button[1]}
        </div>
    </div>`
 
 
 
    sec6div2.append(div2One,div2Two,div2Three,div2Four,div2Five,div2Six,div2Seven,div2Eght)
    container.append(sec6div1,sec6div2)
section6.append(container)



$(() => {
    $("#myCoursol2").owlCarousel({
        items : 4,
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
                items: 2
            },

            768 : {
                items : 3
            },

            992 : {
                items : 4
            },

            1200 : {
                items : 4
            }

        }
    });

});