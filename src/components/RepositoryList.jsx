import { RepositoryItem } from "./RepositoryItem";

const repository = {
  name: 'repo-obj',
  description: 'Repository object',
  link: 'https://github.com/gabrielcasag'
}

export function RepositoryList() {
  return (
    <section className="repo-list">
      <h1>Repository List</h1>

      <ul>
        <RepositoryItem repository="some repo" />
        <RepositoryItem />
        <RepositoryItem />
      </ul>
    </section>
  )
}