import { getMongoDBUrl, getMongoDBDatabase } from "../config.js"
import { MongoClient } from 'mongodb'
import fs from 'fs'
import { JSV } from 'JSV'

export function route(app) {
  // ========================================================
  // MongoDB Connection
  // ========================================================
  const mongoClient = new MongoClient(getMongoDBUrl())
  var collection

  // ========================================================
  // JSV Schema Validation
  // ========================================================
  var modelSchemaMap = { 'user': {} }
  var validator = JSV.createEnvironment()

  function loadSchema(schemaName, schemaPath) {
    fs.readFile(schemaPath, 'utf8', function (err, data) {
      modelSchemaMap[schemaName] = JSON.parse(data);
    });
  };
  function checkSchema(model, object, callback) {
    const schema = modelSchemaMap[model]
    const result = validator.validate(object, schema)
    callback(result.errors)
  }

  (async function () {
    var schemaName
    for (schemaName in modelSchemaMap) {
      let schemaPath = `src/server/route/${schemaName}.json`
      loadSchema(schemaName, schemaPath)
    }
    console.log(`Load JSV schema: ${modelSchemaMap}`)

    console.log('Connect to MongoDB')
    await mongoClient.connect()
    collection = mongoClient.db(getMongoDBDatabase()).collection('user')
  })()

  // ========================================================
  // API Routes
  // ========================================================

  app.all('/api/:model/*?', function (req, res, next) {
    res.contentType('json')
    next()
  })

  app.get('/api/:model', async function (req, res) {
    res.send(await collection.find().toArray())
  })

  app.post('/api/:model', function (req, res) {
    const model = req.params.model
    const object = req.body
    checkSchema(model, object, function (errors) {
      if (errors.length === 0) {
        // do insert
      } else {
        res.send({
          error_msg: 'Input not valid',
          errors: errors
        })
      }
    })

    res.send({ title: req.params.model })
  })

  app.get('/api/:model/:id', function (req, res) {
    res.send({ title: req.params.model })
  })

  app.delete('/api/:model/:id', function (req, res) {
    res.send({ title: req.params.model })
  })
}