import React, { useState } from "react";
import Form from "./components/Form";
import "./App.css";

let count = 0

const initialTeamList = [
  {
    id: count,
    name: "Nick",
    email: "n@n.com",
    role: "awesomeness",
    team: "Lucas Greenwell",
    projects: ["D&D App", "Division 2 API", "Portfolio"],
  },
];

const initialValues = {
  name: "",
  email: "",
  role: "",
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

  const [memberToEdit, setMemberToEdit] = useState({})

  return (
    <div className="container">
      <h1>Team Members</h1>
      <Form values={formValues} onInputChange={changeValues} changeProjects={changeProjects} onSubmit={submitTeamMember} />
      {teamMembers.map(member => {
        return (
          <div key={member.id +1} className="memberCard">
            <h2>{member.name}</h2>
            <p>{member.email}</p>
            <p>{member.role}</p>
            <h3>On Team: {member.team}</h3>
            <h4>Projects</h4>
            {member.projects.map((project, index) => {
              return <li key={index}>{project}</li>
        
            })}
            <button onClick={event => {
              setMemberToEdit(member)
              setFormValues({
                ...member,
                
              })
              
              }}> Edit</button>
          </div>
        );
      })}
    </div>
  );
}

export default App;
