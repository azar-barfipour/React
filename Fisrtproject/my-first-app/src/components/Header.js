import Button from "./Button"

const Header = (props) => {
    const onClick = () => {
        console.log('hiiiiiiiiiii')
    }
    return (
        <header className='header'> 
            <h1>{props.title}</h1>
            <Button text='Add' color='green' onClick={onClick}/>
            <Button text='edit' color='blue'/>
            <Button text='sum' color='darkblue'/>
            <Button text='hi' color='red'/>
        </header>
    )
}

export default Header
