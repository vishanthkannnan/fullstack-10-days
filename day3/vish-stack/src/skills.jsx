const Skills = ({ skill }) => {
    return (
      <div>
        <h3>Skills</h3>
        <ul>
          {skill.map((s, index) => (
            <li key={index}>{s}</li>
          ))}
        </ul>
      </div>
    )
  }
  
  export default Skills
  