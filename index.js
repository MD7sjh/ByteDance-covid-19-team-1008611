<!DOCTYPE html>
<html lang="en">

<head>
    <!-- 指定网页字符编码 -->
    <meta charset="UTF-8">
    <!-- 适配移动端 -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>全国疫情实时监控</title>
    <link rel="stylesheet" href="css/index.css">
</head>

<body>
    <div id="title">全国疫情实时监控</div>
    <div id="left1">
    </div>
    <div id="left2">
    </div>
    <div id="center1">
        <div class="item">
            <div class="number" id="confirm"></div>
            <div class="text">累计确诊</div>
        </div>
        <div class="item">
            <div class="number" id="heal"></div>
            <div class="text">累计治愈</div>
        </div>
        <div class="item">
            <div class="number" id="dead"></div>
            <div class="text">累计死亡</div>
        </div>
        <div class="item">
            <div class="number" id="nowConfirm"></div>
            <div class="text">现有确诊</div>
        </div>
        <div class="item">
            <div class="number" id="noInfect"></div>
            <div class="text">无症状感染者</div>
        </div>
        <div class="item">
            <div class="number" id="importedCase"></div>
            <div class="text">境外输入</div>
        </div>
    </div>
    <div id="center2"></div>
    <div id="right1"></div>
    <div id="right2"></div>
    
    <script src="js/data.js"></script>
    <script src="js/center1.js"></script>
    <script src="js/echarts.min.js"></script>
    <script src="js/china.js"></script>
    <script src="js/center2.js"></script>
    <script src="js/left1.js"></script>
    <script src="js/left2.js"></script>
    <script src="js/right1.js"></script>
    <script src="js/right2.js"></script>
</body>

</html>
