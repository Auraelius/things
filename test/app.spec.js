const { expect } = require('chai')
const supertest = require('supertest')
const app = require('../src/app')

describe('App', () => {
  it('GET / responds with 200 containing "Hello, visitor!"', () => {
    return supertest(app)
      .get('/')
      .expect(200, 'Hello, visitor!')
  })
})
