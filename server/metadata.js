

Meteor.startup(function() {

    if (Meteor.isServer) {
	Meteor.publish("metadata", function() {
	    var cursor = Collections.Metadata.find() 
	    console.log("Metadata", cursor.count())
	    return cursor;
	});

    } else {
	Meteor.subscribe("metadata");
    }
});

