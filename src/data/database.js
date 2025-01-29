import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, doc, getDoc, query, where, addDoc, writeBatch } from "firebase/firestore";
import products from "./data";



const firebaseConfig = {
  apiKey: "AIzaSyBoUJ-JojzZu_AQAk1iRHxxPKiZruGXZUc",
  authDomain: "islandpharmacy-ec0a2.firebaseapp.com",
  projectId: "islandpharmacy-ec0a2",
  storageBucket: "islandpharmacy-ec0a2.firebasestorage.app",
  messagingSenderId: "542950879926",
  appId: "1:542950879926:web:6ce8438d9af0b2d505ac17"
};


const app = initializeApp(firebaseConfig);

const db = getFirestore(app);



export default async function getAsyncData() {

    const collectionRef = collection(db, "medicines");
    const productsSnapshot = await getDocs(collectionRef);
    const productsList = productsSnapshot.docs.map(doc => {
        return {...doc.data(), id: doc.id};
    });
    return productsList;
}

export async function getAsyncItemById(itemID) {

const docRef = doc(db, "medicines", itemID);
const docSnap = await getDoc(docRef);
const docData = docSnap.data();

return docData

}

export async function getAsyncItemsByCategory(catID) {
    const q = query(collection(db, "medicines"), where("category", "==", catID));
    const querySnapshot = await getDocs(q);
    const productsList = querySnapshot.docs.map(doc => {
        return {...doc.data(), id: doc.id};
    });
    return productsList

}


export async function exportProductsWithBatch() {
    const batch = writeBatch(db);
    for(let item of products) {
        const itemId= item.id;
        delete item.id;
        const itemDocRef = doc(db, "medicines", String(itemId));
        batch.set(itemDocRef, item);
    }
    await batch.commit();

}

export async function createOrder(orderData) {
    const collectionRef = collection(db, "orders");
    const newOrder = await addDoc(collectionRef, orderData);
    return newOrder.id;
}
