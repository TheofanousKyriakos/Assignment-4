var Timer = require('./timer')
var TShirt = require('./tshirt')
var BubbleSort = require('./bubblesort')
var QuickSort = require('./quicksort')
var BucketSort = require('./bucketsort')
const Color = require('./color')
let noOfTShirts = 4
let tShirts = []

console.log("Unsorted Array")
for (let i = 0; i < noOfTShirts; i++) {
    tShirts.push(new TShirt(true))
    console.log(tShirts[i].toString())
}

function printArrayOfTShirts(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i].toString())
    }
}

// we need to time every single one, how long it takes
function doBubbleSort() {
    var myBS = new BubbleSort();

    var BSSizeASCTimer = new Timer()
    var sortedBSTShirts_Size_ASC = myBS.sort({ data: tShirts, attribute: 'Size', type: 'ASC' }) // {data: tShirts, attribute: Size, type: ASC}
    BSSizeASCTimer.stop()
    console.log("Sorted Array BS Size ASC")
    console.log("Elapsed Time: " + BSSizeASCTimer.elapsedTime())
    printArrayOfTShirts(sortedBSTShirts_Size_ASC)

    var BSSizeDESCTimer = new Timer()
    var sortedBSTShirts_Size_DESC = myBS.sort({ data: tShirts, attribute: 'Size', type: 'DESC' }) // {data: tShirts, attribute: Size, type: ASC}
    BSSizeDESCTimer.stop()
    console.log("Sorted Array BS Size DESC")
    console.log("Elapsed Time: " + BSSizeDESCTimer.elapsedTime())
    printArrayOfTShirts(sortedBSTShirts_Size_DESC)

    var BSColorASCTimer = new Timer()
    var sortedBSTShirts_Color_ASC = myBS.sort({ data: tShirts, attribute: 'Color', type: 'ASC' }) // {data: tShirts, attribute: Size, type: ASC}
    BSColorASCTimer.stop()
    console.log("Sorted Array BS Color ASC")
    console.log("Elapsed Time: " + BSColorASCTimer.elapsedTime())
    printArrayOfTShirts(sortedBSTShirts_Color_ASC)

    var BSColorDESCTimer = new Timer()
    var sortedBSTShirts_Color_DESC = myBS.sort({ data: tShirts, attribute: 'Color', type: 'DESC' }) // {data: tShirts, attribute: Size, type: ASC}
    BSColorDESCTimer.stop()
    console.log("Sorted Array BS Color DESC")
    console.log("Elapsed Time: " + BSColorDESCTimer.elapsedTime())
    printArrayOfTShirts(sortedBSTShirts_Color_DESC)

    var BSFabricASCTimer = new Timer()
    var sortedBSTShirts_Fabric_ASC = myBS.sort({ data: tShirts, attribute: 'Fabric', type: 'ASC' }) // {data: tShirts, attribute: Size, type: ASC}
    BSFabricASCTimer.stop()
    console.log("Sorted Array BS Fabric ASC")
    console.log("Elapsed Time: " + BSFabricASCTimer.elapsedTime())
    printArrayOfTShirts(sortedBSTShirts_Fabric_ASC)

    var BSFabricDESCTimer = new Timer()
    var sortedBSTShirts_Fabric_DESC = myBS.sort({ data: tShirts, attribute: 'Fabric', type: 'DESC' }) // {data: tShirts, attribute: Size, type: ASC}
    BSFabricDESCTimer.stop()
    console.log("Sorted Array BS Fabric DESC")
    console.log("Elapsed Time: " + BSFabricDESCTimer.elapsedTime())
    printArrayOfTShirts(sortedBSTShirts_Fabric_DESC)
}
// doBubbleSort()

