export const Book = (props) => {
  return (
    <div>
      <h2>{props.title}</h2>
      <p>Subtitle: {props.subtitle}</p>
      <p>Author: {props.author}</p>
      <p>Price: {props.price} $</p>
    </div>
  );
};
