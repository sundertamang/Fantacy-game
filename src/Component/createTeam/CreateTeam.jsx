import {useState} from 'react'

function CreateTeam() {
    
    const [players, setPlayers] = useState([
        { name: '1 - Virat Kohli',points: 50 },
        { name: '2 - M.S Dhoni',points: 30 },
        { name: '3 - Dinesh Kartik', points: 10 },
        { name: '4 - Johhny Sins', points: 10 },
        { name: '5 - Danny Daniels', points: 10 },
        { name: '6 - Rohit Sharma', points: 10 },
        { name: '7 - Poonam Pandey', points: 10 },
        { name: '8 - Akshar Patel', points: 10 },
        { name: '9 - Deepak Kalal', points: 10 },
        { name: '10 - Shubman Gill', points: 10 },
        { name: '11 - K L Rahul', points: 10 },
        { name: '12 - Sarfaraz Khan', points: 10 }
        
      ]);
      const [selectedPlayers, setSelectedPlayers] = useState([]);
      const [teamName, setTeamName] = useState('');
    
      const handlePlayerChange = (e) => {
        const { value, checked } = e.target;
        if (checked && selectedPlayers.length < 11) {
          setSelectedPlayers([...selectedPlayers, value]);
        } else if (!checked) {
          setSelectedPlayers(selectedPlayers.filter((player) => player !== value));
        }
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Team Name:', teamName);
        console.log('Selected Players:', selectedPlayers);
      };
    
      const totalPoints = selectedPlayers.reduce(
        (total, playerName) => total + (players.find((p) => p.name === playerName)?.points || 0),
        0
      );
  return (
    <div>
    <form onSubmit={handleSubmit}>
      <div>
        <label>Team Name:</label>
        <input
          type="text"
          value={teamName}
          onChange={(e) => setTeamName(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Select Players (max 11):</label>
        {players.map((player, index) => (
          <div key={index}>
              <input
                type="checkbox"
                value={player.name}
                onChange={handlePlayerChange}
                disabled={selectedPlayers.length >= 11 && !selectedPlayers.includes(player.name)}
              />
              <label>{player.name} - Points: {player.points}</label>
            </div>
          ))}
        </div>
        <button type="submit">Create Team</button>
      </form>
      {selectedPlayers.length > 0 && (
        <div>
          <h2>{teamName}</h2>
          <ul>
            {selectedPlayers.map((playerName, index) => {
              const player = players.find((p) => p.name === playerName);
              return (
                <li key={index}>
                  {player.name} ---------------  Points: {player.points}
                </li>
              );
            })}
          </ul>
          <p>Total Points: {totalPoints}</p>
        </div>
      )}
    </div>
  )
}

export default CreateTeam