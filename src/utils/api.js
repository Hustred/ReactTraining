import axios from "axios";

export function fetchPopularRepos (language) {
    const endpoint = window.encodeURI(`https://api.github.com/search/repositories?q=stars:>1+language:${language}&sort=stars&order=desc&type=Repositories`)

    return fetch(endpoint)
        .then((res) => res.json())
        .then((data) => {
            if (!data.items) {
                throw new Error(data.message)
            }

            return data.items
        })
}

export const makeBattle = (players) => {
    return Promise.all(players.map(getUserData))
        .then(sortPlayers)
        .catch(handleError);
}

const handleError = (error) => {
    console.log(error);
}

const getProfile = (userName) => {
    return axios.get(`https://api.github.com/users/${userName}`)
        .then(user => user.data)
        .catch(handleError);
}

const getRepos = (userName) => {
    return axios.get(`https://api.github.com/users/${userName}/repos?per_page=100`)
        .then(repos => repos.data)
        .catch(handleError);
}

const calculateScore = (profile, repos) => {
    const totalStars = repos.reduce((totalStars, repo) => totalStars + repo.stargazers_count, 0);
    const followers = profile.followers;
    return totalStars + followers;
}

const getUserData = (userName) => {
    return Promise.all([
        getProfile(userName),
        getRepos(userName)
    ]).then(([profile, repos]) => {
        return {
            profile,
            score: calculateScore(profile, repos)
        }
    })
}

const sortPlayers = (players) => players.sort((a, b) => b.score - a.score);
