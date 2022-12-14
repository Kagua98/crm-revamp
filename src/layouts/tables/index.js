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
import {clientColumns, deviceColumns} from "../../datatablesource";
import Datatable from "./Datatable";
import Modal from "react-bootstrap/Modal";


function Clients() {
    const [modalShow, setModalShow] = useState(false);
    const [clientDevices, setClients] = useState([]);
    const [finalClickInfo, setFinalClickInfo] = useState("");
    const navigate = useNavigate();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getCustomers());
        dispatch(getDevices());
    }, [dispatch]);

    const clients = useSelector((state) => state.customers);
    const devices = useSelector((state) => state.devices);


    //const [clientEmail,setEmail] = useState("")

    const handleOnCellClick = (params) => {
        setFinalClickInfo(params);
        if (params.field === "customer_name") {
            for (let i = 0; i < devices.length; i++) {
                if (devices[i].customer_name === params.value) {
                    setClients((prev) => [...prev, devices[i]]);
                }
            }
            setModalShow(true);
        }
    };

    const hideModal = () => {
        setClients([]);
        setModalShow(false);
    };

    const btnClick = () => {
        navigate("new-client");
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
                                    Clients
                                </MDTypography>
                            </MDBox>

                            <MDBox pt={0}>
                                <Datatable
                                    columns={clientColumns}
                                    rows={clients}
                                    cellClick={handleOnCellClick}
                                    btn={"New Client"}
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


                    <Modal
                        show={modalShow}
                        onHide={hideModal}
                        size="lg"
                        aria-labelledby="contained-modal-title-vcenter"
                        centered
                    >
                        <Modal.Header closeButton>
                            <Modal.Title id="contained-modal-title-vcenter">
                                Client Devices
                            </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <h4>{finalClickInfo.value}</h4>
                            <Datatable
                                columns={deviceColumns}
                                rows={clientDevices}
                                btn={""}
                            />
                        </Modal.Body>
                    </Modal>


                </Grid>




            </MDBox>


        </DashboardLayout>
    );
}

export default Clients;
