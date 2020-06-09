import React from "react";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
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
      links: "",
      url: `https://api.github.com/search/repositories?q=stars:>100000&per_page=5`,
    };
  }

  _fetchRepos = async (url) => {
    const { data, links } = await searchRepos(url);
    this.setState({ reposInfo: data, links });
  };

  componentDidMount() {
    this._fetchRepos(this.state.url);
  }
  render() {
    const { links, reposInfo } = this.state;

    return (
      <div>
        <ButtonAppBar />
        <Container maxWidth="sm">
          <RapidSearch />
          <Typography
            style={{ margin: "1rem", textAlign: "center" }}
            variant="h4"
            color="primary"
            component="h2"
          >
            Most popular repositories
          </Typography>

          <Repositories reposInfo={reposInfo} isLoading={!reposInfo} />
          {links.length ? (
            <div>
              {links.map((link, index) => {
                const { title, url } = link;
                return (
                  <Button
                    onClick={(e) => {
                      e.preventDefault();
                      window.scrollTo(0, 0);
                      this.setState({ reposInfo: null });
                      this._fetchRepos(url);
                    }}
                    key={index}
                    variant="outlined"
                    color="secondary"
                    style={{ margin: "0.75rem" }}
                  >
                    {title}
                  </Button>
                );
              })}
            </div>
          ) : null}
        </Container>
      </div>
    );
  }
}

export default HomePage;
