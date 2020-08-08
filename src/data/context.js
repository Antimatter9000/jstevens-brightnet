import { createContext } from 'react';
import { emptyData } from './testData';

const AppState = createContext({
    gendersSelected: [],
    updateGendersSelected: () => {},
    data: emptyData
});
export default AppState;
