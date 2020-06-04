import React, { useState } from "react";
import { ButtonAppBar } from "../../components/index";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Box from "@material-ui/core/Box";
import Search from "@material-ui/icons/Search";
import { useHistory } from "react-router-dom";

const HomePage = () => {
  const history = useHistory();

  const [keywords, setKeywords] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    history.push(`/search/${keywords}`);
  };

  return (
    <div>
      <ButtonAppBar />
      <Container maxWidth="sm">
        <form onSubmit={handleSubmit}>
          <Box m={1}>
            <TextField
              fullWidth
              id="outlined-basic"
              label="Repositories"
              variant="standard"
              onChange={(e) => setKeywords(e.target.value)}
              required
            />
          </Box>
          <Box m={1}>
            <Button
              variant="outlined"
              color="secondary"
              startIcon={<Search />}
              type="submit"
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
