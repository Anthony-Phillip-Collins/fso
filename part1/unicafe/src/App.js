import { useState } from 'react';

const Header = ({ title }) => <h1>{title}</h1>;

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>;

const StatisticLine = ({ text, total }) => (
  <tr>
    <td>{text}</td>
    <td>{total}</td>
  </tr>
);

const Statistics = ({ title, good, neutral, bad }) => {
  const all = () => good + neutral + bad;
  const average = () => (all() > 0 && (good - bad) / all()) || 0;
  const positive = () => `${(all() > 0 && (good / all()) * 100) || 0}%`;

  return (
    <>
      <Header title={title} />
      {(all() === 0 && <p>No feedback given</p>) || (
        <table>
          <tbody>
            <StatisticLine text='good' total={good} />
            <StatisticLine text='neutral' total={neutral} />
            <StatisticLine text='bad' total={bad} />
            <StatisticLine text='all' total={all()} />
            <StatisticLine text='average' total={average()} />
            <StatisticLine text='positive' total={positive()} />
          </tbody>
        </table>
      )}
    </>
  );
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <>
      <Header title='give feedback' />

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

      <Statistics title='statistics' {...{ good, neutral, bad }} />
    </>
  );
};

export default App;
