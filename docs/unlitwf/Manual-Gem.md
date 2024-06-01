# UnlitWF/Gem

UnlitWF/Gem は、UnToon をベースにしたジェム(宝石)シェーダです。
このページでは UnlitWF/Gem の設定方法について説明します。

![Image](./img/gem-man-01.png)


## サンプルマテリアル

設定済みマテリアルが `/Examples/Gem/GemMaterials` に収録されています。
複製してご利用ください。

![Image](./img/gem-man-06.png)

----

## 設定項目の説明

### Gem Surface ジェム(表面) {#GemSurface}

![Image](./img/gem-man-02.png)

- マテリアルカラーやメインテクスチャを設定します。
- Transparent シェーダでは `透明度(表面)` と `透明度(裏面)` にて透明度を微調整できます。

### Gem Background ジェム(裏面) {#GemBackground}

![Image](./img/gem-man-03.png)

- 裏面側の色とカリングモードを、表面とは別に指定できます。

### Gem Flake ジェム(フレーク) {#GemFlake}

![Image](./img/gem-man-04.png)

- 宝石に特徴的な反射模様を描画に追加します。

### Gem Reflection ジェム(リフレクション) {#GemReflection}

![Image](./img/gem-man-05.png)

- キューブマップからの反射を描画に追加します。
