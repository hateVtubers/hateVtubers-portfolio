import {
  ApolloClient,
  InMemoryCache,
  createHttpLink,
  gql,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { IconType } from 'react-icons';

const httpLink = createHttpLink({
  uri: 'https://api.github.com/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = process.env.GITHUB_TOKEN;

  return {
    headers: {
      ...headers,
      authorization: `Bearer ${token}`,
    },
  };
});

const client = new ApolloClient({
  ssrMode: true,
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

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
