/**
 * @jest-environment jsdom
 */

import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import Home from '../pages/index'

let getByTestId;

beforeEach(() => {
  getByTestId = render(<Home/>).getByTestId;
})


test('Is there a title on the page and is that title "Counter"', () => {

  let title = getByTestId('title');
  expect(title).toBeInTheDocument();
  expect(title.textContent).toBe('Counter')

});

//Is there a counter with testId of counter and is the initialValue 0.
test('Is there a counter with testId of counter and is the initialValue 0', () => {
  let counter = getByTestId('counter');
  expect(counter).toBeInTheDocument();
  expect(counter.textContent).toBe('0');
});

//Is there an input with testId input. Is the initialValue of the button 1. If yes, change the value of the input to 5 and see if the value of the input is 5.

test('Is there an input with testId input. Is the initialValue of the button 1. If yes, change the value of the input to 5 and see if the value of the input is 5.', () => {
  let input = getByTestId('input');
  expect(input.value).toBe('1');
  fireEvent.change(input, {
    target:{
      value: '5'
    }
  });
  expect(input.value).toBe('5');
});

//Is there a button with testId addButton. If yes, is the textContent "+"

test('Is there a button with testId addButton. If yes, is the textContent "+"', () => {
  let addButton = getByTestId('addButton');
  expect(addButton).toBeInTheDocument();
  expect(addButton.textContent).toBe('+');
});

//Is there a button with testId subtractButton. If yes, is the textContent "-"

test('Is there a button with testId subtractButton. If yes, is the textContent "-"', () => {
  let subtractButton = getByTestId('subtractButton');
  expect(subtractButton).toBeInTheDocument();
  expect(subtractButton.textContent).toBe('-');
});
//If you change the value of input to 1 and then press the addButton thrice, does the counter change to three.

test('If you change the value of input to 1 and then press the addButton thrice, does the counter change to three.', () => {
  let input = getByTestId('input');
  fireEvent.change(input, {
    target:{
      value: '1'
    }
  });
  let addButton = getByTestId('addButton');
  for (let i = 0; i < 3; i++){
    fireEvent.click(addButton);
  }
  let counter = getByTestId('counter');
  expect(counter.textContent).toBe('3');
});

//If you change the value of input to 1 and then press the subtractButton thrice, does the counter change to -2.

test('If you change the value of input to 1 and then press the subtractButton thrice, does the counter change to -2.', () => {
  let input = getByTestId('input')
  fireEvent.change(input, {
    target:{
      value: '1'
    }
  });
  let subtractButton = getByTestId('subtractButton');
  for(let i=0; i<3; i++){
    fireEvent.click(subtractButton);
  };
  let counter = getByTestId('counter');
  expect(counter.textContent).toBe('-3');
  
})

//If you change the value of input to 50 and press the addButton 3 times and then change the value of input to 20 and hit the subtract button twice, is the counter value 110.

test('If you change the value of input to 50 and press the addButton 3 times and then change the value of input to 20 and hit the subtract button twice, is the counter value 110.', () => {
  let input = getByTestId('input');
  fireEvent.change(input, {
    target:{
      value: '50'
    }
  });
  let addButton = getByTestId('addButton');
  for(let i=0; i< 3; i++){
    fireEvent.click(addButton);
  }
  fireEvent.change(input, {
    target:{
      value:'20'
    }
  });
  let subtractButton = getByTestId('subtractButton');
  for(let i=0; i<2; i++){
    fireEvent.click(subtractButton);
  }
  let counter = getByTestId('counter');
  expect(counter.textContent).toBe('110');

})
//If you change the value of input to 50 and hit the addButton four times, does the text of counter become green.
test('If you change the value of input to 50 and hit the addButton four times, does the text of counter become green.', () => {
  let input = getByTestId('input');
  fireEvent.change(input, {
    target:{
      value: '50'
    }
  });
  let addButton = getByTestId('addButton');
  for(let i=0; i<4; i++){
    fireEvent.click(addButton);
  }
  let counter = getByTestId('counter');
  expect(counter.className).toBe('green');
});
//If you change the value of input to 100 and hit the subtractButton three times, does the text of the counter become red.

test('If you change the value of input to 100 and hit the subtractButton three times, does the text of the counter become red.', () => {
  let input = getByTestId('input');
  fireEvent.change(input, {
    target:{
      value: '100'
    }
  });
  let subtractButton = getByTestId('subtractButton');
  for(let i=0; i<3; i++){
    fireEvent.click(subtractButton);
  }
  let counter = getByTestId('counter');
  expect(counter.className).toBe('red');
});




