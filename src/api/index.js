export const searchRepos = async (keywords, resultsPerPage = 3) => {
  const res = await fetch(
    `https://api.github.com/search/repositories?q=${keywords}&per_page=${resultsPerPage}`
  );
  const data = await res.json();
  return data;
};
