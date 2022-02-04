const link = document.querySelectorAll('.nav-link'),
      img = document.querySelectorAll('.slide');

let index = 0;

const activeImg = n => {
    for(slide of img){
        slide.classList.remove('active');
    }
    slides[n].classList.add('active');
}

const activeLink = n => {
    for(list of link){
        list.classList.remove('active');
    }
    list[n].classList.add('active');
}

link.forEach((iteam, indexLink) => {
    iteam.addEventListener('click', () => {
        index = indexLink;
        activeLink(index);
        activeImg(index);
    })
})

// link.addEventListener('click', activeLink);
