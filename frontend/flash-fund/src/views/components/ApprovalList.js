import axios from "axios"
import React from "react"
import {
  Container,
  CardDeck,
  Row,
  Card,
  Col,
  Button,
  ButtonGroup,
} from "react-bootstrap"

//component to create a grid of cards to show campaings
//used on landing page and home page
const ApprovalList = ({ cards, changePending, loading }) => {
  console.log(cards)
  //get campaigns that need approval still

  //const [cards, setCards] = useState(props.cards)

  //return a list of cards that allow the admin to click 'approve' or 'deny' on
  if (loading) {
    return <h1>Loading...</h1>
  }
  return (
    <Container>
      <CardDeck>
        <Row md="3">
          {cards.length === 0 ? (
            <h1>None Pending</h1>
          ) : (
            cards.map((card, index) => (
              <Col key={index}>
                <Card
                  className="mb-3"
                  style={{
                    maxWidth: "50rem",
                    boxShadow: "none",
                    transform: "none",
                  }}
                >
                  <Card.Img variant="top" src="/kent_seal.png" />
                  <Card.Body>
                    <Card.Title className="text-left">{card.Title}</Card.Title>
                    <Card.Text
                      className="overflow-auto"
                      style={{ maxHeight: "8rem" }}
                    >
                      {card.Description}
                    </Card.Text>
                  </Card.Body>
                  <Card.Body className="text-center">
                    <ButtonGroup>
                      <Button
                        variant="link"
                        name="put"
                        onClick={(e) => {
                          changePending(card.id, e)
                          //need api call to update campaign to approved
                          //setCards(cards.filter((e) => e.id !== card.id))
                        }}
                      >
                        Approve
                      </Button>
                      <Button
                        variant="link"
                        name="delete"
                        onClick={(e) => {
                          changePending(card.id, e)
                          //need api call to delete campaign
                          //setCards(cards.filter((e) => e.id !== card.id))
                        }}
                      >
                        Deny
                      </Button>
                    </ButtonGroup>
                  </Card.Body>
                  <Card.Footer>
                    <small className="text-muted">user</small>
                  </Card.Footer>
                </Card>
              </Col>
            ))
          )}
        </Row>
      </CardDeck>
    </Container>
  )
}

export default ApprovalList
