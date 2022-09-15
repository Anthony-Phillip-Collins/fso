const Header = (props) => <h1>{props.course}</h1>;

const Content = (props) =>
  props.parts.map((part, indx) => (
    <p key={indx}>
      {part.title} {part.exercises}
    </p>
  ));

const Total = (props) => <p>Number of exercises {props.total}</p>;

const App = () => {
  const course = 'Half Stack application development';

  const parts = [
    { title: 'Fundamentals of React', exercises: 10 },
    { title: 'Using props to pass data', exercises: 7 },
    { title: 'State of a component', exercises: 14 },
  ];

  const total = parts.map(({ exercises }) => exercises).reduce((a, b) => a + b);

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total total={total} />
    </div>
  );
};

export default App;
