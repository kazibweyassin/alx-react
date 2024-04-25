import immutable from 'immutable'
//deep merge elements 
function mergeDeeplyElements(page1, page2) {
    const map0 = Immutable.Map(page1);
    const map1 = Immutable.Map(page2);
    return map0.mergeDeep(map1);
}

export default mergeDeeplyElements;
