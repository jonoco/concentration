import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchDeck, fetchCards, toggleFaces, newGame } from '../actions/actions';
import Controls from '../components/Controls';
import { numMatchesSelector } from '../selectors';

const mapStateToProps = state => ({
  numMatches: numMatchesSelector(state),
  deck: state.deck_id
});


const mapDispatchToProps = dispatch => {
  return bindActionCreators({ 
    fetchDeck, 
    fetchCards,
    toggleFaces,
    newGame
  }, dispatch);
};


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Controls);
