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
		"", //TRIGGER
		"", //JP_TEXT
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
const TRIGGER = 11;
const JP_TEXT = 12;
const PRODUCT = 13;

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
		"", //TRIGGER
		"基本面<br><br>서약自分は화염のカードのみをデッキに入れることができる。<br><br>각성自分のリーダーレベルが5以上の場合、このカードを裏返す。<br><br>覚醒面<br><br>패시브フィールドにある自分のユニット全ては自分のターンの間、パワー+1000。", //JP_TEXT
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
		"", //TRIGGER
		"", //JP_TEXT
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
		"", //TRIGGER
		"어태커 この攻撃が終わるまでパワー+1000。", //JP_TEXT
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
		"", //TRIGGER
		"", //JP_TEXT
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
		"", //TRIGGER
		"어태커 この攻撃が終わるまでパワー+2000。", //JP_TEXT
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
		"", //TRIGGER
		"엔트리 このターンが終わるまで対向ユニットのパワー-3000。", //JP_TEXT
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
		"", //TRIGGER
		"어태커 この攻撃が終わるまでパワー+1000。", //JP_TEXT
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
		"", //TRIGGER
		"패시브 フィールドにある 어태커 を持つ自分のユニット全ては自分のターンの間、パワー+1000。", //JP_TEXT
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
		"", //TRIGGER
		"", //JP_TEXT
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
		"トリガー / このカードをトラッシュする。フィールドにある相手のユニットを1枚選んでこのターンが終わるまでパワー-5000。", //TRIGGER
		"액티브메인 自分の手札を1枚選んでデッキに戻し、シャッフルする。その後、このターンが終わるまで対向ユニットのパワー-3000。", //JP_TEXT
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
		"トリガー / このカードを自分の手札に加える。", //TRIGGER
		"어태커 貫通[1](このユニットが攻撃した戦闘で相手のユニットをトラッシュしたなら、相手に1ダメージを与える)。", //JP_TEXT
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
		"", //TRIGGER
		"フィールドにある相手のユニットを1枚選んでこのターンが終わるまでパワー-2000。", //JP_TEXT
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
		"トリガー / このカードをトラッシュする。自分のトラッシュゾーンからコスト2以下のユニットカードを1枚選んで手札に加える。", //TRIGGER
		"自分のトラッシュゾーンからコスト2以下のユニットカードを1枚選んで手札に加える。", //JP_TEXT
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
		"", //TRIGGER
		"フィールドにある自分のユニット全てはこのターンが終わるまでパワー+2000。", //JP_TEXT
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
		"トリガー / このカードをトラッシュする。フィールドにある相手のユニットを1枚選んでこのターンが終わるまでパワー-5000。", //TRIGGER
		"フィールドにある相手のユニットを1枚選んでこのターンが終わるまでパワー-5000。", //JP_TEXT
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
		"", //TRIGGER
		"장착조건 없음<br><br>어태커 この攻撃が終わるまでパワー+2000。", //JP_TEXT
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
		"", //TRIGGER
		"장착조건 없음<br><br>어태커 略奪[1](このユニットが攻撃した戦闘で相手のユニットをトラッシュしたなら、1枚ドローする)。", //JP_TEXT
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
		"", //TRIGGER
		"基本面<br><br>서약 自分は대지のカードのみをデッキに入れることができる。<br><br>각성 自分のリーダーレベルが6以上の場合、このカードを裏返す。<br><br>覚醒面<br><br>패시브 自分のサイズ+1。", //JP_TEXT
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
		"", //TRIGGER
		"", //JP_TEXT
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
		"", //TRIGGER
		"엑시트 自分のリーダーレベル+1。", //JP_TEXT
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
		"", //TRIGGER
		"", //JP_TEXT
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
		"", //TRIGGER
		"엔트리 自分のリーダーレベル+1。", //JP_TEXT
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
		"", //TRIGGER
		"", //JP_TEXT
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
		"トリガー / このカードをトラッシュする。自分のリーダーレベル+1。", //TRIGGER
		"액티브메인 自分の手札を1枚選んでトラッシュする。その後、フィールドにある《ベース》を持つ自分のユニット全てはこのターンが終わるまでヒット+1。", //JP_TEXT
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
		"", //TRIGGER
		"", //JP_TEXT
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
		"トリガー / このカードをトラッシュする。フィールドにあるコスト3以下の相手のユニットを1枚選んでトラッシュする。", //TRIGGER
		"", //JP_TEXT
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
		"トリガー / このカードを自分の手札に加える。", //TRIGGER
		"어태커 突破[コスト2以下](コスト2以下の相手のユニットはこのユニットの攻撃を防御できない)。", //JP_TEXT
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
		"", //TRIGGER
		"패시브 自分のリーダーレベル1につき、パワー+1000。", //JP_TEXT
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
		"", //TRIGGER
		"フィールドにある自分のユニットを1枚選んでこのターンが終わるまでパワー+3000。", //JP_TEXT
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
		"", //TRIGGER
		"自分のリーダーレベル+1。", //JP_TEXT
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
		"", //TRIGGER
		"自分のデッキの上からカードを3枚公開し、その中の1枚を選んで手札に加える。残りの2枚はデッキに戻し、シャッフルする。", //JP_TEXT
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
		"トリガー / このカードをトラッシュする。フィールドにあるコスト3以下の相手のユニットを1枚選んでトラッシュする。", //TRIGGER
		"自分のユニットと相手のユニットが両方あるレーンを一つ選び、そのレーンでパワーが一番低いユニットをトラッシュする。パワーが同じなら、全てトラッシュする。", //JP_TEXT
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
		"", //TRIGGER
		"장착조건 없음<br><br>パワー+2000。", //JP_TEXT
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
		"", //TRIGGER
		"장착조건 4코스트이상<br><br>ヒット+1。", //JP_TEXT
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
		"", //TRIGGER
		"서약 自分は폭풍のカードのみをデッキに入れることができる。<br><br>각성 自分のリーダーレベルが4以上の場合、このカードを裏返す。<br><br>覚醒面<br><br>패시브 フィールドにある 엑시트 を持つ自分のユニット全てのパワー+1000。", //JP_TEXT
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
		"", //TRIGGER
		"", //JP_TEXT
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
		"トリガー / このカードをトラッシュする。相手の手札が3枚以上ある場合、相手は手札を1枚選んでトラッシュする。", //TRIGGER
		"엑시트 相手は手札を1枚選んでトラッシュする。", //JP_TEXT
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
		"", //TRIGGER
		"", //JP_TEXT
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
		"", //TRIGGER
		"엔트리 対向ユニットがコスト1以下なら、そのユニットをトラッシュする。", //JP_TEXT
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
		"", //TRIGGER
		"엑시트 1枚ドローする。", //JP_TEXT
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
		"", //TRIGGER
		"엑시트 道連れ(このユニットを戦闘でトラッシュした相手のユニットのコストがこのカードのコスト以下の場合、そのユニットをトラッシュする)。", //JP_TEXT
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
		"", //TRIGGER
		"패시브 フィールドにある엑시트を持つ自分のユニット全てのパワー+1000。", //JP_TEXT
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
		"", //TRIGGER
		"", //JP_TEXT
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
		"トリガー / このカードをトラッシュする。相手の手札が3枚以上ある場合、相手は手札を1枚選んでトラッシュする。", //TRIGGER
		"엑시트 自分のトラッシュゾーンから 엑시트 を持つコスト2以下のユニットカードを1枚選んで手札に加える。", //JP_TEXT
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
		"トリガー / このカードを自分の手札に加える。", //TRIGGER
		"엔트리 自分の手札を全てトラッシュできる。2枚以上トラッシュしたなら、対向ユニットをトラッシュする。", //JP_TEXT
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
		"", //TRIGGER
		"自分の手札を1枚選んでトラッシュする。その後、相手は手札を1枚選んでトラッシュする。", //JP_TEXT
		"勝利の女神：NIKKE NivelArenaスターターデッキST03〈ヘレティック〉"  //PRODUCT
		],
	[
		"ST03-013", //ID
		"img/card/ST03-013.png", //SRC
		"黒化", //NAME
		"スキル", //TYPE
		"嵐", //ELEMENT
		"5", //COST
		"C", //RARE
		"", //POWER
		"", //HIT
		"", //BELONG
		"", //KEYWORD
		"", //TRIGGER
		"自分の手札からユニットカードを1枚選んでトラッシュする。そのユニットカードのコストより低いコストを持つ、フィールドにあるユニットを1枚選んでトラッシュする。", //JP_TEXT
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
		"", //TRIGGER
		"フィールドにある自分のユニットを1枚選んでトラッシュする。その後、2枚ドローする。", //JP_TEXT
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
		"トリガー / このカードをトラッシュする。自分のトラッシュゾーンから 엑시트 を持つユニットカードを1枚選んで手札に加える。", //TRIGGER
		"フィールドにある自分のユニットを1枚選んでそのユニットと対向ユニットを全てトラッシュする。", //JP_TEXT
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
		"", //TRIGGER
		"장착조건 없음<br><br>パワー+3000。<br><br>디펜더 自壊(このユニットが相手の攻撃を防御したなら、その攻撃を終了させ、このユニットをトラッシュする)。", //JP_TEXT
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
		"", //TRIGGER
		"장착조건 없음<br><br>道連れ(このユニットを戦闘でトラッシュした相手のユニットのコストがこのカードのコスト以下の場合、そのユニットをトラッシュする)。", //JP_TEXT
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
		"", //TRIGGER
		"基本面<br><br>서약 自分は화염のカードのみをデッキに入れることができる。<br><br>각성 自分のリーダーレベルが6以上の場合、このカードを裏返す。<br><br>覚醒面<br><br>패시브 フィールドにある 어태커 を持つ自分のユニット全ては自分のターンの間、パワー+2000。", //JP_TEXT
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
		"", //TRIGGER
		"어태커 この攻撃が終わるまでパワー+2000。", //JP_TEXT
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
		"", //TRIGGER
		"", //JP_TEXT
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
		"", //TRIGGER
		"어태커 貫通[1](このユニットが攻撃した戦闘で相手のユニットをトラッシュしたなら、相手に1ダメージを与える)。", //JP_TEXT
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
		"", //TRIGGER
		"バーサーカー(このユニットは攻撃可能な状態であれば必ず攻撃しなければならない)。", //JP_TEXT
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
		"トリガー / このカードをトラッシュする。フィールドにある相手のユニットを1枚選んでこのターンが終わるまでパワー-5000。", //TRIGGER
		"어태커 この攻撃が終わるまでパワー+2000。<br><br>어태커 略奪[1](このユニットが攻撃した戦闘で相手のユニットをトラッシュしたなら、1枚ドローする)。", //JP_TEXT
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
		"", //TRIGGER
		"", //JP_TEXT
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
		"", //TRIGGER
		"패시브 フィールドにある 어태커 貫通を持つ自分のユニット全てのパワー+1500。", //JP_TEXT
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
		"", //TRIGGER
		"어태커 この攻撃が終わるまでパワー+1000。", //JP_TEXT
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
		"", //TRIGGER
		"", //JP_TEXT
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
		"", //TRIGGER
		"액티브메인 フィールドにある相手のユニットを1枚選んでこのターンが終わるまでパワー-1500。", //JP_TEXT
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
		"", //TRIGGER
		"엔트리 フィールドにある自分のユニット全てはこのターンが終わるまで「 어태커 この攻撃が終わるまでパワー+1000」を得る。", //JP_TEXT
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
		"", //TRIGGER
		"어태커 この攻撃が終わるまでパワー+1000。", //JP_TEXT
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
		"トリガー / このカードをトラッシュする。自分のトラッシュゾーンからコスト2以下のユニットカードを1枚選んで手札に加える。", //TRIGGER
		"バーサーカー(このユニットは攻撃可能な状態であれば必ず攻撃しなければならない)。", //JP_TEXT
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
		"", //TRIGGER
		"엔트리 このターンが終わるまで対向ユニットのパワー-4000。", //JP_TEXT
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
		"", //TRIGGER
		"어태커 この攻撃が終わるまでパワー+2000。", //JP_TEXT
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
		"", //TRIGGER
		"엔트리 対向ユニットのパワーはこのターンが終わるまで1000になる。", //JP_TEXT
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
		"", //TRIGGER
		"패시브 フィールドにある 어태커 を持つ自分のユニット全てのパワー+2000。", //JP_TEXT
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
		"トリガー / このカードを自分の手札に加える。", //TRIGGER
		"엔트리 フィールドにある自分のユニット全てはこのターンが終わるまで 어태커 貫通[1](このユニットが攻撃した戦闘で相手のユニットをトラッシュしたなら、相手に1ダメージを与える)を得る。", //JP_TEXT
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
		"", //TRIGGER
		"フィールドにある 어태커 を持つ自分のユニットを1枚選ぶ。そのユニットはこのターンが終わるまで 어태커 貫通[1](このユニットが攻撃した戦闘で相手のユニットをトラッシュしたなら、相手に1ダメージを与える)を得る。", //JP_TEXT
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
		"", //TRIGGER  
		"フィールドにある相手のユニット全てはこのターンが終わるまでパワー-1000。", //JP_TEXT  
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
		"", //TRIGGER  
		"フィールドにある相手のユニットを2枚まで選んでこのターンが終わるまでパワー-2000。", //JP_TEXT  
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
		"", //TRIGGER  
		"フィールドにある 어태커 を持つ自分のユニット全てはこのターンが終わるまでパワー+2500。", //JP_TEXT  
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
		"", //TRIGGER  
		"フィールドにある相手のユニットを1枚選んでこのターンが終わるまでパワー-3000。この効果でそのユニットをトラッシュしたなら、1枚ドローする。", //JP_TEXT  
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
		"", //TRIGGER  
		"自分のトラッシュゾーンから 어태커 を持つユニットカードを1枚選んで手札に加える。", //JP_TEXT  
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
		"トリガー / このカードを自分の手札に加える。", //TRIGGER  
		"장착조건 없음<br><br>어태커 貫通[1](このユニットが攻撃した戦闘で相手のユニットをトラッシュしたなら、相手に1ダメージを与える)。", //JP_TEXT  
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
		"", //TRIGGER  
		"장착조건 없음<br><br>어태커 この攻撃が終わるまでパワー+2000。<br><br>어태커 略奪[1](このユニットが攻撃した戦闘で相手のユニットをトラッシュしたなら、1枚ドローする)。", //JP_TEXT  
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
		"", //TRIGGER
		"基本面<br><br>서약 自分は대지のカードのみをデッキに入れることができる。<br><br>각성 自分のリーダーレベルが5以上の場合、このカードを裏返す。<br><br>覚醒面<br><br>패시브 フィールドにある《ベース》を持つ自分のユニット全てのパワー+1000。", //JP_TEXT
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
		"", //TRIGGER  
		"엔트리 相手のターンが終わるまでパワー+1000。", //JP_TEXT  
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
		"", //TRIGGER  
		"戦線維持[パワー+3000](自分の全てのユニットゾーンにユニットがある場合、パワー+3000)。", //JP_TEXT  
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
		"", //TRIGGER  
		"", //JP_TEXT  
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
		"", //TRIGGER  
		"패시브 フィールドにある《ベース》を持つ自分のユニット1枚につき、パワー+500。", //JP_TEXT  
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
		"", //TRIGGER  
		"엔트리 このターンが終わるまでヒット+1。", //JP_TEXT  
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
		"トリガー / このカードを自分の手札に加える。", //TRIGGER  
		"", //JP_TEXT  
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
		"", //TRIGGER  
		"어태커 突破[コスト1以下](コスト1以下の相手のユニットはこのユニットの攻撃を防御できない)。", //JP_TEXT  
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
		"", //TRIGGER  
		"패시브 フィールドにある《ベース》を持つ自分のユニット全てのパワー+2000。", //JP_TEXT  
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
		"", //TRIGGER  
		"戦線維持[ヒット+1](自分の全てのユニットゾーンにユニットがある場合、ヒット+1)。", //JP_TEXT  
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
		"", //TRIGGER  
		"액티브메인 自分の手札を1枚選んでトラッシュする。その後、フィールドにある自分のユニットを1枚選び、このターンが終わるまでパワー+4000。", //JP_TEXT  
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
		"", //TRIGGER  
		"엔트리 相手のターンが終わるまでパワー+3000。", //JP_TEXT  
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
		"", //TRIGGER  
		"패시브 自分のリーダーレベル1につき、パワー+500。<br><br>レベルリンク[10: ヒット+1](自分のリーダーレベルが10以上の場合、ヒット+1)。", //JP_TEXT  
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
		"", //TRIGGER  
		"엔트리 フィールドにある自分のユニットを1枚選んでこのターンが終わるまでパワー+2000。", //JP_TEXT  
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
		"", //TRIGGER  
		"", //JP_TEXT  
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
		"", //TRIGGER  
		"", //JP_TEXT  
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
		"トリガー / このカードをトラッシュする。自分のリーダーレベル+1。", //TRIGGER  
		"엔트리 自分のデッキの上から3枚を公開し、その中の《ベース》を持つユニットカード1枚を手札に加える。残りはデッキに戻し、シャッフルする。", //JP_TEXT  
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
		"", //TRIGGER  
		"패시브 フィールドにあるコスト1の自分のユニット全てのパワー+2000。", //JP_TEXT  
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
		"トリガー / このカードを自分の手札に加える。", //TRIGGER  
		"엔트리 フィールドにある《ベース》を持つ自分のユニットを1枚選ぶ。そのユニットはこのターンが終わるまで 어태커突破[コスト3以下](コスト3以下の相手のユニットはこのユニットの攻撃を防御できない)を得る。", //JP_TEXT  
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
		"", //TRIGGER  
		"フィールドにある《ベース》を持つコスト1の自分のユニットを1枚選ぶ。そのユニットのヒットはこのターンが終わるまで2になる。", //JP_TEXT  
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
		"", //TRIGGER  
		"フィールドにある自分のユニット全ては相手のターンが終わるまでパワー+500。", //JP_TEXT  
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
		"", //TRIGGER  
		"フィールドにある《ベース》を持つ自分のユニットの枚数分ドローする。", //JP_TEXT  
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
		"", //TRIGGER  
		"自分の全てのユニットゾーンにユニットがある場合、フィールドにある自分のユニット全ては相手のターンが終わるまでパワー+1500。", //JP_TEXT  
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
		"トリガー / このカードをトラッシュする。フィールドにあるコスト3以下の相手のユニットを1枚選んでトラッシュする。", //TRIGGER  
		"自分のデッキの上から3枚を公開し、その中のコスト3以下のカードを全て手札に加える。残りはデッキに戻し、シャッフルする。", //JP_TEXT  
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
		"", //TRIGGER  
		"フィールドにある《ベース》を持つ自分のユニット全てはこのターンが終わるまでヒット+1。", //JP_TEXT  
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
		"", //TRIGGER  
		"장착조건 4코스트이하<br><br>어태커 突破[コスト2以下](コスト2以下の相手のユニットはこのユニットの攻撃を防御できない)。", //JP_TEXT  
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
		"", //TRIGGER  
		"장착조건 없음<br><br>パワー+5000。", //JP_TEXT  
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
		"", //TRIGGER
		"基本面<br><br>서약 自分は폭풍のカードのみをデッキに入れることができる。<br><br>각성 自分のリーダーレベルが5以上の場合、このカードを裏返す。<br><br>覚醒面<br><br>패시브 自分と相手のターンに1回ずつ、フィールドにあるコスト5以上の自分のユニットがトラッシュされたなら、1枚ドローする。", //JP_TEXT
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
		"", //TRIGGER  
		"엑시트 フィールドにある相手のユニットを1枚選んでこのターンが終わるまでパワー-2000。", //JP_TEXT  
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
		"", //TRIGGER  
		"", //JP_TEXT  
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
		"", //TRIGGER  
		"디펜더 自壊(このユニットが相手の攻撃を防御したなら、その攻撃を終了させ、このユニットをトラッシュする)。", //JP_TEXT  
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
		"", //TRIGGER  
		"", //JP_TEXT  
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
		"", //TRIGGER  
		"패시브 このユニットは自分の手札を1枚選んでトラッシュしないと攻撃できない。", //JP_TEXT  
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
		"", //TRIGGER  
		"액티브메인 フィールドにある自分のユニットを2枚選び、その中の1枚をトラッシュする。他の1枚はこのターンが終わるまでパワー+2000。", //JP_TEXT  
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
		"", //TRIGGER  
		"", //JP_TEXT  
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
		"", //TRIGGER  
		"패시브 フィールドにある 엑시트 道連れを持つ自分のユニット全てのパワー+2000。", //JP_TEXT  
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
		"", //TRIGGER  
		"엔트리 自分の手札を2枚選んでトラッシュできる。トラッシュしたなら、対向ユニットをトラッシュする。", //JP_TEXT  
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
		"", //TRIGGER  
		"패시브 このユニットは自分の手札を1枚選んでトラッシュしないと攻撃できない。", //JP_TEXT  
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
		"", //TRIGGER  
		"엑시트 相手の手札が3枚以上ある場合、相手は手札を1枚選んでトラッシュする。", //JP_TEXT  
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
		"", //TRIGGER  
		"엑시트 道連れ(このユニットを戦闘でトラッシュした相手のユニットのコストがこのカードのコスト以下の場合、そのユニットをトラッシュする)。", //JP_TEXT  
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
		"", //TRIGGER  
		"엑시트 2枚ドローし、その中の1枚を選んでトラッシュする。", //JP_TEXT  
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
		"", //TRIGGER  
		"엔트리 対向ユニットがコスト2以下なら、そのユニットをトラッシュする。", //JP_TEXT  
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
		"", //TRIGGER  
		"디펜더 自壊(このユニットが相手の攻撃を防御したなら、その攻撃を終了させ、このユニットをトラッシュする)。", //JP_TEXT  
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
		"トリガー / このカードを自分の手札に加える。", //TRIGGER  
		"엔트리 フィールドにある自分のユニットを1枚選んでトラッシュする。その後、1枚ドローする。", //JP_TEXT  
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
		"", //TRIGGER  
		"패시브 フィールドにある他の自分のユニット全ては「 엑시트 1枚ドローする」を得る。", //JP_TEXT  
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
		"トリガー / このカードをトラッシュする。相手の手札が3枚以上ある場合、相手は手札を1枚選んでトラッシュする。", //TRIGGER  
		"엔트리 自分の手札から対向ユニットのコストより高いコストを持つユニットカードを1枚選んでトラッシュできる。トラッシュしたなら、対向ユニットをトラッシュする。", //JP_TEXT  
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
		"トリガー / このカードを自分の手札に加える。", //TRIGGER  
		"フィールドにある自分のユニットを1枚選んでトラッシュする。そのユニットのヒット分ドローする。", //JP_TEXT  
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
		"", //TRIGGER  
		"自分の手札を1枚選んでトラッシュする。そのカードと同じコストを持つ、フィールドにあるユニットを1枚選んでトラッシュする。", //JP_TEXT  
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
		"", //TRIGGER  
		"フィールドにある 엑시트 道連れを持つ自分のユニットを1枚選んでこのターンが終わるまでパワー+4500。", //JP_TEXT  
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
		"", //TRIGGER  
		"フィールドにあるユニットを1枚選び、選んだユニットのヒット分自分の手札をトラッシュする。その後、そのユニットをトラッシュする。", //JP_TEXT  
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
		"トリガー / このカードをトラッシュする。自分のトラッシュゾーンから 엑시트 を持つユニットカードを1枚選んで手札に加える。", //TRIGGER  
		"コストの合計が4以下になるように、フィールドにある相手のユニットを2枚まで選んでそのユニットを全てトラッシュする。", //JP_TEXT  
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
		"", //TRIGGER  
		"自分のトラッシュゾーンから 엑시트 を持つコスト2以下のユニットカードを2枚まで選んで手札に加える。", //JP_TEXT  
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
		"", //TRIGGER  
		"장착조건 없음<br><br>엑시트 2枚ドローする。", //JP_TEXT  
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
		"", //TRIGGER
		"장착조건 엑시트<br><br>엑시트 帰還(このターンの終了時、このユニットカードを自分のトラッシュゾーンから手札に加える)。", //JP_TEXT
		"勝利の女神：NIKKE NivelArenaブースターパックBT01〈エンカウンター〉" //PRODUCT
		]
	]