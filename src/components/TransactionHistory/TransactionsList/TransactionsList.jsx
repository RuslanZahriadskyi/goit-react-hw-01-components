import s from './TransactionsList.module.css';
import PropTypes from 'prop-types';

function TransactionsList({ transactions }) {
  return (
    <tbody>
      {transactions.map(transaction => (
        <tr key={transaction.id} className={s.transaction}>
          <td className={s.info}>{transaction.type}</td>
          <td className={s.info}>{transaction.amount}</td>
          <td className={s.info}>{transaction.currency}</td>
        </tr>
      ))}
    </tbody>
  );
}

TransactionsList.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }),
  ),
};

export default TransactionsList;
