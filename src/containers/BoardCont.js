import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchDeck, fetchCards, matchCards, selectCard, deselectCards } from '../actions/actions';
import Board from '../components/Board';
import { selectedCardsSelector, numMatchesSelector } from '../selectors';

const mapStateToProps = state => ({
  cards: state.cards,
  selectedCards: selectedCardsSelector(state),
  deck: state.deck_id,
  numMatches: numMatchesSelector(state),
  showFaces: state.showFaces
});


const mapDispatchToProps = dispatch => {
  return bindActionCreators({ 
    fetchDeck, 
    fetchCards, 
    matchCards,
    selectCard,
    deselectCards
  }, dispatch);
};


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Board);
