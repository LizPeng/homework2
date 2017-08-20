const Tapable = require('tapable')

class DB extends Tapable {
  constructor(options) {
    // TODO
    super();
    this.options = options
  }

  request() {
    // TODO
    return new Promise( res => {
      res({ retcode: 0, res: { msg: 'hello world' } })
    })
  }
}

module.exports = DB