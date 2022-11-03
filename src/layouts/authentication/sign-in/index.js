import { useState } from "react";

// @mui material components
import Card from "@mui/material/Card";
import Switch from "@mui/material/Switch";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";

// Authentication layout components
import BasicLayout from "layouts/authentication/components/BasicLayout";

// Images
import bgImage from "assets/images/bg-sign-in-basic.jpeg";
import {useNavigate} from "react-router-dom";

function Basic() {
  const [rememberMe, setRememberMe] = useState(false);

  const handleSetRememberMe = () => setRememberMe(!rememberMe);


  const [password, setPass] = useState();
  const [email, setEmail] = useState();
  const navigate = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    let loginUrl = "https://matrixtelematic.herokuapp.com/api/auth/login/";
    await fetch(loginUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
        .then((response) => response.json())
        .then((data) => {
          if (Object.keys(data).length === 1) {
            alert("Invalid Email or Password!");
          } else if (Object.keys(data).length === 3) {
            alert("Operation Successful!");
            localStorage.setItem("authTokens", JSON.stringify(data));
            navigate("/dashboard");
          }
        })
        .catch((error) => {
          alert(error);
        });
  };



  return (
    <BasicLayout image={bgImage}>
      <Card>
        <MDBox
          variant="gradient"
          bgColor="info"
          borderRadius="lg"
          coloredShadow="info"
          mx={2}
          mt={-3}
          p={2}
          mb={1}
          textAlign="center"
        >
          <MDTypography variant="h4" fontWeight="medium" color="white" mt={1}>
            Welcome Back!
          </MDTypography>
          <MDTypography display="block" variant="button" color="white" my={1}>
            Sign in below
          </MDTypography>
        </MDBox>
        <MDBox pt={4} pb={3} px={3} onSubmit={submit}>
          <MDBox component="form" role="form">
            <MDBox mb={2}>
              <MDInput type="email" label="Email" fullWidth
                       onChange={(e) => setEmail(e.target.value)}/>
            </MDBox>
            <MDBox mb={2}>
              <MDInput type="password" label="Password" fullWidth
                       onChange={(e) => setPass(e.target.value)}/>
            </MDBox>
            <MDBox display="flex" alignItems="center" ml={-1}>
              <Switch checked={rememberMe} onChange={handleSetRememberMe} />
              <MDTypography
                variant="button"
                fontWeight="regular"
                color="text"
                onClick={handleSetRememberMe}
                sx={{ cursor: "pointer", userSelect: "none", ml: -1 }}
              >
                &nbsp;&nbsp;Remember me
              </MDTypography>
            </MDBox>
            <MDBox mt={4} mb={1}>
              <MDButton variant="gradient" color="info" fullWidth>
                sign in
              </MDButton>
            </MDBox>
          </MDBox>
        </MDBox>
      </Card>
    </BasicLayout>
  );
}

export default Basic;
