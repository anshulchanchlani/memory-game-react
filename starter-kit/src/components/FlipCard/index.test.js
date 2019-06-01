import React from 'react'
import {shallow,mount} from 'enzyme';
import FlipCard from './index';
import {flipCardTags} from '../../utils'
describe('Component Tests: FlipCard',()=>{
    test('Renders a single flip card',()=>{
        const mockFn = jest.fn();
        const component = mount(<FlipCard card={flipCardTags[0]} id={flipCardTags[0]+1} onClick={mockFn}/>)
        expect(component.find('section')).toHaveLength(1)
        component.find('section').find('div').first().simulate('click')
        expect(mockFn).toHaveBeenCalledTimes(1)
        expect(component.find('.front').find('img')).toHaveLength(1)
        expect(component.find('.back').find('img')).toHaveLength(1)

    })
})