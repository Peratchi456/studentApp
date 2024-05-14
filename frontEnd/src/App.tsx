import React from "react";
import StudentGrid from "./Components/studentList";

const App: React.FC = () =>{
  return (
    <div>
    <StudentGrid/>
    </div>
  );
}

export default App;


{/* <div className="App">
<h1>Student App</h1>
{/* <ul>
  {students.map((student: any) => (
    <li key={student.id}>{student.name}</li>
  ))}
</ul> */}