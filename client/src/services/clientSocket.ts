import { io } from "socket.io-client";

export const clientSocket = () => io("http://localhost:3000");
