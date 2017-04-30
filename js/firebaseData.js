var config = {
      apiKey: "AIzaSyCneqx8XXsdXd4dpsOj4RQ87CPgFgf1Efs",
      authDomain: "hackbajio-302e9.firebaseapp.com",
      databaseURL: "https://hackbajio-302e9.firebaseio.com",
      projectId: "hackbajio-302e9",
      storageBucket: "hackbajio-302e9.appspot.com",
      messagingSenderId: "295498431973"
    };
    firebase.initializeApp(config);

    var db = firebase.database();
    db.ref('').set({
      app: 'Fair Led'\\\
    });