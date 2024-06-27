import React, { forwardRef } from 'react'

const ResultModal = forwardRef(function ResultModal({result, targetTime}, ref) {
    return (
    <dialog ref={ref}>
        <h2>Your {result}</h2>
        <p>The target time was <strong>{targetTime} seconds.</strong></p>
        <p>You stop the timer with <strong>X seconds left</strong>.</p>
        <form method="dialog">
            <button>Close</button>
        </form>
    </dialog>
    )
    }
)


export default ResultModal