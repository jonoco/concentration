import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchDeck, fetchCards, toggleFaces, newGame, saveTime } from '../actions/actions';
import Controls from '../components/Controls';
import { numMatchesSelector } from '../selectors';

const mapStateToProps = state => ({
  numMatches: numMatchesSelector(state),
  deck: state.deck_id,
  startTime: state.startTime,
  bestTime: state.bestTime
});


const mapDispatchToProps = dispatch => {
  return bindActionCreators({ 
    fetchDeck, 
    fetchCards,
    toggleFaces,
    newGame,
    saveTime
  }, dispatch);
};


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Controls);
