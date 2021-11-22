import create from 'zustand'

export const useStore = create(set => ({
  isMenuOpen: false,
  handleIsMenu: () => set(state => ({ isMenuOpen: !state.isMenuOpen })),
  increasePopulation: () => set(state => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 })
}))