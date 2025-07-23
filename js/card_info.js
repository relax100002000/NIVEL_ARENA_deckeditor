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
		"http://nivelarena.jp/data/file/cardlists/5abf82a892f0549c26939bd53be4bda8_cxzS9uth_fae9b13633b0536fd66310f438441d2aebe6f19b.png", //SRC
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
		"http://nivelarena.jp/data/file/cardlists/5abf82a892f0549c26939bd53be4bda8_WVp3bNC6_a02d0483e58e2523f91675e1444a06f1d426fc7b.png", //SRC
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
		"http://nivelarena.jp/data/file/cardlists/5abf82a892f0549c26939bd53be4bda8_QDPcWKIg_2aff81237b5ab7b542bb02093fa9646edb80bb0b.png", //SRC
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
		"http://nivelarena.jp/data/file/cardlists/5abf82a892f0549c26939bd53be4bda8_qDlmQbEc_351824dedfe9328c3c7415d7b1c98d93b477fb08.png", //SRC
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
		"http://nivelarena.jp/data/file/cardlists/5abf82a892f0549c26939bd53be4bda8_lSm4L5Yj_3e71e076ead55356e15e823fec01207c10dfc039.png", //SRC
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
		"http://nivelarena.jp/data/file/cardlists/5abf82a892f0549c26939bd53be4bda8_ZGcQ93gi_6d71cf8d1b554e658b77dbef36f5bcf45af7125e.png", //SRC
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
		"http://nivelarena.jp/data/file/cardlists/5abf82a892f0549c26939bd53be4bda8_3LXNoBVA_fb62c192ede22428bfcdc1237013edf6c46e7bee.png", //SRC
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
		"http://nivelarena.jp/data/file/cardlists/5abf82a892f0549c26939bd53be4bda8_GDPEXtSh_adef0defa2d1b1f30eb585d04c097ea329c42ca3.png", //SRC
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
		"http://nivelarena.jp/data/file/cardlists/5abf82a892f0549c26939bd53be4bda8_IxULtzuP_6b10769e5bb351390ab19ca66201a9538d067f63.png", //SRC
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
		"http://nivelarena.jp/data/file/cardlists/5abf82a892f0549c26939bd53be4bda8_RMLkXTcj_49a2512e186e63c24921cbfef3905bb60140dc13.png", //SRC
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
		"http://nivelarena.jp/data/file/cardlists/5abf82a892f0549c26939bd53be4bda8_8MR0raAb_7f4bae67a3995f7e4ca41e2c9a28319deaf52f90.png", //SRC
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
		"http://nivelarena.jp/data/file/cardlists/5abf82a892f0549c26939bd53be4bda8_vdDJaLIf_81b18f6eaf3f678fd38ae5da00f3af953b624734.png", //SRC
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
		"http://nivelarena.jp/data/file/cardlists/5abf82a892f0549c26939bd53be4bda8_cTIZ1hF7_81df9edf98f7594eee1cf1c4959dc9e466c0f3d0.png", //SRC
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
		"http://nivelarena.jp/data/file/cardlists/5abf82a892f0549c26939bd53be4bda8_JSAuF7Mw_81442a1f84d742ae322b0d5b7d68c271555aeda3.png", //SRC
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
		"http://nivelarena.jp/data/file/cardlists/5abf82a892f0549c26939bd53be4bda8_tV7aDpUA_67737c9410670d715b1c084451e0417823a81de5.png", //SRC
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
		"http://nivelarena.jp/data/file/cardlists/5abf82a892f0549c26939bd53be4bda8_GrJEW0tC_837c9deb18ebcbe027fe1d94d7c37dbb66a6b252.png", //SRC
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
		"http://nivelarena.jp/data/file/cardlists/5abf82a892f0549c26939bd53be4bda8_6KN2SGZF_791785081bc4a73ddc22cc9cd25b205f1b933334.png", //SRC
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
		"http://nivelarena.jp/data/file/cardlists/5abf82a892f0549c26939bd53be4bda8_0at946UK_b80d4f69d9e4ce2d60cba320ae10dcd75cfd2741.png", //SRC
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
		"http://nivelarena.jp/data/file/cardlists/5abf82a892f0549c26939bd53be4bda8_vuJgL9BO_ff906ede8d3a1b7d8c60ed92281c72e11a91c0b4.png", //SRC
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
		"http://nivelarena.jp/data/file/cardlists/5abf82a892f0549c26939bd53be4bda8_9a5CW4ZA_7584ed49e40193093966412a08525f1efb8c56d7.png", //SRC
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
		"http://nivelarena.jp/data/file/cardlists/5abf82a892f0549c26939bd53be4bda8_vkrKYFez_222477c9620cba08e27f19f233e63e6f657fb4c0.png", //SRC
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
		"http://nivelarena.jp/data/file/cardlists/5abf82a892f0549c26939bd53be4bda8_n9LMpV52_37049e98453edad91915d23e34325d5e621fdfc0.png", //SRC
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
		"http://nivelarena.jp/data/file/cardlists/5abf82a892f0549c26939bd53be4bda8_Rkj4Vo9m_fad789a2645b0a22b626add18bf510b3ff01032c.png", //SRC
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
		"http://nivelarena.jp/data/file/cardlists/5abf82a892f0549c26939bd53be4bda8_eGy8vq7S_3fe08dc16beeed98a10879c36f301bec84097bef.png", //SRC
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
		"http://nivelarena.jp/data/file/cardlists/5abf82a892f0549c26939bd53be4bda8_aH4CoWls_f018900ced0bf7d6d4bb91bb5d33932bab737d94.png", //SRC
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
		"http://nivelarena.jp/data/file/cardlists/5abf82a892f0549c26939bd53be4bda8_Pw1cVB9x_036f8a065ac46fe2cfc73c25a6548586a0ce2047.png", //SRC
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
		"http://nivelarena.jp/data/file/cardlists/5abf82a892f0549c26939bd53be4bda8_OKGyRgjP_699d618f8493ed7d14c9ba5f24225317cd2caac6.png", //SRC
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
		"http://nivelarena.jp/data/file/cardlists/5abf82a892f0549c26939bd53be4bda8_43ez1c7w_67b2742b73297eed5da9497a778ba0a88a5cc58b.png", //SRC
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
		"http://nivelarena.jp/data/file/cardlists/5abf82a892f0549c26939bd53be4bda8_lDGJINHe_057a3c5edf2195d890fe3a2f38a22e2e0eae669b.png", //SRC
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
		"http://nivelarena.jp/data/file/cardlists/5abf82a892f0549c26939bd53be4bda8_HxLz2pXk_7480eb1efdbb3b61654db42f77f67ef819bb7049.png", //SRC
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
		"http://nivelarena.jp/data/file/cardlists/5abf82a892f0549c26939bd53be4bda8_SQT23jgt_f87b52d131189bb2a1930672534cd5befb16dc34.png", //SRC
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
		"http://nivelarena.jp/data/file/cardlists/5abf82a892f0549c26939bd53be4bda8_SE0txNRn_e9c23e5d2406fc3c6e11d600b17cfc9bdd68caef.png", //SRC
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
		"http://nivelarena.jp/data/file/cardlists/5abf82a892f0549c26939bd53be4bda8_6UXlEZKp_551ebe8d4d7aa18c6cacd4dfb2cdc05590fee233.png", //SRC
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
		"http://nivelarena.jp/data/file/cardlists/5abf82a892f0549c26939bd53be4bda8_TMIdueGU_ea1323099375bcd8172d6a27fff19a2c129639c7.png", //SRC
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
		"http://nivelarena.jp/data/file/cardlists/5abf82a892f0549c26939bd53be4bda8_DfAOyRPV_3f23e6ac08d1a34b4828151bd971755a0072c0ce.png", //SRC
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
		"http://nivelarena.jp/data/file/cardlists/5abf82a892f0549c26939bd53be4bda8_AhrCEl1H_8646079bc995c1de2658c74406570b10e7e737f3.png", //SRC
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
		"http://nivelarena.jp/data/file/cardlists/5abf82a892f0549c26939bd53be4bda8_lgakU4Ie_0f616e0e611c70683f5a7d03dc5cc1937fa3d2fa.png", //SRC
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
		"http://nivelarena.jp/data/file/cardlists/5abf82a892f0549c26939bd53be4bda8_JqZh52RY_cb7ba92d8e706c418bead830aaa2f43c2fa938e6.png", //SRC
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
		"http://nivelarena.jp/data/file/cardlists/5abf82a892f0549c26939bd53be4bda8_tARTWbsC_a019ed6b55a6d64dbf2a82f1ee985f44292a1298.png", //SRC
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
		"http://nivelarena.jp/data/file/cardlists/5abf82a892f0549c26939bd53be4bda8_a9GX6uSp_a744e9f8185d707509171e0a59b537ddaa0e5872.png", //SRC
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
		"http://nivelarena.jp/data/file/cardlists/5abf82a892f0549c26939bd53be4bda8_QpPZoq9T_ef02808128a5638cea697bd5cc4d7177550afa2f.png", //SRC
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
		"http://nivelarena.jp/data/file/cardlists/5abf82a892f0549c26939bd53be4bda8_3LWUxStE_e98b22d552bf13eb1a1183eff3a3231fe23d716c.png", //SRC
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
		"http://nivelarena.jp/data/file/cardlists/5abf82a892f0549c26939bd53be4bda8_jVPRqYxn_a0b9a74ba323701aeca1fda82fa022575ef41b05.png", //SRC
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
		"http://nivelarena.jp/data/file/cardlists/5abf82a892f0549c26939bd53be4bda8_ovyVSaJ9_f6068d5eb3382d23ddfc5b0f77e6fd3a5c7f8017.png", //SRC
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
		"http://nivelarena.jp/data/file/cardlists/5abf82a892f0549c26939bd53be4bda8_yqDzgmwA_79ae5bbfe4be6e6fdea90dae95a06516eb99f118.png", //SRC
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
		"http://nivelarena.jp/data/file/cardlists/5abf82a892f0549c26939bd53be4bda8_QX4rkO1A_61fe7b5bb1bd2bd0c627b9686a32450b8617fa40.png", //SRC
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
		"http://nivelarena.jp/data/file/cardlists/5abf82a892f0549c26939bd53be4bda8_GSPZY5fo_4286f22d5ffaa1136843c3cf08a24269b2574b15.png", //SRC
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
		"http://nivelarena.jp/data/file/cardlists/5abf82a892f0549c26939bd53be4bda8_GXHVBv8W_e165d86743917c0626939e80729032034cc07849.png", //SRC
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
		"http://nivelarena.jp/data/file/cardlists/5abf82a892f0549c26939bd53be4bda8_gjrCzL74_9569be0b7c6ea92ef3e091ac3349fa48d6ed5dde.png", //SRC
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
		"http://nivelarena.jp/data/file/cardlists/5abf82a892f0549c26939bd53be4bda8_inLao6l1_5da267a7f0cc2ac0db3de62cb0facc8ffa74c4b7.png", //SRC
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
		"http://nivelarena.jp/data/file/cardlists/5abf82a892f0549c26939bd53be4bda8_Cnfr17zZ_35ae517b258861808026c6b52ecc5cb3783398d4.png", //SRC
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
		"http://nivelarena.jp/data/file/cardlists/159_copy_162_5abf82a892f0549c26939bd53be4bda8_tXgEs7J4_9b9811aed3566c3cc882316b281e3c52e26cb012.png", //SRC
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
		"http://nivelarena.jp/data/file/cardlists/157_copy_160_5abf82a892f0549c26939bd53be4bda8_VspzquIo_fc00cdad73e833c280d6ee4dc79ba84491ac71fb.png", //SRC
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
		"http://nivelarena.jp/data/file/cardlists/5abf82a892f0549c26939bd53be4bda8_1QolkBTO_4321db5afa727340f1d11efa448632f322d78525.png", //SRC
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
		"http://nivelarena.jp/data/file/cardlists/5abf82a892f0549c26939bd53be4bda8_7oNdUHRW_9c871680bea90408139044068607f8068ed62763.png", //SRC
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
		"http://nivelarena.jp/data/file/cardlists/5abf82a892f0549c26939bd53be4bda8_V4uHsZmW_20eb45575e8b35d8faa7d9fddd7f3379287bc51a.png", //SRC
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
		"http://nivelarena.jp/data/file/cardlists/5abf82a892f0549c26939bd53be4bda8_LaHbJtym_be5c0d7eddfff050c3e84f73eef8267a996cf9ed.png", //SRC
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
		"http://nivelarena.jp/data/file/cardlists/5abf82a892f0549c26939bd53be4bda8_jE3MpZ6B_48e6a143b294f05157487fa92a1fc35a4950c5cb.png", //SRC
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
		"http://nivelarena.jp/data/file/cardlists/5abf82a892f0549c26939bd53be4bda8_izwyWrDe_bc8dd9b5c1a64ae874a702b839b14a68b311a9c5.png", //SRC
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
		"http://nivelarena.jp/data/file/cardlists/5abf82a892f0549c26939bd53be4bda8_Km4Mn1L2_95775e586ce0018c75f8cb978430a0aab4ad0d20.png", //SRC
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
		"http://nivelarena.jp/data/file/cardlists/5abf82a892f0549c26939bd53be4bda8_htRz1wmb_43116646092f483e214455e5720e22c6974846f4.png", //SRC
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
		"http://nivelarena.jp/data/file/cardlists/5abf82a892f0549c26939bd53be4bda8_Nia0z9BU_0f3a4f5bd582eb758202bcba3e37a803e39aa0d9.png", //SRC
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
		"http://nivelarena.jp/data/file/cardlists/5abf82a892f0549c26939bd53be4bda8_VqCRXKGB_0ecba4211afdda739b29a9efe833ed7b102c15dd.png", //SRC
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
		"http://nivelarena.jp/data/file/cardlists/5abf82a892f0549c26939bd53be4bda8_MCs2LqzW_4678693a41723b005bfe599489a0f9d55302d3bf.png", //SRC
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
		"http://nivelarena.jp/data/file/cardlists/5abf82a892f0549c26939bd53be4bda8_yqecFQPd_c3921a6a2ac370b5453f8861f2faac38c0a6e418.png", //SRC
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
		"http://nivelarena.jp/data/file/cardlists/5abf82a892f0549c26939bd53be4bda8_GpgeyjPL_ea8ad4b20712cb6720f155104b935c2f394a2196.png", //SRC
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
		"http://nivelarena.jp/data/file/cardlists/5abf82a892f0549c26939bd53be4bda8_aRFYxtr0_83971874bd0a08d728f0c570f0be2d5ab17310d8.png", //SRC
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
		"http://nivelarena.jp/data/file/cardlists/5abf82a892f0549c26939bd53be4bda8_iTLgWVXQ_82b287fd485133f2852291ee1e1b0cf7971f1406.png", //SRC
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
		"http://nivelarena.jp/data/file/cardlists/5abf82a892f0549c26939bd53be4bda8_X3PUzDne_e0891e1e7a2b2b943ec223845394796e3ea7820b.png", //SRC
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
		"http://nivelarena.jp/data/file/cardlists/5abf82a892f0549c26939bd53be4bda8_WgS6aENG_13dc793a6873d90e395c712271ded1f5d75ae3e6.png", //SRC
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
		"http://nivelarena.jp/data/file/cardlists/5abf82a892f0549c26939bd53be4bda8_RPazH7Xi_a2bce25714e9c1cf2f9c5980e7434a7d4d9126ec.png", //SRC
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
		"http://nivelarena.jp/data/file/cardlists/5abf82a892f0549c26939bd53be4bda8_gsQGBuql_99bcc1a5e9d83a3deba473c1f986a13e5c9e686a.png", //SRC  
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
		"http://nivelarena.jp/data/file/cardlists/5abf82a892f0549c26939bd53be4bda8_pVw6EJy3_59c7442773ade69a75ce18290debebc77d462724.png", //SRC  
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
		"http://nivelarena.jp/data/file/cardlists/5abf82a892f0549c26939bd53be4bda8_P56marcC_c07a599a407950fc59c6fe714990e75e1cc7e50a.png", //SRC  
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
		"http://nivelarena.jp/data/file/cardlists/5abf82a892f0549c26939bd53be4bda8_EnWV95lf_4ee1d6a3cda76d5e26be7f24cb09cd711cc790af.png", //SRC  
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
		"http://nivelarena.jp/data/file/cardlists/5abf82a892f0549c26939bd53be4bda8_VjanuBAN_10a125db941b3c4831388241a2e5c2bf65cea45c.png", //SRC  
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
		"http://nivelarena.jp/data/file/cardlists/5abf82a892f0549c26939bd53be4bda8_R0MaxI4r_3dc09dc6d6f01bfa10e42a61dcb0b5ac9f4b094c.png", //SRC  
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
		"http://nivelarena.jp/data/file/cardlists/5abf82a892f0549c26939bd53be4bda8_SxJ2htXF_a9acb1597a32ea61473feda93a7e3b81eb328bba.png", //SRC  
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
		"http://nivelarena.jp/data/file/cardlists/5abf82a892f0549c26939bd53be4bda8_C75LXdDb_d96a84da1973be0e81b2a82bd84acd6ea4199998.png", //SRC
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
		"http://nivelarena.jp/data/file/cardlists/5abf82a892f0549c26939bd53be4bda8_Ll3Nb6cK_318a0e841506bd8e7e97ef88c59c85d72d8c150a.png", //SRC  
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
		"http://nivelarena.jp/data/file/cardlists/5abf82a892f0549c26939bd53be4bda8_NivTFwXH_0b34a59d256b9f36fe5d58af55d0241022b131b5.png", //SRC  
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
		"http://nivelarena.jp/data/file/cardlists/5abf82a892f0549c26939bd53be4bda8_KDxJOCzc_0f1c20f4bf3dbee028bcf6e404e6629d189d9ca9.png", //SRC  
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
		"http://nivelarena.jp/data/file/cardlists/5abf82a892f0549c26939bd53be4bda8_o0tbgRsG_f523472766ffe47137d7811004cd68115a736711.png", //SRC  
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
		"http://nivelarena.jp/data/file/cardlists/5abf82a892f0549c26939bd53be4bda8_iLp2CZPa_b59e26b0eb6eac4669c2626d6618a4030b8751df.png", //SRC  
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
		"http://nivelarena.jp/data/file/cardlists/5abf82a892f0549c26939bd53be4bda8_9ieSYFO7_2d9e25fdcb8cdc71b7008b5f7d7879233121123e.png", //SRC  
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
		"http://nivelarena.jp/data/file/cardlists/5abf82a892f0549c26939bd53be4bda8_8B1EJxNT_e212adb47ccce1117f817eca789f5b5853fb1335.png", //SRC  
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
		"http://nivelarena.jp/data/file/cardlists/5abf82a892f0549c26939bd53be4bda8_On73RKZB_c34c8fd3ac768297c39b1816e0b0ae7701441f26.png", //SRC  
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
		"http://nivelarena.jp/data/file/cardlists/5abf82a892f0549c26939bd53be4bda8_yHrtPh1J_34ef954205ac090f2204a4519a3d406653342b04.png", //SRC  
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
		"http://nivelarena.jp/data/file/cardlists/5abf82a892f0549c26939bd53be4bda8_i5h2dAk1_d2c18a2972fcc70904f3d89c4ccd9ada47efdfc5.png", //SRC  
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
		"http://nivelarena.jp/data/file/cardlists/5abf82a892f0549c26939bd53be4bda8_lWODkYje_6fa67d56db33a42f264596739f5af11e33860a0f.png", //SRC  
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
		"http://nivelarena.jp/data/file/cardlists/5abf82a892f0549c26939bd53be4bda8_BK3adxQN_3f1269a17ef51e337b0ff0a9279923a5ae578215.png", //SRC  
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
		"http://nivelarena.jp/data/file/cardlists/5abf82a892f0549c26939bd53be4bda8_61VQ0Ijx_cd2babf5d18e6ce1b0b1876a64b69b1e33b5cf97.png", //SRC  
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
		"http://nivelarena.jp/data/file/cardlists/5abf82a892f0549c26939bd53be4bda8_AZ5jVX0C_3845ab6d53298a95e6367dcd5be23305279d7344.png", //SRC  
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
		"http://nivelarena.jp/data/file/cardlists/5abf82a892f0549c26939bd53be4bda8_iYu0sXS6_e63020552d181d51643c80a1760ea0fe3db26ea3.png", //SRC  
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
		"http://nivelarena.jp/data/file/cardlists/5abf82a892f0549c26939bd53be4bda8_LuGxgERA_9d9a509ba1dbb664f40cbd68cfe4735177f158d3.png", //SRC  
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
		"http://nivelarena.jp/data/file/cardlists/5abf82a892f0549c26939bd53be4bda8_0ZLO7bHr_824bbd6dc326c44a517ea1d7a1042fb3d69b3730.png", //SRC  
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
		"http://nivelarena.jp/data/file/cardlists/5abf82a892f0549c26939bd53be4bda8_Mj6g9fkl_4226f5891b97e5aed2d05b05284fbd2396a7888d.png", //SRC  
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
		"http://nivelarena.jp/data/file/cardlists/5abf82a892f0549c26939bd53be4bda8_5fNS0oau_948f9d4ce26c256bc8d2e6abb395338059d50870.png", //SRC  
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
		"http://nivelarena.jp/data/file/cardlists/5abf82a892f0549c26939bd53be4bda8_YB7KwAs8_59a51dee43a53a41782eca82ad1ae676386dec39.png", //SRC  
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
		"http://nivelarena.jp/data/file/cardlists/5abf82a892f0549c26939bd53be4bda8_qlWXGIDA_aa9a25443f3334852a62e28d2dcb948b54e59346.png", //SRC  
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
		"http://nivelarena.jp/data/file/cardlists/5abf82a892f0549c26939bd53be4bda8_fXQikHc6_532bd65575b7f8a86d2286e9aa6141c642f976c9.png", //SRC  
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
		"http://nivelarena.jp/data/file/cardlists/5abf82a892f0549c26939bd53be4bda8_X0ACUGgS_570b05081eea5b8eac190b453b2972c68fb51ba8.png", //SRC  
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
		"http://nivelarena.jp/data/file/cardlists/5abf82a892f0549c26939bd53be4bda8_HPBnocO8_692587db7c6f1172c9fc1ddebfa770e44ac291df.png", //SRC  
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
		"http://nivelarena.jp/data/file/cardlists/5abf82a892f0549c26939bd53be4bda8_pT4FGYfk_b0263b36cbf55793f00af7ced79cede6dd82c05a.png", //SRC  
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
		"http://nivelarena.jp/data/file/cardlists/5abf82a892f0549c26939bd53be4bda8_eaUQX8Gf_62b172d23f984b5af8d6a439ae62c68634a22139.png", //SRC  
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
		"http://nivelarena.jp/data/file/cardlists/5abf82a892f0549c26939bd53be4bda8_jR3dEubO_2a466a28dd19929adffe7ffa37c013d60429af1c.png", //SRC
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
		"http://nivelarena.jp/data/file/cardlists/5abf82a892f0549c26939bd53be4bda8_wMyCsJxf_e19b842daff4ed5788137f6269a4c9b41082857f.png", //SRC  
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
		"http://nivelarena.jp/data/file/cardlists/5abf82a892f0549c26939bd53be4bda8_OWkHQFXl_cfb39f8ae0fafd0806223398d21bdafe2c376761.png", //SRC  
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
		"http://nivelarena.jp/data/file/cardlists/5abf82a892f0549c26939bd53be4bda8_CZO4oT3E_0b8c14efc9b61a00c74d91c2fec478cf6b83d581.png", //SRC  
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
		"http://nivelarena.jp/data/file/cardlists/5abf82a892f0549c26939bd53be4bda8_TqFY1AhR_b074109b23f8d47ad836d233f3a02eca61794ded.png", //SRC  
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
		"http://nivelarena.jp/data/file/cardlists/5abf82a892f0549c26939bd53be4bda8_ogIrl35k_6137dc9c2678f981e3f82e35553afe63e322160e.png", //SRC  
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
		"http://nivelarena.jp/data/file/cardlists/5abf82a892f0549c26939bd53be4bda8_9jWCTQuq_a913d846976072ecb7ec7659b210ea2bfdb898f0.png", //SRC  
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
		"http://nivelarena.jp/data/file/cardlists/5abf82a892f0549c26939bd53be4bda8_vMcHbYxZ_c292422973eda9d432b7b0df519ded02a7fd5b82.png", //SRC  
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
		"http://nivelarena.jp/data/file/cardlists/5abf82a892f0549c26939bd53be4bda8_ECc9WGMZ_07047e8f87e00c929e8efba868bae27c121db80f.png", //SRC  
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
		"http://nivelarena.jp/data/file/cardlists/5abf82a892f0549c26939bd53be4bda8_vnDNy3Fs_4b79c3217bee48fab1a554f9090afac7fe808242.png", //SRC  
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
		"http://nivelarena.jp/data/file/cardlists/5abf82a892f0549c26939bd53be4bda8_5obhAIGS_237321e70dc95f32617206606bb6388143c48f8c.png", //SRC  
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
		"http://nivelarena.jp/data/file/cardlists/5abf82a892f0549c26939bd53be4bda8_SzcQ6CNn_dc615bc66e99957bcc19447f9a385827afa3bd86.png", //SRC  
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
		"http://nivelarena.jp/data/file/cardlists/5abf82a892f0549c26939bd53be4bda8_X8tPLycJ_a8e7d54be3cd155b262b95d9712a5c2252c87b50.png", //SRC  
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
		"http://nivelarena.jp/data/file/cardlists/5abf82a892f0549c26939bd53be4bda8_l3Am4rXb_2653879a7e4739c0aac8296771761306c01bb599.png", //SRC  
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
		"http://nivelarena.jp/data/file/cardlists/5abf82a892f0549c26939bd53be4bda8_4i3ShEuM_39c66483c8e6acd6add17c3ab4fa0a5a34c75213.png", //SRC  
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
		"http://nivelarena.jp/data/file/cardlists/5abf82a892f0549c26939bd53be4bda8_6IgdbGJ4_d7a16364b7c30ed3712c4e33c42fbfb843599879.png", //SRC  
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
		"http://nivelarena.jp/data/file/cardlists/5abf82a892f0549c26939bd53be4bda8_gDmSu57n_628fd7d7ddeeafe4084d50cb171e70a50f1a62bc.png", //SRC  
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
		"http://nivelarena.jp/data/file/cardlists/5abf82a892f0549c26939bd53be4bda8_BxoSvFsV_827542ee12385cac0ebeeaaf58fed4f1ffc8d045.png", //SRC  
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
		"http://nivelarena.jp/data/file/cardlists/5abf82a892f0549c26939bd53be4bda8_3JPgzcsO_1a1c029cb33d0084be236032289b0dfff81a395c.png", //SRC  
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
		"http://nivelarena.jp/data/file/cardlists/5abf82a892f0549c26939bd53be4bda8_HFz9QYsq_6c5580d7c83a5abe7b0c4009c25268cbf9e52fbd.png", //SRC  
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
		"http://nivelarena.jp/data/file/cardlists/5abf82a892f0549c26939bd53be4bda8_3UwtGDTu_b2c7d85158061c9da71a011460c62d782120cd43.png", //SRC  
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
		"http://nivelarena.jp/data/file/cardlists/5abf82a892f0549c26939bd53be4bda8_ye9Xfk7p_384ef7eed77f9a74a64bc71b19ed1999c1a888fc.png", //SRC  
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
		"http://nivelarena.jp/data/file/cardlists/5abf82a892f0549c26939bd53be4bda8_ShM6pl1o_f9872d2d9db5dd4b4e7947ff8b81fb9933e80139.png", //SRC  
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
		"http://nivelarena.jp/data/file/cardlists/5abf82a892f0549c26939bd53be4bda8_FQefjUBW_9e473581e2362ade9d562c925019d8817baf44e6.png", //SRC  
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
		"http://nivelarena.jp/data/file/cardlists/5abf82a892f0549c26939bd53be4bda8_f4pIZrl2_69406c612da2aa4c4f456a55e1f91bd0e08ba37d.png", //SRC  
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
		"http://nivelarena.jp/data/file/cardlists/5abf82a892f0549c26939bd53be4bda8_Wh5GqSEz_d19a733ee4bace06b1850018b5051c21fc5ffeb6.png", //SRC  
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
		"http://nivelarena.jp/data/file/cardlists/5abf82a892f0549c26939bd53be4bda8_F6rvumTq_ee10bcd4cd81ef55a9dfa9024bd041a670da5012.png", //SRC
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