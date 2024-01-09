interface WPGraphQLParams {
  query: string;
  variables?: object;
}

export const wpquery = async ({ query, variables }: WPGraphQLParams) => {
  const res = await fetch(
    "http://unhackable-wordpress-portfolio.local/graphql",
    {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query,
        variables,
      }),
    }
  );

  if (!res.ok) {
    console.error(res);
    return {};
  }

  const { data } = await res.json();

  return data;
};
