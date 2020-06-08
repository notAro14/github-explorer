const token = "815d56fc1be8e7ffbdde7c7ec2d5c3e20eae2904";
const headers = {
  Authorization: `Token ${token}`,
};

export const searchRepos = async (url) => {
  const res = await fetch(url, { method: "GET", headers });
  const link = res.headers.get("link");
  const data = await res.json();
  return { link, data };
};
