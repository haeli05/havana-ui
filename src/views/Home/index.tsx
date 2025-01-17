import { FC } from 'react';

import JupiterForm from '../JupiterForm/JupiterForm';
import Header from './Header';
import styles from './index.module.css';
import SiteDescription from './SiteDescription';

const Home: FC = ({ }) => {
  return (
    <div className="container mx-auto max-w-6xl p-8 2xl:px-0">
      <div className={styles.container}>
      
        <Header />
        <SiteDescription />
        <JupiterForm />
      </div>
    </div>
  );
};

export default Home;