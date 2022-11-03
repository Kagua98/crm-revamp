import Grid from "@mui/material/Grid";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";

// Material Dashboard 2 React examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";

// Device page components
import Card from "@mui/material/Card";
import MDTypography from "../../components/MDTypography";

import axios from "axios";
import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import Datatable from "./Datatable";
import {deviceColumns, varDeviceColumns} from "../../datatablesource";
import {getDevices} from "../../features/deviceSlice";
import {useNavigate} from "react-router-dom";
import Button from "@mui/material/Button";
import {getVARDevices} from "../../features/varDeviceSlice";


function VarDevices() {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getVARDevices());
    }, [dispatch]);

    const devices = useSelector((state) => state.varDevices);

    const btnClick = () => {
        navigate("new-var-devices");
    };


    return (
        <DashboardLayout>
            <DashboardNavbar absolute isMini/>
            <MDBox mt={8}>
                <MDBox pt={6} pb={3}>
                    <Grid container spacing={6}>
                        <Grid item xs={12}>
                            <Card>
                                <MDBox
                                    mx={2}
                                    mt={-3}
                                    py={3}
                                    px={2}
                                    variant="gradient"
                                    bgColor="info"
                                    borderRadius="lg"
                                    coloredShadow="info"
                                >
                                    <MDTypography variant="h6" color="white">
                                        VAR Devices List
                                    </MDTypography>

                                </MDBox>

                                <Datatable
                                    columns={varDeviceColumns}
                                    rows={devices}
                                    btn={"New Device"}
                                    btnClick={btnClick}
                                />

                                <div>
                                    <p>
                                        <span style={{"color":"transparent"}}>uu</span>
                                    </p>
                                    <p>
                                        <span style={{"color":"transparent"}}>uu</span>
                                    </p>
                                </div>

                            </Card>
                        </Grid>
                    </Grid>
                </MDBox>
            </MDBox>
        </DashboardLayout>
    );
}

export default VarDevices;
