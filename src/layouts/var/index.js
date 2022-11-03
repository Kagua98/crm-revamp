// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import axios from "axios";
import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";

import {useNavigate} from "react-router-dom";
import {getCustomers} from "../../features/customerSlice";
import {getDevices} from "../../features/deviceSlice";
import {clientColumns, deviceColumns, varColumns} from "../../datatablesource";
import Datatable from "./Datatable";
import Modal from "react-bootstrap/Modal";
import {getVARs} from "../../features/varSlice";
import {getVARDevices} from "../../features/varDeviceSlice";

function Var(){


    const [modalShow, setModalShow] = useState(false);
    const [varDevices, setVARS] = useState([]);
    const [finalClickInfo, setFinalClickInfo] = useState("");
    const navigate = useNavigate();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getVARs());
        dispatch(getVARDevices());
    }, [dispatch]);

    const vars = useSelector((state) => state.vars);
    const devices = useSelector((state) => state.varDevices);

    const handleOnCellClick = (params) => {
        setFinalClickInfo(params);
        if (params.field === "var_name") {
            for (let i = 0; i < devices.length; i++) {
                if (devices[i].var_name === params.value) {
                    setVARS((prev) => [...prev, devices[i]]);
                }
            }
            setModalShow(true);
        }
    };

    const hideModal = () => {
        setVARS([]);
        setModalShow(false);
    };

    const btnClick = () => {
        navigate("new-var");
    };

    return (
        <DashboardLayout>
            <DashboardNavbar/>
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
                                    Value Added Resellers (VARs)
                                </MDTypography>
                            </MDBox>

                            <MDBox pt={0}>

                                <Datatable
                                    columns={varColumns}
                                    rows={vars}
                                    cellClick={handleOnCellClick}
                                    btn={"New VAR"}
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
                            </MDBox>



                        </Card>
                    </Grid>



                </Grid>




            </MDBox>


        </DashboardLayout>
    );
}

export default Var;
