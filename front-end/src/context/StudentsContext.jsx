import { createContext, useContext, useEffect, useState } from "react"
import { useStorage } from "../hooks/useStorage";
import { newApi } from "../services/newApi";

const StudentsContext = createContext(undefined)

export const ListStudentsProvider = ({ children }) => {

  const [studentList, setStudentList] = useState([])
  const { getItem } = useStorage();
  const data = getItem('data')
  
  const getStudents = async() => {
    try {
      const response = await newApi.get(`/studentsall/${data.user_id}`, {
        headers: {
          Authorization: `${data.type} ${ data.token}`
        }
      });
      
      setStudentList(response.data.data)
      console.log('estado:', dadsStudents)
    } catch (error) {
      console.log(error.message)
    }
  };

  useEffect(() => {
    getStudents()
  }, [])

  return (
    <StudentsContext.Provider value={{ studentList, setStudentList }}>
      { children }
    </StudentsContext.Provider>
  )
} 

export const useStudents = () => {
  const context = useContext(StudentsContext)

  if(!context) {
    throw new Error('useStudents error!')
  }

  return context;
}