import React from 'react'
import './TechStack.css';

const TechStack = () => {
  return (
    <div>
        <div className="container techstack">
            <h2 className='col-12 mt-3 mb-1 text-center'>Technologies Stack</h2>
            <hr/>
            <p className='pb-3 text-center'>
                Programming Languages: Java, Javascript, HTML, CSS/SCSS
                <br/>
                Frameworks and Libraries: React, Node.js, Express, Redux
                <br/>
                Tools and Platforms: Git, AWS, Jira
                <br/>
                Databases: MongoDB, SQL, MySQL
                <br/>
                Other Technologies: REST APIs, Agile Methodologies, Context API 
            </p>
        </div>
      
    </div>
  )
}

export default TechStack