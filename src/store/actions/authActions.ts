import { ThunkAction } from "redux-thunk";

import {
  SignUpData,
  AuthAction,
  SET_USER,
  User,
  SET_LOADING,
  SIGN_OUT,
  SignInData,
  SET_ERROR,
  NEED_VERIFICATION,
  SET_SUCCESS,
} from "../types";

import { RootState } from "..";
import {
  getAuth,
  createUserWithEmailAndPassword,
  sendSignInLinkToEmail,
} from "firebase/auth";
import { Timestamp, doc, setDoc, getDoc } from "@firebase/firestore";
import { db, actionCodeSettings } from "../../firebase/config";
import { resolveSoa } from "dns";

//Create user
export const signUp = (
  data: SignUpData,
  onError: () => void
): ThunkAction<void, RootState, null, AuthAction> => {
  return async (dispatch) => {
    try {
      const auth = getAuth();
      const res = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );
      if (res.user) {
        const userData: User = {
          email: data.email,
          firstName: data.firstName,
          id: res.user.uid,
          createdAt: Timestamp.now(),
        };
        await setDoc(doc(db, "users", res.user.uid), {
          userData,
        });
        await sendSignInLinkToEmail(auth, data.email, actionCodeSettings);
        await window.localStorage.setItem("emailForSignIn", data.email);
        dispatch({
          type: NEED_VERIFICATION,
        });
        dispatch({
          type: SET_USER,
          payload: userData,
        });
      }
    } catch (err: any) {
      console.log(err);
      onError();
      dispatch({
        type: SET_ERROR,
        payload: err.message,
      });
    }
  };
};

//Get User By ID
export const getUserById = (
  id: string
): ThunkAction<void, RootState, null, AuthAction> => {
  return async (dispatch) => {
    try {
      const userRef = doc(db, "users");
      const userSnap = await getDoc(userRef);
      if (userSnap.exists()) {
        const userData = userSnap.data() as User;
        dispatch({ type: SET_USER, payload: userData });
      }
    } catch (err) {
      console.log(err);
    }
  };
};

//Set Loading

export const setLoading = (
  value: boolean
): ThunkAction<void, RootState, null, AuthAction> => {
  return (dispatch: any) => {
    dispatch({ type: SET_LOADING, payload: value });
  };
};
