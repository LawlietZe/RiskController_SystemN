/**
 * 分页生成函数
 * @param  {[当前页数]}
 * @param  {[总页数]}
 * @return {[分页列表]}
 */
function paginatorCeateor(currentPage, totalPages, parameter, fold) {
    var paginatorLeft = "<div class='paginationLeft'>第" + parameter.page + "/" + totalPages + "页</div>";
    var paginatorRight = "<div class='paginatorPageNumber'> 跳转到第 <select id='changePageNum'></select> 页</div><div class='paginationRight'><a href='javascript:void(0);' onclick='changePage(1)'>首页</a><a href='javascript:void(0);' class='paginationBefore' onclick='changePageBefore()'>上一页</a><a href='javascript:void(0);' onclick='changePageAfter()' class='paginationAfter'>下一页</a><a href='javascript:void(0);' onclick='changePage(" + totalPages + ")'>尾页</a></div>";
    $(".paginationFund").append(paginatorLeft);
    $(".paginationFund").append(paginatorRight);
    // 容错页数，超过页数不显示
    if (totalPages > 100) {
        if (fold == '100') {
            for (var i = 100 ; i <= totalPages ; i++) {
                var paginatorOpition = "<option value='" + i + "''>" + i + "</option>";
                $(".paginatorPageNumber select").append(paginatorOpition);
            }
        }
        else {
            for (var i = 1 ; i <= 100 ; i++) {
                var paginatorOpition = "<option value='" + i + "''>" + i + "</option>";
                $(".paginatorPageNumber select").append(paginatorOpition);
            }
            var morePage = "<option class='morePage'>" + '更多' + "</option>";
            $(".paginatorPageNumber select").append(morePage);
        }
    }
    else {
        for (var i = 1 ; i <= totalPages ; i++) {
            var paginatorOpition = "<option value='" + i + "''>" + i + "</option>";
            $(".paginatorPageNumber select").append(paginatorOpition);
        }
    }
    if (parameter.page == '1') {
        $(".paginationBefore").remove();
    }
    if (parameter.page == totalPages) {
        $(".paginationAfter").remove();
    }
    $("#changePageNum").val(parameter.page);
    selectPage(parameter);
}
//首页 尾页点击事件
function changePage(page) {
    $(".table").html('');
    $(".paginationFund").html('');
    foldJudgement(page);
    parameter.page = page;
    drawTable(parameter, link, container, currentPage, tableClass, cell, colStyle, fold);
}
//点击上一页
function changePageBefore() {
    $(".table").html('');
    $(".paginationFund").html('');
    parameter.page--;
    foldJudgement(parameter.page);
    drawTable(parameter, link, container, currentPage, tableClass, cell, colStyle, fold);
}
//点击下一页
function changePageAfter() {
    $(".table").html('');
    $(".paginationFund").html('');
    parameter.page++;
    foldJudgement(parameter.page);
    drawTable(parameter, link, container, currentPage, tableClass, cell, colStyle, fold);
}
//切换页数
function selectPage(parameter) {
    $("#changePageNum").change(function () {
        if ($(this).val() == "更多") {
            debugger;
            $(".table").html('');
            $(".paginationFund").html('');
            parameter.page = "100";
            var fold = "100";
            drawTable(parameter, link, container, currentPage, tableClass, cell, colStyle, fold);
        }
        else {
            if ($(this).val() > 100) {
                var fold = "100";
                parameter.page = $(this).val();
                $(".table").html('');
                $(".paginationFund").html('');
                drawTable(parameter, link, container, currentPage, tableClass, cell, colStyle, fold);
            } else {
                parameter.page = $(this).val();
                $(".table").html('');
                $(".paginationFund").html('');
                drawTable(parameter, link, container, currentPage, tableClass, cell, colStyle, fold);
            }
        }
    });
}

/**
 * 分页生成器 适用于DoT模块
 * @param  {[type]} currentPage [description]
 * @param  {[type]} totalPages  [description]
 * @param  {[type]} parameter   [description]
 * @param  {[type]} fold        [description]
 * @return {[type]}             [description]
 */
