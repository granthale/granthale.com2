import React from "react";
import Seed from "../../components/Seed";
import ExternalArrow from "../../components/ExternalArrow";
import Header from "../../components/Header";
import Link from "next/link";

const writing = () => {
  return (
    <>
      <Header page="seeds | writing" />
      <Seed selected="Writing">
        <p>
          I started consistently writing in 2023 and it's been game changing. I
          use{" "}
          <a
            href="https://obsidian.md"
            target="_blank"
            rel="noopener noreferrer"
          >
            Obsidian
            <ExternalArrow />
          </a>{" "}
          to maintain a Zettelkasten and an ongoing list of questions, and aim
          to write every day.
        </p>

        <br />
        <section>
          <h1 className="font-bold">General Advice</h1>
          <ul className="pl-5 list-disc">
            <li>
              <Link href="/library/on-writing-well">
                On Writing Well by William Zinsser
              </Link>
            </li>
          </ul>
        </section>

        <br />
        <section>
          <h1 className="font-bold">Digital Gardening & Zettelkasten</h1>
          <ul className="pl-5 list-disc">
            <li>
              <a
                href="https://notes.andymatuschak.org/Evergreen_notes"
                target="_blank"
                rel="noopener noreferrer"
              >
                Evergreen Notes by Andy Matuschak
                <ExternalArrow />
              </a>
            </li>
            <li>
              <a
                href="https://zettelkasten.de/introduction/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Introduction to the Zettelkasten Method
                <ExternalArrow />
              </a>
            </li>
            <li>
              <a
                href="https://maggieappleton.com/garden-history"
                target="_blank"
                rel="noopener noreferrer"
              >
                ...Digital Garden[s] by Maggie Appleton
                <ExternalArrow />
              </a>
            </li>
          </ul>
        </section>

        <br />
        <section>
          <h1 className="font-bold">Writing Online</h1>
          <ul className="pl-5 list-disc">
            <li>
              <a
                href="https://guzey.com/personal/why-have-a-blog/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Why You Should Start A Blog Right Now by Alexey Guzey
                <ExternalArrow />
              </a>
            </li>
          </ul>
        </section>
      </Seed>
    </>
  );
};

export default writing;
