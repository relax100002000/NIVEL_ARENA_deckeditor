function autoResize() {
	this.style.height = '12px';
	this.style.height = this.scrollHeight + 'px';
}

function setComment(id) {
	if($("#comment").val() != '')
	{
		localStorage.setItem(id + "_NAcomment", $("#comment").val());
	}
	else
	{
		localStorage.removeItem(id + "_NAcomment");
	}
}

function resetComment()
{
	var ret = 0;
	var i = 0;
	
	ret = confirm("It will delete all custom comment. Are you sure?");
	if(!ret)
	{
		return;
	}
	else
	{
		for(i = 0; i < cardData.length; i++)
		{
			localStorage.removeItem(cardData[i][ID] + "_NAcomment");
		}
	}
}

function commentEvent() {
	const textarea = document.getElementById('comment');
	textarea.addEventListener('input', autoResize);
	autoResize.call(textarea);
}

function onLoading()
{
	var i = 0;
	
	rdeckArr = [];

	$("#elementtitle").hide();
	$("#typetitle").hide();
	$("#costtitle").hide();
	$("#triggertitle").hide();

	for(i = 0; i < cardData.length; i++)
	{
		console.log(cardData[i][BELONG]);
		rdeckArr.push(cardData[i]);
	}

	document.getElementById('fileinput').addEventListener('change', readSingleFile, false);
	showInfotable("init");

	$("#textsearch").keydown(function(event) {
	    if(event.keyCode == 13){
	        search();
	    };
	});

	onloaddeck();
}

function onloaddeck()
{
	deckNamelist = JSON.parse(localStorage.getItem("NADeckNameList"));
	if(deckNamelist == null)
	{
		deckNamelist = [];

		deckNamelist.push("勝利の女神：NIKKE NivelArenaスターターデッキST01〈カウンターズ〉");
		localStorage.setItem("NADeckNameList", deckNamelist);
		localStorage.setItem("勝利の女神：NIKKE NivelArenaスターターデッキST01〈カウンターズ〉", "ldeck,ST01-001\nmdeck,ST01-002,ST01-002,ST01-002,ST01-003,ST01-003,ST01-003,ST01-004,ST01-004,ST01-004,ST01-005,ST01-005,ST01-005,ST01-006,ST01-006,ST01-006,ST01-007,ST01-007,ST01-007,ST01-008,ST01-008,ST01-009,ST01-009,ST01-010,ST01-010,ST01-011,ST01-011,ST01-012,ST01-012,ST01-012,ST01-013,ST01-013,ST01-014,ST01-014,ST01-014,ST01-015,ST01-015,ST01-016,ST01-016,ST01-017,ST01-017");
		
		deckNamelist.push("勝利の女神：NIKKE NivelArenaスターターデッキST02〈リアルカインドネス〉");
		localStorage.setItem("NADeckNameList", deckNamelist);
		localStorage.setItem("勝利の女神：NIKKE NivelArenaスターターデッキST02〈リアルカインドネス〉", "ldeck,ST02-001\nmdeck,ST02-002,ST02-002,ST02-002,ST02-003,ST02-003,ST02-003,ST02-004,ST02-004,ST02-004,ST02-005,ST02-005,ST02-005,ST02-006,ST02-006,ST02-006,ST02-007,ST02-007,ST02-008,ST02-008,ST02-008,ST02-009,ST02-009,ST02-010,ST02-010,ST02-011,ST02-011,ST02-012,ST02-012,ST02-012,ST02-013,ST02-013,ST02-013,ST02-014,ST02-014,ST02-015,ST02-015,ST02-016,ST02-016,ST02-017,ST02-017");

		deckNamelist.push("勝利の女神：NIKKE NivelArenaスターターデッキST03〈ヘレティック〉");
		localStorage.setItem("NADeckNameList", deckNamelist);
		localStorage.setItem("勝利の女神：NIKKE NivelArenaスターターデッキST03〈ヘレティック〉", "ldeck,ST03-001\nmdeck,ST03-002,ST03-002,ST03-002,ST03-003,ST03-003,ST03-004,ST03-004,ST03-004,ST03-005,ST03-005,ST03-005,ST03-006,ST03-006,ST03-006,ST03-007,ST03-007,ST03-007,ST03-008,ST03-008,ST03-008,ST03-009,ST03-009,ST03-010,ST03-010,ST03-011,ST03-011,ST03-012,ST03-012,ST03-012,ST03-014,ST03-014,ST03-015,ST03-015,ST03-013,ST03-013,ST03-013,ST03-016,ST03-016,ST03-017,ST03-017");	
	}

	for(i = 0; i < deckNamelist.length; i ++)
	{
		updateDecklist(localStorage.getItem(deckNamelist[i]));
	}
}

function showrdeck()
{
	var i = 0;
	var max = 0;

	for(i = 0; i < 10; i++)
	{
		$("#rdeck_" + i).attr("src", "img/empty.jpg");
	}

	if(rdeckArr.length < (page + 1) * 10)
	{
		max = rdeckArr.length % 10;
	}
	else
	{
		max = 10;
	}

	for(i = 0; i < 10; i++)
	{
		if(i < max)
		{
			$("#rdeck_" + i).attr("src", rdeckArr[page * 10 + i][SRC]);
			$("#rdeck_" + i).attr("alt", rdeckArr[page * 10 + i][ID]);

			$("#rdeck_" + i).attr("height", "172px");
			$("#rdeck_" + i).attr("width", "124px");
			$("#rdeck_" + i).attr("style", "margin-bottom: 0px");
		}
		else
		{
			$("#rdeck_" + i).attr("height", "172px");
			$("#rdeck_" + i).attr("width", "124px");
			$("#rdeck_" + i).attr("style", "margin-bottom: 0px");
			$("#rdeck_" + i).attr("src", "img/empty.jpg");
			$("#rdeck_" + i).attr("alt", "");
		}
	}

	$("#totalCard").html(rdeckArr.length);
	if(rdeckArr.length == 0)
	{
		$("#page").html("");
	}
	else
	{
		if(rdeckArr.length % 10 != 0)
		{
			$("#page").html(parseInt(page + 1) + " / " + parseInt((rdeckArr.length / 10) + 1));
		}
		else
		{
			$("#page").html(parseInt(page + 1) + " / " + parseInt(rdeckArr.length / 10));
		}
	}
}

