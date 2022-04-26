import React, { useState } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { login } from '../../services/auth.service';
import { RouteComponentProps } from 'react-router-dom';
import {
  IonButton,
  IonContent,
  IonHeader,
  IonImg,
  IonPage,
  IonText,
} from '@ionic/react';

import logo from '../../assets/img/Logo.png';

import '../../theme/Login_Registration.css';
import Menu from '../../components/menu/Menu';

interface RouterProps {
  history: string;
}

type Props = RouteComponentProps<RouterProps>;

const Login: React.FC<Props> = ({ history }) => {
  // work on implementing a loading display mechanism at some point
  const [loading, setLoading] = useState<boolean>(false);
  const [message, setMessage] = useState<string>('');

  const initialValues: {
    email: string;
    password: string;
  } = {
    email: '',
    password: '',
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email('Must be a valid email!')
      .max(255)
      .required('Email is required!'),
    password: Yup.string().max(255).required('Password is required!'),
  });

  const handleLogin = (formValue: { email: string; password: string }) => {
    const { email, password } = formValue;
    setMessage('');
    setLoading(true);
    login(email, password).then(
      () => {
        history.push('/profile');
        window.location.reload();
      },
      (error) => {
        const resMessage =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
        setLoading(false);
        setMessage(resMessage);
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
              onSubmit={handleLogin}
            >
              <Form>
                <div className="form-group">
                  <label htmlFor="email">Email</label>

                  <Field name="email" type="text" className="form-control" />

                  <ErrorMessage
                    name="email"
                    component="div"
                    className="danger_text form_error_input text_center"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <Field
                    name="password"
                    type="password"
                    className="form-control"
                  />
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="danger_text form_error_input text_center"
                  />
                </div>
                {message && (
                  <div className="form-group">
                    <IonText className="danger_text" role="alert">
                      {message}
                    </IonText>
                  </div>
                )}

                <div className="form-group">
                  <IonButton type="submit" className="login_button">
                    Sign In
                  </IonButton>
                </div>
                <IonText>
                  Not a member? <a href="/register">Register</a>{' '}
                </IonText>
              </Form>
            </Formik>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};
export default Login;
