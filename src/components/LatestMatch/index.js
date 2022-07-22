import "./index.css";

const LatestMatch = (props) => {
  const { latestMatchData } = props;
  const {
    competingTeam,
    date,
    venue,
    result,
    competingTeamLogo,
    firstInnings,
    secondInnings,
    umpires,
    manOfTheMatch,
  } = latestMatchData;

  return (
    <>
      <div className="latestMatchesContainer">
        <div className="matchDetailContainer">
          <h1>{competingTeam}</h1>
          <p>{date}</p>
          <p>{venue}</p>
          <p>{result}</p>
        </div>
        <div>
          <img src={competingTeamLogo} alt={`latest match ${competingTeam}`} className="teamLogoComp"/>
        </div>

        <div className="matchDetailContainer2">
          <p>First Innings</p>
          <p>{firstInnings}</p>
          <p>Second Innings</p>
          <p>{secondInnings}</p>
          <p>Man Of The Match</p>
          <p>{manOfTheMatch}</p>
          <p>Umpires</p>
          <p>{umpires}</p>
        </div>
      </div>
    </>
  );
};

export default LatestMatch;
