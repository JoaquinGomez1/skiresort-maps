import { useDispatch, TypedUseSelectorHook, useSelector } from "react-redux";
import { RootState } from "../state/store";

// This file is adding the corresponding types in our app
// into useDispatch and useSelector hooks
export const useAppDispatch = () => useDispatch<RootState>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
