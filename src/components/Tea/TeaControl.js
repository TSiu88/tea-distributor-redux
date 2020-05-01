import React from 'react';
import AddTeaForm from './AddTeaForm';
import TeaList from './TeaList';
import TeaDetails from './TeaDetails';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const buttonStyler = {
  marginLeft: 20,
};
class TeaControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      quantityChanged: false,
      selectedTea: null,
    };
  }

  // Handler to find selected tea by id and change state with selectedTea: true
  handleChangingSelectedTea = (id) => {
    const selectedTea = this.props.masterTeaList[id];
    this.setState({selectedTea: selectedTea});
  }

  // Handler to find if add form is visible or not and toggle between them with addFormVisible: true/false
  handleToggleForms = () => {
    if (this.state.selectedTea != null) {
      this.setState(() => ({
        selectedTea: null,
        addFormVisible: false,
      }));
    } else {
      const { dispatch } = this.props;
      const action = {
        type: 'TOGGLE_ADD_FORM'
      }
      dispatch(action);
    }
  }

  // Handler to find if a new tea is to be added, add tea to list and update list, change back to main page view
  handleAddingTeaToList = (newTea) => {
    if (newTea.image === "") {
      newTea.image = "./defaultImage.jpeg";
    }
    const { dispatch } = this.props;
    const { id, name, category, origin, flavor, price, amount, image } = newTea;
    const action = {
      type: 'ADD_TEA',
      id: id,
      name: name,
      category: category,
      origin: origin,
      flavor: flavor,
      price: price,
      amount: amount,
      image: image
    }
    dispatch(action);
    const action2 = {
      type: 'TOGGLE_ADD_FORM'
    }
    dispatch(action2);
  }

  // Handler to find if a specific tea's button to decrease amount pressed and decreases amount, set state to new state and change quantity changed back to false
  handleChangingQuantity = (id) => {
    const quantityChanged = this.props.masterTeaList[id];
    quantityChanged.amount -= 1;
    if (quantityChanged.amount <= 0) {
      quantityChanged.amount = 0;
    }
    this.setState({quantityChanged: quantityChanged});
    this.setState({quantityChanged: false});
  }

  // Check which view should be visible due to which state parameter is true/has value, passes values from callback to event handlers
  setVisability = () => {
    if (this.state.selectedTea != null) {
      // Details for single tea
      return {
        component: (
          <TeaDetails
          onTeaSelection={this.handleChangingSelectedTea}
            tea={this.state.selectedTea} />
        ),
        buttonText: "Return to Tea List",
      };
    }
    else if (this.state.quantityChanged){
      // Change quantity on main page
      return {
        component: (
          <TeaList
            onQuantityChanged={this.handleChangingQuantity}
            teaList={this.props.masterTeaList} />
        ),
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
  }
}

TeaControl = connect(mapStateToProps)(TeaControl);

export default TeaControl;