function paginatorCeateorDot(currentPage, totalPages, parameter, fold) {
    $(".paginationFund").html('');
    var paginatorLeft = "<div class='paginationLeft'>第" + parameter.currentPage + "/" + totalPages + "页</div>";
    var paginatorRight = "<div class='paginatorPageNumber'> 跳转到第 <select id='changePageNum'></select> 页</div><div class='paginationRight'><a href='javascript:void(0);' onclick='changePageDOT(1)'>首页</a><a href='javascript:void(0);' class='paginationBefore' onclick='changePageBeforeDOT()'>上一页</a><a href='javascript:void(0);' onclick='changePageAfterDOT()' class='paginationAfter'>下一页</a><a href='javascript:void(0);' onclick='changePageDOT(" + totalPages + ")'>尾页</a></div>";
    $(".paginationFund").append(paginatorLeft);
    $(".paginationFund").append(paginatorRight);
    // 容错页数，超过页数不显示
    if (totalPages > 100) {
        if (fold == '100') {
            for (var i = 100 ; i <= totalPages ; i++) {
                var paginatorOpition = "<option value='" + i + "''>" + i + "</option>";
                $(".paginatorPageNumber select").append(paginatorOpition);
            }
        }
        else {
            for (var i = 1 ; i <= 100 ; i++) {
                var paginatorOpition = "<option value='" + i + "''>" + i + "</option>";
                $(".paginatorPageNumber select").append(paginatorOpition);
            }
            var morePage = "<option class='morePage'>" + '更多' + "</option>";
            $(".paginatorPageNumber select").append(morePage);
        }
    }
    else {
        for (var i = 1 ; i <= totalPages ; i++) {
            var paginatorOpition = "<option value='" + i + "''>" + i + "</option>";
            $(".paginatorPageNumber select").append(paginatorOpition);
        }
    }
    if (parameter.currentPage == '1') {
        $(".paginationBefore").remove();
    }
    if (parameter.currentPage == totalPages) {
        $(".paginationAfter").remove();
    }
    $("#changePageNum").val(parameter.currentPage);
    selectPageDoT(parameter);
}
//首页 尾页点击事件DoT模块方法
function changePageDOT(page) {
    $(".paginationFund").html('');
    foldJudgement(page);
    GetListParameter.currentPage = page;
    drawDoTable(GetListParameter, link);
}
//点击上一页DoT模块方法
function changePageBeforeDOT() {
    $(".table").html('');
    $(".paginationFund").html('');
    GetListParameter.currentPage--;
    foldJudgement(GetListParameter.currentPage);
    drawDoTable(GetListParameter, link);
}
//点击下一页DoT模块方法
function changePageAfterDOT() {
    GetListParameter.currentPage++;
    foldJudgement(GetListParameter.currentPage);
    drawDoTable(GetListParameter, link);
    $(".paginationFund").html('');
}
//切换页数
function selectPageDoT(parameter) {
    $("#changePageNum").change(function () {
        if ($(this).val() == "更多") {
            $(".paginationFund").html('');
            GetListParameter.currentPage = "100";
            var fold = "100";
            drawDoTable(GetListParameter, link);
        }
        else {
            if ($(this).val() > 100) {
                var fold = "100";
                GetListParameter.currentPage = $(this).val();
                drawDoTable(GetListParameter, link);
            } else {
                GetListParameter.currentPage = $(this).val();
                drawDoTable(GetListParameter, link);
            }
        }
    });
}
/**
 * 分页生成器 适用于DoT模块 改进版
 * @param  {[type]} currentPage [description]
 * @param  {[type]} totalPages  [description]
 * @param  {[type]} parameter   [description]
 * @param  {[type]} fold        [description]
 * @return {[type]}             [description]
 */
