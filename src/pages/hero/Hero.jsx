import React from 'react';
import { Link } from 'react-router-dom';
// import { FadeIn } from '../../components/fadeIn/FadeIn';
// import * as Styles from './HeroStyles';
import { Flex, Box, Text, Button } from '@chakra-ui/react';
import house1 from '../../assets/modern-residential-district-with-green-roof-balcony-generated-by-ai_188544-10276.jpg';
import house2 from '../../assets/images (5).jpg';

import { baseUrl, fetchApi } from '../../utils/fetchApi';

const Banner = ({
  purpose,
  imgUrl,
  title1,
  title2,
  desc1,
  desc2,
  linkName,
  buttonText,
}) => (
  <Flex flexWrap='wrap' justifyContent='center' alignItems='center' m='10'>
    <img src={imgUrl} alt='Banner' width={500} height={300} />
    <Box p='5'>
      <Text color='gray.500' fontSize='sm' fontWeight='medium'>
        {purpose}
      </Text>
      <Text fontSize='3xl' fontWeight='bold'>
        {title1} <br /> {title2}
      </Text>
      <Text fontSize='lg' paddingTop='3' paddingBottom='3' color='gray.700'>
        {desc1} <br /> {desc2}
      </Text>
      <Button fontSize='xl'>
        <Link to={linkName}>{buttonText}</Link>
      </Button>
    </Box>
  </Flex>
);

const Hero = ({ propertiesForSale, propertiesForRent }) => {
  console.log(propertiesForRent, propertiesForSale);
  return (
    <Box>
      <Banner
        purpose='RENT A HOME'
        title1='Rental Homes for'
        title2='Everyone'
        desc1='Explore Apartments, Villas, Homes'
        desc2='and more'
        buttonText='Explore Renting'
        linkName='/search?purpose=for-rent'
        imgUrl={house1}
      />
      <Flex flexWrap='wrap'></Flex>
      <Banner
        purpose='BUY A HOME'
        title1='Find, Buy & Own Your'
        title2='Dream Home'
        desc1='Explore Apartments, Villas, Homes'
        desc2='and more'
        buttonText='Explore Buying'
        linkName='/search?purpose=for-sale'
        imgUrl={house2}
      />
    </Box>
  );
};

export async function getStaticProps() {
  const propertyForSale = await fetchApi(
    `${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=6`,
  );
  const propertyForRent = await fetchApi(
    `${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=6`,
  );

  return {
    props: {
      propertiesForSale: propertyForSale?.hits,
      propertiesForRent: propertyForRent?.hits,
    },
  };
}

export default Hero;
