const sinon = require('sinon');
const { expect } = require('chai');
const { after, before, describe } = require('mocha');
const { MongoClient, ObjectId } = require('mongodb');
const { MongoMemoryServer } = require('mongodb-memory-server');
const mongoConnection = require('../../models/connection');
const create = require('../../models/document/create');
const get = require('../../models/document/get');
const update = require('../../models/document/update');
const remove = require('../../models/document/remove');

describe('Testing models for List', async () => {
  let connectionMock;

  const expectedResult = [
    {
      _id: ObjectId('619cf05c1b42550e2b16e9cf'),
      title: 'Item number 1',
      status: 'Pendente',
      date: '2022-02-16T20:00:02.407Z',
    },
    {
      _id: ObjectId('619cf063a26f8e92eba04a61'),
      title: 'Item number 2',
      status: 'Em andamento',
      date: '2022-02-17T20:00:02.407Z',
    },
    {
      _id: ObjectId('619cf068c52972fb58fb6bad'),
      title: 'Item number 3',
      status: 'Pronto',
      date: '2022-02-18T20:00:02.407Z',
    },
  ];

  before(async() => {
    const DBServer = await MongoMemoryServer.create();
    const URIMock = DBServer.getUri();

    connectionMock = await MongoClient
      .connect(URIMock, {
        useNewUrlParser: true,
      })
      .then((connect) => connect.db('ToDoList'));
    sinon.stub(mongoConnection, 'conn').resolves(connectionMock);
  });

  after(async () => {
    await mongoConnection.conn.restore();
  });

  describe('Check if returns the data correcly', () => {
    before(async () => {
      await connectionMock.collection('list').insertMany(expectedResult);
    });

    after(async () => {
      await connectionMock.collection('list').drop();
    });
    it('returns the expectedResult on get', async () => {
      const response = await get();
      expect(response).to.be.deep.equal(expectedResult);
    });
  });
  describe('Check when result is empty', () => {
    it('is an array', async () => {
      const response = await get();
      expect(response).to.be.a('array');
    });

    it('is an empty array', async () => {
      const response = await get();
      expect(response).to.have.length(0);
    });
  });

  describe('Testing create for List', () => {
    afterEach(async () => {
      await connectionMock.collection('list').drop();
    });
    it('returns the objected created', async () => {
      const response = await create(expectedResult[0]);
      expect(response).to.be.deep.equal(expectedResult[0]);
    });
  });

  describe('Testing remove for List', () => {
    beforeEach(async () => {
      await connectionMock.collection('list').insertMany(expectedResult);
    });

    afterEach(async () => {
      await connectionMock.dropCollection('list');
    })

    it('returns the object that was deleted', async () => {
      const response = await remove(expectedResult[0]._id);
      expect(response.value).to.be.deep.equal(expectedResult[0]);
    });
  });

  describe('Testing update for List', () => {
    const itemUpdated = {
      _id: ObjectId('619cf05c1b42550e2b16e9cf'),
      title: 'After update',
      status: 'Pronto',
    };

    beforeEach(async () => {
      await connectionMock.collection('list').insertMany(expectedResult);
    });
    
    afterEach(async () => {
      await connectionMock.collection('list').drop();
    });

    it('Returns the object after update', async () => {
      const response = await update(itemUpdated._id, itemUpdated);
      expect(response).to.be.deep.equal(itemUpdated);
    });
  });
});
