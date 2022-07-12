import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
const Profile = () => {
    const [userComment, setUserComment] = useState();
    let { id } = useParams();
    useEffect(() => {
        axios
            .get("https://jsonplaceholder.typicode.com/comments")
            .then((response) =>
                setUserComment(response.data.find((Comment) => Comment.id == id))
            )
            .catch((error) => console.log(error));
    }, []);
    console.log(userComment);
    return (
        <div>
            {userComment ? (
                <article>
                    <h2 className="title">Comment</h2>
                    
                    <h4> {userComment.body} </h4>
                    <div className="signature">
                        <h5> {userComment.email} </h5>
                        <h5> {userComment.name} </h5>
                    </div>
                    
                </article>
            ) : (
                <h1>Loading...</h1>
            )}
        </div>
    );
};

export default Profile;
