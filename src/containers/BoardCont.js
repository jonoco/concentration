import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchDeck, fetchCards, matchCards } from '../actions/actions';
import Board from '../components/Board';
import { cardsSelector, deckSelector } from '../selectors';

const mapStateToProps = state => ({
  cards: state.cards,
  deck: state.deck_id
});


const mapDispatchToProps = dispatch => {
  return bindActionCreators({ 
    fetchDeck, 
    fetchCards, 
    matchCards 
  }, dispatch);
};


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Board);
