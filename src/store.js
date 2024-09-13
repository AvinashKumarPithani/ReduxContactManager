import {cerateSrore} from 'redux'
import { reducer } from './reducer'

export const store = cerateSrore(reducer)