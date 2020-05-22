import React, { useState } from "react";
import { Counter } from "../../components/index";
import { searchRepos } from "../../api";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";

const HomePage = () => {
  const [keywords, setKeywords] = useState(null);
  const [repos, setRepos] = useState([]);
  console.log({ keywords, repos });

  return (
    <Container>
      <form>
        <Box>
          <TextField
            id="outlined-basic"
            label="Keywords"
            variant="outlined"
            onChange={(e) => setKeywords(e.target.value)}
          />
        </Box>
        <Box>
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
        </Box>
      </form>
    </Container>
  );
};

export default HomePage;
