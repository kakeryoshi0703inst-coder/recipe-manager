/**
 * Self-contained Single Bundle for Recipe Manager (Master Ver.6)
 * Optimized for 9:16 Smartphone Experience & Mobile Navigation
 * Updated with Stok naming, Expiration date input, Shopping categories, Stok Sorting,
 * and Free-text Store Input with Autocomplete for Price Addition.
 */

// ==========================================
// 1. TYPES & CONSTANTS
// ==========================================
const Categories = [
  { id: 'staple', name: '主食', icon: 'Utensils' },
  { id: 'main', name: '主菜・副食', icon: 'Beef' },
  { id: 'soup', name: '汁物', icon: 'Soup' },
  { id: 'dessert', name: 'デザート', icon: 'Cake' },
  { id: 'salad', name: 'サラダ・小鉢', icon: 'Salad' },
  { id: 'prep', name: '作り置き・常備菜', icon: 'Archive' },
];

const StorageLocations = [
  { id: 'fridge', name: '冷蔵室', icon: 'Refrigerator' },
  { id: 'veg', name: '野菜室', icon: 'Carrot' },
  { id: 'freezer', name: '冷凍庫', icon: 'Snowflake' },
  { id: 'pantry', name: '常温・パントリー', icon: 'Package' },
];

const ShoppingCategories = [
  { id: 'all', name: 'すべて' },
  { id: 'food', name: '食材・食品', icon: '🥕' },
  { id: 'daily', name: '日用品・消耗品', icon: '🧻' },
  { id: 'seasoning', name: '調味料', icon: '🧂' },
  { id: 'drink', name: '飲料・お酒', icon: '🧃' },
  { id: 'other', name: 'その他', icon: '📦' }
];

const Difficulties = [
  { id: 'easy', name: '初級 (かんたん)', color: 'emerald' },
  { id: 'medium', name: '中級 (ふつう)', color: 'amber' },
  { id: 'hard', name: '上級 (本格的)', color: 'rose' },
];

const PopularTags = [
  '時短', '簡単', '節約', '作り置き', '高タンパク', '低カロリー', 'ヘルシー', '野菜たっぷり', 'お弁当', '電子レンジ'
];

// ==========================================
// 2. SEED DATA
// ==========================================
const now = Date.now();
const oneDayMs = 24 * 60 * 60 * 1000;

const initialRecipes = [
  {
    id: 'rec_1',
    title: '極旨ジューシー照り焼きチキン',
    category: 'main',
    servings: 2,
    difficulty: 'easy',
    timeMinutes: 15,
    tags: ['時短', '簡単', 'お弁当', '高タンパク'],
    isFavorite: true,
    viewCount: 14,
    lastViewedAt: new Date(now - 1000 * 60 * 30).toISOString(),
    createdAt: '2026-08-15T10:00:00.000Z',
    updatedAt: '2026-08-15T10:00:00.000Z',
    imageUrl: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=800&auto=format&fit=crop&q=80',
    ingredients: [
      { id: 'i1', name: '鶏もも肉', amount: 300, unit: 'g', normalizedName: '鶏肉' },
      { id: 'i2', name: '醤油', amount: 2, unit: '大さじ', normalizedName: '醤油' },
      { id: 'i3', name: 'みりん', amount: 2, unit: '大さじ', normalizedName: 'みりん' },
      { id: 'i4', name: '酒', amount: 1, unit: '大さじ', normalizedName: '酒' },
      { id: 'i5', name: '砂糖', amount: 1, unit: '大さじ', normalizedName: '砂糖' }
    ],
    steps: [
      { order: 1, instruction: '鶏肉の余分な脂と筋を取り除き、皮全体にフォークで穴を開けて一口大に切る。', timerSeconds: 0, tips: '' },
      { order: 2, instruction: 'フライパンに油を中火で熱し、鶏肉の皮目を下にして香ばしく4分焼く。', timerSeconds: 240, tips: '' },
      { order: 3, instruction: '裏返して蓋をし、弱火で3分蒸し焼きにする。', timerSeconds: 180, tips: '' },
      { order: 4, instruction: '調味料を加え、照りが出るまで煮絡める。', timerSeconds: 120, tips: '' }
    ],
    tips: '調味料をあらかじめ混ぜておくと焦げ付きません。',
    nutrition: { calories: 420, protein: 28.5, fat: 22.0, carbs: 14.2 }
  },
  {
    id: 'rec_2',
    title: 'じっくり炒め玉ねぎの濃厚ポークカレー',
    category: 'staple',
    servings: 4,
    difficulty: 'medium',
    timeMinutes: 40,
    tags: ['定番', '作り置き', 'がっつり'],
    isFavorite: true,
    viewCount: 28,
    lastViewedAt: new Date(now - 1000 * 60 * 120).toISOString(),
    createdAt: '2026-08-10T12:00:00.000Z',
    imageUrl: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=800&auto=format&fit=crop&q=80',
    ingredients: [
      { id: 'i21', name: '豚こま切れ肉', amount: 300, unit: 'g', normalizedName: '豚肉' },
      { id: 'i22', name: '玉ねぎ', amount: 2, unit: '個', normalizedName: '玉ねぎ' },
      { id: 'i23', name: 'にんじん', amount: 1, unit: '本', normalizedName: '人参' },
      { id: 'i24', name: 'じゃがいも', amount: 2, unit: '個', normalizedName: 'じゃがいも' },
      { id: 'i25', name: 'カレールー', amount: 1, unit: '箱(4皿分)', normalizedName: 'カレールー' }
    ],
    steps: [
      { order: 1, instruction: '玉ねぎは薄切り、人参とじゃがいもは乱切りにする。', timerSeconds: 0, tips: '' },
      { order: 2, instruction: '深鍋で玉ねぎをあめ色になるまで中火で約10分じっくり炒める。', timerSeconds: 600, tips: '' },
      { order: 3, instruction: '豚肉と野菜を加えて炒め、水を加えて弱火で15分煮込む。', timerSeconds: 900, tips: '' },
      { order: 4, instruction: '火を止めてルーを溶かし、弱火でさらに5分煮込む。', timerSeconds: 300, tips: '' }
    ],
    tips: 'ウスターソースを少量加えるとコクがアップします。',
    nutrition: { calories: 680, protein: 21.0, fat: 26.5, carbs: 88.0 }
  },
  {
    id: 'rec_3',
    title: 'ほっこり優しい 母の味 肉じゃが',
    category: 'main',
    servings: 2,
    difficulty: 'easy',
    timeMinutes: 25,
    tags: ['定番', '和食', '節約'],
    isFavorite: false,
    viewCount: 9,
    lastViewedAt: new Date(now - oneDayMs).toISOString(),
    createdAt: '2026-08-01T08:00:00.000Z',
    imageUrl: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800',
    ingredients: [
      { id: 'i31', name: '豚こま肉', amount: 150, unit: 'g', normalizedName: '豚肉' },
      { id: 'i32', name: 'じゃがいも', amount: 2, unit: '個', normalizedName: 'じゃがいも' },
      { id: 'i33', name: '玉ねぎ', amount: 1, unit: '個', normalizedName: '玉ねぎ' },
      { id: 'i34', name: 'にんじん', amount: 0.5, unit: '本', normalizedName: '人参' }
    ],
    steps: [
      { order: 1, instruction: '野菜と肉を一口大に切り、油でサッと炒める。', timerSeconds: 180, tips: '' },
      { order: 2, instruction: 'だし汁と調味料を加え、落とし蓋をして弱火で10分煮る。', timerSeconds: 600, tips: '' }
    ],
    tips: '冷ます過程で味がよく染みます。',
    nutrition: { calories: 360, protein: 14.5, fat: 11.2, carbs: 48.0 }
  },
  {
    id: 'rec_4',
    title: 'ふわとろ 絶品だし巻き卵',
    category: 'salad',
    servings: 2,
    difficulty: 'easy',
    timeMinutes: 10,
    tags: ['時短', '簡単', '節約', 'お弁当'],
    isFavorite: true,
    viewCount: 22,
    lastViewedAt: new Date(now - 1000 * 60 * 15).toISOString(),
    imageUrl: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?w=800',
    ingredients: [
      { id: 'i41', name: '卵', amount: 3, unit: '個', normalizedName: '卵' },
      { id: 'i42', name: 'だし汁', amount: 50, unit: 'ml', normalizedName: 'だし汁' }
    ],
    steps: [
      { order: 1, instruction: '卵を溶きほぐし、だし汁・醤油・みりんを混ぜる。', timerSeconds: 0, tips: '' },
      { order: 2, instruction: '卵液を3回に分けて流し入れ、手前に巻きながら焼く。', timerSeconds: 180, tips: '' }
    ],
    tips: '中火で素早く巻くのがポイント。',
    nutrition: { calories: 195, protein: 15.2, fat: 13.8, carbs: 2.1 }
  },
  {
    id: 'rec_5',
    title: '豆腐とわかめの王道お味噌汁',
    category: 'soup',
    servings: 2,
    difficulty: 'easy',
    timeMinutes: 8,
    tags: ['時短', '簡単', '低カロリー', '定番'],
    isFavorite: false,
    viewCount: 6,
    lastViewedAt: new Date(now - oneDayMs * 2).toISOString(),
    imageUrl: 'https://images.unsplash.com/photo-1547592180-85f173990554?w=800',
    ingredients: [
      { id: 'i51', name: '絹ごし豆腐', amount: 0.5, unit: '丁', normalizedName: '豆腐' },
      { id: 'i52', name: '乾燥わかめ', amount: 2, unit: 'g', normalizedName: 'わかめ' }
    ],
    steps: [
      { order: 1, instruction: 'だし汁を煮立たせ、豆腐とわかめを加える。', timerSeconds: 120, tips: '' },
      { order: 2, instruction: '火を止めて味噌を溶き入れる。', timerSeconds: 60, tips: '' }
    ],
    tips: '味噌を入れた後は沸騰させないこと。',
    nutrition: { calories: 85, protein: 6.4, fat: 3.2, carbs: 6.5 }
  }
];

const initialInventory = [
  { id: 'inv_1', name: '卵', normalizedName: '卵', quantity: 6, unit: '個', location: 'fridge', expireDate: new Date(now + oneDayMs * 1).toISOString().split('T')[0], memo: '10個パック残り', createdAt: new Date(now - oneDayMs * 5).toISOString() },
  { id: 'inv_2', name: '玉ねぎ', normalizedName: '玉ねぎ', quantity: 3, unit: '個', location: 'veg', expireDate: new Date(now + oneDayMs * 10).toISOString().split('T')[0], memo: 'ネット入り', createdAt: new Date(now - oneDayMs * 2).toISOString() },
  { id: 'inv_3', name: '鶏もも肉', normalizedName: '鶏肉', quantity: 300, unit: 'g', location: 'fridge', expireDate: new Date(now).toISOString().split('T')[0], memo: '本日中推奨', createdAt: new Date(now - oneDayMs * 1).toISOString() },
  { id: 'inv_4', name: '絹ごし豆腐', normalizedName: '豆腐', quantity: 1, unit: '丁', location: 'fridge', expireDate: new Date(now - oneDayMs).toISOString().split('T')[0], memo: '期限切れ注意', createdAt: new Date(now - oneDayMs * 4).toISOString() },
  { id: 'inv_5', name: 'にんじん', normalizedName: '人参', quantity: 2, unit: '本', location: 'veg', expireDate: new Date(now + oneDayMs * 4).toISOString().split('T')[0], createdAt: new Date(now - oneDayMs * 3).toISOString() }
];

const initialShoppingItems = [
  { id: 'shop_1', name: 'カレールー', category: 'food', quantity: 1, unit: '箱', isChecked: false, memo: '中辛', recipeTitle: 'ポークカレー' },
  { id: 'shop_2', name: 'じゃがいも', category: 'food', quantity: 2, unit: '個', isChecked: false, memo: '買い足し', recipeTitle: 'ポークカレー' },
  { id: 'shop_3', name: '食器用洗剤', category: 'daily', quantity: 1, unit: '本', isChecked: false, memo: '除菌タイプ' },
  { id: 'shop_4', name: 'トイレットペーパー', category: 'daily', quantity: 1, unit: 'パック', isChecked: true, memo: '12ロール' },
  { id: 'shop_5', name: '牛乳', category: 'drink', quantity: 1, unit: '本(1L)', isChecked: false, memo: '' }
];

const initialStores = [
  { id: 'st_1', name: 'OKストア', memo: '全体的に安い' },
  { id: 'st_2', name: 'ライフ', memo: '生鮮食品が新鮮' },
  { id: 'st_3', name: '八百屋 八百吉', memo: '野菜地域最安値' },
  { id: 'st_4', name: 'イオン', memo: 'トップバリュ商品' }
];

const initialProductPrices = [
  {
    id: 'pp_1',
    productName: '卵 (10個入)',
    storePrices: [
      { storeId: 'st_1', price: 238, capacity: 10, unit: '個', date: '2026-09-01' },
      { storeId: 'st_2', price: 268, capacity: 10, unit: '個', date: '2026-09-03' }
    ]
  },
  {
    id: 'pp_2',
    productName: '鶏もも肉 (100g)',
    storePrices: [
      { storeId: 'st_1', price: 98, capacity: 100, unit: 'g', date: '2026-09-04' },
      { storeId: 'st_2', price: 128, capacity: 100, unit: 'g', date: '2026-09-05' }
    ]
  },
  {
    id: 'pp_3',
    productName: '玉ねぎ',
    storePrices: [
      { storeId: 'st_1', price: 198, capacity: 3, unit: '個', date: '2026-09-03' },
      { storeId: 'st_3', price: 150, capacity: 3, unit: '個', date: '2026-09-06' }
    ]
  }
];

// ==========================================
// 3. STORAGE LAYER
// ==========================================
class Database {
  async getAll(name) {
    const data = localStorage.getItem('rm_' + name);
    if (!data) {
      if (name === 'recipes') return initialRecipes;
      if (name === 'inventory') return initialInventory;
      if (name === 'shopping') return initialShoppingItems;
      if (name === 'stores') return initialStores;
      if (name === 'prices') return initialProductPrices;
      return [];
    }
    return JSON.parse(data);
  }
  async put(name, item) {
    const list = await this.getAll(name);
    const idx = list.findIndex(i => i.id === item.id);
    if (idx >= 0) list[idx] = item; else list.unshift(item);
    localStorage.setItem('rm_' + name, JSON.stringify(list));
  }
  async delete(name, id) {
    let list = await this.getAll(name);
    list = list.filter(i => i.id !== id);
    localStorage.setItem('rm_' + name, JSON.stringify(list));
  }
  async resetToSeed() {
    localStorage.setItem('rm_recipes', JSON.stringify(initialRecipes));
    localStorage.setItem('rm_inventory', JSON.stringify(initialInventory));
    localStorage.setItem('rm_shopping', JSON.stringify(initialShoppingItems));
    localStorage.setItem('rm_stores', JSON.stringify(initialStores));
    localStorage.setItem('rm_prices', JSON.stringify(initialProductPrices));
  }
}
const db = new Database();

// ==========================================
// 4. SERVICES
// ==========================================
const SYNONYM_GROUPS = [
  ['玉ねぎ', 'たまねぎ', 'タマネギ', 'オニオン', 'onion'],
  ['にんじん', 'ニンジン', '人参', 'キャロット'],
  ['じゃがいも', 'ジャガイモ', 'ポテト', 'potato'],
  ['鶏肉', 'とり肉', 'トリ肉', 'チキン', '鶏もも肉'],
  ['豚肉', 'ぶた肉', 'ポーク', '豚こま'],
  ['卵', 'たまご', 'タマゴ', '玉子', 'egg'],
  ['豆腐', 'とうふ', 'トウフ', 'tofu']
];

