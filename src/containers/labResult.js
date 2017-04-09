import { connect } from 'react-redux';
import LabResult from '../components/labResult';
// import { fetchLabResultSucceeded } from '../actions/addSpicesToLab';

let mixedSpices = [
  {
    "id": 1,
    "name": "柏尔酱",
    "nameEN": "Berbere",
    "introduction": "柏尔酱的味道在辛辣苦涩中带有微微的甜味。通常是由辣椒、黑胡椒、葫芦巴、姜、小豆蔻、芫荽、肉桂和丁香混合而成。其他成分可能包括孜然、众香子、肉豆蔻、辣椒粉、洋葱和大蒜。\n柏尔酱通常可以以干燥的形势或与油混合成糊状物使用。传统上，它可以被用于给豆类或肉类炖菜调味。人们喜欢把它洒在扁豆汤和炒蔬菜中。一些厨师将柏尔酱添加到汉堡、肉丸和烤鸡肉中。",
    "cover": "https://img3.doubanio.com/view/photo/photo/public/p2401931302.jpg",
    "coverThumbnail": "https://img3.doubanio.com/view/photo/photo/public/p2401931302.jpg",
    "ingredients": [1, 2],
  },
  {
    "id": 2,
    "name": "杜卡",
    "nameEN": "Dukkah",
    "introduction": "通常杜卡是一种坚果味的混合香料。通常由坚果（榛子居多）、芝麻、芫荽和孜然混合而成。厨师可能会在此基础上加入百里香、薄荷、胡椒或其他各种或甜或辛辣的香草和香料。\n杜卡经常被用于和羊肉、鸡肉、鱼，甚至豆腐搭配食用。它也可以和橄榄油混合作为面包的蘸酱或洒在烤蔬菜、面食、奶酪，甚至新鲜水果上调味。",
    "cover": "https://img3.doubanio.com/view/photo/photo/public/p2401931302.jpg",
    "coverThumbnail": "https://img3.doubanio.com/view/photo/photo/public/p2401931302.jpg",
    "ingredients": [2],
  },
  {
    "id": 3,
    "name": "哈里萨辣酱",
    "nameEN": "Harissa",
    "introduction": "哈里萨是一种辛辣且具有诱人香味的辣椒酱，是北非和中东烹饪中广泛使用的混合香料。哈里萨通常由热智利辣椒，大蒜、橄榄油、孜然、芫荽、葛缕子和薄荷混合而成。西红柿和玫瑰花瓣也是常见的组合成分。\n哈里萨辣酱可用于给汤、炖菜、开胃菜和主菜调味。它也被用作肉和鱼的腌料。你可以将它加入鹰嘴豆泥或任何你喜欢的蘸料。",
    "cover": "https://img3.doubanio.com/view/photo/photo/public/p2401931302.jpg",
    "coverThumbnail": "https://img3.doubanio.com/view/photo/photo/public/p2401931302.jpg",
    "ingredients": [],
  },
  {
    "id": 4,
    "name": "摩洛哥混合香料",
    "nameEN": "Ras el Hanout",
    "introduction": "摩洛哥混合香料是北非烹饪中常见的混合香料，尤其在摩洛哥美食中。阿拉伯语将其称为“镇店之宝”，即最好的香料。典型的摩洛哥混合香料由小豆蔻、丁香、肉桂、芫荽、孜然、辣椒粉、肉豆蔻、胡椒粉和姜黄组成。\n摩洛哥混合香料有一股刺鼻而辛辣的味道。肉桂、丁香和肉豆蔻给香料增添了稍许的甜味。 人们经常将其用作腌料或用它给炖菜调味。摩洛哥人甚至相信它具有壮阳的作用。",
    "cover": "https://img3.doubanio.com/view/photo/photo/public/p2401931302.jpg",
    "coverThumbnail": "https://img3.doubanio.com/view/photo/photo/public/p2401931302.jpg",
    "ingredients": [],
  },
  {
    "id": 5,
    "name": "五香粉",
    "nameEN": "Chinese Five Spice",
    "introduction": "五香粉由八角茴香、四川胡椒、茴香、桂皮和丁香混合而成。口感苦涩，能够增强菜肴的口味却不会覆盖菜肴本身的风味。\n五香粉常被用于给肉类调味，也常被用于腌制牛肉、鸭肉和猪肉。在米饭、炸薯条，甚至一些烘焙食品中添加它也会有意想不到的风味。",
    "cover": "https://img3.doubanio.com/view/photo/photo/public/p2401931302.jpg",
    "coverThumbnail": "https://img3.doubanio.com/view/photo/photo/public/p2401931302.jpg",
    "ingredients": [],
  },
  {
    "id": 6,
    "name": "七味粉",
    "nameEN": "Togarashi",
    "introduction": "七味粉的主要成分包括四川辣椒、陈皮、芝麻、山椒、大麻子、生姜、大蒜、紫苏和青海苔。它经常被用于给乌冬面、涮火锅、烤肉、天妇罗等油炸食品调味。",
    "cover": "https://img3.doubanio.com/view/photo/photo/public/p2401931302.jpg",
    "coverThumbnail": "https://img3.doubanio.com/view/photo/photo/public/p2401931302.jpg",
    "ingredients": [],
  },
  {
    "id": 7,
    "name": "中亚调味料",
    "nameEN": "Khmeli Suneli",
    "introduction": "Khmer Suneli通常含有葫芦巴的种子和叶子、芫荽和黑胡椒。其他的添加物可以包括莳萝、月叶桂和薄荷。Khmer Suneli传统上用于炖菜和肉类菜肴中。它还可以为豆类和烤蔬菜带来层次丰富的风味。",
    "cover": "https://img3.doubanio.com/view/photo/photo/public/p2401931302.jpg",
    "coverThumbnail": "https://img3.doubanio.com/view/photo/photo/public/p2401931302.jpg",
    "ingredients": [],
  },
  {
    "id": 8,
    "name": "混合四香料",
    "nameEN": "Quatre Epices",
    "introduction": "Quatre Epices是主要用于法国美食的混合香料，但也被用于一些中东菜肴中。Quatre Epices的字面意思是“四种香料”，主要包括胡椒粉、丁香、肉豆蔻和干生姜。有些人会用众香子代替胡椒或用肉桂代替生姜。\n在法式烹饪中，Quatre Epices常被用于汤、炖菜、蔬菜和香肠中。",
    "cover": "https://img3.doubanio.com/view/photo/photo/public/p2401931302.jpg",
    "coverThumbnail": "https://img3.doubanio.com/view/photo/photo/public/p2401931302.jpg",
    "ingredients": [],
  },
  {
    "id": 9,
    "name": "马沙拉",
    "nameEN": "Chaat Masala",
    "introduction": "Chaat Masala具有令人愉悦的和稍许辛辣的味道。它的独特风味来自于用于制作它的黑盐。Chaat Masala除了唱唱唱被用于烹饪美食之外，还通常被用于为沙拉、甜点和饮料调味。",
    "cover": "https://img3.doubanio.com/view/photo/photo/public/p2401931302.jpg",
    "coverThumbnail": "https://img3.doubanio.com/view/photo/photo/public/p2401931302.jpg",
    "ingredients": [],
  },
  {
    "id": 10,
    "name": "咖喱粉",
    "nameEN": "Curry Powder",
    "introduction": "咖喱粉的组成香料通常包括胡椒粉、芫荽、小茴香、葫芦巴、姜黄和红辣椒。但不是所有咖喱粉都是相同的。咖喱粉被广泛运用于印度烹饪，为肉、鸡肉、酱汁、炖菜、汤、米饭和蔬菜调味。",
    "cover": "https://img3.doubanio.com/view/photo/photo/public/p2401931302.jpg",
    "coverThumbnail": "https://img3.doubanio.com/view/photo/photo/public/p2401931302.jpg",
    "ingredients": [],
  },
  {
    "id": 11,
    "name": "古玛沙拉",
    "nameEN": "Garam Masala",
    "introduction": "Garam Masala字面上的意思是温暖的香料，是用于印度烹饪的主要混合香料。它的组成香料通常包括肉桂、小豆蔻、丁香、孜然、芫荽、肉豆蔻和胡椒。\nGaram Masala最好在烹饪结束时添加。它可以被用于咖喱、扁豆、汤，或是洒在一些炒鸡蛋中。",
    "cover": "https://img3.doubanio.com/view/photo/photo/public/p2401931302.jpg",
    "coverThumbnail": "https://img3.doubanio.com/view/photo/photo/public/p2401931302.jpg",
    "ingredients": [],
  },
  {
    "id": 12,
    "name": "孟加拉混合香辛料",
    "nameEN": "Panch Phoron",
    "introduction": "Panch Phoron 被广泛使用于孟加拉国、印度东部和尼泊尔南部的美食中。 这个名字的字面意思是“五种香料”，由等份的孜然、茴香、黑种草、葫芦巴和芥末种子混合而成。\n人们通常不会将Panch Phoron 中的混合物磨碎使用，但会将其在酥油或食用油中煎炸使用。它常常被用于给鸡肉或鱼咖喱、烤土豆或扁豆调味。",
    "cover": "https://img3.doubanio.com/view/photo/photo/public/p2401931302.jpg",
    "coverThumbnail": "https://img3.doubanio.com/view/photo/photo/public/p2401931302.jpg",
    "ingredients": [],
  },
  {
    "id": 13,
    "name": "五香辣椒粉",
    "nameEN": "Chili Powder",
    "introduction": "Chill Powder 是拉丁美洲烹饪中最常见的混合香料，通常由干红椒、孜然、牛至、咖喱粉和盐混合而成。Chill Powder通常用于传统的拉丁美洲菜肴，如芝麻菜和炸玉米饼。但也被加入烤肉、炖汤、汤或蔬菜中体味。",
    "cover": "https://img3.doubanio.com/view/photo/photo/public/p2401931302.jpg",
    "coverThumbnail": "https://img3.doubanio.com/view/photo/photo/public/p2401931302.jpg",
    "ingredients": [],
  },
  {
    "id": 14,
    "name": "牙买加香料",
    "nameEN": "Jerk Spice",
    "introduction": "Jerk Spice是牙买加的本土混合香料。它的主要成分是众香子、苏格兰帽红辣椒、哈瓦那辣椒、百里香、大葱、豆蔻皮、月桂叶、多香叶、“Jerk”指的是混合的香料和肉的烹饪技术。\n传统上，Jerk Spice主要被用于腌制猪肉。如今，它也经常在烧烤中被用于肋骨、鸡肉和猪肉。",
    "cover": "https://img3.doubanio.com/view/photo/photo/public/p2401931302.jpg",
    "coverThumbnail": "https://img3.doubanio.com/view/photo/photo/public/p2401931302.jpg",
    "ingredients": [],
  },
  {
    "id": 15,
    "name": "伊朗混合香料",
    "nameEN": "Advieh",
    "introduction": "Advieh是伊朗本地人常用的一种混合香料。Advieh的主要成分包括姜黄、肉桂、黑胡椒、小豆蔻和孜然。在一些食谱中，人们还会添加芫荽、丁香、生姜、肉豆蔻、藏红花等等。\nAdvieh的味道温和而香甜，用途多种多样。它可以用于米饭、焗或烤蔬菜、肉类、豆类和米饭布丁。",
    "cover": "https://img3.doubanio.com/view/photo/photo/public/p2401931302.jpg",
    "coverThumbnail": "https://img3.doubanio.com/view/photo/photo/public/p2401931302.jpg",
    "ingredients": [],
  },
  {
    "id": 16,
    "name": "巴阿拉特",
    "nameEN": "Baharat",
    "introduction": "Baharat是一种香甜而温暖的混合香料。通常由黑胡椒、芫荽、小茴香、多香果、小豆蔻、肉桂、丁香、辣椒粉和肉豆蔻混合制成。土耳其风格的Baharat包括干薄荷。在北非，混合物中通常含有干玫瑰花瓣。\n只需要一点点Baharat就可以增加汤、番茄酱、扁豆和米饭的风味。它也可以用于鱼类、家禽和肉类。与橄榄油混合后可以作为蔬菜腌泡汁。与大蒜、荷兰芹和橄榄油混合后可制成调味酱。",
    "cover": "https://img3.doubanio.com/view/photo/photo/public/p2401931302.jpg",
    "coverThumbnail": "https://img3.doubanio.com/view/photo/photo/public/p2401931302.jpg",
    "ingredients": [],
  },
  {
    "id": 17,
    "name": "扎阿塔尔",
    "nameEN": "Za'atar",
    "introduction": "Za’atar 是一种由各种干香草、芝麻籽、漆树以及盐组成的混合物。这是一种尅追溯到13世纪的具有百年历史的混合香料。在中东大部分地区，Za’atar的配方都是被严格保密的。一般来说主要的香草添加物包括百里香和牛至。其次包括墨角兰、薄荷和鼠尾草。\nZa’atar常用作调味品洒在食物上面。它也可以和橄榄油混合成蘸酱涂抹在面包上食用。Za’atar还可用于烤鸡肉、羊肉以及如菜花或土豆这样的蔬菜上。",
    "cover": "https://img3.doubanio.com/view/photo/photo/public/p2401931302.jpg",
    "coverThumbnail": "https://img3.doubanio.com/view/photo/photo/public/p2401931302.jpg",
    "ingredients": [],
  },
  {
    "id": 18,
    "name": "腌渍香料",
    "nameEN": "Pickling Spice",
    "introduction": "Pickling Spice 是英国传统辛香料，主要用于腌渍水果、蔬菜或调制成辛香味道的食用醋。Pickling Spice 多以布巾捆绑以方便腌渍完成时取出，或可直接与食物混合，依情况而定，并可依口味斟酌香料或糖、醋等用量。Pickling Spice主要由芥末子、香芹子、茴香子、月桂叶、众香子等多种香辛料调配制成。\nPickling Spice可以用于腌渍蔬菜、水果如黄瓜、萝卜、洋葱等，也可以用于肉类腌渍或当成调味料直接与食物混合做成凉拌等料理。",
    "cover": "https://img3.doubanio.com/view/photo/photo/public/p2401931302.jpg",
    "coverThumbnail": "https://img3.doubanio.com/view/photo/photo/public/p2401931302.jpg",
    "ingredients": [],
  },
  {
    "id": 19,
    "name": "Poultry Spice",
    "nameEN": "Poultry Spice",
    "introduction": "Poultry Spice的基本成分是干鼠尾草和百里香，它们使混合香料散发出木头般的芳香。其它常见的添加物包括墨角兰、迷迭香以及黑白胡椒。人们也会添加其它的香料如牛至、欧芹、干洋葱、大蒜、丁香、肉豆蔻、多香果和辣椒等等。\nPoultry Spice常常被用于火鸡、鸡肉和填充馅料。它也被用于给肉类、蔬菜汉堡和汤等食物调味。一小撮Poultry Spice就可以为豆腐和蔬菜汤增加许多风味。",
    "cover": "https://img3.doubanio.com/view/photo/photo/public/p2401931302.jpg",
    "coverThumbnail": "https://img3.doubanio.com/view/photo/photo/public/p2401931302.jpg",
    "ingredients": [],
  },
  {
    "id": 20,
    "name": "南瓜派香料",
    "nameEN": "Pumpkin Pie Spice",
    "introduction": "Pumpkin Pie Spice的基本成分通常包括含有天威的香料，如肉桂、肉豆蔻、丁香和姜。多香果和肉豆蔻皮也是常见的成分。\nPumpkin Pie Spice可以用来为你早餐的拿铁咖啡、馅饼和其它烘焙品调味，你也可以将它洒在南瓜上、为奶油调味，或与酸奶和冰淇淋混合调味。",
    "cover": "https://img3.doubanio.com/view/photo/photo/public/p2401931302.jpg",
    "coverThumbnail": "https://img3.doubanio.com/view/photo/photo/public/p2401931302.jpg",
    "ingredients": [],
  },
];


const mapStateToProps = (state) => {
  // let labSpices = [];
  // if (state.labSpices && state.labSpices.length > 0) {
  //   labSpices = state.labSpices.map(spiceId =>
  //     state.posts.find(post => post.id === spiceId)
  //   );
  // }

  let labSpicesIds = state.labSpices;

  mixedSpices = mixedSpices.map((mixedSpice) => {
    let count = 0;
    labSpicesIds.forEach((labSpiceId) => {
      if (mixedSpice.ingredients.includes(labSpiceId)) {
        count++;
      }
    });
    return Object.assign({}, mixedSpice, {count});
  });

  let mixedSpicesFiltered = mixedSpices.filter((mixedSpices) => {
    return mixedSpices.count > 0;
  })

  mixedSpicesFiltered.sort(function(a, b) {
    return b.count - a.count;
  });

  return {
    labResult: mixedSpicesFiltered,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    // getLabResult: () => {
    //   dispatch(fetchLabResultSucceeded());
    // },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LabResult);
