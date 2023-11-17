import './App.css';

function withStyle(Component){
    return (props) => {
        const style = {
            color : "red",
            fontSize : "1em",
            ...props.style,
        };
        return <Component{...props} style={style} />;
    }
}

const Text = ({style = {} }) => (
    <p style={{...style, fontFamily:"Inter"}}> MamaMia</p>
);
const StyleText = withStyle(Text);

function Welcome({name}) {
    return(
        <section>
            <h1>Hello, <span>{name}</span>!</h1>
        </section>
    )
    }

    function App(){
        return(
            <div className='App'>
                <Welcome name="Laam" />
                <Text />
                <StyleText />
            </div>
        )
        }
        function User(){
            const name = "Laam"
            const pic = "https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/b0/b09c515862dc49b4138a68222528a64fe263e7a7.jpg"
            return (
                <section>
                    <img className='user-profile-pic' src={pic} alt={name} />
                    <h2 className='user-name'>
                        Hello, <span className='user-first-name'>{name}</span>
                    </h2>
                </section>
            )
        }
        export default User;