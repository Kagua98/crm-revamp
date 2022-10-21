import MDTypography from "components/MDTypography";

export default function data() {

    return {
        columns: [
            {Header: "ID", accessor: "id", width: "10%", align: "left"},
            {Header: "Client Name", accessor: "clientName", width: "20%", align: "left"},
            {Header: "KRA Pin", accessor: "pin", align: "left"},
            {Header: "Contact", accessor: "contact", align: "center"},
            {Header: "Email", accessor: "email", align: "center"},
            {Header: "action", accessor: "action", align: "center"},
            {Header: "", accessor: "delete", width: "10%", align: "left"},
        ],

        rows: [
            {
                id: (<MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
                    01
                </MDTypography>),

                clientName: (<MDTypography component="a" href="#" variant="title" color="dark" fontWeight="medium">
                    Wise Power Ltd
                </MDTypography>),

                pin: (<MDTypography component="a" href="#" variant="title" color="text" fontWeight="medium">
                    P07288572
                </MDTypography>),

                contact: (<MDTypography component="a" href="#" variant="title" color="text" fontWeight="medium">
                    0712345678
                </MDTypography>),

                email: (
                    <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
                        info@wisepower.com
                    </MDTypography>
                ),
                action: (
                    <MDTypography component="a" href="#" variant="caption" color="success" fontWeight="medium">
                        Edit
                    </MDTypography>
                ),
                delete: (<MDTypography component="a" href="#" variant="caption" color="error" fontWeight="medium">
                    Delete
                </MDTypography>),
            },

            {
                id: (<MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
                    02
                </MDTypography>),

                clientName: (<MDTypography component="a" href="#" variant="title" color="dark" fontWeight="medium">
                    Wise Power Ltd
                </MDTypography>),

                pin: (<MDTypography component="a" href="#" variant="title" color="text" fontWeight="medium">
                    P07288572
                </MDTypography>),

                contact: (<MDTypography component="a" href="#" variant="title" color="text" fontWeight="medium">
                    0712345678
                </MDTypography>),

                email: (
                    <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
                        info@wisepower.com
                    </MDTypography>
                ),
                action: (
                    <MDTypography component="a" href="#" variant="caption" color="success" fontWeight="medium">
                        Edit
                    </MDTypography>
                ),
                delete: (<MDTypography component="a" href="#" variant="caption" color="error" fontWeight="medium">
                    Delete
                </MDTypography>),
            },

            {
                id: (<MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
                    03
                </MDTypography>),

                clientName: (<MDTypography component="a" href="#" variant="title" color="dark" fontWeight="medium">
                    Wise Power Ltd
                </MDTypography>),

                pin: (<MDTypography component="a" href="#" variant="title" color="text" fontWeight="medium">
                    P07288572
                </MDTypography>),

                contact: (<MDTypography component="a" href="#" variant="title" color="text" fontWeight="medium">
                    0712345678
                </MDTypography>),

                email: (
                    <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
                        info@wisepower.com
                    </MDTypography>
                ),
                action: (
                    <MDTypography component="a" href="#" variant="caption" color="success" fontWeight="medium">
                        Edit
                    </MDTypography>
                ),
                delete: (<MDTypography component="a" href="#" variant="caption" color="error" fontWeight="medium">
                    Delete
                </MDTypography>),
            },

            {
                id: (<MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
                    04
                </MDTypography>),

                clientName: (<MDTypography component="a" href="#" variant="title" color="dark" fontWeight="medium">
                    Wise Power Ltd
                </MDTypography>),

                pin: (<MDTypography component="a" href="#" variant="title" color="text" fontWeight="medium">
                    P07288572
                </MDTypography>),

                contact: (<MDTypography component="a" href="#" variant="title" color="text" fontWeight="medium">
                    0712345678
                </MDTypography>),

                email: (
                    <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
                        info@wisepower.com
                    </MDTypography>
                ),
                action: (
                    <MDTypography component="a" href="#" variant="caption" color="success" fontWeight="medium">
                        Edit
                    </MDTypography>
                ),
                delete: (<MDTypography component="a" href="#" variant="caption" color="error" fontWeight="medium">
                    Delete
                </MDTypography>),
            },
        ],
    };
}
