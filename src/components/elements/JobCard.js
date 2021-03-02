import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Avatar from '@material-ui/core/Avatar';
import { red } from '@material-ui/core/colors';
import { Link } from '@reach/router';

const useStyles = makeStyles((theme) => ({
  root: {
    // minWidth: '60%',
    width: "100%",
    position: 'relative',
    marginTop: '10px'

  },

  avatar: {
    backgroundColor: red[500],
    borderRadius: '5px',
    minWidth: '100px',
    fontSize: '15px',
  },
  logo: {
    position: 'absolute',
    right: 0,
  },
  city: {
    marginTop: 12,
    marginBottom: 12,
  },
  link: {
    textDecoration: 'none',
  },
}));

export default function JobCard({ job, jobId }) {
  const classes = useStyles();
  const companyName = job.company || 'Reesby';
  const jobSource = job.source || 'Reesby';

  return (
    <>
      <Link to={`/job/${jobId}`} className={classes.link}>
        <Card className={classes.root} variant="outlined">
          <CardContent>
            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
            >
              Source: {jobSource.toUpperCase()}
            </Typography>
            <Typography variant="h5" component="h2">
              {job.jobTitle}
            </Typography>
            <Typography className={classes.pos} color="textSecondary">
              {job.company}
            </Typography>
            <Typography variant="body2" component="p" className={classes.city}>
              {job.place}
            </Typography>
            <Typography variant="body2" component="p">
              {job.description}
              <br />
              Salary: {job.salary}
            </Typography>
          </CardContent>
          <CardActions>
            <IconButton aria-label="add to favorites">
              <FavoriteIcon />
              <Typography variant="body1" component="p">
                &nbsp;&nbsp;Save
              </Typography>
            </IconButton>
            <div className={classes.logo}>
              <IconButton aria-label="logo">
                <Avatar aria-label="recipe" className={classes.avatar}>
                  {companyName}
                </Avatar>
              </IconButton>
            </div>
          </CardActions>
        </Card>
      </Link>
    </>
  );
}
