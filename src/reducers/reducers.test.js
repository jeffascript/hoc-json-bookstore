import reducer from './borrowedList'
import * as types from '../actions/actionTypes'



const books = {
    id: 1,
    title: "How to Eat Better",
    quantity: 3,
    imageUrl:
      "https://images-na.ssl-images-amazon.com/images/I/51P%2BL3r-aUL._SX385_BO1,204,203,200_.jpg",
    description:
      'Contrary to popular belief'
  }

describe('borrowedList reducer', () => {
  it('should return the initial state', () => {
    expect(reducer({ myBooks: []},{}).myBooks).toEqual([
     
    ])
  })

  it('should handle addition of book into the BORROWEDLIST & update the copies of the book borrowed to quantity === 1 ', () => {
    expect(
      reducer({ myBooks: []}, {
        type: types.ADD_ITEM_TO_BORROWEDLIST,
         payload: books
      }).myBooks
    ).toEqual(  [
        {
            id: 1,
            title: "How to Eat Better",
            quantity: 1,
            imageUrl:
              "https://images-na.ssl-images-amazon.com/images/I/51P%2BL3r-aUL._SX385_BO1,204,203,200_.jpg",
            description:
              'Contrary to popular belief'
          }
    ])

   
  })

  it('should handle removal of item from BorrowedList', () => {
    expect(
      reducer({ myBooks: [books]}, {
        type: types.REMOVE_ITEM_FROM_BORROWEDLIST,
         payload: books
      }).myBooks
    ).toEqual(  [
       
    ])

   
  })


})
