const contain = ['<span class="heading2">Unique Flavors and Fresh Ingredients</span>','<h2>ALL KIND OF CAKES</h2>','<button class="buttonPink">READ MORE</button>']


export const section11 = document.createElement('section');
    section11.setAttribute('class','section11 py-5')

    const container = document.createElement('div');
        container.setAttribute('class','container text-center py-5');
        container.innerHTML = contain[0]+contain[1]+contain[2]



section11.append(container);