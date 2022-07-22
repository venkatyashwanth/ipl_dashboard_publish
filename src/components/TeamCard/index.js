import { Link } from "react-router-dom";
import "./index.css";

const TeamCard = (props) => {
  const { teamDetails } = props;
  const { name, id, teamImageUrl } = teamDetails;

  return (
    <Link to={`/teamMatches/${id}`} className="listStyling">
      <li className="teamCardStyle">
        <img src={teamImageUrl} alt={name} className="teamLogo" />
        <p>{name}</p>
      </li>
    </Link>
  );
};

export default TeamCard;
