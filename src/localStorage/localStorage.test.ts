import { localStorageUtil } from '@/localStorage'

describe('testing LocalStorage class', () => {
  beforeEach(() => {
    localStorage.clear()
  })

  it('should return an empty array if the category does not exist in localStorage', () => {
    const result = localStorageUtil.getList('non-existent-category')

    expect(result).toEqual([])
  })

  it('should return the list for a given category', () => {
    const list = [1, 2, 3]

    list.forEach((elem) => localStorageUtil.placeItem(localStorageUtil.favorites, elem))

    const result = localStorageUtil.getList(localStorageUtil.favorites)

    expect(result).toEqual(list)
  })

  it('should return false if the item does not exist in the list', () => {
    const list = [1, 2, 3]

    list.forEach((elem) => localStorageUtil.placeItem(localStorageUtil.favorites, elem))

    const result = localStorageUtil.checkItem(localStorageUtil.favorites, 4)

    expect(result).toBe(false)
  })

  it('should return true if the item exists in the list', () => {
    localStorageUtil.placeItem(localStorageUtil.shopping, 2)

    const result = localStorageUtil.checkItem(localStorageUtil.shopping, 2)

    expect(result).toBe(true)
  })
})
