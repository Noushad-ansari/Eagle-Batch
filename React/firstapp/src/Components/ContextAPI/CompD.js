import React from 'react'
import { ContextConsumer } from './UserContext'

export default function CompD() {
    return (
        <div>
            <ContextConsumer>
                {
                    (abc) => {
                        return <div>
                            Hello ji  {abc} bhaiy
                        </div>
                    }
                }
            </ContextConsumer>
        </div>
    )
}
