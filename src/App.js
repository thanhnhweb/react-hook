import { useState } from "react";

function App() {
  const [jobs, setJobs] = useState(
    (() => {
      const storage = JSON.parse(localStorage.getItem("jobs"));
      return storage;
    }) || []
  );
  const [job, setJob] = useState("");

  const handleSubmit = () => {
    setJobs((prev) => {
      const newJob = [...prev, job];

      const jsonJobs = JSON.stringify(newJob);
      localStorage.setItem("jobs", jsonJobs);
      return newJob;
    });
    setJob("");
  };
  const handleDelete = (job) => {
    setJobs((prev) => {
      const newJob = prev.filter((item, id) => id !== job);
      const jsonJobs = JSON.stringify(newJob);
      localStorage.setItem("jobs", jsonJobs);
      console.log(newJob);
      return newJob;
    });
  };
  return (
    <div className="App">
      <input value={job} onChange={(e) => setJob(e.target.value)} />
      <button onClick={handleSubmit}>add</button>
      <ul>
        {jobs.map((job, index) => (
          <li key={index}>
            {job}
            <i style={{ marginLeft: 30 }} onClick={() => handleDelete(index)}>
              xoa
            </i>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
