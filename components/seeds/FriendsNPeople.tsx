import ExternalArrow from "../ExternalArrow";

const FriendsNPeople = () => {
  return (
    <>
      <p>
        One of the beautiful byproducts of traveling through Asia was a greater
        appreciation for the people in my life. Here are some resources on how
        to be more intentional about relationships.
      </p>

      <br />
      <section>
        <h1 className="font-bold">Internet-specific</h1>
        <ul className="ml-4">
          <li>
            <a
              href="https://guzey.com/how-to-make-friends-over-the-internet/#the-most-useful-post-on-networking-ive-ever-read"
              target="_blank"
              rel="noopener noreferrer"
            >
              How to Make Friends over the Internet by Alexey Guzey
              <ExternalArrow />
            </a>
          </li>
        </ul>
      </section>

      <br />
      <section>
        <h1 className="font-bold">General Advice</h1>
        <ul className="ml-4">
          <li>
            <a
              href="https://benjaminreinhardt.com/networking-for-nerds/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Networking for Nerds by Benjamin Reinhardt
              <ExternalArrow />
            </a>
          </li>
          <li>
            <a
              href="https://www.lesswrong.com/posts/pfibDHFZ3waBo6pAc/intentionally-making-close-friends"
              target="_blank"
              rel="noopener noreferrer"
            >
              Intentionally Making Close Friends by Neel Nanda
              <ExternalArrow />
            </a>
          </li>
          <li>
            <a
              href="https://www.swyx.io/friendcatchers"
              target="_blank"
              rel="noopener noreferrer"
            >
              Friendcatchers by Swyx
              <ExternalArrow />
            </a>
          </li>
        </ul>
      </section>
    </>
  );
};

export default FriendsNPeople;