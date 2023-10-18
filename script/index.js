// const myPromise = new Promise((resolve, reject) => {
//     const number = 4;

//     if (number > 5) {
//         resolve('Raqam 5 dan katta')
//     } else {
//         reject('Raqam 5 dan kichkina')
//     }
// });

// myPromise.then((data) => console.log(data)).catch((error) => console.log(error)); 





const GITHUB_API_URL = 'https://api.github.com/users';
const PERSONAL_ACCESS_TOKEN = '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';

async function getUsers(url) {
    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Authorization': `token ${PERSONAL_ACCESS_TOKEN}`,
            }
        })
        const data = await response.json();
        return data;

    } catch (error) {
        console.log(error);
    }
}

const userListWrapper = document.getElementById('userData');

async function renderUsers() {
    const users = await getUsers(GITHUB_API_URL);
    renderList(users);
}
renderUsers();

function renderList(users) {
    users.forEach((user) => {
        const fragment = new DocumentFragment();
        const card = document.createElement('div');
        const avatar = document.createElement('img');
        avatar.src = user.avatar_url ? user.avatar_url : user.owner.avatar_url;
        const userName = document.createElement('h4');
        userName.textContent = user.login ? user.login : user.owner.login;
        fragment.appendChild(avatar);
        fragment.appendChild(userName);
        card.appendChild(fragment);
        userListWrapper.appendChild(card);
    })
}

const searchInput = document.getElementById('userSearch');

const button = document.getElementById('searchButton');

async function searchUsers(searchValue) {
    const user = await getUsers(`https://api.github.com/search/repositories?q=${searchValue}`)
    userListWrapper.innerHTML = '';
    console.log(user.items);
    renderList(user.items)
}

button.addEventListener('click', () => {
    searchUsers(searchInput.value.trim());
})
