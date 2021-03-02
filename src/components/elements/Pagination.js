import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      marginTop: theme.spacing(2),
    },
    marginBottom: '15px',
    // backgroundColor: "blue",
    minWidth: "100%",
  },
}));

export default function PaginationBar() {
  const classes = useStyles();

  return (
    <div className={classes.root} >
      <Grid container alignItems="center" justify="center" xs={12}>
        <Grid item>
          <Pagination count={10} variant="outlined" shape="rounded"/>
        </Grid>
      </Grid>
    </div>
  );
}
