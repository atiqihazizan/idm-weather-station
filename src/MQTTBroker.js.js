import mqtt from "mqtt";

class MQTTBroker {
  constructor(brokerUrl, options = {}) {
    this.client = null; // MQTT client instance
    this.brokerUrl = brokerUrl; // Broker URL (e.g., wss://broker.hivemq.com:8000/mqtt)
    this.options = options; // Options for authentication, etc.
    this.isConnected = false; // Connection status
  }

  // Connect to the broker
  connect(onConnectCallback, onErrorCallback) {
    this.client = mqtt.connect(this.brokerUrl, this.options);

    this.client.on("connect", () => {
      console.log("Connected to client");
      this.isConnected = true;
      if (onConnectCallback) onConnectCallback();
    });

    this.client.on("error", (error) => {
      console.error("Client connection error:", error);
      this.isConnected = false;
      if (onErrorCallback) onErrorCallback(error);
    });

    this.client.on("offline", () => {
      console.warn("Client offline");
      this.isConnected = false;
    });
  }

  // Subscribe to a topic
  subscribe(topic, onMessageCallback) {
    if (!this.client || !this.isConnected) {
      console.error("Cannot subscribe, client is not connected.");
      return;
    }

    this.client.subscribe(topic, (error) => {
      if (error) {
        console.error(`Failed to subscribe to topic "${topic}":`, error);
      } else {
        // console.log(`Subscribed to topic "${topic}"`);
      }
    });

    this.client.on("message", (receivedTopic, payload) => {
      if (receivedTopic === topic && onMessageCallback) {
        onMessageCallback(payload.toString());
      }
    });
  }

  // Publish a message to a topic
  publish(topic, message) {
    if (!this.client || !this.isConnected) {
      console.error("Cannot publish, client is not connected.");
      return;
    }

    this.client.publish(topic, message, (error) => {
      if (error) {
        console.error(`Failed to publish message to topic "${topic}":`, error);
      } else {
        // console.log(`Message "${message}" published to topic "${topic}"`);
      }
    });
  }

  // Disconnect from the broker
  disconnect() {
    if (this.client) {
      this.client.end(() => {
        console.log("Disconnected from MQTT broker");
        this.isConnected = false;
      });
    }
  }
}

export default MQTTBroker;