function onmouseShow(x, source)
{
	var i = 0;

	if($('#cardinformation').css('visibility') == 'visible')
	{
		if(source == 'search')
		{
			if($('#cardinformation').css('margin') == '150px 0px 0px 960px')
			{
				return;
			}
		}
		else if(source == 'deck')
		{
			if($('#cardinformation').css('margin') == '150px 0px 0px 40px')
			{
				return;
			}
		}
	}

	if(source == 'search')
	{
		$('#cardinformation').css('margin', '150px 0px 0px 40px');
	}
	else if(source == 'deck')
	{
		$('#cardinformation').css('margin', '150px 0px 0px 960px');
	}

	if(x.alt)
	{
		$("#cardinformation").css("visibility", "visible");
		
		for(i = 0; i < cardData.length; i++)
		{
			if(x.alt == cardData[i][ID])
			{
				$("#info_name").html(cardData[i][ID]);

				break;
			}
		}

		$("#big_pic").attr("src", cardData[i][SRC]);
		$("#big_pic").attr("alt", cardData[i][ID]);

		$("#big_pic").attr("height", "504px");
		$("#big_pic").attr("width", "360px");

		showInfotable(cardData[i]);
	}
	else
	{
		$("#big_pic").attr("height", "504px");
		$("#big_pic").attr("width", "360px");
		$("#big_pic").attr("src", "img/card_back.jpg");
		$("#cardinformation").css("visibility", "hidden");
	}
}

function str_to_img(x)
{
	x = x.replace(/장착조건 없음/g, "<img class='icon_img' src='img/ico_eq_none.png'></img>");
	x = x.replace(/장착 조건: 없음/g, "<img class='icon_img' src='img/ico_eq_none.png'></img>");
	x = x.replace(/장착조건 엑시트/g, "<img class='icon_img' src='img/ico_eq_exit.png'></img>");
	x = x.replace(/장착조건 4코스트이상/g, "<img class='icon_img' src='img/ico_eq_4cost.png'></img>");
	x = x.replace(/장착 조건: 4코스트 이상인 유닛/g, "<img class='icon_img' src='img/ico_eq_4cost.png'></img>");
	x = x.replace(/장착조건 4코스트이하/g, "<img class='icon_img' src='img/ico_eq_4cost_dw.png'></img>");
	x = x.replace(/장착 조건: 3코스트 이하인 유닛/g, "<img class='icon_img' src='img/ico_eq_3cost.png'></img>");
	x = x.replace(/장착 조건: 베이스를 가진 유닛/g, "<img class='icon_img' src='img/ico_eq_base.png'></img>");
	x = x.replace(/장착 조건: 가디언을 가진 유닛/g, "<img class='icon_img' src='img/ico_eq_gud.png'></img>");
	x = x.replace(/암드: 유니크/g, "<img class='icon_img' src='img/ico_amd_uq.png'></img>");

	x = x.replace(/장착 조건: 디펜더를 가진 유닛/g, "<img class='icon_img' src='img/ico_eq_dfd.png'></img>");
	x = x.replace(/장착 조건: 암드를 가진 유닛/g, "<img class='icon_img' src='img/ico_eq_amd.png'></img>");

	x = x.replace(/화염/g, "<img class='icon_img' src='img/ico_red_m.jpg'></img>");
	x = x.replace(/대지/g, "<img class='icon_img' src='img/ico_green_m.jpg'></img>");
	x = x.replace(/폭풍/g, "<img class='icon_img' src='img/ico_violet_m.jpg'></img>");
	x = x.replace(/파도/g, "<img class='icon_img' src='img/ico_blue.jpg'></img>");
	x = x.replace(/번개/g, "<img class='icon_img' src='img/ico_yellow.jpg'></img>");

	x = x.replace(/炎/g, "<img class='icon_img' src='img/ico_red_m.jpg'></img>");
	x = x.replace(/大地/g, "<img class='icon_img' src='img/ico_green_m.jpg'></img>");
	x = x.replace(/嵐/g, "<img class='icon_img' src='img/ico_violet_m.jpg'></img>");
	x = x.replace(/波濤/g, "<img class='icon_img' src='img/ico_blue.jpg'></img>");
	x = x.replace(/稲妻/g, "<img class='icon_img' src='img/ico_yellow.jpg'></img>");

	x = x.replace(/서약/g, "<img class='icon_img' src='img/ico_vow.jpg'></img>");
	x = x.replace(/각성/g, "<img class='icon_img' src='img/ico_awk.jpg'></img>");
	x = x.replace(/엑시트/g, "<img class='icon_img' src='img/ico_exit.png'></img>");
	x = x.replace(/패시브/g, "<img class='icon_img' src='img/ico_psv.png'></img>");
	x = x.replace(/엔트리/g, "<img class='icon_img' src='img/ico_ent.png'></img>");
	x = x.replace(/액티브메인/g, "<img class='icon_img' src='img/ico_atv_main.png'></img>");
	x = x.replace(/액티브: 메인/g, "<img class='icon_img' src='img/ico_atv_main.png'></img>");
	x = x.replace(/어태커/g, "<img class='icon_img' src='img/ico_atc.png'></img>");
	x = x.replace(/디펜더/g, "<img class='icon_img' src='img/ico_dfd.png'></img>");
	x = x.replace(/가디언/g, "<img class='icon_img' src='img/ico_gud.png'></img>");
	x = x.replace(/암드/g, "<img class='icon_img' src='img/ico_amd.png'></img>");

	x = x.replace(/<br><br>覚醒面<br><br>/g, "</tr><tr><td colspan=2>覚醒面<br><br>");
	x = x.replace(/<br><br>覺醒面<br><br>/g, "</tr><tr><td colspan=2>覺醒面<br><br>");

	return x;
}

