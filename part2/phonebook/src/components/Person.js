const Person = ({ name, number, id, onDelete }) => (
  <li>
    {id} {name} {number}{' '}
    <button
      onClick={() => {
        onDelete({ name, number, id });
      }}
    >
      delete
    </button>
  </li>
);

export default Person;
