export default function Service(props){

    return(
        <div className="service">
            <img className="service__image" src={props.image} alt={props.title}/>
            <h3 className="service__title">{props.title}</h3>
            <p className="service__description">{props.description}</p>
            <p className="service__price">Starting at ${props.price}</p>
        </div>
    );
}