function showInfotable(data)
{
	var str = "";
	var tmpArr = [];
	var i = 0;

	if(data == "init")
	{
		str += "<tr>";
		str += "	<td width=\"115px\">";
		str += "		カードナンバー";
		str += "	</td>";
		str += "	<td>";
		str += data;
		str += "	</td>";
		str += "</tr>";

		str += "<tr>";
		str += "	<td>";
		str += "		カード名";
		str += "	</td>";
		str += "	<td>";
		str += data;
		str += "	</td>";
		str += "</tr>";

		str += "<tr>";
		str += "	<td>";
		str += "		種類";
		str += "	</td>";
		str += "	<td>";
		str += data;
		str += "	</td>";
		str += "</tr>";

		str += "<tr>";
		str += "	<td>";
		str += "		色";
		str += "	</td>";
		str += "	<td>";
		str += data;
		str += "	</td>";
		str += "</tr>";

		str += "<tr>";
		str += "	<td>";
		str += "		LIFE";
		str += "	</td>";
		str += "	<td>";
		str += data;
		str += "	</td>";
		str += "</tr>";

		str += "<tr>";
		str += "	<td>";
		str += "	</td>";
		str += "	<td>";
		str += data;
		str += "	</td>";
		str += "</tr>";

		str += "<tr>";
		str += "	<td colspan=\"2\">";
		str += data;
		str += "	</td>";
		str += "</tr>";
	}
	else if(data[TYPE] == "リーダー")
	{
		str += "<tr>";
		str += "	<td width=\"115px\">";
		str += "		番号";
		str += "	</td>";
		str += "	<td>";
		str += data[ID];
		str += "	</td>";
		str += "</tr>";

		str += "<tr>";
		str += "	<td>";
		str += "		カード名";
		str += "	</td>";
		str += "	<td>";
		str += data[NAME];
		str += "	</td>";
		str += "</tr>";

		str += "<tr>";
		str += "	<td>";
		str += "		属性";
		str += "	</td>";
		str += "	<td>";
		str += str_to_img(data[ELEMENT]);
		str += "	</td>";
		str += "</tr>";

		str += "<tr>";
		str += "	<td>";
		str += "		種類";
		str += "	</td>";
		str += "	<td>";
		str += data[TYPE];
		str += "	</td>";
		str += "</tr>";

		str += "<tr>";
		str += "	<td>";
		str += "		所属";
		str += "	</td>";
		str += "	<td>";
		str += data[BELONG];
		str += "	</td>";
		str += "</tr>";

		str += "<tr>";
		str += "	<td colspan=\"2\">";
		if($('#selectLang').val() == "TW" && data[TW_TEXT] != "")
		{
			str += str_to_img(data[TW_TEXT]);
		}
		else
		{
			str += str_to_img(data[JP_TEXT]);
		}
		str += "	</td>";
		str += "</tr>";
	}
	else if(data[TYPE] == "ユニット")
	{
		str += "<tr>";
		str += "	<td width=\"115px\">";
		str += "		番号";
		str += "	</td>";
		str += "	<td>";
		str += data[ID];
		str += "	</td>";
		str += "</tr>";

		str += "<tr>";
		str += "	<td>";
		str += "		カード名";
		str += "	</td>";
		str += "	<td>";
		str += data[NAME];
		str += "	</td>";
		str += "</tr>";

		str += "<tr>";
		str += "	<td>";
		str += "		属性";
		str += "	</td>";
		str += "	<td>";
		str += str_to_img(data[ELEMENT]);
		str += "	</td>";
		str += "</tr>";

		str += "<tr>";
		str += "	<td>";
		str += "		種類";
		str += "	</td>";
		str += "	<td>";
		str += data[TYPE];
		str += "	</td>";
		str += "</tr>";

		str += "<tr>";
		str += "	<td>";
		str += "		コスト";
		str += "	</td>";
		str += "	<td>";
		str += data[COST];
		str += "	</td>";
		str += "</tr>";

		str += "<tr>";
		str += "	<td>";
		str += "		パワー";
		str += "	</td>";
		str += "	<td>";
		str += data[POWER];
		str += "	</td>";
		str += "</tr>";

		str += "<tr>";
		str += "	<td>";
		str += "		ヒット";
		str += "	</td>";
		str += "	<td>";
		str += data[HIT];
		str += "	</td>";
		str += "</tr>";

		str += "<tr>";
		str += "	<td>";
		str += "		所属";
		str += "	</td>";
		str += "	<td>";
		str += data[BELONG];
		str += "	</td>";
		str += "</tr>";

		if(data[JP_TEXT] != "")
		{
			str += "<tr>";
			str += "	<td colspan=\"2\">";
			if($('#selectLang').val() == "TW" && data[TW_TEXT] != "")
			{
				str += str_to_img(data[TW_TEXT]);
			}
			else
			{
				str += str_to_img(data[JP_TEXT]);
			}
			str += "	</td>";
			str += "</tr>";
		}

		if(data[JP_TRIGGER] != "")
		{
			str += "<tr style='background:#E0E0E0'>";
			str += "	<td colspan=\"2\">";
			if($('#selectLang').val() == "TW" && data[TW_TRIGGER] != "")
			{
				str += str_to_img(data[TW_TRIGGER]);
			}
			else
			{
				str += str_to_img(data[JP_TRIGGER]);
			}
			str += "	</td>";
			str += "</tr>";
		}
	}
	else if(data[TYPE] == "スキル")
	{
		str += "<tr>";
		str += "	<td width=\"115px\">";
		str += "		番号";
		str += "	</td>";
		str += "	<td>";
		str += data[ID];
		str += "	</td>";
		str += "</tr>";

		str += "<tr>";
		str += "	<td>";
		str += "		カード名";
		str += "	</td>";
		str += "	<td>";
		str += data[NAME];
		str += "	</td>";
		str += "</tr>";

		str += "<tr>";
		str += "	<td>";
		str += "		属性";
		str += "	</td>";
		str += "	<td>";
		str += str_to_img(data[ELEMENT]);
		str += "	</td>";
		str += "</tr>";

		str += "<tr>";
		str += "	<td>";
		str += "		種類";
		str += "	</td>";
		str += "	<td>";
		str += data[TYPE];
		str += "	</td>";
		str += "</tr>";

		str += "<tr>";
		str += "	<td>";
		str += "		コスト";
		str += "	</td>";
		str += "	<td>";
		str += data[COST];
		str += "	</td>";
		str += "</tr>";

		if(data[JP_TEXT] != "")
		{
			str += "<tr>";
			str += "	<td colspan=\"2\">";
			if($('#selectLang').val() == "TW" && data[TW_TEXT] != "")
			{
				str += str_to_img(data[TW_TEXT]);
			}
			else
			{
				str += str_to_img(data[JP_TEXT]);
			}
			str += "	</td>";
			str += "</tr>";
		}

		if(data[JP_TRIGGER] != "")
		{
			str += "<tr style='background:#E0E0E0'>";
			str += "	<td colspan=\"2\">";
			if($('#selectLang').val() == "TW" && data[TW_TRIGGER] != "")
			{
				str += str_to_img(data[TW_TRIGGER]);
			}
			else
			{
				str += str_to_img(data[JP_TRIGGER]);
			}
			str += "	</td>";
			str += "</tr>";
		}
	}
	else if(data[TYPE] == "アイテム")
	{
		str += "<tr>";
		str += "	<td width=\"115px\">";
		str += "		番号";
		str += "	</td>";
		str += "	<td>";
		str += data[ID];
		str += "	</td>";
		str += "</tr>";

		str += "<tr>";
		str += "	<td>";
		str += "		カード名";
		str += "	</td>";
		str += "	<td>";
		str += data[NAME];
		str += "	</td>";
		str += "</tr>";

		str += "<tr>";
		str += "	<td>";
		str += "		属性";
		str += "	</td>";
		str += "	<td>";
		str += str_to_img(data[ELEMENT]);
		str += "	</td>";
		str += "</tr>";

		str += "<tr>";
		str += "	<td>";
		str += "		種類";
		str += "	</td>";
		str += "	<td>";
		str += data[TYPE];
		str += "	</td>";
		str += "</tr>";

		str += "<tr>";
		str += "	<td>";
		str += "		コスト";
		str += "	</td>";
		str += "	<td>";
		str += data[COST];
		str += "	</td>";
		str += "</tr>";

		if(data[JP_TEXT] != "")
		{
			str += "<tr>";
			str += "	<td colspan=\"2\">";
			if($('#selectLang').val() == "TW" && data[TW_TEXT] != "")
			{
				str += str_to_img(data[TW_TEXT]);
			}
			else
			{
				str += str_to_img(data[JP_TEXT]);
			}
			str += "	</td>";
			str += "</tr>";
		}

		if(data[JP_TRIGGER] != "")
		{
			str += "<tr style='background:#E0E0E0'>";
			str += "	<td colspan=\"2\">";
			if($('#selectLang').val() == "TW" && data[TW_TRIGGER] != "")
			{
				str += str_to_img(data[TW_TRIGGER]);
			}
			else
			{
				str += str_to_img(data[JP_TRIGGER]);
			}
			str += "	</td>";
			str += "</tr>";
		}
	}

	var commetStr = localStorage.getItem(data[ID] + "_NAcomment");

	if(commetStr == null)
	{
		commetStr = "";
	}

	str += "<tr>";
	str += "	<td colspan=\"2\">";

	str += "		<textarea id=\"comment\" style=\"vertical-align: middle; overflow:hidden; resize:none; width:285px\">" + commetStr + "</textarea>";
	str += "		<button style=\"vertical-align: middle;border-radius: 0px;height: 30px\" onclick=\"setComment('" + data[ID] + "');\">更新</button>";
	str += "	</td>";
	str += "</tr>";

	$("#infoTable").html(str);
}

