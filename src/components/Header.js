import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({ title, onAdd, showAdd }) => {
    const onClick = () => {
    }
    return (
        <header className="header">
            <h1>{title}</h1>
            <Button onClick={onAdd} color="rgb(0,145,0,0.7)" text={showAdd ? "Close" : "Add"}/>
        </header>
    )
}

Header.defaultProps = {
    title: "Task Tracker"
}

Header.propTypes = {
    title: PropTypes.string.isRequired
}

export default Header
