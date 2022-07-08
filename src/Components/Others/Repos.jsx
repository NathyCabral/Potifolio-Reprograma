import { useState, useEffect } from "react";
import './Repos.css'

const Repos = () => {
  const [repos, setRepos] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredRepos, setFilteredRepos] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const response = await fetch(
        "http://api.github.com/users/nathycabral/repos"
      );
      const data = await response.json();

      setRepos(data);
    };
    getData();
  }, []);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    setFilteredRepos(repos.filter((repo) => repo.name.includes(search)));
  }, [repos, search]);

  return (
    <div className="card-container">

      {filteredRepos.map((repo) => {
        return (
         
          <div className="cards-repo" key={repo.id}>
            <h3>{repo.name}</h3>
            <p>{repo.language}</p>
          </div>
        );
      })}

    </div>
  );
};

export default Repos;
