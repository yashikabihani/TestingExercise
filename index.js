const describe = (desc, fn) => {
    console.log(desc)
    fn()
  }
  
  const it = (msg, fn) => describe('  ' + msg, fn)
  
  const matchers = (exp) => ({
    toBe: (asssertion) => {
      if (exp === assertion) {
        console.log('pass')
        return true
      } else {
        console.log('fail')
        return false
      }
    }
  })
  
  const expect = (exp) => matchers(exp)
  
  function add(a, b) {
    return a + b 
  }
  
  describe('add', () => {
    it('adds two numbers', () => {
      const result = add(1, 2)
      expect(result).toBe(3)
    })
  })

  function subtract(a, b) {
    return a - b 
  }
  
  describe('subtract', () => {
    it('subtracts two numbers', () => {
      const result = subtract(5,2)
      expect(result).toBe(3)
    })
  })

  function multiply(a, b) {
    return a * b 
  }
  
  describe('multiply', () => {
    it('multiplies two numbers', () => {
      const result = multiply(1, 2)
      expect(result).toBe(2)
    })
  })

  function divide(a, b) {
    return a / b 
  }
  
  describe('divide', () => {
    it('divides two numbers', () => {
      const result = divide(9,9)
      expect(result).toBe(1)
    })
  })
  
  module.exports = {
    describe,
    expect,
    it,
    matchers
  }
