import Action from '../constants/action';

export function fetchPostsSucceeded() {
  return {
    type: Action.FETCH_POSTS_SUCCEEDED,
    posts: [
      {
        "id": 1,
        "name": "莳萝籽",
        "nameEN": "Dill Seed",
        "otherName": "小茴香、土茴香",
        "cover": "https://img3.doubanio.com/view/photo/photo/public/p2401931302.jpg",
        "coverThumbnail": "https://img3.doubanio.com/view/photo/photo/public/p2401931302.jpg",
        "introduction": "莳萝原产于亚洲西南部和中部。莳萝籽的外形呈扁椭圆形，中部为棕色，边缘处颜色较浅。莳萝籽的味道辛香甘甜，有水芹科特有的刺激香味以及像烧焦般的辛辣味。可以整颗或者粉碎后用于烹饪。",
        "medicalProperties": "莳萝的味道会在口中停留较长时间，因此落实子可被用作口气清新剂。莳萝籽也有助于消化，刺激消化系统并促进食欲。对于哺乳期的妈妈，可以促进母乳分泌。",
        "cookingUsage": "在斯堪的纳维亚地区，莳萝籽常被用来给面包、土豆、鱼和贝类菜肴调味。法国人喜欢在蛋糕或者糕饼上使用莳萝。在烧烤鲑鱼等富含油脂的鱼上撒上莳萝籽有助于去腥添香。"
      },
      {
        "id": 2,
        "name": "八角茴香",
        "nameEN": "Star Anise",
        "otherName": "八角",
        "cover": "https://img3.doubanio.com/view/photo/photo/public/p2401931302.jpg",
        "coverThumbnail": "https://img3.doubanio.com/view/photo/photo/public/p2401931302.jpg",
        "introduction": "八角茴香原产于印度东部。外形像一个八角星，因而得名。其气味稍含丁香和甘草的芳香，味道像大茴香，具有微微的苦味和甜味。可以整粒或者研磨后使用。",
        "medicalProperties": "八角具有帮助消化，预防腹部胀气和肠道紊乱的功效。它是一种天然的利尿剂并且可以促进食欲。",
        "cookingUsage": "中国人在很多菜肴中使用八角茴香，尤其是使用在鸭子、鸡和猪肉中来去腥增香，或是用于炖菜或焖菜中提味。研磨后的八角茴香还可以加入咖啡和茶中增强风味。八角也是五香粉的五种成分之一。"
      },
      {
        "id": 3,
        "name": "众香子",
        "nameEN": "Allspice",
        "otherName": "牙买加胡椒、甘椒",
        "cover": "https://img3.doubanio.com/view/photo/photo/public/p2401931302.jpg",
        "coverThumbnail": "https://img3.doubanio.com/view/photo/photo/public/p2401931302.jpg",
        "introduction": "众香子原产于中、南美洲。经过干燥后，众香子变为棕色，外形和棕色大颗的胡椒很类似。众香子是一种三位一体的香料，兼有肉桂、豆蔻和丁香的味道。使用时最好购买整粒需要时现磨使用以保留其风味。",
        "medicalProperties": "众香子具有促进消化，助益神经系统的功效。",
        "cookingUsage": "你可以将众香子当做肉桂、豆蔻和丁香中的任何一种使用。它尝尝被用于餐后甜点、奶油冻、鱼类和肉类中。其中，众香子与羊肉尤其相配。在德国众香子常被用于制作市售的香肠。它也是制作咖喱粉的香料之一。"
      },
      {
        "id": 4,
        "name": "肉桂",
        "nameEN": "Cinnamon",
        "otherName": "桂皮",
        "cover": "https://img3.doubanio.com/view/photo/photo/public/p2401931302.jpg",
        "coverThumbnail": "https://img3.doubanio.com/view/photo/photo/public/p2401931302.jpg",
        "introduction": "肉桂被认为是由腓尼基商人首次将其带到了中东地区，随后在欧洲被广泛使用。肉桂味道芳香而温和，有一种木本的芳香的气味。桂皮呈浅棕色且较薄。烹饪中若不想食物中有肉桂粉，可以使用肉桂棒代替。",
        "medicalProperties": "桂皮是一种非常好的抗氧化原料。曾被列为含抗氧化剂最多的食物中的第四位。如果每天在食物中加入一些桂皮，则足够身体抗氧化的需要。桂皮具有促进消化，增进食欲的功效，同时也可以帮助消除饥饿感。它是腺系统的强促进剂，能够帮助减轻感冒和流感的症状。",
        "cookingUsage": "在中东，肉桂经常被加入羔羊砂锅菜中。它也经常用于制作甜点，尤其是炖苹果、炖梨、苹果馅饼、英式水果派、米布丁等。在巧克力中加入一小撮肉桂粉可以使巧克力味道更加浓郁。"
      },
      {
        "id": 5,
        "name": "摩洛哥豆蔻",
        "nameEN": "Grains of Paradise",
        "otherName": "非洲胡椒",
        "cover": "https://img3.doubanio.com/view/photo/photo/public/p2401931302.jpg",
        "coverThumbnail": "https://img3.doubanio.com/view/photo/photo/public/p2401931302.jpg",
        "introduction": "摩洛哥豆蔻原产于西非，被大多数人认为是一种催情剂。外形呈棕色棱锥形。有着类似黑胡椒的味道，又带有稍许柑橘的风味。",
        "medicalProperties": "摩洛哥豆蔻的种子被认为具有刺激和利尿的功效，在西非草药治疗中被经常使用。",
        "cookingUsage": "传统上使用黑胡椒的菜肴都可以使用摩洛哥豆蔻。在西非和摩洛哥，它是当地一种名为ras el-hanout的混合香料的成分之一。你可以在温热的葡萄酒或者冬天的炖砂锅中加入摩洛哥豆蔻，或将其加入番茄沙司中制成烧烤调料。"
      },
      {
        "id": 6,
        "name": "小豆蔻",
        "nameEN": "Cardamom",
        "otherName": "白豆蔻、圆豆蔻",
        "cover": "https://img3.doubanio.com/view/photo/photo/public/p2401931302.jpg",
        "coverThumbnail": "https://img3.doubanio.com/view/photo/photo/public/p2401931302.jpg",
        "introduction": "小豆蔻原产于印度南部。是世界上最古老和最有价值的香料之一。它是仅次于藏红花和香草的昂贵香料。小豆蔻外部由绿色豆荚包裹，内部含有坚硬的、棕黑色的籽。它的气味醇香，带有强烈的柠檬和樟脑的味道，味道辛辣微苦。",
        "medicalProperties": "小豆蔻可被用于治疗胃部不适，可促进消化，减少肠道气体。它还可减轻呼吸系统紊乱的情况如支气管炎，哮喘等等。",
        "cookingUsage": "小豆蔻可以磨碎加入鱼中，或给咖喱和肉饭调味。在阿拉伯，它常被加入咖啡和浓甜茶中调味。在北欧，它用于给面包、面粉类糕饼和蛋糕调味。在奶油冻、冰激凌和炖水果中加入小豆蔻可以给它们增添鲜美的味道。"
      },
      {
        "id": 7,
        "name": "肉豆蔻",
        "nameEN": "Nutmeg",
        "otherName": "肉果、玉果",
        "cover": "https://img3.doubanio.com/view/photo/photo/public/p2401931302.jpg",
        "coverThumbnail": "https://img3.doubanio.com/view/photo/photo/public/p2401931302.jpg",
        "introduction": "肉豆蔻来自一种热带常绿乔木豆蔻树的果实。它通常很大，约1厘米长，有着坚硬的核仁。肉豆蔻有一种甘甜而刺激的芳香，味道辣中带苦。一般不整颗使用，而是研磨后再用。",
        "medicalProperties": "肉豆蔻可帮助消化，预防腹胀气。传闻还有壮阳的作用。如果使用达到一定剂量还有镇静和麻醉的作用。",
        "cookingUsage": "肉豆蔻磨碎后可加在温酒或热巧克力中以增加它们的风味。它还可以给餐后甜点调味。在荷兰，豆蔻广泛用于蔬菜酱和土豆酱中，意大利人用肉豆蔻给肉和意大利面调味。"
      },
      {
        "id": 8,
        "name": "藏红花",
        "nameEN": "Saffron",
        "otherName": "番红花",
        "cover": "https://img3.doubanio.com/view/photo/photo/public/p2401931302.jpg",
        "coverThumbnail": "https://img3.doubanio.com/view/photo/photo/public/p2401931302.jpg",
        "introduction": "藏红花是世界上最昂贵的香料。它原产于地中海地区、小亚西亚和伊朗。藏红花呈橘黄至金黄色，是用原产于土耳其的蓝色番红花属花的花柱头干燥制成。每150000朵鲜花才可得到1千克晒干的藏红花。藏红花带有强烈的独特香气和苦味，只需少量即可为菜肴增添美味。",
        "medicalProperties": "藏红花具有天然的抗抑郁功能，可以缓解压力，消除忧虑以及精神疲劳。它还具有抗癌和抗氧化作用。",
        "cookingUsage": "藏红花常用来给食物着色和调味，它是西班牙什锦菜饭(paella)、法国红烧肉(bouillabaisse)和意大利米兰干酪洋葱调味饭(risotto alla Milanese)的必备成分。藏红花可以给贝类和鱼类菜肴调味。使用前应将其打碎，用少量热水浸泡，再把过滤后的液体加入菜肴中。或者，你可以将藏红花丝烤干后弄碎直接放入菜肴中。少量的藏红花就能够给菜肴增添美味，提供花一般的芳香，带来金黄的色泽。"
      },
      {
        "id": 9,
        "name": "香草",
        "nameEN": "Vanilla",
        "otherName": "",
        "cover": "https://img3.doubanio.com/view/photo/photo/public/p2401931302.jpg",
        "coverThumbnail": "https://img3.doubanio.com/view/photo/photo/public/p2401931302.jpg",
        "introduction": "香草原产于南美，因为其栽培的难度而成为了一种非常昂贵的香料。如今大部分便宜的香草口味的产品都是由合成香料或香料提取物所制成。香草具有细细长长的外形，呈深棕色，具有浓郁、芳醇、甘甜的气味和味道。香草豆可以整粒使用，也可以从中间切开，使用里面黏性黑色的酱和小黑籽。",
        "medicalProperties": "香草具有提神、安神的作用。对男性有壮阳作用。同时它还具有助消化、美容养颜等功效。",
        "cookingUsage": "香草常用来给芥末、冰激凌、蛋糕、饼干、餐后甜甜点、蛋奶酥和奶油饮品调味，如冰咖啡或热巧克力。"
      },
      {
        "id": 10,
        "name": "大茴香",
        "nameEN": "Aniseed",
        "otherName": "茴芹",
        "cover": "https://img3.doubanio.com/view/photo/photo/public/p2401931302.jpg",
        "coverThumbnail": "https://img3.doubanio.com/view/photo/photo/public/p2401931302.jpg",
        "introduction": "大茴香是世界上最古老的香料之一，原产于埃及和中东及印度一代。外形呈椭圆形。具有浓郁的香气和轻微的辛辣和胡椒的味道。可以整粒或研磨后使用。",
        "medicalProperties": "大茴香具有暖性的功效，可刺激血液循环。可以促进食欲、帮助消化和消除疲劳。",
        "cookingUsage": "亚洲人喜欢将大茴香用在炖汤或砂锅菜中。在欧洲，大茴香常被当作是蛋糕和饼干的调味料。"
      },
      {
        "id": 11,
        "name": "葛缕子",
        "nameEN": "Caraway",
        "otherName": "葛蒿、胡荽子、茴香子",
        "cover": "https://img3.doubanio.com/view/photo/photo/public/p2401931302.jpg",
        "coverThumbnail": "https://img3.doubanio.com/view/photo/photo/public/p2401931302.jpg",
        "introduction": "葛缕子原产于亚洲、北欧及中欧。葛缕子的种子呈褐色，长度约为1/5英寸，外形细长，尾部收窄似月牙一般。葛缕子具有水果一般的清甜芳香，咬碎后却有柠檬皮般的辛辣苦涩。葛缕子常常整颗使用，压碎后亦可用于制作蜜饯。",
        "medicalProperties": "咀嚼葛缕子可以减轻消化不良和胃抽经的症状，帮助排除浊气。它还具有促进乳汁分泌的效果。",
        "cookingUsage": "德国人将葛缕子用来给德国泡菜、卷心菜、汤和香肠调味。磨碎的籽能用于咖喱粉中，也可作蛋糕、小甜饼的调料。"
      },
      {
        "id": 12,
        "name": "葫芦巴",
        "nameEN": "Fenugreek",
        "otherName": "苦豆",
        "cover": "https://img3.doubanio.com/view/photo/photo/public/p2401931302.jpg",
        "coverThumbnail": "https://img3.doubanio.com/view/photo/photo/public/p2401931302.jpg",
        "introduction": "葫芦巴原产于中东和印度。呈棕黄色，具有扁圆形的外表。气味芳香，味道微苦，是最早被人所知的药用香料之一。它曾被埃及人作为防腐剂用在尸体上，也具有清新空气的作用。烹调时可整粒或磨成粉使用。",
        "medicalProperties": "葫芦巴具有促进乳汁分泌，增进食欲的功效。它也被用于治疗胃炎和消化系统紊乱的问题。",
        "cookingUsage": "葫芦巴常被用于咖喱中。研磨好的籽可以可以用在卤汁，调味品和酸辣酱中。孕妇不能使用葫芦巴。"
      },
      {
        "id": 13,
        "name": "芫荽",
        "nameEN": "Coriander",
        "otherName": "胡荽、香菜",
        "cover": "https://img3.doubanio.com/view/photo/photo/public/p2401931302.jpg",
        "coverThumbnail": "https://img3.doubanio.com/view/photo/photo/public/p2401931302.jpg",
        "introduction": "芫荽原产于东欧、中东地区。芫荽籽成熟后为圆形，呈浅棕色。芫荽的味道尝起来温和酸甜，微含辛辣的味道，透着干橘皮的味道。芫荽籽的外壳很薄，常常研磨成粉使用。",
        "medicalProperties": "芫荽具有改善消化系统，治疗消化不良、胀气的功效。它可以帮助降低血糖，对糖尿病有好处。其中所含有的抗氧化成分也有助于预防衰老。",
        "cookingUsage": "芫荽可以说是一种万能香料，能用于鱼、家禽和蔬菜类菜肴中，也可以放入面包和蛋糕面糊中。研磨的粉可以放入香肠、咖喱中。芫荽籽也是印度咖哩的原料之一。"
      },
      {
        "id": 14,
        "name": "孜然",
        "nameEN": "Cumin",
        "otherName": "",
        "cover": "https://img3.doubanio.com/view/photo/photo/public/p2401931302.jpg",
        "coverThumbnail": "https://img3.doubanio.com/view/photo/photo/public/p2401931302.jpg",
        "introduction": "孜然原产于中东。它比葛缕子略小，颜色更加暗淡。它有一种刺激、辛辣、芳香的味道。可以整颗或磨成粉使用。",
        "medicalProperties": "孜然具有促进消化，治疗胃部紊乱的功效。可以缓解饮酒过度引起的不适。外敷可以缓解粉刺、痤疮等皮肤小问题。",
        "cookingUsage": "孜然是很多北非蒸粗麦粉类菜肴（将碎小麦、调味肉、蔬菜、鹰嘴豆泥河葡萄干一起蒸的食物）的重要配料。孜然可以给肉制品和干酪调味。在西班牙，它和番红花、肉桂一起用在砂锅菜中。在得克萨斯州，它被放入墨西哥辣味牛肉中。"
      },
      {
        "id": 15,
        "name": "姜黄",
        "nameEN": "Turmeric",
        "otherName": "黄姜",
        "cover": "https://img3.doubanio.com/view/photo/photo/public/p2401931302.jpg",
        "coverThumbnail": "https://img3.doubanio.com/view/photo/photo/public/p2401931302.jpg",
        "introduction": "姜黄原产于印度。姜黄的根茎经过水煮、干燥后切片，然后磨成粉，可以制成亮黄色的香料。姜黄具有微微的芳香，新鲜的胡椒味以及轻度刺激、辛辣的味道。",
        "medicalProperties": "有多种科学研究证明姜黄对癌症有疗效，特别是结肠癌，且有可能预防老年痴呆症。姜黄中的姜黄素是一种很强的抗氧化剂，具有抗菌、杀毒、抗感染的作用。姜黄还可以缓解胃溃疡和消化不良。可以消炎以及缓解呼吸系统疾病，如感冒流鼻涕、喉疼、咳嗽等。",
        "cookingUsage": "姜黄即是香料，又是天然色素，是咖喱粉的主要成分之一。除此之外，姜黄也可以加入芥末和一些奶酪中来增强其黄色。"
      },
      {
        "id": 16,
        "name": "丁香",
        "nameEN": "Cloves",
        "otherName": "鸡舌香、丁子香",
        "cover": "https://img3.doubanio.com/view/photo/photo/public/p2401931302.jpg",
        "coverThumbnail": "https://img3.doubanio.com/view/photo/photo/public/p2401931302.jpg",
        "introduction": "丁香是丁香树所结的花苞。丁香树原产于印度尼西亚的摩鹿加群岛。丁香树的花苞在未开花前采摘下来经干燥成为香料，呈红棕色。丁香风味浓郁且芳香。可以整粒或研磨后使用。",
        "medicalProperties": "丁香具有很强的抗菌成分丁字香酚以及麻醉的效果。在古老的药方中，丁香被用来夹在牙齿间，或将它的油抹在牙齿上来治疗牙痛。",
        "cookingUsage": "丁香的用途广泛，常常用来给肉类、咖喱、腌渍肉、蛋糕、面包，以及水果，如苹果、梨等食物调味。丁香还可以为温热的酒增加芳香和风味。它常常与柠檬和糖一起使用。"
      },
      {
        "id": 17,
        "name": "柠檬香草",
        "nameEN": "Lemongrass",
        "otherName": "香茅",
        "cover": "https://img3.doubanio.com/view/photo/photo/public/p2401931302.jpg",
        "coverThumbnail": "https://img3.doubanio.com/view/photo/photo/public/p2401931302.jpg",
        "introduction": "柠檬香草原产于东南亚，叶片幼长，形状像韭菜一般。柠檬香草具有浓郁的柠檬气息和芳香味。在烹饪中使用后会留下纤维，应避免咀嚼它。",
        "medicalProperties": "研究显示柠檬香草具有杀菌的功效。将其药用可以辅助消化并减轻发热的症状。",
        "cookingUsage": "柠檬香草尝尝被用于茶饮、炖汤和咖喱中。它还可以被用于给鸡肉、鱼、牛肉和海鲜调味。柠檬香草和辣椒、大蒜、葱一起使用最佳。"
      },
      {
        "id": 18,
        "name": "漆树",
        "nameEN": "Sumac",
        "otherName": "西西里漆树",
        "cover": "https://img3.doubanio.com/view/photo/photo/public/p2401931302.jpg",
        "coverThumbnail": "https://img3.doubanio.com/view/photo/photo/public/p2401931302.jpg",
        "introduction": "漆树原产于中东，它的果实被采摘干燥后用于烹饪。颜色呈铁锈红色。漆树具有酸酸的柠檬般的味道。常常磨成粉后使用。",
        "medicalProperties": "在中东地区，人们喜欢在沙拉和肉类菜肴中使用磨成粉的漆树以带来类似于果汁的酸味。黎巴嫩和叙利亚人将其洒在鱼上。在土耳其，漆树粉常被加入鹰嘴豆泥和色拉中，既可以增强风味又可以用来装饰。",
        "cookingUsage": "漆树具有高含量的单宁，具有收敛作用和很好的抗氧化功能。能够消除人体内的活性氧，起到预防心血管病，美容养颜的作用。"
      },
    ],
  };
}
