import React from "react";
import Seed from "../../components/Seed";
import ExternalArrow from "../../components/ExternalArrow";
import Header from "../../components/Header";

const career = () => {
  return (
    <>
      <Header page="seeds | career" />
      <Seed>
        <p>
          Most of us will spend anywhere from 50,000-150,000 hours of our life
          working on something. Let's make it interesting.
        </p>

        <br />
        <h1 className="font-bold">What To Work On</h1>
        <section>
          <ul className="pl-5 list-disc">
            <li>
              <a
                href="http://paulgraham.com/love.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                How to Do What You Love by Paul Graham
                <ExternalArrow />
              </a>
            </li>
            <li>
              <a
                href="https://medium.com/@lukeclancy6/problems-worth-fighting-for-eaeb1fe0b1e3"
                target="_blank"
                rel="noopener noreferrer"
              >
                Problems Worth Spending A Career Solving by Luke Clancy
                <ExternalArrow />
              </a>
            </li>

            <li>
              <a
                href="https://medium.com/@lukeclancy6/problems-worth-fighting-for-eaeb1fe0b1e3"
                target="_blank"
                rel="noopener noreferrer"
              >
                How to Pick a Career (That Actually Fits You) by Tim Urban
                <ExternalArrow />
              </a>
            </li>
            <li>
              <a
                href="https://www.youngmoney.co/p/future-d9ba"
                target="_blank"
                rel="noopener noreferrer"
              >
                The Future of You by Jack Raines
                <ExternalArrow />
              </a>
            </li>
          </ul>
        </section>

        <br />
        <section>
          <h1 className="font-bold">General Principles</h1>
          <ul className="pl-5 list-disc">
            <li>
              <a
                href="http://www.cs.virginia.edu/~robins/YouAndYourResearch.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                You and Your Research by Richard Hamming
                <ExternalArrow />
              </a>
            </li>

            <li>
              <a
                href="http://www.paulgraham.com/greatwork.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                How to Do Great Work by Paul Graham
                <ExternalArrow />
              </a>
            </li>
            <li>
              <a
                href="http://norvig.com/21-days.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                Teach Yourself Programming in 10 Years by Peter Norvig{" "}
                <ExternalArrow />
              </a>
            </li>
            <li>
              <a
                href="https://waitbutwhy.com/2015/11/the-cook-and-the-chef-musks-secret-sauce.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                The Cook and the Chef: Musk's Secret Sauce by Tim Urban
                <ExternalArrow />
              </a>
            </li>
            <li>
              <a
                href="https://map.simonsarris.com/p/the-most-precious-resource-is-agency"
                target="_blank"
                rel="noopener noreferrer"
              >
                The Most Precious Resource is Agency by Simon Sarris
                <ExternalArrow />
              </a>
            </li>
          </ul>
        </section>
      </Seed>
    </>
  );
};

export default career;
