import PropTypes from 'prop-types';

const Statistics = ({ good, neutral, bad, total, percentage }) => {
   return (
      <div>
         <p>
            Good:<span>{good}</span>
         </p>
         <p>
            Neutral:<span>{neutral}</span>
         </p>
         <p>
            Bad:<span>{bad}</span>
         </p>
         <p>
            Total:<span>{total}</span>
         </p>
         <p>
            Positive feedback:
            <span>{percentage}%</span>
         </p>
      </div>
   );
};

Statistics.propTypes = {
   good: PropTypes.number.isRequired,
   neutral: PropTypes.number.isRequired,
   bad: PropTypes.number.isRequired,
   total: PropTypes.number.isRequired,
   percentage: PropTypes.number.isRequired,
};

export default Statistics;