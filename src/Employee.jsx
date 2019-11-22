import React from 'react';
import Form from './Form';
class Employee extends React.Component 
{
constructor(props){
    super(props);
    this.state={
        isLoading :true ,
        dsource :null,

    };
   
}

componentDidMount(){
   return this.updateForm();
}

updateForm()
{
    fetch('http://localhost:3004/employees')
   .then(Response=>{ return Response.json();})
   .then (source=>{ console.log(source)
       //or .then(source=>this.setstate({dsource:source}))
    this.setState({
    dsource:source,
    isLoading:false
       });
   }
   );
}
render(){
    if(this.state.isLoading){
        return(
            <p>isloading...</p>
        )
    }
    return(
      
     <div>
    
         <h4>Employees</h4>
        
         { this.state.dsource.map(e => 
                  <div>{
                    e.isActive === true
                       ?
                  <p style={{color: "red"}}> {e.name} {e.age} </p> 
                  :
                   <p style={{color: "green"}}> {e.name} {e.age} </p> 
                  }
                  </div>
                ) 
              } 
      </div>
          )
      }
}

export default Employee;
