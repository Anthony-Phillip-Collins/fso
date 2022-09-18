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

export default Course;
