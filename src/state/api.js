import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import axios from 'axios';
export const api = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: "https://api.bibintunisie.com" }), 
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
    return await axios.post(`https://api.bibintunisie.com/general/ReclamationAdd`, reclamation);
}
export const addContact = async (contact) => {
    return await axios.post(`http://localhost:5002/general/contactAdd`, contact);
}
export const addDocument = async (document) => {
  return await axios.post(`https://api.bibintunisie.com/DocumentAdd`, document);
}
export const editUser = async (id, user) => {
  return await axios.put(`https://api.bibintunisie.com/client/${id}`, user)
}
export const editDocumentI = async (id, document) => {
  return await axios.put(`https://api.bibintunisie.com/client/documentsI/${id}`, document)
}
export const editDocumentU = async (id, document) => {
  return await axios.put(`https://api.bibintunisie.com/client/documentsU/${id}`, document)
}
export const editDocumentE = async (id, document) => {
  return await axios.put(`https://api.bibintunisie.com/client/documentsE/${id}`, document)
}
export const editDocumentP = async (id, document) => {
  return await axios.put(`https://api.bibintunisie.com/client/documentsP/${id}`, document)
}
export const editMediaI = async (id, media) => {
  return await axios.put(`https://api.bibintunisie.com/media/mediaI/${id}`, media)
}
export const editMediaU = async (id, media) => {
  return await axios.put(`https://api.bibintunisie.com/media/mediaU/${id}`, media)
}
export const editMediaE = async (id, media) => {
  return await axios.put(`https://api.bibintunisie.com/media/mediaE/${id}`, media)
}
export const editMediaP = async (id, media) => {
  return await axios.put(`https://api.bibintunisie.com/media/mediaP/${id}`, media)
}
export const addCommande = async (commande) => {
  return await axios.post(`https://api.bibintunisie.com/commande/CommandeAdd`, commande);
}
export const getCommande = async (id) => {
  return await axios.get(`https://api.bibintunisie.com/commande/${id}` )
}
export const getDocument= async (id) => {
  return await axios.get(`https://api.bibintunisie.com/client/Doc/${id}`);
}
export const getMedia = async (id) => {
  return await axios.get(`https://api.bibintunisie.com/media/${id}`);
}
export const getPackid = async (id) => {
  return await axios.get(`https://api.bibintunisie.com/pack/${id}`);
}
export const getDocUni = async (id) => {
  return await axios.get(`https://api.bibintunisie.com/client/documentsU/${id}`);
}
export const getDocType = async (id) => {
  return await axios.get(`https://api.bibintunisie.com/client/documentsType/${id}`);
}
export const getDocSearch = async (id) => {
  return await axios.get(`https://api.bibintunisie.com/client/Search/${id}`);
}
export const editDocumentDI = async (id, document) => {
  return await axios.put(`https://api.bibintunisie.com/client/documentsDI/${id}`, document)
}
export const editDocumentDU = async (id, document) => {
  return await axios.put(`https://api.bibintunisie.com/client/documentsDU/${id}`, document)
}
export const editDocumentDE = async (id, document) => {
  return await axios.put(`https://api.bibintunisie.com/client/documentsDE/${id}`, document)
}
export const getSearch= async (id) => {
  return await axios.get(`https://api.bibintunisie.com/client/Search/${id}`);
}
export const signup= async (user) => {
  try{
  return await axios.post(`https://api.bibintunisie.com/user/register`, user);
} catch (error) {
  return error.response}
 
}
export const loginUser= async (user) => {
  return await axios.post(`https://api.bibintunisie.com/user/login`, user);
}
export const forgetPassword= async (email) => {
  return await axios.post(`https://api.bibintunisie.com/user/forget-password-token`, email);
}
export const ResetPassword= async (password,token ) => {
  return await axios.put(`https://api.bibintunisie.com/user/reset-password/${token}`, password);
}
export const editUserProfile = async (id, user) => {
  return await axios.put(`https://api.bibintunisie.com/client/${id}`, user)
}