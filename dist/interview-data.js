window.QD_INTERVIEW = [
  {
    "tier": "P0",
    "title": "数组、哈希与窗口",
    "why": "为 OA 建立哈希、前缀和、双指针与窗口的不变量；关注重复值、计数溢出和最坏复杂度。",
    "questions": [
      {
        "id": 1,
        "name": "Two Sum",
        "slug": "two-sum",
        "difficulty": "Easy",
        "lists": [
          "Blind 75",
          "NeetCode 150",
          "Grind 75"
        ],
        "note": "哈希平均 O(1) 不是最坏 O(1)；同一元素不可重复使用。",
        "evidence": ""
      },
      {
        "id": 217,
        "name": "Contains Duplicate",
        "slug": "contains-duplicate",
        "difficulty": "Easy",
        "lists": [
          "Blind 75",
          "NeetCode 150",
          "Grind 75"
        ],
        "note": "说明状态定义、容器选择和复杂度；验证空输入、重复值及极端边界。",
        "evidence": ""
      },
      {
        "id": 49,
        "name": "Group Anagrams",
        "slug": "group-anagrams",
        "difficulty": "Medium",
        "lists": [
          "Blind 75",
          "NeetCode 150",
          "Grind 扩展池"
        ],
        "note": "比较排序 key 与计数 key；定义字符集。",
        "evidence": ""
      },
      {
        "id": 238,
        "name": "Product of Array Except Self",
        "slug": "product-of-array-except-self",
        "difficulty": "Medium",
        "lists": [
          "Blind 75",
          "NeetCode 150",
          "Grind 75"
        ],
        "note": "前后缀状态；题目乘积约束与溢出。",
        "evidence": ""
      },
      {
        "id": 128,
        "name": "Longest Consecutive Sequence",
        "slug": "longest-consecutive-sequence",
        "difficulty": "Medium",
        "lists": [
          "Blind 75",
          "NeetCode 150",
          "Grind 扩展池"
        ],
        "note": "只从序列起点扩展，避免 O(n²)。",
        "evidence": ""
      },
      {
        "id": 15,
        "name": "3Sum",
        "slug": "3sum",
        "difficulty": "Medium",
        "lists": [
          "Blind 75",
          "NeetCode 150",
          "Grind 75"
        ],
        "note": "说明状态定义、容器选择和复杂度；验证空输入、重复值及极端边界。",
        "evidence": ""
      },
      {
        "id": 560,
        "name": "Subarray Sum Equals K",
        "slug": "subarray-sum-equals-k",
        "difficulty": "Medium",
        "lists": [
          "Grind 扩展池"
        ],
        "note": "前缀和次数表；负数为何使普通双指针失效。",
        "evidence": ""
      },
      {
        "id": 3,
        "name": "Longest Substring Without Repeating Characters",
        "slug": "longest-substring-without-repeating-characters",
        "difficulty": "Medium",
        "lists": [
          "Blind 75",
          "NeetCode 150",
          "Grind 75"
        ],
        "note": "左右边界单调性；重复字符更新不能让左界后退。",
        "evidence": ""
      },
      {
        "id": 424,
        "name": "Longest Repeating Character Replacement",
        "slug": "longest-repeating-character-replacement",
        "difficulty": "Medium",
        "lists": [
          "Blind 75",
          "NeetCode 150",
          "Grind 扩展池"
        ],
        "note": "说明状态定义、容器选择和复杂度；验证空输入、重复值及极端边界。",
        "evidence": ""
      },
      {
        "id": 76,
        "name": "Minimum Window Substring",
        "slug": "minimum-window-substring",
        "difficulty": "Hard",
        "lists": [
          "Blind 75",
          "NeetCode 150",
          "Grind 75"
        ],
        "note": "覆盖计数与窗口收缩条件。",
        "evidence": ""
      },
      {
        "id": 209,
        "name": "Minimum Size Subarray Sum",
        "slug": "minimum-size-subarray-sum",
        "difficulty": "Medium",
        "lists": [],
        "note": "说明状态定义、容器选择和复杂度；验证空输入、重复值及极端边界。",
        "evidence": ""
      }
    ]
  },
  {
    "tier": "P0",
    "title": "二分、排序与区间",
    "why": "练查询边界与事件区间；把复杂度分为排序成本和查询成本。",
    "questions": [
      {
        "id": 704,
        "name": "Binary Search",
        "slug": "binary-search",
        "difficulty": "Easy",
        "lists": [
          "NeetCode 150"
        ],
        "note": "用半开区间解释每次收缩；避免 mid 溢出。",
        "evidence": ""
      },
      {
        "id": 33,
        "name": "Search In Rotated Sorted Array",
        "slug": "search-in-rotated-sorted-array",
        "difficulty": "Medium",
        "lists": [
          "Blind 75",
          "NeetCode 150",
          "Grind 75"
        ],
        "note": "说明状态定义、容器选择和复杂度；验证空输入、重复值及极端边界。",
        "evidence": ""
      },
      {
        "id": 153,
        "name": "Find Minimum In Rotated Sorted Array",
        "slug": "find-minimum-in-rotated-sorted-array",
        "difficulty": "Medium",
        "lists": [
          "Blind 75",
          "NeetCode 150",
          "Grind 扩展池"
        ],
        "note": "说明状态定义、容器选择和复杂度；验证空输入、重复值及极端边界。",
        "evidence": ""
      },
      {
        "id": 56,
        "name": "Merge Intervals",
        "slug": "merge-intervals",
        "difficulty": "Medium",
        "lists": [
          "Blind 75",
          "NeetCode 150",
          "Grind 75"
        ],
        "note": "端点相等是否重叠由契约决定。",
        "evidence": ""
      },
      {
        "id": 57,
        "name": "Insert Interval",
        "slug": "insert-interval",
        "difficulty": "Medium",
        "lists": [
          "Blind 75",
          "NeetCode 150",
          "Grind 75"
        ],
        "note": "说明状态定义、容器选择和复杂度；验证空输入、重复值及极端边界。",
        "evidence": ""
      },
      {
        "id": 435,
        "name": "Non Overlapping Intervals",
        "slug": "non-overlapping-intervals",
        "difficulty": "Medium",
        "lists": [
          "Blind 75",
          "NeetCode 150",
          "Grind 扩展池"
        ],
        "note": "说明状态定义、容器选择和复杂度；验证空输入、重复值及极端边界。",
        "evidence": ""
      }
    ]
  },
  {
    "tier": "P0",
    "title": "链表、栈与所有权",
    "why": "练指针更新、环检测和状态不变量；C++ 追问节点生命周期与 iterator 失效。",
    "questions": [
      {
        "id": 206,
        "name": "Reverse Linked List",
        "slug": "reverse-linked-list",
        "difficulty": "Easy",
        "lists": [
          "Blind 75",
          "NeetCode 150",
          "Grind 75"
        ],
        "note": "说明状态定义、容器选择和复杂度；验证空输入、重复值及极端边界。",
        "evidence": ""
      },
      {
        "id": 21,
        "name": "Merge Two Sorted Lists",
        "slug": "merge-two-sorted-lists",
        "difficulty": "Easy",
        "lists": [
          "Blind 75",
          "NeetCode 150",
          "Grind 75"
        ],
        "note": "说明状态定义、容器选择和复杂度；验证空输入、重复值及极端边界。",
        "evidence": ""
      },
      {
        "id": 141,
        "name": "Linked List Cycle",
        "slug": "linked-list-cycle",
        "difficulty": "Easy",
        "lists": [
          "Blind 75",
          "NeetCode 150",
          "Grind 75"
        ],
        "note": "E2 同类题；快慢指针证明，空链表与自环。",
        "evidence": "E2"
      },
      {
        "id": 19,
        "name": "Remove Nth Node From End of List",
        "slug": "remove-nth-node-from-end-of-list",
        "difficulty": "Medium",
        "lists": [
          "Blind 75",
          "NeetCode 150",
          "Grind 扩展池"
        ],
        "note": "说明状态定义、容器选择和复杂度；验证空输入、重复值及极端边界。",
        "evidence": ""
      },
      {
        "id": 20,
        "name": "Valid Parentheses",
        "slug": "valid-parentheses",
        "difficulty": "Easy",
        "lists": [
          "Blind 75",
          "NeetCode 150",
          "Grind 75"
        ],
        "note": "说明状态定义、容器选择和复杂度；验证空输入、重复值及极端边界。",
        "evidence": ""
      },
      {
        "id": 155,
        "name": "Min Stack",
        "slug": "min-stack",
        "difficulty": "Medium",
        "lists": [
          "NeetCode 150",
          "Grind 75"
        ],
        "note": "重复最小值如何恢复。",
        "evidence": ""
      }
    ]
  },
  {
    "tier": "P0",
    "title": "堆与在线统计",
    "why": "练多路合并、Top K、双堆与单调队列；这是流式算法能力，不代表全部题目被交易公司问过。",
    "questions": [
      {
        "id": 215,
        "name": "Kth Largest Element In An Array",
        "slug": "kth-largest-element-in-an-array",
        "difficulty": "Medium",
        "lists": [
          "NeetCode 150",
          "Grind 扩展池"
        ],
        "note": "heap / quickselect 的最坏情况与内存差异。",
        "evidence": ""
      },
      {
        "id": 347,
        "name": "Top K Frequent Elements",
        "slug": "top-k-frequent-elements",
        "difficulty": "Medium",
        "lists": [
          "Blind 75",
          "NeetCode 150"
        ],
        "note": "说明状态定义、容器选择和复杂度；验证空输入、重复值及极端边界。",
        "evidence": ""
      },
      {
        "id": 23,
        "name": "Merge K Sorted Lists",
        "slug": "merge-k-sorted-lists",
        "difficulty": "Hard",
        "lists": [
          "Blind 75",
          "NeetCode 150",
          "Grind 75"
        ],
        "note": "O(N log k)；节点所有权与空链表。",
        "evidence": ""
      },
      {
        "id": 295,
        "name": "Find Median From Data Stream",
        "slug": "find-median-from-data-stream",
        "difficulty": "Hard",
        "lists": [
          "Blind 75",
          "NeetCode 150",
          "Grind 75"
        ],
        "note": "E1 明确题型；空流、偶数中位数和加法溢出。",
        "evidence": "E1"
      },
      {
        "id": 239,
        "name": "Sliding Window Maximum",
        "slug": "sliding-window-maximum",
        "difficulty": "Hard",
        "lists": [
          "NeetCode 150",
          "Grind 扩展池"
        ],
        "note": "单调 deque 的摊还证明；重复值与过期下标。",
        "evidence": ""
      },
      {
        "id": 703,
        "name": "Kth Largest Element In a Stream",
        "slug": "kth-largest-element-in-a-stream",
        "difficulty": "Easy",
        "lists": [
          "NeetCode 150"
        ],
        "note": "说明状态定义、容器选择和复杂度；验证空输入、重复值及极端边界。",
        "evidence": ""
      }
    ]
  },
  {
    "tier": "P0",
    "title": "树、图与依赖",
    "why": "覆盖通用 coding round 的 BFS/DFS、BST 和拓扑排序；必须解释 visited、环与 disconnected cases。",
    "questions": [
      {
        "id": 102,
        "name": "Binary Tree Level Order Traversal",
        "slug": "binary-tree-level-order-traversal",
        "difficulty": "Medium",
        "lists": [
          "Blind 75",
          "NeetCode 150",
          "Grind 75"
        ],
        "note": "说明状态定义、容器选择和复杂度；验证空输入、重复值及极端边界。",
        "evidence": ""
      },
      {
        "id": 98,
        "name": "Validate Binary Search Tree",
        "slug": "validate-binary-search-tree",
        "difficulty": "Medium",
        "lists": [
          "Blind 75",
          "NeetCode 150",
          "Grind 75"
        ],
        "note": "说明状态定义、容器选择和复杂度；验证空输入、重复值及极端边界。",
        "evidence": ""
      },
      {
        "id": 230,
        "name": "Kth Smallest Element In a Bst",
        "slug": "kth-smallest-element-in-a-bst",
        "difficulty": "Medium",
        "lists": [
          "Blind 75",
          "NeetCode 150",
          "Grind 75"
        ],
        "note": "说明状态定义、容器选择和复杂度；验证空输入、重复值及极端边界。",
        "evidence": ""
      },
      {
        "id": 200,
        "name": "Number of Islands",
        "slug": "number-of-islands",
        "difficulty": "Medium",
        "lists": [
          "Blind 75",
          "NeetCode 150",
          "Grind 75"
        ],
        "note": "说明状态定义、容器选择和复杂度；验证空输入、重复值及极端边界。",
        "evidence": ""
      },
      {
        "id": 133,
        "name": "Clone Graph",
        "slug": "clone-graph",
        "difficulty": "Medium",
        "lists": [
          "Blind 75",
          "NeetCode 150",
          "Grind 75"
        ],
        "note": "说明状态定义、容器选择和复杂度；验证空输入、重复值及极端边界。",
        "evidence": ""
      },
      {
        "id": 207,
        "name": "Course Schedule",
        "slug": "course-schedule",
        "difficulty": "Medium",
        "lists": [
          "Blind 75",
          "NeetCode 150",
          "Grind 75"
        ],
        "note": "环检测与拓扑；多连通分量。",
        "evidence": ""
      },
      {
        "id": 210,
        "name": "Course Schedule II",
        "slug": "course-schedule-ii",
        "difficulty": "Medium",
        "lists": [
          "NeetCode 150",
          "Grind 扩展池"
        ],
        "note": "说明状态定义、容器选择和复杂度；验证空输入、重复值及极端边界。",
        "evidence": ""
      }
    ]
  },
  {
    "tier": "P1",
    "title": "QD 数据结构设计与模拟",
    "why": "围绕可更新的在线状态、索引、缓存、序列化和事件模拟深入追问。只有带面经编号的题有对应报道，其余是能力迁移练习。",
    "questions": [
      {
        "id": 146,
        "name": "LRU Cache",
        "slug": "lru-cache",
        "difficulty": "Medium",
        "lists": [
          "NeetCode 150",
          "Grind 75"
        ],
        "note": "hash + list；splice、iterator、重复 key 与 eviction。",
        "evidence": ""
      },
      {
        "id": 622,
        "name": "Design Circular Queue",
        "slug": "design-circular-queue",
        "difficulty": "Medium",
        "lists": [],
        "note": "满/空与 wraparound；单线程 AC 不证明 SPSC 安全。",
        "evidence": ""
      },
      {
        "id": 641,
        "name": "Design Circular Deque",
        "slug": "design-circular-deque",
        "difficulty": "Medium",
        "lists": [],
        "note": "前后边界、capacity=1；不依赖内置 deque。",
        "evidence": ""
      },
      {
        "id": 706,
        "name": "Design HashMap",
        "slug": "design-hashmap",
        "difficulty": "Easy",
        "lists": [],
        "note": "碰撞、rehash、负载因子；标准库限制以题面为准。",
        "evidence": ""
      },
      {
        "id": 981,
        "name": "Time Based Key Value Store",
        "slug": "time-based-key-value-store",
        "difficulty": "Medium",
        "lists": [
          "NeetCode 150"
        ],
        "note": "每 key 的时间索引；lower/upper_bound 与无历史值。",
        "evidence": ""
      },
      {
        "id": 2034,
        "name": "Stock Price Fluctuation",
        "slug": "stock-price-fluctuation",
        "difficulty": "Medium",
        "lists": [],
        "note": "E3 迁移题，非原题：撤销旧 timestamp 值，维护最新/min/max。",
        "evidence": "E3"
      },
      {
        "id": 1801,
        "name": "Number of Orders in the Backlog",
        "slug": "number-of-orders-in-the-backlog",
        "difficulty": "Medium",
        "lists": [],
        "note": "E4 迁移题，非 pro-rata：双堆模拟积压；不能覆盖按 ID 撤单与 FIFO。",
        "evidence": "E4"
      },
      {
        "id": 380,
        "name": "Insert Delete Get Random O(1)",
        "slug": "insert-delete-getrandom-o1",
        "difficulty": "Medium",
        "lists": [
          "Grind 扩展池"
        ],
        "note": "swap-delete 的索引修复；随机性与偏差。",
        "evidence": ""
      },
      {
        "id": 1146,
        "name": "Snapshot Array",
        "slug": "snapshot-array",
        "difficulty": "Medium",
        "lists": [],
        "note": "版本历史与二分；相同版本多次 set 合并。",
        "evidence": ""
      },
      {
        "id": 460,
        "name": "LFU Cache",
        "slug": "lfu-cache",
        "difficulty": "Hard",
        "lists": [],
        "note": "frequency + recency；更新、淘汰与最小频次。",
        "evidence": ""
      },
      {
        "id": 297,
        "name": "Serialize And Deserialize Binary Tree",
        "slug": "serialize-and-deserialize-binary-tree",
        "difficulty": "Hard",
        "lists": [
          "Blind 75",
          "NeetCode 150",
          "Grind 75"
        ],
        "note": "消息编码长度与边界；进一步写增量 decoder。",
        "evidence": ""
      },
      {
        "id": 1017,
        "name": "Convert to Base -2",
        "slug": "convert-to-base-2",
        "difficulty": "Medium",
        "lists": [],
        "note": "E5 相近题：负进制余数归一化；不背冷门题。",
        "evidence": "E5"
      }
    ]
  },
  {
    "tier": "P2",
    "title": "图、DP 与进阶 OA",
    "why": "核心题与实现练习完成后扩展；适合未知 OA 或 Algo Developer 方向补覆盖，不作为所有低延迟 QD 的必考要求。",
    "questions": [
      {
        "id": 743,
        "name": "Network Delay Time",
        "slug": "network-delay-time",
        "difficulty": "Medium",
        "lists": [
          "NeetCode 150"
        ],
        "note": "Dijkstra 的非负边前提与 stale heap entry。",
        "evidence": ""
      },
      {
        "id": 684,
        "name": "Redundant Connection",
        "slug": "redundant-connection",
        "difficulty": "Medium",
        "lists": [
          "NeetCode 150"
        ],
        "note": "说明状态定义、容器选择和复杂度；验证空输入、重复值及极端边界。",
        "evidence": ""
      },
      {
        "id": 721,
        "name": "Accounts Merge",
        "slug": "accounts-merge",
        "difficulty": "Medium",
        "lists": [
          "Grind 75"
        ],
        "note": "字符串索引与 DSU；不是已验证的 QD 公司题。",
        "evidence": ""
      },
      {
        "id": 994,
        "name": "Rotting Oranges",
        "slug": "rotting-oranges",
        "difficulty": "Medium",
        "lists": [
          "NeetCode 150"
        ],
        "note": "说明状态定义、容器选择和复杂度；验证空输入、重复值及极端边界。",
        "evidence": ""
      },
      {
        "id": 417,
        "name": "Pacific Atlantic Water Flow",
        "slug": "pacific-atlantic-water-flow",
        "difficulty": "Medium",
        "lists": [
          "Blind 75",
          "NeetCode 150",
          "Grind 扩展池"
        ],
        "note": "说明状态定义、容器选择和复杂度；验证空输入、重复值及极端边界。",
        "evidence": ""
      },
      {
        "id": 787,
        "name": "Cheapest Flights Within K Stops",
        "slug": "cheapest-flights-within-k-stops",
        "difficulty": "Medium",
        "lists": [
          "NeetCode 150"
        ],
        "note": "说明状态定义、容器选择和复杂度；验证空输入、重复值及极端边界。",
        "evidence": ""
      },
      {
        "id": 139,
        "name": "Word Break",
        "slug": "word-break",
        "difficulty": "Medium",
        "lists": [
          "Blind 75",
          "NeetCode 150",
          "Grind 75"
        ],
        "note": "说明状态定义、容器选择和复杂度；验证空输入、重复值及极端边界。",
        "evidence": ""
      },
      {
        "id": 322,
        "name": "Coin Change",
        "slug": "coin-change",
        "difficulty": "Medium",
        "lists": [
          "Blind 75",
          "NeetCode 150",
          "Grind 75"
        ],
        "note": "不可达状态、初始化与遍历次序。",
        "evidence": ""
      },
      {
        "id": 300,
        "name": "Longest Increasing Subsequence",
        "slug": "longest-increasing-subsequence",
        "difficulty": "Medium",
        "lists": [
          "Blind 75",
          "NeetCode 150",
          "Grind 扩展池"
        ],
        "note": "解释 tails 的含义，而非宣称 tails 就是 LIS。",
        "evidence": ""
      },
      {
        "id": 198,
        "name": "House Robber",
        "slug": "house-robber",
        "difficulty": "Medium",
        "lists": [
          "Blind 75",
          "NeetCode 150",
          "Grind 扩展池"
        ],
        "note": "说明状态定义、容器选择和复杂度；验证空输入、重复值及极端边界。",
        "evidence": ""
      },
      {
        "id": 416,
        "name": "Partition Equal Subset Sum",
        "slug": "partition-equal-subset-sum",
        "difficulty": "Medium",
        "lists": [
          "NeetCode 150",
          "Grind 75"
        ],
        "note": "说明状态定义、容器选择和复杂度；验证空输入、重复值及极端边界。",
        "evidence": ""
      },
      {
        "id": 739,
        "name": "Daily Temperatures",
        "slug": "daily-temperatures",
        "difficulty": "Medium",
        "lists": [
          "NeetCode 150",
          "Grind 扩展池"
        ],
        "note": "说明状态定义、容器选择和复杂度；验证空输入、重复值及极端边界。",
        "evidence": ""
      },
      {
        "id": 853,
        "name": "Car Fleet",
        "slug": "car-fleet",
        "difficulty": "Medium",
        "lists": [
          "NeetCode 150"
        ],
        "note": "说明状态定义、容器选择和复杂度；验证空输入、重复值及极端边界。",
        "evidence": ""
      },
      {
        "id": 678,
        "name": "Valid Parenthesis String",
        "slug": "valid-parenthesis-string",
        "difficulty": "Medium",
        "lists": [
          "NeetCode 150"
        ],
        "note": "说明状态定义、容器选择和复杂度；验证空输入、重复值及极端边界。",
        "evidence": ""
      },
      {
        "id": 846,
        "name": "Hand of Straights",
        "slug": "hand-of-straights",
        "difficulty": "Medium",
        "lists": [
          "NeetCode 150"
        ],
        "note": "说明状态定义、容器选择和复杂度；验证空输入、重复值及极端边界。",
        "evidence": ""
      }
    ]
  }
];
