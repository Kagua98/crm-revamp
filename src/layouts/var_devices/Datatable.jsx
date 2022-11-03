import "../tables/datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deleteDevice } from "../../features/deviceSlice";
import { unwrapResult } from "@reduxjs/toolkit";
import MDSnackbar from "../../components/MDSnackbar";
import {useState} from "react";

const Datatable = (props) => {
  const dispatch = useDispatch();

    const handleDelete = (id) => {
    // setData(data.filter((item) => item.id !== id));
    dispatch(deleteDevice({ id }))
      .then(unwrapResult)
      .then(() => {
        alert("Device Deleted Successfully!");
      })
      .catch(() => {
        alert("Device Not Deleted!");
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
              to="update-device"
              state={{
                id: params.row.id,
                cName: params.row.customer_name,
                midSerialNo: params.row.mid_serial_no,
                supDeviceNo: params.row.sup_device_no,
                deviceSerialNo: params.row.device_serial_number,
                middlewareType: params.row.middleware_type,
                make: params.row.make,
                distributor: params.row.distributor,
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
        pageSize={9}
        rowsPerPageOptions={[9]}
        onCellClick={props.cellClick}
        disableSelectionOnClick
        checkboxSelection
      />
    </div>
  );
};

export default Datatable;
