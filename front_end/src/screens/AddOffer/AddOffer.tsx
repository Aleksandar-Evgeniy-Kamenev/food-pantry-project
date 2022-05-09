import { IonButton, IonContent, IonPage, IonTitle } from '@ionic/react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import Menu from '../../components/menu/Menu';
import TabNavigationBottom from '../../components/TabNavigationBottom';
import Package from '../../types/Package';
import Offers from '../Offers/Offers';

import './AddOffer.css';

const AddOffer: React.FC = () => {
  // starter values
  const initialValues: Package = {
    package_title: '',
    package_description: '',
    package_type: '',
    package_address_street: '',
    package_address_line_2: '',
    package_address_city: '',
    package_address_state: '',
    package_address_zip: '',
    date_time_start: new Date(),
    date_time_end: new Date(),
    items: [],
  };

  // Post request to server
  const handleAddPackage = (formValue: Package) => {
    const {
      package_title,
      package_description,
      package_type,
      package_address_street,
      package_address_line_2,
      package_address_city,
      package_address_state,
      package_address_zip,
      date_time_start,
      date_time_end,
      items,
    } = formValue;
    // dummy operation will be replaced with ha POST to server
    console.log(
      package_title,
      package_description,
      package_type,
      package_address_street,
      package_address_line_2,
      package_address_city,
      package_address_state,
      package_address_zip,
      date_time_start,
      date_time_end,
      items
    );
  };

  return (
    <IonPage>
      <Menu></Menu>
      <IonContent>
        <Formik initialValues={initialValues} onSubmit={handleAddPackage}>
          <Form>
            <div className="add-offer_inner_form_wrapper">
              {/* package title */}
              <div className="input_div whole">
                <label htmlFor="package_title">Package Title</label>
                <Field
                  name="package_title"
                  type="text"
                  autoComplete="on"
                  className="add_offer_field"
                />
              </div>
              {/* package type */}
              <div className="input_div one_3rd">
                <label htmlFor="role">Package type</label>

                <div className="add_offer_field_group_radio">
                  <label className="check_selector_reg">
                    <Field
                      type="checkbox"
                      name="package_type"
                      value="restaurant dish"
                      className="checkbox_space_test"
                    />
                    Restaurant Dish
                  </label>

                  <label className="check_selector_reg">
                    <Field
                      type="checkbox"
                      name="package_type"
                      value="packaged food"
                      className="checkbox_space_test"
                    />
                    Packaged Food
                  </label>

                  <label className="check_selector_reg">
                    <Field
                      type="checkbox"
                      name="package_type"
                      value="fresh produce"
                      className="checkbox_space_test"
                    />
                    Fresh Produce
                  </label>

                  <label className="check_selector_reg">
                    <Field
                      type="checkbox"
                      name="package_type"
                      value="packaged food"
                      className="checkbox_space_test"
                    />
                    Special Diet
                  </label>

                  <label className="check_selector_reg">
                    <Field
                      type="checkbox"
                      name="package_type"
                      value="fresh produce"
                      className="checkbox_space_test"
                    />
                    Frozen Food
                  </label>
                </div>
              </div>
              {/* describtion */}
              <div className="input_div two_3rd">
                <label htmlFor="package_description">Package Description</label>
                <Field
                  name="package_description"
                  as="textarea"
                  rows="10"
                  className="add_offer_field"
                />
              </div>

              {/* address */}

              {/* street */}
              <div className="input_div first_half">
                <label htmlFor="package_address_street">Street Address</label>
                <Field
                  name="package_address_street"
                  type="text"
                  autoComplete="on"
                  className="add_offer_field"
                  placeholder="Street Address"
                />
              </div>

              {/* address line 2 */}
              <div className="input_div second_half">
                <label htmlFor="package_address_line_2">Address Line 2</label>
                <Field
                  name="package_address_line_2"
                  type="text"
                  autoComplete="on"
                  className="add_offer_field"
                  placeholder="Address Line 2"
                />
              </div>

              {/* city */}
              <div className="input_div one_3rd">
                <label htmlFor="package_address_city">City</label>
                <Field
                  name="package_address_city"
                  type="text"
                  autoComplete="on"
                  className="add_offer_field"
                  placeholder="City"
                />
              </div>

              {/* state */}
              <div className="input_div one_3rd_2">
                <label htmlFor="package_address_state">State</label>
                <Field
                  name="package_address_state"
                  type="text"
                  autoComplete="on"
                  className="add_offer_field"
                  placeholder="State"
                />
              </div>

              {/* state */}
              <div className="input_div one_3rd_3">
                <label htmlFor="package_address_zip">Zip code</label>
                <Field
                  name="package_address_zip"
                  type="text"
                  autoComplete="on"
                  className="add_offer_field"
                  placeholder="Zip Code"
                />
              </div>

              <div className="input_div whole">
                {/* clean up some of this code!!! */}
                <IonButton type="submit" className="login_button to_right">
                  <input type="submit" className="x-display" />
                  Add Package
                </IonButton>
              </div>
            </div>
          </Form>
        </Formik>
      </IonContent>
      <TabNavigationBottom></TabNavigationBottom>
    </IonPage>
  );
};

export default AddOffer;
