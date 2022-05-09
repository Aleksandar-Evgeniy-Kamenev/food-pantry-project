import React, { useState } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import RUser from '../../types/RUser';
import { register } from '../../services/auth.service';
import {
  IonButton,
  IonContent,
  IonHeader,
  IonImg,
  IonPage,
  IonText,
} from '@ionic/react';
import '../../theme/Login_Registration.css';
import Menu from '../../components/menu/Menu';
import logo from '../../assets/img/Logo.png';

const Register: React.FC = () => {
  const [successful, setSuccessful] = useState<boolean>(false);
  const [message, setMessage] = useState<string>('');

  const initialValues: any = {
    email: '',
    password: '',
    password_check: '',
    role: '',
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email('Please enter a valid email!')
      .max(255)
      .required('Please enter an email!'),

    password: Yup.string()
      .required('Please enter a password!')
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
        'Password must contain 8 characters,\n one uppercase,\n one lowercase,\n one number and one special case Character'
      ),

    password_check: Yup.string()
      .required('Please confirm password!')
      .oneOf([Yup.ref('password'), null], 'Passwords must match!'),

    role: Yup.string().required('Please select one of the user types!'),
  });
  const handleRegister = (formValue: RUser) => {
    const { email, password, role } = formValue;
    console.log(role);
    register(email, password, role).then(
      (response) => {
        setMessage(response.data.message);
        setSuccessful(true);
      },
      (error) => {
        const resMessage =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
        setMessage(resMessage);
        setSuccessful(false);
      }
    );
  };
  return (
    <IonPage>
      <IonHeader>
        <Menu></Menu>
      </IonHeader>
      <IonContent>
        <div className="container">
          <div className="card card-container">
            <IonImg src={logo} className="logo center" />
            <img
              src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
              alt="profile-img"
              className="profile-img-card"
            />

            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleRegister}
            >
              <Form>
                {message && (
                  <div className="form_control_group">
                    <div
                      className={successful ? 'success_text' : 'danger_text'}
                      role="alert"
                    >
                      {message}
                    </div>
                    {successful && (
                      <IonButton className="login_button" href="/login">
                        To Login
                      </IonButton>
                    )}
                  </div>
                )}
                {!successful && (
                  <div>
                    <div className="form_control_group">
                      <label htmlFor="email">Email</label>

                      <Field
                        name="email"
                        type="text"
                        autoComplete="on"
                        className="form-control"
                      />

                      <ErrorMessage
                        name="email"
                        component="div"
                        className="danger_text form_error_input text_center"
                      />
                    </div>

                    <div className="form_control_group">
                      <label htmlFor="password">Password</label>
                      <Field
                        name="password"
                        type="password"
                        autoComplete="on"
                        className="form-control"
                      />
                      <ErrorMessage
                        name="password"
                        component="div"
                        className="danger_text form_error_input text_center"
                      />
                    </div>
                    <div className="form_control_group">
                      <label htmlFor="password_check">Confirm Password</label>
                      <Field
                        name="password_check"
                        type="password"
                        autoComplete="on"
                        className="form-control"
                      />
                      <ErrorMessage
                        name="password_check"
                        component="div"
                        className="danger_text form_error_input text_center"
                      />
                    </div>

                    <div className="form_control_group_radio ">
                      <div role="group">
                        <label htmlFor="role">Select User Type</label>
                        <label className="radio_selector_reg">
                          <Field type="radio" name="role" value="donor" /> Donor
                        </label>
                        <label className="radio_selector_reg">
                          <Field type="radio" name="role" value="courier" />{' '}
                          Courier
                        </label>
                        <label className="radio_selector_reg">
                          <Field type="radio" name="role" value="receiver" />{' '}
                          Receiver
                        </label>
                      </div>
                    </div>
                    <ErrorMessage
                      name="role"
                      component="div"
                      className="danger_text form_error_input text_center"
                    />
                    <div className="form_control_group">
                      <IonButton type="submit" className="login_button">
                        <input type="submit" className="x-display" />
                        Sign Up
                      </IonButton>
                    </div>
                    <IonText>
                      Already a member? <a href="/login">Login</a>{' '}
                    </IonText>
                  </div>
                )}
              </Form>
            </Formik>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};
export default Register;
