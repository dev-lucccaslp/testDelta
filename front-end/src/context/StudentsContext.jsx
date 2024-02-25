import { createContext, useContext, useEffect, useState } from "react"
import { userStorage } from "../hooks/useStorage";
import { newApi } from "../services/newApi";

const StudentsContext = createContext(undefined)

export const ListStudentsProvider = ({ children }) => {
  const { userState, ...rest  } = userStorage();

  const [studentList, setStudentList] = useState([])

  const getStudents = async () => {
    try {
      const response = await newApi.get(`/studentsall/${userState.user_id}`, {
        headers: {
          Authorization: `${userState.type} ${userState.token}`
        }
      });

      setStudentList(response.data.data)
      console.log('estado:', response.data.data)
    } catch (error) {
      console.log(error.message)
    }
  };

  useEffect(() => {
    getStudents();
  }, [userState]);

  return (
    <StudentsContext.Provider value={{ studentList, setStudentList, ...rest, userState  }}>
      {children}
    </StudentsContext.Provider>
  )
}

export const useStudents = () => {
  const context = useContext(StudentsContext)

  if (!context) {
    throw new Error('useStudents error!')
  }

  return context;
}