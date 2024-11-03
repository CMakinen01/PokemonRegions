import React, { useState } from 'react'; 
import Layout from '../components/layout';
import Seo from '../components/seo';

const TeamPage = () => {
    return (
        <Layout pageTitle="Build a Pokemon Team!">
          <p>Enter a Pokemon's name and add them to your team!</p>
          <p>Press the "Rate Team" button to see your team's type matchups!</p>

          
        </Layout>
      )
};

export const Head = () => <Seo title="Team Page" />;

export default TeamPage;