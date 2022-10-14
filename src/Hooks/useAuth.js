import React from "react";
import axios from "axios";
import { BASE_URL } from "../config";
import { createAction } from "../util/createAction";
import * as SecureStore from "expo-secure-store";

export function useAuth() {
  const [state, dispatch] = React.useReducer(
    (state, action) => {
      switch (action.type) {
        case "SET_USER":
          return {
            ...state,
            user: { ...action.payload },
          };
        case "REMOVE_USER":
          return {
            ...state,
            user: undefined,
          };
        case "SET_LOADING":
          return {
            ...state,
            loading: action.payload,
          };
        default:
          return state;
      }
    },
    {
      user: undefined,
      loading: true,
    }
  );
  const auth = React.useMemo(
    () => ({
      login: async (email, senha) => {
        const { data } = await axios.post(`${BASE_URL}auth/local`, {
          identifier: email,
          password: senha,
        });
        const user = {
          email: data.user.email,
          token: data.jwt,
          id: data.user.id,
        };
        await SecureStore.setItemAsync("user", JSON.stringify(user));

        dispatch(createAction("SET_USER", user));
      },
      logout: async () => {
        await SecureStore.deleteItemAsync("user");
        dispatch(createAction("REMOVE_USER"));
      },
      register: async (email, password) => {
        await axios.post(`${BASE_URL}auth/local/register`, {
          username: email,
          email,
          password,
        });
      },
    }),
    []
  );

  React.useEffect(() => {
    async function fetchData() {
      let result = await SecureStore.getItemAsync("user").then((user) => {
        if (user) {
          dispatch(createAction("SET_USER", JSON.parse(user)));
        }
        dispatch(createAction("SET_LOADING", false));
      });
    }
    fetchData();
  }, []);
  return { auth, state };
}
