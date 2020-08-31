import { primary, light, dark, status } from './colors';
import { primaryFont, secondaryFont } from './typography';

export const defaultTheme = {
  primaryColor: primary.blue,
  textColor: light.primary,
  primaryFont,
  secondaryFont,
  status: {
    warningColor: status.warning,
    errorColor: status.critical,
    successColor: status.success,
    unknownColor: status.unknown,
  },
};

export const darkTheme = {
  primaryColor: primary.blue,
  textColor: dark.primary,
  primaryFont,
  secondaryFont,
  status: {
    warningColor: status.warning,
    errorColor: status.critical,
    successColor: status.success,
    unknownColor: status.unknown,
  },
};
