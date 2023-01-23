import React, { useEffect, useState } from 'react';
import  { isExpired, decodeToken } from 'react-jwt';
import {useNavigate} from "react-router-dom"

const Dashboard = () => {
    const navigate = useNavigate();
    const [quote, setQuote] = useState('')
    const [tempQuote, setTempQuote] = useState('')
    
    async function populateQuote() {
    const req = await fetch('http://localhost:5000/login/c/quote', {
        headers: {
            'x-access-token': localStorage.getItem('token')
        }
    })
    const data = await req.json()
    console.log(data)
    if(data.status === 'ok'){
        setQuote(data.quote)
    } else {
       // alert(data.error)
    }

    }
    
    useEffect(()=>{
        const token = localStorage.getItem('token')
        if (token) {
            const user = decodeToken(token)
            console.log(user)
            if (!user) {
                localStorage.removeItem('token')
                // window.location.href = "/"
                navigate("/login", {replace: true})
            
        } else {
            populateQuote()
        }
    }
    else {
        navigate("/login", {replace: true})
    }
    }, [])

    async function updateQuote(e) {
        e.preventDefault()
        const req = await fetch('http://localhost:5000/login/c/quote', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': localStorage.getItem('token'),
            },
            body: JSON.stringify ({
                quote: tempQuote,
            })
        })
        const data = await req.json()
        console.log(data)
        if(data.status === 'ok'){
            setTempQuote("")
            setQuote(tempQuote)
        } else {
            //alert(data.error)
        }
    

    }


    return <div>
        <h1> Hi {quote || 'No Quote' } </h1>
        <form onSubmit={updateQuote}>
            <input type='text' placeholder="Quote" value={tempQuote} onChange={(e) => setTempQuote(e.target.value)}/>
            <input type="submit" value="update quote"/>
        </form>
    </div>
}

export default Dashboard;