function showLdeck()
{
	for(i = 0; i < 1; i++)
	{
		if(i < ldeckArr.length)
		{
			$("#ldeck_" + i).attr("src", ldeckArr[i][SRC]);
			$("#ldeck_" + i).attr("alt", ldeckArr[i][ID]);
		}
		else
		{
			$("#ldeck_" + i).attr("src", "img/empty.jpg");
			$("#ldeck_" + i).attr("alt", "");
		}
	}

	updatechart();
}

function showMdeck()
{
	for(i = 0; i < 40; i++)
	{
		if(i < mdeckArr.length)
		{
			$("#mdeck_" + i).attr("src", mdeckArr[i][SRC]);
			$("#mdeck_" + i).attr("alt", mdeckArr[i][ID]);

			// $("#show_mdeck_" + i).attr("src", mdeckArr[i][SRC]);
			// $("#show_mdeck_" + i).attr("alt", mdeckArr[i][ID]);

			// $("#show_mdeck_" + i).show();
		}
		else
		{
			$("#mdeck_" + i).attr("src", "img/empty.jpg");
			$("#mdeck_" + i).attr("alt", "");

			// $("#show_mdeck_" + i).attr("src", "img/empty.jpg");
			// $("#show_mdeck_" + i).attr("alt", "");

			// $("#show_mdeck_" + i).hide();
		}
	}

	updatechart();
}

function sortLdeck(x)
{
	ldeckArr.push(x);

	showLdeck();
}

function showAlldeck()
{
	showLdeck();
	showMdeck();
}

function type2num(type)
{
	if(type.indexOf("ユニット") != -1)
	{
		return 0;
	}
	else if(type.indexOf("スキル") != -1)
	{
		return 1;
	}
	else if(type.indexOf("アイテム") != -1)
	{
		return 2;
	}
}

function level2num(level)
{
	if(level == "2nd")
	{
		return 2;
	}
	else if(level == "1st")
	{
		return 1;
	}
	else if(level == "Debut")
	{
		return 0;
	}
	else //level == "Spot"
	{
		return 3;
	}
}


function sortMdeck(x)
{
	var same_card = 0;
	var same_level = 0;
	var same_color = 0;
	var same_lb = 0;

	var updated = 0;
	var length = mdeckArr.length;

	if(mdeckArr.length != 0)
	{
		for(i = 0; i < length; i++)
		{
			if(x[ID] == mdeckArr[i][ID])
			{
				same_card++;
				if(same_card == 3)
				{
					return;
				}
			}
		}

		for(i = 0; i < length; i++)
		{
			if(x[ID] == mdeckArr[i][ID])
			{
				updated = 1;
				mdeckArr.splice(i, 0, x);
				break;
			}
		}

		for(i = 0; i < length && !updated; i++)
		{
			if(type2num(x[TYPE]) < type2num(mdeckArr[i][TYPE]))
			{
				updated = 1;
				mdeckArr.splice(i, 0, x);
				break;
			}
			else if(type2num(x[TYPE]) == type2num(mdeckArr[i][TYPE]))
			{
				if(x[COST] < mdeckArr[i][COST])
				{
					updated = 1;
					mdeckArr.splice(i, 0, x);
					break;
				}
				else if(x[COST] == mdeckArr[i][COST])
				{
					if(x[ID] < mdeckArr[i][ID])
					{
						updated = 1;
						mdeckArr.splice(i, 0, x);
						break;
					}
				}
				
			}
		}
	}

	if(!updated)
	{
		mdeckArr.push(x);
	}

	addmaincounter(x);
	showMdeck();
}

