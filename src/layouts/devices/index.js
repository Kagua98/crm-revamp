// @mui material components
import Grid from "@mui/material/Grid";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";

// Material Dashboard 2 React examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";

// Data
import authorsTableData from "layouts/tables/data/authorsTableData";

// Device page components
import Card from "@mui/material/Card";
import MDTypography from "../../components/MDTypography";
import DataTable from "../../examples/Tables/DataTable";

import axios from "axios";
import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import DeviceItem from "./DeviceItem";
import { setDevices } from "../../redux/actions/DeviceActions";

function Devices() {
    const devices = useSelector((state) => state);
    const dispatch = useDispatch();

    const fetchDevices = async () =>{
        const response = await axios
            .get("https://matrixtelematic.herokuapp.com/info/devices/")
            .catch((err) => {
                console.log("Err", err);
            });
        dispatch(setDevices(response.data));
    };

    useEffect(() => {
        fetchDevices();
    }, []);

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
                                        value="100"
                                    />
                                </Grid>
                                <Grid item xs={12} md={6} xl={3}>
                                    <DefaultInfoCard
                                        color="success"
                                        icon="done"
                                        title="Delivered"
                                        description="Devices delivered"
                                        value="500"
                                    />
                                </Grid>
                                <Grid item xs={12} md={6} xl={3}>
                                    <DefaultInfoCard
                                        color="error"
                                        icon="error"
                                        title="Error"
                                        description="Returned Devices"
                                        value="20"
                                    />
                                </Grid>
                                <Grid item xs={12} md={6} xl={3}>
                                    <DefaultInfoCard
                                        color="dark"
                                        icon="list"
                                        title="Devices"
                                        description="All devices"
                                        value="1000"
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

                                {/* Where Data is Displayed */}
                                {/* TODO(Display Devices) */}


                                <DeviceItem />

                            </Card>
                        </Grid>
                    </Grid>
                </MDBox>
            </MDBox>
        </DashboardLayout>
    );
}

export default Devices;
