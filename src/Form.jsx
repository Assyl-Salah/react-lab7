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
        emailvalid :true ,
        pname : null ,
        name : null ,
        isdisabled : true

    }
    this.agehandler=this.agehandler.bind(this);
   this.phonehandler=this.phonehandler.bind(this);
   this.validationphone=this.validationphone.bind(this);
   this.emailhandler=this.emailhandler.bind(this);
   this.validationemail=this.validationemail.bind(this);
   this.namehandler=this.namehandler.bind(this);
   this.parentnamehandler=this.parentnamehandler.bind(this);
}
namehandler=(e)=>{
    this.setState({name:e.target.value});
}
parentnamehandler=(e)=>{
    this.setState({pname:e.target.value});
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
            const phonepattern=/^[0-9]{9}$/;
            phonepattern.test(e.target.value)  ? this.setState({phonevalid:true , isdisabled:false} ) : this.setState({phonevalid:false , isdisabled:true});

        }
    }

    validationemail=(e)=>{
        
            const emailpattern= /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,}|com|org|net)*$/;
            emailpattern.test(e.target.value) ? this.setState({emailvalid:true , isdisabled:false}) : this.setState({emailvalid:false, isdisabled:true});
        }
    
    
    
render()
    {
        return(

            <form onSubmit={e => {e.preventDefault();}}>
                <fieldset>
<label >Age :</label><input type="number" name="age" onChange={e=>this.agehandler(e)}></input>
<br/>
{this.state.age <18 ?(
    <div>
<label>Parent Name: </label><input  onChange={e=>this.parentnamehandler(e)} type="text" name="name"></input>
<br/>
<label >Parent Phone Number: </label><input  onChange={(e) => {this.phonehandler(e); this.validationphone(e);}} name="phone"></input>
{!this.state.phonevalid ? <label>wrong phone number</label> : null}
<br/>
</div>)
:(
    <div>
<label> Name: </label><input  onChange={e=>this.namehandler(e)} type="text" name="name"></input>
<br></br>
<label>Email: </label><input name="email" onChange={(e) => {this.emailhandler(e); this.validationemail(e);}}></input>
{!this.state.emailvalid? <label>wrong email address</label> : null}
<br></br>
</div> )}     
<button type="submit" disabled={this.state.isdisabled} >Submit</button>    
</fieldset>
            </form>
        )

    }
}
export default Form;
