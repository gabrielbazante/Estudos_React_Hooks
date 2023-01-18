import React from 'react'
import { useReducer } from 'react'
import PageTitle from '../../components/layout/PageTitle'

import {initialState, reducer} from '../../store'
import {number_add2, login} from '../../store/actions'

const UseReducer = (props) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <div className="UseReducer">
            <PageTitle
                title="Hook UseReducer"
                subtitle="Uma outra forma de ter estado em componentes funcionais!"
            />
            <div className="center">
                {state.user ?
                    <span className="text">{state.user.name}</span> :
                    <span className="text">Sem usuario</span>
                }
                <span className="text">{state.number}</span>
                <div>
                    <button className="btn" onClick={() => number_add2(dispatch)}>+2</button>
                    <button className="btn" onClick={() => dispatch({ type: 'multiplyFor7' })}>x7</button>
                    <button className="btn" onClick={() => dispatch({ type: 'divideFor25' })}>/25</button>
                    <button className="btn" onClick={() => dispatch({ type: 'convertToInt' })}>convert to int</button>
                    <button className="btn" onClick={() => dispatch({ type: 'changeNumber', payloadNumber: -100 })}>change number</button>
                    <button className="btn" onClick={() => login(dispatch, 'Gabriel Bazante')}>Login</button>
                </div>
            </div>
        </div>
    )
}

export default UseReducer
