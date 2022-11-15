import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import SMInput from "../config/components/SMInput";
import SMSelect from "../config/components/SMSelect";
import { getData } from "../config/firebasemethods";

function Result() {
  const [allResults, setAllResults] = useState([]);
  const [selectedCource, setSelectedCource] = useState("");
  const [dropDownList, setDropDownList] = useState([]);
  const [resultTableData, setResultTableData] = useState([]);

  let getResultData = () => {
    getData("results")
      .then((res) => {
        console.log(res);
        let arr = res.filter((x) => x.isShowResult);
        setAllResults([...arr]);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getResultData();
  }, []);

  let showResult = (e) => {
    setSelectedCource(e);
    let obj = allResults.find((x) => x.cource == e);
    console.log(obj);
    setResultTableData([...obj.result]);
  };

  return (
    <>
      <Box sx={{ backgroundColor: "#03045e", padding: 2, margin: 0 }}>
        <h1 style={{ color: "white" }}>Result</h1>
      </Box>
      <Box>
        <Grid container>
          <Grid item md={6}>
            <SMSelect
              label="Cource"
              valueField="cource"
              displayField="cource"
              onChange={(e) => showResult(e.target.value)}
              datasource={allResults}
            />
          </Grid>
          <Grid item md={6}>
            <SMInput label="Enter Roll Number" />
          </Grid>
          <Grid item md={12} sm={12}>
            <table>
              {resultTableData && resultTableData.length > 0 ? (
                resultTableData.map((x, i) => (
                  <tr key={i}>
                    <td>{x.rollNum}</td>
                    <td>{x.name}</td>
                    <td>{x.result}</td>
                    <td>{x.marks}</td>
                  </tr>
                ))
              ) : (
                <h1>No Result</h1>
              )}
            </table>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
export default Result;
