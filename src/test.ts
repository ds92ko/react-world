const sum = (a: number, b: number) => {
  return a + b
}

class TestClass {
  constructor() {}
}

/**
 * type narrowing
 * @param params
 * @returns
 */

const validateParameter = (params: unknown) => {
  if (typeof params === 'number') {
    return params
  }

  if (params instanceof TestClass) {
    return params
  }

  return params
}

/**
 * 타입스크립트 제네릭
 */
const $ = <T extends HTMLElement = HTMLDivElement>(selector: string) => {
  return document.querySelector(selector) as T
}

const root = $('#root')
