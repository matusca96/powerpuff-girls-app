import { LinearGradient as BaseLinearGradient } from 'expo-linear-gradient';
import { Animated } from 'react-native';
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

  flex-direction: row;
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

  flex-direction: row;
`;

export const Description = styled.Text`
  margin-top: 15px;

  color: ${theme.colors.gray[700]};

  font-size: 14px;
  font-family: ${theme.fonts.regular};
`;

export const ShowHideButton = styled(Animated.View)`
  margin-top: 4px;
  padding: 4px 6px;

  border-radius: 4px;

  align-self: center;
`;

export const ListTitleContainer = styled.View`
  flex-direction: row;
  align-items: center;

  margin-top: 5px;
`;

export const ListTitle = styled.Text`
  color: ${theme.colors.gray[900]};

  font-size: 22px;
  font-family: ${theme.fonts.bold};

  margin-right: 4px;
`;
