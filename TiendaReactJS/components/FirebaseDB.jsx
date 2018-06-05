import React from 'react';
import ReactDOM from 'react-dom';
import * as firebase from 'firebase';

  const totalUsers : Object = [];
  const config = {
    apiKey: "AIzaSyALHC2zlQNqKCZShePN382fS4EX9_u1kEg",
    authDomain: "tiendanext-75443.firebaseapp.com",
    databaseURL: "https://tiendanext-75443.firebaseio.com",
    projectId: "tiendanext-75443",
    storageBucket: "tiendanext-75443.appspot.com",
    messagingSenderId: "710861669277"
  };
  firebase.initializeApp(config);

const productosDb = firebase.database().ref().child('productos')
const usuariosDb = firebase.database().ref().child('usuarios')

usuariosDb.orderByChild("id").on("child_added", function(snapshot) {
  totalUsers.push(snapshot.key)
});