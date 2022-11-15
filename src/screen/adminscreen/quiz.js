import { Box, Grid, Typography } from "@mui/material";
import { useState } from "react";
import SMButton from "../../config/components/SMButton";
import SMInput from "../../config/components/SMInput";
import SMSelect from "../../config/components/SMSelect";
import Checkbox from "@mui/material/Checkbox";

function Quiz() {
  const [isCreateQuiz, setIsCreateQuiz] = useState(false);
  const [optionsArr, setOptionsArr] = useState(["Option 1"]);
  const [questions, setQuestions] = useState([]);
  const [model, setModel] = useState({});
  const [question, setQuestion] = useState({});
  const [option, setOption] = useState("");

  let arr = [
    {
      id: 1,
      display: "abc",
    },
    {
      id: 2,
      display: "abc",
    },
    {
      id: 3,
      display: "abc",
    },
  ];

  let createQuiz = () => {
    setIsCreateQuiz(true);
  };
  let fillModel = (key, val) => {
    model[key] = val;
    setModel({ ...model });
  };
  let addOption = () => {
    setOptionsArr([...optionsArr, option]);
  };

  return (
    <>
      <Box>
        <Typography variant="h4">Quiz</Typography>
        <Box>
          <Grid container>
            <Grid md={6} item>
              <Box sx={{ padding: 2 }}>
                <SMInput
                  onChange={(e) => fillModel("question", e.target.value)}
                  disabled={isCreateQuiz}
                  label="Quiz Name"
                />
              </Box>
            </Grid>
            <Grid md={3} item>
              <Box sx={{ padding: 2 }}>
                <SMInput
                  onChange={(e) => fillModel("duration", e.target.value)}
                  disabled={isCreateQuiz}
                  label="Quiz Duration"
                />
              </Box>
            </Grid>
            <Grid md={3} item>
              <Box sx={{ padding: 2 }}>
                <SMSelect
                  onChange={(e) => fillModel("course", e.target.value)}
                  disabled={isCreateQuiz}
                  datasource={[
                    {
                      id: "wm",
                      fullName: "Web And Mobile",
                    },
                    {
                      id: "wm",
                      fullName: "Graphic Design",
                    },
                  ]}
                />
              </Box>
            </Grid>
            <Grid md={12} item>
              <Box>
                <SMButton onClick={createQuiz} label="Create Quiz" />
              </Box>
            </Grid>
          </Grid>
          {isCreateQuiz && (
            <Grid container>
              <Grid md={12} item>
                <SMInput
                  onChange={(e) => {
                    setQuestion({ ...question, question: e.target.value });
                  }}
                  label="Question"
                />
              </Grid>
              <Grid md={12} item>
                {optionsArr.map((x, i) => (
                  <>
                    <Checkbox
                      onChange={(e) => (x.isChecked = e.target.value)}
                    />{" "}
                    <Typography key={i}>{x}</Typography>
                  </>
                ))}
              </Grid>
              <Grid md={8} item>
                <SMInput
                  onChange={(e) => setOption(e.target.value)}
                  label="Option"
                />
              </Grid>

              <Grid md={4} item>
                <SMButton onClick={addOption} label="add" />
              </Grid>
              <Grid md={12} item>
                <SMButton label="Submit Question" />
                <SMButton label="Lock Quiz" />
              </Grid>
            </Grid>
          )}
        </Box>
      </Box>
    </>
  );
}
export default Quiz;
