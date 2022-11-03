import React, {useState, forwardRef} from 'react'
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

import {green} from "@mui/material/colors";
import MDSnackbar from "./MDSnackbar";

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const ErrorMessage = ({content}) =>  {

    const [open, setOpen] = useState(true);
    //Leave this true since we are not using a button

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };



    return (
        <MDSnackbar
                color="error"
                icon="error"
                title="Matrix CRM"
                content={content}
                dateTime="Now"
                open={open}
                onClose={handleClose}
                close={handleClose}
                bgWhite={false}

        />
    )
}

export default ErrorMessage