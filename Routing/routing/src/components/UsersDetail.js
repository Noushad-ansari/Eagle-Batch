import React from 'react'
import { useParams } from 'react-router-dom'

export default function UsersDetail() {
    const {userId} = useParams()
  
    return (
        <div>
            <h1>
                Detail of user {userId}
            </h1>
        </div>
    )
}
