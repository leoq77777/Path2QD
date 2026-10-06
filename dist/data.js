window.MODULES = [
  {
    "id": "m1",
    "title": "Modern C++",
    "zh": "语言与所有权",
    "phase": "基础",
    "time": "2–3 周",
    "goal": "能够用 C++20 管理资源，解释生命周期、拷贝/移动与容器失效。",
    "resources": [
      {
        "name": "LearnCpp",
        "url": "https://www.learncpp.com/",
        "kind": "正文免费",
        "why": "循序渐进建立语言基础，适合补齐现代 C++。",
        "read": "对象生命周期、引用、移动语义、智能指针、模板"
      },
      {
        "name": "C++ Core Guidelines",
        "url": "https://isocpp.github.io/CppCoreGuidelines/CppCoreGuidelines",
        "kind": "正文免费",
        "why": "由语言专家维护，将资源管理落实为设计规则。",
        "read": "R / I / CP：所有权、接口、并发"
      },
      {
        "name": "cppreference",
        "url": "https://en.cppreference.com/w/cpp.html",
        "kind": "正文免费",
        "why": "查语义与复杂度的精确参考；社区维护，并非 ISO 标准正文。",
        "read": "容器失效规则、memory_order、chrono、span"
      }
    ],
    "order": "先掌握 RAII 和 STL，再写模板；暂缓复杂元编程。",
    "project": "实现定长消息对象与 RAII 文件描述符；用 sanitizers 检查越界和生命周期。",
    "accept": "写出移动后对象的约束；解释 vector 扩容为何使指针失效。"
  },
  {
    "id": "m2",
    "title": "Computer Architecture & CPU Cache",
    "zh": "理解硬件成本",
    "phase": "基础",
    "time": "1–2 周",
    "goal": "区分 cache line、TLB、分支预测与缓存一致性，理解布局对热路径的影响。",
    "resources": [
      {
        "name": "Agner Fog Optimization Manuals",
        "url": "https://www.agner.org/optimize/",
        "kind": "正文免费",
        "why": "作者公开的体系化优化手册，连接 C++ 与硬件执行。",
        "read": "先 Optimizing software in C++，再 microarchitecture；指令表按需查"
      },
      {
        "name": "Mechanical Sympathy · Martin Thompson",
        "url": "https://mechanical-sympathy.blogspot.com/",
        "kind": "正文免费",
        "why": "作者文章解释缓存一致性与消息传递的性能代价。旧实验数字需重测。",
        "read": "False Sharing、Memory Barriers、Single Writer"
      }
    ],
    "order": "先读 C++ 优化手册，再研究 microarchitecture；性能模型随 CPU 改变。",
    "project": "比较 AoS / SoA 顺序与随机访问；比较相邻和隔离的线程计数器。",
    "accept": "报告硬件、编译选项、工作集大小与 cache misses，不只给耗时。"
  },
  {
    "id": "m3",
    "title": "Linux / OS & Memory",
    "zh": "系统与内存",
    "phase": "基础",
    "time": "2 周",
    "goal": "掌握虚拟内存、page fault、mmap、调度、NUMA 与分配器的成本。",
    "resources": [
      {
        "name": "OSTEP · University of Wisconsin–Madison",
        "url": "https://pages.cs.wisc.edu/~remzi/OSTEP/",
        "kind": "正文免费",
        "why": "作者免费章节组成完整 OS 主线；纸质版另售。",
        "read": "虚拟内存、分页、线程、锁、持久化"
      },
      {
        "name": "Erik Rigtorp · Low Latency Tuning Guide",
        "url": "https://rigtorp.se/low-latency-guide/",
        "kind": "正文免费",
        "why": "将 Linux 调优转为可复现实验清单。",
        "read": "CPU affinity、频率、NUMA、interrupts；先测再调"
      },
      {
        "name": "Linux man-pages · epoll(7)",
        "url": "https://man7.org/linux/man-pages/man7/epoll.7.html",
        "kind": "正文免费",
        "why": "Linux API 的权威语义参考，厘清 LT / ET。",
        "read": "ET + nonblocking + EAGAIN；沿链接读 socket、mmap、sched_setaffinity"
      }
    ],
    "order": "先 OSTEP 虚拟内存与调度，再做 affinity / first-touch 实验。",
    "project": "编写文件回放器，对比 read 与 mmap；测首次访问和预热后的尾延迟。",
    "accept": "解释 major/minor fault；记录 affinity 与内存占用，避免盲目系统调优。"
  },
  {
    "id": "m4",
    "title": "Concurrency & Memory Model",
    "zh": "并发正确性",
    "phase": "系统",
    "time": "2–3 周",
    "goal": "能建立 happens-before 推导；区分 data race、lock-free 与 wait-free。",
    "resources": [
      {
        "name": "cppreference",
        "url": "https://en.cppreference.com/w/cpp.html",
        "kind": "正文免费",
        "why": "查语义与复杂度的精确参考；社区维护，并非 ISO 标准正文。",
        "read": "容器失效规则、memory_order、chrono、span"
      },
      {
        "name": "rigtorp / SPSCQueue",
        "url": "https://github.com/rigtorp/SPSCQueue",
        "kind": "开源项目",
        "why": "小而聚焦的 C++ 单生产者单消费者队列，可逐行推导。",
        "read": "README → 索引与 acquire/release → tests；不推广到 MPMC"
      },
      {
        "name": "LMAX / Disruptor",
        "url": "https://github.com/LMAX-Exchange/disruptor",
        "kind": "开源项目",
        "why": "研究 ring buffer、序列号与消费者依赖。实现为 Java。",
        "read": "设计文档 → sequencer → gating；理解架构再迁移 C++"
      },
      {
        "name": "Mechanical Sympathy · Martin Thompson",
        "url": "https://mechanical-sympathy.blogspot.com/",
        "kind": "正文免费",
        "why": "作者文章解释缓存一致性与消息传递的性能代价。旧实验数字需重测。",
        "read": "False Sharing、Memory Barriers、Single Writer"
      }
    ],
    "order": "mutex 基线 → atomics / acquire-release → SPSC → 单写者流水线。",
    "project": "实现 bounded SPSC queue，覆盖空/满、环绕、停止与背压。",
    "accept": "逐行解释发布/读取的同步关系；校验所有消息无丢失、重复和乱序。"
  },
  {
    "id": "m5",
    "title": "Networking & Low-Latency I/O",
    "zh": "网络与事件循环",
    "phase": "系统",
    "time": "2–3 周",
    "goal": "处理 TCP 分帧、短读写、UDP 丢包、非阻塞 I/O 和 epoll。",
    "resources": [
      {
        "name": "Beej’s Guide to Network Programming",
        "url": "https://beej.us/guide/bgnet/",
        "kind": "正文免费",
        "why": "作者公开全文与示例，适合从 sockets 起步。",
        "read": "TCP/UDP、partial send、poll、nonblocking"
      },
      {
        "name": "CS144 · Stanford",
        "url": "https://cs144.github.io/",
        "kind": "正文免费",
        "why": "公开课程与网络实验，建立 TCP 的可靠传输模型；无免费学分承诺。",
        "read": "讲义 → byte stream → reassembler → TCP labs"
      },
      {
        "name": "Linux man-pages · epoll(7)",
        "url": "https://man7.org/linux/man-pages/man7/epoll.7.html",
        "kind": "正文免费",
        "why": "Linux API 的权威语义参考，厘清 LT / ET。",
        "read": "ET + nonblocking + EAGAIN；沿链接读 socket、mmap、sched_setaffinity"
      }
    ],
    "order": "先 sockets，再 TCP 原理和实验，最后 epoll LT / ET；kernel bypass 作为后续专题。",
    "project": "实现 length-prefixed TCP echo 与 UDP 序号回放；注入分片、断连和丢包。",
    "accept": "ET 读到 EAGAIN；限制缓冲区，慢消费者不导致无限内存增长。"
  },
  {
    "id": "m6",
    "title": "Performance Profiling",
    "zh": "用证据优化",
    "phase": "系统",
    "time": "1–2 周",
    "goal": "建立端到端与微基准，区分吞吐、median、p99、p99.9 与测量开销。",
    "resources": [
      {
        "name": "Brendan Gregg · Linux perf Examples",
        "url": "https://www.brendangregg.com/perf.html",
        "kind": "正文免费",
        "why": "公开工具实例，能直接验证 CPU 与内核瓶颈。",
        "read": "perf stat → record/report → Flame Graph；付费书不是前置"
      },
      {
        "name": "Google Benchmark",
        "url": "https://github.com/google/benchmark",
        "kind": "开源项目",
        "why": "规范微基准的构造，减少编译器优化与计时误差。",
        "read": "README / user guide：warmup、repetitions、DoNotOptimize"
      },
      {
        "name": "Erik Rigtorp · Low Latency Tuning Guide",
        "url": "https://rigtorp.se/low-latency-guide/",
        "kind": "正文免费",
        "why": "将 Linux 调优转为可复现实验清单。",
        "read": "CPU affinity、频率、NUMA、interrupts；先测再调"
      }
    ],
    "order": "先稳定基线与负载，再采样热点，最后每次只改一个变量。",
    "project": "给队列与回放器建立 benchmark；生成 flame graph 和延迟直方图。",
    "accept": "报告样本数、warmup、CPU、编译器、负载及原始结果；不把微基准当实盘承诺。"
  },
  {
    "id": "m7",
    "title": "Trading Systems",
    "zh": "交易系统架构",
    "phase": "交易",
    "time": "1–2 周",
    "goal": "画出行情、策略、风控、订单网关与成交回报链路，标清状态所有者。",
    "resources": [
      {
        "name": "Trading System Notes",
        "url": "https://github.com/zzxscodes/trading-system-notes",
        "kind": "正文免费",
        "why": "社区交易系统笔记用于串联主题；引用的商业书不等于免费正文。",
        "read": "架构与 market data 主题；性能结论回到原始出处"
      },
      {
        "name": "exchange-core",
        "url": "https://github.com/exchange-core/exchange-core",
        "kind": "开源项目",
        "why": "Java 交易引擎包含撮合、风险与持久化，适合比较架构。",
        "read": "命令流水线 → risk → journaling / snapshots；不作为 C++ 模板"
      },
      {
        "name": "LMAX / Disruptor",
        "url": "https://github.com/LMAX-Exchange/disruptor",
        "kind": "开源项目",
        "why": "研究 ring buffer、序列号与消费者依赖。实现为 Java。",
        "read": "设计文档 → sequencer → gating；理解架构再迁移 C++"
      },
      {
        "name": "Building Low Latency Applications with C++ · companion code",
        "url": "https://github.com/PacktPublishing/Building-Low-Latency-Applications-with-CPP",
        "kind": "仅配套代码开放",
        "why": "可观察教学交易系统的模块连接；书本正文付费，不作主线。",
        "read": "只阅读仓库源码与 README；用免费规范补齐解释"
      }
    ],
    "order": "单线程确定性模型 → 组件边界 → 消息流水线 → 可观测性。",
    "project": "搭建模拟交易流水线，每条事件附 sequence、correlation ID 与时间戳。",
    "accept": "相同输入产出相同状态；展示排队、策略、风控和网关各段耗时。"
  },
  {
    "id": "m8",
    "title": "Market Data & Order Book",
    "zh": "行情与订单簿",
    "phase": "交易",
    "time": "2–3 周",
    "goal": "按订单 ID 重建 L3；聚合价格档位；识别重复、缺口和无效更新。",
    "resources": [
      {
        "name": "Nasdaq TotalView-ITCH 5.0",
        "url": "https://www.nasdaqtrader.com/content/technicalsupport/specifications/dataproducts/NQTVITCHspecification.pdf",
        "kind": "公开规范",
        "why": "官方二进制行情消息定义，是重建订单簿的可靠契约。",
        "read": "Stock Directory → Add / Execute / Cancel / Delete / Replace；核对单位与字节序"
      },
      {
        "name": "jeog / SimpleOrderbook",
        "url": "https://github.com/jeog/SimpleOrderbook",
        "kind": "开源项目",
        "why": "C++ 订单簿与撮合实现，适合对照数据结构与行为。",
        "read": "README → order types → tests → matching；性能声明须自行验证"
      }
    ],
    "order": "先协议消息语义，再简单 map 基线，再优化布局；行情簿与撮合引擎规则分开。",
    "project": "写 Add / Cancel / Execute / Delete / Replace 回放器，维护 L3 与 top-of-book。",
    "accept": "全量成交删除订单；replace 更新 ID；异常引用可观测；gap 后禁止把旧状态视为有效。"
  },
  {
    "id": "m9",
    "title": "Order Management / Risk / Recovery",
    "zh": "订单、风险与恢复",
    "phase": "交易",
    "time": "2–3 周",
    "goal": "建立订单状态机，处理拒单、部分成交、撤单竞态、风险限额与重启对账。",
    "resources": [
      {
        "name": "Nasdaq OUCH · official specifications",
        "url": "https://nasdaqtrader.com/Trader.aspx?id=ouch",
        "kind": "公开规范",
        "why": "官方订单输入协议；从版本入口选择 OUCH 5.0 并固定版本。",
        "read": "Enter / Cancel / Replace → Accepted / Executed / Rejected → 会话传输"
      },
      {
        "name": "QuickFIX · C++ FIX engine",
        "url": "https://github.com/quickfix/quickfix",
        "kind": "开源项目",
        "why": "研究真实会话引擎的序号、重传与状态管理。",
        "read": "文档、session、message store、测试；FIX 不等于 OUCH"
      },
      {
        "name": "exchange-core",
        "url": "https://github.com/exchange-core/exchange-core",
        "kind": "开源项目",
        "why": "Java 交易引擎包含撮合、风险与持久化，适合比较架构。",
        "read": "命令流水线 → risk → journaling / snapshots；不作为 C++ 模板"
      }
    ],
    "order": "状态机 → pre-trade risk → 幂等事件处理 → journal / snapshot → 对账。",
    "project": "模拟 OMS：数量/名义金额/敞口限额、kill switch、日志与快照；注入撤单和成交竞态。",
    "accept": "重复成交不重复计仓；发送成功但回报丢失时进入待对账；恢复后状态与无故障回放一致。"
  },
  {
    "id": "m10",
    "title": "Exchange Protocols",
    "zh": "交易所协议",
    "phase": "交易",
    "time": "1–2 周",
    "goal": "精确处理 ITCH / OUCH 字段、字节序、定点价格与版本；区别消息与传输。",
    "resources": [
      {
        "name": "Nasdaq TotalView-ITCH 5.0",
        "url": "https://www.nasdaqtrader.com/content/technicalsupport/specifications/dataproducts/NQTVITCHspecification.pdf",
        "kind": "公开规范",
        "why": "官方二进制行情消息定义，是重建订单簿的可靠契约。",
        "read": "Stock Directory → Add / Execute / Cancel / Delete / Replace；核对单位与字节序"
      },
      {
        "name": "Nasdaq OUCH · official specifications",
        "url": "https://nasdaqtrader.com/Trader.aspx?id=ouch",
        "kind": "公开规范",
        "why": "官方订单输入协议；从版本入口选择 OUCH 5.0 并固定版本。",
        "read": "Enter / Cancel / Replace → Accepted / Executed / Rejected → 会话传输"
      },
      {
        "name": "QuickFIX · C++ FIX engine",
        "url": "https://github.com/quickfix/quickfix",
        "kind": "开源项目",
        "why": "研究真实会话引擎的序号、重传与状态管理。",
        "read": "文档、session、message store、测试；FIX 不等于 OUCH"
      }
    ],
    "order": "ITCH 行情 → OUCH 订单 → 传输与会话；FIX 用于比较，不混用语义。",
    "project": "生成合成二进制 fixtures；逐字节解析并测试截断、未知类型和非法长度。",
    "accept": "不直接 reinterpret_cast 网络结构；固定协议版本；规范免费不代表实时 feed / 接入免费。"
  },
  {
    "id": "m11",
    "title": "Hands-on Projects",
    "zh": "完整作品集",
    "phase": "实践",
    "time": "3–4 周",
    "goal": "把前面练习接成可回放、可恢复、可测量的模拟交易系统。",
    "resources": [
      {
        "name": "jeog / SimpleOrderbook",
        "url": "https://github.com/jeog/SimpleOrderbook",
        "kind": "开源项目",
        "why": "C++ 订单簿与撮合实现，适合对照数据结构与行为。",
        "read": "README → order types → tests → matching；性能声明须自行验证"
      },
      {
        "name": "exchange-core",
        "url": "https://github.com/exchange-core/exchange-core",
        "kind": "开源项目",
        "why": "Java 交易引擎包含撮合、风险与持久化，适合比较架构。",
        "read": "命令流水线 → risk → journaling / snapshots；不作为 C++ 模板"
      },
      {
        "name": "Google Benchmark",
        "url": "https://github.com/google/benchmark",
        "kind": "开源项目",
        "why": "规范微基准的构造，减少编译器优化与计时误差。",
        "read": "README / user guide：warmup、repetitions、DoNotOptimize"
      },
      {
        "name": "Nasdaq TotalView-ITCH 5.0",
        "url": "https://www.nasdaqtrader.com/content/technicalsupport/specifications/dataproducts/NQTVITCHspecification.pdf",
        "kind": "公开规范",
        "why": "官方二进制行情消息定义，是重建订单簿的可靠契约。",
        "read": "Stock Directory → Add / Execute / Cancel / Delete / Replace；核对单位与字节序"
      }
    ],
    "order": "P1 订单簿 → P2 网络与队列 → P3 OMS/恢复 → P4 性能报告。",
    "project": "提交 C++20 / CMake 仓库：生成器、行情回放、订单簿、模拟策略、风控、网关、故障注入和 README。",
    "accept": "一条构建/运行说明可复现；golden replay 一致；丢包恢复通过；发布优化前后报告。"
  },
  {
    "id": "m12",
    "title": "Interview Prep",
    "zh": "用项目讲清取舍",
    "phase": "实践",
    "time": "持续",
    "goal": "解释 C++、系统、并发和交易状态的因果关系，用项目证据回答设计题。",
    "resources": [
      {
        "name": "CPP-Quant-Offer",
        "url": "https://github.com/XiaoXKKK/CPP-Quant-Offer",
        "kind": "正文免费",
        "why": "中文社区专题与可运行例子，适合复习；不是官方面试题库。",
        "read": "cache、memory model、epoll、order book；交叉验证答案"
      },
      {
        "name": "MIT OCW · 6.006",
        "url": "https://ocw.mit.edu/courses/6-006-introduction-to-algorithms-fall-2011/",
        "kind": "正文免费",
        "why": "大学公开算法课程，支持独立推理而非背题。",
        "read": "哈希、树、堆、摊还分析；做 problem sets"
      },
      {
        "name": "C++ Core Guidelines",
        "url": "https://isocpp.github.io/CppCoreGuidelines/CppCoreGuidelines",
        "kind": "正文免费",
        "why": "由语言专家维护，将资源管理落实为设计规则。",
        "read": "R / I / CP：所有权、接口、并发"
      },
      {
        "name": "cppreference",
        "url": "https://en.cppreference.com/w/cpp.html",
        "kind": "正文免费",
        "why": "查语义与复杂度的精确参考；社区维护，并非 ISO 标准正文。",
        "read": "容器失效规则、memory_order、chrono、span"
      }
    ],
    "order": "先完成项目，再按弱项回顾；每次用 5 分钟讲假设、方案、成本和验证。",
    "project": "每周复盘 6 题：RAII、cache、acquire/release、epoll、LOB、撤单竞态；现场实现核心逻辑。",
    "accept": "能画 happens-before、推演订单状态、估算复杂度，并说明性能数据的局限。"
  }
];
