import { extendTheme } from 'native-base';
import { Platform } from 'react-native';

const theme = extendTheme({
  colors: {
    // Add new color
    primary: {
      400: '#3fbffe',
    },
    // Redefinig only one shade, rest of the color will remain same.
    amber: {
      400: '#d97706',
    },
  },
  config: {
    // Changing initialColorMode to 'dark'
    initialColorMode: 'light',
  },
  components: {
    Badge: {
      defaultProps: {
        colorScheme: 'primary',
      },
      baseStyle: {
        backgroundColor: 'blue',
        borderRadius: 30,
      },
    },
    Button: {
      baseStyle: {
        marginVertical: 10,
        borderRadius: 60,
        height: '50px',
        width: '70%',
        alignSelf: 'center',
      },
      defaultProps: {},
    },
    Input: {
      baseStyle: {
        marginBottom: 5,
        justifyContent: 'center',
        paddingTop: 8,
        borderRadius: 10,
        height: 60,
      },
    },
    Link: {},
    Text: {
      baseStyle: {},
      defaultProps: {
        fontSize: Platform.OS === 'ios' ? 'lg' : 'sm',
      },
    },
  },
});

export default theme;
