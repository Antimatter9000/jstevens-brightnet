import React, { useContext, useState } from 'react';
import AppState from 'src/data/context';
import Logo from './Logo';
import GenderInput from './GenderInput';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVenusMars } from '@fortawesome/free-solid-svg-icons';


const Sidebar = () => {
    const { updateGendersSelected } = useContext(AppState);
    const [ optionsShown, setOptionsShown ] = useState(true);
    const [ expanded, setExpanded ] = useState(false);

    return (
        <aside data-testid="sidebar"
          className={`sidebar ${expanded ? 'expanded' : ''}`}>
            <button className="sidebar-title"
              onClick={() => setExpanded(!expanded)}>
                <div className="logo">
                    <Logo />
                </div>
                <span>INSIGHT ENGINE</span>
            </button>
            <form onChange={e => updateGendersSelected(e.target.value)}>
                <fieldset>
                    <button data-testid="gender-options-toggle" 
                      className="gender-options-toggle"
                      onClick={e => {
                        e.preventDefault();
                        setOptionsShown(!optionsShown);
                      }}>
                        <legend data-testid="gender-filter-title">
                            <FontAwesomeIcon icon={faVenusMars} /> Gender
                        </legend>
                    </button>
                    {optionsShown ? (
                        <>
                            <GenderInput value="Male" />
                            <GenderInput value="Female" />
                        </>
                    ) : null}
                </fieldset>
            </form>
        </aside>
    );
};

export default Sidebar;
