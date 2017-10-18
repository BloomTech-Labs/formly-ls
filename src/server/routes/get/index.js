import { Application } from '../../models';
import { handleUserError } from '../../app';

var path = require('path');

export const getApplication = (req, res) => {
  res.sendFile(path.resolve(__dirname, '../public/index.html'));
}
