import React, { useState } from "react";
import { Counter } from "../../components/index";
import { searchRepos } from "../../api";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const HomePage = () => {
  const [keywords, setKeywords] = useState(null);
  const [repos, setRepos] = useState([]);
  console.log({ keywords, repos });

  return (
    <div>
      <TextField
        id="outlined-basic"
        label="Keywords"
        variant="outlined"
        onChange={(e) => setKeywords(e.target.value)}
      />
      <Button
        variant="contained"
        color="primary"
        onClick={() => {
          searchRepos(keywords).then((data) => {
            console.log(data);

            setRepos(data.items);
          });
        }}
      >
        Chercher
      </Button>
      <Counter />
    </div>
  );
};

export default HomePage;
