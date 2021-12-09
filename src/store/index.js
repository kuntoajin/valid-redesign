import create from 'zustand'

export const useStore = create(set => ({
  isMenuOpen: false,
  newsModalProps: {
    url: "",
    title: "",
    lower: ""
  },
  handleIsMenu: () => set(state => ({ isMenuOpen: !state.isMenuOpen })),
  handleNewsModalProps: () => set(state => ({newsModalProps: state.newsModalProps})),
  news: "Berita",
  handleNewsFilter: (replaceNews) => set(state => ({news: replaceNews}))
}))