import React, { useState } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';
import { ThemeProvider } from '@material-ui/styles';
import { createTheme } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    width: 300 + theme.spacing(3) * 2,
  },
  margin: {
    height: theme.spacing(3),
  },
}));

const muiTheme = createTheme({
  overrides:{
    MuiSlider: {
      rail: {
        color: '#D8D8D8'
      }
    }
}
});


const PrettoSlider = withStyles({
  root: {
    color: '#01AED8',
    height: 8,
    width: 425,
    marginLeft: "7.2rem",
  },
  thumb: {
    height: 24,
    width: 24,
    backgroundColor: '#fff',
    marginTop: -8,
    marginLeft: -12,
    boxShadow: '0px 0px 10px #00000033',
  },
  active: {},
  valueLabel: {
    left: 'calc(-50% + 4px)',
  },
  track: {
    height: 8,
    borderRadius: 4,
  },
  rail: {
    height: 8,
    borderRadius: 4,
  },
})(Slider);


export const SliderComponent = ({defaultValue, minValue, maxValue, onChange}) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ThemeProvider theme={muiTheme}>
      <PrettoSlider onChange={onChange} aria-label="pretto slider" defaultValue={defaultValue} min={minValue} max={maxValue} />
      </ThemeProvider>
    </div>
  );
}
