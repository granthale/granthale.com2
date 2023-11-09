import React from "react";
import Layout from "../components/Layout";
import Header from "../components/Header";
import {
  ComposableMap,
  Geographies,
  Geography,
  Graticule,
} from "react-simple-maps";

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
                return (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    style={{
                      default: {
                        fill: "#EEE",
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
