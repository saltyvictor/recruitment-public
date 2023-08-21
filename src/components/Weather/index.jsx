import React, { useRef, useState } from "react";
import styles from "./Weather.module.css";

const Weather = ({ onSubmit }) => {
  const [cityInput, setCityInput] = useState('')


  const handleInputChange = (e) => {
    e.preventDefault()
    setCityInput(e.target.value)
  }
 
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('handlesubmit', cityInput)
    onSubmit(cityInput)
  }

  return (
    <div>
      <h2>How's the weather out there?</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter City"
          maxLength={50}
          className={styles.textInput}
          onChange={handleInputChange}
          value={cityInput}
        />
        <button className={styles.Button} type="submit" >
          Get Weather
        </button>
      </form>

    </div>
  );
};

export default Weather;
