
const Card = (props) => {

  return (
      <div className={`${props.color}  cardSize border borderRadiusSection`}>
        {props.children}
      </div>
  )
};

export default Card;