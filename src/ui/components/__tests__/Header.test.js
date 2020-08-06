import React from 'react';
import { render, cleanup, waitFor } from '@testing-library/react';
import { Header } from '../';


afterEach(cleanup);

describe.skip('When the header loads with no context', () => {
    it('displays the logo', () => {
        const { getByTestId } = render(<Header />);
        expect(getByTestId('student-icon')).toBeTruthy();
    });

    it('displays the default number of selected members', () => {
        const { getByTestId } = render(<Header />);
        expect(getByTestId('member-count')).toHaveTextContent('0');
    });
});

describe('When the Header loads with context', () => {
    it('displays the correct number of members', async () => {
        expect.assertions(1);
        const AppState = React.createContext({
            data: {
                total: 1234567
            }
        });
        const { getByTestId } = render(
            <AppState.Provider>
                <Header />
            </AppState.Provider>
        );
        await waitFor(() => {
            expect(getByTestId('member-count')).toHaveTextContent('1,234,567');
        });
    });
})
