import axios from 'axios';
import React, { useState } from 'react';
import InfoLoader from '../../core/components/Loaders';
import './styles.scss';
import dayjs from 'dayjs';

const BASE_URL = 'https://api.github.com/users';

type Profile = {
    name: string,
    profile: string,
    avatar_url: string,
    company: string,
    blog: string,
    location: string,
    created_at: Date,
    html_url: string,
    public_repos: BigInt,
    followers: BigInt,
    following: BigInt
};

const Search = () => {
    const [name, setName] = useState('');
    const [profileData, setProfileData] = useState<Profile>();
    const [isLoading, setIsLoading] = useState(false);
    
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setProfileData(undefined);

        setIsLoading(true);

        axios(`${BASE_URL}/${name}`)
            .then(response => setProfileData(response.data))
            .catch(() => console.error('Perfil inexistente'))
            .finally(() => {setIsLoading(false);})
    }

    return (
        <>
        <form onSubmit={handleSubmit}>
        <div className="search-container">
            <div className="search-content">
                <h1 className="search-label">Encontre um perfil no GitHub</h1>
                <input 
                    type="text" 
                    className="search-text"
                    placeholder="Usuário GitHub" 
                    value={name}
                    onChange={event => setName(event.target.value)}
                /> <br />
                <button type="submit" className="btn btn-primary search-btn">Buscar</button>
            </div>
        </div>
        </form>
        
        {isLoading ? <div className="result-container"><InfoLoader /></div> : profileData && (
            <div className="result-container">
                <div className="result-right">
                    <img src={profileData.avatar_url} className="result-image" alt="img-profile"/>
                    <a href={profileData.html_url}>
                        <button className="btn btn-primary result-btn">Ver Perfil</button>
                    </a>
                </div>

                <div className="result-left">
                    <div className="result-top">
                        <div className="result-box result-box1 standard-result">
                            Repositórios Públicos: {profileData.public_repos}
                        </div>
                        <div className="result-box standard-result">
                            Seguidores: {profileData.followers}
                        </div>
                        <div className="result-box standard-result">
                            Seguindo: {profileData.following}
                        </div>
                    </div>

                    <div className="result-info standard-result">
                        <h6 className="result-title">Informações: {profileData.name}</h6>
                        <div className="info-box standard-result"><b>Empresa: </b> {profileData.company}</div>
                        <div className="info-box standard-result"><b>Website/Blog: </b> {profileData.blog}</div>
                        <div className="info-box standard-result"><b>Localidade: </b> {profileData.location}</div>
                        <div className="info-box standard-result"><b>Membro desde: </b> 
                        {dayjs(`${profileData.created_at}`).format("DD/MM/YYYY")}
                        </div>
                    </div>
                </div>
                
            </div>
        )}
        </>
    ) /*final return*/

}; /*final Search*/

export default Search;
