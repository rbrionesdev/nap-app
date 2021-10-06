import { useState } from "react";

const RewardForm = (props) => {
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [cost, setCost] = useState("");

  const submitHandler = e => {
    e.preventDefault();
    props.onSubmit({ name, desc, cost });

    setName(''); 
    setDesc(''); 
    setCost('');
  };

  return (
    <div>
      <h1>Reward Form</h1>

      <form onSubmit={submitHandler}>
        <p>
          <div>Name:</div>
          <input value={name} onChange={e => setName(e.target.value)} />
        </p>

        <p>
          <div>Description:</div>
          <input value={desc} onChange={e => setDesc(e.target.value)} />
        </p>

        <p>
          <div>Cost:</div>
          <input value={cost} onChange={e => setCost(e.target.value)}/>
        </p>

        <button>Submit!</button>
      </form>
    </div>
  );
};

export default RewardForm;

