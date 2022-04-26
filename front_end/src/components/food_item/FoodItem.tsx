// imports here
import { IonCard, IonText } from '@ionic/react';
import Food_Item_Interface from './FoodIteminterface';

// css import
import './FoodItem.css';

// use props
const FoodItem: React.FC<Food_Item_Interface> = (props) => {
  // don't forget to destructure your prop
  const {
    itemName,
    peanutPreferences,
    dairyPreferences,
    fishPreferences,
    eggPreferences,
    bestBeforeDate,
    quantity,
    perishableStatus,
    itemWeight,
  } = props;
  // component related functions here

  //The main part of the work you will need to do is style and make this component
  return (
    <IonCard className="text-light">
      <IonText className="item_title text-md">
        {quantity} {itemName}
      </IonText>
      <div className="item_details">
        <div>Weight: {itemWeight}</div>
        <div>Best Before: {bestBeforeDate.toDateString()}</div>
      </div>
      <div className="item_allergens">
        <p
          hidden={
            !peanutPreferences &&
            !dairyPreferences &&
            !fishPreferences &&
            !eggPreferences
          }
        >
          Contains:{' '}
        </p>
        <p hidden={!peanutPreferences}> Peanuts </p>
        <p hidden={!dairyPreferences}> Dairy </p>
        <p hidden={!fishPreferences}> Fish </p>
        <p hidden={!eggPreferences}> Egg </p>
      </div>
    </IonCard>
  );
};

export default FoodItem;