function normalizeText(text) {
  if (!text) return '';
  let str = text.toString().toLowerCase().trim();
  str = str.replace(/[\u30a1-\u30f6]/g, m => String.fromCharCode(m.charCodeAt(0) - 0x60));
  return str.replace(/\s+/g, ' ');
}

function getSynonyms(query) {
  const norm = normalizeText(query);
  const found = SYNONYM_GROUPS.find(g => g.some(it => normalizeText(it).includes(norm) || norm.includes(normalizeText(it))));
  return found ? found.map(it => normalizeText(it)) : [norm];
}

function matchRecipe(recipe, query, filters = {}) {
  if (query && query.trim() !== '') {
    const terms = getSynonyms(query);
    const targetTexts = [recipe.title, recipe.category, ...(recipe.tags || []), ...(recipe.ingredients || []).map(i => i.name)].map(normalizeText);
    if (!terms.some(term => targetTexts.some(target => target.includes(term)))) return false;
  }
  if (filters.category && filters.category !== 'all' && recipe.category !== filters.category) return false;
  if (filters.tag && filters.tag !== 'all' && (!recipe.tags || !recipe.tags.includes(filters.tag))) return false;
  if (filters.onlyFavorites && !recipe.isFavorite) return false;
  return true;
}

function scaleAmount(amount, origServings, newServings) {
  if (amount === undefined || amount === null || isNaN(amount)) return amount;
  const scaled = (Number(amount) * Number(newServings || 2)) / Number(origServings || 2);
  return Number.isInteger(scaled) ? scaled : parseFloat(scaled.toFixed(2));
}

function formatAmountDisplay(amount, unit) {
  if (!amount) return '適量';
  if (amount === 0.5) return `1/2 ${unit || ''}`.trim();
  return `${amount} ${unit || ''}`.trim();
}

function calculateUnitPrice(price, capacity, unit) {
  if (!price || !capacity) return null;
  const p = Number(price); const c = Number(capacity);
  if (unit === 'g' || unit === 'ml') {
    return { pricePerUnit: Math.round((p / c) * 100 * 10) / 10, unitLabel: `100${unit}あたり` };
  }
  return { pricePerUnit: Math.round((p / c) * 10) / 10, unitLabel: `1${unit || '個'}あたり` };
}

function getExpirationUrgency(expireDateStr) {
  if (!expireDateStr) return { text: '未設定', days: 999, badgeClass: 'bg-slate-100 text-slate-600' };
  const today = new Date(); today.setHours(0, 0, 0, 0);
  const expDate = new Date(expireDateStr); expDate.setHours(0, 0, 0, 0);
  const diff = Math.ceil((expDate - today) / (1000 * 60 * 60 * 24));

  if (diff < 0) return { text: '期限切れ', days: diff, badgeClass: 'bg-rose-500 text-white' };
  if (diff === 0) return { text: '今日まで！', days: 0, badgeClass: 'bg-amber-500 text-white animate-pulse' };
  if (diff <= 3) return { text: `あと${diff}日`, days: diff, badgeClass: 'bg-orange-500 text-white' };
  return { text: `${diff}日後`, days: diff, badgeClass: 'bg-emerald-600 text-white' };
}

function analyzeFridgeRecommendations(recipes, inventory) {
  const stock = inventory.filter(i => Number(i.quantity) > 0);
  return recipes.map(recipe => {
    let matchCount = 0;
    (recipe.ingredients || []).forEach(req => {
      const terms = getSynonyms(req.name);
      if (stock.some(s => terms.some(t => normalizeText(s.name).includes(t)))) matchCount++;
    });
    const total = (recipe.ingredients || []).length;
    const rate = total > 0 ? Math.round((matchCount / total) * 100) : 0;
    return {
      recipe,
      rate,
      tier: rate === 100 ? 1 : rate >= 50 ? 2 : 3,
      badgeText: rate === 100 ? '✨ 材料すべてアリ' : `🛒 在庫一致 ${rate}%`
    };
  }).sort((a, b) => b.rate - a.rate);
}

// ==========================================
// 4.1. AI RECIPE GENERATOR ENGINE (冷蔵庫の食材からレシピ考案)
// ==========================================
const AI_RECIPE_TEMPLATES = {
  // Classic combinations with fallback to dynamic synthesis
  donburi: {
    title: 'ふわとろ卵の甘辛とじ丼',
    category: 'single',
    timeMinutes: 12,
    image: 'https://images.unsplash.com/photo-1547592180-85f173990554?w=800',
    tags: ['時短', 'フライパン1つ', '丼もの', 'AIシェフ特製']
  },
  teriyaki: {
    title: 'コク旨 香ばし照り焼き炒め',
    category: 'main',
    timeMinutes: 15,
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=800',
    tags: ['主菜', 'ご飯が進む', '定番', 'AIシェフ特製']
  },
  stirfry: {
    title: 'スタミナ香ばしガーリック味噌炒め',
    category: 'main',
    timeMinutes: 12,
    image: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?w=800',
    tags: ['時短', 'がっつり', 'フライパン1つ', 'AIシェフ特製']
  },
  healthy_steam: {
    title: '素材の旨味引き立つ さっぱり生姜ぽん酢蒸し',
    category: 'main',
    timeMinutes: 10,
    image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=800',
    tags: ['ヘルシー', '簡単', '低カロリー', 'AIシェフ特製']
  },
  soup_rich: {
    title: '冷蔵庫の恵みたっぷり 具だくさん旨味スープ',
    category: 'soup',
    timeMinutes: 12,
    image: 'https://images.unsplash.com/photo-1547592180-85f173990554?w=800',
    tags: ['スープ', '温まる', '野菜たっぷり', 'AIシェフ特製']
  },
  snack_namul: {
    title: 'やみつき無限 ごま油香るおつまみソテー',
    category: 'side',
    timeMinutes: 8,
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800',
    tags: ['おつまみ', '副菜', '5分~10分', 'AIシェフ特製']
  }
};

const RECIPE_FOOD_IMAGES = [
  'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800',
  'https://images.unsplash.com/photo-1512058564366-18510be2db19?w=800',
  'https://images.unsplash.com/photo-1544025162-d76694265947?w=800',
  'https://images.unsplash.com/photo-1547592180-85f173990554?w=800',
  'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800',
  'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800',
  'https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=800'
];

function generateAiRecipeEngine(selectedItems = [], mood = 'main', userCustomNote = '', seed = 0) {
  if (!selectedItems || selectedItems.length === 0) {
    selectedItems = [{ name: '卵', quantity: 2, unit: '個' }, { name: '玉ねぎ', quantity: 1, unit: '個' }];
  }

  const ingNames = selectedItems.map(i => i.name.trim());
  const primary = ingNames[0] || '食材';
  const secondary = ingNames[1] || (ingNames.length > 1 ? ingNames[1] : '');

  // Detect types
  const hasEgg = ingNames.some(n => n.includes('卵') || n.includes('たまご'));
  const hasPork = ingNames.some(n => n.includes('豚'));
  const hasChicken = ingNames.some(n => n.includes('鶏') || n.includes('チキン'));
  const hasBeef = ingNames.some(n => n.includes('牛'));
  const hasMeat = hasPork || hasChicken || hasBeef || ingNames.some(n => n.includes('肉') || n.includes('ひき肉') || n.includes('ソーセージ') || n.includes('ベーコン'));
  const hasTofu = ingNames.some(n => n.includes('豆腐') || n.includes('厚揚げ') || n.includes('油揚げ'));
  const hasOnion = ingNames.some(n => n.includes('玉ねぎ') || n.includes('長ねぎ') || n.includes('ねぎ'));
  const hasCabbage = ingNames.some(n => n.includes('キャベツ') || n.includes('白菜'));
  const hasCarrot = ingNames.some(n => n.includes('人参') || n.includes('にんじん'));
  const hasTomato = ingNames.some(n => n.includes('トマト'));

  let title = '';
  let category = 'main';
  let timeMinutes = 15;
  let steps = [];
  let ingredients = [];
  let chefTip = '';
  let tags = ['AI考案', 'おうちごはん'];
  let imageUrl = RECIPE_FOOD_IMAGES[(seed + ingNames.length) % RECIPE_FOOD_IMAGES.length];

  // Populate actual selected items with amounts
  selectedItems.forEach(item => {
    ingredients.push({
      id: 'ai_ing_' + Math.random().toString(36).substring(2, 7),
      name: item.name,
      amount: item.quantity || 1,
      unit: item.unit || '個',
      fromFridge: true
    });
  });

  // Mood-based logic & pairings
  if (mood === 'quick' || (hasEgg && ingNames.length <= 2 && mood !== 'soup')) {
    // Quick stir-fry or bowl
    if (hasEgg && hasOnion) {
      title = (seed % 2 === 0) ? `黄金たまごトロトロ！${secondary ? secondary + 'と' : ''}玉ねぎの甘辛卵とじ` : `忙しい日の絶品 ${primary}のふんわりオムレツ`;
      category = 'main';
      timeMinutes = 10;
      tags.push('時短', '10分料理', 'フライパン1つ');
      ingredients.push({ name: '醤油', amount: 1.5, unit: '大さじ' });
      ingredients.push({ name: 'みりん', amount: 1.5, unit: '大さじ' });
      ingredients.push({ name: 'だし汁 (または水+和風だし)', amount: 80, unit: 'ml' });
      steps = [
        { order: 1, instruction: `${ingNames.join('、')}を食べやすい大きさにスライスし、卵はボウルで軽く溶いておく。`, timerSeconds: 0 },
        { order: 2, instruction: '小さめのフライパンにだし汁・醤油・みりんを煮立たせ、具材を入れて中火でしんなりするまで煮る。', timerSeconds: 180 },
        { order: 3, instruction: '溶き卵を回し入れ、フタをして弱火で1分蒸らして半熟状になったら火を止める。熱々ご飯に乗せても絶品！', timerSeconds: 60 }
      ];
      chefTip = '卵は混ぜすぎず、白身と黄身がマーブル状に残る程度に軽く溶くとふんわり仕上がります！';
    } else {
      title = `パパッと10分！${primary}${secondary ? 'と' + secondary : ''}のコク旨ガーリック炒め`;
      category = 'main';
      timeMinutes = 10;
      tags.push('時短', 'スピード主菜', '香ばしい');
      ingredients.push({ name: 'ごま油', amount: 1, unit: '大さじ' });
      ingredients.push({ name: '醤油', amount: 1, unit: '大さじ' });
      ingredients.push({ name: 'おろしにんにく', amount: 0.5, unit: '小さじ' });
      ingredients.push({ name: '塩コショウ', amount: 1, unit: '少々' });
      steps = [
        { order: 1, instruction: `${ingNames.join('、')}を一口大の大きさに均等にカットする。`, timerSeconds: 0 },
        { order: 2, instruction: 'フライパンにごま油とにんにくを熱し、強火で具材を一気に炒めて香ばしさを引き出す。', timerSeconds: 180 },
        { order: 3, instruction: '全体に火が通ったら、鍋肌から醤油と塩コショウを回し入れてサッと絡めて完成！', timerSeconds: 45 }
      ];
      chefTip = '強火で短時間で炒め合わせることで、野菜のシャキシャキ感と香ばしさを最大限キープできます。';
    }
  } else if (mood === 'healthy') {
    title = `さっぱりヘルシー！${primary}${secondary ? 'と' + secondary : ''}の生姜ぽん酢蒸し`;
    category = 'main';
    timeMinutes = 12;
    tags.push('ヘルシー', '低糖質', '胃に優しい');
    ingredients.push({ name: 'ぽん酢', amount: 2, unit: '大さじ' });
    ingredients.push({ name: 'おろし生姜', amount: 1, unit: '小さじ' });
    ingredients.push({ name: '酒 (または水)', amount: 2, unit: '大さじ' });
    ingredients.push({ name: 'ごま油 (仕上げ用)', amount: 0.5, unit: '小さじ' });
    steps = [
      { order: 1, instruction: `耐熱皿またはフライパンに、${ingNames.join('、')}を食べやすく切って広げ入れる。`, timerSeconds: 0 },
      { order: 2, instruction: '酒を全体に回しかけ、フタをして中火で約5〜6分ふっくらと蒸し焼きにする。', timerSeconds: 300 },
      { order: 3, instruction: '火を止め、おろし生姜とぽん酢、お好みでごま油をひと回しして熱々をいただく。', timerSeconds: 0 }
    ];
    chefTip = '蒸気でじっくり熱を通すことで食材本来の甘みと旨味が閉じ込められ、ノンオイルでも満足感抜群です。';
  } else if (mood === 'soup') {
    title = `心も温まる 具だくさん${primary}${secondary ? 'と' + secondary : ''}の旨味スープ`;
    category = 'soup';
    timeMinutes = 12;
    tags.push('スープ', '汁物', '温活', '野菜たっぷり');
    imageUrl = 'https://images.unsplash.com/photo-1547592180-85f173990554?w=800';
    ingredients.push({ name: '水', amount: 400, unit: 'ml' });
    ingredients.push({ name: '和風だし または 鶏がらスープの素', amount: 1, unit: '小さじ' });
    ingredients.push({ name: '味噌 または 醤油', amount: 1.5, unit: '大さじ' });
    ingredients.push({ name: 'ごま油 (仕上げ用)', amount: 1, unit: '少々' });
    steps = [
      { order: 1, instruction: `${ingNames.join('、')}を食べやすい薄切りまたは角切りにする。`, timerSeconds: 0 },
      { order: 2, instruction: '小鍋に水とスープの素を入れて沸騰させ、火が通りにくい食材から順に入れて約5分中火で煮る。', timerSeconds: 300 },
      { order: 3, instruction: '火を極弱火または止めてから味噌/醤油を溶き入れ、最後にごま油を数滴垂らして完成。', timerSeconds: 60 }
    ];
    chefTip = '具材の切り方を揃えると火の通りが均一になり、見た目も美しく仕上がります。';
  } else if (mood === 'snack') {
    title = `おつまみにも最高！${primary}${secondary ? 'と' + secondary : ''}の香ばしバター醤油ソテー`;
    category = 'side';
    timeMinutes = 8;
    tags.push('おつまみ', '副菜', 'お弁当にも', 'やみつき');
    ingredients.push({ name: 'バター', amount: 10, unit: 'g' });
    ingredients.push({ name: '醤油', amount: 1, unit: '大さじ' });
    ingredients.push({ name: 'ブラックペッパー', amount: 1, unit: '少々' });
    steps = [
      { order: 1, instruction: `${ingNames.join('、')}を一口サイズにカットする。`, timerSeconds: 0 },
      { order: 2, instruction: 'フライパンにバター半量を溶かし、中強火でこんがりと焼き色がつくまで炒める。', timerSeconds: 180 },
      { order: 3, instruction: '残りのバターと醤油を鍋肌から加え、ジュワッと香りが立ったらブラックペッパーを振って火を止める。', timerSeconds: 30 }
    ];
    chefTip = '醤油を焦がし気味に最後に加えることで、香ばしい風味が立ち食欲をそそります！';
  } else {
    // Standard Main Dish
    if (hasMeat && hasCabbage) {
      title = (seed % 2 === 0) ? `やみつき回鍋肉風！${primary}とキャベツの甘辛味噌炒め` : `ご飯が止まらない！${primary}とキャベツのこってり炒め`;
      category = 'main';
      timeMinutes = 15;
      tags.push('主菜', 'ガッツリ', 'ご飯が進む', '大人気');
      ingredients.push({ name: '味噌', amount: 1.5, unit: '大さじ' });
      ingredients.push({ name: 'みりん・酒', amount: 1, unit: '大さじ' });
      ingredients.push({ name: '砂糖', amount: 1, unit: '小さじ' });
      ingredients.push({ name: '醤油', amount: 0.5, unit: '大さじ' });
      ingredients.push({ name: 'ごま油', amount: 1, unit: '大さじ' });
      steps = [
        { order: 1, instruction: 'キャベツはざく切りにし、お肉は食べやすい大きさに切って軽く塩コショウを振る。調味料はあらかじめ混ぜておく。', timerSeconds: 0 },
        { order: 2, instruction: 'フライパンにごま油を熱し、お肉を両面こんがり炒めてから一度取り出す。', timerSeconds: 180 },
        { order: 3, instruction: '同じフライパンでキャベツを強火でサッと炒め、お肉を戻して合わせ調味料を一気に絡め炒める。', timerSeconds: 90 }
      ];
      chefTip = 'キャベツとお肉を別々に炒めることで、水っぽくならずにお店のようなシャキッと香ばしい仕上がりになります！';
    } else if (hasMeat) {
      title = (seed % 2 === 0) ? `極上！${primary}${secondary ? 'と' + secondary : ''}のこっくり照り照り炒め` : `スタミナ満点！${primary}${secondary ? 'と' + secondary : ''}の甘辛生姜焼き`;
      category = 'main';
      timeMinutes = 15;
      tags.push('主菜', '大満足', 'ご飯のおかず');
      ingredients.push({ name: '醤油', amount: 2, unit: '大さじ' });
      ingredients.push({ name: 'みりん', amount: 2, unit: '大さじ' });
      ingredients.push({ name: '酒', amount: 1, unit: '大さじ' });
      ingredients.push({ name: '砂糖', amount: 1, unit: '小さじ' });
      ingredients.push({ name: 'おろし生姜 (お好み)', amount: 1, unit: '小さじ' });
      steps = [
        { order: 1, instruction: `食材を食べやすい大きさに切り分ける。お肉には薄く小麦粉（片栗粉）をまぶすとタレがよく絡みます。`, timerSeconds: 0 },
        { order: 2, instruction: 'フライパンに油を引き、中火でお肉と野菜を火が通るまで炒める。', timerSeconds: 240 },
        { order: 3, instruction: '火を少し弱め、醤油・みりん・酒・砂糖を加え、とろみがついて照りが出るまで煮絡める。', timerSeconds: 90 }
      ];
      chefTip = '調味料を入れる前にフライパンの余分な油をペーパーで拭き取ると、味がスッキリ引き締まり照りが出ます！';
    } else if (hasTofu) {
      title = `絶品ふわふわ！${primary}${secondary ? 'と' + secondary : ''}の旨味チャンプルー`;
      category = 'main';
      timeMinutes = 12;
      tags.push('主菜', '高タンパク', 'ヘルシー', '満足感');
      ingredients.push({ name: '醤油', amount: 1, unit: '大さじ' });
      ingredients.push({ name: '和風だしの素', amount: 1, unit: '小さじ' });
      ingredients.push({ name: 'ごま油', amount: 1, unit: '大さじ' });
      ingredients.push({ name: '塩コショウ', amount: 1, unit: '少々' });
      steps = [
        { order: 1, instruction: '豆腐はキッチンペーパーで包んで軽く水気を切り、手で大きめにちぎる。他の具材も切り分ける。', timerSeconds: 0 },
        { order: 2, instruction: 'フライパンにごま油を熱し、豆腐を入れて両面にこんがり焼き色をつけたら端に寄せる。', timerSeconds: 180 },
        { order: 3, instruction: '空いたスペースで具材を炒め合わせ、だしの素と醤油を回し入れて全体を優しく和える。', timerSeconds: 90 }
      ];
      chefTip = '豆腐を手でちぎることで断面に味がしっかり染み込み、より美味しく仕上がります！';
    } else {
      title = `シェフ厳選！${primary}${secondary ? 'と' + secondary : ''}の旨味豊かな和風きんぴら炒め`;
      category = 'main';
      timeMinutes = 12;
      tags.push('主菜', '常備菜', '素材の味');
      ingredients.push({ name: '醤油', amount: 1.5, unit: '大さじ' });
      ingredients.push({ name: 'みりん', amount: 1.5, unit: '大さじ' });
      ingredients.push({ name: '砂糖', amount: 0.5, unit: '大さじ' });
      ingredients.push({ name: 'ごま油', amount: 1, unit: '大さじ' });
      ingredients.push({ name: 'いりごま', amount: 1, unit: '適量' });
      steps = [
        { order: 1, instruction: `${ingNames.join('、')}を細切りまたは短冊切りにして揃える。`, timerSeconds: 0 },
        { order: 2, instruction: 'フライパンにごま油を熱し、中火でしんなりするまでじっくり炒める。', timerSeconds: 200 },
        { order: 3, instruction: '調味料を加え、水分が飛ぶまで炒り煮にし、仕上げにいりごまを振る。', timerSeconds: 90 }
      ];
      chefTip = '具材の太さを揃えてカットすることで、均一に火が通り食感が良くなります。';
    }
  }

  // Custom user note embellishment
  if (userCustomNote && userCustomNote.trim()) {
    title = `【${userCustomNote.trim()}】` + title;
  }

  return {
    id: 'rec_ai_' + Date.now() + '_' + seed,
    title,
    category,
    servings: 2,
    difficulty: 'easy',
    timeMinutes,
    tags,
    imageUrl,
    ingredients,
    steps,
    chefTip,
    isAiGenerated: true,
    nutrition: {
      calories: Math.round(220 + (ingNames.length * 45) + (hasMeat ? 150 : 0)),
      protein: Math.round(12 + (hasMeat ? 16 : hasEgg || hasTofu ? 8 : 2)),
      fat: Math.round(8 + (hasMeat ? 12 : 5)),
      carbs: Math.round(10 + ingNames.length * 4)
    }
  };
}

