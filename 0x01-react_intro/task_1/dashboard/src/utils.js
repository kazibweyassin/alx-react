function getFullYear() {
    return new Date().getFullYear();
}


function getFooterCopy(isIndex) {
    if (!isIndex)  return 'Holberton School main dashboard';
    return 'holberton School';
    
}

//export the functions
export { getFullYear, getFooterCopy };