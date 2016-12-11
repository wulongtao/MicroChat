/**
 * Created by raid on 2016/12/2.
 */
angular.module('emojiFactory', []).factory('emojiFactory', function () {


    var emoji_maps = new Array();

    emoji_maps['unified_to_html'] = new Array();
    emoji_maps['unified_to_html'].unshift({code: '\xc2\xa9', html: 'emojia9'});
    emoji_maps['unified_to_html'].unshift({code: '\xc2\xae', html: 'emojiae'});
    emoji_maps['unified_to_html'].unshift({code: '\xe2\x80\xbc', html: 'emoji203c'});
    emoji_maps['unified_to_html'].unshift({code: '\xe2\x81\x89', html: 'emoji2049'});
    emoji_maps['unified_to_html'].unshift({code: '\xe2\x84\xa2', html: 'emoji2122'});
    emoji_maps['unified_to_html'].unshift({code: '\xe2\x84\xb9', html: 'emoji2139'});
    emoji_maps['unified_to_html'].unshift({code: '\xe2\x86\x94', html: 'emoji2194'});
    emoji_maps['unified_to_html'].unshift({code: '\xe2\x86\x95', html: 'emoji2195'});
    emoji_maps['unified_to_html'].unshift({code: '\xe2\x86\x96', html: 'emoji2196'});
    emoji_maps['unified_to_html'].unshift({code: '\xe2\x86\x97', html: 'emoji2197'});
    emoji_maps['unified_to_html'].unshift({code: '\xe2\x86\x98', html: 'emoji2198'});
    emoji_maps['unified_to_html'].unshift({code: '\xe2\x86\x99', html: 'emoji2199'});
    emoji_maps['unified_to_html'].unshift({code: '\xe2\x86\xa9', html: 'emoji21a9'});
    emoji_maps['unified_to_html'].unshift({code: '\xe2\x86\xaa', html: 'emoji21aa'});
    emoji_maps['unified_to_html'].unshift({code: '\xe2\x8c\x9a', html: 'emoji231a'});
    emoji_maps['unified_to_html'].unshift({code: '\xe2\x8c\x9b', html: 'emoji231b'});
    emoji_maps['unified_to_html'].unshift({code: '\xe2\x8c\xa8', html: 'emoji2328'});
    emoji_maps['unified_to_html'].unshift({code: '\xe2\x8f\xa9', html: 'emoji23e9'});
    emoji_maps['unified_to_html'].unshift({code: '\xe2\x8f\xaa', html: 'emoji23ea'});
    emoji_maps['unified_to_html'].unshift({code: '\xe2\x8f\xab', html: 'emoji23eb'});
    emoji_maps['unified_to_html'].unshift({code: '\xe2\x8f\xac', html: 'emoji23ec'});
    emoji_maps['unified_to_html'].unshift({code: '\xe2\x8f\xad', html: 'emoji23ed'});
    emoji_maps['unified_to_html'].unshift({code: '\xe2\x8f\xae', html: 'emoji23ee'});
    emoji_maps['unified_to_html'].unshift({code: '\xe2\x8f\xaf', html: 'emoji23ef'});
    emoji_maps['unified_to_html'].unshift({code: '\xe2\x8f\xb0', html: 'emoji23f0'});
    emoji_maps['unified_to_html'].unshift({code: '\xe2\x8f\xb1', html: 'emoji23f1'});
    emoji_maps['unified_to_html'].unshift({code: '\xe2\x8f\xb2', html: 'emoji23f2'});
    emoji_maps['unified_to_html'].unshift({code: '\xe2\x8f\xb3', html: 'emoji23f3'});
    emoji_maps['unified_to_html'].unshift({code: '\xe2\x8f\xb8', html: 'emoji23f8'});
    emoji_maps['unified_to_html'].unshift({code: '\xe2\x8f\xb9', html: 'emoji23f9'});
    emoji_maps['unified_to_html'].unshift({code: '\xe2\x8f\xba', html: 'emoji23fa'});
    emoji_maps['unified_to_html'].unshift({code: '\xe2\x93\x82', html: 'emoji24c2'});
    emoji_maps['unified_to_html'].unshift({code: '\xe2\x96\xaa', html: 'emoji25aa'});
    emoji_maps['unified_to_html'].unshift({code: '\xe2\x96\xab', html: 'emoji25ab'});
    emoji_maps['unified_to_html'].unshift({code: '\xe2\x96\xb6', html: 'emoji25b6'});
    emoji_maps['unified_to_html'].unshift({code: '\xe2\x97\x80', html: 'emoji25c0'});
    emoji_maps['unified_to_html'].unshift({code: '\xe2\x97\xbb', html: 'emoji25fb'});
    emoji_maps['unified_to_html'].unshift({code: '\xe2\x97\xbc', html: 'emoji25fc'});
    emoji_maps['unified_to_html'].unshift({code: '\xe2\x97\xbd', html: 'emoji25fd'});
    emoji_maps['unified_to_html'].unshift({code: '\xe2\x97\xbe', html: 'emoji25fe'});
    emoji_maps['unified_to_html'].unshift({code: '\xe2\x98\x80', html: 'emoji2600'});
    emoji_maps['unified_to_html'].unshift({code: '\xe2\x98\x81', html: 'emoji2601'});
    emoji_maps['unified_to_html'].unshift({code: '\xe2\x98\x82', html: 'emoji2602'});
    emoji_maps['unified_to_html'].unshift({code: '\xe2\x98\x83', html: 'emoji2603'});
    emoji_maps['unified_to_html'].unshift({code: '\xe2\x98\x84', html: 'emoji2604'});
    emoji_maps['unified_to_html'].unshift({code: '\xe2\x98\x8e', html: 'emoji260e'});
    emoji_maps['unified_to_html'].unshift({code: '\xe2\x98\x91', html: 'emoji2611'});
    emoji_maps['unified_to_html'].unshift({code: '\xe2\x98\x94', html: 'emoji2614'});
    emoji_maps['unified_to_html'].unshift({code: '\xe2\x98\x95', html: 'emoji2615'});
    emoji_maps['unified_to_html'].unshift({code: '\xe2\x98\x98', html: 'emoji2618'});
    emoji_maps['unified_to_html'].unshift({code: '\xe2\x98\x9d', html: 'emoji261d'});
    emoji_maps['unified_to_html'].unshift({code: '\xe2\x98\xa0', html: 'emoji2620'});
    emoji_maps['unified_to_html'].unshift({code: '\xe2\x98\xa2', html: 'emoji2622'});
    emoji_maps['unified_to_html'].unshift({code: '\xe2\x98\xa3', html: 'emoji2623'});
    emoji_maps['unified_to_html'].unshift({code: '\xe2\x98\xa6', html: 'emoji2626'});
    emoji_maps['unified_to_html'].unshift({code: '\xe2\x98\xaa', html: 'emoji262a'});
    emoji_maps['unified_to_html'].unshift({code: '\xe2\x98\xae', html: 'emoji262e'});
    emoji_maps['unified_to_html'].unshift({code: '\xe2\x98\xaf', html: 'emoji262f'});
    emoji_maps['unified_to_html'].unshift({code: '\xe2\x98\xb8', html: 'emoji2638'});
    emoji_maps['unified_to_html'].unshift({code: '\xe2\x98\xb9', html: 'emoji2639'});
    emoji_maps['unified_to_html'].unshift({code: '\xe2\x98\xba', html: 'emoji263a'});
    emoji_maps['unified_to_html'].unshift({code: '\xe2\x99\x88', html: 'emoji2648'});
    emoji_maps['unified_to_html'].unshift({code: '\xe2\x99\x89', html: 'emoji2649'});
    emoji_maps['unified_to_html'].unshift({code: '\xe2\x99\x8a', html: 'emoji264a'});
    emoji_maps['unified_to_html'].unshift({code: '\xe2\x99\x8b', html: 'emoji264b'});
    emoji_maps['unified_to_html'].unshift({code: '\xe2\x99\x8c', html: 'emoji264c'});
    emoji_maps['unified_to_html'].unshift({code: '\xe2\x99\x8d', html: 'emoji264d'});
    emoji_maps['unified_to_html'].unshift({code: '\xe2\x99\x8e', html: 'emoji264e'});
    emoji_maps['unified_to_html'].unshift({code: '\xe2\x99\x8f', html: 'emoji264f'});
    emoji_maps['unified_to_html'].unshift({code: '\xe2\x99\x90', html: 'emoji2650'});
    emoji_maps['unified_to_html'].unshift({code: '\xe2\x99\x91', html: 'emoji2651'});
    emoji_maps['unified_to_html'].unshift({code: '\xe2\x99\x92', html: 'emoji2652'});
    emoji_maps['unified_to_html'].unshift({code: '\xe2\x99\x93', html: 'emoji2653'});
    emoji_maps['unified_to_html'].unshift({code: '\xe2\x99\xa0', html: 'emoji2660'});
    emoji_maps['unified_to_html'].unshift({code: '\xe2\x99\xa3', html: 'emoji2663'});
    emoji_maps['unified_to_html'].unshift({code: '\xe2\x99\xa5', html: 'emoji2665'});
    emoji_maps['unified_to_html'].unshift({code: '\xe2\x99\xa6', html: 'emoji2666'});
    emoji_maps['unified_to_html'].unshift({code: '\xe2\x99\xa8', html: 'emoji2668'});
    emoji_maps['unified_to_html'].unshift({code: '\xe2\x99\xbb', html: 'emoji267b'});
    emoji_maps['unified_to_html'].unshift({code: '\xe2\x99\xbf', html: 'emoji267f'});
    emoji_maps['unified_to_html'].unshift({code: '\xe2\x9a\x92', html: 'emoji2692'});
    emoji_maps['unified_to_html'].unshift({code: '\xe2\x9a\x93', html: 'emoji2693'});
    emoji_maps['unified_to_html'].unshift({code: '\xe2\x9a\x94', html: 'emoji2694'});
    emoji_maps['unified_to_html'].unshift({code: '\xe2\x9a\x96', html: 'emoji2696'});
    emoji_maps['unified_to_html'].unshift({code: '\xe2\x9a\x97', html: 'emoji2697'});
    emoji_maps['unified_to_html'].unshift({code: '\xe2\x9a\x99', html: 'emoji2699'});
    emoji_maps['unified_to_html'].unshift({code: '\xe2\x9a\x9b', html: 'emoji269b'});
    emoji_maps['unified_to_html'].unshift({code: '\xe2\x9a\x9c', html: 'emoji269c'});
    emoji_maps['unified_to_html'].unshift({code: '\xe2\x9a\xa0', html: 'emoji26a0'});
    emoji_maps['unified_to_html'].unshift({code: '\xe2\x9a\xa1', html: 'emoji26a1'});
    emoji_maps['unified_to_html'].unshift({code: '\xe2\x9a\xaa', html: 'emoji26aa'});
    emoji_maps['unified_to_html'].unshift({code: '\xe2\x9a\xab', html: 'emoji26ab'});
    emoji_maps['unified_to_html'].unshift({code: '\xe2\x9a\xb0', html: 'emoji26b0'});
    emoji_maps['unified_to_html'].unshift({code: '\xe2\x9a\xb1', html: 'emoji26b1'});
    emoji_maps['unified_to_html'].unshift({code: '\xe2\x9a\xbd', html: 'emoji26bd'});
    emoji_maps['unified_to_html'].unshift({code: '\xe2\x9a\xbe', html: 'emoji26be'});
    emoji_maps['unified_to_html'].unshift({code: '\xe2\x9b\x84', html: 'emoji26c4'});
    emoji_maps['unified_to_html'].unshift({code: '\xe2\x9b\x85', html: 'emoji26c5'});
    emoji_maps['unified_to_html'].unshift({code: '\xe2\x9b\x88', html: 'emoji26c8'});
    emoji_maps['unified_to_html'].unshift({code: '\xe2\x9b\x8e', html: 'emoji26ce'});
    emoji_maps['unified_to_html'].unshift({code: '\xe2\x9b\x8f', html: 'emoji26cf'});
    emoji_maps['unified_to_html'].unshift({code: '\xe2\x9b\x91', html: 'emoji26d1'});
    emoji_maps['unified_to_html'].unshift({code: '\xe2\x9b\x93', html: 'emoji26d3'});
    emoji_maps['unified_to_html'].unshift({code: '\xe2\x9b\x94', html: 'emoji26d4'});
    emoji_maps['unified_to_html'].unshift({code: '\xe2\x9b\xa9', html: 'emoji26e9'});
    emoji_maps['unified_to_html'].unshift({code: '\xe2\x9b\xaa', html: 'emoji26ea'});
    emoji_maps['unified_to_html'].unshift({code: '\xe2\x9b\xb0', html: 'emoji26f0'});
    emoji_maps['unified_to_html'].unshift({code: '\xe2\x9b\xb1', html: 'emoji26f1'});
    emoji_maps['unified_to_html'].unshift({code: '\xe2\x9b\xb2', html: 'emoji26f2'});
    emoji_maps['unified_to_html'].unshift({code: '\xe2\x9b\xb3', html: 'emoji26f3'});
    emoji_maps['unified_to_html'].unshift({code: '\xe2\x9b\xb4', html: 'emoji26f4'});
    emoji_maps['unified_to_html'].unshift({code: '\xe2\x9b\xb5', html: 'emoji26f5'});
    emoji_maps['unified_to_html'].unshift({code: '\xe2\x9b\xb7', html: 'emoji26f7'});
    emoji_maps['unified_to_html'].unshift({code: '\xe2\x9b\xb8', html: 'emoji26f8'});
    emoji_maps['unified_to_html'].unshift({code: '\xe2\x9b\xb9', html: 'emoji26f9'});
    emoji_maps['unified_to_html'].unshift({code: '\xe2\x9b\xba', html: 'emoji26fa'});
    emoji_maps['unified_to_html'].unshift({code: '\xe2\x9b\xbd', html: 'emoji26fd'});
    emoji_maps['unified_to_html'].unshift({code: '\xe2\x9c\x82', html: 'emoji2702'});
    emoji_maps['unified_to_html'].unshift({code: '\xe2\x9c\x85', html: 'emoji2705'});
    emoji_maps['unified_to_html'].unshift({code: '\xe2\x9c\x88', html: 'emoji2708'});
    emoji_maps['unified_to_html'].unshift({code: '\xe2\x9c\x89', html: 'emoji2709'});
    emoji_maps['unified_to_html'].unshift({code: '\xe2\x9c\x8a', html: 'emoji270a'});
    emoji_maps['unified_to_html'].unshift({code: '\xe2\x9c\x8b', html: 'emoji270b'});
    emoji_maps['unified_to_html'].unshift({code: '\xe2\x9c\x8c', html: 'emoji270c'});
    emoji_maps['unified_to_html'].unshift({code: '\xe2\x9c\x8d', html: 'emoji270d'});
    emoji_maps['unified_to_html'].unshift({code: '\xe2\x9c\x8f', html: 'emoji270f'});
    emoji_maps['unified_to_html'].unshift({code: '\xe2\x9c\x92', html: 'emoji2712'});
    emoji_maps['unified_to_html'].unshift({code: '\xe2\x9c\x94', html: 'emoji2714'});
    emoji_maps['unified_to_html'].unshift({code: '\xe2\x9c\x96', html: 'emoji2716'});
    emoji_maps['unified_to_html'].unshift({code: '\xe2\x9c\x9d', html: 'emoji271d'});
    emoji_maps['unified_to_html'].unshift({code: '\xe2\x9c\xa1', html: 'emoji2721'});
    emoji_maps['unified_to_html'].unshift({code: '\xe2\x9c\xa8', html: 'emoji2728'});
    emoji_maps['unified_to_html'].unshift({code: '\xe2\x9c\xb3', html: 'emoji2733'});
    emoji_maps['unified_to_html'].unshift({code: '\xe2\x9c\xb4', html: 'emoji2734'});
    emoji_maps['unified_to_html'].unshift({code: '\xe2\x9d\x84', html: 'emoji2744'});
    emoji_maps['unified_to_html'].unshift({code: '\xe2\x9d\x87', html: 'emoji2747'});
    emoji_maps['unified_to_html'].unshift({code: '\xe2\x9d\x8c', html: 'emoji274c'});
    emoji_maps['unified_to_html'].unshift({code: '\xe2\x9d\x8e', html: 'emoji274e'});
    emoji_maps['unified_to_html'].unshift({code: '\xe2\x9d\x93', html: 'emoji2753'});
    emoji_maps['unified_to_html'].unshift({code: '\xe2\x9d\x94', html: 'emoji2754'});
    emoji_maps['unified_to_html'].unshift({code: '\xe2\x9d\x95', html: 'emoji2755'});
    emoji_maps['unified_to_html'].unshift({code: '\xe2\x9d\x97', html: 'emoji2757'});
    emoji_maps['unified_to_html'].unshift({code: '\xe2\x9d\xa3', html: 'emoji2763'});
    emoji_maps['unified_to_html'].unshift({code: '\xe2\x9d\xa4', html: 'emoji2764'});
    emoji_maps['unified_to_html'].unshift({code: '\xe2\x9e\x95', html: 'emoji2795'});
    emoji_maps['unified_to_html'].unshift({code: '\xe2\x9e\x96', html: 'emoji2796'});
    emoji_maps['unified_to_html'].unshift({code: '\xe2\x9e\x97', html: 'emoji2797'});
    emoji_maps['unified_to_html'].unshift({code: '\xe2\x9e\xa1', html: 'emoji27a1'});
    emoji_maps['unified_to_html'].unshift({code: '\xe2\x9e\xb0', html: 'emoji27b0'});
    emoji_maps['unified_to_html'].unshift({code: '\xe2\x9e\xbf', html: 'emoji27bf'});
    emoji_maps['unified_to_html'].unshift({code: '\xe2\xa4\xb4', html: 'emoji2934'});
    emoji_maps['unified_to_html'].unshift({code: '\xe2\xa4\xb5', html: 'emoji2935'});
    emoji_maps['unified_to_html'].unshift({code: '\xe2\xac\x85', html: 'emoji2b05'});
    emoji_maps['unified_to_html'].unshift({code: '\xe2\xac\x86', html: 'emoji2b06'});
    emoji_maps['unified_to_html'].unshift({code: '\xe2\xac\x87', html: 'emoji2b07'});
    emoji_maps['unified_to_html'].unshift({code: '\xe2\xac\x9b', html: 'emoji2b1b'});
    emoji_maps['unified_to_html'].unshift({code: '\xe2\xac\x9c', html: 'emoji2b1c'});
    emoji_maps['unified_to_html'].unshift({code: '\xe2\xad\x90', html: 'emoji2b50'});
    emoji_maps['unified_to_html'].unshift({code: '\xe2\xad\x95', html: 'emoji2b55'});
    emoji_maps['unified_to_html'].unshift({code: '\xe3\x80\xb0', html: 'emoji3030'});
    emoji_maps['unified_to_html'].unshift({code: '\xe3\x80\xbd', html: 'emoji303d'});
    emoji_maps['unified_to_html'].unshift({code: '\xe3\x8a\x97', html: 'emoji3297'});
    emoji_maps['unified_to_html'].unshift({code: '\xe3\x8a\x99', html: 'emoji3299'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x80\x84', html: 'emoji1f004'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x83\x8f', html: 'emoji1f0cf'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x85\xb0', html: 'emoji1f170'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x85\xb1', html: 'emoji1f171'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x85\xbe', html: 'emoji1f17e'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x85\xbf', html: 'emoji1f17f'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x86\x8e', html: 'emoji1f18e'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x86\x91', html: 'emoji1f191'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x86\x92', html: 'emoji1f192'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x86\x93', html: 'emoji1f193'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x86\x94', html: 'emoji1f194'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x86\x95', html: 'emoji1f195'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x86\x96', html: 'emoji1f196'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x86\x97', html: 'emoji1f197'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x86\x98', html: 'emoji1f198'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x86\x99', html: 'emoji1f199'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x86\x9a', html: 'emoji1f19a'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x88\x81', html: 'emoji1f201'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x88\x82', html: 'emoji1f202'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x88\x9a', html: 'emoji1f21a'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x88\xaf', html: 'emoji1f22f'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x88\xb2', html: 'emoji1f232'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x88\xb3', html: 'emoji1f233'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x88\xb4', html: 'emoji1f234'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x88\xb5', html: 'emoji1f235'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x88\xb6', html: 'emoji1f236'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x88\xb7', html: 'emoji1f237'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x88\xb8', html: 'emoji1f238'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x88\xb9', html: 'emoji1f239'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x88\xba', html: 'emoji1f23a'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x89\x90', html: 'emoji1f250'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x89\x91', html: 'emoji1f251'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x8c\x80', html: 'emoji1f300'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x8c\x81', html: 'emoji1f301'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x8c\x82', html: 'emoji1f302'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x8c\x83', html: 'emoji1f303'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x8c\x84', html: 'emoji1f304'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x8c\x85', html: 'emoji1f305'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x8c\x86', html: 'emoji1f306'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x8c\x87', html: 'emoji1f307'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x8c\x88', html: 'emoji1f308'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x8c\x89', html: 'emoji1f309'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x8c\x8a', html: 'emoji1f30a'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x8c\x8b', html: 'emoji1f30b'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x8c\x8c', html: 'emoji1f30c'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x8c\x8d', html: 'emoji1f30d'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x8c\x8e', html: 'emoji1f30e'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x8c\x8f', html: 'emoji1f30f'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x8c\x90', html: 'emoji1f310'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x8c\x91', html: 'emoji1f311'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x8c\x92', html: 'emoji1f312'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x8c\x93', html: 'emoji1f313'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x8c\x94', html: 'emoji1f314'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x8c\x95', html: 'emoji1f315'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x8c\x96', html: 'emoji1f316'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x8c\x97', html: 'emoji1f317'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x8c\x98', html: 'emoji1f318'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x8c\x99', html: 'emoji1f319'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x8c\x9a', html: 'emoji1f31a'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x8c\x9b', html: 'emoji1f31b'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x8c\x9c', html: 'emoji1f31c'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x8c\x9d', html: 'emoji1f31d'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x8c\x9e', html: 'emoji1f31e'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x8c\x9f', html: 'emoji1f31f'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x8c\xa0', html: 'emoji1f320'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x8c\xa1', html: 'emoji1f321'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x8c\xa4', html: 'emoji1f324'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x8c\xa5', html: 'emoji1f325'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x8c\xa6', html: 'emoji1f326'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x8c\xa7', html: 'emoji1f327'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x8c\xa8', html: 'emoji1f328'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x8c\xa9', html: 'emoji1f329'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x8c\xaa', html: 'emoji1f32a'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x8c\xab', html: 'emoji1f32b'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x8c\xac', html: 'emoji1f32c'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x8c\xad', html: 'emoji1f32d'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x8c\xae', html: 'emoji1f32e'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x8c\xaf', html: 'emoji1f32f'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x8c\xb0', html: 'emoji1f330'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x8c\xb1', html: 'emoji1f331'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x8c\xb2', html: 'emoji1f332'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x8c\xb3', html: 'emoji1f333'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x8c\xb4', html: 'emoji1f334'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x8c\xb5', html: 'emoji1f335'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x8c\xb6', html: 'emoji1f336'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x8c\xb7', html: 'emoji1f337'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x8c\xb8', html: 'emoji1f338'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x8c\xb9', html: 'emoji1f339'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x8c\xba', html: 'emoji1f33a'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x8c\xbb', html: 'emoji1f33b'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x8c\xbc', html: 'emoji1f33c'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x8c\xbd', html: 'emoji1f33d'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x8c\xbe', html: 'emoji1f33e'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x8c\xbf', html: 'emoji1f33f'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x8d\x80', html: 'emoji1f340'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x8d\x81', html: 'emoji1f341'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x8d\x82', html: 'emoji1f342'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x8d\x83', html: 'emoji1f343'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x8d\x84', html: 'emoji1f344'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x8d\x85', html: 'emoji1f345'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x8d\x86', html: 'emoji1f346'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x8d\x87', html: 'emoji1f347'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x8d\x88', html: 'emoji1f348'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x8d\x89', html: 'emoji1f349'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x8d\x8a', html: 'emoji1f34a'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x8d\x8b', html: 'emoji1f34b'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x8d\x8c', html: 'emoji1f34c'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x8d\x8d', html: 'emoji1f34d'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x8d\x8e', html: 'emoji1f34e'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x8d\x8f', html: 'emoji1f34f'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x8d\x90', html: 'emoji1f350'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x8d\x91', html: 'emoji1f351'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x8d\x92', html: 'emoji1f352'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x8d\x93', html: 'emoji1f353'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x8d\x94', html: 'emoji1f354'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x8d\x95', html: 'emoji1f355'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x8d\x96', html: 'emoji1f356'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x8d\x97', html: 'emoji1f357'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x8d\x98', html: 'emoji1f358'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x8d\x99', html: 'emoji1f359'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x8d\x9a', html: 'emoji1f35a'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x8d\x9b', html: 'emoji1f35b'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x8d\x9c', html: 'emoji1f35c'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x8d\x9d', html: 'emoji1f35d'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x8d\x9e', html: 'emoji1f35e'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x8d\x9f', html: 'emoji1f35f'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x8d\xa0', html: 'emoji1f360'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x8d\xa1', html: 'emoji1f361'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x8d\xa2', html: 'emoji1f362'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x8d\xa3', html: 'emoji1f363'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x8d\xa4', html: 'emoji1f364'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x8d\xa5', html: 'emoji1f365'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x8d\xa6', html: 'emoji1f366'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x8d\xa7', html: 'emoji1f367'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x8d\xa8', html: 'emoji1f368'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x8d\xa9', html: 'emoji1f369'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x8d\xaa', html: 'emoji1f36a'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x8d\xab', html: 'emoji1f36b'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x8d\xac', html: 'emoji1f36c'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x8d\xad', html: 'emoji1f36d'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x8d\xae', html: 'emoji1f36e'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x8d\xaf', html: 'emoji1f36f'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x8d\xb0', html: 'emoji1f370'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x8d\xb1', html: 'emoji1f371'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x8d\xb2', html: 'emoji1f372'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x8d\xb3', html: 'emoji1f373'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x8d\xb4', html: 'emoji1f374'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x8d\xb5', html: 'emoji1f375'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x8d\xb6', html: 'emoji1f376'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x8d\xb7', html: 'emoji1f377'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x8d\xb8', html: 'emoji1f378'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x8d\xb9', html: 'emoji1f379'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x8d\xba', html: 'emoji1f37a'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x8d\xbb', html: 'emoji1f37b'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x8d\xbc', html: 'emoji1f37c'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x8d\xbd', html: 'emoji1f37d'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x8d\xbe', html: 'emoji1f37e'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x8d\xbf', html: 'emoji1f37f'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x8e\x80', html: 'emoji1f380'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x8e\x81', html: 'emoji1f381'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x8e\x82', html: 'emoji1f382'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x8e\x83', html: 'emoji1f383'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x8e\x84', html: 'emoji1f384'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x8e\x85', html: 'emoji1f385'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x8e\x86', html: 'emoji1f386'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x8e\x87', html: 'emoji1f387'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x8e\x88', html: 'emoji1f388'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x8e\x89', html: 'emoji1f389'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x8e\x8a', html: 'emoji1f38a'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x8e\x8b', html: 'emoji1f38b'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x8e\x8c', html: 'emoji1f38c'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x8e\x8d', html: 'emoji1f38d'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x8e\x8e', html: 'emoji1f38e'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x8e\x8f', html: 'emoji1f38f'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x8e\x90', html: 'emoji1f390'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x8e\x91', html: 'emoji1f391'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x8e\x92', html: 'emoji1f392'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x8e\x93', html: 'emoji1f393'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x8e\x96', html: 'emoji1f396'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x8e\x97', html: 'emoji1f397'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x8e\x99', html: 'emoji1f399'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x8e\x9a', html: 'emoji1f39a'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x8e\x9b', html: 'emoji1f39b'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x8e\x9e', html: 'emoji1f39e'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x8e\x9f', html: 'emoji1f39f'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x8e\xa0', html: 'emoji1f3a0'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x8e\xa1', html: 'emoji1f3a1'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x8e\xa2', html: 'emoji1f3a2'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x8e\xa3', html: 'emoji1f3a3'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x8e\xa4', html: 'emoji1f3a4'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x8e\xa5', html: 'emoji1f3a5'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x8e\xa6', html: 'emoji1f3a6'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x8e\xa7', html: 'emoji1f3a7'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x8e\xa8', html: 'emoji1f3a8'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x8e\xa9', html: 'emoji1f3a9'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x8e\xaa', html: 'emoji1f3aa'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x8e\xab', html: 'emoji1f3ab'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x8e\xac', html: 'emoji1f3ac'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x8e\xad', html: 'emoji1f3ad'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x8e\xae', html: 'emoji1f3ae'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x8e\xaf', html: 'emoji1f3af'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x8e\xb0', html: 'emoji1f3b0'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x8e\xb1', html: 'emoji1f3b1'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x8e\xb2', html: 'emoji1f3b2'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x8e\xb3', html: 'emoji1f3b3'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x8e\xb4', html: 'emoji1f3b4'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x8e\xb5', html: 'emoji1f3b5'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x8e\xb6', html: 'emoji1f3b6'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x8e\xb7', html: 'emoji1f3b7'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x8e\xb8', html: 'emoji1f3b8'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x8e\xb9', html: 'emoji1f3b9'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x8e\xba', html: 'emoji1f3ba'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x8e\xbb', html: 'emoji1f3bb'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x8e\xbc', html: 'emoji1f3bc'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x8e\xbd', html: 'emoji1f3bd'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x8e\xbe', html: 'emoji1f3be'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x8e\xbf', html: 'emoji1f3bf'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x8f\x80', html: 'emoji1f3c0'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x8f\x81', html: 'emoji1f3c1'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x8f\x82', html: 'emoji1f3c2'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x8f\x83', html: 'emoji1f3c3'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x8f\x84', html: 'emoji1f3c4'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x8f\x85', html: 'emoji1f3c5'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x8f\x86', html: 'emoji1f3c6'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x8f\x87', html: 'emoji1f3c7'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x8f\x88', html: 'emoji1f3c8'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x8f\x89', html: 'emoji1f3c9'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x8f\x8a', html: 'emoji1f3ca'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x8f\x8b', html: 'emoji1f3cb'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x8f\x8c', html: 'emoji1f3cc'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x8f\x8d', html: 'emoji1f3cd'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x8f\x8e', html: 'emoji1f3ce'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x8f\x8f', html: 'emoji1f3cf'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x8f\x90', html: 'emoji1f3d0'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x8f\x91', html: 'emoji1f3d1'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x8f\x92', html: 'emoji1f3d2'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x8f\x93', html: 'emoji1f3d3'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x8f\x94', html: 'emoji1f3d4'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x8f\x95', html: 'emoji1f3d5'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x8f\x96', html: 'emoji1f3d6'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x8f\x97', html: 'emoji1f3d7'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x8f\x98', html: 'emoji1f3d8'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x8f\x99', html: 'emoji1f3d9'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x8f\x9a', html: 'emoji1f3da'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x8f\x9b', html: 'emoji1f3db'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x8f\x9c', html: 'emoji1f3dc'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x8f\x9d', html: 'emoji1f3dd'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x8f\x9e', html: 'emoji1f3de'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x8f\x9f', html: 'emoji1f3df'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x8f\xa0', html: 'emoji1f3e0'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x8f\xa1', html: 'emoji1f3e1'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x8f\xa2', html: 'emoji1f3e2'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x8f\xa3', html: 'emoji1f3e3'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x8f\xa4', html: 'emoji1f3e4'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x8f\xa5', html: 'emoji1f3e5'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x8f\xa6', html: 'emoji1f3e6'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x8f\xa7', html: 'emoji1f3e7'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x8f\xa8', html: 'emoji1f3e8'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x8f\xa9', html: 'emoji1f3e9'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x8f\xaa', html: 'emoji1f3ea'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x8f\xab', html: 'emoji1f3eb'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x8f\xac', html: 'emoji1f3ec'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x8f\xad', html: 'emoji1f3ed'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x8f\xae', html: 'emoji1f3ee'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x8f\xaf', html: 'emoji1f3ef'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x8f\xb0', html: 'emoji1f3f0'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x8f\xb3', html: 'emoji1f3f3'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x8f\xb4', html: 'emoji1f3f4'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x8f\xb5', html: 'emoji1f3f5'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x8f\xb7', html: 'emoji1f3f7'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x8f\xb8', html: 'emoji1f3f8'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x8f\xb9', html: 'emoji1f3f9'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x8f\xba', html: 'emoji1f3fa'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x8f\xbb', html: 'emoji1f3fb'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x8f\xbc', html: 'emoji1f3fc'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x8f\xbd', html: 'emoji1f3fd'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x8f\xbe', html: 'emoji1f3fe'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x8f\xbf', html: 'emoji1f3ff'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x90\x80', html: 'emoji1f400'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x90\x81', html: 'emoji1f401'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x90\x82', html: 'emoji1f402'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x90\x83', html: 'emoji1f403'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x90\x84', html: 'emoji1f404'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x90\x85', html: 'emoji1f405'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x90\x86', html: 'emoji1f406'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x90\x87', html: 'emoji1f407'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x90\x88', html: 'emoji1f408'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x90\x89', html: 'emoji1f409'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x90\x8a', html: 'emoji1f40a'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x90\x8b', html: 'emoji1f40b'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x90\x8c', html: 'emoji1f40c'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x90\x8d', html: 'emoji1f40d'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x90\x8e', html: 'emoji1f40e'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x90\x8f', html: 'emoji1f40f'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x90\x90', html: 'emoji1f410'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x90\x91', html: 'emoji1f411'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x90\x92', html: 'emoji1f412'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x90\x93', html: 'emoji1f413'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x90\x94', html: 'emoji1f414'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x90\x95', html: 'emoji1f415'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x90\x96', html: 'emoji1f416'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x90\x97', html: 'emoji1f417'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x90\x98', html: 'emoji1f418'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x90\x99', html: 'emoji1f419'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x90\x9a', html: 'emoji1f41a'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x90\x9b', html: 'emoji1f41b'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x90\x9c', html: 'emoji1f41c'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x90\x9d', html: 'emoji1f41d'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x90\x9e', html: 'emoji1f41e'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x90\x9f', html: 'emoji1f41f'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x90\xa0', html: 'emoji1f420'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x90\xa1', html: 'emoji1f421'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x90\xa2', html: 'emoji1f422'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x90\xa3', html: 'emoji1f423'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x90\xa4', html: 'emoji1f424'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x90\xa5', html: 'emoji1f425'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x90\xa6', html: 'emoji1f426'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x90\xa7', html: 'emoji1f427'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x90\xa8', html: 'emoji1f428'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x90\xa9', html: 'emoji1f429'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x90\xaa', html: 'emoji1f42a'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x90\xab', html: 'emoji1f42b'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x90\xac', html: 'emoji1f42c'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x90\xad', html: 'emoji1f42d'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x90\xae', html: 'emoji1f42e'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x90\xaf', html: 'emoji1f42f'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x90\xb0', html: 'emoji1f430'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x90\xb1', html: 'emoji1f431'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x90\xb2', html: 'emoji1f432'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x90\xb3', html: 'emoji1f433'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x90\xb4', html: 'emoji1f434'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x90\xb5', html: 'emoji1f435'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x90\xb6', html: 'emoji1f436'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x90\xb7', html: 'emoji1f437'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x90\xb8', html: 'emoji1f438'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x90\xb9', html: 'emoji1f439'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x90\xba', html: 'emoji1f43a'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x90\xbb', html: 'emoji1f43b'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x90\xbc', html: 'emoji1f43c'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x90\xbd', html: 'emoji1f43d'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x90\xbe', html: 'emoji1f43e'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x90\xbf', html: 'emoji1f43f'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x91\x80', html: 'emoji1f440'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x91\x81', html: 'emoji1f441'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x91\x82', html: 'emoji1f442'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x91\x83', html: 'emoji1f443'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x91\x84', html: 'emoji1f444'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x91\x85', html: 'emoji1f445'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x91\x86', html: 'emoji1f446'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x91\x87', html: 'emoji1f447'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x91\x88', html: 'emoji1f448'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x91\x89', html: 'emoji1f449'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x91\x8a', html: 'emoji1f44a'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x91\x8b', html: 'emoji1f44b'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x91\x8c', html: 'emoji1f44c'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x91\x8d', html: 'emoji1f44d'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x91\x8e', html: 'emoji1f44e'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x91\x8f', html: 'emoji1f44f'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x91\x90', html: 'emoji1f450'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x91\x91', html: 'emoji1f451'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x91\x92', html: 'emoji1f452'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x91\x93', html: 'emoji1f453'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x91\x94', html: 'emoji1f454'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x91\x95', html: 'emoji1f455'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x91\x96', html: 'emoji1f456'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x91\x97', html: 'emoji1f457'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x91\x98', html: 'emoji1f458'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x91\x99', html: 'emoji1f459'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x91\x9a', html: 'emoji1f45a'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x91\x9b', html: 'emoji1f45b'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x91\x9c', html: 'emoji1f45c'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x91\x9d', html: 'emoji1f45d'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x91\x9e', html: 'emoji1f45e'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x91\x9f', html: 'emoji1f45f'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x91\xa0', html: 'emoji1f460'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x91\xa1', html: 'emoji1f461'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x91\xa2', html: 'emoji1f462'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x91\xa3', html: 'emoji1f463'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x91\xa4', html: 'emoji1f464'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x91\xa5', html: 'emoji1f465'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x91\xa6', html: 'emoji1f466'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x91\xa7', html: 'emoji1f467'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x91\xa8', html: 'emoji1f468'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x91\xa9', html: 'emoji1f469'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x91\xaa', html: 'emoji1f46a'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x91\xab', html: 'emoji1f46b'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x91\xac', html: 'emoji1f46c'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x91\xad', html: 'emoji1f46d'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x91\xae', html: 'emoji1f46e'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x91\xaf', html: 'emoji1f46f'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x91\xb0', html: 'emoji1f470'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x91\xb1', html: 'emoji1f471'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x91\xb2', html: 'emoji1f472'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x91\xb3', html: 'emoji1f473'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x91\xb4', html: 'emoji1f474'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x91\xb5', html: 'emoji1f475'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x91\xb6', html: 'emoji1f476'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x91\xb7', html: 'emoji1f477'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x91\xb8', html: 'emoji1f478'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x91\xb9', html: 'emoji1f479'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x91\xba', html: 'emoji1f47a'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x91\xbb', html: 'emoji1f47b'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x91\xbc', html: 'emoji1f47c'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x91\xbd', html: 'emoji1f47d'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x91\xbe', html: 'emoji1f47e'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x91\xbf', html: 'emoji1f47f'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x92\x80', html: 'emoji1f480'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x92\x81', html: 'emoji1f481'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x92\x82', html: 'emoji1f482'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x92\x83', html: 'emoji1f483'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x92\x84', html: 'emoji1f484'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x92\x85', html: 'emoji1f485'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x92\x86', html: 'emoji1f486'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x92\x87', html: 'emoji1f487'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x92\x88', html: 'emoji1f488'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x92\x89', html: 'emoji1f489'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x92\x8a', html: 'emoji1f48a'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x92\x8b', html: 'emoji1f48b'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x92\x8c', html: 'emoji1f48c'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x92\x8d', html: 'emoji1f48d'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x92\x8e', html: 'emoji1f48e'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x92\x8f', html: 'emoji1f48f'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x92\x90', html: 'emoji1f490'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x92\x91', html: 'emoji1f491'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x92\x92', html: 'emoji1f492'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x92\x93', html: 'emoji1f493'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x92\x94', html: 'emoji1f494'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x92\x95', html: 'emoji1f495'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x92\x96', html: 'emoji1f496'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x92\x97', html: 'emoji1f497'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x92\x98', html: 'emoji1f498'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x92\x99', html: 'emoji1f499'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x92\x9a', html: 'emoji1f49a'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x92\x9b', html: 'emoji1f49b'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x92\x9c', html: 'emoji1f49c'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x92\x9d', html: 'emoji1f49d'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x92\x9e', html: 'emoji1f49e'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x92\x9f', html: 'emoji1f49f'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x92\xa0', html: 'emoji1f4a0'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x92\xa1', html: 'emoji1f4a1'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x92\xa2', html: 'emoji1f4a2'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x92\xa3', html: 'emoji1f4a3'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x92\xa4', html: 'emoji1f4a4'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x92\xa5', html: 'emoji1f4a5'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x92\xa6', html: 'emoji1f4a6'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x92\xa7', html: 'emoji1f4a7'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x92\xa8', html: 'emoji1f4a8'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x92\xa9', html: 'emoji1f4a9'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x92\xaa', html: 'emoji1f4aa'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x92\xab', html: 'emoji1f4ab'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x92\xac', html: 'emoji1f4ac'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x92\xad', html: 'emoji1f4ad'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x92\xae', html: 'emoji1f4ae'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x92\xaf', html: 'emoji1f4af'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x92\xb0', html: 'emoji1f4b0'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x92\xb1', html: 'emoji1f4b1'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x92\xb2', html: 'emoji1f4b2'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x92\xb3', html: 'emoji1f4b3'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x92\xb4', html: 'emoji1f4b4'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x92\xb5', html: 'emoji1f4b5'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x92\xb6', html: 'emoji1f4b6'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x92\xb7', html: 'emoji1f4b7'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x92\xb8', html: 'emoji1f4b8'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x92\xb9', html: 'emoji1f4b9'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x92\xba', html: 'emoji1f4ba'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x92\xbb', html: 'emoji1f4bb'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x92\xbc', html: 'emoji1f4bc'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x92\xbd', html: 'emoji1f4bd'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x92\xbe', html: 'emoji1f4be'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x92\xbf', html: 'emoji1f4bf'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x93\x80', html: 'emoji1f4c0'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x93\x81', html: 'emoji1f4c1'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x93\x82', html: 'emoji1f4c2'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x93\x83', html: 'emoji1f4c3'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x93\x84', html: 'emoji1f4c4'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x93\x85', html: 'emoji1f4c5'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x93\x86', html: 'emoji1f4c6'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x93\x87', html: 'emoji1f4c7'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x93\x88', html: 'emoji1f4c8'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x93\x89', html: 'emoji1f4c9'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x93\x8a', html: 'emoji1f4ca'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x93\x8b', html: 'emoji1f4cb'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x93\x8c', html: 'emoji1f4cc'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x93\x8d', html: 'emoji1f4cd'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x93\x8e', html: 'emoji1f4ce'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x93\x8f', html: 'emoji1f4cf'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x93\x90', html: 'emoji1f4d0'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x93\x91', html: 'emoji1f4d1'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x93\x92', html: 'emoji1f4d2'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x93\x93', html: 'emoji1f4d3'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x93\x94', html: 'emoji1f4d4'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x93\x95', html: 'emoji1f4d5'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x93\x96', html: 'emoji1f4d6'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x93\x97', html: 'emoji1f4d7'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x93\x98', html: 'emoji1f4d8'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x93\x99', html: 'emoji1f4d9'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x93\x9a', html: 'emoji1f4da'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x93\x9b', html: 'emoji1f4db'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x93\x9c', html: 'emoji1f4dc'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x93\x9d', html: 'emoji1f4dd'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x93\x9e', html: 'emoji1f4de'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x93\x9f', html: 'emoji1f4df'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x93\xa0', html: 'emoji1f4e0'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x93\xa1', html: 'emoji1f4e1'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x93\xa2', html: 'emoji1f4e2'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x93\xa3', html: 'emoji1f4e3'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x93\xa4', html: 'emoji1f4e4'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x93\xa5', html: 'emoji1f4e5'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x93\xa6', html: 'emoji1f4e6'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x93\xa7', html: 'emoji1f4e7'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x93\xa8', html: 'emoji1f4e8'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x93\xa9', html: 'emoji1f4e9'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x93\xaa', html: 'emoji1f4ea'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x93\xab', html: 'emoji1f4eb'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x93\xac', html: 'emoji1f4ec'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x93\xad', html: 'emoji1f4ed'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x93\xae', html: 'emoji1f4ee'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x93\xaf', html: 'emoji1f4ef'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x93\xb0', html: 'emoji1f4f0'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x93\xb1', html: 'emoji1f4f1'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x93\xb2', html: 'emoji1f4f2'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x93\xb3', html: 'emoji1f4f3'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x93\xb4', html: 'emoji1f4f4'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x93\xb5', html: 'emoji1f4f5'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x93\xb6', html: 'emoji1f4f6'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x93\xb7', html: 'emoji1f4f7'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x93\xb8', html: 'emoji1f4f8'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x93\xb9', html: 'emoji1f4f9'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x93\xba', html: 'emoji1f4fa'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x93\xbb', html: 'emoji1f4fb'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x93\xbc', html: 'emoji1f4fc'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x93\xbd', html: 'emoji1f4fd'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x93\xbf', html: 'emoji1f4ff'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x94\x80', html: 'emoji1f500'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x94\x81', html: 'emoji1f501'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x94\x82', html: 'emoji1f502'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x94\x83', html: 'emoji1f503'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x94\x84', html: 'emoji1f504'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x94\x85', html: 'emoji1f505'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x94\x86', html: 'emoji1f506'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x94\x87', html: 'emoji1f507'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x94\x88', html: 'emoji1f508'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x94\x89', html: 'emoji1f509'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x94\x8a', html: 'emoji1f50a'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x94\x8b', html: 'emoji1f50b'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x94\x8c', html: 'emoji1f50c'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x94\x8d', html: 'emoji1f50d'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x94\x8e', html: 'emoji1f50e'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x94\x8f', html: 'emoji1f50f'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x94\x90', html: 'emoji1f510'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x94\x91', html: 'emoji1f511'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x94\x92', html: 'emoji1f512'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x94\x93', html: 'emoji1f513'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x94\x94', html: 'emoji1f514'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x94\x95', html: 'emoji1f515'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x94\x96', html: 'emoji1f516'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x94\x97', html: 'emoji1f517'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x94\x98', html: 'emoji1f518'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x94\x99', html: 'emoji1f519'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x94\x9a', html: 'emoji1f51a'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x94\x9b', html: 'emoji1f51b'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x94\x9c', html: 'emoji1f51c'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x94\x9d', html: 'emoji1f51d'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x94\x9e', html: 'emoji1f51e'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x94\x9f', html: 'emoji1f51f'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x94\xa0', html: 'emoji1f520'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x94\xa1', html: 'emoji1f521'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x94\xa2', html: 'emoji1f522'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x94\xa3', html: 'emoji1f523'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x94\xa4', html: 'emoji1f524'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x94\xa5', html: 'emoji1f525'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x94\xa6', html: 'emoji1f526'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x94\xa7', html: 'emoji1f527'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x94\xa8', html: 'emoji1f528'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x94\xa9', html: 'emoji1f529'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x94\xaa', html: 'emoji1f52a'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x94\xab', html: 'emoji1f52b'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x94\xac', html: 'emoji1f52c'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x94\xad', html: 'emoji1f52d'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x94\xae', html: 'emoji1f52e'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x94\xaf', html: 'emoji1f52f'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x94\xb0', html: 'emoji1f530'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x94\xb1', html: 'emoji1f531'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x94\xb2', html: 'emoji1f532'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x94\xb3', html: 'emoji1f533'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x94\xb4', html: 'emoji1f534'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x94\xb5', html: 'emoji1f535'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x94\xb6', html: 'emoji1f536'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x94\xb7', html: 'emoji1f537'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x94\xb8', html: 'emoji1f538'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x94\xb9', html: 'emoji1f539'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x94\xba', html: 'emoji1f53a'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x94\xbb', html: 'emoji1f53b'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x94\xbc', html: 'emoji1f53c'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x94\xbd', html: 'emoji1f53d'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x95\x89', html: 'emoji1f549'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x95\x8a', html: 'emoji1f54a'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x95\x8b', html: 'emoji1f54b'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x95\x8c', html: 'emoji1f54c'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x95\x8d', html: 'emoji1f54d'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x95\x8e', html: 'emoji1f54e'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x95\x90', html: 'emoji1f550'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x95\x91', html: 'emoji1f551'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x95\x92', html: 'emoji1f552'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x95\x93', html: 'emoji1f553'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x95\x94', html: 'emoji1f554'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x95\x95', html: 'emoji1f555'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x95\x96', html: 'emoji1f556'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x95\x97', html: 'emoji1f557'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x95\x98', html: 'emoji1f558'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x95\x99', html: 'emoji1f559'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x95\x9a', html: 'emoji1f55a'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x95\x9b', html: 'emoji1f55b'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x95\x9c', html: 'emoji1f55c'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x95\x9d', html: 'emoji1f55d'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x95\x9e', html: 'emoji1f55e'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x95\x9f', html: 'emoji1f55f'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x95\xa0', html: 'emoji1f560'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x95\xa1', html: 'emoji1f561'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x95\xa2', html: 'emoji1f562'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x95\xa3', html: 'emoji1f563'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x95\xa4', html: 'emoji1f564'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x95\xa5', html: 'emoji1f565'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x95\xa6', html: 'emoji1f566'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x95\xa7', html: 'emoji1f567'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x95\xaf', html: 'emoji1f56f'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x95\xb0', html: 'emoji1f570'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x95\xb3', html: 'emoji1f573'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x95\xb4', html: 'emoji1f574'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x95\xb5', html: 'emoji1f575'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x95\xb6', html: 'emoji1f576'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x95\xb7', html: 'emoji1f577'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x95\xb8', html: 'emoji1f578'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x95\xb9', html: 'emoji1f579'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x96\x87', html: 'emoji1f587'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x96\x8a', html: 'emoji1f58a'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x96\x8b', html: 'emoji1f58b'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x96\x8c', html: 'emoji1f58c'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x96\x8d', html: 'emoji1f58d'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x96\x90', html: 'emoji1f590'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x96\x95', html: 'emoji1f595'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x96\x96', html: 'emoji1f596'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x96\xa5', html: 'emoji1f5a5'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x96\xa8', html: 'emoji1f5a8'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x96\xb1', html: 'emoji1f5b1'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x96\xb2', html: 'emoji1f5b2'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x96\xbc', html: 'emoji1f5bc'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x97\x82', html: 'emoji1f5c2'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x97\x83', html: 'emoji1f5c3'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x97\x84', html: 'emoji1f5c4'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x97\x91', html: 'emoji1f5d1'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x97\x92', html: 'emoji1f5d2'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x97\x93', html: 'emoji1f5d3'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x97\x9c', html: 'emoji1f5dc'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x97\x9d', html: 'emoji1f5dd'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x97\x9e', html: 'emoji1f5de'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x97\xa1', html: 'emoji1f5e1'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x97\xa3', html: 'emoji1f5e3'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x97\xa8', html: 'emoji1f5e8'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x97\xaf', html: 'emoji1f5ef'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x97\xb3', html: 'emoji1f5f3'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x97\xba', html: 'emoji1f5fa'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x97\xbb', html: 'emoji1f5fb'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x97\xbc', html: 'emoji1f5fc'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x97\xbd', html: 'emoji1f5fd'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x97\xbe', html: 'emoji1f5fe'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x97\xbf', html: 'emoji1f5ff'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x98\x80', html: 'emoji1f600'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x98\x81', html: 'emoji1f601'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x98\x82', html: 'emoji1f602'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x98\x83', html: 'emoji1f603'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x98\x84', html: 'emoji1f604'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x98\x85', html: 'emoji1f605'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x98\x86', html: 'emoji1f606'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x98\x87', html: 'emoji1f607'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x98\x88', html: 'emoji1f608'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x98\x89', html: 'emoji1f609'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x98\x8a', html: 'emoji1f60a'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x98\x8b', html: 'emoji1f60b'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x98\x8c', html: 'emoji1f60c'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x98\x8d', html: 'emoji1f60d'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x98\x8e', html: 'emoji1f60e'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x98\x8f', html: 'emoji1f60f'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x98\x90', html: 'emoji1f610'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x98\x91', html: 'emoji1f611'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x98\x92', html: 'emoji1f612'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x98\x93', html: 'emoji1f613'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x98\x94', html: 'emoji1f614'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x98\x95', html: 'emoji1f615'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x98\x96', html: 'emoji1f616'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x98\x97', html: 'emoji1f617'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x98\x98', html: 'emoji1f618'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x98\x99', html: 'emoji1f619'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x98\x9a', html: 'emoji1f61a'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x98\x9b', html: 'emoji1f61b'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x98\x9c', html: 'emoji1f61c'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x98\x9d', html: 'emoji1f61d'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x98\x9e', html: 'emoji1f61e'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x98\x9f', html: 'emoji1f61f'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x98\xa0', html: 'emoji1f620'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x98\xa1', html: 'emoji1f621'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x98\xa2', html: 'emoji1f622'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x98\xa3', html: 'emoji1f623'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x98\xa4', html: 'emoji1f624'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x98\xa5', html: 'emoji1f625'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x98\xa6', html: 'emoji1f626'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x98\xa7', html: 'emoji1f627'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x98\xa8', html: 'emoji1f628'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x98\xa9', html: 'emoji1f629'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x98\xaa', html: 'emoji1f62a'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x98\xab', html: 'emoji1f62b'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x98\xac', html: 'emoji1f62c'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x98\xad', html: 'emoji1f62d'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x98\xae', html: 'emoji1f62e'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x98\xaf', html: 'emoji1f62f'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x98\xb0', html: 'emoji1f630'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x98\xb1', html: 'emoji1f631'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x98\xb2', html: 'emoji1f632'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x98\xb3', html: 'emoji1f633'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x98\xb4', html: 'emoji1f634'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x98\xb5', html: 'emoji1f635'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x98\xb6', html: 'emoji1f636'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x98\xb7', html: 'emoji1f637'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x98\xb8', html: 'emoji1f638'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x98\xb9', html: 'emoji1f639'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x98\xba', html: 'emoji1f63a'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x98\xbb', html: 'emoji1f63b'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x98\xbc', html: 'emoji1f63c'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x98\xbd', html: 'emoji1f63d'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x98\xbe', html: 'emoji1f63e'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x98\xbf', html: 'emoji1f63f'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x99\x80', html: 'emoji1f640'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x99\x81', html: 'emoji1f641'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x99\x82', html: 'emoji1f642'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x99\x83', html: 'emoji1f643'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x99\x84', html: 'emoji1f644'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x99\x85', html: 'emoji1f645'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x99\x86', html: 'emoji1f646'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x99\x87', html: 'emoji1f647'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x99\x88', html: 'emoji1f648'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x99\x89', html: 'emoji1f649'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x99\x8a', html: 'emoji1f64a'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x99\x8b', html: 'emoji1f64b'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x99\x8c', html: 'emoji1f64c'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x99\x8d', html: 'emoji1f64d'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x99\x8e', html: 'emoji1f64e'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x99\x8f', html: 'emoji1f64f'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x9a\x80', html: 'emoji1f680'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x9a\x81', html: 'emoji1f681'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x9a\x82', html: 'emoji1f682'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x9a\x83', html: 'emoji1f683'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x9a\x84', html: 'emoji1f684'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x9a\x85', html: 'emoji1f685'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x9a\x86', html: 'emoji1f686'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x9a\x87', html: 'emoji1f687'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x9a\x88', html: 'emoji1f688'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x9a\x89', html: 'emoji1f689'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x9a\x8a', html: 'emoji1f68a'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x9a\x8b', html: 'emoji1f68b'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x9a\x8c', html: 'emoji1f68c'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x9a\x8d', html: 'emoji1f68d'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x9a\x8e', html: 'emoji1f68e'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x9a\x8f', html: 'emoji1f68f'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x9a\x90', html: 'emoji1f690'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x9a\x91', html: 'emoji1f691'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x9a\x92', html: 'emoji1f692'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x9a\x93', html: 'emoji1f693'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x9a\x94', html: 'emoji1f694'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x9a\x95', html: 'emoji1f695'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x9a\x96', html: 'emoji1f696'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x9a\x97', html: 'emoji1f697'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x9a\x98', html: 'emoji1f698'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x9a\x99', html: 'emoji1f699'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x9a\x9a', html: 'emoji1f69a'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x9a\x9b', html: 'emoji1f69b'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x9a\x9c', html: 'emoji1f69c'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x9a\x9d', html: 'emoji1f69d'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x9a\x9e', html: 'emoji1f69e'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x9a\x9f', html: 'emoji1f69f'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x9a\xa0', html: 'emoji1f6a0'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x9a\xa1', html: 'emoji1f6a1'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x9a\xa2', html: 'emoji1f6a2'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x9a\xa3', html: 'emoji1f6a3'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x9a\xa4', html: 'emoji1f6a4'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x9a\xa5', html: 'emoji1f6a5'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x9a\xa6', html: 'emoji1f6a6'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x9a\xa7', html: 'emoji1f6a7'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x9a\xa8', html: 'emoji1f6a8'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x9a\xa9', html: 'emoji1f6a9'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x9a\xaa', html: 'emoji1f6aa'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x9a\xab', html: 'emoji1f6ab'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x9a\xac', html: 'emoji1f6ac'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x9a\xad', html: 'emoji1f6ad'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x9a\xae', html: 'emoji1f6ae'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x9a\xaf', html: 'emoji1f6af'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x9a\xb0', html: 'emoji1f6b0'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x9a\xb1', html: 'emoji1f6b1'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x9a\xb2', html: 'emoji1f6b2'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x9a\xb3', html: 'emoji1f6b3'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x9a\xb4', html: 'emoji1f6b4'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x9a\xb5', html: 'emoji1f6b5'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x9a\xb6', html: 'emoji1f6b6'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x9a\xb7', html: 'emoji1f6b7'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x9a\xb8', html: 'emoji1f6b8'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x9a\xb9', html: 'emoji1f6b9'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x9a\xba', html: 'emoji1f6ba'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x9a\xbb', html: 'emoji1f6bb'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x9a\xbc', html: 'emoji1f6bc'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x9a\xbd', html: 'emoji1f6bd'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x9a\xbe', html: 'emoji1f6be'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x9a\xbf', html: 'emoji1f6bf'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x9b\x80', html: 'emoji1f6c0'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x9b\x81', html: 'emoji1f6c1'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x9b\x82', html: 'emoji1f6c2'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x9b\x83', html: 'emoji1f6c3'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x9b\x84', html: 'emoji1f6c4'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x9b\x85', html: 'emoji1f6c5'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x9b\x8b', html: 'emoji1f6cb'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x9b\x8c', html: 'emoji1f6cc'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x9b\x8d', html: 'emoji1f6cd'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x9b\x8e', html: 'emoji1f6ce'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x9b\x8f', html: 'emoji1f6cf'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x9b\x90', html: 'emoji1f6d0'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x9b\xa0', html: 'emoji1f6e0'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x9b\xa1', html: 'emoji1f6e1'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x9b\xa2', html: 'emoji1f6e2'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x9b\xa3', html: 'emoji1f6e3'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x9b\xa4', html: 'emoji1f6e4'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x9b\xa5', html: 'emoji1f6e5'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x9b\xa9', html: 'emoji1f6e9'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x9b\xab', html: 'emoji1f6eb'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x9b\xac', html: 'emoji1f6ec'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x9b\xb0', html: 'emoji1f6f0'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x9b\xb3', html: 'emoji1f6f3'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\xa4\x90', html: 'emoji1f910'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\xa4\x91', html: 'emoji1f911'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\xa4\x92', html: 'emoji1f912'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\xa4\x93', html: 'emoji1f913'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\xa4\x94', html: 'emoji1f914'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\xa4\x95', html: 'emoji1f915'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\xa4\x96', html: 'emoji1f916'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\xa4\x97', html: 'emoji1f917'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\xa4\x98', html: 'emoji1f918'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\xa6\x80', html: 'emoji1f980'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\xa6\x81', html: 'emoji1f981'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\xa6\x82', html: 'emoji1f982'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\xa6\x83', html: 'emoji1f983'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\xa6\x84', html: 'emoji1f984'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\xa7\x80', html: 'emoji1f9c0'});
    emoji_maps['unified_to_html'].unshift({code: '#\xe2\x83\xa3', html: 'emoji2320e3'});
    emoji_maps['unified_to_html'].unshift({code: '*\xe2\x83\xa3', html: 'emoji2a20e3'});
    emoji_maps['unified_to_html'].unshift({code: '0\xe2\x83\xa3', html: 'emoji3020e3'});
    emoji_maps['unified_to_html'].unshift({code: '1\xe2\x83\xa3', html: 'emoji3120e3'});
    emoji_maps['unified_to_html'].unshift({code: '2\xe2\x83\xa3', html: 'emoji3220e3'});
    emoji_maps['unified_to_html'].unshift({code: '3\xe2\x83\xa3', html: 'emoji3320e3'});
    emoji_maps['unified_to_html'].unshift({code: '4\xe2\x83\xa3', html: 'emoji3420e3'});
    emoji_maps['unified_to_html'].unshift({code: '5\xe2\x83\xa3', html: 'emoji3520e3'});
    emoji_maps['unified_to_html'].unshift({code: '6\xe2\x83\xa3', html: 'emoji3620e3'});
    emoji_maps['unified_to_html'].unshift({code: '7\xe2\x83\xa3', html: 'emoji3720e3'});
    emoji_maps['unified_to_html'].unshift({code: '8\xe2\x83\xa3', html: 'emoji3820e3'});
    emoji_maps['unified_to_html'].unshift({code: '9\xe2\x83\xa3', html: 'emoji3920e3'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x87\xa6\xf0\x9f\x87\xa8', html: 'emoji1f1e61f1e8'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x87\xa6\xf0\x9f\x87\xa9', html: 'emoji1f1e61f1e9'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x87\xa6\xf0\x9f\x87\xaa', html: 'emoji1f1e61f1ea'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x87\xa6\xf0\x9f\x87\xab', html: 'emoji1f1e61f1eb'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x87\xa6\xf0\x9f\x87\xac', html: 'emoji1f1e61f1ec'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x87\xa6\xf0\x9f\x87\xae', html: 'emoji1f1e61f1ee'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x87\xa6\xf0\x9f\x87\xb1', html: 'emoji1f1e61f1f1'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x87\xa6\xf0\x9f\x87\xb2', html: 'emoji1f1e61f1f2'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x87\xa6\xf0\x9f\x87\xb4', html: 'emoji1f1e61f1f4'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x87\xa6\xf0\x9f\x87\xb6', html: 'emoji1f1e61f1f6'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x87\xa6\xf0\x9f\x87\xb7', html: 'emoji1f1e61f1f7'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x87\xa6\xf0\x9f\x87\xb8', html: 'emoji1f1e61f1f8'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x87\xa6\xf0\x9f\x87\xb9', html: 'emoji1f1e61f1f9'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x87\xa6\xf0\x9f\x87\xba', html: 'emoji1f1e61f1fa'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x87\xa6\xf0\x9f\x87\xbc', html: 'emoji1f1e61f1fc'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x87\xa6\xf0\x9f\x87\xbd', html: 'emoji1f1e61f1fd'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x87\xa6\xf0\x9f\x87\xbf', html: 'emoji1f1e61f1ff'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x87\xa7\xf0\x9f\x87\xa6', html: 'emoji1f1e71f1e6'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x87\xa7\xf0\x9f\x87\xa7', html: 'emoji1f1e71f1e7'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x87\xa7\xf0\x9f\x87\xa9', html: 'emoji1f1e71f1e9'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x87\xa7\xf0\x9f\x87\xaa', html: 'emoji1f1e71f1ea'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x87\xa7\xf0\x9f\x87\xab', html: 'emoji1f1e71f1eb'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x87\xa7\xf0\x9f\x87\xac', html: 'emoji1f1e71f1ec'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x87\xa7\xf0\x9f\x87\xad', html: 'emoji1f1e71f1ed'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x87\xa7\xf0\x9f\x87\xae', html: 'emoji1f1e71f1ee'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x87\xa7\xf0\x9f\x87\xaf', html: 'emoji1f1e71f1ef'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x87\xa7\xf0\x9f\x87\xb1', html: 'emoji1f1e71f1f1'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x87\xa7\xf0\x9f\x87\xb2', html: 'emoji1f1e71f1f2'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x87\xa7\xf0\x9f\x87\xb3', html: 'emoji1f1e71f1f3'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x87\xa7\xf0\x9f\x87\xb4', html: 'emoji1f1e71f1f4'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x87\xa7\xf0\x9f\x87\xb6', html: 'emoji1f1e71f1f6'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x87\xa7\xf0\x9f\x87\xb7', html: 'emoji1f1e71f1f7'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x87\xa7\xf0\x9f\x87\xb8', html: 'emoji1f1e71f1f8'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x87\xa7\xf0\x9f\x87\xb9', html: 'emoji1f1e71f1f9'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x87\xa7\xf0\x9f\x87\xbb', html: 'emoji1f1e71f1fb'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x87\xa7\xf0\x9f\x87\xbc', html: 'emoji1f1e71f1fc'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x87\xa7\xf0\x9f\x87\xbe', html: 'emoji1f1e71f1fe'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x87\xa7\xf0\x9f\x87\xbf', html: 'emoji1f1e71f1ff'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x87\xa8\xf0\x9f\x87\xa6', html: 'emoji1f1e81f1e6'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x87\xa8\xf0\x9f\x87\xa8', html: 'emoji1f1e81f1e8'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x87\xa8\xf0\x9f\x87\xa9', html: 'emoji1f1e81f1e9'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x87\xa8\xf0\x9f\x87\xab', html: 'emoji1f1e81f1eb'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x87\xa8\xf0\x9f\x87\xac', html: 'emoji1f1e81f1ec'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x87\xa8\xf0\x9f\x87\xad', html: 'emoji1f1e81f1ed'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x87\xa8\xf0\x9f\x87\xae', html: 'emoji1f1e81f1ee'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x87\xa8\xf0\x9f\x87\xb0', html: 'emoji1f1e81f1f0'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x87\xa8\xf0\x9f\x87\xb1', html: 'emoji1f1e81f1f1'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x87\xa8\xf0\x9f\x87\xb2', html: 'emoji1f1e81f1f2'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x87\xa8\xf0\x9f\x87\xb3', html: 'emoji1f1e81f1f3'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x87\xa8\xf0\x9f\x87\xb4', html: 'emoji1f1e81f1f4'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x87\xa8\xf0\x9f\x87\xb5', html: 'emoji1f1e81f1f5'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x87\xa8\xf0\x9f\x87\xb7', html: 'emoji1f1e81f1f7'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x87\xa8\xf0\x9f\x87\xba', html: 'emoji1f1e81f1fa'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x87\xa8\xf0\x9f\x87\xbb', html: 'emoji1f1e81f1fb'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x87\xa8\xf0\x9f\x87\xbc', html: 'emoji1f1e81f1fc'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x87\xa8\xf0\x9f\x87\xbd', html: 'emoji1f1e81f1fd'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x87\xa8\xf0\x9f\x87\xbe', html: 'emoji1f1e81f1fe'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x87\xa8\xf0\x9f\x87\xbf', html: 'emoji1f1e81f1ff'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x87\xa9\xf0\x9f\x87\xaa', html: 'emoji1f1e91f1ea'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x87\xa9\xf0\x9f\x87\xac', html: 'emoji1f1e91f1ec'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x87\xa9\xf0\x9f\x87\xaf', html: 'emoji1f1e91f1ef'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x87\xa9\xf0\x9f\x87\xb0', html: 'emoji1f1e91f1f0'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x87\xa9\xf0\x9f\x87\xb2', html: 'emoji1f1e91f1f2'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x87\xa9\xf0\x9f\x87\xb4', html: 'emoji1f1e91f1f4'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x87\xa9\xf0\x9f\x87\xbf', html: 'emoji1f1e91f1ff'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x87\xaa\xf0\x9f\x87\xa6', html: 'emoji1f1ea1f1e6'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x87\xaa\xf0\x9f\x87\xa8', html: 'emoji1f1ea1f1e8'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x87\xaa\xf0\x9f\x87\xaa', html: 'emoji1f1ea1f1ea'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x87\xaa\xf0\x9f\x87\xac', html: 'emoji1f1ea1f1ec'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x87\xaa\xf0\x9f\x87\xad', html: 'emoji1f1ea1f1ed'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x87\xaa\xf0\x9f\x87\xb7', html: 'emoji1f1ea1f1f7'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x87\xaa\xf0\x9f\x87\xb8', html: 'emoji1f1ea1f1f8'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x87\xaa\xf0\x9f\x87\xb9', html: 'emoji1f1ea1f1f9'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x87\xaa\xf0\x9f\x87\xba', html: 'emoji1f1ea1f1fa'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x87\xab\xf0\x9f\x87\xae', html: 'emoji1f1eb1f1ee'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x87\xab\xf0\x9f\x87\xaf', html: 'emoji1f1eb1f1ef'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x87\xab\xf0\x9f\x87\xb0', html: 'emoji1f1eb1f1f0'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x87\xab\xf0\x9f\x87\xb2', html: 'emoji1f1eb1f1f2'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x87\xab\xf0\x9f\x87\xb4', html: 'emoji1f1eb1f1f4'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x87\xab\xf0\x9f\x87\xb7', html: 'emoji1f1eb1f1f7'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x87\xac\xf0\x9f\x87\xa6', html: 'emoji1f1ec1f1e6'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x87\xac\xf0\x9f\x87\xa7', html: 'emoji1f1ec1f1e7'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x87\xac\xf0\x9f\x87\xa9', html: 'emoji1f1ec1f1e9'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x87\xac\xf0\x9f\x87\xaa', html: 'emoji1f1ec1f1ea'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x87\xac\xf0\x9f\x87\xab', html: 'emoji1f1ec1f1eb'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x87\xac\xf0\x9f\x87\xac', html: 'emoji1f1ec1f1ec'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x87\xac\xf0\x9f\x87\xad', html: 'emoji1f1ec1f1ed'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x87\xac\xf0\x9f\x87\xae', html: 'emoji1f1ec1f1ee'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x87\xac\xf0\x9f\x87\xb1', html: 'emoji1f1ec1f1f1'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x87\xac\xf0\x9f\x87\xb2', html: 'emoji1f1ec1f1f2'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x87\xac\xf0\x9f\x87\xb3', html: 'emoji1f1ec1f1f3'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x87\xac\xf0\x9f\x87\xb5', html: 'emoji1f1ec1f1f5'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x87\xac\xf0\x9f\x87\xb6', html: 'emoji1f1ec1f1f6'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x87\xac\xf0\x9f\x87\xb7', html: 'emoji1f1ec1f1f7'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x87\xac\xf0\x9f\x87\xb8', html: 'emoji1f1ec1f1f8'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x87\xac\xf0\x9f\x87\xb9', html: 'emoji1f1ec1f1f9'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x87\xac\xf0\x9f\x87\xba', html: 'emoji1f1ec1f1fa'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x87\xac\xf0\x9f\x87\xbc', html: 'emoji1f1ec1f1fc'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x87\xac\xf0\x9f\x87\xbe', html: 'emoji1f1ec1f1fe'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x87\xad\xf0\x9f\x87\xb0', html: 'emoji1f1ed1f1f0'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x87\xad\xf0\x9f\x87\xb2', html: 'emoji1f1ed1f1f2'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x87\xad\xf0\x9f\x87\xb3', html: 'emoji1f1ed1f1f3'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x87\xad\xf0\x9f\x87\xb7', html: 'emoji1f1ed1f1f7'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x87\xad\xf0\x9f\x87\xb9', html: 'emoji1f1ed1f1f9'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x87\xad\xf0\x9f\x87\xba', html: 'emoji1f1ed1f1fa'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x87\xae\xf0\x9f\x87\xa8', html: 'emoji1f1ee1f1e8'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x87\xae\xf0\x9f\x87\xa9', html: 'emoji1f1ee1f1e9'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x87\xae\xf0\x9f\x87\xaa', html: 'emoji1f1ee1f1ea'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x87\xae\xf0\x9f\x87\xb1', html: 'emoji1f1ee1f1f1'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x87\xae\xf0\x9f\x87\xb2', html: 'emoji1f1ee1f1f2'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x87\xae\xf0\x9f\x87\xb3', html: 'emoji1f1ee1f1f3'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x87\xae\xf0\x9f\x87\xb4', html: 'emoji1f1ee1f1f4'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x87\xae\xf0\x9f\x87\xb6', html: 'emoji1f1ee1f1f6'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x87\xae\xf0\x9f\x87\xb7', html: 'emoji1f1ee1f1f7'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x87\xae\xf0\x9f\x87\xb8', html: 'emoji1f1ee1f1f8'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x87\xae\xf0\x9f\x87\xb9', html: 'emoji1f1ee1f1f9'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x87\xaf\xf0\x9f\x87\xaa', html: 'emoji1f1ef1f1ea'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x87\xaf\xf0\x9f\x87\xb2', html: 'emoji1f1ef1f1f2'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x87\xaf\xf0\x9f\x87\xb4', html: 'emoji1f1ef1f1f4'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x87\xaf\xf0\x9f\x87\xb5', html: 'emoji1f1ef1f1f5'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x87\xb0\xf0\x9f\x87\xaa', html: 'emoji1f1f01f1ea'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x87\xb0\xf0\x9f\x87\xac', html: 'emoji1f1f01f1ec'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x87\xb0\xf0\x9f\x87\xad', html: 'emoji1f1f01f1ed'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x87\xb0\xf0\x9f\x87\xae', html: 'emoji1f1f01f1ee'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x87\xb0\xf0\x9f\x87\xb2', html: 'emoji1f1f01f1f2'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x87\xb0\xf0\x9f\x87\xb3', html: 'emoji1f1f01f1f3'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x87\xb0\xf0\x9f\x87\xb5', html: 'emoji1f1f01f1f5'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x87\xb0\xf0\x9f\x87\xb7', html: 'emoji1f1f01f1f7'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x87\xb0\xf0\x9f\x87\xbc', html: 'emoji1f1f01f1fc'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x87\xb0\xf0\x9f\x87\xbe', html: 'emoji1f1f01f1fe'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x87\xb0\xf0\x9f\x87\xbf', html: 'emoji1f1f01f1ff'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x87\xb1\xf0\x9f\x87\xa6', html: 'emoji1f1f11f1e6'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x87\xb1\xf0\x9f\x87\xa7', html: 'emoji1f1f11f1e7'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x87\xb1\xf0\x9f\x87\xa8', html: 'emoji1f1f11f1e8'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x87\xb1\xf0\x9f\x87\xae', html: 'emoji1f1f11f1ee'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x87\xb1\xf0\x9f\x87\xb0', html: 'emoji1f1f11f1f0'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x87\xb1\xf0\x9f\x87\xb7', html: 'emoji1f1f11f1f7'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x87\xb1\xf0\x9f\x87\xb8', html: 'emoji1f1f11f1f8'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x87\xb1\xf0\x9f\x87\xb9', html: 'emoji1f1f11f1f9'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x87\xb1\xf0\x9f\x87\xba', html: 'emoji1f1f11f1fa'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x87\xb1\xf0\x9f\x87\xbb', html: 'emoji1f1f11f1fb'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x87\xb1\xf0\x9f\x87\xbe', html: 'emoji1f1f11f1fe'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x87\xb2\xf0\x9f\x87\xa6', html: 'emoji1f1f21f1e6'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x87\xb2\xf0\x9f\x87\xa8', html: 'emoji1f1f21f1e8'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x87\xb2\xf0\x9f\x87\xa9', html: 'emoji1f1f21f1e9'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x87\xb2\xf0\x9f\x87\xaa', html: 'emoji1f1f21f1ea'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x87\xb2\xf0\x9f\x87\xab', html: 'emoji1f1f21f1eb'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x87\xb2\xf0\x9f\x87\xac', html: 'emoji1f1f21f1ec'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x87\xb2\xf0\x9f\x87\xad', html: 'emoji1f1f21f1ed'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x87\xb2\xf0\x9f\x87\xb0', html: 'emoji1f1f21f1f0'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x87\xb2\xf0\x9f\x87\xb1', html: 'emoji1f1f21f1f1'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x87\xb2\xf0\x9f\x87\xb2', html: 'emoji1f1f21f1f2'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x87\xb2\xf0\x9f\x87\xb3', html: 'emoji1f1f21f1f3'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x87\xb2\xf0\x9f\x87\xb4', html: 'emoji1f1f21f1f4'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x87\xb2\xf0\x9f\x87\xb5', html: 'emoji1f1f21f1f5'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x87\xb2\xf0\x9f\x87\xb6', html: 'emoji1f1f21f1f6'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x87\xb2\xf0\x9f\x87\xb7', html: 'emoji1f1f21f1f7'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x87\xb2\xf0\x9f\x87\xb8', html: 'emoji1f1f21f1f8'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x87\xb2\xf0\x9f\x87\xb9', html: 'emoji1f1f21f1f9'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x87\xb2\xf0\x9f\x87\xba', html: 'emoji1f1f21f1fa'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x87\xb2\xf0\x9f\x87\xbb', html: 'emoji1f1f21f1fb'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x87\xb2\xf0\x9f\x87\xbc', html: 'emoji1f1f21f1fc'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x87\xb2\xf0\x9f\x87\xbd', html: 'emoji1f1f21f1fd'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x87\xb2\xf0\x9f\x87\xbe', html: 'emoji1f1f21f1fe'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x87\xb2\xf0\x9f\x87\xbf', html: 'emoji1f1f21f1ff'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x87\xb3\xf0\x9f\x87\xa6', html: 'emoji1f1f31f1e6'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x87\xb3\xf0\x9f\x87\xa8', html: 'emoji1f1f31f1e8'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x87\xb3\xf0\x9f\x87\xaa', html: 'emoji1f1f31f1ea'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x87\xb3\xf0\x9f\x87\xab', html: 'emoji1f1f31f1eb'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x87\xb3\xf0\x9f\x87\xac', html: 'emoji1f1f31f1ec'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x87\xb3\xf0\x9f\x87\xae', html: 'emoji1f1f31f1ee'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x87\xb3\xf0\x9f\x87\xb1', html: 'emoji1f1f31f1f1'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x87\xb3\xf0\x9f\x87\xb4', html: 'emoji1f1f31f1f4'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x87\xb3\xf0\x9f\x87\xb5', html: 'emoji1f1f31f1f5'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x87\xb3\xf0\x9f\x87\xb7', html: 'emoji1f1f31f1f7'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x87\xb3\xf0\x9f\x87\xba', html: 'emoji1f1f31f1fa'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x87\xb3\xf0\x9f\x87\xbf', html: 'emoji1f1f31f1ff'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x87\xb4\xf0\x9f\x87\xb2', html: 'emoji1f1f41f1f2'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x87\xb5\xf0\x9f\x87\xa6', html: 'emoji1f1f51f1e6'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x87\xb5\xf0\x9f\x87\xaa', html: 'emoji1f1f51f1ea'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x87\xb5\xf0\x9f\x87\xab', html: 'emoji1f1f51f1eb'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x87\xb5\xf0\x9f\x87\xac', html: 'emoji1f1f51f1ec'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x87\xb5\xf0\x9f\x87\xad', html: 'emoji1f1f51f1ed'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x87\xb5\xf0\x9f\x87\xb0', html: 'emoji1f1f51f1f0'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x87\xb5\xf0\x9f\x87\xb1', html: 'emoji1f1f51f1f1'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x87\xb5\xf0\x9f\x87\xb2', html: 'emoji1f1f51f1f2'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x87\xb5\xf0\x9f\x87\xb3', html: 'emoji1f1f51f1f3'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x87\xb5\xf0\x9f\x87\xb7', html: 'emoji1f1f51f1f7'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x87\xb5\xf0\x9f\x87\xb8', html: 'emoji1f1f51f1f8'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x87\xb5\xf0\x9f\x87\xb9', html: 'emoji1f1f51f1f9'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x87\xb5\xf0\x9f\x87\xbc', html: 'emoji1f1f51f1fc'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x87\xb5\xf0\x9f\x87\xbe', html: 'emoji1f1f51f1fe'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x87\xb6\xf0\x9f\x87\xa6', html: 'emoji1f1f61f1e6'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x87\xb7\xf0\x9f\x87\xaa', html: 'emoji1f1f71f1ea'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x87\xb7\xf0\x9f\x87\xb4', html: 'emoji1f1f71f1f4'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x87\xb7\xf0\x9f\x87\xb8', html: 'emoji1f1f71f1f8'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x87\xb7\xf0\x9f\x87\xba', html: 'emoji1f1f71f1fa'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x87\xb7\xf0\x9f\x87\xbc', html: 'emoji1f1f71f1fc'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x87\xb8\xf0\x9f\x87\xa6', html: 'emoji1f1f81f1e6'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x87\xb8\xf0\x9f\x87\xa7', html: 'emoji1f1f81f1e7'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x87\xb8\xf0\x9f\x87\xa8', html: 'emoji1f1f81f1e8'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x87\xb8\xf0\x9f\x87\xa9', html: 'emoji1f1f81f1e9'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x87\xb8\xf0\x9f\x87\xaa', html: 'emoji1f1f81f1ea'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x87\xb8\xf0\x9f\x87\xac', html: 'emoji1f1f81f1ec'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x87\xb8\xf0\x9f\x87\xad', html: 'emoji1f1f81f1ed'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x87\xb8\xf0\x9f\x87\xae', html: 'emoji1f1f81f1ee'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x87\xb8\xf0\x9f\x87\xaf', html: 'emoji1f1f81f1ef'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x87\xb8\xf0\x9f\x87\xb0', html: 'emoji1f1f81f1f0'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x87\xb8\xf0\x9f\x87\xb1', html: 'emoji1f1f81f1f1'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x87\xb8\xf0\x9f\x87\xb2', html: 'emoji1f1f81f1f2'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x87\xb8\xf0\x9f\x87\xb3', html: 'emoji1f1f81f1f3'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x87\xb8\xf0\x9f\x87\xb4', html: 'emoji1f1f81f1f4'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x87\xb8\xf0\x9f\x87\xb7', html: 'emoji1f1f81f1f7'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x87\xb8\xf0\x9f\x87\xb8', html: 'emoji1f1f81f1f8'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x87\xb8\xf0\x9f\x87\xb9', html: 'emoji1f1f81f1f9'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x87\xb8\xf0\x9f\x87\xbb', html: 'emoji1f1f81f1fb'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x87\xb8\xf0\x9f\x87\xbd', html: 'emoji1f1f81f1fd'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x87\xb8\xf0\x9f\x87\xbe', html: 'emoji1f1f81f1fe'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x87\xb8\xf0\x9f\x87\xbf', html: 'emoji1f1f81f1ff'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x87\xb9\xf0\x9f\x87\xa6', html: 'emoji1f1f91f1e6'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x87\xb9\xf0\x9f\x87\xa8', html: 'emoji1f1f91f1e8'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x87\xb9\xf0\x9f\x87\xa9', html: 'emoji1f1f91f1e9'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x87\xb9\xf0\x9f\x87\xab', html: 'emoji1f1f91f1eb'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x87\xb9\xf0\x9f\x87\xac', html: 'emoji1f1f91f1ec'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x87\xb9\xf0\x9f\x87\xad', html: 'emoji1f1f91f1ed'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x87\xb9\xf0\x9f\x87\xaf', html: 'emoji1f1f91f1ef'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x87\xb9\xf0\x9f\x87\xb0', html: 'emoji1f1f91f1f0'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x87\xb9\xf0\x9f\x87\xb1', html: 'emoji1f1f91f1f1'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x87\xb9\xf0\x9f\x87\xb2', html: 'emoji1f1f91f1f2'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x87\xb9\xf0\x9f\x87\xb3', html: 'emoji1f1f91f1f3'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x87\xb9\xf0\x9f\x87\xb4', html: 'emoji1f1f91f1f4'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x87\xb9\xf0\x9f\x87\xb7', html: 'emoji1f1f91f1f7'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x87\xb9\xf0\x9f\x87\xb9', html: 'emoji1f1f91f1f9'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x87\xb9\xf0\x9f\x87\xbb', html: 'emoji1f1f91f1fb'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x87\xb9\xf0\x9f\x87\xbc', html: 'emoji1f1f91f1fc'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x87\xb9\xf0\x9f\x87\xbf', html: 'emoji1f1f91f1ff'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x87\xba\xf0\x9f\x87\xa6', html: 'emoji1f1fa1f1e6'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x87\xba\xf0\x9f\x87\xac', html: 'emoji1f1fa1f1ec'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x87\xba\xf0\x9f\x87\xb2', html: 'emoji1f1fa1f1f2'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x87\xba\xf0\x9f\x87\xb8', html: 'emoji1f1fa1f1f8'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x87\xba\xf0\x9f\x87\xbe', html: 'emoji1f1fa1f1fe'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x87\xba\xf0\x9f\x87\xbf', html: 'emoji1f1fa1f1ff'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x87\xbb\xf0\x9f\x87\xa6', html: 'emoji1f1fb1f1e6'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x87\xbb\xf0\x9f\x87\xa8', html: 'emoji1f1fb1f1e8'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x87\xbb\xf0\x9f\x87\xaa', html: 'emoji1f1fb1f1ea'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x87\xbb\xf0\x9f\x87\xac', html: 'emoji1f1fb1f1ec'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x87\xbb\xf0\x9f\x87\xae', html: 'emoji1f1fb1f1ee'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x87\xbb\xf0\x9f\x87\xb3', html: 'emoji1f1fb1f1f3'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x87\xbb\xf0\x9f\x87\xba', html: 'emoji1f1fb1f1fa'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x87\xbc\xf0\x9f\x87\xab', html: 'emoji1f1fc1f1eb'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x87\xbc\xf0\x9f\x87\xb8', html: 'emoji1f1fc1f1f8'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x87\xbd\xf0\x9f\x87\xb0', html: 'emoji1f1fd1f1f0'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x87\xbe\xf0\x9f\x87\xaa', html: 'emoji1f1fe1f1ea'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x87\xbe\xf0\x9f\x87\xb9', html: 'emoji1f1fe1f1f9'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x87\xbf\xf0\x9f\x87\xa6', html: 'emoji1f1ff1f1e6'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x87\xbf\xf0\x9f\x87\xb2', html: 'emoji1f1ff1f1f2'});
    emoji_maps['unified_to_html'].unshift({code: '\xf0\x9f\x87\xbf\xf0\x9f\x87\xbc', html: 'emoji1f1ff1f1fc'});

    emoji_maps['html_to_html5'] = new Array();
    emoji_maps['html_to_html5'].unshift({
        code: 'emojia9',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emojia9\x22>emojia9</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emojiae',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emojiae\x22>emojiae</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji203c',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji203c\x22>emoji203c</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji2049',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji2049\x22>emoji2049</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji2122',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji2122\x22>emoji2122</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji2139',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji2139\x22>emoji2139</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji2194',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji2194\x22>emoji2194</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji2195',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji2195\x22>emoji2195</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji2196',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji2196\x22>emoji2196</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji2197',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji2197\x22>emoji2197</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji2198',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji2198\x22>emoji2198</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji2199',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji2199\x22>emoji2199</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji21a9',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji21a9\x22>emoji21a9</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji21aa',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji21aa\x22>emoji21aa</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji231a',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji231a\x22>emoji231a</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji231b',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji231b\x22>emoji231b</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji2328',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji2328\x22>emoji2328</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji23e9',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji23e9\x22>emoji23e9</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji23ea',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji23ea\x22>emoji23ea</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji23eb',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji23eb\x22>emoji23eb</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji23ec',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji23ec\x22>emoji23ec</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji23ed',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji23ed\x22>emoji23ed</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji23ee',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji23ee\x22>emoji23ee</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji23ef',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji23ef\x22>emoji23ef</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji23f0',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji23f0\x22>emoji23f0</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji23f1',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji23f1\x22>emoji23f1</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji23f2',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji23f2\x22>emoji23f2</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji23f3',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji23f3\x22>emoji23f3</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji23f8',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji23f8\x22>emoji23f8</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji23f9',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji23f9\x22>emoji23f9</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji23fa',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji23fa\x22>emoji23fa</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji24c2',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji24c2\x22>emoji24c2</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji25aa',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji25aa\x22>emoji25aa</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji25ab',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji25ab\x22>emoji25ab</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji25b6',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji25b6\x22>emoji25b6</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji25c0',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji25c0\x22>emoji25c0</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji25fb',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji25fb\x22>emoji25fb</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji25fc',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji25fc\x22>emoji25fc</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji25fd',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji25fd\x22>emoji25fd</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji25fe',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji25fe\x22>emoji25fe</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji2600',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji2600\x22>emoji2600</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji2601',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji2601\x22>emoji2601</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji2602',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji2602\x22>emoji2602</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji2603',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji2603\x22>emoji2603</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji2604',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji2604\x22>emoji2604</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji260e',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji260e\x22>emoji260e</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji2611',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji2611\x22>emoji2611</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji2614',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji2614\x22>emoji2614</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji2615',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji2615\x22>emoji2615</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji2618',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji2618\x22>emoji2618</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji261d',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji261d\x22>emoji261d</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji2620',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji2620\x22>emoji2620</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji2622',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji2622\x22>emoji2622</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji2623',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji2623\x22>emoji2623</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji2626',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji2626\x22>emoji2626</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji262a',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji262a\x22>emoji262a</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji262e',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji262e\x22>emoji262e</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji262f',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji262f\x22>emoji262f</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji2638',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji2638\x22>emoji2638</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji2639',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji2639\x22>emoji2639</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji263a',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji263a\x22>emoji263a</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji2648',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji2648\x22>emoji2648</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji2649',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji2649\x22>emoji2649</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji264a',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji264a\x22>emoji264a</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji264b',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji264b\x22>emoji264b</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji264c',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji264c\x22>emoji264c</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji264d',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji264d\x22>emoji264d</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji264e',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji264e\x22>emoji264e</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji264f',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji264f\x22>emoji264f</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji2650',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji2650\x22>emoji2650</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji2651',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji2651\x22>emoji2651</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji2652',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji2652\x22>emoji2652</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji2653',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji2653\x22>emoji2653</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji2660',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji2660\x22>emoji2660</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji2663',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji2663\x22>emoji2663</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji2665',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji2665\x22>emoji2665</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji2666',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji2666\x22>emoji2666</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji2668',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji2668\x22>emoji2668</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji267b',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji267b\x22>emoji267b</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji267f',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji267f\x22>emoji267f</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji2692',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji2692\x22>emoji2692</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji2693',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji2693\x22>emoji2693</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji2694',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji2694\x22>emoji2694</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji2696',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji2696\x22>emoji2696</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji2697',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji2697\x22>emoji2697</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji2699',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji2699\x22>emoji2699</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji269b',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji269b\x22>emoji269b</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji269c',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji269c\x22>emoji269c</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji26a0',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji26a0\x22>emoji26a0</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji26a1',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji26a1\x22>emoji26a1</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji26aa',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji26aa\x22>emoji26aa</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji26ab',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji26ab\x22>emoji26ab</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji26b0',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji26b0\x22>emoji26b0</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji26b1',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji26b1\x22>emoji26b1</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji26bd',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji26bd\x22>emoji26bd</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji26be',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji26be\x22>emoji26be</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji26c4',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji26c4\x22>emoji26c4</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji26c5',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji26c5\x22>emoji26c5</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji26c8',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji26c8\x22>emoji26c8</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji26ce',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji26ce\x22>emoji26ce</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji26cf',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji26cf\x22>emoji26cf</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji26d1',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji26d1\x22>emoji26d1</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji26d3',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji26d3\x22>emoji26d3</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji26d4',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji26d4\x22>emoji26d4</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji26e9',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji26e9\x22>emoji26e9</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji26ea',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji26ea\x22>emoji26ea</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji26f0',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji26f0\x22>emoji26f0</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji26f1',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji26f1\x22>emoji26f1</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji26f2',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji26f2\x22>emoji26f2</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji26f3',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji26f3\x22>emoji26f3</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji26f4',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji26f4\x22>emoji26f4</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji26f5',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji26f5\x22>emoji26f5</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji26f7',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji26f7\x22>emoji26f7</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji26f8',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji26f8\x22>emoji26f8</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji26f9',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji26f9\x22>emoji26f9</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji26fa',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji26fa\x22>emoji26fa</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji26fd',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji26fd\x22>emoji26fd</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji2702',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji2702\x22>emoji2702</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji2705',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji2705\x22>emoji2705</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji2708',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji2708\x22>emoji2708</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji2709',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji2709\x22>emoji2709</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji270a',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji270a\x22>emoji270a</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji270b',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji270b\x22>emoji270b</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji270c',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji270c\x22>emoji270c</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji270d',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji270d\x22>emoji270d</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji270f',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji270f\x22>emoji270f</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji2712',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji2712\x22>emoji2712</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji2714',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji2714\x22>emoji2714</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji2716',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji2716\x22>emoji2716</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji271d',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji271d\x22>emoji271d</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji2721',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji2721\x22>emoji2721</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji2728',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji2728\x22>emoji2728</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji2733',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji2733\x22>emoji2733</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji2734',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji2734\x22>emoji2734</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji2744',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji2744\x22>emoji2744</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji2747',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji2747\x22>emoji2747</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji274c',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji274c\x22>emoji274c</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji274e',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji274e\x22>emoji274e</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji2753',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji2753\x22>emoji2753</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji2754',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji2754\x22>emoji2754</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji2755',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji2755\x22>emoji2755</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji2757',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji2757\x22>emoji2757</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji2763',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji2763\x22>emoji2763</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji2764',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji2764\x22>emoji2764</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji2795',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji2795\x22>emoji2795</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji2796',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji2796\x22>emoji2796</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji2797',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji2797\x22>emoji2797</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji27a1',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji27a1\x22>emoji27a1</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji27b0',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji27b0\x22>emoji27b0</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji27bf',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji27bf\x22>emoji27bf</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji2934',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji2934\x22>emoji2934</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji2935',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji2935\x22>emoji2935</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji2b05',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji2b05\x22>emoji2b05</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji2b06',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji2b06\x22>emoji2b06</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji2b07',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji2b07\x22>emoji2b07</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji2b1b',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji2b1b\x22>emoji2b1b</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji2b1c',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji2b1c\x22>emoji2b1c</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji2b50',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji2b50\x22>emoji2b50</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji2b55',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji2b55\x22>emoji2b55</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji3030',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji3030\x22>emoji3030</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji303d',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji303d\x22>emoji303d</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji3297',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji3297\x22>emoji3297</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji3299',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji3299\x22>emoji3299</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f004',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f004\x22>emoji1f004</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f0cf',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f0cf\x22>emoji1f0cf</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f170',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f170\x22>emoji1f170</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f171',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f171\x22>emoji1f171</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f17e',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f17e\x22>emoji1f17e</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f17f',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f17f\x22>emoji1f17f</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f18e',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f18e\x22>emoji1f18e</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f191',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f191\x22>emoji1f191</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f192',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f192\x22>emoji1f192</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f193',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f193\x22>emoji1f193</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f194',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f194\x22>emoji1f194</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f195',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f195\x22>emoji1f195</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f196',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f196\x22>emoji1f196</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f197',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f197\x22>emoji1f197</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f198',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f198\x22>emoji1f198</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f199',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f199\x22>emoji1f199</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f19a',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f19a\x22>emoji1f19a</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f201',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f201\x22>emoji1f201</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f202',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f202\x22>emoji1f202</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f21a',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f21a\x22>emoji1f21a</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f22f',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f22f\x22>emoji1f22f</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f232',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f232\x22>emoji1f232</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f233',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f233\x22>emoji1f233</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f234',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f234\x22>emoji1f234</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f235',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f235\x22>emoji1f235</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f236',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f236\x22>emoji1f236</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f237',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f237\x22>emoji1f237</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f238',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f238\x22>emoji1f238</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f239',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f239\x22>emoji1f239</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f23a',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f23a\x22>emoji1f23a</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f250',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f250\x22>emoji1f250</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f251',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f251\x22>emoji1f251</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f300',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f300\x22>emoji1f300</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f301',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f301\x22>emoji1f301</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f302',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f302\x22>emoji1f302</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f303',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f303\x22>emoji1f303</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f304',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f304\x22>emoji1f304</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f305',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f305\x22>emoji1f305</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f306',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f306\x22>emoji1f306</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f307',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f307\x22>emoji1f307</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f308',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f308\x22>emoji1f308</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f309',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f309\x22>emoji1f309</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f30a',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f30a\x22>emoji1f30a</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f30b',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f30b\x22>emoji1f30b</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f30c',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f30c\x22>emoji1f30c</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f30d',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f30d\x22>emoji1f30d</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f30e',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f30e\x22>emoji1f30e</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f30f',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f30f\x22>emoji1f30f</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f310',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f310\x22>emoji1f310</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f311',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f311\x22>emoji1f311</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f312',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f312\x22>emoji1f312</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f313',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f313\x22>emoji1f313</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f314',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f314\x22>emoji1f314</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f315',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f315\x22>emoji1f315</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f316',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f316\x22>emoji1f316</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f317',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f317\x22>emoji1f317</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f318',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f318\x22>emoji1f318</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f319',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f319\x22>emoji1f319</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f31a',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f31a\x22>emoji1f31a</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f31b',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f31b\x22>emoji1f31b</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f31c',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f31c\x22>emoji1f31c</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f31d',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f31d\x22>emoji1f31d</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f31e',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f31e\x22>emoji1f31e</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f31f',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f31f\x22>emoji1f31f</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f320',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f320\x22>emoji1f320</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f321',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f321\x22>emoji1f321</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f324',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f324\x22>emoji1f324</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f325',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f325\x22>emoji1f325</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f326',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f326\x22>emoji1f326</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f327',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f327\x22>emoji1f327</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f328',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f328\x22>emoji1f328</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f329',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f329\x22>emoji1f329</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f32a',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f32a\x22>emoji1f32a</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f32b',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f32b\x22>emoji1f32b</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f32c',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f32c\x22>emoji1f32c</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f32d',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f32d\x22>emoji1f32d</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f32e',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f32e\x22>emoji1f32e</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f32f',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f32f\x22>emoji1f32f</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f330',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f330\x22>emoji1f330</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f331',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f331\x22>emoji1f331</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f332',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f332\x22>emoji1f332</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f333',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f333\x22>emoji1f333</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f334',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f334\x22>emoji1f334</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f335',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f335\x22>emoji1f335</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f336',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f336\x22>emoji1f336</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f337',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f337\x22>emoji1f337</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f338',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f338\x22>emoji1f338</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f339',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f339\x22>emoji1f339</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f33a',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f33a\x22>emoji1f33a</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f33b',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f33b\x22>emoji1f33b</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f33c',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f33c\x22>emoji1f33c</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f33d',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f33d\x22>emoji1f33d</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f33e',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f33e\x22>emoji1f33e</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f33f',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f33f\x22>emoji1f33f</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f340',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f340\x22>emoji1f340</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f341',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f341\x22>emoji1f341</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f342',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f342\x22>emoji1f342</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f343',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f343\x22>emoji1f343</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f344',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f344\x22>emoji1f344</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f345',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f345\x22>emoji1f345</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f346',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f346\x22>emoji1f346</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f347',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f347\x22>emoji1f347</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f348',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f348\x22>emoji1f348</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f349',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f349\x22>emoji1f349</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f34a',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f34a\x22>emoji1f34a</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f34b',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f34b\x22>emoji1f34b</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f34c',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f34c\x22>emoji1f34c</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f34d',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f34d\x22>emoji1f34d</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f34e',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f34e\x22>emoji1f34e</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f34f',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f34f\x22>emoji1f34f</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f350',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f350\x22>emoji1f350</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f351',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f351\x22>emoji1f351</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f352',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f352\x22>emoji1f352</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f353',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f353\x22>emoji1f353</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f354',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f354\x22>emoji1f354</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f355',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f355\x22>emoji1f355</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f356',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f356\x22>emoji1f356</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f357',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f357\x22>emoji1f357</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f358',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f358\x22>emoji1f358</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f359',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f359\x22>emoji1f359</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f35a',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f35a\x22>emoji1f35a</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f35b',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f35b\x22>emoji1f35b</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f35c',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f35c\x22>emoji1f35c</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f35d',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f35d\x22>emoji1f35d</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f35e',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f35e\x22>emoji1f35e</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f35f',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f35f\x22>emoji1f35f</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f360',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f360\x22>emoji1f360</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f361',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f361\x22>emoji1f361</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f362',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f362\x22>emoji1f362</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f363',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f363\x22>emoji1f363</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f364',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f364\x22>emoji1f364</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f365',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f365\x22>emoji1f365</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f366',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f366\x22>emoji1f366</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f367',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f367\x22>emoji1f367</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f368',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f368\x22>emoji1f368</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f369',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f369\x22>emoji1f369</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f36a',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f36a\x22>emoji1f36a</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f36b',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f36b\x22>emoji1f36b</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f36c',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f36c\x22>emoji1f36c</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f36d',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f36d\x22>emoji1f36d</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f36e',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f36e\x22>emoji1f36e</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f36f',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f36f\x22>emoji1f36f</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f370',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f370\x22>emoji1f370</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f371',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f371\x22>emoji1f371</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f372',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f372\x22>emoji1f372</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f373',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f373\x22>emoji1f373</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f374',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f374\x22>emoji1f374</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f375',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f375\x22>emoji1f375</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f376',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f376\x22>emoji1f376</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f377',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f377\x22>emoji1f377</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f378',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f378\x22>emoji1f378</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f379',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f379\x22>emoji1f379</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f37a',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f37a\x22>emoji1f37a</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f37b',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f37b\x22>emoji1f37b</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f37c',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f37c\x22>emoji1f37c</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f37d',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f37d\x22>emoji1f37d</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f37e',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f37e\x22>emoji1f37e</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f37f',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f37f\x22>emoji1f37f</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f380',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f380\x22>emoji1f380</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f381',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f381\x22>emoji1f381</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f382',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f382\x22>emoji1f382</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f383',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f383\x22>emoji1f383</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f384',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f384\x22>emoji1f384</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f385',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f385\x22>emoji1f385</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f386',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f386\x22>emoji1f386</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f387',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f387\x22>emoji1f387</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f388',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f388\x22>emoji1f388</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f389',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f389\x22>emoji1f389</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f38a',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f38a\x22>emoji1f38a</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f38b',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f38b\x22>emoji1f38b</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f38c',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f38c\x22>emoji1f38c</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f38d',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f38d\x22>emoji1f38d</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f38e',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f38e\x22>emoji1f38e</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f38f',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f38f\x22>emoji1f38f</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f390',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f390\x22>emoji1f390</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f391',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f391\x22>emoji1f391</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f392',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f392\x22>emoji1f392</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f393',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f393\x22>emoji1f393</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f396',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f396\x22>emoji1f396</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f397',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f397\x22>emoji1f397</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f399',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f399\x22>emoji1f399</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f39a',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f39a\x22>emoji1f39a</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f39b',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f39b\x22>emoji1f39b</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f39e',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f39e\x22>emoji1f39e</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f39f',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f39f\x22>emoji1f39f</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f3a0',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f3a0\x22>emoji1f3a0</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f3a1',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f3a1\x22>emoji1f3a1</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f3a2',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f3a2\x22>emoji1f3a2</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f3a3',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f3a3\x22>emoji1f3a3</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f3a4',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f3a4\x22>emoji1f3a4</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f3a5',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f3a5\x22>emoji1f3a5</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f3a6',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f3a6\x22>emoji1f3a6</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f3a7',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f3a7\x22>emoji1f3a7</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f3a8',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f3a8\x22>emoji1f3a8</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f3a9',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f3a9\x22>emoji1f3a9</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f3aa',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f3aa\x22>emoji1f3aa</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f3ab',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f3ab\x22>emoji1f3ab</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f3ac',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f3ac\x22>emoji1f3ac</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f3ad',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f3ad\x22>emoji1f3ad</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f3ae',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f3ae\x22>emoji1f3ae</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f3af',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f3af\x22>emoji1f3af</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f3b0',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f3b0\x22>emoji1f3b0</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f3b1',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f3b1\x22>emoji1f3b1</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f3b2',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f3b2\x22>emoji1f3b2</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f3b3',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f3b3\x22>emoji1f3b3</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f3b4',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f3b4\x22>emoji1f3b4</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f3b5',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f3b5\x22>emoji1f3b5</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f3b6',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f3b6\x22>emoji1f3b6</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f3b7',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f3b7\x22>emoji1f3b7</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f3b8',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f3b8\x22>emoji1f3b8</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f3b9',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f3b9\x22>emoji1f3b9</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f3ba',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f3ba\x22>emoji1f3ba</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f3bb',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f3bb\x22>emoji1f3bb</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f3bc',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f3bc\x22>emoji1f3bc</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f3bd',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f3bd\x22>emoji1f3bd</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f3be',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f3be\x22>emoji1f3be</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f3bf',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f3bf\x22>emoji1f3bf</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f3c0',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f3c0\x22>emoji1f3c0</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f3c1',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f3c1\x22>emoji1f3c1</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f3c2',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f3c2\x22>emoji1f3c2</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f3c3',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f3c3\x22>emoji1f3c3</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f3c4',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f3c4\x22>emoji1f3c4</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f3c5',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f3c5\x22>emoji1f3c5</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f3c6',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f3c6\x22>emoji1f3c6</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f3c7',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f3c7\x22>emoji1f3c7</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f3c8',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f3c8\x22>emoji1f3c8</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f3c9',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f3c9\x22>emoji1f3c9</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f3ca',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f3ca\x22>emoji1f3ca</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f3cb',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f3cb\x22>emoji1f3cb</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f3cc',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f3cc\x22>emoji1f3cc</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f3cd',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f3cd\x22>emoji1f3cd</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f3ce',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f3ce\x22>emoji1f3ce</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f3cf',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f3cf\x22>emoji1f3cf</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f3d0',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f3d0\x22>emoji1f3d0</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f3d1',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f3d1\x22>emoji1f3d1</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f3d2',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f3d2\x22>emoji1f3d2</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f3d3',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f3d3\x22>emoji1f3d3</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f3d4',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f3d4\x22>emoji1f3d4</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f3d5',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f3d5\x22>emoji1f3d5</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f3d6',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f3d6\x22>emoji1f3d6</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f3d7',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f3d7\x22>emoji1f3d7</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f3d8',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f3d8\x22>emoji1f3d8</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f3d9',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f3d9\x22>emoji1f3d9</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f3da',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f3da\x22>emoji1f3da</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f3db',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f3db\x22>emoji1f3db</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f3dc',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f3dc\x22>emoji1f3dc</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f3dd',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f3dd\x22>emoji1f3dd</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f3de',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f3de\x22>emoji1f3de</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f3df',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f3df\x22>emoji1f3df</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f3e0',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f3e0\x22>emoji1f3e0</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f3e1',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f3e1\x22>emoji1f3e1</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f3e2',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f3e2\x22>emoji1f3e2</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f3e3',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f3e3\x22>emoji1f3e3</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f3e4',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f3e4\x22>emoji1f3e4</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f3e5',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f3e5\x22>emoji1f3e5</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f3e6',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f3e6\x22>emoji1f3e6</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f3e7',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f3e7\x22>emoji1f3e7</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f3e8',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f3e8\x22>emoji1f3e8</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f3e9',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f3e9\x22>emoji1f3e9</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f3ea',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f3ea\x22>emoji1f3ea</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f3eb',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f3eb\x22>emoji1f3eb</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f3ec',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f3ec\x22>emoji1f3ec</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f3ed',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f3ed\x22>emoji1f3ed</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f3ee',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f3ee\x22>emoji1f3ee</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f3ef',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f3ef\x22>emoji1f3ef</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f3f0',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f3f0\x22>emoji1f3f0</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f3f3',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f3f3\x22>emoji1f3f3</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f3f4',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f3f4\x22>emoji1f3f4</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f3f5',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f3f5\x22>emoji1f3f5</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f3f7',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f3f7\x22>emoji1f3f7</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f3f8',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f3f8\x22>emoji1f3f8</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f3f9',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f3f9\x22>emoji1f3f9</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f3fa',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f3fa\x22>emoji1f3fa</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f3fb',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f3fb\x22>emoji1f3fb</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f3fc',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f3fc\x22>emoji1f3fc</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f3fd',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f3fd\x22>emoji1f3fd</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f3fe',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f3fe\x22>emoji1f3fe</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f3ff',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f3ff\x22>emoji1f3ff</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f400',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f400\x22>emoji1f400</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f401',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f401\x22>emoji1f401</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f402',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f402\x22>emoji1f402</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f403',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f403\x22>emoji1f403</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f404',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f404\x22>emoji1f404</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f405',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f405\x22>emoji1f405</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f406',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f406\x22>emoji1f406</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f407',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f407\x22>emoji1f407</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f408',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f408\x22>emoji1f408</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f409',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f409\x22>emoji1f409</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f40a',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f40a\x22>emoji1f40a</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f40b',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f40b\x22>emoji1f40b</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f40c',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f40c\x22>emoji1f40c</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f40d',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f40d\x22>emoji1f40d</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f40e',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f40e\x22>emoji1f40e</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f40f',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f40f\x22>emoji1f40f</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f410',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f410\x22>emoji1f410</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f411',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f411\x22>emoji1f411</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f412',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f412\x22>emoji1f412</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f413',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f413\x22>emoji1f413</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f414',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f414\x22>emoji1f414</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f415',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f415\x22>emoji1f415</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f416',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f416\x22>emoji1f416</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f417',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f417\x22>emoji1f417</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f418',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f418\x22>emoji1f418</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f419',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f419\x22>emoji1f419</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f41a',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f41a\x22>emoji1f41a</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f41b',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f41b\x22>emoji1f41b</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f41c',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f41c\x22>emoji1f41c</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f41d',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f41d\x22>emoji1f41d</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f41e',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f41e\x22>emoji1f41e</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f41f',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f41f\x22>emoji1f41f</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f420',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f420\x22>emoji1f420</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f421',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f421\x22>emoji1f421</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f422',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f422\x22>emoji1f422</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f423',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f423\x22>emoji1f423</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f424',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f424\x22>emoji1f424</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f425',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f425\x22>emoji1f425</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f426',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f426\x22>emoji1f426</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f427',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f427\x22>emoji1f427</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f428',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f428\x22>emoji1f428</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f429',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f429\x22>emoji1f429</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f42a',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f42a\x22>emoji1f42a</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f42b',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f42b\x22>emoji1f42b</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f42c',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f42c\x22>emoji1f42c</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f42d',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f42d\x22>emoji1f42d</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f42e',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f42e\x22>emoji1f42e</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f42f',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f42f\x22>emoji1f42f</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f430',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f430\x22>emoji1f430</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f431',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f431\x22>emoji1f431</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f432',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f432\x22>emoji1f432</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f433',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f433\x22>emoji1f433</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f434',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f434\x22>emoji1f434</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f435',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f435\x22>emoji1f435</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f436',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f436\x22>emoji1f436</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f437',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f437\x22>emoji1f437</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f438',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f438\x22>emoji1f438</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f439',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f439\x22>emoji1f439</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f43a',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f43a\x22>emoji1f43a</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f43b',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f43b\x22>emoji1f43b</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f43c',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f43c\x22>emoji1f43c</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f43d',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f43d\x22>emoji1f43d</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f43e',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f43e\x22>emoji1f43e</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f43f',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f43f\x22>emoji1f43f</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f440',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f440\x22>emoji1f440</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f441',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f441\x22>emoji1f441</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f442',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f442\x22>emoji1f442</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f443',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f443\x22>emoji1f443</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f444',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f444\x22>emoji1f444</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f445',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f445\x22>emoji1f445</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f446',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f446\x22>emoji1f446</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f447',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f447\x22>emoji1f447</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f448',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f448\x22>emoji1f448</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f449',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f449\x22>emoji1f449</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f44a',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f44a\x22>emoji1f44a</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f44b',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f44b\x22>emoji1f44b</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f44c',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f44c\x22>emoji1f44c</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f44d',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f44d\x22>emoji1f44d</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f44e',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f44e\x22>emoji1f44e</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f44f',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f44f\x22>emoji1f44f</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f450',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f450\x22>emoji1f450</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f451',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f451\x22>emoji1f451</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f452',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f452\x22>emoji1f452</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f453',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f453\x22>emoji1f453</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f454',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f454\x22>emoji1f454</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f455',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f455\x22>emoji1f455</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f456',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f456\x22>emoji1f456</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f457',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f457\x22>emoji1f457</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f458',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f458\x22>emoji1f458</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f459',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f459\x22>emoji1f459</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f45a',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f45a\x22>emoji1f45a</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f45b',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f45b\x22>emoji1f45b</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f45c',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f45c\x22>emoji1f45c</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f45d',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f45d\x22>emoji1f45d</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f45e',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f45e\x22>emoji1f45e</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f45f',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f45f\x22>emoji1f45f</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f460',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f460\x22>emoji1f460</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f461',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f461\x22>emoji1f461</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f462',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f462\x22>emoji1f462</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f463',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f463\x22>emoji1f463</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f464',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f464\x22>emoji1f464</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f465',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f465\x22>emoji1f465</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f466',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f466\x22>emoji1f466</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f467',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f467\x22>emoji1f467</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f468',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f468\x22>emoji1f468</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f469',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f469\x22>emoji1f469</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f46a',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f46a\x22>emoji1f46a</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f46b',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f46b\x22>emoji1f46b</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f46c',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f46c\x22>emoji1f46c</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f46d',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f46d\x22>emoji1f46d</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f46e',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f46e\x22>emoji1f46e</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f46f',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f46f\x22>emoji1f46f</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f470',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f470\x22>emoji1f470</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f471',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f471\x22>emoji1f471</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f472',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f472\x22>emoji1f472</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f473',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f473\x22>emoji1f473</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f474',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f474\x22>emoji1f474</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f475',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f475\x22>emoji1f475</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f476',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f476\x22>emoji1f476</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f477',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f477\x22>emoji1f477</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f478',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f478\x22>emoji1f478</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f479',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f479\x22>emoji1f479</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f47a',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f47a\x22>emoji1f47a</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f47b',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f47b\x22>emoji1f47b</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f47c',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f47c\x22>emoji1f47c</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f47d',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f47d\x22>emoji1f47d</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f47e',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f47e\x22>emoji1f47e</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f47f',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f47f\x22>emoji1f47f</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f480',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f480\x22>emoji1f480</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f481',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f481\x22>emoji1f481</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f482',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f482\x22>emoji1f482</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f483',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f483\x22>emoji1f483</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f484',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f484\x22>emoji1f484</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f485',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f485\x22>emoji1f485</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f486',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f486\x22>emoji1f486</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f487',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f487\x22>emoji1f487</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f488',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f488\x22>emoji1f488</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f489',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f489\x22>emoji1f489</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f48a',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f48a\x22>emoji1f48a</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f48b',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f48b\x22>emoji1f48b</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f48c',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f48c\x22>emoji1f48c</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f48d',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f48d\x22>emoji1f48d</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f48e',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f48e\x22>emoji1f48e</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f48f',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f48f\x22>emoji1f48f</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f490',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f490\x22>emoji1f490</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f491',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f491\x22>emoji1f491</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f492',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f492\x22>emoji1f492</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f493',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f493\x22>emoji1f493</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f494',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f494\x22>emoji1f494</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f495',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f495\x22>emoji1f495</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f496',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f496\x22>emoji1f496</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f497',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f497\x22>emoji1f497</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f498',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f498\x22>emoji1f498</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f499',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f499\x22>emoji1f499</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f49a',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f49a\x22>emoji1f49a</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f49b',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f49b\x22>emoji1f49b</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f49c',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f49c\x22>emoji1f49c</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f49d',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f49d\x22>emoji1f49d</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f49e',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f49e\x22>emoji1f49e</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f49f',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f49f\x22>emoji1f49f</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f4a0',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f4a0\x22>emoji1f4a0</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f4a1',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f4a1\x22>emoji1f4a1</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f4a2',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f4a2\x22>emoji1f4a2</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f4a3',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f4a3\x22>emoji1f4a3</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f4a4',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f4a4\x22>emoji1f4a4</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f4a5',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f4a5\x22>emoji1f4a5</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f4a6',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f4a6\x22>emoji1f4a6</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f4a7',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f4a7\x22>emoji1f4a7</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f4a8',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f4a8\x22>emoji1f4a8</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f4a9',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f4a9\x22>emoji1f4a9</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f4aa',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f4aa\x22>emoji1f4aa</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f4ab',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f4ab\x22>emoji1f4ab</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f4ac',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f4ac\x22>emoji1f4ac</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f4ad',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f4ad\x22>emoji1f4ad</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f4ae',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f4ae\x22>emoji1f4ae</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f4af',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f4af\x22>emoji1f4af</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f4b0',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f4b0\x22>emoji1f4b0</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f4b1',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f4b1\x22>emoji1f4b1</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f4b2',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f4b2\x22>emoji1f4b2</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f4b3',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f4b3\x22>emoji1f4b3</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f4b4',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f4b4\x22>emoji1f4b4</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f4b5',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f4b5\x22>emoji1f4b5</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f4b6',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f4b6\x22>emoji1f4b6</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f4b7',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f4b7\x22>emoji1f4b7</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f4b8',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f4b8\x22>emoji1f4b8</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f4b9',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f4b9\x22>emoji1f4b9</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f4ba',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f4ba\x22>emoji1f4ba</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f4bb',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f4bb\x22>emoji1f4bb</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f4bc',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f4bc\x22>emoji1f4bc</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f4bd',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f4bd\x22>emoji1f4bd</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f4be',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f4be\x22>emoji1f4be</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f4bf',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f4bf\x22>emoji1f4bf</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f4c0',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f4c0\x22>emoji1f4c0</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f4c1',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f4c1\x22>emoji1f4c1</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f4c2',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f4c2\x22>emoji1f4c2</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f4c3',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f4c3\x22>emoji1f4c3</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f4c4',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f4c4\x22>emoji1f4c4</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f4c5',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f4c5\x22>emoji1f4c5</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f4c6',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f4c6\x22>emoji1f4c6</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f4c7',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f4c7\x22>emoji1f4c7</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f4c8',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f4c8\x22>emoji1f4c8</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f4c9',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f4c9\x22>emoji1f4c9</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f4ca',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f4ca\x22>emoji1f4ca</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f4cb',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f4cb\x22>emoji1f4cb</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f4cc',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f4cc\x22>emoji1f4cc</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f4cd',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f4cd\x22>emoji1f4cd</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f4ce',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f4ce\x22>emoji1f4ce</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f4cf',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f4cf\x22>emoji1f4cf</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f4d0',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f4d0\x22>emoji1f4d0</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f4d1',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f4d1\x22>emoji1f4d1</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f4d2',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f4d2\x22>emoji1f4d2</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f4d3',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f4d3\x22>emoji1f4d3</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f4d4',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f4d4\x22>emoji1f4d4</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f4d5',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f4d5\x22>emoji1f4d5</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f4d6',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f4d6\x22>emoji1f4d6</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f4d7',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f4d7\x22>emoji1f4d7</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f4d8',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f4d8\x22>emoji1f4d8</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f4d9',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f4d9\x22>emoji1f4d9</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f4da',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f4da\x22>emoji1f4da</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f4db',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f4db\x22>emoji1f4db</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f4dc',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f4dc\x22>emoji1f4dc</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f4dd',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f4dd\x22>emoji1f4dd</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f4de',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f4de\x22>emoji1f4de</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f4df',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f4df\x22>emoji1f4df</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f4e0',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f4e0\x22>emoji1f4e0</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f4e1',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f4e1\x22>emoji1f4e1</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f4e2',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f4e2\x22>emoji1f4e2</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f4e3',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f4e3\x22>emoji1f4e3</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f4e4',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f4e4\x22>emoji1f4e4</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f4e5',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f4e5\x22>emoji1f4e5</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f4e6',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f4e6\x22>emoji1f4e6</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f4e7',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f4e7\x22>emoji1f4e7</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f4e8',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f4e8\x22>emoji1f4e8</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f4e9',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f4e9\x22>emoji1f4e9</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f4ea',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f4ea\x22>emoji1f4ea</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f4eb',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f4eb\x22>emoji1f4eb</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f4ec',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f4ec\x22>emoji1f4ec</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f4ed',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f4ed\x22>emoji1f4ed</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f4ee',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f4ee\x22>emoji1f4ee</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f4ef',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f4ef\x22>emoji1f4ef</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f4f0',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f4f0\x22>emoji1f4f0</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f4f1',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f4f1\x22>emoji1f4f1</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f4f2',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f4f2\x22>emoji1f4f2</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f4f3',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f4f3\x22>emoji1f4f3</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f4f4',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f4f4\x22>emoji1f4f4</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f4f5',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f4f5\x22>emoji1f4f5</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f4f6',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f4f6\x22>emoji1f4f6</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f4f7',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f4f7\x22>emoji1f4f7</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f4f8',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f4f8\x22>emoji1f4f8</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f4f9',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f4f9\x22>emoji1f4f9</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f4fa',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f4fa\x22>emoji1f4fa</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f4fb',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f4fb\x22>emoji1f4fb</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f4fc',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f4fc\x22>emoji1f4fc</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f4fd',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f4fd\x22>emoji1f4fd</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f4ff',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f4ff\x22>emoji1f4ff</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f500',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f500\x22>emoji1f500</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f501',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f501\x22>emoji1f501</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f502',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f502\x22>emoji1f502</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f503',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f503\x22>emoji1f503</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f504',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f504\x22>emoji1f504</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f505',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f505\x22>emoji1f505</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f506',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f506\x22>emoji1f506</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f507',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f507\x22>emoji1f507</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f508',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f508\x22>emoji1f508</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f509',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f509\x22>emoji1f509</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f50a',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f50a\x22>emoji1f50a</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f50b',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f50b\x22>emoji1f50b</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f50c',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f50c\x22>emoji1f50c</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f50d',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f50d\x22>emoji1f50d</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f50e',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f50e\x22>emoji1f50e</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f50f',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f50f\x22>emoji1f50f</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f510',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f510\x22>emoji1f510</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f511',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f511\x22>emoji1f511</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f512',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f512\x22>emoji1f512</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f513',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f513\x22>emoji1f513</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f514',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f514\x22>emoji1f514</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f515',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f515\x22>emoji1f515</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f516',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f516\x22>emoji1f516</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f517',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f517\x22>emoji1f517</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f518',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f518\x22>emoji1f518</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f519',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f519\x22>emoji1f519</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f51a',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f51a\x22>emoji1f51a</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f51b',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f51b\x22>emoji1f51b</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f51c',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f51c\x22>emoji1f51c</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f51d',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f51d\x22>emoji1f51d</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f51e',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f51e\x22>emoji1f51e</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f51f',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f51f\x22>emoji1f51f</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f520',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f520\x22>emoji1f520</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f521',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f521\x22>emoji1f521</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f522',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f522\x22>emoji1f522</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f523',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f523\x22>emoji1f523</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f524',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f524\x22>emoji1f524</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f525',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f525\x22>emoji1f525</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f526',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f526\x22>emoji1f526</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f527',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f527\x22>emoji1f527</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f528',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f528\x22>emoji1f528</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f529',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f529\x22>emoji1f529</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f52a',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f52a\x22>emoji1f52a</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f52b',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f52b\x22>emoji1f52b</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f52c',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f52c\x22>emoji1f52c</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f52d',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f52d\x22>emoji1f52d</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f52e',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f52e\x22>emoji1f52e</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f52f',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f52f\x22>emoji1f52f</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f530',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f530\x22>emoji1f530</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f531',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f531\x22>emoji1f531</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f532',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f532\x22>emoji1f532</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f533',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f533\x22>emoji1f533</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f534',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f534\x22>emoji1f534</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f535',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f535\x22>emoji1f535</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f536',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f536\x22>emoji1f536</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f537',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f537\x22>emoji1f537</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f538',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f538\x22>emoji1f538</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f539',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f539\x22>emoji1f539</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f53a',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f53a\x22>emoji1f53a</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f53b',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f53b\x22>emoji1f53b</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f53c',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f53c\x22>emoji1f53c</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f53d',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f53d\x22>emoji1f53d</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f549',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f549\x22>emoji1f549</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f54a',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f54a\x22>emoji1f54a</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f54b',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f54b\x22>emoji1f54b</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f54c',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f54c\x22>emoji1f54c</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f54d',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f54d\x22>emoji1f54d</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f54e',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f54e\x22>emoji1f54e</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f550',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f550\x22>emoji1f550</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f551',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f551\x22>emoji1f551</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f552',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f552\x22>emoji1f552</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f553',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f553\x22>emoji1f553</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f554',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f554\x22>emoji1f554</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f555',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f555\x22>emoji1f555</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f556',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f556\x22>emoji1f556</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f557',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f557\x22>emoji1f557</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f558',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f558\x22>emoji1f558</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f559',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f559\x22>emoji1f559</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f55a',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f55a\x22>emoji1f55a</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f55b',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f55b\x22>emoji1f55b</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f55c',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f55c\x22>emoji1f55c</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f55d',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f55d\x22>emoji1f55d</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f55e',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f55e\x22>emoji1f55e</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f55f',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f55f\x22>emoji1f55f</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f560',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f560\x22>emoji1f560</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f561',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f561\x22>emoji1f561</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f562',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f562\x22>emoji1f562</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f563',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f563\x22>emoji1f563</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f564',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f564\x22>emoji1f564</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f565',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f565\x22>emoji1f565</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f566',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f566\x22>emoji1f566</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f567',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f567\x22>emoji1f567</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f56f',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f56f\x22>emoji1f56f</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f570',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f570\x22>emoji1f570</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f573',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f573\x22>emoji1f573</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f574',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f574\x22>emoji1f574</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f575',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f575\x22>emoji1f575</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f576',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f576\x22>emoji1f576</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f577',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f577\x22>emoji1f577</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f578',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f578\x22>emoji1f578</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f579',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f579\x22>emoji1f579</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f587',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f587\x22>emoji1f587</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f58a',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f58a\x22>emoji1f58a</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f58b',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f58b\x22>emoji1f58b</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f58c',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f58c\x22>emoji1f58c</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f58d',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f58d\x22>emoji1f58d</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f590',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f590\x22>emoji1f590</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f595',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f595\x22>emoji1f595</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f596',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f596\x22>emoji1f596</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f5a5',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f5a5\x22>emoji1f5a5</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f5a8',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f5a8\x22>emoji1f5a8</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f5b1',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f5b1\x22>emoji1f5b1</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f5b2',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f5b2\x22>emoji1f5b2</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f5bc',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f5bc\x22>emoji1f5bc</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f5c2',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f5c2\x22>emoji1f5c2</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f5c3',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f5c3\x22>emoji1f5c3</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f5c4',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f5c4\x22>emoji1f5c4</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f5d1',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f5d1\x22>emoji1f5d1</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f5d2',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f5d2\x22>emoji1f5d2</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f5d3',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f5d3\x22>emoji1f5d3</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f5dc',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f5dc\x22>emoji1f5dc</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f5dd',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f5dd\x22>emoji1f5dd</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f5de',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f5de\x22>emoji1f5de</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f5e1',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f5e1\x22>emoji1f5e1</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f5e3',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f5e3\x22>emoji1f5e3</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f5e8',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f5e8\x22>emoji1f5e8</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f5ef',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f5ef\x22>emoji1f5ef</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f5f3',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f5f3\x22>emoji1f5f3</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f5fa',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f5fa\x22>emoji1f5fa</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f5fb',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f5fb\x22>emoji1f5fb</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f5fc',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f5fc\x22>emoji1f5fc</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f5fd',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f5fd\x22>emoji1f5fd</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f5fe',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f5fe\x22>emoji1f5fe</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f5ff',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f5ff\x22>emoji1f5ff</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f600',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f600\x22>emoji1f600</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f601',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f601\x22>emoji1f601</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f602',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f602\x22>emoji1f602</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f603',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f603\x22>emoji1f603</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f604',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f604\x22>emoji1f604</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f605',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f605\x22>emoji1f605</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f606',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f606\x22>emoji1f606</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f607',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f607\x22>emoji1f607</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f608',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f608\x22>emoji1f608</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f609',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f609\x22>emoji1f609</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f60a',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f60a\x22>emoji1f60a</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f60b',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f60b\x22>emoji1f60b</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f60c',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f60c\x22>emoji1f60c</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f60d',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f60d\x22>emoji1f60d</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f60e',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f60e\x22>emoji1f60e</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f60f',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f60f\x22>emoji1f60f</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f610',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f610\x22>emoji1f610</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f611',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f611\x22>emoji1f611</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f612',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f612\x22>emoji1f612</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f613',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f613\x22>emoji1f613</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f614',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f614\x22>emoji1f614</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f615',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f615\x22>emoji1f615</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f616',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f616\x22>emoji1f616</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f617',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f617\x22>emoji1f617</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f618',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f618\x22>emoji1f618</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f619',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f619\x22>emoji1f619</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f61a',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f61a\x22>emoji1f61a</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f61b',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f61b\x22>emoji1f61b</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f61c',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f61c\x22>emoji1f61c</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f61d',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f61d\x22>emoji1f61d</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f61e',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f61e\x22>emoji1f61e</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f61f',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f61f\x22>emoji1f61f</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f620',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f620\x22>emoji1f620</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f621',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f621\x22>emoji1f621</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f622',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f622\x22>emoji1f622</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f623',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f623\x22>emoji1f623</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f624',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f624\x22>emoji1f624</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f625',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f625\x22>emoji1f625</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f626',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f626\x22>emoji1f626</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f627',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f627\x22>emoji1f627</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f628',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f628\x22>emoji1f628</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f629',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f629\x22>emoji1f629</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f62a',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f62a\x22>emoji1f62a</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f62b',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f62b\x22>emoji1f62b</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f62c',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f62c\x22>emoji1f62c</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f62d',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f62d\x22>emoji1f62d</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f62e',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f62e\x22>emoji1f62e</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f62f',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f62f\x22>emoji1f62f</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f630',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f630\x22>emoji1f630</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f631',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f631\x22>emoji1f631</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f632',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f632\x22>emoji1f632</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f633',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f633\x22>emoji1f633</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f634',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f634\x22>emoji1f634</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f635',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f635\x22>emoji1f635</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f636',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f636\x22>emoji1f636</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f637',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f637\x22>emoji1f637</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f638',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f638\x22>emoji1f638</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f639',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f639\x22>emoji1f639</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f63a',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f63a\x22>emoji1f63a</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f63b',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f63b\x22>emoji1f63b</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f63c',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f63c\x22>emoji1f63c</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f63d',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f63d\x22>emoji1f63d</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f63e',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f63e\x22>emoji1f63e</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f63f',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f63f\x22>emoji1f63f</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f640',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f640\x22>emoji1f640</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f641',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f641\x22>emoji1f641</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f642',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f642\x22>emoji1f642</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f643',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f643\x22>emoji1f643</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f644',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f644\x22>emoji1f644</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f645',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f645\x22>emoji1f645</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f646',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f646\x22>emoji1f646</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f647',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f647\x22>emoji1f647</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f648',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f648\x22>emoji1f648</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f649',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f649\x22>emoji1f649</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f64a',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f64a\x22>emoji1f64a</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f64b',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f64b\x22>emoji1f64b</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f64c',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f64c\x22>emoji1f64c</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f64d',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f64d\x22>emoji1f64d</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f64e',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f64e\x22>emoji1f64e</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f64f',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f64f\x22>emoji1f64f</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f680',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f680\x22>emoji1f680</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f681',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f681\x22>emoji1f681</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f682',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f682\x22>emoji1f682</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f683',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f683\x22>emoji1f683</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f684',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f684\x22>emoji1f684</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f685',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f685\x22>emoji1f685</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f686',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f686\x22>emoji1f686</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f687',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f687\x22>emoji1f687</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f688',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f688\x22>emoji1f688</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f689',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f689\x22>emoji1f689</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f68a',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f68a\x22>emoji1f68a</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f68b',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f68b\x22>emoji1f68b</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f68c',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f68c\x22>emoji1f68c</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f68d',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f68d\x22>emoji1f68d</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f68e',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f68e\x22>emoji1f68e</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f68f',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f68f\x22>emoji1f68f</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f690',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f690\x22>emoji1f690</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f691',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f691\x22>emoji1f691</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f692',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f692\x22>emoji1f692</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f693',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f693\x22>emoji1f693</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f694',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f694\x22>emoji1f694</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f695',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f695\x22>emoji1f695</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f696',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f696\x22>emoji1f696</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f697',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f697\x22>emoji1f697</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f698',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f698\x22>emoji1f698</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f699',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f699\x22>emoji1f699</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f69a',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f69a\x22>emoji1f69a</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f69b',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f69b\x22>emoji1f69b</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f69c',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f69c\x22>emoji1f69c</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f69d',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f69d\x22>emoji1f69d</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f69e',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f69e\x22>emoji1f69e</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f69f',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f69f\x22>emoji1f69f</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f6a0',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f6a0\x22>emoji1f6a0</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f6a1',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f6a1\x22>emoji1f6a1</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f6a2',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f6a2\x22>emoji1f6a2</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f6a3',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f6a3\x22>emoji1f6a3</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f6a4',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f6a4\x22>emoji1f6a4</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f6a5',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f6a5\x22>emoji1f6a5</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f6a6',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f6a6\x22>emoji1f6a6</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f6a7',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f6a7\x22>emoji1f6a7</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f6a8',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f6a8\x22>emoji1f6a8</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f6a9',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f6a9\x22>emoji1f6a9</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f6aa',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f6aa\x22>emoji1f6aa</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f6ab',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f6ab\x22>emoji1f6ab</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f6ac',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f6ac\x22>emoji1f6ac</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f6ad',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f6ad\x22>emoji1f6ad</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f6ae',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f6ae\x22>emoji1f6ae</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f6af',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f6af\x22>emoji1f6af</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f6b0',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f6b0\x22>emoji1f6b0</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f6b1',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f6b1\x22>emoji1f6b1</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f6b2',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f6b2\x22>emoji1f6b2</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f6b3',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f6b3\x22>emoji1f6b3</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f6b4',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f6b4\x22>emoji1f6b4</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f6b5',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f6b5\x22>emoji1f6b5</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f6b6',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f6b6\x22>emoji1f6b6</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f6b7',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f6b7\x22>emoji1f6b7</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f6b8',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f6b8\x22>emoji1f6b8</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f6b9',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f6b9\x22>emoji1f6b9</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f6ba',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f6ba\x22>emoji1f6ba</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f6bb',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f6bb\x22>emoji1f6bb</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f6bc',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f6bc\x22>emoji1f6bc</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f6bd',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f6bd\x22>emoji1f6bd</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f6be',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f6be\x22>emoji1f6be</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f6bf',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f6bf\x22>emoji1f6bf</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f6c0',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f6c0\x22>emoji1f6c0</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f6c1',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f6c1\x22>emoji1f6c1</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f6c2',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f6c2\x22>emoji1f6c2</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f6c3',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f6c3\x22>emoji1f6c3</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f6c4',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f6c4\x22>emoji1f6c4</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f6c5',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f6c5\x22>emoji1f6c5</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f6cb',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f6cb\x22>emoji1f6cb</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f6cc',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f6cc\x22>emoji1f6cc</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f6cd',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f6cd\x22>emoji1f6cd</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f6ce',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f6ce\x22>emoji1f6ce</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f6cf',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f6cf\x22>emoji1f6cf</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f6d0',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f6d0\x22>emoji1f6d0</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f6e0',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f6e0\x22>emoji1f6e0</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f6e1',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f6e1\x22>emoji1f6e1</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f6e2',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f6e2\x22>emoji1f6e2</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f6e3',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f6e3\x22>emoji1f6e3</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f6e4',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f6e4\x22>emoji1f6e4</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f6e5',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f6e5\x22>emoji1f6e5</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f6e9',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f6e9\x22>emoji1f6e9</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f6eb',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f6eb\x22>emoji1f6eb</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f6ec',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f6ec\x22>emoji1f6ec</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f6f0',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f6f0\x22>emoji1f6f0</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f6f3',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f6f3\x22>emoji1f6f3</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f910',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f910\x22>emoji1f910</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f911',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f911\x22>emoji1f911</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f912',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f912\x22>emoji1f912</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f913',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f913\x22>emoji1f913</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f914',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f914\x22>emoji1f914</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f915',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f915\x22>emoji1f915</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f916',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f916\x22>emoji1f916</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f917',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f917\x22>emoji1f917</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f918',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f918\x22>emoji1f918</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f980',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f980\x22>emoji1f980</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f981',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f981\x22>emoji1f981</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f982',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f982\x22>emoji1f982</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f983',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f983\x22>emoji1f983</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f984',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f984\x22>emoji1f984</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f9c0',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f9c0\x22>emoji1f9c0</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji2320e3',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji2320e3\x22>emoji2320e3</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji2a20e3',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji2a20e3\x22>emoji2a20e3</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji3020e3',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji3020e3\x22>emoji3020e3</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji3120e3',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji3120e3\x22>emoji3120e3</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji3220e3',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji3220e3\x22>emoji3220e3</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji3320e3',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji3320e3\x22>emoji3320e3</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji3420e3',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji3420e3\x22>emoji3420e3</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji3520e3',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji3520e3\x22>emoji3520e3</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji3620e3',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji3620e3\x22>emoji3620e3</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji3720e3',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji3720e3\x22>emoji3720e3</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji3820e3',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji3820e3\x22>emoji3820e3</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji3920e3',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji3920e3\x22>emoji3920e3</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f1e61f1e8',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f1e61f1e8\x22>emoji1f1e61f1e8</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f1e61f1e9',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f1e61f1e9\x22>emoji1f1e61f1e8</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f1e61f1ea',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f1e61f1ea\x22>emoji1f1e61f1e9</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f1e61f1eb',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f1e61f1eb\x22>emoji1f1e61f1ea</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f1e61f1ec',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f1e61f1ec\x22>emoji1f1e61f1eb</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f1e61f1ee',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f1e61f1ee\x22>emoji1f1e61f1ec</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f1e61f1f1',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f1e61f1f1\x22>emoji1f1e61f1ee</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f1e61f1f2',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f1e61f1f2\x22>emoji1f1e61f1f1</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f1e61f1f4',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f1e61f1f4\x22>emoji1f1e61f1f2</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f1e61f1f6',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f1e61f1f6\x22>emoji1f1e61f1f4</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f1e61f1f7',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f1e61f1f7\x22>emoji1f1e61f1f6</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f1e61f1f8',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f1e61f1f8\x22>emoji1f1e61f1f7</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f1e61f1f9',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f1e61f1f9\x22>emoji1f1e61f1f8</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f1e61f1fa',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f1e61f1fa\x22>emoji1f1e61f1f9</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f1e61f1fc',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f1e61f1fc\x22>emoji1f1e61f1fa</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f1e61f1fd',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f1e61f1fd\x22>emoji1f1e61f1fc</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f1e61f1ff',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f1e61f1ff\x22>emoji1f1e61f1fd</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f1e71f1e6',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f1e71f1e6\x22>emoji1f1e61f1ff</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f1e71f1e7',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f1e71f1e7\x22>emoji1f1e71f1e6</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f1e71f1e9',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f1e71f1e9\x22>emoji1f1e71f1e7</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f1e71f1ea',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f1e71f1ea\x22>emoji1f1e71f1e9</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f1e71f1eb',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f1e71f1eb\x22>emoji1f1e71f1ea</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f1e71f1ec',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f1e71f1ec\x22>emoji1f1e71f1eb</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f1e71f1ed',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f1e71f1ed\x22>emoji1f1e71f1ec</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f1e71f1ee',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f1e71f1ee\x22>emoji1f1e71f1ed</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f1e71f1ef',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f1e71f1ef\x22>emoji1f1e71f1ee</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f1e71f1f1',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f1e71f1f1\x22>emoji1f1e71f1ef</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f1e71f1f2',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f1e71f1f2\x22>emoji1f1e71f1f1</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f1e71f1f3',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f1e71f1f3\x22>emoji1f1e71f1f2</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f1e71f1f4',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f1e71f1f4\x22>emoji1f1e71f1f3</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f1e71f1f6',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f1e71f1f6\x22>emoji1f1e71f1f4</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f1e71f1f7',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f1e71f1f7\x22>emoji1f1e71f1f6</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f1e71f1f8',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f1e71f1f8\x22>emoji1f1e71f1f7</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f1e71f1f9',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f1e71f1f9\x22>emoji1f1e71f1f8</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f1e71f1fb',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f1e71f1fb\x22>emoji1f1e71f1f9</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f1e71f1fc',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f1e71f1fc\x22>emoji1f1e71f1fb</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f1e71f1fe',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f1e71f1fe\x22>emoji1f1e71f1fc</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f1e71f1ff',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f1e71f1ff\x22>emoji1f1e71f1fe</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f1e81f1e6',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f1e81f1e6\x22>emoji1f1e71f1ff</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f1e81f1e8',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f1e81f1e8\x22>emoji1f1e81f1e6</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f1e81f1e9',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f1e81f1e9\x22>emoji1f1e81f1e8</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f1e81f1eb',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f1e81f1eb\x22>emoji1f1e81f1e9</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f1e81f1ec',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f1e81f1ec\x22>emoji1f1e81f1eb</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f1e81f1ed',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f1e81f1ed\x22>emoji1f1e81f1ec</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f1e81f1ee',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f1e81f1ee\x22>emoji1f1e81f1ed</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f1e81f1f0',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f1e81f1f0\x22>emoji1f1e81f1ee</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f1e81f1f1',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f1e81f1f1\x22>emoji1f1e81f1f0</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f1e81f1f2',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f1e81f1f2\x22>emoji1f1e81f1f1</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f1e81f1f3',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f1e81f1f3\x22>emoji1f1e81f1f2</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f1e81f1f4',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f1e81f1f4\x22>emoji1f1e81f1f3</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f1e81f1f5',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f1e81f1f5\x22>emoji1f1e81f1f4</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f1e81f1f7',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f1e81f1f7\x22>emoji1f1e81f1f5</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f1e81f1fa',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f1e81f1fa\x22>emoji1f1e81f1f7</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f1e81f1fb',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f1e81f1fb\x22>emoji1f1e81f1fa</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f1e81f1fc',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f1e81f1fc\x22>emoji1f1e81f1fb</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f1e81f1fd',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f1e81f1fd\x22>emoji1f1e81f1fc</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f1e81f1fe',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f1e81f1fe\x22>emoji1f1e81f1fd</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f1e81f1ff',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f1e81f1ff\x22>emoji1f1e81f1fe</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f1e91f1ea',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f1e91f1ea\x22>emoji1f1e81f1ff</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f1e91f1ec',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f1e91f1ec\x22>emoji1f1e91f1ea</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f1e91f1ef',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f1e91f1ef\x22>emoji1f1e91f1ec</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f1e91f1f0',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f1e91f1f0\x22>emoji1f1e91f1ef</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f1e91f1f2',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f1e91f1f2\x22>emoji1f1e91f1f0</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f1e91f1f4',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f1e91f1f4\x22>emoji1f1e91f1f2</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f1e91f1ff',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f1e91f1ff\x22>emoji1f1e91f1f4</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f1ea1f1e6',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f1ea1f1e6\x22>emoji1f1e91f1ff</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f1ea1f1e8',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f1ea1f1e8\x22>emoji1f1ea1f1e6</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f1ea1f1ea',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f1ea1f1ea\x22>emoji1f1ea1f1e8</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f1ea1f1ec',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f1ea1f1ec\x22>emoji1f1ea1f1ea</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f1ea1f1ed',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f1ea1f1ed\x22>emoji1f1ea1f1ec</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f1ea1f1f7',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f1ea1f1f7\x22>emoji1f1ea1f1ed</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f1ea1f1f8',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f1ea1f1f8\x22>emoji1f1ea1f1f7</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f1ea1f1f9',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f1ea1f1f9\x22>emoji1f1ea1f1f8</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f1ea1f1fa',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f1ea1f1fa\x22>emoji1f1ea1f1f9</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f1eb1f1ee',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f1eb1f1ee\x22>emoji1f1ea1f1fa</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f1eb1f1ef',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f1eb1f1ef\x22>emoji1f1eb1f1ee</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f1eb1f1f0',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f1eb1f1f0\x22>emoji1f1eb1f1ef</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f1eb1f1f2',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f1eb1f1f2\x22>emoji1f1eb1f1f0</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f1eb1f1f4',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f1eb1f1f4\x22>emoji1f1eb1f1f2</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f1eb1f1f7',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f1eb1f1f7\x22>emoji1f1eb1f1f4</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f1ec1f1e6',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f1ec1f1e6\x22>emoji1f1eb1f1f7</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f1ec1f1e7',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f1ec1f1e7\x22>emoji1f1ec1f1e6</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f1ec1f1e9',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f1ec1f1e9\x22>emoji1f1ec1f1e7</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f1ec1f1ea',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f1ec1f1ea\x22>emoji1f1ec1f1e9</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f1ec1f1eb',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f1ec1f1eb\x22>emoji1f1ec1f1ea</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f1ec1f1ec',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f1ec1f1ec\x22>emoji1f1ec1f1eb</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f1ec1f1ed',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f1ec1f1ed\x22>emoji1f1ec1f1ec</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f1ec1f1ee',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f1ec1f1ee\x22>emoji1f1ec1f1ed</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f1ec1f1f1',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f1ec1f1f1\x22>emoji1f1ec1f1ee</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f1ec1f1f2',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f1ec1f1f2\x22>emoji1f1ec1f1f1</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f1ec1f1f3',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f1ec1f1f3\x22>emoji1f1ec1f1f2</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f1ec1f1f5',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f1ec1f1f5\x22>emoji1f1ec1f1f3</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f1ec1f1f6',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f1ec1f1f6\x22>emoji1f1ec1f1f5</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f1ec1f1f7',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f1ec1f1f7\x22>emoji1f1ec1f1f6</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f1ec1f1f8',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f1ec1f1f8\x22>emoji1f1ec1f1f7</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f1ec1f1f9',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f1ec1f1f9\x22>emoji1f1ec1f1f8</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f1ec1f1fa',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f1ec1f1fa\x22>emoji1f1ec1f1f9</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f1ec1f1fc',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f1ec1f1fc\x22>emoji1f1ec1f1fa</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f1ec1f1fe',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f1ec1f1fe\x22>emoji1f1ec1f1fc</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f1ed1f1f0',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f1ed1f1f0\x22>emoji1f1ec1f1fe</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f1ed1f1f2',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f1ed1f1f2\x22>emoji1f1ed1f1f0</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f1ed1f1f3',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f1ed1f1f3\x22>emoji1f1ed1f1f2</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f1ed1f1f7',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f1ed1f1f7\x22>emoji1f1ed1f1f3</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f1ed1f1f9',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f1ed1f1f9\x22>emoji1f1ed1f1f7</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f1ed1f1fa',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f1ed1f1fa\x22>emoji1f1ed1f1f9</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f1ee1f1e8',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f1ee1f1e8\x22>emoji1f1ed1f1fa</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f1ee1f1e9',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f1ee1f1e9\x22>emoji1f1ee1f1e8</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f1ee1f1ea',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f1ee1f1ea\x22>emoji1f1ee1f1e9</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f1ee1f1f1',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f1ee1f1f1\x22>emoji1f1ee1f1ea</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f1ee1f1f2',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f1ee1f1f2\x22>emoji1f1ee1f1f1</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f1ee1f1f3',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f1ee1f1f3\x22>emoji1f1ee1f1f2</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f1ee1f1f4',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f1ee1f1f4\x22>emoji1f1ee1f1f3</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f1ee1f1f6',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f1ee1f1f6\x22>emoji1f1ee1f1f4</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f1ee1f1f7',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f1ee1f1f7\x22>emoji1f1ee1f1f6</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f1ee1f1f8',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f1ee1f1f8\x22>emoji1f1ee1f1f7</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f1ee1f1f9',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f1ee1f1f9\x22>emoji1f1ee1f1f8</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f1ef1f1ea',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f1ef1f1ea\x22>emoji1f1ee1f1f9</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f1ef1f1f2',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f1ef1f1f2\x22>emoji1f1ef1f1ea</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f1ef1f1f4',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f1ef1f1f4\x22>emoji1f1ef1f1f2</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f1ef1f1f5',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f1ef1f1f5\x22>emoji1f1ef1f1f4</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f1f01f1ea',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f1f01f1ea\x22>emoji1f1ef1f1f5</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f1f01f1ec',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f1f01f1ec\x22>emoji1f1f01f1ea</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f1f01f1ed',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f1f01f1ed\x22>emoji1f1f01f1ec</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f1f01f1ee',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f1f01f1ee\x22>emoji1f1f01f1ed</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f1f01f1f2',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f1f01f1f2\x22>emoji1f1f01f1ee</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f1f01f1f3',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f1f01f1f3\x22>emoji1f1f01f1f2</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f1f01f1f5',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f1f01f1f5\x22>emoji1f1f01f1f3</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f1f01f1f7',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f1f01f1f7\x22>emoji1f1f01f1f5</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f1f01f1fc',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f1f01f1fc\x22>emoji1f1f01f1f7</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f1f01f1fe',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f1f01f1fe\x22>emoji1f1f01f1fc</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f1f01f1ff',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f1f01f1ff\x22>emoji1f1f01f1fe</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f1f11f1e6',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f1f11f1e6\x22>emoji1f1f01f1ff</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f1f11f1e7',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f1f11f1e7\x22>emoji1f1f11f1e6</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f1f11f1e8',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f1f11f1e8\x22>emoji1f1f11f1e7</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f1f11f1ee',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f1f11f1ee\x22>emoji1f1f11f1e8</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f1f11f1f0',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f1f11f1f0\x22>emoji1f1f11f1ee</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f1f11f1f7',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f1f11f1f7\x22>emoji1f1f11f1f0</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f1f11f1f8',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f1f11f1f8\x22>emoji1f1f11f1f7</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f1f11f1f9',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f1f11f1f9\x22>emoji1f1f11f1f8</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f1f11f1fa',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f1f11f1fa\x22>emoji1f1f11f1f9</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f1f11f1fb',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f1f11f1fb\x22>emoji1f1f11f1fa</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f1f11f1fe',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f1f11f1fe\x22>emoji1f1f11f1fb</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f1f21f1e6',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f1f21f1e6\x22>emoji1f1f11f1fe</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f1f21f1e8',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f1f21f1e8\x22>emoji1f1f21f1e6</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f1f21f1e9',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f1f21f1e9\x22>emoji1f1f21f1e8</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f1f21f1ea',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f1f21f1ea\x22>emoji1f1f21f1e9</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f1f21f1eb',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f1f21f1eb\x22>emoji1f1f21f1ea</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f1f21f1ec',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f1f21f1ec\x22>emoji1f1f21f1eb</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f1f21f1ed',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f1f21f1ed\x22>emoji1f1f21f1ec</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f1f21f1f0',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f1f21f1f0\x22>emoji1f1f21f1ed</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f1f21f1f1',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f1f21f1f1\x22>emoji1f1f21f1f0</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f1f21f1f2',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f1f21f1f2\x22>emoji1f1f21f1f1</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f1f21f1f3',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f1f21f1f3\x22>emoji1f1f21f1f2</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f1f21f1f4',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f1f21f1f4\x22>emoji1f1f21f1f3</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f1f21f1f5',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f1f21f1f5\x22>emoji1f1f21f1f4</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f1f21f1f6',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f1f21f1f6\x22>emoji1f1f21f1f5</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f1f21f1f7',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f1f21f1f7\x22>emoji1f1f21f1f6</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f1f21f1f8',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f1f21f1f8\x22>emoji1f1f21f1f7</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f1f21f1f9',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f1f21f1f9\x22>emoji1f1f21f1f8</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f1f21f1fa',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f1f21f1fa\x22>emoji1f1f21f1f9</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f1f21f1fb',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f1f21f1fb\x22>emoji1f1f21f1fa</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f1f21f1fc',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f1f21f1fc\x22>emoji1f1f21f1fb</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f1f21f1fd',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f1f21f1fd\x22>emoji1f1f21f1fc</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f1f21f1fe',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f1f21f1fe\x22>emoji1f1f21f1fd</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f1f21f1ff',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f1f21f1ff\x22>emoji1f1f21f1fe</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f1f31f1e6',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f1f31f1e6\x22>emoji1f1f21f1ff</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f1f31f1e8',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f1f31f1e8\x22>emoji1f1f31f1e6</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f1f31f1ea',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f1f31f1ea\x22>emoji1f1f31f1e8</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f1f31f1eb',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f1f31f1eb\x22>emoji1f1f31f1ea</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f1f31f1ec',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f1f31f1ec\x22>emoji1f1f31f1eb</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f1f31f1ee',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f1f31f1ee\x22>emoji1f1f31f1ec</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f1f31f1f1',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f1f31f1f1\x22>emoji1f1f31f1ee</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f1f31f1f4',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f1f31f1f4\x22>emoji1f1f31f1f1</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f1f31f1f5',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f1f31f1f5\x22>emoji1f1f31f1f4</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f1f31f1f7',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f1f31f1f7\x22>emoji1f1f31f1f5</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f1f31f1fa',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f1f31f1fa\x22>emoji1f1f31f1f7</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f1f31f1ff',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f1f31f1ff\x22>emoji1f1f31f1fa</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f1f41f1f2',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f1f41f1f2\x22>emoji1f1f31f1ff</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f1f51f1e6',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f1f51f1e6\x22>emoji1f1f41f1f2</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f1f51f1ea',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f1f51f1ea\x22>emoji1f1f51f1e6</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f1f51f1eb',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f1f51f1eb\x22>emoji1f1f51f1ea</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f1f51f1ec',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f1f51f1ec\x22>emoji1f1f51f1eb</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f1f51f1ed',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f1f51f1ed\x22>emoji1f1f51f1ec</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f1f51f1f0',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f1f51f1f0\x22>emoji1f1f51f1ed</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f1f51f1f1',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f1f51f1f1\x22>emoji1f1f51f1f0</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f1f51f1f2',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f1f51f1f2\x22>emoji1f1f51f1f1</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f1f51f1f3',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f1f51f1f3\x22>emoji1f1f51f1f2</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f1f51f1f7',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f1f51f1f7\x22>emoji1f1f51f1f3</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f1f51f1f8',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f1f51f1f8\x22>emoji1f1f51f1f7</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f1f51f1f9',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f1f51f1f9\x22>emoji1f1f51f1f8</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f1f51f1fc',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f1f51f1fc\x22>emoji1f1f51f1f9</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f1f51f1fe',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f1f51f1fe\x22>emoji1f1f51f1fc</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f1f61f1e6',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f1f61f1e6\x22>emoji1f1f51f1fe</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f1f71f1ea',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f1f71f1ea\x22>emoji1f1f61f1e6</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f1f71f1f4',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f1f71f1f4\x22>emoji1f1f71f1ea</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f1f71f1f8',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f1f71f1f8\x22>emoji1f1f71f1f4</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f1f71f1fa',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f1f71f1fa\x22>emoji1f1f71f1f8</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f1f71f1fc',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f1f71f1fc\x22>emoji1f1f71f1fa</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f1f81f1e6',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f1f81f1e6\x22>emoji1f1f71f1fc</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f1f81f1e7',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f1f81f1e7\x22>emoji1f1f81f1e6</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f1f81f1e8',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f1f81f1e8\x22>emoji1f1f81f1e7</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f1f81f1e9',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f1f81f1e9\x22>emoji1f1f81f1e8</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f1f81f1ea',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f1f81f1ea\x22>emoji1f1f81f1e9</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f1f81f1ec',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f1f81f1ec\x22>emoji1f1f81f1ea</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f1f81f1ed',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f1f81f1ed\x22>emoji1f1f81f1ec</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f1f81f1ee',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f1f81f1ee\x22>emoji1f1f81f1ed</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f1f81f1ef',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f1f81f1ef\x22>emoji1f1f81f1ee</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f1f81f1f0',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f1f81f1f0\x22>emoji1f1f81f1ef</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f1f81f1f1',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f1f81f1f1\x22>emoji1f1f81f1f0</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f1f81f1f2',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f1f81f1f2\x22>emoji1f1f81f1f1</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f1f81f1f3',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f1f81f1f3\x22>emoji1f1f81f1f2</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f1f81f1f4',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f1f81f1f4\x22>emoji1f1f81f1f3</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f1f81f1f7',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f1f81f1f7\x22>emoji1f1f81f1f4</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f1f81f1f8',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f1f81f1f8\x22>emoji1f1f81f1f7</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f1f81f1f9',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f1f81f1f9\x22>emoji1f1f81f1f8</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f1f81f1fb',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f1f81f1fb\x22>emoji1f1f81f1f9</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f1f81f1fd',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f1f81f1fd\x22>emoji1f1f81f1fb</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f1f81f1fe',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f1f81f1fe\x22>emoji1f1f81f1fd</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f1f81f1ff',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f1f81f1ff\x22>emoji1f1f81f1fe</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f1f91f1e6',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f1f91f1e6\x22>emoji1f1f81f1ff</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f1f91f1e8',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f1f91f1e8\x22>emoji1f1f91f1e6</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f1f91f1e9',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f1f91f1e9\x22>emoji1f1f91f1e8</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f1f91f1eb',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f1f91f1eb\x22>emoji1f1f91f1e9</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f1f91f1ec',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f1f91f1ec\x22>emoji1f1f91f1eb</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f1f91f1ed',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f1f91f1ed\x22>emoji1f1f91f1ec</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f1f91f1ef',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f1f91f1ef\x22>emoji1f1f91f1ed</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f1f91f1f0',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f1f91f1f0\x22>emoji1f1f91f1ef</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f1f91f1f1',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f1f91f1f1\x22>emoji1f1f91f1f0</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f1f91f1f2',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f1f91f1f2\x22>emoji1f1f91f1f1</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f1f91f1f3',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f1f91f1f3\x22>emoji1f1f91f1f2</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f1f91f1f4',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f1f91f1f4\x22>emoji1f1f91f1f3</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f1f91f1f7',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f1f91f1f7\x22>emoji1f1f91f1f4</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f1f91f1f9',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f1f91f1f9\x22>emoji1f1f91f1f7</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f1f91f1fb',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f1f91f1fb\x22>emoji1f1f91f1f9</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f1f91f1fc',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f1f91f1fc\x22>emoji1f1f91f1fb</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f1f91f1ff',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f1f91f1ff\x22>emoji1f1f91f1fc</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f1fa1f1e6',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f1fa1f1e6\x22>emoji1f1f91f1ff</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f1fa1f1ec',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f1fa1f1ec\x22>emoji1f1fa1f1e6</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f1fa1f1f2',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f1fa1f1f2\x22>emoji1f1fa1f1ec</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f1fa1f1f8',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f1fa1f1f8\x22>emoji1f1fa1f1f2</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f1fa1f1fe',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f1fa1f1fe\x22>emoji1f1fa1f1f8</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f1fa1f1ff',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f1fa1f1ff\x22>emoji1f1fa1f1fe</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f1fb1f1e6',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f1fb1f1e6\x22>emoji1f1fa1f1ff</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f1fb1f1e8',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f1fb1f1e8\x22>emoji1f1fb1f1e6</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f1fb1f1ea',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f1fb1f1ea\x22>emoji1f1fb1f1e8</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f1fb1f1ec',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f1fb1f1ec\x22>emoji1f1fb1f1ea</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f1fb1f1ee',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f1fb1f1ee\x22>emoji1f1fb1f1ec</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f1fb1f1f3',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f1fb1f1f3\x22>emoji1f1fb1f1ee</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f1fb1f1fa',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f1fb1f1fa\x22>emoji1f1fb1f1f3</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f1fc1f1eb',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f1fc1f1eb\x22>emoji1f1fb1f1fa</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f1fc1f1f8',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f1fc1f1f8\x22>emoji1f1fc1f1eb</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f1fd1f1f0',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f1fd1f1f0\x22>emoji1f1fc1f1f8</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f1fe1f1ea',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f1fe1f1ea\x22>emoji1f1fd1f1f0</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f1fe1f1f9',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f1fe1f1f9\x22>emoji1f1fe1f1ea</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f1ff1f1e6',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f1ff1f1e6\x22>emoji1f1fe1f1f9</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f1ff1f1f2',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f1ff1f1f2\x22>emoji1f1ff1f1e6</span></span>'
    });
    emoji_maps['html_to_html5'].unshift({
        code: 'emoji1f1ff1f1fc',
        html: '<span class=\x22emoji-outer emoji-sizer\x22><span class=\x22emoji-inner emoji1f1ff1f1fc\x22>emoji1f1ff1f1fc</span></span>'
    });


    var emojis = {
        emj: emj,
    };

    return emojis;

    /**
     *
     */
    function emj(map, content) {
        map = typeof map !== 'undefined' ? map : {};
        content = typeof content !== 'undefined' ? content : undefined;

        if (content === undefined) { //不传code为获取集合
            if (map === undefined) {
                return emoji_maps;
            } else if (map === 'html_to_html5') {
                return emoji_maps['html_to_html5'];
            } else if (map === 'unified_to_html') {
                return emoji_maps['unified_to_html'];
            }
        } else {
            if (content === undefined) {
                return;
            }
            if (map === 'undefine_to_html') {
                for (var i = 0; i < emoji_maps['unified_to_html'].length; i++) {
                    content = content.replace(RegExp(quote(emoji_maps['unified_to_html'][i].code), "g")
                        , emoji_maps['unified_to_html'][i].html);
                }
            }
            return content;
        }

    }

    function quote(str) {
        return (str + '').replace(/[.?*+^$[\]\\(){}|-]/g, "\\$&");
    };

});