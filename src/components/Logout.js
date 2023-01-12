function Logout() {
    localStorage.removeItem('userToken');
    
    return (
        <div className="info">
            <p>You have been logged out!</p>
        </div>
    )
}

export default Logout;