import React from 'react'
import './Profile.css'

function Profile() {
    return (
        <div style={{maxWidth:"550px",margin:"0px auto"}}>
            <div style={{
                display:"flex",
                justifyContent:"space-around",
                margin:"18px 0px",
                borderBottom:"1px solid grey"
            }}>
                <div>
                    <img style={{ width: "160px", height: "160px", borderRadius: "80px" }}
                        src="https://www.learningcontainer.com/wp-content/uploads/2020/08/Sample-PNG-File-for-Testing.png" alt="TestImage"
                    />
                </div>
                <div>
                    <h4>Ankit Kumar</h4>
                    <div style={{display:"flex",justifyContent:"space-between",width:"108%"}}>
                        <h5>40 posts</h5>
                        <h5>40 follower</h5>
                        <h5>40 following</h5>
                    </div>
                </div>
            </div>

            <div className="gallery">
                <img className="item" src="https://www.learningcontainer.com/wp-content/uploads/2020/08/Sample-PNG-File-for-Testing.png"  alt="TestImage"/>
                <img className="item" src="https://www.learningcontainer.com/wp-content/uploads/2020/08/Sample-PNG-File-for-Testing.png"  alt="TestImage"/>
                <img className="item" src="https://www.learningcontainer.com/wp-content/uploads/2020/08/Sample-PNG-File-for-Testing.png"  alt="TestImage"/>
                <img className="item" src="https://www.learningcontainer.com/wp-content/uploads/2020/08/Sample-PNG-File-for-Testing.png"  alt="TestImage"/>
                <img className="item" src="https://www.learningcontainer.com/wp-content/uploads/2020/08/Sample-PNG-File-for-Testing.png"  alt="TestImage"/>
                <img className="item" src="https://www.learningcontainer.com/wp-content/uploads/2020/08/Sample-PNG-File-for-Testing.png"  alt="TestImage"/>
                
            </div>
        </div>
    )
}

export default Profile
