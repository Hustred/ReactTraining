import {useCallback, useEffect, useState} from "react";
import {fetchPopularRepos} from "../../utils/api";
import Repositories from "./Repositories";
import Loading from "../Loading";
import {useSearchParams} from "react-router-dom";
import LanguageSelector from "./LanguageSelector";

const Popular = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [selectedLanguage, setSelectedLanguage] = useState()
    const [loading, setLoading] = useState(false);
    const [repos, setRepos] = useState([]);
    const [error, setError] = useState(false);

    useEffect(() => {
        let language = searchParams.has('language') ? searchParams.get('language') : 'All';
        setLoading(true);
        setSelectedLanguage(language);
        fetchPopularRepos(language)
            .then(repos => setRepos(repos))
            .catch(error => setError(error))
            .finally(() => setLoading(false));
    }, [searchParams]);

    const handleLanguageChange = useCallback((event) => {
        const l = event.target.id;
        setSearchParams({language: l}, {replace: true})
    }, [setSearchParams]);

    if (error) {
        return <p>{error}</p>
    }

    if (loading) {
        return (
            <div>
                <LanguageSelector
                    selectedLanguage={selectedLanguage}
                />
                <Loading isLoading={loading}/>
            </div>
        )
    } else {
        return (
            <div>
                <LanguageSelector
                    selectedLanguage={selectedLanguage}
                    handleLanguageIndexChange={handleLanguageChange}
                />
                <Repositories repos={repos}/>
            </div>
        )
    }
}

export default Popular