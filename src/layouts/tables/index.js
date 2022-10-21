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
import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import ClientItem from "./ClientItem";
import { setClients } from "../../redux/actions/clientActions";
import DataTable from "../../examples/Tables/DataTable";

import authorsTableData from "layouts/tables/data/authorsTableData";


function Clients() {
    const clients = useSelector((state) => state);
    const dispatch = useDispatch();

    const { columns, rows } = authorsTableData();

    const fetchClients = async () =>{
        const response = await axios
            .get("https://matrixtelematic.herokuapp.com/info/customers/")
            .catch((err) => {
                console.log("Err", err);
            });
        dispatch(setClients(response.data));
    };

    useEffect(() => {
        fetchClients();
        }, []);

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
                                    Clients Table
                                </MDTypography>
                            </MDBox>

                            {/* Client Data is Added/Displayed Here */}
                            {/* TODO(Display Real Data) */}


                            <MDBox pt={3}>
                                <DataTable
                                    table={{columns, rows}}
                                    isSorted={false}
                                    entriesPerPage={false}
                                    showTotalEntries={false}
                                    noEndBorder
                                />
                            </MDBox>




                            <ClientItem />


                        </Card>
                    </Grid>
                </Grid>
            </MDBox>
        </DashboardLayout>
    );
}

export default Clients;
