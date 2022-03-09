import { gql } from "@apollo/client";
import { client } from "apollo/client";
import { IconType } from "react-icons";

const query = gql`
  query ($repoName: String!) {
    user(login: "hateVtubers") {
      repository(name: $repoName) {
        name
        homepageUrl
        url
      }
    }
  }
`;

export type Repository = {
  __typename: 'Repository';
  name: string;
  homepageUrl: string;
  url: string;
  descrition: string;
  repositoryTopics: IconType[];
};

export const getRepositories = async (
  names: string[],
  descritions: string[]
): Promise<Repository[]> => {
  const res = await Promise.all(
    names.map(async (name) => {
      const { data } = await client.query({
        query,
        variables: {
          repoName: name,
        },
      });

      return data.user;
    })
  );

  const data = res.map(({ repository }, i) => {
    return {
      ...repository,
      descrition: descritions[i],
    };
  });

  return data;
};
