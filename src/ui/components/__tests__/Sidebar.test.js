import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import { Sidebar } from '../';
import AppState from 'src/data/context';


afterEach(cleanup);

describe('When the sidebar loads', () => {
    it('displays the gender filter', () => {
        const { getByTestId } = render(<Sidebar />);
        expect(getByTestId('gender-filter-title')).toHaveTextContent('Gender');
    });

    it('hides the options until legend is clicked', () => {
        expect.assertions(5);
        const { queryAllByTestId } = render(<Sidebar />);
        const radioButtons = queryAllByTestId('gender-filter-radio');
        expect(radioButtons).toHaveLength(0);
        fireEvent.click(getByTestId('gender-filter-toggle'), () => {
            expect(radioButtons).toHaveLength(3);
            expect(radioButtons[0]).toHaveTextContent('Male');
            expect(radioButtons[0]).toHaveTextContent('Female');
            expect(radioButtons[0]).toHaveTextContent('All');
        });
    });
});


const setGender = jest.fn();
const appState = {
    gender: 'All',
    setGender
};
let _getByText;

describe('When the sidebar loads with context', () => {
    beforeEach(() => {
        const { getByText } = render(
            <AppState.Provider value={appState}>
                <Sidebar />
            </AppState.Provider>
        );
        _getByText = getByText;
    });

    it('selects the correct radio button', () => {
        expect(_getByText('All')).toBeChecked();
        expect(_getByText('Female')).not.toBeChecked();
    });

    it('sets the gender when the radio is clicked', () => {
        expect.assertions(1);
        fireEvent.click(_getByText('Female'), () => {
            expect(setGender).toBeCalledTimes(1);
        });
    });
});
