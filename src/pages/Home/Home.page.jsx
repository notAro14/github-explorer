import React, { useState } from "react";
import { ButtonAppBar } from "../../components/index";
import { searchRepos } from "../../api";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Box from "@material-ui/core/Box";
import Search from "@material-ui/icons/Search";

const HomePage = () => {
  const [keywords, setKeywords] = useState(null);
  const [repos, setRepos] = useState([]);
  console.log({ keywords, repos });

  return (
    <div>
      <ButtonAppBar />
      <Container>
        <form>
          <Box m={1}>
            <TextField
              fullWidth
              id="outlined-basic"
              label="Repositories"
              variant="standard"
              onChange={(e) => setKeywords(e.target.value)}
            />
          </Box>
          <Box m={1}>
            <Button
              variant="outlined"
              color="secondary"
              startIcon={<Search />}
              onClick={() => {
                searchRepos(keywords).then((data) => {
                  console.log(data);

                  setRepos(data.items);
                });
              }}
            >
              Search
            </Button>
          </Box>
        </form>
      </Container>
    </div>
  );
};

export default HomePage;
