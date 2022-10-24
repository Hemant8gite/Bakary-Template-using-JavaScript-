const HeroContaine = {
    heading: '<h1 class="heading1">Delicious</h1>',
    heading2: '<h3 class="heroH3"><i class="fa solid fa-minus"></i>cakes for you</h3>',
    text: '<span class="text-secundary spanHero">Sweet Bakery offers the best <br> cakes and sweets for you.<br></span>',
    button: '<button class="buttonPink">SHOP NOW</button>'
}

export const section3 = document.createElement('section');
    section3.setAttribute('class','section3');

    const container = document.createElement('div');
    container.setAttribute('class','container')

    container.innerHTML = ` ${HeroContaine.heading + HeroContaine.heading2 + HeroContaine.text + HeroContaine.button} `

section3.append(container)