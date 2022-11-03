import "./datatable.scss";
import {DataGrid} from "@mui/x-data-grid";
import {unwrapResult} from "@reduxjs/toolkit";
import {useDispatch} from "react-redux";
import {Link} from "react-router-dom";
import {deleteCustomer} from "../../features/customerSlice";

const Datatable = (props) => {
    const dispatch = useDispatch();
    const handleDelete = (id) => {
        // setData(data.filter((item) => item.id !== id));
        console.log(typeof id);
        dispatch(deleteCustomer({ id }))
            .then(unwrapResult)
            .then(() => {
                alert("Client Deleted Successfully!");
            })
            .catch(() => {
                alert("Client Not Deleted!");
            });
    };

    const actionColumn = [
        {
            field: "action",
            headerName: "Action",
            width: 200,
            renderCell: (params) => {
                return (
                    <div className="cellAction">
                        <Link
                            to="update-client"
                            state={{
                                id: params.row.id,
                                cName: params.row.customer_name,
                                cPin: params.row.customer_pin,
                                cContact: params.row.customer_contact,
                                cLocation: params.row.customer_location,
                            }}
                            style={{ textDecoration: "none" }}
                        >
                            <div className="viewButton">Edit</div>
                        </Link>
                        <div
                            className="deleteButton"
                            onClick={() => handleDelete(params.row.id)}
                        >
                            Delete
                        </div>
                    </div>
                );
            },
        },
    ];
    return (
        <div className="datatable">
            <div className="headerWrapper">
                <div className="datatableTitle">{props.header}</div>
                <div className="btn btn-primary datatable_btn" onClick={props.btnClick}>
                    {props.btn}
                </div>
            </div>

            <DataGrid
                className="datagrid"
                rows={props.rows}
                columns={props.columns.concat(actionColumn)}
                pageSize={8}
                rowsPerPageOptions={[7]}
                onCellClick={props.cellClick}
                disableSelectionOnClick
                checkboxSelection
            />
        </div>
    );
};

export default Datatable;
