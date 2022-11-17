import React from 'react'
import {useState, useEffect} from 'react'
import axios from 'axios'
import { useNavigate,useParams,Link } from 'react-router-dom'

const EditForm = () => {

    const [title,setTitle] = useState('')
    const [description,setDescription] = useState('')
    const [location,setLocation] = useState('')
    const [errors,setErrors] = useState('')

    const {id} = useParams()
    const navigate = useNavigate()

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/FindById/${id}`)
        .then((res)=>{
            console.log(res)
            setTitle(res.data.title)
            setDescription(res.data.description)
            setLocation(res.data.location)
        }).catch((err)=>{
            console.log(err)
        })
    },[])

    const submitHandler = (e) => {
        e.preventDefault()
        axios.put(`http://localhost:8000/api/update/${id}`,{
            title,
            description,
            location
        }).then((res)=>{
            console.log(res)
            navigate('/')
        }).catch((err)=>{
            console.log(err)
            setErrors(err.response.data.errors)
        })
    }

    return (
        <div className="col-6 mx-auto">
            <div className="row">
                <div  className="col-sm">
                    <h1>Edit Chore</h1>
                </div>
                <div  className="col-sm">
                    <Link to={"/"}><button className="btn btn-info">Back to home</button></Link>
                </div>
            </div>
            <form onSubmit={submitHandler}>
                <div className="row border border-dark p-1">
                    <div className="col-sm">
                        <label>Title:</label><br></br>
                            <input type="text" className='form-control' value={title} onChange={(e)=>setTitle(e.target.value)}/><br></br>
                            { errors.title ? <span>{errors.title.message}</span> : null }<br></br>
                        <label>Description:</label><br></br>
                            <input type="text" className='form-control' value={description} onChange={(e)=>setDescription(e.target.value)}/><br></br>
                            { errors.description ? <span>{errors.description.message}</span> : null }<br></br>
                        <label>Location:</label><br></br>
                            <input type="text" className='form-control' value={location} onChange={(e)=>setLocation(e.target.value)}/><br></br>
                            { errors.location ? <span>{errors.location.message}</span> : null }<br></br>
                            <button className="btn btn-primary" type='submit'>Submit</button>
                    </div>
                </div>
            </form>
        </ div>
    )
}

export default EditForm    