class LocalStorage {
  public favorites: string = 'favorites'
  public shopping: string = 'shopping'

  getList(category: string) {
    const localStorageList = localStorage.getItem(category)
    if (localStorageList !== null) {
      return JSON.parse(localStorageList)
    }
    return []
  }

  checkItem(category: string, id: number) {
    const list = this.getList(category)
    return list.includes(id)
  }

  placeItem(category: string, id: number) {
    const list = this.getList(category)
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
