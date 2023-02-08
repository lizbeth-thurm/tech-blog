const logout = async () => {
    console.log("top of logout.js");
    const response = await fetch('/api/user/logout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
    });
    if (response.ok) {
        console.log("logout.js is working");
        document.location.replace('/');
        alert('Logout successful');
    } else {
        alert('Unable to logout');
    }
};

document
    .querySelector('#logout-link')
    .addEventListener('click', logout);