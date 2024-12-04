import { Link } from "react-router-dom";

function About() {
  return (
    <div className="container">
      <ul>
        <li><Link to="/about/1">about1</Link></li>
        <li><Link to="/about/2">about2</Link></li>
        <li><Link to="/about/3">about3</Link></li>
      </ul>
    </div>
  );
}
export default About;
