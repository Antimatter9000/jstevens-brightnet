import { createContext } from 'react';

const AppState = createContext({
    gender: 'All',
    setGender: () => {},
    data: {},
    setData: () => {}
});
export default AppState;
