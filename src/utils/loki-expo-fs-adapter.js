export default class LokiExpoFsAdapter {
  constructor() {
    this.fs = require('expo-file-system');
  }

  loadDatabase(dbname, callback) {
    let self = this;

    let dbpath = this.fs.documentDirectory + '/' + dbname;
    //console.log(dbpath)
    self.fs.getInfoAsync(dbpath).then(stats=>{
      //console.log(stats)
      if (stats.exists){
        self.fs.readAsStringAsync(dbpath, {
          encoding: self.fs.EncodingType.UTF8
        }).then(data=>{
          //console.log(data)
          callback(data)
        }).catch(err=>{
          //console.log(err)
          callback(new Error(err));
        })
      }
    }).catch(err=>{
      callback(err)
    })
  }

  /**
   * saveDatabase() - save data to file, will throw an error if the file can't be saved
   * might want to expand this to avoid dataloss on partial save
   * @param {string} dbname - the filename of the database to load
   * @param {function} callback - the callback to handle the result
   * @memberof LokiFsAdapter
   */

  saveDatabase(dbname, dbstring, callback) {
    let self = this;
    let dbpath = this.fs.documentDirectory + '/' + dbname;
    this.fs.writeAsStringAsync(dbpath,dbstring)
    .then(data=>{
      //console.log(data)
      callback(data)
    })
    .catch(err=>{
      //console.log(data)
      callback(err)
    })
  }

  /**
   * deleteDatabase() - delete the database file, will throw an error if the
   * file can't be deleted
   * @param {string} dbname - the filename of the database to delete
   * @param {function} callback - the callback to handle the result
   * @memberof LokiFsAdapter
   */

  deleteDatabase(dbname, callback) {
    let dbpath = this.fs.documentDirectory + '/' + dbname;
    this.fs.deleteAsync(dbpath).then(()=>{
      callback()
    }).catch(err=>{
      callback(err)
    })
  }

}
