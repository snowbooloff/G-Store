class LocalStorage {
  constructor() {
    this.favorites = 'favorites'
    this.shopping = 'shopping'
  }

  getList(category) {
    const localStorageList = localStorage.getItem(category)
    if (localStorageList !== null) {
      return JSON.parse(localStorageList)
    }
    return []
  }

  placeItem(category, id) {
    let list = this.getList(category)
    const checkIndex = list.indexOf(id)
    let itemStatus = false

    if (checkIndex == -1) {
      list.push(id)
      itemStatus = true
    } else {
      list.splice(checkIndex, 1)
    }

    localStorage.setItem(category, JSON.stringify(list))

    return itemStatus
  }
}

export const localStorageUtil = new LocalStorage()
