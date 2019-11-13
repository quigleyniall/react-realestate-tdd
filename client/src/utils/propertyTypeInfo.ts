import { Property } from '../interfaces';
import history from '../router/history';

export const propertyTypeInfo: Property[] = [
  {
    image: 'https://www.zillowstatic.com/s3/homepage/static/Buy_a_home.png',
    title: 'Buy a home',
    desc:
      'Find your place with an immersive photo experience and the most listings, including things you won’t find anywhere else.',
    buttonText: 'Search Homes',
    onPress: () => history.push('/listings/buy/london')
  },
  {
    image: 'https://www.zillowstatic.com/s3/homepage/static/Sell_a_home.png',
    title: 'Sell a home',
    desc:
      'Whether you sell with new Zillow Offers™ or take another approach, we’ll help you navigate the path to a successful sale.',
    buttonText: 'See Your Options',
    onPress: () => history.push('/listings/buy/london')
  },
  {
    image: 'https://www.zillowstatic.com/s3/homepage/static/Rent_a_home.png',
    title: 'Rent a home',
    desc:
      'We’re creating a seamless online experience – from shopping on the largest rental network, to applying, to paying rent.',
    buttonText: 'Find Rentals',
    onPress: () => history.push('/listings/rent/london')
  }
];
