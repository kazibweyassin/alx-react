import Immutable from "./node_modules/immutable/dist/immutable";

export function getListObject(array) {
    // returns array as an immutable List object with fromJS
    return Immutable.List(array);

}

export function addElementToList(list, element) {
    // returns a new List object with element added to the end
    return list.push(element);
}