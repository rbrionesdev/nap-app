import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Reward from './Reward';

const Rewards = () => {
  const [rewards, setRewards] = useState([]);

  useEffect(() => {
    getRewards();
  }, []);

  const getRewards = async () => {
    try {
      let res = await axios.get("/api/rewards");
      setRewards(res.data);
    } catch (err) {
      console.log(err);
    };
  };

  const deleteReward = async (id) => {
     try {
      await axios.delete(`/api/rewards/${id}`);
      setRewards(rewards.filter((f) => f.id !== id));
    } catch (err) {
      console.log(err);
    }
  };

  const renderRewards = () => {

    return rewards.map(reward => {
      return (
        <div key={reward.id}>
          <Reward reward={reward} deleteReward={deleteReward} />
        </div>
      )
    })
  }

  


  return (
    <div>
      <h2>Rewards</h2>
      {renderRewards()}
    </div>
  )
}

export default Rewards;