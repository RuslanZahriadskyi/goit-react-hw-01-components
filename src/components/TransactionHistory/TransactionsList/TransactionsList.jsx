import s from './TransactionsList.module.css';
import PropTypes from 'prop-types';

function TransactionsList({ transactions }) {
  return (
    <tbody>
      {transactions.map(({ type, amount, currency, id }) => (
        <tr key={id} className={s.transaction}>
          <td className={s.info}>{type}</td>
          <td className={s.info}>{amount}</td>
          <td className={s.info}>{currency}</td>
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
