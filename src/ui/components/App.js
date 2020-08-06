import React, { useState, useEffect } from 'react';
import { Header, Sidebar, Content } from './';
import AppState from 'src/data/context';
import testData, { emptyData } from 'src/data/testData';


const App = () => {
    const [ gendersSelected, setGendersSelected ] = useState(['Male', 'Female']);
    const [ data, setData ] = useState({});

    const updateGendersSelected = value => {
        if (gendersSelected.includes(value)) {
            let newArr = [...gendersSelected];
            newArr.splice(newArr.indexOf(value), 1);
            setGendersSelected(newArr);
        } else {
            setGendersSelected([
                ...gendersSelected,
                value
            ]);
        }
    }

    useEffect(() => {
        const newData = gendersSelected.reduce((output, gender) => ({
            total: output.total + testData[gender].total,
            school_types: {
                'grammar': output.school_types['grammar'] + testData[gender].school_types['grammar'],
                'private': output.school_types['private'] + testData[gender].school_types['private'],
                'state': output.school_types['state'] + testData[gender].school_types['state'],
                'international': output.school_types['international'] + testData[gender].school_types['international']
            }
        }), emptyData);
        setData(newData);
    }, [gendersSelected]);

    return (
        <AppState.Provider value={{ gendersSelected, updateGendersSelected, data }}>
            <Sidebar />
            <main>
                <Header />
                <Content />
            </main>
        </AppState.Provider>
    );
}

export default App;
