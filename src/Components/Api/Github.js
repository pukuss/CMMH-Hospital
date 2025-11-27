import { useEffect, useState } from "react";

function useGithubApi() {
  const [githubApi, setGithubApi] = useState({});

  useEffect(() => {
    fetch("https://api.github.com/users/pukuss")
      .then((res) => res.json())
      .then((data) => {
        setGithubApi(data);
      });
  }, []); // <-- correct dependency array

  return githubApi;
}

export default useGithubApi;
