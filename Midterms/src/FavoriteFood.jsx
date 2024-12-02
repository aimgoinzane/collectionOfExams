import PropTypes from 'prop-types';



export default function FavoriteFood(props) {

    const listItems = props.items.map(item => <li key = {item.id}> <strong> Fruit:</strong> {item.name} <br /> <strong> Color:</strong> {item.color} <br /> <strong>Rating:</strong> {item.rating}</li>)

    return(
        <>
        <h3>{props.category} </h3>
        <ol>{listItems} </ol>
        </>
    )
}

FavoriteFood.defaultProps = {
    category: "I have no favorite fruits",
    items: []
}