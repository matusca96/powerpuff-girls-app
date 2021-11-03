import { LinearGradient as BaseLinearGradient } from 'expo-linear-gradient';
import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

import { theme } from '../../styles/theme';

export const ScrollContainer = styled.ScrollView`
  flex: 1;

  width: 100%;
`;

export const Header = styled.View`
  position: relative;

  flex: 1;

  height: 250px;

  background-color: ${theme.colors.white};
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
  color: ${theme.colors.gray[900]};

  font-size: 32px;
  font-family: ${theme.fonts.black};
`;

export const InfoContainer = styled.View`
  margin: 4px 0;
  width: 58%;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Premiered = styled.Text`
  color: ${theme.colors.gray[700]};
  font-family: ${theme.fonts.regular};
`;

export const SeasonsCount = styled.Text`
  color: ${theme.colors.gray[700]};
  font-family: ${theme.fonts.regular};
`;

export const BadgeContainer = styled.View`
  margin-top: 4px;
  width: 70%;

  flex-direction: row;
  justify-content: space-between;
`;

export const Description = styled.Text`
  margin-top: 15px;

  color: ${theme.colors.gray[700]};

  font-size: 14px;
  font-family: ${theme.fonts.regular};
`;

export const ShowHideButton = styled(RectButton)`
  margin-top: 5px;
  padding: 6px 8px;

  border-radius: 4px;

  align-self: center;
`;
