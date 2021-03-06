import { createSelector } from 'reselect';

const cardsSelector = state => state.cards;

export const selectedCardsSelector = createSelector(
  cardsSelector,
  cards => cards.filter(card => card.selected)
)

export const numMatchesSelector = createSelector(
  cardsSelector,
  cards => cards.filter(card => card.matched).length
)
