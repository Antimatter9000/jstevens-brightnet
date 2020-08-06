import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { Content } from '../';


afterEach(cleanup);

describe('When the Content component loads without context', () => {
    it('displays the chart card', () => {
        const { getByTestId } = render(<Content />);
        expect(getByTestId('chart-card')).toHaveTextContent('No content to display');
    });
});

describe('when the Content component loads with context', () => {
    it('displays the chart', () => {
        const Gender = React.createContext({
            gender: 'All',
            setGender: jest.fn()
        });
        const { getByTestId } = render(
            <Gender.Provider>
                <Content />
            </Gender.Provider>
        );
        expect(getByTestId('chart')).toBeTruthy();
    });
});