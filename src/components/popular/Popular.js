import {useEffect} from "react";
import {fetchPopularRepos} from "../../utils/api";
import Repositories from "./Repositories";
import Loading from "../Loading";
import LanguageSelector from "./LanguageSelector";
import {useDispatch, useSelector} from "react-redux";
import {setErrors, setRepos, setLoading} from "../redux/popular/popular.actions";

const Popular = () => {
    const dispatch = useDispatch();

    const selectedLanguageIndex = useSelector(state => state.popular.selectedLanguageIndex)
    const loading = useSelector(state => state.popular.loading)
    const repos = useSelector(state => state.popular.repos)
    const error = useSelector(state => state.popular.error)

    useEffect(() => {
        dispatch(setLoading(true));
        fetchPopularRepos(selectedLanguageIndex)
            .then(repos => dispatch(setRepos(repos)))
            .catch(error => dispatch(setErrors(error)))
            .finally(() => dispatch(setLoading(false)));
    }, [dispatch, selectedLanguageIndex]);

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