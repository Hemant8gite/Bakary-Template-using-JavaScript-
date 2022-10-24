
const card = ['<div><div class="d-lg-flex align-items-center text-center"><div class="pe-3"><i class="fas fa-birthday-cake iCon"></i></div><div class="text-lg-end text-center"><h3 class="py-1">Quality Products</h3><p>We guarantee the quality of all the cakes we provide as they are baked using the ingredients.</p></div></div><div class="border-top d-lg-flex align-items-center text-center"><div class="pe-3"><i class="fas fa-truck iCon"></i></div><div class="text-lg-end text-center"><h3 class="py-1">free delivery</h3><p>All orders submitted by our US clients are delivered for free throughout the United States.</p></div></div></div>','<div><div class="d-lg-flex align-items-center text-center"><div class="pe-3"><i class="fas fa-pizza-slice iCon"></i></i></div><div class="text-lg-start text-center"><h3 class="py-1">catering service</h3><p>Our bakery also provides an outstanding catering service for events and special occasions.</p></div></div><div class="border-top d-lg-flex align-items-center text-lg-start text-center"><div class="pe-3"><i class="far fa-credit-card iCon"></i></div><div class="text-lg-start text-center"><h3 class="py-1">Online payment</h3><p>We accept all kinds of online payments including Visa, MasterCard, American Express credit cards.</p></div></div></div>','<img src="../images/index-1-377x212.jpg" class="img-fluid">']

export const section7 = document.createElement('section');
    section7.setAttribute('class','section7 py-5');

    const sec7div1 = document.createElement('div');
    sec7div1.setAttribute('class','heading text-center pt-5');
    sec7div1.innerHTML = `<h2 class="py-5">WHY CHOOSE US</h2>`;

    const sec7div2 = document.createElement('div');
    sec7div2.setAttribute('class','row justify-content-center align-items-center py-4');

    const div2div1 = document.createElement('div');
    div2div1.setAttribute('class','col-11 col-sm-5 col-lg-3')
    div2div1.innerHTML = card[0]

    const div2divimg = document.createElement('div')
    div2divimg.setAttribute('class','col-lg-3 d-none d-lg-block')
    div2divimg.innerHTML = card[2]

    const div2div3 = document.createElement('div');
    div2div3.setAttribute('class','col-11 col-sm-5 col-lg-3')
    div2div3.innerHTML = card[1]

   
    

    sec7div2.append(div2div1,div2divimg,div2div3)

section7.append(sec7div1,sec7div2)

 