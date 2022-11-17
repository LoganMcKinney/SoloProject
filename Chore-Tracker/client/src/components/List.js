import { useState, useEffect } from "react"
import axios from "axios"
import { Link } from "react-router-dom"

const List = () => {
    
    const [list,setList] = useState([])

    useEffect(()=>{
        axios.get('http://localhost:8000/api/allChores')
        .then((res)=>{
            console.log(res)
            setList(res.data)
        })
        .catch((err)=>{
            console.log(err)
        })
    },[])

    return (
        <div className="container">
            <div className="row">
                <div className="col-sm">
                    <h1>All Chores</h1>
                </div>
                <div className="col-sm">
                    <Link to={"/chores/new"}><button className="btn btn-info">Add a Chore</button></Link>
                </div>
            </div>
            <div className="row">
                <div className="col-sm border border-dark">
                    <p>Title</p>
                    {
                        list.map((chores)=>(
                            <div>
                                <p>{chores.title}</p>
                            </div>
                        ))
                    }
                </div>
                <div className="col-sm border border-dark">
                    <p>Location</p>
                    {
                        list.map((chores)=>(
                            <div>
                                <p>{chores.location}</p>
                            </div>
                        ))
                    }
                </div>
                <div className="col-sm border border-dark">
                    <p>Actions</p>
                    {
                        list.map((chores)=>(
                            <div>
                                <Link to={`/chores/${chores._id}`}>Details</Link>
                                <span> | </span>
                                <Link to={`/chores/edit/${chores._id}`}>Edit</Link>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default List