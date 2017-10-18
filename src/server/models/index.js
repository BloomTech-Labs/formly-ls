import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const Application = new Schema ({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  currentLiving: {
    type: String,
    required: true
  },
  citizenOrResident: {
    type: Boolean,
    required: true
  },
  dob: {
    type: String,
    required: true
  },
  gender: {
    type: String,
    default: ""
  },
  race: {
    type: String,
    default: ""
  },
  applyingForMonth: {
    type: String,
    default: ""
  },
  attendedSchoolsAndDegrees: {
    type: String,
    default: ""
  },
  workExperience: {
    type: String,
    default: ""
  },
  programmingExperience: {
    type: String,
    default: ""
  },
  mostImpressiveThingBuilt: {
    type: String,
    default: ""
  },
  goodCandidateReason: {
    type: String,
    default: ""
  },
  isAbleToAttend: {
    type: Boolean,
    required: true
  },
  otherCommitments: {
    type: String,
    default: ""
  },
  ableToFinanciallySupportBy: {
    type: String,
    default: ""
  },
  methodOfPayment: {
    type: String,
    default: ""
  }
});

export default mongoose.model('Application', Application);