function doTPaginator(parameter) {
    var paginatorLeft = "<div class='paginationLeft'>第<span class='currentPage'>" + parameter.CurrentPage + "</span>/<span class='totalPages'>" + parameter.TotalPages + "</span>页</div>";
    var paginatorRight = "<div class='paginatorPageNumber'> 跳转到第 <select id='changePageNum'></select> 页</div><div class='paginationRight'><a href='javascript:void(0);' onclick='DoTchangePage(1)'>首页</a><a href='javascript:void(0);' class='paginationBefore' onclick='doTchangePageBefore(" + parameter.TotalPages + "," + parameter.CurrentPage + ")'>上一页</a><a href='javascript:void(0);' onclick='doTchangePageAfter(" + parameter.TotalPages+ "," + parameter.CurrentPage + ")' class='paginationAfter'>下一页</a><a href='javascript:void(0);' onclick='DoTchangePage(" + parameter.TotalPages + ")'>尾页</a></div>";
    $(".paginationFund").append(paginatorLeft);
    $(".paginationFund").append(paginatorRight);
    $("#changePageNum").val(parameter.CurrentPage);
    showSelectPage(parameter.TotalPages);
    doTselectPage(parameter.TotalPages);
    showOrHidePage(parameter.TotalPages, parameter.CurrentPage);
}
function showSelectPage(page){
    if (page > 1000) {
        alert("stackoverflow");
        return false;
    }
    for (var i = 1 ; i <= page ; i++) {
        var paginatorOpition = "<option value='" + i + "''>" + i + "</option>";
        $(".paginatorPageNumber select").append(paginatorOpition);
    }
}    
function showOrHidePage(TotalPages, CurrentPage){
    if (CurrentPage == '1') {
        $(".paginationBefore").hide();
        $(".paginationAfter").show();
    }
    else if(CurrentPage == TotalPages) {
        $(".paginationAfter").hide();
        $(".paginationBefore").show();
    }
    else{
        $(".paginationAfter").show();
        $(".paginationBefore").show();
    }
}
function showOrHidePageHead(page){
    if (page == '1') {
        $(".paginationBefore").hide();
        $(".paginationAfter").show();
    }
    else if(page > '1') {
        $(".paginationAfter").hide();
        $(".paginationBefore").show();
    }
}
//首页 尾页点击事件DoT模块方法
function DoTchangePage(page) {
    GetListParameter.currentPage = page;
    drawDoTable(GetListParameter, link);
    showOrHidePageHead(page);
    $(".currentPage").html(page);
}
//点击上一页DoT模块方法
function doTchangePageBefore(TotalPage,CurrentPage) {
    GetListParameter.currentPage--;
    drawDoTable(GetListParameter, link);
    showOrHidePage(TotalPage,GetListParameter.currentPage);
    $(".currentPage").html(GetListParameter.currentPage);
}
//点击下一页DoT模块方法
function doTchangePageAfter(TotalPage,CurrentPage) {
    GetListParameter.currentPage++;
    CurrentPage++;
    drawDoTable(GetListParameter, link);
    showOrHidePage(TotalPage,GetListParameter.currentPage);
    $(".currentPage").html(GetListParameter.currentPage);
}
//切换页数
function doTselectPage(totalPages) {
    $("#changePageNum").change(function () {
            GetListParameter.currentPage = $(this).val();
            drawDoTable(GetListParameter, link);
            $(".currentPage").html(GetListParameter.currentPage);
            showOrHidePage(totalPages,GetListParameter.currentPage);
    })
}
/**
 * 判断是否进行分页下拉选项折叠
 * @param  {[type]} page [传入判断页数]
 * @return {[type]}      [fold状态]
 */
function foldJudgement(page){
    if (page > 100) {
        fold = '100';
    }
    else {
        fold = '';
    }
}
/**
 * [Ajax动态table分页]
 * @param  parameter   [传参 fund(id,总页数)]
 * @param  link        [url]
 * @param  container   [所选table容器]
 * @param  currentPage [默认当前页码]
 * @param  tableClass  [table类型]
 * @param  cell        [列数据对应名称（data传来的Items对应名称的值），title名称和样式]
 * @param  colStyle    [列数据样式、链接]
 * @param  fold        [下拉选项折叠点]
 * @return [生成table]
 */
