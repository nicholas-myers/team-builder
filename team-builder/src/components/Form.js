import React from "react";


function Form(props) {
    const {
        values,
        onInputChange,
        changeProjects,
        onSubmit,
      } = props

return(<form onSubmit={onSubmit}>
        <div className="inputWrapper">
          <label>Name:</label>
          <input
            name="name"
            value={values.name}
            onChange={onInputChange}
          ></input>
        </div>
        <div className="inputWrapper">
          <label>Email:</label>
          <input
            name="email"
            value={values.email}
            onChange={onInputChange}
          ></input>
        </div>
        <div className="inputWrapper">
          <label>Role:</label>
          <input
            name="role"
            value={values.role}
            onChange={onInputChange}
          ></input>
        </div>
        <div className="inputWrapper">
          <label>Team:</label>
          <input
            name="team"
            value={values.team}
            onChange={onInputChange}
          ></input>
        </div>
        <h2>Projects:</h2>
        <div className="inputWrapper">
          1{" "}
          <input
            name="project1"
            value={values.projects.project1}
            onChange={changeProjects}
          ></input>
        </div>
        <div className="inputWrapper">
          2{" "}
          <input
            name="project2"
            value={values.projects.project2}
            onChange={changeProjects}
          ></input>
        </div>
        <div className="inputWrapper">
          3{" "}
          <input
            name="project3"
            value={values.projects.project3}
            onChange={changeProjects}
          ></input>
          
        </div>
        <button>Submit</button>
      </form>

)
}

export default Form
