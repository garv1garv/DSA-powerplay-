export interface Problem {
  day: number
  topic: string
  name: string
  url: string
}

export const problems: Problem[] = [
  // Day 1
  {
    day: 1,
    topic: "Arrays: Prefix Sum",
    name: "Subarray Sum Equals K",
    url: "https://leetcode.com/problems/subarray-sum-equals-k/",
  },
  {
    day: 1,
    topic: "Arrays: Kadane's",
    name: "Maximum Subarray",
    url: "https://leetcode.com/problems/maximum-subarray/",
  },
  {
    day: 1,
    topic: "Arrays: 2 Pointers",
    name: "Container With Most Water",
    url: "https://leetcode.com/problems/container-with-most-water/",
  },
  {
    day: 1,
    topic: "Arrays: Sliding Window",
    name: "Best Time to Buy and Sell Stock",
    url: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/",
  },
  { day: 1, topic: "Arrays: 3 Pointers", name: "3Sum", url: "https://leetcode.com/problems/3sum/" },
  {
    day: 1,
    topic: "Arrays: Two Pointers",
    name: "Trapping Rain Water",
    url: "https://leetcode.com/problems/trapping-rain-water/",
  },
  { day: 1, topic: "Arrays: Matrix", name: "Spiral Matrix", url: "https://leetcode.com/problems/spiral-matrix/" },
  { day: 1, topic: "Arrays: Greedy", name: "Jump Game", url: "https://leetcode.com/problems/jump-game/" },
  { day: 1, topic: "Arrays: 2 Pointers", name: "Sort Colors", url: "https://leetcode.com/problems/sort-colors/" },
  {
    day: 1,
    topic: "Arrays: Permutation",
    name: "Next Permutation",
    url: "https://leetcode.com/problems/next-permutation/",
  },

  // Day 2
  {
    day: 2,
    topic: "Strings: Hashing",
    name: "Longest Substring Without Repeating Characters",
    url: "https://leetcode.com/problems/longest-substring-without-repeating-characters/",
  },
  {
    day: 2,
    topic: "Strings: Sliding Window",
    name: "Minimum Window Substring",
    url: "https://leetcode.com/problems/minimum-window-substring/",
  },
  {
    day: 2,
    topic: "Strings: Greedy",
    name: "Partition Labels",
    url: "https://leetcode.com/problems/partition-labels/",
  },
  {
    day: 2,
    topic: "Strings: Two Pointers",
    name: "Backspace String Compare",
    url: "https://leetcode.com/problems/backspace-string-compare/",
  },
  {
    day: 2,
    topic: "Strings: Palindrome",
    name: "Longest Palindromic Substring",
    url: "https://leetcode.com/problems/longest-palindromic-substring/",
  },
  { day: 2, topic: "Strings: Anagrams", name: "Group Anagrams", url: "https://leetcode.com/problems/group-anagrams/" },
  {
    day: 2,
    topic: "Strings: Prefix",
    name: "Longest Common Prefix",
    url: "https://leetcode.com/problems/longest-common-prefix/",
  },
  { day: 2, topic: "Strings: Greedy", name: "Gas Station", url: "https://leetcode.com/problems/gas-station/" },
  {
    day: 2,
    topic: "Strings: Search",
    name: "Find the Index of the First Occurrence in a String",
    url: "https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/",
  },
  { day: 2, topic: "Strings: Trie", name: "Replace Words", url: "https://leetcode.com/problems/replace-words/" },

  // Day 3
  {
    day: 3,
    topic: "Linked List",
    name: "Reverse Linked List",
    url: "https://leetcode.com/problems/reverse-linked-list/",
  },
  {
    day: 3,
    topic: "Linked List",
    name: "Merge Two Sorted Lists",
    url: "https://leetcode.com/problems/merge-two-sorted-lists/",
  },
  {
    day: 3,
    topic: "Linked List",
    name: "Remove Nth Node From End of List",
    url: "https://leetcode.com/problems/remove-nth-node-from-end-of-list/",
  },
  { day: 3, topic: "Linked List", name: "Add Two Numbers", url: "https://leetcode.com/problems/add-two-numbers/" },
  {
    day: 3,
    topic: "Linked List",
    name: "Palindrome Linked List",
    url: "https://leetcode.com/problems/palindrome-linked-list/",
  },
  { day: 3, topic: "Linked List", name: "Linked List Cycle", url: "https://leetcode.com/problems/linked-list-cycle/" },
  {
    day: 3,
    topic: "Linked List",
    name: "Copy List with Random Pointer",
    url: "https://leetcode.com/problems/copy-list-with-random-pointer/",
  },
  {
    day: 3,
    topic: "Monotonic Stack",
    name: "Largest Rectangle in Histogram",
    url: "https://leetcode.com/problems/largest-rectangle-in-histogram/",
  },
  {
    day: 3,
    topic: "Monotonic Stack",
    name: "Daily Temperatures",
    url: "https://leetcode.com/problems/daily-temperatures/",
  },
  {
    day: 3,
    topic: "Monotonic Stack",
    name: "Next Greater Element II",
    url: "https://leetcode.com/problems/next-greater-element-ii/",
  },

  // Day 4
  { day: 4, topic: "Trees: DFS", name: "Invert Binary Tree", url: "https://leetcode.com/problems/invert-binary-tree/" },
  { day: 4, topic: "Trees: DFS", name: "Symmetric Tree", url: "https://leetcode.com/problems/symmetric-tree/" },
  {
    day: 4,
    topic: "Trees: Recursion",
    name: "Binary Tree Maximum Path Sum",
    url: "https://leetcode.com/problems/binary-tree-maximum-path-sum/",
  },
  {
    day: 4,
    topic: "Trees: DFS",
    name: "Balanced Binary Tree",
    url: "https://leetcode.com/problems/balanced-binary-tree/",
  },
  {
    day: 4,
    topic: "Trees: DFS",
    name: "Lowest Common Ancestor of a Binary Tree",
    url: "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/",
  },
  {
    day: 4,
    topic: "Trees: DFS/BFS",
    name: "Binary Tree Zigzag Level Order Traversal",
    url: "https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/",
  },
  {
    day: 4,
    topic: "Trees: Serialization",
    name: "Serialize and Deserialize Binary Tree",
    url: "https://leetcode.com/problems/serialize-and-deserialize-binary-tree/",
  },
  {
    day: 4,
    topic: "Trees: Construction",
    name: "Construct Binary Tree from Preorder and Inorder Traversal",
    url: "https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/",
  },
  {
    day: 4,
    topic: "Trees: Hard",
    name: "Count of Smaller Numbers After Self",
    url: "https://leetcode.com/problems/count-of-smaller-numbers-after-self/",
  },
  {
    day: 4,
    topic: "Trees: BST",
    name: "Kth Smallest Element in a BST",
    url: "https://leetcode.com/problems/kth-smallest-element-in-a-bst/",
  },

  // Day 5
  { day: 5, topic: "Graphs: BFS", name: "Number of Islands", url: "https://leetcode.com/problems/number-of-islands/" },
  { day: 5, topic: "Graphs: BFS", name: "Word Ladder", url: "https://leetcode.com/problems/word-ladder/" },
  { day: 5, topic: "Graphs: DFS", name: "Clone Graph", url: "https://leetcode.com/problems/clone-graph/" },
  {
    day: 5,
    topic: "Graphs: Cycle Detection",
    name: "Course Schedule",
    url: "https://leetcode.com/problems/course-schedule/",
  },
  {
    day: 5,
    topic: "Graphs: Topo Sort",
    name: "Course Schedule II",
    url: "https://leetcode.com/problems/course-schedule-ii/",
  },
  { day: 5, topic: "Graphs: DFS", name: "Graph Valid Tree", url: "https://leetcode.com/problems/graph-valid-tree/" },
  {
    day: 5,
    topic: "Graphs: Topo Sort",
    name: "Alien Dictionary (Premium)",
    url: "https://leetcode.com/problems/alien-dictionary/",
  },
  {
    day: 5,
    topic: "Graphs: Union Find",
    name: "Evaluate Division",
    url: "https://leetcode.com/problems/evaluate-division/",
  },
  {
    day: 5,
    topic: "Graphs: Tree",
    name: "Minimum Height Trees",
    url: "https://leetcode.com/problems/minimum-height-trees/",
  },
  { day: 5, topic: "Graphs: DSU", name: "Accounts Merge", url: "https://leetcode.com/problems/accounts-merge/" },

  // Day 6
  { day: 6, topic: "DP: 1D", name: "Climbing Stairs", url: "https://leetcode.com/problems/climbing-stairs/" },
  { day: 6, topic: "DP: 1D", name: "Coin Change", url: "https://leetcode.com/problems/coin-change/" },
  {
    day: 6,
    topic: "DP: 1D",
    name: "Partition Equal Subset Sum",
    url: "https://leetcode.com/problems/partition-equal-subset-sum/",
  },
  { day: 6, topic: "DP: 1D", name: "Decode Ways", url: "https://leetcode.com/problems/decode-ways/" },
  { day: 6, topic: "DP: 1D", name: "Word Break", url: "https://leetcode.com/problems/word-break/" },
  { day: 6, topic: "DP: 1D", name: "House Robber", url: "https://leetcode.com/problems/house-robber/" },
  { day: 6, topic: "DP: 1D", name: "House Robber II", url: "https://leetcode.com/problems/house-robber-ii/" },
  {
    day: 6,
    topic: "DP: 1D",
    name: "Longest Increasing Subsequence",
    url: "https://leetcode.com/problems/longest-increasing-subsequence/",
  },
  { day: 6, topic: "DP: 1D", name: "Jump Game II", url: "https://leetcode.com/problems/jump-game-ii/" },
  {
    day: 6,
    topic: "DP: 1D",
    name: "Maximum Product Subarray",
    url: "https://leetcode.com/problems/maximum-product-subarray/",
  },

  // Day 7
  { day: 7, topic: "DP: 2D", name: "Unique Paths", url: "https://leetcode.com/problems/unique-paths/" },
  {
    day: 7,
    topic: "DP: 2D",
    name: "Longest Common Subsequence",
    url: "https://leetcode.com/problems/longest-common-subsequence/",
  },
  { day: 7, topic: "DP: 2D", name: "Edit Distance", url: "https://leetcode.com/problems/edit-distance/" },
  {
    day: 7,
    topic: "DP: 2D",
    name: "Palindrome Partitioning II",
    url: "https://leetcode.com/problems/palindrome-partitioning-ii/",
  },
  { day: 7, topic: "DP: 2D", name: "Minimum Path Sum", url: "https://leetcode.com/problems/minimum-path-sum/" },
  {
    day: 7,
    topic: "DP: 2D",
    name: "Distinct Subsequences",
    url: "https://leetcode.com/problems/distinct-subsequences/",
  },
  { day: 7, topic: "DP: Memoization", name: "Burst Balloons", url: "https://leetcode.com/problems/burst-balloons/" },
  {
    day: 7,
    topic: "DP: Memoization",
    name: "Minimum Cost to Cut a Stick",
    url: "https://leetcode.com/problems/minimum-cost-to-cut-a-stick/",
  },
  { day: 7, topic: "DP: Grid", name: "Cherry Pickup II", url: "https://leetcode.com/problems/cherry-pickup-ii/" },
  { day: 7, topic: "DP: Memoization", name: "Target Sum", url: "https://leetcode.com/problems/target-sum/" },

  // Day 8
  { day: 8, topic: "Backtracking", name: "Permutations", url: "https://leetcode.com/problems/permutations/" },
  { day: 8, topic: "Backtracking", name: "Subsets", url: "https://leetcode.com/problems/subsets/" },
  { day: 8, topic: "Backtracking", name: "N-Queens", url: "https://leetcode.com/problems/n-queens/" },
  { day: 8, topic: "Backtracking", name: "Sudoku Solver", url: "https://leetcode.com/problems/sudoku-solver/" },
  { day: 8, topic: "Backtracking", name: "Word Search", url: "https://leetcode.com/problems/word-search/" },
  {
    day: 8,
    topic: "Backtracking",
    name: "Generate Parentheses",
    url: "https://leetcode.com/problems/generate-parentheses/",
  },
  { day: 8, topic: "Backtracking", name: "Combination Sum", url: "https://leetcode.com/problems/combination-sum/" },
  {
    day: 8,
    topic: "Backtracking",
    name: "Restore IP Addresses",
    url: "https://leetcode.com/problems/restore-ip-addresses/",
  },
  {
    day: 8,
    topic: "Backtracking",
    name: "Letter Combinations of a Phone Number",
    url: "https://leetcode.com/problems/letter-combinations-of-a-phone-number/",
  },
  {
    day: 8,
    topic: "Backtracking",
    name: "All Paths From Source to Target",
    url: "https://leetcode.com/problems/all-paths-from-source-to-target/",
  },

  // Day 9
  { day: 9, topic: "Binary Search", name: "Binary Search", url: "https://leetcode.com/problems/binary-search/" },
  {
    day: 9,
    topic: "Binary Search",
    name: "First Bad Version",
    url: "https://leetcode.com/problems/first-bad-version/",
  },
  {
    day: 9,
    topic: "Binary Search",
    name: "Search Insert Position",
    url: "https://leetcode.com/problems/search-insert-position/",
  },
  {
    day: 9,
    topic: "Binary Search",
    name: "Search in Rotated Sorted Array",
    url: "https://leetcode.com/problems/search-in-rotated-sorted-array/",
  },
  {
    day: 9,
    topic: "Heaps",
    name: "Top K Frequent Elements",
    url: "https://leetcode.com/problems/top-k-frequent-elements/",
  },
  {
    day: 9,
    topic: "Heaps",
    name: "Kth Largest Element in an Array",
    url: "https://leetcode.com/problems/kth-largest-element-in-an-array/",
  },
  {
    day: 9,
    topic: "Heaps",
    name: "K Closest Points to Origin",
    url: "https://leetcode.com/problems/k-closest-points-to-origin/",
  },
  {
    day: 9,
    topic: "Binary Search",
    name: "Median of Two Sorted Arrays",
    url: "https://leetcode.com/problems/median-of-two-sorted-arrays/",
  },
  { day: 9, topic: "Heaps", name: "Merge k Sorted Lists", url: "https://leetcode.com/problems/merge-k-sorted-lists/" },
  {
    day: 9,
    topic: "Heaps",
    name: "Find Median from Data Stream",
    url: "https://leetcode.com/problems/find-median-from-data-stream/",
  },

  // Day 10
  {
    day: 10,
    topic: "Misc / Union Find",
    name: "Redundant Connection",
    url: "https://leetcode.com/problems/redundant-connection/",
  },
  { day: 10, topic: "Misc / Bit Manip.", name: "Counting Bits", url: "https://leetcode.com/problems/counting-bits/" },
  { day: 10, topic: "Misc / Bit Manip.", name: "Single Number", url: "https://leetcode.com/problems/single-number/" },
  {
    day: 10,
    topic: "Misc / Bit Manip.",
    name: "Sum of Two Integers",
    url: "https://leetcode.com/problems/sum-of-two-integers/",
  },
  { day: 10, topic: "Misc / Math", name: "Line Reflection", url: "https://leetcode.com/problems/line-reflection/" },
  {
    day: 10,
    topic: "Misc / Trees",
    name: "Validate Binary Search Tree",
    url: "https://leetcode.com/problems/validate-binary-search-tree/",
  },
  {
    day: 10,
    topic: "Misc / Search",
    name: "Search a 2D Matrix",
    url: "https://leetcode.com/problems/search-a-2d-matrix/",
  },
  {
    day: 10,
    topic: "Misc / DP",
    name: "Range Sum Query - Immutable",
    url: "https://leetcode.com/problems/range-sum-query-immutable/",
  },
  {
    day: 10,
    topic: "Misc / Arrays",
    name: "Longest Consecutive Sequence",
    url: "https://leetcode.com/problems/longest-consecutive-sequence/",
  },
  { day: 10, topic: "Revision", name: "Pick any 3-4 hardest problems", url: "#" },
]

export const quotes = [
  "The secret of getting ahead is getting started.",
  "It's not that I'm so smart, it's just that I stay with problems longer.",
  "The best way to predict the future is to invent it.",
  "Code is like humor. When you have to explain it, it's bad.",
  "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
]