function updatechart()
{
	var i = 0, flag = 0;
	if(ldeckArr.length != 0)
	{
		for(i = 0; i < mdeckArr.length; i++)
		{
			if(ldeckArr[0][ELEMENT] != mdeckArr[i][ELEMENT])
			{
				$("#elementtitle").show();
				flag = 1;
			}
		}
	}

	if(parseInt($("#trigger_num").text()) > 8)
	{
		$("#trigger_num").css("color", "red");
	}
	else
	{
		$("#trigger_num").css("color", "black");
	}

	if(parseInt($("#trigger_num").text()) > 9)
	{
		$("#trigger_end").css("margin-left", "23px");
	}
	else
	{
		$("#trigger_end").css("margin-left", "14px");
	}

	if(flag == 0)
	{
		$("#elementtitle").hide();
	}

	if(mdeckArr.length != 0 )
	{
		$("#leveldiv").show();
		$("#costtitle").show();
		$("#triggertitle").show();
		levelobj.data.datasets[0].data = [mdeck_1, mdeck_2, mdeck_3, mdeck_4, mdeck_5, mdeck_6, mdeck_7, mdeck_8];
		levelobj.update();

		if(mdeck_unit != 0 || mdeck_skill != 0 || mdeck_item != 0)
		{
			$("#typediv").show();
			$("#typetitle").show();
			typeobj.data.labels = ['ユニット: ' + mdeck_unit, 'スキル: ' + mdeck_skill, 'アイテム: ' + mdeck_item];
			typeobj.data.datasets[0].data = [mdeck_unit, mdeck_skill, mdeck_item];
			typeobj.update();
		}
	}
	else
	{
		$("#leveldiv").hide();
		$("#costtitle").hide();
		$("#triggertitle").hide();
		$("#elementtitle").hide();
		if(mdeck_unit == 0 && mdeck_skill == 0 && mdeck_item == 0)
		{
			$("#typediv").hide();
			$("#typetitle").hide();
		}
		// $("#show_typediv").hide();
	}
}

function delDeck(x, idx, array)
{
	for(i = 0; i < cardData.length; i++)
	{
		if(x.alt == cardData[i][ID])
		{
			for(j = 0; j < mdeckArr.length; j++)
			{
				if(cardData[i][ID] == mdeckArr[j][ID])
				{
					array.splice(j, 1);
					delmaincounter(cardData[i]);
					showAlldeck();
					return;
				}
			}
		}
	}

	array.splice(idx, 1);
	
	
	showAlldeck();
}

function addmaincounter(x)
{
	if(x[COST] == "0" || x[COST] == "1")
	{
		mdeck_1++;
	}
	else if(x[COST] == "2")
	{
		mdeck_2++;
	}
	else if(x[COST] == "3")
	{
		mdeck_3++;
	}
	else if(x[COST] == "4")
	{
		mdeck_4++;
	}
	else if(x[COST] == "5")
	{
		mdeck_5++;
	}
	else if(x[COST] == "6")
	{
		mdeck_6++;
	}
	else if(x[COST] == "7")
	{
		mdeck_7++;
	}
	else
	{
		mdeck_8++;
	}

	if(x[TYPE] == "ユニット")
	{
		mdeck_unit++;
	}
	else if(x[TYPE] == "スキル")
	{
		mdeck_skill++;
	}
	else
	{
		mdeck_item++;
	}

	if(x[JP_TRIGGER] != "")
	{
		trigger = $("#trigger_num").val();
		trigger ++;
		$("#trigger_num").val(trigger);
		$("#trigger_num").text(trigger);
	}
	// showcounter();
}

function delmaincounter(x)
{
	var trigger = 0;

	if(x[COST] == "0" || x[COST] == "1")
	{
		mdeck_1--;
	}
	else if(x[COST] == "2")
	{
		mdeck_2--;
	}
	else if(x[COST] == "3")
	{
		mdeck_3--;
	}
	else if(x[COST] == "4")
	{
		mdeck_4--;
	}
	else if(x[COST] == "5")
	{
		mdeck_5--;
	}
	else if(x[COST] == "6")
	{
		mdeck_6--;
	}
	else if(x[COST] == "7")
	{
		mdeck_7--;
	}
	else
	{
		mdeck_8--;
	}
	if(x[TYPE] == "ユニット")
	{
		mdeck_unit--;
	}
	else if(x[TYPE] == "スキル")
	{
		mdeck_skill--;
	}
	else
	{
		mdeck_item--;
	}

	if(x[JP_TRIGGER] != "")
	{
		trigger = $("#trigger_num").val();
		trigger --;
		$("#trigger_num").val(trigger);
		$("#trigger_num").text(trigger);
	}
}

function addDeck(x)
{
	var i = 0;

	if(x.alt != "")
	{
		for(i = 0; i < cardData.length; i++)
		{
			if(x.alt == cardData[i][ID])
			{
				if(cardData[i][TYPE] == "リーダー")
				{
					if(ldeckArr.length < 1)
					{
						sortLdeck(cardData[i]);
					}
				}
				else
				{
					if(mdeckArr.length < 40)
					{
						sortMdeck(cardData[i]);
					}
				}
				
				break;
			}
		}
	}
}

function downloadBlob(filename, contentType) {
    var larray = [];
    var marray = [];
    var array = [];
    var i = 0;

    filename = $("#deckTitle").val() + ".csv";

    for(i = 0; i < ldeckArr.length; i++)
    {
    	larray.push(ldeckArr[i][ID]);
    }

    for(i = 0; i < mdeckArr.length; i++)
    {
    	marray.push(mdeckArr[i][ID]);
    }

    larray.unshift("ldeck");
    marray.unshift("mdeck");

    array.push(larray);
    array.push(marray);

    var csv = array.map((item) => {
        var row = item;
          
        return row.join(",");
      })
      .join("\n");

    content = csv;

    if(contentType == "text/csv;charset=utf-8;")
    {
		var blob = new Blob([content], { type: contentType });
		var url = URL.createObjectURL(blob);

		var pom = document.createElement('a');
		pom.href = url;
		pom.setAttribute('download', filename);
		pom.click();

		$("#textCode").val(content);
	}
	else
	{
		$("#textCode").val(content);
		customizeWindowEvent('code');
		$("#deckStr").html("　　");
		$("#deckTitle").val($("#selectDeck").val());
	}
}

function selectDeck()
{
	var deck = $("#selectDeck").val();
	if(deck == 0)
	{
		dataInit();
		return;
	}
	if(deck == "")
	{
		dataInit();
	}
	$("#textCode").val(localStorage.getItem(deck));
	
	readSingleCode();
}