function drawTable(parameter, link, container, currentPage, tableClass, cell, colStyle, fold) {
    var itemData = parameter;
    $.ajax({
        type: "POST",
        url: link,
        data: itemData,
        success: function (data) {
            if (data.Items.length > 0) {
                var cellCount = cell.length;
                var rowCount = data.Items.length;
                var table = $("<table class='" + tableClass + "' >");
                table.appendTo($(container));
                var trHeader = $("<tr class='theader'></tr>");
                trHeader.appendTo(table);
                //生成theader 
                for (var j = 0; j < cellCount; j++) {
                    //判断title是否有定义样式
                    if (!cell[j].style) {
                        var td = "<td>" + cell[j].title + "</td>";
                    } else {
                        var td = "<td style=" + cell[j].style + ">" + cell[j].title + "</td>";
                    }
                    $(td).appendTo(trHeader);
                }
                //生成其余数据
                for (var i = 0; i < rowCount; i++) {
                    var tr = $("<tr></tr>");
                    tr.appendTo(table);
                    for (var j = 0; j < cellCount; j++) {
                        var field = cell[j].field;
                        var formatFun = cell[j].format;
                        var val = "";
                        var url = "";
                        if (data.Items[i][field] != null) {
                            val = data.Items[i][field];
                        }
                        if (data.Items[i][href] != null) {
                            var href = colStyle[j].href;
                            url = href + data.Items[i][href];
                        }
                        //判断列是否有定义样式、是否是链接
                        if (colStyle.length != 0) {
                            if (!colStyle[j].style) {
                                if (!colStyle[j].href) {
                                    if (formatFun) {
                                        if (formatFun == "timeFormat") {
                                            var td = "<td>" + timeFormat(val) + "</td>";
                                        }
                                    }
                                    else{
                                        var td = "<td>" + val + "</td>";
                                    }
                                }
                                else {
                                    if (formatFun) {
                                        if (formatFun == "timeFormat") {
                                            var td = "<td><a href=" + url + ">" + timeFormat(val) + "</a></td>";
                                        }
                                    }
                                    else{
                                        var td = "<td><a href=" + url + ">" + val + "</a></td>";
                                    }
                                }
                            }
                            //有样式  
                            else {
                                //无连接
                                if (!colStyle[j].href) {
                                    if (formatFun) {
                                        if (formatFun == "timeFormat") {
                                            var td = "<td style=" + colStyle[j].style + ">" + timeFormat(val) + "</td>";
                                        }
                                    }
                                    else{
                                        var td = "<td style=" + colStyle[j].style + ">" + val + "</td>";
                                    }
                                } 
                                else {
                                    var td = "<td style=" + colStyle[j].style + "><a href=" + url + ">" + val + "</a></td>";
                                }
                            }
                        }
                        //无注释无连接样式
                        else {
                            //是否格式化
                            if (formatFun) {
                                if (formatFun == "timeFormat") {
                                    var td = "<td>" + timeFormat(val) + "</td>";
                                }
                            }
                            else{
                                var td = "<td>" + val + "</td>";
                            }
                        }
                        $(td).appendTo(tr);
                    }
                }
                $(container).append("</table>");
                //同名基金合并列
                table_rowspan(".infoTable", 1);
                //分页生成器
                paginatorCeateor(currentPage, data.TotalPages, parameter, fold);
            }
            else{
                alertify.alert("表格无数据");
            }
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) { console.log(errorThrown) }
    })
}
/**
 * 合并表格列数
 * @param  {[表格id]}
 * @param  {[列数]}
 * @return {[生成合并]}
 */
function table_rowspan(table_id, table_colnum) {
    table_firsttd = "";
    table_currenttd = "";
    table_SpanNum = 0;
    colnum_Obj = $(table_id + " tr td:nth-child(" + table_colnum + ")");
    colnum_Obj.each(function (i) {
        if (i == 0) {
            table_firsttd = $(this);
            table_SpanNum = 1;
        } else {
            table_currenttd = $(this);
            if (table_firsttd.text() == table_currenttd.text()) {
                table_SpanNum++;
                table_currenttd.hide(); //remove();
                table_firsttd.attr("rowSpan", table_SpanNum);
                table_firsttd.attr("style", "background-color:#3B3831");
            } else {
                table_firsttd = $(this);
                table_SpanNum = 1;
                table_firsttd.attr("style", "background-color:#3B3831");
            }
        }
    });
}

