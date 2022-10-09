import css from "./Transactions.module.css";
import PropTypes from 'prop-types';

export default function TransactionsHistory({ transactions }) {
    return (
        <table className={css.transactionhistory} >
            <thead className={css.header}>
                <tr>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                </tr>
            </thead>

            <tbody className={css.list}>
                {transactions.map(({ type, amount, currency, id }) => (
                    <tr className={css.item}
                        key={id}>
                        <td>{type}</td>
                        <td>{amount}</td>
                        <td>{currency}</td>
                    </tr>))}
            </ tbody>
        </table >
    )
}

TransactionsHistory.propTypes = {
       transactions: PropTypes.arrayOf(
        PropTypes.exact({
            id: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            amount: PropTypes.number.isRequired,
            currency: PropTypes.string.isRequired,
        }),
    ),
};