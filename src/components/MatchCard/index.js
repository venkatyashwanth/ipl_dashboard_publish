import "./index.css";

const MatchCard = (props) => {
  const { matchDetails } = props;
  const { competingTeamLogo, competingTeam, matchStatus, result } =
    matchDetails;

  const getMatchStatus = (status) =>
    status === "Won" ? "match-won" : "match-lost";

  const matchWinningStatus = `matchCardResult ${getMatchStatus(matchStatus)}`;

  return (
    <li>
      <div className="matchCardItem">
        <div className="imageContainer">
          <img
            src={competingTeamLogo}
            alt={`competing team ${competingTeam}`}
          />
        </div>

        <h1>{competingTeam}</h1>
        <p className="matchCardResult">{result}</p>
        <p className={matchWinningStatus}>{matchStatus}</p>
      </div>
    </li>
  );
};

export default MatchCard;
