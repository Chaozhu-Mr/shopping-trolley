import axios from 'axios'
import adapter from 'axios-mock-adapter'
import data from './data'

const mock = new adapter(axios)

mock.onGet('/data').reply(200,data)