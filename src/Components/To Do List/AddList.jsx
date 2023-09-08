import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { TextField, Button } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { TodoListDisplay } from "./TodoListDisplay";
import { useForm } from "react-hook-form";
import "./style.css";

export function AddList() {
  const [text, setText] = useState("");
  const [data, setData] = useState([]);
  const [listkey, setListkey] = useState(null);
  const [counter, setCounter] = useState(0);
  const [errorText, setErrorText] = useState("");

  const handlerDeleteList = (idtoremove) => setListkey(idtoremove);

  //CODE FOR ADDING LIST TO DATA
  const handlerAdd = () => {
    if (text.length === 0) {
      setErrorText("Please Enter the value");
      return false;
    } else {
      setErrorText("");
      setText(text);
    }
    setCounter(counter + 1);
    // setData([{ id: Math.floor(Math.random() * 10000), task: text }, ...data]);
    setData([{ id: counter, task: text }, ...data]);
    setText("");
    console.log(data);
  };

  //CODE FOR DELETING LIST FROM DATA
  useEffect(() => {
    const filtered = data.filter((item) => item.id !== listkey);
    setData(filtered);
  }, [listkey]);

  return (
    <div className="bgblue center mb-2">
      <h5 className="my-4 ">What's the Plan for Today ?</h5>
      <Container>
        <Row className="my-3 ">
          <Col md={1}></Col>
          <Col md={10} className="purpleborder">
            <TextField
              className="purpleborder fontWhite"
              variant="outlined"
              label="Add Todo"
              color="secondary"
              size="small"
              name="todotext"
              fullWidth
              focused
              required
              autoComplete="off"
              value={text}
              inputProps={{ style: { color: "white" } }}
              helperText={errorText}
              FormHelperTextProps={{
                style: { color: "white", position: "relative", top: "5px" },
              }}
              // errorText={errorText}
              onChange={(e) => setText(e.target.value)}
            />{" "}
          </Col>
          <Col md={1} className="btnAdd">
            {" "}
            <Button variant="contained" color="secondary" onClick={handlerAdd}>
              {" "}
              <AddCircleIcon fontSize="medium" />
            </Button>
          </Col>
        </Row>
        <TodoListDisplay
          data={data}
          handlerDeleteList={handlerDeleteList}
          setData={setData}
        />
      </Container>
    </div>
  );
}
