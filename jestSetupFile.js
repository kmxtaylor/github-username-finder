import mockSafeAreaContext from 'react-native-safe-area-context/jest/mock';

// play nicely w/ react-native-safe-area-context
jest.mock('react-native-safe-area-context', () => mockSafeAreaContext);

// play nicely w/ react-native-async-storage
jest.mock('@react-native-async-storage/async-storage', () =>
 require('@react-native-async-storage/async-storage/jest/async-storage-mock')
);
