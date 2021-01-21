import env from "../env.json";

function makeClientPromise(address) {
  const Client = new Promise((resolve, reject) => {
    const wsClient = new WebSocket(env.SERVER_ADDR);
    wsClient.onclose = () => {
      reject("Connection closed!")
    };
    wsClient.onopen = (wsEvent) => {
      console.log("connection opened!");
      try {
        wsClient.send(JSON.stringify({"address": address, "api_key": "0"}));
        console.log(`Wallet: ${address}`)
        console.log("Address sent! Watching...");
      } catch(e) {
        reject("Could not send the address!");
      }
    };
    wsClient.onmessage = (wsMessage) => {
      console.log(wsMessage);
      const { data } = wsMessage;
      const dataJSON = JSON.parse(data); 
      if(!dataJSON.is_send) {
        reject("Invalid message type");
      }
      resolve(dataJSON);
    };
  });

  return Client;
}

export default makeClientPromise;