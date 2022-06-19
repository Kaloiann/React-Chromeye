import React, { useEffect, useState } from 'react'
import './people.css'

const apiAddress = 'http://apis.chromeye.com:9191'

const People = ({ filteredResult }) => {
   
  return (
    <>
      <div className='container'>
        {filteredResult && filteredResult.length > 0 ? (
          <div className="table">
            <div className='categories'>
              <p>Avatar</p>
              <p>ID</p>
              <p>First Name</p>
              <p>Last Name</p>
              <p>Email</p>
              <p>Company</p>
              <p>Department</p>
              <p>Start Date</p>
            </div>
            {filteredResult.map((person, i) =>
              <div key={`${person}_${i}`} className='main'>
                  <img src={apiAddress + person.avatar.url} id={person.avatar.id} width={32} height={32} alt="" />
                  <p>{person.id}</p>
                  <p> {person.firstName}</p>
                  <p> {person.lastName}</p>
                  <p className='email'>{person.email}</p>
                  <p>{person.company.name}</p>
                  <p>{person.company.department}</p>
                  <p>{person.company.startDate}</p>
              </div>
            )}
          </div>
        ): <p>No matched people found</p>}
      </div>
    </>
  )
}

export default People