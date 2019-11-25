import React from 'react';
//import { BrowserRouter, Route , Switch} from 'react-router-dom';
// import Employee from './Employee';
import Form from './Form';
//import Success from './Sucess';

function App() {
  return (
    <div>  {/* Empty App */}
<h2>Form</h2>
      {/* <Employee></Employee> */}
     <Form></Form>

     {/* <BrowserRouter>
     <Switch>
        <Route exact path="/"  componet={Form}/>
        <Route path="/success"  componet={Success} />
        </Switch>
      </BrowserRouter> */}
    </div>
  );
}

export default App;
