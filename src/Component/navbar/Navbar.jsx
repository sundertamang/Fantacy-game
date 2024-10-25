import './navbar.css'
import SportsCricketIcon from '@mui/icons-material/SportsCricket';
import SportsVolleyballIcon from '@mui/icons-material/SportsVolleyball';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import SportsBasketballIcon from '@mui/icons-material/SportsBasketball';
import SportsRugbyIcon from '@mui/icons-material/SportsRugby';

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-wrapper">
        <div className="logo">Fantacy Game</div>
        <ul className="Game">
          <li className="GameList">
            <span className="GameIcons"><SportsCricketIcon/></span>
            <div className="GameText">Cricket</div>
          </li>
          <li className="GameList">
            <span className="GameIcons"><SportsSoccerIcon/></span>
            <div className="GameText">football</div>
          </li>
          <li className="GameList">
            <span className="GameIcons"><SportsBasketballIcon/></span>
            <div className="GameText">BasketBall</div>
          </li>
          <li className="GameList">
            <span className="GameIcons"><SportsVolleyballIcon/></span>
            <div className="GameText">Volleyball</div>
          </li>
          <li className="GameList">
            <span className="GameIcons"><SportsRugbyIcon/></span>
            <div className="GameText">Rugby</div>
          </li>
        </ul>
      </div>
    </div>
  )
}
 
export default Navbar