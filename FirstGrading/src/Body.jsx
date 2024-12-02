import PropTypes from 'prop-types';
export default function Body(props) { // props is used to pass info to functional components, Kinda like .json files
    return(
        <div className='feature'>
            <h2> {props.name} </h2>
            <p> {props.description} </p>
            <img src={props.icon} />
        </div>
        
    )
}
Body.defaultProps = {
    name: "InsertNameHere",
    description: "InsertDescriptionHere",
    icon: "https://placehold.co/50x50",
}

// Prop types as a function to check the validity of types passed as props
Body.propTypes = {
    name: PropTypes.string,
    description: PropTypes.number,
    icon: PropTypes.number,
}