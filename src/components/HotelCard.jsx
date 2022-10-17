import React from "react";
import { BiBed, BiCalendarAlt } from "react-icons/bi";
import { GoLocation } from "react-icons/go";
import Card from "react-bootstrap/Card";

const HotelCard = () => {
  return (
    <Card className="mb-4">
      <Card.Img variant="top" src="https://via.placeholder.com/300" />
      <Card.Body>
        <Card.Title>Albatroc acuaparkrea</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Card.Text className="mb-2">
          <GoLocation />
          lndjdkfbkdfksoc
        </Card.Text>
        <Card.Text className="mb-2">
          <BiBed />
          2bed
        </Card.Text>
        <Card.Text className="mb-2">
          <BiCalendarAlt />
          07 day
        </Card.Text>
        <Card.Text>
          <small> available from 12.12.21 </small>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default HotelCard;