let toastTimer = null;
function showToast(msg, type = 'info') {
  let toast = document.getElementById('mobile-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'mobile-toast';
    toast.className = 'fixed top-14 left-4 right-4 z-50 p-3.5 rounded-2xl text-xs font-bold shadow-2xl text-center transition-all duration-300 transform -translate-y-4 opacity-0 text-white max-w-[380px] mx-auto';
    document.getElementById('phone-container').appendChild(toast);
  }
  toast.textContent = msg;
  toast.className = `fixed top-14 left-4 right-4 z-50 p-3.5 rounded-2xl text-xs font-bold shadow-2xl text-center transition-all duration-300 transform translate-y-0 opacity-100 text-white max-w-[380px] mx-auto ${
    type === 'success' ? 'bg-emerald-600' : type === 'error' ? 'bg-rose-600' : 'bg-slate-900/95'
  }`;
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    toast.classList.add('-translate-y-4', 'opacity-0');
  }, 3000);
}

class TimerManager {
  constructor() { this.timers = []; this.intv = null; }
  start(lbl, sec) {
    const t = { id: 't_' + Date.now(), lbl, sec, rem: sec, run: true };
    this.timers.push(t);
    this.run();
    showToast(`⏱️ 「${lbl}」タイマーを開始しました`, 'success');
  }
  run() {
    if (this.intv) return;
    this.intv = setInterval(() => {
      let changed = false;
      this.timers.forEach(t => {
        if (t.run && t.rem > 0) {
          t.rem--;
          changed = true;
          if (t.rem === 0) {
            t.run = false;
            showToast(`🔔 「${t.lbl}」の時間になりました！`, 'success');
          }
        }
      });
      if (changed) this.render();
    }, 1000);
  }
  render() {
    const bar = document.getElementById('app-timer-bar');
    if (!bar) return;
    if (this.timers.length === 0) { bar.className = 'hidden'; return; }
    bar.className = 'fixed bottom-20 left-4 right-4 z-40 flex flex-col gap-1.5 max-w-[390px] mx-auto';
    bar.innerHTML = this.timers.map(t => {
      const m = Math.floor(t.rem / 60); const s = t.rem % 60;
      return `
        <div class="p-2.5 rounded-2xl bg-slate-900/95 text-white flex items-center justify-between text-xs shadow-xl border border-slate-700">
          <span class="font-bold truncate max-w-[180px]">⏱️ ${t.lbl}</span>
          <div class="flex items-center gap-2 font-mono font-bold text-orange-400">
            <span>${m}:${s.toString().padStart(2, '0')}</span>
            <button data-del-timer="${t.id}" class="text-slate-400 hover:text-white text-sm">✕</button>
          </div>
        </div>
      `;
    }).join('');
    bar.querySelectorAll('[data-del-timer]').forEach(b => {
      b.onclick = () => {
        this.timers = this.timers.filter(x => x.id !== b.getAttribute('data-del-timer'));
        this.render();
      };
    });
  }
}
const timerManager = new TimerManager();

// ==========================================
// 6. MAIN MOBILE APP CONTROLLER
// ==========================================
class MobileApp {
  constructor() {
    this.state = {
      tab: 'home',
      selectedRecId: null,
      search: '',
      cat: 'all',
      tag: 'all',
      favOnly: false,
      servings: {},
      isDark: false,
      stokSort: 'expire',
      shoppingCategoryFilter: 'all',
      recipes: [],
      inventory: [],
      shopping: [],
      prices: [],
      stores: []
    };
  }

  async init() {
    this.state.isDark = localStorage.getItem('rm_theme') === 'dark';
    if (this.state.isDark) document.documentElement.classList.add('dark');

    await this.loadData();
    this.render();
  }

  async loadData() {
    this.state.recipes = await db.getAll('recipes');
    this.state.inventory = await db.getAll('inventory');
    this.state.shopping = await db.getAll('shopping');
    this.state.prices = await db.getAll('prices');
    this.state.stores = await db.getAll('stores');
  }

  toggleDark() {
    this.state.isDark = !this.state.isDark;
    localStorage.setItem('rm_theme', this.state.isDark ? 'dark' : 'light');
    if (this.state.isDark) document.documentElement.classList.add('dark');
    else document.documentElement.classList.remove('dark');
    this.render();
  }

  render() {
    this.renderHeader();
    this.renderBottomNav();
    this.renderMain();
  }

  renderHeader() {
    const el = document.getElementById('app-header');
    if (this.state.selectedRecId) {
      const rec = this.state.recipes.find(r => r.id === this.state.selectedRecId);
      el.innerHTML = `
        <header class="flex items-center justify-between px-4 py-2.5 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-b border-slate-200/80 dark:border-slate-800/80">
          <button id="hdr-back-btn" class="flex items-center gap-1.5 py-1 text-xs font-bold text-orange-500 active:opacity-60">
            <span class="text-base font-bold">←</span>
            <span>レシピ一覧に戻る</span>
          </button>
          <div class="flex items-center gap-1.5">
            <button id="hdr-theme" class="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-xs">
              ${this.state.isDark ? '☀️' : '🌙'}
            </button>
            <button id="hdr-edit-rec" class="flex items-center gap-1 px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200 text-xs font-bold active:scale-95">
              <span>✏️ 編集</span>
            </button>
          </div>
        </header>
      `;
      const backAction = (e) => {
        if (e) { e.preventDefault(); e.stopPropagation(); }
        this.state.selectedRecId = null;
        this.render();
      };
      const bBtn = el.querySelector('#hdr-back-btn');
      bBtn.onclick = backAction;
      bBtn.ontouchend = backAction;
      el.querySelector('#hdr-theme').onclick = () => this.toggleDark();
      el.querySelector('#hdr-edit-rec').onclick = () => { if (rec) this.showAddRecipeModal(rec); };
      return;
    }

    el.innerHTML = `
      <header class="flex items-center justify-between px-4 py-2.5 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-b border-slate-200/80 dark:border-slate-800/80">
        <div class="flex items-center gap-2 cursor-pointer" id="hdr-logo">
          <span class="text-2xl">🍳</span>
          <div>
            <h1 class="text-sm font-black tracking-tight text-slate-900 dark:text-white leading-tight">Recipe Manager</h1>
            <span class="text-[10px] text-orange-500 font-bold">Ver.6 • 9:16 Mobile</span>
          </div>
        </div>
        <div class="flex items-center gap-1.5">
          <button id="hdr-theme" class="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-xs">
            ${this.state.isDark ? '☀️' : '🌙'}
          </button>
          <button id="hdr-add" class="flex items-center gap-1 px-3 py-1.5 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 text-white text-xs font-bold shadow-md active:scale-95">
            <span>＋</span>
            <span>レシピ</span>
          </button>
        </div>
      </header>
    `;
    el.querySelector('#hdr-logo').onclick = () => { this.state.tab = 'home'; this.state.selectedRecId = null; this.render(); };
    el.querySelector('#hdr-theme').onclick = () => this.toggleDark();
    el.querySelector('#hdr-add').onclick = () => this.showAddRecipeModal();
  }

  renderBottomNav() {
    const el = document.getElementById('app-mobile-nav');
    const items = [
      { id: 'home', label: 'ホーム', icon: '🏠' },
      { id: 'recipes', label: 'レシピ', icon: '📖' },
      { id: 'shopping', label: '買い物', icon: '🛒', count: this.state.shopping.filter(i => !i.isChecked).length },
      { id: 'inventory', label: '在庫', icon: '🥕' },
      { id: 'prices', label: '価格', icon: '🏷️' }
    ];

    el.innerHTML = `
      <nav class="fixed bottom-0 left-0 right-0 z-40 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-t border-slate-200 dark:border-slate-800 px-2 py-1.5 max-w-[430px] mx-auto">
        <div class="flex items-center justify-around">
          ${items.map(it => {
            const active = this.state.tab === it.id && !this.state.selectedRecId;
            return `
              <button data-tab="${it.id}" class="relative flex flex-col items-center justify-center py-1 px-3 rounded-xl transition-all ${active ? 'text-orange-500 font-bold scale-105' : 'text-slate-400'}">
                <span class="text-lg leading-none">${it.icon}</span>
                <span class="text-[10px] mt-1">${it.label}</span>
                ${it.count > 0 ? `<span class="absolute top-0 right-1.5 w-4 h-4 bg-orange-500 text-white rounded-full text-[9px] flex items-center justify-center font-bold">${it.count}</span>` : ''}
              </button>
            `;
          }).join('')}
        </div>
      </nav>
    `;
    el.querySelectorAll('button[data-tab]').forEach(b => {
      b.onclick = () => {
        this.state.tab = b.getAttribute('data-tab');
        this.state.selectedRecId = null;
        this.render();
      };
    });
  }

  renderMain() {
    const el = document.getElementById('app-main-view');
    el.innerHTML = '';

    if (this.state.selectedRecId) {
      const rec = this.state.recipes.find(r => r.id === this.state.selectedRecId);
      if (rec) { this.renderRecipeDetail(el, rec); return; }
    }

    if (this.state.tab === 'home') this.renderHome(el);
    else if (this.state.tab === 'recipes') this.renderRecipes(el);
    else if (this.state.tab === 'shopping') this.renderShopping(el);
    else if (this.state.tab === 'inventory') this.renderInventory(el);
    else if (this.state.tab === 'prices') this.renderPrices(el);
  }

