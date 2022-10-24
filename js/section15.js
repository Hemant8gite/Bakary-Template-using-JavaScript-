const gallery = [
    '<div class="footHoverImg"><a href="#"><img src="../images/grid-gallery-1-130x130.jpg" class="img-fluid w-100"></a></div>',
    '<div class="footHoverImg overflow-hidden"><a href="#"><img src="../images/grid-gallery-2-130x130.jpg" class="img-fluid w-100"></a></div>',
    '<div class="footHoverImg overflow-hidden"><a href="#"><img src="../images/grid-gallery-3-130x130.jpg" class="img-fluid w-100"></a></div>',
    '<div class="footHoverImg overflow-hidden"><a href="#"><img src="../images/grid-gallery-4-130x130.jpg" class="img-fluid w-100"></a></div>',
    '<div class="footHoverImg overflow-hidden"><a href="#"><img src="../images/grid-gallery-5-130x130.jpg" class="img-fluid w-100"></a></div>',
    '<div class="footHoverImg overflow-hidden"><a href="#"><img src="../images/grid-gallery-6-130x130.jpg" class="img-fluid w-100"></a></div>'
]

const quIcklinkS =[
    '<a href="#">About Us</a>',
    '<a href="#">Our Team</a>',
    '<a href="#">Shop</a>',
    '<a href="#">Pricing</a>',
    '<a href="#">FAQ</a>',
    '<a href="#">Contact Us</a>'
]

const Quick2nd =[
    '<a href="#">About Us</a>',
    '<a href="#">Our Team</a>',
    '<a href="#">Shop</a>',
    '<a href="#">Pricing</a>',
    '<a href="#">FAQ</a>',
    '<a href="#">Contact Us</a>'
]

const getInTouch =[
    '<div><span><i class="fas fa-map-marker-alt p-2 "></i></span><a href="#">523 Sylvan Ave, 5th Floor<br>Mountain View, CA 94041 USA</a></div>',
    '<div><span><i class="fas fa-phone p-2 "></i></span><a href="tel:#" class="inputOne">+1 (844) 123 456 78</a></div>',
    '<div><span><i class="fas fa-envelope p-2"></i></span><a href="mailto:#" class="inputOne">info@demolink.org</a></div>',
    '<div class="iconsTeamFoot"><i class="fab fa-facebook-f iconTeam borderFoot"></i><i class="fab fa-twitter iconTeam  borderFoot"></i><i class="fab fa-instagram iconTeam  borderFoot"></i><i class="fab fa-google-plus iconTeam borderFoot"></i><i class="fab fa-snapchat iconTeam  borderFoot "></i></div>'
]

export const section15 = document.createElement('section')
    section15.setAttribute('class','section15')

    const sec15div1 = document.createElement('div');
    sec15div1.setAttribute('class','row justify-content-center justify-content-evenly');
    
    
    const div1 = document.createElement('div');
    div1.setAttribute('class','col-11 col-lg-3 row g-0 justify-content-center pb-4')
    div1.innerHTML = gallery[0]+gallery[1]+gallery[2]+gallery[3]+gallery[4]+gallery[5]
    
        const heading1 = document.createElement('div')
        heading1.setAttribute('class','headingFoot')
        heading1.innerHTML = `<h5 class="fw-bold">GALLERY</h5>`
        
    div1.prepend(heading1)
    const div2 = document.createElement('div');
    div2.setAttribute('class','col-11 col-lg-3 row')
    
    const heading2 = document.createElement('div')
    heading2.setAttribute('class','headingFoot')
    heading2.innerHTML = `<h5 class="fw-bold">QUICK LINKS</h5>`
    
        const div2div1 = document.createElement('div');
        div2div1.setAttribute('class','col-6 pb-4')


            for( let i = 0 ; i < quIcklinkS.length ; i ++){

                const li1 = document.createElement('li');
                li1.setAttribute('class','nav-item p-1 liHover');

                li1.innerHTML = quIcklinkS[i];

                ul1.append(li1);
            
            }
        
            div2div1.append(ul1)

        const div2div2 = document.createElement('div');
        div2div2.setAttribute('class','col-6')

            
            for( let i = 0 ; i < Quick2nd.length ; i ++){

                const li2 = document.createElement('li');
                li2.setAttribute('class','nav-item p-1 liHover');

                li2.innerHTML = Quick2nd[i];

                ul2.append(li2);            
            }
    
            div2div2.append(ul2)

        div2.append(heading2,div2div1,div2div2)

    const div3 = document.createElement('div');
    div3.setAttribute('class','col-11 col-lg-3')
 
    const heading3 = document.createElement('div')
    heading3.setAttribute('class','headingFoot')
    heading3.innerHTML = `<h5 class="fw-bold">GET IN TOUCH</h5>`

        for( let i = 0 ; i < getInTouch.length ; i ++){

            const li3 = document.createElement('li');
            li3.setAttribute('class','nav-item p-2 liHover');

            li3.innerHTML = getInTouch[i];

            ul3.append(li3);
        
        }

        div3.append(heading3,ul3)
    sec15div1.append(div1,div2,div3)
section15.append(sec15div1)





export const sectionlast = document.createElement('section')
    sectionlast.setAttribute('class','section16 text-center')
    sectionlast.innerHTML = `<div class="footer-modern-panel text-center">
    <div class="container border-top py-4">
      <p class="rights"><span>©&nbsp;</span><span class="copyright-year">2022</span><span>.&nbsp;</span><span>Sweet Bakery</span><span>.&nbsp;</span><span>All Rights Reserved</span><span>.&nbsp;</span><a href="#">Privacy Policy.</a></p>
    </div>
  </div>`


    