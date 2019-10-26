
document.addEventListener("DOMContentLoaded", event => {

  const app = firebase.app();
  const db = firebase.firestore();
  const productsRef = db.collection('questions');
  const query = productsRef.orderBy('importance', 'desc');
  query.get().then(products => {
    products.forEach(doc => {
      data = doc.data();
      //document.querySelector('#qst_show').innerHTML = data.qst;
      //creating h1s
      var h = document.createElement("H1");
      var button = document.createElement('BUTTON');
      var text = document.createTextNode("Upvote");
      var t = document.createTextNode(data.qst);
      h.appendChild(t);
      document.body.appendChild(h);
      button.appendChild(text);
      button.id = data.qst;
      h.appendChild(button);
      //document.write(`${data.qst} <br>`);

    })
  })
});
