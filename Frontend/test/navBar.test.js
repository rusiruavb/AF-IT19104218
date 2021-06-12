import React from 'react';
import NavBar from '../src/components/navBar';
import { mount } from 'enzyme';

describe('NavBar unit testing', () => {
  test('NavBar branding', () => {
    let wrapper = mount(<NavBar/>);
    let navbarBrand = wrapper.find('.navbar-brand');
    expect(navbarBrand.text()).toBe('Sample');
  });

  test('NavBar item 1', () => {
    let wrapper = mount(<NavBar/>);
    let navbarItem = wrapper.find('.nav-link');
    expect(navbarItem.find('a').at(0).text()).toBe('Page 1');
  });

  test('NavBar item 2', () => {
    let wrapper = mount(<NavBar/>);
    let navbarItem = wrapper.find('.nav-link');
    expect(navbarItem.find('a').at(1).text()).toBe('Page 2');
  });
})
