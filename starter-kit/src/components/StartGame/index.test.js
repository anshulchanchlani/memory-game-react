import React from 'react'
import {shallow,mount} from 'enzyme';
import StartGame from './index';

describe('Component Tests: StartGame',()=>{
    test('Renders the start game button',()=>{
        const mockFn = jest.fn();
        const startGame = false;
        const component = mount(<StartGame signalStartGame={mockFn} startGame={startGame}/>)
        component.find('button').simulate('click');
        expect(mockFn).toHaveBeenCalledTimes(1)
    })
    test('No Button renders when game has stared',()=>{
        const mockFn = jest.fn();
        const startGame = true;
        const component = mount(<StartGame signalStartGame={mockFn} startGame={startGame}/>)
         
        expect(component.find('button')).toHaveLength(0)
    })
})