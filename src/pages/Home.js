import avatar from '../images/avatar.png'

function Home() {
    return (
        <>
        <div className="home">
        <img src={avatar} className="avatar" alt="avatar"></img>
        </div>
        
        </>
    );
}

export default Home;