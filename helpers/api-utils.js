import api from "services/api";

export async function getAllNFTs() {
  let res = await api.get("/shop/?type=NFT&page=1&limit=130");
  let nfts = res.data.data;
  return nfts;
}

export async function getFilterNFTs(payload) {
  let category =
    payload.category && payload.category.length > 0
      ? "&category=" + JSON.stringify(payload.category)
      : "";
  let page = payload.page ? "&page=" + payload.page : "&page=1";
  let limit = payload.limit ? "&limit=" + payload.limit : "&limit=12";
  let textSearch = payload.textSearch
    ? "&textSearch=" + payload.textSearch
    : "";
  let level =
    payload.level && payload.level.length > 0
      ? "&level=" + JSON.stringify(payload.level)
      : "";

  let minPrice = payload.minPrice ? "&minPrice=" + payload.minPrice : "";
  let maxPrice = payload.maxPrice ? "&maxPrice=" + payload.maxPrice : "";

  console.log(
    page + category + limit + textSearch + level + minPrice + maxPrice
  );

  try {
    var res = await api.get(
      "/shop/?type=NFT&sortField=amount&sortType=1" +
        page +
        category +
        limit +
        textSearch +
        level +
        maxPrice +
        minPrice
    );

    if (!res) {
      throw new Error("Something went wrong!", {
        data: { itemList: null, itemsCount: 0 },
      });
    }

    let nftList = [];
    let NFTs = res.data.data.items;
    let totalCount = res.data.data.totalItems;

    for (const key in NFTs) {
      let attributes = NFTs[key].nft.attributes;

      const attributesObj = {};

      for (let index = 0; index < attributes.length; index++) {
        const item = attributes[index];
        let key = item.trait_type;
        let value = item.value;

        let keys = Object.keys(attributesObj);

        let found = keys.find((item) => item == key);
        if (!found) {
          attributesObj[key] = [value];
        } else {
          let tempArray = [...attributesObj[key]];
          tempArray.push(value);
          attributesObj[key] = [...tempArray];
        }
      }

      let resourses = null;
      if (attributesObj.Resources) {
        resourses = attributesObj.Resources[0];
      }

      let data = {
        id: NFTs[key].id,
        traits: attributesObj,
        resourses: resourses,
        ...NFTs[key].nft,
      };

      nftList.push(data);
    }

    return { itemList: nftList, itemsCount: totalCount };
  } catch {
    // throw new Error("Something went wrong!", {
    //   data: { itemList: null, itemsCount: 0 },
    // });
    return { itemList: null, itemsCount: 0 };
  }
}

export async function getHomeNFTs(cat) {
  let category = "category=" + cat;
  let res = await api.get("/shop/home?");

  var nftList = [];
  let NFTs = res.data.data;
  for (const key in NFTs) {
    let attributes = NFTs[key].nft.attributes;

    const attributesObj = {};

    for (let index = 0; index < attributes.length; index++) {
      const item = attributes[index];
      let key = item.trait_type;
      let value = item.value;

      let keys = Object.keys(attributesObj);

      let found = keys.find((item) => item == key);
      if (!found) {
        attributesObj[key] = [value];
      } else {
        let tempArray = [...attributesObj[key]];
        tempArray.push(value);
        attributesObj[key] = [...tempArray];
      }
    }

    let resourses = null;
    if (attributesObj.Resources) {
      resourses = attributesObj.Resources[0];
    }

    let data = {
      id: NFTs[key].id,
      traits: attributesObj,
      resourses: resourses,
      ...NFTs[key].nft,
    };

    nftList.push(data);
  }
  // console.log(nftList)
  return nftList;
}

export async function getMyNFTs(category) {
  try {
    let res = await api.get("/users/nfts?category=" + category);
    var nftList = [];
    // if (res.data.message === "OK") {
    const NFTs = res.data.data;

    for (const key in NFTs) {
      let attributes = NFTs[key].detail.nft.attributes;
      let attributesObj = {};
      for (let index = 0; index < attributes.length; index++) {
        const item = attributes[index];
        let key = item.trait_type;
        let value = item.value;

        let keys = Object.keys(attributesObj);

        let found = keys.find((item) => item == key);
        if (!found) {
          attributesObj[key] = [value];
        } else {
          let tempArray = [...attributesObj[key]];
          tempArray.push(value);
          attributesObj[key] = [...tempArray];
        }
      }

      let id = NFTs[key].detail.id;
      let itemId = NFTs[key].tokenId;
      let userCount = NFTs[key].userNftCount;
      let didStake = NFTs[key].didStake;
      let stakedTime = NFTs[key].stakedTime;
      let packageCount = NFTs[key].count;
      // let packageAmount = NFTs[key].amount;

      let resourses = null;
      if (attributesObj.Resources) {
        resourses = attributesObj.Resources[0] || null;
      }

      nftList.push({
        id: id,
        properties: attributesObj || null,
        resourses: resourses,
        itemId: itemId,
        stakedTime: stakedTime,
        userCount: userCount,
        didStake: didStake,
        packageCount: packageCount,
        // packageAmount: packageAmount,
        ...NFTs[key].detail.nft,
      });
    }
    return Promise.resolve(nftList);
    // }
  } catch (error) {
    return Promise.reject("Somthing Went Wrong !");
  }
}

export async function clearUserNFTsCache(name) {
  let res = await api.post("/users/nfts/cache/clear");
  console.log("cash res");
  return res;
}

export async function getStaticFile(name) {
  let res = api.get("/static/shop/" + name);
  return res;
}

export async function createTicket(topic, message) {
  let res = await api.post("/tickets", {
    topic: topic,
    message: message,
  });
  return res;
}

export async function getAllTickets() {
  let res = await api.get("/tickets?page=1&limit=100");
  return res.data.data.tickets;
}

export async function getTicketByID(id) {
  let res = await api.get("/tickets/" + id + "/conversation");
  return res.data.data;
}

export async function sendMesageInTicket(id, message) {
  let res = await api.post("/tickets/" + id + "/conversation", {
    message: message,
  });
  return res.data;
}
