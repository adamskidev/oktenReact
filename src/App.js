import React, {useEffect, useState} from 'react';

import './App.css';

const App = () => {
    const [missions, setMissions] = useState([]);

    console.log(missions)

    useEffect(() => {
        fetch('https://api.spacexdata.com/v3/launches/')
            .then(response => response.json())
            .then(value => setMissions(value.filter(mission => mission.launch_year !== '2020')))
    }, [])
    return (
        <div>
            {missions.map(mission => <div key={mission.flight_number} className={'mission'}>
                <div>
                    <h2>{mission.mission_name}</h2>
                    <span>{mission.launch_year}</span>
                </div>
                <img src={mission.links.mission_patch_small} alt={mission.mission_name}/>
            </div> )}
        </div>
    );
};

export default App;