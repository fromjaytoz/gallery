export const SET_USER = "SET_USER";
export const SIGN_OUT = "SIGN_OUT";
export const SET_LOADING = "SET_LOADING";
export const SET_ERROR = "SET_ERROR";
export const NEED_VERIFICATION = "NEED_VERIFICATION";
export const SET_SUCCESS = "SET_SUCCESS";
export const GET_IMAGES = "GET_IMAGES";
export const DELETE_IMAGE = "DELETE IMAGE";

export interface User {
  firstName: string;
  email: string;
  id: string;
  createdAt: any;
}

export interface AuthState {
  user: User | null;
  authenticated: boolean;
  loading: boolean;
  error: string;
  needVerification: boolean;
  success: string;
}

export interface SignUpData {
  firstName: string;
  email: string;
  password: string;
}
export interface SignInData {
  email: string;
  password: string;
}

interface SetUserAction {
  type: string;
  payload: User;
}

interface SetLoadingAction {
  type: string;
  payload: string;
}

interface SignOutAction {
  type: string;
}

interface SetErrorAction {
  type: string;
  payload: string;
}

interface NeedVerificationAction {
  type: string;
}

interface SetSuccessAction {
  type: string;
  payload: string;
}

export type AuthAction =
  | SetUserAction
  | SetLoadingAction
  | SignOutAction
  | SetErrorAction
  | NeedVerificationAction
  | SetSuccessAction;

export interface GalleryImage {
  id?: string;
  imageUrl: string;
  filePath: string;
  fileName: string;
  createdAt: number;
  uploaderName: string;
  uploaderId: string;
}

export interface GalleryState {
  images: GalleryImage[];
  imagesLoaded: boolean;
}

interface AddImageAction {
  type: string;
  payload: GalleryImage;
}

interface GetImageAction {
  type: string;
  payload: GalleryImage[];
}

interface DeleteImageAction {
  type: string;
  payload: GalleryImage;
}

export type GalleryAction = AddImageAction | GetImageAction | DeleteImageAction;
