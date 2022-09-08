import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import './AlertDialog.css';
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function AlertDialogSlide(props) {




  const handleClose = () => {
    props.setOpen(false);
  };

  return (
    <div>
      <Dialog className='dialogg'
        open={props.open}
        nputProps={{MenuProps: {disableScrollLock: true}}}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <div className="contentwidth">
            
            <div className="contentwidth">
            <DialogTitle className='DialogTitle'>{"Connect Wallet"}</DialogTitle>
                <button  class="block"><i class="fa-brands fa-google-wallet"></i><span className='linkNames'>1Wallet</span></button>
                <button class="block" onClick={props.connectWalletHandler}><i class="fa-brands fa-meta"></i><span className='linkNames'>MetaMask</span></button>
                <button  class="block"><i class="fa-brands fa-wolf-pack-battalion"></i><span className='linkNames'>Wallet connect</span></button>
                <button  class="block"><i class="fa-solid fa-shield"></i><span className='linkNames'>Trust Wallet</span></button>
                <p className='fiat-ticket'>To see your fiat Ticket, Select your region</p>
                <button  class="block">Country / Region</button>

                <div className="learnhowto">

                    <span className='connectP'><i class="fa-regular fa-circle-question"></i>Learn how to connect</span>
                </div>
            </div>     
        </div>
        
      </Dialog>
    </div>
  );
}
