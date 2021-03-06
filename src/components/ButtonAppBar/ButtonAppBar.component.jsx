import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const LogoLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

export default function ButtonAppBar() {
  const history = useHistory();
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar color="primary" position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <LogoLink to="/">GithubExplorer</LogoLink>
          </Typography>
          <Button
            onClick={() => history.push("/advance")}
            variant="contained"
            color="secondary"
          >
            Advanced search
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
