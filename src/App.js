import React from 'react';
import { Form, FormControl, FormFloating, FormGroup, FormLabel } from 'react-bootstrap';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="header">
      <h1>IP Address Tracker</h1>
      <Form>
        <FormGroup>
          <FormControl
          type="text"
          placeholder="Search for an IP adress or Domain"
          />
        </FormGroup>
      </Form>
      </div>
      
    </div>
  );
}

export default App;
