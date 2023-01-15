function Logout({ setIsLoggedIn }) {
    localStorage.removeItem('userToken');
    setIsLoggedIn(false);
    
    return (
        <div className="info">
            <p>You have been logged out!</p>
        </div>
    )
}

export default Logout;