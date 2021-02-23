import TransactionsList from './TransactionsList';
import PropTypes from 'prop-types';
import s from './TransactionHistory.module.css';

function TransactionHistory({ items }) {
  return (
    <table className={s.history}>
      <thead>
        <tr className={s.title__container}>
          <th className={s.title}>Type</th>
          <th className={s.title}>Amount</th>
          <th className={s.title}>Currency</th>
        </tr>
      </thead>

      <TransactionsList transactions={items} />
    </table>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.array.isRequired,
};

export default TransactionHistory;
