import axios from "axios";

const baseURL = "https://api-veterinario.vercel.app/users"

const service = axios.create({
    baseURL,
});

export const getUser = (id) => service.get(id);

export const getUsers = () => service.get();

export const createUser = (user) => service.post("/", user);

export const updateUser = (id, user) => service.put("/"+id, user);

export const deleteUser = (id) => service.delete("/"+id);
