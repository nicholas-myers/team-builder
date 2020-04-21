import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

const initialTeamList =[
  {
    id: 0,
    name: "Nick",
    team: "Lucas Greenwell",
    projects: [
      "D&D App",
      "Division 2 API",
      "Portfolio"
    ]
  }
]

const initialValues = {
  name: "",
  team: "",
  projects: {
      project1: "",
      project2: "",
      project3: "",
  },
}

function App() {
  const [teamMembers, setTeamMembers] = useState([])

  return (
    <form>
      <label>Name:</label>
      <input></input>
      <label>Team:</label>
      <input></input>
    </form>
  );
}

export default App;
