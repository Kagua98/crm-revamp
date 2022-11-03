import React, { useState } from "react";
import "./updateClient.css";

import { updateCustomer } from "../../../features/customerSlice";
import { useDispatch } from "react-redux";

import { unwrapResult } from "@reduxjs/toolkit";
import { useLocation, useNavigate } from "react-router-dom";
import DashboardLayout from "../../../examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "../../../examples/Navbars/DashboardNavbar";
import MDBox from "../../../components/MDBox";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import MDTypography from "../../../components/MDTypography";
import ErrorMessage from "../../../components/ErrorSnackbar";
import SuccessMessage from "../../../components/SuccessSnackbar";

const UpdateClient = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const { id } = location.state;
  const { cName } = location.state;
  const { cPin } = location.state;
  const { cContact } = location.state;
  const { cLocation } = location.state;

  const [clientName, setName] = useState(cName);
  const [clientPin, setPin] = useState(cPin);
  const [clientLocation, setLocation] = useState(cLocation);
  const [clientContact, setContact] = useState(cContact);
  //const [clientEmail, setEmail] = useState(data.clientEmail);

  const [error, setError] = useState(false); //Controls Alert
  const [message, setMessage] = useState(''); //Controls Message

  const [success, setSuccess] = useState(false); //Controls Alert
  const [content, setContent] = useState('');

  const style = { textTransform: "uppercase" };
  const onSubmit = (e) => {
    e.preventDefault();

    dispatch(
      updateCustomer({
        id,
        clientName,
        clientPin,
        clientLocation,
        clientContact,
        //clientEmail,
      })
    )
      .then(unwrapResult)
      .then(() => {
        alert("Client updated Successfully!");
        setContent("Client updated Successfully!");
        setSuccess(true);
        navigate("/clients");
      })
      .catch(() => {
        alert("Client Not Added!");
        setMessage("Client not updated, please try again");
        setError(true);
      });
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
                    Add New Client
                  </MDTypography>
                </MDBox>

                <MDBox pt={3}>

                  <div className="list">

                    <div className="listContainer">

                      <div className="col-md-9 newUser">
                        <form className="newUserForm" onSubmit={onSubmit}>
                          <div className="row">
                            <div className="col-md-6">
                              <div className="newUserItem">
                                <label>Client Name</label>

                                <input
                                    onChange={(e) => setName(e.target.value)}
                                    type="text"
                                    value={clientName}
                                    style={style}
                                />
                              </div>

                              <div className="newUserItem">
                                <label>Client Pin</label>
                                <input
                                    onChange={(e) => setPin(e.target.value)}
                                    type="text"
                                    value={clientPin}
                                    style={style}
                                />
                              </div>
                              <div className="newUserItem">
                                <label>Client Contact</label>
                                <input
                                    onChange={(e) => setContact(e.target.value)}
                                    type="text"
                                    value={clientContact}
                                    style={style}
                                />
                              </div>
                            </div>

                            <div className="col-md-6">
                              <div className="newUserItem">
                                <label>Client Email</label>
                                <input
                                    //onChange={(e) => setEmail(e.target.value)}
                                    type="text"
                                    style={style}
                                />
                              </div>

                              <div className="newUserItem">
                                <label>Client Location</label>
                                <input
                                    onChange={(e) => setLocation(e.target.value)}
                                    type="text"
                                    value={clientLocation}
                                    style={style}
                                />
                              </div>

                              <div className="newUserItem">
                                <label htmlFor="formFileMultiple" className="form-label">
                                  Upload Files
                                </label>
                                <input
                                    className="form-control"
                                    type="file"
                                    id="formFileMultiple"
                                    multiple
                                />
                              </div>
                            </div>
                          </div>
                          <button className="newUserButton">Update Client</button>
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

export default UpdateClient;
