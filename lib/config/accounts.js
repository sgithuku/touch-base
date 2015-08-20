// Set up login services
Meteor.startup(function() {
  // Add Facebook configuration entry
  ServiceConfiguration.configurations.update(
    { service: "facebook" },
    { $set: {
        appId: "1896265457266129",
        secret: "1babd523e52a2de95acddb2010c8ed62"
      }
    },
    { upsert: true }
  );

  // Add GitHub configuration entry
  /*
  ServiceConfiguration.configurations.update(
    { service: "github" },
    { $set: {
        clientId: "XXXXXXXXXXXXXXXXXXXX",
        secret: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
      }
    },
    { upsert: true }
  );
  */

  // Add Google configuration entry
  // ServiceConfiguration.configurations.update(
  //   { service: "google" },
  //   { $set: {
  //       clientId: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
  //       client_email: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
  //       secret: "XXXXXXXXXXXXXXXXXXXXXXXX"
  //     }
  //   },
  //   { upsert: true }
  // );

  // Add Linkedin configuration entry
  /*
  ServiceConfiguration.configurations.update(
    { service: "linkedin" },
    { $set: {
        clientId: "XXXXXXXXXXXXXX",
        secret: "XXXXXXXXXXXXXXXX"
      }
    },
    { upsert: true }
  );
  */
});
