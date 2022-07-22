import React, { Component } from "react";
import withRouter from "./withRouter";
import LatestMatch from "../LatestMatch";
import MatchCard from "../MatchCard";
import * as Loader from "react-loader-spinner";
import "./index.css";

const teamsApiUrl = "https://apis.ccbp.in/ipl/";

class TeamMatches extends Component {
  state = {
    isLoading: true,
    teamMatchesData: {},
  };

  componentDidMount() {
    this.getTeamMatches();
  }

  getFormattedData = (data) => ({
    competingTeamLogo: data.competing_team_logo,
    date: data.date,
    competingTeam: data.competing_team,
    firstInnings: data.first_innings,
    secondInnings: data.second_innings,
    id: data.id,
    umpires: data.umpires,
    manOfTheMatch: data.man_of_the_match,
    matchStatus: data.match_status,
    result: data.result,
    venue: data.venue,
  });

  getTeamMatches = async () => {
    const { params } = this.props;
    const { id } = params;

    const response = await fetch(`${teamsApiUrl}${id}`);
    const fetchData = await response.json();
    const formattedData = {
      teamBannerUrl: fetchData.team_banner_url,
      latestMatch: this.getFormattedData(fetchData.latest_match_details),
      recentMatches: fetchData.recent_matches.map((eachMatch) =>
        this.getFormattedData(eachMatch)
      ),
    };

    this.setState({ teamMatchesData: formattedData, isLoading: false });
  };

  renderRecentMatches = () => {
    const {teamMatchesData} = this.state
    const {recentMatches} = teamMatchesData
    return (
        <ul className="matchCardListItems">
            {recentMatches.map(recentMatch => (
                <MatchCard matchDetails={recentMatch} key={recentMatch.id}/>
            ))}
        </ul>
    )


  }

  renderTeamMatches = () => {
    const { teamMatchesData } = this.state;
    const { teamBannerUrl, latestMatch } = teamMatchesData;

    return (
      <>
        <div className="teamMatchContainer">
          <div className="teamBannerContainer">
            <img src={teamBannerUrl} alt="team banner" />
          </div>
          <LatestMatch latestMatchData={latestMatch}/>
          {this.renderRecentMatches()}
        </div>
      </>
    );
  };

  renderSpinner = () => {
    return (
      <>
        <div testid="loader" className="loader-container">
          <Loader.BallTriangle
            type="Oval"
            color="#ffffff"
            height={50}
            width={50}
          />
        </div>
      </>
    );
  };

  getRouteClassName = () => {
    const { params } = this.props;
    const { id } = params;

    switch (id) {
      case "RCB":
        return "rcb";
      case "KKR":
        return "kkr";
      case "KXP":
        return "kxp";
      case "CSK":
        return "csk";
      case "RR":
        return "rr";
      case "MI":
        return "mi";
      case "SH":
        return "srh";
      case "DC":
        return "dc";
      default:
        return "";
    }
  };

  render() {
    const { isLoading } = this.state;
    const clasName = `team-matches-container ${this.getRouteClassName()}`;

    return (
      <div className={clasName}>
        {isLoading ? this.renderSpinner() : this.renderTeamMatches()}
      </div>
    );
  }
}

export default withRouter(TeamMatches);