// we need to time every single one, how long it takes
function doQuickSort() {
    var myQS = new QuickSort()

    // Size ASC
    var QSSizeASCTimer = new Timer()
    var sortedQSTShirts_Size_ASC = myQS.quicksort(tShirts, 0, tShirts.length - 1, 'Size', 'ASC')
    QSSizeASCTimer.stop()
    console.log("Sorted Array QS Size ASC")
    console.log("Elapsed Time: " + QSSizeASCTimer.elapsedTime())
    printArrayOfTShirts(sortedQSTShirts_Size_ASC)

    // Size DESC
    var QSSizeDESCTimer = new Timer()
    var sortedQSTShirts_Size_DESC = myQS.quicksort(tShirts, 0, tShirts.length - 1, 'Size', 'DESC')
    QSSizeDESCTimer.stop()
    sortedQSTShirts_Size_DESC.reverse()
    console.log("Sorted Array QS Size DESC")
    console.log("Elapsed Time: " + QSSizeDESCTimer.elapsedTime())
    printArrayOfTShirts(sortedQSTShirts_Size_DESC)

    // Color ASC
    var QSColorASCTimer = new Timer()
    var sortedQSTShirts_Color_ASC = myQS.quicksort(tShirts, 0, tShirts.length - 1, 'Color', 'ASC')
    QSColorASCTimer.stop()
    console.log("Sorted Array QS Color ASC")
    console.log("Elapsed Time: " + QSColorASCTimer.elapsedTime())
    printArrayOfTShirts(sortedQSTShirts_Color_ASC)

    // Color DESC
    var QSColorDESCTimer = new Timer()
    var sortedQSTShirts_Color_DESC = myQS.quicksort(tShirts, 0, tShirts.length - 1, 'Color', 'DESC')
    QSColorDESCTimer.stop()
    sortedQSTShirts_Color_DESC.reverse()
    console.log("Sorted Array QS Color DESC")
    console.log("Elapsed Time: " + QSColorDESCTimer.elapsedTime())
    printArrayOfTShirts(sortedQSTShirts_Color_DESC)

    // Fabric ASC
    var QSFabricASCTimer = new Timer()
    var sortedQSTShirts_Fabric_ASC = myQS.quicksort(tShirts, 0, tShirts.length - 1, 'Fabric', 'ASC')
    QSFabricASCTimer.stop()
    console.log("Sorted Array QS Fabric ASC")
    console.log("Elapsed Time: " + QSFabricASCTimer.elapsedTime())
    printArrayOfTShirts(sortedQSTShirts_Fabric_ASC)

    // Fabric DESC
    var QSFabricDESCTimer = new Timer()
    var sortedQSTShirts_Fabric_DESC = myQS.quicksort(tShirts, 0, tShirts.length - 1, 'Fabric', 'DESC')
    QSFabricDESCTimer.stop()
    sortedQSTShirts_Fabric_DESC.reverse()
    console.log("Sorted Array QS Fabric DESC")
    console.log("Elapsed Time: " + QSFabricDESCTimer.elapsedTime())
    printArrayOfTShirts(sortedQSTShirts_Fabric_DESC)
}
// doQuickSort()

