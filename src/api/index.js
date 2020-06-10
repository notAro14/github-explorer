export const searchRepos = async (url) => {
  const res = await fetch(url);
  const rawLinks = res.headers.get("link");
  const data = await res.json();
  // const res = await fetch(url, { method: "GET", headers });
  try {
    const links = rawLinks
      .replace(/ /g, "")
      .split(",")
      .map((link) => {
        const rawUrl = link.split(";")[0];
        const rawTitle = link.split(";")[1];
        const url = rawUrl.substring(1, rawUrl.length - 1);
        const title = rawTitle.substring(5, rawTitle.length - 1);
        return { url, title };
      });
    return { links, data };
  } catch (error) {
    const links = [];
    return { links, data };
  }
};
