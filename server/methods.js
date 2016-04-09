Meteor.methods({
  addCRF : function(insertDoc, updateDoc) {
    var crf = insertDoc.crf;
    delete insertDoc["crf"];
    var coll = Collections[crf];
    var _id;
    if (this.userId) {
      insertDoc['userID'] = this.userId;
      insertDoc['createdAt'] = new Date;
      insertDoc['updatedAt'] = new Date;
      updateDoc['updatedAt'] = new Date;
    }
    else {
      console.log('user not logged in, nothing inserted or updated')
      return
    }

    if (crf in ComplexIDFields) {
      _id = ""
      _.each(ComplexIDFields[crf], function(f) {
        if (_id.length > 0)
        _id += " " + insertDoc[f];
        else
        _id += insertDoc[f];
      })
    } else {
      if ("Patient_ID" in  insertDoc)
      _id = insertDoc["Patient_ID"];
      else if ("Sample_ID" in  insertDoc)
      _id = insertDoc["Sample_ID"];
      else
      _id = null;
    }


    if (_id)
    insertDoc._id = _id;
    console.log(insertDoc);
    if (_id && coll.findOne({_id: _id}))
    coll.update({_id: _id}, updateDoc);
    else
    coll.insert(insertDoc);
    //var ret = coll.upsert({_id: _id}, {$set: insertDoc});
  }
})
