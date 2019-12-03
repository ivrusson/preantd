import main from './main';
import user from './user';

const models = [
  main,
  user,
];

export default function loadModels(app) {
  for(var i = 0; models.length>i; i++) app.model(models[i]);
}
