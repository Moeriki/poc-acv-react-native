import * as Linking from 'expo-linking';

export default {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      Root: {
        screens: {
          News: {
            screens: {
              NewsScreen: 'news',
            },
          },
          Advantages: {
            screens: {
              AdvantagesScreen: 'advantages',
            },
          },
        },
      },
      NotFound: '*',
    },
  },
};
