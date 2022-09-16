const Header = ({ course }) => <h1>{course}</h1>;

const Part = ({ name, exercises }) => (
  <p>
    {name} {exercises}
  </p>
);

const Content = ({ parts }) =>
  parts.map((part, indx) => <Part key={indx} {...part} />);

const Total = ({ parts }) => {
  return (
    <strong>
      total of{' '}
      {parts && parts.length > 0
        ? parts.reduce((total, { exercises }) => total + exercises, 0)
        : 0}{' '}
      exercises
    </strong>
  );
};

const Course = ({ course: { name, parts } }) => (
  <>
    <Header course={name} />
    <Content parts={parts} />
    <Total parts={parts} />
  </>
);

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      { name: 'Fundamentals of React', exercises: 10 },
      { name: 'Using props to pass data', exercises: 7 },
      { name: 'State of a component', exercises: 14 },
      { name: 'Redux', exercises: 11 },
    ],
  };

  return <Course course={course} />;
};

export default App;
