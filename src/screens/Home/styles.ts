import { LinearGradient as BaseLinearGradient } from 'expo-linear-gradient';
import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

export const ScrollContainer = styled.ScrollView`
  flex: 1;

  width: 100%;
`;

export const Header = styled.View`
  position: relative;

  flex: 1;

  height: 250px;

  background-color: #000;
`;

export const LinearGradient = styled(BaseLinearGradient)`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;

  z-index: 1;

  height: 100%;
`;

export const Image = styled.Image`
  height: 100%;
`;

export const Content = styled.View`
  z-index: 2;

  padding: 0 16px;
`;

export const Title = styled.Text`
  color: #322e2e;

  font-size: 32px;
  font-family: 'Inter_900Black';
`;

export const InfoContainer = styled.View`
  margin: 4px 0;
  width: 58%;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Premiered = styled.Text`
  color: #969598;
  font-family: 'Inter_400Regular';
`;

export const SeasonsCount = styled.Text`
  color: #969598;
  font-family: 'Inter_400Regular';
`;

export const BadgeContainer = styled.View`
  margin-top: 4px;
  width: 70%;

  flex-direction: row;
  justify-content: space-between;
`;

export const Description = styled.Text`
  margin-top: 15px;

  color: #969598;

  font-size: 14px;
  font-family: 'Inter_400Regular';
`;

export const ShowHideButton = styled(RectButton)`
  margin-top: 5px;
  padding: 6px 8px;

  align-self: center;
`;
