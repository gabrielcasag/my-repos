interface RepositoryItemProps {
  repository : {
    full_name: string;
    description: string;
    html_url: string;
  }
}

export function RepositoryItem(props: RepositoryItemProps) {
  return (
    <li>
      <strong>{props.repository.full_name}</strong>
      <p>{props.repository.description ?? "-"}</p>

      <a href={props.repository.html_url} target="_blank">
        Access this Repo
      </a>
    </li>
  );
}