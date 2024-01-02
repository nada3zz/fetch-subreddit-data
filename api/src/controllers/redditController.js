const axios = require("axios");
const admin = require("firebase-admin");
const firestore = admin.firestore();

const fetchDataFromReddit = async (endpoint) => {
  const response = await axios.get(
    `https://www.reddit.com/r/FlutterDev/${endpoint}.json`
  );
  return response.data.data.children.map((post) => post.data);
};

const storeDataInFirestore = async (category, data) => {
  const redditDataRef = firestore.collection("redditData");
  const existingData = await getPostsFromFirestore(category);
  if (isEqual(existingData, data)) {
    console.log(`Data for ${category} already exists. Skipping storage.`);
    return;
  }

  await redditDataRef.doc(category).set({ data });
};

const isEqual = (array1, array2) => {
  return JSON.stringify(array1) === JSON.stringify(array2);
};

const getPostsFromFirestore = async (category) => {
  const redditDataRef = firestore.collection("redditData");
  const doc = await redditDataRef.doc(category).get();
  return doc.exists ? doc.data().data : [];
};

const fetchHot = async (req, res) => {
  try {
    const hotData = await fetchDataFromReddit("hot");
    await storeDataInFirestore("hot", hotData);
    const savedHotData = await getPostsFromFirestore('hot');
    res.status(200).json({ posts: savedHotData });
  } catch (error) {
    console.error("Error fetching or storing hot data:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const fetchNew = async (req, res) => {
  try {
    const newData = await fetchDataFromReddit("new");
    await storeDataInFirestore("new", newData);
    const savedNewData = await getPostsFromFirestore('hot');
    res.status(200).json({ posts: savedNewData });
  } catch (error) {
    console.error("Error fetching or storing new data:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const fetchRising = async (req, res) => {
  try {
    const risingData = await fetchDataFromReddit("rising");
    await storeDataInFirestore("rising", risingData);
    const savedRisingData = await getPostsFromFirestore('hot');
    res.status(200).json({ posts: savedRisingData });
  } catch (error) {
    console.error("Error fetching or storing rising data:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = {
  fetchHot,
  fetchNew,
  fetchRising,
  getPostsFromFirestore,
};
