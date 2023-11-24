
// Importing styles from a separate CSS module named "CountryButton.module.css"
import styles from "./CountryButton.module.css";

// Define a functional component called CountryButton
const CountryButton = () => {
  return (
    // Creating a div with a class name defined by styles.dropdown
    <div className={styles.dropdown}>
      {/* Div representing the selected country */}
      <div className={styles.selectedCountry}>
        {/* Image of the flag of India */}
        <img
          src="https://upload.wikimedia.org/wikipedia/en/4/41/Flag_of_India.svg"
          alt="Flag of India"
        />
        {/* Text abbreviation for the country */}
        <span>IND</span>
      </div>
    </div>
  );
};

// Exporting the CountryButton component to be used in other parts of the application
export default CountryButton;
