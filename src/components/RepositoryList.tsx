import { RepositoryItem } from "./RepositoryItem";

import './../styles/repositories.scss';
import { useEffect, useState } from "react";

// https://api.github.com/users/allanalves10/repos
// https://api.github.com/orgs/rocketseat/repos

interface Repository {
    id: number,
    name: string,
    description: string,
    html_url: string,
}

export function RepositoryList() {
    const [repositories, setRepositories] = useState<Repository[]>([]);

    useEffect(() => {
        fetch('https://api.github.com/users/allanalves10/repos')
        .then(response => response.json())
        .then(data => setRepositories(data));
    }, []);

    console.log(repositories);

    return (
        <section className="repository-list">
            <h1>Lista de Repositórios</h1>
            <ul>
                {repositories.map(repository => {
                    return <RepositoryItem key={repository.id} repository={repository} />
                })}
            </ul>
        </section>
    );
}