//函数说明：合并指定表格（表格id为table_id）指定行（行数为table_rownum）的相同文本的相邻单元格
//参数说明：table_id 为需要进行合并单元格的表格id。如在HTMl中指定表格 id="table1" ，此参数应为 #table1
//参数说明：table_rownum 为需要合并单元格的所在行。其参数形式请参考jQuery中nth-child的参数。
//          如果为数字，则从最左边第一行为1开始算起。
//          "even" 表示偶数行
//          "odd" 表示奇数行
//          "3n+1" 表示的行数为1、4、7、10.......
//参数说明：table_maxcolnum 为指定行中单元格对应的最大列数，列数大于这个数值的单元格将不进行比较合并。
//          此参数可以为空，为空则指定行的所有单元格要进行比较合并。
function table_colspan(table_id, table_rownum, table_maxcolnum) {
    if (table_maxcolnum == void 0) {
        table_maxcolnum = 0;
    }
    table_firsttd = "";
    table_currenttd = "";
    table_SpanNum = 0;
    $(table_id + " tr:nth-child(" + table_rownum + ")").each(function (i) {
        row_Obj = $(this).children();
        row_Obj.each(function (i) {
            if (i == 0) {
                table_firsttd = $(this);
                table_SpanNum = 1;
            } else if ((table_maxcolnum > 0) && (i > table_maxcolnum)) {
                return "";
            } else {
                table_currenttd = $(this);
                if (table_firsttd.text() == table_currenttd.text()) {
                    table_SpanNum++;
                    table_currenttd.hide(); //remove();
                    table_firsttd.attr("colSpan", table_SpanNum);
                } else {
                    table_firsttd = $(this);
                    table_SpanNum = 1;
                }
            }
        });
    });
}
/**
 * 查询url参数
 * @param  {[type]} name [description]
 * @return {[type]}      [description]
 */
function getQueryString(name) { 
var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i"); 
var r = window.location.search.substr(1).match(reg); 
if (r != null) return unescape(r[2]); return null; 
} 
$(document).ready(function () {
    //  FileUpLoader Plugin
    $(".fileUpLoader").each(function () {
        var fileUpLoaderText = "<input type='text' readonly='readonly' class='fileLoaderShow'><input type='button' class='fileLoaderButton button' value='选择文件'>";
        var file = $(this).find('[type=file]');
        file.before(fileUpLoaderText);
    });
    $(".fileUpLoader [type=file]").change(function () {
        var arrs = $(this).val().split('\\');
        var filename = arrs[arrs.length - 1];
        var showText = $(this).siblings('.fileLoaderShow');
        $(showText).val(filename);
    });
});

// val为经json直接序列化后的C#的DateTime类型的数据
function timeFormat(val) {
    var re = /-?\d+/;
    var m = re.exec(val);
    var d = new Date(parseInt(m[0]));
// 按【2012-02-13 09:09:09】的格式返回日期
// return d.format("yyyy-MM-dd hh:mm:ss");
    return d.format("yyyy-MM-dd");
} 
// 用于格式化日期显示
Date.prototype.format = function (format) //author: meizz 
{
    var o = {
        "M+": this.getMonth() + 1, //month 
        "d+": this.getDate(),    //day 
        "h+": this.getHours(),   //hour 
        "m+": this.getMinutes(), //minute 
        "s+": this.getSeconds(), //second 
        "q+": Math.floor((this.getMonth() + 3) / 3),  //quarter 
        "S": this.getMilliseconds() //millisecond 
    }
    if (/(y+)/.test(format)) format = format.replace(RegExp.$1,
    (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o) if (new RegExp("(" + k + ")").test(format))
        format = format.replace(RegExp.$1,
      RegExp.$1.length == 1 ? o[k] :
        ("00" + o[k]).substr(("" + o[k]).length));
    return format;
}