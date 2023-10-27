import React from 'react'
import { ToastContainer, toast } from 'react-toastify';


const Toasts = () => {
    const notify = () => {toast("An Item Has Been Added!");
}
  return (
    <div>
                <ToastContainer />

    </div>
  )
}

export default Toasts