// we need to time every single one, how long it takes
function doBucketSort() {
    var myBus = new BucketSort()
    // var elements = [1,4,5,7,2,6,2,6,3,5,2,7,3,1,5,6,3,4,2,1,6]
    // var sortedByBus = [...elements]
    // myBus.bucketSort(sortedByBus, 7)
    // sortedByBus.forEach(item => console.log(item))

    // Size ASC
    var sortedByBusSizeASC = [...tShirts]
    myBus.bucketSort(sortedByBusSizeASC, 7, 'Size', 'ASC')
    console.log("Sorted Array BUS Size ASC")
    sortedByBusSizeASC.forEach(item => console.log(item.toString()))

    // Size DESC
    var sortedByBusSizeDESC = [...tShirts]
    myBus.bucketSort(sortedByBusSizeDESC, 7, 'Size', 'DESC')
    console.log("Sorted Array BUS Size DESC")
    sortedByBusSizeDESC.forEach(item => console.log(item.toString()))

    // Color ASC
    var sortedByBusColorASC = [...tShirts]
    myBus.bucketSort(sortedByBusColorASC, 7, 'Color', 'ASC')
    console.log("Sorted Array BUS Color ASC")
    sortedByBusColorASC.forEach(item => console.log(item.toString()))

    // Color DESC
    var sortedByBusColorDESC = [...tShirts]
    myBus.bucketSort(sortedByBusColorDESC, 7, 'Color', 'DESC')
    console.log("Sorted Array BUS Color DESC")
    sortedByBusColorDESC.forEach(item => console.log(item.toString()))

    // Fabric ASC
    var sortedByBusFabricASC = [...tShirts]
    myBus.bucketSort(sortedByBusFabricASC, 7, 'Fabric', 'ASC')
    console.log("Sorted Array BUS Fabric ASC")
    sortedByBusFabricASC.forEach(item => console.log(item.toString()))

    // Fabric DESC
    var sortedByBusFabricDESC = [...tShirts]
    myBus.bucketSort(sortedByBusFabricDESC, 7, 'Fabric', 'DESC')
    console.log("Sorted Array BUS Fabric DESC")
    sortedByBusFabricDESC.forEach(item => console.log(item.toString()))
}
// doBucketSort()


function doBubbleCombined() {
    // Step 1. Sort (Bubble Sort) by Color ASC
    // Step 2. Find (if any) same colored TShirts, e.g. 2 REDs
    // Step 3. Get these same colored TShirts and short them by Size 
    // Step 4. Find (if any) same sized TShirts, e.g. 3 XS
    // Step 5. Get these same sized TShirts and sort them by Fabric

    // Step 1
    var myBS = new BubbleSort();
    var BSColorASCTimer = new Timer()
    console.log(tShirts.length)
    var sortedBSTShirts_Color_ASC = myBS.sort({ data: tShirts, attribute: 'Color', type: 'ASC' }) 
    BSColorASCTimer.stop()
    console.log("Sorted Array BS Color ASC")
    console.log("Elapsed Time: " + BSColorASCTimer.elapsedTime())
    printArrayOfTShirts(sortedBSTShirts_Color_ASC)

    // Step 2 -- Place the same colors TOGETHER
    var n = Object.keys(new Color().colors).length
    // console.log(n)
    //Create a bucket array
    let bucket = new Array(n); // ??? is this correct 

    //Add bucket group
    for (let i = 0; i <= n; i++) {
        bucket[i] = [];
    }
    
    // console.log(sortedBSTShirts_Color_ASC.length)
    for (let i = 0; i < sortedBSTShirts_Color_ASC.length; i++) {
        // console.log(i,sortedBSTShirts_Color_ASC[i]._color)
        // bucket[1] <--- [].push()
        bucket[sortedBSTShirts_Color_ASC[i]._color].push(sortedBSTShirts_Color_ASC[i]);
    }

    // Step 3
    // Actual sort on every bucket per Size
    for (let i = 0; i <= n; i++) {
        //bucket[i].sort();
        var bucketi = myBS.sort({ data: bucket[i], attribute: 'Size', type: 'ASC' })
        bucket[i] = bucketi
    }

    // Step 4
    // get the bucket and find per Size similar sizes
    //Create a bucket array
    let bucketSize = new Array(n); // ??? is this correct 

    //Add bucket group
    for (let i = 0; i <= n; i++) {
        bucketSize[i] = [];
    }

    for (let i = 0; i <= n; i++) {
        //bucket[i].sort();
        var bucketi = myBS.sort({ data: bucket[i], attribute: 'Size', type: 'ASC' })
        bucketSize[i] = bucketi
    }

    bucketSize.forEach(element => {
        bucketSize[element._color].push(bucketSize[i]); // ?????????
    });
    

}
    


doBubbleCombined()

