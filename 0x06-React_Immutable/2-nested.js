import Immutable from "./node_modules/immutable/dist/immutable";

export default function accessImmutableObject(object, array) {
    //function that returns the value of the nested key
    //The first argument is a plain object
    //The second one is an array containing a list of a path to some key in the object

    const mapp = Immutable.fromJS(object);
    return mapp.getIn(array); 
}