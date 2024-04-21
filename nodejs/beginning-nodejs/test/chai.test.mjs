// ========================================================
// Chai
// ref: https://github.com/chaijs/chai
// ref: https://www.chaijs.com/plugins/chai-datetime/
// ========================================================

// Warning: To load an ES module, set "type": "module" in the package.json or use the .mjs extension.
import * as chai from 'chai'
import cdt from 'chai-datetime' // plugin: chai-datetime
chai.use(cdt)

describe('chai tests', function () {
  it ('assert', function() {
    chai.assert.isNull(null, 'Null should be null')
    chai.assert.isUndefined(undefined, 'Undefined should be undefined')    
  })

  // plugin
  it ('chai-datetime', function() {
    const t1 = new Date()
    chai.assert.equalTime(t1, t1)
    // chai.assert.equalTime(t1, new Date())
    chai.assert.notEqualTime(t1, new Date())
  })

  it ('bdd style assertion', function() {
      const beverages = {tea: ['chai', 'matcha', 'oolong']}
      chai.assert.lengthOf(beverages.tea, 3)
      chai.expect(beverages).to.have.property('tea').with.length(3)
      chai.expect(beverages).property('tea').length(3)
  })
})
