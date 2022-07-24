import React,  { useState} from "react";
import {Typography, Grid, Button, Checkbox, TextField, Container, Paper, Link } from "@material-ui/core";
import moment from 'moment';
import { makeStyles } from "@material-ui/core/styles"
import {
    Chart,
  ArgumentAxis,
  ValueAxis,
  BarSeries
  } from '@devexpress/dx-react-chart-material-ui';

import CalculatedPie from "./components/CalculatedPie";


const useStyles = makeStyles({
    body: { 
        background: "#42282F"
    },
    header: {
        color: "#74A588",
        padding: "1rem"
    },
    headermore: {
        color: "#D6CCAD",
        fontWeight: "bold"
    },
    container: {
        padding: "3rem"
    },
    buttons: {
        margin: "3rem"
    },
    button: {
        margin:".5rem"
    },
    input: {
        padding:".5rem"
    },
    inputs:{
        margin: "3rem"
    },
    tabelle: {
        padding: "1rem",
        color:"#42282F"
    },
    usage:{
        color:"white",
        padding: "3rem"
    },
    timeDepending: {
        padding: "1rem"
    }
})




const App = () => {
    
    const classes = useStyles();

    const [time, setTime] = useState();
    const [age, setAge] = useState();

  
    
    const [checkTrue, setCheckTrue] = useState(null);

     
const onSubmit = (e) => {
    e.preventDefault();
     setCheckTrue(true);
    }

const data = [
    { argument: "0-3 Months", value: 17 },
    { argument: "4-11 Months", value: 15 },
    { argument: "1-2 years", value: 14 },
    { argument: "3-5 years", value: 13},
    { argument: "6-13 years", value: 11 },
    { argument: "14-17 years", value: 10 },
    { argument: "18-25 years", value: 9 },
    { argument: "26-64 years", value: 9 },
    { argument: "65+ years", value: 8 }
]

//------------------------for future: calculation for whole week

// const everyday = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

// const handleChange_days = (e) => {
//     setTime(e.target.value);
//     console.log(time)
// }

//   const allDays = everyday.map(day => (
//                               <Grid>
//                                  <Typography  className={classes.timeDepending}>
//                                     {day}
//                                  </Typography>
//                                        <TextField onChange={handleChange_days} className={classes.input} type="number" variant="filled" label="Hours?" placeholder="7.30"></TextField>
//                              </Grid>
//                          )
//                          )   

// console.log(everyday.map(day=> day));


   // <Paper> 
                    //          <Typography variant="h5" className={classes.timeDepending}>
                    //             For this week
                    //         </Typography>        
                    //         <TextField onChange={(e) => setAge(e.target.value)} className={classes.input} type="number" variant="filled" label="How old are you?" placeholder="30 years"></TextField>

                    //         {allDays}
                    //         <Button onClick={onSubmit} className={classes.button} variant="contained" size="large" color="primary">save</Button>  
                    // </Paper> 

    return(
        <div className={classes.body} >
            <Container className={classes.container} maxWidth="md">
                <Grid>
                     <Typography className={classes.headermore} align="center" variant="h4">Welcome to your</Typography>
                     <Typography className={classes.headermore} align="center" variant="h2">Sleep visualizer</Typography>
                     <Typography className={classes.header} align="center">How much sleep do you miss?</Typography>
                </Grid>    
                <Grid className={classes.inputs}>
                    <Paper>
                            <Typography variant="h5" className={classes.timeDepending}>
                                For today
                            </Typography>
                            <TextField onChange={(e) => setTime(e.target.value)} className={classes.input} type="number" variant="filled" label="Hours" placeholder="7.30"></TextField>
                           
                            <TextField onChange={(e) => setAge(e.target.value)} className={classes.input} type="number"
                              variant="filled" label="How old are you?" placeholder="30 years"></TextField>
                            <Button onClick={onSubmit} className={classes.button} variant="contained" size="large" color="primary">save</Button>  
                    </Paper> 
                    
                 
                </Grid>

                <CalculatedPie setCheckTrue={setCheckTrue} check={checkTrue} age={age}  time={time} />

                <Grid>
                    <Paper>
                    <Typography className={classes.tabelle} align="center" variant="h4">Based on</Typography>
                        <Chart data={data}>
                            <ArgumentAxis />
                            <ValueAxis />
                            <BarSeries valueField="value" argumentField="argument" />
                        </Chart>
                    </Paper>
                </Grid>

                <Typography  className={classes.usage}>For the graphical representation I used <Link href="https://js.devexpress.com/Documentation/Guide/React_Components/Add_DevExtreme_to_a_React_Application/" underline="none">
                {'DevExpress'}
              </Link></Typography>

            </Container>         
        </div>
    );
}
export default App;