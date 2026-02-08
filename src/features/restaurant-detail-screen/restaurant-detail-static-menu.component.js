import * as React from 'react';
import { List, MD3Colors } from 'react-native-paper';

const StaticMenu = () => {
  const [BreakfastExpanded, setBreakfastExpanded] = React.useState(true);
  const [LunchExpanded, setLunchExpanded] = React.useState(false);
  const [DinnerExpanded, setDinnerExpanded] = React.useState(false);
  const [DrinksExpanded, setDrinksExpanded] = React.useState(false);

  //const handlePress = () => setExpanded(!expanded);

  return (
    <>
      <List.Accordion
        title="Breakfast"
        onPress={() => setBreakfastExpanded(!BreakfastExpanded)}
        expanded={BreakfastExpanded}
        left={(props) => (
          <List.Icon
            {...props}
            color={MD3Colors.primary50}
            icon="bread-slice"
          />
        )}
      >
        <List.Item title="Eggs Benedict" />
        <List.Item title="Classic Breakfast" />
      </List.Accordion>

      <List.Accordion
        title="Lunch"
        expanded={LunchExpanded}
        left={(props) => (
          <List.Icon {...props} color={MD3Colors.primary50} icon="food" />
        )}
        onPress={() => setLunchExpanded(!LunchExpanded)}
      >
        <List.Item title="Burger with fries" />
        <List.Item title="Steak sandwich" />
        <List.Item title="Mushroom soup" />
      </List.Accordion>
      <List.Accordion
        title="Dinner"
        left={(props) => (
          <List.Icon
            {...props}
            color={MD3Colors.primary50}
            icon="food-variant"
          />
        )}
        expanded={DinnerExpanded}
        onPress={() => setDinnerExpanded(!DinnerExpanded)}
      >
        <List.Item title="Spaghetti Bolognese" />
        <List.Item title="Veal Cutlet with Chicken Mushroom Rotini" />
        <List.Item title="Steak Frites" />
      </List.Accordion>
      <List.Accordion
        title="Drinks"
        left={(props) => (
          <List.Icon
            {...props}
            color={MD3Colors.primary50}
            icon="food-fork-drink"
          />
        )}
        expanded={DrinksExpanded}
        onPress={() => setDrinksExpanded(!DrinksExpanded)}
      >
        <List.Item title="Coffee" />
        <List.Item title="Tea" />
        <List.Item title="Modelo" />
        <List.Item title="Coke" />
        <List.Item title="Fanta" />
      </List.Accordion>
    </>
  );
};

export default StaticMenu;
