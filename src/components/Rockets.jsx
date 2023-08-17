import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { displayRockets } from '../Redux/Rockets/rocketSlice';
import Rocketslist from './Rocketslist';
import '../styles/style.css';

const Rockets = () => {
  const { rockets } = useSelector((state) => state.rockets);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(displayRockets());
  }, [dispatch]);
  return (
    <div className="rock">
      {rockets.map((rockets) => (
        <Rocketslist key={rockets.id} rockets={rockets} />

      ))}
    </div>
  );
};
export default Rockets;
