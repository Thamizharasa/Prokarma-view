import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class Login extends React.Component 
{
     constructor(props)
     {
         super(props);
         this.state = {
             UserName : "Thamizh",
             Password : "Thamizh"
         }

         this.onchange=this.onchange.bind(this);
        this.onLogin = this.onLogin.bind(this);
   }
   
   onchange(e)
   {
       this.setState({[e.target.name]:e.target.value})
       console.log(this.state);
      
   }

onLogin()
{
    if(this.state.UserName==="Thamizh" && this.state.UserName==="Thamizh")
    this.props.history.push("/DashBoard");
}

   render()
   {
       return(
           <div>
               <table>
                   <tbody>
                       <tr>
                           <td>
                    <TextField id="standard-basic" label="UserName" value={this.state.UserName}  name="UserName" onChange={this.onchange.bind()}/>
                    </td>
                    <td>
                    <TextField id="standard-basic" label="Password" value={this.state.Password} name="Password"  type="password" onChange={this.onchange.bind()} />
                    </td>
                    <td>
                    <Button variant="contained" color="primary" onClick={this.onLogin.bind()} >
                        Login
                    </Button>
                    </td>
                    </tr>
                    </tbody>
                     </table>
           </div>
       )
   }  


}

export default Login;