export const getGithubStars = async (): Promise<number> => {
  try {
    const res = await fetch('https://api.github.com/repos/lord007tn/cms');
    if (!res.ok) return 0;
    const data = await res.json();
    return data.stargazers_count ?? 0;
  } catch {
    return 0;
  }
};

export const getGithubStarsFn = getGithubStars;
