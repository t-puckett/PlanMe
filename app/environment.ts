export const firebaseConfig = {
    apiKey: "AIzaSyBPi4_DLNJMjvh2HWL0dZB4AqeF_o5AIAY",
    authDomain: "resolute-vault-248819.firebaseapp.com",
    databaseURL: "https://resolute-vault-248819.firebaseio.com",
    projectId: "resolute-vault-248819",
    storageBucket: "",
    messagingSenderId: "336683630720",
    appId: "1:336683630720:web:6cce175f203f91cf7c6665",
    measurementId: "G-Z8DCVELVH1"
}
export const snapshotToArray = snapshot =>{
    let returnArray = [];
    snapshot.forEach(element=>{
       let dates = element.val();
       dates.key = element.key;
       returnArray.push(dates); 
    });
    returnArray;
}