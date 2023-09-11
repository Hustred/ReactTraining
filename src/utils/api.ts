import axios from "axios";

export function fetchPopularRepos (language: any) {
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

export const makeBattle = (players: any) => {
    return Promise.all(players.map(getUserData))
        .then(sortPlayers)
        .catch(handleError);
}

const handleError = (error: any) => {
    console.log(error);
}

const getProfile = (userName: any) => {
    return axios.get(`https://api.github.com/users/${userName}`)
        .then(user => user.data)
        .catch(handleError);
}

const getRepos = (userName: any) => {
    return axios.get(`https://api.github.com/users/${userName}/repos?per_page=100`)
        .then(repos => repos.data)
        .catch(handleError);
}

const calculateScore = (profile: any, repos: any) => {
    const totalStars = repos.reduce((totalStars: any, repo: any) => totalStars + repo.stargazers_count, 0);
    const followers = profile.followers;
    return totalStars + followers;
}

const getUserData = (userName: string) => {
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

const sortPlayers = (players: any) => players.sort((a: any, b: any) => b.score - a.score);

export function getProfileStars() {
    return axios.get("https://64edd2531f8721827141d123.mockapi.io/profileStars")
        .then(profiles => {
            console.log(profiles);
            return profiles.data
        })
}

export function saveProfileStars (id: any, userName: any, stars: any) {
    return axios.post("https://64edd2531f8721827141d123.mockapi.io/profileStars", {id: id, profileName: userName, starsCount: stars})
        .then(profiles => profiles.data)
}