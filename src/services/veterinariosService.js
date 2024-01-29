import axios from "axios";

const baseURL = "https://api-veterinario.vercel.app/veterinarios"

const service = axios.create({
    baseURL,
});

export const getVeterinarios = () => service.get();

export const getVeterinario = (id) => service.get(id);

export const createVeterinario = (veterinario) => service.post("/", veterinario);

export const updateVeterinario = (id, veterinario) => service.put("/"+id, veterinario);

export const deleteVeterinario = (id) => service.delete("/"+id);
