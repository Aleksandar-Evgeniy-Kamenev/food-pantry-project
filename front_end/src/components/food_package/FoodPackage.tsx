// imports external libs
import {
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonButton,
  IonAvatar,
} from '@ionic/react';
import { useState } from 'react';

// my components
import FoodItem from '../food_item/FoodItem';

// interfaces
import Food_Package_Interface from './FoodPackageinterface';

// css import
import './FoodPackage.css';

const FoodPackage: React.FC<Food_Package_Interface> = (props) => {
  const {
    image,
    backgroundImage,
    name,
    package_weight,
    description,
    items,
    pickupStartTime,
    pickupEndTime,
  } = props;
  const [seeMoreItems, setseeMoreItems] = useState(false);

  //fucntion used to hide item details
  function toggleSeeMoreButton() {
    setseeMoreItems(!seeMoreItems);
  }

  return (
    <IonCard className="packageCard">
      <IonCardHeader
        className="cardHeader"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <IonAvatar>
          <img src={image} alt={name}></img>
        </IonAvatar>

        <IonCardTitle className="restaurantName text-md-minus text-heavy text-light">
          {name}
        </IonCardTitle>
      </IonCardHeader>

      <IonCardContent id="packageContent">
        <div id="packageDescription">{description}</div>
        <div>
          Collect By {pickupStartTime.toLocaleTimeString()} -{' '}
          {pickupEndTime.toLocaleTimeString()}
        </div>
        <div>
          <p>{package_weight}</p>
        </div>
        <div id="allergensDiv">
          <IonButton
            id="seeMoreButton"
            expand="block"
            onClick={toggleSeeMoreButton}
            hidden={seeMoreItems}
          >
            Show Items
          </IonButton>
        </div>
      </IonCardContent>

      <IonCardContent id="itemContent" hidden={!seeMoreItems}>
        {items.map((item, index) => {
          return <FoodItem {...item} key={index}></FoodItem>;
        })}

        <div className="itemButtonGrid">
          <IonButton id="selectButton">Select</IonButton>
          <IonButton
            id="seeItemsButton"
            className="openSeeItemsModal"
            onClick={toggleSeeMoreButton}
          >
            Close
          </IonButton>
        </div>
      </IonCardContent>
    </IonCard>
  );
};

export default FoodPackage;
