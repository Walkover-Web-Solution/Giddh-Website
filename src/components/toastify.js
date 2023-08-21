"use client"
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, Slide } from 'react-toastify';

const Toastify = () => {
    return (
        <ToastContainer
        position="top-right"
        newestOnTop
        transition={Slide}
        pauseOnFocusLoss={false}
        autoClose={3000}
        />
    )
}

export default Toastify;