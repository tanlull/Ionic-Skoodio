import { IonContent, IonHeader, IonItem, IonPage, IonButton, IonTitle, IonToolbar, IonList, IonBackButton } from '@ionic/react';
import React from 'react';
import { RouteComponentProps } from 'react-router';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';

const NewItem: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButton slot='start'>
            <IonBackButton defaultHref="/Home"/>

          </IonButton>
          <IonTitle>New Item</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
       New Item Page
       </IonContent>
    </IonPage>
  );
};

export default NewItem;
