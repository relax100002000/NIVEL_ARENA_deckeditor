function onLoading()
{
	var i = 0;
	
	rdeckArr = [];

	$("#yelltitle").hide();
	$("#colortitle").hide();
	$("#leveltitle").hide();

	for(i = 0; i < cardData.length; i++)
	{
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
	deckNamelist = JSON.parse(localStorage.getItem("HOLODeckNameList"));
	if(deckNamelist == null)
	{
		deckNamelist = [];
		deckNamelist.push("スタートデッキ「ときのそら」");
		localStorage.setItem("HOLODeckNameList", deckNamelist);
		localStorage.setItem("スタートデッキ「ときのそら」", "odeck,hSD01-001\nydeck,hY01-001,hY01-001,hY01-001,hY01-001,hY01-001,hY01-001,hY01-001,hY01-001,hY01-001,hY01-001,hY02-001,hY02-001,hY02-001,hY02-001,hY02-001,hY02-001,hY02-001,hY02-001,hY02-001,hY02-001\nmdeck,hSD01-003,hSD01-003,hSD01-003,hSD01-003,hSD01-004,hSD01-004,hSD01-004,hSD01-007,hSD01-007,hSD01-008,hSD01-008,hSD01-008,hSD01-008,hSD01-009,hSD01-009,hSD01-009,hSD01-012,hSD01-012,hSD01-005,hSD01-005,hSD01-005,hSD01-006,hSD01-006,hSD01-013,hSD01-013,hSD01-010,hSD01-010,hSD01-010,hSD01-011,hSD01-011,hSD01-014,hSD01-014,hSD01-015,hSD01-015,hSD01-016,hSD01-016,hSD01-016,hSD01-017,hSD01-017,hSD01-017,hSD01-018,hSD01-018,hSD01-018,hSD01-019,hSD01-019,hSD01-019,hSD01-020,hSD01-020,hSD01-021,hSD01-021");

		deckNamelist.push("スタートデッキ「AZKi」");
		localStorage.setItem("HOLODeckNameList", deckNamelist);
		localStorage.setItem("スタートデッキ「AZKi」", "odeck,hSD01-002\nydeck,hY01-001,hY01-001,hY01-001,hY01-001,hY01-001,hY01-001,hY01-001,hY01-001,hY01-001,hY01-001,hY02-001,hY02-001,hY02-001,hY02-001,hY02-001,hY02-001,hY02-001,hY02-001,hY02-001,hY02-001\nmdeck,hSD01-003,hSD01-003,hSD01-003,hSD01-003,hSD01-004,hSD01-004,hSD01-004,hSD01-007,hSD01-007,hSD01-008,hSD01-008,hSD01-008,hSD01-008,hSD01-009,hSD01-009,hSD01-009,hSD01-012,hSD01-012,hSD01-005,hSD01-005,hSD01-005,hSD01-006,hSD01-006,hSD01-013,hSD01-013,hSD01-010,hSD01-010,hSD01-010,hSD01-011,hSD01-011,hSD01-014,hSD01-014,hSD01-015,hSD01-015,hSD01-016,hSD01-016,hSD01-016,hSD01-017,hSD01-017,hSD01-017,hSD01-018,hSD01-018,hSD01-018,hSD01-019,hSD01-019,hSD01-019,hSD01-020,hSD01-020,hSD01-021,hSD01-021");
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
	x = x.replace(/コラボエフェクト/g, "<img class='icon_img' src='img/collabEF.png'></img>");
	x = x.replace(/ブルームエフェクト/g, "<img class='icon_img' src='img/bloomEF.png'></img>");
	x = x.replace(/ギフト/g, "<img class='icon_img' src='img/gift.png'></img>");

	x = x.replace(/白/g, "<img class='icon_img' src='img/arts_white.png'></img>");
	x = x.replace(/緑/g, "<img class='icon_img' src='img/arts_green.png'></img>");
	x = x.replace(/赤/g, "<img class='icon_img' src='img/arts_red.png'></img>");
	x = x.replace(/青/g, "<img class='icon_img' src='img/arts_blue.png'></img>");
	x = x.replace(/◇/g, "<img class='icon_img' src='img/arts_null.png'></img>");

	x = x.replace(/推しスキル/g, "<img class='icon_img' src='img/skill.png'></img>");
	x = x.replace(/推しスキル/g, "<img class='icon_img' src='img/SPskill.png'></img>");

	return x;
}

function color_to_img(x)
{
	x = x.replace(/白緑/g, "<img class='icon_img' src='img/type_white_green.png'></img>");

	x = x.replace(/白/g, "<img class='icon_img' src='img/type_white.png'></img>");
	x = x.replace(/緑/g, "<img class='icon_img' src='img/type_green.png'></img>");
	x = x.replace(/赤/g, "<img class='icon_img' src='img/type_red.png'></img>");
	x = x.replace(/青/g, "<img class='icon_img' src='img/type_blue.png'></img>");
	x = x.replace(/◇/g, "<img class='icon_img' src='img/type_null.png'></img>");

	return x;
}

function power_to_img(x)
{
	x = x.replace(/青\+50/g, "<img class='icon_img' src='img/tokkou_50_blue.png'></img>");
	x = x.replace(/赤\+50/g, "<img class='icon_img' src='img/tokkou_50_red.png'></img>");
	x = x.replace(/紫\+50/g, "<img class='icon_img' src='img/tokkou_50_purple.png'></img>");
	x = x.replace(/白\+50/g, "<img class='icon_img' src='img/tokkou_50_white.png'></img>");
	x = x.replace(/黄\+50/g, "<img class='icon_img' src='img/tokkou_50_yellow.png'></img>");
	x = x.replace(/緑\+50/g, "<img class='icon_img' src='img/tokkou_50_green.png'></img>");

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
		str += "		カードタイプ";
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
		str += "		<img class='icon_img' src='img/skill.png'></img>";
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
	else if(data[TYPE] == "推しホロメン")
	{
		str += "<tr>";
		str += "	<td width=\"115px\">";
		str += "		カードナンバー";
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
		str += "		カードタイプ";
		str += "	</td>";
		str += "	<td>";
		str += data[TYPE];
		str += "	</td>";
		str += "</tr>";

		str += "<tr>";
		str += "	<td>";
		str += "		色";
		str += "	</td>";
		str += "	<td>";
		str += color_to_img(data[COLOR]);
		str += "	</td>";
		str += "</tr>";

		str += "<tr>";
		str += "	<td>";
		str += "		LIFE";
		str += "	</td>";
		str += "	<td>";
		str += data[HP];
		str += "	</td>";
		str += "</tr>";

		tmpArr = data[SKILL].split("<br>");

		str += "<tr rowspan=\"2\">";
		str += "	<td>";
		str += "		<img class='icon_img' src='img/skill.png'></img><br>" + tmpArr[0];
		str += "	</td>";
		str += "	<td>";
		str += tmpArr[1];
		str += "	</td>";
		str += "</tr>";
		str += "<tr>";
		str += "	<td colspan=\"2\">";
		str += tmpArr[2];
		str += "	</td>";
		str += "</tr>";

		tmpArr = data[SPSKILL].split("<br>");

		str += "<tr rowspan=\"2\">";
		str += "	<td>";
		str += "		<img class='icon_img' src='img/SPskill.png'></img><br>" + tmpArr[0];
		str += "	</td>";
		str += "	<td>";
		str += tmpArr[1];
		str += "	</td>";
		str += "</tr>";
		str += "<tr>";
		str += "	<td colspan=\"2\">";
		for(i = 2; i < tmpArr.length; i++)
		{
			if(i != 2)
			{
				str += "<br>";
			}

			str += tmpArr[i];
		}
		str += "	</td>";
		str += "</tr>";

		str += "	</td>";
		str += "</tr>";
	}
	else if(data[TYPE] == "Buzzホロメン" || data[TYPE] == "ホロメン")
	{
		str += "<tr>";
		str += "	<td width=\"115px\">";
		str += "		カードナンバー";
		str += "	</td>";
		str += "	<td colspan=\"2\">";
		str += data[ID];
		str += "	</td>";
		str += "</tr>";

		str += "<tr>";
		str += "	<td>";
		str += "		カード名";
		str += "	</td>";
		str += "	<td colspan=\"2\">";
		str += data[NAME];
		str += "	</td>";
		str += "</tr>";

		str += "<tr>";
		str += "	<td>";
		str += "		カードタイプ";
		str += "	</td>";
		str += "	<td colspan=\"2\">";
		str += data[TYPE];
		str += "	</td>";
		str += "</tr>";

		str += "<tr>";
		str += "	<td>";
		str += "		色";
		str += "	</td>";
		str += "	<td colspan=\"2\">";
		str += color_to_img(data[COLOR]);
		str += "	</td>";
		str += "</tr>";

		str += "<tr>";
		str += "	<td>";
		str += "		Bloomレベル";
		str += "	</td>";
		str += "	<td colspan=\"2\">";
		str += data[LEVEL];
		str += "	</td>";
		str += "</tr>";

		str += "<tr>";
		str += "	<td>";
		str += "		タグ";
		str += "	</td>";
		str += "	<td colspan=\"2\">";
		str += data[TAG];
		str += "	</td>";
		str += "</tr>";

		str += "<tr>";
		str += "	<td>";
		str += "		LIFE";
		str += "	</td>";
		str += "	<td colspan=\"2\">";
		str += data[HP];
		str += "	</td>";
		str += "</tr>";

		str += "<tr>";
		str += "	<td>";
		str += "		バトンタッチ";
		str += "	</td>";
		str += "	<td colspan=\"2\">";
		str += str_to_img(data[BATON]);
		str += "	</td>";
		str += "</tr>";

		if(data[KEYWORD] != "")
		{
			tmpArr = data[KEYWORD].split("<br>");

			str += "<tr rowspan=\"2\">";
			str += "	<td>";
			str += ""+str_to_img(tmpArr[0]);
			str += "	</td>";
			str += "	<td colspan=\"2\">";
			str += tmpArr[1];
			str += "	</td>";
			str += "</tr>";
			str += "<tr>";
			str += "	<td colspan=\"3\">";
			for(i = 2; i < tmpArr.length; i++)
			{
				if(i != 2)
				{
					str += "<br>";
				}
				str += tmpArr[i];
			}
			str += "	</td>";
			str += "</tr>";
		}

		tmpArr = data[ART1].split("<br>");

		str += "<tr>";
		str += "	<td>";
		str += str_to_img(tmpArr[0]);
		str += "	</td>";
		str += "	<td>";
		str += tmpArr[1];
		str += "	</td>";
		str += "	<td>";
		str += power_to_img(tmpArr[2]);
		str += "	</td>";
		str += "</tr>";
		if(tmpArr[3] != undefined)
		{
			str += "<tr>";
			str += "	<td colspan=\"3\">";
			for(i = 3; i < tmpArr.length; i++)
			{
				if(i != 3)
				{
					str += "<br>";
				}
				str += tmpArr[i];
			}
			str += "	</td>";
			str += "</tr>";
		}

		if(data[ART2] != "")
		{
			tmpArr = data[ART2].split("<br>");

			str += "<tr>";
			str += "	<td>";
			str += str_to_img(tmpArr[0]);
			str += "	</td>";
			str += "	<td>";
			str += tmpArr[1];
			str += "	</td>";
			str += "	<td>";
			str += power_to_img(tmpArr[2]);
			str += "	</td>";
			str += "</tr>";
			if(tmpArr[3] != "")
			{
				str += "<tr>";
				str += "	<td colspan=\"3\">";
				for(i = 3; i < tmpArr.length; i++)
				{
					if(i != 3)
					{
						str += "<br>";
					}
					str += tmpArr[i];
				}
				str += "	</td>";
				str += "</tr>";
			}
		}

		if(data[ART3] != "")
		{
			tmpArr = data[ART3].split("<br>");

			str += "<tr>";
			str += "	<td>";
			str += str_to_img(tmpArr[0]);
			str += "	</td>";
			str += "	<td>";
			str += tmpArr[1];
			str += "	</td>";
			str += "	<td>";
			str += power_to_img(tmpArr[2]);
			str += "	</td>";
			str += "</tr>";
			if(tmpArr[3] != "")
			{
				str += "<tr>";
				str += "	<td colspan=\"3\">";
				for(i = 3; i < tmpArr.length; i++)
				{
					if(i != 3)
					{
						str += "<br>";
					}
					str += tmpArr[i];
				}
				str += "	</td>";
				str += "</tr>";
			}
		}

		if(data[ART4] != "")
		{
			tmpArr = data[ART4].split("<br>");

			str += "<tr>";
			str += "	<td>";
			str += str_to_img(tmpArr[0]);
			str += "	</td>";
			str += "	<td>";
			str += tmpArr[1];
			str += "	</td>";
			str += "	<td>";
			str += power_to_img(tmpArr[2]);
			str += "	</td>";
			str += "</tr>";
			if(tmpArr[3] != "")
			{
				str += "<tr>";
				str += "	<td colspan=\"3\">";
				for(i = 3; i < tmpArr.length; i++)
				{
					if(i != 3)
					{
						str += "<br>";
					}
					str += tmpArr[i];
				}
				str += "	</td>";
				str += "</tr>";
			}
		}

		if(data[ART5] != "")
		{
			tmpArr = data[ART5].split("<br>");

			str += "<tr>";
			str += "	<td>";
			str += str_to_img(tmpArr[0]);
			str += "	</td>";
			str += "	<td>";
			str += tmpArr[1];
			str += "	</td>";
			str += "	<td>";
			str += power_to_img(tmpArr[2]);
			str += "	</td>";
			str += "</tr>";
			if(tmpArr[3] != "")
			{
				str += "<tr>";
				str += "	<td colspan=\"3\">";
				for(i = 3; i < tmpArr.length; i++)
				{
					if(i != 3)
					{
						str += "<br>";
					}
					str += tmpArr[i];
				}
				str += "	</td>";
				str += "</tr>";
			}
		}

		if(data[EXTRA] != "")
		{
			str += "<tr>";
			str += "	<td>";
			str += "		<img class='icon_img' src='img/extra.png'></img>";
			str += "	</td>";
			str += "	<td colspan=\"2\">";
			str += data[EXTRA];
			str += "	</td>";
			str += "</tr>";
		}
	}
	else if(data[TYPE] == "サポート")
	{
		str += "<tr>";
		str += "	<td width=\"115px\">";
		str += "		カードナンバー";
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
		str += "		カードタイプ";
		str += "	</td>";
		str += "	<td>";
		str += data[TYPE];
		str += "	</td>";
		str += "</tr>";

		str += "<tr>";
		str += "	<td>";
		str += "		サブタイプ";
		str += "	</td>";
		str += "	<td>";
		str += data[TAG];
		str += "	</td>";
		str += "</tr>";

		if(data[EXTRA] != "")
		{
			str += "<tr>";
			str += "	<td>";
			str += "		LIMITED";
			str += "	</td>";
			str += "	<td>";
			str += data[EXTRA];
			str += "	</td>";
			str += "</tr>";
		}

		str += "<tr>";
		str += "	<td colspan=\"2\">";
		str += data[ART1];
		str += "	</td>";
		str += "</tr>";
	}
	else if(data[TYPE] == "エール")
	{
		str += "<tr>";
		str += "	<td width=\"115px\">";
		str += "		カードナンバー";
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
		str += "		カードタイプ";
		str += "	</td>";
		str += "	<td>";
		str += data[TYPE];
		str += "	</td>";
		str += "</tr>";

		str += "<tr>";
		str += "	<td colspan=\"2\">";
		str += data[ART1];
		str += "	</td>";
		str += "</tr>";
	}

	$("#infoTable").html(str);
}

function showOdeck()
{
	for(i = 0; i < 1; i++)
	{
		if(i < odeckArr.length)
		{
			$("#odeck_" + i).attr("src", odeckArr[i][SRC]);
			$("#odeck_" + i).attr("alt", odeckArr[i][ID]);
		}
		else
		{
			$("#odeck_" + i).attr("src", "img/empty.jpg");
			$("#odeck_" + i).attr("alt", "");
		}
	}

	updatechart();
}

function showYdeck()
{
	for(i = 0; i < 20; i++)
	{
		if(i < ydeckArr.length)
		{
			$("#ydeck_" + i).attr("src", ydeckArr[i][SRC]);
			$("#ydeck_" + i).attr("alt", ydeckArr[i][ID]);
		}
		else
		{
			$("#ydeck_" + i).attr("src", "img/empty.jpg");
			$("#ydeck_" + i).attr("alt", "");
		}
	}

	updatechart();
}

function showMdeck()
{
	for(i = 0; i < 50; i++)
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

function sortYdeck(x)
{

	////////////////////////////////////
	var updated = 0;

	for(i = 0; i < ydeckArr.length && !updated; i++)
	{
		if(color2num(x[COLOR]) < color2num(ydeckArr[i][COLOR]))
		{
			updated = 1;
			ydeckArr.splice(i, 0, x);
			break;
		}	
	}

	if(!updated)
	{
		ydeckArr.push(x);
	}


	addyellcounter(x);
	showYdeck();
}

function sortOdeck(x)
{
	odeckArr.push(x);

	showOdeck();
}

function showAlldeck()
{
	showOdeck();
	showYdeck();
	showMdeck();
}

function color2num(color)
{
	if(color == "白")
	{
		return 0;
	}
	else if(color == "白緑")
	{
		return 1;
	}
	else if(color == "緑")
	{
		return 2;
	}
	else if(color == "赤")
	{
		return 3;
	}
	else if(color == "青")
	{
		return 4;
	}
	else //無
	{
		return 5;
	}
}

function type2num(type)
{
	if(type.indexOf("サポート"))
	{
		return 0;
	}
	else //シグニ
	{
		return 1;
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

function tag2num(tag)
{
	if(tag == "スタッフ")
	{
		return 0;
	}
	else if(tag == "アイテム")
	{
		return 1;
	}
	else if(tag == "イベント")
	{
		return 2;
	}
	else if(tag == "ツール")
	{
		return 3;
	}
	else if(tag == "マスコット")
	{
		return 4;
	}
	else if(tag == "ファン")
	{
		return 5;
	}
}

function member2num(x)
{
	var index = 0;
	var memberArray = [
		"ときのそら",
		"AZKi",
		"SorAZ",
		"星街すいせい",
		"さくらみこ",
		"アキ・ローゼンタール",
		"兎田ぺこら",
		"不知火フレア",
		"白銀ノエル",
		"宝鐘マリン",
		"天音かなた",
		"尾丸ポルカ",
		"鷹嶺ルイ",
		"博衣こより",
		"風真いろは",
		"ムーナ・ホシノヴァ",
		"アイラニ・イオフィフティーン",
		"パヴォリア・レイネ",
		"ベスティア・ゼータ",
		"こぼ・かなえる",
		"森カリオペ",
		"小鳥遊キアラ",
		"ワトソン・アメリア",
		"IRyS",
		"オーロ・クロニー",
		"七詩ムメイ",
		"ハコス・ベールズ"];

	for(index = 0; index < nameArray.length; index++)
	{
		if(x == nameArray[index])
		{
			console.log(index + x);
			return index;
		}
	}
	console.log("Error");
	return 0;
	
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
				if(x[EXTRA] != "このホロメンはデッキに何枚でも入れられる")
				{
					if(same_card == 4)
					{
						return;
					}
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
				if(x[TYPE] == "サポート")
				{
					if(tag2num(x[TAG]) < tag2num(mdeckArr[i][TAG]))
					{
						updated = 1;
						mdeckArr.splice(i, 0, x);
						break;
					}
				}
				else
				{
					if(sort_method == 0)
					{
						if(level2num(x[LEVEL]) < level2num(mdeckArr[i][LEVEL]))
						{
							updated = 1;
							mdeckArr.splice(i, 0, x);
							break;
						}
						else if(level2num(x[LEVEL]) == level2num(mdeckArr[i][LEVEL]))
						{
							if(color2num(x[COLOR]) < color2num(mdeckArr[i][COLOR]))
							{
								updated = 1;
								mdeckArr.splice(i, 0, x);
								break;
							}
							else if(color2num(x[COLOR]) == color2num(mdeckArr[i][COLOR]))
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
					else
					{
						if(member2num(x[NAME]) < member2num(mdeckArr[i][NAME]))
						{
							updated = 1;
							mdeckArr.splice(i, 0, x);
							break;
						}
						else if(member2num(x[NAME]) == member2num(mdeckArr[i][NAME]))
						{
							if(level2num(x[LEVEL]) < level2num(mdeckArr[i][LEVEL]))
							{
								updated = 1;
								mdeckArr.splice(i, 0, x);
								break;
							}
							else if(level2num(x[LEVEL]) == level2num(mdeckArr[i][LEVEL]))
							{
								if(color2num(x[COLOR]) < color2num(mdeckArr[i][COLOR]))
								{
									updated = 1;
									mdeckArr.splice(i, 0, x);
									break;
								}
								else if(color2num(x[COLOR]) == color2num(mdeckArr[i][COLOR]))
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
	if(mdeckArr.length != 0 )
	{
		$("#leveldiv").show();
		$("#leveltitle").show();
		levelobj.data.labels = ['Spot: ' + mdeck_spot, 'Debut: ' + mdeck_debut, '1st: ' + mdeck_1st, '2nd: ' + mdeck_2nd, 'サポート: ' + mdeck_support];
		levelobj.data.datasets[0].data = [mdeck_spot, mdeck_debut, mdeck_1st, mdeck_2nd, mdeck_support];
		levelobj.update();

		// $("#show_leveldiv").show();
		// show_levelobj.data.labels = ['L1: ' + mdeck_l1, 'L2: ' + mdeck_l2, 'L3: ' + mdeck_l3, 'spell: ' + mdeck_spell];
		// show_levelobj.data.datasets[0].data = [mdeck_l1, mdeck_l2, mdeck_l3, mdeck_spell];
		// show_levelobj.update();

		if(mdeck_white != 0 || mdeck_red != 0 || mdeck_blue != 0 || mdeck_green != 0 || mdeck_nocolor != 0)
		{
			$("#colordiv").show();
			$("#colortitle").show();
			colorobj.data.labels = ['白: ' + mdeck_white, '赤: ' + mdeck_red, '青: ' + mdeck_blue, '緑: ' + mdeck_green, '無: ' + mdeck_nocolor];
			colorobj.data.datasets[0].data = [mdeck_white, mdeck_red, mdeck_blue, mdeck_green, mdeck_nocolor];
			colorobj.update();
		}

		// $("#show_colordiv").show();
		// show_colorobj.data.labels = ['白: ' + mdeck_white, '赤: ' + mdeck_red, '青: ' + mdeck_blue, '緑: ' + mdeck_green, '黒: ' + mdeck_black, '無: ' + mdeck_nocolor];
		// show_colorobj.data.datasets[0].data = [mdeck_white, mdeck_red, mdeck_blue, mdeck_green, mdeck_black, mdeck_nocolor];
		// show_colorobj.update();
	}
	else
	{
		$("#leveldiv").hide();
		$("#leveltitle").hide();
		// $("#show_leveldiv").hide();
		if(mdeck_white == 0 && mdeck_red == 0 && mdeck_blue == 0 && mdeck_green == 0 && mdeck_nocolor == 0)
		{
			$("#colordiv").hide();
			$("#colortitle").hide();
		}
		// $("#show_colordiv").hide();
	}

	if(ydeckArr.length != 0 )
	{
		$("#yelldiv").show();
		$("#yelltitle").show();
		yellobj.data.labels = ['白: ' + ydeck_white, '赤: ' + ydeck_red, '青: ' + ydeck_blue, '緑: ' + ydeck_green, '無: ' + ydeck_nocolor];
		yellobj.data.datasets[0].data = [ydeck_white, ydeck_red, ydeck_blue, ydeck_green, ydeck_nocolor];
		yellobj.update();

		// $("#show_yelldiv").show();
		// show_lbobj.data.labels = ['LB有り: ' + mdeck_burst, 'LB無し: ' + mdeck_no_burst];
		// show_lbobj.data.datasets[0].data = [mdeck_burst, mdeck_no_burst];
		// show_lbobj.update();
	}
	else
	{
		$("#yelldiv").hide();
		$("#yelltitle").hide();
		// $("#show_yelldiv").hide();
	}
}

function delDeck(x, idx, array)
{
	for(i = 0; i < cardData.length; i++)
	{
		if(x.alt == cardData[i][ID] && (cardData[i][TYPE] != "エール" && cardData[i][TYPE] != "推しホロメン"))
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
		else if(x.alt == cardData[i][ID] && (cardData[i][TYPE] == "エール"))
		{
			for(j = 0; j < ydeckArr.length; j++)
			{
				if(cardData[i][ID] == ydeckArr[j][ID])
				{
					array.splice(j, 1);
					delyellcounter(cardData[i]);
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
	if(x[LEVEL] == "Spot")
	{
		mdeck_spot++;
	}
	else if(x[LEVEL] == "Debut")
	{
		mdeck_debut++;
	}
	else if(x[LEVEL] == "1st")
	{
		mdeck_1st++;
	}
	else if(x[LEVEL] == "2nd")
	{
		mdeck_2nd++;
	}
	else
	{
		mdeck_support++;
	}

	if(x[COLOR].indexOf("赤") != -1)
	{
		mdeck_red++;
	}

	if(x[COLOR].indexOf("青") != -1)
	{
		mdeck_blue++;
	}

	if(x[COLOR].indexOf("緑") != -1)
	{
		mdeck_green++;
	}

	if(x[COLOR].indexOf("黒") != -1)
	{
		mdeck_black++;
	}

	if(x[COLOR].indexOf("白") != -1)
	{
		mdeck_white++;
	}

	if(x[COLOR].indexOf("◇") != -1)
	{
		mdeck_nocolor++;
	}

	showcounter();
}

function addyellcounter(x)
{
	if(x[COLOR].indexOf("赤") != -1)
	{
		ydeck_red++;
	}

	if(x[COLOR].indexOf("青") != -1)
	{
		ydeck_blue++;
	}

	if(x[COLOR].indexOf("緑") != -1)
	{
		ydeck_green++;
	}

	if(x[COLOR].indexOf("黒") != -1)
	{
		ydeck_black++;
	}

	if(x[COLOR].indexOf("白") != -1)
	{
		ydeck_white++;
	}

	if(x[COLOR].indexOf("◇") != -1)
	{
		ydeck_nocolor++;
	}

	showcounter();
}

function delmaincounter(x)
{
	if(x[LEVEL] == "Spot")
	{
		mdeck_spot--;
	}
	else if(x[LEVEL] == "Debut")
	{
		mdeck_debut--;
	}
	else if(x[LEVEL] == "1st")
	{
		mdeck_1st--;
	}
	else if(x[LEVEL] == "2nd")
	{
		mdeck_2nd--;
	}
	else if(x[TYPE] == "サポート")
	{
		mdeck_support--;
	}

	if(x[COLOR].indexOf("赤") != -1)
	{
		mdeck_red--;
	}

	if(x[COLOR].indexOf("青") != -1)
	{
		mdeck_blue--;
	}

	if(x[COLOR].indexOf("緑") != -1)
	{
		mdeck_green--;
	}

	if(x[COLOR].indexOf("黒") != -1)
	{
		mdeck_black--;
	}

	if(x[COLOR].indexOf("白") != -1)
	{
		mdeck_white--;
	}

	if(x[COLOR].indexOf("◇") != -1)
	{
		mdeck_nocolor--;
	}

	showcounter();
}

function delyellcounter(x)
{
	if(x[COLOR].indexOf("赤") != -1)
	{
		ydeck_red--;
	}

	if(x[COLOR].indexOf("青") != -1)
	{
		ydeck_blue--;
	}

	if(x[COLOR].indexOf("緑") != -1)
	{
		ydeck_green--;
	}

	if(x[COLOR].indexOf("黒") != -1)
	{
		ydeck_black--;
	}

	if(x[COLOR].indexOf("白") != -1)
	{
		ydeck_white--;
	}

	if(x[COLOR].indexOf("◇") != -1)
	{
		ydeck_nocolor--;
	}

	showcounter();
}

function showcounter()
{
	var str = "";
	if(mdeck_spot)
	{
		str+= "&emsp;&emsp;Spot: " + mdeck_spot;
	}
	if(mdeck_debut)
	{
		str+= "&emsp;&emsp;Debut: " + mdeck_debut;
	}
	if(mdeck_1st)
	{
		str+= "&emsp;&emsp;1st: " + mdeck_1st;
	}
	if(mdeck_2nd)
	{
		str+= "&emsp;&emsp;2nd: " + mdeck_2nd;
	}
	if(mdeck_support)
	{
		str+= "&emsp;&emsp;サポート: " + mdeck_support;
	}

	str+= "<br><br>"

	if(ydeck_red)
	{
		str+= "&emsp;&emsp;赤: " + ydeck_red;
	}
	if(ydeck_blue)
	{
		str+= "&emsp;&emsp;青: " + ydeck_blue;
	}
	if(ydeck_green)
	{
		str+= "&emsp;&emsp;緑: " + ydeck_green;
	}
	if(ydeck_black)
	{
		str+= "&emsp;&emsp;黒: " + ydeck_black;
	}
	if(ydeck_white)
	{
		str+= "&emsp;&emsp;白: " + ydeck_white;
	}
	if(ydeck_nocolor)
	{
		str+= "&emsp;&emsp;無: " + ydeck_nocolor;
	}

	str+= "<br><br>"

	if(mdeck_red)
	{
		str+= "&emsp;&emsp;赤: " + mdeck_red;
	}
	if(mdeck_blue)
	{
		str+= "&emsp;&emsp;青: " + mdeck_blue;
	}
	if(mdeck_green)
	{
		str+= "&emsp;&emsp;緑: " + mdeck_green;
	}
	if(mdeck_black)
	{
		str+= "&emsp;&emsp;黒: " + mdeck_black;
	}
	if(mdeck_white)
	{
		str+= "&emsp;&emsp;白: " + mdeck_white;
	}
	if(mdeck_nocolor)
	{
		str+= "&emsp;&emsp;無: " + mdeck_nocolor;
	}

	str+= "<br><br>"

	$("#counter").html(str);
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
				if(cardData[i][TYPE] == "推しホロメン")
				{
					if(odeckArr.length < 1)
					{
						sortOdeck(cardData[i]);
					}
				}
				else if(cardData[i][TYPE] == "エール")
				{
					if(ydeckArr.length < 20)
					{
						sortYdeck(cardData[i]);
					}
				}
				else if(cardData[i][TYPE] == "サポート" || cardData[i][TYPE] == "Buzzホロメン" || cardData[i][TYPE] == "ホロメン")
				{
					if(mdeckArr.length < 50)
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
    var oarray = [];
    var yarray = [];
    var marray = [];
    var array = [];
    var i = 0;

    filename = $("#deckTitle").val() + ".csv";

    for(i = 0; i < odeckArr.length; i++)
    {
    	oarray.push(odeckArr[i][ID]);
    }

    for(i = 0; i < ydeckArr.length; i++)
    {
    	yarray.push(ydeckArr[i][ID]);
    }

    for(i = 0; i < mdeckArr.length; i++)
    {
    	marray.push(mdeckArr[i][ID]);
    }

    oarray.unshift("odeck");
    yarray.unshift("ydeck");
    marray.unshift("mdeck");

    array.push(oarray);
    array.push(yarray);
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

function selectSort()
{
	var sort_method = $("#selectSort").val();
	var i = 0;

	console.log(mdeckArr);
	console.log(sort_method);

	for(i = 0; i < mdeckArr.length; i++)
	{
		sortMdeck(mdeckArr[i]);
	}
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

function deletydecklist()
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
		localStorage.setItem("HOLODeckNameList", deckNamelist);
		updateDecklist("");
		dataInit();
	}
}

function readSingleCode()
{
	var oarray = [];
    var yarray = [];
    var marray = [];
    var array = [];
    var i = 0, j = 0;

    var contents = $("#textCode").val();

    array = contents.split("\n");

	odeckArr = [];

	oarray = array[0].split(",");
	for(i = 1; i < oarray.length; i++)
	{
		for(j = 0; j < cardData.length; j++)
	  	{
	  		if(oarray[i] == cardData[j][ID])
	  		{
	  			odeckArr.push(cardData[j]);
	  			break;
	  		}
	  	}
	}

    ydeckArr = [];
      
    yarray = array[1].split(",");
    for(i = 1; i < yarray.length; i++)
    {
      	for(j = 0; j < cardData.length; j++)
      	{
      		if(yarray[i] == cardData[j][ID])
      		{
      			ydeckArr.push(cardData[j]);
      			break;
      		}
      	}
    }

    mdeckArr = [];
      
    marray = array[2].split(",");
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
    var oarray = [];
    var parray = [];
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

          odeckArr = [];

          oarray = array[0].split(",");
          for(i = 1; i < oarray.length; i++)
          {
          	for(j = 0; j < cardData.length; j++)
          	{
          		if(oarray[i] == cardData[j][ID])
          		{
          			odeckArr.push(cardData[j]);
          		}
          	}
          }

          ydeckArr = [];
          
          yarray = array[2].split(",");
          for(i = 1; i < yarray.length; i++)
          {
          	for(j = 0; j < cardData.length; j++)
          	{
          		if(yarray[i] == cardData[j][ID])
          		{
          			ydeckArr.push(cardData[j]);
          		}
          	}
          }

          mdeckArr = [];
          
          marray = array[3].split(",");
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

	ydeck_red = 0;
	ydeck_blue = 0;
	ydeck_green = 0;
	ydeck_black = 0;
	ydeck_white = 0;
	ydeck_nocolor = 0;

	mdeck_debut = 0;
	mdeck_1st = 0;
	mdeck_2nd = 0;
	mdeck_spot = 0;
	mdeck_support = 0;

	mdeck_red = 0;
	mdeck_blue = 0;
	mdeck_green = 0;
	mdeck_black = 0;
	mdeck_white = 0;
	mdeck_nocolor = 0;

	for(i = 0; i < mdeckArr.length; i++)
	{
		addmaincounter(mdeckArr[i])
	}

	for(i = 0; i < ydeckArr.length; i++)
	{
		addyellcounter(ydeckArr[i])
	}
}

function search()
{
	var i = 0, j = 0;
	var dataStr = "", searchStr = "", tmpStr = "";
	var color_flag = 0;

	rdeckArr = [];

	for(i = 0; i < cardData.length; i++)
	{
		if($('#selectProduct').val() != 0)
		{
			if(cardData[i][PRODUCT] != $('#selectProduct').val())
			{
				continue;
			}
		}

		if($('#selectHolomem').val() != 0)
		{
			if(cardData[i][NAME] != $('#selectHolomem').val())
			{
				if($('#selectHolomem').val() == "AZKi" || $('#selectHolomem').val() == "ときのそら")
				{
					if(cardData[i][NAME] != "SorAZ")
					{
						continue;
					}
				}
				else
				{
					continue;
				}
			}
		}

		if($('#selectTag').val() != 0)
		{
			dataStr = ' ' + cardData[i][TAG];
			if(dataStr.indexOf(" #" + $('#selectTag').val()) == -1)
			{
				continue;
			}
		}

		if(!$('#oshiholomem').is(":checked"))
		{
			if(cardData[i][TYPE] == "推しホロメン")
			{
				continue;
			}
		}

		if(!$('#holomem').is(":checked"))
		{
			if(cardData[i][TYPE] == "ホロメン")
			{
				continue;
			}
		}

		if(!$('#buzzholomem').is(":checked"))
		{
			if(cardData[i][TYPE] == "Buzzホロメン")
			{
				continue;
			}
		}

		if(!$('#support').is(":checked"))
		{
			if(cardData[i][TYPE] == "サポート")
			{
				continue;
			}
		}

		if(!$('#yell').is(":checked"))
		{
			if(cardData[i][TYPE] == "エール")
			{
				continue;
			}
		}

		if(!$('#spot').is(":checked") && !$('#debut').is(":checked") && !$('#1st').is(":checked") && !$('#2nd').is(":checked"))
		{
		}
		else
		{
			if(!$('#spot').is(":checked"))
			{
				if(cardData[i][LEVEL] == "Spot")
				{
					continue;
				}
			}

			if(!$('#debut').is(":checked"))
			{
				if(cardData[i][LEVEL] == "Debut")
				{
					continue;
				}
			}

			if(!$('#1st').is(":checked"))
			{
				if(cardData[i][LEVEL] == "1st")
				{
					continue;
				}
			}

			if(!$('#2nd').is(":checked"))
			{
				if(cardData[i][LEVEL] == "2nd")
				{
					continue;
				}
			}
		}

		if(!$('#support').is(":checked"))
		{
			if(cardData[i][TYPE] == "サポート")
			{
				continue;
			}
		}
		else
		{
			if(!$('#limited').is(":checked") || !$('#no_limited').is(":checked"))
			{
				if($('#no_limited').is(":checked"))
				{
					if(cardData[i][TYPE] == "サポート")
					{
						if(cardData[i][EXTRA] == "ターンに1枚しか使えない。")
						{
							continue;
						}
					}
				}

				if($('#limited').is(":checked"))
				{
					if(cardData[i][TYPE] == "サポート")
					{
						if(cardData[i][EXTRA] != "ターンに1枚しか使えない。")
						{
							continue;
						}
					}
				}
			}
		}

		if(!$('#staff').is(":checked") && !$('#item').is(":checked") && !$('#event').is(":checked") && !$('#tool').is(":checked") && !$('#mascot').is(":checked") && !$('#fan').is(":checked"))
		{
		}
		else
		{
			if(!$('#staff').is(":checked"))
			{
				if(cardData[i][TAG] == "スタッフ")
				{
					continue;
				}
			}

			if(!$('#item').is(":checked"))
			{
				if(cardData[i][TAG] == "アイテム")
				{
					continue;
				}
			}

			if(!$('#event').is(":checked"))
			{
				if(cardData[i][TAG] == "イベント")
				{
					continue;
				}
			}

			if(!$('#tool').is(":checked"))
			{
				if(cardData[i][TAG] == "ツール")
				{
					continue;
				}
			}

			if(!$('#mascot').is(":checked"))
			{
				if(cardData[i][TAG] == "マスコット")
				{
					continue;
				}
			}

			if(!$('#fan').is(":checked"))
			{
				if(cardData[i][TAG] == "ファン")
				{
					continue;
				}
			}
		}

		if(!$('#support').is(":checked"))
		{
			if(!$('#multicolor').is(":checked"))
			{
				color_flag = 0;

				if(!$('#red').is(":checked") && !$('#blue').is(":checked") && !$('#green').is(":checked") && !$('#white').is(":checked") && !$('#nocolor').is(":checked"))
				{

				}
				else
				{

					if($('#red').is(":checked"))
					{
						if(cardData[i][COLOR].indexOf("赤") != -1)
						{
							color_flag = 1;
						}
					}

					if($('#blue').is(":checked"))
					{
						if(cardData[i][COLOR].indexOf("青") != -1)
						{
							color_flag = 1;
						}
					}

					if($('#green').is(":checked"))
					{
						if(cardData[i][COLOR].indexOf("緑") != -1)
						{
							color_flag = 1;
						}
					}

					// if($('#black').is(":checked"))
					// {
					// 	if(cardData[i][COLOR].indexOf("黒") != -1)
					// 	{
					// 		color_flag = 1;
					// 	}
					// }

					if($('#white').is(":checked"))
					{
						if(cardData[i][COLOR].indexOf("白") != -1)
						{
							color_flag = 1;
						}
					}

					if($('#nocolor').is(":checked"))
					{
						if(cardData[i][COLOR].indexOf("◇") != -1)
						{
							color_flag = 1;
						}
					}

					if(color_flag == 0)
					{
						continue;
					}
				}
			}
			else
			{
				if(cardData[i][COLOR].length == 1)
				{
					continue;
				}
				else
				{
					if($('#red').is(":checked"))
					{
						if(cardData[i][COLOR].indexOf("赤") == -1)
						{
							continue;
						}
					}

					if($('#blue').is(":checked"))
					{
						if(cardData[i][COLOR].indexOf("青") == -1)
						{
							continue;
						}
					}

					if($('#green').is(":checked"))
					{
						if(cardData[i][COLOR].indexOf("緑") == -1)
						{
							continue;
						}
					}

					// if($('#black').is(":checked"))
					// {
					// 	if(cardData[i][COLOR].indexOf("黒") == -1)
					// 	{
					// 		continue;
					// 	}
					// }

					if($('#white').is(":checked"))
					{
						if(cardData[i][COLOR].indexOf("白") == -1)
						{
							continue;
						}
					}

					if($('#nocolor').is(":checked"))
					{
						if(cardData[i][COLOR].indexOf("◇") == -1)
						{
							continue;
						}
					}
				}
			}
		}

		if($('#textsearch').val().length != 0)
		{
			for(j = 0; j < EXTRA + 1 ; j++)
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
	$('#multicolor').prop('checked', false);
}

function uncheckall()
{
	$('#textsearch').val("");
	$('input:checkbox').prop('checked', false);
	$('#selectHolomem').val(0);
	$('#selectTag').val(0);
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

function checkDeck()
{
	var i = 0, j = 0, error = 0, error_tmp = 0, ret = 0;
	var listId = $('#selectProduct').get(0);
	var listType = $('#selectType').get(0);
	var listFaction = $('#selectTag').get(0);

	for(i = 0; i < cardData.length; i++)
	{
		error = 0;

		//ID
		error_tmp = 1;
		for(j = 1; j < listId.options.length; j++)
		{
			if(cardData[i][ID].indexOf(listId.options[j].value) != -1)
			{
				error_tmp = 0;
				break;
			}
		}

		if(error_tmp)
		{
			error = 1;
			console.log("ID");
		}

		//SRC
		if(cardData[i][SRC].indexOf("https://") == -1 || cardData[i][SRC].indexOf(cardData[i][ID]) == -1)
		{
			error = 1;
			console.log("SRC");
		}

		//NAME
		if(cardData[i][NAME] == "")
		{
			error = 1;
			console.log("NAME");
		}

		//RARE
		if(cardData[i][RARE] != "ST" &&
			cardData[i][RARE] != "LR" &&
			cardData[i][RARE] != "LC" &&
			cardData[i][RARE] != "SR" &&
			cardData[i][RARE] != "SSR" &&
			cardData[i][RARE] != "R" &&
			cardData[i][RARE] != "C" &&
			cardData[i][RARE] != "PI" &&
			cardData[i][RARE] != "TK" &&
			cardData[i][RARE] != "PR" &&
			cardData[i][RARE] != "SP" &&
			cardData[i][RARE] != "Re" &&
			cardData[i][RARE] != "L"
			)
		{
			error = 1;
			console.log("RARE");
		}

		//TYPE
		if(cardData[i][TYPE] != "ルリグ" &&
			cardData[i][TYPE] != "アシストルリグ" &&
			cardData[i][TYPE] != "ピース" &&
			cardData[i][TYPE] != "ピース リレー" &&
			cardData[i][TYPE] != "ピース クラフト" &&
			cardData[i][TYPE] != "アーツ" &&
			cardData[i][TYPE] != "シグニ" &&
			cardData[i][TYPE] != "シグニ クラフト" &&
			cardData[i][TYPE] != "シグニ レゾナ/クラフト" &&
			cardData[i][TYPE] != "スペル" &&
			cardData[i][TYPE] != "スペル クラフト"
			)
		{
			error = 1;
			console.log("TYPE");
		}
		else
		{
			if(cardData[i][TYPE] == "ルリグ")
			{
				//CLASS
				error_tmp = 1;
				for(j = 1; j < listLrig.options.length; j++)
				{
					if(cardData[i][CLASS].indexOf(listLrig.options[j].value) != -1)
					{
						error_tmp = 0;
						break;
					}
				}

				if(error_tmp)
				{
					error = 1;
					console.log("CLASS");
				}

				//LEVEL
				if(cardData[i][LEVEL] != "0" &&
					cardData[i][LEVEL] != "1" &&
					cardData[i][LEVEL] != "2" &&
					cardData[i][LEVEL] != "3")
				{
					error = 1;
					console.log("LEVEL");
				}

				//COST
				if(cardData[i][ID] == "WXDi-P11-010B")
				{
					if(cardData[i][COST] != "")
					{
						error = 1;
						console.log("COST");
					}
				}
				else
				{
					if(cardData[i][COST].indexOf("×") == -1)
					{
						error = 1;
						console.log("COST");
					}
				}

				//LIMIT
				if(cardData[i][LEVEL] == 0)
				{
					if(cardData[i][LIMIT] != 0)
					{
						error = 1;
						console.log("LIMIT");
					}
				}
				else if(cardData[i][LEVEL] == 1)
				{
					if(cardData[i][LIMIT] != 2)
					{
						error = 1;
						console.log("LIMIT");
					}
				}
				else if(cardData[i][LEVEL] == 2)
				{
					if(cardData[i][LIMIT] != 5)
					{
						error = 1;
						console.log("LIMIT");
					}
				}
				else if(cardData[i][LEVEL] == 3)
				{
					if(cardData[i][ID] == "WXDi-P11-010B")
					{
						if(cardData[i][LIMIT] != 9)
						{
							error = 1;
							console.log("LIMIT");
						}
					}
					else if(cardData[i][ID] == "WXDi-P11-010A")
					{
						if(cardData[i][LIMIT] != 5)
						{
							error = 1;
							console.log("LIMIT");
						}
					}
					else
					{
						if(cardData[i][LIMIT] != 6)
						{
							error = 1;
							console.log("LIMIT");
						}
					}
				}

				//POWER
				if(cardData[i][POWER] != "")
				{
					error = 1;
					console.log("POWER");
				}

				//COIN
				if(cardData[i][CLASS] == "リル" ||
					cardData[i][CLASS] == "ドーナ" ||
					cardData[i][CLASS] == "あや" ||
					cardData[i][CLASS] == "カーニバル" ||
					cardData[i][CLASS] == "レイラ" ||
					cardData[i][CLASS] == "メル" ||
					cardData[i][CLASS] == "ママ" ||
					cardData[i][CLASS] == "ナナシ" ||
					cardData[i][CLASS] == "グズ子"
					)
				{
					if(cardData[i][LEVEL] == 0 || cardData[i][LEVEL] == 3)
					{
						if(cardData[i][COIN] == "")
						{
							error = 1;
							console.log("COIN");
						}
					}
				}
				else
				{
					if(cardData[i][COIN] != "")
					{
						error = 1;
						console.log("COIN");
					}
				}

				//TIMING
				if(cardData[i][TIMING] != "")
				{
					error = 1;
					console.log("TIMING");
				}

				//LB
				if(cardData[i][LB] != "")
				{
					error = 1;
					console.log("LB");
				}

				//TEAM
				if(cardData[i][CLASS] == "アト" ||
					(cardData[i][CLASS] == "タウィル" && cardData[i][ID].indexOf("WXDi-P16"))||
					(cardData[i][CLASS] == "ウムル" && cardData[i][ID].indexOf("WXDi-P16"))
					)
				{
					if(cardData[i][TEAM] != "アンシエント・サプライズ")
					{
						error = 1;
						console.log("TEAM");
					}
				}
				else if(cardData[i][CLASS] == "リゼ" ||
					cardData[i][CLASS] == "アンジュ" ||
					cardData[i][CLASS] == "とこ"
					)
				{
					if(cardData[i][TEAM] != "さんばか")
					{
						error = 1;
						console.log("TEAM");
					}
				}
				else if(cardData[i][CLASS] == "ヒラナ" ||
					cardData[i][CLASS] == "アキノ" ||
					cardData[i][CLASS] == "レイ"
					)
				{
					if(cardData[i][TEAM] != "No Limit")
					{
						error = 1;
						console.log("TEAM");
					}
				}
				else if(cardData[i][CLASS] == "LION" ||
					cardData[i][CLASS] == "LOVIT" ||
					cardData[i][CLASS] == "WOLF"
					)
				{
					if(cardData[i][TEAM] != "Card Jockey")
					{
						error = 1;
						console.log("TEAM");
					}
				}
				else if(cardData[i][CLASS] == "タマゴ" ||
					cardData[i][CLASS] == "ノヴァ" ||
					cardData[i][CLASS] == "バン"
					)
				{
					if(cardData[i][TEAM] != "うちゅうのはじまり")
					{
						error = 1;
						console.log("TEAM");
					}
				}
				else if(cardData[i][CLASS] == "ムジカ" ||
					cardData[i][CLASS] == "マドカ" ||
					cardData[i][CLASS] == "サンガ"
					)
				{
					if(cardData[i][TEAM] != "DIAGRAM")
					{
						error = 1;
						console.log("TEAM");
					}
				}
				else if(cardData[i][CLASS] == "エクス" ||
					cardData[i][CLASS] == "デウス" ||
					cardData[i][CLASS] == "マキナ"
					)
				{
					if(cardData[i][TEAM] != "デウス・エクス・マキナ")
					{
						error = 1;
						console.log("TEAM");
					}
				}
				else if(cardData[i][CLASS] == "みこみこ" ||
					cardData[i][CLASS] == "まほまほ" ||
					cardData[i][CLASS] == "ゆかゆか"
					)
				{
					if(cardData[i][TEAM] != "きゅるきゅるーん☆")
					{
						error = 1;
						console.log("TEAM");
					}
				}
				else if(cardData[i][CLASS] == "アザエラ" ||
					cardData[i][CLASS] == "ガブリエラ" ||
					cardData[i][CLASS] == "ミカエラ"
					)
				{
					if(cardData[i][TEAM] != "夢限少女")
					{
						error = 1;
						console.log("TEAM");
					}
				}
				else
				{
					if(cardData[i][TEAM] != "")
					{
						error = 1;
						console.log("TEAM");
					}
				}
			}
			else if(cardData[i][TYPE] == "アシストルリグ")
			{
				//CLASS
				error_tmp = 1;
				for(j = 1; j < listLrig.options.length; j++)
				{
					if(cardData[i][CLASS].indexOf(listLrig.options[j].value) != -1)
					{
						error_tmp = 0;
						break;
					}
				}

				if(error_tmp)
				{
					error = 1;
					console.log("CLASS");
				}

				//LEVEL
				if(cardData[i][LEVEL] != "1" &&
					cardData[i][LEVEL] != "2")
				{
					error = 1;
					console.log("LEVEL");
				}

				//COST
				if(cardData[i][COST].indexOf("×") == -1)
				{
					error = 1;
					console.log("COST");
				}

				//LIMIT
				if(cardData[i][LEVEL] == 1)
				{
					if(cardData[i][LIMIT] != 0)
					{
						error = 1;
						console.log("LIMIT");
					}
				}
				else if(cardData[i][LEVEL] == 2)
				{
					if(cardData[i][LIMIT] != 1)
					{
						error = 1;
						console.log("LIMIT");
					}
				}

				//POWER
				if(cardData[i][POWER] != "")
				{
					error = 1;
					console.log("POWER");
				}

				//TIMING
				if(cardData[i][TIMING].indexOf("アタックフェイズ") == -1 &&
					cardData[i][TIMING].indexOf("メインフェイズ") == -1
					)
				{
					error = 1;
					console.log("TIMING");
				}

				//LB
				if(cardData[i][LB] != "")
				{
					error = 1;
					console.log("LB");
				}

				//TEAM
				if(cardData[i][CLASS] == "アト" ||
					cardData[i][CLASS] == "タウィル" ||
					cardData[i][CLASS] == "ウムル"
					)
				{
					if(cardData[i][TEAM] != "アンシエント・サプライズ")
					{
						error = 1;
						console.log("TEAM");
					}
				}
				else if(cardData[i][CLASS] == "リゼ" ||
					cardData[i][CLASS] == "アンジュ" ||
					cardData[i][CLASS] == "とこ"
					)
				{
					if(cardData[i][TEAM] != "さんばか")
					{
						error = 1;
						console.log("TEAM");
					}
				}
				else if(cardData[i][CLASS] == "ヒラナ" ||
					cardData[i][CLASS] == "アキノ" ||
					cardData[i][CLASS] == "レイ"
					)
				{
					if(cardData[i][TEAM] != "No Limit")
					{
						error = 1;
						console.log("TEAM");
					}
				}
				else if(cardData[i][CLASS] == "LION" ||
					cardData[i][CLASS] == "LOVIT" ||
					cardData[i][CLASS] == "WOLF"
					)
				{
					if(cardData[i][TEAM] != "Card Jockey")
					{
						error = 1;
						console.log("TEAM");
					}
				}
				else if(cardData[i][CLASS] == "タマゴ" ||
					cardData[i][CLASS] == "ノヴァ" ||
					cardData[i][CLASS] == "バン"
					)
				{
					if(cardData[i][TEAM] != "うちゅうのはじまり")
					{
						error = 1;
						console.log("TEAM");
					}
				}
				else if(cardData[i][CLASS] == "ムジカ" ||
					cardData[i][CLASS] == "マドカ" ||
					cardData[i][CLASS] == "サンガ"
					)
				{
					if(cardData[i][TEAM] != "DIAGRAM")
					{
						error = 1;
						console.log("TEAM");
					}
				}
				else if(cardData[i][CLASS] == "エクス" ||
					cardData[i][CLASS] == "デウス" ||
					cardData[i][CLASS] == "マキナ"
					)
				{
					if(cardData[i][TEAM] != "デウス・エクス・マキナ")
					{
						error = 1;
						console.log("TEAM");
					}
				}
				else if(cardData[i][CLASS] == "みこみこ" ||
					cardData[i][CLASS] == "まほまほ" ||
					cardData[i][CLASS] == "ゆかゆか"
					)
				{
					if(cardData[i][TEAM] != "きゅるきゅるーん☆")
					{
						error = 1;
						console.log("TEAM");
					}
				}
				else if(cardData[i][CLASS] == "アザエラ" ||
					cardData[i][CLASS] == "ガブリエラ" ||
					cardData[i][CLASS] == "ミカエラ"
					)
				{
					if(cardData[i][TEAM] != "夢限少女")
					{
						error = 1;
						console.log("TEAM");
					}
				}
				else
				{
					if(cardData[i][TEAM] != "")
					{
						error = 1;
						console.log("TEAM");
					}
				}

				//JP_TEXT
				if(cardData[i][JP_TEXT] == "")
				{
					error = 1;
					console.log("JP_TEXT");
				}
			}
			else if(cardData[i][TYPE] == "ピース" || cardData[i][TYPE] == "ピース リレー" || cardData[i][TYPE] == "ピース クラフト")
			{
				//CLASS
				if(cardData[i][CLASS] != "")
				{
					error = 1;
					console.log("CLASS");
				}

				//LEVEL
				if(cardData[i][LEVEL] != "")
				{
					error = 1;
					console.log("LEVEL");
				}

				//COST
				if(cardData[i][COST].indexOf("×") == -1)
				{
					error = 1;
					console.log("COST");
				}

				//LIMIT
				if(cardData[i][LIMIT] != "")
				{
					error = 1;
					console.log("LIMIT");
				}

				//POWER
				if(cardData[i][POWER] != "")
				{
					error = 1;
					console.log("POWER");
				}

				//COIN
				if(cardData[i][COIN] != "")
				{
					error = 1;
					console.log("COIN");
				}

				//TIMING
				if(cardData[i][TIMING].indexOf("アタックフェイズ") == -1 &&
					cardData[i][TIMING].indexOf("メインフェイズ") == -1
					)
				{
					error = 1;
					console.log("TIMING");
				}

				//LB
				if(cardData[i][LB] != "")
				{
					error = 1;
					console.log("LB");
				}

				//TEAM
				if(cardData[i][TEAM] != "")
				{
					error = 1;
					console.log("TEAM");
				}

				//JP_TEXT
				if(cardData[i][JP_TEXT] == "")
				{
					error = 1;
					console.log("JP_TEXT");
				}
			}
			else if(cardData[i][TYPE] == "アーツ")
			{
				//CLASS
				if(cardData[i][CLASS] != "")
				{
					error = 1;
					console.log("CLASS");
				}

				//LEVEL
				if(cardData[i][LEVEL] != "")
				{
					error = 1;
					console.log("LEVEL");
				}

				//COST
				if(cardData[i][COST].indexOf("×") == -1)
				{
					error = 1;
					console.log("COST");
				}

				//LIMIT
				if(cardData[i][LIMIT] != "")
				{
					error = 1;
					console.log("LIMIT");
				}

				//POWER
				if(cardData[i][POWER] != "")
				{
					error = 1;
					console.log("POWER");
				}

				//COIN
				if(cardData[i][COIN] != "")
				{
					error = 1;
					console.log("COIN");
				}

				//TIMING
				if(cardData[i][TIMING].indexOf("アタックフェイズ") == -1 &&
					cardData[i][TIMING].indexOf("メインフェイズ") == -1
					)
				{
					error = 1;
					console.log("TIMING");
				}

				//LB
				if(cardData[i][LB] != "")
				{
					error = 1;
					console.log("LB");
				}

				//TEAM
				if(cardData[i][TEAM] != "")
				{
					error = 1;
					console.log("TEAM");
				}

				//JP_TEXT
				if(cardData[i][JP_TEXT] == "")
				{
					error = 1;
					console.log("JP_TEXT");
				}
			}
			else if(cardData[i][TYPE] == "シグニ" || cardData[i][TYPE] == "シグニ クラフト" || cardData[i][TYPE] == "シグニ レゾナ/クラフト")
			{
				//CLASS
				error_tmp = 1;
				for(j = 1; j < listType.options.length; j++)
				{
					if(cardData[i][CLASS].indexOf(listType.options[j].value) != -1)
					{
						error_tmp = 0;
						break;
					}
				}

				if(error_tmp)
				{
					error = 1;
					console.log("CLASS");
				}

				//LEVEL
				if(cardData[i][LEVEL] != "1" &&
					cardData[i][LEVEL] != "2" &&
					cardData[i][LEVEL] != "3")
				{
					error = 1;
					console.log("LEVEL");
				}

				//COST
				if(cardData[i][COST] != "")
				{
					error = 1;
					console.log("COST");
				}

				//LIMIT
				if(cardData[i][LIMIT] != "" && cardData[i][ID] != "WXDi-P07-050")
				{
					error = 1;
					console.log("LIMIT");
				}

				//POWER
				if(cardData[i][POWER] == "")
				{
					error = 1;
					console.log("POWER");
				}

				//COIN
				if(cardData[i][COIN] != "")
				{
					error = 1;
					console.log("COIN");
				}

				//TIMING
				if(cardData[i][TIMING] != "")
				{
					error = 1;
					console.log("TIMING");
				}

				//LB
				if(cardData[i][LB] != "0" &&
					cardData[i][LB] != "1")
				{
					error = 1;
					console.log("LB");
				}

				if(cardData[i][LB] == "1")
				{
					if(cardData[i][JP_TEXT].indexOf("【ライフバースト】：") == -1)
					{
						error = 1;
						console.log("JP_TEXT");
					}
				}

				//TEAM
				if(cardData[i][TEAM] != "")
				{
					error = 1;
					console.log("TEAM");
				}

				//JP_TEXT
				if(cardData[i][JP_TEXT] == "")
				{
					error = 1;
				}
			}
			else if(cardData[i][TYPE] == "スペル" || cardData[i][TYPE] == "スペル クラフト")
			{
				
				//CLASS
				if(cardData[i][CLASS] != "")
				{
					error = 1;
				}

				//LEVEL
				if(cardData[i][LEVEL] != "")
				{
					error = 1;
				}

				//COST
				if(cardData[i][COST].indexOf("×") == -1)
				{
					error = 1;
				}

				//LIMIT
				if(cardData[i][LIMIT] != "")
				{
					error = 1;
				}

				//POWER
				if(cardData[i][POWER] != "")
				{
					error = 1;
				}

				//COIN
				if(cardData[i][COIN] != "")
				{
					error = 1;
				}

				//TIMING
				if(cardData[i][TIMING] != "")
				{
					error = 1;
				}

				//LB
				if(cardData[i][LB] != "0" &&
					cardData[i][LB] != "1")
				{
					error = 1;
				}

				if(cardData[i][LB] == "1")
				{
					if(cardData[i][JP_TEXT].indexOf("【ライフバースト】：") == -1)
					{
						error = 1;
					}
				}

				//TEAM
				if(cardData[i][TEAM] != "")
				{
					error = 1;
				}

				//JP_TEXT
				if(cardData[i][JP_TEXT] == "")
				{
					error = 1;
				}
			}
		}

		//COLOR
		error_tmp = 1;
		for(j = 0; j < cardData[i][COLOR].length; j++)
		{
			if(cardData[i][COLOR].indexOf("赤", j) != -1)
			{
				error_tmp = 0;
			}
			else if(cardData[i][COLOR].indexOf("青", j) != -1)
			{
				error_tmp = 0;
			}
			else if(cardData[i][COLOR].indexOf("緑", j) != -1)
			{
				error_tmp = 0;
			}
			else if(cardData[i][COLOR].indexOf("黒", j) != -1)
			{
				error_tmp = 0;
			}
			else if(cardData[i][COLOR].indexOf("白", j) != -1)
			{
				error_tmp = 0;
			}
			else if(cardData[i][COLOR].indexOf("◇", j) != -1)
			{
				error_tmp = 0;
			}
			else
			{
				error_tmp = 1;
				break;
			}
		}
		if(error_tmp)
		{
			error = 1;
		}

		if(error == 1)
		{
			ret = 1;
			console.log(cardData[i][ID]);
		}

	}

	if(ret == 0)
	{
		console.log("OK");
	}
	else
	{
		console.log("error");
	}
}

function dataInit()
{
	mdeckArr = [];
	ydeckArr = [];
	odeckArr = [];

	mdeck_spot = 0;
	mdeck_debut = 0;
	mdeck_1st = 0;
	mdeck_2nd = 0;

	mdeck_red = 0;
	mdeck_blue = 0;
	mdeck_green = 0;
	mdeck_white = 0;
	mdeck_nocolor = 0;

	ydeck_red = 0;
	ydeck_blue = 0;
	ydeck_green = 0;
	ydeck_white = 0;
	ydeck_nocolor = 0;

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
	str += "<br>推しホロメン<br><br>";
	str += "<table>";
	str += "<tr>";
	for(i = 0; i < odeckArr.length; i++)
	{
		if(odeckArr[i][ID] == "")
		{
			break;
		}

		str += "<td style='width: 30px;'>1</td><td style='width: 130px;'>" + odeckArr[i][ID] + "<td/><td>" + odeckArr[i][NAME] + "</td>";
		str += "</tr>"
		str += "<tr>"
	}
	str += "</tr>";
	str += "</table>";
	str += "<br>エールデッキ<br><br>";
	str += "<table>";
	str += "<tr>";
	for(i = 0; i < ydeckArr.length; i++)
	{
		flag = 0;
		for(j = 0; j < ydecklist.length; j++)
		{
			if(ydeckArr[i][ID] == ydecklist[j][0])
			{
				ydecklist[j][2]++;

				flag = 1;
				break;
			}
		}

		if(flag == 0)
		{
			ydecklistArr = [];
			ydecklistArr[0] = ydeckArr[i][ID];
			ydecklistArr[1] = ydeckArr[i][NAME];
			ydecklistArr[2] = 1;
			ydecklist.push(ydecklistArr);
			
		}

		// str += "<td style='width: 30px;'>1</td><td style='width: 130px;'>" + ydeckArr[i][ID] + "<td/><td>" + ydeckArr[i][NAME] + "</td>";
		// str += "</tr>"
		// str += "<tr>"
	}

	for(i = 0; i < ydecklist.length; i++)
	{
		if(ydecklist[i][ID] == "")
		{
			break;
		}

		str += "<td style='width: 30px;'>" + ydecklist[i][2] + "</td><td style='width: 130px;'>" + ydecklist[i][0] + "<td/><td>" + ydecklist[i][1] + "</td>";
		str += "</tr>"
		str += "<tr>"
	}

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

	if($("#deckTitle").val() == 0)
	{
		alert("Do not set empty string as title.");
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

	localStorage.setItem("HOLODeckNameList", JSON.stringify(deckNamelist));

	$("#selectDeck").html(str);
}

function resetDefault()
{
	var ret = 0;
	var i = 0;

	ret = confirm("It will clean all localStorage and delete all custom deck. Are you sure?");
	if(!ret)
	{
		return;
	}
	else
	{
		for(i = 0; i < deckNamelist.length; i ++)
		{
			localStorage.removeItem(deckNamelist[i]);
		}
		localStorage.removeItem("HOLODeckNameList");
		onloaddeck();
	}
}

function showVersion()
{
	var str = "";
  
	str += "Author: ZZZ\n";
	str += "E-mail: relax100002000@hotmail.com\n";
	str += "\n";
	str += "20241006 v1.01\n";
	str += "1.新增hPR-001、hBD24-001.\n";
	str += "\n";
	str += "預計更新:\n";
	str += "-補充關於說明\n";
	
	alert(str);
}