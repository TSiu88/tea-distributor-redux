import React from 'react';
import AddTeaForm from './AddTeaForm';
import TeaList from './TeaList';
import TeaDetails from './TeaDetails';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as a from './../../actions';

const buttonStyler = {
  marginLeft: 20,
};
class TeaControl extends React.Component {

  // Handler to find selected tea by id and change state with selectedTea
  handleChangingSelectedTea = (id) => {
    const selectTea = this.props.masterTeaList[id];
    const { dispatch } = this.props;
    const action = a.selectedTea(id, selectTea);
    dispatch(action);
  }

  // Handler to find if add form is visible or not and toggle between them with addFormVisible: true/false
  handleToggleForms = () => {
    if (this.props.selectedTea != null) {
      const { dispatch } = this.props;
      const action = a.cancelAddForm();
      dispatch(action);
      const action2 = a.unselectTea();
      dispatch(action2);
    } else {
      const { dispatch } = this.props;
      const action = a.toggleAddForm();
      dispatch(action);
    }
  }

  // Handler to find if a new tea is to be added, add tea to list and update list, change back to main page view
  handleAddingTeaToList = (newTea) => {
    if (newTea.image === "") {
      newTea.image = "./defaultImage.jpeg";
    }
    const { dispatch } = this.props;
    const action = a.addOrUpdateTea(newTea);
    dispatch(action);
    const action2 = a.toggleAddForm();
    dispatch(action2);
  }

  // Handler to find if a specific tea's button to decrease amount pressed and decreases amount, set state to new state and change quantity changed back to false
  handleChangingQuantity = (id) => {
    const quantityChanged = this.props.masterTeaList[id];
    const { dispatch } = this.props;
    const action = a.decreaseQuantity(quantityChanged);
    dispatch(action);
  }

  // Check which view should be visible due to which state parameter is true/has value, passes values from callback to event handlers
  setVisability = () => {
    if (this.props.selectedTea != null) {
      // Details for single tea
      return {
        component: (
          <TeaDetails
          onTeaSelection={this.handleChangingSelectedTea}
            tea={this.props.selectedTea} />
        ),
        buttonText: "Return to Tea List",
      };
    }
    else if (this.props.addFormVisible) {
      // Create new tea form view
      return {
        component: (
          <AddTeaForm
            onAddTea={this.handleAddingTeaToList} />
        ),
        buttonText: "Return to Tea List",
      };
    } else {
      return {
        // Read all, list on main page
        component: (
          <TeaList
            onTeaSelection={this.handleChangingSelectedTea}
            onQuantityChanged={this.handleChangingQuantity} 
            teaList={this.props.masterTeaList}/>
        ),
        buttonText: "Add Tea",
      };
    }
  }

  render(){
    let currentlyVisibleState = this.setVisability();
    return (
      <React.Fragment>
        <div>
          <button 
            className="btn btn-primary" 
            onClick={this.handleToggleForms} 
            style={buttonStyler}>
              {currentlyVisibleState.buttonText}
          </button>
          {currentlyVisibleState.component}
        </div>
        
      </React.Fragment> 
    )
  }
}

TeaControl.propTypes = {
  masterTeaList: PropTypes.object
};

const mapStateToProps = state => {
  return {
    masterTeaList: state.masterTeaList,
    addFormVisible: state.addFormVisible,
    selectedTea: state.selectedTea,
  }
}

TeaControl = connect(mapStateToProps)(TeaControl);

export default TeaControl;