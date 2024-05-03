# HierarchyHelper

Unity の Hierarchy 表示を拡張する Unity 拡張エディタです。Unity `2018.4.20f1`  を想定しています。  
特定条件の GameObject をハイライト表示したり選択したりすることができます。

## 使い方

`Tools` → `whiteflare` → `Hierarchy Helper` から window を開くとこんな感じです。

![Image](./img/HierarchyHelper-01.png)

おすすめは、Hierarchy の下にドッキングさせるレイアウトです。ぜひお試しください。

![Image](./img/HierarchyHelper-02.png)

- `Highlight` のチェックボックスで、強調表示を ON/OFF できます。ハイライトの色は ColorPicker で指定してください。
- `Mode` を変更すると、ハイライト対象の GameObject を切り替えることができます。
    1. **EditorOnly**
        - タグ EditorOnly が指定されている GameObject を強調表示します。
    1. **Batching Static**
        - Batching Static が設定されている GameObject を強調表示します。
    1. **Lightmap Static**
        - Lightmap Static が設定されている GameObject を強調表示します。
    1. **ReflectionProbe Static**
        - ReflectionProbe Static が設定されている GameObject を強調表示します。
    1. **Occluder Static**
        - Occluder Static が設定されている GameObject を強調表示します。
    1. **Occludee Static**
        - Occludee Static が設定されている GameObject を強調表示します。
    1. **SkinnedMeshRenderer**
        - SkinnedMeshRenderer がアタッチされている GameObject を強調表示します。
    1. **SkinnedMeshRenderer Bones**
        - SkinnedMeshRenderer のボーンに指定されている GameObject を強調表示します。
    1. **MeshRenderer**
        - MeshRenderer がアタッチされている GameObject を強調表示します。
    1. **Realtime Light**
        - Realtime な Light がアタッチされている GameObject を強調表示します。
    1. **Mixed Light**
        - Mixed な Light がアタッチされている GameObject を強調表示します。
    1. **Baked Light**
        - Baked な Light がアタッチされている GameObject を強調表示します。
    1. **LightProbeGroup**
        - LightProbeGroup がアタッチされている GameObject を強調表示します。
    1. **ReflectionProbe**
        - ReflectionProbe がアタッチされている GameObject を強調表示します。
- `select objects` ボタンを押すと、ハイライト表示されているオブジェクトを選択することができます。

