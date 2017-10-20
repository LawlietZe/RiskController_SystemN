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

				{ "ParentName": "基本信息", "ParentId":"basicInfo", "Children": [{ "ChildName" : "总资产" ,"type":"1"},{"ChildName" : "净资产","type":"2"},{"ChildName" : "销售收入"}] },

				{ "ParentName": "行情数据", "ParentId":"MakertData", "Children": [{ "ChildName" : "负债率绝对指标" },{"ChildName" : "负债率相对指标"},{"ChildName" : "销售收入"}]},

				{ "ParentName": "财务数据", "ParentId":"financeData", "Children": [{ "ChildName" : "净利润3年绝对指标" },{"ChildName" : "负债率相对指标"},{"ChildName" : "销售收入"}] }

				]}

	//渲染数据
	
	var interText = doT.template($("#configPanel_left_Tmp").text());
	$("#v-pills-tab").html(interText(data.Items));	


	var interText2 = doT.template($("#configPanel_conf_Tmp").text());
	$("#v-pills-tabContent").html(interText2(data.Items));	

	$(".singleList").click(function() {
		var interText = doT.template($("#configPanel_left_Tmp").text());
		$("#v-pills-tab").html(interText(data.Items));	
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


