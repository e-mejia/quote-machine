import { SlSocialTumblr } from "react-icons/sl";
import { FiTwitter } from "react-icons/fi";

export default function Icons({ setColor }) {
  return (
    <div className="footer">
      <div className="icon-container">
        <div className="tweet-quote">
          <a href="www.twitter.com" style={{ color: `${setColor}`, transition: "2s"}}>
            <FiTwitter />
          </a>
        </div>
        <div className="tumblr-quote">
          <a
            href="www.tumblr.com"
            target="_blank"
            cd
            style={{ color: `${setColor}`, transition: "2s" }}
          >
            <SlSocialTumblr />
          </a>
        </div>
      </div>
    </div>
  );
}
