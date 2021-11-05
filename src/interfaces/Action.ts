import Types from "../state/actions/Types";

export default interface Action<T> {
  type: Types;
  payload: T;
}
