
const data = {
    "students": [
      {
        "name": "Rahul",
        "marks": {
          "maths": 85,
          "chemistry": 78,
          "physics": 92
        }
      },
      {
        "name": "Akhil",
        "marks": {
          "maths": 72,
          "chemistry": 85,
          "physics": 79
        }
      },
      {
        "name": "Raj",
        "marks": {
          "maths": 90,
          "chemistry": 88,
          "physics": 82
        }
      },
      {
        "name": "Anand",
        "marks": {
          "maths": 78,
          "chemistry": 80,
          "physics": 85
        }
      },
      {
        "name": "Ayush",
        "marks": {
          "maths": 95,
          "chemistry": 92,
          "physics": 88
        }
      },
      {
        "name": "Kriti",
        "marks": {
          "maths": 83,
          "chemistry": 75,
          "physics": 81
        }
      },
      {
        "name": "Rucha",
        "marks": {
          "maths": 89,
          "chemistry": 86,
          "physics": 90
        }
      },
      {
        "name": "Mahesh",
        "marks": {
          "maths": 75,
          "chemistry": 70,
          "physics": 65
        }
      },
      {
        "name": "Suresh",
        "marks": {
          "maths": 68,
          "chemistry": 72,
          "physics": 74
        }
      },
      {
        "name": "Sukesh",
        "marks": {
          "maths": 81,
          "chemistry": 79,
          "physics": 82
        }
      }
    ]
  };
  
function Leader() {



    const studentsWithTotalMarks = data.students.map(student => ({
        name: student.name,
        totalMarks: student.marks.maths + student.marks.chemistry + student.marks.physics
      }));
    
      const sortedStudents = studentsWithTotalMarks.sort((a, b) => b.totalMarks - a.totalMarks);
    

  return (
   <>

<div>
      <h1>Leaderboard</h1>
      <table border="1">
        <thead>
          <tr>
            <th>Rank</th>
            <th>Name</th>
            <th>Total Marks</th>
          </tr>
        </thead>
        <tbody>
          {sortedStudents.map((student, index) => (
            <tr key={student.name}>
              <td>{index + 1}</td>
              <td>{student.name}</td>
              <td>{student.totalMarks}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
   </>
  )
}

export default Leader