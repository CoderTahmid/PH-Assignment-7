import { useState } from 'react';
import './App.css'
import Banner from './components/Banner/Banner';
import Navbar from './components/Navbar/Navbar';
import Players from './components/Players/Players';
import Footer from './components/Footer/Footer';
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function App() {

  const [freeCoin, setFreeCoin] = useState(5555555555555550);

  const positiveNotification = (msg) => {
    toast.success(msg, {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      theme: "colored",
    });
  };

  const claimingFreeMoney = () => {
    setFreeCoin(freeCoin + 500000);
    positiveNotification("Free credit claimed successfully!")
  };

  return (
    <>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css" integrity="sha512-Evv84Mr4kqVGRNSgIGL/F/aIDqQb7xQ2vcrdIwxfjThSH8CSR7PBEakCr51Ck+w+/U6swU2Im1vVX0SVk9ABhg==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
      <Navbar freeCoin={freeCoin}></Navbar>
      <Banner claimingFreeMoney={claimingFreeMoney}></Banner>
      <Players setFreeCoin={setFreeCoin} freeCoin={freeCoin}></Players>
      <ToastContainer></ToastContainer>
      <Footer></Footer>
    </>
  );
};

export default App;
