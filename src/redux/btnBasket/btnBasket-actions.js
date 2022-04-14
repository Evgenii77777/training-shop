import { createAction } from "@reduxjs/toolkit";

export const toggleBasket = createAction("toggle/Basket");
export const toggleBasketSide = createAction("toggleSide/Basket");
export const addItem = createAction("add/Basket");
export const deleteItem = createAction("delete/Basket");
export const currentColor = createAction("current/Color");
export const currentSize = createAction("current/Size");
export const increment = createAction("increment/Basket");
export const decrement = createAction("decrement/Basket");

export const message = createAction("message/Basket");
export const clearCard = createAction("clear/Basket");
