
const img = ['<div class="p-3 imageBorder"><img src="./images/offer-1-340x243.jpg" class="img-fluid w-100 cardImg"></div>','<div class="p-3 imageBorder"><img src="./images/offer-2-340x243.jpg" class="img-fluid w-100 cardImg "></div>','<div class="p-3 imageBorder"><img src="./images/offer-3-340x243.jpg" class="img-fluid w-100 cardImg  "></div>']

const heading = {
    headinOne:'<h3 class="pt-3 cardHeading fw-bold">Party Cupcakes</h3>',
    headinTwo:'<h3 class="pt-3 cardHeading fw-bold">Choco cakes</h3>',
    headinThree:'<h3 class="pt-3 cardHeading fw-bold">Wedding cakes</h3>'
}

const para = {
    paraOne:  '<p class="p-2 cardPara">We provide a variety of cupcakes for any party made with high-quality natural ingredients and no preservatives.</p>',
    paraTwo:  '<p class="p-2 cardPara">Nothing tastes better than a chocolate cake with a variety of flavors, which is always available at our bakery..</p>',
    paraThree: '<p class="p-2 cardPara">Want to make your wedding unforgettable? Then you need to order a unique wedding cake at Sweet Bakery!</p>'
}

const button = ['<a href="#" class=" btonCr">READ MORE</a>']

export const section5 = document.createElement('section');
    section5.setAttribute('class','section5');

    const sec5div1 = document.createElement('div')
    sec5div1.setAttribute('class','heading text-center pt-5')
    sec5div1.innerHTML = `<h2 class=" pb-4">WHAT WE OFFER</h2>`;

    const sec5div2 = document.createElement('div');
    sec5div2.setAttribute('class','row justify-content-center text-center');
    
    const div2One =document.createElement('div');
    div2One.setAttribute('class','col-10 col-md-3 m-3 cardHover')
    div2One.innerHTML = img[0] + heading.headinOne + para.paraOne + button[0]

    const div2Two =document.createElement('div');
    div2Two.setAttribute('class','col-10 col-md-3 m-3 cardHover')
    div2Two.innerHTML = img[1] + heading.headinTwo + para.paraTwo + button[0]

    const div2Three =document.createElement('div');
    div2Three.setAttribute('class','col-10 col-md-3 m-3 cardHover')
    div2Three.innerHTML = img[2] + heading.headinThree + para.paraThree + button[0]
 
    sec5div2.append(div2One,div2Two,div2Three)
section5.append(sec5div1,sec5div2)