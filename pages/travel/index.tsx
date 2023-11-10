import Layout from "../../components/Layout";
import Header from "../../components/Header";
import {
  ComposableMap,
  Geographies,
  Geography,
  Graticule,
} from "react-simple-maps";
import Link from "next/link";
import { GetStaticProps } from "next";
import { getSortedData } from "../../utils/usePosts";

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
  "MYS",
];

const travel = ({
  allTravelData,
}: {
  allTravelData: {
    title: string;
    date: string;
    id: string;
  }[];
}) => {
  return (
    <>
      <Header page="travel" />
      <Layout>
        <div className="text-neon-green font-extrabold text-4xl">travel!</div>
        <br />
        <p className="text text-xl">
          Here are the countries that I've traveled to and the notes that I've taken along the way.
        </p>
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
        <div className="text-neon-green font-extrabold text-3xl">
          country notes
        </div>
        <br />
        <ul className="pl-5 text-xl">
          {allTravelData.map(({ id, date, title }) => (
            <li className="mb-4" key={id}>
              <Link
                className={`hover:text-neon-green`}
                key={title}
                href={`/travel/${id}`}
              >
                <span className="font-light mr-4">{date}</span>
                <u className="no-underline">{title}</u>
              </Link>
              <br />
            </li>
          ))}
        </ul>
      </Layout>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const allTravelData = getSortedData("travel");
  return {
    props: {
      allTravelData,
    },
  };
};

export default travel;
