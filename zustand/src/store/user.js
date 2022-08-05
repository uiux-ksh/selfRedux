import create from "zustand";
import axios from 'axios';
import {devtools} from "zustand/middleware";

const useUsers = create(
    devtools((set) => ({
     users:[],
     execute: async(url) =>{
         const response = await axios.get(url);
         set({users: await response.data})
     }
    }))
);

export default  useUsers;