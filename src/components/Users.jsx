import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
const Users = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        axios
            .get("https://jsonplaceholder.typicode.com/users")
            .then((response) => setUsers(response.data))
            .catch((error) => console.log(error));
    }, []);

    return (
        <div className="users-container">
            {users.map((user) => {
                return (
                    <div key={user.id} className="user-item" style={{backgroundColor: 'white', borderRadius:5 }} >
                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuDoisN_XW3IVsEn4qXXTiqfTFBCCQOWqDFg&usqp=CAU"
                            width={50}
                        />
                        <h3>{user.name}</h3>
                        <h4 style={{fontSize:13}}>{user.email}</h4>
                        <h5>{user.website}</h5>
                        <Link to={`/profile/${user.id}`} className="btn-comment">
                            See Comments
                        </Link>
                    </div>
                );
            })}
        </div>
    );
};

export default Users;
