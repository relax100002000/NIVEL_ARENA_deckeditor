/*
	,
	[
		"", //ID
		"", //SRC
		"", //NAME
		"", //TYPE
		"", //ELEMENT
		"", //COST
		"", //RARE
		"", //POWER
		"", //HIT
		"", //BELONG
		"", //KEYWORD
		"", //JP_TRIGGER
		"", //JP_TEXT
		"", //TW_TRIGGER
		"", //TW_TEXT
		""  //PRODUCT
		]
*/

/*
全形改半形
0~9
a~z
A~Z
+-=
" "(space)
!?&~:
消費］ -> ]
()
①②③
*/

const ID = 0;
const SRC = 1;
const NAME = 2;
const TYPE = 3;
const ELEMENT = 4;
const COST = 5;
const RARE = 6;
const POWER = 7;
const HIT = 8;
const BELONG = 9;
const KEYWORD = 10;
const JP_TRIGGER = 11;
const JP_TEXT = 12;
const TW_TRIGGER = 13;
const TW_TEXT = 14;
const PRODUCT = 15;

var cardData = [
	[
		"ST01-001", //ID
		"img/card/ST01-001.png", //SRC
		"ラピ", //NAME
		"リーダー", //TYPE
		"炎", //ELEMENT
		"", //COST
		"SPL", //RARE
		"", //POWER
		"", //HIT
		"エリシオン", //BELONG
		"パッシブ", //KEYWORD
		"", //JP_TRIGGER
		"基本面<br><br>서약自分は화염のカードのみをデッキに入れることができる。<br><br>각성自分のリーダーレベルが5以上の場合、このカードを裏返す。<br><br>覚醒面<br><br>패시브フィールドにある自分のユニット全ては自分のターンの間、パワー+1000。", //JP_TEXT
		"", //TW_TRIGGER
		"基本面<br><br>【誓約】自己的牌組只能放入🟥屬性的卡片。<br><br>【覺醒】當自己的領袖等級達 5 以上時，翻轉此卡。<br><br>覺醒面<br><br>【被動】我方回合期間，場上所有我方單位戰力 +1000。", //TW_TEXT
		"勝利の女神：NIKKE NivelArenaスターターデッキST01〈カウンターズ〉"  //PRODUCT
		],
	[
		"ST01-002", //ID
		"img/card/ST01-002.png", //SRC
		"ネオン", //NAME
		"ユニット", //TYPE
		"炎", //ELEMENT
		"1", //COST
		"C", //RARE
		"3000", //POWER
		"1", //HIT
		"ベース / エリシオン", //BELONG
		"", //KEYWORD
		"", //JP_TRIGGER
		"", //JP_TEXT
		"", //TW_TRIGGER
		"", //TW_TEXT
		"勝利の女神：NIKKE NivelArenaスターターデッキST01〈カウンターズ〉"  //PRODUCT
		],
	[
		"ST01-003", //ID
		"img/card/ST01-003.png", //SRC
		"ベスティー", //NAME
		"ユニット", //TYPE
		"炎", //ELEMENT
		"1", //COST
		"C", //RARE
		"2500", //POWER
		"1", //HIT
		"エフェクト / エリシオン", //BELONG
		"アタッカー", //KEYWORD
		"", //JP_TRIGGER
		"어태커 この攻撃が終わるまでパワー+1000。", //JP_TEXT
		"", //TW_TRIGGER
		"【攻擊者】直到本次攻擊結束為止，戰力 +1000。", //TW_TEXT
		"勝利の女神：NIKKE NivelArenaスターターデッキST01〈カウンターズ〉"  //PRODUCT
		],
	[
		"ST01-004", //ID
		"img/card/ST01-004.png", //SRC
		"ウンファ", //NAME
		"ユニット", //TYPE
		"炎", //ELEMENT
		"2", //COST
		"C", //RARE
		"4000", //POWER
		"1", //HIT
		"ベース / エリシオン", //BELONG
		"", //KEYWORD
		"", //JP_TRIGGER
		"", //JP_TEXT
		"", //TW_TRIGGER
		"", //TW_TEXT
		"勝利の女神：NIKKE NivelArenaスターターデッキST01〈カウンターズ〉"  //PRODUCT
		],
	[
		"ST01-005", //ID
		"img/card/ST01-005.png", //SRC
		"ノイズ", //NAME
		"ユニット", //TYPE
		"炎", //ELEMENT
		"2", //COST
		"C", //RARE
		"3000", //POWER
		"1", //HIT
		"エフェクト / テトラ", //BELONG
		"アタッカー", //KEYWORD
		"", //JP_TRIGGER
		"어태커 この攻撃が終わるまでパワー+2000。", //JP_TEXT
		"", //TW_TRIGGER
		"【攻擊者】直到本次攻擊結束為止，戰力 +2000。", //TW_TEXT
		"勝利の女神：NIKKE NivelArenaスターターデッキST01〈カウンターズ〉"  //PRODUCT
		],
	[
		"ST01-006", //ID
		"img/card/ST01-006.png", //SRC
		"ノワール", //NAME
		"ユニット", //TYPE
		"炎", //ELEMENT
		"2", //COST
		"R", //RARE
		"2000", //POWER
		"1", //HIT
		"エフェクト / テトラ", //BELONG
		"エントリー", //KEYWORD
		"", //JP_TRIGGER
		"엔트리 このターンが終わるまで対向ユニットのパワー-3000。", //JP_TEXT
		"", //TW_TRIGGER
		"【入場】直到此回合結束為止，遭遇單位的戰力 -3000。", //TW_TEXT
		"勝利の女神：NIKKE NivelArenaスターターデッキST01〈カウンターズ〉"  //PRODUCT
		],
	[
		"ST01-007", //ID
		"img/card/ST01-007.png", //SRC
		"バイパー", //NAME
		"ユニット", //TYPE
		"炎", //ELEMENT
		"3", //COST
		"C", //RARE
		"4500", //POWER
		"1", //HIT
		"エフェクト / テトラ", //BELONG
		"アタッカー", //KEYWORD
		"", //JP_TRIGGER
		"어태커 この攻撃が終わるまでパワー+1000。", //JP_TEXT
		"", //TW_TRIGGER
		"【攻擊者】直到本次攻擊結束為止，力量 +1000。", //TW_TEXT
		"勝利の女神：NIKKE NivelArenaスターターデッキST01〈カウンターズ〉"  //PRODUCT
		],
	[
		"ST01-008", //ID
		"img/card/ST01-008.png", //SRC
		"ブラン", //NAME
		"ユニット", //TYPE
		"炎", //ELEMENT
		"4", //COST
		"R", //RARE
		"5500", //POWER
		"2", //HIT
		"エフェクト / テトラ", //BELONG
		"パッシブ", //KEYWORD
		"", //JP_TRIGGER
		"패시브 フィールドにある 어태커 を持つ自分のユニット全ては自分のターンの間、パワー+1000。", //JP_TEXT
		"", //TW_TRIGGER
		"【被動】我方回合期間，場上所有具有【攻擊者】的我方單位，戰力 +1000。", //TW_TEXT
		"勝利の女神：NIKKE NivelArenaスターターデッキST01〈カウンターズ〉"  //PRODUCT
		],
	[
		"ST01-009", //ID
		"img/card/ST01-009.png", //SRC
		"エマ", //NAME
		"ユニット", //TYPE
		"炎", //ELEMENT
		"5", //COST
		"C", //RARE
		"7000", //POWER
		"2", //HIT
		"ベース / エリシオン", //BELONG
		"", //KEYWORD
		"", //JP_TRIGGER
		"", //JP_TEXT
		"", //TW_TRIGGER
		"", //TW_TEXT
		"勝利の女神：NIKKE NivelArenaスターターデッキST01〈カウンターズ〉"  //PRODUCT
		],
	[
		"ST01-010", //ID
		"img/card/ST01-010.png", //SRC
		"アニス", //NAME
		"ユニット", //TYPE
		"炎", //ELEMENT
		"6", //COST
		"SR", //RARE
		"6500", //POWER
		"2", //HIT
		"エフェクト / テトラ", //BELONG
		"アクティブ", //KEYWORD
		"トリガー / このカードをトラッシュする。フィールドにある相手のユニットを1枚選んでこのターンが終わるまでパワー-5000。", //JP_TRIGGER
		"액티브메인 自分の手札を1枚選んでデッキに戻し、シャッフルする。その後、このターンが終わるまで対向ユニットのパワー-3000。", //JP_TEXT
		"【Trigger】／將此卡棄置，選擇場上 1 個敵方單位，直到此回合結束為止，戰力 -5000。", //TW_TRIGGER
		"【主動：主階段】選擇自己的 1 張手牌，放回牌堆並洗牌。直到此回合結束為止，對手的 1 個單位戰力 -3000。", //TW_TEXT
		"勝利の女神：NIKKE NivelArenaスターターデッキST01〈カウンターズ〉"  //PRODUCT
		],
	[
		"ST01-011", //ID
		"img/card/ST01-011.png", //SRC
		"ラピ", //NAME
		"ユニット", //TYPE
		"炎", //ELEMENT
		"7", //COST
		"SR", //RARE
		"7500", //POWER
		"3", //HIT
		"エフェクト / エリシオン", //BELONG
		"アタッカー", //KEYWORD
		"トリガー / このカードを自分の手札に加える。", //JP_TRIGGER
		"어태커 貫通[1](このユニットが攻撃した戦闘で相手のユニットをトラッシュしたなら、相手に1ダメージを与える)。", //JP_TEXT
		"【Trigger】／將此卡加入自己的手牌。", //TW_TRIGGER
		"【攻擊者】貫通〔1〕（當此單位攻擊並將對手單位戰鬥棄置時，對對手造成 1 點傷害。）", //TW_TEXT
		"勝利の女神：NIKKE NivelArenaスターターデッキST01〈カウンターズ〉"  //PRODUCT
		],
	[
		"ST01-012", //ID
		"img/card/ST01-012.png", //SRC
		"弱点の見極め", //NAME
		"スキル", //TYPE
		"炎", //ELEMENT
		"1", //COST
		"C", //RARE
		"", //POWER
		"", //HIT
		"", //BELONG
		"", //KEYWORD
		"", //JP_TRIGGER
		"フィールドにある相手のユニットを1枚選んでこのターンが終わるまでパワー-2000。", //JP_TEXT
		"", //TW_TRIGGER
		"選擇場上 1 名敵方單位，直到此回合結束為止，該單位戰力 -2000。", //TW_TEXT
		"勝利の女神：NIKKE NivelArenaスターターデッキST01〈カウンターズ〉"  //PRODUCT
		],
	[
		"ST01-013", //ID
		"img/card/ST01-013.png", //SRC
		"戦力補強", //NAME
		"スキル", //TYPE
		"炎", //ELEMENT
		"2", //COST
		"C", //RARE
		"", //POWER
		"", //HIT
		"", //BELONG
		"", //KEYWORD
		"トリガー / このカードをトラッシュする。自分のトラッシュゾーンからコスト2以下のユニットカードを1枚選んで手札に加える。", //JP_TRIGGER
		"自分のトラッシュゾーンからコスト2以下のユニットカードを1枚選んで手札に加える。", //JP_TEXT
		"【Trigger】／將此卡棄置，從自己的棄置區中選擇 1 張費用為 2 或以下的單位卡，加入自己的手牌。", //TW_TRIGGER
		"從自己的棄置區中選擇 1 張費用為 2 或以下的單位卡，加入自己的手牌。", //TW_TEXT
		"勝利の女神：NIKKE NivelArenaスターターデッキST01〈カウンターズ〉"  //PRODUCT
		],
	[
		"ST01-014", //ID
		"img/card/ST01-014.png", //SRC
		"火力が全て！", //NAME
		"スキル", //TYPE
		"炎", //ELEMENT
		"3", //COST
		"C", //RARE
		"", //POWER
		"", //HIT
		"", //BELONG
		"", //KEYWORD
		"", //JP_TRIGGER
		"フィールドにある自分のユニット全てはこのターンが終わるまでパワー+2000。", //JP_TEXT
		"", //TW_TRIGGER
		"場上的所有我方單位，直到此回合結束為止，戰力 +2000。", //TW_TEXT
		"勝利の女神：NIKKE NivelArenaスターターデッキST01〈カウンターズ〉"  //PRODUCT
		],
	[
		"ST01-015", //ID
		"img/card/ST01-015.png", //SRC
		"ミサイル", //NAME
		"スキル", //TYPE
		"炎", //ELEMENT
		"4", //COST
		"C", //RARE
		"", //POWER
		"", //HIT
		"", //BELONG
		"", //KEYWORD
		"トリガー / このカードをトラッシュする。フィールドにある相手のユニットを1枚選んでこのターンが終わるまでパワー-5000。", //JP_TRIGGER
		"フィールドにある相手のユニットを1枚選んでこのターンが終わるまでパワー-5000。", //JP_TEXT
		"【Trigger】／將此卡棄置。選擇場上 1 個敵方單位，直到此回合結束為止，該單位戰力 -5000。", //TW_TRIGGER
		"選擇場上 1 個敵方單位，直到此回合結束為止，該單位戰力 -5000。", //TW_TEXT
		"勝利の女神：NIKKE NivelArenaスターターデッキST01〈カウンターズ〉"  //PRODUCT
		],
	[
		"ST01-016", //ID
		"img/card/ST01-016.png", //SRC
		"レアメタルブーツ", //NAME
		"アイテム", //TYPE
		"炎", //ELEMENT
		"1", //COST
		"C", //RARE
		"", //POWER
		"", //HIT
		"", //BELONG
		"アタッカー", //KEYWORD
		"", //JP_TRIGGER
		"장착조건 없음<br><br>어태커 この攻撃が終わるまでパワー+2000。", //JP_TEXT
		"", //TW_TRIGGER
		"【裝備條件：無】<br><br>【攻擊者】直到本次攻擊結束為止，戰力 +2000。", //TW_TEXT
		"勝利の女神：NIKKE NivelArenaスターターデッキST01〈カウンターズ〉"  //PRODUCT
		],
	[
		"ST01-017", //ID
		"img/card/ST01-017.png", //SRC
		"ケブラーグローブ", //NAME
		"アイテム", //TYPE
		"炎", //ELEMENT
		"2", //COST
		"C", //RARE
		"", //POWER
		"", //HIT
		"", //BELONG
		"アタッカー", //KEYWORD
		"", //JP_TRIGGER
		"장착조건 없음<br><br>어태커 略奪[1](このユニットが攻撃した戦闘で相手のユニットをトラッシュしたなら、1枚ドローする)。", //JP_TEXT
		"", //TW_TRIGGER
		"【裝備條件：無】<br><br>【攻擊者】掠奪〔1〕（當此單位攻擊並透過戰鬥使敵方單位棄置時，抽 1 張牌。）", //TW_TEXT
		"勝利の女神：NIKKE NivelArenaスターターデッキST01〈カウンターズ〉"  //PRODUCT
		],
	[
		"ST02-001", //ID
		"img/card/ST02-001.png", //SRC
		"ギルティ", //NAME
		"リーダー", //TYPE
		"大地", //ELEMENT
		"", //COST
		"L", //RARE
		"", //POWER
		"", //HIT
		"ミシリス", //BELONG
		"パッシブ", //KEYWORD
		"", //JP_TRIGGER
		"基本面<br><br>서약 自分は대지のカードのみをデッキに入れることができる。<br><br>각성 自分のリーダーレベルが6以上の場合、このカードを裏返す。<br><br>覚醒面<br><br>패시브 自分のサイズ+1。", //JP_TEXT
		"", //TW_TRIGGER
		"基本面<br><br>【誓約】自己的牌組只能放入🟩屬性的卡片。<br><br>【覺醒】當自己的領袖等級達 6 以上時，翻轉此卡。<br><br>覺醒面<br><br>【被動】自己的容量（Size） +1。", //TW_TEXT
		"勝利の女神：NIKKE NivelArenaスターターデッキST02〈リアルカインドネス〉"  //PRODUCT
		],
	[
		"ST02-002", //ID
		"img/card/ST02-002.png", //SRC
		"N102", //NAME
		"ユニット", //TYPE
		"大地", //ELEMENT
		"1", //COST
		"C", //RARE
		"3500", //POWER
		"1", //HIT
		"ベース / ミシリス", //BELONG
		"", //KEYWORD
		"", //JP_TRIGGER
		"", //JP_TEXT
		"", //TW_TRIGGER
		"", //TW_TEXT
		"勝利の女神：NIKKE NivelArenaスターターデッキST02〈リアルカインドネス〉"  //PRODUCT
		],
	[
		"ST02-003", //ID
		"img/card/ST02-003.png", //SRC
		"ミカ", //NAME
		"ユニット", //TYPE
		"大地", //ELEMENT
		"1", //COST
		"C", //RARE
		"1500", //POWER
		"1", //HIT
		"エフェクト / テトラ", //BELONG
		"エグジット", //KEYWORD
		"", //JP_TRIGGER
		"엑시트 自分のリーダーレベル+1。", //JP_TEXT
		"", //TW_TRIGGER
		"", //TW_TEXT
		"勝利の女神：NIKKE NivelArenaスターターデッキST02〈リアルカインドネス〉"  //PRODUCT
		],
	[
		"ST02-004", //ID
		"img/card/ST02-004.png", //SRC
		"ジュリア", //NAME
		"ユニット", //TYPE
		"大地", //ELEMENT
		"2", //COST
		"C", //RARE
		"4500", //POWER
		"1", //HIT
		"ベース / ミシリス", //BELONG
		"", //KEYWORD
		"", //JP_TRIGGER
		"", //JP_TEXT
		"", //TW_TRIGGER
		"", //TW_TEXT
		"勝利の女神：NIKKE NivelArenaスターターデッキST02〈リアルカインドネス〉"  //PRODUCT
		],
	[
		"ST02-005", //ID
		"img/card/ST02-005.png", //SRC
		"ヤン", //NAME
		"ユニット", //TYPE
		"大地", //ELEMENT
		"3", //COST
		"C", //RARE
		"2500", //POWER
		"1", //HIT
		"エフェクト / テトラ", //BELONG
		"エントリー", //KEYWORD
		"", //JP_TRIGGER
		"엔트리 自分のリーダーレベル+1。", //JP_TEXT
		"", //TW_TRIGGER
		"【入場】自己的領袖等級 +1。", //TW_TEXT
		"勝利の女神：NIKKE NivelArenaスターターデッキST02〈リアルカインドネス〉"  //PRODUCT
		],
	[
		"ST02-006", //ID
		"img/card/ST02-006.png", //SRC
		"ドラー", //NAME
		"ユニット", //TYPE
		"大地", //ELEMENT
		"3", //COST
		"C", //RARE
		"5500", //POWER
		"1", //HIT
		"ベース / テトラ", //BELONG
		"", //KEYWORD
		"", //JP_TRIGGER
		"", //JP_TEXT
		"", //TW_TRIGGER
		"", //TW_TEXT
		"勝利の女神：NIKKE NivelArenaスターターデッキST02〈リアルカインドネス〉"  //PRODUCT
		],
	[
		"ST02-007", //ID
		"img/card/ST02-007.png", //SRC
		"ブリッド", //NAME
		"ユニット", //TYPE
		"大地", //ELEMENT
		"3", //COST
		"R", //RARE
		"3500", //POWER
		"1", //HIT
		"エフェクト / エリシオン", //BELONG
		"アクティブ", //KEYWORD
		"トリガー / このカードをトラッシュする。自分のリーダーレベル+1。", //JP_TRIGGER
		"액티브메인 自分の手札を1枚選んでトラッシュする。その後、フィールドにある《ベース》を持つ自分のユニット全てはこのターンが終わるまでヒット+1。", //JP_TEXT
		"【Trigger】／將此卡棄置。自己的領袖等級 +1。", //TW_TRIGGER
		"【主動：主階段】選擇自己的 1 張手牌棄置。直到此回合結束為止，場上所有屬於《基礎型》的我方單位，命中 +1。", //TW_TEXT
		"勝利の女神：NIKKE NivelArenaスターターデッキST02〈リアルカインドネス〉"  //PRODUCT
		],
	[
		"ST02-008", //ID
		"img/card/ST02-008.png", //SRC
		"マルチャーナ", //NAME
		"ユニット", //TYPE
		"大地", //ELEMENT
		"4", //COST
		"R", //RARE
		"6500", //POWER
		"2", //HIT
		"ベース / エリシオン", //BELONG
		"", //KEYWORD
		"", //JP_TRIGGER
		"", //JP_TEXT
		"", //TW_TRIGGER
		"", //TW_TEXT
		"勝利の女神：NIKKE NivelArenaスターターデッキST02〈リアルカインドネス〉"  //PRODUCT
		],
	[
		"ST02-009", //ID
		"img/card/ST02-009.png", //SRC
		"ギルティ", //NAME
		"ユニット", //TYPE
		"大地", //ELEMENT
		"5", //COST
		"SR", //RARE
		"8500", //POWER
		"2", //HIT
		"ベース / ミシリス", //BELONG
		"", //KEYWORD
		"トリガー / このカードをトラッシュする。フィールドにあるコスト3以下の相手のユニットを1枚選んでトラッシュする。", //JP_TRIGGER
		"", //JP_TEXT
		"【Trigger】／將此卡棄置。選擇場上一張費用為 3 或以下的敵方單位，將其棄置。", //TW_TRIGGER
		"", //TW_TEXT
		"勝利の女神：NIKKE NivelArenaスターターデッキST02〈リアルカインドネス〉"  //PRODUCT
		],
	[
		"ST02-010", //ID
		"img/card/ST02-010.png", //SRC
		"スノーホワイト", //NAME
		"ユニット", //TYPE
		"大地", //ELEMENT
		"6", //COST
		"SR", //RARE
		"6500", //POWER
		"2", //HIT
		"エフェクト / ピルグリム", //BELONG
		"アタッカー", //KEYWORD
		"トリガー / このカードを自分の手札に加える。", //JP_TRIGGER
		"어태커 突破[コスト2以下](コスト2以下の相手のユニットはこのユニットの攻撃を防御できない)。", //JP_TEXT
		"【Trigger】／將此卡加入自己的手牌。", //TW_TRIGGER
		"【攻擊者】突破〔費用2以下〕（費用為2或以下的敵方單位無法防禦此單位的攻擊。）", //TW_TEXT
		"勝利の女神：NIKKE NivelArenaスターターデッキST02〈リアルカインドネス〉"  //PRODUCT
		],
	[
		"ST02-011", //ID
		"img/card/ST02-011.png", //SRC
		"ディーゼル", //NAME
		"ユニット", //TYPE
		"大地", //ELEMENT
		"7", //COST
		"C", //RARE
		"3000", //POWER
		"3", //HIT
		"エフェクト / エリシオン", //BELONG
		"パッシブ", //KEYWORD
		"", //JP_TRIGGER
		"패시브 自分のリーダーレベル1につき、パワー+1000。", //JP_TEXT
		"", //TW_TRIGGER
		"【被動】此單位的戰力提升自身領袖等級 × 1000。", //TW_TEXT
		"勝利の女神：NIKKE NivelArenaスターターデッキST02〈リアルカインドネス〉"  //PRODUCT
		],
	[
		"ST02-012", //ID
		"img/card/ST02-012.png", //SRC
		"クレッシェンド", //NAME
		"スキル", //TYPE
		"大地", //ELEMENT
		"1", //COST
		"C", //RARE
		"", //POWER
		"", //HIT
		"", //BELONG
		"", //KEYWORD
		"", //JP_TRIGGER
		"フィールドにある自分のユニットを1枚選んでこのターンが終わるまでパワー+3000。", //JP_TEXT
		"", //TW_TRIGGER
		"選擇場上的 1 個我方單位，直到此回合結束前，該單位戰力 +3000。", //TW_TEXT
		"勝利の女神：NIKKE NivelArenaスターターデッキST02〈リアルカインドネス〉"  //PRODUCT
		],
	[
		"ST02-013", //ID
		"img/card/ST02-013.png", //SRC
		"わが師の恩", //NAME
		"スキル", //TYPE
		"大地", //ELEMENT
		"2", //COST
		"C", //RARE
		"", //POWER
		"", //HIT
		"", //BELONG
		"", //KEYWORD
		"", //JP_TRIGGER
		"自分のリーダーレベル+1。", //JP_TEXT
		"", //TW_TRIGGER
		"我方的領袖等級 +1。", //TW_TEXT
		"勝利の女神：NIKKE NivelArenaスターターデッキST02〈リアルカインドネス〉"  //PRODUCT
		],
	[
		"ST02-014", //ID
		"img/card/ST02-014.png", //SRC
		"プライズ", //NAME
		"スキル", //TYPE
		"大地", //ELEMENT
		"3", //COST
		"C", //RARE
		"", //POWER
		"", //HIT
		"", //BELONG
		"", //KEYWORD
		"", //JP_TRIGGER
		"自分のデッキの上からカードを3枚公開し、その中の1枚を選んで手札に加える。残りの2枚はデッキに戻し、シャッフルする。", //JP_TEXT
		"", //TW_TRIGGER
		"從自己的牌堆頂翻開 3 張卡，從中選擇 1 張加入手牌，其餘 2 張放回牌堆並重新洗牌。", //TW_TEXT
		"勝利の女神：NIKKE NivelArenaスターターデッキST02〈リアルカインドネス〉"  //PRODUCT
		],
	[
		"ST02-015", //ID
		"img/card/ST02-015.png", //SRC
		"アクセラレーション", //NAME
		"スキル", //TYPE
		"大地", //ELEMENT
		"4", //COST
		"C", //RARE
		"", //POWER
		"", //HIT
		"", //BELONG
		"", //KEYWORD
		"トリガー / このカードをトラッシュする。フィールドにあるコスト3以下の相手のユニットを1枚選んでトラッシュする。", //JP_TRIGGER
		"自分のユニットと相手のユニットが両方あるレーンを一つ選び、そのレーンでパワーが一番低いユニットをトラッシュする。パワーが同じなら、全てトラッシュする。", //JP_TEXT
		"【Trigger】／將此卡棄置。選擇場上 1 個費用為 3 或以下的敵方單位，將其棄置。", //TW_TRIGGER
		"選擇 1 條雙方皆有單位的路徑。該路徑中戰力最低的單位棄置。若戰力相同，則全部棄置。", //TW_TEXT
		"勝利の女神：NIKKE NivelArenaスターターデッキST02〈リアルカインドネス〉"  //PRODUCT
		],
	[
		"ST02-016", //ID
		"img/card/ST02-016.png", //SRC
		"ケブラープロテクター", //NAME
		"アイテム", //TYPE
		"大地", //ELEMENT
		"1", //COST
		"C", //RARE
		"", //POWER
		"", //HIT
		"", //BELONG
		"", //KEYWORD
		"", //JP_TRIGGER
		"장착조건 없음<br><br>パワー+2000。", //JP_TEXT
		"", //TW_TRIGGER
		"【裝備條件：無】<br><br>戰力 +2000。", //TW_TEXT
		"勝利の女神：NIKKE NivelArenaスターターデッキST02〈リアルカインドネス〉"  //PRODUCT
		],
	[
		"ST02-017", //ID
		"img/card/ST02-017.png", //SRC
		"レアメタルヘルメット", //NAME
		"アイテム", //TYPE
		"大地", //ELEMENT
		"3", //COST
		"C", //RARE
		"", //POWER
		"", //HIT
		"", //BELONG
		"", //KEYWORD
		"", //JP_TRIGGER
		"장착조건 4코스트이상<br><br>ヒット+1。", //JP_TEXT
		"", //TW_TRIGGER
		"【裝備條件：費用 4 以上單位】<br><br>命中 +1。", //TW_TEXT
		"勝利の女神：NIKKE NivelArenaスターターデッキST02〈リアルカインドネス〉"  //PRODUCT
		],
	[
		"ST03-001", //ID
		"img/card/ST03-001.png", //SRC
		"モダニア", //NAME
		"リーダー", //TYPE
		"嵐", //ELEMENT
		"", //COST
		"L", //RARE
		"", //POWER
		"", //HIT
		"ピルグリム", //BELONG
		"パッシブ", //KEYWORD
		"", //JP_TRIGGER
		"서약 自分は폭풍のカードのみをデッキに入れることができる。<br><br>각성 自分のリーダーレベルが4以上の場合、このカードを裏返す。<br><br>覚醒面<br><br>패시브 フィールドにある 엑시트 を持つ自分のユニット全てのパワー+1000。", //JP_TEXT
		"", //TW_TRIGGER
		"基本面<br><br>【誓約】自己的牌組只能放入🟪屬性的卡片。<br><br>【覺醒】當自己的領袖等級達 4 以上時，翻轉此卡。<br><br>覺醒面<br><br>【被動】場上所有擁有【離場】的我方單位戰力  +1000。", //TW_TEXT
		"勝利の女神：NIKKE NivelArenaスターターデッキST03〈ヘレティック〉"  //PRODUCT
		],
	[
		"ST03-002", //ID
		"img/card/ST03-002.png", //SRC
		"デルタ", //NAME
		"ユニット", //TYPE
		"嵐", //ELEMENT
		"1", //COST
		"C", //RARE
		"2500", //POWER
		"1", //HIT
		"ベース / エリシオン", //BELONG
		"", //KEYWORD
		"", //JP_TRIGGER
		"", //JP_TEXT
		"", //TW_TRIGGER
		"", //TW_TEXT
		"勝利の女神：NIKKE NivelArenaスターターデッキST03〈ヘレティック〉"  //PRODUCT
		],
	[
		"ST03-003", //ID
		"img/card/ST03-003.png", //SRC
		"プリバティ", //NAME
		"ユニット", //TYPE
		"嵐", //ELEMENT
		"1", //COST
		"SR", //RARE
		"500", //POWER
		"1", //HIT
		"エフェクト / エリシオン", //BELONG
		"エグジット", //KEYWORD
		"トリガー / このカードをトラッシュする。相手の手札が3枚以上ある場合、相手は手札を1枚選んでトラッシュする。", //JP_TRIGGER
		"엑시트 相手は手札を1枚選んでトラッシュする。", //JP_TEXT
		"【Trigger】／將此卡棄置。若對手的手牌數為 3 張或以上，則對手選擇 1 張手牌棄置。", //TW_TRIGGER
		"【離場】對手選擇自己的 1 張手牌棄置。", //TW_TEXT
		"勝利の女神：NIKKE NivelArenaスターターデッキST03〈ヘレティック〉"  //PRODUCT
		],
	[
		"ST03-004", //ID
		"img/card/ST03-004.png", //SRC
		"ユニ", //NAME
		"ユニット", //TYPE
		"嵐", //ELEMENT
		"2", //COST
		"C", //RARE
		"3500", //POWER
		"1", //HIT
		"ベース / ミシリス", //BELONG
		"", //KEYWORD
		"", //JP_TRIGGER
		"", //JP_TEXT
		"", //TW_TRIGGER
		"", //TW_TEXT
		"勝利の女神：NIKKE NivelArenaスターターデッキST03〈ヘレティック〉"  //PRODUCT
		],
	[
		"ST03-005", //ID
		"img/card/ST03-005.png", //SRC
		"ノベル", //NAME
		"ユニット", //TYPE
		"嵐", //ELEMENT
		"2", //COST
		"C", //RARE
		"2500", //POWER
		"1", //HIT
		"エフェクト / テトラ", //BELONG
		"エントリー", //KEYWORD
		"", //JP_TRIGGER
		"엔트리 対向ユニットがコスト1以下なら、そのユニットをトラッシュする。", //JP_TEXT
		"", //TW_TRIGGER
		"【入場】若遭遇單位費用為 1 或以下，則將該單位棄置。", //TW_TEXT
		"勝利の女神：NIKKE NivelArenaスターターデッキST03〈ヘレティック〉"  //PRODUCT
		],
	[
		"ST03-006", //ID
		"img/card/ST03-006.png", //SRC
		"サクラ", //NAME
		"ユニット", //TYPE
		"嵐", //ELEMENT
		"2", //COST
		"R", //RARE
		"2500", //POWER
		"1", //HIT
		"エフェクト / テトラ", //BELONG
		"エグジット", //KEYWORD
		"", //JP_TRIGGER
		"엑시트 1枚ドローする。", //JP_TEXT
		"", //TW_TRIGGER
		"【離場】抽 1 張牌。", //TW_TEXT
		"勝利の女神：NIKKE NivelArenaスターターデッキST03〈ヘレティック〉"  //PRODUCT
		],
	[
		"ST03-007", //ID
		"img/card/ST03-007.png", //SRC
		"D", //NAME
		"ユニット", //TYPE
		"嵐", //ELEMENT
		"3", //COST
		"C", //RARE
		"4000", //POWER
		"1", //HIT
		"エフェクト / エリシオン", //BELONG
		"エグジット", //KEYWORD
		"", //JP_TRIGGER
		"엑시트 道連れ(このユニットを戦闘でトラッシュした相手のユニットのコストがこのカードのコスト以下の場合、そのユニットをトラッシュする)。", //JP_TEXT
		"", //TW_TRIGGER
		"【離場】共滅（當此單位因戰鬥遭敵方單位棄置時，若該敵方單位的費用小於或等於此單位，則該單位也一併棄置。）", //TW_TEXT
		"勝利の女神：NIKKE NivelArenaスターターデッキST03〈ヘレティック〉"  //PRODUCT
		],
	[
		"ST03-008", //ID
		"img/card/ST03-008.png", //SRC
		"エクシア", //NAME
		"ユニット", //TYPE
		"嵐", //ELEMENT
		"4", //COST
		"C", //RARE
		"5000", //POWER
		"2", //HIT
		"エフェクト / テトラ", //BELONG
		"パッシブ", //KEYWORD
		"", //JP_TRIGGER
		"패시브 フィールドにある엑시트を持つ自分のユニット全てのパワー+1000。", //JP_TEXT
		"", //TW_TRIGGER
		"【被動】場上所有具有【離場】的我方單位戰力 +1000。", //TW_TEXT
		"勝利の女神：NIKKE NivelArenaスターターデッキST03〈ヘレティック〉"  //PRODUCT
		],
	[
		"ST03-009", //ID
		"img/card/ST03-009.png", //SRC
		"メイデン", //NAME
		"ユニット", //TYPE
		"嵐", //ELEMENT
		"5", //COST
		"C", //RARE
		"6500", //POWER
		"2", //HIT
		"ベース / エリシオン", //BELONG
		"", //KEYWORD
		"", //JP_TRIGGER
		"", //JP_TEXT
		"", //TW_TRIGGER
		"", //TW_TEXT
		"勝利の女神：NIKKE NivelArenaスターターデッキST03〈ヘレティック〉"  //PRODUCT
		],
	[
		"ST03-010", //ID
		"img/card/ST03-010.png", //SRC
		"ロザンナ", //NAME
		"ユニット", //TYPE
		"嵐", //ELEMENT
		"6", //COST
		"R", //RARE
		"6500", //POWER
		"2", //HIT
		"エフェクト / テトラ", //BELONG
		"エグジット", //KEYWORD
		"トリガー / このカードをトラッシュする。相手の手札が3枚以上ある場合、相手は手札を1枚選んでトラッシュする。", //JP_TRIGGER
		"엑시트 自分のトラッシュゾーンから 엑시트 を持つコスト2以下のユニットカードを1枚選んで手札に加える。", //JP_TEXT
		"【Trigger】／將此卡棄置。若對手的手牌為 3 張或以上，則對手選擇 1 張手牌棄置。", //TW_TRIGGER
		"【離場】從自己的棄置區中，選擇 1 張具有【離場】且費用為 2 或以下的單位卡，加入自己的手牌。", //TW_TEXT
		"勝利の女神：NIKKE NivelArenaスターターデッキST03〈ヘレティック〉"  //PRODUCT
		],
	[
		"ST03-011", //ID
		"img/card/ST03-011.png", //SRC
		"モダニア", //NAME
		"ユニット", //TYPE
		"嵐", //ELEMENT
		"7", //COST
		"SR", //RARE
		"6500", //POWER
		"3", //HIT
		"エフェクト / ピルグリム", //BELONG
		"エントリー", //KEYWORD
		"トリガー / このカードを自分の手札に加える。", //JP_TRIGGER
		"엔트리 自分の手札を全てトラッシュできる。2枚以上トラッシュしたなら、対向ユニットをトラッシュする。", //JP_TEXT
		"【Trigger】／將此卡加入自己的手牌。", //TW_TRIGGER
		"【入場】可以將自己的所有手牌棄置。若以此效果棄置了 2 張以上手牌，則棄置遭遇單位。", //TW_TEXT
		"勝利の女神：NIKKE NivelArenaスターターデッキST03〈ヘレティック〉"  //PRODUCT
		],
	[
		"ST03-012", //ID
		"img/card/ST03-012.png", //SRC
		"奇襲", //NAME
		"スキル", //TYPE
		"嵐", //ELEMENT
		"1", //COST
		"C", //RARE
		"", //POWER
		"", //HIT
		"", //BELONG
		"", //KEYWORD
		"", //JP_TRIGGER
		"自分の手札を1枚選んでトラッシュする。その後、相手は手札を1枚選んでトラッシュする。", //JP_TEXT
		"", //TW_TRIGGER
		"選擇自己的 1 張手牌棄置，然後對手選擇 1 張手牌棄置。", //TW_TEXT
		"勝利の女神：NIKKE NivelArenaスターターデッキST03〈ヘレティック〉"  //PRODUCT
		],
	[
		"ST03-013", //ID
		"img/card/ST03-013.png", //SRC
		"黒化", //NAME
		"スキル", //TYPE
		"嵐", //ELEMENT
		"2", //COST
		"C", //RARE
		"", //POWER
		"", //HIT
		"", //BELONG
		"", //KEYWORD
		"", //JP_TRIGGER
		"自分の手札からユニットカードを1枚選んでトラッシュする。そのユニットカードのコストより低いコストを持つ、フィールドにあるユニットを1枚選んでトラッシュする。", //JP_TEXT
		"", //TW_TRIGGER
		"從自己的手牌中選擇 1 張單位卡棄置。接著，選擇場上 1 個費用低於該單位卡的單位棄置。", //TW_TEXT
		"勝利の女神：NIKKE NivelArenaスターターデッキST03〈ヘレティック〉"  //PRODUCT
		],
	[
		"ST03-014", //ID
		"img/card/ST03-014.png", //SRC
		"センスシェアリング", //NAME
		"スキル", //TYPE
		"嵐", //ELEMENT
		"3", //COST
		"C", //RARE
		"", //POWER
		"", //HIT
		"", //BELONG
		"", //KEYWORD
		"", //JP_TRIGGER
		"フィールドにある自分のユニットを1枚選んでトラッシュする。その後、2枚ドローする。", //JP_TEXT
		"", //TW_TRIGGER
		"選擇場上 1 個我方單位棄置，抽 2 張牌。", //TW_TEXT
		"勝利の女神：NIKKE NivelArenaスターターデッキST03〈ヘレティック〉"  //PRODUCT
		],
	[
		"ST03-015", //ID
		"img/card/ST03-015.png", //SRC
		"かかって来い！", //NAME
		"スキル", //TYPE
		"嵐", //ELEMENT
		"4", //COST
		"C", //RARE
		"", //POWER
		"", //HIT
		"", //BELONG
		"", //KEYWORD
		"トリガー / このカードをトラッシュする。自分のトラッシュゾーンから 엑시트 を持つユニットカードを1枚選んで手札に加える。", //JP_TRIGGER
		"フィールドにある自分のユニットを1枚選んでそのユニットと対向ユニットを全てトラッシュする。", //JP_TEXT
		"【Trigger】／將此卡棄置。從自己的棄置區中選擇 1 張具有【離場】的單位卡，加入手牌。", //TW_TRIGGER
		"選擇場上 1 個我方單位棄置。將該單位與其遭遇單位一併棄置。", //TW_TEXT
		"勝利の女神：NIKKE NivelArenaスターターデッキST03〈ヘレティック〉"  //PRODUCT
		],
	[
		"ST03-016", //ID
		"img/card/ST03-016.png", //SRC
		"ケブラーベスト", //NAME
		"アイテム", //TYPE
		"嵐", //ELEMENT
		"2", //COST
		"C", //RARE
		"", //POWER
		"", //HIT
		"", //BELONG
		"ディフェンダー", //KEYWORD
		"", //JP_TRIGGER
		"장착조건 없음<br><br>パワー+3000。<br><br>디펜더 自壊(このユニットが相手の攻撃を防御したなら、その攻撃を終了させ、このユニットをトラッシュする)。", //JP_TEXT
		"", //TW_TRIGGER
		"【裝備條件：無】<br><br>戰力 +3000。<br><br>【防禦者】終結（當此單位進行防禦宣言時，立即終止本次攻擊，並將此單位棄置。）", //TW_TEXT
		"勝利の女神：NIKKE NivelArenaスターターデッキST03〈ヘレティック〉"  //PRODUCT
		],
	[
		"ST03-017", //ID
		"img/card/ST03-017.png", //SRC
		"レアメタルアームガード", //NAME
		"アイテム", //TYPE
		"嵐", //ELEMENT
		"2", //COST
		"C", //RARE
		"", //POWER
		"", //HIT
		"", //BELONG
		"エグジット", //KEYWORD
		"", //JP_TRIGGER
		"장착조건 없음<br><br>道連れ(このユニットを戦闘でトラッシュした相手のユニットのコストがこのカードのコスト以下の場合、そのユニットをトラッシュする)。", //JP_TEXT
		"", //TW_TRIGGER
		"【裝備條件：無】<br><br>【離場】共滅（當此單位因戰鬥遭敵方單位棄置時，若該敵方單位的費用小於或等於此單位，則該單位也一併棄置。）", //TW_TEXT
		"勝利の女神：NIKKE NivelArenaスターターデッキST03〈ヘレティック〉"  //PRODUCT
		],
	[
		"BT01-001", //ID
		"img/card/BT01-001.png", //SRC
		"レッドフード", //NAME
		"リーダー", //TYPE
		"炎", //ELEMENT
		"", //COST
		"L", //RARE
		"", //POWER
		"", //HIT
		"ピルグリム", //BELONG
		"パッシブ", //KEYWORD
		"", //JP_TRIGGER
		"基本面<br><br>서약 自分は화염のカードのみをデッキに入れることができる。<br><br>각성 自分のリーダーレベルが6以上の場合、このカードを裏返す。<br><br>覚醒面<br><br>패시브 フィールドにある 어태커 を持つ自分のユニット全ては自分のターンの間、パワー+2000。", //JP_TEXT
		"", //TW_TRIGGER
		"基本面<br><br>【誓約】自己的牌組只能放入🟥屬性的卡片。<br><br>【覺醒】當自己的領袖等級達 6 以上時，翻轉此卡。<br><br>覺醒面<br><br>【被動】我方回合期間，場上所有擁有【攻擊者】的我方單位戰力 +2000。", //TW_TEXT
		"勝利の女神：NIKKE NivelArenaブースターパックBT01〈エンカウンター〉"  //PRODUCT
		],
	[
		"BT01-002", //ID
		"img/card/BT01-002.png", //SRC
		"ネオン‐ブリングバレット", //NAME
		"ユニット", //TYPE
		"炎", //ELEMENT
		"1", //COST
		"C", //RARE
		"2000", //POWER
		"1", //HIT
		"エフェクト / エリシオン", //BELONG
		"アタッカー", //KEYWORD
		"", //JP_TRIGGER
		"어태커 この攻撃が終わるまでパワー+2000。", //JP_TEXT
		"", //TW_TRIGGER
		"【攻擊者】直到本次攻擊結束為止，戰力 +2000。", //TW_TEXT
		"勝利の女神：NIKKE NivelArenaブースターパックBT01〈エンカウンター〉"  //PRODUCT
		],
	[
		"BT01-003", //ID
		"img/card/BT01-003.png", //SRC
		"クロウ", //NAME
		"ユニット", //TYPE
		"炎", //ELEMENT
		"1", //COST
		"C", //RARE
		"3000", //POWER
		"1", //HIT
		"ベース / ミシリス", //BELONG
		"", //KEYWORD
		"", //JP_TRIGGER
		"", //JP_TEXT
		"", //TW_TRIGGER
		"", //TW_TEXT
		"勝利の女神：NIKKE NivelArenaブースターパックBT01〈エンカウンター〉"  //PRODUCT
		],
	[
		"BT01-004", //ID
		"img/card/BT01-004.png", //SRC
		"ノイズ‐クラシックディーバ", //NAME
		"ユニット", //TYPE
		"炎", //ELEMENT
		"1", //COST
		"R", //RARE
		"1500", //POWER
		"1", //HIT
		"エフェクト / テトラ", //BELONG
		"アタッカー", //KEYWORD
		"", //JP_TRIGGER
		"어태커 貫通[1](このユニットが攻撃した戦闘で相手のユニットをトラッシュしたなら、相手に1ダメージを与える)。", //JP_TEXT
		"", //TW_TRIGGER
		"【攻擊者】貫通〔1〕（當此單位攻擊並以戰鬥使敵方單位棄置時，對對手造成 1 點傷害。）", //TW_TEXT
		"勝利の女神：NIKKE NivelArenaブースターパックBT01〈エンカウンター〉"  //PRODUCT
		],
	[
		"BT01-005", //ID
		"img/card/BT01-005.png", //SRC
		"ラピ‐クラシックバカンス", //NAME
		"ユニット", //TYPE
		"炎", //ELEMENT
		"2", //COST
		"R", //RARE
		"5000", //POWER
		"1", //HIT
		"エフェクト / エリシオン", //BELONG
		"", //KEYWORD
		"", //JP_TRIGGER
		"バーサーカー(このユニットは攻撃可能な状態であれば必ず攻撃しなければならない)。", //JP_TEXT
		"", //TW_TRIGGER
		"【被動】狂戰士（此單位若可攻擊，則必須攻擊。）", //TW_TEXT
		"勝利の女神：NIKKE NivelArenaブースターパックBT01〈エンカウンター〉"  //PRODUCT
		],
	[
		"BT01-006", //ID
		"img/card/BT01-006.png", //SRC
		"アニス：スパークリングサマー", //NAME
		"ユニット", //TYPE
		"炎", //ELEMENT
		"2", //COST
		"SR", //RARE
		"2500", //POWER
		"1", //HIT
		"エフェクト / テトラ", //BELONG
		"アタッカー", //KEYWORD
		"トリガー / このカードをトラッシュする。フィールドにある相手のユニットを1枚選んでこのターンが終わるまでパワー-5000。", //JP_TRIGGER
		"어태커 この攻撃が終わるまでパワー+2000。<br><br>어태커 略奪[1](このユニットが攻撃した戦闘で相手のユニットをトラッシュしたなら、1枚ドローする)。", //JP_TEXT
		"【Trigger】／將此卡棄置。選擇場上1個敵方單位，直到此回合結束為止，該單位力量 -5000。", //TW_TRIGGER
		"【攻擊者】直到本次攻擊結束為止，戰力 +2000。<br><br>【攻擊者】掠奪〔1〕（當此單位攻擊並以戰鬥使敵方單位棄置時，抽 1 張牌。）", //TW_TEXT
		"勝利の女神：NIKKE NivelArenaブースターパックBT01〈エンカウンター〉"  //PRODUCT
		],
	[
		"BT01-007", //ID
		"img/card/BT01-007.png", //SRC
		"クレイ", //NAME
		"ユニット", //TYPE
		"炎", //ELEMENT
		"2", //COST
		"C", //RARE
		"4000", //POWER
		"1", //HIT
		"ベース / テトラ", //BELONG
		"", //KEYWORD
		"", //JP_TRIGGER
		"", //JP_TEXT
		"", //TW_TRIGGER
		"", //TW_TEXT
		"勝利の女神：NIKKE NivelArenaブースターパックBT01〈エンカウンター〉"  //PRODUCT
		],
	[
		"BT01-008", //ID
		"img/card/BT01-008.png", //SRC
		"ボリューム", //NAME
		"ユニット", //TYPE
		"炎", //ELEMENT
		"3", //COST
		"C", //RARE
		"4000", //POWER
		"1", //HIT
		"エフェクト / テトラ", //BELONG
		"パッシブ", //KEYWORD
		"", //JP_TRIGGER
		"패시브 フィールドにある 어태커 貫通を持つ自分のユニット全てのパワー+1500。", //JP_TEXT
		"", //TW_TRIGGER
		"【被動】場上所有具有「 【攻擊者】貫通 」的我方單位戰力 +1500。", //TW_TEXT
		"勝利の女神：NIKKE NivelArenaブースターパックBT01〈エンカウンター〉"  //PRODUCT
		],
	[
		"BT01-009", //ID
		"img/card/BT01-009.png", //SRC
		"ベイ", //NAME
		"ユニット", //TYPE
		"炎", //ELEMENT
		"3", //COST
		"C", //RARE
		"4500", //POWER
		"1", //HIT
		"エフェクト / テトラ", //BELONG
		"アタッカー", //KEYWORD
		"", //JP_TRIGGER
		"어태커 この攻撃が終わるまでパワー+1000。", //JP_TEXT
		"", //TW_TRIGGER
		"【攻擊者】直到本次攻擊結束為止，戰力 +1000。", //TW_TEXT
		"勝利の女神：NIKKE NivelArenaブースターパックBT01〈エンカウンター〉"  //PRODUCT
		],
	[
		"BT01-010", //ID
		"img/card/BT01-010.png", //SRC
		"アリア", //NAME
		"ユニット", //TYPE
		"炎", //ELEMENT
		"3", //COST
		"C", //RARE
		"5000", //POWER
		"1", //HIT
		"ベース / テトラ", //BELONG
		"", //KEYWORD
		"", //JP_TRIGGER
		"", //JP_TEXT
		"", //TW_TRIGGER
		"", //TW_TEXT
		"勝利の女神：NIKKE NivelArenaブースターパックBT01〈エンカウンター〉"  //PRODUCT
		],
	[
		"BT01-011", //ID
		"img/card/BT01-011.png", //SRC
		"ネオン：ブルーオーシャン", //NAME
		"ユニット", //TYPE
		"炎", //ELEMENT
		"4", //COST
		"R", //RARE
		"4000", //POWER
		"2", //HIT
		"エフェクト / エリシオン", //BELONG
		"アクティブ", //KEYWORD
		"", //JP_TRIGGER
		"액티브메인 フィールドにある相手のユニットを1枚選んでこのターンが終わるまでパワー-1500。", //JP_TEXT
		"", //TW_TRIGGER
		"【主動：主階段】選擇場上 1 個敵方單位，直到此回合結束為止，該單位戰力 -1500。", //TW_TEXT
		"勝利の女神：NIKKE NivelArenaブースターパックBT01〈エンカウンター〉"  //PRODUCT
		],
	[
		"BT01-012", //ID
		"img/card/BT01-012.png", //SRC
		"エマ‐ダーリンレッド", //NAME
		"ユニット", //TYPE
		"炎", //ELEMENT
		"4", //COST
		"C", //RARE
		"5000", //POWER
		"2", //HIT
		"エフェクト / エリシオン", //BELONG
		"エントリー", //KEYWORD
		"", //JP_TRIGGER
		"엔트리 フィールドにある自分のユニット全てはこのターンが終わるまで「 어태커 この攻撃が終わるまでパワー+1000」を得る。", //JP_TEXT
		"", //TW_TRIGGER
		"【入場】直到此回合結束為止，我方場上所有單位獲得「 【攻擊者】直到本次攻擊結束為止，戰力 +1000 」。", //TW_TEXT
		"勝利の女神：NIKKE NivelArenaブースターパックBT01〈エンカウンター〉"  //PRODUCT
		],
	[
		"BT01-013", //ID
		"img/card/BT01-013.png", //SRC
		"ジャッカル", //NAME
		"ユニット", //TYPE
		"炎", //ELEMENT
		"4", //COST
		"C", //RARE
		"5500", //POWER
		"2", //HIT
		"エフェクト / ミシリス", //BELONG
		"アタッカー", //KEYWORD
		"", //JP_TRIGGER
		"어태커 この攻撃が終わるまでパワー+1000。", //JP_TEXT
		"", //TW_TRIGGER
		"【攻擊者】直到本次攻擊結束為止，戰力 +1000。", //TW_TEXT
		"勝利の女神：NIKKE NivelArenaブースターパックBT01〈エンカウンター〉"  //PRODUCT
		],
	[
		"BT01-014", //ID
		"img/card/BT01-014.png", //SRC
		"紅蓮：ブラックシャドウ", //NAME
		"ユニット", //TYPE
		"炎", //ELEMENT
		"4", //COST
		"SR", //RARE
		"7500", //POWER
		"2", //HIT
		"エフェクト / ピルグリム", //BELONG
		"", //KEYWORD
		"トリガー / このカードをトラッシュする。自分のトラッシュゾーンからコスト2以下のユニットカードを1枚選んで手札に加える。", //JP_TRIGGER
		"バーサーカー(このユニットは攻撃可能な状態であれば必ず攻撃しなければならない)。", //JP_TEXT
		"【Trigger】／將此卡棄置。從自己的棄置區中選擇 1 張費用為 2 或以下的單位卡，加入自己的手牌。", //TW_TRIGGER
		"【被動】狂戰士（此單位若可攻擊，則必須攻擊。）", //TW_TEXT
		"勝利の女神：NIKKE NivelArenaブースターパックBT01〈エンカウンター〉"  //PRODUCT
		],
	[
		"BT01-015", //ID
		"img/card/BT01-015.png", //SRC
		"ノワール‐ブラックラビット", //NAME
		"ユニット", //TYPE
		"炎", //ELEMENT
		"5", //COST
		"R", //RARE
		"4500", //POWER
		"2", //HIT
		"エフェクト / テトラ", //BELONG
		"エントリー", //KEYWORD
		"", //JP_TRIGGER
		"엔트리 このターンが終わるまで対向ユニットのパワー-4000。", //JP_TEXT
		"", //TW_TRIGGER
		"【入場】直到此回合結束為止，遭遇單位的戰力 -4000。", //TW_TEXT
		"勝利の女神：NIKKE NivelArenaブースターパックBT01〈エンカウンター〉"  //PRODUCT
		],
	[
		"BT01-016", //ID
		"img/card/BT01-016.png", //SRC
		"スノーホワイト：イノセントデイズ", //NAME
		"ユニット", //TYPE
		"炎", //ELEMENT
		"6", //COST
		"C", //RARE
		"7000", //POWER
		"2", //HIT
		"エフェクト / ピルグリム", //BELONG
		"アタッカー", //KEYWORD
		"", //JP_TRIGGER
		"어태커 この攻撃が終わるまでパワー+2000。", //JP_TEXT
		"", //TW_TRIGGER
		"【攻擊者】直到本次攻擊結束為止，戰力 +2000。", //TW_TEXT
		"勝利の女神：NIKKE NivelArenaブースターパックBT01〈エンカウンター〉"  //PRODUCT
		],
	[
		"BT01-017", //ID
		"img/card/BT01-017.png", //SRC
		"バイパー‐シャイン・オブ・ラブ", //NAME
		"ユニット", //TYPE
		"炎", //ELEMENT
		"6", //COST
		"SR", //RARE
		"5000", //POWER
		"2", //HIT
		"エフェクト / テトラ", //BELONG
		"エントリー", //KEYWORD
		"", //JP_TRIGGER
		"엔트리 対向ユニットのパワーはこのターンが終わるまで1000になる。", //JP_TEXT
		"", //TW_TRIGGER
		"【入場】直到此回合結束為止，遭遇單位的戰力變為 1000。", //TW_TEXT
		"勝利の女神：NIKKE NivelArenaブースターパックBT01〈エンカウンター〉"  //PRODUCT
		],
	[
		"BT01-018", //ID
		"img/card/BT01-018.png", //SRC
		"ブラン‐ホワイトラビット", //NAME
		"ユニット", //TYPE
		"炎", //ELEMENT
		"7", //COST
		"R", //RARE
		"7000", //POWER
		"3", //HIT
		"エフェクト / テトラ", //BELONG
		"パッシブ", //KEYWORD
		"", //JP_TRIGGER
		"패시브 フィールドにある 어태커 を持つ自分のユニット全てのパワー+2000。", //JP_TEXT
		"", //TW_TRIGGER
		"【被動】場上所有具有【攻擊者】的我方單位戰力 +2000。", //TW_TEXT
		"勝利の女神：NIKKE NivelArenaブースターパックBT01〈エンカウンター〉"  //PRODUCT
		],
	[
		"BT01-019", //ID
		"img/card/BT01-019.png", //SRC
		"レッドフード", //NAME
		"ユニット", //TYPE
		"炎", //ELEMENT
		"8", //COST
		"UR", //RARE
		"7000", //POWER
		"3", //HIT
		"エフェクト / ピルグリム", //BELONG
		"エントリー", //KEYWORD
		"トリガー / このカードを自分の手札に加える。", //JP_TRIGGER
		"엔트리 フィールドにある自分のユニット全てはこのターンが終わるまで 어태커 貫通[1](このユニットが攻撃した戦闘で相手のユニットをトラッシュしたなら、相手に1ダメージを与える)を得る。", //JP_TEXT
		"【Trigger】／將此卡加入自己的手牌。", //TW_TRIGGER
		"【入場】直到此回合結束為止，場上所有我方單位獲得「 【攻擊者】貫通〔1〕（當此單位攻擊並以戰鬥使敵方單位棄置時，對對手造成 1 點傷害） 」。", //TW_TEXT
		"勝利の女神：NIKKE NivelArenaブースターパックBT01〈エンカウンター〉"  //PRODUCT
		],
	[
		"BT01-020", //ID
		"img/card/BT01-020.png", //SRC
		"ワイルドトゥース", //NAME
		"スキル", //TYPE
		"炎", //ELEMENT
		"1", //COST
		"C", //RARE
		"", //POWER
		"", //HIT
		"", //BELONG
		"", //KEYWORD
		"", //JP_TRIGGER
		"フィールドにある 어태커 を持つ自分のユニットを1枚選ぶ。そのユニットはこのターンが終わるまで 어태커 貫通[1](このユニットが攻撃した戦闘で相手のユニットをトラッシュしたなら、相手に1ダメージを与える)を得る。", //JP_TEXT
		"", //TW_TRIGGER
		"選擇場上 1 個擁有【攻擊者】的我方單位。直到此回合結束為止，該單位獲得「【攻擊者】貫通〔1〕（當此單位攻擊並以戰鬥使敵方單位棄置時，對對手造成 1 點傷害。）」", //TW_TEXT
		"勝利の女神：NIKKE NivelArenaブースターパックBT01〈エンカウンター〉"  //PRODUCT
		],
	[
		"BT01-021", //ID  
		"img/card/BT01-021.png", //SRC
		"フォーメーションF.F", //NAME  
		"スキル", //TYPE  
		"炎", //ELEMENT  
		"2", //COST  
		"C", //RARE  
		"", //POWER  
		"", //HIT  
		"", //BELONG  
		"", //KEYWORD  
		"", //JP_TRIGGER  
		"フィールドにある相手のユニット全てはこのターンが終わるまでパワー-1000。", //JP_TEXT  
		"", //TW_TRIGGER
		"直到此回合結束為止，場上所有敵方單位的戰力 -1000。", //TW_TEXT
		"勝利の女神：NIKKE NivelArenaブースターパックBT01〈エンカウンター〉" //PRODUCT
		],
	[
		"BT01-022", //ID  
		"img/card/BT01-022.png", //SRC
		"圧倒", //NAME  
		"スキル", //TYPE  
		"炎", //ELEMENT  
		"3", //COST  
		"C", //RARE  
		"", //POWER  
		"", //HIT  
		"", //BELONG  
		"", //KEYWORD  
		"", //JP_TRIGGER  
		"フィールドにある相手のユニットを2枚まで選んでこのターンが終わるまでパワー-2000。", //JP_TEXT  
		"", //TW_TRIGGER
		"選擇最多 2 個場上的敵方單位。直到此回合結束為止，這些單位的戰力 -2000。", //TW_TEXT
		"勝利の女神：NIKKE NivelArenaブースターパックBT01〈エンカウンター〉" //PRODUCT
		],
	[
		"BT01-023", //ID  
		"img/card/BT01-023.png", //SRC
		"チアアップトゥギャザー", //NAME  
		"スキル", //TYPE  
		"炎", //ELEMENT  
		"3", //COST  
		"C", //RARE  
		"", //POWER  
		"", //HIT  
		"", //BELONG  
		"", //KEYWORD  
		"", //JP_TRIGGER  
		"フィールドにある 어태커 を持つ自分のユニット全てはこのターンが終わるまでパワー+2500。", //JP_TEXT  
		"", //TW_TRIGGER
		"場上所有具有【攻擊者】的我方單位，直到此回合結束為止，戰力 +2500。", //TW_TEXT
		"勝利の女神：NIKKE NivelArenaブースターパックBT01〈エンカウンター〉" //PRODUCT
		],
	[
		"BT01-024", //ID  
		"img/card/BT01-024.png", //SRC
		"フィナーレ", //NAME  
		"スキル", //TYPE  
		"炎", //ELEMENT  
		"3", //COST  
		"R", //RARE  
		"", //POWER  
		"", //HIT  
		"", //BELONG  
		"", //KEYWORD  
		"", //JP_TRIGGER  
		"フィールドにある相手のユニットを1枚選んでこのターンが終わるまでパワー-3000。この効果でそのユニットをトラッシュしたなら、1枚ドローする。", //JP_TEXT  
		"", //TW_TRIGGER
		"選擇場上 1 個敵方單位。直到此回合結束為止，戰力 -3000。若該單位因此效果而遭棄置，抽 1 張牌。", //TW_TEXT
		"勝利の女神：NIKKE NivelArenaブースターパックBT01〈エンカウンター〉" //PRODUCT
		],
	[
		"BT01-025", //ID  
		"img/card/BT01-025.png", //SRC
		"合流", //NAME  
		"スキル", //TYPE  
		"炎", //ELEMENT  
		"4", //COST  
		"C", //RARE  
		"", //POWER  
		"", //HIT  
		"", //BELONG  
		"", //KEYWORD  
		"", //JP_TRIGGER  
		"自分のトラッシュゾーンから 어태커 を持つユニットカードを1枚選んで手札に加える。", //JP_TEXT  
		"", //TW_TRIGGER
		"從自己的棄置區中選擇 1 個擁有【攻擊者】的單位卡，加入自己的手牌。", //TW_TEXT
		"勝利の女神：NIKKE NivelArenaブースターパックBT01〈エンカウンター〉" //PRODUCT
		],
	[
		"BT01-026", //ID  
		"img/card/BT01-026.png", //SRC
		"ガッデシアムグローブ", //NAME  
		"アイテム", //TYPE  
		"炎", //ELEMENT  
		"2", //COST  
		"C", //RARE  
		"", //POWER  
		"", //HIT  
		"", //BELONG  
		"アタッカー", //KEYWORD  
		"トリガー / このカードを自分の手札に加える。", //JP_TRIGGER  
		"장착조건 없음<br><br>어태커 貫通[1](このユニットが攻撃した戦闘で相手のユニットをトラッシュしたなら、相手に1ダメージを与える)。", //JP_TEXT  
		"【Trigger】／將此卡加入自己的手牌。", //TW_TRIGGER
		"【裝備條件：無】<br><br>【攻擊者】貫通〔1〕（當此單位攻擊並以戰鬥使敵方單位棄置時，對對手造成 1 點傷害。）", //TW_TEXT
		"勝利の女神：NIKKE NivelArenaブースターパックBT01〈エンカウンター〉" //PRODUCT
		],
	[
		"BT01-027", //ID  
		"img/card/BT01-027.png", //SRC
		"ノルンコードゴーグル", //NAME  
		"アイテム", //TYPE  
		"炎", //ELEMENT  
		"3", //COST  
		"C", //RARE  
		"", //POWER  
		"", //HIT  
		"", //BELONG  
		"アタッカー", //KEYWORD  
		"", //JP_TRIGGER  
		"장착조건 없음<br><br>어태커 この攻撃が終わるまでパワー+2000。<br><br>어태커 略奪[1](このユニットが攻撃した戦闘で相手のユニットをトラッシュしたなら、1枚ドローする)。", //JP_TEXT  
		"", //TW_TRIGGER
		"【裝備條件：無】<br><br>【攻擊者】直到本次攻擊結束為止，戰力 +2000。<br><br>【攻擊者】掠奪〔1〕（當此單位攻擊並以戰鬥使敵方單位棄置時，抽 1 張牌。）", //TW_TEXT
		"勝利の女神：NIKKE NivelArenaブースターパックBT01〈エンカウンター〉" //PRODUCT
		],
	[
		"BT01-028", //ID
		"img/card/BT01-028.png", //SRC
		"紅蓮", //NAME
		"リーダー", //TYPE
		"大地", //ELEMENT
		"", //COST
		"L", //RARE
		"", //POWER
		"", //HIT
		"ピルグリム", //BELONG
		"パッシブ", //KEYWORD
		"", //JP_TRIGGER
		"基本面<br><br>서약 自分は대지のカードのみをデッキに入れることができる。<br><br>각성 自分のリーダーレベルが5以上の場合、このカードを裏返す。<br><br>覚醒面<br><br>패시브 フィールドにある《ベース》を持つ自分のユニット全てのパワー+1000。", //JP_TEXT
		"", //TW_TRIGGER
		"基本面<br><br>【誓約】自己的牌組只能放入🟩屬性的卡片。<br><br>【覺醒】當自己的領袖等級達 5 以上時，翻轉此卡。<br><br>覺醒面<br><br>【被動】場上所有屬於《基礎型》的我方單位戰力 +1000。", //TW_TEXT
		"勝利の女神：NIKKE NivelArenaブースターパックBT01〈エンカウンター〉"  //PRODUCT
		],
	[
		"BT01-029", //ID  
		"img/card/BT01-029.png", //SRC
		"ベロータ", //NAME  
		"ユニット", //TYPE  
		"大地", //ELEMENT  
		"1", //COST  
		"C", //RARE  
		"3000", //POWER  
		"1", //HIT  
		"エフェクト / テトラ", //BELONG  
		"エントリー", //KEYWORD  
		"", //JP_TRIGGER  
		"엔트리 相手のターンが終わるまでパワー+1000。", //JP_TEXT  
		"", //TW_TRIGGER
		"【入場】直到對手回合結束為止，戰力 +1000。", //TW_TEXT
		"勝利の女神：NIKKE NivelArenaブースターパックBT01〈エンカウンター〉" //PRODUCT
		],
	[
		"BT01-030", //ID  
		"img/card/BT01-030.png", //SRC
		"ミカ：スノーバディ", //NAME  
		"ユニット", //TYPE  
		"大地", //ELEMENT  
		"1", //COST  
		"C", //RARE  
		"2000", //POWER  
		"1", //HIT  
		"エフェクト / テトラ", //BELONG  
		"戦線維持", //KEYWORD  
		"", //JP_TRIGGER  
		"戦線維持[パワー+3000](自分の全てのユニットゾーンにユニットがある場合、パワー+3000)。", //JP_TEXT  
		"", //TW_TRIGGER
		"【被動】戰線構築〔戰力+3000〕（若自己所有的單位區皆有單位存在時，戰力 +3000。）", //TW_TEXT
		"勝利の女神：NIKKE NivelArenaブースターパックBT01〈エンカウンター〉" //PRODUCT
		],
	[
		"BT01-031", //ID  
		"img/card/BT01-031.png", //SRC
		"エヌ：ミラクルフェアリー", //NAME  
		"ユニット", //TYPE  
		"大地", //ELEMENT  
		"1", //COST  
		"C", //RARE  
		"3500", //POWER  
		"1", //HIT  
		"ベース / ミシリス", //BELONG  
		"", //KEYWORD  
		"", //JP_TRIGGER  
		"", //JP_TEXT  
		"", //TW_TRIGGER
		"", //TW_TEXT
		"勝利の女神：NIKKE NivelArenaブースターパックBT01〈エンカウンター〉" //PRODUCT
		],
	[
		"BT01-032", //ID  
		"img/card/BT01-032.png", //SRC
		"シン", //NAME  
		"ユニット", //TYPE  
		"大地", //ELEMENT  
		"2", //COST  
		"C", //RARE  
		"4000", //POWER  
		"1", //HIT  
		"エフェクト / ミシリス", //BELONG  
		"パッシブ", //KEYWORD  
		"", //JP_TRIGGER  
		"패시브 フィールドにある《ベース》を持つ自分のユニット1枚につき、パワー+500。", //JP_TEXT  
		"", //TW_TRIGGER
		"【被動】此單位的戰力提升值等同於我方場上屬於《基礎型》的單位數 ×500。", //TW_TEXT
		"勝利の女神：NIKKE NivelArenaブースターパックBT01〈エンカウンター〉" //PRODUCT
		],
	[
		"BT01-033", //ID  
		"img/card/BT01-033.png", //SRC
		"ドラー‐ダークローズ", //NAME  
		"ユニット", //TYPE  
		"大地", //ELEMENT  
		"2", //COST  
		"R", //RARE  
		"2500", //POWER  
		"1", //HIT  
		"エフェクト / テトラ", //BELONG  
		"エントリー", //KEYWORD  
		"", //JP_TRIGGER  
		"엔트리 このターンが終わるまでヒット+1。", //JP_TEXT  
		"", //TW_TRIGGER
		"【入場】直到此回合結束為止，命中 +1。", //TW_TEXT
		"勝利の女神：NIKKE NivelArenaブースターパックBT01〈エンカウンター〉" //PRODUCT
		],
	[
		"BT01-034", //ID  
		"img/card/BT01-034.png", //SRC
		"ギルティ‐ディスビリーフウェーブ", //NAME  
		"ユニット", //TYPE  
		"大地", //ELEMENT  
		"2", //COST  
		"SR", //RARE  
		"5500", //POWER  
		"1", //HIT  
		"ベース / ミシリス", //BELONG  
		"", //KEYWORD  
		"トリガー / このカードを自分の手札に加える。", //JP_TRIGGER  
		"", //JP_TEXT  
		"【Trigger】／將此卡加入自己的手牌。", //TW_TRIGGER
		"", //TW_TEXT
		"勝利の女神：NIKKE NivelArenaブースターパックBT01〈エンカウンター〉" //PRODUCT
		],
	[
		"BT01-035", //ID  
		"img/card/BT01-035.png", //SRC
		"ソリン", //NAME  
		"ユニット", //TYPE  
		"大地", //ELEMENT  
		"3", //COST  
		"C", //RARE  
		"4500", //POWER  
		"1", //HIT  
		"エフェクト / エリシオン", //BELONG  
		"アタッカー", //KEYWORD  
		"", //JP_TRIGGER  
		"어태커 突破[コスト1以下](コスト1以下の相手のユニットはこのユニットの攻撃を防御できない)。", //JP_TEXT  
		"", //TW_TRIGGER
		"【攻擊者】突破〔費用 1 以下〕（費用為 1 或以下的敵方單位不能防禦此單位的攻擊。）", //TW_TEXT
		"勝利の女神：NIKKE NivelArenaブースターパックBT01〈エンカウンター〉" //PRODUCT
		],
	[
		"BT01-036", //ID  
		"img/card/BT01-036.png", //SRC
		"クエンシー", //NAME  
		"ユニット", //TYPE  
		"大地", //ELEMENT  
		"3", //COST  
		"C", //RARE  
		"3500", //POWER  
		"1", //HIT  
		"エフェクト / ミシリス", //BELONG  
		"パッシブ", //KEYWORD  
		"", //JP_TRIGGER  
		"패시브 フィールドにある《ベース》を持つ自分のユニット全てのパワー+2000。", //JP_TEXT  
		"", //TW_TRIGGER
		"【被動】場上所有屬於《基礎型》的我方單位戰力 +2000。", //TW_TEXT
		"勝利の女神：NIKKE NivelArenaブースターパックBT01〈エンカウンター〉" //PRODUCT
		],
	[
		"BT01-037", //ID  
		"img/card/BT01-037.png", //SRC
		"ディーゼル‐ミッドナイト・ストロベリー", //NAME  
		"ユニット", //TYPE  
		"大地", //ELEMENT  
		"3", //COST  
		"R", //RARE  
		"4500", //POWER  
		"1", //HIT  
		"エフェクト / エリシオン", //BELONG  
		"戦線維持", //KEYWORD  
		"", //JP_TRIGGER  
		"戦線維持[ヒット+1](自分の全てのユニットゾーンにユニットがある場合、ヒット+1)。", //JP_TEXT  
		"", //TW_TRIGGER
		"【被動】戰線構築〔命中 +1〕（若自己所有的單位區皆有單位存在時，命中 +1。）", //TW_TEXT
		"勝利の女神：NIKKE NivelArenaブースターパックBT01〈エンカウンター〉" //PRODUCT
		],
	[
		"BT01-038", //ID  
		"img/card/BT01-038.png", //SRC
		"ルピー", //NAME  
		"ユニット", //TYPE  
		"大地", //ELEMENT  
		"4", //COST  
		"C", //RARE  
		"4000", //POWER  
		"2", //HIT  
		"エフェクト / テトラ", //BELONG  
		"アクティブ", //KEYWORD  
		"", //JP_TRIGGER  
		"액티브메인 自分の手札を1枚選んでトラッシュする。その後、フィールドにある自分のユニットを1枚選び、このターンが終わるまでパワー+4000。", //JP_TEXT  
		"", //TW_TRIGGER
		"【主動：主階段】選擇自己的 1 張手牌棄置。接著，選擇場上 1 個我方單位，直到此回合結束為止，戰力 +4000。", //TW_TEXT
		"勝利の女神：NIKKE NivelArenaブースターパックBT01〈エンカウンター〉" //PRODUCT
		],
	[
		"BT01-039", //ID  
		"img/card/BT01-039.png", //SRC
		"スノーホワイト‐ホワイトナイト", //NAME  
		"ユニット", //TYPE  
		"大地", //ELEMENT  
		"4", //COST  
		"R", //RARE  
		"5000", //POWER  
		"2", //HIT  
		"エフェクト / ピルグリム", //BELONG  
		"エントリー", //KEYWORD  
		"", //JP_TRIGGER  
		"엔트리 相手のターンが終わるまでパワー+3000。", //JP_TEXT  
		"", //TW_TRIGGER
		"【入場】直到對手回合結束為止，戰力 +3000。", //TW_TEXT
		"勝利の女神：NIKKE NivelArenaブースターパックBT01〈エンカウンター〉" //PRODUCT
		],
	[
		"BT01-040", //ID  
		"img/card/BT01-040.png", //SRC
		"ルピー：ウィンターショッパー", //NAME  
		"ユニット", //TYPE  
		"大地", //ELEMENT  
		"4", //COST  
		"SR", //RARE  
		"4000", //POWER  
		"2", //HIT  
		"エフェクト / テトラ", //BELONG  
		"パッシブ, レベルリンク", //KEYWORD  
		"", //JP_TRIGGER  
		"패시브 自分のリーダーレベル1につき、パワー+500。<br><br>レベルリンク[10: ヒット+1](自分のリーダーレベルが10以上の場合、ヒット+1)。", //JP_TEXT  
		"", //TW_TRIGGER
		"【被動】此單位的戰力提升值等同於自身領袖等級 ×500 。<br><br>【被動】等級連結〔10：命中 +1〕（若我方領袖等級達10以上，則此單位命中+1。）", //TW_TEXT
		"勝利の女神：NIKKE NivelArenaブースターパックBT01〈エンカウンター〉" //PRODUCT
		],
	[
		"BT01-041", //ID  
		"img/card/BT01-041.png", //SRC
		"ヤン‐サンライズマーケット", //NAME  
		"ユニット", //TYPE  
		"大地", //ELEMENT  
		"5", //COST  
		"C", //RARE  
		"6500", //POWER  
		"2", //HIT  
		"エフェクト / テトラ", //BELONG  
		"エントリー", //KEYWORD  
		"", //JP_TRIGGER  
		"엔트리 フィールドにある自分のユニットを1枚選んでこのターンが終わるまでパワー+2000。", //JP_TEXT  
		"", //TW_TRIGGER
		"【入場】選擇場上 1 個我方單位，直到此回合結束為止，該單位戰力 +2000", //TW_TEXT
		"勝利の女神：NIKKE NivelArenaブースターパックBT01〈エンカウンター〉" //PRODUCT
		],
	[
		"BT01-042", //ID  
		"img/card/BT01-042.png", //SRC
		"ナガ", //NAME  
		"ユニット", //TYPE  
		"大地", //ELEMENT  
		"5", //COST  
		"R", //RARE  
		"7500", //POWER  
		"2", //HIT  
		"ベース / ミシリス", //BELONG  
		"", //KEYWORD  
		"", //JP_TRIGGER  
		"", //JP_TEXT  
		"", //TW_TRIGGER
		"", //TW_TEXT
		"勝利の女神：NIKKE NivelArenaブースターパックBT01〈エンカウンター〉" //PRODUCT
		],
	[
		"BT01-043", //ID  
		"img/card/BT01-043.png", //SRC
		"ティア", //NAME  
		"ユニット", //TYPE  
		"大地", //ELEMENT  
		"6", //COST  
		"R", //RARE  
		"8500", //POWER  
		"2", //HIT  
		"ベース / ミシリス", //BELONG  
		"", //KEYWORD  
		"", //JP_TRIGGER  
		"", //JP_TEXT  
		"", //TW_TRIGGER
		"", //TW_TEXT
		"勝利の女神：NIKKE NivelArenaブースターパックBT01〈エンカウンター〉" //PRODUCT
		],
	[
		"BT01-044", //ID  
		"img/card/BT01-044.png", //SRC
		"ラプンツェル", //NAME  
		"ユニット", //TYPE  
		"大地", //ELEMENT  
		"6", //COST  
		"SR", //RARE  
		"8000", //POWER  
		"2", //HIT  
		"エフェクト / ピルグリム", //BELONG  
		"エントリー", //KEYWORD  
		"トリガー / このカードをトラッシュする。自分のリーダーレベル+1。", //JP_TRIGGER  
		"엔트리 自分のデッキの上から3枚を公開し、その中の《ベース》を持つユニットカード1枚を手札に加える。残りはデッキに戻し、シャッフルする。", //JP_TEXT  
		"【Trigger】／將此卡棄置。自己的領袖等級 +1。", //TW_TRIGGER
		"【入場】從自己的牌堆頂部翻開 3 張卡，從中選擇 1 張屬於《基礎型》的單位卡加入手牌，其餘 2 張放回牌堆並重新洗牌。", //TW_TEXT
		"勝利の女神：NIKKE NivelArenaブースターパックBT01〈エンカウンター〉" //PRODUCT
		],
	[
		"BT01-045", //ID  
		"img/card/BT01-045.png", //SRC
		"ブリッド‐ブラックムーン", //NAME  
		"ユニット", //TYPE  
		"大地", //ELEMENT  
		"7", //COST  
		"C", //RARE  
		"7500", //POWER  
		"3", //HIT  
		"エフェクト / エリシオン", //BELONG  
		"パッシブ", //KEYWORD  
		"", //JP_TRIGGER  
		"패시브 フィールドにあるコスト1の自分のユニット全てのパワー+2000。", //JP_TEXT  
		"", //TW_TRIGGER
		"【被動】場上所有費用為 1 的我方單位戰力 +2000。", //TW_TEXT
		"勝利の女神：NIKKE NivelArenaブースターパックBT01〈エンカウンター〉" //PRODUCT
		],
	[
		"BT01-046", //ID  
		"img/card/BT01-046.png", //SRC
		"紅蓮", //NAME  
		"ユニット", //TYPE  
		"大地", //ELEMENT  
		"8", //COST  
		"UR", //RARE  
		"8000", //POWER  
		"3", //HIT  
		"エフェクト / ピルグリム", //BELONG  
		"エントリー", //KEYWORD  
		"トリガー / このカードを自分の手札に加える。", //JP_TRIGGER  
		"엔트리 フィールドにある《ベース》を持つ自分のユニットを1枚選ぶ。そのユニットはこのターンが終わるまで 어태커突破[コスト3以下](コスト3以下の相手のユニットはこのユニットの攻撃を防御できない)を得る。", //JP_TEXT  
		"【Trigger】／將此卡加入自己的手牌。", //TW_TRIGGER
		"【入場】選擇場上 1 個屬於《基礎型》的我方單位。直到此回合結束為止，該單位獲得「 【攻擊者】突破〔費用 3 以下〕（費用為 3 或以下的敵方單位不能防禦此單位的攻擊）」", //TW_TEXT
		"勝利の女神：NIKKE NivelArenaブースターパックBT01〈エンカウンター〉" //PRODUCT
		],
	[
		"BT01-047", //ID  
		"img/card/BT01-047.png", //SRC
		"純白の意志", //NAME  
		"スキル", //TYPE  
		"大地", //ELEMENT  
		"1", //COST  
		"C", //RARE  
		"", //POWER  
		"", //HIT  
		"", //BELONG  
		"", //KEYWORD  
		"", //JP_TRIGGER  
		"フィールドにある《ベース》を持つコスト1の自分のユニットを1枚選ぶ。そのユニットのヒットはこのターンが終わるまで2になる。", //JP_TEXT  
		"", //TW_TRIGGER
		"選擇場上 1 個費用為 1 且屬於《基礎型》的我方單位。直到此回合結束為止，該單位的命中變為 2 。", //TW_TEXT
		"勝利の女神：NIKKE NivelArenaブースターパックBT01〈エンカウンター〉" //PRODUCT
		],
	[
		"BT01-048", //ID  
		"img/card/BT01-048.png", //SRC
		"青い蝶の夢", //NAME  
		"スキル", //TYPE  
		"大地", //ELEMENT  
		"2", //COST  
		"C", //RARE  
		"", //POWER  
		"", //HIT  
		"", //BELONG  
		"", //KEYWORD  
		"", //JP_TRIGGER  
		"フィールドにある自分のユニット全ては相手のターンが終わるまでパワー+500。", //JP_TEXT  
		"", //TW_TRIGGER
		"當前場上的所有我方單位，直到對手回合結束為止，戰力 +500。", //TW_TEXT
		"勝利の女神：NIKKE NivelArenaブースターパックBT01〈エンカウンター〉" //PRODUCT
		],
	[
		"BT01-049", //ID  
		"img/card/BT01-049.png", //SRC
		"デザートタイム", //NAME  
		"スキル", //TYPE  
		"大地", //ELEMENT  
		"3", //COST  
		"C", //RARE  
		"", //POWER  
		"", //HIT  
		"", //BELONG  
		"", //KEYWORD  
		"", //JP_TRIGGER  
		"フィールドにある《ベース》を持つ自分のユニットの枚数分ドローする。", //JP_TEXT  
		"", //TW_TRIGGER
		"抽取與場上屬於《基礎型》的我方單位數量相同的卡片數量。", //TW_TEXT
		"勝利の女神：NIKKE NivelArenaブースターパックBT01〈エンカウンター〉" //PRODUCT
		],
	[
		"BT01-050", //ID  
		"img/card/BT01-050.png", //SRC
		"雪見温泉祭り", //NAME  
		"スキル", //TYPE  
		"大地", //ELEMENT  
		"3", //COST  
		"C", //RARE  
		"", //POWER  
		"", //HIT  
		"", //BELONG  
		"", //KEYWORD  
		"", //JP_TRIGGER  
		"自分の全てのユニットゾーンにユニットがある場合、フィールドにある自分のユニット全ては相手のターンが終わるまでパワー+1500。", //JP_TEXT  
		"", //TW_TRIGGER
		"若我方所有的單位區皆有單位存在，則當前場上的所有我方單位，直到對手回合結束為止，戰力 +1500。", //TW_TEXT
		"勝利の女神：NIKKE NivelArenaブースターパックBT01〈エンカウンター〉" //PRODUCT  
		],
	[
		"BT01-051", //ID  
		"img/card/BT01-051.png", //SRC
		"VIPギフト", //NAME  
		"スキル", //TYPE  
		"大地", //ELEMENT  
		"3", //COST  
		"R", //RARE  
		"", //POWER  
		"", //HIT  
		"", //BELONG  
		"", //KEYWORD  
		"トリガー / このカードをトラッシュする。フィールドにあるコスト3以下の相手のユニットを1枚選んでトラッシュする。", //JP_TRIGGER  
		"自分のデッキの上から3枚を公開し、その中のコスト3以下のカードを全て手札に加える。残りはデッキに戻し、シャッフルする。", //JP_TEXT  
		"【Trigger】／將此卡棄置。選擇場上 1 個費用為 3 或以下的敵方單位，將其棄置。", //TW_TRIGGER
		"從自己的牌堆頂部翻開 3 張卡，將其中所有費用為 3 或以下的卡加入手牌。其餘的卡放回牌堆並洗牌。", //TW_TEXT
		"勝利の女神：NIKKE NivelArenaブースターパックBT01〈エンカウンター〉" //PRODUCT  
		],
	[
		"BT01-052", //ID  
		"img/card/BT01-052.png", //SRC
		"身剣合一", //NAME  
		"スキル", //TYPE  
		"大地", //ELEMENT  
		"4", //COST  
		"C", //RARE  
		"", //POWER  
		"", //HIT  
		"", //BELONG  
		"", //KEYWORD  
		"", //JP_TRIGGER  
		"フィールドにある《ベース》を持つ自分のユニット全てはこのターンが終わるまでヒット+1。", //JP_TEXT  
		"", //TW_TRIGGER
		"當前場上所有屬於《基礎型》的我方單位，直到此回合結束為止，命中 +1。", //TW_TEXT
		"勝利の女神：NIKKE NivelArenaブースターパックBT01〈エンカウンター〉" //PRODUCT
		],
	[
		"BT01-053", //ID  
		"img/card/BT01-053.png", //SRC
		"ガッデシアムプロテクター", //NAME  
		"アイテム", //TYPE  
		"大地", //ELEMENT  
		"2", //COST  
		"C", //RARE  
		"", //POWER  
		"", //HIT  
		"", //BELONG  
		"アタッカー", //KEYWORD  
		"", //JP_TRIGGER  
		"장착조건 4코스트이하<br><br>어태커 突破[コスト2以下](コスト2以下の相手のユニットはこのユニットの攻撃を防御できない)。", //JP_TEXT  
		"", //TW_TRIGGER
		"【裝備條件：費用 4 以下單位】<br><br>【攻擊者】突破〔費用 2 以下〕（費用為 2 或以下的敵方單位不能防禦此單位的攻擊。）", //TW_TEXT
		"勝利の女神：NIKKE NivelArenaブースターパックBT01〈エンカウンター〉" //PRODUCT
		],
	[
		"BT01-054", //ID  
		"img/card/BT01-054.png", //SRC
		"アトラスパターンガントレット", //NAME  
		"アイテム", //TYPE  
		"大地", //ELEMENT  
		"4", //COST  
		"C", //RARE  
		"", //POWER  
		"", //HIT  
		"", //BELONG  
		"", //KEYWORD  
		"", //JP_TRIGGER  
		"장착조건 없음<br><br>パワー+5000。", //JP_TEXT  
		"", //TW_TRIGGER
		"【裝備條件：無】<br><br>戰力 +5000。", //TW_TEXT
		"勝利の女神：NIKKE NivelArenaブースターパックBT01〈エンカウンター〉" //PRODUCT
		],
	[
		"BT01-055", //ID
		"img/card/BT01-055.png", //SRC
		"シンデレラ", //NAME
		"リーダー", //TYPE
		"嵐", //ELEMENT
		"", //COST
		"L", //RARE
		"", //POWER
		"", //HIT
		"ピルグリム", //BELONG
		"パッシブ", //KEYWORD
		"", //JP_TRIGGER
		"基本面<br><br>서약 自分は폭풍のカードのみをデッキに入れることができる。<br><br>각성 自分のリーダーレベルが5以上の場合、このカードを裏返す。<br><br>覚醒面<br><br>패시브 自分と相手のターンに1回ずつ、フィールドにあるコスト5以上の自分のユニットがトラッシュされたなら、1枚ドローする。", //JP_TEXT
		"", //TW_TRIGGER
		"基本面<br><br>【誓約】自己的牌組只能放入🟪屬性的卡片。<br><br>【覺醒】當自己的領袖等級達 5 以上時，翻轉此卡。<br><br>覺醒面<br><br>【被動】雙方的回合各 1 次，每當場上費用為 5 或以上的我方單位被棄置，抽 1 張牌。", //TW_TEXT
		"勝利の女神：NIKKE NivelArenaブースターパックBT01〈エンカウンター〉"  //PRODUCT
		],
	[
		"BT01-056", //ID  
		"img/card/BT01-056.png", //SRC
		"エーテル", //NAME  
		"ユニット", //TYPE  
		"嵐", //ELEMENT  
		"1", //COST  
		"C", //RARE  
		"1500", //POWER  
		"1", //HIT  
		"エフェクト / ミシリス", //BELONG  
		"エグジット", //KEYWORD  
		"", //JP_TRIGGER  
		"엑시트 フィールドにある相手のユニットを1枚選んでこのターンが終わるまでパワー-2000。", //JP_TEXT  
		"", //TW_TRIGGER
		"【離場】選擇場上 1 個敵方單位，直到此回合結束為止，戰力  -2000。", //TW_TEXT
		"勝利の女神：NIKKE NivelArenaブースターパックBT01〈エンカウンター〉" //PRODUCT
		],
	[
		"BT01-057", //ID  
		"img/card/BT01-057.png", //SRC
		"ミハラ", //NAME  
		"ユニット", //TYPE  
		"嵐", //ELEMENT  
		"1", //COST  
		"C", //RARE  
		"2500", //POWER  
		"1", //HIT  
		"ベース / ミシリス", //BELONG  
		"", //KEYWORD  
		"", //JP_TRIGGER  
		"", //JP_TEXT  
		"", //TW_TRIGGER
		"", //TW_TEXT
		"勝利の女神：NIKKE NivelArenaブースターパックBT01〈エンカウンター〉" //PRODUCT
		],
	[
		"BT01-058", //ID  
		"img/card/BT01-058.png", //SRC
		"メイデン‐シークレットナース", //NAME  
		"ユニット", //TYPE  
		"嵐", //ELEMENT  
		"1", //COST  
		"R", //RARE  
		"3500", //POWER  
		"1", //HIT  
		"エフェクト / エリシオン", //BELONG  
		"ディフェンダー", //KEYWORD  
		"", //JP_TRIGGER  
		"디펜더 自壊(このユニットが相手の攻撃を防御したなら、その攻撃を終了させ、このユニットをトラッシュする)。", //JP_TEXT  
		"", //TW_TRIGGER
		"【防禦者】終結（當此單位進行防禦宣告時，立即終止本次攻擊，並將此單位棄置）", //TW_TEXT
		"勝利の女神：NIKKE NivelArenaブースターパックBT01〈エンカウンター〉" //PRODUCT
		],
	[
		"BT01-059", //ID  
		"img/card/BT01-059.png", //SRC
		"シグナル", //NAME  
		"ユニット", //TYPE  
		"嵐", //ELEMENT  
		"2", //COST  
		"C", //RARE  
		"3500", //POWER  
		"1", //HIT  
		"ベース / エリシオン", //BELONG  
		"", //KEYWORD  
		"", //JP_TRIGGER  
		"", //JP_TEXT  
		"", //TW_TRIGGER
		"", //TW_TEXT
		"勝利の女神：NIKKE NivelArenaブースターパックBT01〈エンカウンター〉" //PRODUCT
		],
	[
		"BT01-060", //ID  
		"img/card/BT01-060.png", //SRC
		"アドミ", //NAME  
		"ユニット", //TYPE  
		"嵐", //ELEMENT  
		"2", //COST  
		"C", //RARE  
		"4500", //POWER  
		"1", //HIT  
		"エフェクト / ミシリス", //BELONG  
		"パッシブ", //KEYWORD  
		"", //JP_TRIGGER  
		"패시브 このユニットは自分の手札を1枚選んでトラッシュしないと攻撃できない。", //JP_TEXT  
		"", //TW_TRIGGER
		"【被動】此單位若要進行攻擊，必須選擇自己手牌中的 1 張牌棄置。", //TW_TEXT
		"勝利の女神：NIKKE NivelArenaブースターパックBT01〈エンカウンター〉" //PRODUCT
		],
	[
		"BT01-061", //ID  
		"img/card/BT01-061.png", //SRC
		"サクラ：ブルーム・イン・サマー", //NAME  
		"ユニット", //TYPE  
		"嵐", //ELEMENT  
		"2", //COST  
		"SR", //RARE  
		"2000", //POWER  
		"1", //HIT  
		"エフェクト / テトラ", //BELONG  
		"アクティブ", //KEYWORD  
		"", //JP_TRIGGER  
		"액티브메인 フィールドにある自分のユニットを2枚選び、その中の1枚をトラッシュする。他の1枚はこのターンが終わるまでパワー+2000。", //JP_TEXT  
		"", //TW_TRIGGER
		"【主動：主階段】選擇場上的 2 名我方單位，棄置其中 1 名單位。另一個單位直到回合結束為止戰力 +2000。", //TW_TEXT
		"勝利の女神：NIKKE NivelArenaブースターパックBT01〈エンカウンター〉" //PRODUCT
		],
	[
		"BT01-062", //ID  
		"img/card/BT01-062.png", //SRC
		"ユニ‐ラブリーピンク", //NAME  
		"ユニット", //TYPE  
		"嵐", //ELEMENT  
		"3", //COST  
		"C", //RARE  
		"4500", //POWER  
		"1", //HIT  
		"ベース / ミシリス", //BELONG  
		"", //KEYWORD  
		"", //JP_TRIGGER  
		"", //JP_TEXT  
		"", //TW_TRIGGER
		"", //TW_TEXT
		"勝利の女神：NIKKE NivelArenaブースターパックBT01〈エンカウンター〉" //PRODUCT
		],
	[
		"BT01-063", //ID  
		"img/card/BT01-063.png", //SRC
		"エクシア‐ゲーマーズ", //NAME  
		"ユニット", //TYPE  
		"嵐", //ELEMENT  
		"3", //COST  
		"C", //RARE  
		"3000", //POWER  
		"1", //HIT  
		"エフェクト / テトラ", //BELONG  
		"パッシブ", //KEYWORD  
		"", //JP_TRIGGER  
		"패시브 フィールドにある 엑시트 道連れを持つ自分のユニット全てのパワー+2000。", //JP_TEXT  
		"", //TW_TRIGGER
		"【被動】場上所有具有「 【離場】共滅 」的我方單位，戰力 +2000。", //TW_TEXT
		"勝利の女神：NIKKE NivelArenaブースターパックBT01〈エンカウンター〉" //PRODUCT  
		],
	[
		"BT01-064", //ID  
		"img/card/BT01-064.png", //SRC
		"プリバティ‐バンケット・プリンセス", //NAME  
		"ユニット", //TYPE  
		"嵐", //ELEMENT  
		"3", //COST  
		"R", //RARE  
		"3500", //POWER  
		"1", //HIT  
		"エフェクト / エリシオン", //BELONG  
		"エントリー", //KEYWORD  
		"", //JP_TRIGGER  
		"엔트리 自分の手札を2枚選んでトラッシュできる。トラッシュしたなら、対向ユニットをトラッシュする。", //JP_TEXT  
		"", //TW_TRIGGER
		"【入場】可以選擇棄置自己的 2 張手牌。若這麼做，將遭遇單位棄置。", //TW_TEXT
		"勝利の女神：NIKKE NivelArenaブースターパックBT01〈エンカウンター〉" //PRODUCT  
		],
	[
		"BT01-065", //ID  
		"img/card/BT01-065.png", //SRC
		"ユルハ", //NAME  
		"ユニット", //TYPE  
		"嵐", //ELEMENT  
		"4", //COST  
		"C", //RARE  
		"6500", //POWER  
		"2", //HIT  
		"エフェクト / テトラ", //BELONG  
		"パッシブ", //KEYWORD  
		"", //JP_TRIGGER  
		"패시브 このユニットは自分の手札を1枚選んでトラッシュしないと攻撃できない。", //JP_TEXT  
		"", //TW_TRIGGER
		"【被動】此單位若要進行攻擊，必須棄置自己手牌中的 1 張卡。", //TW_TEXT
		"勝利の女神：NIKKE NivelArenaブースターパックBT01〈エンカウンター〉" //PRODUCT  
		],
	[
		"BT01-066", //ID  
		"img/card/BT01-066.png", //SRC
		"ノベル‐ペンギンホームズ", //NAME  
		"ユニット", //TYPE  
		"嵐", //ELEMENT  
		"4", //COST  
		"C", //RARE  
		"4000", //POWER  
		"2", //HIT  
		"エフェクト / テトラ", //BELONG  
		"エグジット", //KEYWORD  
		"", //JP_TRIGGER  
		"엑시트 相手の手札が3枚以上ある場合、相手は手札を1枚選んでトラッシュする。", //JP_TEXT  
		"", //TW_TRIGGER
		"【離場】若對手的手牌數為 3 張或以上，則對手選擇 1 張手牌棄置。", //TW_TEXT
		"勝利の女神：NIKKE NivelArenaブースターパックBT01〈エンカウンター〉" //PRODUCT 
		],
	[
		"BT01-067", //ID  
		"img/card/BT01-067.png", //SRC
		"モラン", //NAME  
		"ユニット", //TYPE  
		"嵐", //ELEMENT  
		"4", //COST  
		"R", //RARE  
		"5000", //POWER  
		"2", //HIT  
		"エフェクト / テトラ", //BELONG  
		"エグジット", //KEYWORD  
		"", //JP_TRIGGER  
		"엑시트 道連れ(このユニットを戦闘でトラッシュした相手のユニットのコストがこのカードのコスト以下の場合、そのユニットをトラッシュする)。", //JP_TEXT  
		"", //TW_TRIGGER
		"【離場】共滅（當此單位因戰鬥遭敵方單位棄置時，若該敵方單位的費用小於或等於此單位，則該單位也一併棄置。）", //TW_TEXT
		"勝利の女神：NIKKE NivelArenaブースターパックBT01〈エンカウンター〉" //PRODUCT  
		],
	[
		"BT01-068", //ID  
		"img/card/BT01-068.png", //SRC
		"D：キラーワイフ", //NAME  
		"ユニット", //TYPE  
		"嵐", //ELEMENT  
		"5", //COST  
		"R", //RARE  
		"5000", //POWER  
		"2", //HIT  
		"エフェクト / エリシオン", //BELONG  
		"エグジット", //KEYWORD  
		"", //JP_TRIGGER  
		"엑시트 2枚ドローし、その中の1枚を選んでトラッシュする。", //JP_TEXT  
		"", //TW_TRIGGER
		"【離場】抽 2 張牌，接著從中選擇 1 張棄置。", //TW_TEXT
		"勝利の女神：NIKKE NivelArenaブースターパックBT01〈エンカウンター〉" //PRODUCT  
		],
	[
		"BT01-069", //ID  
		"img/card/BT01-069.png", //SRC
		"ニヒリスター", //NAME  
		"ユニット", //TYPE  
		"嵐", //ELEMENT  
		"5", //COST  
		"SR", //RARE  
		"4500", //POWER  
		"2", //HIT  
		"エフェクト / ピルグリム", //BELONG  
		"エントリー", //KEYWORD  
		"", //JP_TRIGGER  
		"엔트리 対向ユニットがコスト2以下なら、そのユニットをトラッシュする。", //JP_TEXT  
		"", //TW_TRIGGER
		"【入場】若遭遇單位的費用為 2 或以下，則將其棄置。", //TW_TEXT
		"勝利の女神：NIKKE NivelArenaブースターパックBT01〈エンカウンター〉" //PRODUCT  
		],
	[
		"BT01-070", //ID  
		"img/card/BT01-070.png", //SRC
		"ギロチン", //NAME  
		"ユニット", //TYPE  
		"嵐", //ELEMENT  
		"6", //COST  
		"C", //RARE  
		"8500", //POWER  
		"2", //HIT  
		"エフェクト / エリシオン", //BELONG  
		"ディフェンダー", //KEYWORD  
		"", //JP_TRIGGER  
		"디펜더 自壊(このユニットが相手の攻撃を防御したなら、その攻撃を終了させ、このユニットをトラッシュする)。", //JP_TEXT  
		"", //TW_TRIGGER
		"【防禦者】終結（當此單位進行防禦宣告時，立即終止本次攻擊，並將此單位棄置）", //TW_TEXT
		"勝利の女神：NIKKE NivelArenaブースターパックBT01〈エンカウンター〉" //PRODUCT 
		],
	[
		"BT01-071", //ID  
		"img/card/BT01-071.png", //SRC
		"ロザンナ：シックオーシャン", //NAME  
		"ユニット", //TYPE  
		"嵐", //ELEMENT  
		"6", //COST  
		"SR", //RARE  
		"7000", //POWER  
		"2", //HIT  
		"エフェクト / テトラ", //BELONG  
		"エントリー", //KEYWORD  
		"トリガー / このカードを自分の手札に加える。", //JP_TRIGGER  
		"엔트리 フィールドにある自分のユニットを1枚選んでトラッシュする。その後、1枚ドローする。", //JP_TEXT  
		"【Trigger】／將此卡加入自己的手牌。", //TW_TRIGGER
		"【入場】選擇場上一個我方單位棄置。抽 1 張牌。", //TW_TEXT
		"勝利の女神：NIKKE NivelArenaブースターパックBT01〈エンカウンター〉" //PRODUCT  
		],
	[
		"BT01-072", //ID  
		"img/card/BT01-072.png", //SRC
		"モダニア‐セカンド・アフェクション", //NAME  
		"ユニット", //TYPE  
		"嵐", //ELEMENT  
		"7", //COST  
		"R", //RARE  
		"7000", //POWER  
		"3", //HIT  
		"エフェクト / ピルグリム", //BELONG  
		"パッシブ", //KEYWORD  
		"", //JP_TRIGGER  
		"패시브 フィールドにある他の自分のユニット全ては「 엑시트 1枚ドローする」を得る。", //JP_TEXT  
		"", //TW_TRIGGER
		"【被動】我方場上的其他單位獲得「 【離場】抽 1 張牌 」。", //TW_TEXT
		"勝利の女神：NIKKE NivelArenaブースターパックBT01〈エンカウンター〉" //PRODUCT  
		],
	[
		"BT01-073", //ID  
		"img/card/BT01-073.png", //SRC
		"シンデレラ", //NAME  
		"ユニット", //TYPE  
		"嵐", //ELEMENT  
		"8", //COST  
		"UR", //RARE  
		"7500", //POWER  
		"3", //HIT  
		"エフェクト / ピルグリム", //BELONG  
		"エントリー", //KEYWORD  
		"トリガー / このカードをトラッシュする。相手の手札が3枚以上ある場合、相手は手札を1枚選んでトラッシュする。", //JP_TRIGGER  
		"엔트리 自分の手札から対向ユニットのコストより高いコストを持つユニットカードを1枚選んでトラッシュできる。トラッシュしたなら、対向ユニットをトラッシュする。", //JP_TEXT  
		"【Trigger】／將此卡棄置。若對手的手牌數為 3 張或以上，則對手選擇 1 張手牌棄置。", //TW_TRIGGER
		"【入場】可以從自己的手牌中選擇 1 張費用高於遭遇單位的單位卡棄置。若這麼做，則將遭遇單位棄置。", //TW_TEXT
		"勝利の女神：NIKKE NivelArenaブースターパックBT01〈エンカウンター〉" //PRODUCT  
		],
	[
		"BT01-074", //ID  
		"img/card/BT01-074.png", //SRC
		"シークレットコード", //NAME  
		"スキル", //TYPE  
		"嵐", //ELEMENT  
		"2", //COST  
		"C", //RARE  
		"", //POWER  
		"", //HIT  
		"", //BELONG  
		"", //KEYWORD  
		"トリガー / このカードを自分の手札に加える。", //JP_TRIGGER  
		"フィールドにある自分のユニットを1枚選んでトラッシュする。そのユニットのヒット分ドローする。", //JP_TEXT  
		"【Trigger】／將此卡加入自己的手牌。", //TW_TRIGGER
		"選擇自己場上的 1 個單位棄置。抽取與該單位命中相同張數的卡牌。", //TW_TEXT
		"勝利の女神：NIKKE NivelArenaブースターパックBT01〈エンカウンター〉" //PRODUCT  
		],
	[
		"BT01-075", //ID  
		"img/card/BT01-075.png", //SRC
		"バーニングショット", //NAME  
		"スキル", //TYPE  
		"嵐", //ELEMENT  
		"2", //COST  
		"C", //RARE  
		"", //POWER  
		"", //HIT  
		"", //BELONG  
		"", //KEYWORD  
		"", //JP_TRIGGER  
		"自分の手札を1枚選んでトラッシュする。そのカードと同じコストを持つ、フィールドにあるユニットを1枚選んでトラッシュする。", //JP_TEXT  
		"", //TW_TRIGGER
		"選擇自己 1 張手牌棄置。選擇場上 1 個費用與該卡相同的單位棄置。", //TW_TEXT
		"勝利の女神：NIKKE NivelArenaブースターパックBT01〈エンカウンター〉" //PRODUCT  
		],
	[
		"BT01-076", //ID  
		"img/card/BT01-076.png", //SRC
		"魔界黒龍波", //NAME  
		"スキル", //TYPE  
		"嵐", //ELEMENT  
		"2", //COST  
		"C", //RARE  
		"", //POWER  
		"", //HIT  
		"", //BELONG  
		"", //KEYWORD  
		"", //JP_TRIGGER  
		"フィールドにある 엑시트 道連れを持つ自分のユニットを1枚選んでこのターンが終わるまでパワー+4500。", //JP_TEXT  
		"", //TW_TRIGGER
		"選擇場上 1 個具有的「【離場】共滅」的我方單位，直到回合結束為止，該單位戰力 +4500。", //TW_TEXT
		"勝利の女神：NIKKE NivelArenaブースターパックBT01〈エンカウンター〉" //PRODUCT  
		],
	[
		"BT01-077", //ID  
		"img/card/BT01-077.png", //SRC
		"ここは俺に任せろ！", //NAME  
		"スキル", //TYPE  
		"嵐", //ELEMENT  
		"3", //COST  
		"C", //RARE  
		"", //POWER  
		"", //HIT  
		"", //BELONG  
		"", //KEYWORD  
		"", //JP_TRIGGER  
		"フィールドにあるユニットを1枚選び、選んだユニットのヒット分自分の手札をトラッシュする。その後、そのユニットをトラッシュする。", //JP_TEXT  
		"", //TW_TRIGGER
		"選擇場上 1 個單位。將與該單位命中數相同張數的手牌棄置，接著將該單位棄置。", //TW_TEXT
		"勝利の女神：NIKKE NivelArenaブースターパックBT01〈エンカウンター〉" //PRODUCT  
		],
	[
		"BT01-078", //ID  
		"img/card/BT01-078.png", //SRC
		"ビューティーフルショット", //NAME  
		"スキル", //TYPE  
		"嵐", //ELEMENT  
		"4", //COST  
		"C", //RARE  
		"", //POWER  
		"", //HIT  
		"", //BELONG  
		"", //KEYWORD  
		"トリガー / このカードをトラッシュする。自分のトラッシュゾーンから 엑시트 を持つユニットカードを1枚選んで手札に加える。", //JP_TRIGGER  
		"コストの合計が4以下になるように、フィールドにある相手のユニットを2枚まで選んでそのユニットを全てトラッシュする。", //JP_TEXT  
		"【Trigger】／將此卡棄置。從自己的棄置區中，選擇 1 張具有【離場】的單位加入手牌。", //TW_TRIGGER
		"選擇場上最多2個敵方單位棄置，所選單位的費用合計不能超過4。", //TW_TEXT
		"勝利の女神：NIKKE NivelArenaブースターパックBT01〈エンカウンター〉" //PRODUCT  
		],
	[
		"BT01-079", //ID  
		"img/card/BT01-079.png", //SRC
		"EXマガジン", //NAME  
		"スキル", //TYPE  
		"嵐", //ELEMENT  
		"5", //COST  
		"C", //RARE  
		"", //POWER  
		"", //HIT  
		"", //BELONG  
		"", //KEYWORD  
		"", //JP_TRIGGER  
		"自分のトラッシュゾーンから 엑시트 を持つコスト2以下のユニットカードを2枚まで選んで手札に加える。", //JP_TEXT  
		"", //TW_TRIGGER
		"從自己的棄置區中，選擇最多2張費用為2或以下且擁有【離場】的單位卡，加入手牌。", //TW_TEXT
		"勝利の女神：NIKKE NivelArenaブースターパックBT01〈エンカウンター〉" //PRODUCT  
		],
	[
		"BT01-080", //ID  
		"img/card/BT01-080.png", //SRC
		"ガッデシアムバイザー", //NAME  
		"アイテム", //TYPE  
		"嵐", //ELEMENT  
		"2", //COST  
		"C", //RARE  
		"", //POWER  
		"", //HIT  
		"", //BELONG  
		"エグジット", //KEYWORD  
		"", //JP_TRIGGER  
		"장착조건 없음<br><br>엑시트 2枚ドローする。", //JP_TEXT  
		"", //TW_TRIGGER
		"【裝備條件：無】<br><br>【離場】抽 2 張牌。", //TW_TEXT
		"勝利の女神：NIKKE NivelArenaブースターパックBT01〈エンカウンター〉" //PRODUCT  
		],
	[
		"BT01-081", //ID
		"img/card/BT01-081.png", //SRC
		"チタンマターブーツ", //NAME
		"アイテム", //TYPE
		"嵐", //ELEMENT
		"3", //COST
		"C", //RARE
		"", //POWER
		"", //HIT
		"", //BELONG
		"エグジット", //KEYWORD
		"", //JP_TRIGGER
		"장착조건 엑시트<br><br>엑시트 帰還(このターンの終了時、このユニットカードを自分のトラッシュゾーンから手札に加える)。", //JP_TEXT
		"", //TW_TRIGGER
		"【裝備條件：具有【離場】的單位】<br><br>【離場】返還（此回合結束時，該單位從自己的棄置區回到手牌）", //TW_TEXT
		"勝利の女神：NIKKE NivelArenaブースターパックBT01〈エンカウンター〉" //PRODUCT
		],
	[
		"ST04-001", //ID
		"http://nivelarena.jp/data/file/cardlists/cfbf01727a7e461ec5930f5d552f8bff_8xvbQJuS_b2be88a3e7e288cabce7361fd4b427fe12bd42e4.png", //SRC
		"ドロシー", //NAME
		"リーダー", //TYPE
		"波濤", //ELEMENT
		"", //COST
		"L", //RARE
		"", //POWER
		"", //HIT
		"ピルグリム", //BELONG
		"パッシブ", //KEYWORD
		"", //JP_TRIGGER
		"【基本面】<br>서약 自分は 파도 のカードのみをデッキに入れることができる。<br>각성 自分のリーダーレベルが4以上の場合、このカードを裏返す。<br><br>【覚醒面】<br>패시브 フィールドにある自分のユニット全ては相手のターンの間、パワー+1000。", //JP_TEXT
		"", //TW_TRIGGER
		"", //TW_TEXT
		"勝利の女神：NIKKE NivelArenaスターターデッキST04〈インヘルト〉" //PRODUCT
		],
	[
		"ST04-002", //ID
		"http://nivelarena.jp/data/file/cardlists/cfbf01727a7e461ec5930f5d552f8bff_8zwrZeFv_3cac0780c5fe40d8e78b9f7ca83bf032a913099d.png", //SRC
		"I-DOLL・フラワー", //NAME
		"ユニット", //TYPE
		"波濤", //ELEMENT
		"1", //COST
		"C", //RARE
		"2500", //POWER
		"1", //HIT
		"ベース / テトラ", //BELONG
		"", //KEYWORD
		"", //JP_TRIGGER
		"", //JP_TEXT
		"", //TW_TRIGGER
		"", //TW_TEXT
		"勝利の女神：NIKKE NivelArenaスターターデッキST04〈インヘルト〉" //PRODUCT
		],
	[
		"ST04-003", //ID
		"http://nivelarena.jp/data/file/cardlists/cfbf01727a7e461ec5930f5d552f8bff_I9hmyLzw_6fd0ebe2f5d9f799689c07314be32e75c57a0f66.png", //SRC
		"マリアン", //NAME
		"ユニット", //TYPE
		"波濤", //ELEMENT
		"1", //COST
		"C", //RARE
		"2000", //POWER
		"1", //HIT
		"エフェクト / エリシオン", //BELONG
		"ガーディアン", //KEYWORD
		"", //JP_TRIGGER
		"가디언 防壁[1](隣のレーンの相手のユニットが攻撃する場合、自分の手札を1枚選んでトラッシュしたなら、このユニットでその攻撃を防御する)。", //JP_TEXT
		"", //TW_TRIGGER
		"", //TW_TEXT
		"勝利の女神：NIKKE NivelArenaスターターデッキST04〈インヘルト〉" //PRODUCT
		],
	[
		"ST04-004", //ID
		"http://nivelarena.jp/data/file/cardlists/cfbf01727a7e461ec5930f5d552f8bff_uWEBAfYG_95ace953a1f6f76a921c20625ee9b66bbd8c5ea5.png", //SRC
		"ライ", //NAME
		"ユニット", //TYPE
		"波濤", //ELEMENT
		"2", //COST
		"C", //RARE
		"3500", //POWER
		"1", //HIT
		"ベース / テトラ", //BELONG
		"", //KEYWORD
		"", //JP_TRIGGER
		"", //JP_TEXT
		"", //TW_TRIGGER
		"", //TW_TEXT
		"勝利の女神：NIKKE NivelArenaスターターデッキST04〈インヘルト〉" //PRODUCT
		],
	[
		"ST04-005", //ID
		"http://nivelarena.jp/data/file/cardlists/cfbf01727a7e461ec5930f5d552f8bff_0FNPRHMu_cb72cef147a9b6f43f2da9827d2397c04077be96.png", //SRC
		"メアリー", //NAME
		"ユニット", //TYPE
		"波濤", //ELEMENT
		"2", //COST
		"C", //RARE
		"2500", //POWER
		"1", //HIT
		"エフェクト / テトラ", //BELONG
		"エントリー", //KEYWORD
		"", //JP_TRIGGER
		"엔트리 1枚ドローする。", //JP_TEXT
		"", //TW_TRIGGER
		"", //TW_TEXT
		"勝利の女神：NIKKE NivelArenaスターターデッキST04〈インヘルト〉" //PRODUCT
		],
	[
		"ST04-006", //ID
		"http://nivelarena.jp/data/file/cardlists/cfbf01727a7e461ec5930f5d552f8bff_uHyCfSBR_084d9822dbd3e1f17f0c132c18fb038e6eb9ffd4.png", //SRC
		"ノア", //NAME
		"ユニット", //TYPE
		"波濤", //ELEMENT
		"2", //COST
		"C", //RARE
		"2000", //POWER
		"1", //HIT
		"エフェクト / ピルグリム", //BELONG
		"ディフェンダー", //KEYWORD
		"", //JP_TRIGGER
		"디펜더 この防御が終わるまでパワー+3000。", //JP_TEXT
		"", //TW_TRIGGER
		"", //TW_TEXT
		"勝利の女神：NIKKE NivelArenaスターターデッキST04〈インヘルト〉" //PRODUCT
		],
	[
		"ST04-007", //ID
		"http://nivelarena.jp/data/file/cardlists/cfbf01727a7e461ec5930f5d552f8bff_ZLyhafkg_55acf413e40a8ba229cf2b939a1bf267c4f9c8f2.png", //SRC
		"アリス", //NAME
		"ユニット", //TYPE
		"波濤", //ELEMENT
		"3", //COST
		"SR", //RARE
		"3000", //POWER
		"1", //HIT
		"エフェクト / テトラ", //BELONG
		"アタッカー", //KEYWORD
		"トリガー / このカードを自分の手札に加える。", //JP_TRIGGER
		"어태커 突破[コスト4以上](コスト4以上の相手のユニットはこのユニットの攻撃を防御できない)。", //JP_TEXT
		"", //TW_TRIGGER
		"", //TW_TEXT
		"勝利の女神：NIKKE NivelArenaスターターデッキST04〈インヘルト〉" //PRODUCT
		],
	[
		"ST04-008", //ID
		"http://nivelarena.jp/data/file/cardlists/cfbf01727a7e461ec5930f5d552f8bff_nbVfJkOD_12df25f42e7fab0c9d2ad40bfb96a0338b4d2e84.png", //SRC
		"ルドミラ", //NAME
		"ユニット", //TYPE
		"波濤", //ELEMENT
		"4", //COST
		"R", //RARE
		"5000", //POWER
		"2", //HIT
		"エフェクト / テトラ", //BELONG
		"ガーディアン", //KEYWORD
		"", //JP_TRIGGER
		"가디언 防壁[2](隣のレーンの相手のユニットが攻撃する場合、自分の手札を2枚選んでトラッシュしたなら、このユニットでその攻撃を防御する)。", //JP_TEXT
		"", //TW_TRIGGER
		"", //TW_TEXT
		"勝利の女神：NIKKE NivelArenaスターターデッキST04〈インヘルト〉" //PRODUCT
		],
	[
		"ST04-009", //ID
		"http://nivelarena.jp/data/file/cardlists/cfbf01727a7e461ec5930f5d552f8bff_lmR97yCH_b24c6d470dd2bc1ed566fb40bd947a81a5dfdb52.png", //SRC
		"マスト", //NAME
		"ユニット", //TYPE
		"波濤", //ELEMENT
		"5", //COST
		"C", //RARE
		"6500", //POWER
		"2", //HIT
		"ベース / エリシオン", //BELONG
		"", //KEYWORD
		"", //JP_TRIGGER
		"", //JP_TEXT
		"", //TW_TRIGGER
		"", //TW_TEXT
		"勝利の女神：NIKKE NivelArenaスターターデッキST04〈インヘルト〉" //PRODUCT
		],
	[
		"ST04-010", //ID
		"http://nivelarena.jp/data/file/cardlists/cfbf01727a7e461ec5930f5d552f8bff_yf2z6vAL_9fdd0c374e5fdd783e06eafe983d7adfc8579abe.png", //SRC
		"ヘルム", //NAME
		"ユニット", //TYPE
		"波濤", //ELEMENT
		"6", //COST
		"R", //RARE
		"5000", //POWER
		"2", //HIT
		"エフェクト / エリシオン", //BELONG
		"パッシブ", //KEYWORD
		"", //JP_TRIGGER
		"패시브 フィールドにある가디언を持つ自分のユニット全てのパワー+2000。", //JP_TEXT
		"", //TW_TRIGGER
		"", //TW_TEXT
		"勝利の女神：NIKKE NivelArenaスターターデッキST04〈インヘルト〉" //PRODUCT
		],
	[
		"ST04-011", //ID
		"http://nivelarena.jp/data/file/cardlists/cfbf01727a7e461ec5930f5d552f8bff_26Gv9s3c_49bc3d7560e936750d4067cc1add56083703789c.png", //SRC
		"ドロシー", //NAME
		"ユニット", //TYPE
		"波濤", //ELEMENT
		"7", //COST
		"SR", //RARE
		"7000", //POWER
		"3", //HIT
		"エフェクト / ピルグリム", //BELONG
		"ディフェンダー、 ガーディアン", //KEYWORD
		"", //JP_TRIGGER
		"가디언 防壁[3](隣のレーンの相手のユニットが攻撃する場合、自分の手札を3枚選んでトラッシュしたなら、このユニットでその攻撃を防御する)。<br>디펜더 この防御が終わるまでパワー+2000。", //JP_TEXT
		"", //TW_TRIGGER
		"", //TW_TEXT
		"勝利の女神：NIKKE NivelArenaスターターデッキST04〈インヘルト〉" //PRODUCT
		],
	[
		"ST04-012", //ID
		"http://nivelarena.jp/data/file/cardlists/cfbf01727a7e461ec5930f5d552f8bff_Yi1ZwPMA_144e739dd8539fb20c8514f8ae336ea105ea8482.png", //SRC
		"先輩の応援", //NAME
		"スキル", //TYPE
		"波濤", //ELEMENT
		"1", //COST
		"C", //RARE
		"", //POWER
		"", //HIT
		"", //BELONG
		"", //KEYWORD
		"", //JP_TRIGGER
		"フィールドにある가디언を持つ自分のユニットを1枚選び、相手のターンが終わるまでパワー+2000。", //JP_TEXT
		"", //TW_TRIGGER
		"", //TW_TEXT
		"勝利の女神：NIKKE NivelArenaスターターデッキST04〈インヘルト〉" //PRODUCT
		],
	[
		"ST04-013", //ID
		"http://nivelarena.jp/data/file/cardlists/cfbf01727a7e461ec5930f5d552f8bff_dE17xOSJ_ce1674b36c20617e5dd24bc6984f01347370aa70.png", //SRC
		"ムカつくでしょう？", //NAME
		"スキル", //TYPE
		"波濤", //ELEMENT
		"2", //COST
		"C", //RARE
		"", //POWER
		"", //HIT
		"", //BELONG
		"", //KEYWORD
		"トリガー / このカードをトラッシュする。1枚ドローする。", //JP_TRIGGER
		"フィールドにある가디언を持つ自分のユニットを1枚選び、このターンが終わるまでヒット+1。", //JP_TEXT
		"", //TW_TRIGGER
		"", //TW_TEXT
		"勝利の女神：NIKKE NivelArenaスターターデッキST04〈インヘルト〉" //PRODUCT
		],
	[
		"ST04-014", //ID
		"http://nivelarena.jp/data/file/cardlists/cfbf01727a7e461ec5930f5d552f8bff_Jt8rbjKR_0655acca0e0d76928a4ccd06a2202c639d2f1add.png", //SRC
		"ナーシング", //NAME
		"スキル", //TYPE
		"波濤", //ELEMENT
		"3", //COST
		"C", //RARE
		"", //POWER
		"", //HIT
		"", //BELONG
		"", //KEYWORD
		"", //JP_TRIGGER
		"2枚ドローする。", //JP_TEXT
		"", //TW_TRIGGER
		"", //TW_TEXT
		"勝利の女神：NIKKE NivelArenaスターターデッキST04〈インヘルト〉" //PRODUCT
		],
	[
		"ST04-015", //ID
		"http://nivelarena.jp/data/file/cardlists/cfbf01727a7e461ec5930f5d552f8bff_Kvzn6t2B_9ddd3af3a0ba508cfebf7895277003dfa8a91619.png", //SRC
		"失楽園", //NAME
		"スキル", //TYPE
		"波濤", //ELEMENT
		"4", //COST
		"C", //RARE
		"", //POWER
		"", //HIT
		"", //BELONG
		"", //KEYWORD
		"トリガー / このカードをトラッシュする。フィールドにある一番低いコストを持つ相手のユニットを1枚選んで、そのユニットと装備しているアイテム全てを持ち主の手札に戻す。", //JP_TRIGGER
		"フィールドにある가디언を持つ自分のユニットを1枚選ぶ。選んだユニットはこのターンが終わるまで어태커 突破(相手のユニットはこのユニットの攻撃を防御できない)を得る。", //JP_TEXT
		"", //TW_TRIGGER
		"", //TW_TEXT
		"勝利の女神：NIKKE NivelArenaスターターデッキST04〈インヘルト〉" //PRODUCT
		],
	[
		"ST04-016", //ID
		"http://nivelarena.jp/data/file/cardlists/cfbf01727a7e461ec5930f5d552f8bff_VL0HXwtJ_9fc96d4f07d177c96ce60bd8cd39bdceed870f5d.png", //SRC
		"ケブラージャケット", //NAME
		"アイテム", //TYPE
		"波濤", //ELEMENT
		"1", //COST
		"C", //RARE
		"", //POWER
		"", //HIT
		"", //BELONG
		"ディフェンダー", //KEYWORD
		"", //JP_TRIGGER
		"장착 조건: 없음<br>디펜더 この防御が終わるまでパワー+2000。", //JP_TEXT
		"", //TW_TRIGGER
		"", //TW_TEXT
		"勝利の女神：NIKKE NivelArenaスターターデッキST04〈インヘルト〉" //PRODUCT
		],
	[
		"ST04-017", //ID
		"http://nivelarena.jp/data/file/cardlists/cfbf01727a7e461ec5930f5d552f8bff_PRr76oq5_258f5c4f609daeacbe9814052bb76da1f4b0b9bc.png", //SRC
		"レアメタルグローブ", //NAME
		"アイテム", //TYPE
		"波濤", //ELEMENT
		"2", //COST
		"C", //RARE
		"", //POWER
		"", //HIT
		"", //BELONG
		"アクティブ", //KEYWORD
		"トリガー / このカードをトラッシュする。1枚ドローする。", //JP_TRIGGER
		"장착 조건: 디펜더를 가진 유닛<br>액티브: 메인 1枚ドローする。", //JP_TEXT
		"", //TW_TRIGGER
		"", //TW_TEXT
		"勝利の女神：NIKKE NivelArenaスターターデッキST04〈インヘルト〉" //PRODUCT
		],
	[
		"ST05-001", //ID
		"http://nivelarena.jp/data/file/cardlists/cfbf01727a7e461ec5930f5d552f8bff_7Y1Oi4ns_b0d7da22b4bc333f7caf517a95c7c35ba9330c65.png", //SRC
		"プリバティ：アンカインド・メイド", //NAME
		"リーダー", //TYPE
		"稲妻", //ELEMENT
		"", //COST
		"L", //RARE
		"", //POWER
		"", //HIT
		"エリシオン", //BELONG
		"パッシブ", //KEYWORD
		"", //JP_TRIGGER
		"【基本面】<br>서약 自分は 번개 のカードのみをデッキに入れることができる。<br>각성 自分のリーダーレベルが5以上の場合、このカードを裏返す。<br><br>【覚醒面】<br>패시브 フィールドにある 암드 を持つ自分のユニット全てのパワー+1000。", //JP_TEXT
		"", //TW_TRIGGER
		"", //TW_TEXT
		"勝利の女神：NIKKE NivelArenaスターターデッキST05〈メイド・フォー・ユー〉" //PRODUCT
		],
	[
		"ST05-002", //ID
		"http://nivelarena.jp/data/file/cardlists/cfbf01727a7e461ec5930f5d552f8bff_lAfk1guS_34581b992ae6c4d6f213c1979a178538550c4176.png", //SRC
		"プロダクト08", //NAME
		"ユニット", //TYPE
		"稲妻", //ELEMENT
		"1", //COST
		"C", //RARE
		"3000", //POWER
		"1", //HIT
		"ベース / ミシリス", //BELONG
		"", //KEYWORD
		"", //JP_TRIGGER
		"", //JP_TEXT
		"", //TW_TRIGGER
		"", //TW_TEXT
		"勝利の女神：NIKKE NivelArenaスターターデッキST05〈メイド・フォー・ユー〉" //PRODUCT
		],
	[
		"ST05-003", //ID
		"http://nivelarena.jp/data/file/cardlists/cfbf01727a7e461ec5930f5d552f8bff_5qQf4XJE_8d33011394e23bf44d578deb516b1d9487009920.png", //SRC
		"シュガー", //NAME
		"ユニット", //TYPE
		"稲妻", //ELEMENT
		"1", //COST
		"C", //RARE
		"2500", //POWER
		"1", //HIT
		"エフェクト / テトラ", //BELONG
		"エントリー", //KEYWORD
		"", //JP_TRIGGER
		"엔트리 1枚ドローする。その後、自分の手札を1枚選んでトラッシュする。", //JP_TEXT
		"", //TW_TRIGGER
		"", //TW_TEXT
		"勝利の女神：NIKKE NivelArenaスターターデッキST05〈メイド・フォー・ユー〉" //PRODUCT
		],
	[
		"ST05-004", //ID
		"http://nivelarena.jp/data/file/cardlists/cfbf01727a7e461ec5930f5d552f8bff_P1oJglK0_e07064d660542a4df86b5412d98f8bb3c6569495.png", //SRC
		"プリム", //NAME
		"ユニット", //TYPE
		"稲妻", //ELEMENT
		"2", //COST
		"C", //RARE
		"4000", //POWER
		"1", //HIT
		"ベース / テトラ", //BELONG
		"", //KEYWORD
		"", //JP_TRIGGER
		"", //JP_TEXT
		"", //TW_TRIGGER
		"", //TW_TEXT
		"勝利の女神：NIKKE NivelArenaスターターデッキST05〈メイド・フォー・ユー〉" //PRODUCT
		],
	[
		"ST05-005", //ID
		"http://nivelarena.jp/data/file/cardlists/cfbf01727a7e461ec5930f5d552f8bff_b1zihjlM_d92dffa2264d6b3f9aa3b19edb1c4a7ebcd4dc6b.png", //SRC
		"マクスウェル", //NAME
		"ユニット", //TYPE
		"稲妻", //ELEMENT
		"2", //COST
		"C", //RARE
		"3500", //POWER
		"1", //HIT
		"エフェクト / ミシリス", //BELONG
		"アームド", //KEYWORD
		"", //JP_TRIGGER
		"암드 アイテムを装備している場合、パワー+1000。", //JP_TEXT
		"", //TW_TRIGGER
		"", //TW_TEXT
		"勝利の女神：NIKKE NivelArenaスターターデッキST05〈メイド・フォー・ユー〉" //PRODUCT
		],
	[
		"ST05-006", //ID
		"http://nivelarena.jp/data/file/cardlists/cfbf01727a7e461ec5930f5d552f8bff_NOKdlegQ_a57ca262828cc294c73212788b23bc514ed6b9df.png", //SRC
		"クラウン", //NAME
		"ユニット", //TYPE
		"稲妻", //ELEMENT
		"3", //COST
		"SR", //RARE
		"3000", //POWER
		"1", //HIT
		"エフェクト / ピルグリム", //BELONG
		"エントリー", //KEYWORD
		"トリガー / このカードをトラッシュする。自分のデッキからコスト1以下のアイテムカードを1枚選んで手札に加える。デッキをシャッフルする。", //JP_TRIGGER
		"엔트리 自分のデッキからコスト2のアイテムカードを1枚選んで手札に加える。デッキをシャッフルする。", //JP_TEXT
		"", //TW_TRIGGER
		"", //TW_TEXT
		"勝利の女神：NIKKE NivelArenaスターターデッキST05〈メイド・フォー・ユー〉" //PRODUCT
		],
	[
		"ST05-007", //ID
		"http://nivelarena.jp/data/file/cardlists/cfbf01727a7e461ec5930f5d552f8bff_F9ImnM3N_d78308abbce7d9658582dddae27dd6d74c409829.png", //SRC
		"ソーダ", //NAME
		"ユニット", //TYPE
		"稲妻", //ELEMENT
		"3", //COST
		"R", //RARE
		"4000", //POWER
		"1", //HIT
		"エフェクト / テトラ", //BELONG
		"アームド", //KEYWORD
		"", //JP_TRIGGER
		"암드 装備しているアイテム1枚につき、パワー+1000。", //JP_TEXT
		"", //TW_TRIGGER
		"", //TW_TEXT
		"勝利の女神：NIKKE NivelArenaスターターデッキST05〈メイド・フォー・ユー〉" //PRODUCT
		],
	[
		"ST05-008", //ID
		"http://nivelarena.jp/data/file/cardlists/cfbf01727a7e461ec5930f5d552f8bff_GScJop4E_8a85e3880a17b1e76864e5b7d5018c3e45fc8e7d.png", //SRC
		"リター", //NAME
		"ユニット", //TYPE
		"稲妻", //ELEMENT
		"4", //COST
		"C", //RARE
		"5500", //POWER
		"2", //HIT
		"エフェクト / ミシリス", //BELONG
		"パッシブ", //KEYWORD
		"", //JP_TRIGGER
		"패시브 フィールドにある 암드 を持つ自分のユニット全てのパワー+1000。", //JP_TEXT
		"", //TW_TRIGGER
		"", //TW_TEXT
		"勝利の女神：NIKKE NivelArenaスターターデッキST05〈メイド・フォー・ユー〉" //PRODUCT
		],
	[
		"ST05-009", //ID
		"http://nivelarena.jp/data/file/cardlists/cfbf01727a7e461ec5930f5d552f8bff_hIGsVN0i_d2f9bf01130d4390ccf22faa2b8ab73c6a46c706.png", //SRC
		"ドレイク", //NAME
		"ユニット", //TYPE
		"稲妻", //ELEMENT
		"5", //COST
		"C", //RARE
		"7000", //POWER
		"2", //HIT
		"ベース / ミシリス", //BELONG
		"", //KEYWORD
		"", //JP_TRIGGER
		"", //JP_TEXT
		"", //TW_TRIGGER
		"", //TW_TEXT
		"勝利の女神：NIKKE NivelArenaスターターデッキST05〈メイド・フォー・ユー〉" //PRODUCT
		],
	[
		"ST05-010", //ID
		"http://nivelarena.jp/data/file/cardlists/cfbf01727a7e461ec5930f5d552f8bff_02Tk8zA4_5df3604cecefe29b798cde14132d4470daaf812d.png", //SRC
		"センチ", //NAME
		"ユニット", //TYPE
		"稲妻", //ELEMENT
		"6", //COST
		"R", //RARE
		"7000", //POWER
		"2", //HIT
		"エフェクト / ミシリス", //BELONG
		"アームド", //KEYWORD
		"", //JP_TRIGGER
		"암드 アイテムを装備している場合、パワー+2000。", //JP_TEXT
		"", //TW_TRIGGER
		"", //TW_TEXT
		"勝利の女神：NIKKE NivelArenaスターターデッキST05〈メイド・フォー・ユー〉" //PRODUCT
		],
	[
		"ST05-011", //ID
		"http://nivelarena.jp/data/file/cardlists/cfbf01727a7e461ec5930f5d552f8bff_TvKh1P3U_1917860f65ca42b337e2ac300698d28731d6992f.png", //SRC
		"プリバティ：アンカインド・メイド", //NAME
		"ユニット", //TYPE
		"稲妻", //ELEMENT
		"7", //COST
		"SR", //RARE
		"9000", //POWER
		"3", //HIT
		"エフェクト / エリシオン", //BELONG
		"アタッカー、 アームド", //KEYWORD
		"", //JP_TRIGGER
		"암드어태커 アイテムを装備している場合、相手は手札を1枚選んでトラッシュする。", //JP_TEXT
		"", //TW_TRIGGER
		"", //TW_TEXT
		"勝利の女神：NIKKE NivelArenaスターターデッキST05〈メイド・フォー・ユー〉" //PRODUCT
		],
	[
		"ST05-012", //ID
		"http://nivelarena.jp/data/file/cardlists/cfbf01727a7e461ec5930f5d552f8bff_V5Ar6cgm_dba0918f48fcbd615ad0ea4800ece070936bc2ad.png", //SRC
		"現場検討", //NAME
		"スキル", //TYPE
		"稲妻", //ELEMENT
		"2", //COST
		"C", //RARE
		"", //POWER
		"", //HIT
		"", //BELONG
		"", //KEYWORD
		"トリガー / このカードをトラッシュする。自分のデッキからコスト1以下のアイテムカードを1枚選んで手札に加える。デッキをシャッフルする。", //JP_TRIGGER
		"自分のトラッシュゾーンからアイテムカードを1枚選んで手札に加える。", //JP_TEXT
		"", //TW_TRIGGER
		"", //TW_TEXT
		"勝利の女神：NIKKE NivelArenaスターターデッキST05〈メイド・フォー・ユー〉" //PRODUCT
		],
	[
		"ST05-013", //ID
		"http://nivelarena.jp/data/file/cardlists/cfbf01727a7e461ec5930f5d552f8bff_E5bpZl7W_27cc97755f4e882bfbf866fae7c0fe65f54d1183.png", //SRC
		"リターブースト", //NAME
		"スキル", //TYPE
		"稲妻", //ELEMENT
		"3", //COST
		"C", //RARE
		"", //POWER
		"", //HIT
		"", //BELONG
		"", //KEYWORD
		"", //JP_TRIGGER
		"フィールドにある自分のユニットを1枚選び、そのユニットが装備しているコスト1以上のアイテムの枚数分ドローする。", //JP_TEXT
		"", //TW_TRIGGER
		"", //TW_TEXT
		"勝利の女神：NIKKE NivelArenaスターターデッキST05〈メイド・フォー・ユー〉" //PRODUCT
		],
	[
		"ST05-014", //ID
		"http://nivelarena.jp/data/file/cardlists/cfbf01727a7e461ec5930f5d552f8bff_Kb7Bnv8G_61b48a20b1ae03c0d9619a1a7f3efbd2835594e5.png", //SRC
		"ワンフォーオール", //NAME
		"スキル", //TYPE
		"稲妻", //ELEMENT
		"4", //COST
		"C", //RARE
		"", //POWER
		"", //HIT
		"", //BELONG
		"", //KEYWORD
		"トリガー / このカードをトラッシュする。2枚ドローする。その後、自分の手札を2枚選んでトラッシュする。", //JP_TRIGGER
		"フィールドにあるアイテムを2枚以上装備している自分のユニットを1枚選んでトラッシュする。その後、フィールドにある相手のユニットを1枚選んでトラッシュする。", //JP_TEXT
		"", //TW_TRIGGER
		"", //TW_TEXT
		"勝利の女神：NIKKE NivelArenaスターターデッキST05〈メイド・フォー・ユー〉" //PRODUCT
		],
	[
		"ST05-015", //ID
		"http://nivelarena.jp/data/file/cardlists/cfbf01727a7e461ec5930f5d552f8bff_L78H5n6A_f5d3c7a5ffd49913f94b2e7d03639eafc7077406.png", //SRC
		"ケブラーゲイター", //NAME
		"アイテム", //TYPE
		"稲妻", //ELEMENT
		"1", //COST
		"C", //RARE
		"", //POWER
		"", //HIT
		"", //BELONG
		"", //KEYWORD
		"", //JP_TRIGGER
		"장착 조건: 없음<br><br>パワー+1500。", //JP_TEXT
		"", //TW_TRIGGER
		"", //TW_TEXT
		"勝利の女神：NIKKE NivelArenaスターターデッキST05〈メイド・フォー・ユー〉" //PRODUCT
		],
	[
		"ST05-016", //ID
		"http://nivelarena.jp/data/file/cardlists/cfbf01727a7e461ec5930f5d552f8bff_g4yzLTd9_8223d3ee0b70199928273df7b082d3800b853b66.png", //SRC
		"レアメタルガントレット", //NAME
		"アイテム", //TYPE
		"稲妻", //ELEMENT
		"2", //COST
		"C", //RARE
		"", //POWER
		"", //HIT
		"ユニーク", //BELONG
		"", //KEYWORD
		"", //JP_TRIGGER
		"장착 조건: 암드를 가진 유닛<br><br>ヒット+1。", //JP_TEXT
		"", //TW_TRIGGER
		"", //TW_TEXT
		"勝利の女神：NIKKE NivelArenaスターターデッキST05〈メイド・フォー・ユー〉" //PRODUCT
		],
	[
		"ST05-017", //ID
		"http://nivelarena.jp/data/file/cardlists/cfbf01727a7e461ec5930f5d552f8bff_5kYjdXS6_ec8684b4d5aebfffdddbc8d9a5fc402d4fc3aaaa.png", //SRC
		"レアメタルゲイター", //NAME
		"アイテム", //TYPE
		"稲妻", //ELEMENT
		"2", //COST
		"C", //RARE
		"", //POWER
		"", //HIT
		"", //BELONG
		"", //KEYWORD
		"", //JP_TRIGGER
		"장착 조건: 없음<br><br>パワー+2500。", //JP_TEXT
		"", //TW_TRIGGER
		"", //TW_TEXT
		"勝利の女神：NIKKE NivelArenaスターターデッキST05〈メイド・フォー・ユー〉" //PRODUCT
		],
	[
		"BT02-001", //ID
		"http://nivelarena.jp/data/file/cardlists/cfbf01727a7e461ec5930f5d552f8bff_WsyVlUJv_a1dc97d1fe083fad46b42511913a73324db19e22.png", //SRC
		"ボリューム‐ビート・ザ・ガン", //NAME
		"ユニット", //TYPE
		"炎", //ELEMENT
		"1", //COST
		"C", //RARE
		"2500", //POWER
		"1", //HIT
		"エフェクト / テトラ", //BELONG
		"エントリー", //KEYWORD
		"", //JP_TRIGGER
		"엔트리 このターンが終わるまで「어태커 この攻撃が終わるまでパワー+1500」を得る。", //JP_TEXT
		"", //TW_TRIGGER
		"", //TW_TEXT
		"勝利の女神：NIKKE NivelArenaブースターパックBT02〈ザ・キングダム〉" //PRODUCT
		],
	[
		"BT02-002", //ID
		"http://nivelarena.jp/data/file/cardlists/cfbf01727a7e461ec5930f5d552f8bff_zlYxK6Qv_ecb84064ef0015ddff17eb0f033c2bf30a7de977.png", //SRC
		"エマ‐オフィスセラピー", //NAME
		"ユニット", //TYPE
		"炎", //ELEMENT
		"3", //COST
		"C", //RARE
		"4500", //POWER
		"1", //HIT
		"エフェクト / エリシオン", //BELONG
		"エントリー", //KEYWORD
		"", //JP_TRIGGER
		"엔트리 フィールドにある自分のユニット全てはこのターンが終わるまで「어태커 この攻撃が終わるまでパワー+500」を得る。", //JP_TEXT
		"", //TW_TRIGGER
		"", //TW_TEXT
		"勝利の女神：NIKKE NivelArenaブースターパックBT02〈ザ・キングダム〉" //PRODUCT
		],
	[
		"BT02-003", //ID
		"http://nivelarena.jp/data/file/cardlists/cfbf01727a7e461ec5930f5d552f8bff_QXSDovg9_eafb1fe51def7ef9b54759a57d30cef102e271c9.png", //SRC
		"レッドフード‐ナンセンスレッド", //NAME
		"ユニット", //TYPE
		"炎", //ELEMENT
		"3", //COST
		"UR", //RARE
		"2500", //POWER
		"1", //HIT
		"エフェクト / ピルグリム", //BELONG
		"アタッカー", //KEYWORD
		"トリガー / このカードを自分の手札に加える。", //JP_TRIGGER
		"어태커 デュエリスト(対向ユニットは防御可能な状態であれば必ず防御しなければならない)。<br>어태커 この攻撃が終わるまでパワー+4000。", //JP_TEXT
		"", //TW_TRIGGER
		"", //TW_TEXT
		"勝利の女神：NIKKE NivelArenaブースターパックBT02〈ザ・キングダム〉" //PRODUCT
		],
	[
		"BT02-004", //ID
		"http://nivelarena.jp/data/file/cardlists/cfbf01727a7e461ec5930f5d552f8bff_3gaWP6Qy_920de3e61c943e235d891d5051c0f4fd3e629846.png", //SRC
		"ルージュ", //NAME
		"ユニット", //TYPE
		"炎", //ELEMENT
		"4", //COST
		"C", //RARE
		"6000", //POWER
		"2", //HIT
		"ベース / テトラ", //BELONG
		"", //KEYWORD
		"", //JP_TRIGGER
		"", //JP_TEXT
		"", //TW_TRIGGER
		"", //TW_TEXT
		"勝利の女神：NIKKE NivelArenaブースターパックBT02〈ザ・キングダム〉" //PRODUCT
		],
	[
		"BT02-005", //ID
		"http://nivelarena.jp/data/file/cardlists/cfbf01727a7e461ec5930f5d552f8bff_7Dqyn8s0_a1fea2454e78606d62c00ac55f333a2b26780abe.png", //SRC
		"ラプンツェル：ピュアグレイス", //NAME
		"ユニット", //TYPE
		"炎", //ELEMENT
		"5", //COST
		"R", //RARE
		"5500", //POWER
		"2", //HIT
		"エフェクト / ピルグリム", //BELONG
		"アタッカー", //KEYWORD
		"", //JP_TRIGGER
		"어태커 この攻撃が終わるまでパワー+3000。", //JP_TEXT
		"", //TW_TRIGGER
		"", //TW_TEXT
		"勝利の女神：NIKKE NivelArenaブースターパックBT02〈ザ・キングダム〉" //PRODUCT
		],
	[
		"BT02-006", //ID
		"http://nivelarena.jp/data/file/cardlists/cfbf01727a7e461ec5930f5d552f8bff_o3GXVEUF_333e7788024a5f95ea3d52b453ff8994913675ee.png", //SRC
		"バイパー‐トキシックラビット", //NAME
		"ユニット", //TYPE
		"炎", //ELEMENT
		"7", //COST
		"SR", //RARE
		"5500", //POWER
		"3", //HIT
		"エフェクト / テトラ", //BELONG
		"エントリー", //KEYWORD
		"", //JP_TRIGGER
		"엔트리 自分のトラッシュゾーンからコスト2以下のユニットカードを1枚選んで手札に加える。", //JP_TEXT
		"", //TW_TRIGGER
		"", //TW_TEXT
		"勝利の女神：NIKKE NivelArenaブースターパックBT02〈ザ・キングダム〉" //PRODUCT
		],
	[
		"BT02-007", //ID
		"http://nivelarena.jp/data/file/cardlists/cfbf01727a7e461ec5930f5d552f8bff_VMY62jwf_62191c602438b1c6872b3a55598903eb29814e7a.png", //SRC
		"グレアリングアイズ", //NAME
		"スキル", //TYPE
		"炎", //ELEMENT
		"3", //COST
		"R", //RARE
		"", //POWER
		"", //HIT
		"", //BELONG
		"", //KEYWORD
		"", //JP_TRIGGER
		"フィールドにある自分のユニット全てはこのターンが終わるまで 어태커 略奪[1](このユニットが攻撃した戦闘で相手のユニットをトラッシュしたなら、1枚ドローする)を得る。", //JP_TEXT
		"", //TW_TRIGGER
		"", //TW_TEXT
		"勝利の女神：NIKKE NivelArenaブースターパックBT02〈ザ・キングダム〉" //PRODUCT
		],
	[
		"BT02-008", //ID
		"http://nivelarena.jp/data/file/cardlists/cfbf01727a7e461ec5930f5d552f8bff_5bs2DUrV_e55780ab81cc98672a960f043b647e88a0e71044.png", //SRC
		"ザ・ゲームマスター", //NAME
		"スキル", //TYPE
		"炎", //ELEMENT
		"4", //COST
		"C", //RARE
		"", //POWER
		"", //HIT
		"", //BELONG
		"", //KEYWORD
		"", //JP_TRIGGER
		"自分のトラッシュゾーンからコスト7以上のユニットカードを1枚選んで手札に加える。", //JP_TEXT
		"", //TW_TRIGGER
		"", //TW_TEXT
		"勝利の女神：NIKKE NivelArenaブースターパックBT02〈ザ・キングダム〉" //PRODUCT
		],
	[
		"BT02-009", //ID
		"http://nivelarena.jp/data/file/cardlists/cfbf01727a7e461ec5930f5d552f8bff_FbPpJh2l_844e0ff05ee06104ae91b7da53279ecaa43d16e0.png", //SRC
		"ガッデシアムゲイター", //NAME
		"アイテム", //TYPE
		"炎", //ELEMENT
		"2", //COST
		"C", //RARE
		"", //POWER
		"", //HIT
		"", //BELONG
		"", //KEYWORD
		"トリガー / このカードをトラッシュする。自分のトラッシュゾーンからコスト2以下のユニットカードを1枚選んで手札に加える。", //JP_TRIGGER
		"장착 조건: 3코스트 이하인 유닛<br>パワー+4000。<br>バーサーカー(このユニットは攻撃可能な状態であれば必ず攻撃しなければならない)。", //JP_TEXT
		"", //TW_TRIGGER
		"", //TW_TEXT
		"勝利の女神：NIKKE NivelArenaブースターパックBT02〈ザ・キングダム〉" //PRODUCT
		],
	[
		"BT02-010", //ID
		"http://nivelarena.jp/data/file/cardlists/cfbf01727a7e461ec5930f5d552f8bff_r3OX4lBI_00920801e7aa10eccd8e697dc03427e98f7c02aa.png", //SRC
		"ディーゼル‐ブラックホリデー", //NAME
		"ユニット", //TYPE
		"大地", //ELEMENT
		"1", //COST
		"C", //RARE
		"2500", //POWER
		"1", //HIT
		"エフェクト / エリシオン", //BELONG
		"エントリー", //KEYWORD
		"", //JP_TRIGGER
		"엔트리 自分のデッキの上から1枚を公開し、その中の《ベース》を持つユニットカードを1枚手札に加える。残りはデッキに戻し、シャッフルする。", //JP_TEXT
		"", //TW_TRIGGER
		"", //TW_TEXT
		"勝利の女神：NIKKE NivelArenaブースターパックBT02〈ザ・キングダム〉" //PRODUCT
		],
	[
		"BT02-011", //ID
		"http://nivelarena.jp/data/file/cardlists/cfbf01727a7e461ec5930f5d552f8bff_bW1YVTKI_c76775106485274b616957abeb603b6dd1025a02.png", //SRC
		"マルチャーナ‐スクールデイズ", //NAME
		"ユニット", //TYPE
		"大地", //ELEMENT
		"3", //COST
		"R", //RARE
		"6500", //POWER
		"1", //HIT
		"ベース / エリシオン", //BELONG
		"", //KEYWORD
		"トリガー / このカードをトラッシュする。自分のリーダーレベル+1。", //JP_TRIGGER
		"", //JP_TEXT
		"", //TW_TRIGGER
		"", //TW_TEXT
		"勝利の女神：NIKKE NivelArenaブースターパックBT02〈ザ・キングダム〉" //PRODUCT
		],
	[
		"BT02-012", //ID
		"http://nivelarena.jp/data/file/cardlists/cfbf01727a7e461ec5930f5d552f8bff_qCQbx28s_5e57b1db673909fafc22ed4580699ddd00d9c63d.png", //SRC
		"ルピー‐ラグジュアリーラビット", //NAME
		"ユニット", //TYPE
		"大地", //ELEMENT
		"3", //COST
		"UR", //RARE
		"5500", //POWER
		"1", //HIT
		"エフェクト / テトラ", //BELONG
		"パッシブ", //KEYWORD
		"トリガー / このカードを自分の手札に加える。", //JP_TRIGGER
		"패시브 フィールドにある《ベース》を持つ自分のユニット1枚につき、ヒット+1。", //JP_TEXT
		"", //TW_TRIGGER
		"", //TW_TEXT
		"勝利の女神：NIKKE NivelArenaブースターパックBT02〈ザ・キングダム〉" //PRODUCT
		],
	[
		"BT02-013", //ID
		"http://nivelarena.jp/data/file/cardlists/cfbf01727a7e461ec5930f5d552f8bff_COY7dusX_fbd20734c47ec4057e5b2f8c7411e0e01679e194.png", //SRC
		"ティア‐ラブリーデート", //NAME
		"ユニット", //TYPE
		"大地", //ELEMENT
		"4", //COST
		"C", //RARE
		"5500", //POWER
		"2", //HIT
		"エフェクト / ミシリス", //BELONG
		"エントリー", //KEYWORD
		"", //JP_TRIGGER
		"엔트리 フィールドにある自分のユニットを1枚選び、このターンが終わるまでパワー+2000。", //JP_TEXT
		"", //TW_TRIGGER
		"", //TW_TEXT
		"勝利の女神：NIKKE NivelArenaブースターパックBT02〈ザ・キングダム〉" //PRODUCT
		],
	[
		"BT02-014", //ID
		"http://nivelarena.jp/data/file/cardlists/cfbf01727a7e461ec5930f5d552f8bff_t4qxzCTy_4bb4e8fbb5c96ac1d0a5294c6977c1850f0e92c8.png", //SRC
		"クエンシー：エスケープクイーン", //NAME
		"ユニット", //TYPE
		"大地", //ELEMENT
		"7", //COST
		"SR", //RARE
		"9500", //POWER
		"3", //HIT
		"ベース / ミシリス", //BELONG
		"", //KEYWORD
		"", //JP_TRIGGER
		"", //JP_TEXT
		"", //TW_TRIGGER
		"", //TW_TEXT
		"勝利の女神：NIKKE NivelArenaブースターパックBT02〈ザ・キングダム〉" //PRODUCT
		],
	[
		"BT02-015", //ID
		"http://nivelarena.jp/data/file/cardlists/cfbf01727a7e461ec5930f5d552f8bff_lkPNzivs_c5f8465a80617288430da6847aafd5fe0ee76e9f.png", //SRC
		"イチゴの香りの誘惑", //NAME
		"スキル", //TYPE
		"大地", //ELEMENT
		"1", //COST
		"C", //RARE
		"", //POWER
		"", //HIT
		"", //BELONG
		"", //KEYWORD
		"", //JP_TRIGGER
		"自分の全てのユニットゾーンにユニットがある場合、自分のリーダーレベル+1。", //JP_TEXT
		"", //TW_TRIGGER
		"", //TW_TEXT
		"勝利の女神：NIKKE NivelArenaブースターパックBT02〈ザ・キングダム〉" //PRODUCT
		],
	[
		"BT02-016", //ID
		"http://nivelarena.jp/data/file/cardlists/cfbf01727a7e461ec5930f5d552f8bff_xbde5uOA_842ce88680734697107c5e62df55c4f408fe754e.png", //SRC
		"素晴らしき大泥棒", //NAME
		"スキル", //TYPE
		"大地", //ELEMENT
		"2", //COST
		"R", //RARE
		"", //POWER
		"", //HIT
		"", //BELONG
		"", //KEYWORD
		"", //JP_TRIGGER
		"フィールドにあるアイテムを1枚選んでトラッシュする。", //JP_TEXT
		"", //TW_TRIGGER
		"", //TW_TEXT
		"勝利の女神：NIKKE NivelArenaブースターパックBT02〈ザ・キングダム〉" //PRODUCT
		],
	[
		"BT02-017", //ID
		"http://nivelarena.jp/data/file/cardlists/cfbf01727a7e461ec5930f5d552f8bff_OjD5v7iL_08b07984f4583b571d0ccfc96c144da77b5223d5.png", //SRC
		"保健室の先生", //NAME
		"スキル", //TYPE
		"大地", //ELEMENT
		"3", //COST
		"C", //RARE
		"", //POWER
		"", //HIT
		"", //BELONG
		"", //KEYWORD
		"", //JP_TRIGGER
		"フィールドにある《ベース》を持つ自分のユニット全ては相手のターンが終わるまでパワー+1500。", //JP_TEXT
		"", //TW_TRIGGER
		"", //TW_TEXT
		"勝利の女神：NIKKE NivelArenaブースターパックBT02〈ザ・キングダム〉" //PRODUCT
		],
	[
		"BT02-018", //ID
		"http://nivelarena.jp/data/file/cardlists/cfbf01727a7e461ec5930f5d552f8bff_L4a7Kurb_bec951b091eeaca47a9cbf72b49e57ab2fc07bb0.png", //SRC
		"アトラスパターンヘルメット", //NAME
		"アイテム", //TYPE
		"大地", //ELEMENT
		"3", //COST
		"C", //RARE
		"", //POWER
		"", //HIT
		"", //BELONG
		"", //KEYWORD
		"", //JP_TRIGGER
		"장착 조건: 베이스를 가진 유닛<br>ヒット+1。", //JP_TEXT
		"", //TW_TRIGGER
		"", //TW_TEXT
		"勝利の女神：NIKKE NivelArenaブースターパックBT02〈ザ・キングダム〉" //PRODUCT
		],
	[
		"BT02-019", //ID
		"http://nivelarena.jp/data/file/cardlists/cfbf01727a7e461ec5930f5d552f8bff_RBeNFtIn_3d634e517075f66f5879372e88b24d891c7a65de.png", //SRC
		"メイデン：アイスローズ", //NAME
		"ユニット", //TYPE
		"嵐", //ELEMENT
		"1", //COST
		"R", //RARE
		"1000", //POWER
		"1", //HIT
		"エフェクト / エリシオン", //BELONG
		"エグジット", //KEYWORD
		"", //JP_TRIGGER
		"엑시트 フィールドにある自分のユニットを1枚選び、このターンが終わるまでヒット+1。", //JP_TEXT
		"", //TW_TRIGGER
		"", //TW_TEXT
		"勝利の女神：NIKKE NivelArenaブースターパックBT02〈ザ・キングダム〉" //PRODUCT
		],
	[
		"BT02-020", //ID
		"http://nivelarena.jp/data/file/cardlists/cfbf01727a7e461ec5930f5d552f8bff_xyc9MgGO_aec791c82fe8ae391e43bd1e0192aef1bcaa5965.png", //SRC
		"ギロチン：ウィンタースレイヤー", //NAME
		"ユニット", //TYPE
		"嵐", //ELEMENT
		"3", //COST
		"C", //RARE
		"4000", //POWER
		"1", //HIT
		"エフェクト / エリシオン", //BELONG
		"パッシブ", //KEYWORD
		"", //JP_TRIGGER
		"패시브 フィールドにある他のユニットが1枚以上効果でトラッシュされるたびに、このターンが終わるまでパワー+1000。", //JP_TEXT
		"", //TW_TRIGGER
		"", //TW_TEXT
		"勝利の女神：NIKKE NivelArenaブースターパックBT02〈ザ・キングダム〉" //PRODUCT
		],
	[
		"BT02-021", //ID
		"http://nivelarena.jp/data/file/cardlists/cfbf01727a7e461ec5930f5d552f8bff_TVsjxcKk_eb5f6caa853f7cb351de8fb0a2c677c0c46716b8.png", //SRC
		"モダニア‐ファースト・アフェクション", //NAME
		"ユニット", //TYPE
		"嵐", //ELEMENT
		"4", //COST
		"SR", //RARE
		"6500", //POWER
		"2", //HIT
		"エフェクト / ピルグリム", //BELONG
		"ディフェンダー", //KEYWORD
		"", //JP_TRIGGER
		"디펜더 自壊(このユニットが相手の攻撃を防御したなら、その攻撃を終了させ、このユニットをトラッシュする)。", //JP_TEXT
		"", //TW_TRIGGER
		"", //TW_TEXT
		"勝利の女神：NIKKE NivelArenaブースターパックBT02〈ザ・キングダム〉" //PRODUCT
		],
	[
		"BT02-022", //ID
		"http://nivelarena.jp/data/file/cardlists/cfbf01727a7e461ec5930f5d552f8bff_yKj8VGTd_6efcc647a7cd6adbe791a61e299b8829d4b3d3e1.png", //SRC
		"グレイブ", //NAME
		"ユニット", //TYPE
		"嵐", //ELEMENT
		"5", //COST
		"SPR", //RARE
		"5000", //POWER
		"2", //HIT
		"エフェクト / ピルグリム", //BELONG
		"アクティブ", //KEYWORD
		"トリガー / このカードを自分の手札に加える。", //JP_TRIGGER
		"액티브: 메인 このターンの間、フィールドにて効果でトラッシュされた自分のユニットが2枚以上なら、相手に1ダメージを与える。", //JP_TEXT
		"", //TW_TRIGGER
		"", //TW_TEXT
		"勝利の女神：NIKKE NivelArenaブースターパックBT02〈ザ・キングダム〉" //PRODUCT
		],
	[
		"BT02-023", //ID
		"http://nivelarena.jp/data/file/cardlists/cfbf01727a7e461ec5930f5d552f8bff_MloIED2s_5c475f9cc4061b79fe1b12b6bcb15d78104e921c.png", //SRC
		"ファントム", //NAME
		"ユニット", //TYPE
		"嵐", //ELEMENT
		"6", //COST
		"C", //RARE
		"7500", //POWER
		"2", //HIT
		"ベース / エリシオン", //BELONG
		"", //KEYWORD
		"", //JP_TRIGGER
		"", //JP_TEXT
		"", //TW_TRIGGER
		"", //TW_TEXT
		"勝利の女神：NIKKE NivelArenaブースターパックBT02〈ザ・キングダム〉" //PRODUCT
		],
	[
		"BT02-024", //ID
		"http://nivelarena.jp/data/file/cardlists/cfbf01727a7e461ec5930f5d552f8bff_3acVOrKl_82da8f0768bc9d5035777f69370dfb500d74ac7c.png", //SRC
		"プリバティ‐ガバメントノーマル", //NAME
		"ユニット", //TYPE
		"嵐", //ELEMENT
		"7", //COST
		"C", //RARE
		"7000", //POWER
		"3", //HIT
		"エフェクト / エリシオン", //BELONG
		"エグジット", //KEYWORD
		"", //JP_TRIGGER
		"엑시트 道連れ(このユニットを戦闘でトラッシュした相手のユニットのコストがこのカードのコスト以下の場合、そのユニットをトラッシュする)。", //JP_TEXT
		"", //TW_TRIGGER
		"", //TW_TEXT
		"勝利の女神：NIKKE NivelArenaブースターパックBT02〈ザ・キングダム〉" //PRODUCT
		],
	[
		"BT02-025", //ID
		"http://nivelarena.jp/data/file/cardlists/cfbf01727a7e461ec5930f5d552f8bff_sUyalrqX_88e57b3356ac5fe234ae150ce7315762ef62fa69.png", //SRC
		"ライターズ・スポイラー", //NAME
		"スキル", //TYPE
		"嵐", //ELEMENT
		"2", //COST
		"R", //RARE
		"", //POWER
		"", //HIT
		"", //BELONG
		"", //KEYWORD
		"トリガー / このカードをトラッシュする。自分のトラッシュゾーンから 엑시트 を持つユニットカードを1枚選び、手札に加える。", //JP_TRIGGER
		"自分のトラッシュゾーンから 엑시트 を持つコスト2以下のユニットカードを1枚選んで手札に加える。", //JP_TEXT
		"", //TW_TRIGGER
		"", //TW_TEXT
		"勝利の女神：NIKKE NivelArenaブースターパックBT02〈ザ・キングダム〉" //PRODUCT
		],
	[
		"BT02-026", //ID
		"http://nivelarena.jp/data/file/cardlists/cfbf01727a7e461ec5930f5d552f8bff_lXFSYG4c_dae49e183caffeecb481c156764eb3984fc51d33.png", //SRC
		"新世界", //NAME
		"スキル", //TYPE
		"嵐", //ELEMENT
		"3", //COST
		"C", //RARE
		"", //POWER
		"", //HIT
		"", //BELONG
		"", //KEYWORD
		"", //JP_TRIGGER
		"自分の手札からユニットカードを1枚選んでトラッシュする。そのカードのヒット分ドローする。", //JP_TEXT
		"", //TW_TRIGGER
		"", //TW_TEXT
		"勝利の女神：NIKKE NivelArenaブースターパックBT02〈ザ・キングダム〉" //PRODUCT
		],
	[
		"BT02-027", //ID
		"http://nivelarena.jp/data/file/cardlists/cfbf01727a7e461ec5930f5d552f8bff_rCx9iPZw_2016cfbde00aa0b7f5cbc1e2df7b67221fb8c77c.png", //SRC
		"マタータイプ：αアームガード", //NAME
		"アイテム", //TYPE
		"嵐", //ELEMENT
		"1", //COST
		"C", //RARE
		"", //POWER
		"", //HIT
		"", //BELONG
		"パッシブ", //KEYWORD
		"", //JP_TRIGGER
		"장착 조건: 없음<br>パワー+4000。<br>패시브 相手のターンの終了時、このユニットをトラッシュする。", //JP_TEXT
		"", //TW_TRIGGER
		"", //TW_TEXT
		"勝利の女神：NIKKE NivelArenaブースターパックBT02〈ザ・キングダム〉" //PRODUCT
		],
	[
		"BT02-028", //ID
		"http://nivelarena.jp/data/file/cardlists/cfbf01727a7e461ec5930f5d552f8bff_miFpfTzd_9df0d6d256dd303721b9d8cd306cb1716c1bbe90.png", //SRC
		"ヘルム：アクアマリン", //NAME
		"リーダー", //TYPE
		"波濤", //ELEMENT
		"", //COST
		"L", //RARE
		"", //POWER
		"", //HIT
		"エリシオン", //BELONG
		"パッシブ", //KEYWORD
		"", //JP_TRIGGER
		"【基本面】<br>서약 自分は 파도 のカードのみをデッキに入れることができる。<br>각성 自分のリーダーレベルが5以上の場合、このカードを裏返す。<br><br>【覚醒面】<br>패시브 フィールドにある 가디언 を持つ自分のユニット全てのパワー+1000。", //JP_TEXT
		"", //TW_TRIGGER
		"", //TW_TEXT
		"勝利の女神：NIKKE NivelArenaブースターパックBT02〈ザ・キングダム〉" //PRODUCT
		],
	[
		"BT02-029", //ID
		"http://nivelarena.jp/data/file/cardlists/cfbf01727a7e461ec5930f5d552f8bff_nDIBCJu3_39980f1cacbf13e60c2d5d063d3aaba8b40a14e5.png", //SRC
		"ネヴェ", //NAME
		"ユニット", //TYPE
		"波濤", //ELEMENT
		"1", //COST
		"C", //RARE
		"1500", //POWER
		"1", //HIT
		"エフェクト / テトラ", //BELONG
		"ディフェンダー", //KEYWORD
		"", //JP_TRIGGER
		"디펜더 この防御が終わるまでパワー+2000。", //JP_TEXT
		"", //TW_TRIGGER
		"", //TW_TEXT
		"勝利の女神：NIKKE NivelArenaブースターパックBT02〈ザ・キングダム〉" //PRODUCT
		],
	[
		"BT02-030", //ID
		"http://nivelarena.jp/data/file/cardlists/cfbf01727a7e461ec5930f5d552f8bff_HcIhb5ER_03caec3e12f7e03ab7bca05da431e71fe7277eb0.png", //SRC
		"キリ", //NAME
		"ユニット", //TYPE
		"波濤", //ELEMENT
		"2", //COST
		"C", //RARE
		"3000", //POWER
		"1", //HIT
		"エフェクト / エリシオン", //BELONG
		"ガーディアン", //KEYWORD
		"", //JP_TRIGGER
		"가디언 防壁[1](隣のレーンの相手のユニットが攻撃する場合、自分の手札を1枚選んでトラッシュしたなら、このユニットでその攻撃を防御する)。", //JP_TEXT
		"", //TW_TRIGGER
		"", //TW_TEXT
		"勝利の女神：NIKKE NivelArenaブースターパックBT02〈ザ・キングダム〉" //PRODUCT
		],
	[
		"BT02-031", //ID
		"http://nivelarena.jp/data/file/cardlists/cfbf01727a7e461ec5930f5d552f8bff_uoQjv2WD_6300f0c85fbdf257851d43235e7e8d883ee2215f.png", //SRC
		"エピネル", //NAME
		"ユニット", //TYPE
		"波濤", //ELEMENT
		"2", //COST
		"C", //RARE
		"2500", //POWER
		"1", //HIT
		"エフェクト / ミシリス", //BELONG
		"ディフェンダー", //KEYWORD
		"", //JP_TRIGGER
		"디펜더 この防御が終わるまでパワー+2000。", //JP_TEXT
		"", //TW_TRIGGER
		"", //TW_TEXT
		"勝利の女神：NIKKE NivelArenaブースターパックBT02〈ザ・キングダム〉" //PRODUCT
		],
	[
		"BT02-032", //ID
		"http://nivelarena.jp/data/file/cardlists/cfbf01727a7e461ec5930f5d552f8bff_hje0oSGv_28d73e8821c2c6f646a36f441af1138b6d5ccdfa.png", //SRC
		"ハラン", //NAME
		"ユニット", //TYPE
		"波濤", //ELEMENT
		"2", //COST
		"R", //RARE
		"2500", //POWER
		"1", //HIT
		"エフェクト / ピルグリム", //BELONG
		"アタッカー", //KEYWORD
		"", //JP_TRIGGER
		"어태커 突破[コスト6以上](コスト6以上の相手のユニットはこのユニットの攻撃を防御できない)。", //JP_TEXT
		"", //TW_TRIGGER
		"", //TW_TEXT
		"勝利の女神：NIKKE NivelArenaブースターパックBT02〈ザ・キングダム〉" //PRODUCT
		],
	[
		"BT02-033", //ID
		"http://nivelarena.jp/data/file/cardlists/cfbf01727a7e461ec5930f5d552f8bff_0cHRoE2C_a1f6b63415717dd460991f0127f82bc8941f3367.png", //SRC
		"フォルクヴァン", //NAME
		"ユニット", //TYPE
		"波濤", //ELEMENT
		"3", //COST
		"C", //RARE
		"4500", //POWER
		"1", //HIT
		"ベース / テトラ", //BELONG
		"", //KEYWORD
		"", //JP_TRIGGER
		"", //JP_TEXT
		"", //TW_TRIGGER
		"", //TW_TEXT
		"勝利の女神：NIKKE NivelArenaブースターパックBT02〈ザ・キングダム〉" //PRODUCT
		],
	[
		"BT02-034", //ID
		"http://nivelarena.jp/data/file/cardlists/cfbf01727a7e461ec5930f5d552f8bff_ipqDTNKe_c9c06d1e86e8cb8203a92d497d41c4f7e4d152f3.png", //SRC
		"アンカー", //NAME
		"ユニット", //TYPE
		"波濤", //ELEMENT
		"3", //COST
		"C", //RARE
		"4000", //POWER
		"1", //HIT
		"エフェクト / エリシオン", //BELONG
		"ガーディアン", //KEYWORD
		"", //JP_TRIGGER
		"가디언 防壁[1](隣のレーンの相手のユニットが攻撃する場合、自分の手札を1枚選んでトラッシュしたなら、このユニットでその攻撃を防御する)。", //JP_TEXT
		"", //TW_TRIGGER
		"", //TW_TEXT
		"勝利の女神：NIKKE NivelArenaブースターパックBT02〈ザ・キングダム〉" //PRODUCT
		],
	[
		"BT02-035", //ID
		"http://nivelarena.jp/data/file/cardlists/cfbf01727a7e461ec5930f5d552f8bff_ilc1pUXf_023e81721ab58e4594cb92d1cc58fb9ee59fec45.png", //SRC
		"マスト‐パイレーツハート", //NAME
		"ユニット", //TYPE
		"波濤", //ELEMENT
		"3", //COST
		"R", //RARE
		"1500", //POWER
		"1", //HIT
		"エフェクト / エリシオン", //BELONG
		"アタッカー", //KEYWORD
		"", //JP_TRIGGER
		"어태커 潜入[1](このユニットの攻撃を相手のユニットに防御されなかった場合、1枚ドローする)。", //JP_TEXT
		"", //TW_TRIGGER
		"", //TW_TEXT
		"勝利の女神：NIKKE NivelArenaブースターパックBT02〈ザ・キングダム〉" //PRODUCT
		],
	[
		"BT02-036", //ID
		"http://nivelarena.jp/data/file/cardlists/cfbf01727a7e461ec5930f5d552f8bff_RFJr0DMn_8da6f4db09fa6b0e0ce0da10ed10024ae0475737.png", //SRC
		"アリス：ワンダーランドバニー", //NAME
		"ユニット", //TYPE
		"波濤", //ELEMENT
		"3", //COST
		"R", //RARE
		"4500", //POWER
		"1", //HIT
		"エフェクト / テトラ", //BELONG
		"エントリー", //KEYWORD
		"トリガー / このカードをトラッシュする。フィールドにある一番低いコストを持つ相手のユニットを1枚選んで、そのユニットと装備しているアイテム全てを持ち主の手札に戻す。", //JP_TRIGGER
		"엔트리 フィールドにある 가디언 を持つ自分のユニットを1枚選び、このターンが終わるまでヒット+1。", //JP_TEXT
		"", //TW_TRIGGER
		"", //TW_TEXT
		"勝利の女神：NIKKE NivelArenaブースターパックBT02〈ザ・キングダム〉" //PRODUCT
		],
	[
		"BT02-037", //ID
		"http://nivelarena.jp/data/file/cardlists/cfbf01727a7e461ec5930f5d552f8bff_PpaN30Jz_78ce8fce24edd36ed7f9a6d496c35af3e65c946b.png", //SRC
		"ツバイ", //NAME
		"ユニット", //TYPE
		"波濤", //ELEMENT
		"4", //COST
		"C", //RARE
		"5500", //POWER
		"2", //HIT
		"ベース / エリシオン", //BELONG
		"", //KEYWORD
		"", //JP_TRIGGER
		"", //JP_TEXT
		"", //TW_TRIGGER
		"", //TW_TEXT
		"勝利の女神：NIKKE NivelArenaブースターパックBT02〈ザ・キングダム〉" //PRODUCT
		],
	[
		"BT02-038", //ID
		"http://nivelarena.jp/data/file/cardlists/cfbf01727a7e461ec5930f5d552f8bff_NantRkJI_3f27af3757a769dd1a6efec00d3c772f41b9f007.png", //SRC
		"ポリ", //NAME
		"ユニット", //TYPE
		"波濤", //ELEMENT
		"4", //COST
		"C", //RARE
		"4000", //POWER
		"2", //HIT
		"エフェクト / エリシオン", //BELONG
		"パッシブ", //KEYWORD
		"", //JP_TRIGGER
		"패시브 フィールドにある 디펜더 を持つ自分のユニット全てのパワー+2000。", //JP_TEXT
		"", //TW_TRIGGER
		"", //TW_TEXT
		"勝利の女神：NIKKE NivelArenaブースターパックBT02〈ザ・キングダム〉" //PRODUCT
		],
	[
		"BT02-039", //ID
		"http://nivelarena.jp/data/file/cardlists/cfbf01727a7e461ec5930f5d552f8bff_vmQJaTGV_24de4a26d482b862ed5eb35e5f27fdf4024f67f6.png", //SRC
		"イサベル‐ハネムーンパーティー", //NAME
		"ユニット", //TYPE
		"波濤", //ELEMENT
		"4", //COST
		"SR", //RARE
		"4000", //POWER
		"2", //HIT
		"エフェクト / ピルグリム", //BELONG
		"エントリー、 ガーディアン", //KEYWORD
		"", //JP_TRIGGER
		"가디언 防壁[2](隣のレーンの相手のユニットが攻撃する場合、自分の手札を2枚選んでトラッシュしたなら、このユニットでその攻撃を防御する)。<br>엔트리 相手のターンが終わるまでパワー+2000。", //JP_TEXT
		"", //TW_TRIGGER
		"", //TW_TEXT
		"勝利の女神：NIKKE NivelArenaブースターパックBT02〈ザ・キングダム〉" //PRODUCT
		],
	[
		"BT02-040", //ID
		"http://nivelarena.jp/data/file/cardlists/cfbf01727a7e461ec5930f5d552f8bff_moP6923x_ede9a6a7b05c55d07174ae0f650cd7ca12eb8559.png", //SRC
		"ペッパー", //NAME
		"ユニット", //TYPE
		"波濤", //ELEMENT
		"5", //COST
		"C", //RARE
		"5500", //POWER
		"2", //HIT
		"エフェクト / ミシリス", //BELONG
		"エントリー", //KEYWORD
		"", //JP_TRIGGER
		"엔트리 1枚ドローする。", //JP_TEXT
		"", //TW_TRIGGER
		"", //TW_TEXT
		"勝利の女神：NIKKE NivelArenaブースターパックBT02〈ザ・キングダム〉" //PRODUCT
		],
	[
		"BT02-041", //ID
		"http://nivelarena.jp/data/file/cardlists/cfbf01727a7e461ec5930f5d552f8bff_gJqXV1PA_38ab8a5b4105a723a78ef7d76b7b34b4c62a88fc.png", //SRC
		"ドロシー‐ノスタルジア", //NAME
		"ユニット", //TYPE
		"波濤", //ELEMENT
		"5", //COST
		"SR", //RARE
		"3500", //POWER
		"2", //HIT
		"エフェクト / ピルグリム", //BELONG
		"アタッカー", //KEYWORD
		"トリガー / このカードをトラッシュする。1枚ドローする。", //JP_TRIGGER
		"어태커 自分の手札が5枚以上ある場合、この攻撃が終わるまで突破[コスト6以上](コスト6以上の相手のユニットはこのユニットの攻撃を防御できない)を得る。", //JP_TEXT
		"", //TW_TRIGGER
		"", //TW_TEXT
		"勝利の女神：NIKKE NivelArenaブースターパックBT02〈ザ・キングダム〉" //PRODUCT
		],
	[
		"BT02-042", //ID
		"http://nivelarena.jp/data/file/cardlists/cfbf01727a7e461ec5930f5d552f8bff_rAjMoHpv_96f844ca792c959a9bdd0167abfb2bc4ad428ed7.png", //SRC
		"ルドミラ：ウィンターオーナー", //NAME
		"ユニット", //TYPE
		"波濤", //ELEMENT
		"5", //COST
		"SR", //RARE
		"1500", //POWER
		"2", //HIT
		"エフェクト / テトラ", //BELONG
		"エントリー", //KEYWORD
		"トリガー / このカードを自分の手札に加える。", //JP_TRIGGER
		"엔트리 自分のトラッシュゾーンから 트리거 を持たないスキルカードを1枚選び、デッキの上に裏向きで置く。", //JP_TEXT
		"", //TW_TRIGGER
		"", //TW_TEXT
		"勝利の女神：NIKKE NivelArenaブースターパックBT02〈ザ・キングダム〉" //PRODUCT
		],
	[
		"BT02-043", //ID
		"http://nivelarena.jp/data/file/cardlists/cfbf01727a7e461ec5930f5d552f8bff_fcDN8jip_d7cd4ad63f79ca0c8250854376a4582246607a9a.png", //SRC
		"ルマニ", //NAME
		"ユニット", //TYPE
		"波濤", //ELEMENT
		"6", //COST
		"C", //RARE
		"7000", //POWER
		"2", //HIT
		"エフェクト / テトラ", //BELONG
		"ディフェンダー", //KEYWORD
		"トリガー / このカードをトラッシュする。フィールドにある一番低いコストを持つ相手のユニットを1枚選んで、そのユニットと装備しているアイテム全てを持ち主の手札に戻す。", //JP_TRIGGER
		"디펜더 この防御が終わるまでパワー+4000。", //JP_TEXT
		"", //TW_TRIGGER
		"", //TW_TEXT
		"勝利の女神：NIKKE NivelArenaブースターパックBT02〈ザ・キングダム〉" //PRODUCT
		],
	[
		"BT02-044", //ID
		"http://nivelarena.jp/data/file/cardlists/cfbf01727a7e461ec5930f5d552f8bff_LkQsrUdR_f5a2cab1010fc03f364fab1916d21aabc43f60fc.png", //SRC
		"アイン", //NAME
		"ユニット", //TYPE
		"波濤", //ELEMENT
		"6", //COST
		"C", //RARE
		"7500", //POWER
		"2", //HIT
		"ベース / ミシリス", //BELONG
		"", //KEYWORD
		"", //JP_TRIGGER
		"", //JP_TEXT
		"", //TW_TRIGGER
		"", //TW_TEXT
		"勝利の女神：NIKKE NivelArenaブースターパックBT02〈ザ・キングダム〉" //PRODUCT
		],
	[
		"BT02-045", //ID
		"http://nivelarena.jp/data/file/cardlists/cfbf01727a7e461ec5930f5d552f8bff_WoPmO3Zg_2f821c787d28d2f98c1e60c89cdc71d58e4c984d.png", //SRC
		"メアリー：ベイゴッデス", //NAME
		"ユニット", //TYPE
		"波濤", //ELEMENT
		"7", //COST
		"R", //RARE
		"7500", //POWER
		"3", //HIT
		"エフェクト / テトラ", //BELONG
		"パッシブ", //KEYWORD
		"", //JP_TRIGGER
		"패시브 自分と相手のターンに1回ずつ、効果で自分の手札を1枚以上トラッシュした場合、1枚ドローする。", //JP_TEXT
		"", //TW_TRIGGER
		"", //TW_TEXT
		"勝利の女神：NIKKE NivelArenaブースターパックBT02〈ザ・キングダム〉" //PRODUCT
		],
	[
		"BT02-046", //ID
		"http://nivelarena.jp/data/file/cardlists/cfbf01727a7e461ec5930f5d552f8bff_CGEm365s_c99e09566f26111f39a84b1c46c69519db717ed5.png", //SRC
		"ヘルム：アクアマリン", //NAME
		"ユニット", //TYPE
		"波濤", //ELEMENT
		"8", //COST
		"UR", //RARE
		"9000", //POWER
		"3", //HIT
		"エフェクト / エリシオン", //BELONG
		"パッシブ、 ガーディアン", //KEYWORD
		"トリガー / このカードを自分の手札に加える", //JP_TRIGGER
		"가디언 防壁[3](隣のレーンの相手のユニットが攻撃する場合、自分の手札を3枚選んでトラッシュしたなら、このユニットでその攻撃を防御する)。<br>패시브 フィールドにあるコスト3以上の相手のユニット全てはバーサーカー(このユニットは攻撃可能な状態であれば必ず攻撃しなければならない)を得る。", //JP_TEXT
		"", //TW_TRIGGER
		"", //TW_TEXT
		"勝利の女神：NIKKE NivelArenaブースターパックBT02〈ザ・キングダム〉" //PRODUCT
		],
	[
		"BT02-047", //ID
		"http://nivelarena.jp/data/file/cardlists/cfbf01727a7e461ec5930f5d552f8bff_gqiEUdlF_386f374bb583ea40d1761c2dcfb2fef4e04dc279.png", //SRC
		"ポリスライン", //NAME
		"スキル", //TYPE
		"波濤", //ELEMENT
		"1", //COST
		"C", //RARE
		"", //POWER
		"", //HIT
		"", //BELONG
		"", //KEYWORD
		"", //JP_TRIGGER
		"フィールドにある디펜더を持つ自分のユニットを1枚選び、このターンが終わるまでパワー+3500。", //JP_TEXT
		"", //TW_TRIGGER
		"", //TW_TEXT
		"勝利の女神：NIKKE NivelArenaブースターパックBT02〈ザ・キングダム〉"  //PRODUCT
		],
	[
		"BT02-048", //ID
		"http://nivelarena.jp/data/file/cardlists/cfbf01727a7e461ec5930f5d552f8bff_saJz9diL_621ec10ca8f564db76b0ffa80f7df5a5c916def8.png", //SRC
		"私たちは友達！", //NAME
		"スキル", //TYPE
		"波濤", //ELEMENT
		"2", //COST
		"C", //RARE
		"", //POWER
		"", //HIT
		"", //BELONG
		"", //KEYWORD
		"", //JP_TRIGGER
		"フィールドにある가디언を持つ自分のユニット1枚と가디언を持たない自分のユニット1枚を選ぶ。このターンが終わるまで、その中の가디언を持たないユニットのパワーが가디언を持つユニットの今のパワー分上がる。", //JP_TEXT
		"", //TW_TRIGGER
		"", //TW_TEXT
		"勝利の女神：NIKKE NivelArenaブースターパックBT02〈ザ・キングダム〉"  //PRODUCT
		],
	[
		"BT02-049", //ID
		"http://nivelarena.jp/data/file/cardlists/cfbf01727a7e461ec5930f5d552f8bff_1ehTzlaX_2b53bbe68228b99bdcefd6d3cd5f69d0aafd7f48.png", //SRC
		"イージスキャノン牽制射撃", //NAME
		"スキル", //TYPE
		"波濤", //ELEMENT
		"3", //COST
		"R", //RARE
		"", //POWER
		"", //HIT
		"", //BELONG
		"", //KEYWORD
		"", //JP_TRIGGER
		"フィールドにある디펜더を持つ自分のユニットを2枚選ぶ。その後、相手に1ダメージを与える。選んだ2枚はこのターンが終わるまで攻撃できない。", //JP_TEXT
		"", //TW_TRIGGER
		"", //TW_TEXT
		"勝利の女神：NIKKE NivelArenaブースターパックBT02〈ザ・キングダム〉"  //PRODUCT
		],
	[
		"BT02-050", //ID
		"http://nivelarena.jp/data/file/cardlists/cfbf01727a7e461ec5930f5d552f8bff_e1ZfUkWm_23adda2fef98c07adf8059e9d2c603b5db23bf4d.png", //SRC
		"ニンジンとウサギパーティー", //NAME
		"スキル", //TYPE
		"波濤", //ELEMENT
		"3", //COST
		"R", //RARE
		"", //POWER
		"", //HIT
		"", //BELONG
		"", //KEYWORD
		"", //JP_TRIGGER
		"フィールドにある가디언を持つ自分のユニットを1枚選び、このターンが終わるまでパワー+2000。自分の手札が5枚以上ある場合、更にこのターンが終わるまでヒット+1。", //JP_TEXT
		"", //TW_TRIGGER
		"", //TW_TEXT
		"勝利の女神：NIKKE NivelArenaブースターパックBT02〈ザ・キングダム〉"  //PRODUCT
		],
	[
		"BT02-051", //ID
		"http://nivelarena.jp/data/file/cardlists/cfbf01727a7e461ec5930f5d552f8bff_oies7IkJ_f574db43a6bde07bce29a97ec2a0c8cca6c23c48.png", //SRC
		"海賊の眼差し", //NAME
		"スキル", //TYPE
		"波濤", //ELEMENT
		"4", //COST
		"C", //RARE
		"", //POWER
		"", //HIT
		"", //BELONG
		"", //KEYWORD
		"", //JP_TRIGGER
		"自分の手札を2枚選んでトラッシュする。その後、相手に1ダメージを与える。", //JP_TEXT
		"", //TW_TRIGGER
		"", //TW_TEXT
		"勝利の女神：NIKKE NivelArenaブースターパックBT02〈ザ・キングダム〉"  //PRODUCT
		],
	[
		"BT02-052", //ID
		"http://nivelarena.jp/data/file/cardlists/cfbf01727a7e461ec5930f5d552f8bff_ZotWCSqL_8a00d58f3faf1e520c053813260698f9fdf0b246.png", //SRC
		"セラミックベスト", //NAME
		"アイテム", //TYPE
		"波濤", //ELEMENT
		"0", //COST
		"C", //RARE
		"", //POWER
		"", //HIT
		"", //BELONG
		"", //KEYWORD
		"", //JP_TRIGGER
		"장착 조건: 3코스트 이하인 유닛<br>パワー+1000。", //JP_TEXT
		"", //TW_TRIGGER
		"", //TW_TEXT
		"勝利の女神：NIKKE NivelArenaブースターパックBT02〈ザ・キングダム〉"  //PRODUCT
		],
	[
		"BT02-053", //ID
		"http://nivelarena.jp/data/file/cardlists/cfbf01727a7e461ec5930f5d552f8bff_XfqWDHs6_3fa002053fd9a5598969d4a813cf5a682ad625d3.png", //SRC
		"ガッデシアムジャケット", //NAME
		"アイテム", //TYPE
		"波濤", //ELEMENT
		"1", //COST
		"C", //RARE
		"", //POWER
		"", //HIT
		"", //BELONG
		"", //KEYWORD
		"", //JP_TRIGGER
		"장착 조건: 가디언을 가진 유닛<br>パワー+2000。", //JP_TEXT
		"", //TW_TRIGGER
		"", //TW_TEXT
		"勝利の女神：NIKKE NivelArenaブースターパックBT02〈ザ・キングダム〉"  //PRODUCT
		],
	[
		"BT02-054", //ID
		"http://nivelarena.jp/data/file/cardlists/cfbf01727a7e461ec5930f5d552f8bff_VpOyLHPh_23ab5291e1b6617423cbc5c66d627bb876d09ac4.png", //SRC
		"ノルンコードグローブ", //NAME
		"アイテム", //TYPE
		"波濤", //ELEMENT
		"2", //COST
		"C", //RARE
		"", //POWER
		"", //HIT
		"", //BELONG
		"アタッカー", //KEYWORD
		"", //JP_TRIGGER
		"장착 조건: 4코스트 이상인 유닛<br>어태커 潜入[1](このユニットの攻撃を相手のユニットに防御されなかった場合、1枚ドローする)。", //JP_TEXT
		"", //TW_TRIGGER
		"", //TW_TEXT
		"勝利の女神：NIKKE NivelArenaブースターパックBT02〈ザ・キングダム〉"  //PRODUCT
		],
	[
		"BT02-055", //ID
		"http://nivelarena.jp/data/file/cardlists/cfbf01727a7e461ec5930f5d552f8bff_pgdL4Rz8_f285d505418ae439d861b4fccb93efb8f8aa3952.png", //SRC
		"クラウン‐ネイキッドキング", //NAME
		"リーダー", //TYPE
		"稲妻", //ELEMENT
		"", //COST
		"L", //RARE
		"", //POWER
		"", //HIT
		"ピルグリム", //BELONG
		"パッシブ", //KEYWORD
		"", //JP_TRIGGER
		"基本面<br>서약 自分は 번개 のカードのみをデッキに入れることができる。<br>각성 自分のリーダーレベルが6以上の場合、このカードを裏返す。<br><br>覚醒面<br>패시브  フィールドにあるアイテムを装備している自分のユニット全てのパワー+1500。", //JP_TEXT
		"", //TW_TRIGGER
		"", //TW_TEXT
		"勝利の女神：NIKKE NivelArenaブースターパックBT02〈ザ・キングダム〉"  //PRODUCT
		],
	[
		"BT02-056", //ID
		"http://nivelarena.jp/data/file/cardlists/cfbf01727a7e461ec5930f5d552f8bff_QiIoYjnZ_087788be753e2ec4535dffafdde278715ad9f763.png", //SRC
		"トロニー", //NAME
		"ユニット", //TYPE
		"稲妻", //ELEMENT
		"1", //COST
		"C", //RARE
		"1000", //POWER
		"1", //HIT
		"エフェクト / ミシリス", //BELONG
		"エグジット", //KEYWORD
		"", //JP_TRIGGER
		"엑시트 自分のトラッシュゾーンからコスト1のアイテムカードを1枚選んで手札に加える。", //JP_TEXT
		"", //TW_TRIGGER
		"", //TW_TEXT
		"勝利の女神：NIKKE NivelArenaブースターパックBT02〈ザ・キングダム〉"  //PRODUCT
		],
	[
		"BT02-057", //ID
		"http://nivelarena.jp/data/file/cardlists/cfbf01727a7e461ec5930f5d552f8bff_uiBth207_360caaad590684f1746f9509305a963c378bcd6e.png", //SRC
		"シュガー‐コールミー・ハードボイルド", //NAME
		"ユニット", //TYPE
		"稲妻", //ELEMENT
		"1", //COST
		"SR", //RARE
		"1500", //POWER
		"1", //HIT
		"エフェクト / テトラ", //BELONG
		"アームド", //KEYWORD
		"トリガー / このカードをトラッシュする。2枚ドローする。その後、自分の手札を2枚選んでトラッシュする。", //JP_TRIGGER
		"암드 装備しているアイテム1枚につき、パワー+2000。3枚以上なら更に「어태커 1枚ドローする」を得る。", //JP_TEXT
		"", //TW_TRIGGER
		"", //TW_TEXT
		"勝利の女神：NIKKE NivelArenaブースターパックBT02〈ザ・キングダム〉"  //PRODUCT
		],
	[
		"BT02-058", //ID
		"http://nivelarena.jp/data/file/cardlists/cfbf01727a7e461ec5930f5d552f8bff_zf4uvo6I_7748d757e9ef83db5ebb48b2b2f21ceee5935e1b.png", //SRC
		"ミルク", //NAME
		"ユニット", //TYPE
		"稲妻", //ELEMENT
		"2", //COST
		"C", //RARE
		"3000", //POWER
		"1", //HIT
		"エフェクト / テトラ", //BELONG
		"エグジット", //KEYWORD
		"", //JP_TRIGGER
		"엑시트 自分のダメージゾーンからアイテムカードを1枚選んで手札に加える。その後、自分の手札を1枚選んでダメージゾーンに置く。", //JP_TEXT
		"", //TW_TRIGGER
		"", //TW_TEXT
		"勝利の女神：NIKKE NivelArenaブースターパックBT02〈ザ・キングダム〉"  //PRODUCT
		],
	[
		"BT02-059", //ID
		"http://nivelarena.jp/data/file/cardlists/cfbf01727a7e461ec5930f5d552f8bff_bg6QvDFd_bdf514d98201e0645bd400cc92e151569f7e50fb.png", //SRC
		"エード", //NAME
		"ユニット", //TYPE
		"稲妻", //ELEMENT
		"2", //COST
		"R", //RARE
		"3500", //POWER
		"1", //HIT
		"エフェクト / テトラ", //BELONG
		"エントリー", //KEYWORD
		"", //JP_TRIGGER
		"엔트리 フィールドにある自分のユニットが装備しているアイテムを1枚選び、持ち主の手札に戻すことができる。", //JP_TEXT
		"", //TW_TRIGGER
		"", //TW_TEXT
		"勝利の女神：NIKKE NivelArenaブースターパックBT02〈ザ・キングダム〉"  //PRODUCT
		],
	[
		"BT02-060", //ID
		"http://nivelarena.jp/data/file/cardlists/cfbf01727a7e461ec5930f5d552f8bff_9Mj4sgR8_c4cf9b89b9e709dfa4db6de8befb87a250800ac3.png", //SRC
		"エレグ", //NAME
		"ユニット", //TYPE
		"稲妻", //ELEMENT
		"2", //COST
		"SR", //RARE
		"3000", //POWER
		"1", //HIT
		"エフェクト / ミシリス", //BELONG
		"パッシブ", //KEYWORD
		"", //JP_TRIGGER
		"패시브 フィールドにあるアイテムを装備している自分のユニット1枚につき、パワー+2000。3枚以上なら更にヒット+1。", //JP_TEXT
		"", //TW_TRIGGER
		"", //TW_TEXT
		"勝利の女神：NIKKE NivelArenaブースターパックBT02〈ザ・キングダム〉"  //PRODUCT
		],
	[
		"BT02-061", //ID
		"http://nivelarena.jp/data/file/cardlists/cfbf01727a7e461ec5930f5d552f8bff_xjNGTX34_7cd546995f56cc6cd7806fd4b3f2e47842a3aec4.png", //SRC
		"ココア", //NAME
		"ユニット", //TYPE
		"稲妻", //ELEMENT
		"3", //COST
		"C", //RARE
		"5000", //POWER
		"1", //HIT
		"ベース / テトラ", //BELONG
		"", //KEYWORD
		"", //JP_TRIGGER
		"", //JP_TEXT
		"", //TW_TRIGGER
		"", //TW_TEXT
		"勝利の女神：NIKKE NivelArenaブースターパックBT02〈ザ・キングダム〉"  //PRODUCT
		],
	[
		"BT02-062", //ID
		"http://nivelarena.jp/data/file/cardlists/cfbf01727a7e461ec5930f5d552f8bff_p73QoEnj_198246886b924efbb67dfaaa0363af104a05e98c.png", //SRC
		"プリム‐レイジーサマー", //NAME
		"ユニット", //TYPE
		"稲妻", //ELEMENT
		"3", //COST
		"C", //RARE
		"4000", //POWER
		"1", //HIT
		"エフェクト / テトラ", //BELONG
		"アタッカー、 アームド", //KEYWORD
		"", //JP_TRIGGER
		"암드어태커 アイテムを装備している場合、この攻撃が終わるまで貫通[1](このユニットが攻撃した戦闘で相手のユニットをトラッシュしたなら、相手に1ダメージを与える)を得る。", //JP_TEXT
		"", //TW_TRIGGER
		"", //TW_TEXT
		"勝利の女神：NIKKE NivelArenaブースターパックBT02〈ザ・キングダム〉"  //PRODUCT
		],
	[
		"BT02-063", //ID
		"http://nivelarena.jp/data/file/cardlists/cfbf01727a7e461ec5930f5d552f8bff_gA5sUKIk_83cf21b8fded720615ad2a27d6a3c83a5eead79d.png", //SRC
		"レオナ", //NAME
		"ユニット", //TYPE
		"稲妻", //ELEMENT
		"3", //COST
		"C", //RARE
		"4000", //POWER
		"1", //HIT
		"エフェクト / テトラ", //BELONG
		"エントリー", //KEYWORD
		"このカードをトラッシュする。自分のデッキからコスト1以下のアイテムカードを1枚選んで手札に加える。デッキをシャッフルする。", //JP_TRIGGER
		"엔트리 対向ユニットのヒット分自分の手札からアイテムカードを選んでトラッシュできる。その後、対向ユニットをトラッシュする。", //JP_TEXT
		"", //TW_TRIGGER
		"", //TW_TEXT
		"勝利の女神：NIKKE NivelArenaブースターパックBT02〈ザ・キングダム〉"  //PRODUCT
		],
	[
		"BT02-064", //ID
		"http://nivelarena.jp/data/file/cardlists/cfbf01727a7e461ec5930f5d552f8bff_m63XIY7U_ae642a88ae3499ea26f308c5255bf3280f488f46.png", //SRC
		"ビスケット", //NAME
		"ユニット", //TYPE
		"稲妻", //ELEMENT
		"4", //COST
		"C", //RARE
		"6000", //POWER
		"2", //HIT
		"ベース / テトラ", //BELONG
		"", //KEYWORD
		"", //JP_TRIGGER
		"", //JP_TEXT
		"", //TW_TRIGGER
		"", //TW_TEXT
		"勝利の女神：NIKKE NivelArenaブースターパックBT02〈ザ・キングダム〉"  //PRODUCT
		],
	[
		"BT02-065", //ID
		"http://nivelarena.jp/data/file/cardlists/cfbf01727a7e461ec5930f5d552f8bff_4MSq9ikC_76a0705b31482e3c49cb7add132702cf31a60e46.png", //SRC
		"ラプラス", //NAME
		"ユニット", //TYPE
		"稲妻", //ELEMENT
		"4", //COST
		"C", //RARE
		"5000", //POWER
		"2", //HIT
		"エフェクト / ミシリス", //BELONG
		"アームド", //KEYWORD
		"", //JP_TRIGGER
		"암드: 유니크《ユニーク》を持つアイテムを装備している場合、パワー+2500。", //JP_TEXT
		"", //TW_TRIGGER
		"", //TW_TEXT
		"勝利の女神：NIKKE NivelArenaブースターパックBT02〈ザ・キングダム〉"  //PRODUCT
		],
	[
		"BT02-066", //ID
		"http://nivelarena.jp/data/file/cardlists/cfbf01727a7e461ec5930f5d552f8bff_oYdTUWs9_74aabb12da6fa70f419a7542808fe1faf18a412a.png", //SRC
		"ネロ", //NAME
		"ユニット", //TYPE
		"稲妻", //ELEMENT
		"4", //COST
		"R", //RARE
		"5000", //POWER
		"2", //HIT
		"エフェクト / テトラ", //BELONG
		"アームド", //KEYWORD
		"", //JP_TRIGGER
		"암드 アイテムを装備しているなら戦闘/効果でトラッシュされる時、このユニットが装備しているアイテムを1枚選んで持ち主の手札に戻すことができる。", //JP_TEXT
		"", //TW_TRIGGER
		"", //TW_TEXT
		"勝利の女神：NIKKE NivelArenaブースターパックBT02〈ザ・キングダム〉"  //PRODUCT
		],
	[
		"BT02-067", //ID
		"http://nivelarena.jp/data/file/cardlists/cfbf01727a7e461ec5930f5d552f8bff_B28d1lEL_9312d0357a53cd76668ef92d5f9d2db2fe1bcb73.png", //SRC
		"クラウン‐ネイキッドキング", //NAME
		"ユニット", //TYPE
		"稲妻", //ELEMENT
		"4", //COST
		"UR", //RARE
		"6000", //POWER
		"2", //HIT
		"エフェクト / ピルグリム", //BELONG
		"アームド", //KEYWORD
		"トリガー / このカードを自分の手札に加える。", //JP_TRIGGER
		"암드: 유니크《ユニーク》を持つアイテムを装備している場合、このユニットが装備しているアイテムの枚数が対向ユニットのヒット分以上なら、어태커 突破(相手のユニットはこのユニットの攻撃を防御できない)を得る。", //JP_TEXT
		"", //TW_TRIGGER
		"", //TW_TEXT
		"勝利の女神：NIKKE NivelArenaブースターパックBT02〈ザ・キングダム〉"  //PRODUCT
		],
	[
		"BT02-068", //ID
		"http://nivelarena.jp/data/file/cardlists/cfbf01727a7e461ec5930f5d552f8bff_ak6ZubG5_5a2868febf5cae99b3f9a2bd253718267be1e984.png", //SRC
		"リター‐フィッシュガード", //NAME
		"ユニット", //TYPE
		"稲妻", //ELEMENT
		"5", //COST
		"C", //RARE
		"6500", //POWER
		"2", //HIT
		"エフェクト / ミシリス", //BELONG
		"エントリー", //KEYWORD
		"", //JP_TRIGGER
		"엔트리 自分のデッキの上から2枚を公開し、その中のアイテムカードを1枚手札に加える。残りは好きな順番でデッキの下に置く。", //JP_TEXT
		"", //TW_TRIGGER
		"", //TW_TEXT
		"勝利の女神：NIKKE NivelArenaブースターパックBT02〈ザ・キングダム〉"  //PRODUCT
		],
	[
		"BT02-069", //ID
		"http://nivelarena.jp/data/file/cardlists/cfbf01727a7e461ec5930f5d552f8bff_TM0U46IW_2d38ba9e766b20f50944965d04d4443739ecb757.png", //SRC
		"ドレイク‐ヴィランレーサー", //NAME
		"ユニット", //TYPE
		"稲妻", //ELEMENT
		"5", //COST
		"R", //RARE
		"5000", //POWER
		"2", //HIT
		"エフェクト / ミシリス", //BELONG
		"アームド", //KEYWORD
		"", //JP_TRIGGER
		"암드 アイテムを装備しているなら戦闘/効果でトラッシュされる時、このユニットが装備しているアイテムを1枚選んでトラッシュできる。その後、トラッシュされない。", //JP_TEXT
		"", //TW_TRIGGER
		"", //TW_TEXT
		"勝利の女神：NIKKE NivelArenaブースターパックBT02〈ザ・キングダム〉"  //PRODUCT
		],
	[
		"BT02-070", //ID
		"http://nivelarena.jp/data/file/cardlists/cfbf01727a7e461ec5930f5d552f8bff_RQ0gbJdS_549a3788642798d7ebad3ff575557e925cdb7518.png", //SRC
		"センチ‐マイティホリデー", //NAME
		"ユニット", //TYPE
		"稲妻", //ELEMENT
		"6", //COST
		"C", //RARE
		"8000", //POWER
		"2", //HIT
		"ベース / ミシリス", //BELONG
		"", //KEYWORD
		"", //JP_TRIGGER
		"", //JP_TEXT
		"", //TW_TRIGGER
		"", //TW_TEXT
		"勝利の女神：NIKKE NivelArenaブースターパックBT02〈ザ・キングダム〉"  //PRODUCT
		],
	[
		"BT02-071", //ID
		"http://nivelarena.jp/data/file/cardlists/cfbf01727a7e461ec5930f5d552f8bff_VJ48NL5x_a4c467b82e3bfdcd927ad1fde53fb2bf10a649ec.png", //SRC
		"ソーダ：トゥインクルバニー", //NAME
		"ユニット", //TYPE
		"稲妻", //ELEMENT
		"6", //COST
		"SR", //RARE
		"6000", //POWER
		"2", //HIT
		"エフェクト / テトラ", //BELONG
		"エントリー", //KEYWORD
		"トリガー / このカードを自分の手札に加える。", //JP_TRIGGER
		"엔트리 自分のトラッシュゾーンからアイテムカードを3枚選んで好きな順番でデッキの下に置くことができる。その後、対向ユニットをトラッシュする。", //JP_TEXT
		"", //TW_TRIGGER
		"", //TW_TEXT
		"勝利の女神：NIKKE NivelArenaブースターパックBT02〈ザ・キングダム〉"  //PRODUCT
		],
	[
		"BT02-072", //ID
		"http://nivelarena.jp/data/file/cardlists/cfbf01727a7e461ec5930f5d552f8bff_85aQLJMN_bcfdb4eb2d78c4a1725383d8b2c987c0ea1d26cd.png", //SRC
		"マクスウェル‐メカニックホワイト", //NAME
		"ユニット", //TYPE
		"稲妻", //ELEMENT
		"7", //COST
		"R", //RARE
		"8000", //POWER
		"3", //HIT
		"エフェクト / ミシリス", //BELONG
		"アームド", //KEYWORD
		"", //JP_TRIGGER
		"암드 アイテムを装備している場合、ヒット+1。", //JP_TEXT
		"", //TW_TRIGGER
		"", //TW_TEXT
		"勝利の女神：NIKKE NivelArenaブースターパックBT02〈ザ・キングダム〉"  //PRODUCT
		],
	[
		"BT02-073", //ID
		"http://nivelarena.jp/data/file/cardlists/cfbf01727a7e461ec5930f5d552f8bff_4QLdXCs0_da27ae7bd2f0537b5d9a6445a4ed6610e509278f.png", //SRC
		"勇気の眼差し", //NAME
		"スキル", //TYPE
		"稲妻", //ELEMENT
		"1", //COST
		"C", //RARE
		"", //POWER
		"", //HIT
		"", //BELONG
		"", //KEYWORD
		"", //JP_TRIGGER
		"自分のダメージゾーンからアイテムカードを1枚選んで手札に加える。その後、自分の手札を1枚選んでダメージゾーンに置く。", //JP_TEXT
		"", //TW_TRIGGER
		"", //TW_TEXT
		"勝利の女神：NIKKE NivelArenaブースターパックBT02〈ザ・キングダム〉"  //PRODUCT
		],
	[
		"BT02-074", //ID
		"http://nivelarena.jp/data/file/cardlists/cfbf01727a7e461ec5930f5d552f8bff_1VufXQxJ_c39eb28eaff1c2bfaf8ebc361ceec95f98053fcd.png", //SRC
		"お食事のお時間です、ご主人様", //NAME
		"スキル", //TYPE
		"稲妻", //ELEMENT
		"1", //COST
		"R", //RARE
		"", //POWER
		"", //HIT
		"", //BELONG
		"", //KEYWORD
		"自分のデッキから《ユニーク》を持つアイテムカードを1枚手札に加える。デッキをシャッフルする。", //JP_TRIGGER
		"トリガー / このカードをトラッシュする。自分のデッキからコスト1以下のアイテムカードを1枚選んで手札に加える。デッキをシャッフルする。", //JP_TEXT
		"", //TW_TRIGGER
		"", //TW_TEXT
		"勝利の女神：NIKKE NivelArenaブースターパックBT02〈ザ・キングダム〉"  //PRODUCT
		],
	[
		"BT02-075", //ID
		"http://nivelarena.jp/data/file/cardlists/cfbf01727a7e461ec5930f5d552f8bff_wsqVjDUE_16f395be2379c7ba8ea4176f40fc7959eca1897e.png", //SRC
		"ビギナーズベネフィット", //NAME
		"スキル", //TYPE
		"稲妻", //ELEMENT
		"2", //COST
		"C", //RARE
		"", //POWER
		"", //HIT
		"", //BELONG
		"", //KEYWORD
		"", //JP_TRIGGER
		"フィールドにあるアイテムを1枚選んで持ち主のデッキの下に置く。", //JP_TEXT
		"", //TW_TRIGGER
		"", //TW_TEXT
		"勝利の女神：NIKKE NivelArenaブースターパックBT02〈ザ・キングダム〉"  //PRODUCT
		],
	[
		"BT02-076", //ID
		"http://nivelarena.jp/data/file/cardlists/cfbf01727a7e461ec5930f5d552f8bff_o4ds2hBC_093403f22c08398a96aef4f30940fa3132279b8a.png", //SRC
		"ロイヤルアタイア", //NAME
		"スキル", //TYPE
		"稲妻", //ELEMENT
		"2", //COST
		"R", //RARE
		"", //POWER
		"", //HIT
		"", //BELONG
		"", //KEYWORD
		"", //JP_TRIGGER
		"自分のトラッシュゾーンからコスト1以下のアイテムカードを1枚選んで手札に加える。", //JP_TEXT
		"", //TW_TRIGGER
		"", //TW_TEXT
		"勝利の女神：NIKKE NivelArenaブースターパックBT02〈ザ・キングダム〉"  //PRODUCT
		],
	[
		"BT02-077", //ID
		"http://nivelarena.jp/data/file/cardlists/cfbf01727a7e461ec5930f5d552f8bff_w8satFoj_738ac94fcd79531ebb06e2a1fdc83ca0e7c36824.png", //SRC
		"ネコの恩返し", //NAME
		"スキル", //TYPE
		"稲妻", //ELEMENT
		"3", //COST
		"C", //RARE
		"", //POWER
		"", //HIT
		"", //BELONG
		"", //KEYWORD
		"", //JP_TRIGGER
		"自分のデッキの上から5枚を公開し、その中のアイテムカードを2枚まで選んで手札に加える。残りは好きな順番でデッキの下に置く。", //JP_TEXT
		"", //TW_TRIGGER
		"", //TW_TEXT
		"勝利の女神：NIKKE NivelArenaブースターパックBT02〈ザ・キングダム〉"  //PRODUCT
		],
	[
		"BT02-078", //ID
		"http://nivelarena.jp/data/file/cardlists/cfbf01727a7e461ec5930f5d552f8bff_A57jdbzT_3a140c91841e67f5e526fa7d5acf8df0a25b635a.png", //SRC
		"セラミックゴーグル", //NAME
		"アイテム", //TYPE
		"稲妻", //ELEMENT
		"0", //COST
		"C", //RARE
		"", //POWER
		"", //HIT
		"ユニーク", //BELONG
		"", //KEYWORD
		"", //JP_TRIGGER
		"장착 조건: 없음", //JP_TEXT
		"", //TW_TRIGGER
		"", //TW_TEXT
		"勝利の女神：NIKKE NivelArenaブースターパックBT02〈ザ・キングダム〉"  //PRODUCT
		],
	[
		"BT02-079", //ID
		"http://nivelarena.jp/data/file/cardlists/cfbf01727a7e461ec5930f5d552f8bff_Pcyw8Gj7_6c72def302997896d10e80569cde47314400feab.png", //SRC
		"ガッデシアムブーツ", //NAME
		"アイテム", //TYPE
		"稲妻", //ELEMENT
		"1", //COST
		"C", //RARE
		"", //POWER
		"", //HIT
		"", //BELONG
		"アタッカー", //KEYWORD
		"", //JP_TRIGGER
		"장착 조건: 없음<br>어태커 この攻撃が終わるまでパワー+2000。", //JP_TEXT
		"", //TW_TRIGGER
		"", //TW_TEXT
		"勝利の女神：NIKKE NivelArenaブースターパックBT02〈ザ・キングダム〉"  //PRODUCT
		],
	[
		"BT02-080", //ID
		"http://nivelarena.jp/data/file/cardlists/cfbf01727a7e461ec5930f5d552f8bff_jhNnJdPY_c4a44901091586ee05a1d19154542858b108f89f.png", //SRC
		"アトラスパターンプロテクター", //NAME
		"アイテム", //TYPE
		"稲妻", //ELEMENT
		"2", //COST
		"C", //RARE
		"", //POWER
		"", //HIT
		"", //BELONG
		"", //KEYWORD
		"", //JP_TRIGGER
		"장착 조건: 암드를 가진 유닛<br>パワー+3000。", //JP_TEXT
		"", //TW_TRIGGER
		"", //TW_TEXT
		"勝利の女神：NIKKE NivelArenaブースターパックBT02〈ザ・キングダム〉"  //PRODUCT
		],
	[
		"BT02-081", //ID
		"http://nivelarena.jp/data/file/cardlists/cfbf01727a7e461ec5930f5d552f8bff_UohLrp2b_a6b449d4a5610bd576f48b75aaf1b74890e4c4d6.png", //SRC
		"パターンシリーズ：31ゲイター", //NAME
		"アイテム", //TYPE
		"稲妻", //ELEMENT
		"2", //COST
		"C", //RARE
		"", //POWER
		"", //HIT
		"ユニーク", //BELONG
		"パッシブ", //KEYWORD
		"", //JP_TRIGGER
		"장착 조건: 없음<br>패시브 自分と相手のターンに1回ずつ、このユニットが戦闘/効果でトラッシュされる時、自分の手札をこのユニットのヒット分選んでトラッシュできる。その後、トラッシュされない。", //JP_TEXT
		"", //TW_TRIGGER
		"", //TW_TEXT
		"勝利の女神：NIKKE NivelArenaブースターパックBT02〈ザ・キングダム〉"  //PRODUCT
		]
	]