// @mui material components
import Grid from "@mui/material/Grid";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";

// Material Dashboard 2 React examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";


import React, {useEffect} from "react";
import {Image} from "react-bootstrap";


function NotFound() {

    return (
        <DashboardLayout>
            <DashboardNavbar absolute isMini/>
            <MDBox mt={8}>

            </MDBox>
        </DashboardLayout>
    );
}

export default NotFound;
