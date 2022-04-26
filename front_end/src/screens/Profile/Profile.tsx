import { IonPage, IonText, IonTitle } from '@ionic/react';
import React from 'react';
import Menu from '../../components/menu/Menu';
import TabNavigationBottom from '../../components/TabNavigationBottom';
import { getCurrentUser } from '../../services/auth.service';

import './Profile.css';

const Profile: React.FC = () => {
  const currentUser = getCurrentUser();
  return (
    <IonPage>
      <Menu></Menu>

      <div className="container_prolife">
        <IonText>
          <strong>{currentUser.email}</strong>
        </IonText>
        <IonText>
          <strong>Token:</strong> {currentUser.accessToken.substring(0, 20)} ...{' '}
          {currentUser.accessToken.substr(currentUser.accessToken.length - 20)}
        </IonText>
        <IonText>
          <strong>Id:</strong> {currentUser.id}
        </IonText>
        <IonText>
          <strong>Email:</strong> {currentUser.email}
        </IonText>
        <IonText>
          <strong>Authorities:</strong>
          <ul>
            {currentUser.roles &&
              currentUser.roles.map((role: string, index: number) => (
                <li key={index}>{role}</li>
              ))}
          </ul>
        </IonText>
      </div>
      <TabNavigationBottom></TabNavigationBottom>
    </IonPage>
  );
};
export default Profile;
