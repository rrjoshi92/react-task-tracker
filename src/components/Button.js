import PropTypes from 'prop-types'

function Button({text, onClick, color}) {
    return (
        <button onClick={onClick} className="btn" style={{ backgroundColor: color }}>{text}</button>
    )
}

Button.defaultProps = {
    text: "Add"
}

Button.propTypes = {
    text: PropTypes.string.isRequired
}

export default Button

