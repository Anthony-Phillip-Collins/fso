const Header = ({ course }) => <h1>{course}</h1>;

const Part = ({ title, exercises }) => (
  <p>
    {title} {exercises}
  </p>
);

const Content = ({ parts }) =>
  parts.map((part, indx) => <Part key={indx} {...part} />);

const Total = ({ total }) => <p>Number of exercises {total}</p>;

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
