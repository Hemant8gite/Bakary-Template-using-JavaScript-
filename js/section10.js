const img = ['<div class="overflow-hidden rounded-circle teamImg  text-center"><img src="../images/team-1-249x249.jpg" class="img-fluid imgTemaB"></div>','<div class="overflow-hidden rounded-circle teamImg"><img src="../images/team-2-249x249.jpg" class="img-fluid imgTema"></div>','<div class="overflow-hidden rounded-circle teamImg"><img src="../images/team-3-249x249.jpg" class="img-fluid imgTemaB"></div>']
const heading = ['<h3 class="fw-bold teamHead">richard smith</h3>','<h3 class="fw-bold teamHead">Susan Anderson</h3>','<h3 class="fw-bold  teamHead">Steve Ruffalo</h3>']
const para = [
    '<p class="text-secondary small teamPara">Richard has a true passion for baking and that’s why he has been our founder and head baker since day one.</p>',
    '<p class="text-secondary small teamPara">Susan spends most of her time baking and cake decorating as well as heading up the bakery s marketing initiatives.</p>',
    '<p class="text-secondary small teamPara">Steve is our lead cake designer. He has designed beautiful cakes for various occasions including weddings, parties, showers, anniversaries and more.</p>']

const icon = ['<div class="iconsTeam"><i class="fab fa-facebook-f px-2 iconTeam"></i><i class="fab fa-twitter px-2 iconTeam"></i><i class="fab fa-instagram px-2 iconTeam"></i><i class="fab fa-google-plus px-2 iconTeam"></i></div>']


export const section10 = document.createElement('section');
section10.setAttribute('class','section10 py-5');

        const sec10div1 = document.createElement('div');
        sec10div1.setAttribute('class','heading text-center pt-5');
        sec10div1.innerHTML = `<h2 class="py-5">OUR TEAM</h2>`;

        const sec10div2 = document.createElement('div');
        sec10div2.setAttribute('class','row justify-content-center py-4 text-center');

        const div2div1 = document.createElement('div');
        div2div1.setAttribute('class','col-11 col-sm-5 col-lg-3 text-center mainScale')
        div2div1.innerHTML = img[0] + heading[0] + para[0] + icon[0]

        const div2divimg = document.createElement('div')
        div2divimg.setAttribute('class','col-11 col-sm-5 col-lg-3 text-center mainScale')
        div2divimg.innerHTML = img[1] + heading[1] + para[1] + icon[0]

        const div2div3 = document.createElement('div');
        div2div3.setAttribute('class','col-11 col-sm-5 col-lg-3 text-center mainScale')
        div2div3.innerHTML = img[2] + heading[2] + para[2] + icon[0]

                
    sec10div2.append(div2div1,div2divimg,div2div3)

section10.append(sec10div1,sec10div2)
