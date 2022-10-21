import React from "react";
import {useSelector} from "react-redux";
import DataTable from "../../examples/Tables/DataTable";
import MDBox from "../../components/MDBox";
import MDTypography from "../../components/MDTypography";

const ClientItem = () => {
    const clients = useSelector((state) => state.allClients.clients);


    const renderList = clients.map((client) => {

        const {id, customer_name, customer_pin, customer_contact, customer_location} = client;

        return (

            <MDBox pt={3}>
                <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
                    {id}
                </MDTypography>

                <MDTypography component="a" href="#" variant="title" color="dark" fontWeight="medium">
                    {customer_name}
                </MDTypography>

                <MDTypography component="a" href="#" variant="title" color="text" fontWeight="medium">
                    {customer_pin}
                </MDTypography>

                <MDTypography component="a" href="#" variant="title" color="text" fontWeight="medium">
                    {customer_contact}
                </MDTypography>

                <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
                    {customer_location}
                </MDTypography>

            </MDBox>
        )
    });


    return <>{renderList}</>
};

export default ClientItem;