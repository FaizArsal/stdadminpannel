import { Box, Grid } from "@mui/material";
import { useState } from "react";
import SMButton from "../config/components/SMButton";
import SMInput from "../config/components/SMInput";
import SMSelect from "../config/components/SMSelect";
import { setDate } from "../config/core/helpermethod";

function RegitsrationForm() {
  const [model, setModel] = useState({});

  let register = () => {
    model.registrationDate = setDate(new Date());
    model.isFeeSubmited = false;
    model.isApproved = false;
    model.isActive = false;
    console.log(model);
  };

  return (
    <>
      <div className="bgLight">
        <Box sx={{ backgroundColor: "#03045e", padding: 2, margin: 0 }}>
          <h1 style={{ color: "white" }}>Regitsration Form</h1>
        </Box>
        <Box>
          <Box sx={{ padding: 1 }}>
            <Grid container>
              <Grid item md={4}>
                <SMInput label="First Name" />
              </Grid>
              <Grid item md={4}>
                <SMInput label="Last Name" />
              </Grid>
              <Grid item md={4}>
                <SMSelect
                  label="Course"
                  datasource={[
                    {
                      id: "wm",
                      fullName: "Web and Mobiles",
                    },
                  ]}
                />
              </Grid>
              <Grid item md={4}>
                <SMButton label="Submit" onClick={register} />
              </Grid>
            </Grid>
          </Box>
        </Box>
      </div>
    </>
  );
}
export default RegitsrationForm;
