import {gql, useQuery} from '@apollo/client';
const GET_CHARECTERS = gql`
  query {
    characters {
      results {
        id
        image
        name
      }
    }
  }
`;
export const useCharecters = () => {
  const {error, loading, data} = useQuery(GET_CHARECTERS);
  return {
    error,
    loading,
    data,
  };
};
