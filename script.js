function displayModal (status) {
    if (status)
        document.getElementById('successMsg').style.display = 'block';
    else
        document.getElementById('successMsg').style.display = 'none';
}