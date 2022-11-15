import { Box, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import SMButton from "../../config/components/SMButton";
import SMSelect from "../../config/components/SMSelect";
import SMSwitch from "../../config/components/SMSwitch";
import { getData, sendData } from "../../config/firebasemethods";

function CreateResult() {
  const [model, setModel] = useState({});
  const [courceStatus, setCourceStatus] = useState(false);
  const [resultData, setResultData] = useState([
    {
      name: "Faiz ",
      marks: 90,
      rollNum: "373230",
      result: "Pass",
    },
    {
      name: "Mahad",
      marks: 90,
      rollNum: "37321",
      result: "Pass",
    },
    {
      name: "Ayaz ",
      marks: 75,
      rollNum: "37322",
      result: "Pass",
    },
    {
      name: "Ahmad",
      marks: 82,
      rollNum: "37323",
      result: "Pass",
    },
    {
      name: "Uzair",
      marks: 65,
      rollNum:"34339",
      result: "Pass",
    },
    {
      name: "Hammad ",
      marks: 44,
      rollNum: "33443",
      result: "Pass",
    },
   
  ]);
  const [resultTableData, setResultTableData] = useState([]);
  const [loader, setLoader] = useState(false);

  let submitForm = () => {
    setLoader(true);
    model.isShowResult = courceStatus;
    model.result = resultData;
    console.log(model);
    sendData(model, "results")
      .then((res) => {
        setLoader(false);
        console.log(res);
      })
      .catch((err) => {
        setLoader(false);
        console.log(err);
      });
  };

  let getResultData = () => {
    getData("results")
      .then((res) => {
        console.log(res);
        setResultTableData(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getResultData();
  }, []);

  return (
    <>
      <h1>Create Result</h1>
      <Box sx={{ padding: 2 }}>
        <Grid container>
          <Grid md={6} item>
            <SMSwitch
              value={courceStatus}
              onChange={(e) => setCourceStatus(e.target.checked)}
              label="Cource"
            />
          </Grid>
          <Grid md={6} item>
            <SMSelect
              label="Cource"
              onChange={(e) => setModel({ ...model, cource: e.target.value })}
              datasource={[
                {
                  id: "wm",
                  fullName: "Web And Mobile",
                },
                {
                  id: "gd",
                  fullName: "Graphics Designing",
                },
              ]}
            />
          </Grid>
          <Grid item md={12}>
            <Box>
              <table>
                {resultData.map((x, i) => (
                  <tr>
                    <td>{x.name}</td>
                    <td>{x.rollNum}</td>
                    <td>{x.result}</td>
                    <td>{x.marks}</td>
                  </tr>
                ))}
              </table>
            </Box>
          </Grid>
          <Grid md={6} item>
            <SMButton loading={loader} label="Submit" onClick={submitForm} />
          </Grid>
        </Grid>
        <Box>
          <table>
            {resultTableData.map((x, i) => (
              <tr>
                <td>{x.result.length}</td>
                <td>
                  <SMSelect
                    valuefield="id"
                    displayField="fullName"
                    value={x.cource}
                    datasource={[
                      {
                        id: "wm",
                        fullName: "Web And Mobile",
                      },
                      {
                        id: "gd",
                        fullName: "Graphics Designing",
                      },
                    ]}
                  />{" "}
                </td>
                <td>
                  <SMSwitch
                    onChange={(e) => {
                      resultTableData[i].isShowResult = e.target.checked;
                    }}
                    value={x.isShowResult}
                  />
                </td>
              </tr>
            ))}
          </table>
        </Box>
      </Box>
    </>
  );
}
export default CreateResult;
