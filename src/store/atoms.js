import { atomFamily } from "recoil";
import { selectorFamily } from "recoil";
import axios from "axios";
export const todoFamily = atomFamily({
    key: "todoFamily",
    default: selectorFamily({
        key: "todoSelectorFamily",
        get: (id) => async ({ get }) => {
            const res = await axios.get(`https://sum-server.100xdevs.com/todo?id=${id}`);
            return res.data.todo;
        }
    })
})
