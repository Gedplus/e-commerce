import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import axios from 'axios';
export const api = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5001" }), 
    reducerPath: "adminApi",
    tagTypes: [
      "User",
    ],
    endpoints: (build) => ({
      getUser: build.query({
        query: (id) => `general/user/${id}`,
        providesTags: ["User"],
      }),
      getCustomers: build.query({
        query: () => "client/customers",
        providesTags: ["Customers"],
      }), 
        getDocument: build.query({
          query: () => "client/documents",
          providesTags: ["Document"],
        }),
        getUtilisateurs: build.query({
          query: () => "client/utilisateurs",
          providesTags: ["utilisateurs"],
        }), 
        getMedia: build.query({
          query: () => "media/all",
          providesTags: ["Media"],
        }),
        getPack: build.query({
          query: () => "pack/all",
          providesTags: ["Pack"],
        }),
  })
  })
  export const {
    useGetDocumentQuery,useGetUserQuery,useGetCustomersQuery,useGetUtilisateursQuery,useGetMediaQuery,useGetPackQuery

    } = api;
export const addReclamation = async (reclamation) => {
    return await axios.post(`http://localhost:5001/general/ReclamationAdd`, reclamation);
}
export const addContact = async (contact) => {
    return await axios.post(`http://localhost:5001/general/contactAdd`, contact);
}
export const addDocument = async (document) => {
  return await axios.post(`http://localhost:5001/general/DocumentAdd`, document);
}
export const editUser = async (id, user) => {
  return await axios.put(`http://localhost:5001/client/${id}`, user)
}
export const editDocumentI = async (id, document) => {
  return await axios.put(`http://localhost:5001/client/documentsI/${id}`, document)
}
export const editDocumentU = async (id, document) => {
  return await axios.put(`http://localhost:5001/client/documentsU/${id}`, document)
}
export const editDocumentE = async (id, document) => {
  return await axios.put(`http://localhost:5001/client/documentsE/${id}`, document)
}
export const editDocumentP = async (id, document) => {
  return await axios.put(`http://localhost:5001/client/documentsP/${id}`, document)
}
export const editMediaI = async (id, media) => {
  return await axios.put(`http://localhost:5001/media/mediaI/${id}`, media)
}
export const editMediaU = async (id, media) => {
  return await axios.put(`http://localhost:5001/media/mediaU/${id}`, media)
}
export const editMediaE = async (id, media) => {
  return await axios.put(`http://localhost:5001/media/mediaE/${id}`, media)
}
export const editMediaP = async (id, media) => {
  return await axios.put(`http://localhost:5001/media/mediaP/${id}`, media)
}
export const addCommande = async (commande) => {
  return await axios.post(`http://localhost:5001/commande/CommandeAdd`, commande);
}
export const getCommande = async (id) => {
  return await axios.get(`http://localhost:5001/commande/${id}` )
}
export const getDocument= async (id) => {
  return await axios.get(`http://localhost:5001/client/Doc/${id}`);
}
export const getMedia = async (id) => {
  return await axios.get(`http://localhost:5001/media/${id}`);
}
export const getPackid = async (id) => {
  return await axios.get(`http://localhost:5001/pack/${id}`);
}