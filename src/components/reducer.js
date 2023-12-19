import { initialState } from "./State";
import { ACTION_TYPES } from "./constant";

const clamp = (value, min, max) => Math.min(Math.max(value, min), max);

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.INCREMENT_RED:
      return {
        ...state,
        red: clamp(state.red + 1, 0, 255),
      };
    case ACTION_TYPES.DECREMENT_RED:
      return {
        ...state,
        red: clamp(state.red - 1, 0, 255),
      };
    case ACTION_TYPES.INCREMENT_GREEN:
      return {
        ...state,
        green: clamp(state.green + 1, 0, 255),
      };
    case ACTION_TYPES.DECREMENT_GREEN:
      return {
        ...state,
        green: clamp(state.green - 1, 0, 255),
      };
    case ACTION_TYPES.INCREMENT_BLUE:
      return {
        ...state,
        blue: clamp(state.blue + 1, 0, 255),
      };
    case ACTION_TYPES.DECREMENT_BLUE:
      return {
        ...state,
        blue: clamp(state.blue - 1, 0, 255),
      };
    default:
      return state;
  }
};
