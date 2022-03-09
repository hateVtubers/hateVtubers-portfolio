import { Repository } from "lib/repository";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export const Card = ({
  descrition,
  homepageUrl,
  name,
  url,
  repositoryTopics,
}: Repository) => {
  return (
    <div className="group flex md:w-96 w-72 flex-col items-center rounded-xl border-2 border-aquamarine-500 p-2">
      <h2 className="text-xl font-semibold transition-colors group-hover:text-aquamarine-500">
        {name}
      </h2>
      <p className="text-center">{descrition}</p>
      <ul className="mt-3 flex items-center gap-4">
        {repositoryTopics.map((Topic, i) => (
          <li key={i}>
            <Topic className="transition-colors group-hover:text-aquamarine-500" />
          </li>
        ))}
      </ul>
      <footer className="my-4 grid grid-cols-2 gap-2">
        <a href={url} target="_blank" rel="noreferrer">
          <FaGithub className="transition-colors group-hover:text-aquamarine-500" />
        </a>
        <a href={homepageUrl} target="_blank" rel="noreferrer">
          <FaExternalLinkAlt className="transition-colors group-hover:text-aquamarine-500" />
        </a>
      </footer>
    </div>
  );
};
