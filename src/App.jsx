import React, { useState } from "react";
import styles from './App.module.css'
import Weather from "./components/Weather";
import { CurrentTemperature } from "./components/Weather/CurrentTemperature"


function App() {
  const [city, setCity] = useState('')

  const handleFormSubmit = (city) => {
    console.log(city)
    setCity(city)
  }

  return (
    <div className={styles.app}>
      <header className={styles.appHeader}>
        <h1>The weather channel</h1>
      </header>
      <main className={styles.main}>
        <Weather onSubmit={handleFormSubmit} />
       {/* { city && <CurrentTemperature input={city} />} */}
        <CurrentTemperature input={city} />
      </main>
      <footer className={styles.footer}>
        © Kronans Apotek AB {new Date().getFullYear()}
      </footer>
    </div>
  )
}

export default App
