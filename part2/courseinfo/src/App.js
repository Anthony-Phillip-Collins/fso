const Header = ({ course }) => <h1>{course}</h1>;

const Part = ({ name, exercises }) => (
  <p>
    {name} {exercises}
  </p>
);

const Content = ({ parts }) =>
  parts.map((part) => <Part key={part.id} {...part} />);

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
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1,
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2,
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3,
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4,
        },
      ],
    },
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1,
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2,
        },
      ],
    },
  ];

  return courses.map((course) => <Course course={course} key={course.id} />);
};

export default App;
