import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Axios from "../libraries/Axios";
import Spinner from "./Spinner/Spinner";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "./Home.css"
const Home = () => {
  let [student, setStudent] = useState([]);
  let [loading, setLoading] = useState(false);
  useEffect(() => {
    let fetchdata = async () => {
      try {
        setLoading(true);
        let str = await Axios.get("/api/students");
        // console.log(str.data.payload);
        let { data } = str;
        let { payload } = data;
        console.log(payload);
        setStudent(payload);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };
    fetchdata();
  }, []);

  return (
    <section id="home">
      <article>
        <Box>
          <Card variant="elevation">
            <React.Fragment>
              {loading ? (
                <Spinner />
              ) : (
                student.map((value, i) => {
                  return (
                    <CardContent
                      style={{
                        borderBottom: "2px solid red",
                      }}
                    >
                      <div id="mega">
                        <Typography
                          sx={{ fontSize: 14 }}
                          color="text.secondary"
                          gutterBottom
                        >
                          std_id:{value.std_id}
                        </Typography>
                        <Typography variant="h5" component="div">
                          <Link to={`/students/${value._id}`}>
                            Name:{value.name}
                          </Link>
                        </Typography>
                        <Typography sx={{ mb: 1.5 }} color="textSecondary">
                          Email:{value.email}
                        </Typography>
                        <Typography variant="body2">
                          Courses:{value.courses}
                          <br />
                        </Typography>
                        <Typography
                          color="primary"
                          variant="subtitle1"
                          align="right"
                        >
                          <Link to={`/editstudent/${value._id}`}>
                            Edit Student
                          </Link>
                        </Typography>
                        <Typography
                          variant="subtitle1"
                          color="error"
                          align="right"
                        >
                          <Link to={`/deletestudent/${value._id}`}>
                            Delete Student
                          </Link>
                        </Typography>
                      </div>
                    </CardContent>
                  );
                })
              )}
              <CardActions></CardActions>
            </React.Fragment>
          </Card>
        </Box>
      </article>
    </section>
  );
};

export default Home;
