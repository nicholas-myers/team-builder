import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

let count = 0

const initialTeamList = [
  {
    id: count,
    name: "Nick",
    team: "Lucas Greenwell",
    projects: ["D&D App", "Division 2 API", "Portfolio"],
  },
];

const initialValues = {
  name: "",
  team: "",
  projects: {
    project1: "",
    project2: "",
    project3: "",
  },
};

function App() {
  /// mmore changes
  const [teamMembers, setTeamMembers] = useState(initialTeamList);

  const [formValues, setFormValues] = useState(initialValues);

  const changeValues = (event) => {
    setFormValues({
      ...formValues,
      [event.target.name]: event.target.value,
    });
  };

  const changeProjects = (event) => {
    setFormValues({
      ...formValues,
      projects: {
        ...formValues.projects,
        [event.target.name]: event.target.value,
      },
    });
  };

  const submitTeamMember = (event) => {
    event.preventDefault()

    const newMember = {
      id: count + 1,
      name: formValues.name,
      team: formValues.team,
      projects: Object.values(formValues.projects)
    }

    setTeamMembers([...teamMembers, newMember])
  }

  return (
    <div className="container">
      <h1>Team Members</h1>
      <form onSubmit={submitTeamMember}>
        <div className="inputWrapper">
          <label>Name:</label>
          <input
            name="name"
            value={formValues.name}
            onChange={changeValues}
          ></input>
        </div>
        <div className="inputWrapper">
          <label>Team:</label>
          <input
            name="team"
            value={formValues.team}
            onChange={changeValues}
          ></input>
        </div>
        <h2>Projects:</h2>
        <div className="inputWrapper">
          1{" "}
          <input
            name="project1"
            value={formValues.projects.project1}
            onChange={changeProjects}
          ></input>
        </div>
        <div className="inputWrapper">
          2{" "}
          <input
            name="project2"
            value={formValues.projects.project2}
            onChange={changeProjects}
          ></input>
        </div>
        <div className="inputWrapper">
          3{" "}
          <input
            name="project3"
            value={formValues.projects.project3}
            onChange={changeProjects}
          ></input>
          
        </div>
        <button>Submit</button>
      </form>
      {teamMembers.map(member => {
        return (
          <div key={member.id} className="memberCard">
            <h2>{member.name}</h2>
            <h3>On Team: {member.team}</h3>
            <h4>Projects</h4>
            {!!member.projects && !!member.projects.length && member.projects.map((project, index) => {
              return <li key={index}>{project}</li>
        
            })}
            <button> Edit</button>
          </div>
        );
      })}
    </div>
  );
}

export default App;
