import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import BarChart from './BarCharts';
import Guage from './Gauge';

const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
  });

  const rows = [
    createData('S1', "Second", 36, 24, 4.0,"Good"),
    createData('F3',"First", 40, 37, 4.3,"Good"),
    createData('S5', "Secoond", 28, 24, 6.0,"Good"),
    createData('T5', "Third", 31, 67, 4.3,"Bad"),
    createData('F2', "First", 36, 49, 3.9,"Bad"),
  ];

  function createData(PlotNo, Floor, Temperature, perception, Condition) {
    return { PlotNo, Floor, Temperature, perception, Condition };
  }

class Dashboard extends React.Component 
{
     constructor(props)
     {
         super(props);
         this.state = {
             UserName : "Thamizh",
             Password : "Thamizh"
         }

   }

   render()
   {
    return (

<div>

<h1>Dashboard</h1>

        <TableContainer component={Paper}>
          <Table  aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Plot No </TableCell>
                <TableCell align="right">Floor</TableCell>
                <TableCell align="right">Temperature &nbsp; °C</TableCell>
                <TableCell align="right">Humidity</TableCell>
                <TableCell align="right">perception&nbsp;</TableCell>
               
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.PlotNo}>
                  <TableCell component="th" scope="row">
                    {row.PlotNo}
                  </TableCell>
                  <TableCell align="right">{row.Floor}</TableCell>
                  <TableCell align="right">{row.Temperature}</TableCell>
                  <TableCell align="right">{row.perception}</TableCell>
                  <TableCell align="right">{row.Condition}</TableCell>
                  </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
            <div>
              <table>
              <tbody>
  <tr>
    
    <td> <BarChart/></td>
    <td><Guage/></td>
    
  </tr>
  </tbody>

              </table>
           
            
          </div>
        </div>

      );

      
   }  

}

export default Dashboard;