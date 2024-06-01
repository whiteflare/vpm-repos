/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  tutorialSidebar: [
    'intro',
    {
      type: 'category',
      label: 'UnlitWF Shader',
      link: {type: 'doc', id: 'unlitwf/index'},
      items: [
        {
          type: 'doc',
          id: 'unlitwf/VPM-package-Installation-procedure',
          label: 'VPMパッケージ導入',
        },
        {
          type: 'doc',
          id: 'unlitwf/CHANGELOG',
          label: 'CHANGELOG',
        },
        {
          type: 'category',
          label: 'シェーダ説明書',
          items: [
            {
              type: 'doc',
              id: 'unlitwf/Manual-Common',
              label: '共通事項',
            },
            {
              type: 'category',
              label: 'UnToon',
              link: {type: 'doc', id: 'unlitwf/Manual-UnToon'},
              items: [
                {
                  type: 'doc',
                  id: 'unlitwf/UnToon-Tips',
                  label: 'Tips',
                },
              ],
            },
            {
              type: 'doc',
              id: 'unlitwf/Manual-FakeFur',
              label: 'FakeFur',
            },
            {
              type: 'doc',
              id: 'unlitwf/Manual-Gem',
              label: 'Gem',
            },
            {
              type: 'doc',
              id: 'unlitwf/Manual-Water',
              label: 'Water',
            },
          ]
        },
        {
          type: 'doc',
          id: 'unlitwf/Material-Tools-Manual',
          label: 'マテリアル編集ツール',
        },
        {
          type: 'doc',
          id: 'unlitwf/Redistribution',
          label: '再配布について',
        },
      ],
    },
    {
      type: 'category',
      label: 'Flare\'s Tools',
      link: {type: 'doc', id: 'tools/index'},
      items: [
        {
          type: 'doc',
          id: 'tools/VPM-package-Installation-procedure',
          label: 'VPMパッケージ導入',
        },
        {
          type: 'doc',
          id: 'tools/AnimEditUtility',
          label: 'AnimEditUtility',
        },
        {
          type: 'doc',
          id: 'tools/AvatarCopyUtility',
          label: 'AvatarCopyUtility',
        },
        {
          type: 'doc',
          id: 'tools/AvatarTextureTool',
          label: 'AvatarTextureTool',
        },
        {
          type: 'doc',
          id: 'tools/BakedLightmapBaker',
          label: 'BakedLightmapBaker',
        },
        {
          type: 'doc',
          id: 'tools/BakeKillerFinder',
          label: 'BakeKillerFinder改',
        },
        {
          type: 'doc',
          id: 'tools/BoundsUnificator',
          label: 'BoundsUnificator',
        },
        {
          type: 'doc',
          id: 'tools/HierarchyHelper',
          label: 'HierarchyHelper',
        },
        {
          type: 'doc',
          id: 'tools/LightmapControlPanel',
          label: 'LightmapControlPanel',
        },
        {
          type: 'doc',
          id: 'tools/LightProbeEditUtility',
          label: 'LightProbeEditUtility',
        },
        {
          type: 'doc',
          id: 'tools/MeshPolyCounter',
          label: 'MeshPolyCounter',
        },
        {
          type: 'doc',
          id: 'tools/PhysBoneSetupHelper',
          label: 'PhysBoneSetupHelper',
        },
        {
          type: 'doc',
          id: 'tools/SplitterObjects',
          label: 'SplitterObjects',
        },
      ],
    },
  ],
};

export default sidebars;
