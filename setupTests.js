import '@testing-library/jest-dom/extend-expect'
import 'jest-enzyme'

import { configure, mount, shallow } from 'enzyme'

import Adapter from 'enzyme-adapter-react-17-updated'
import { JSDOM } from 'jsdom'

global.shallow = shallow
global.mount = mount
configure({ adapter: new Adapter() })

global.window = new JSDOM('<!doctype html><html><body></body></html>').window
global.document = window.document