function cleardeck()
{
	ret = confirm("It will clear current deck. Are you sure?");
	if(!ret)
	{
		return;
	}
	else
	{
		dataInit();
	}
}

function deletedecklist()
{
	var deck = $("#selectDeck").val();
	var i = 0;

	if(deck == 0)
	{
		return;
	}

	ret = confirm("It will delete this deck. Are you sure?");
	if(!ret)
	{
		return;
	}
	else
	{
		localStorage.removeItem(deck);

		for(i = 0; i < deckNamelist.length; i++)
		{
			if(deck == deckNamelist[i])
			{
				deckNamelist.splice(i, 1);
				break;
			}
		}
		localStorage.setItem("NADeckNameList", deckNamelist);
		updateDecklist("");
		dataInit();
	}
}

function readSingleCode()
{
	var larray = [];
    var marray = [];
    var array = [];
    var i = 0, j = 0;

    var contents = $("#textCode").val();

    array = contents.split("\n");

	ldeckArr = [];

	larray = array[0].split(",");
	for(i = 1; i < larray.length; i++)
	{
		for(j = 0; j < cardData.length; j++)
	  	{
	  		if(larray[i] == cardData[j][ID])
	  		{
	  			ldeckArr.push(cardData[j]);
	  			break;
	  		}
	  	}
	}

    mdeckArr = [];
      
    marray = array[1].split(",");
    for(i = 1; i < marray.length; i++)
    {
      	for(j = 0; j < cardData.length; j++)
      	{
      		if(marray[i] == cardData[j][ID])
      		{
      			mdeckArr.push(cardData[j]);
      			break;
      		}
      	}
    }

    loadcounter();
    showAlldeck();
}

function readSingleFile(evt)
{
    var f = evt.target.files[0]; 
    var larray = [];
    var marray = [];
    var array = [];
    var i = 0, j = 0;
    var titleName = "";

	titleName = f.name.replace(".csv","");
	$("#deckTitle").val(titleName);

    if (f) {
      var r = new FileReader();
      r.onload = function(e) { 
          var contents = e.target.result;
          $("#textCode").val(contents);
          array = contents.split("\n");

          ldeckArr = [];

          larray = array[0].split(",");
          for(i = 1; i < larray.length; i++)
          {
          	for(j = 0; j < cardData.length; j++)
          	{
          		if(larray[i] == cardData[j][ID])
          		{
          			ldeckArr.push(cardData[j]);
          		}
          	}
          }

          mdeckArr = [];
          
          marray = array[1].split(",");
          for(i = 1; i < marray.length; i++)
          {
          	for(j = 0; j < cardData.length; j++)
          	{
          		if(marray[i] == cardData[j][ID])
          		{
          			mdeckArr.push(cardData[j]);
          		}
          	}
          }

          loadcounter();
          showAlldeck();
      }
      r.readAsText(f);
    } else { 
      alert("Failed to load file");
    }

    $("#fileinput").val("");
}

function loadcounter()
{
	var i = 0;

	mdeck_1 = 0;
	mdeck_2 = 0;
	mdeck_3 = 0;
	mdeck_4 = 0;
	mdeck_5 = 0;
	mdeck_6 = 0;
	mdeck_7 = 0;
	mdeck_8 = 0;

	mdeck_unit = 0;
	mdeck_skill = 0;
	mdeck_item = 0;

	$("#trigger_num").val(0);

	for(i = 0; i < mdeckArr.length; i++)
	{
		addmaincounter(mdeckArr[i])
	}
}

