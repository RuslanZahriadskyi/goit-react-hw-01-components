import s from './TransactionHistory.module.css';
import TransactionsList from './TransactionsList';

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

export default TransactionHistory;
