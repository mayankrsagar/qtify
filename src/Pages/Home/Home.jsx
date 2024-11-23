import './Home.module.css';

import React from 'react';

import Hero from '../../components/Hero/Hero';
import Section from '../../components/Section/Section';

const Home = () => {
  return (
    <React.Fragment>
        <Hero />
        <Section
        title="Top Albums"
        apiEndpoint="https://qtify-backend-labs.crio.do/albums/top"
      />
      <Section
        title="New Albums"
        apiEndpoint="https://qtify-backend-labs.crio.do/albums/new"
      />
    </React.Fragment>

  )
}

export default Home