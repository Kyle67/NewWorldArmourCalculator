// item = [light, medium, heavy]
let helmWeight = [1.5, 2.6, 4.7];
let chestWeight = [3.5, 6.2, 11];
let glovesWeight = [1.5, 2.6, 4.7];
let pantsWeight = [2, 3.5, 6.3];
let bootsWeight = [1.5, 2.6, 4.7];

let helmArmour = [44.1, 78.2, 138.8];
let chestArmour = [102.8, 182.5, 323.8];
let glovesArmour = [44.1, 78.2, 138.8];
let pantsArmour = [58.8, 104.3, 185];
let bootsArmour = [44.1, 78.2, 138.8];

let maxWeight = 23;

var list = [0,1,2];
let maxLength = 5;

var getPermutations = function(list, maxLen) {
    // Copy initial values as arrays
    var perm = list.map(function(val) {
        return [val];
    });
    // Our permutation generator
    var generate = function(perm, maxLen, currLen) {
        // Reached desired length
        if (currLen === maxLen) {
            return perm;
        }
        // For each existing permutation
        for (var i = 0, len = perm.length; i < len; i++) {
            var currPerm = perm.shift();
            // Create new permutation
            for (var k = 0; k < list.length; k++) {
                perm.push(currPerm.concat(list[k]));
            }
        }
        // Recurse
        return generate(perm, maxLen, currLen + 1);
    };
    // Start with size 1 because of initial values
    return generate(perm, maxLen, 1);
};

var res = getPermutations(list, maxLength); // Generate all combinations
//console.log(res); // List combinations
console.log(res.length); // Check length

// Loop to try all combinations and find the best one
let bestCombo = [-1,-1,-1,-1,-1];
let bestWeight = 0;
let bestArmour = 0;

for (combo of res) {
    let currentWeight = helmWeight[combo[0]] + chestWeight[combo[1]] + glovesWeight[combo[2]] + pantsWeight[combo[3]] + bootsWeight[combo[4]];
    let currentArmour = helmArmour[combo[0]] + chestArmour[combo[1]] + glovesArmour[combo[2]] + pantsArmour[combo[3]] + bootsArmour[combo[4]];
    if (currentWeight < maxWeight && currentArmour > bestArmour) {
        console.log(combo + " " + currentWeight + " " + currentArmour);
        bestWeight = currentWeight;
        bestArmour = currentArmour;
        bestCombo = combo;
    }
}
console.log(bestCombo);
console.log(bestWeight);
console.log(bestArmour);