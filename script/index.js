async function fetchData(url) {
    const error = document.querySelector('.error');
    try {
        const response = await fetch(url);
        const data = await response.json();

        if (!response.ok) {
            error.textContent = data.message
        }
        console.log(data);

    } catch (error) {
        console.log(error.message);
    }
}

fetchData('https://restcountries.com/v3.1/all');

async function searchByCountryName(countryName) {
    try {

        const response = await fetch(`https://restcountries.com/v3.1/name/${countryName}`);
        const data = await response.json();

        if (!response.ok) {
            console.log(data.message);
        }

        console.log(data);
    } catch (error) {
        console.log(error.message);
    }
}

const searchButton = document.querySelector('#searchButton');
const inputValue = document.querySelector('#countrySearch');

searchButton.addEventListener('click', () => {
    const name = inputValue.value.trim();
    searchByCountryName(name);
});

