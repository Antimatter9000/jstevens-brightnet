import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { App } from '../';

jest.mock('src/ui/components/content/Content');


afterEach(cleanup);

describe('When the app loads', () => {
    it('displays the header', () => {
        const { getByTestId } = render(<App />);
        expect(getByTestId('header')).toBeTruthy();
    });

    it('displays the sidebar', () => {
        const { getByTestId } = render(<App />);
        expect(getByTestId('sidebar')).toBeTruthy();
    });

    it('displays the content', () => {
        const { getByTestId } = render(<App />);
        expect(getByTestId('content')).toBeTruthy();
    });
});
