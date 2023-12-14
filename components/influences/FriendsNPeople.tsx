import ExternalArrow from "../ExternalArrow";

const FriendsNPeople = () => {
  return (
    <ul className="ml-4">
      <li>
        <a
          href="https://guzey.com/how-to-make-friends-over-the-internet/#the-most-useful-post-on-networking-ive-ever-read"
          target="_blank"
          rel="noopener noreferrer"
        >
          How to Make Friends over the Internet
          <ExternalArrow />
        </a>
      </li>
      <li>
        <a
          href="https://benjaminreinhardt.com/networking-for-nerds/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Networking for Nerds
          <ExternalArrow />
        </a>
      </li>
      <li>
        <a
          href="https://www.lesswrong.com/posts/pfibDHFZ3waBo6pAc/intentionally-making-close-friends"
          target="_blank"
          rel="noopener noreferrer"
        >
          Intentionally Making Close Friends
          <ExternalArrow />
        </a>
      </li>
      <li>
        <a
          href="https://www.swyx.io/friendcatchers"
          target="_blank"
          rel="noopener noreferrer"
        >
          Friendcatchers
          <ExternalArrow />
        </a>
      </li>
    </ul>
  );
};

export default FriendsNPeople;
