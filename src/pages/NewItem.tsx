import { IonContent, IonHeader, IonItem, IonPage, IonButton, IonTitle, IonToolbar, IonList } from '@ionic/react';
import React from 'react';
import { RouteComponentProps } from 'react-router';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';

const NewItem: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Blank</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
       New Item Page
       </IonContent>
    </IonPage>
  );
};

export default NewItem;
