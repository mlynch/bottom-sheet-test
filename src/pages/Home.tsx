import { IonButton, IonContent, IonHeader, IonModal, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useState } from 'react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';

const Home: React.FC = () => {
  const [showModal, setShowModal] = useState(false);  

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Blank</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Blank</IonTitle>
          </IonToolbar>
        </IonHeader>
        <Modal isOpen={showModal} onDidDismiss={() => setShowModal(false)} />
        <IonButton onClick={() => setShowModal(true)}>Open Modal</IonButton>
      </IonContent>
    </IonPage>
  );
};

const Modal: React.FC<any> = ({ isOpen, onDidDismiss }: any) => {
  return (
    <IonModal isOpen={isOpen} initialBreakpoint={0.5} breakpoints={[0, 0.5, 1]} onDidDismiss={onDidDismiss}>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Modal</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        This is modal content
        This is modal content
        This is modal content
        This is modal content
        This is modal content
        This is modal content
        This is modal content
        This is modal content
        This is modal content
        This is modal content
        This is modal content
        This is modal content
        This is modal content
        This is modal content
        This is modal content
        This is modal content
        This is modal content
        This is modal content
        This is modal content
        This is modal content
        This is modal content
        This is modal content
        This is modal content
        This is modal content
        This is modal content
        This is modal content
        This is modal content
        This is modal content
        This is modal content
        This is modal content
        This is modal content
        This is modal content
        This is modal content
        This is modal content
        This is modal content
        This is modal content
        This is modal content
        This is modal content
        This is modal content
        This is modal content
        This is modal content
        This is modal content
        This is modal content
        This is modal content
        This is modal content
        This is modal content
        This is modal content
        This is modal content
        This is modal content
        This is modal content
        This is modal content
        This is modal content
        This is modal content
        This is modal content
        This is modal content
        This is modal content
        This is modal content
        This is modal content
        This is modal content
        This is modal content
        This is modal content
        This is modal content
      </IonContent>
    </IonModal>
  );
};

export default Home;
