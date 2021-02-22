import s from './StatisticsList.module.css';
import PropTypes from 'prop-types';

function getRandomColor() {
  const r = function () {
    return Math.floor(Math.random() * 256);
  };
  return 'rgb(' + r() + ',' + r() + ',' + r() + ')';
}

function StatisticsList({ items }) {
  return (
    <ul className={s.statList}>
      {items.map(({ id, label, percentage }) => (
        <li
          className={s.item}
          key={id}
          style={{ backgroundColor: getRandomColor(255) }}
        >
          <span className={s.label}>{label}</span>
          <span className={s.percentage}>{percentage}%</span>
        </li>
      ))}
    </ul>
  );
}

StatisticsList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ),
};

export default StatisticsList;
