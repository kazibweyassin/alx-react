import Immutable from 'immutable';

function getImmutableObject(object) {
    // returns object as an immutable Map object with fromJS
    return Immutable.Map(object);
}

export default getImmutableObject;
