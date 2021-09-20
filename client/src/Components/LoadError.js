import { Message } from "semantic-ui-react";

const LoadError = ({ error }) => {
  return (
    <Message negative>
      <Message.Header>Error getting data</Message.Header>
      <code>{JSON.stringify(error)}</code>
    </Message>
  );
};
export default LoadError;