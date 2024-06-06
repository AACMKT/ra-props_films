import Star from './Star'


function Stars({count, id}) {
  return (
    <ul className="card-body-stars u-clearfix">
      {Array.from(Array(count).keys()).map((_, index) => (
        <li key={ id + '-' + index }><Star /></li>
      ))}
    </ul>
  );
}
export default Stars