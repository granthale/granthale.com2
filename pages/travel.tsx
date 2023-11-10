import { useState } from "react";
import Layout from "../components/Layout";
import Header from "../components/Header";
import {
  ComposableMap,
  Geographies,
  Geography,
  Graticule,
} from "react-simple-maps";

const highlightCountries = [
  "USA",
  "CAN",
  "MEX",
  "COL",
  "ISL",
  "NLD",
  "NOR",
  "GBR",
  "FRA",
  "ITA",
  "JPN",
  "TWN",
  "CHN",
  "PHL",
];

const travel = () => {
  return (
    <>
      <Header page="travel" />
      <Layout>
        <div className="text-neon-green font-extrabold text-4xl">travel!</div>
        <br />
        <ComposableMap projectionConfig={{ scale: 180 }}>
          <Graticule stroke="#F53" />
          <Geographies geography="/features.json">
            {({ geographies }) =>
              geographies.map((geo) => {
                // Check if country has been visited
                const isHighlighted = highlightCountries.includes(geo.id);
                return (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    stroke="#000000"
                    style={{
                      default: {
                        // Change color for highlighted countries
                        fill: isHighlighted ? "#22c55e" : "#EEE",
                      },
                      hover: {
                        fill: "#F53",
                      },
                      pressed: {
                        fill: "#E42",
                      },
                    }}
                  />
                );
              })
            }
          </Geographies>
        </ComposableMap>
      </Layout>
    </>
  );
};

export default travel;
