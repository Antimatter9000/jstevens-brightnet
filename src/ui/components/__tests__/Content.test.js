import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { Content } from '../';
import AppState from 'src/data/context';
import testData from 'src/data/testData';


afterEach(cleanup);

describe('When the Content component loads without context', () => {
    it('displays the chart card', () => {
        const { getByTestId, getByText } = render(<Content />);
        expect(getByTestId('chart-card-title')).toHaveTextContent('School Type');
        expect(getByText('No content to display')).toBeTruthy();
    });
});

describe('when the Content component loads with context', () => { 
    it('displays the chart', () => {
        const { getByTestId } = render(
            <AppState.Provider value={{data: testData['All']}}>
                <Content />
            </AppState.Provider>
        );
        expect(getByTestId('chart')).toBeTruthy();
    });
});