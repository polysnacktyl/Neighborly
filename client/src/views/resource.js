import React, { useState, useEffect, useContext } from "react";
import DeleteBtn from "../components/DeleteBtn";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import UserContext from "../utils/userContext";
import "../components/style.css";

function Resources() {
    const [resources, setResources] = useState([])
    const { user } = useContext(UserContext);

    useEffect(() => {
        loadResources()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    function loadResources() {
        let userID = user.sub.split("|");
        let authID = userID[1];
        API.getResources(authID)
            .then(res =>
                setResources(res.data)
            )
            .catch(err => console.log(err));
    };

    function deleteResource(id) {
        API.deleteResource(id)
            .then(res => loadResources())
            .catch(err => console.log(err));
    }


    return (
        < Container fluid  >
            <Row>

                <Col className="list" size="md-6 sm-12">
                    <h4 style={{
                        textAlign: "center", color: "#004d26", marginBottom: "40px", marginTop: "40px",
                        fontFamily: "'Montserrat', sans-serif"
                    }}> {user.given_name}'s resource offers made to the community</h4>
                    {resources.length ? (
                        <List >
                            {resources.map(resources => (
                                <ListItem key={resources._id} >
                                    <Link to={"/resources/" + resources._id}>
                                        <strong>
                                            available on {resources.dateAvailable}, and {resources.details}
                                        </strong>
                                    </Link>
                                    <DeleteBtn onClick={() => deleteResource(resources._id)} />
                                </ListItem>
                            ))}
                        </List>
                    ) : (
                            <h3 style={{
                                textAlign: "center", color: "#004d26", marginTop: "100px",
                                fontFamily: "'Montserrat', sans-serif"
                            }}>No Resources to Display</h3>
                        )}
                </Col>
            </Row>
        </Container >
    );
}


export default Resources;
