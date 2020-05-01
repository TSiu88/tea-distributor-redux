import { v4 } from 'uuid';

// Seed Data
const firstId = v4();
const secondId = v4();
const thirdId = v4();
const fourthId = v4();
const fifthId = v4();
const sixthId = v4();
const seventhId = v4();
const eighthId = v4();
const ninthId = v4();

export default {
  masterTeaList: {
    [firstId] : {
      id: firstId,
      name: "Dragonwell",
      category: "Green Tea",
      origin: "China",
      flavor: "Mellow, floral flavor with slightly sweet aftertaste",
      price: 10,
      amount: 42,
      image: "https://cdn.shopify.com/s/files/1/0888/8900/products/7004-Dragonwell_House-1.jpg?v=1445269617",
    },
    [secondId] : {
      id: secondId,
      name: "Ti Kwan Yin",
      category: "Oolong Tea",
      origin: "China",
      flavor: "Delicate, green, floral, sweet with mineral note",
      price: 8,
      amount: 54,
      image: "https://cdn.shopify.com/s/files/1/0888/8900/products/Standard_Shot_Ti_Kwan_Yin.jpg?v=1548603635",
    },
    [thirdId] : {
      id: thirdId,
      name: "English Breakfast",
      category: "Black Tea Blend",
      origin: "Assam, Ceylon, Kenya",
      flavor: "Full bodied brew, strong and moderately caffeinated.",
      price: 12,
      amount: 35,
      image: "https://cdn.shopify.com/s/files/1/0888/8900/products/9000-Decaf_English_Breakfast.jpg?v=1445269330",
    },
    [fourthId] : {
      id: fourthId,
      name: "Sheng Puer Pearls 2014",
      category: "Puer Tea",
      origin: "China",
      flavor: "Sweet peach and evergreen notes, smooth with decent body that gets better with age",
      price: 40,
      amount: 7,
      image: "https://cdn.shopify.com/s/files/1/0888/8900/products/Standard_Shot_Ms._Zhao_s_Sheng_Puer_Pearl.jpg?v=1554923461",
    },
    [fifthId] : {
      id: fifthId,
      name: "Yin Zhen",
      category: "White Tea",
      origin: "China",
      flavor: "Sweet, creamy, silky tea",
      price: 41,
      amount: 12,
      image: "https://cdn.shopify.com/s/files/1/0888/8900/products/Standard_Shot_8501_2019_Silver_Needles-1.jpg?v=1571847096",
    },
    [sixthId] : {
      id: sixthId,
      name: "Fu Cha",
      category: "Dark Tea Brick",
      origin: "China",
      flavor: "Sweet, mild, smooth, slight hint of fresh grass",
      price: 17,
      amount: 36,
      image: "https://cdn.shopify.com/s/files/1/0888/8900/products/IG_posts_-_2020-01-10T105334.704.png?v=1578675295",
    },
    [seventhId] : {
      id: seventhId,
      name: "Gyokuro",
      category: "Green Tea",
      origin: "Japan",
      flavor: "Sweet, seaweed-y, with brothy body",
      price: 28,
      amount: 18,
      image: "https://cdn.shopify.com/s/files/1/0888/8900/products/7701-Gyokuro.jpg?v=1445451386",
    },
    [eighthId] : {
      id: eighthId,
      name: "Darjeeling",
      category: "Black Tea",
      origin: "India",
      flavor: "Medium bodied, smooth, hints of muscatel, fresh taste with delicate nuances in flavor",
      price: 6,
      amount: 85,
      image: "https://cdn.shopify.com/s/files/1/0888/8900/products/1000-TeaSource_Darjeeling-1.jpg?v=1446672895",
    },
    [ninthId] : {
      id: ninthId,
      name: "Green Dragon",
      category: "Oolong Tea",
      origin: "Taiwan",
      flavor: "Silky, medium bodied, sweet and fruity notes, light lingering aftertaste",
      price: 11,
      amount: 56,
      image: "https://cdn.shopify.com/s/files/1/0888/8900/products/6405-Green_Dragon.jpg?v=1445450870",
    }
  }
}