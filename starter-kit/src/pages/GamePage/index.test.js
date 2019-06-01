import React from 'react'
import {shallow,mount} from 'enzyme';
import GamePage from './index'
import {flipCardTags} from '../../utils'
describe('Test Suite for Game Page',()=>{
    const mockResetGame = jest.fn();
    const component = shallow(<GamePage resetGame={mockResetGame}/>)
    test('Only one Card Container is present',()=>{
        expect(component.find('#card-container')).toHaveLength(1)
    })
    test('There are only 2 cards of a single type',()=>{
        expect(component.find('li')).toHaveLength(2*flipCardTags.length)
    })
})


