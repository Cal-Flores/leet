// testing yo

// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

// Notice that the solution set must not contain duplicate triplets.

function threeSum(nums) {
    const results = []

    if (nums.length < 3) return results
    nums = nums.sort((a, b) => a - b)

    let target = 0

    for (let i = 0; i < nums.length - 2; i++) {
        // `i` represents the "left" most number in our sorted set.
        // once this number hits 0, there's no need to go further since
        // positive numbers cannot sum to a negative number
        if (nums[i] > target) break

        // we don't want repeats, so skip numbers we've already seen
        if (i > 0 && nums[i] === nums[i - 1]) continue

        // `j` represents the "middle" element between `i` and `k`.
        // we will increment this up through the array while `i` and `k`
        // are anchored to their positions. we will decrement `k` for
        // for each pass through the array, and finally increment `i`
        // once `j` and `k` meet.
        let j = i + 1

        // `k` represents the "right" most element
        let k = nums.length - 1

        // to summarize our setup, we have `i` that starts at the beginning,
        // `k` that starts at the end, and `j` that races in between the two.
        //
        // note that `i` is controlled by our outer for-loop and will move the slowest.
        // in the meantime, `j` and `k` will take turns inching towards each other depending
        // on some logic we'll set up below. once they collide, `i` will be incremented up
        // and we'll repeat the process.
    }
}


let nflTeams = [24, 17, 7, 18, 25]

for (let i = 0; i <= nflTeams.length - 1; i--) {

}
