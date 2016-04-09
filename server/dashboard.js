Meteor.methods({
  dashboard: function(studyId) {
    var study = Collections.studies.findOne({id: studyId});
    if (studyId == null)
    throw new Meteor.Error("study id not found");

    console.log("user.profile.collaborations", user.profile.collaborations);
    user.profile.collaborations.push("public");

    var target = _.intersection(study.collaborations, user.profile.collaborations);
    console.log("dashboard", target);
    if (target.length == 0)
    throw new Meteor.Error("User not allowed to access this study");

    var Sample_IDs  = study.Sample_IDs;
    var Patient_IDs = study.Patient_IDs;

    var mapSample_IDtoPatientID = {};

    Sample_IDs.map(function(s) {
      Patient_IDs.map(function(p) {
        if (s.match(p))
        mapSample_IDtoPatientID[s] = p;
      })
    });

    var inventory = {}
    study.tables.map(function(tableName) {
      var inv = {};
      inventory[tableName] = inv;

      Collections.CRFs.find({CRF: tableName}, {fields: { Sample_ID:1, Patient_ID: 1}}).forEach(function(obj) {

        try {
          if (obj.Patient_ID) {
            inv[obj.Patient_ID] = true;
          } else if (obj.Sample_ID) {
            inv[mapSample_IDtoPatientID[obj.Sample_ID]] = true;
          }
        } catch (err) {
        }

      });
    });
    inventory._allLabels = Object.keys(Patient_IDs).sort();
    return inventory;
  }
});
