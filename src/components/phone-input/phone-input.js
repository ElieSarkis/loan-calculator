import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { InputAdornment } from "@material-ui/core";
import PhoneEnabledIcon from '@material-ui/icons/PhoneEnabled';
import './styles.css';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '30ch',
    },
  },
  helperText: {
      color: '#FFFFFF'
  }
}));

export const PhoneInput = () => {
const classes = useStyles();
const [showMessage, setShowMessage] = useState(""); 
const [isError, setIsError] = useState(false);
const [inputValue, setInputValue] = useState("");

  const onInputChange = () =>{
      console.log(inputValue)
        if(inputValue.toString().length !== 10 || isNaN(inputValue)){
         setShowMessage("Ανεπιτυχής");
         setIsError(true);
          }
          else{
            setShowMessage("Επιτυχής");
            setIsError(false);
          }
  }

  return (
    <form className={classes.root} noValidate autoComplete="off">
        <div style={{display: "flex", flexDirection: 'row', width: '100%'}}>
      <TextField className="text-field" style={{ height: 43}} placeholder="Αριθμός τηλεφώνου…" id="outlined-basic"
      variant="outlined"
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)}
      helperText={showMessage}
      error={isError}
      FormHelperTextProps={{
        className: classes.helperText
      }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <PhoneEnabledIcon style={{color: '#D6D6D6'}} />
            </InputAdornment>
          ),
        }}
      />
        <Button onClick={()=>onInputChange()} className="button">
            Καλεστε
        </Button>
        </div>
    </form>
  );
}
