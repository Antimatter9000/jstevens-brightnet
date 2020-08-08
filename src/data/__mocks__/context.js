import { createContext } from 'react';

const AppState = createContext({
    gendersSelected: [],
    updateGendersSelected: jest.fn(),
    data: {
        total: 0,
        school_types: {}
    }
});
export default AppState;