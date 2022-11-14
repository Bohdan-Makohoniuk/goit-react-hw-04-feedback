
import PropTypes from 'prop-types';
import {Btn, ContainerBtn} from './FeedbackOptions.styled'
const FeedbackOptions = ({ options, onLeaveFeedback }) => {
   return (
      <div>
         {options.map(name => {
            return (
               <ContainerBtn key={name}>
                  <Btn
                     onClick={() => onLeaveFeedback(name)}
                     type="button"
                     name={name}
                  >
                     {name}
                  </Btn>
               </ContainerBtn>
            );
         })}
      </div>
   );
};

FeedbackOptions.propTypes = {
   options: PropTypes.arrayOf(PropTypes.string.isRequired),
   onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;