import React, { useState } from 'react';
import { UserProfileData } from '../../core/types/UserData';
import { makeRequest } from '../../core/utils/request';
import GitgubCard from './GithubCard';
import './styles.scss';
type FormEvent = React.ChangeEvent<HTMLInputElement>

const GithubProfileSearch = () => {

  const [userProfile, setUserProfile] = useState('');
  const [userData, setUserData] = useState<UserProfileData>();

  const [isLoading, setIsLoading] = useState(false);

  const [isStarted, setIsStarted] = useState(false);

  const onHandleChange = (event: FormEvent) => {
    const userProfile = event.target.value;

    setUserProfile(userProfile);

  }

  const onSubmitUser = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setIsStarted(false);
    setIsLoading(true);


    makeRequest({ url: `/users/${userProfile}` })
      .then(response => setUserData(response.data))
      .finally(() => {
        console.log(userData);

        setIsLoading(false);
        setIsStarted(true);
      })
  }

  return (


    <div className="main-div">
      <form onSubmit={onSubmitUser}>
        <div className="github-finder">
          <h2 className="title">Encontre um perfil Github</h2>
          <input
            value={userProfile}
            type="text"
            className="text-finder"
            placeholder="Usuário do Github"
            onChange={onHandleChange}
          />
          <br />

          <button
            className="button"
          >
            Encontrar
          </button>

        </div>
      </form>

      {isLoading && "Carregando..."}
      {isStarted && 
        <GitgubCard 
          public_repos={userData?.public_repos} 
          followers={userData?.followers}
          following={userData?.following}
          location={userData?.location}
          company={userData?.company}
          blog={userData?.blog}
          avatar_url = {userData?.avatar_url}
        />
      
      
      }

    </div>

  );
}

export default GithubProfileSearch;