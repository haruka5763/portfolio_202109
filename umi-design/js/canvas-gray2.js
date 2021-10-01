var unit = 100,
    canvasListgray2, // キャンバスの配列
    info = {}, // 全キャンバス共通の描画情報
    colorListgray2; // 各キャンバスの色情報

/**
 * Init function.
 * 
 * Initialize variables and begin the animation.
 */
function init() {
    info.seconds = 0;
    info.t = 0;
    canvasListgray2 = [];
    colorListgray2 = [];
    // canvas1個めの色指定
    canvasListgray2.push(document.getElementById("waveCanvas-gray2"));
    colorListgray2.push(['#EDF2F4', '#EDF2F4', '#EDF2F4']);//重ねる波の色設定
	// 各キャンバスの初期化
for(var canvasIndex in canvasListgray2) {
        var canvas = canvasListgray2[canvasIndex];
        canvas.width = document.documentElement.clientWidth; //Canvasのwidthをウィンドウの幅に合わせる
        canvas.height = 200;//波の高さ
        canvas.contextCache = canvas.getContext("2d");
    }
    // 共通の更新処理呼び出し
		updategray2();
}

function updategray2() {
		for(var canvasIndex in canvasListgray2) {
        var canvas = canvasListgray2[canvasIndex];
        // 各キャンバスの描画
        drawgray2(canvas, colorListgray2[canvasIndex]);
    }
    // 共通の描画情報の更新
    info.seconds = info.seconds + .001;//波うちのスピード調整
    info.t = info.seconds*Math.PI;
    // 自身の再起呼び出し
    setTimeout(updategray2, 35);
}

/**
 * Draw animation function.
 * 
 * This function draws one frame of the animation, waits 20ms, and then calls
 * itself again.
 */
function drawgray2(canvas, color) {
		// 対象のcanvasのコンテキストを取得
    var context = canvas.contextCache;
    // キャンバスの描画をクリア
    context.clearRect(0, 0, canvas.width, canvas.height);

    //波の重なりを描画 drawWavegray2(canvas, color[数字（波の数を0から数えて指定）], 透過, 波の幅のzoom,波の開始位置の遅れ )
    drawWavegray2(canvas, color[0], 0.9, 4.5, 0);//0.5⇒透過具合50%、3⇒数字が大きいほど波がなだらか
    // drawWavegray2(canvas, color[1], 0.7, 4.0, 250);
    // drawWavegray2(canvas, color[2], 0.5, 2.5, 100);
}

/**
* 波を描画
* drawWavegray2(色, 不透明度, 波の幅のzoom, 波の開始位置の遅れ)
*/
function drawWavegray2(canvas, color, alpha, zoom, delay) {
		var context = canvas.contextCache;
    context.fillStyle = color;//塗りの色
    context.globalAlpha = alpha;
    context.beginPath(); //パスの開始
    drawSinegray2(canvas, info.t / 0.5, zoom, delay);
    context.lineTo(canvas.width + 10, canvas.height); //パスをCanvasの右下へ
    context.lineTo(0, canvas.height); //パスをCanvasの左下へ
    context.closePath() //パスを閉じる
    context.fill(); //波を塗りつぶす
}

/**
 * Function to draw sine
 * 
 * The sine curve is drawn in 10px segments starting at the origin. 
 * drawSinegray2(時間, 波の幅のzoom, 波の開始位置の遅れ)
 */
function drawSinegray2(canvas, t, zoom, delay) {
    var xAxis = Math.floor(canvas.height/2);
    var yAxis = 0;
    var context = canvas.contextCache;
    // Set the initial x and y, starting at 0,0 and translating to the origin on
    // the canvas.
    var x = t; //時間を横の位置とする
    var y = Math.sin(x)/zoom;
    context.moveTo(yAxis, unit*y+xAxis); //スタート位置にパスを置く

    // Loop to draw segments (横幅の分、波を描画)
    for (i = yAxis; i <= canvas.width + 10; i += 10) {
        x = t+(-yAxis+i)/unit/zoom;
        y = Math.sin(x - delay)/3;
        context.lineTo(i, unit*y+xAxis);
    }
}

init();