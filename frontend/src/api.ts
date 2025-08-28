// src/api.ts
import axios from "axios";

const API = axios.create({
  baseURL: "http://127.0.0.1:8000/api", // cambia se usi un host diverso
  headers: {
    Authorization: `Bearer 3|qnw7TGBpDoH5fidgM1JXE4KfvPdiJpIBP8I3xnLk2ea40e7b`,
  },
});

export default API;
