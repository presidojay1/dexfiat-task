import React, {useState} from 'react'
import Logo1 from '../../Images/Logos/xr.jpeg' ;
import AlertDialogSlide from '../Utilities/AlertDialogSlide';
import './Navigation.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { WindowSharp } from '@mui/icons-material';
const NavigationBar = () => {
    const [open, setOpen] = useState(false);
    const [day, setDay] = useState(true);
    const [defaultAccount, setDefaultAccount]= useState(null);
    const [userBalance, setuserBalance]= useState(null);
console.log(defaultAccount)
    const connectWalletHandler = () => {
        if (window.ethereum){
            window.ethereum.request({method: 'eth_requestAccounts'})
            .then(result => {
                accountChangeHandler(result[0]);
            })
        } else{
            console.log("Install Metamask")
        }
    }
    const accountChangeHandler = (newaccount) => {
        setDefaultAccount(newaccount);
        getUserBalance(newaccount);
    }
    const chainChangedHandler = () => {
        WindowSharp.location.reload();
    }
    window.ethereum.on('chainChanged', chainChangedHandler);

    const getUserBalance = (address) => {

    }
    const setChange = () =>{
        setOpen(true);
    }
    const darkMode = () =>{
        setDay(!day);
    }
  return (
    <>
    <Navbar collapseOnSelect expand="lg" bg="transparent" >
      <Container className='NavigationHead'>
        <Navbar.Brand className="navlogohome">
        <div className="navlogo">
            <img src={Logo1} alt="logo" />
            <div className="navlogoName">
                <h3>Dexfiat</h3>
            </div>
        </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto navIcons">
            <Nav.Link href="#features">
            <div className="navIcons">
            <div className="NavIconBorderLess house">
            <i className="fa-solid fa-house fa-2x"></i>
            
            </div>
            <div className="NavIconBordered">
            <i class="fa-solid fa-retweet fa-2x"></i>
                <h5>Swap</h5>
            </div>
            <div className="NavIconBordered">
            <i className="fa-solid fa-coins figure fa-2x"></i>
            <h5>Pool</h5>
            </div>
            <div className="NavIconBordered">
            <i class="fa-solid fa-bridge figure fa-2x"></i>
            <h5>Bridge</h5>
            
            </div>
            <div className="NavIconBordered">
            <i class="fa-solid fa-bridge figure fa-2x"></i>
            <h5>House</h5>        
            </div>
            <div className="NavIconBordered">
            <i class="fa-solid fa-right-left fa-2x"></i>
            <h5>P2P Dex</h5>
            </div>
            <div className="NavIconBordered">
            <i class="fa-solid fa-shield-halved figure fa-2x"></i>
            <h5>Stake</h5>
            </div>
            <div className="NavIconBordered">
            <i class="fa-solid fa-circle-info figure fa-2x" ></i>
            <h5>Dao</h5>
            </div>
            <div className="NavIconBordered">
            
            <h5 className='crossborder'>Cross Border</h5>
            </div>

            <div className="NavIconBorderLess">
            <i class="fa-regular fa-circle-dot figure fa-2x"></i>
            </div>
        </div>
            </Nav.Link>     
          </Nav>
          <Nav>
            <Nav.Link >
                <div className="navnightmode">
                <div className="navnightmodeclaim">
                <button type="button" class="btn btn-outline-success buttonax">Success</button>
                </div>
                <div className="navnightmodeconnect">
                <button class="buttona" onClick={setChange}>Connect Wallet</button>
                </div>
                <div className="navnightmodenightmode">
                {day ? <i onClick={darkMode} class="fa-regular fa-sun fa-2x"></i> : <i onClick={darkMode} class="fa-regular fa-moon fa-3x"></i>}
                </div>

            </div>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <AlertDialogSlide connectWalletHandler={connectWalletHandler} setOpen={setOpen} open={open} />
    </>

  )
}

export default NavigationBar