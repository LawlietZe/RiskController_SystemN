require.config(
    {
    	baseUrl: "Scripts/src/lib/",
        paths: {
            'jquery': 'jquery.min',
            'select2': 'select2.min',
            'doT':'doT.min',
            'bootstrap':'bootstrap',
        },
        shim:{
	        'fundComponent':{
	            deps: ['jquery'],
	            exports: 'fundComponent'
	        },
	        'bootstrap':{
	            deps: ['jquery'],
	        },	        
	   	}
    }
);
require(['jquery','select2','doT','fundComponent','bootstrap'],function ($, select2, doT) {

	var data  = { "Items": [

				{ "CategoryDescrition": "基本信息", "CatagoryId":"basicInfo", "Children": [{ "ConditionDescription" : "总资产" ,"ConditionId":"1","ConditionType":"filter","DefaultOperatorType":"","DefaultValueType":""},{"ConditionDescription" : "净资产","ConditionType":"analyze"},{"ConditionDescription" : "销售收入"}] },

				{ "CategoryDescrition": "行情数据", "CatagoryId":"MakertData", "Children": [{ "ConditionDescription" : "负债率绝对指标" },{"ConditionDescription" : "负债率相对指标"},{"ConditionDescription" : "销售收入"}]},

				{ "CategoryDescrition": "财务数据", "CatagoryId":"financeData", "Children": [{ "ConditionDescription" : "净利润3年绝对指标" },{"ConditionDescription" : "负债率相对指标"},{"ConditionDescription" : "销售收入"}] }

				]}

	var conditionListData = [];


	//渲染标准数据（左侧大项模板）
	
	var interText = doT.template($("#configPanel_left_Tmp").text());
	$("#v-pills-tab").html(interText(data.Items));	

	//渲染标准数据（左侧小项模板）
	var interText2 = doT.template($("#configPanel_conf_Tmp").text());
	$("#v-pills-tabContent").html(interText2(data.Items));	
	
	//数据注入
	$(".singleList").click(function() {
		var listData =  {
			"ConditionDescription" : '',
		};
		debugger
		var ConditionType = $(this).data("type");
		var description = $(this).data("description");
		listData.ConditionDescription = description;
		if (ConditionType == "filter") {
			var filterTmp = doT.template($("#fliterType_tmp").text());
			$("#configPanel_right_container").append(filterTmp(listData));	
		}
		else if (ConditionType == "analyze") {

		}
	});
	$(".addColle").click(function() {
		var newCollection =  "<div class='collection'><div class='collectionTitle'><span>国债等2项</span><span><a href='#''>×</a></span></div><div class='collectionDetail'><div>国债</div><div>AA</div></div></div>";
		$(".collectionContainer").append(newCollection);
		bindHoverEve();
	});
	$(".collectionTitle").hover(function() {
		$(this).next().show();
		bindHoverEve();
	}, function() {
		$(this).next().hide();
	});
	function bindHoverEve(){
		$(".collectionTitle").hover(function() {
				$(this).next().show();
			}, function() {
				$(this).next().hide();
		});
	}

});


