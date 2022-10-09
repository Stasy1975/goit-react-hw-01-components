import PropTypes from 'prop-types';
import css from './statistics.module.css'

export const Statistics = ({ title, stats }) => (
    <section className={css.statistics}>
        {title &&(<h2 className={css.title}>{title}</h2> )
                   }
  

  <ul className={css.stat__list}>
            
            {stats.map(({ id, label, percentage }) => (
                <li className={css.stat__item} key={id}>
                    <span className={css.label}>{label}</span>
                    <span className={css.percentage}>{percentage}%</span>
                </li>))}

  </ul>
</section>
)

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
        PropTypes.exact({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired,
        }),
    ),
};
