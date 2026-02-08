/*import { Platform, SafeAreaView, StatusBar } from 'react-native';
import styled from 'styled-components/native';

export const SafeArea = styled(SafeAreaView)`
  flex: 1;
  padding-top: ${Platform.OS === 'android' ? StatusBar.currentHeight : 0}px;
  padding-bottom: ${Platform.OS === 'android' ? 40 : 0}px;
`;
*/
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { View } from 'react-native';
function SafeArea(props) {
  const insets = useSafeAreaInsets();
  //console.log('from safe-area.js', insets);
  return (
    <View style={{ paddingTop: insets.top - 20, paddingBottom: insets.bottom }}>
      {props.children}
      {/* Renders whatever is passed between <SafeArea> tags */}
    </View>
  );
}
export default SafeArea;
