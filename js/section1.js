
const img = ["./images/logo-default-231x49.png", "0", "1"]
export  const section1 = document.createElement('section');
    section1.setAttribute('class','sectionOne text-start border-bottom');

    const section1div1 = document.createElement('div')
    section1div1.setAttribute('class','headOne')
    section1div1.innerHTML   = `<span class="section1Span d-flex py-3 align-items-center"><i class="fas fa-map-marker-alt pe-2 pb-3 headIconMarker"></i><p> 523 Sylvan Ave <br> Mountain View, CA 94041 USA </p></span>`;

    const section1div2 = document.createElement('div')
    section1div2.setAttribute('class','headOne')
        
        const imgHead = document.createElement('img');
        imgHead.setAttribute('src',img[0]);
        imgHead.setAttribute('class','img-fluid py-3');
        section1div2.append(imgHead)

    const section1div3 = document.createElement('div')
    section1div3.setAttribute('class','headOne')
    section1div3.innerHTML = `<button type="button" class="btn btn-outline-dark my-3"><i class="fa fa-envelope"></i> GET IN TOUCH </button>`

section1.append(section1div1, section1div2, section1div3)    
