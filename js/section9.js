
const content = {
    h3 : '<h3 class="text-start zInDeX">providing quality baked <br> goods for all customers</h3>',
    p : '<p class="text-start zInDeX">Our mission is to create a bakery that makes the best quality baked goods on site from scratch, and where both employees and customers would feel comfortable.</p>',
    ancker : '<a class="" href="#" id="ancTwo">READ MORE</a>',
    span : '<div class="bottomP px-5"><div class="OpaCity">01</div><span class="spanOver fw-bold" id="spanOver">OUR MISSIONS</span></div><div class="bottomP px-5"><div class="OpaCity">02</div><span class="spanOver fw-bold" id="spanOver">OUR VALUES</span></div><div class="bottomP px-5"><div class="OpaCity">03</div><span class="spanOver fw-bold" id="spanOver">OUR GOALS</span></div>',
    img : '<img src="../images/about-570x511.jpg" class="img-fluid">'
}



export const section9 = document.createElement('section');
section9.setAttribute('class','section5');

    const sec9div1 = document.createElement('div');
    sec9div1.setAttribute('class','heading text-center pt-5');
    sec9div1.innerHTML = `<h2 class=" pb-4">ABOUT US</h2>`;

    const sec9div2 = document.createElement('div');
    sec9div2.setAttribute('class','row d-flex justify-content-center algn-items-center');

    const div2One =document.createElement('div');
    div2One.setAttribute('class','col-11 col-md-5 m-2');
    div2One.innerHTML = content.img;

    const div2Two =document.createElement('div');
    div2Two.setAttribute('class','col-11 col-md-5 m-2');
    
        const Two2One = document.createElement('div');
        Two2One.setAttribute('class','mainOne pb-5 ps-5 pt-3 text-center position-relative');
        Two2One.innerHTML = content.h3 + content.p + content.ancker;

            

        const footOne = document.createElement('div');
        footOne.setAttribute('class','footOne d-flex flex-wrap flex-md-nowrap justify-content-center');
        footOne.innerHTML = content.span;

        div2Two.append(Two2One,footOne);
    sec9div2.append(div2One,div2Two);
section9.append(sec9div1,sec9div2);    