function search()
{
	var i = 0, j = 0;
	var dataStr = "", searchStr = "", tmpStr = "";
	var type_flag = 0, trgger_flag = 0;

	rdeckArr = [];

	for(i = 0; i < cardData.length; i++)
	{
		type_flag = 0;
		trigger_flag = 0;
		if($('#selectProduct').val() != 0)
		{
			if(cardData[i][ID].indexOf($('#selectProduct').val()) == -1)
			{
				continue;
			}
		}

		if(!$('#leader').is(":checked"))
		{
			if(cardData[i][TYPE] == "リーダー")
			{
				continue;
			}
		}

		if(!$('#unit').is(":checked"))
		{
			if(cardData[i][TYPE] == "ユニット")
			{
				continue;
			}
		}

		if(!$('#skill').is(":checked"))
		{
			if(cardData[i][TYPE] == "スキル")
			{
				continue;
			}
		}

		if(!$('#item').is(":checked"))
		{
			if(cardData[i][TYPE] == "アイテム")
			{
				continue;
			}
		}

		if(!$('#red').is(":checked") && !$('#green').is(":checked") && !$('#violet').is(":checked") && !$('#blue').is(":checked") && !$('#yellow').is(":checked"))
		{
		}
		else
		{
			if(!$('#red').is(":checked"))
			{
				if(cardData[i][ELEMENT] == "炎")
				{
					continue;
				}
			}

			if(!$('#green').is(":checked"))
			{
				if(cardData[i][ELEMENT] == "大地")
				{
					continue;
				}
			}

			if(!$('#violet').is(":checked"))
			{
				if(cardData[i][ELEMENT] == "嵐")
				{
					continue;
				}
			}

			if(!$('#blue').is(":checked"))
			{
				if(cardData[i][ELEMENT] == "波濤")
				{
					continue;
				}
			}

			if(!$('#yellow').is(":checked"))
			{
				if(cardData[i][ELEMENT] == "稲妻")
				{
					continue;
				}
			}
		}

		if(!$('#entry').is(":checked") && !$('#attack').is(":checked") && !$('#defender').is(":checked") && !$('#exit').is(":checked") && !$('#passive').is(":checked") && !$('#active_main').is(":checked") && !$('#levellink').is(":checked") && !$('#battleline').is(":checked") && !$('#guardian').is(":checked") && !$('#armored').is(":checked"))
		{
		}
		else if($('#entry').is(":checked") && $('#attack').is(":checked") && $('#defender').is(":checked") && $('#exit').is(":checked") && $('#passive').is(":checked") && $('#active_main').is(":checked") && $('#levellink').is(":checked") && $('#battleline').is(":checked") && $('#guardian').is(":checked") && $('#armored').is(":checked"))
		{
		}
		else
		{
			if($('#entry').is(":checked"))
			{
				if(cardData[i][KEYWORD].indexOf("エントリー") != -1)
				{
					trigger_flag = 1;
				}
			}

			if($('#attack').is(":checked"))
			{
				if(cardData[i][KEYWORD].indexOf("アタッカー") != -1)
				{
					trigger_flag = 1;
				}
			}

			if($('#defender').is(":checked"))
			{
				if(cardData[i][KEYWORD].indexOf("ディフェンダー") != -1)
				{
					trigger_flag = 1;
				}
			}

			if($('#exit').is(":checked"))
			{
				if(cardData[i][KEYWORD].indexOf("エグジット") != -1)
				{
					trigger_flag = 1;
				}
			}

			if($('#passive').is(":checked"))
			{
				if(cardData[i][KEYWORD].indexOf("パッシブ") != -1)
				{
					trigger_flag = 1;
				}
			}

			if($('#active_main').is(":checked"))
			{
				if(cardData[i][KEYWORD].indexOf("アクティブ") != -1)
				{
					trigger_flag = 1;
				}
			}

			if($('#levellink').is(":checked"))
			{
				if(cardData[i][KEYWORD].indexOf("レベルリンク") != -1)
				{
					trigger_flag = 1;
				}
			}

			if($('#battleline').is(":checked"))
			{
				if(cardData[i][KEYWORD].indexOf("戦線維持") != -1)
				{
					trigger_flag = 1;
				}
			}

			if($('#guardian').is(":checked"))
			{
				if(cardData[i][KEYWORD].indexOf("ガーディアン") != -1)
				{
					trigger_flag = 1;
				}
			}

			if($('#armored').is(":checked"))
			{
				if(cardData[i][KEYWORD].indexOf("アームド") != -1)
				{
					trigger_flag = 1;
				}
			}

			if(!trigger_flag)
			{
				continue;
			}
		}

		if(!$('#cost0').is(":checked") && !$('#cost1').is(":checked") && !$('#cost2').is(":checked") && !$('#cost3').is(":checked") && !$('#cost4').is(":checked") &&
			!$('#cost5').is(":checked") && !$('#cost6').is(":checked") && !$('#cost7').is(":checked") && !$('#cost8').is(":checked"))
		{
		}
		else
		{
			if(!$('#cost0').is(":checked"))
			{
				if(cardData[i][COST] == "0")
				{
					continue;
				}
			}

			if(!$('#cost1').is(":checked"))
			{
				if(cardData[i][COST] == "1")
				{
					continue;
				}
			}

			if(!$('#cost2').is(":checked"))
			{
				if(cardData[i][COST] == "2")
				{
					continue;
				}
			}

			if(!$('#cost3').is(":checked"))
			{
				if(cardData[i][COST] == "3")
				{
					continue;
				}
			}

			if(!$('#cost4').is(":checked"))
			{
				if(cardData[i][COST] == "4")
				{
					continue;
				}
			}

			if(!$('#cost5').is(":checked"))
			{
				if(cardData[i][COST] == "5")
				{
					continue;
				}
			}

			if(!$('#cost6').is(":checked"))
			{
				if(cardData[i][COST] == "6")
				{
					continue;
				}
			}

			if(!$('#cost7').is(":checked"))
			{
				if(cardData[i][COST] == "7")
				{
					continue;
				}
			}

			if(!$('#cost8').is(":checked"))
			{
				if(cardData[i][COST] == "8")
				{
					continue;
				}
			}
		}

		if(!$('#trigger').is(":checked") || !$('#no_trigger').is(":checked"))
		{
			if($('#no_trigger').is(":checked"))
			{
				if(cardData[i][TYPE] != "リーダー")
				{
					if(cardData[i][JP_TRIGGER] != "")
					{
						continue;
					}
				}
			}

			if($('#trigger').is(":checked"))
			{
				if(cardData[i][TYPE] != "リーダー")
				{
					if(cardData[i][JP_TRIGGER] == "")
					{
						continue;
					}
				}
			}
		}

		if($('#selectType').val() != 0)
		{
			dataStr = cardData[i][BELONG];
			if(dataStr.indexOf($('#selectType').val()) != -1)
			{
				type_flag++;
			}
		}
		else
		{
			type_flag++;
		}

		if($('#selectBelong').val() != 0)
		{
			dataStr = cardData[i][BELONG];
			if(dataStr.indexOf($('#selectBelong').val()) != -1)
			{
				type_flag++;
			}
		}
		else
		{
			type_flag++;
		}

		if(type_flag != 2)
		{
			continue;
		}

		if($('#textsearch').val().length != 0)
		{
			for(j = 0; j < PRODUCT + 1 ; j++)
			{
				dataStr = cardData[i][j].toUpperCase();
				searchStr = $('#textsearch').val().toUpperCase();
				if(dataStr.indexOf(searchStr) != -1)
				{
					rdeckArr.push(cardData[i]);
					break;
				}
			}
		}
		else
		{
			rdeckArr.push(cardData[i]);
		}
	}

	page = 0;
	showrdeck();
}

function checkall()
{
	$('input:checkbox').prop('checked', true);
}

function uncheckall()
{
	$('#textsearch').val("");
	$('input:checkbox').prop('checked', false);
	$('#selectType').val(0);
	$('#selectBelong').val(0);
	$('#selectProduct').val(0);
}

function clickSpan(x)
{
	if($(x).prev().is(':checked'))
	{
		$(x).prev().prop('checked', false);
	}
	else
	{
		$(x).prev().prop('checked', true);
	}
}

function dataInit()
{
	mdeckArr = [];
	ldeckArr = [];

	mdeck_1 = 0;
	mdeck_2 = 0;
	mdeck_3 = 0;
	mdeck_4 = 0;
	mdeck_5 = 0;
	mdeck_6 = 0;
	mdeck_7 = 0;
	mdeck_8 = 0;

	mdeck_red = 0;
	mdeck_green = 0;
	mdeck_violet = 0;
	mdeck_blue = 0;
	// mdeck_white = 0;
	mdeck_yellow = 0;
	// mdeck_nocolor = 0;

	showAlldeck();
}

function changePage(x)
{
	if(rdeckArr.length <= 10)
	{
		return;
	}
	if(x == "back")
	{
		if(page != 0)
		{
			page--;
		}
		else
		{
			if(rdeckArr.length % 10 != 0)
			{
				page = parseInt(rdeckArr.length / 10);
			}
			else
			{
				page = parseInt(rdeckArr.length / 10 - 1);
			}
		}
	}
	else
	{
		if((page + 1) * 10 < rdeckArr.length)
		{
			page++;
		}
		else
		{
			page = 0;
		}
	}

	showrdeck();
}

