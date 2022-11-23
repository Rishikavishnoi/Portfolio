import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export default function Project() {
  return (
    <div className="project-container mt-5 p-5 container-fluid">
      <h1>Project</h1>
      <div className="row project">
        <div className="col-md-4">
          <Card style={{ width: "16rem" }}>
            <Card.Img variant="top" src={require("../Images/Quiz-App.png")} />
            <Card.Body>
              <Card.Title>Quiz-App</Card.Title>
              <Card.Text>
                HTML , CSS , JAVASCRIPT
              </Card.Text>
              <Button className="mx-3">View</Button>
              <Button >Source Code</Button>
            </Card.Body>
          </Card>
        </div>

        <div className="col-md-4">
          <Card style={{ width: "16rem" }}>
            <Card.Img variant="top" src={require("../Images/music-player.png")} />
            <Card.Body>
              <Card.Title>Music Player</Card.Title>
              <Card.Text>
              REACTJS , BOOTSTRAP 
              </Card.Text>
              <Button className="mx-3"variant="primary">View</Button>
              <Button variant="primary">Source Code</Button>
            </Card.Body>
          </Card>
        </div>

        <div className="col-md-4">
          <Card style={{ width: "16rem" }}>
            <Card.Img variant="top" src={require("../Images/code-editor.png")} />
            <Card.Body>
              <Card.Title> Live Code Editor</Card.Title>
              <Card.Text>
                HTML , CSS , JAVASCRIPT
              </Card.Text>
              <Button className="mx-3"variant="primary">View</Button>
              <Button variant="primary">Source Code</Button>
            </Card.Body>
          </Card>
        </div>


        <div className="col-md-4">
          <Card style={{ width: "16rem" }}>
            <Card.Img variant="top" src={require("../Images/resume-builder.png")} />
            <Card.Body>
              <Card.Title>Resume Generator</Card.Title>
              <Card.Text>
                HTML , CSS , JAVASCRIPT
              </Card.Text>
              <Button className="mx-3"variant="primary">View</Button>
              <Button variant="primary">Source Code</Button>
            </Card.Body>
          </Card>
        </div>

        <div className="col-md-4">
          <Card style={{ width: "16rem" }}>
            <Card.Img variant="top" src={require("../Images/weather-app.png")} />
            <Card.Body>
              <Card.Title>Quiz-App</Card.Title>
              <Card.Text>
               REACTJS, OPEN-WEATHER API
              </Card.Text>
              <Button className="mx-3"variant="primary">View</Button>
              <Button variant="primary">Source Code</Button>
            </Card.Body>
          </Card>
        </div>

        <div className="col-md-4">
          <Card style={{ width: "16rem" }}>
            <Card.Img variant="top" src={require("../Images/donation-website.png")} />
            <Card.Body>
              <Card.Title>Quiz-App</Card.Title>
              <Card.Text>
                HTML , CSS ,RAZORPAY
              </Card.Text>
              <Button className="mx-3"variant="primary">View</Button>
              <Button variant="primary">Source Code</Button>
            </Card.Body>
          </Card>
        </div>

      </div>
    </div>
  );
}
