import { render, waitFor } from '@testing-library/react-native';
import App from '../App';
import GitHubProfile from '../src/screens/GitHubProfile';

const TIMEOUT = { timeout: 10000 };

// test if the app renders correctly without crashing
// test('renders correctly', () => {
  // render(<App />);
// });

// test if Github Profile can preload a profile of @octocat
test('preloads octocat profile', async () => {
  const { getByText, getByTestId } = render(<GitHubProfile />);

  await waitFor(() => {
    // getByText('@octocat')
    expect(getByText('San Francisco')).toBeTruthy();
  }, TIMEOUT);


});