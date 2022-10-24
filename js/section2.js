const navbar = ['HOME','GALLERY','SHOP','BLOG','PAGES','ELEMENT','CONTACT US']
const logo = ['<i class="fas fa-search px-3"></i>', '<i class="fas fa-shopping-cart"></i>']

export const section2 = document.createElement('section')
    section2.setAttribute('class','section2 sticky-top shadow bg-light');

    const container = document.createElement('div')
    container.setAttribute('class','container')

    const nav = document.createElement('nav');
    nav.setAttribute('class','navBar')

        const Ul = document.createElement('ul');
        Ul.setAttribute('class','navMenu d-lg-flex text-start py-3')
        Ul.setAttribute('id','navMenuOne')
    
    for( let i = 0 ; i < navbar.length ; i ++){

        const li = document.createElement('li');
        li.setAttribute('class','nav-item p-2');

        const ancker = document.createElement('a');
        ancker.setAttribute('class','nav-link fw-bold');
        ancker.setAttribute('href','#');

        ancker.innerHTML = navbar[i];

        Ul.append(li);
        li.append(ancker);
    
    }
    
    const buttonMenu = document.createElement('button')
    buttonMenu.setAttribute('class','rounded-3 border my-3 border-2 text-bg-dark d-lg-none butonNav')
    buttonMenu.innerHTML = `<i class="fa solid fa-bars px-2 "></i>`

    $(()=>{
        $('.butonNav').on('click',()=>{
            $('#navMenuOne').toggle(400);
            $('#navMenuOne').css({'display':'block'})
        })
    })

container.append(nav,Ul)
nav.append(buttonMenu)
section2.append(container)