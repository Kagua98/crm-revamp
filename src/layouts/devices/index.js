// @mui material components
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
import {deviceColumns} from "../../datatablesource";
import {getDevices} from "../../features/deviceSlice";
import {useNavigate} from "react-router-dom";
import Button from "@mui/material/Button";


function Devices() {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getDevices());
    }, [dispatch]);

    const devices = useSelector((state) => state.devices);

    const btnClick = () => {
        navigate("new-devices");
    };

    var numDevices = 0;
    for (let i = 0; i < devices.length; i++) {
        numDevices = devices[i].num_devices;
    }

    return (
        <DashboardLayout>
            <DashboardNavbar absolute isMini/>
            <MDBox mt={8}>
                <MDBox mb={3}>
                    <Grid container spacing={3}>
                        <Grid item xs={12} lg={8}>
                            <Grid container spacing={3}>
                                <Grid item xs={12} md={6} xl={3}>
                                    <DefaultInfoCard
                                        color="warning"
                                        icon="pending"
                                        title="Pending"
                                        description="Devices In transit"
                                        value="0"
                                    />
                                </Grid>
                                <Grid item xs={12} md={6} xl={3}>
                                    <DefaultInfoCard
                                        color="success"
                                        icon="done"
                                        title="Delivered"
                                        description="Devices delivered"
                                        value="249"
                                    />
                                </Grid>
                                <Grid item xs={12} md={6} xl={3}>
                                    <DefaultInfoCard
                                        color="error"
                                        icon="error"
                                        title="Error"
                                        description="Returned Devices"
                                        value="0"
                                    />
                                </Grid>
                                <Grid item xs={12} md={6} xl={3}>
                                    <DefaultInfoCard
                                        color="dark"
                                        icon="list"
                                        title="Devices"
                                        description="Add Device"
                                        value={numDevices}
                                    />
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </MDBox>
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
                                        Devices List
                                    </MDTypography>

                                </MDBox>

                                <Datatable
                                    columns={deviceColumns}
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

export default Devices;