function showList()
{
	var str = "", i = 0, j = 0, flag = 0, mdecklistArr = [], ydecklistArr = [], mdecklist = [], ydecklist = [], racelistArr = [], racelist = [];

	str += "<table>";
	str += "<tr>";
	str += "<td>";
	str += "<br>リーダー<br><br>";
	str += "<table>";
	str += "<tr>";
	for(i = 0; i < ldeckArr.length; i++)
	{
		if(ldeckArr[i][ID] == "")
		{
			break;
		}

		str += "<td style='width: 30px;'>1</td><td style='width: 130px;'>" + ldeckArr[i][ID] + "<td/><td>" + ldeckArr[i][NAME] + "</td>";
		str += "</tr>"
		str += "<tr>"
	}
	str += "</tr>";
	str += "</table>";

	str += "</tr>";
	str += "</table>";
	str += "<br>メインデッキ<br><br>";
	str += "<table>";
	str += "<tr>";
	for(i = 0; i < mdeckArr.length; i++)
	{
		flag = 0;
		for(j = 0; j < mdecklist.length; j++)
		{
			if(mdeckArr[i][ID] == mdecklist[j][0])
			{
				mdecklist[j][2]++;

				flag = 1;
				break;
			}
		}

		if(flag == 0)
		{
			mdecklistArr = [];
			mdecklistArr[0] = mdeckArr[i][ID];
			mdecklistArr[1] = mdeckArr[i][NAME];
			mdecklistArr[2] = 1;
			mdecklist.push(mdecklistArr);
			
		}
		
	}

	// for(i = 0; i < mdeckArr.length; i++)
	// {
	// 	var flag = 0, racestr = "";

	// 	if(mdeckArr[i][TYPE] != "シグニ")
	// 	{
	// 		continue;
	// 	}
		
	// 	if(mdeckArr[i][TYPE].indexOf("/") != -1)
	// 	{
	// 		racestr = mdeckArr[i][TYPE].slice(mdeckArr[i][TYPE].indexOf("/") + 1);
	// 	}
	// 	else
	// 	{
	// 		racestr = mdeckArr[i][TYPE];
	// 	}

	// 	for(j = 0; j < racelist.length; j++)
	// 	{
	// 		if(racestr == racelist[j][0])
	// 		{
	// 			racelist[j][1]++;

	// 			flag = 1;
	// 			break;
	// 		}
	// 	}

	// 	if(flag == 0)
	// 	{
	// 		racelistArr = [];
	// 		racelistArr[0] = racestr;
	// 		racelistArr[1] = 1;
	// 		// racelist.push(racelistArr);
	// 	}
		
	// }

	for(i = 0; i < mdecklist.length; i++)
	{
		if(mdecklist[i][ID] == "")
		{
			break;
		}

		str += "<td style='width: 30px;'>" + mdecklist[i][2] + "</td><td style='width: 130px;'>" + mdecklist[i][0] + "<td/><td>" + mdecklist[i][1] + "</td>";
		str += "</tr>"
		str += "<tr>"
	}
	str += "</tr>";
	str += "</table>";
	str += "<br><br>";
	str += "</td>";
	str += "<td style='vertical-align:text-top;padding-left: 75px;'>";
	str += "<table style='margin-top: 60px'>";
	str += "<tr>";
	for(i = 0; i < racelist.length; i++)
	{
		str += "<td style='width: 30px; padding-left:20px'>" + racelist[i][1] + "</td><td>" + racelist[i][0] + "<td/>";
		str += "</tr>"
		str += "<tr>"
	}
	str += "</tr>";
	str += "</table>";
	str += "</td>";
	str += "</tr>";
	str += "</table>";
	$("#decklist").html(str);
}

function copyClipboard()
{
	const inputText = document.querySelector('#textCode');
  	inputText.select();
  	document.execCommand('copy');
  	$("#deckStr").html("Deck code copied!");
}

function addDecklist()
{
	var i = 0, ret = 0;
	var title_val = $("#deckTitle").val();

	if(title_val == 0)
	{
		alert("Do not set empty string as title.");
		return;
	}

	if( title_val.indexOf("_HOLOcomment") != -1 || 
			title_val.indexOf("_WXcomment") != -1 ||
			title_val.indexOf("_NAcomment") != -1
		)
	{
		alert("Invalid deck title.");
		return;
	}

  	for(i = 0; i < deckNamelist.length; i++)
  	{
  		if(deckNamelist[i] == $("#deckTitle").val())
  		{
  			ret = confirm("Deck exist. Do you want to overwrite it?");

  			if(!ret)
  			{
  				return;
  			}
  		}
  	}

  	readSingleCode();
  	$("#deckStr").html("Deck has been added.");

  	localStorage.setItem($("#deckTitle").val(), $("#textCode").val());

  	if(!ret)
  	{
  		deckNamelist.push($("#deckTitle").val());
  	}

  	updateDecklist($("#deckTitle").val());
}

function updateDecklist(select)
{
	var str = "", i = 0;

	str += "<option value=''>--Select Deck--</option>";

	for(i = 0; i < deckNamelist.length; i++)
	{
		if(select == deckNamelist[i])
		{
			str += "<option value='" + deckNamelist[i] + "' selected>" + deckNamelist[i] +"</option>";
		}
		else
		{
			str += "<option value='" + deckNamelist[i] + "'>" + deckNamelist[i] +"</option>";
		}
	}

	localStorage.setItem("NADeckNameList", JSON.stringify(deckNamelist));

	$("#selectDeck").html(str);
}

function resetDefault()
{
	var ret = 0;
	var i = 0;
	
	deckNamelist = JSON.parse(localStorage.getItem("NADeckNameList"));
	
	if(deckNamelist == null)
	{
		deckNamelist = [];
	}

	ret = confirm("It will delete all custom deck. Are you sure?");
	if(!ret)
	{
		return;
	}
	else
	{
		for(i = 0; i < deckNamelist.length; i++)
		{
			localStorage.removeItem(deckNamelist[i]);
		}

		localStorage.removeItem("NADeckNameList");
		
		location.reload();
	}
}

function showVersion()
{
	var str = "";
  
	str += "Author: ZZZ\n";
	str += "E-mail: relax100002000@hotmail.com\n";
	str += "\n";
	str += "20251211 v1.02\n";
	str += "1.更新ST04、ST05、BT02\n";
	str += "\n";
	str += "預計更新:\n";
	str += "-補充關於說明\n";
	
	alert(str);
}