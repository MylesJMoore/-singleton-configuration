import { render, screen, waitFor } from '@testing-library/react';
import ConfigDisplay from './ConfigDisplay';
import fetchMock from 'jest-fetch-mock';

beforeEach(() => {
    fetchMock.resetMocks(); // Reset any previous mock state before each test
});

test('renders configuration details after fetching data', async () => {
    // Mock the fetch call to return a resolved promise with JSON data
    fetchMock.mockResponseOnce(JSON.stringify({
        appName: 'Singleton Config Manager',
        version: '1.0',
        environment: 'production',
        dbHost: 'localhost',
        dbUser: 'root',
        dbPassword: 'password',
    }));

    // Render the ConfigDisplay component
    render(<ConfigDisplay />);

    // Wait for the component to render the fetched data
    await waitFor(() => screen.getByText('Singleton Config Manager'));

    // Verify the data is rendered
    expect(screen.getByText('Singleton Config Manager')).toBeInTheDocument();
    expect(screen.getByText('1.0')).toBeInTheDocument();
    expect(screen.getByText('production')).toBeInTheDocument();
});
