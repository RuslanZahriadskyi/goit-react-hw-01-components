import s from './Statistics.module.css';
import PropTypes from 'prop-types';
import StatisticsList from './StatisticsList';

function Statistics({ title, items }) {
  return (
    <section className={s.section}>
      {title && <h2 className={s.title}>{title}</h2>}
      <StatisticsList items={items} />
    </section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
};

export default Statistics;
