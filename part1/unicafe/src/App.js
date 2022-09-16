import { useState } from 'react';

const Header = ({ title }) => <h1>{title}</h1>;

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>;

const Statistic = ({ text, total }) => (
  <p>
    {text} {total}
  </p>
);

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const feedbackTitle = 'give feedback';
  const statisticsTitle = 'statistics';

  return (
    <>
      <Header title={feedbackTitle} />
      <Button
        onClick={() => {
          setGood(good + 1);
        }}
        text='good'
      />
      <Button
        onClick={() => {
          setNeutral(neutral + 1);
        }}
        text='neutral'
      />
      <Button
        onClick={() => {
          setBad(bad + 1);
        }}
        text='bad'
      />
      <Header title={statisticsTitle} />
      <Statistic text='good' total={good} />
      <Statistic text='neutral' total={neutral} />
      <Statistic text='bad' total={bad} />
    </>
  );
};

export default App;
