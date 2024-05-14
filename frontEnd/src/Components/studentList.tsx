import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchStudents } from '../actions/studentActions';
import { getAllStudents } from '../api/studentApi';
// import { Student } from '../entity/student';
import { Link } from 'react-router-dom';
const StudentGrid : React.FC = () => {

    const dispatch = useDispatch();
    const students = useSelector((state: any) => state.student.students);
    console.log("Students details of useSelector", students)


    useEffect(() => {
        const fetchData = async () => {
            const data = await getAllStudents();
            console.log("Data in", data);
            dispatch(fetchStudents(data));
        };

        fetchData();
    }, [dispatch]);


    return  (
        <div>
            <div style={{textAlign:"center"}}>
            <h1>Student Grid</h1>
            </div>
            <div style={{marginLeft:"20px",marginRight:"90px",width:"100%"}}>
            <div style={{float:"left",width:"50%"}}><h3>View1</h3></div>
            <div style={{float:"right",width:"11%"}}><Link to="/addStudent">Add</Link></div>
            </div>
        </div>
    );
}

export default StudentGrid;