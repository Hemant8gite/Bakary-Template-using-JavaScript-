const section3Arr = {
    heading: '<h3 class="sec3head">Only Fresh Cakes</h3>',
    para:'<p class="sec4para">All of our products are made from scratch using family recipes with only the highest quality ingredients. We bake and sell fresh daily to ensure only the best products are sold to our customers.</p>',
    button: '<button class="buttonPink rounded-circle"><i class="fas fa-arrow-right"></i></button>'
}
export const section4 = document.createElement('section')
    section4.setAttribute('class','section4 position-relative d-flex justify-content-center')

    const section4Div = document.createElement('div');
    section4Div.setAttribute('class','backGround position-absolute text-center justify-content-center');
    section4Div.innerHTML = section3Arr.heading + section3Arr.para + section3Arr.button

    section4.append(section4Div)