  // --- HOME VIEW ---
  renderHome(el) {
    const recs = analyzeFridgeRecommendations(this.state.recipes, this.state.inventory);
    const expiring = this.state.inventory.map(i => ({ ...i, u: getExpirationUrgency(i.expireDate) })).filter(i => i.u.text.includes('今日') || i.u.text.includes('あと') || i.u.text.includes('切'));

    el.innerHTML = `
      <div class="space-y-4 animate-fadeIn">
        <!-- AI Recipe Generator Banner -->
        <div id="btn-home-ai-chef" class="p-4 rounded-3xl bg-gradient-to-r from-amber-500 via-orange-500 to-rose-500 text-white shadow-lg cursor-pointer active:scale-98 transition-all relative overflow-hidden">
          <div class="flex items-center justify-between">
            <div class="min-w-0 flex-1 pr-2">
              <span class="text-[10px] font-bold uppercase tracking-wider bg-white/25 px-2 py-0.5 rounded-full inline-block">✨ AIシェフ機能</span>
              <h2 class="text-base font-black mt-1">冷蔵庫の食材でレシピ考案</h2>
              <p class="text-xs text-orange-100 mt-0.5">登録中の食材（${this.state.inventory.length}品）から今日のオリジナル献立を生成！</p>
            </div>
            <span class="text-3xl shrink-0 animate-bounce">👨‍🍳</span>
          </div>
          <div class="mt-3 flex items-center justify-between bg-white/20 hover:bg-white/30 backdrop-blur-sm px-3.5 py-2 rounded-xl text-xs font-bold text-white transition-all shadow-inner">
            <span>✨ 今日のレシピをAIに考えてもらう</span>
            <span>→</span>
          </div>
        </div>

        ${expiring.length > 0 ? `
          <div class="p-3.5 rounded-2xl bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-900">
            <div class="flex items-center justify-between text-xs font-bold text-rose-700 dark:text-rose-300 mb-2">
              <span>⚠️ 賞味期限が近い食材 (${expiring.length}件)</span>
              <div class="flex items-center gap-2">
                <button id="h-to-ai-exp" class="text-[11px] font-bold text-orange-600 dark:text-orange-400 underline">✨ AIで消費</button>
                <button id="h-to-inv" class="text-[11px] underline">在庫一覧</button>
              </div>
            </div>
            <div class="flex gap-2 overflow-x-auto pb-1 scrollbar-none">
              ${expiring.map(item => `
                <div class="p-2 rounded-xl bg-white dark:bg-slate-800 border min-w-[120px] text-xs shadow-sm flex flex-col justify-between">
                  <span class="font-bold truncate">${item.name}</span>
                  <span class="text-[10px] font-bold px-1.5 py-0.5 rounded ${item.u.badgeClass} self-start mt-1">${item.u.text}</span>
                </div>
              `).join('')}
            </div>
          </div>
        ` : ''}

        <div class="space-y-3">
          <div class="flex items-center justify-between">
            <h3 class="text-sm font-bold flex items-center gap-1.5 text-slate-800 dark:text-slate-100">
              <span>✨ 家にある材料で作れるレシピ</span>
            </h3>
            <button id="h-more-ai" class="text-xs text-orange-500 font-bold">✨ AI考案 →</button>
          </div>
          ${recs.slice(0, 3).map(r => `
            <div data-rec="${r.recipe.id}" class="p-3 rounded-2xl bg-white dark:bg-slate-800 border shadow-sm flex gap-3 cursor-pointer active:scale-98 transition-all">
              <img src="${r.recipe.imageUrl}" class="w-20 h-20 rounded-xl object-cover flex-shrink-0" />
              <div class="flex-1 min-w-0 flex flex-col justify-between">
                <div>
                  <span class="text-[9px] font-bold px-1.5 py-0.5 rounded bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300">${r.badgeText}</span>
                  <h4 class="font-bold text-xs sm:text-sm truncate mt-1">${r.recipe.title}</h4>
                </div>
                <div class="flex items-center justify-between text-[11px] text-slate-400 mt-1">
                  <span>⏱️ ${r.recipe.timeMinutes}分</span>
                  <span class="text-orange-500 font-bold">作る →</span>
                </div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `;

    el.querySelector('#btn-home-ai-chef').onclick = () => this.showAiRecipeGeneratorModal();
    const moreAiBtn = el.querySelector('#h-more-ai');
    if (moreAiBtn) moreAiBtn.onclick = () => this.showAiRecipeGeneratorModal();
    const expAiBtn = el.querySelector('#h-to-ai-exp');
    if (expAiBtn) expAiBtn.onclick = () => this.showAiRecipeGeneratorModal(expiring);

    el.querySelectorAll('[data-rec]').forEach(b => {
      b.onclick = () => { this.state.selectedRecId = b.getAttribute('data-rec'); this.render(); };
    });
    const invBtn = el.querySelector('#h-to-inv');
    if (invBtn) invBtn.onclick = () => { this.state.tab = 'inventory'; this.render(); };
  }

  // --- RECIPES LIST ---
  renderRecipes(el) {
    const list = this.state.recipes.filter(r => matchRecipe(r, this.state.search, { category: this.state.cat, tag: this.state.tag, onlyFavorites: this.state.favOnly }));

    el.innerHTML = `
      <div class="space-y-3 animate-fadeIn">
        <input id="rec-search" type="text" value="${this.state.search}" placeholder="レシピや材料を検索 (例: 鶏肉)..." class="w-full px-4 py-2.5 text-xs bg-white dark:bg-slate-800 border rounded-2xl outline-none focus:ring-2 focus:ring-orange-500" />

        <div class="flex gap-1.5 overflow-x-auto pb-1 scrollbar-none text-xs">
          <button data-cat="all" class="px-3 py-1 rounded-xl font-bold whitespace-nowrap ${this.state.cat === 'all' ? 'bg-orange-500 text-white' : 'bg-white dark:bg-slate-800 border'}">すべて</button>
          ${Categories.map(c => `
            <button data-cat="${c.id}" class="px-3 py-1 rounded-xl font-bold whitespace-nowrap ${this.state.cat === c.id ? 'bg-orange-500 text-white' : 'bg-white dark:bg-slate-800 border'}">${c.name}</button>
          `).join('')}
        </div>

        <div class="space-y-2.5">
          ${list.map(r => `
            <div data-rec="${r.id}" class="p-3 rounded-2xl bg-white dark:bg-slate-800 border shadow-sm flex gap-3 cursor-pointer active:scale-98">
              <img src="${r.imageUrl}" class="w-16 h-16 rounded-xl object-cover flex-shrink-0" />
              <div class="flex-1 min-w-0 flex flex-col justify-between">
                <div>
                  <h4 class="font-bold text-xs truncate">${r.title}</h4>
                  <div class="flex gap-1 mt-1">
                    ${(r.tags || []).slice(0, 2).map(t => `<span class="text-[9px] text-slate-400 bg-slate-100 dark:bg-slate-700 px-1 rounded">#${t}</span>`).join('')}
                  </div>
                </div>
                <div class="flex justify-between text-[10px] text-slate-400">
                  <span>⏱️ ${r.timeMinutes}分</span>
                  <span class="text-orange-500 font-bold">詳しく見る →</span>
                </div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `;

    el.querySelector('#rec-search').oninput = (e) => { this.state.search = e.target.value; this.renderMain(); };
    el.querySelectorAll('button[data-cat]').forEach(b => {
      b.onclick = () => { this.state.cat = b.getAttribute('data-cat'); this.renderMain(); };
    });
    el.querySelectorAll('[data-rec]').forEach(b => {
      b.onclick = () => { this.state.selectedRecId = b.getAttribute('data-rec'); this.render(); };
    });
  }

  // --- RECIPE DETAIL ---
  renderRecipeDetail(el, rec) {
    const curServ = this.state.servings[rec.id] || rec.servings || 2;
    const scaled = rec.ingredients.map(i => ({
      ...i,
      scAmt: scaleAmount(i.amount, rec.servings || 2, curServ)
    }));

    el.innerHTML = `
      <div class="space-y-4 animate-fadeIn pb-6">
        <div class="flex items-center justify-between">
          <button id="det-back" type="button" class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-orange-50 dark:bg-orange-950/60 border border-orange-200 dark:border-orange-800 text-xs font-bold text-orange-600 dark:text-orange-400 active:scale-95 shadow-sm">
            <span class="text-sm leading-none">←</span>
            <span>一覧に戻る</span>
          </button>
          <div class="flex items-center gap-1.5">
            <button id="det-edit-rec" class="flex items-center gap-1 px-2.5 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200 text-xs font-bold active:scale-95 shadow-sm">
              <span>✏️</span>
              <span>編集</span>
            </button>
            <button id="det-del-rec" class="flex items-center gap-1 px-2.5 py-1.5 rounded-xl bg-rose-50 dark:bg-rose-950/50 text-rose-600 dark:text-rose-400 text-xs font-bold active:scale-95 shadow-sm">
              <span>🗑️</span>
              <span>削除</span>
            </button>
          </div>
        </div>

        <div class="relative h-44 rounded-3xl overflow-hidden shadow-md">
          <img src="${rec.imageUrl}" class="w-full h-full object-cover" />
          <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent"></div>
          <div class="absolute bottom-3 left-3 right-3 text-white">
            <h2 class="text-base font-black">${rec.title}</h2>
            <div class="text-[11px] text-slate-200 mt-0.5">⏱️ ${rec.timeMinutes}分 • 難易度: 初級</div>
          </div>
        </div>

        <button id="det-start-cook" class="w-full py-3.5 rounded-2xl bg-gradient-to-r from-orange-500 to-amber-500 text-white font-black text-sm shadow-xl active:scale-95">
          👨‍🍳 料理開始 (集中モード)
        </button>

        <div class="p-3 rounded-2xl bg-white dark:bg-slate-800 border flex items-center justify-between text-xs">
          <span class="font-bold">👥 人数: ${curServ}人前</span>
          <div class="flex items-center gap-2">
            <button id="serv-minus" class="w-7 h-7 bg-slate-100 dark:bg-slate-700 rounded-lg font-bold">-</button>
            <button id="serv-plus" class="w-7 h-7 bg-slate-100 dark:bg-slate-700 rounded-lg font-bold">+</button>
          </div>
        </div>

        <div class="p-4 rounded-2xl bg-white dark:bg-slate-800 border space-y-2">
          <h3 class="text-xs font-bold">🥕 材料一覧</h3>
          <div class="divide-y divide-slate-100 dark:divide-slate-700 text-xs">
            ${scaled.map(i => `
              <div class="py-2 flex justify-between">
                <span>${i.name}</span>
                <span class="font-mono font-bold">${formatAmountDisplay(i.scAmt, i.unit)}</span>
              </div>
            `).join('')}
          </div>
          <button id="det-to-shop" class="w-full py-2 bg-sky-50 dark:bg-sky-950 text-sky-600 dark:text-sky-300 rounded-xl text-xs font-bold mt-2">
            🛒 買い物リストへ追加
          </button>
        </div>

        <div class="p-4 rounded-2xl bg-white dark:bg-slate-800 border space-y-3">
          <h3 class="text-xs font-bold">📋 作り方</h3>
          <div class="space-y-2.5 text-xs">
            ${(rec.steps || []).map((s, idx) => `
              <div class="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-700/50 space-y-1">
                <div class="flex justify-between text-orange-500 font-bold text-[11px]">
                  <span>STEP ${idx + 1}</span>
                  ${s.timerSeconds > 0 ? `<button data-timer-sec="${s.timerSeconds}" data-timer-lbl="${rec.title} STEP${idx+1}" class="text-[10px] bg-orange-100 dark:bg-orange-950 px-2 py-0.5 rounded">⏱️ ${Math.floor(s.timerSeconds/60)}分</button>` : ''}
                </div>
                <p class="leading-relaxed">${s.instruction}</p>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    `;

    const backAction = (e) => {
      if (e) { e.preventDefault(); e.stopPropagation(); }
      this.state.selectedRecId = null;
      this.render();
    };
    const bBtn = el.querySelector('#det-back');
    if (bBtn) {
      bBtn.onclick = backAction;
      bBtn.ontouchend = backAction;
    }
    el.querySelector('#det-edit-rec').onclick = () => this.showAddRecipeModal(rec);
    el.querySelector('#det-del-rec').onclick = async () => {
      if (confirm(`レシピ「${rec.title}」を削除しますか？`)) {
        await db.delete('recipes', rec.id);
        await this.loadData();
        showToast(`「${rec.title}」を削除しました`, 'info');
        this.state.selectedRecId = null;
        this.render();
      }
    };
    el.querySelector('#serv-minus').onclick = () => {
      if (curServ > 1) { this.state.servings[rec.id] = curServ - 1; this.renderMain(); }
    };
    el.querySelector('#serv-plus').onclick = () => {
      if (curServ < 10) { this.state.servings[rec.id] = curServ + 1; this.renderMain(); }
    };
    el.querySelector('#det-start-cook').onclick = () => this.showCookingModal(rec);
    el.querySelector('#det-to-shop').onclick = () => {
      scaled.forEach(i => {
        db.put('shopping', { id: 's_' + Date.now() + Math.random(), name: i.name, category: 'food', quantity: i.scAmt || 1, unit: i.unit || '', isChecked: false, recipeTitle: rec.title });
      });
      this.loadData().then(() => showToast('買い物リストに追加しました', 'success'));
    };
    el.querySelectorAll('[data-timer-sec]').forEach(b => {
      b.onclick = () => timerManager.start(b.getAttribute('data-timer-lbl'), Number(b.getAttribute('data-timer-sec')));
    });
  }

  // --- SHOPPING VIEW ---
  renderShopping(el) {
    const activeCat = this.state.shoppingCategoryFilter || 'all';
    const filtered = this.state.shopping.filter(i => {
      if (activeCat === 'all') return true;
      return (i.category || 'food') === activeCat;
    });

    const unchecked = filtered.filter(i => !i.isChecked);
    const checked = filtered.filter(i => i.isChecked);

    el.innerHTML = `
      <div class="space-y-3 animate-fadeIn">
        <div class="flex items-center justify-between">
          <h2 class="text-sm font-bold flex items-center gap-1.5">
            <span>🛒 買い物リスト</span>
            <span class="text-xs text-sky-600 font-mono">(${unchecked.length}件)</span>
          </h2>
          ${checked.length > 0 ? `<button id="btn-clear-chk" class="text-[11px] text-slate-400 hover:text-rose-500">購入済みクリア</button>` : ''}
        </div>

        <div class="flex gap-1.5 overflow-x-auto pb-1 scrollbar-none text-xs">
          ${ShoppingCategories.map(sc => `
            <button data-shop-cat="${sc.id}" class="px-3 py-1.5 rounded-xl font-bold whitespace-nowrap transition-all ${
              activeCat === sc.id ? 'bg-sky-500 text-white shadow-md' : 'bg-white dark:bg-slate-800 border text-slate-600 dark:text-slate-300'
            }">
              ${sc.icon || ''} ${sc.name}
            </button>
          `).join('')}
        </div>

        <form id="f-shop" class="p-3.5 rounded-2xl bg-white dark:bg-slate-800 border space-y-2.5 text-xs shadow-sm">
          <div>
            <input id="in-s-name" type="text" placeholder="買うものを入力 (例: 牛乳, 卵, 醤油)" required class="w-full px-3 py-2 bg-slate-50 dark:bg-slate-700/60 border border-slate-200 dark:border-slate-700 rounded-xl outline-none text-xs" />
          </div>
          <div class="grid grid-cols-12 gap-2 items-center">
            <div class="col-span-4 min-w-0">
              <input id="in-s-qty" type="text" placeholder="数量 (例: 1本)" class="w-full px-2.5 py-2 bg-slate-50 dark:bg-slate-700/60 border border-slate-200 dark:border-slate-700 rounded-xl font-mono text-xs outline-none" />
            </div>
            <div class="col-span-5 min-w-0">
              <select id="in-s-cat" class="w-full px-2 py-2 bg-slate-50 dark:bg-slate-700/60 border border-slate-200 dark:border-slate-700 rounded-xl text-xs font-bold text-slate-700 dark:text-slate-200 outline-none truncate">
                <option value="food">🥕 食材・食品</option>
                <option value="daily">🧻 日用品・消耗品</option>
                <option value="seasoning">🧂 調味料</option>
                <option value="drink">🧃 飲料・お酒</option>
                <option value="other">📦 その他</option>
              </select>
            </div>
            <div class="col-span-3 min-w-0">
              <button type="submit" class="w-full py-2 bg-sky-500 hover:bg-sky-600 text-white text-xs font-bold rounded-xl shadow-md active:scale-95 transition-all text-center">
                ＋ 追加
              </button>
            </div>
          </div>
        </form>

        <div class="space-y-2">
          ${unchecked.map(i => {
            const catObj = ShoppingCategories.find(c => c.id === (i.category || 'food'));
            return `
              <div class="p-3 rounded-2xl bg-white dark:bg-slate-800 border flex items-center justify-between text-xs gap-2">
                <div class="flex items-center gap-2.5 min-w-0 flex-1">
                  <input type="checkbox" data-chk="${i.id}" class="w-4 h-4 rounded cursor-pointer text-sky-500 shrink-0" />
                  <div class="min-w-0 flex-1 cursor-pointer" data-edit-shop="${i.id}">
                    <div class="flex items-center gap-1.5 flex-wrap">
                      <span class="font-bold truncate">${i.name}</span>
                      ${i.quantity ? `<span class="text-sky-600 dark:text-sky-400 font-mono text-[11px] font-bold bg-sky-50 dark:bg-sky-950/60 px-1.5 py-0.2 rounded border border-sky-200 dark:border-sky-800 shrink-0">(${i.quantity} ${i.unit || ''})</span>` : ''}
                    </div>
                    <div class="flex items-center gap-1.5 mt-0.5 flex-wrap">
                      <span class="text-[9px] px-1.5 py-0.2 rounded bg-slate-100 dark:bg-slate-700 text-slate-500 shrink-0">${catObj ? catObj.name : '食材'}</span>
                      ${i.recipeTitle ? `<span class="text-[9px] text-slate-400 truncate">📖 ${i.recipeTitle}</span>` : ''}
                      ${i.memo ? `<span class="text-[9px] text-slate-400 truncate">💬 ${i.memo}</span>` : ''}
                    </div>
                  </div>
                </div>
                <div class="flex items-center gap-1 shrink-0">
                  <button data-edit-shop="${i.id}" class="p-1.5 text-slate-400 hover:text-sky-600 bg-slate-50 dark:bg-slate-700/50 hover:bg-sky-50 rounded-lg text-xs" title="編集">✏️</button>
                  <button data-del-s="${i.id}" class="p-1 text-slate-300 hover:text-rose-500 rounded-lg text-xs" title="削除">✕</button>
                </div>
              </div>
            `;
          }).join('')}

          ${checked.map(i => `
            <div class="p-2.5 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border opacity-60 flex items-center justify-between text-xs gap-2">
              <div class="flex items-center gap-2.5 min-w-0 flex-1">
                <input type="checkbox" checked data-chk="${i.id}" class="w-4 h-4 rounded cursor-pointer shrink-0" />
                <span class="line-through text-slate-400 truncate cursor-pointer" data-edit-shop="${i.id}">${i.name}</span>
              </div>
              <div class="flex items-center gap-1 shrink-0">
                <button data-edit-shop="${i.id}" class="p-1 text-slate-400 text-xs" title="編集">✏️</button>
                <button data-del-s="${i.id}" class="text-slate-400 text-xs p-1" title="削除">✕</button>
              </div>
            </div>
          `).join('')}

          ${filtered.length === 0 ? `
            <div class="p-8 text-center text-xs text-slate-400 bg-white dark:bg-slate-800/50 rounded-2xl border">
              買い物リストに商品はありません
            </div>
          ` : ''}
        </div>
      </div>
    `;

    el.querySelectorAll('button[data-shop-cat]').forEach(b => {
      b.onclick = () => {
        this.state.shoppingCategoryFilter = b.getAttribute('data-shop-cat');
        this.renderMain();
      };
    });

    el.querySelector('#f-shop').onsubmit = async (e) => {
      e.preventDefault();
      const n = el.querySelector('#in-s-name').value.trim();
      const q = el.querySelector('#in-s-qty').value.trim();
      const cat = el.querySelector('#in-s-cat').value;
      if (n) {
        await db.put('shopping', { id: 's_' + Date.now(), name: n, category: cat, quantity: q || 1, isChecked: false });
        await this.loadData();
        this.renderMain();
      }
    };
    el.querySelectorAll('[data-chk]').forEach(c => {
      c.onchange = async () => {
        const item = this.state.shopping.find(x => x.id === c.getAttribute('data-chk'));
        if (item) { item.isChecked = !item.isChecked; await db.put('shopping', item); this.render(); }
      };
    });
    el.querySelectorAll('[data-edit-shop]').forEach(b => {
      b.onclick = () => {
        const id = b.getAttribute('data-edit-shop');
        const item = this.state.shopping.find(x => x.id === id);
        if (item) this.showEditShoppingModal(item);
      };
    });
    el.querySelectorAll('[data-del-s]').forEach(b => {
      b.onclick = async (e) => {
        e.stopPropagation();
        await db.delete('shopping', b.getAttribute('data-del-s'));
        await this.loadData();
        this.render();
      };
    });
    const clr = el.querySelector('#btn-clear-chk');
    if (clr) {
      clr.onclick = async () => {
        for (const it of checked) await db.delete('shopping', it.id);
        await this.loadData();
        this.render();
      };
    }
  }

  // --- EDIT SHOPPING ITEM MODAL ---
  showEditShoppingModal(item) {
    const modal = document.createElement('div');
    modal.className = 'absolute inset-0 z-50 bg-white dark:bg-slate-900 p-5 overflow-y-auto space-y-4 animate-fadeIn modal-screen';

    modal.innerHTML = `
      <div class="flex justify-between items-center">
        <h3 class="font-bold text-base flex items-center gap-1.5">
          <span>🛒</span>
          <span>買い物アイテムの編集</span>
        </h3>
        <button id="eshop-close" class="text-slate-400 text-lg">✕</button>
      </div>

      <form id="f-edit-shop" class="space-y-3.5 text-xs">
        <div>
          <label class="block font-bold mb-1">商品・買うもの <span class="text-rose-500">*</span></label>
          <input id="es-name" type="text" value="${item.name || ''}" placeholder="例: 牛乳, 卵, 醤油" required class="w-full px-3 py-2 bg-slate-50 dark:bg-slate-800 border rounded-xl text-xs" />
        </div>

        <div class="grid grid-cols-2 gap-2.5">
          <div>
            <label class="block font-bold mb-1">数量</label>
            <input id="es-qty" type="text" value="${item.quantity || ''}" placeholder="例: 1, 2本, 100" class="w-full px-3 py-2 bg-slate-50 dark:bg-slate-800 border rounded-xl font-mono text-xs" />
          </div>
          <div>
            <label class="block font-bold mb-1">単位 (任意)</label>
            <input id="es-unit" type="text" value="${item.unit || ''}" placeholder="例: 本, 個, g, パック" class="w-full px-3 py-2 bg-slate-50 dark:bg-slate-800 border rounded-xl text-xs" />
          </div>
        </div>

        <div>
          <label class="block font-bold mb-1">区分・カテゴリー</label>
          <select id="es-cat" class="w-full px-3 py-2 bg-slate-50 dark:bg-slate-800 border rounded-xl text-xs">
            <option value="food" ${(item.category || 'food') === 'food' ? 'selected' : ''}>🥕 食材・食品</option>
            <option value="daily" ${item.category === 'daily' ? 'selected' : ''}>🧻 日用品・消耗品</option>
            <option value="seasoning" ${item.category === 'seasoning' ? 'selected' : ''}>🧂 調味料</option>
            <option value="drink" ${item.category === 'drink' ? 'selected' : ''}>🧃 飲料・お酒</option>
            <option value="other" ${item.category === 'other' ? 'selected' : ''}>📦 その他</option>
          </select>
        </div>

        <div>
          <label class="block font-bold mb-1">メモ (任意)</label>
          <input id="es-memo" type="text" value="${item.memo || ''}" placeholder="例: セール品, 特売" class="w-full px-3 py-2 bg-slate-50 dark:bg-slate-800 border rounded-xl text-xs" />
        </div>

        <div class="flex gap-2 pt-2">
          <button type="button" id="eshop-cancel" class="flex-1 py-2.5 bg-slate-100 dark:bg-slate-800 font-bold rounded-xl text-xs">キャンセル</button>
          <button type="submit" class="flex-1 py-2.5 bg-sky-500 text-white font-bold rounded-xl shadow-md text-xs">アイテムを更新</button>
        </div>
      </form>
    `;

    modal.querySelector('#eshop-close').onclick = () => modal.remove();
    modal.querySelector('#eshop-cancel').onclick = () => modal.remove();

    modal.querySelector('#f-edit-shop').onsubmit = async (e) => {
      e.preventDefault();
      const name = modal.querySelector('#es-name').value.trim();
      const qty = modal.querySelector('#es-qty').value.trim();
      const unit = modal.querySelector('#es-unit').value.trim();
      const cat = modal.querySelector('#es-cat').value;
      const memo = modal.querySelector('#es-memo').value.trim();

      await db.put('shopping', {
        ...item,
        name,
        quantity: qty || 1,
        unit,
        category: cat,
        memo,
        updatedAt: new Date().toISOString()
      });

      await this.loadData();
      showToast(`「${name}」を更新しました`, 'success');
      modal.remove();
      this.renderMain();
    };

    document.getElementById('phone-container').appendChild(modal);
  }

  // --- STOK (INVENTORY) VIEW ---
  renderInventory(el) {
    let sortedList = [...this.state.inventory].map(i => ({
      ...i,
      u: getExpirationUrgency(i.expireDate)
    }));

    const sortMode = this.state.stokSort || 'expire';
    if (sortMode === 'expire') {
      sortedList.sort((a, b) => (a.u.days ?? 999) - (b.u.days ?? 999));
    } else if (sortMode === 'name') {
      sortedList.sort((a, b) => a.name.localeCompare(b.name, 'ja'));
    } else if (sortMode === 'location') {
      const locOrder = { fridge: 1, veg: 2, freezer: 3, pantry: 4 };
      sortedList.sort((a, b) => (locOrder[a.location] || 99) - (locOrder[b.location] || 99));
    } else if (sortMode === 'created') {
      sortedList.sort((a, b) => new Date(b.createdAt || 0) - new Date(a.createdAt || 0));
    } else if (sortMode === 'qty') {
      sortedList.sort((a, b) => Number(b.quantity || 0) - Number(a.quantity || 0));
    }

    el.innerHTML = `
      <div class="space-y-3 animate-fadeIn">
        <div class="flex justify-between items-center gap-2">
          <div class="min-w-0 flex-1">
            <h2 class="text-sm font-black text-slate-900 dark:text-white flex items-center gap-1.5 truncate">
              <span>🥕 食材・在庫</span>
              <span class="text-xs font-mono font-bold text-emerald-600">(${this.state.inventory.length}品目)</span>
            </h2>
          </div>
          <div class="flex items-center gap-1.5 shrink-0">
            <button id="btn-inv-ai-chef" class="px-2.5 py-1.5 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white text-xs font-bold rounded-xl shadow-md active:scale-95 flex items-center gap-1">
              <span>✨</span>
              <span>AIレシピ考案</span>
            </button>
            <button id="btn-add-inv" class="px-2.5 py-1.5 bg-emerald-500 hover:bg-emerald-600 text-white text-xs font-bold rounded-xl shadow-md active:scale-95 flex items-center gap-1">
              <span>＋</span>
              <span>追加</span>
            </button>
          </div>
        </div>

        <!-- AI Chef Quick Banner in Inventory -->
        <div id="btn-inv-ai-banner" class="p-3 rounded-2xl bg-gradient-to-r from-amber-500/10 via-orange-500/10 to-rose-500/10 border border-orange-200 dark:border-orange-900/60 flex items-center justify-between cursor-pointer active:scale-98 transition-all">
          <div class="flex items-center gap-2">
            <span class="text-xl">👨‍🍳</span>
            <div class="text-xs">
              <span class="font-bold text-orange-600 dark:text-orange-400 block">冷蔵庫の食材でレシピを自動考案</span>
              <span class="text-[10px] text-slate-500 dark:text-slate-400">賞味期限が近い食材を優先して美味しく消費！</span>
            </div>
          </div>
          <span class="text-orange-500 font-bold text-xs">生成 →</span>
        </div>

        <div class="p-2.5 rounded-2xl bg-white dark:bg-slate-800 border flex items-center justify-between text-xs">
          <span class="text-slate-400 font-bold flex items-center gap-1">
            <span>🔄 並び順:</span>
          </span>
          <select id="stok-sort-select" class="px-2.5 py-1 bg-slate-50 dark:bg-slate-700 border rounded-xl font-bold outline-none text-slate-700 dark:text-slate-200">
            <option value="expire" ${sortMode === 'expire' ? 'selected' : ''}>⏳ 賞味期限が近い順</option>
            <option value="name" ${sortMode === 'name' ? 'selected' : ''}>🔤 名前順 (50音)</option>
            <option value="location" ${sortMode === 'location' ? 'selected' : ''}>❄️ 保存場所・品目順</option>
            <option value="created" ${sortMode === 'created' ? 'selected' : ''}>📅 登録が新しい順</option>
            <option value="qty" ${sortMode === 'qty' ? 'selected' : ''}>🔢 在庫数量順</option>
          </select>
        </div>

        <div class="space-y-2">
          ${sortedList.map(i => {
            const locObj = StorageLocations.find(l => l.id === i.location);
            return `
              <div class="p-3 rounded-2xl bg-white dark:bg-slate-800 border shadow-sm flex items-center justify-between text-xs gap-2">
                <div class="flex-1 cursor-pointer min-w-0" data-edit-inv="${i.id}">
                  <div class="flex items-center gap-1.5 flex-wrap">
                    <span class="font-bold text-sm text-slate-900 dark:text-white truncate">${i.name}</span>
                    <span class="text-[10px] px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-700 text-slate-500 shrink-0">${locObj ? locObj.name : '冷蔵'}</span>
                  </div>
                  <div class="flex items-center gap-2 mt-1 flex-wrap">
                    <span class="text-[10px] font-bold px-1.5 py-0.5 rounded ${i.u.badgeClass}">${i.u.text}</span>
                    <span class="text-[10px] text-slate-400 font-mono">期限: ${i.expireDate || '未設定'}</span>
                  </div>
                  ${i.memo ? `<div class="text-[10px] text-slate-400 mt-0.5 truncate">💬 ${i.memo}</div>` : ''}
                </div>

                <div class="flex items-center gap-1.5 shrink-0">
                  <div class="flex items-center gap-1 bg-slate-100 dark:bg-slate-700 p-1 rounded-xl">
                    <button data-inv-dec="${i.id}" class="w-6 h-6 rounded bg-white dark:bg-slate-800 font-bold shadow-sm active:scale-95">-</button>
                    <span class="font-mono font-bold text-xs px-1">${i.quantity} ${i.unit || ''}</span>
                    <button data-inv-inc="${i.id}" class="w-6 h-6 rounded bg-white dark:bg-slate-800 font-bold shadow-sm active:scale-95">+</button>
                  </div>
                  <button data-edit-inv="${i.id}" class="p-1.5 text-slate-400 hover:text-emerald-600 bg-slate-50 dark:bg-slate-700/50 hover:bg-emerald-50 rounded-lg text-xs" title="編集">✏️</button>
                  <button data-del-inv="${i.id}" class="p-1 text-slate-300 hover:text-rose-500 rounded-lg text-xs" title="削除">✕</button>
                </div>
              </div>
            `;
          }).join('')}

          ${sortedList.length === 0 ? `
            <div class="p-8 text-center text-xs text-slate-400 bg-white dark:bg-slate-800/50 rounded-2xl border">
              在庫に食材がありません。「＋ 在庫追加」から登録してください。
            </div>
          ` : ''}
        </div>
      </div>
    `;

    el.querySelector('#stok-sort-select').onchange = (e) => {
      this.state.stokSort = e.target.value;
      this.renderMain();
    };

    el.querySelector('#btn-add-inv').onclick = () => this.showAddStokModal();
    const invAiChefBtn = el.querySelector('#btn-inv-ai-chef');
    if (invAiChefBtn) invAiChefBtn.onclick = () => this.showAiRecipeGeneratorModal();
    const invAiBanner = el.querySelector('#btn-inv-ai-banner');
    if (invAiBanner) invAiBanner.onclick = () => this.showAiRecipeGeneratorModal();

    el.querySelectorAll('[data-edit-inv]').forEach(b => {
      b.onclick = () => {
        const id = b.getAttribute('data-edit-inv');
        const it = this.state.inventory.find(x => x.id === id);
        if (it) this.showAddStokModal(it);
      };
    });

    el.querySelectorAll('[data-inv-inc]').forEach(b => {
      b.onclick = async (e) => {
        e.stopPropagation();
        const id = b.getAttribute('data-inv-inc');
        const it = this.state.inventory.find(x => x.id === id);
        if (it) { it.quantity = Number(it.quantity) + 1; await db.put('inventory', it); this.renderMain(); }
      };
    });
    el.querySelectorAll('[data-inv-dec]').forEach(b => {
      b.onclick = async (e) => {
        e.stopPropagation();
        const id = b.getAttribute('data-inv-dec');
        const it = this.state.inventory.find(x => x.id === id);
        if (it && Number(it.quantity) > 0) { it.quantity = Number(it.quantity) - 1; await db.put('inventory', it); this.renderMain(); }
      };
    });
    el.querySelectorAll('[data-del-inv]').forEach(b => {
      b.onclick = async (e) => {
        e.stopPropagation();
        await db.delete('inventory', b.getAttribute('data-del-inv'));
        await this.loadData();
        this.renderMain();
      };
    });
  }

  // --- PRICES VIEW ---
  renderPrices(el) {
    el.innerHTML = `
      <div class="space-y-3 animate-fadeIn">
        <!-- Top Bar with 食材追加 Button -->
        <div class="flex justify-between items-center">
          <div>
            <h2 class="text-sm font-black text-slate-900 dark:text-white flex items-center gap-1.5">
              <span>🏷️ スーパー価格比較</span>
              <span class="text-xs font-mono font-bold text-amber-500">(${this.state.prices.length}品目)</span>
            </h2>
            <p class="text-[10px] text-slate-400">100g・1個あたりの最安値を自動判定</p>
          </div>
          <button id="btn-add-price-item" class="px-3 py-1.5 bg-amber-500 hover:bg-amber-600 text-white text-xs font-bold rounded-xl shadow-md active:scale-95 flex items-center gap-1">
            <span>＋</span>
            <span>食材追加</span>
          </button>
        </div>

        <!-- Prices List -->
        <div class="space-y-2.5">
          ${this.state.prices.map(p => {
            const analyzed = (p.storePrices || []).map(sp => {
              const st = this.state.stores.find(s => s.id === sp.storeId) || { name: sp.storeName || '店舗' };
              const up = calculateUnitPrice(sp.price, sp.capacity, sp.unit);
              return { ...sp, storeName: st.name, up };
            });
            let lowest = null;
            analyzed.forEach(sp => {
              if (sp.up && (!lowest || sp.up.pricePerUnit < lowest.up.pricePerUnit)) lowest = sp;
            });

            return `
              <div class="p-3.5 rounded-2xl bg-white dark:bg-slate-800 border space-y-2.5 text-xs shadow-sm">
                <div class="flex items-center justify-between">
                  <div class="flex items-center gap-1.5 min-w-0 flex-1">
                    <h3 class="font-bold text-sm text-slate-900 dark:text-white truncate">${p.productName}</h3>
                  </div>
                  <div class="flex items-center gap-1 shrink-0">
                    <button data-add-store-to-prod="${p.id}" class="px-2 py-0.5 rounded-lg bg-amber-50 dark:bg-amber-950/40 text-amber-600 dark:text-amber-400 font-bold text-[10px] active:scale-95" title="店舗追加">＋店舗</button>
                    <button data-edit-price-prod="${p.id}" class="p-1.5 text-slate-400 hover:text-amber-600 bg-slate-50 dark:bg-slate-700/50 rounded-lg text-xs" title="編集">✏️</button>
                    <button data-del-price-prod="${p.id}" class="p-1 text-slate-300 hover:text-rose-500 rounded-lg text-xs" title="削除">✕</button>
                  </div>
                </div>
                <div class="grid grid-cols-2 gap-2">
                  ${analyzed.map(a => `
                    <div class="p-2.5 rounded-xl border relative cursor-pointer active:scale-95 transition-all ${lowest && a.storeId === lowest.storeId ? 'bg-emerald-50 dark:bg-emerald-950/30 border-emerald-300' : 'bg-slate-50 dark:bg-slate-700/50 border-slate-100 dark:border-slate-700'}" data-edit-store-price="${p.id}:${a.storeId}">
                      <div class="flex justify-between items-center text-[10px] text-slate-500">
                        <span class="font-bold truncate">${a.storeName}</span>
                        ${lowest && a.storeId === lowest.storeId ? '<span class="text-emerald-600 font-bold flex-shrink-0">👑 最安</span>' : '<span class="text-[9px] text-slate-400">✏️ 編集</span>'}
                      </div>
                      <div class="font-black text-sm text-slate-900 dark:text-white mt-1">¥${a.price} <span class="text-[10px] font-normal text-slate-400 font-mono">(${a.capacity}${a.unit})</span></div>
                      <div class="text-[10px] text-emerald-600 font-bold mt-0.5">単価: ¥${a.up?.pricePerUnit}/${a.up?.unitLabel}</div>
                    </div>
                  `).join('')}
                </div>
              </div>
            `;
          }).join('')}

          ${this.state.prices.length === 0 ? `
            <div class="p-8 text-center text-xs text-slate-400 bg-white dark:bg-slate-800/50 rounded-2xl border">
              価格データがありません。「＋ 食材追加」からスーパーごとの価格を登録してください。
            </div>
          ` : ''}
        </div>
      </div>
    `;

    el.querySelector('#btn-add-price-item').onclick = () => this.showAddPriceModal();

    el.querySelectorAll('[data-add-store-to-prod]').forEach(b => {
      b.onclick = () => {
        const id = b.getAttribute('data-add-store-to-prod');
        const prod = this.state.prices.find(x => x.id === id);
        if (prod) this.showAddPriceModal(prod, null, true);
      };
    });

    el.querySelectorAll('[data-edit-price-prod]').forEach(b => {
      b.onclick = () => {
        const id = b.getAttribute('data-edit-price-prod');
        const prod = this.state.prices.find(x => x.id === id);
        if (prod) this.showAddPriceModal(prod, prod.storePrices?.[0]);
      };
    });

    el.querySelectorAll('[data-edit-store-price]').forEach(b => {
      b.onclick = () => {
        const [prodId, storeId] = b.getAttribute('data-edit-store-price').split(':');
        const prod = this.state.prices.find(x => x.id === prodId);
        const sp = prod?.storePrices?.find(s => s.storeId === storeId);
        if (prod && sp) this.showAddPriceModal(prod, sp);
      };
    });

    el.querySelectorAll('[data-del-price-prod]').forEach(b => {
      b.onclick = async () => {
        const id = b.getAttribute('data-del-price-prod');
        const prod = this.state.prices.find(x => x.id === id);
        if (confirm(`「${prod?.productName || '商品'}」の価格データを削除しますか？`)) {
          await db.delete('prices', id);
          await this.loadData();
          this.renderMain();
        }
      };
    });
  }

  // --- PRICE ITEM ADD / EDIT MODAL ---
  showAddPriceModal(editingProduct = null, editingStorePrice = null, isAddingStore = false) {
    const modal = document.createElement('div');
    modal.className = 'absolute inset-0 z-50 bg-white dark:bg-slate-900 px-5 pt-6 pb-24 overflow-y-auto space-y-4 animate-fadeIn modal-screen';
    const todayStr = new Date().toISOString().split('T')[0];
    const isEdit = !!editingProduct && !isAddingStore;

    const defaultStoreName = editingStorePrice?.storeName || '';
    const defaultPrice = editingStorePrice?.price || '';
    const defaultCap = editingStorePrice?.capacity || 100;
    const defaultUnit = editingStorePrice?.unit || 'g';
    const defaultDate = editingStorePrice?.date || todayStr;

    modal.innerHTML = `
      <div class="flex justify-between items-center">
        <h3 class="font-bold text-base flex items-center gap-1.5">
          <span>🏷️</span>
          <span>${isEdit ? '価格・店舗情報の編集' : isAddingStore ? '店舗価格の追加' : '価格の食材追加'}</span>
        </h3>
        <button id="price-close" class="text-slate-400 text-lg">✕</button>
      </div>

      <form id="f-add-price" class="space-y-3.5 text-xs">
        <div>
          <label class="block font-bold mb-1">食材・商品名 <span class="text-rose-500">*</span></label>
          <input id="p-in-name" type="text" value="${editingProduct?.productName || ''}" placeholder="例: 豚ロース (100g), 牛乳, 卵" required class="w-full px-3 py-2 bg-slate-50 dark:bg-slate-800 border rounded-xl text-xs" />
        </div>

        <div>
          <label class="block font-bold mb-1">スーパー・店舗名 <span class="text-rose-500">*</span></label>
          <input
            id="p-in-store-text"
            type="text"
            value="${defaultStoreName}"
            placeholder="例: OKストア, ライフ, 業務スーパー, 西友 など"
            required
            class="w-full px-3 py-2 bg-slate-50 dark:bg-slate-800 border rounded-xl text-xs"
          />
        </div>

        <div class="grid grid-cols-3 gap-2">
          <div class="min-w-0">
            <label class="block font-bold mb-1">価格 (円) <span class="text-rose-500">*</span></label>
            <input id="p-in-val" type="number" min="1" value="${defaultPrice}" placeholder="298" required class="w-full px-2.5 py-2 bg-slate-50 dark:bg-slate-800 border rounded-xl font-mono text-xs" />
          </div>
          <div class="min-w-0">
            <label class="block font-bold mb-1">内容量</label>
            <input id="p-in-cap" type="number" min="1" value="${defaultCap}" required class="w-full px-2.5 py-2 bg-slate-50 dark:bg-slate-800 border rounded-xl font-mono text-xs" />
          </div>
          <div class="min-w-0">
            <label class="block font-bold mb-1">単位</label>
            <input id="p-in-unit" type="text" value="${defaultUnit}" placeholder="g, 個, ml" required class="w-full px-2.5 py-2 bg-slate-50 dark:bg-slate-800 border rounded-xl text-xs" />
          </div>
        </div>

        <div>
          <label class="block font-bold mb-1">記録日</label>
          <input id="p-in-date" type="date" value="${defaultDate}" class="w-full max-w-full px-3 py-2 bg-slate-50 dark:bg-slate-800 border rounded-xl font-mono text-xs outline-none" />
        </div>

        <div class="flex gap-2 pt-2">
          <button type="button" id="price-cancel" class="flex-1 py-2.5 bg-slate-100 dark:bg-slate-800 font-bold rounded-xl text-xs">キャンセル</button>
          <button type="submit" class="flex-1 py-2.5 bg-amber-500 text-white font-bold rounded-xl shadow-md text-xs">${isEdit ? '価格情報を更新' : '価格を登録'}</button>
        </div>
      </form>
    `;

    modal.querySelector('#price-close').onclick = () => modal.remove();
    modal.querySelector('#price-cancel').onclick = () => modal.remove();

    modal.querySelector('#f-add-price').onsubmit = async (e) => {
      e.preventDefault();
      const prodName = modal.querySelector('#p-in-name').value.trim();
      const storeName = modal.querySelector('#p-in-store-text').value.trim();
      const price = Number(modal.querySelector('#p-in-val').value);
      const capacity = Number(modal.querySelector('#p-in-cap').value) || 1;
      const unit = modal.querySelector('#p-in-unit').value.trim() || 'g';
      const date = modal.querySelector('#p-in-date').value;

      if (!storeName) return;

      // Find or create store
      let storeObj = this.state.stores.find(s => s.name === storeName);
      if (!storeObj) {
        storeObj = { id: 'st_' + Date.now(), name: storeName, memo: '新規追加店舗' };
        await db.put('stores', storeObj);
      }

      if (editingProduct) {
        editingProduct.productName = prodName;
        const prevStoreId = editingStorePrice?.storeId;
        const other = (editingProduct.storePrices || []).filter(sp => {
          if (isEdit && prevStoreId) return sp.storeId !== prevStoreId && sp.storeId !== storeObj.id;
          return sp.storeId !== storeObj.id;
        });
        editingProduct.storePrices = [...other, { storeId: storeObj.id, storeName: storeObj.name, price, capacity, unit, date }];

        await db.put('prices', editingProduct);
        await this.loadData();
        showToast(`「${prodName}」（${storeName}）の価格情報を${isEdit ? '更新' : '登録'}しました`, 'success');
      } else {
        // Find or create product price
        let existing = this.state.prices.find(p => p.productName === prodName);
        if (!existing) {
          existing = {
            id: 'pp_' + Date.now(),
            productName: prodName,
            storePrices: []
          };
        }

        const other = (existing.storePrices || []).filter(sp => sp.storeId !== storeObj.id);
        existing.storePrices = [...other, { storeId: storeObj.id, storeName: storeObj.name, price, capacity, unit, date }];

        await db.put('prices', existing);
        await this.loadData();
        showToast(`「${prodName}」（${storeName}）の価格を登録しました`, 'success');
      }

      modal.remove();
      this.renderMain();
    };

    document.getElementById('phone-container').appendChild(modal);
  }

  // --- STOK ADD / EDIT MODAL ---
  showAddStokModal(editingItem = null) {
    const modal = document.createElement('div');
    modal.className = 'absolute inset-0 z-50 bg-white dark:bg-slate-900 px-4 pt-5 pb-24 overflow-y-auto space-y-4 animate-fadeIn modal-screen';
    const defaultExp = editingItem?.expireDate || new Date(Date.now() + oneDayMs * 4).toISOString().split('T')[0];
    const isEdit = !!editingItem;

    modal.innerHTML = `
      <div class="flex justify-between items-center">
        <h3 class="font-bold text-base flex items-center gap-1.5">
          <span>🥕</span>
          <span>${isEdit ? '在庫 (食材) の編集' : '在庫 (食材) の追加'}</span>
        </h3>
        <button id="stok-close" class="text-slate-400 text-lg">✕</button>
      </div>

      <form id="f-add-stok" class="space-y-3.5 text-xs">
        <div>
          <label class="block font-bold mb-1">食材・品名 <span class="text-rose-500">*</span></label>
          <input id="stok-in-name" type="text" value="${editingItem?.name || ''}" placeholder="例: キャベツ, 豚こま肉, 卵" required class="w-full px-3 py-2 bg-slate-50 dark:bg-slate-800 border rounded-xl text-xs box-border" />
        </div>

        <div class="grid grid-cols-2 gap-2.5">
          <div class="min-w-0">
            <label class="block font-bold mb-1">数量</label>
            <input id="stok-in-qty" type="number" min="0.1" step="0.1" value="${editingItem?.quantity ?? 1}" class="w-full px-3 py-2 bg-slate-50 dark:bg-slate-800 border rounded-xl font-mono text-xs box-border" />
          </div>
          <div class="min-w-0">
            <label class="block font-bold mb-1">単位</label>
            <input id="stok-in-unit" type="text" value="${editingItem?.unit || '個'}" placeholder="個, g, 本, 丁" class="w-full px-3 py-2 bg-slate-50 dark:bg-slate-800 border rounded-xl text-xs box-border" />
          </div>
        </div>

        <div>
          <label class="block font-bold mb-1">保存場所</label>
          <select id="stok-in-loc" class="w-full px-3 py-2 bg-slate-50 dark:bg-slate-800 border rounded-xl text-xs box-border">
            ${StorageLocations.map(l => `<option value="${l.id}" ${(editingItem?.location || 'fridge') === l.id ? 'selected' : ''}>${l.name}</option>`).join('')}
          </select>
        </div>

        <div class="p-3 rounded-2xl bg-orange-50/60 dark:bg-orange-950/30 border border-orange-200/60 space-y-2 min-w-0 max-w-full overflow-hidden box-border">
          <label class="block font-bold text-orange-900 dark:text-orange-200 text-xs">
            ⏳ 賞味期限・消費期限 <span class="text-rose-500">*</span>
          </label>
          <div class="w-full min-w-0">
            <input id="stok-in-exp" type="date" value="${defaultExp}" required class="w-full min-w-0 max-w-full px-2.5 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl font-mono font-bold text-xs outline-none box-border block" />
          </div>
          
          <div class="pt-0.5 space-y-1.5 min-w-0">
            <span class="text-[10px] text-slate-500 dark:text-slate-400 font-bold block">⚡ クイック設定</span>
            <div class="grid grid-cols-4 gap-1.5 min-w-0">
              <button type="button" data-exp-offset="1" class="py-1.5 px-0.5 text-center rounded-lg bg-white dark:bg-slate-800 border text-[10px] sm:text-[11px] font-bold shadow-sm active:scale-95 truncate min-w-0">明日</button>
              <button type="button" data-exp-offset="3" class="py-1.5 px-0.5 text-center rounded-lg bg-white dark:bg-slate-800 border text-[10px] sm:text-[11px] font-bold shadow-sm active:scale-95 truncate min-w-0">+3日</button>
              <button type="button" data-exp-offset="7" class="py-1.5 px-0.5 text-center rounded-lg bg-white dark:bg-slate-800 border text-[10px] sm:text-[11px] font-bold shadow-sm active:scale-95 truncate min-w-0">+7日</button>
              <button type="button" data-exp-offset="30" class="py-1.5 px-0.5 text-center rounded-lg bg-white dark:bg-slate-800 border text-[10px] sm:text-[11px] font-bold shadow-sm active:scale-95 truncate min-w-0">+30日</button>
            </div>
          </div>
        </div>

        <div>
          <label class="block font-bold mb-1">メモ (任意)</label>
          <input id="stok-in-memo" type="text" value="${editingItem?.memo || ''}" placeholder="例: 冷凍小分け済み, お徳用パック" class="w-full px-3 py-2 bg-slate-50 dark:bg-slate-800 border rounded-xl text-xs box-border" />
        </div>

        <div class="flex gap-2 pt-2">
          <button type="button" id="stok-cancel" class="flex-1 py-2.5 bg-slate-100 dark:bg-slate-800 font-bold rounded-xl text-xs">キャンセル</button>
          <button type="submit" class="flex-1 py-2.5 bg-emerald-500 text-white font-bold rounded-xl shadow-md text-xs">${isEdit ? '在庫情報を更新' : '在庫に登録'}</button>
        </div>
      </form>
    `;

    modal.querySelector('#stok-close').onclick = () => modal.remove();
    modal.querySelector('#stok-cancel').onclick = () => modal.remove();

    modal.querySelectorAll('button[data-exp-offset]').forEach(b => {
      b.onclick = () => {
        const offset = Number(b.getAttribute('data-exp-offset'));
        const targetDate = new Date(Date.now() + oneDayMs * offset).toISOString().split('T')[0];
        modal.querySelector('#stok-in-exp').value = targetDate;
      };
    });

    modal.querySelector('#f-add-stok').onsubmit = async (e) => {
      e.preventDefault();
      const name = modal.querySelector('#stok-in-name').value.trim();
      const qty = Number(modal.querySelector('#stok-in-qty').value) || 1;
      const unit = modal.querySelector('#stok-in-unit').value.trim() || '個';
      const loc = modal.querySelector('#stok-in-loc').value;
      const exp = modal.querySelector('#stok-in-exp').value;
      const memo = modal.querySelector('#stok-in-memo').value.trim();

      if (isEdit) {
        await db.put('inventory', {
          ...editingItem,
          name,
          normalizedName: name,
          quantity: qty,
          unit,
          location: loc,
          expireDate: exp,
          memo,
          updatedAt: new Date().toISOString()
        });
        showToast(`「${name}」の在庫情報を更新しました`, 'success');
      } else {
        await db.put('inventory', {
          id: 'inv_' + Date.now(),
          name,
          normalizedName: name,
          quantity: qty,
          unit,
          location: loc,
          expireDate: exp,
          memo,
          createdAt: new Date().toISOString()
        });
        showToast(`「${name}」を在庫に追加しました`, 'success');
      }

      await this.loadData();
      modal.remove();
      this.render();
    };

    document.getElementById('phone-container').appendChild(modal);
  }

  // --- COOKING MODAL ---
  showCookingModal(rec) {
    let curStep = 0;
    const modal = document.createElement('div');
    modal.className = 'absolute inset-0 z-50 bg-slate-950/95 p-5 text-white flex flex-col justify-between animate-fadeIn modal-screen';
    const total = (rec.steps || []).length;

    const render = () => {
      const step = (rec.steps || [])[curStep] || { instruction: '調理完了' };
      modal.innerHTML = `
        <div class="flex justify-between items-center">
          <span class="text-xs font-bold text-orange-400 font-mono">STEP ${curStep + 1} / ${total}</span>
          <button id="c-close" class="text-xs bg-slate-800 px-3 py-1.5 rounded-xl font-bold">終了 ✕</button>
        </div>
        <div class="my-auto py-6 space-y-4 text-center">
          <p class="text-xl font-black leading-relaxed">${step.instruction}</p>
          ${step.timerSeconds > 0 ? `
            <button id="c-timer" class="px-5 py-2.5 bg-orange-500 text-white font-bold text-xs rounded-xl shadow-lg">
              ⏱️ ${Math.floor(step.timerSeconds/60)}分タイマー
            </button>
          ` : ''}
        </div>
        <div class="flex gap-2 pt-3 border-t border-slate-800">
          <button id="c-prev" class="px-4 py-3 bg-slate-800 rounded-xl font-bold text-xs" ${curStep === 0 ? 'disabled' : ''}>← 前へ</button>
          <button id="c-next" class="flex-1 py-3 bg-gradient-to-r from-orange-500 to-amber-500 rounded-xl font-bold text-xs shadow-lg">
            ${curStep === total - 1 ? '🎉 調理完了！' : '次へ →'}
          </button>
        </div>
      `;
      modal.querySelector('#c-close').onclick = () => modal.remove();
      const t = modal.querySelector('#c-timer');
      if (t) t.onclick = () => timerManager.start(`${rec.title} STEP${curStep+1}`, step.timerSeconds);
      modal.querySelector('#c-prev').onclick = () => { if (curStep > 0) { curStep--; render(); } };
      modal.querySelector('#c-next').onclick = () => {
        if (curStep < total - 1) { curStep++; render(); }
        else { showToast('🎉 完成しました！お疲れ様でした！', 'success'); modal.remove(); }
      };
    };
    render();
    document.getElementById('phone-container').appendChild(modal);
  }

  showAddRecipeModal(editingRecipe = null) {
    const modal = document.createElement('div');
    modal.className = 'absolute inset-0 z-50 bg-white dark:bg-slate-900 p-5 overflow-y-auto space-y-4 animate-fadeIn modal-screen';
    const isEdit = !!editingRecipe;

    const defaultIngsStr = editingRecipe?.ingredients?.map(i => `${i.name}:${i.amount}:${i.unit || '個'}`).join(', ') || '';
    const defaultStepsStr = editingRecipe?.steps?.map(s => s.instruction).join('\n') || '';

    modal.innerHTML = `
      <div class="flex justify-between items-center">
        <h3 class="font-bold text-base flex items-center gap-1.5">
          <span>🍳</span>
          <span>${isEdit ? 'レシピの編集' : '新規レシピ登録'}</span>
        </h3>
        <button id="ar-close" class="text-slate-400 text-lg">✕</button>
      </div>
      <form id="f-new-rec" class="space-y-3.5 text-xs">
        <div>
          <label class="block font-bold mb-1">料理名 <span class="text-rose-500">*</span></label>
          <input id="ar-title" type="text" value="${editingRecipe?.title || ''}" placeholder="例: 極上ハンバーグ" required class="w-full px-3 py-2 bg-slate-50 dark:bg-slate-800 border rounded-xl text-xs" />
        </div>
        <div class="grid grid-cols-2 gap-2.5">
          <div>
            <label class="block font-bold mb-1">カテゴリー</label>
            <select id="ar-cat" class="w-full px-3 py-2 bg-slate-50 dark:bg-slate-800 border rounded-xl text-xs">
              ${Categories.map(c => `<option value="${c.id}" ${(editingRecipe?.category || 'main') === c.id ? 'selected' : ''}>${c.name}</option>`).join('')}
            </select>
          </div>
          <div>
            <label class="block font-bold mb-1">調理時間 (分)</label>
            <input id="ar-time" type="number" min="1" value="${editingRecipe?.timeMinutes || 20}" class="w-full px-3 py-2 bg-slate-50 dark:bg-slate-800 border rounded-xl font-mono text-xs" />
          </div>
        </div>
        <div>
          <label class="block font-bold mb-1">材料 (例: 豚肉:200:g, 玉ねぎ:1:個)</label>
          <input id="ar-ings" type="text" value="${defaultIngsStr}" placeholder="食材:分量:単位 をカンマ区切り" class="w-full px-3 py-2 bg-slate-50 dark:bg-slate-800 border rounded-xl text-xs" />
        </div>
        <div>
          <label class="block font-bold mb-1">手順 (改行区切り)</label>
          <textarea id="ar-steps" rows="4" placeholder="手順1&#10;手順2" class="w-full px-3 py-2 bg-slate-50 dark:bg-slate-800 border rounded-xl text-xs leading-relaxed">${defaultStepsStr}</textarea>
        </div>
        <div class="flex gap-2 pt-2">
          <button type="button" id="ar-cancel" class="flex-1 py-2.5 bg-slate-100 dark:bg-slate-800 font-bold rounded-xl text-xs">キャンセル</button>
          <button type="submit" class="flex-1 py-2.5 bg-orange-500 text-white font-bold rounded-xl shadow-md text-xs">${isEdit ? 'レシピを更新' : '登録する'}</button>
        </div>
      </form>
    `;
    modal.querySelector('#ar-close').onclick = () => modal.remove();
    modal.querySelector('#ar-cancel').onclick = () => modal.remove();
    modal.querySelector('#f-new-rec').onsubmit = async (e) => {
      e.preventDefault();
      const title = modal.querySelector('#ar-title').value.trim();
      const cat = modal.querySelector('#ar-cat').value;
      const timeMinutes = Number(modal.querySelector('#ar-time').value) || 20;
      const ings = modal.querySelector('#ar-ings').value.split(',').map(s => {
        const p = s.split(':').map(x => x.trim());
        return { name: p[0] || '材料', amount: Number(p[1]) || 1, unit: p[2] || '個' };
      }).filter(i => i.name);
      const steps = modal.querySelector('#ar-steps').value.split('\n').filter(Boolean).map((s, idx) => ({
        order: idx + 1, instruction: s.trim(), timerSeconds: 180
      }));

      if (isEdit) {
        await db.put('recipes', {
          ...editingRecipe,
          title,
          category: cat,
          timeMinutes,
          ingredients: ings.length ? ings : [{ name: '食材', amount: 1, unit: '個' }],
          steps: steps.length ? steps : [{ instruction: '調理します', timerSeconds: 0 }],
          updatedAt: new Date().toISOString()
        });
        showToast(`レシピ「${title}」を更新しました`, 'success');
      } else {
        await db.put('recipes', {
          id: 'rec_' + Date.now(),
          title,
          category: cat,
          servings: 2,
          timeMinutes,
          imageUrl: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=800',
          tags: ['手作り'],
          ingredients: ings.length ? ings : [{ name: '食材', amount: 1, unit: '個' }],
          steps: steps.length ? steps : [{ instruction: '調理します', timerSeconds: 0 }],
          createdAt: new Date().toISOString()
        });
        showToast('レシピを登録しました', 'success');
      }

      await this.loadData();
      modal.remove();
      this.render();
    };
    document.getElementById('phone-container').appendChild(modal);
  }

  // --- AI RECIPE GENERATOR MODAL (冷蔵庫の食材からレシピ考案) ---
  showAiRecipeGeneratorModal(initialSelectedItems = null) {
    const modal = document.createElement('div');
    modal.className = 'absolute inset-0 z-50 bg-white dark:bg-slate-900 px-5 pt-6 pb-24 overflow-y-auto space-y-4 animate-fadeIn modal-screen';

    // Modal internal state
    const inStockItems = this.state.inventory.filter(i => Number(i.quantity) > 0);
    let selectedIds = new Set(
      initialSelectedItems 
        ? initialSelectedItems.map(i => i.id) 
        : inStockItems.map(i => i.id)
    );
    let selectedMood = 'main';
    let customNote = '';
    let generatedRecipe = null;
    let isGenerating = false;
    let seed = 0;

    const renderModalContent = () => {
      if (isGenerating) {
        modal.innerHTML = `
          <div class="flex justify-between items-center">
            <h3 class="font-bold text-base flex items-center gap-1.5">
              <span>✨</span>
              <span>AIシェフが考案中...</span>
            </h3>
            <button id="ai-close-gen" class="text-slate-400 text-lg">✕</button>
          </div>
          <div class="py-16 text-center space-y-4 animate-pulse">
            <div class="w-16 h-16 mx-auto rounded-3xl bg-gradient-to-tr from-amber-500 to-orange-500 flex items-center justify-center text-3xl shadow-xl shadow-orange-500/20 animate-bounce">
              👨‍🍳
            </div>
            <div>
              <h4 class="font-black text-sm text-slate-900 dark:text-white">冷蔵庫の食材を組み合わせています...</h4>
              <p class="text-xs text-slate-400 mt-1">おいしい分量とプロの隠し味・調理手順を計算中</p>
            </div>
            <div class="flex justify-center gap-1.5 text-xs text-orange-500 font-bold">
              <span>✨ 食材の旨味分析</span>
              <span>•</span>
              <span>⏱️ 時短手順生成</span>
            </div>
          </div>
        `;
        const closeBtn = modal.querySelector('#ai-close-gen');
        if (closeBtn) closeBtn.onclick = () => modal.remove();
        return;
      }

      if (generatedRecipe) {
        // Recipe Generated Preview Screen
        const fridgeIngs = generatedRecipe.ingredients.filter(i => i.fromFridge);
        const seasoningIngs = generatedRecipe.ingredients.filter(i => !i.fromFridge);

        modal.innerHTML = `
          <div class="flex justify-between items-center">
            <div class="flex items-center gap-2">
              <span class="p-1.5 rounded-xl bg-orange-100 dark:bg-orange-950 text-orange-500 text-sm">✨</span>
              <div>
                <h3 class="font-black text-base text-slate-900 dark:text-white leading-tight">AIシェフ考案レシピ</h3>
                <span class="text-[10px] text-orange-500 font-bold">冷蔵庫の食材で作れるオリジナル献立</span>
              </div>
            </div>
            <button id="ai-res-close" class="text-slate-400 text-lg">✕</button>
          </div>

          <!-- Recipe Card -->
          <div class="rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-850 shadow-sm space-y-3">
            <div class="relative h-44">
              <img src="${generatedRecipe.imageUrl}" class="w-full h-full object-cover" />
              <div class="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent"></div>
              <div class="absolute top-3 left-3 flex gap-1.5">
                <span class="px-2 py-0.5 rounded-lg bg-orange-500 text-white font-bold text-[10px] shadow">✨ AI考案</span>
                <span class="px-2 py-0.5 rounded-lg bg-black/60 text-white font-bold text-[10px] backdrop-blur-sm">⏱️ ${generatedRecipe.timeMinutes}分</span>
              </div>
              <div class="absolute bottom-3 left-3 right-3 text-white">
                <h2 class="text-base font-black leading-tight">${generatedRecipe.title}</h2>
                <div class="flex gap-1.5 mt-1">
                  ${generatedRecipe.tags.map(t => `<span class="text-[9px] bg-white/20 px-1.5 py-0.2 rounded font-bold">#${t}</span>`).join('')}
                </div>
              </div>
            </div>

            <div class="p-4 space-y-4 text-xs">
              <!-- Chef's Tip Box -->
              ${generatedRecipe.chefTip ? `
                <div class="p-3 rounded-2xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800 text-amber-900 dark:text-amber-200 space-y-1">
                  <div class="font-bold flex items-center gap-1 text-[11px] text-amber-700 dark:text-amber-300">
                    <span>💡</span>
                    <span>AIシェフのワンポイント解説</span>
                  </div>
                  <p class="text-[11px] leading-relaxed">${generatedRecipe.chefTip}</p>
                </div>
              ` : ''}

              <!-- Nutrition -->
              <div class="grid grid-cols-4 gap-1.5 p-2 rounded-xl bg-white dark:bg-slate-800 border text-center text-[10px]">
                <div>
                  <span class="text-slate-400 block">カロリー</span>
                  <span class="font-mono font-bold text-slate-800 dark:text-slate-100">${generatedRecipe.nutrition.calories}kcal</span>
                </div>
                <div>
                  <span class="text-slate-400 block">タンパク質</span>
                  <span class="font-mono font-bold text-slate-800 dark:text-slate-100">${generatedRecipe.nutrition.protein}g</span>
                </div>
                <div>
                  <span class="text-slate-400 block">脂質</span>
                  <span class="font-mono font-bold text-slate-800 dark:text-slate-100">${generatedRecipe.nutrition.fat}g</span>
                </div>
                <div>
                  <span class="text-slate-400 block">炭水化物</span>
                  <span class="font-mono font-bold text-slate-800 dark:text-slate-100">${generatedRecipe.nutrition.carbs}g</span>
                </div>
              </div>

              <!-- Ingredients -->
              <div class="space-y-2">
                <div class="flex justify-between items-center">
                  <h4 class="font-bold text-xs flex items-center gap-1 text-slate-800 dark:text-slate-100">
                    <span>🥕</span>
                    <span>使用する材料 (2人分)</span>
                  </h4>
                </div>

                <div class="p-3 rounded-2xl bg-white dark:bg-slate-800 border space-y-2">
                  <span class="text-[10px] font-bold text-emerald-600 block">▼ 冷蔵庫にある食材</span>
                  <div class="divide-y divide-slate-100 dark:divide-slate-700/50">
                    ${fridgeIngs.map(i => `
                      <div class="flex justify-between py-1.5 items-center">
                        <span class="font-bold text-slate-800 dark:text-slate-200">・ ${i.name}</span>
                        <span class="font-mono text-slate-500 font-bold">${i.amount} ${i.unit || ''}</span>
                      </div>
                    `).join('')}
                  </div>

                  ${seasoningIngs.length > 0 ? `
                    <span class="text-[10px] font-bold text-slate-400 block pt-1.5">▼ 常備調味料・その他</span>
                    <div class="divide-y divide-slate-100 dark:divide-slate-700/50">
                      ${seasoningIngs.map(i => `
                        <div class="flex justify-between py-1.5 items-center">
                          <span class="text-slate-600 dark:text-slate-300">・ ${i.name}</span>
                          <span class="font-mono text-slate-400">${i.amount} ${i.unit || ''}</span>
                        </div>
                      `).join('')}
                    </div>
                  ` : ''}
                </div>
              </div>

              <!-- Steps -->
              <div class="space-y-2">
                <h4 class="font-bold text-xs flex items-center gap-1 text-slate-800 dark:text-slate-100">
                  <span>🍳</span>
                  <span>作り方手順</span>
                </h4>
                <div class="space-y-2">
                  ${generatedRecipe.steps.map(s => `
                    <div class="p-3 rounded-2xl bg-white dark:bg-slate-800 border flex gap-3 text-xs">
                      <span class="w-5 h-5 rounded-full bg-orange-500 text-white font-bold text-[10px] flex items-center justify-center shrink-0 mt-0.5">${s.order}</span>
                      <div class="flex-1 min-w-0">
                        <p class="leading-relaxed text-slate-800 dark:text-slate-200">${s.instruction}</p>
                        ${s.timerSeconds > 0 ? `
                          <button data-ai-step-timer="${s.timerSeconds}" data-ai-step-title="${generatedRecipe.title} STEP${s.order}" class="mt-2 inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-orange-50 dark:bg-orange-950/60 text-orange-600 dark:text-orange-400 font-bold text-[10px] border border-orange-200 dark:border-orange-800">
                            <span>⏱️ ${Math.floor(s.timerSeconds / 60)}分タイマー</span>
                          </button>
                        ` : ''}
                      </div>
                    </div>
                  `).join('')}
                </div>
              </div>
            </div>
          </div>

          <!-- Bottom Actions -->
          <div class="space-y-2 pt-2">
            <button id="ai-save-recipe" class="w-full py-3 bg-gradient-to-r from-orange-500 to-amber-500 text-white font-bold rounded-2xl shadow-lg active:scale-95 flex items-center justify-center gap-1.5 text-xs">
              <span>📖 このレシピをレシピ帳に保存する</span>
            </button>
            <div class="grid grid-cols-2 gap-2">
              <button id="ai-start-cooking" class="py-2.5 bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-900 font-bold rounded-xl text-xs active:scale-95 flex items-center justify-center gap-1">
                <span>👨‍🍳 料理開始</span>
              </button>
              <button id="ai-regen-recipe" class="py-2.5 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 font-bold rounded-xl text-xs active:scale-95 flex items-center justify-center gap-1">
                <span>🔄 別の案を再考案</span>
              </button>
            </div>
            <button id="ai-back-to-select" class="w-full py-2 text-slate-400 text-[11px] font-bold text-center underline">
              ← 材料や気分を選び直す
            </button>
          </div>
        `;

        modal.querySelector('#ai-res-close').onclick = () => modal.remove();
        modal.querySelector('#ai-back-to-select').onclick = () => {
          generatedRecipe = null;
          renderModalContent();
        };

        modal.querySelectorAll('[data-ai-step-timer]').forEach(b => {
          b.onclick = () => {
            const sec = Number(b.getAttribute('data-ai-step-timer'));
            const title = b.getAttribute('data-ai-step-title');
            timerManager.start(title, sec);
          };
        });

        modal.querySelector('#ai-save-recipe').onclick = async () => {
          const recToSave = {
            ...generatedRecipe,
            id: 'rec_' + Date.now(),
            createdAt: new Date().toISOString()
          };
          await db.put('recipes', recToSave);
          await this.loadData();
          showToast(`「${recToSave.title}」をレシピ帳に保存しました！`, 'success');
          modal.remove();
          this.state.selectedRecId = recToSave.id;
          this.state.tab = 'recipes';
          this.render();
        };

        modal.querySelector('#ai-start-cooking').onclick = () => {
          this.showCookingModal(generatedRecipe);
        };

        modal.querySelector('#ai-regen-recipe').onclick = () => {
          seed++;
          isGenerating = true;
          renderModalContent();
          setTimeout(() => {
            const chosenItems = inStockItems.filter(i => selectedIds.has(i.id));
            generatedRecipe = generateAiRecipeEngine(chosenItems, selectedMood, customNote, seed);
            isGenerating = false;
            renderModalContent();
          }, 600);
        };

        return;
      }

      // Initial Ingredient & Mood Selection Screen
      modal.innerHTML = `
        <div class="flex justify-between items-center">
          <div class="flex items-center gap-2">
            <span class="p-1.5 rounded-xl bg-orange-100 dark:bg-orange-950 text-orange-500 text-sm">✨</span>
            <div>
              <h3 class="font-black text-base text-slate-900 dark:text-white leading-tight">AIレシピ考案 (冷蔵庫シェフ)</h3>
              <p class="text-[10px] text-slate-400">家にある食材を選ぶだけでピッタリのレシピを提案</p>
            </div>
          </div>
          <button id="ai-init-close" class="text-slate-400 text-lg">✕</button>
        </div>

        <div class="space-y-4 text-xs">
          <!-- Step 1: Mood Selector -->
          <div class="space-y-2">
            <label class="block font-bold text-slate-800 dark:text-slate-200">
              1. どんな気分の料理がいい？
            </label>
            <div class="grid grid-cols-2 gap-1.5">
              ${[
                { id: 'main', icon: '🍖', name: 'がっつり主菜', desc: 'ご飯が進むメインおかず' },
                { id: 'quick', icon: '⚡', name: '時短・10分スピード', desc: 'パパッとすぐできる' },
                { id: 'healthy', icon: '🥗', name: 'さっぱり・ヘルシー', desc: '低カロリー・胃に優しい' },
                { id: 'snack', icon: '🍺', name: 'おつまみ・副菜', desc: '手軽な小鉢・酒の肴' },
                { id: 'soup', icon: '🍲', name: '具だくさんスープ', desc: '温まる汁物・煮込み' }
              ].map(m => `
                <button type="button" data-mood="${m.id}" class="p-2.5 rounded-2xl border text-left transition-all active:scale-98 ${selectedMood === m.id ? 'bg-orange-50 dark:bg-orange-950/60 border-orange-400 text-orange-700 dark:text-orange-300 ring-2 ring-orange-500/20' : 'bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700'}">
                  <div class="font-bold flex items-center gap-1 text-xs">
                    <span>${m.icon}</span>
                    <span>${m.name}</span>
                  </div>
                  <div class="text-[9px] text-slate-400 mt-0.5 truncate">${m.desc}</div>
                </button>
              `).join('')}
            </div>
          </div>

          <!-- Step 2: Ingredient Selection -->
          <div class="space-y-2">
            <div class="flex justify-between items-center">
              <label class="block font-bold text-slate-800 dark:text-slate-200">
                2. 使う食材を選ぶ (${selectedIds.size}/${inStockItems.length}品 選択中)
              </label>
              <div class="flex gap-1.5 text-[10px]">
                <button type="button" id="btn-ai-select-all" class="text-orange-500 font-bold underline">全選択</button>
                <span class="text-slate-300">|</span>
                <button type="button" id="btn-ai-clear-all" class="text-slate-400 font-bold underline">解除</button>
              </div>
            </div>

            ${inStockItems.length === 0 ? `
              <div class="p-6 text-center bg-slate-50 dark:bg-slate-800 rounded-2xl border text-slate-400 space-y-2">
                <p>現在、在庫に食材が登録されていません。</p>
                <button type="button" id="btn-ai-to-inv" class="px-3 py-1.5 bg-emerald-500 text-white rounded-xl font-bold text-[11px]">
                  ＋ 食材を在庫に登録する
                </button>
              </div>
            ` : `
              <div class="grid grid-cols-2 gap-2 max-h-56 overflow-y-auto pr-1">
                ${inStockItems.map(i => {
                  const isChecked = selectedIds.has(i.id);
                  const urg = getExpirationUrgency(i.expireDate);
                  return `
                    <div data-ai-ing-chip="${i.id}" class="p-2.5 rounded-2xl border cursor-pointer flex items-center justify-between transition-all select-none ${isChecked ? 'bg-orange-50 dark:bg-orange-950/40 border-orange-400 dark:border-orange-600 text-slate-900 dark:text-white ring-1 ring-orange-400' : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 opacity-60'}">
                      <div class="min-w-0 flex-1 pr-1.5">
                        <div class="font-bold text-xs truncate">${i.name}</div>
                        <div class="text-[10px] text-slate-400 font-mono mt-0.5">${i.quantity} ${i.unit || ''}</div>
                        ${urg.days <= 3 ? `<span class="text-[9px] font-bold px-1 rounded ${urg.badgeClass} inline-block mt-0.5">${urg.text}</span>` : ''}
                      </div>
                      <span class="text-sm font-bold ${isChecked ? 'text-orange-500' : 'text-slate-300'}">${isChecked ? '✓' : '＋'}</span>
                    </div>
                  `;
                }).join('')}
              </div>
            `}
          </div>

          <!-- Step 3: Custom Request (Optional) -->
          <div class="space-y-1.5">
            <label class="block font-bold text-slate-800 dark:text-slate-200">
              3. こだわりリクエスト (任意)
            </label>
            <input id="ai-in-custom-note" type="text" value="${customNote}" placeholder="例: 子ども向け甘め, 電子レンジだけ, ピリ辛" class="w-full px-3 py-2 bg-slate-50 dark:bg-slate-800 border rounded-xl text-xs outline-none focus:ring-2 focus:ring-orange-500" />
          </div>

          <!-- Submit Button -->
          <div class="pt-2">
            <button id="btn-ai-generate-submit" type="button" class="w-full py-3.5 bg-gradient-to-r from-orange-500 via-amber-500 to-rose-500 hover:from-orange-600 hover:to-rose-600 text-white font-black text-sm rounded-2xl shadow-xl active:scale-95 flex items-center justify-center gap-2 transition-all">
              <span>✨</span>
              <span>この食材でレシピを考案する！</span>
            </button>
          </div>
        </div>
      `;

      modal.querySelector('#ai-init-close').onclick = () => modal.remove();

      modal.querySelectorAll('button[data-mood]').forEach(b => {
        b.onclick = () => {
          selectedMood = b.getAttribute('data-mood');
          renderModalContent();
        };
      });

      modal.querySelectorAll('[data-ai-ing-chip]').forEach(chip => {
        chip.onclick = () => {
          const id = chip.getAttribute('data-ai-ing-chip');
          if (selectedIds.has(id)) selectedIds.delete(id);
          else selectedIds.add(id);
          renderModalContent();
        };
      });

      const selAll = modal.querySelector('#btn-ai-select-all');
      if (selAll) selAll.onclick = () => {
        inStockItems.forEach(i => selectedIds.add(i.id));
        renderModalContent();
      };

      const clrAll = modal.querySelector('#btn-ai-clear-all');
      if (clrAll) clrAll.onclick = () => {
        selectedIds.clear();
        renderModalContent();
      };

      const toInvBtn = modal.querySelector('#btn-ai-to-inv');
      if (toInvBtn) toInvBtn.onclick = () => {
        modal.remove();
        this.state.tab = 'inventory';
        this.render();
      };

      const genBtn = modal.querySelector('#btn-ai-generate-submit');
      if (genBtn) genBtn.onclick = () => {
        const noteInput = modal.querySelector('#ai-in-custom-note');
        if (noteInput) customNote = noteInput.value.trim();

        const chosenItems = inStockItems.filter(i => selectedIds.has(i.id));
        if (chosenItems.length === 0 && inStockItems.length > 0) {
          showToast('食材を1つ以上選択してください', 'error');
          return;
        }

        isGenerating = true;
        renderModalContent();

        setTimeout(() => {
          generatedRecipe = generateAiRecipeEngine(chosenItems, selectedMood, customNote, seed);
          isGenerating = false;
          renderModalContent();
        }, 700);
      };
    };

    renderModalContent();
    document.getElementById('phone-container').appendChild(modal);
  }
}


if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    const app = new MobileApp();
    app.init();
  });
} else {
  const app = new MobileApp();
  app.init();
}
