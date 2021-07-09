export function RepositoryItem(props) {
  return (
    <li>
      <strong>{props.repository}</strong>
      <p>Forms in React</p>

      <a href="">
        Access this Repo
      </a>
    </li>
  );
}