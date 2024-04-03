function getFullYear() {
    return new Date().getFullYear();
}


function getFooterCopy(isIndex) {
    if (!isIndex)  return 'Holberton School main dashboard';
    return 'holberton School';
}

function getLatestNotification() {
    return {
        __html: '<strong>Urgent requirement</strong> - complete by EOD'
    };
}

//export the functions
export { getFullYear, getFooterCopy, getLatestNotification };