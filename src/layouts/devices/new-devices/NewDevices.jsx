import React, { useState } from "react";
import "./newDevices.css";

import { useDispatch } from "react-redux";
import { unwrapResult } from "@reduxjs/toolkit";
import { addDevice } from "../../../features/deviceSlice";
import { useNavigate } from "react-router-dom";
import DashboardLayout from "../../../examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "../../../examples/Navbars/DashboardNavbar";
import MDBox from "../../../components/MDBox";
import Grid from "@mui/material/Grid";
import MDTypography from "../../../components/MDTypography";
import Card from "@mui/material/Card";
import ErrorMessage from "../../../components/ErrorSnackbar";
import SuccessMessage from "../../../components/SuccessSnackbar";


const NewClients = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [error, setError] = useState(false); //Controls Alert
  const [message, setMessage] = useState('') //Controls Message

  const [success, setSuccess] = useState(false); //Controls Alert
  const [content, setContent] = useState('')


  const [serialNo, setSerial] = useState("");
  const [supNo, setSupNo] = useState("");
  const [middlewareType, setMiddleware] = useState("");
  const [make, setMake] = useState("");
  const [distributor, setDistributor] = useState("");
  const [customerName, setCustomer] = useState("");


  const onSubmit = (e) => {
    e.preventDefault();
    console.log(middlewareType);
    if (serialNo != null) {
      dispatch(
        addDevice({
          serialNo,
          supNo,
          middlewareType,
          customerName,
          make,
          distributor,
        })
      )
        .then(unwrapResult)
        .then(() =>
        {
          setContent("Device registered successfully!");
          setSuccess(true);
          navigate("/devices");

        })
        .catch(() => {
         // alert("Device Not Registered!");
          setMessage("Device not registered, please try again");
          setError(true);

        });
      setError(false);
    } else {
      alert("Middleware Serial Number Cannot be empty!");
    }
  };

  const style = { textTransform: "uppercase" };
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
                    Add New Device
                  </MDTypography>
                </MDBox>

                <MDBox pt={3}>
                  <div className="list">

                    <div className="listContainer">

                      <div className="col-md-9 newUser">
                        <form className="newUserForm" onSubmit={onSubmit}>
                          <div className="row">
                            <div className="col-md-6" >

                              {/* Middleware Serial Number */}
                              <div className="newUserItem">
                                <label>Middleware Serial Number</label>
                                <input
                                    onChange={(e) => setSerial(e.target.value)}
                                    type="text"
                                    style={style}
                                />
                              </div>

                              {/* SUP Device Number */}
                              <div className="newUserItem">
                                <label>SUP Device Number</label>
                                <input
                                    onChange={(e) => setSupNo(e.target.value)}
                                    type="text"
                                    style={style}
                                />
                              </div>

                              {/* Customer Name */}
                              <div className="newUserItem">
                                <label>Customer Name</label>
                                <input
                                    onChange={(e) => setCustomer(e.target.value)}
                                    type="text"
                                    style={style}
                                />
                              </div>
                            </div>


                            <div className="col-md-6">
                              <div className="newUserItem">
                                <label>Middleware Type</label>
                                <select
                                    className="newUserSelect"
                                    name="active"
                                    id="active"
                                    onChange={(e) => setMiddleware(e.target.value)}
                                >
                                  <option value=""></option>
                                  <option value="A">Type A</option>
                                  <option value="B">Type B</option>
                                  <option value="C">Type C</option>
                                  <option value="D">Type D</option>
                                </select>
                              </div>
                              <div className="newUserItem">
                                <label>Make</label>
                                <input
                                    onChange={(e) => setMake(e.target.value)}
                                    type="text"
                                    style={style}
                                />
                              </div>
                              <div className="newUserItem">
                                <label>Distributor</label>
                                <input
                                    onChange={(e) => setDistributor(e.target.value)}
                                    type="text"
                                    style={style}
                                />
                              </div>
                            </div>
                          </div>
                          <button className="newUserButton">
                            Register </button>
                        </form>

                        <div>
                          <p>
                            <span style={{"color":"transparent"}}>uu</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </MDBox>


              </Card>

            </Grid>

          </Grid>

        </MDBox>

        {error ?  <ErrorMessage content={message}/> : `` }
        {success ? <SuccessMessage content={content}/> : '' }

      </DashboardLayout>

  );
};

export default NewClients;
