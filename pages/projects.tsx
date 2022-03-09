import { GetStaticProps, NextPage } from "next";
import { getRepositories, Repository } from "lib/repository";
import { repositoryDescription, repositoryTopics } from "data/user";
import { Card } from "components/Card";

type Props = {
  projects: Repository[];
};

const Projects: NextPage<Props> = ({ projects }) => {
  const topics = projects.map((p, i) => ({
    ...p,
    repositoryTopics: repositoryTopics[i],
  }));
  return (
    <div className="grid min-h-screen place-items-center">
      <main>
        <h1 className="text-center mt-20 md:mt-0 text-2xl first-letter:text-aquamarine-500">
          My Projects:
        </h1>
        <ul className="mt-5 flex flex-wrap items-center justify-center gap-4">
          {topics.map((project) => (
            <li key={project.name} className="group">
              <Card {...project} />
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const projects = await getRepositories(
    ["todo", "nhentai-download", "next-translate-blog"],
    repositoryDescription
  );

  return {
    props: {
      projects,
    },
  };
};

export default Projects;
