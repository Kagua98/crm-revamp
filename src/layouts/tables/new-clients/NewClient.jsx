import React, { useState } from "react";
import "./newClients.css";

import { addCustomer } from "../../../features/customerSlice";
import { useDispatch } from "react-redux";

import { unwrapResult } from "@reduxjs/toolkit";
import { useNavigate } from "react-router-dom";
import DashboardNavbar from "../../../examples/Navbars/DashboardNavbar";
import DashboardLayout from "../../../examples/LayoutContainers/DashboardLayout";
import MDBox from "../../../components/MDBox";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import MDTypography from "../../../components/MDTypography";
import ErrorMessage from "../../../components/ErrorSnackbar";
import SuccessMessage from "../../../components/SuccessSnackbar";

const NewClient = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [clientName, setName] = useState("");
  const [clientPin, setPin] = useState("");
  const [clientLocation, setLocation] = useState("");
  const [clientContact, setContact] = useState("");
  const [clientEmail, setEmail] = useState("");

  const style = { textTransform: "uppercase" };

  const [error, setError] = useState(false); //Controls Alert
  const [message, setMessage] = useState(''); //Controls Message

  const [success, setSuccess] = useState(false); //Controls Alert
  const [content, setContent] = useState('');


  const onSubmit = (e) => {
    e.preventDefault();

    if (clientName || clientPin || clientContact != null) {
      dispatch(
        addCustomer({
          clientName,
          clientPin,
          clientLocation,
          clientContact,
          clientEmail,
        })
      )
        .then(unwrapResult)
        .then(() => {
          alert("Client added Successfully!");
          setSuccess(true)
          setContent("Client added Successfully!");
          navigate("/clients");
        })
        .catch(() => {
          setMessage("Client not added, please try again");
          setError(true);
        });
    } else {
      alert("Middleware Serial Number Cannot be empty!");
    }
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
                                    style={style}
                                />
                              </div>

                              <div className="newUserItem">
                                <label>Client Pin</label>
                                <input onChange={(e) => setPin(e.target.value)} type="text"/>
                              </div>
                              <div className="newUserItem">
                                <label>Client Contact</label>
                                <input
                                    onChange={(e) => setContact(e.target.value)}
                                    type="text"
                                    style={style}
                                />
                              </div>
                            </div>

                            <div className="col-md-6">
                              <div className="newUserItem">
                                <label>Client Email</label>
                                <input
                                    onChange={(e) => setEmail(e.target.value)}
                                    type="text"
                                    style={style}
                                />
                              </div>

                              <div className="newUserItem">
                                <label>Client Location</label>
                                <input
                                    onChange={(e) => setLocation(e.target.value)}
                                    type="text"
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
                          <button className="newUserButton">Register Client</button>
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

export default NewClient;
