import PlayerPreview from "./PlayerPreview";

const PlayerDetails = ({label, score, profile}) => {
    return (
        <div className='column'>
            <h1 className='header'>{label}</h1>
            <h3 style={{textAlign: 'center'}}>Score : {score}</h3>
            <PlayerPreview
                id={profile.id}
                avatar={profile.avatar_url}
                userName={profile.login}>
                <div className='column'>
                    <ul className='space-list-items'>
                        <li>{profile.name}</li>
                        <li>{profile.location}</li>
                        <li>{profile.company}</li>
                        <li>Followers : {profile.followers}</li>
                        <li>Following : {profile.following}</li>
                        <li>
                            <a href={profile.blog}>{profile.blog}</a>
                        </li>
                    </ul>
                </div>
            </PlayerPreview>
        </div>
    );
}
export default PlayerDetails;