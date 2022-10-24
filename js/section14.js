const content = {
    
    img1: '<a href="#"><img src="../images/clients-1-120x112.png" class="img-fluid"><a>',
    img2: '<a href="#"><img src="../images/clients-2-105x118.png" class="img-fluid"><a>',
    img3: '<a href="#"><img src="../images/clients-3-111x98.png" class="img-fluid"><a>',
    img4: '<a href="#"><img src="../images/clients-4-122x92.png" class="img-fluid"><a>',
    img5: '<a href="#"><img src="../../images/clients-5-111x111.png" class="img-fluid"><a>'

}

export const section14 = document.createElement('section')
    section14.setAttribute('class','section14')

    const container = document.createElement('div')
    container.setAttribute('class','container')

    const rowOne = document.createElement('div')
    rowOne.setAttribute('class','row justify-content-center')

    const containerd2 = document.createElement('div')
    containerd2.setAttribute('class','OpacitYOff py-4 text-center col-11 col-lg-2')
    containerd2.innerHTML = content.img1

    const containerd3 = document.createElement('div')
    containerd3.setAttribute('class','OpacitYOff py-4 text-center col-11 col-lg-2')
    containerd3.innerHTML = content.img2

    const containerd4 = document.createElement('div')
    containerd4.setAttribute('class','OpacitYOff py-4 text-center col-11 col-lg-2')
    containerd4.innerHTML = content.img3

    const containerd5 = document.createElement('div')
    containerd5.setAttribute('class','OpacitYOff py-4 text-center col-11 col-lg-2')
    containerd5.innerHTML = content.img4

    const containerd6 = document.createElement('div')
    containerd6.setAttribute('class','OpacitYOff py-4 text-center col-11 col-lg-2')
    containerd6.innerHTML = content.img5

    rowOne.append(containerd2,containerd3,containerd4,containerd5,containerd6)
    container.append(rowOne)
section14.append(container);