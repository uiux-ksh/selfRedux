import create from "zustand";

import {devtools} from "zustand/middleware";

const useCount = create(
    devtools((set) => ({
       count:0,
       plusCount:()=> set((state) => ({ count: state.count })),
    }))
);

export default  useCount;