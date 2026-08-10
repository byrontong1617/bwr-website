/* ============================================
   Borneo Wild Realm | 产品数据
   ============================================
   后期修改产品图文只需编辑此文件
   image 字段留空时显示 SVG 占位，填写路径即可替换为真实图片
   ============================================ */

var BWR_PRODUCTS = [

  /* ========== 钙粉系列 ========== */
  {
    name: '守宫钙粉 · 含D3',
    tagline: '雨林配方，每一勺都是进化答案',
    desc: '配方灵感来源于婆罗洲野生守宫自然钙质摄入路径，基于公开学术文献设计。钙磷比精准对标野外实测数据2:1。添加维生素D3，模拟雨林光照下的自然合成机制，适合无UVB或UVB不足的饲养环境。',
    shortDesc: '天然碳酸钙 · 钙磷比2:1 · 800目超细研磨 · 含维生素D3',
    category: 'calcium',
    featured: true,
    badge: 'BORNEO INSPIRED',
    image: 'images/calcium.png',
    specs: [
      { label: '钙含量', value: '≥38%' },
      { label: '钙磷比', value: '≈2:1' },
      { label: '粉体细度', value: '800目' },
      { label: '维生素D3', value: '400IU/g' },
      { label: '净含量', value: '100g/罐' },
      { label: '保质期', value: '24个月' }
    ],
    reptiles: ['豹纹守宫', '睫角守宫', '肥尾守宫', '其他守宫']
  },
  {
    name: '爬宠无D3钙粉',
    tagline: '雨林配方，每一勺都是进化答案',
    desc: '高钙低磷纯钙配方，源自雨林矿物。模拟婆罗洲岩壁渗出物的天然矿物形态，钙磷比精准对标野外实测数据 2:1。适用于配备充足UVB灯具的饲养环境，避免D3过量摄入。守宫、蜥蜴通用。',
    shortDesc: '天然碳酸钙 · 钙磷比2:1 · 800目超细研磨 · 不含维生素D3',
    category: 'calcium',
    featured: true,
    badge: 'PURE CALCIUM',
    image: 'images/calcium-no-d3.png',
    specs: [
      { label: '钙含量', value: '≥38%' },
      { label: '钙磷比', value: '≈2:1' },
      { label: '粉体细度', value: '800目' },
      { label: '维生素D3', value: '不含' },
      { label: '净含量', value: '100g/罐' },
      { label: '保质期', value: '24个月' }
    ],
    reptiles: ['豹纹守宫', '睫角守宫', '肥尾守宫', '其他守宫']
  },

  /* ========== 电解质系列 ========== */
  {
    name: '爬宠电解质补充液',
    tagline: '模拟雨林矿物水源，快速恢复体能',
    desc: '参考婆罗洲雨林天然矿泉水的矿物配比，含有爬宠必需的钠、钾、钙、镁等电解质离子。适用于蜕皮期、运输后、食欲不振等需要快速补水的场景，帮助维持体液平衡。',
    shortDesc: '雨林矿物配比 · 钠钾钙镁 · 快速补水 · 蜕皮期专用',
    category: 'electrolyte',
    featured: true,
    badge: 'HYDRATION+',
    image: 'images/electrolyte.png',
    specs: [
      { label: '钠(Na)', value: '1200mg/L' },
      { label: '钾(K)', value: '800mg/L' },
      { label: '钙(Ca)', value: '600mg/L' },
      { label: '镁(Mg)', value: '150mg/L' },
      { label: '净含量', value: '250ml/瓶' },
      { label: '保质期', value: '18个月' }
    ],
    reptiles: ['守宫', '蜥蜴', '龟类', '蛇类']
  },

  /* ========== 益生菌系列 ========== */
  {
    name: '爬宠益生菌',
    tagline: '温和配方，守护爬宠肠道平衡',
    desc: '针对爬宠肠道菌群结构研发，含多种有益活菌及益生元。温和配方不刺激肠道，适合爬宠日常调理、应激期与少食阶段使用，帮助维持肠道菌群平衡、改善消化吸收。',
    shortDesc: '肠道平衡 · 消化支持 · 少食应激期 · 温和配方',
    category: 'probiotics',
    featured: true,
    badge: 'GUT CARE',
    image: 'images/probiotics.png',
    specs: [
      { label: '活菌含量', value: '≥10⁸ CFU/g' },
      { label: '菌株数', value: '5种复合' },
      { label: '益生元', value: '低聚果糖' },
      { label: '适用阶段', value: '日常/应激/少食' },
      { label: '净含量', value: '50g/罐' },
      { label: '保质期', value: '18个月' }
    ],
    reptiles: ['守宫', '蜥蜴', '龟类', '蛇类']
  },

  /* ========== 综合营养粉系列 ========== */
  {
    name: '综合营养粉',
    tagline: '多维营养，全面守护爬宠日常',
    desc: '综合多种维生素与矿物质，按爬宠营养需求科学配比。含维生素A/D3/E/B族及钙磷锌等关键微量元素，适用于日常饲养补充、骨骼养护与状态管理。可与钙粉搭配使用。',
    shortDesc: '多维营养 · 骨骼养护 · 状态管理 · 日常饲养补充',
    category: 'multivitamin',
    featured: true,
    badge: 'MULTIVITAMIN+',
    image: 'images/multivitamin.png',
    specs: [
      { label: '维生素A', value: '50000IU/kg' },
      { label: '维生素D3', value: '10000IU/kg' },
      { label: '维生素E', value: '500IU/kg' },
      { label: 'B族复合', value: '≥8种' },
      { label: '净含量', value: '100g/罐' },
      { label: '保质期', value: '24个月' }
    ],
    reptiles: ['守宫', '蜥蜴', '龟类', '其他爬宠']
  },

  /* ========== 冻干辅食系列 ========== */
  {
    name: '冻干蟋蟀',
    tagline: '零下40度冻干锁鲜，保留雨林昆虫天然营养',
    desc: '采用-40度真空冻干工艺，完整保留蟋蟀的天然蛋白质和甲壳素。无添加剂，无防腐剂，模拟爬宠在野外的天然猎食结构。高适口性，适合作为守宫日常辅食或奖励零食。',
    shortDesc: '-40度冻干 · 高蛋白 · 无添加 · 天然猎食结构',
    category: 'freeze-dried',
    featured: false,
    badge: 'FREEZE-DRIED',
    image: 'images/freeze-dried-cricket.png',
    specs: [
      { label: '粗蛋白', value: '≥60%' },
      { label: '粗脂肪', value: '≥15%' },
      { label: '甲壳素', value: '≥8%' },
      { label: '水分', value: '≤5%' },
      { label: '净含量', value: '30g/罐' },
      { label: '保质期', value: '18个月' }
    ],
    reptiles: ['守宫', '蜥蜴', '蛙类', '小型爬宠']
  },
  {
    name: '冻干面包虫',
    tagline: '零下40度冻干锁鲜，高蛋白高适口',
    desc: '精选优质面包虫幼虫，冻干工艺保留天然营养。富含蛋白质和必需脂肪酸，可作为守宫、蜥蜴、蛙类、小型爬宠的日常营养辅食，搭配钙粉使用效果更佳。',
    shortDesc: '-40度冻干 · 高蛋白高脂肪 · 无添加 · 搭配钙粉',
    category: 'freeze-dried',
    featured: false,
    badge: 'FREEZE-DRIED',
    image: 'images/freeze-dried-mealworm.png',
    specs: [
      { label: '粗蛋白', value: '≥50%' },
      { label: '粗脂肪', value: '≥25%' },
      { label: '水分', value: '≤5%' },
      { label: '净含量', value: '30g/罐' },
      { label: '保质期', value: '18个月' }
    ],
    reptiles: ['守宫', '蜥蜴', '蛙类', '小型爬宠']
  },
  {
    name: '冻干杜比亚蟑螂',
    tagline: '零下40度冻干锁鲜，天然高钙猎食',
    desc: '杜比亚蟑螂是爬宠公认的高品质饲料昆虫，蛋白质含量高且甲壳素含量低，易于消化吸收。冻干处理保留完整营养，适用于口·性零食、爬宠、互动喂食场景。',
    shortDesc: '-40度冻干 · 高蛋白低壳 · 易消化 · 互动喂食',
    category: 'freeze-dried',
    featured: false,
    badge: 'FREEZE-DRIED',
    image: 'images/freeze-dried-dubia.png',
    specs: [
      { label: '粗蛋白', value: '≥55%' },
      { label: '粗脂肪', value: '≥20%' },
      { label: '钙含量', value: '≥0.8%' },
      { label: '水分', value: '≤5%' },
      { label: '净含量', value: '30g/罐' },
      { label: '保质期', value: '18个月' }
    ],
    reptiles: ['守宫', '蜥蜴', '蛙类', '小型爬宠']
  }
  /* ========== 爬宠垫材系列 ========== */
  {
    name: '森林地表垫材',
    tagline: '模拟原生落叶层，还原雨林地表的呼吸感',
    desc: '以婆罗洲雨林落叶层生态为灵感，精选杉木纤维经发酵处理，质地疏松透气，保湿性能优异。模拟野生爬宠栖息地的自然地表结构，为守宫、蜥蜴、陆龟等提供贴近原生的环境基质。',
    shortDesc: '杉木纤维发酵 · 保湿透气 · 模拟雨林落叶层 · 4L大容量',
    category: 'substrate',
    featured: true,
    badge: 'RAINFOREST BEDDING',
    image: 'images/forest-floor-substrate.png',
    specs: [
      { label: '主要成分', value: '杉木纤维发酵处理' },
      { label: '净含量', value: '4L/袋' },
      { label: '适用环境', value: '雨林/半雨林型' },
      { label: '保湿性', value: '优异' },
      { label: '透气性', value: '良好' },
      { label: '适用物种', value: '守宫/蜥蜴/陆龟' }
    ],
    reptiles: ['守宫', '蜥蜴', '陆龟', '蛇类']
  },
  {
    name: '松树皮垫材',
    tagline: '天然松树皮高温灭菌，干爽洁净的爬行基底',
    desc: '精选天然松树皮，经高温灭菌处理，去除杂菌与虫害。颗粒结构稳定不易粉化，干爽透气适合干燥环境饲养需求。为守宫、蜥蜴、蛇类等爬宠提供清洁舒适的栖息基底。',
    shortDesc: '天然松树皮 · 高温灭菌 · 干爽透气 · 不易粉化 · 4L',
    category: 'substrate',
    featured: true,
    badge: 'DRY BEDDING',
    image: 'images/pine-bark-substrate.png',
    specs: [
      { label: '主要成分', value: '天然松树皮高温灭菌' },
      { label: '净含量', value: '4L/袋' },
      { label: '适用环境', value: '干旱/半干旱型' },
      { label: '干爽度', value: '高' },
      { label: '粉化率', value: '低' },
      { label: '适用物种', value: '守宫/蜥蜴/蛇类' }
    ],
    reptiles: ['守宫', '蜥蜴', '蛇类', '陆龟']
  },
  {
    name: '雨林地表垫材',
    tagline: '椰壳土·腐殖土·树皮落叶，复刻真实雨林地表',
    desc: '以婆罗洲雨林地表为原型，复配椰壳土、腐殖土与天然树皮落叶，构建多层结构的雨林地表环境。上层落叶层模拟自然腐殖质，下层椰壳土提供稳定保湿基底，适合高湿度环境需求物种。',
    shortDesc: '椰壳土+腐殖土+树皮落叶 · 多层结构 · 高保湿 · 4L',
    category: 'substrate',
    featured: false,
    badge: 'RAINFOREST MIX',
    image: 'images/rainforest-floor-substrate.png',
    specs: [
      { label: '主要成分', value: '椰壳土·腐殖土·树皮落叶' },
      { label: '净含量', value: '4L/袋' },
      { label: '适用环境', value: '高湿度雨林型' },
      { label: '结构层次', value: '双层复合' },
      { label: '保湿性', value: '极强' },
      { label: '适用物种', value: '雨林型守宫/蜥蜴/蛙类' }
    ],
    reptiles: ['守宫', '蜥蜴', '蛙类', '蛇类']
  },
  {
    name: '玉米芯垫材',
    tagline: '天然玉米芯干燥处理，温和无刺激的洁净垫材',
    desc: '选用天然玉米芯经干燥处理，颗粒圆润无尖锐棱角，不易误食且安全温和。吸湿除臭性能良好，适合对环境清洁度要求较高的爬宠饲养场景。经济实用，更换便捷。',
    shortDesc: '天然玉米芯 · 干燥处理 · 温和安全 · 吸湿除臭 · 4L',
    category: 'substrate',
    featured: false,
    badge: 'CORN BEDDING',
    image: 'images/corn-cob-substrate.png',
    specs: [
      { label: '主要成分', value: '天然玉米芯干燥处理' },
      { label: '净含量', value: '4L/袋' },
      { label: '适用环境', value: '通用型' },
      { label: '安全性', value: '高（圆润无棱角）' },
      { label: '除臭性', value: '良好' },
      { label: '适用物种', value: '守宫/蜥蜴/蛇类/陆龟' }
    ],
    reptiles: ['守宫', '蜥蜴', '蛇类', '陆龟']
  }

];
