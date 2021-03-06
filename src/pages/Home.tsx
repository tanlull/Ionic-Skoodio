import { IonContent, IonHeader, IonItem, IonPage, IonButton, IonTitle, IonToolbar, IonList } from '@ionic/react';
import React from 'react';
import { RouteComponentProps } from 'react-router';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';

const Home: React.FC<RouteComponentProps> = (props) => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Blank</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonList>
          <IonItem> <p>item 1/</p></IonItem>
            <IonItem> <p>item 2</p></IonItem>
        </IonList>
              <IonButton onClick={() => props.history.push('/new')}>
                <p> Go to newItem</p>
              </IonButton>
       </IonContent>
    </IonPage>
  );
};

export default Home;
