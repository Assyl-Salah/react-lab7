import React from 'react';
class Form extends React.Component 
{
constructor(props)
    {
    super(props);
    this.state={
        age : 0
    }
    this.agehandler=this.agehandler.bind(this);
    }

    agehandler=(e)=>{
this.setState({age:e.target.value});
    }
render()
    {
        return(
            <form >
<label >Age :</label><input type="number" name="age" onChange={e=>this.agehandler(e)}></input>
<br/>
{this.state.age <18 ?(
    <div>
<label>Parent Name: </label><input  type="text" name="name"></input>
<br/>
<label >Parent Phone Number: </label><input  type="number" name="phone"></input>
<br/>
<button type="submit"  >Submit</button> 
</div>)
:(
    <div>
<label> Name: </label><input  type="text" name="name"></input>
<br></br>
<labe>Email: </labe><input name="email"></input>
<br></br>
<button type="submit"  >Submit</button> 
</div> )}         
            </form>
        )

    }
}
export default Form;
