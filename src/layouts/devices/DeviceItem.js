import React from "react";
import {useSelector} from "react-redux";
import DataTable from "../../examples/Tables/DataTable";
import MDBox from "../../components/MDBox";
import MDTypography from "../../components/MDTypography";

const DeviceItem = () => {
    const devices = useSelector((state) => state.allDevices.devices);


    const renderList = devices.map((device) => {

        const {id, mid_serial_no, sup_device_no, customer_name, middleware_type, distributor} = device;

        return(
            <MDBox pt={3}>
                <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
                    {id}
                </MDTypography>

                <MDTypography component="a" href="#" variant="title" color="dark" fontWeight="medium">
                    {mid_serial_no}
                </MDTypography>

                <MDTypography component="a" href="#" variant="title" color="text" fontWeight="medium">
                    {sup_device_no}
                </MDTypography>

                <MDTypography component="a" href="#" variant="title" color="text" fontWeight="medium">
                    {customer_name}
                </MDTypography>

                <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
                    {middleware_type}
                </MDTypography>

                <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
                    {distributor}
                </MDTypography>

            </MDBox>
        )
        });



    return <>{renderList}</>
};

export default DeviceItem;