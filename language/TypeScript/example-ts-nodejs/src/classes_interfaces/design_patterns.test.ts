import { describe, expect, test } from "@jest/globals";

/**
 * Example in 'Programming TypeScript' - 5. Classes and Interfaces - Design Patterns
 * 
 * - Factory Pattern
 * - Builder Patterns
 */

/**
 * Factory Pattern
 */

type Shoe = {
  purpose: string
}

class BalletFlat implements Shoe {
  purpose = 'dancing'
}

class Boot implements Shoe {
  purpose = 'woodcutting'
}

class Sneaker implements Shoe {
  purpose = 'walking'
}

// the shoe factory
let Shoe = {
  create(type: 'balletFlat' | 'boot' | 'sneaker'): Shoe {
    switch (type) {
      case 'balletFlat': return new BalletFlat
      case 'boot': return new Boot
      case 'sneaker': return new Sneaker
    }
  }
}

/**
 * Builder Patterns: this result type
 */

class RequestBuilder {
  private data: object | null = null
  private method: 'get' | 'post' | null = null
  private url: string | null = null

  setMethod(method: 'get' | 'post'): this {
    this.method = method
    return this
  }

  setURL(url: string): this {
    this.url = url
    return this
  }

  setData(data: object): this {
    this.data = data
    return this
  }

  send() {
    console.log(`Request: ${this.method} ${this.url}\n${JSON.stringify(this.data)}`)
  }
}




/**
 * Example in 'Programming TypeScript' - 6. Advanced Types - Companion Object Pattern
 */
type Currency = { // as type
  unit: 'EUR' | 'GBP' | 'JPY' | 'USD'
  value: number
}

let Currency: any = { // as value
  DEFAULT: 'USD',
  from(value: number, unit = Currency.DEFAULT): Currency {
    return { unit, value }
  }
}

/*******************************************************************************
Tests
*******************************************************************************/
describe("design patterns", () => {
  test('factory pattern', () => {
    let boot = Shoe.create('boot')
    expect(boot.purpose).toBe('woodcutting')
  })

  test('builder pattern', () => {
    new RequestBuilder()
      .setMethod('get')
      .setURL('/users')
      .setData({ firstName: 'Anna' })
      .send()
  })

  test('companion object pattern', () => {
    let amoutDue: Currency = { // Currency as a type
      unit: 'JPY',
      value: 123.0
    }
    let otherAmountDue = Currency.from(123.0, 'JPY') // Currency as a value
    expect(otherAmountDue).toEqual(amoutDue)
  })

})