import React, {useEffect, useState} from 'react'
import {Typography, Grid, Button, Checkbox, TextField, Container, Paper } from "@material-ui/core";
import PieChart, { Series, Size } from "devextreme-react/pie-chart";

import { makeStyles } from "@material-ui/core/styles"


function CalculatedPie({setCheckTrue, age, time, check}) {

    const useStyles = makeStyles({
        header: {
               color: "#42282F",
               paddingBottom:".5rem"
            
            },
       paper: {
           margin: "1rem"
       },
       pie:{
        paddingBottom:"5rem"
       },
       resultText: {
        padding: "2rem"
       }
   })

       
let [difference, setDifference] = useState();
let [supposedHours, setSupposedHours] = useState("");
let [rest, setRest] = useState("");
let [percent, setPercent] = useState("");
const [hiddenResultText, setHiddenResultText] = useState(false)




let calcDifference = () => {
    let h;
    let hours;
    const int = parseInt(age)

    const x = int;
    switch(true) {
        case int >= 65 :
            h = 8;
            break;
        case int >=18:
            h = 9;
            break;
        case int >=14 :
            h = 10;
            break;
        case int >=6 :
          h = 11;
          break;
        case int <= 5:
          h = 13;
          break;
        default:
          console.log("error in switch, jas");
      }

    setSupposedHours(h);

    console.log(time, supposedHours)
    
    if(supposedHours > time){ 
        
        setPercent(Math.floor((time/supposedHours)*100));
        console.log(Math.floor((time/supposedHours)*100))
        
        setRest(Math.floor((100-percent)));
        

    } else {
        setPercent(Math.floor((supposedHours/time)*100));
        
        setRest(Math.floor((100-percent))); 
    }
    setDifference(hours);
    console.log( percent, rest);

    
    
    setHiddenResultText(true)

}



useEffect(() => {
    if(check === true){
        calcDifference();
    }
})

   
   let sleep = [{
       sleep: 'You slept ',
       amount: percent,
   }, {
       sleep: "Missed sleep ",
       amount: rest,
   }];



const classes = useStyles();
    
  return (
        <Paper className={classes.paper}>
            <Grid>
                 <Typography style={{visibility: hiddenResultText ? 'visible' : 'hidden'}} variant="h6" className={classes.resultText} >Based on the following graphic you are sleeping {percent}% from the actual average sleep time.</Typography>
            </Grid>
            <Typography align="center" className={classes.header} variant="h4">Your Amount</Typography>
                <Grid align="center">    
                    <PieChart className={classes.pie}  dataSource={sleep}>
                        <Series argumentField="sleep" valueField="amount"></Series>
                        <Size width={450} />
                    </PieChart>
                </Grid>
        </Paper>
  )
}

export default CalculatedPie;


