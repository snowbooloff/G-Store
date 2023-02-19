class LocalStorage {
  readonly favorites: string = 'favorites'
  readonly shopping: string = 'shopping'

  getList(category: string): number[] | [] {
    const localStorageList: string | null = localStorage.getItem(category)

    if (localStorageList !== null) {
      return JSON.parse(localStorageList)
    }

    return []
  }

  checkItem(category: string, id: number): boolean {
    const list: number[] = this.getList(category)

    return list.includes(id)
  }

  placeItem(category: string, id: number): boolean {
    const list: number[] = this.getList(category)

    const checkIndex: number = list.indexOf(id)

    let itemStatus: boolean = false

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
