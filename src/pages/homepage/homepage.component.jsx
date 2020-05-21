import React from 'react';
import MenuDirectory from "../../components/menu-directory/menu-directory.component";
import { HomePageContainer } from './homepage.styles';

const HomePage = () => (
    <HomePageContainer>
      <MenuDirectory></MenuDirectory>
    </HomePageContainer>
);

export default HomePage;