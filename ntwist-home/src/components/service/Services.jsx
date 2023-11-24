// This component, Services, displays multiple service sections highlighting NTWIST's offerings.

// Importing the CSS module for styling
import styles from "./Services.module.css";

// Services component definition
const Services = () => {
  return (
    <>
      {/* Service section 1 */}
      <div className={styles.service}>
        <div className={styles.service_container}>
          <div className={styles.service_content}>
            {/* Service heading */}
            <h2 className={styles.service_content_heading}>
              Mine-To-Mill-To-Mine Optimization
            </h2>
            {/* Service description */}
            <p className={styles.service_content_description}>
              NTWIST’s newest product unlocks up to $250/oz in previously
              inaccessible value in open pit gold mines by connecting siloed
              data sources like block models, fleet management systems,
              stockpile surveys, and plant instruments. This allows your company
              to better track material flow, and feed properties, identify
              plan/production discrepancies, and correct resource models and
              production plans.
            </p>
            {/* Read more button */}
            <button className={styles.content_btn}>Read More</button>
          </div>
          {/* Service image */}
          <div className={styles.service_image_container}>
            <img
              className={styles.service_image}
              src="https://ntwist.com/wp-content/uploads/2023/01/iStock-1339284457-2048x1365.jpg"
              alt=""
            />
          </div>
        </div>
      </div>

      {/* Service section 2 */}
      <div className={styles.service}>
        <div className={styles.service_container}>
          {/* Service image */}
          <div className={styles.service_image_container}>
            <img
              className={styles.service_image}
              src="https://ntwist.com/wp-content/uploads/2021/12/iStock-1284372575.jpg"
              alt=""
            />
          </div>
          <div className={styles.service_content}>
            {/* Service heading */}
            <h2 className={styles.service_content_heading}>Sustainability</h2>
            {/* Service description */}
            <p className={styles.service_content_description}>
              Environmental stewardship is a priority for NTWIST. We help our
              customers to minimize their sustainability impact on the planet.
              Emissions or environmental targets are used alongside productivity
              targets to define success for our customers.
            </p>
            {/* Additional service description */}
            <p className={styles.service_content_description}>
              With the increasing relevance of carbon accounting and emissions
              tracking, NTWIST offers a suite of tools to increase visibility
              into environmental performance and help processing plants track,
              manage, optimize, and report key metrics.
            </p>
            {/* Read more button */}
            <button className={styles.content_btn}>Read More</button>
          </div>
        </div>
      </div>

      {/* Service section 3 */}
      <div className={styles.service}>
        <div className={styles.service_container}>
          <div className={styles.service_content}>
            {/* Service heading */}
            <h2 className={styles.service_content_heading}>
              Mineral Processing
            </h2>
            {/* Service description */}
            <p className={styles.service_content_description}>
              NTWIST offers a number of solutions for mills, concentrators, and
              leach plants. Our solutions help operations to reduce the effect
              of feed variability, avoid downtime and increase peak throughput
              while decreasing energy and reagent consumption.
            </p>
            {/* Read more button */}
            <button className={styles.content_btn}>Read More</button>
          </div>
          {/* Service image */}
          <div className={styles.service_image_container}>
            <img
              className={styles.service_image}
              src="https://ntwist.com/wp-content/uploads/2021/12/iStock-1322302283.jpg"
              alt=""
            />
          </div>
        </div>
      </div>

      {/* Service section 4 */}
      <div className={styles.service}>
        <div className={styles.service_container}>
          {/* Service image */}
          <div className={styles.service_image_container}>
            <img
              className={styles.service_image}
              src="https://ntwist.com/wp-content/uploads/2022/03/2021-02-oil-and-gas-digital-hero-e1648984580884.png"
              alt=""
            />
          </div>
          <div className={styles.service_content}>
            {/* Service heading */}
            <h2 className={styles.service_content_heading}>Sustainability</h2>
            {/* Service description */}
            <p className={styles.service_content_description}>
              Environmental stewardship is a priority for NTWIST. We help our
              customers to minimize their sustainability impact on the planet.
              Emissions or environmental targets are used alongside productivity
              targets to define success for our customers.
            </p>
            {/* Additional service description */}
            <p className={styles.service_content_description}>
              With the increasing relevance of carbon accounting and emissions
              tracking, NTWIST offers a suite of tools to increase visibility
              into environmental performance and help processing plants track,
              manage, optimize, and report key metrics.
            </p>
            {/* Read more button */}
            <button className={styles.content_btn}>Read More</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services; // Exporting the Services component
