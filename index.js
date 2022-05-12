const compare = (newArray, oldArray) => {

  let result = {
    create: [],
    update: [],
    delete: [],
  };

  newArray.forEach((newObj) => {
    const found = oldArray.find((oldObj) => {
      return oldObj.id === newObj.id;
    });
    if (found) {
      if (JSON.stringify(found) !== JSON.stringify(newObj)) {
        result.update.push(newObj);
      }
    } else {
      result.create.push(newObj);
    }
  });

  oldArray.forEach((oldObj) => {
    const found = newArray.find((newObj) => {
      return oldObj.id === newObj.id;
    });
    if (!found) {
      result.delete.push(oldObj);
    }
  });

  return result;

};

export default compare;
