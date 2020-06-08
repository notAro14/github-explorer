import React from "react";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { searchRepos } from "../../api";
import {
  ButtonAppBar,
  Repositories,
  RapidSearch,
} from "../../components/index";

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reposInfo: null,
      link: "",
    };
  }

  _fetchRepos = async () => {
    const { data, link } = await searchRepos(
      `https://api.github.com/search/repositories?q=stars:>100000&per_page=10`
    );
    this.setState({ reposInfo: data, link });
  };

  componentDidMount() {
    this._fetchRepos();
  }
  render() {
    console.log(this.state.link);

    return (
      <div>
        <ButtonAppBar />
        <Container maxWidth="sm">
          <RapidSearch />
          {/* <Divider /> */}
          <Typography
            style={{ margin: "1rem", textAlign: "center" }}
            variant="h4"
            color="primary"
            component="h2"
          >
            Most popular repositories
          </Typography>

          <Repositories
            reposInfo={this.state.reposInfo}
            isLoading={!this.state.reposInfo}
          />
        </Container>
      </div>
    );
  }
}

export default HomePage;
