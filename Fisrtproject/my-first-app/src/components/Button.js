import Proptypes from 'prop-types'
const Button = (props) => {
    return (
        <>
            <button className='btn' style={{ backgroundColor: props.color }}>{props.text}</button>
        </>
    )
}
Button.defaultProps = {
    color: 'black',
    text: 'Hello',
}
Button.protoTypes = {
color : Proptypes.string,
text : Proptypes.string,
}


export default Button
