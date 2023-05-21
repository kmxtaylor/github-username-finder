import { render, waitFor } from '@testing-library/react-native';
import App from '../App';
import GitHubProfile from 'screens/GitHubProfile';

import Colors from 'constants/Colors';

const TIMEOUT = { timeout: 10000 };

// test if the app renders correctly without crashing
// test('renders correctly', () => {
  // render(<App />);
// });

// test if Github Profile can preload a profile of @octocat
test('preloads octocat profile', async () => {
  const { getByText } = render(<GitHubProfile />);

  await waitFor(() => {
    // getByText('@octocat')
    expect(getByText('San Francisco')).toBeTruthy();
  }, TIMEOUT);

});

// test if some components in Github Profile have the right background colors
test('has the right background colors', async () => {
  const { getByTestId } = render(<GitHubProfile />);

  await waitFor(() => {
    const card = getByTestId('card');
    // console.log(card.props.style);
    let style = null;
    if (Array.isArray(card.props.style)) { // if styles are arr of appended objs (b/c of customized theme components)
      style = card.props.style.reduce((accumulator, curr) => {
        return {...accumulator, ...curr};
      }, {});
    }
    else { // if styles are in single obj, like normal
      style = card.props.style;
    }

    expect(style.backgroundColor).toBe(Colors.dark.backgroundSecondary);
  }, TIMEOUT);
});