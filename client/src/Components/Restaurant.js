import React from 'react';
import { Button } from 'semantic-ui-react';

function Restaurant({store, deleteStore}) {
  return (
    <div>
      <h2>{store.name}</h2>
      <p>{store.city}</p>
      <Button onClick={() => deleteStore(store.id)}>delete</Button>
    </div>
  );
}

export default Restaurant;