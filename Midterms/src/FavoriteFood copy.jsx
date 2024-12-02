import PropTypes from 'prop-types';



export default function FavoritePorkDish(props) {

    const listItems = props.items.map(item => <li key = {item.id}><strong> {item.name}</strong>: &nbsp; {item.color} {item.rating}</li>)

    return(
        <>
        <h3>{props.category} </h3>
        <ol>{listItems} </ol>
        </>
    )
}

FavoritePorkDish.defaultProps = {
    category: "I have no favorite pork dish",
    items: []
}