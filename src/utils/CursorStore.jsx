import { create } from 'zustand'

export const useCursorStore = create((set) => ({
    displaying: true,
    isHoveringButton: false,
    buttonDimensions: { width: 0, height: 0 },
    setDisplaying: (displaying) => set({ displaying: !displaying }),
    setIsHoveringButton: (isHoveringButton) => set({ isHoveringButton: isHoveringButton }),
    setButtonDimensions: (newWidth, newHeight) => set({ buttonDimensions: { width: newWidth, height: newHeight } }),
}))