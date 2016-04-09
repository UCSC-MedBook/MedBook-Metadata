Meteor.publish("metadata", function (study_label) {
  check(study_label, String);

  var user = MedBook.findUser(this.userId);
  var study = Studies.findOne({id: study_label});
  user.ensureAccess(study);

  return Collections.Metadata.find({
    study: study_label,
  });
});
