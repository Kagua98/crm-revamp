import React, { useState } from "react";
import "./updateDevice.css";

import { useDispatch } from "react-redux";
import { unwrapResult } from "@reduxjs/toolkit";
import { useLocation, useNavigate } from "react-router-dom";
import { updateDevice } from "../../../features/deviceSlice";
import DashboardNavbar from "../../../examples/Navbars/DashboardNavbar";
import MDBox from "../../../components/MDBox";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import MDTypography from "../../../components/MDTypography";
import DashboardLayout from "../../../examples/LayoutContainers/DashboardLayout";
import MDSnackbar from "../../../components/MDSnackbar";

const UpdateDevice = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  const { id } = location.state;
  const { cName } = location.state;
  const { midSerialNo } = location.state;
  const { supDeviceNo } = location.state;
  const { deviceSerialNo } = location.state;
  const { middlewareType } = location.state;
  const { make } = location.state;
  const { distributor } = location.state;

  const [clientName, setName] = useState(cName);
  const [midSno, setmidSno] = useState(midSerialNo);
  const [supNo, setSupNo] = useState(supDeviceNo);
  const [sNo, setSno] = useState(deviceSerialNo);
  const [mk, setMake] = useState(make);
  const [dist, setDist] = useState(distributor);
  const [mType, setMtype] = useState(middlewareType);

  const style = { textTransform: "uppercase" };


  const onSubmit = (e) => {
    e.preventDefault();

    dispatch(
      updateDevice({
        id,
        clientName,
        midSno,
        sNo,
        mk,
        dist,
        mType,
      })
    )
      .then(unwrapResult)
      .then(() => {
        alert("Device Updated Successfully!");
        navigate("/devices");
      })
      .catch(() => {
        alert("Device not updated!");
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
                                <label>Middleware Serial Number</label>
                                <input
                                    onChange={(e) => setmidSno(e.target.value)}
                                    type="text"
                                    value={midSno}
                                    style={style}
                                />
                              </div>
                              <div className="newUserItem">
                                <label>Sup Device Number</label>
                                <input
                                    onChange={(e) => setSupNo(e.target.value)}
                                    type="text"
                                    value={supNo}
                                    style={style}
                                />
                              </div>

                              <div className="newUserItem">
                                <label>Middleware Type</label>
                                <select
                                    className="newUserSelect"
                                    name="active"
                                    id="active"
                                    onChange={(e) => setMtype(e.target.value)}
                                    value={mType}
                                >
                                  <option value="A">Type A</option>
                                  <option value="B">Type B</option>
                                  <option value="C">Type C</option>
                                  <option value="D">Type D</option>
                                </select>
                              </div>
                            </div>

                            <div className="col-md-6">
                              <div className="newUserItem">
                                <label>Device Serial Number</label>
                                <input
                                    onChange={(e) => setSno(e.target.value)}
                                    type="text"
                                    value={sNo}
                                    style={style}
                                />
                              </div>

                              <div className="newUserItem">
                                <label>Make</label>
                                <input
                                    onChange={(e) => setMake(e.target.value)}
                                    type="text"
                                    value={mk}
                                    style={style}
                                />
                              </div>

                              {/* <div className="newUserItem">
                  <label for="formFileMultiple" class="form-label">
                    Upload Files
                  </label>
                  <input
                    class="form-control"
                    type="file"
                    id="formFileMultiple"
                    multiple
                  />
                </div> */}
                              <div className="newUserItem">
                                <label>Distributor</label>
                                <input
                                    onChange={(e) => setDist(e.target.value)}
                                    type="text"
                                    value={dist}
                                    style={style}
                                />
                              </div>
                            </div>
                          </div>
                          <button className="newUserButton">Update Device</button>
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
      </DashboardLayout>



  );
};

export default UpdateDevice;
