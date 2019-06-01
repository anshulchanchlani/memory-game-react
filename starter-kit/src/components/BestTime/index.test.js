import React from 'react'
import {shallow,mount} from 'enzyme';
import BestTime from './index';

describe('Best Time Component Tests',()=>{
    window.localStorage.setItem("best-time-schmemory",12)
    const component = mount(<BestTime/>)
    test('Renders correct best time',()=>{
        expect(component.find('.best-time')).toHaveLength(1)
        expect(component.find('.best-time').find('span')).toHaveLength(1)
        expect(component.find('.best-time').find('span').text()).toEqual("Time to beat: 12 seconds ")
    })
})