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

    it('shows the options until legend is clicked', async () => {
        expect.assertions(4);
        const { getByTestId, queryAllByTestId } = render(<Sidebar />);
        const checkboxes = queryAllByTestId('gender-filter-checkbox');
        expect(checkboxes).toHaveLength(2);
        expect(checkboxes[0]).toHaveTextContent('Male');
        expect(checkboxes[1]).toHaveTextContent('Female');
        await fireEvent.click(getByTestId('gender-options-toggle'));
        expect(queryAllByTestId('gender-filter-checkbox')).toHaveLength(0);
    });
});


const updateGendersSelected = jest.fn();
const appState = {
    gendersSelected: ['Male'],
    updateGendersSelected
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

    it('selects the correct checkboxes', () => {
        expect(_getByText('Male').querySelector('input')).toBeChecked();
        expect(_getByText('Female').querySelector('input')).not.toBeChecked();
    });

    it.skip('sets the gender when the checkbox is clicked', () => {
        expect.assertions(1);
        fireEvent.click(_getByText('Female'), () => {
            expect(updateGendersSelected).toBeCalledTimes(1);
        });
    });
});
