import React from 'react';
class Form extends React.Component 
{
constructor(props)
    {
    super(props);
    this.state={
        age : 0,
        phone :null,
        email : null ,
        phonevalid : true,
        emailvalid :true 

    }
    this.agehandler=this.agehandler.bind(this);
   this.phonehandler=this.phonehandler.bind(this);
   this.validationphone=this.validationphone.bind(this);
   this.emailhandler=this.emailhandler.bind(this);
   this.validationemail=this.validationemail.bind(this);
}
phonehandler=(e)=>{
    this.setState({phone:e.target.value});

}
emailhandler=(e)=>{
    this.setState({email:e.target.value});
}
    agehandler=(e)=>{
this.setState({age:e.target.value});
    }

    validationphone=(e)=>{
        if(this.state.age<18){
            const phnorpattern=/^[0-9]{9}$/;
            phnorpattern.test(this.state.phone) ? this.setState({phonevalid:true}) : this.setState({phonevalid:false});

        }
    }

    validationemail=(e)=>{
        
            const emailpattern= /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,}|com|org|net)*$/;
            emailpattern.test(this.state.email)? this.setState({emailvalid:true}) : this.setState({emailvalid:false});
        }
    
    
render()
    {
        return(
            <form onSubmit={e => {e.preventDefault(); this.validationphone() ; this.validationemail()}}>
<label >Age :</label><input type="number" name="age" onChange={e=>this.agehandler(e)}></input>
<br/>
{this.state.age <18 ?(
    <div>
<label>Parent Name: </label><input  type="text" name="name"></input>
<br/>
<label >Parent Phone Number: </label><input   onChange={e=>this.phonehandler(e)} name="phone"></input>
{!this.state.phonevalid ? <label>wrong phone number</label> : null}
<br/>
<button type="submit"  >Submit</button> 
</div>)
:(
    <div>
<label> Name: </label><input  type="text" name="name"></input>
<br></br>
<labe>Email: </labe><input name="email" onChange={e=>this.emailhandler(e)}></input>
{!this.state.emailvalid? <label>wrong email address</label> : null}
<br></br>
<button type="submit"  >Submit</button> 
</div> )}         
            </form>
        )

    }
}
export default Form;
