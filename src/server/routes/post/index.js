import { Application } from '../../models';
import { handleUserError } from '../../app';

export const postApplication = (req, res) => {
  const form = { 
    firstName,
    lastName,
    currentLiving,
    citizenOrResident,
    dob,
  } = req.body;
  const missing = [];
  if (firstName == null)
    missing.push('firstName');
  if (lastName == null)
    missing.push('lastName');
  if (currentLiving == null)
    missing.push('currentLiving');
  if (citizenOrResident == null)
    missing.push('citizenOrResident');
  if (dob == null)
    missing.push('dob');
  if (missing.length > 0)
    return handleUserError({ error: 'You are missing some real serious data.', missing }, res);

  const application = new Application(form);
  application.save((err, newApplication) => {
    if (err)
      return handleUserError(err, res);
    res.json(newApplication);
  });
}
