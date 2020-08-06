import React, { useContext, useState, useEffect } from 'react';
import AppState from 'src/data/context';
import { addCommas } from 'src/data/util';


const Header = () => {
    const { data } = useContext(AppState);
    const [ memberCount, setMemberCount ] = useState(data?.total || 0);
    const [ memberCountDisplayed, setMemberCountDisplayed ] = useState(memberCount);

    useEffect(() => {
        setMemberCount(data.total);
    }, [data]);

    useEffect(() => {
        setMemberCountDisplayed(memberCount);
    }, [memberCount]);

    return (
        <header data-testid="header">
            <div data-testid="student-icon"
              role="presentational"
              className="student-icon">
                <svg xmlns="http://www.w3.org/2000/svg"
                  width="49.414"
                  height="44.473"
                  viewBox="0 0 49.414 44.473">
                    <path className="a" d="M24.707,1a1.647,1.647,0,0,0-.817.219l-.006-.013L.824,14.383l0,.016a1.642,1.642,0,0,0,.3,2.985v0l7.107,2.95V17.1A3.291,3.291,0,0,1,9.7,14.364c.534-.356,5.5-3.481,15-3.481s14.471,3.123,15,3.481A3.291,3.291,0,0,1,41.179,17.1v3.233l3.294-1.367V36.047a3.278,3.278,0,0,0-1.647,2.838c0,1.82,3.294,6.589,3.294,6.589s3.294-4.768,3.294-6.589a3.278,3.278,0,0,0-1.647-2.838V17.6l.518-.216v0a1.642,1.642,0,0,0,.3-2.985l0-.016L25.531,1.206l-.006.013A1.647,1.647,0,0,0,24.707,1Zm0,13.177c-8.784,0-13.177,2.927-13.177,2.927v5.308a3.319,3.319,0,0,0-3.294,3.294v1.647a6.893,6.893,0,0,0,2.21,5.254,3.185,3.185,0,0,0,1.306.721,14.084,14.084,0,0,0,2.114,4.822A12.639,12.639,0,0,0,24.456,43.81a1.758,1.758,0,0,0,.476,0,12.639,12.639,0,0,0,10.616-5.659,14.08,14.08,0,0,0,2.114-4.822,3.185,3.185,0,0,0,1.306-.721,6.893,6.893,0,0,0,2.21-5.254V25.707a3.319,3.319,0,0,0-3.294-3.294V17.1S33.491,14.177,24.707,14.177Zm0,7.505a31.27,31.27,0,0,1,9.809,1.441c.048.816.074,1.676.074,2.583h3.294v1.647A3.265,3.265,0,0,1,36.8,30.131a2.52,2.52,0,0,1-.962.566l-1.049.264-.177,1.065a12.433,12.433,0,0,1-1.8,4.3,8.965,8.965,0,0,1-8.1,4.208,8.965,8.965,0,0,1-8.1-4.208,12.434,12.434,0,0,1-1.8-4.3l-.177-1.065L13.576,30.7a2.52,2.52,0,0,1-.962-.566,3.265,3.265,0,0,1-1.084-2.776V25.707h3.294a8.978,8.978,0,0,1,.373-2.67A31.363,31.363,0,0,1,24.707,21.683Z"
                      transform="translate(0 -1)" />
                </svg>
            </div>
            <div className="summary">
                <p data-testid="member-count"
                  aria-label={memberCount}
                  className="member-count">
                    {addCommas(memberCountDisplayed)}
                </p>
                <p className="other-text">members selected</p>
            </div>
        </header>
    );
}

export default Header;
