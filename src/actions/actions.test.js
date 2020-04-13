
import * as actions from './index'
import * as types from './actionTypes'

describe('actions', () => {
  it('should add a new book to the redux store ', () => {
    const book = {
        id: 1,
        title: "How to Eat Better",
        quantity: 3,
        imageUrl:
          "https://images-na.ssl-images-amazon.com/images/I/51P%2BL3r-aUL._SX385_BO1,204,203,200_.jpg",
        description:
          'Contrary to popular belief'
      }
    const expectedAction = {
      type: types.ADD_ITEM_TO_BORROWEDLIST,
      book
    }
    expect(actions.addToCart(book)).toEqual(expectedAction)
  })


  it('should remove a new book to the redux store ', () => {
    const book = {
        id: 1,
        title: "How to Eat Better",
        quantity: 3,
        imageUrl:
          "https://images-na.ssl-images-amazon.com/images/I/51P%2BL3r-aUL._SX385_BO1,204,203,200_.jpg",
        description:
          'Contrary to popular belief'
      }
    const expectedAction = {
      type: types.REMOVE_ITEM_FROM_BORROWEDLIST,
      book
    }
    expect(actions.removeFromCart(book)).toEqual(expectedAction)
  })
})