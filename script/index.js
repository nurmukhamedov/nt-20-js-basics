// const itemsPerPage = 100;
// let currentPage = 1;
// let totalItems = 0;
// let myData = [];
// const loadingMessage = document.querySelector('.loading');
// const main = document.querySelector('.main');
// const myFragment = new DocumentFragment();
// const notFoundMessage = document.querySelector('.not-found');
// const searchInput = document.querySelector('.search');
// const pagination = document.querySelector('.pagination');

// fetch('https://jsonplaceholder.typicode.com/photos').then(function (response) {
//     return response.json();
// }).then(function (data) {
//     myData = data.slice(0, 500);
//     totalItems = myData.length;
//     generatePaginationLinks();
//     updateCard('');
// }).catch(function (error) {
//     console.log(error);
// });

// searchInput.addEventListener('input', function () {
//     updateCard(this.value);
//     updatePaginationLink();
// })

// function updateCard(searchValue) {
//     loadingMessage.style.display = 'block';
//     main.innerHTML = '';
//     let found = false;
//     const startIndex = (currentPage - 1) * itemsPerPage;
//     const endIndex = Math.ceil(startIndex + itemsPerPage, totalItems);

//     myData.slice(startIndex, endIndex).forEach((data) => {
//         const dataTitle = data.title.toLowerCase();
//         const searchTitle = searchValue.toLowerCase();
//         if (dataTitle.includes(searchTitle)) {
//             const card = document.createElement('div');
//             const img = document.createElement('img');
//             img.src = data.url;
//             img.alt = data.title;
//             myFragment.appendChild(img);
//             const h2 = document.createElement('h2');
//             h2.textContent = data.title;
//             myFragment.appendChild(h2);
//             card.appendChild(myFragment);
//             main.appendChild(card);
//             found = true;
//         }
//     })

//     loadingMessage.style.display = 'none';

//     if (!found) {
//         notFoundMessage.style.display = 'block';
//     } else {
//         notFoundMessage.style.display = 'none';
//     }

//     window.scrollTo(0, 0)
// }

// function generatePaginationLinks() {
//     pagination.innerHTML = '';
//     const totalPages = Math.ceil(totalItems / itemsPerPage);

//     myData.slice(0, totalPages).forEach((_, index) => {
//         const pageLink = document.createElement('li');
//         pageLink.textContent = index + 1;

//         pageLink.addEventListener('click', () => {
//             currentPage = index + 1;
//             updateCard(searchInput.value);
//             updatePaginationLink();
//         });
//         if (index + 1 === currentPage) {
//             pageLink.classList.add('active');
//         }

//         pagination.appendChild(pageLink);
//     })

// }

// function updatePaginationLink() {
//     const pageLinks = document.querySelectorAll('li');
//     pageLinks.forEach((link, index) => {
//         if (index + 1 === currentPage) {
//             link.classList.add('active')
//         } else {
//             link.classList.remove('active')
//         }
//     })
// }

const main = document.querySelector('.main');

fetch('https://restcountries.com/v3.1/all').then((response) => {
    return response.json();
}).then((data) => {

    data.forEach((country) => {
        const languages = country.languages;
        const langDiv = document.createElement('li');
        let firstLang;
        let secondLeng = '';

        if (languages) {
            const languagesValues = Object.values(languages);
            firstLang = languagesValues[0];
            if (languagesValues.length >= 2) {
                secondLeng = languagesValues[1]
            }
        }
        langDiv.textContent = `Birinchi til: ${firstLang}`
        main.appendChild(langDiv);

    })
}).catch((error) => console.log(error))

