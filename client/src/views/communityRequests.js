import React, { useState, useEffect } from "react";
import { List, ListItem } from "../components/List";
import { Link } from "react-router-dom";
import { Col } from "../components/Grid";
// import Resources from "./resource";
import API from "../utils/API";



function CommunityRequests() {


    const [Requests, setResources] = useState([])

    useEffect(() => {
        loadRequests()
    }, [])

    function loadRequests() {
        API.getRequests()
            .then(res =>
                setResources(res.data)
            )
            .catch(err => console.log(err));
    };

    return (
        <div>
            <p className="text-center"
                style={{
                    color: "#99ffcc",
                    fontWeight: "bolder",
                    fontSize: "24px",
                    textShadow: "2px 2px #004d26"
                }}>
                Requests Here!
            </p>
            <Col size="md-6 sm-12">

                {Requests.length ? (
                    <List>
                        {Requests.map(requests => (
                            <ListItem key={requests._id}>
                                <Link to={"/community_requests/" + requests._id}>
                                    <strong>
                                        {requests.title}, {requests.request}
                                    </strong>
                                </Link>

                            </ListItem>
                        ))}
                    </List>
                ) : (
                        <h3>No Results to Display</h3>
                    )}
            </Col>

        </div>
    )
}

export default CommunityRequests;