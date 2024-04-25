function concatElements(page1, page2) {
    //Accepts two arguments page1 and page2. 
    //Both are arrays
    //Return a List containing the values of the two pages
    const myList0 = Immutable.List(page1);
    const myList1 = Immutable.List(page2);
    return myList0.concat(myList1);
}

function mergeElements(page1, page2) {
    //It accepts two arguments page1 and page2. Both are objects
    //It should return a List containing the values of the two pages
    //If two values are the same, page2 values should be used.
    const myMap0 = Immutable.Map(page1);
    const myMap1 = Immutable.Map(page2);
    return myMap0.merge(myMap1)
}

export { concatElements, mergeElements};
