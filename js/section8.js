const content ={
    h1: '<h2>Summer sale</h2>',
    span: '<p class="fw-bold para8"><span class="heading2 pe-3">-20%</span>on all Cakes</p>',
    p:'<p class="text-secondary">Purchase our tasty cakes and sweets for your next event or family <br> dinner at our online shop and save more money than anywhere.</p>',
    button:'<button class="buttonPink">SHOP NOW</button>'
}

export const section8 = document.createElement('section');
    section8.setAttribute('class','section8');

    const div = document.createElement('div');
    div.setAttribute('class','container');

    div.innerHTML = content.h1 + content.span + content.p + content.button

section8.append(div)