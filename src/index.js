import './styles.css';
import { createBoard, resetBoard } from "./knight.js";

document.addEventListener('DOMContentLoaded', () => {
    createBoard()

    const resetBtn = document.getElementById('resetBtn')
    if (resetBtn) {
        resetBtn.addEventListener('click', resetBoard)
    }

    const knightInfoBtn = document.getElementById('knight-info-btn')
    const closeKnightModal = document.getElementById('close-knight-modal')
    const knightModalOverlay = document.getElementById('knight-modal-overlay')

    if (knightInfoBtn && closeKnightModal && knightModalOverlay) {
        knightInfoBtn.addEventListener('click', () => {
            knightModalOverlay.style.display = 'flex'
        })

        closeKnightModal.addEventListener('click', () => {
            knightModalOverlay.style.display = 'none'
        })

        knightModalOverlay.addEventListener('click', (e) => {
            if (e.target === knightModalOverlay) {
                knightModalOverlay.style.display = 'none'
            }
        })
    } else {
        console.warn('Modal elements are missing from the DOM.')
    }
})
