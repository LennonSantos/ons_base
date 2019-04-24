import { HubConnectionBuilder, LogLevel } from "@aspnet/signalr";

export default () => {
  return new HubConnectionBuilder()
    .withUrl("https://rolinder.azurewebsites.net/api/v1/chat")
    .configureLogging(LogLevel.Information)
    .build();
}
