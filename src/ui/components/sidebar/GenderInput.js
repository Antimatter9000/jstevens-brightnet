import React, { useContext } from 'react';
import AppState from 'src/data/context';


export default ({ value }) => {
    const { gendersSelected } = useContext(AppState);

    return (
        <label data-testid="gender-filter-checkbox">
            {value}
            <input
              type="checkbox"
              value={value}
              defaultChecked={gendersSelected?.includes(value)} />
        </label>
    );
}
