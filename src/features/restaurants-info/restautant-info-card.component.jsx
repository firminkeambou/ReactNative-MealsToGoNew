//import { Image } from 'react-native';
import { Card } from 'react-native-paper';
//import styled from 'styled-components/native';
//import { useTheme } from 'styled-components/native';
import { SvgXml } from 'react-native-svg';
import open from '../../../assets.old/images/open';
import star from '../../../assets.old/images/star';
import Spacer from '../../components/spacer/spacer.component';
import { Text } from '../../components/typography/text.component';
import {
  Address,
  Icon,
  Info,
  Rating,
  RestaurantCard,
  RestaurantCover,
  Section,
  SectionEnd,
} from './restaurant-info-card.styles';

const RestaurantInfoCard = ({ restaurant = {} }) => {
  //const theme = useTheme(); // Access the theme object directly, this is useful when you need to access themes without "props"
  //console.log(theme);
  const {
    name = 'Some Restaurant',
    icon = 'https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg',
    photos = [
      'https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg',
    ],
    address = '100 Some Street',
    isOpenNow = true,
    rating = 4.5,
    isClosedTemporarily = true,
  } = restaurant;
  //to test if photos array is working, then remove
  // console.log('photo init url:', photos[0]);
  const ratingArray = Array.from(new Array(Math.floor(rating))); // creating an array of  5 elements all set to "undefined"
  return (
    <RestaurantCard elevation={5}>
      <RestaurantCover source={{ uri: photos[0] }} key={name} />

      <Card.Content>
        <Info>
          <Text variant="label">{name} </Text>
          <Section>
            <Rating>
              {ratingArray.map((item, index) => (
                <SvgXml key={index} xml={star} width={20} height={20}></SvgXml>
              ))}
            </Rating>
            {/**sectionEnd starts here */}
            <SectionEnd>
              {isClosedTemporarily && (
                <Text variant="error">CLOSED TEMPORARILY</Text>
              )}
              {/** <View style={{ paddingLeft: 16 }} /> */}
              <Spacer position="left" size="small">
                {isOpenNow ? (
                  <SvgXml xml={open} width={30} height={30}></SvgXml>
                ) : (
                  <Text>Closed</Text>
                )}
              </Spacer>
              {/**   <View style={{ paddingLeft: 16 }} /> just spacing  */}
              <Spacer position="left" size="medium">
                <Icon source={{ uri: icon }} />
              </Spacer>
            </SectionEnd>
          </Section>
          <Address>{address}</Address>
        </Info>
      </Card.Content>
      {/**
       * <Card.Actions>
        <Button>Cancel4</Button>
        <Button>Buy4</Button>
      </Card.Actions>
      
       */}
    </RestaurantCard>
  );
};

export default RestaurantInfoCard;

// this is redesigning Text component
// attribtes are like normal CSS
//styled(Text)` coul also be used
//the below line works because of "${(props) => props.theme.colors.text.success}"" ;; those props are received from the "ThemeProvider"

/*
this section is no longer needed as we are using styled-components
and the "style" property is removed as well
const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
  },
  cover: {
    padding: 20,
    backgroundColor: 'white',
  },
});
*/
