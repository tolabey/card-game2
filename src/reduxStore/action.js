import I from "immutable";

export function action(type, payload) {
  console.log(payload);
  return {
    type,
    payload: I.fromJS(payload)
  };
}
