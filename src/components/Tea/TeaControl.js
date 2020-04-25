import React from 'react';
import AddTeaForm from './AddTeaForm';
import TeaList from './TeaList';
import TeaDetails from './TeaDetails';
import { v4 } from "uuid";

// Seed Data
const masterTeaList = [
  {
    id: v4 (),
    name: "Dragonwell",
    type: "Green Tea",
    origin: "China",
    flavor: "Mellow, floral flavor with slightly sweet aftertaste",
    price: 10,
    amount: 42,
    image: "https://cdn.shopify.com/s/files/1/0888/8900/products/7004-Dragonwell_House-1.jpg?v=1445269617",
  },
  {
    id: v4 (),
    name: "Ti Kwan Yin",
    type: "Oolong Tea",
    origin: "China",
    flavor: "Delicate, green, floral, sweet with mineral note",
    price: 8,
    amount: 54,
    image: "https://cdn.shopify.com/s/files/1/0888/8900/products/Standard_Shot_Ti_Kwan_Yin.jpg?v=1548603635",
  },
  {
    id: v4 (),
    name: "Sheng Puer Pearls 2014",
    type: "Puer Tea",
    origin: "China",
    flavor: "Sweet peach and evergreen notes, smooth with decent body that gets better with age",
    price: 40,
    amount: 7,
    image: "https://cdn.shopify.com/s/files/1/0888/8900/products/Standard_Shot_Ms._Zhao_s_Sheng_Puer_Pearl.jpg?v=1554923461",
  },
  {
    id: v4 (),
    name: "English Breakfast",
    type: "Black Tea Blend",
    origin: "Assam, Ceylon, Kenya",
    flavor: "Full bodied brew, strong and moderately caffeinated.",
    price: 12,
    amount: 35,
    image: "https://cdn.shopify.com/s/files/1/0888/8900/products/9000-Decaf_English_Breakfast.jpg?v=1445269330",
  },
  {
    id: v4 (),
    name: "Yin Zhen",
    type: "White Tea",
    origin: "China",
    flavor: "Sweet, creamy, silky tea",
    price: 41,
    amount: 7,
    image: "https://cdn.shopify.com/s/files/1/0888/8900/products/Standard_Shot_8501_2019_Silver_Needles-1.jpg?v=1571847096",
  },
  {
    id: v4 (),
    name: "Fu Cha",
    type: "Dark Tea Brick",
    origin: "China",
    flavor: "Sweet, mild, smooth, slight hint of fresh grass",
    price: 17,
    amount: 36,
    image: "https://cdn.shopify.com/s/files/1/0888/8900/products/IG_posts_-_2020-01-10T105334.704.png?v=1578675295",
  },
  {
    id: v4 (),
    name: "Gyokuro",
    type: "Green Tea",
    origin: "Japan",
    flavor: "Sweet, seaweed-y, with brothy body",
    price: 28,
    amount: 18,
    image: "https://cdn.shopify.com/s/files/1/0888/8900/products/7701-Gyokuro.jpg?v=1445451386",
  },
  {
    id: v4 (),
    name: "Darjeeling",
    type: "Black Tea",
    origin: "India",
    flavor: "Medium bodied, smooth, hints of muscatel, fresh taste with delicate nuances in flavor",
    price: 6,
    amount: 85,
    image: "https://cdn.shopify.com/s/files/1/0888/8900/products/1000-TeaSource_Darjeeling-1.jpg?v=1446672895",
  },
  {
    id: v4 (),
    name: "Green Dragon",
    type: "Oolong Tea",
    origin: "Taiwan",
    flavor: "Silky, medium bodied, sweet and fruity notes, light lingering aftertaste",
    price: 11,
    amount: 56,
    image: "https://cdn.shopify.com/s/files/1/0888/8900/products/6405-Green_Dragon.jpg?v=1445450870",
  },
];

class TeaControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      addFormVisible: false,
      masterTeaList: masterTeaList,
      quantityChanged: false,
      selectedTea: null,
    };
  }

  // Handler to find selected tea by id and change state with selectedTea: true
  handleChangingSelectedTea = (id) => {
    const selectedTea = this.state.masterTeaList.filter(tea => tea.id === id)[0];
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
      this.setState(prevState => ({addFormVisible: !prevState.addFormVisible}));
    }
  }

  // Handler to find if a new tea is to be added, add tea to list and update list, change back to main page view
  handleAddingTeaToList = (newTea) => {
    const newMasterTeaList = this.state.masterTeaList.concat(newTea);
    this.setState({
      masterTeaList: newMasterTeaList,
      addFormVisible: false
    });
  }

  // Handler to find if a specific tea's button to decrease amount pressed and decreases amount, set state to new state and change quantity changed back to false
  handleChangingQuantity = (id) => {
    const quantityChanged = this.state.masterTeaList.filter((tea) => tea.id === id)[0];
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
            teaList={this.state.masterTeaList} />
        ),
      };
    }
    else if (this.state.addFormVisible) {
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
            teaList={this.state.masterTeaList}/>
        ),
        buttonText: "Add Tea",
      };
    }
  }

  render(){
    let currentlyVisibleState = this.setVisability();
    return (
      <React.Fragment>
        <button onClick={this.handleToggleForms}>{currentlyVisibleState.buttonText}</button>
        {currentlyVisibleState.component}
      </React.Fragment> 
    )
  }
}

export default TeaControl;