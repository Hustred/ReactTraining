import {useEffect, useState} from "react";
import {fetchPopularRepos} from "../../utils/api";
import Repositories from "./Repositories";
import Loading from "../Loading";
import LanguageSelector from "./LanguageSelector";
import {useSelector} from "react-redux";

const Popular = () => {
    const selectedLanguageIndex = useSelector(state => state.popular.selectedLanguageIndex)

    const [loading, setLoading] = useState(false);
    const [repos, setRepos] = useState([]);
    const [error, setError] = useState(false);

    useEffect(() => {
        setLoading(true);
        fetchPopularRepos(selectedLanguageIndex)
            .then(repos => setRepos(repos))
            .catch(error => setError(error))
            .finally(() => setLoading(false));
    }, [selectedLanguageIndex]);


    if (error) {
        return <p>{error}</p>
    }

    if (loading) {
        return (
            <div>
                <LanguageSelector
                    selectedLanguageIndex={selectedLanguageIndex}
                />
                <Loading isLoading={loading}/>
            </div>
        )
    } else {
        return (
            <div>
                <LanguageSelector
                    selectedLanguageIndex={selectedLanguageIndex}
                />
                <Repositories repos={repos}/>
            </div>
        )
    }
}

export default Popular