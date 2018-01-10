// Import Tinytest from the tinytest Meteor package.
import { Tinytest } from "meteor/tinytest";

// Import and rename a variable exported by kl-dialog.js.
import { name as packageName } from "meteor/allerion:kl-dialog";

// Write your tests here!
// Here is an example.
Tinytest.add('kl-dialog - example', function (test) {
  test.equal(packageName, "kl-dialog");
});
