// operador de coalescência '??' verifica se a primeira expressão é nula ou undefined
// e retorna a segunda expressão.
interface RepositoryItemProps {
    repository: {
        name: string,
        description: string,
        html_url: string,
    }
}

export function RepositoryItem(props: RepositoryItemProps) {
    return(
        <li>
            <strong>{props.repository?.name ?? 'unform'}</strong>
            <p>{props.repository?.description ?? 'Repositório React'}</p>
            <a href={props.repository?.html_url ?? 'https://www.google.com.br'}>
            Acessar Repositório
            </a>
        </li>
        );
    }