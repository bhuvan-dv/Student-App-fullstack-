import React, { useState, useEffect } from "react";
import { useParams,useNavigate,Link } from "react-router-dom";
import Axios from "../libraries/Axios";
// import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
const ViewStudent = () => {
  let [name, setName] = useState("");
  let [std_id, setStd_id] = useState("");
  let [email, setEmail] = useState("");
  let [courses, setCourses] = useState([]);
  let [loading, setLoading] = useState(false);
  let { id } = useParams();
  useEffect(() => {
    let newData = async () => {
      let str = await Axios.get(`/api/students/${id}`);
      let { name, std_id, courses, email } = str.data.payload;
      setName(name);
      setStd_id(std_id);
      setEmail(email);
      setCourses(courses);
      setLoading(true);
    };
    newData();
    setLoading(false);
  }, [id]);
  return (
    <Box sx={{ maxWidth: 220}}>
      <Card variant="outlined">
        <React.Fragment>
          <CardContent>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              std_id:{std_id}
            </Typography>
            <Typography variant="h4" component="div">
              Name:{name}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              Email:{email}
            </Typography>
            <Typography variant="body2">
              Courses:{courses}
            </Typography>
          </CardContent>
          <CardActions>
            <Link to="/">
              {" "}
              <Button size="small">go back home</Button>
            </Link>
          </CardActions>
        </React.Fragment>
      </Card>
    </Box>
  );
};
export default ViewStudent;
