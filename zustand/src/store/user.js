import create from "zustand";
import axios from 'axios';
import {devtools} from "zustand/middleware";

const useUsers = create(
    devtools((set) => ({
     users:[],
     execute: async(url) =>{
         try{
             const response = await axios.get(url);
             set({users: await response.data.items})
         }catch (err)  {
             console.log(err);
         }


     }
    }))
);

export default  useUsers;