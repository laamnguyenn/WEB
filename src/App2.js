import "./App.css"

function User({name, pic}){
    return (
        <section>
            <img className="user-profile-pic" src={pic} alt={name} />
            <h2 className="user-name">
                Hello, <span className="user-first-name">{name}</span>
            </h2>
        </section>
    )
}
function App(){
    // const names = ["Cuban", "Biden", "Donnal"];
    // Return (
    //      <div className="App">
    //               {names.map((nm) =>(<User name= {nm} />))}
    //      </div>
    // )
    const users = [{
        name: "Cuban",
        pic : "https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/92/92b33162451def41183396c2440c0e4569553422.jpg"

    },
    {
        name: "Biden",
        pic : "https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/a5/a5c683e36930a8191d7ec5047fb72193fa1ea574.jpg"
    },
    {
        name: "Donnal",
        pic: "https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/dc/dc98723ede4bbd6ac4591fda45dbd9a43e96f7f5.jpg"
    }
]
return (
    <div className="App">
        {users.map((user) => (
            <User name={user.name} pic={user.pic} />
        ))}
    </div>
    )
}
export default App;