import React, {useState,useEffect} from 'react'
import axios from 'axios'
import { useParams, useNavigate, Link } from 'react-router-dom'


const OneChore = () => {

    const {id} = useParams()

    const navigate = useNavigate()
    
    const [chore,setChore] = useState({})

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/FindById/${id}`)
        .then((res)=>{
            setChore(res.data)
        }).catch((err)=>{
            console.log(err)
        })
    },[])
    

    const deleteHandler = (id) =>{
        axios.delete(`http://localhost:8000/api/delete/${id}`)
        .then((res)=>{
            console.log("Successfully deleted from database")
            navigate('/')
        }).catch((err)=>{
            console.log(err)
        })
    }

    return (
        <div className="col-6 mx-auto">
            <div className="row">
                <div className="col-sm">
                    <h1>{chore.title}</h1>
                </div>
                <div className="col-sm">
                    <Link to={"/"}><button className="btn btn-info">Back to home</button></Link><br></br>
                    <button className="btn btn-danger mt-3" onClick={(e)=>deleteHandler(chore._id)}>Delete Chore</button>
                </div>
            </div>
            <div className="row border border-dark">
                <div className="col-sm">
                    <p>Location:</p>
                    <p>Description:</p>
                </div>
                <div className="col-sm">
                    <p>{chore.location}</p>
                    <p>{chore.description}</p>
                </div>
            </div>

        </div>
    )
}

export default OneChore