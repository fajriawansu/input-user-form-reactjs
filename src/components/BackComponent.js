import React from 'react'
import { Col, Row, Button } from 'reactstrap'
import { Link } from "react-router-dom";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const BackComponent = () => {
    return (
        <Row className="mb-2">
            <Col>
            <Link to="/">
                  <Button color="dark">
                    <FontAwesomeIcon icon={faArrowLeft} />
                    Kembali
                  </Button>
                </Link>
            </Col>
        </Row>
    )
}
