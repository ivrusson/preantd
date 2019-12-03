import Loki from 'lokijs';
import LokiExpoFsAdapter from '../utils/loki-expo-fs-adapter';
import {
  DB_FILENAME
} from '../constants/Globals';


export default class Storage {

  db;
  filename;
  options = {};
  classes = {};

  constructor() {
    this.filename = DB_FILENAME;
    this.options = {
      // optional options
      // autoload: true,
      // autoloadCallback : lokidb_loadHandler,
      // autosave: true,
      // autosaveInterval: 10000,
      adapter: new LokiExpoFsAdapter()
    };
    this.db = new Loki(this.filename, this.options);
    this.init();
  }

  init() {
    let self = this;
    return new Promise(resolve => {
      self.db.loadDatabase({}, () => {

        // Initialize all the needed classes here

        self.classes['User'] = self.db.getCollection('User');
        if (self.classes['User'] === null) {
          self.classes['User'] = self.db.addCollection('User');
        }

        self.classes['Todo'] = self.db.getCollection('Todo');
        if (self.classes['Todo'] === null) {
          self.classes['Todo'] = self.db.addCollection('Todo');
        }

        self.db.saveDatabase();

        resolve(true);

      });
    });
  }

  fetch() {
    // Fetch test
    console.log('fetch User Class', self.classes.User);
    var result = self.classes.User.find({ age : { $lte: 35 } });
    console.log('fetch User result', result);
  }

}
