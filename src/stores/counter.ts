/* eslint-disable */
import { defineStore } from 'pinia'
export const counterStore = defineStore({
    id: 'counter',
    state: () => ({
        /** @type {number} */
        counter: 0,
    }),
    getters: {
        /**
         * @returns {number}
         */
        items: (state): number => { return state.counter * 2 }
    },
    actions: { /**
        * Add item to the cart
        * @param {number} name
        */
        addItem(name: number) {
            name = 0;
            this.counter++;
        },
    }
})
