import {gql, useQuery} from '@apollo/client';

const GET_CHARECTER = gql`
  query GetCharecter($id: ID!) {
    character(id: $id) {
      name
      id
      image
      episode {
        name
        episode
      }
    }
  }
`;
export const useCharecter = (id: String) => {
  const {error, loading, data} = useQuery(GET_CHARECTER, {
    variables: {id},
  });
  return {
    error,
    loading,
    data,
  };
};
