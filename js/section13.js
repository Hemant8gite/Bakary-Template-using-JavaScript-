




export const section13 = document.createElement('section');
section13.setAttribute('class','section13') 

    const sec13div1 = document.createElement('div');
    sec13div1.setAttribute('class','heading text-center pt-5');
    sec13div1.innerHTML = `<h2 class="py-5">LATEST NEWS</h2>`;

    const sec13div2 = document.createElement('div');
    sec13div2.setAttribute('class','row justify-content-center');

    const div2div1 = document.createElement('div');
    div2div1.setAttribute('class','col-11 col-lg-5 text-center')
    div2div1.innerHTML = `<div class="sec13rel scAleHoverT overflow-hidden"><img src="../images/post-1-570x461.jpg" class="img-fluid"><div class="sec13Abs"><span class="">August 9, 2020</span><h3>How to Pipe a Fluffy Frosting Border on a Cake</h3></div></div>`

    const div2divimg = document.createElement('div')
    div2divimg.setAttribute('class','col-11 col-lg-5')
    div2divimg.innerHTML = `<div class=" justify-content-center"><div class="d-flex flex-wrap justify-content-center"><div class="newsImg scAleHoverT overflow-hidden"><img src="../images/post-2-270x215.jpg"class="img-fluid w-100 h-100"></div><div class="newsImg p-4"><span class="text-secondary">August 9, 2020</span><h4>Recipe of the Day: Pumpkin Spice Latte Cake</h4></div></div><div class="d-flex flex-wrap justify-content-center"><div class="newsImg scAleHoverT overflow-hidden"><img src="../images/post-3-270x215.jpg" class="img-fluid w-100 h-100"></div><div class="newsImg p-4"><span class="text-secondary">August 9, 2020</span><h4>Top 5 Tips for Successful Cake Baking</h4></div></div></div>`

    sec13div2.append(div2div1,div2divimg)
section13.append(sec13div1,sec13div2);