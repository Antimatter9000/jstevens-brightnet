import React, { useContext } from 'react';
import AppState from 'src/data/context';


export default ({ value }) => {
    const { gendersSelected } = useContext(AppState);

    return (
        <label>
            {value}
            <input data-testid="gender-filter-radio"
              type="checkbox"
              value={value}
              defaultChecked={gendersSelected.includes(value)} />
        </label>
    );
}
