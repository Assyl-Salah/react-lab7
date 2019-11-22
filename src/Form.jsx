import React from 'react';
class Form extends React.Component 
{
constructor(props)
    {
    super(props);
    }
render()
    {
        return(
            <form  onSubmit={this.props.onSubmith}>
<label >Age :</label><input type="number" name="age"></input>
<br/>
<label>Parent Name:</label><input  type="text" name="name"></input>
<br/>
<label >Parent Phone Number :</label><input  type="number" name="phone"></input>
<br/>
<labe>Email</labe><input name="email"></input>
<button type="submit"  >Add</button>
              
              
            </form>
        )

    }
}
export default Form;
