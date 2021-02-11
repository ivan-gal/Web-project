'use strict';
const portfolioItem = document.querySelectorAll('.portfolio-item-wrapper')
portfolioItem.forEach(portfolioItem => {
portfolioItem.addEventListener('mouseover', () => {
    portfolioItem.childNodes[1].classList.add('img-darken');
})
})

portfolioItem.forEach(portfolioItem => {
portfolioItem.addEventListener('mouseout', () => {
    portfolioItem.childNodes[1].classList.remove('img-darken');
})
})