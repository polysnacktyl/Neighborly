import React, { useState, useEffect, useContext } from "react";
import { List, ListItem } from "../components/List";
import { Link } from "react-router-dom";
import { Col } from "../components/Grid";
// import Resources from "./resource";
import API from "../utils/API";
import UserContext from "../utils/userContext";


function CommunityResources() {
    const { user } = useContext(UserContext);

    const [resources, setResources] = useState([])

    useEffect(() => {
        loadResources()
    }, [])

    function loadResources() {
        API.getResources(user.email)
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
                Resource Offers Here!
            </p>
            <Col size="md-6 sm-12">

                {resources.length ? (
                    <List>
                        {resources.map(resources => (
                            <ListItem key={resources._id}>
                                <Link to={"/community_resources/" + resources._id}>
                                    <strong>
                                        available on {resources.dateAvailable}, and {resources.details}
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

export default CommunityResources;