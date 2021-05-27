
let emoji = `🍔🍩🍞🍰🍊🍹

🍹🍊🍰🍞🍩🍔`;

function setup() {
  createCanvas(400, 300);

  textAlign(CENTER, CENTER);
  textSize(52);
}

function draw() {
  background("#ffcc00");

  // テキストの表示
  text(emoji, width / 2, height / 2);
}

// キーが押された瞬間の処理
function mousePressed() {
  // 変数の中身によってテキストを入れ替える
  if (emoji == `🍔🍩🍞🍰🍊🍹

🍹🍊🍰🍞🍩🍔`) {
    emoji = `🍹🍊🍰🍞🍩🍔

🍔🍩🍞🍰🍊🍹`;
  } else {
    emoji = `🍔🍩🍞🍰🍊🍹

🍹🍊🍰🍞🍩🍔`;
  }
}
























// function setup() {
//     createCanvas(400, 300);
//     background(211, 227, 190);
//     // 人間がソースを作る
//     const sources = makeSource();
//     // 人間がレシピを作る
//     const recipe = makeRecipe(sources);
//     // ロボットがパフェを作る
//     makeParfait(recipe);
// }

// // ソースの素材と色を関係付ける
// function sourceMapping(name, col) {
//     const map = new Map();
//     map.set('name', name);
//     map.set('col', col);
//     return map;
// }

// // 人間がソースの素材と色を決めてソースを作る
// function makeSource() {
//     // チョコソースは濃い茶色
//     const chocolateSauce = sourceMapping('チョコソース', color(16, 3, 3));
//     // コーンフレークは濃い黄色
//     const cornFlake = sourceMapping('コーンフレーク', color(223, 188, 43));
//     // 生クリームはほぼ白
//     const freshCream = sourceMapping('生クリーム', color(239, 238, 240));
//     let sourcesArray = [chocolateSauce, cornFlake, freshCream];
//     return sourcesArray;
// }

// // ソースからレシピを作る
// // 人間の仕事
// function makeRecipe(sourcesArray) {
//         let recipe = [];
//         // ソース配列を使ってソースの層を構成する
//         // recipe.push(sourcesArray[0]);
//         for (let i = 0; i < 3; i++) {
//             recipe.push(sourcesArray[0]);
//             recipe.push(sourcesArray[1]);
//             recipe.push(sourcesArray[2]);
//         }
//         // recipe.push(sourcesArray[0]);
//         return recipe;
//     }
//      // -------------------------------------------------------------------
//  // ロボットがパフェを作る
// function makeParfait(recipeArray) {
//     // レシピの配列を走査
//     for (let i = 0; i < recipeArray.length; i++) {
//         // 配列に含まれるMapオブジェクトを特定
//         const targetMap = recipeArray[i];
//         // そのMapオブジェクトのcol値を調べる
//         const col = targetMap.get('col');
//         // それを塗り色にする
//         fill(col);
//         // y値を変化させて矩形の層を描画する
//         rect(150, 200 - i * 20, 100, 20);
//     }
// }


















// // 花のイメージ用変数
// let blueFlowerImage, yellowFlowerImage, orangeFlowerImage;
// let flowerImage;

// // ３つの花の画像ファイルを読み込む
// function preload() {
//     blueFlowerImage = loadImage('blue.png');
//     yellowFlowerImage = loadImage('yellow.png');
//     orangeFlowerImage = loadImage('orange.png');
// }

// function setup() {
//     createCanvas(400, 300);
//     background(230);
//     // 6行3列
//     for (let x = 0; x < 6; x++) {
//         // %演算子と3を使って、0,1,2,0,1,2という循環を得る
//         // 0と3列めは青い花
//         if (x % 3 === 0) {
//             flowerImage = blueFlowerImage;
//             // 1と4列めは黄色い花
//         }
//         else if (x % 3 === 1) {
//             flowerImage = yellowFlowerImage;
//             // 2と5列めはオレンジの花
//         }
//         else if (x % 3 === 2) {
//             flowerImage = orangeFlowerImage;
//         }

//         // xとyを使ってイメージを描く位置を決める
//         // 30はイメージの幅とイメージ間の空きを考慮した決め打ちの数値
//         for (let y = 0; y < 3; y++) {
//             image(flowerImage, x * 30, y * 30);
//         }
//     }
// }