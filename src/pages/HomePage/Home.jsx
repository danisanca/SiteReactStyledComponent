import React from 'react';
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour} from './Data.Home';
import { InfoSection, Pricing } from '../../Components';

const  Home  = ()  =>{
  return (
    <>
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjTwo} />
      <InfoSection {...homeObjThree} />
      <Pricing />
      <InfoSection {...homeObjFour} />
    </>
  );
}

export default Home;