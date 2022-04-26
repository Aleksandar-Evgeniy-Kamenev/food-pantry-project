import { IonCol, IonContent, IonGrid, IonPage, IonRow } from '@ionic/react';
import FoodPackage from '../../components/food_package/FoodPackage';
import Food_Package_Interface from '../../components/food_package/FoodPackageinterface';
import Menu from '../../components/menu/Menu';
import TabNavigationBottom from '../../components/TabNavigationBottom';
import Restaurant_logo from '../../assets/img/Restaurant_logo.jpg';
import Restarant_background from '../../assets/img/Pizza_Background.png';
import Food_Item_Interface from '../../components/food_item/FoodIteminterface';


//Added Items array
const demo_items_data: Food_Item_Interface[] = [
  {
    itemName: 'Boston Cream Donut',
    peanutPreferences: false,
    dairyPreferences: false,
    fishPreferences: false,
    eggPreferences: true,
    bestBeforeDate: new Date('December 18, 2021 09:24:00'),
    quantity: 6,
    perishableStatus: true,
    itemWeight: '0.2 Kgs',
  },
  {
    itemName: 'Strawberry Donuts',
    peanutPreferences: false,
    dairyPreferences: false,
    fishPreferences: false,
    eggPreferences: false,
    bestBeforeDate: new Date('December 18, 2021 09:24:00'),
    quantity: 4,
    perishableStatus: false,
    itemWeight: '0.1 Kgs',
  },
];

const demo_items_data_2: Food_Item_Interface[] = [
  {
    itemName: 'Subway Club',
    peanutPreferences: true,
    dairyPreferences: true,
    fishPreferences: true,
    eggPreferences: true,
    bestBeforeDate: new Date('December 18, 2021 09:24:00'),
    quantity: 3,
    perishableStatus: true,
    itemWeight: '0.6 Kgs',
  },
  {
    itemName: 'BMT Sub',
    peanutPreferences: false,
    dairyPreferences: false,
    fishPreferences: false,
    eggPreferences: false,
    bestBeforeDate: new Date('December 18, 2021 09:24:00'),
    quantity: 2,
    perishableStatus: false,
    itemWeight: '0.4 Kgs',
  },
];

// will need to look into the database specs and re-adjust this
const demo_package_data: Food_Package_Interface[] = [
  {
    image: Restaurant_logo,
    backgroundImage: Restarant_background,
    name: 'Dukins Donuts',
    package_weight: '0.2 Kgs',
    description: 'This package contains donuts',
    items: demo_items_data,
    pickupStartTime: new Date('December 17, 2021 09:24:00'),
    pickupEndTime: new Date('December 17, 2021 20:24:00'),
  },
  {
    image: Restaurant_logo,
    backgroundImage: Restarant_background,
    name: 'Subway',
    package_weight: '0.2 Kgs',
    description: 'This package contains sub sandwiches',
    items: demo_items_data_2,
    pickupStartTime: new Date('December 17, 2020 09:00:00'),
    pickupEndTime: new Date('December 17, 2020 20:24:00'),
  },
];

const Offers: React.FC = () => {
  return (
    <IonPage>
      <Menu></Menu>
      <IonContent>
        <IonGrid>
          <IonRow>
            {demo_package_data.map((foodPackage, index) => {
              return (
                <IonCol
                  sizeXs="12"
                  sizeSm="12"
                  sizeMd="6"
                  sizeLg="4"
                  sizeXl="3"
                >
                  <FoodPackage {...foodPackage} key={index}></FoodPackage>
                </IonCol>
              );
            })}
          </IonRow>
        </IonGrid>
      </IonContent>
      {/* Bottom Nav*/}
      <TabNavigationBottom></TabNavigationBottom>
    </IonPage>
  );
};

export default Offers;
