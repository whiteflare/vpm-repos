# UnlitWF/UnToon

UnlitWF/UnToon は、Unlit に様々な描画効果を追加する発想で設計された Unity/VRChat 想定の Toon Shader です。

![image](./img/untoon-01.png)
アバターやワールドにUnlitWF/UnToonを使用してみたサンプルイメージです。Skybox以外は全てUnlitWFで描画しています。

## Dynamic Sample

Unity WebGL での動作サンプルです。UnlitWF/UnToon は WebGL でも動作します。

https://whiteflare.github.io/Unlit_WF_ShaderSuite/

## Features / UnToonの機能
- Unlitの名を含んでいますが暗いところでは暗くなります。ただし真っ黒になることはなく、最小限のテクスチャ描画が読める程度には明るくなります。
- ライトを統合的に扱います。暗いDirectionalLightと明るいPointLightがあるとき、UnlitWF/UnToon はPointLight側をメイン光源として処理させます。
- カスタムインスペクタ(日本語対応済み、折りたたみ機能付き)を有しています。インスペクタとシェーダの依存は最小限にしているため拡張も容易です。

## Not Supported / UnToonではサポートされていないもの
- ShadowTexture
  - receive (realtime) shadow はサポートされません。不要な realtime shadow が掛からないようにしています。
  - realtime spot light も ShadowTexture がサポートされないため、光の境界を描画することができず light の効果内は常に照らされます。
- Directional Lightmap はサポートされず、NormalMapは常にrealtimeなblendを行います。

