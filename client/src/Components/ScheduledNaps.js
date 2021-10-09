import { useState, useEffect } from "react";
import axios from "axios";
import { Card, Header, Button } from "semantic-ui-react";
import { useHistory } from "react-router";

const ScheduledNaps = (id, props) => {

  const [naps, setNaps] = useState([]);
  const history = useHistory();


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

  const deleteNap = async (id) => {
    try {
      await axios.delete(`/api/naps/${id}`);
      let filterNaps = naps.filter((n) => n.id !== id);
      setNaps(filterNaps);
    } catch (error) {
      alert(error);
      console.log("error");
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
            <Button onClick={() => deleteNap(nap.id)}>Delete</Button>
            <Button onClick={() => props.history.push(`/naps/${id}/edit`)}>Update</Button>
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