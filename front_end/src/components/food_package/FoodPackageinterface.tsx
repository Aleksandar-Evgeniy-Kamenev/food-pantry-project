import Food_Item_Interface from '../food_item/FoodIteminterface';

interface Food_Package_Interface {
  // may need to add more
  image: string;
  backgroundImage: string;
  name: string;
  package_weight: string;
  description: string;
  items: Food_Item_Interface[];
  pickupStartTime: Date;
  pickupEndTime: Date;
}

export default Food_Package_Interface;
