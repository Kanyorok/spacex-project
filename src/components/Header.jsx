import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import homeicon from '../assets/planet.png';

const Header = () => {
  const loc = useLocation();
  function activeLink(path) {
    if (path === loc.pathname) {
      return 'underline';
    }
    return '';
  }
  return (
    <div className="bg-white border-b-2 pt-3 pb-3">
      <header className="flex justify-between px-4 max-w-6xl mx-auto">
        <div className={`flex items-center gap-3 cursor-pointer ${activeLink('/')}`}>
          <img src={homeicon} alt="Main Logo" width="50" />
          <h1>Space Travelers&apos; Hub</h1>
        </div>
        <div className="flex items-center gap-3 divide-x-2 divide-[#bdbebf]">
          <div className="px-4">
            <ul className="flex space-x-10">
              <li
                className={`cursor-pointer py-3 text-sm font-semibold text-[#3d97ff] border-b-[3px] border-b-transparent ${activeLink('/')}
          `}
              >
                <Link to="/">Rockets</Link>
              </li>
              <li
                className={`cursor-pointer py-3 text-sm font-semibold text-[#3d97ff] border-b-[3px] border-b-transparent ${activeLink('/missions')}`}
              >
                <Link to="/missions">Missions</Link>
              </li>
            </ul>
          </div>
          <div className={`px-4 cursor-pointer py-3 text-sm font-semibold text-[#3d97ff] ${activeLink('/myprofile')}`}>
            <Link to="/myprofile">My Profile</Link>
          </div>
        </div>

      </header>
    </div>
  );
};

export default Header;
