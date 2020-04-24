import React from 'react';
import AddTeaForm from './AddTeaForm';
import TeaList from './TeaList';

class TeaControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
    };
  }

  render(){
    
    let currentlyVisibleState = null;
    if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <AddTeaForm />
    } else {
      currentlyVisibleState = <TeaList />
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
      </React.Fragment>
      
    )
  }

}

export default TeaControl;