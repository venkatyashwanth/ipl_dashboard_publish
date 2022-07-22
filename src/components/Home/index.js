import { Component } from "react";
import TeamCard from "../TeamCard";
import * as Loader from "react-loader-spinner";
import "./index.css";
// import TeamMatches from "../TeamMatches";

const teamsApiUrl = "https://apis.ccbp.in/ipl";


class Home extends Component {
  state = {
    isLoading: true,
    teamData: []
  }


  componentDidMount(){
    this.getTeams();
  }

  getTeams = async() => {
    const response = await fetch(teamsApiUrl)
    const fetchData = await response.json()
    const formattedData = fetchData.teams.map(team => ({
        name: team.name,
        id: team.id,
        teamImageUrl: team.team_image_url
    }))

    this.setState({
        teamData: formattedData,
        isLoading: false
    })
  }

  renderSpinner = () => {
    return (
      <>
        <div testid="loader" className="loader-container">
          <Loader.BallTriangle type="Oval" color="#ffffff" height={50} width={50}/>
        </div>
      </>
    );
  };

  renderTeamCards = () => {
    const {teamData} = this.state
    return (
      <>
        <ul className="teamListStyle">
            {teamData.map(team =>(
                <TeamCard teamDetails={team} key={team.id}/>
            ))}
        </ul>
      </>
    );
  };

  render() {
    const { isLoading } = this.state;

    return (
      <div className="app-container">
        <div className="ipl-hero-text">
          <div className="ipl-heading-format">
            <img
              className="iplLogo"
              src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
              alt="ipl logo"
            />
            <h1>IPL Dashboard</h1>
          </div>
        </div>
        {isLoading ? this.renderSpinner() : this.renderTeamCards()}
      </div>
    );
  }
}

export default Home;
