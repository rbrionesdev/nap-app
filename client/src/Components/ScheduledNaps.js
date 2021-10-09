import { useState, useEffect } from "react";
import axios from "axios";
import { Card, Header } from "semantic-ui-react";

const ScheduledNaps = () => {

  const [naps, setNaps] = useState([]);

  useEffect(() => {
    getNaps();
  }, []);

  const getNaps = async () => {
    try {
      let res = await axios.get("/api/naps");
      setNaps(res.data);
    } catch (error) {
      alert("error retrieving naps")
      console.log(error);
    };
  };

  const renderNaps = () => {
    if (naps.length === 0) {
      return <p>No Scheduled Naps</p>
    }

    return naps.map((nap) => {

      return (
        <div>
        <Card key={nap.id}>
          <Card.Content>
            <Card.Header>
              { nap.title }
            </Card.Header>
            <Card.Meta>
              Duration: { nap.duration } hours
            </Card.Meta>
            <Card.Description>
              { nap.description}
            </Card.Description>
            <Card.Content extra>
              When: { nap.date }
            </Card.Content>
          </Card.Content>
        </Card>
        <br />
      </div>
      )
    })
  }

  return (
    <div>
      <Header as='h1'>Naps</Header>
        <br />
      {renderNaps()}
    </div>
  );
}


export default ScheduledNaps;