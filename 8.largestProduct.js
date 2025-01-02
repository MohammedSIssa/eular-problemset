let series =
  "7316717653133062491922511967442657474235534919493496983520312774506326239578318016984801869478851843858615607891129494954595017379583319528532088055111254069874715852386305071569329096329522744304355766896648950445244523161731856403098711121722383113622298934233803081353362766142828064444866452387493035890729629049156044077239071381051585930796086670172427121883998797908792274921901699720888093776657273330010533678812202354218097512545405947522435258490771167055601360483958644670632441572215539753697817977846174064955149290862569321978468622482839722413756570560574902614079729686524145351004748216637048440319989000889524345065854122758866688116427171479924442928230863465674813919123162824586178664583591245665294765456828489128831426076900422421902267105562632111110937054421750694165896040807198403850962455444362981230987879927244284909188845801561660979191338754992005240636899125607176060588611646710940507754100225698315520005593572972571636269561882670428252483600823257530420752963450";

const NUM_OF_ADJECENTS = 13;

function getMax(list) {
  if (list.length > 0) {
    let maxValue = list[0].value;
    let maxNums = list[0].numbers;
    for (let i = 1; i < list.length; i++) {
      if (list[i].value > maxValue) {
        maxValue = list[i].value;
        maxNums = list[i].numbers;
      }
    }
    return { value: maxValue, numbers: maxNums };
  }
}

function filterData() {
  const noZeroes = series.split("0");
  const valid = noZeroes.filter((item) => item.length >= NUM_OF_ADJECENTS);
  const datasetStr = valid.map((item) => item.split(""));
  const datasetInt = datasetStr.map((itemArr) =>
    itemArr.map((item) => parseInt(item))
  );

  return datasetInt;
}

function makeProductAndReturnMaxOne(arr) {
  let n1, n2, n3, n4, n5, n6, n7, n8, n9, n10, n11, n12, n13, product, max;
  let theNumbers
  max =
    arr[0] *
    arr[1] *
    arr[2] *
    arr[3] *
    arr[4] *
    arr[5] *
    arr[6] *
    arr[7] *
    arr[8] *
    arr[9] *
    arr[10] *
    arr[11] *
    arr[12];
  for (let i = 1; i < arr.length - NUM_OF_ADJECENTS; i++) {
    n1 = arr[i + 0];
    n2 = arr[i + 1];
    n3 = arr[i + 2];
    n4 = arr[i + 3];
    n5 = arr[i + 4];
    n6 = arr[i + 5];
    n7 = arr[i + 6];
    n8 = arr[i + 7];
    n9 = arr[i + 8];
    n10= arr[i + 9];
    n11= arr[i + 10];
    n12= arr[i + 11];
    n13= arr[i + 12];

    product =
      n1 * n2 * n3 * n4 * n5 * n6 * n7 * n8 * n9 * n10 * n11 * n12 * n13;

    if (product >= max) {
      theNumbers = [n1, n2, n3, n4, n5, n6, n7, n8, n9, n10, n11, n12, n13];
      max = product;
    }
  }
  return {
    numbers: theNumbers,
    value: max,
  };
}

function maxProdutsArray() {
  return filterData().map((itemArr) => makeProductAndReturnMaxOne(itemArr));
}

function getLargestProduct() {
  return getMax(maxProdutsArray());
}

console.log(getLargestProduct());