import { useState, useEffect } from "react";
import data from "../../../starter-code/data.json";
import styles from "./Planets.module.scss";
import { useParams } from "react-router-dom";
import { PlanetData, PlanetName } from "../../types/types";
import IconSource from "/assets/icon-source.svg";
import { planetColors } from "../../constants/planetColors";

function Planet() {
  const [activeButton, setActiveButton] = useState("overview");
  const { planetName } = useParams();
  useEffect(() => {
    setActiveButton("overview");
  }, [planetName]);

  const planet: PlanetData | undefined = data.find(
    (planet) => planet.name.toLowerCase() === planetName?.toLowerCase()
  );

  const currentColor =
    planetColors[planetName?.toLowerCase() as PlanetName] || "transparent";

  const handleButtonClick = (section: string) => {
    setActiveButton(section);
  };

  if (!planet) {
    return <p>Planet not found</p>;
  }

  return (
    <div className={styles.planet__container}>
      <div className={styles.planet_info_box}>
        <div className={styles.planet_item}>
          <img
            key={activeButton}
            src={
              activeButton === "overview"
                ? planet.images.planet
                : activeButton === "internal"
                ? planet.images.internal
                : planet.images.planet
            }
            alt={planet.name}
            className={styles.planet_img}
          />

          {activeButton === "geology" && (
            <img
              src={planet.images.geology}
              alt={`${planet.name} surface geology`}
              className={styles.geology_overlay_img}
            />
          )}
        </div>

        <div className={styles.planet_info}>
          <h1>{planet.name}</h1>
          <div className={styles.content_area}>
            {activeButton === "overview" && (
              <>
                <p>{planet.overview.content}</p>
                <p>
                  <a
                    href={planet.overview.source}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Source: Wikipedia
                  </a>
                  <img src={IconSource} alt="icon-arrow" />
                </p>
              </>
            )}

            {activeButton === "internal" && (
              <>
                <p>{planet.structure.content}</p>
                <p>
                  <a
                    href={planet.structure.source}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Source: Wikipedia
                  </a>
                  <img src={IconSource} alt="icon-arrow" />
                </p>
              </>
            )}

            {activeButton === "geology" && (
              <>
                <p>{planet.geology.content}</p>
                <p>
                  <a
                    href={planet.geology.source}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Source: Wikipedia
                  </a>
                  <img src={IconSource} alt="icon-arrow" />
                </p>
              </>
            )}
          </div>

          <div className={styles.button_container}>
            <button
              className={styles.overview}
              onClick={() => handleButtonClick("overview")}
              style={{
                backgroundColor:
                  activeButton === "overview" ? currentColor : "transparent",
              }}
            >
              <span>01</span>Overview
            </button>

            <button
              className={styles.internal}
              onClick={() => handleButtonClick("internal")}
              style={{
                backgroundColor:
                  activeButton === "internal" ? currentColor : "transparent",
              }}
            >
              <span>02</span>Internal
            </button>

            <button
              className={styles.geology}
              onClick={() => handleButtonClick("geology")}
              style={{
                backgroundColor:
                  activeButton === "geology" ? currentColor : "transparent",
              }}
            >
              <span>03</span>Surface Geology
            </button>
          </div>
        </div>
      </div>

      <div className={styles.planet_facts}>
        <div className={styles.planet_facts_box}>
          <p>Rotation Time</p>
          <p className={styles.fact_numbers}>{planet.rotation}</p>
        </div>
        <div className={styles.planet_facts_box}>
          <p>Revolution Time</p>
          <p className={styles.fact_numbers}>{planet.revolution}</p>
        </div>
        <div className={styles.planet_facts_box}>
          <p>Radius</p>
          <p className={styles.fact_numbers}>{planet.radius}</p>
        </div>
        <div className={styles.planet_facts_box}>
          <p>Average Temp</p>
          <p className={styles.fact_numbers}>{planet.temperature}</p>
        </div>
      </div>
    </div>
  );
}

export default Planet;
