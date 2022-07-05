import { useState } from 'react';
import Student from './Student';

function StudentTable() {
    const [studentList, setStudentList] = useState([
      {
        id: 1,
        firstName: 'Toan',
        lastName: 'Dang',
        isAssign: false
      },
      {
        id: 2,
        firstName: 'Hoang',
        lastName: 'Ngo',
        isAssign: false
      },
      {
        id: 3,
        firstName: 'Thuc',
        lastName: 'Trinh',
        isAssign: true
      },
    ])
    const [listChecking, setListChecking] = useState([])
  
    const assignUser = () => {
      const studentListClone = [...studentList]
      listChecking.forEach((item, index) => {
        const indexStudent = studentListClone.findIndex(student => student.id === item)
        studentListClone[indexStudent].isAssign = true
      })
      setStudentList(studentListClone)
    }
  
    const renderStudent = () => {
      return studentList.map((student, index) => {
        return <Student {...student} key={student.id} setListChecking={setListChecking} listChecking={listChecking}  />
      })
    }
  
    return (
      <div>
          <button onClick={assignUser} style={{marginTop: 20, marginBottom: 20}}>Assign Student</button>
          <table style={{width: '100%'}}>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Actions</th>
            </tr>
            {renderStudent()}
          </table>
      </div>
    );
  }

  export default StudentTable