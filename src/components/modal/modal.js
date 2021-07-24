import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import './styles.css';
import { SliderComponent } from '../slider/slider';
import { PhoneInput } from '../phone-input/phone-input';

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});


export const Modal = () => {
  const [open, setOpen] = useState(false);
  const [currentPaymentValue, setCurrentPaymentValue] = useState(6500);
  const [currentMonthValue, setCurrentMonthValue] = useState(24);
  const [paymentDefault] = useState(6500);
  const [paymentMin] = useState(0);
  const [paymentMax] = useState(10700);
  const [monthsDefault] = useState(24);
  const [monthsMin] = useState(3);
  const [monthsMax] = useState(72);


  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

const onChangeSliderPayment = (e, val) => {
   setCurrentPaymentValue(val);
}

const onChangeSliderMonth = (e, val) => {
  setCurrentMonthValue(val);
}

const monthlyInstallment = () => {
  const finalPrice = 20000;
  let monthlyInstallmentValue = (finalPrice - currentPaymentValue) / currentMonthValue;
  return monthlyInstallmentValue;
}

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
      Άνοιγμα αριθμομηχανής
      </Button>
      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
        </DialogTitle>
          <Typography className="modal-title">
          Υπολογισμός δόσης
          </Typography>
          <Typography gutterBottom className="modal-sub-title">
          Επίλεξε την προκαταβολή και την διάρκεια που σε συμφέρει
          </Typography>

          <div className="down-payment-container">
          <div className="down-payment">Προκαταβολή</div>
          <div className="current-value">{numberWithCommas(currentPaymentValue)}<span className="euro">€</span></div>
          </div>
          <SliderComponent setCurrentPaymentValue={setCurrentPaymentValue}
          defaultValue={paymentDefault} minValue={paymentMin} maxValue={paymentMax} onChange={onChangeSliderPayment} />

          <div className="min-max-container">
          <div className="min">0€</div>
          <div className="max">10.700€</div>
          </div>

          <div className="down-payment-container">
          <div className="down-payment">Διάρκεια</div>
          <div className="current-month-value">{currentMonthValue} <span className="current-month-value-text">μήνες</span></div>
          </div>
          <SliderComponent
          defaultValue={monthsDefault} minValue={monthsMin} maxValue={monthsMax} onChange={onChangeSliderMonth} />

          <div className="min-max-container">
          <div className="min">3 μήνες</div>
          <div className="max">72 μήνες</div>
          </div>

          <div className="monthly-installment">Μηνιαία Δόση: <span className="monthly-installment-value">{monthlyInstallment().toFixed(2)}<span className="euro">€</span></span></div>

          <div className="footer">
          <div className="footer-text"><div>Συμπλήρωσε εδώ το τηλέφωνό σου.</div>
          <div>Θα σε καλέσουμε άμεσα.</div></div>
          <div className="phone-input"><PhoneInput/></div>
          </div>

      </Dialog>
    </div>
  );
}