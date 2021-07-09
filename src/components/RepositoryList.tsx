import { useState, useEffect } from "react";
import { RepositoryItem } from "./RepositoryItem";

import '../styles/repository.scss';

interface Repository {
  name: string;
  full_name: string;
  description: string;
  html_url: string;
}

export function RepositoryList() {
  const [repositoryList, setRepositoryList] = useState<Repository[]>([]);

  useEffect(() => {
    fetch('https://api.github.com/users/gabrielcasag/repos')
      .then(response => response.json())
      .then(data => setRepositoryList(data));
  }, []);
  //sem dependencia, executa so qnd o componente aparecer na tela

  return (
    <section className="repository-list">
      <h1>
        My&nbsp;
        <a href="https://github.com/gabrielcasag" id="my_repo" target="_blank">
          Repository
        </a> 
          &nbsp;List using GitHub API 🤠
      </h1>

      <ul>
        {
          repositoryList.map(repository => {
            return (
              <RepositoryItem key={repository.name} repository={repository} />
            );
          })
        }
      </ul>
    </section>
  )
}