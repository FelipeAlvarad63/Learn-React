import { useState } from 'react'
import './App.css'
import { XCardFollow } from './XCardFollow'

const users = [
    {
        userName: 'FelipeAlvarad63',
        name: 'Felipe Alvarado',
        isFollowing: true
    },
    {
        userName: 'midudev',
        name: 'Miguel Ángel Durán',
        isFollowing: false
    },
    {
        userName: 'goncy',
        name: 'Gonzalo Pozzo',
        isFollowing: true
    }
]

export function App() {
    const [count, setCount] = useState(1)

    const handleCount = () => {
        setCount(count + 1)
    }

    const handleDecrementCount = () => setCount(count - 1)

    return (
        <>
            <h1 className="ra-container-title">Hello react! {count}</h1>

            {
                users.map(({ userName, name, isFollowing }) => {
                    return (
                        <XCardFollow userName={userName} initialIsFollowing={isFollowing}>
                            {name}
                        </XCardFollow>
                    )
                })
            }

            <button onClick={handleCount}>
                Aumentar contador
            </button>

            <button onClick={handleDecrementCount}>
                Decrementar contador
            </button>
        </>
    )
}