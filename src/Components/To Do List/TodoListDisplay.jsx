import React, { useEffect, useState } from "react";
import CancelIcon from "@mui/icons-material/Cancel";
import CreditScoreIcon from "@mui/icons-material/CreditScore";
import { Container, Row, Col } from "react-bootstrap";
import { Button, TextField } from "@mui/material";
import KeyboardBackspaceRoundedIcon from "@mui/icons-material/KeyboardBackspaceRounded";

export function TodoListDisplay({ data, setData, handlerDeleteList }) {
  const [EditID, setEditId] = useState();
  let [styleListPanel, setstyleListPanel] = useState("block");
  let [styleDisplayPanel, setstyleDisplayPanel] = useState("none");
  const [newdata, setNewData] = useState([]);
  const [updatedTask, setupdatedTask] = useState();
  const [PassId, setpassId] = useState(null);
  // let colorhash = ["#467eff", "#e52fbf", "#e75f30", "#5a58ff"];
  // const [colornum, setcolornum] = useState(0);

  const handlerEdit = (idtoedit) => {
    console.log("idtoedit" + idtoedit);
    setpassId(idtoedit);

    // setEditId(idtoedit);
    const filteredid = data.filter((item) => item.id === idtoedit);
    setNewData(filteredid);
    setstyleListPanel("none");
    setstyleDisplayPanel("block");
  };

  const backHandler = () => {
    setstyleListPanel("block");
    setstyleDisplayPanel("block");
  };
  // useEffect(() => {
  let handlerTask = (newtask) => {
    setupdatedTask(newtask);
  };
  // }, [updatedTask]);

  let UpdateHandler = (idtoedit) => {
    console.log();
    setNewData([]);
    console.log("tasktoupdate on update button:" + updatedTask);
    // newdata.map((item) => (item.task = { updatedTask }));
    // const addUpdatedData = data.filter((item) => item.id !== updateid);
    // addUpdatedData.task = updatedTask;
    // setData()
    // setData(addUpdatedData);
    // setData([{ id: updateid, task: updatedTask }, ...data]);
    // setData(addUpdatedData, ...data);
    // console.log(data);
    data.map((item) => item.id === idtoedit && (item.task = updatedTask));
    setupdatedTask("");
    setData(data);

    setstyleListPanel("block");
    setstyleDisplayPanel("none");
  };

  return (
    <div>
      <div className="ListPanel" style={{ display: styleListPanel }}>
        {data.map((item, index) => (
          <Row
            className="listbox"
            key={index}
            
            // style={{ backgroundColor: colorhash[colornum] }}
          >
            <Col md={10} style={{ textAlign: "left" }}>
              {item.task}
            </Col>
            <Col md={1}>
              <CancelIcon
                onClick={() => handlerDeleteList(item.id)}
                className="close"
              />
            </Col>
            <Col md={1}>
              <CreditScoreIcon
                onClick={() => handlerEdit(item.id)}
                className="update"
              />
            </Col>
          </Row>
        ))}
      </div>
      <div className="UpdatePanel" style={{ display: styleDisplayPanel }}>
        <Row className="my-5 text-center">
          {newdata.map((item) => (
            <>
              <Col md={10} style={{ textAlign: "left" }}>
                <TextField
                  className="purpleborder fontWhite"
                  variant="outlined"
                  defaultValue={item.task}
                  size="small"
                  color="primary"
                  fullWidth
                  focused
                  inputProps={{ style: { color: "white" } }}
                  onChange={(e) => handlerTask(e.target.value)}
                  autoComplete="false"
                />
              </Col>
              <Col md={1}>
                <Button
                  variant="contained"
                  color="primary"
                  className="Edit"
                  onClick={() => UpdateHandler(item.id)}
                >
                  Update
                </Button>
              </Col>
            </>
          ))}
          <Col md={1}></Col>
        </Row>
        <div className="text-right">
          <span
            className="backspan"
            style={{ border: "2px soiid red" }}
            onClick={backHandler}
          >
            <KeyboardBackspaceRoundedIcon className="backbtn" size="large" />
            <strong>Show Todo List</strong>{" "}
          </span>
        </div>
      </div>
    </div>
  );
}
