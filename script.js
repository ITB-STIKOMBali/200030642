(function(){
    var script = {
 "defaultVRPointer": "laser",
 "class": "Player",
 "layout": "absolute",
 "id": "rootPlayer",
 "scrollBarOpacity": 0.5,
 "vrPolyfillScale": 0.5,
 "start": "this.playAudioList([this.audio_F9A511D2_EDC2_99FE_41DA_819E95EE51BB]); this.init(); this.syncPlaylists([this.ThumbnailList_012D7D88_1832_505A_41A8_71148FB9AB33_playlist,this.mainPlayList]); this.playList_B8C5982C_B665_5D43_41E5_C2F661F135DD.set('selectedIndex', 0)",
 "paddingBottom": 0,
 "minHeight": 20,
 "children": [
  "this.MainViewer",
  "this.WebFrame_C7ED43D4_DF56_7707_41DD_9E553529204B",
  "this.Image_F1770450_E7A9_3397_41E4_B5E6CA5920C0",
  "this.MapViewer",
  "this.Image_03F85B1B_1304_EBA9_4193_E1378CB84B21",
  "this.Image_071D4C32_130B_6DFA_41A6_E89D1DDE6EF2",
  "this.IconButton_F1CD224E_E1A7_3BA2_41C1_057A5177C98C",
  "this.Button_0B741BB5_1872_D04B_41B4_A1CF013C97B0",
  "this.ThumbnailList_012D7D88_1832_505A_41A8_71148FB9AB33",
  "this.IconButton_A73FE202_A864_7DE3_41C2_FC61D2471417",
  "this.IconButton_A237F9F3_B2DA_09E0_41C0_6B98723BB9D1",
  "this.HTMLText_A2B43EC1_B33A_0A20_41D2_137EEB4C79C7",
  "this.Image_F21B5780_E6C8_DEC7_41D4_D58CD4D9DCBD",
  "this.Image_F3594E3D_E6B7_AE39_41C8_FE19BB12D054",
  "this.Image_F23672C6_E649_564A_41EC_CD3F30DA5B23",
  "this.Image_F208C464_E649_524F_41EC_07C9C78C6A02",
  "this.Image_F2638C52_E648_F24B_4198_1B8B11C8C2F2",
  "this.Image_F20AC14B_E64F_D259_41D9_71B15433AB9E",
  "this.Image_F27D68F4_E648_B24E_41E1_900F5FB2363E",
  "this.Image_F278FEC0_E648_AE46_41A5_F679081499CE",
  "this.Image_F2528CB9_E649_5239_41D5_60765A8BAF32",
  "this.Image_F24BE2FB_E649_D639_41EC_6C57AFF379C5",
  "this.Image_F2434354_E649_764F_41BC_C63404D9D8E7",
  "this.Image_F27F3E84_E648_EECE_41BB_679F3C0A06B5",
  "this.Image_F25988F0_E64B_5247_41E0_7C12462F1412",
  "this.Image_F26ED021_E64B_D1C9_41DB_0BC5116D3911",
  "this.Image_F25F581F_E64B_51F9_41EB_5A451DE584F3",
  "this.Image_F2412C1F_E64B_51F9_41EC_1CBA4E61E617",
  "this.veilPopupPanorama",
  "this.zoomImagePopupPanorama",
  "this.closeButtonPopupPanorama"
 ],
 "shadow": false,
 "downloadEnabled": false,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "paddingTop": 0,
 "scripts": {
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "registerKey": function(key, value){  window[key] = value; },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "existsKey": function(key){  return key in window; },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "getKey": function(key){  return window[key]; },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "unregisterKey": function(key){  delete window[key]; }
 },
 "minWidth": 20,
 "mobileMipmappingEnabled": false,
 "width": "100%",
 "creationPolicy": "inAdvance",
 "paddingRight": 0,
 "paddingLeft": 0,
 "contentOpaque": false,
 "borderSize": 0,
 "borderRadius": 0,
 "definitions": [{
 "easing": "cubic_in_out",
 "id": "effect_F1EDF9AC_E679_B2DF_4193_BEF20561D360",
 "duration": 1000,
 "class": "FadeInEffect"
},
{
 "levels": [
  {
   "url": "media/popup_8C0559AC_9D24_C1BC_41D8_C2A80CF1634E_0_0.png",
   "width": 1920,
   "height": 1080,
   "class": "ImageResourceLevel"
  },
  {
   "url": "media/popup_8C0559AC_9D24_C1BC_41D8_C2A80CF1634E_0_1.png",
   "width": 1024,
   "height": 576,
   "class": "ImageResourceLevel"
  },
  {
   "url": "media/popup_8C0559AC_9D24_C1BC_41D8_C2A80CF1634E_0_2.png",
   "width": 512,
   "height": 288,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "ImageResource_89BE29F6_9D24_41AD_41DF_CC51545967B3",
 "class": "ImageResource"
},
{
 "items": [
  {
   "media": "this.video_3BF8CD99_1305_6EA9_41A3_97DBAA5790E4",
   "start": "this.viewer_uidB8AE685B_B665_5DC5_41BB_306851C7AC05VideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.PlayList_B96D3899_B665_5D44_41E3_58D6D3E34DAF, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.PlayList_B96D3899_B665_5D44_41E3_58D6D3E34DAF, 0)",
   "begin": "this.fixTogglePlayPauseButton(this.viewer_uidB8AE685B_B665_5DC5_41BB_306851C7AC05VideoPlayer)",
   "player": "this.viewer_uidB8AE685B_B665_5DC5_41BB_306851C7AC05VideoPlayer",
   "class": "VideoPlayListItem"
  }
 ],
 "id": "PlayList_B96D3899_B665_5D44_41E3_58D6D3E34DAF",
 "class": "PlayList"
},
{
 "easing": "cubic_in_out",
 "id": "effect_F1E239AA_E679_B2DB_41E2_F8957BBAC1B9",
 "duration": 1000,
 "class": "FadeOutEffect"
},
{
 "easing": "cubic_in_out",
 "id": "effect_F1E7D99B_E679_B2F9_41EC_9FCCFC120248",
 "duration": 1000,
 "class": "FadeOutEffect"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "initialPosition": {
  "yaw": -176.69,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_B95D3E1E_B665_557F_41DA_7A68CFFC5A1D",
 "class": "PanoramaCamera"
},
{
 "easing": "cubic_in_out",
 "id": "effect_F1E6299C_E679_B2FF_41D5_17A0CD4AD434",
 "duration": 1000,
 "class": "FadeInEffect"
},
{
 "thumbnailUrl": "media/panorama_DF0B714D_D522_EAAE_41DB_DAFE02AA8C1C_t.jpg",
 "overlays": [
  "this.overlay_C010CDFA_D5E6_556A_41A0_E04BAFFF62ED",
  "this.overlay_321E8425_1305_5D9E_41AF_B1586822A95E",
  "this.popup_31F5B7A7_1305_3A9A_41AA_19829798A91D",
  "this.overlay_0AC49DA1_1B3F_D798_41A1_35B08A25672E",
  "this.overlay_E2C23A49_ED4E_8AED_41D5_B58F4CCEC081",
  "this.popup_F8BD8C07_F752_C1BA_41E8_77B4093E763C"
 ],
 "adjacentPanoramas": [
  {
   "backwardYaw": -83.5,
   "yaw": 70.96,
   "panorama": "this.panorama_DF0BAF14_D522_36BE_4182_2D68BF6843DE",
   "distance": 1,
   "class": "AdjacentPanorama"
  }
 ],
 "label": "Ruang Makan Raja",
 "id": "panorama_DF0B714D_D522_EAAE_41DB_DAFE02AA8C1C",
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_DF0B714D_D522_EAAE_41DB_DAFE02AA8C1C_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_DF0B714D_D522_EAAE_41DB_DAFE02AA8C1C_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_DF0B714D_D522_EAAE_41DB_DAFE02AA8C1C_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_DF0B714D_D522_EAAE_41DB_DAFE02AA8C1C_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_DF0B714D_D522_EAAE_41DB_DAFE02AA8C1C_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_DF0B714D_D522_EAAE_41DB_DAFE02AA8C1C_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_DF0B714D_D522_EAAE_41DB_DAFE02AA8C1C_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_DF0B714D_D522_EAAE_41DB_DAFE02AA8C1C_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_DF0B714D_D522_EAAE_41DB_DAFE02AA8C1C_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_DF0B714D_D522_EAAE_41DB_DAFE02AA8C1C_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_DF0B714D_D522_EAAE_41DB_DAFE02AA8C1C_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_DF0B714D_D522_EAAE_41DB_DAFE02AA8C1C_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_DF0B714D_D522_EAAE_41DB_DAFE02AA8C1C_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_DF0B714D_D522_EAAE_41DB_DAFE02AA8C1C_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_DF0B714D_D522_EAAE_41DB_DAFE02AA8C1C_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_DF0B714D_D522_EAAE_41DB_DAFE02AA8C1C_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_DF0B714D_D522_EAAE_41DB_DAFE02AA8C1C_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_DF0B714D_D522_EAAE_41DB_DAFE02AA8C1C_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_DF0B714D_D522_EAAE_41DB_DAFE02AA8C1C_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 180,
 "hfovMin": "150%",
 "pitch": 0,
 "hfov": 360,
 "hfovMax": 130,
 "partial": false,
 "class": "Panorama"
},
{
 "easing": "cubic_in_out",
 "id": "effect_F1E029A8_E679_B2C7_41D2_B0FAE0348311",
 "duration": 1000,
 "class": "FadeOutEffect"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "initialPosition": {
  "yaw": 125.95,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_B8AD5D03_B665_5744_41D0_629CC3A5E4CD",
 "class": "PanoramaCamera"
},
{
 "levels": [
  {
   "url": "media/popup_8F958FEE_9D5D_C1BC_41E0_4D3C8E890915_0_0.png",
   "width": 1920,
   "height": 1080,
   "class": "ImageResourceLevel"
  },
  {
   "url": "media/popup_8F958FEE_9D5D_C1BC_41E0_4D3C8E890915_0_1.png",
   "width": 1024,
   "height": 576,
   "class": "ImageResourceLevel"
  },
  {
   "url": "media/popup_8F958FEE_9D5D_C1BC_41E0_4D3C8E890915_0_2.png",
   "width": 512,
   "height": 288,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "ImageResource_89C8C463_9D5C_46A4_41E3_86F77640D212",
 "class": "ImageResource"
},
{
 "easing": "cubic_in_out",
 "id": "effect_F27B2280_EECB_0077_41CF_1452A9DB10A6",
 "duration": 1000,
 "class": "FadeInEffect"
},
{
 "rotationY": 0,
 "hfov": 9.59,
 "popupMaxHeight": "60%",
 "rotationX": 0,
 "rotationZ": 0,
 "popupMaxWidth": "60%",
 "id": "popup_E7664036_F74E_41DA_41AF_D016E718C9C2",
 "hideEasing": "cubic_out",
 "image": {
  "levels": [
   {
    "url": "media/popup_E7664036_F74E_41DA_41AF_D016E718C9C2_0_1.png",
    "width": 1024,
    "height": 576,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "pitch": 0.99,
 "popupDistance": 100,
 "showDuration": 500,
 "hideDuration": 500,
 "showEasing": "cubic_in",
 "yaw": -133.78,
 "class": "PopupPanoramaOverlay"
},
{
 "thumbnailUrl": "media/panorama_DF688AE7_D522_3F9A_41B2_CE1EBAC5DAF0_t.jpg",
 "overlays": [
  "this.overlay_C96CD58B_D778_03FA_41E2_A38892239547",
  "this.overlay_C9B28322_D778_072A_41D9_1F66B5C67585",
  "this.overlay_E82AD092_E7AA_F49B_41E0_6F98FC10B198",
  "this.overlay_092394B8_1B29_D5E9_4192_9E04D33F3998",
  "this.overlay_FD7972AD_ED41_BBA5_41A9_49799A7F40DD",
  "this.overlay_E2EC66DE_ED42_9BE7_41E3_1686BEDB5098",
  "this.overlay_FDB78857_ED42_96E6_41E1_EACD282203C0",
  "this.overlay_E255F68E_ED43_9A67_41E9_2888A5399357",
  "this.popup_F8B56BF6_F752_C65A_41C1_F432514F4542",
  "this.popup_E7F6F2D2_F752_465B_41EE_91B264CBC794",
  "this.popup_F8E99BFB_F752_464A_41C1_1E4936CF3011",
  "this.popup_054E3524_1447_9676_4193_7B76CE2567A8"
 ],
 "adjacentPanoramas": [
  {
   "backwardYaw": -5.27,
   "yaw": 173.64,
   "panorama": "this.panorama_DF6F0B8F_D522_DDA9_41D6_D0B5D979483D",
   "distance": 1,
   "class": "AdjacentPanorama"
  }
 ],
 "label": "Titik Terakhir",
 "id": "panorama_DF688AE7_D522_3F9A_41B2_CE1EBAC5DAF0",
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_DF688AE7_D522_3F9A_41B2_CE1EBAC5DAF0_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_DF688AE7_D522_3F9A_41B2_CE1EBAC5DAF0_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_DF688AE7_D522_3F9A_41B2_CE1EBAC5DAF0_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_DF688AE7_D522_3F9A_41B2_CE1EBAC5DAF0_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_DF688AE7_D522_3F9A_41B2_CE1EBAC5DAF0_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_DF688AE7_D522_3F9A_41B2_CE1EBAC5DAF0_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_DF688AE7_D522_3F9A_41B2_CE1EBAC5DAF0_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_DF688AE7_D522_3F9A_41B2_CE1EBAC5DAF0_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_DF688AE7_D522_3F9A_41B2_CE1EBAC5DAF0_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_DF688AE7_D522_3F9A_41B2_CE1EBAC5DAF0_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_DF688AE7_D522_3F9A_41B2_CE1EBAC5DAF0_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_DF688AE7_D522_3F9A_41B2_CE1EBAC5DAF0_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_DF688AE7_D522_3F9A_41B2_CE1EBAC5DAF0_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_DF688AE7_D522_3F9A_41B2_CE1EBAC5DAF0_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_DF688AE7_D522_3F9A_41B2_CE1EBAC5DAF0_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_DF688AE7_D522_3F9A_41B2_CE1EBAC5DAF0_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_DF688AE7_D522_3F9A_41B2_CE1EBAC5DAF0_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_DF688AE7_D522_3F9A_41B2_CE1EBAC5DAF0_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_DF688AE7_D522_3F9A_41B2_CE1EBAC5DAF0_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 180,
 "hfovMin": "150%",
 "pitch": 0,
 "hfov": 360,
 "hfovMax": 130,
 "partial": false,
 "class": "Panorama"
},
{
 "easing": "cubic_in_out",
 "id": "effect_F1E3C9AA_E679_B2DB_41E2_F95924AFEC60",
 "duration": 1000,
 "class": "FadeInEffect"
},
{
 "levels": [
  {
   "url": "media/popup_8C8E4019_9D24_7E64_41D0_F472E739C7F1_0_0.png",
   "width": 1920,
   "height": 1080,
   "class": "ImageResourceLevel"
  },
  {
   "url": "media/popup_8C8E4019_9D24_7E64_41D0_F472E739C7F1_0_1.png",
   "width": 1024,
   "height": 576,
   "class": "ImageResourceLevel"
  },
  {
   "url": "media/popup_8C8E4019_9D24_7E64_41D0_F472E739C7F1_0_2.png",
   "width": 512,
   "height": 288,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "ImageResource_8989FA65_9D24_42AF_41D8_E1EDCA6A0B76",
 "class": "ImageResource"
},
{
 "rotationY": 0,
 "hfov": 7.61,
 "popupMaxHeight": "60%",
 "rotationX": 0,
 "rotationZ": 0,
 "popupMaxWidth": "60%",
 "id": "popup_0439CC12_1441_9652_41AB_D3FBB769D261",
 "hideEasing": "cubic_out",
 "image": {
  "levels": [
   {
    "url": "media/popup_0439CC12_1441_9652_41AB_D3FBB769D261_0_1.png",
    "width": 1024,
    "height": 576,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "pitch": -6.36,
 "popupDistance": 100,
 "showDuration": 500,
 "hideDuration": 500,
 "showEasing": "cubic_in",
 "yaw": -73.72,
 "class": "PopupPanoramaOverlay"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "initialPosition": {
  "yaw": -2.17,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_B9148EAB_B665_5545_41D3_26C952D0F328",
 "class": "PanoramaCamera"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "initialPosition": {
  "yaw": 104.86,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_B9F45EF9_B665_52C4_41E4_CAEF390F85F7",
 "class": "PanoramaCamera"
},
{
 "class": "Video",
 "label": "Tugu Puri Agung",
 "scaleMode": "fit_inside",
 "width": 2986,
 "loop": false,
 "id": "video_22D7311F_12FF_37A9_41A0_72053C56BDC0",
 "thumbnailUrl": "media/video_22D7311F_12FF_37A9_41A0_72053C56BDC0_t.jpg",
 "height": 1680,
 "video": {
  "width": 2986,
  "mp4Url": "media/video_22D7311F_12FF_37A9_41A0_72053C56BDC0.mp4",
  "height": 1680,
  "class": "VideoResource"
 }
},
{
 "rotationY": 0,
 "hfov": 8.8,
 "popupMaxHeight": "60%",
 "rotationX": 0,
 "rotationZ": 0,
 "popupMaxWidth": "60%",
 "id": "popup_E7EF8C8D_F776_C2CE_41ED_69746EB5B478",
 "hideEasing": "cubic_out",
 "image": {
  "levels": [
   {
    "url": "media/popup_E7EF8C8D_F776_C2CE_41ED_69746EB5B478_0_1.png",
    "width": 1024,
    "height": 576,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "pitch": 2.43,
 "popupDistance": 100,
 "showDuration": 500,
 "hideDuration": 500,
 "showEasing": "cubic_in",
 "yaw": -158.62,
 "class": "PopupPanoramaOverlay"
},
{
 "items": [
  {
   "media": "this.video_3C0E25A7_131B_3E9A_41B2_644B2E6D05A6",
   "start": "this.viewer_uidB8BF886A_B665_5DC4_41B4_7ED8AF79C052VideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.PlayList_B96C5899_B665_5D44_41DB_C910EF711450, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.PlayList_B96C5899_B665_5D44_41DB_C910EF711450, 0)",
   "begin": "this.fixTogglePlayPauseButton(this.viewer_uidB8BF886A_B665_5DC4_41B4_7ED8AF79C052VideoPlayer)",
   "player": "this.viewer_uidB8BF886A_B665_5DC4_41B4_7ED8AF79C052VideoPlayer",
   "class": "VideoPlayListItem"
  }
 ],
 "id": "PlayList_B96C5899_B665_5D44_41DB_C910EF711450",
 "class": "PlayList"
},
{
 "rotationY": 0,
 "hfov": 11.5,
 "popupMaxHeight": "60%",
 "rotationX": 0,
 "rotationZ": 0,
 "popupMaxWidth": "60%",
 "id": "popup_E7726334_F776_C7DE_41DD_3C7698230E38",
 "hideEasing": "cubic_out",
 "image": {
  "levels": [
   {
    "url": "media/popup_E7726334_F776_C7DE_41DD_3C7698230E38_0_1.png",
    "width": 1024,
    "height": 576,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "pitch": 1.92,
 "popupDistance": 100,
 "showDuration": 500,
 "hideDuration": 500,
 "showEasing": "cubic_in",
 "yaw": -62.15,
 "class": "PopupPanoramaOverlay"
},
{
 "rotationY": 0,
 "hfov": 6.16,
 "popupMaxHeight": "60%",
 "rotationX": 0,
 "rotationZ": 0,
 "popupMaxWidth": "60%",
 "id": "popup_E73E8690_F751_CED6_41EE_0116A96F93E8",
 "hideEasing": "cubic_out",
 "image": {
  "levels": [
   {
    "url": "media/popup_E73E8690_F751_CED6_41EE_0116A96F93E8_0_1.png",
    "width": 1024,
    "height": 576,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "pitch": -7.49,
 "popupDistance": 100,
 "showDuration": 500,
 "hideDuration": 500,
 "showEasing": "cubic_in",
 "yaw": 27.87,
 "class": "PopupPanoramaOverlay"
},
{
 "easing": "quad_out",
 "id": "effect_F740496B_EE47_0089_41CF_FBFD1A13E87D",
 "duration": 500,
 "class": "FadeOutEffect"
},
{
 "easing": "cubic_in_out",
 "id": "effect_F1E1499D_E679_B2F9_41E0_DBEE7A3BC874",
 "duration": 1000,
 "class": "FadeInEffect"
},
{
 "levels": [
  {
   "url": "media/popup_F9C15111_F695_554A_41E5_D6CD11486A17_0_0.png",
   "width": 1920,
   "height": 1080,
   "class": "ImageResourceLevel"
  },
  {
   "url": "media/popup_F9C15111_F695_554A_41E5_D6CD11486A17_0_1.png",
   "width": 1024,
   "height": 576,
   "class": "ImageResourceLevel"
  },
  {
   "url": "media/popup_F9C15111_F695_554A_41E5_D6CD11486A17_0_2.png",
   "width": 512,
   "height": 288,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "ImageResource_F8C575B2_F751_C2DA_4194_5980BD2D8334",
 "class": "ImageResource"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "initialPosition": {
  "yaw": -109.04,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_B8B50D22_B665_5744_41C8_C24476D595AC",
 "class": "PanoramaCamera"
},
{
 "thumbnailUrl": "media/panorama_DF093389_D522_2D96_418B_B49E63F3C24E_t.jpg",
 "overlays": [
  "this.overlay_C6180E8A_D718_01FA_41C8_5BFB79830C7B",
  "this.overlay_0903BB73_1B38_B378_41A7_A73C709DDF97"
 ],
 "adjacentPanoramas": [
  {
   "backwardYaw": 18.23,
   "yaw": 176.26,
   "panorama": "this.panorama_DF08E4A2_D523_EB9A_41E5_F673F160A0A8",
   "distance": 1,
   "class": "AdjacentPanorama"
  }
 ],
 "label": "Pintu Keluar",
 "id": "panorama_DF093389_D522_2D96_418B_B49E63F3C24E",
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_DF093389_D522_2D96_418B_B49E63F3C24E_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_DF093389_D522_2D96_418B_B49E63F3C24E_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_DF093389_D522_2D96_418B_B49E63F3C24E_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_DF093389_D522_2D96_418B_B49E63F3C24E_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_DF093389_D522_2D96_418B_B49E63F3C24E_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_DF093389_D522_2D96_418B_B49E63F3C24E_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_DF093389_D522_2D96_418B_B49E63F3C24E_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_DF093389_D522_2D96_418B_B49E63F3C24E_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_DF093389_D522_2D96_418B_B49E63F3C24E_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_DF093389_D522_2D96_418B_B49E63F3C24E_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_DF093389_D522_2D96_418B_B49E63F3C24E_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_DF093389_D522_2D96_418B_B49E63F3C24E_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_DF093389_D522_2D96_418B_B49E63F3C24E_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_DF093389_D522_2D96_418B_B49E63F3C24E_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_DF093389_D522_2D96_418B_B49E63F3C24E_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_DF093389_D522_2D96_418B_B49E63F3C24E_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_DF093389_D522_2D96_418B_B49E63F3C24E_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_DF093389_D522_2D96_418B_B49E63F3C24E_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_DF093389_D522_2D96_418B_B49E63F3C24E_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 180,
 "hfovMin": "150%",
 "pitch": 0,
 "hfov": 360,
 "hfovMax": 130,
 "partial": false,
 "class": "Panorama"
},
{
 "easing": "cubic_in_out",
 "id": "effect_F1E7599A_E679_B2FB_41E2_CB4F473D3B40",
 "duration": 1000,
 "class": "FadeInEffect"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "initialPosition": {
  "yaw": -7.3,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_A6602AAF_B665_5D5D_414A_ED1F9E335C73",
 "class": "PanoramaCamera"
},
{
 "loop": true,
 "audio": {
  "mp3Url": "media/audio_F9A511D2_EDC2_99FE_41DA_819E95EE51BB.mp3",
  "oggUrl": "media/audio_F9A511D2_EDC2_99FE_41DA_819E95EE51BB.ogg",
  "class": "AudioResource"
 },
 "id": "audio_F9A511D2_EDC2_99FE_41DA_819E95EE51BB",
 "data": {
  "label": "0606"
 },
 "autoplay": true,
 "class": "MediaAudio"
},
{
 "rotationY": 0,
 "hfov": 3.77,
 "popupMaxHeight": "60%",
 "rotationX": 0,
 "rotationZ": 0,
 "popupMaxWidth": "60%",
 "id": "popup_8C98FE42_9D2D_C2E5_41DF_0D1EAD01E28C",
 "hideEasing": "cubic_out",
 "image": {
  "levels": [
   {
    "url": "media/popup_8C98FE42_9D2D_C2E5_41DF_0D1EAD01E28C_0_1.png",
    "width": 1024,
    "height": 576,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "pitch": 10.19,
 "popupDistance": 100,
 "showDuration": 500,
 "hideDuration": 500,
 "showEasing": "cubic_in",
 "yaw": 36.06,
 "class": "PopupPanoramaOverlay"
},
{
 "easing": "cubic_in_out",
 "id": "effect_F1E349A9_E679_B2D9_41DC_D44827BAF0C5",
 "duration": 1000,
 "class": "FadeInEffect"
},
{
 "easing": "cubic_in_out",
 "id": "effect_F1E1F9A7_E679_B2C9_41CC_F0E20EE24FA4",
 "duration": 1000,
 "class": "FadeInEffect"
},
{
 "thumbnailUrl": "media/panorama_DF095ADC_D526_3FAE_41E8_221CDD95ABD4_t.jpg",
 "overlays": [
  "this.overlay_CFBC25F2_D718_032A_41E9_372969E11668",
  "this.overlay_CE509EFE_D718_011A_41DC_A37B8EA7204A",
  "this.overlay_084A1FFE_1B38_F368_41B7_6BFE49D5209E",
  "this.overlay_E270D143_ED41_B6DD_41D2_B1FCA9CE0A5C",
  "this.overlay_FC78B7AA_ED4E_B9AF_41CC_B757987C1E48",
  "this.overlay_FD118DD1_ED4E_89FD_41D9_A24D7F5C2841",
  "this.overlay_E24E2B7D_ED41_8AA5_41E1_C1F77CE9EF5B",
  "this.overlay_FCF0B18F_EDC2_B665_41E8_37553E1C975C",
  "this.popup_E750C153_F604_76CA_41E4_474C447C3E57",
  "this.popup_E7E6F278_F604_3AC6_41E5_EC28055128A1",
  "this.popup_E41D0776_F61C_3ACA_41E0_6E17BA1FFD39",
  "this.overlay_E7E32CAC_F61C_0E5E_41EA_86F30548955B",
  "this.popup_E7AABE57_F61C_0AC9_41CA_5240C5F8CC5E",
  "this.popup_E7F6672C_F61C_1A5E_41B8_6414A41B1AC0",
  "this.popup_E7F3FA07_F61C_0A4A_41E5_2288D9E1B920",
  "this.overlay_8D463D0C_9D25_C67C_41E2_1B20DE83FA84",
  "this.popup_8C98FE42_9D2D_C2E5_41DF_0D1EAD01E28C"
 ],
 "adjacentPanoramas": [
  {
   "backwardYaw": 94.83,
   "yaw": 30.57,
   "panorama": "this.panorama_DF095A4F_D521_DEAA_41E5_B09830FCA2B6",
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "backwardYaw": 17.89,
   "yaw": -149.71,
   "panorama": "this.panorama_DF14B7C6_D526_559A_41D4_10037B667899",
   "distance": 1,
   "class": "AdjacentPanorama"
  }
 ],
 "label": "Jabe Tengah",
 "id": "panorama_DF095ADC_D526_3FAE_41E8_221CDD95ABD4",
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_DF095ADC_D526_3FAE_41E8_221CDD95ABD4_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_DF095ADC_D526_3FAE_41E8_221CDD95ABD4_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_DF095ADC_D526_3FAE_41E8_221CDD95ABD4_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_DF095ADC_D526_3FAE_41E8_221CDD95ABD4_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_DF095ADC_D526_3FAE_41E8_221CDD95ABD4_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_DF095ADC_D526_3FAE_41E8_221CDD95ABD4_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_DF095ADC_D526_3FAE_41E8_221CDD95ABD4_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_DF095ADC_D526_3FAE_41E8_221CDD95ABD4_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_DF095ADC_D526_3FAE_41E8_221CDD95ABD4_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_DF095ADC_D526_3FAE_41E8_221CDD95ABD4_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_DF095ADC_D526_3FAE_41E8_221CDD95ABD4_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_DF095ADC_D526_3FAE_41E8_221CDD95ABD4_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_DF095ADC_D526_3FAE_41E8_221CDD95ABD4_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_DF095ADC_D526_3FAE_41E8_221CDD95ABD4_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_DF095ADC_D526_3FAE_41E8_221CDD95ABD4_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_DF095ADC_D526_3FAE_41E8_221CDD95ABD4_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_DF095ADC_D526_3FAE_41E8_221CDD95ABD4_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_DF095ADC_D526_3FAE_41E8_221CDD95ABD4_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_DF095ADC_D526_3FAE_41E8_221CDD95ABD4_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 180,
 "hfovMin": "150%",
 "pitch": 0,
 "hfov": 360,
 "hfovMax": 130,
 "mapLocations": [
  {
   "map": "this.map_65C54D3C_6BC1_BCE6_41C8_91C0EDF11345",
   "x": 308.25,
   "angle": 0,
   "y": 512.49,
   "class": "PanoramaMapLocation"
  }
 ],
 "partial": false,
 "class": "Panorama"
},
{
 "thumbnailUrl": "media/panorama_DF0B18B0_D522_3BF6_41E7_E97BDC8D73D5_t.jpg",
 "overlays": [
  "this.overlay_C47CC3F5_D708_072E_41D1_044AA8F7DA20",
  "this.overlay_3B674023_1304_D59A_4199_43A43971BBB0",
  "this.popup_3585CE71_1307_2A76_41A5_C16428D7FD8C",
  "this.overlay_0AC16DB8_1B39_B7E9_4199_1CAA02F61017",
  "this.overlay_E2EF0A6E_ED41_8AA7_41EB_E51795DAFE06",
  "this.popup_F88091C3_F752_42BA_41D8_BAE68EEED9DB"
 ],
 "adjacentPanoramas": [
  {
   "backwardYaw": 131.75,
   "yaw": -165.44,
   "panorama": "this.panorama_DF0BFC23_D522_7A9A_41E2_705D7646CD69",
   "distance": 1,
   "class": "AdjacentPanorama"
  }
 ],
 "label": "Tempat TIdur Raja",
 "id": "panorama_DF0B18B0_D522_3BF6_41E7_E97BDC8D73D5",
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_DF0B18B0_D522_3BF6_41E7_E97BDC8D73D5_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_DF0B18B0_D522_3BF6_41E7_E97BDC8D73D5_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_DF0B18B0_D522_3BF6_41E7_E97BDC8D73D5_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_DF0B18B0_D522_3BF6_41E7_E97BDC8D73D5_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_DF0B18B0_D522_3BF6_41E7_E97BDC8D73D5_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_DF0B18B0_D522_3BF6_41E7_E97BDC8D73D5_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_DF0B18B0_D522_3BF6_41E7_E97BDC8D73D5_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_DF0B18B0_D522_3BF6_41E7_E97BDC8D73D5_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_DF0B18B0_D522_3BF6_41E7_E97BDC8D73D5_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_DF0B18B0_D522_3BF6_41E7_E97BDC8D73D5_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_DF0B18B0_D522_3BF6_41E7_E97BDC8D73D5_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_DF0B18B0_D522_3BF6_41E7_E97BDC8D73D5_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_DF0B18B0_D522_3BF6_41E7_E97BDC8D73D5_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_DF0B18B0_D522_3BF6_41E7_E97BDC8D73D5_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_DF0B18B0_D522_3BF6_41E7_E97BDC8D73D5_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_DF0B18B0_D522_3BF6_41E7_E97BDC8D73D5_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_DF0B18B0_D522_3BF6_41E7_E97BDC8D73D5_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_DF0B18B0_D522_3BF6_41E7_E97BDC8D73D5_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_DF0B18B0_D522_3BF6_41E7_E97BDC8D73D5_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 180,
 "hfovMin": "150%",
 "pitch": 0,
 "hfov": 360,
 "hfovMax": 130,
 "partial": false,
 "class": "Panorama"
},
{
 "easing": "cubic_in_out",
 "id": "effect_E4056FE6_F752_5E7A_41E3_493CE4586822",
 "duration": 1000,
 "class": "FadeOutEffect"
},
{
 "rotationY": 0,
 "hfov": 8.28,
 "popupMaxHeight": "60%",
 "rotationX": 0,
 "rotationZ": 0,
 "popupMaxWidth": "60%",
 "id": "popup_E7C79148_F772_43B6_4172_B914AA9689FA",
 "hideEasing": "cubic_out",
 "image": {
  "levels": [
   {
    "url": "media/popup_E7C79148_F772_43B6_4172_B914AA9689FA_0_1.png",
    "width": 1024,
    "height": 576,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "pitch": 5.84,
 "popupDistance": 100,
 "showDuration": 500,
 "hideDuration": 500,
 "showEasing": "cubic_in",
 "yaw": -11.11,
 "class": "PopupPanoramaOverlay"
},
{
 "levels": [
  {
   "url": "media/popup_F9264665_F693_7FCB_41D9_56AC90E2B230_0_0.png",
   "width": 1920,
   "height": 1080,
   "class": "ImageResourceLevel"
  },
  {
   "url": "media/popup_F9264665_F693_7FCB_41D9_56AC90E2B230_0_1.png",
   "width": 1024,
   "height": 576,
   "class": "ImageResourceLevel"
  },
  {
   "url": "media/popup_F9264665_F693_7FCB_41D9_56AC90E2B230_0_2.png",
   "width": 512,
   "height": 288,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "ImageResource_F8F025C1_F751_C2B6_41C4_B170115F1984",
 "class": "ImageResource"
},
{
 "class": "Video",
 "label": "Masuk Ke Maskerdam",
 "scaleMode": "fit_inside",
 "width": 1920,
 "loop": false,
 "id": "video_2303E0B1_12FF_56F6_41B2_B996127200EB",
 "thumbnailUrl": "media/video_2303E0B1_12FF_56F6_41B2_B996127200EB_t.jpg",
 "height": 1080,
 "video": {
  "width": 1920,
  "mp4Url": "media/video_2303E0B1_12FF_56F6_41B2_B996127200EB.mp4",
  "height": 1080,
  "class": "VideoResource"
 }
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "initialPosition": {
  "yaw": 0,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_DF0AF60D_D522_76A9_41E3_6D08C1C16B94_camera",
 "class": "PanoramaCamera"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "initialPosition": {
  "yaw": 0,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_DF60EDC1_D522_D596_41E5_9A31123BC0B0_camera",
 "class": "PanoramaCamera"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "initialPosition": {
  "yaw": 0,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_DF09427F_D522_2F69_41E4_B7F711B0C20C_camera",
 "class": "PanoramaCamera"
},
{
 "easing": "cubic_in_out",
 "id": "effect_E406CD0A_F75E_43CA_41E1_BBCE00732435",
 "duration": 1000,
 "class": "FadeOutEffect"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "initialPosition": {
  "yaw": 11.71,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_B9F96984_B665_5F4C_41E5_ED61989447B0",
 "class": "PanoramaCamera"
},
{
 "rotationY": 0,
 "hfov": 9.92,
 "showEasing": "cubic_in",
 "hideEasing": "cubic_out",
 "rotationZ": 0,
 "popupMaxWidth": "50%",
 "id": "popup_3CE67610_131B_3DB6_4185_1A27BD411A2A",
 "rotationX": 0,
 "class": "PopupPanoramaOverlay",
 "loop": false,
 "pitch": 1.81,
 "popupDistance": 100,
 "showDuration": 500,
 "hideDuration": 500,
 "popupMaxHeight": "50%",
 "yaw": -137.72,
 "autoplay": true,
 "video": {
  "width": 1920,
  "mp4Url": "media/video_3C0E25A7_131B_3E9A_41B2_644B2E6D05A6.mp4",
  "height": 1080,
  "class": "VideoResource"
 }
},
{
 "items": [
  {
   "media": "this.panorama_DF14B7C6_D526_559A_41D4_10037B667899",
   "end": "this.setComponentVisibility(this.Image_F21B5780_E6C8_DEC7_41D4_D58CD4D9DCBD, false, -1, this.effect_F27B0280_EECB_0077_41EB_C02CAC477723, 'hideEffect', false)",
   "start": "this.keepComponentVisibility(this.Image_F21B5780_E6C8_DEC7_41D4_D58CD4D9DCBD, true)",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1); this.keepComponentVisibility(this.Image_F21B5780_E6C8_DEC7_41D4_D58CD4D9DCBD, false); this.setComponentVisibility(this.Image_F21B5780_E6C8_DEC7_41D4_D58CD4D9DCBD, true, -1, this.effect_F27B2280_EECB_0077_41CF_1452A9DB10A6, 'showEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_DF14B7C6_D526_559A_41D4_10037B667899_camera",
   "class": "PanoramaPlayListItem"
  },
  "this.PanoramaPlayListItem_B888987A_B665_5DC7_41D2_F4B21C579137",
  {
   "media": "this.panorama_DF095A4F_D521_DEAA_41E5_B09830FCA2B6",
   "end": "this.setComponentVisibility(this.Image_F23672C6_E649_564A_41EC_CD3F30DA5B23, false, -1, this.effect_F1E7D99B_E679_B2F9_41EC_9FCCFC120248, 'hideEffect', false)",
   "start": "this.keepComponentVisibility(this.Image_F23672C6_E649_564A_41EC_CD3F30DA5B23, true)",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3); this.keepComponentVisibility(this.Image_F23672C6_E649_564A_41EC_CD3F30DA5B23, false); this.setComponentVisibility(this.Image_F23672C6_E649_564A_41EC_CD3F30DA5B23, true, -1, this.effect_F1E7E99B_E679_B2F9_41D8_394AD35AF67B, 'showEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_DF095A4F_D521_DEAA_41E5_B09830FCA2B6_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_DF0968AD_D521_DBEE_41E8_53FAFFC84B8C",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_DF0968AD_D521_DBEE_41E8_53FAFFC84B8C_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_DF0AF60D_D522_76A9_41E3_6D08C1C16B94",
   "end": "this.setComponentVisibility(this.Image_F208C464_E649_524F_41EC_07C9C78C6A02, false, -1, this.effect_F3F3B931_E649_F3C6_41A0_555BC55AB8F2, 'hideEffect', false)",
   "start": "this.keepComponentVisibility(this.Image_F208C464_E649_524F_41EC_07C9C78C6A02, true)",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5); this.keepComponentVisibility(this.Image_F208C464_E649_524F_41EC_07C9C78C6A02, false); this.setComponentVisibility(this.Image_F208C464_E649_524F_41EC_07C9C78C6A02, true, -1, this.effect_F1E6299C_E679_B2FF_41D5_17A0CD4AD434, 'showEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_DF0AF60D_D522_76A9_41E3_6D08C1C16B94_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_DF0AA7F2_D522_357A_41E7_BB88309A039D",
   "end": "this.setComponentVisibility(this.Image_F208C464_E649_524F_41EC_07C9C78C6A02, false, -1, this.effect_F1F11586_E649_D2CB_41DC_E565D30712B1, 'hideEffect', false)",
   "start": "this.keepComponentVisibility(this.Image_F208C464_E649_524F_41EC_07C9C78C6A02, true)",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6); this.keepComponentVisibility(this.Image_F208C464_E649_524F_41EC_07C9C78C6A02, false); this.setComponentVisibility(this.Image_F208C464_E649_524F_41EC_07C9C78C6A02, true, -1, this.effect_F1E6B99C_E679_B2FF_41E5_032D8D6B98D1, 'showEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_DF0AA7F2_D522_357A_41E7_BB88309A039D_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_DF0AF41D_D522_2AA9_41EA_37FF14B377FE",
   "end": "this.setComponentVisibility(this.Image_F208C464_E649_524F_41EC_07C9C78C6A02, false, -1, this.effect_F1BF7C0C_E679_B1DF_41C3_9AF442371265, 'hideEffect', false)",
   "start": "this.keepComponentVisibility(this.Image_F208C464_E649_524F_41EC_07C9C78C6A02, true)",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7); this.keepComponentVisibility(this.Image_F208C464_E649_524F_41EC_07C9C78C6A02, false); this.setComponentVisibility(this.Image_F208C464_E649_524F_41EC_07C9C78C6A02, true, -1, this.effect_F1E1499D_E679_B2F9_41E0_DBEE7A3BC874, 'showEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_DF0AF41D_D522_2AA9_41EA_37FF14B377FE_camera",
   "class": "PanoramaPlayListItem"
  },
  "this.PanoramaPlayListItem_B88DB87A_B665_5DC7_41D1_95821BC21EF5",
  "this.PanoramaPlayListItem_B88D087A_B665_5DC7_41D7_C6753766CE0B",
  "this.PanoramaPlayListItem_B88C787A_B665_5DC7_41D9_BC72C1524E59",
  {
   "media": "this.panorama_DF0B714D_D522_EAAE_41DB_DAFE02AA8C1C",
   "end": "this.setComponentVisibility(this.Image_F2528CB9_E649_5239_41D5_60765A8BAF32, false, -1, this.effect_F1E029A8_E679_B2C7_41D2_B0FAE0348311, 'hideEffect', false)",
   "start": "this.keepComponentVisibility(this.Image_F2528CB9_E649_5239_41D5_60765A8BAF32, true)",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11); this.keepComponentVisibility(this.Image_F2528CB9_E649_5239_41D5_60765A8BAF32, false); this.setComponentVisibility(this.Image_F2528CB9_E649_5239_41D5_60765A8BAF32, true, -1, this.effect_F1E049A8_E679_B2C7_41D5_4262D95BF530, 'showEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_DF0B714D_D522_EAAE_41DB_DAFE02AA8C1C_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_DF0BAF14_D522_36BE_4182_2D68BF6843DE",
   "end": "this.setComponentVisibility(this.Image_F24BE2FB_E649_D639_41EC_6C57AFF379C5, false, -1, this.effect_F1E0A9A9_E679_B2D9_41B6_6146C79DC054, 'hideEffect', false)",
   "start": "this.keepComponentVisibility(this.Image_F24BE2FB_E649_D639_41EC_6C57AFF379C5, true)",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 12); this.keepComponentVisibility(this.Image_F24BE2FB_E649_D639_41EC_6C57AFF379C5, false); this.setComponentVisibility(this.Image_F24BE2FB_E649_D639_41EC_6C57AFF379C5, true, -1, this.effect_F1E0D9A8_E679_B2D8_41CD_47CBDE6D386F, 'showEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_DF0BAF14_D522_36BE_4182_2D68BF6843DE_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_DF0BFC23_D522_7A9A_41E2_705D7646CD69",
   "end": "this.setComponentVisibility(this.Image_F25988F0_E64B_5247_41E0_7C12462F1412, false, -1, this.effect_F1E319A9_E679_B2D9_41E1_A19C72DCD97A, 'hideEffect', false)",
   "start": "this.keepComponentVisibility(this.Image_F25988F0_E64B_5247_41E0_7C12462F1412, true)",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 12, 13); this.keepComponentVisibility(this.Image_F25988F0_E64B_5247_41E0_7C12462F1412, false); this.setComponentVisibility(this.Image_F25988F0_E64B_5247_41E0_7C12462F1412, true, -1, this.effect_F1E349A9_E679_B2D9_41DC_D44827BAF0C5, 'showEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_DF0BFC23_D522_7A9A_41E2_705D7646CD69_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_DF0B7A68_D522_5E96_41E4_2FA8606D5645",
   "end": "this.setComponentVisibility(this.Image_F2434354_E649_764F_41BC_C63404D9D8E7, false, -1, this.effect_F1E3A9AA_E679_B2DB_41E4_32904A66CE81, 'hideEffect', false)",
   "start": "this.keepComponentVisibility(this.Image_F2434354_E649_764F_41BC_C63404D9D8E7, true)",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 13, 14); this.keepComponentVisibility(this.Image_F2434354_E649_764F_41BC_C63404D9D8E7, false); this.setComponentVisibility(this.Image_F2434354_E649_764F_41BC_C63404D9D8E7, true, -1, this.effect_F1E3C9AA_E679_B2DB_41E2_F95924AFEC60, 'showEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_DF0B7A68_D522_5E96_41E4_2FA8606D5645_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_DF0B18B0_D522_3BF6_41E7_E97BDC8D73D5",
   "end": "this.setComponentVisibility(this.Image_F27F3E84_E648_EECE_41BB_679F3C0A06B5, false, -1, this.effect_F1E239AA_E679_B2DB_41E2_F8957BBAC1B9, 'hideEffect', false)",
   "start": "this.keepComponentVisibility(this.Image_F27F3E84_E648_EECE_41BB_679F3C0A06B5, true)",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 14, 15); this.keepComponentVisibility(this.Image_F27F3E84_E648_EECE_41BB_679F3C0A06B5, false); this.setComponentVisibility(this.Image_F27F3E84_E648_EECE_41BB_679F3C0A06B5, true, -1, this.effect_F1E259AA_E679_B2DB_41E7_8EE1EE8BE1ED, 'showEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_DF0B18B0_D522_3BF6_41E7_E97BDC8D73D5_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_DF08C6FA_D523_D76A_41D5_7F86EC1FD1C3",
   "end": "this.setComponentVisibility(this.Image_F25988F0_E64B_5247_41E0_7C12462F1412, false, -1, this.effect_E4066CFA_F75E_424A_41EE_14774651BB8C, 'hideEffect', false)",
   "start": "this.keepComponentVisibility(this.Image_F25988F0_E64B_5247_41E0_7C12462F1412, true)",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 15, 16); this.keepComponentVisibility(this.Image_F25988F0_E64B_5247_41E0_7C12462F1412, false); this.setComponentVisibility(this.Image_F25988F0_E64B_5247_41E0_7C12462F1412, true, -1, this.effect_F1E2E9AB_E679_B2D9_41E0_3F144649AE49, 'showEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_DF08C6FA_D523_D76A_41D5_7F86EC1FD1C3_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_DF08F593_D523_F5BA_41E5_3AAEBE3AF892",
   "end": "this.setComponentVisibility(this.Image_F25988F0_E64B_5247_41E0_7C12462F1412, false, -1, this.effect_3CB32CB4_2D32_3E69_4142_99A09103B214, 'hideEffect', false)",
   "start": "this.keepComponentVisibility(this.Image_F25988F0_E64B_5247_41E0_7C12462F1412, true)",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 16, 17); this.keepComponentVisibility(this.Image_F25988F0_E64B_5247_41E0_7C12462F1412, false); this.setComponentVisibility(this.Image_F25988F0_E64B_5247_41E0_7C12462F1412, true, -1, this.effect_F1ED59AB_E679_B2D8_41D1_F2B365FB7CEF, 'showEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_DF08F593_D523_F5BA_41E5_3AAEBE3AF892_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_DF08E4A2_D523_EB9A_41E5_F673F160A0A8",
   "end": "this.setComponentVisibility(this.Image_F25988F0_E64B_5247_41E0_7C12462F1412, false, -1, this.effect_E406CD0A_F75E_43CA_41E1_BBCE00732435, 'hideEffect', false)",
   "start": "this.keepComponentVisibility(this.Image_F25988F0_E64B_5247_41E0_7C12462F1412, true)",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 17, 18); this.keepComponentVisibility(this.Image_F25988F0_E64B_5247_41E0_7C12462F1412, false); this.setComponentVisibility(this.Image_F25988F0_E64B_5247_41E0_7C12462F1412, true, -1, this.effect_F1EDF9AC_E679_B2DF_4193_BEF20561D360, 'showEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_DF08E4A2_D523_EB9A_41E5_F673F160A0A8_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_DF093389_D522_2D96_418B_B49E63F3C24E",
   "end": "this.setComponentVisibility(this.Image_F25988F0_E64B_5247_41E0_7C12462F1412, false, -1, this.effect_F1E2D9AD_E679_B2D9_41DD_FE51FC8681A7, 'hideEffect', false)",
   "start": "this.keepComponentVisibility(this.Image_F25988F0_E64B_5247_41E0_7C12462F1412, true)",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 18, 19); this.keepComponentVisibility(this.Image_F25988F0_E64B_5247_41E0_7C12462F1412, false); this.setComponentVisibility(this.Image_F25988F0_E64B_5247_41E0_7C12462F1412, true, -1, this.effect_F1E2E9AD_E679_B2D9_41D2_9E3BB025401C, 'showEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_DF093389_D522_2D96_418B_B49E63F3C24E_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_DF09427F_D522_2F69_41E4_B7F711B0C20C",
   "end": "this.setComponentVisibility(this.Image_F25988F0_E64B_5247_41E0_7C12462F1412, false, -1, this.effect_F1ED59AE_E679_B2DB_41D6_F8949766EBA0, 'hideEffect', false)",
   "start": "this.keepComponentVisibility(this.Image_F25988F0_E64B_5247_41E0_7C12462F1412, true)",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 19, 20); this.keepComponentVisibility(this.Image_F25988F0_E64B_5247_41E0_7C12462F1412, false); this.setComponentVisibility(this.Image_F25988F0_E64B_5247_41E0_7C12462F1412, true, -1, this.effect_F1ED69AD_E679_B2D9_41C6_2B81F1D6AA5D, 'showEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_DF09427F_D522_2F69_41E4_B7F711B0C20C_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_DF091129_D522_6A96_41CB_A7A82D7D5CF4",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 20, 21)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_DF091129_D522_6A96_41CB_A7A82D7D5CF4_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_DF09605E_D522_6AAA_41E6_B94D5A810C57",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 21, 22)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_DF09605E_D522_6AAA_41E6_B94D5A810C57_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_DF09300A_D522_2AAB_41C0_2217A91877F7",
   "end": "this.setComponentVisibility(this.Image_F2412C1F_E64B_51F9_41EC_1CBA4E61E617, false, -1, this.effect_F1EC49AF_E679_B2D9_41D9_1F72127D31B8, 'hideEffect', false)",
   "start": "this.keepComponentVisibility(this.Image_F2412C1F_E64B_51F9_41EC_1CBA4E61E617, true)",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 22, 23); this.keepComponentVisibility(this.Image_F2412C1F_E64B_51F9_41EC_1CBA4E61E617, false); this.setComponentVisibility(this.Image_F2412C1F_E64B_51F9_41EC_1CBA4E61E617, true, -1, this.effect_F1EC69AE_E679_B2DB_41EA_DBEBD11F16F9, 'showEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_DF09300A_D522_2AAB_41C0_2217A91877F7_camera",
   "class": "PanoramaPlayListItem"
  },
  "this.PanoramaPlayListItem_B8959889_B665_5D44_41A4_E12E7F895EC6",
  "this.PanoramaPlayListItem_B894A889_B665_5D44_41D4_1B8D73B53EA0",
  "this.PanoramaPlayListItem_B8940889_B665_5D44_41D4_893851651DEA",
  "this.PanoramaPlayListItem_B8979889_B665_5D44_41DB_49B023988F24",
  {
   "media": "this.panorama_DF688AE7_D522_3F9A_41B2_CE1EBAC5DAF0",
   "end": "this.setComponentVisibility(this.Image_F25F581F_E64B_51F9_41EB_5A451DE584F3, false, -1, this.effect_E4050FE6_F752_5E7A_41A4_343B7AE4E316, 'hideEffect', false)",
   "start": "this.keepComponentVisibility(this.Image_F25F581F_E64B_51F9_41EB_5A451DE584F3, true)",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 27, 28); this.keepComponentVisibility(this.Image_F25F581F_E64B_51F9_41EB_5A451DE584F3, false); this.setComponentVisibility(this.Image_F25F581F_E64B_51F9_41EB_5A451DE584F3, true, -1, this.effect_E4069D0A_F75E_43CA_41D8_60C5BBE48AD4, 'showEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_DF688AE7_D522_3F9A_41B2_CE1EBAC5DAF0_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.video_30DFE58F_1307_5EA9_4188_54F3B3C4462E",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.mainPlayList, 28, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.mainPlayList, 28)",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setEndToItemIndex(this.mainPlayList, 28, 29)",
   "player": "this.MainViewerVideoPlayer",
   "class": "VideoPlayListItem"
  },
  {
   "media": "this.video_31307D64_1305_2F9F_4183_6128BE5FB45C",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.mainPlayList, 29, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.mainPlayList, 29)",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setEndToItemIndex(this.mainPlayList, 29, 30)",
   "player": "this.MainViewerVideoPlayer",
   "class": "VideoPlayListItem"
  },
  {
   "media": "this.video_3BF8CD99_1305_6EA9_41A3_97DBAA5790E4",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.mainPlayList, 30, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.mainPlayList, 30)",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setEndToItemIndex(this.mainPlayList, 30, 31)",
   "player": "this.MainViewerVideoPlayer",
   "class": "VideoPlayListItem"
  },
  {
   "media": "this.video_3C0E25A7_131B_3E9A_41B2_644B2E6D05A6",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.mainPlayList, 31, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.mainPlayList, 31)",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setEndToItemIndex(this.mainPlayList, 31, 32)",
   "player": "this.MainViewerVideoPlayer",
   "class": "VideoPlayListItem"
  },
  {
   "media": "this.video_23846E1D_1304_EDAE_41A7_F9A78FBD6DBF",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.mainPlayList, 32, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.mainPlayList, 32)",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setEndToItemIndex(this.mainPlayList, 32, 33)",
   "player": "this.MainViewerVideoPlayer",
   "class": "VideoPlayListItem"
  },
  {
   "media": "this.video_22D7311F_12FF_37A9_41A0_72053C56BDC0",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.mainPlayList, 33, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.mainPlayList, 33)",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setEndToItemIndex(this.mainPlayList, 33, 34)",
   "player": "this.MainViewerVideoPlayer",
   "class": "VideoPlayListItem"
  },
  {
   "media": "this.video_2303E0B1_12FF_56F6_41B2_B996127200EB",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.mainPlayList, 34, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.mainPlayList, 34)",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setEndToItemIndex(this.mainPlayList, 34, 35)",
   "player": "this.MainViewerVideoPlayer",
   "class": "VideoPlayListItem"
  },
  {
   "media": "this.video_20934DBA_151B_2EEA_418E_EF3DFDEACB48",
   "end": "this.trigger('tourEnded')",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.mainPlayList, 35, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.mainPlayList, 35)",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setEndToItemIndex(this.mainPlayList, 35, 0)",
   "player": "this.MainViewerVideoPlayer",
   "class": "VideoPlayListItem"
  }
 ],
 "id": "mainPlayList",
 "class": "PlayList"
},
{
 "easing": "cubic_in_out",
 "id": "effect_F1ED59AE_E679_B2DB_41D6_F8949766EBA0",
 "duration": 1000,
 "class": "FadeOutEffect"
},
{
 "levels": [
  {
   "url": "media/popup_F96A9BDD_F69D_D4FA_41DD_35686EE58D35_0_0.png",
   "width": 1920,
   "height": 1080,
   "class": "ImageResourceLevel"
  },
  {
   "url": "media/popup_F96A9BDD_F69D_D4FA_41DD_35686EE58D35_0_1.png",
   "width": 1024,
   "height": 576,
   "class": "ImageResourceLevel"
  },
  {
   "url": "media/popup_F96A9BDD_F69D_D4FA_41DD_35686EE58D35_0_2.png",
   "width": 512,
   "height": 288,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "ImageResource_F8F4E5C8_F751_C2B6_41E0_D756E541BEC6",
 "class": "ImageResource"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "initialPosition": {
  "yaw": 0,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_DF0B714D_D522_EAAE_41DB_DAFE02AA8C1C_camera",
 "class": "PanoramaCamera"
},
{
 "rotationY": 0,
 "hfov": 2.77,
 "popupMaxHeight": "60%",
 "rotationX": 0,
 "rotationZ": 0,
 "popupMaxWidth": "60%",
 "id": "popup_F9C9C64B_F604_1ADA_41D7_1ADF5FBC2C73",
 "hideEasing": "cubic_out",
 "image": {
  "levels": [
   {
    "url": "media/popup_F9C9C64B_F604_1ADA_41D7_1ADF5FBC2C73_0_1.png",
    "width": 1024,
    "height": 576,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "pitch": 7.8,
 "popupDistance": 100,
 "showDuration": 500,
 "hideDuration": 500,
 "showEasing": "cubic_in",
 "yaw": 60.24,
 "class": "PopupPanoramaOverlay"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "initialPosition": {
  "yaw": 174.73,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_B93F5E6C_B665_55DC_41C5_AAA0AD4D26AF",
 "class": "PanoramaCamera"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "initialPosition": {
  "yaw": -85.17,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_B8A07CD4_B665_56CC_41D8_D7B842263DCD",
 "class": "PanoramaCamera"
},
{
 "levels": [
  {
   "url": "media/popup_E7664036_F74E_41DA_41AF_D016E718C9C2_0_0.png",
   "width": 1920,
   "height": 1080,
   "class": "ImageResourceLevel"
  },
  {
   "url": "media/popup_E7664036_F74E_41DA_41AF_D016E718C9C2_0_1.png",
   "width": 1024,
   "height": 576,
   "class": "ImageResourceLevel"
  },
  {
   "url": "media/popup_E7664036_F74E_41DA_41AF_D016E718C9C2_0_2.png",
   "width": 512,
   "height": 288,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "ImageResource_EF1B8955_F7B3_C25E_41E7_F1DA3839632D",
 "class": "ImageResource"
},
{
 "levels": [
  {
   "url": "media/popup_F8ED935C_F752_C64E_41E5_0F7AE6839551_0_0.png",
   "width": 1920,
   "height": 1080,
   "class": "ImageResourceLevel"
  },
  {
   "url": "media/popup_F8ED935C_F752_C64E_41E5_0F7AE6839551_0_1.png",
   "width": 1024,
   "height": 576,
   "class": "ImageResourceLevel"
  },
  {
   "url": "media/popup_F8ED935C_F752_C64E_41E5_0F7AE6839551_0_2.png",
   "width": 512,
   "height": 288,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "ImageResource_EF7B0916_F7B3_C3DA_41EB_68FDE451ABFD",
 "class": "ImageResource"
},
{
 "easing": "cubic_in_out",
 "id": "effect_F1E259AA_E679_B2DB_41E7_8EE1EE8BE1ED",
 "duration": 1000,
 "class": "FadeInEffect"
},
{
 "buttonPlayPause": "this.Button_0B741BB5_1872_D04B_41B4_A1CF013C97B0",
 "id": "MainViewerVideoPlayer",
 "viewerArea": "this.MainViewer",
 "displayPlaybackBar": true,
 "class": "VideoPlayer"
},
{
 "rotationY": 0,
 "hfov": 12.76,
 "popupMaxHeight": "60%",
 "rotationX": 0,
 "rotationZ": 0,
 "popupMaxWidth": "60%",
 "id": "popup_F88091C3_F752_42BA_41D8_BAE68EEED9DB",
 "hideEasing": "cubic_out",
 "image": {
  "levels": [
   {
    "url": "media/popup_F88091C3_F752_42BA_41D8_BAE68EEED9DB_0_1.png",
    "width": 1024,
    "height": 576,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "pitch": -5.73,
 "popupDistance": 100,
 "showDuration": 500,
 "hideDuration": 500,
 "showEasing": "cubic_in",
 "yaw": 101.11,
 "class": "PopupPanoramaOverlay"
},
{
 "thumbnailUrl": "media/panorama_DF6F0B8F_D522_DDA9_41D6_D0B5D979483D_t.jpg",
 "overlays": [
  "this.overlay_F72A1C2B_D778_013A_41E8_842DF90AB09F",
  "this.overlay_C898FCB5_D778_012E_41E7_9C2F0B428C8C",
  "this.overlay_095F9153_1B29_4CBF_41B9_84252B023885",
  "this.overlay_FD77CD6A_ED42_8EAF_41CA_40E4F469498E",
  "this.overlay_E2EBCD5F_ED47_8EE6_41DF_F3E48F45F715",
  "this.overlay_E22BE497_ED46_BE64_41DB_2B85F128F49A",
  "this.popup_E76B42A0_F771_C6F6_41D0_13870F845D3B",
  "this.popup_E7090508_F772_43C3_41E6_FB3DCBCADC28",
  "this.popup_E7F49273_F772_465A_41D1_E40E63484A75",
  "this.overlay_E3A30635_F752_41DE_41DC_5F7E29468841",
  "this.popup_E3D4E80F_F752_C1CA_41E1_6844F1334909"
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_DF09300A_D522_2AAB_41C0_2217A91877F7",
   "class": "AdjacentPanorama"
  },
  {
   "backwardYaw": 173.64,
   "yaw": -5.27,
   "panorama": "this.panorama_DF688AE7_D522_3F9A_41B2_CE1EBAC5DAF0",
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "backwardYaw": 173.64,
   "yaw": -5.27,
   "panorama": "this.panorama_DF688AE7_D522_3F9A_41B2_CE1EBAC5DAF0",
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "backwardYaw": -103.96,
   "yaw": 176.21,
   "panorama": "this.panorama_DF614CA2_D522_FB9A_41E1_A0F7B63CBAED",
   "distance": 1,
   "class": "AdjacentPanorama"
  }
 ],
 "label": "Depan Bale Publik",
 "id": "panorama_DF6F0B8F_D522_DDA9_41D6_D0B5D979483D",
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_DF6F0B8F_D522_DDA9_41D6_D0B5D979483D_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_DF6F0B8F_D522_DDA9_41D6_D0B5D979483D_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_DF6F0B8F_D522_DDA9_41D6_D0B5D979483D_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_DF6F0B8F_D522_DDA9_41D6_D0B5D979483D_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_DF6F0B8F_D522_DDA9_41D6_D0B5D979483D_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_DF6F0B8F_D522_DDA9_41D6_D0B5D979483D_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_DF6F0B8F_D522_DDA9_41D6_D0B5D979483D_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_DF6F0B8F_D522_DDA9_41D6_D0B5D979483D_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_DF6F0B8F_D522_DDA9_41D6_D0B5D979483D_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_DF6F0B8F_D522_DDA9_41D6_D0B5D979483D_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_DF6F0B8F_D522_DDA9_41D6_D0B5D979483D_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_DF6F0B8F_D522_DDA9_41D6_D0B5D979483D_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_DF6F0B8F_D522_DDA9_41D6_D0B5D979483D_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_DF6F0B8F_D522_DDA9_41D6_D0B5D979483D_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_DF6F0B8F_D522_DDA9_41D6_D0B5D979483D_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_DF6F0B8F_D522_DDA9_41D6_D0B5D979483D_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_DF6F0B8F_D522_DDA9_41D6_D0B5D979483D_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_DF6F0B8F_D522_DDA9_41D6_D0B5D979483D_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_DF6F0B8F_D522_DDA9_41D6_D0B5D979483D_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 180,
 "hfovMin": "150%",
 "pitch": 0,
 "hfov": 360,
 "hfovMax": 130,
 "mapLocations": [
  {
   "map": "this.map_65C54D3C_6BC1_BCE6_41C8_91C0EDF11345",
   "x": 889.31,
   "angle": 0,
   "y": 169.47,
   "class": "PanoramaMapLocation"
  }
 ],
 "partial": false,
 "class": "Panorama"
},
{
 "easing": "cubic_in_out",
 "id": "effect_F1F11586_E649_D2CB_41DC_E565D30712B1",
 "duration": 1000,
 "class": "FadeOutEffect"
},
{
 "levels": [
  {
   "url": "media/popup_E7FF0CC9_F74E_42B6_41DC_67E697300E53_0_0.png",
   "width": 1920,
   "height": 1080,
   "class": "ImageResourceLevel"
  },
  {
   "url": "media/popup_E7FF0CC9_F74E_42B6_41DC_67E697300E53_0_1.png",
   "width": 1024,
   "height": 576,
   "class": "ImageResourceLevel"
  },
  {
   "url": "media/popup_E7FF0CC9_F74E_42B6_41DC_67E697300E53_0_2.png",
   "width": 512,
   "height": 288,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "ImageResource_EF1AB965_F7B3_C27E_41C8_054514C5258E",
 "class": "ImageResource"
},
{
 "rotationY": 0,
 "hfov": 8.57,
 "showEasing": "cubic_in",
 "hideEasing": "cubic_out",
 "rotationZ": 0,
 "popupMaxWidth": "50%",
 "id": "popup_3C21C69D_1305_5AA9_41A8_2F10C20CC622",
 "rotationX": 0,
 "class": "PopupPanoramaOverlay",
 "loop": false,
 "pitch": 4.54,
 "popupDistance": 100,
 "showDuration": 500,
 "hideDuration": 500,
 "popupMaxHeight": "50%",
 "yaw": -36.4,
 "autoplay": true,
 "video": {
  "width": 2986,
  "mp4Url": "media/video_23846E1D_1304_EDAE_41A7_F9A78FBD6DBF.mp4",
  "height": 1680,
  "class": "VideoResource"
 }
},
{
 "levels": [
  {
   "url": "media/popup_F891157B_F751_C24A_41EC_CC062028D60B_0_0.png",
   "width": 1920,
   "height": 1080,
   "class": "ImageResourceLevel"
  },
  {
   "url": "media/popup_F891157B_F751_C24A_41EC_CC062028D60B_0_1.png",
   "width": 1024,
   "height": 576,
   "class": "ImageResourceLevel"
  },
  {
   "url": "media/popup_F891157B_F751_C24A_41EC_CC062028D60B_0_2.png",
   "width": 512,
   "height": 288,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "ImageResource_EF7AA916_F7B3_C3DA_41DC_42F2668B68FA",
 "class": "ImageResource"
},
{
 "easing": "cubic_in_out",
 "id": "effect_F1ED59AB_E679_B2D8_41D1_F2B365FB7CEF",
 "duration": 1000,
 "class": "FadeInEffect"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "initialPosition": {
  "yaw": 88.64,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_B9EA4EDA_B665_52C4_41A6_6886F4C3D7C5",
 "class": "PanoramaCamera"
},
{
 "rotationY": 0,
 "hfov": 12.9,
 "popupMaxHeight": "95%",
 "rotationX": 0,
 "rotationZ": 0,
 "popupMaxWidth": "95%",
 "id": "popup_3AE55A46_133C_F59A_41A3_E48781F5A841",
 "hideEasing": "cubic_out",
 "image": {
  "levels": [
   {
    "url": "media/popup_3AE55A46_133C_F59A_41A3_E48781F5A841_0_2.jpg",
    "width": 1024,
    "height": 461,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "pitch": 19.48,
 "popupDistance": 100,
 "showDuration": 500,
 "hideDuration": 500,
 "showEasing": "cubic_in",
 "yaw": 98.62,
 "class": "PopupPanoramaOverlay"
},
{
 "class": "Video",
 "label": "Kolam",
 "scaleMode": "fit_inside",
 "width": 2986,
 "loop": false,
 "id": "video_23846E1D_1304_EDAE_41A7_F9A78FBD6DBF",
 "thumbnailUrl": "media/video_23846E1D_1304_EDAE_41A7_F9A78FBD6DBF_t.jpg",
 "height": 1680,
 "video": {
  "width": 2986,
  "mp4Url": "media/video_23846E1D_1304_EDAE_41A7_F9A78FBD6DBF.mp4",
  "height": 1680,
  "class": "VideoResource"
 }
},
{
 "easing": "cubic_in_out",
 "id": "effect_F1BF7C0C_E679_B1DF_41C3_9AF442371265",
 "duration": 1000,
 "class": "FadeOutEffect"
},
{
 "rotationY": 0,
 "hfov": 15.68,
 "popupMaxHeight": "60%",
 "rotationX": 0,
 "rotationZ": 0,
 "popupMaxWidth": "60%",
 "id": "popup_E7F6F2D2_F752_465B_41EE_91B264CBC794",
 "hideEasing": "cubic_out",
 "image": {
  "levels": [
   {
    "url": "media/popup_E7F6F2D2_F752_465B_41EE_91B264CBC794_0_1.png",
    "width": 1024,
    "height": 576,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "pitch": -3.33,
 "popupDistance": 100,
 "showDuration": 500,
 "hideDuration": 500,
 "showEasing": "cubic_in",
 "yaw": -9.36,
 "class": "PopupPanoramaOverlay"
},
{
 "easing": "cubic_in_out",
 "id": "effect_3CB32CB4_2D32_3E69_4142_99A09103B214",
 "duration": 1000,
 "class": "FadeOutEffect"
},
{
 "thumbnailUrl": "media/panorama_DF0AF41D_D522_2AA9_41EA_37FF14B377FE_t.jpg",
 "overlays": [
  "this.overlay_F4592328_E7A7_15B7_41C1_2C1F3745C640",
  "this.overlay_F2AF5C9B_E7A9_0C8A_41EA_58D478C0001D",
  "this.overlay_0AA1D671_1B38_F57B_41B3_1E49320D4B25",
  "this.overlay_FD16FDA8_EDDE_89AB_41B5_20CFE6BD2555",
  "this.popup_F89EFE78_F752_7E56_41D6_D9898D22BC4E",
  "this.overlay_8DE0FC7A_9D3C_C6A4_41D8_0395B3C8516E",
  "this.overlay_8D948419_9D3D_C667_41E2_903E610E3900",
  "this.overlay_8C72CB11_9D3C_4264_41DE_A882A670EE94",
  "this.popup_8C5811A5_9D3C_C1AC_41E2_898EC55DF924",
  "this.popup_8DB67918_9D24_4E64_41DE_C052AA5B9BA4",
  "this.popup_8C801360_9D5C_42A5_419C_D68B2037FE16"
 ],
 "adjacentPanoramas": [
  {
   "backwardYaw": -168.59,
   "yaw": 3.31,
   "panorama": "this.panorama_DF0A8329_D522_2E96_41DA_0346C09AF2A0",
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "backwardYaw": 102.34,
   "yaw": -90,
   "panorama": "this.panorama_DF0AA7F2_D522_357A_41E7_BB88309A039D",
   "distance": 1,
   "class": "AdjacentPanorama"
  }
 ],
 "label": "Menuju Bale Pamedasaan",
 "id": "panorama_DF0AF41D_D522_2AA9_41EA_37FF14B377FE",
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_DF0AF41D_D522_2AA9_41EA_37FF14B377FE_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_DF0AF41D_D522_2AA9_41EA_37FF14B377FE_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_DF0AF41D_D522_2AA9_41EA_37FF14B377FE_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_DF0AF41D_D522_2AA9_41EA_37FF14B377FE_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_DF0AF41D_D522_2AA9_41EA_37FF14B377FE_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_DF0AF41D_D522_2AA9_41EA_37FF14B377FE_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_DF0AF41D_D522_2AA9_41EA_37FF14B377FE_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_DF0AF41D_D522_2AA9_41EA_37FF14B377FE_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_DF0AF41D_D522_2AA9_41EA_37FF14B377FE_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_DF0AF41D_D522_2AA9_41EA_37FF14B377FE_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_DF0AF41D_D522_2AA9_41EA_37FF14B377FE_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_DF0AF41D_D522_2AA9_41EA_37FF14B377FE_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_DF0AF41D_D522_2AA9_41EA_37FF14B377FE_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_DF0AF41D_D522_2AA9_41EA_37FF14B377FE_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_DF0AF41D_D522_2AA9_41EA_37FF14B377FE_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_DF0AF41D_D522_2AA9_41EA_37FF14B377FE_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_DF0AF41D_D522_2AA9_41EA_37FF14B377FE_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_DF0AF41D_D522_2AA9_41EA_37FF14B377FE_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_DF0AF41D_D522_2AA9_41EA_37FF14B377FE_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 180,
 "hfovMin": "150%",
 "pitch": 0,
 "hfov": 360,
 "hfovMax": 130,
 "partial": false,
 "class": "Panorama"
},
{
 "audio": "this.audioresource_FF21C99D_EDC4_70CA_41AA_9B833DF0FBE0",
 "id": "audio_FE52690B_EDC5_F1CF_41C8_83BC96FE5081",
 "data": {
  "label": "Sound Virtual Tour"
 },
 "autoplay": true,
 "class": "PanoramaAudio"
},
{
 "easing": "cubic_in_out",
 "id": "effect_F1ECF9AF_E679_B2D9_41EA_6723E10391F0",
 "duration": 1000,
 "class": "FadeInEffect"
},
{
 "rotationY": 0,
 "hfov": 10.88,
 "popupMaxHeight": "60%",
 "rotationX": 0,
 "rotationZ": 0,
 "popupMaxWidth": "60%",
 "id": "popup_E7FF0CC9_F74E_42B6_41DC_67E697300E53",
 "hideEasing": "cubic_out",
 "image": {
  "levels": [
   {
    "url": "media/popup_E7FF0CC9_F74E_42B6_41DC_67E697300E53_0_1.png",
    "width": 1024,
    "height": 576,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "pitch": -28.39,
 "popupDistance": 100,
 "showDuration": 500,
 "hideDuration": 500,
 "showEasing": "cubic_in",
 "yaw": 92,
 "class": "PopupPanoramaOverlay"
},
{
 "levels": [
  {
   "url": "media/popup_F8E99BFB_F752_464A_41C1_1E4936CF3011_0_0.png",
   "width": 1920,
   "height": 1080,
   "class": "ImageResourceLevel"
  },
  {
   "url": "media/popup_F8E99BFB_F752_464A_41C1_1E4936CF3011_0_1.png",
   "width": 1024,
   "height": 576,
   "class": "ImageResourceLevel"
  },
  {
   "url": "media/popup_F8E99BFB_F752_464A_41C1_1E4936CF3011_0_2.png",
   "width": 512,
   "height": 288,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "ImageResource_EF334994_F7B3_C2DE_41DD_A6E8B35C0F24",
 "class": "ImageResource"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "initialPosition": {
  "yaw": 0,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_DF09605E_D522_6AAA_41E6_B94D5A810C57_camera",
 "class": "PanoramaCamera"
},
{
 "easing": "cubic_in_out",
 "id": "effect_F1E7E99B_E679_B2F9_41D8_394AD35AF67B",
 "duration": 1000,
 "class": "FadeInEffect"
},
{
 "levels": [
  {
   "url": "media/popup_E7E6F278_F604_3AC6_41E5_EC28055128A1_0_0.png",
   "width": 1920,
   "height": 1080,
   "class": "ImageResourceLevel"
  },
  {
   "url": "media/popup_E7E6F278_F604_3AC6_41E5_EC28055128A1_0_1.png",
   "width": 1024,
   "height": 576,
   "class": "ImageResourceLevel"
  },
  {
   "url": "media/popup_E7E6F278_F604_3AC6_41E5_EC28055128A1_0_2.png",
   "width": 512,
   "height": 288,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "ImageResource_E7D4AB16_F61C_0A4A_41D0_793831DBD3EF",
 "class": "ImageResource"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "initialPosition": {
  "yaw": 0,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_DF6F0B8F_D522_DDA9_41D6_D0B5D979483D_camera",
 "class": "PanoramaCamera"
},
{
 "easing": "cubic_in_out",
 "id": "effect_F1E2E9AD_E679_B2D9_41D2_9E3BB025401C",
 "duration": 1000,
 "class": "FadeInEffect"
},
{
 "rotationY": 0,
 "hfov": 5.27,
 "popupMaxHeight": "60%",
 "rotationX": 0,
 "rotationZ": 0,
 "popupMaxWidth": "60%",
 "id": "popup_E7090508_F772_43C3_41E6_FB3DCBCADC28",
 "hideEasing": "cubic_out",
 "image": {
  "levels": [
   {
    "url": "media/popup_E7090508_F772_43C3_41E6_FB3DCBCADC28_0_1.png",
    "width": 1024,
    "height": 576,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "pitch": 13.09,
 "popupDistance": 100,
 "showDuration": 500,
 "hideDuration": 500,
 "showEasing": "cubic_in",
 "yaw": -83.07,
 "class": "PopupPanoramaOverlay"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "initialPosition": {
  "yaw": 11.41,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_A62FCB5B_B665_53C4_41A4_66604273FF69",
 "class": "PanoramaCamera"
},
{
 "rotationY": 0,
 "hfov": 13.39,
 "popupMaxHeight": "60%",
 "rotationX": 0,
 "rotationZ": 0,
 "popupMaxWidth": "60%",
 "id": "popup_E7D8F6BE_F752_4ECA_41BA_984FC4152B31",
 "hideEasing": "cubic_out",
 "image": {
  "levels": [
   {
    "url": "media/popup_E7D8F6BE_F752_4ECA_41BA_984FC4152B31_0_1.png",
    "width": 1024,
    "height": 576,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "pitch": -13.83,
 "popupDistance": 100,
 "showDuration": 500,
 "hideDuration": 500,
 "showEasing": "cubic_in",
 "yaw": 133.26,
 "class": "PopupPanoramaOverlay"
},
{
 "audio": "this.audioresource_FF21C99D_EDC4_70CA_41AA_9B833DF0FBE0",
 "id": "audio_FEA836FA_EDC4_1049_41E5_D4A0D991809D",
 "data": {
  "label": "Sound Virtual Tour"
 },
 "autoplay": true,
 "class": "PanoramaAudio"
},
{
 "rotationY": 0,
 "hfov": 7.64,
 "showEasing": "cubic_in",
 "hideEasing": "cubic_out",
 "rotationZ": 0,
 "popupMaxWidth": "50%",
 "id": "popup_238F96F2_12FC_DA7A_4187_0483B970626B",
 "rotationX": 0,
 "class": "PopupPanoramaOverlay",
 "loop": false,
 "pitch": -32.57,
 "popupDistance": 100,
 "showDuration": 500,
 "hideDuration": 500,
 "popupMaxHeight": "50%",
 "yaw": 23.83,
 "autoplay": true,
 "video": {
  "width": 2986,
  "mp4Url": "media/video_22D7311F_12FF_37A9_41A0_72053C56BDC0.mp4",
  "height": 1680,
  "class": "VideoResource"
 }
},
{
 "levels": [
  {
   "url": "media/popup_E7F49273_F772_465A_41D1_E40E63484A75_0_0.png",
   "width": 1920,
   "height": 1080,
   "class": "ImageResourceLevel"
  },
  {
   "url": "media/popup_E7F49273_F772_465A_41D1_E40E63484A75_0_1.png",
   "width": 1024,
   "height": 576,
   "class": "ImageResourceLevel"
  },
  {
   "url": "media/popup_E7F49273_F772_465A_41D1_E40E63484A75_0_2.png",
   "width": 512,
   "height": 288,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "ImageResource_EF342984_F7B3_C2BE_41D5_6C2892D12623",
 "class": "ImageResource"
},
{
 "buttonPlayPause": "this.Button_0B741BB5_1872_D04B_41B4_A1CF013C97B0",
 "viewerArea": "this.MainViewer",
 "touchControlMode": "drag_rotation",
 "gyroscopeVerticalDraggingEnabled": true,
 "id": "MainViewerPanoramaPlayer",
 "mouseControlMode": "drag_rotation",
 "displayPlaybackBar": true,
 "class": "PanoramaPlayer"
},
{
 "easing": "cubic_in_out",
 "id": "effect_F1E049A8_E679_B2C7_41D5_4262D95BF530",
 "duration": 1000,
 "class": "FadeInEffect"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "initialPosition": {
  "yaw": -10.59,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_A61AABAA_B665_5347_41CD_C4DFDD4A5A49",
 "class": "PanoramaCamera"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "initialPosition": {
  "yaw": -149.43,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_B9B2BF77_B665_53CC_41E5_3447E551B687",
 "class": "PanoramaCamera"
},
{
 "rotationY": 0,
 "hfov": 3.95,
 "popupMaxHeight": "60%",
 "rotationX": 0,
 "rotationZ": 0,
 "popupMaxWidth": "60%",
 "id": "popup_E7AABE57_F61C_0AC9_41CA_5240C5F8CC5E",
 "hideEasing": "cubic_out",
 "image": {
  "levels": [
   {
    "url": "media/popup_E7AABE57_F61C_0AC9_41CA_5240C5F8CC5E_0_1.png",
    "width": 1024,
    "height": 576,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "pitch": 6.15,
 "popupDistance": 100,
 "showDuration": 500,
 "hideDuration": 500,
 "showEasing": "cubic_in",
 "yaw": 132.85,
 "class": "PopupPanoramaOverlay"
},
{
 "easing": "cubic_in_out",
 "id": "effect_F1E2D9AD_E679_B2D9_41DD_FE51FC8681A7",
 "duration": 1000,
 "class": "FadeOutEffect"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "initialPosition": {
  "yaw": 8,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_A65F6B3C_B665_53BC_41E2_6DFE93907CB3",
 "class": "PanoramaCamera"
},
{
 "class": "Video",
 "label": "Tempat Diskusi Raja",
 "scaleMode": "fit_inside",
 "width": 2986,
 "loop": false,
 "id": "video_31307D64_1305_2F9F_4183_6128BE5FB45C",
 "thumbnailUrl": "media/video_31307D64_1305_2F9F_4183_6128BE5FB45C_t.jpg",
 "height": 1680,
 "video": {
  "width": 2986,
  "mp4Url": "media/video_31307D64_1305_2F9F_4183_6128BE5FB45C.mp4",
  "height": 1680,
  "class": "VideoResource"
 }
},
{
 "overlays": [
  "this.overlay_65C5DD3C_6BC1_BCE6_41C2_BD3925AE9F7B",
  "this.overlay_65C5CD3C_6BC1_BCE6_41D0_BE4481105FE8",
  "this.overlay_65C5BD3C_6BC1_BCE6_41D0_BA416FB831FC",
  "this.overlay_65C5AD3C_6BC1_BCE6_41BE_8828A95EE5A0",
  "this.overlay_65C59D3C_6BC1_BCE6_41C6_EF468FD299C0",
  "this.overlay_65C58D3C_6BC1_BCE6_41B6_5FA7BD56BC97",
  "this.overlay_65C27D3C_6BC1_BCE6_41A4_6BC4B45EABD1",
  "this.overlay_65C26D3C_6BC1_BCE6_419F_BB2205DEE5B9",
  "this.overlay_65C25D3C_6BC1_BCE6_41DA_737A77F1F580"
 ],
 "maximumZoomFactor": 1.2,
 "fieldOfViewOverlayOutsideColor": "#000000",
 "thumbnailUrl": "media/map_65C54D3C_6BC1_BCE6_41C8_91C0EDF11345_t.png",
 "id": "map_65C54D3C_6BC1_BCE6_41C8_91C0EDF11345",
 "fieldOfViewOverlayInsideOpacity": 0.37,
 "width": 1082,
 "label": "FUll MAP",
 "image": {
  "levels": [
   {
    "url": "media/map_65C54D3C_6BC1_BCE6_41C8_91C0EDF11345.png",
    "width": 1082,
    "height": 770,
    "class": "ImageResourceLevel"
   },
   {
    "url": "media/map_65C54D3C_6BC1_BCE6_41C8_91C0EDF11345_lq.png",
    "width": 303,
    "tags": "preload",
    "height": 216,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "fieldOfViewOverlayOutsideOpacity": 0,
 "minimumZoomFactor": 0.5,
 "fieldOfViewOverlayRadiusScale": 0.11,
 "scaleMode": "fit_inside",
 "fieldOfViewOverlayInsideColor": "#333333",
 "initialZoomFactor": 1,
 "height": 770,
 "class": "Map"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "initialPosition": {
  "yaw": -23.17,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_B8910D71_B665_57C4_41E1_E5B4768A6071",
 "class": "PanoramaCamera"
},
{
 "levels": [
  {
   "url": "media/popup_8C98FE42_9D2D_C2E5_41DF_0D1EAD01E28C_0_0.png",
   "width": 1920,
   "height": 1080,
   "class": "ImageResourceLevel"
  },
  {
   "url": "media/popup_8C98FE42_9D2D_C2E5_41DF_0D1EAD01E28C_0_1.png",
   "width": 1024,
   "height": 576,
   "class": "ImageResourceLevel"
  },
  {
   "url": "media/popup_8C98FE42_9D2D_C2E5_41DF_0D1EAD01E28C_0_2.png",
   "width": 512,
   "height": 288,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "ImageResource_8945A9D7_9D24_41EC_41CF_EF6182D1B57B",
 "class": "ImageResource"
},
{
 "thumbnailUrl": "media/panorama_DF60EDC1_D522_D596_41E5_9A31123BC0B0_t.jpg",
 "overlays": [
  "this.overlay_CBDE3018_D708_00E6_41D1_C41935A00517",
  "this.overlay_F7EE103F_E7A7_1389_41E8_E1518C084A58",
  "this.overlay_23F17F2F_1305_EBEA_416B_53E18D637B28",
  "this.popup_3C21C69D_1305_5AA9_41A8_2F10C20CC622",
  "this.overlay_0AEC1B99_1B37_B3AB_41B5_4F99C2AACB3E",
  "this.overlay_E24E2B2D_ED41_8AA5_41ED_3CEF2ABFF6E4",
  "this.overlay_E23FEB65_ED41_8ADA_41EA_46AD016EC4E1",
  "this.popup_E7726334_F776_C7DE_41DD_3C7698230E38",
  "this.popup_E34E3A17_F771_C1DA_41DD_F740EF28F316"
 ],
 "adjacentPanoramas": [
  {
   "backwardYaw": 172.7,
   "yaw": -10.03,
   "panorama": "this.panorama_DF614CA2_D522_FB9A_41E1_A0F7B63CBAED",
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "backwardYaw": 0.1,
   "yaw": 176.31,
   "panorama": "this.panorama_DF09605E_D522_6AAA_41E6_B94D5A810C57",
   "distance": 1,
   "class": "AdjacentPanorama"
  }
 ],
 "label": "Banguan Puri",
 "id": "panorama_DF60EDC1_D522_D596_41E5_9A31123BC0B0",
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_DF60EDC1_D522_D596_41E5_9A31123BC0B0_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_DF60EDC1_D522_D596_41E5_9A31123BC0B0_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_DF60EDC1_D522_D596_41E5_9A31123BC0B0_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_DF60EDC1_D522_D596_41E5_9A31123BC0B0_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_DF60EDC1_D522_D596_41E5_9A31123BC0B0_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_DF60EDC1_D522_D596_41E5_9A31123BC0B0_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_DF60EDC1_D522_D596_41E5_9A31123BC0B0_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_DF60EDC1_D522_D596_41E5_9A31123BC0B0_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_DF60EDC1_D522_D596_41E5_9A31123BC0B0_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_DF60EDC1_D522_D596_41E5_9A31123BC0B0_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_DF60EDC1_D522_D596_41E5_9A31123BC0B0_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_DF60EDC1_D522_D596_41E5_9A31123BC0B0_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_DF60EDC1_D522_D596_41E5_9A31123BC0B0_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_DF60EDC1_D522_D596_41E5_9A31123BC0B0_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_DF60EDC1_D522_D596_41E5_9A31123BC0B0_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_DF60EDC1_D522_D596_41E5_9A31123BC0B0_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_DF60EDC1_D522_D596_41E5_9A31123BC0B0_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_DF60EDC1_D522_D596_41E5_9A31123BC0B0_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_DF60EDC1_D522_D596_41E5_9A31123BC0B0_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 180,
 "hfovMin": "150%",
 "pitch": 0,
 "hfov": 360,
 "hfovMax": 130,
 "mapLocations": [
  {
   "map": "this.map_65C54D3C_6BC1_BCE6_41C8_91C0EDF11345",
   "x": 799.24,
   "angle": 0,
   "y": 247.22,
   "class": "PanoramaMapLocation"
  }
 ],
 "partial": false,
 "class": "Panorama"
},
{
 "easing": "cubic_in_out",
 "id": "effect_E4066CFA_F75E_424A_41EE_14774651BB8C",
 "duration": 1000,
 "class": "FadeOutEffect"
},
{
 "levels": [
  {
   "url": "media/popup_07F8080A_1441_7E32_41B1_C0F25726E064_0_0.png",
   "width": 1920,
   "height": 1080,
   "class": "ImageResourceLevel"
  },
  {
   "url": "media/popup_07F8080A_1441_7E32_41B1_C0F25726E064_0_1.png",
   "width": 1024,
   "height": 576,
   "class": "ImageResourceLevel"
  },
  {
   "url": "media/popup_07F8080A_1441_7E32_41B1_C0F25726E064_0_2.png",
   "width": 512,
   "height": 288,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "ImageResource_0731D91F_1441_BE52_41A1_8273CB3EFC30",
 "class": "ImageResource"
},
{
 "levels": [
  {
   "url": "media/popup_E34E3A17_F771_C1DA_41DD_F740EF28F316_0_0.png",
   "width": 1920,
   "height": 1080,
   "class": "ImageResourceLevel"
  },
  {
   "url": "media/popup_E34E3A17_F771_C1DA_41DD_F740EF28F316_0_1.png",
   "width": 1024,
   "height": 576,
   "class": "ImageResourceLevel"
  },
  {
   "url": "media/popup_E34E3A17_F771_C1DA_41DD_F740EF28F316_0_2.png",
   "width": 512,
   "height": 288,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "ImageResource_E3C0085A_F752_424B_41C7_0D7C3BA34915",
 "class": "ImageResource"
},
{
 "class": "Video",
 "label": "Tempat Makan Raja",
 "scaleMode": "fit_inside",
 "width": 1920,
 "loop": false,
 "id": "video_30DFE58F_1307_5EA9_4188_54F3B3C4462E",
 "thumbnailUrl": "media/video_30DFE58F_1307_5EA9_4188_54F3B3C4462E_t.jpg",
 "height": 1080,
 "video": {
  "width": 1920,
  "mp4Url": "media/video_30DFE58F_1307_5EA9_4188_54F3B3C4462E.mp4",
  "height": 1080,
  "class": "VideoResource"
 }
},
{
 "audio": "this.audioresource_FF21C99D_EDC4_70CA_41AA_9B833DF0FBE0",
 "id": "audio_FE79E581_EDC4_10BB_41D1_CE63B238F291",
 "data": {
  "label": "Sound Virtual Tour"
 },
 "autoplay": true,
 "class": "PanoramaAudio"
},
{
 "items": [
  {
   "media": "this.video_20934DBA_151B_2EEA_418E_EF3DFDEACB48",
   "start": "this.viewer_uidB8CE083B_B665_5D44_41D2_36D8CD662285VideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_B8CF782C_B665_5D43_41DE_7D80BF44AC19, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_B8CF782C_B665_5D43_41DE_7D80BF44AC19, 0)",
   "begin": "this.fixTogglePlayPauseButton(this.viewer_uidB8CE083B_B665_5D44_41D2_36D8CD662285VideoPlayer)",
   "player": "this.viewer_uidB8CE083B_B665_5D44_41D2_36D8CD662285VideoPlayer",
   "class": "VideoPlayListItem"
  }
 ],
 "id": "playList_B8CF782C_B665_5D43_41DE_7D80BF44AC19",
 "class": "PlayList"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "initialPosition": {
  "yaw": 0,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_DF0AA7F2_D522_357A_41E7_BB88309A039D_camera",
 "class": "PanoramaCamera"
},
{
 "easing": "cubic_in_out",
 "id": "effect_F1E7499A_E679_B2FB_41E8_F2F054FB1A11",
 "duration": 1000,
 "class": "FadeOutEffect"
},
{
 "easing": "cubic_in_out",
 "id": "effect_F1EC69AE_E679_B2DB_41EA_DBEBD11F16F9",
 "duration": 1000,
 "class": "FadeInEffect"
},
{
 "levels": [
  {
   "url": "media/popup_F92AE07E_F693_D3B9_41DA_7C9023FAE273_0_0.png",
   "width": 1920,
   "height": 1080,
   "class": "ImageResourceLevel"
  },
  {
   "url": "media/popup_F92AE07E_F693_D3B9_41DA_7C9023FAE273_0_1.png",
   "width": 1024,
   "height": 576,
   "class": "ImageResourceLevel"
  },
  {
   "url": "media/popup_F92AE07E_F693_D3B9_41DA_7C9023FAE273_0_2.png",
   "width": 512,
   "height": 288,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "ImageResource_F8CD65B2_F751_C2DA_41BA_5484C10A270E",
 "class": "ImageResource"
},
{
 "rotationY": 0,
 "hfov": 3.53,
 "popupMaxHeight": "60%",
 "rotationX": 0,
 "rotationZ": 0,
 "popupMaxWidth": "60%",
 "id": "popup_E41D0776_F61C_3ACA_41E0_6E17BA1FFD39",
 "hideEasing": "cubic_out",
 "image": {
  "levels": [
   {
    "url": "media/popup_E41D0776_F61C_3ACA_41E0_6E17BA1FFD39_0_1.png",
    "width": 1024,
    "height": 576,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "pitch": -7.32,
 "popupDistance": 100,
 "showDuration": 500,
 "hideDuration": 500,
 "showEasing": "cubic_in",
 "yaw": 0.17,
 "class": "PopupPanoramaOverlay"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "initialPosition": {
  "yaw": 0,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_DF0BAF14_D522_36BE_4182_2D68BF6843DE_camera",
 "class": "PanoramaCamera"
},
{
 "easing": "cubic_in_out",
 "id": "effect_F3F3A936_E649_F3CA_41C9_35102C1CC847",
 "duration": 1000,
 "class": "FadeOutEffect"
},
{
 "levels": [
  {
   "url": "media/popup_E7AABE57_F61C_0AC9_41CA_5240C5F8CC5E_0_0.png",
   "width": 1920,
   "height": 1080,
   "class": "ImageResourceLevel"
  },
  {
   "url": "media/popup_E7AABE57_F61C_0AC9_41CA_5240C5F8CC5E_0_1.png",
   "width": 1024,
   "height": 576,
   "class": "ImageResourceLevel"
  },
  {
   "url": "media/popup_E7AABE57_F61C_0AC9_41CA_5240C5F8CC5E_0_2.png",
   "width": 512,
   "height": 288,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "ImageResource_E7DA7B1F_F61C_0A7A_41D7_F2778487084E",
 "class": "ImageResource"
},
{
 "easing": "cubic_in_out",
 "id": "effect_F1E0D9A8_E679_B2D8_41CD_47CBDE6D386F",
 "duration": 1000,
 "class": "FadeInEffect"
},
{
 "levels": [
  {
   "url": "media/popup_E7F3FA07_F61C_0A4A_41E5_2288D9E1B920_0_0.png",
   "width": 1920,
   "height": 1080,
   "class": "ImageResourceLevel"
  },
  {
   "url": "media/popup_E7F3FA07_F61C_0A4A_41E5_2288D9E1B920_0_1.png",
   "width": 1024,
   "height": 576,
   "class": "ImageResourceLevel"
  },
  {
   "url": "media/popup_E7F3FA07_F61C_0A4A_41E5_2288D9E1B920_0_2.png",
   "width": 512,
   "height": 288,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "ImageResource_E7DB4B1F_F61C_0A7A_41D7_80D7A8BB4296",
 "class": "ImageResource"
},
{
 "easing": "cubic_in_out",
 "id": "effect_F1EC49AF_E679_B2D9_41D9_1F72127D31B8",
 "duration": 1000,
 "class": "FadeOutEffect"
},
{
 "levels": [
  {
   "url": "media/popup_34360BE0_1305_2A97_41AD_952DA148E558_0_0.jpg",
   "width": 4080,
   "height": 1840,
   "class": "ImageResourceLevel"
  },
  {
   "url": "media/popup_34360BE0_1305_2A97_41AD_952DA148E558_0_1.jpg",
   "width": 2048,
   "height": 923,
   "class": "ImageResourceLevel"
  },
  {
   "url": "media/popup_34360BE0_1305_2A97_41AD_952DA148E558_0_2.jpg",
   "width": 1024,
   "height": 461,
   "class": "ImageResourceLevel"
  },
  {
   "url": "media/popup_34360BE0_1305_2A97_41AD_952DA148E558_0_3.jpg",
   "width": 512,
   "height": 230,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "ImageResource_240FA4E7_1505_DE99_416F_45770CC1B910",
 "class": "ImageResource"
},
{
 "headerBackgroundColorDirection": "vertical",
 "id": "window_BCF20CB4_B65D_354C_41E2_FCD94E85C249",
 "closeButtonPressedBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "titlePaddingLeft": 5,
 "paddingBottom": 0,
 "minHeight": 20,
 "closeButtonBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "shadow": true,
 "headerPaddingLeft": 10,
 "closeButtonPressedIconLineWidth": 5,
 "closeButtonRollOverBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "headerBackgroundOpacity": 0,
 "closeButtonPressedBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "modal": true,
 "titlePaddingBottom": 5,
 "backgroundOpacity": 1,
 "bodyPaddingLeft": 0,
 "bodyPaddingBottom": 0,
 "shadowVerticalLength": 0,
 "verticalAlign": "middle",
 "closeButtonPressedBorderSize": 0,
 "paddingRight": 0,
 "closeButtonRollOverBorderSize": 0,
 "veilOpacity": 0.4,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "bodyPaddingTop": 0,
 "backgroundColor": [],
 "borderSize": 0,
 "veilShowEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeInEffect"
 },
 "closeButtonPaddingTop": 5,
 "closeButtonPressedBackgroundColorDirection": "vertical",
 "shadowSpread": 1,
 "closeButtonPressedBorderColor": "#000000",
 "headerPaddingRight": 0,
 "propagateClick": false,
 "closeButtonRollOverBackgroundColorDirection": "vertical",
 "bodyPaddingRight": 0,
 "bodyBackgroundColorDirection": "vertical",
 "closeButtonPressedIconColor": "#888888",
 "titlePaddingTop": 5,
 "closeButtonRollOverBackgroundOpacity": 0.3,
 "closeButtonIconColor": "#000000",
 "closeButtonPaddingLeft": 5,
 "closeButtonRollOverIconColor": "#666666",
 "scrollBarMargin": 2,
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "scrollBarWidth": 10,
 "closeButtonBorderColor": "#000000",
 "titleFontFamily": "Arial",
 "overflow": "scroll",
 "class": "Window",
 "closeButtonRollOverIconLineWidth": 5,
 "headerVerticalAlign": "middle",
 "backgroundColorDirection": "vertical",
 "layout": "vertical",
 "closeButtonBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "showEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeInEffect"
 },
 "scrollBarOpacity": 0.5,
 "children": [
  "this.viewer_uidB8DCE84B_B665_5DC4_41DA_992FD874F3E4"
 ],
 "shadowColor": "#000000",
 "closeButtonBackgroundColorDirection": "vertical",
 "closeButtonPaddingRight": 5,
 "veilColorRatios": [
  0,
  1
 ],
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "footerHeight": 5,
 "paddingTop": 0,
 "footerBackgroundOpacity": 0,
 "shadowBlurRadius": 6,
 "scrollBarVisible": "rollOver",
 "closeButtonBorderSize": 0,
 "scrollBarColor": "#000000",
 "horizontalAlign": "center",
 "minWidth": 20,
 "veilHideEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeOutEffect"
 },
 "closeButtonBackgroundOpacity": 0.3,
 "paddingLeft": 0,
 "shadowOpacity": 0.5,
 "contentOpaque": false,
 "headerPaddingBottom": 5,
 "closeButtonBorderRadius": 0,
 "hideEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeOutEffect"
 },
 "closeButtonPressedBackgroundOpacity": 0.3,
 "footerBackgroundColorDirection": "vertical",
 "borderRadius": 5,
 "titleFontSize": "1.29vmin",
 "gap": 10,
 "closeButtonIconHeight": 20,
 "titlePaddingRight": 5,
 "headerPaddingTop": 10,
 "backgroundColorRatios": [],
 "shadowHorizontalLength": 3,
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "bodyBackgroundOpacity": 0,
 "closeButtonRollOverBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "closeButtonPaddingBottom": 5,
 "closeButtonRollOverBorderColor": "#000000",
 "closeButtonIconLineWidth": 5,
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "closeButtonIconWidth": 20,
 "data": {
  "name": "Window586"
 }
},
{
 "rotationY": 0,
 "hfov": 13.27,
 "popupMaxHeight": "60%",
 "rotationX": 0,
 "rotationZ": 0,
 "popupMaxWidth": "60%",
 "id": "popup_F88BAF52_F753_DE5A_41EB_9180A476FA94",
 "hideEasing": "cubic_out",
 "image": {
  "levels": [
   {
    "url": "media/popup_F88BAF52_F753_DE5A_41EB_9180A476FA94_0_1.png",
    "width": 1024,
    "height": 576,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "pitch": 15.59,
 "popupDistance": 100,
 "showDuration": 500,
 "hideDuration": 500,
 "showEasing": "cubic_in",
 "yaw": 31.86,
 "class": "PopupPanoramaOverlay"
},
{
 "rotationY": 0,
 "hfov": 6.09,
 "popupMaxHeight": "60%",
 "rotationX": 0,
 "rotationZ": 0,
 "popupMaxWidth": "60%",
 "id": "popup_F8F2401C_F75E_41CE_41B7_8A77F3C75537",
 "hideEasing": "cubic_out",
 "image": {
  "levels": [
   {
    "url": "media/popup_F8F2401C_F75E_41CE_41B7_8A77F3C75537_0_1.png",
    "width": 1024,
    "height": 576,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "pitch": 10.78,
 "popupDistance": 100,
 "showDuration": 500,
 "hideDuration": 500,
 "showEasing": "cubic_in",
 "yaw": -97.61,
 "class": "PopupPanoramaOverlay"
},
{
 "rotationY": 0,
 "hfov": 8.51,
 "popupMaxHeight": "60%",
 "rotationX": 0,
 "rotationZ": 0,
 "popupMaxWidth": "60%",
 "id": "popup_F9264665_F693_7FCB_41D9_56AC90E2B230",
 "hideEasing": "cubic_out",
 "image": {
  "levels": [
   {
    "url": "media/popup_F9264665_F693_7FCB_41D9_56AC90E2B230_0_1.png",
    "width": 1024,
    "height": 576,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "pitch": 3.78,
 "popupDistance": 100,
 "showDuration": 500,
 "hideDuration": 500,
 "showEasing": "cubic_in",
 "yaw": -107.39,
 "class": "PopupPanoramaOverlay"
},
{
 "thumbnailUrl": "media/panorama_DF09605E_D522_6AAA_41E6_B94D5A810C57_t.jpg",
 "overlays": [
  "this.overlay_CC734F2F_D708_1F3B_41C3_5A2B3FFC19DC",
  "this.overlay_CCC35A0F_D708_00FA_41E3_EB31BEE7A7F1",
  "this.overlay_CB2D1A01_D708_00E6_41E0_8767EA42CA2C",
  "this.overlay_093BDD92_1B39_77B8_41B7_282D1296A620",
  "this.overlay_E2E4BD34_ED7F_8EBB_41E6_B754909D0481",
  "this.overlay_E2DE39D3_ED7E_89FE_41E2_7E23E8EB7971",
  "this.overlay_E2EE1C0B_ED41_8E6E_41D9_788CC38EABAA",
  "this.overlay_E2E3EE69_ED41_8AAA_41E4_CAAB39D66209",
  "this.popup_E7664036_F74E_41DA_41AF_D016E718C9C2",
  "this.popup_E7FF0CC9_F74E_42B6_41DC_67E697300E53",
  "this.popup_E7C79148_F772_43B6_4172_B914AA9689FA",
  "this.popup_E3EBFFF2_F77F_DE5B_41EB_5F32E610EEEE"
 ],
 "adjacentPanoramas": [
  {
   "backwardYaw": -2.47,
   "yaw": 177.83,
   "panorama": "this.panorama_DF091129_D522_6A96_41CB_A7A82D7D5CF4",
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "backwardYaw": 169.41,
   "yaw": -91.36,
   "panorama": "this.panorama_DF09300A_D522_2AAB_41C0_2217A91877F7",
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "backwardYaw": 176.31,
   "yaw": 0.1,
   "panorama": "this.panorama_DF60EDC1_D522_D596_41E5_9A31123BC0B0",
   "distance": 1,
   "class": "AdjacentPanorama"
  }
 ],
 "label": "depan bale telaga",
 "id": "panorama_DF09605E_D522_6AAA_41E6_B94D5A810C57",
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_DF09605E_D522_6AAA_41E6_B94D5A810C57_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_DF09605E_D522_6AAA_41E6_B94D5A810C57_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_DF09605E_D522_6AAA_41E6_B94D5A810C57_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_DF09605E_D522_6AAA_41E6_B94D5A810C57_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_DF09605E_D522_6AAA_41E6_B94D5A810C57_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_DF09605E_D522_6AAA_41E6_B94D5A810C57_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_DF09605E_D522_6AAA_41E6_B94D5A810C57_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_DF09605E_D522_6AAA_41E6_B94D5A810C57_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_DF09605E_D522_6AAA_41E6_B94D5A810C57_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_DF09605E_D522_6AAA_41E6_B94D5A810C57_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_DF09605E_D522_6AAA_41E6_B94D5A810C57_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_DF09605E_D522_6AAA_41E6_B94D5A810C57_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_DF09605E_D522_6AAA_41E6_B94D5A810C57_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_DF09605E_D522_6AAA_41E6_B94D5A810C57_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_DF09605E_D522_6AAA_41E6_B94D5A810C57_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_DF09605E_D522_6AAA_41E6_B94D5A810C57_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_DF09605E_D522_6AAA_41E6_B94D5A810C57_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_DF09605E_D522_6AAA_41E6_B94D5A810C57_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_DF09605E_D522_6AAA_41E6_B94D5A810C57_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 180,
 "hfovMin": "150%",
 "pitch": 0,
 "hfov": 360,
 "hfovMax": 130,
 "partial": false,
 "class": "Panorama"
},
{
 "audio": "this.audioresource_FF21C99D_EDC4_70CA_41AA_9B833DF0FBE0",
 "id": "audio_FEBA895F_EDC4_1047_41DA_BAC9F918A567",
 "data": {
  "label": "Sound Virtual Tour"
 },
 "autoplay": true,
 "class": "PanoramaAudio"
},
{
 "rotationY": 0,
 "hfov": 8.63,
 "popupMaxHeight": "60%",
 "rotationX": 0,
 "rotationZ": 0,
 "popupMaxWidth": "60%",
 "id": "popup_F92AE07E_F693_D3B9_41DA_7C9023FAE273",
 "hideEasing": "cubic_out",
 "image": {
  "levels": [
   {
    "url": "media/popup_F92AE07E_F693_D3B9_41DA_7C9023FAE273_0_1.png",
    "width": 1024,
    "height": 576,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "pitch": -28.54,
 "popupDistance": 100,
 "showDuration": 500,
 "hideDuration": 500,
 "showEasing": "cubic_in",
 "yaw": -20.34,
 "class": "PopupPanoramaOverlay"
},
{
 "levels": [
  {
   "url": "media/popup_F838D999_F751_C2D6_41D7_DF61A641B54F_0_0.png",
   "width": 1920,
   "height": 1080,
   "class": "ImageResourceLevel"
  },
  {
   "url": "media/popup_F838D999_F751_C2D6_41D7_DF61A641B54F_0_1.png",
   "width": 1024,
   "height": 576,
   "class": "ImageResourceLevel"
  },
  {
   "url": "media/popup_F838D999_F751_C2D6_41D7_DF61A641B54F_0_2.png",
   "width": 512,
   "height": 288,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "ImageResource_EF137955_F7B3_C25E_41D0_22CCF42E3AF1",
 "class": "ImageResource"
},
{
 "rotationY": 0,
 "hfov": 4.3,
 "popupMaxHeight": "60%",
 "rotationX": 0,
 "rotationZ": 0,
 "popupMaxWidth": "60%",
 "id": "popup_F891157B_F751_C24A_41EC_CC062028D60B",
 "hideEasing": "cubic_out",
 "image": {
  "levels": [
   {
    "url": "media/popup_F891157B_F751_C24A_41EC_CC062028D60B_0_1.png",
    "width": 1024,
    "height": 576,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "pitch": -1.69,
 "popupDistance": 100,
 "showDuration": 500,
 "hideDuration": 500,
 "showEasing": "cubic_in",
 "yaw": 22.24,
 "class": "PopupPanoramaOverlay"
},
{
 "easing": "cubic_in_out",
 "id": "effect_F1EF99B0_E679_B2C7_41D6_2A9BCAF5DB59",
 "duration": 1000,
 "class": "FadeInEffect"
},
{
 "audio": "this.audioresource_FF21C99D_EDC4_70CA_41AA_9B833DF0FBE0",
 "id": "audio_FE679F40_EDC4_11B9_41E8_B9D5D3803227",
 "data": {
  "label": "Sound Virtual Tour"
 },
 "autoplay": true,
 "class": "PanoramaAudio"
},
{
 "levels": [
  {
   "url": "media/popup_E7E121CA_F75F_C24A_41C6_15C3FED09E72_0_0.png",
   "width": 1920,
   "height": 1080,
   "class": "ImageResourceLevel"
  },
  {
   "url": "media/popup_E7E121CA_F75F_C24A_41C6_15C3FED09E72_0_1.png",
   "width": 1024,
   "height": 576,
   "class": "ImageResourceLevel"
  },
  {
   "url": "media/popup_E7E121CA_F75F_C24A_41C6_15C3FED09E72_0_2.png",
   "width": 512,
   "height": 288,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "ImageResource_EF017926_F7B3_C3FA_41E8_698DC1ADCE29",
 "class": "ImageResource"
},
{
 "class": "Video",
 "label": "Gedung",
 "scaleMode": "fit_inside",
 "width": 1920,
 "loop": false,
 "id": "video_3C0E25A7_131B_3E9A_41B2_644B2E6D05A6",
 "thumbnailUrl": "media/video_3C0E25A7_131B_3E9A_41B2_644B2E6D05A6_t.jpg",
 "height": 1080,
 "video": {
  "width": 1920,
  "mp4Url": "media/video_3C0E25A7_131B_3E9A_41B2_644B2E6D05A6.mp4",
  "height": 1080,
  "class": "VideoResource"
 }
},
{
 "easing": "cubic_in_out",
 "id": "effect_F1E0A9A9_E679_B2D9_41B6_6146C79DC054",
 "duration": 1000,
 "class": "FadeOutEffect"
},
{
 "rotationY": 0,
 "hfov": 5.46,
 "popupMaxHeight": "60%",
 "rotationX": 0,
 "rotationZ": 0,
 "popupMaxWidth": "60%",
 "id": "popup_E3DF0A58_F772_4656_41E7_27E5A17BEC97",
 "hideEasing": "cubic_out",
 "image": {
  "levels": [
   {
    "url": "media/popup_E3DF0A58_F772_4656_41E7_27E5A17BEC97_0_1.png",
    "width": 1024,
    "height": 576,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "pitch": -3.96,
 "popupDistance": 100,
 "showDuration": 500,
 "hideDuration": 500,
 "showEasing": "cubic_in",
 "yaw": 101.65,
 "class": "PopupPanoramaOverlay"
},
{
 "headerBackgroundColorDirection": "vertical",
 "id": "window_BCF2ACB7_B65D_354C_41DF_C5911C46F027",
 "closeButtonPressedBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "titlePaddingLeft": 5,
 "paddingBottom": 0,
 "minHeight": 20,
 "closeButtonBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "shadow": true,
 "headerPaddingLeft": 10,
 "closeButtonPressedIconLineWidth": 5,
 "closeButtonRollOverBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "headerBackgroundOpacity": 0,
 "closeButtonPressedBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "modal": true,
 "titlePaddingBottom": 5,
 "backgroundOpacity": 1,
 "bodyPaddingLeft": 0,
 "bodyPaddingBottom": 0,
 "shadowVerticalLength": 0,
 "verticalAlign": "middle",
 "closeButtonPressedBorderSize": 0,
 "paddingRight": 0,
 "closeButtonRollOverBorderSize": 0,
 "veilOpacity": 0.4,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "bodyPaddingTop": 0,
 "backgroundColor": [],
 "borderSize": 0,
 "veilShowEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeInEffect"
 },
 "closeButtonPaddingTop": 5,
 "closeButtonPressedBackgroundColorDirection": "vertical",
 "shadowSpread": 1,
 "closeButtonPressedBorderColor": "#000000",
 "headerPaddingRight": 0,
 "propagateClick": false,
 "closeButtonRollOverBackgroundColorDirection": "vertical",
 "bodyPaddingRight": 0,
 "bodyBackgroundColorDirection": "vertical",
 "closeButtonPressedIconColor": "#888888",
 "titlePaddingTop": 5,
 "closeButtonRollOverBackgroundOpacity": 0.3,
 "closeButtonIconColor": "#000000",
 "closeButtonPaddingLeft": 5,
 "closeButtonRollOverIconColor": "#666666",
 "scrollBarMargin": 2,
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "scrollBarWidth": 10,
 "closeButtonBorderColor": "#000000",
 "titleFontFamily": "Arial",
 "overflow": "scroll",
 "class": "Window",
 "closeButtonRollOverIconLineWidth": 5,
 "headerVerticalAlign": "middle",
 "backgroundColorDirection": "vertical",
 "layout": "vertical",
 "closeButtonBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "showEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeInEffect"
 },
 "scrollBarOpacity": 0.5,
 "children": [
  "this.viewer_uidB8A6184B_B665_5DC4_41E2_376DF56773FE"
 ],
 "shadowColor": "#000000",
 "closeButtonBackgroundColorDirection": "vertical",
 "closeButtonPaddingRight": 5,
 "veilColorRatios": [
  0,
  1
 ],
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "footerHeight": 5,
 "paddingTop": 0,
 "footerBackgroundOpacity": 0,
 "shadowBlurRadius": 6,
 "scrollBarVisible": "rollOver",
 "closeButtonBorderSize": 0,
 "scrollBarColor": "#000000",
 "horizontalAlign": "center",
 "minWidth": 20,
 "veilHideEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeOutEffect"
 },
 "closeButtonBackgroundOpacity": 0.3,
 "paddingLeft": 0,
 "shadowOpacity": 0.5,
 "contentOpaque": false,
 "headerPaddingBottom": 5,
 "closeButtonBorderRadius": 0,
 "hideEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeOutEffect"
 },
 "closeButtonPressedBackgroundOpacity": 0.3,
 "footerBackgroundColorDirection": "vertical",
 "borderRadius": 5,
 "titleFontSize": "1.29vmin",
 "gap": 10,
 "closeButtonIconHeight": 20,
 "titlePaddingRight": 5,
 "headerPaddingTop": 10,
 "backgroundColorRatios": [],
 "shadowHorizontalLength": 3,
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "bodyBackgroundOpacity": 0,
 "closeButtonRollOverBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "closeButtonPaddingBottom": 5,
 "closeButtonRollOverBorderColor": "#000000",
 "closeButtonIconLineWidth": 5,
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "closeButtonIconWidth": 20,
 "data": {
  "name": "Window588"
 }
},
{
 "items": [
  {
   "media": "this.video_2303E0B1_12FF_56F6_41B2_B996127200EB",
   "start": "this.viewer_uidB8DC984B_B665_5DC4_41BA_9F6A0AACB90EVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.PlayList_B96A5899_B665_5D44_41E3_354086DDCDE5, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.PlayList_B96A5899_B665_5D44_41E3_354086DDCDE5, 0)",
   "begin": "this.fixTogglePlayPauseButton(this.viewer_uidB8DC984B_B665_5DC4_41BA_9F6A0AACB90EVideoPlayer)",
   "player": "this.viewer_uidB8DC984B_B665_5DC4_41BA_9F6A0AACB90EVideoPlayer",
   "class": "VideoPlayListItem"
  }
 ],
 "id": "PlayList_B96A5899_B665_5D44_41E3_354086DDCDE5",
 "class": "PlayList"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "initialPosition": {
  "yaw": 169.97,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_A6690FD4_B665_52CC_4165_CD90D79208E2",
 "class": "PanoramaCamera"
},
{
 "easing": "cubic_in_out",
 "id": "effect_F1E149A7_E679_B2C9_41BF_82CFD001169B",
 "duration": 1000,
 "class": "FadeOutEffect"
},
{
 "items": [
  {
   "media": "this.video_22D7311F_12FF_37A9_41A0_72053C56BDC0",
   "start": "this.viewer_uidB8DCE84B_B665_5DC4_41DA_992FD874F3E4VideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.PlayList_B96AD899_B665_5D44_4193_6A5DBB15E867, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.PlayList_B96AD899_B665_5D44_4193_6A5DBB15E867, 0)",
   "begin": "this.fixTogglePlayPauseButton(this.viewer_uidB8DCE84B_B665_5DC4_41DA_992FD874F3E4VideoPlayer)",
   "player": "this.viewer_uidB8DCE84B_B665_5DC4_41DA_992FD874F3E4VideoPlayer",
   "class": "VideoPlayListItem"
  }
 ],
 "id": "PlayList_B96AD899_B665_5D44_4193_6A5DBB15E867",
 "class": "PlayList"
},
{
 "rotationY": 0,
 "hfov": 7.04,
 "popupMaxHeight": "60%",
 "rotationX": 0,
 "rotationZ": 0,
 "popupMaxWidth": "60%",
 "id": "popup_8C3C6B67_9D25_C2AB_41D2_95FE5CEA254B",
 "hideEasing": "cubic_out",
 "image": {
  "levels": [
   {
    "url": "media/popup_8C3C6B67_9D25_C2AB_41D2_95FE5CEA254B_0_1.png",
    "width": 1024,
    "height": 576,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "pitch": 7.94,
 "popupDistance": 100,
 "showDuration": 500,
 "hideDuration": 500,
 "showEasing": "cubic_in",
 "yaw": 18.5,
 "class": "PopupPanoramaOverlay"
},
{
 "audio": "this.audioresource_FF21C99D_EDC4_70CA_41AA_9B833DF0FBE0",
 "id": "audio_FE738473_EDC4_705F_41E2_ED7984196937",
 "data": {
  "label": "Sound Virtual Tour"
 },
 "autoplay": true,
 "class": "PanoramaAudio"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "initialPosition": {
  "yaw": -179.9,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_A6708ADE_B665_52FF_41DE_34EBEC8E77FE",
 "class": "PanoramaCamera"
},
{
 "titleFontColor": "#000000",
 "headerBackgroundColorDirection": "vertical",
 "id": "window_F8144E36_F7F6_41DA_41E3_0EF2D9CA53C2",
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "width": 400,
 "titleTextDecoration": "none",
 "titlePaddingLeft": 5,
 "paddingBottom": 0,
 "minHeight": 20,
 "headerBorderColor": "#000000",
 "closeButtonBackgroundColor": [],
 "shadow": true,
 "headerPaddingLeft": 10,
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "headerBackgroundOpacity": 1,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "modal": true,
 "headerBorderSize": 0,
 "titlePaddingBottom": 5,
 "backgroundOpacity": 1,
 "bodyPaddingLeft": 5,
 "bodyPaddingBottom": 5,
 "shadowVerticalLength": 0,
 "verticalAlign": "middle",
 "height": 600,
 "veilOpacity": 0.4,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "bodyPaddingTop": 5,
 "paddingRight": 0,
 "borderSize": 0,
 "title": "",
 "footerBorderColor": "#000000",
 "backgroundColor": [],
 "shadowSpread": 1,
 "headerPaddingRight": 10,
 "propagateClick": false,
 "bodyPaddingRight": 5,
 "veilShowEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeInEffect"
 },
 "bodyBackgroundColorDirection": "vertical",
 "closeButtonPressedIconColor": "#FFFFFF",
 "titlePaddingTop": 5,
 "closeButtonIconColor": "#000000",
 "closeButtonRollOverIconColor": "#FFFFFF",
 "scrollBarMargin": 2,
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "scrollBarWidth": 10,
 "titleFontFamily": "Arial",
 "overflow": "scroll",
 "class": "Window",
 "headerVerticalAlign": "middle",
 "backgroundColorDirection": "vertical",
 "footerBorderSize": 0,
 "layout": "vertical",
 "closeButtonBackgroundColorRatios": [],
 "showEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeInEffect"
 },
 "scrollBarOpacity": 0.5,
 "children": [
  "this.htmlText_F81B9E36_F7F6_41DA_41D5_E3403B9A9408",
  {
   "backgroundColorDirection": "vertical",
   "class": "WebFrame",
   "paddingBottom": 0,
   "minHeight": 0,
   "shadow": false,
   "width": "100%",
   "paddingTop": 0,
   "url": "https://id.wikipedia.org/wiki/Berkas:Puri_Agung_Karangasem.jpg",
   "minWidth": 0,
   "backgroundOpacity": 1,
   "paddingRight": 0,
   "paddingLeft": 0,
   "backgroundColor": [],
   "borderSize": 0,
   "borderRadius": 0,
   "height": "89%",
   "propagateClick": false,
   "backgroundColorRatios": [],
   "insetBorder": false,
   "data": {
    "name": "WebFrame3335"
   },
   "scrollEnabled": true
  }
 ],
 "shadowColor": "#000000",
 "titleFontStyle": "normal",
 "veilColorRatios": [
  0,
  1
 ],
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "footerHeight": 5,
 "paddingTop": 0,
 "footerBackgroundOpacity": 1,
 "shadowBlurRadius": 6,
 "scrollBarVisible": "rollOver",
 "veilColorDirection": "horizontal",
 "scrollBarColor": "#000000",
 "horizontalAlign": "center",
 "minWidth": 20,
 "veilHideEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeOutEffect"
 },
 "paddingLeft": 0,
 "shadowOpacity": 0.5,
 "contentOpaque": false,
 "headerPaddingBottom": 10,
 "closeButtonBorderRadius": 11,
 "hideEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeOutEffect"
 },
 "titleFontWeight": "normal",
 "footerBackgroundColorDirection": "vertical",
 "borderRadius": 5,
 "titleFontSize": "1.29vmin",
 "gap": 10,
 "closeButtonIconHeight": 12,
 "titlePaddingRight": 5,
 "headerPaddingTop": 10,
 "backgroundColorRatios": [],
 "shadowHorizontalLength": 3,
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "closeButtonIconLineWidth": 2,
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "closeButtonIconWidth": 12,
 "data": {
  "name": "Window21832"
 }
},
{
 "rotationY": 0,
 "hfov": 14.45,
 "popupMaxHeight": "60%",
 "rotationX": 0,
 "rotationZ": 0,
 "popupMaxWidth": "60%",
 "id": "popup_E73D8009_F751_C1B6_41D1_F545AA7B4716",
 "hideEasing": "cubic_out",
 "image": {
  "levels": [
   {
    "url": "media/popup_E73D8009_F751_C1B6_41D1_F545AA7B4716_0_1.png",
    "width": 1024,
    "height": 576,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "pitch": -11.97,
 "popupDistance": 100,
 "showDuration": 500,
 "hideDuration": 500,
 "showEasing": "cubic_in",
 "yaw": 106.19,
 "class": "PopupPanoramaOverlay"
},
{
 "easing": "cubic_in_out",
 "id": "effect_F1E2E9AB_E679_B2D9_41E0_3F144649AE49",
 "duration": 1000,
 "class": "FadeInEffect"
},
{
 "rotationY": 0,
 "hfov": 2.44,
 "popupMaxHeight": "60%",
 "rotationX": 0,
 "rotationZ": 0,
 "popupMaxWidth": "60%",
 "id": "popup_07F8080A_1441_7E32_41B1_C0F25726E064",
 "hideEasing": "cubic_out",
 "image": {
  "levels": [
   {
    "url": "media/popup_07F8080A_1441_7E32_41B1_C0F25726E064_0_1.png",
    "width": 1024,
    "height": 576,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "pitch": -2.52,
 "popupDistance": 100,
 "showDuration": 500,
 "hideDuration": 500,
 "showEasing": "cubic_in",
 "yaw": 2.52,
 "class": "PopupPanoramaOverlay"
},
{
 "levels": [
  {
   "url": "media/popup_F89EFE78_F752_7E56_41D6_D9898D22BC4E_0_0.png",
   "width": 1920,
   "height": 1080,
   "class": "ImageResourceLevel"
  },
  {
   "url": "media/popup_F89EFE78_F752_7E56_41D6_D9898D22BC4E_0_1.png",
   "width": 1024,
   "height": 576,
   "class": "ImageResourceLevel"
  },
  {
   "url": "media/popup_F89EFE78_F752_7E56_41D6_D9898D22BC4E_0_2.png",
   "width": 512,
   "height": 288,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "ImageResource_EF7E5916_F7B3_C3DA_41D4_63475B40AFB6",
 "class": "ImageResource"
},
{
 "levels": [
  {
   "url": "media/popup_8C35679B_9D3C_419B_41E2_840DF311F1F2_0_0.png",
   "width": 1920,
   "height": 1080,
   "class": "ImageResourceLevel"
  },
  {
   "url": "media/popup_8C35679B_9D3C_419B_41E2_840DF311F1F2_0_1.png",
   "width": 1024,
   "height": 576,
   "class": "ImageResourceLevel"
  },
  {
   "url": "media/popup_8C35679B_9D3C_419B_41E2_840DF311F1F2_0_2.png",
   "width": 512,
   "height": 288,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "ImageResource_89BBAA01_9D24_4264_41E3_79C30A1CD7ED",
 "class": "ImageResource"
},
{
 "rotationY": 0,
 "hfov": 11.96,
 "popupMaxHeight": "60%",
 "rotationX": 0,
 "rotationZ": 0,
 "popupMaxWidth": "60%",
 "id": "popup_E7DAE6CC_F752_4E4E_41ED_B0F8AB9C6C25",
 "hideEasing": "cubic_out",
 "image": {
  "levels": [
   {
    "url": "media/popup_E7DAE6CC_F752_4E4E_41ED_B0F8AB9C6C25_0_1.png",
    "width": 1024,
    "height": 576,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "pitch": 18.97,
 "popupDistance": 100,
 "showDuration": 500,
 "hideDuration": 500,
 "showEasing": "cubic_in",
 "yaw": 12.3,
 "class": "PopupPanoramaOverlay"
},
{
 "rotationY": 0,
 "hfov": 8.78,
 "popupMaxHeight": "60%",
 "rotationX": 0,
 "rotationZ": 0,
 "popupMaxWidth": "60%",
 "id": "popup_E77CC4B2_F752_42DA_41D4_785EAA2AE93E",
 "hideEasing": "cubic_out",
 "image": {
  "levels": [
   {
    "url": "media/popup_E77CC4B2_F752_42DA_41D4_785EAA2AE93E_0_1.png",
    "width": 1024,
    "height": 576,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "pitch": -5.1,
 "popupDistance": 100,
 "showDuration": 500,
 "hideDuration": 500,
 "showEasing": "cubic_in",
 "yaw": 18.58,
 "class": "PopupPanoramaOverlay"
},
{
 "rotationY": 0,
 "hfov": 3.27,
 "popupMaxHeight": "60%",
 "rotationX": 0,
 "rotationZ": 0,
 "popupMaxWidth": "60%",
 "id": "popup_E750C153_F604_76CA_41E4_474C447C3E57",
 "hideEasing": "cubic_out",
 "image": {
  "levels": [
   {
    "url": "media/popup_E750C153_F604_76CA_41E4_474C447C3E57_0_1.png",
    "width": 1024,
    "height": 576,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "pitch": 7.51,
 "popupDistance": 100,
 "showDuration": 500,
 "hideDuration": 500,
 "showEasing": "cubic_in",
 "yaw": -143.49,
 "class": "PopupPanoramaOverlay"
},
{
 "audio": "this.audioresource_FF21C99D_EDC4_70CA_41AA_9B833DF0FBE0",
 "id": "audio_FE4B74D4_EDC4_3059_41C3_BF1FC4735211",
 "data": {
  "label": "Sound Virtual Tour"
 },
 "autoplay": true,
 "class": "PanoramaAudio"
},
{
 "levels": [
  {
   "url": "media/popup_E7346AA2_F756_46FA_41E5_AF929DF86AE9_0_0.png",
   "width": 1920,
   "height": 1080,
   "class": "ImageResourceLevel"
  },
  {
   "url": "media/popup_E7346AA2_F756_46FA_41E5_AF929DF86AE9_0_1.png",
   "width": 1024,
   "height": 576,
   "class": "ImageResourceLevel"
  },
  {
   "url": "media/popup_E7346AA2_F756_46FA_41E5_AF929DF86AE9_0_2.png",
   "width": 512,
   "height": 288,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "ImageResource_EF0B4935_F7B3_C3DE_41D8_271AC088866B",
 "class": "ImageResource"
},
{
 "levels": [
  {
   "url": "media/popup_F8B56BF6_F752_C65A_41C1_F432514F4542_0_0.png",
   "width": 1920,
   "height": 1080,
   "class": "ImageResourceLevel"
  },
  {
   "url": "media/popup_F8B56BF6_F752_C65A_41C1_F432514F4542_0_1.png",
   "width": 1024,
   "height": 576,
   "class": "ImageResourceLevel"
  },
  {
   "url": "media/popup_F8B56BF6_F752_C65A_41C1_F432514F4542_0_2.png",
   "width": 512,
   "height": 288,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "ImageResource_EF31E984_F7B3_C2BE_41EA_7AEAD3E27AD9",
 "class": "ImageResource"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "initialPosition": {
  "yaw": 0,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_DF08F593_D523_F5BA_41E5_3AAEBE3AF892_camera",
 "class": "PanoramaCamera"
},
{
 "rotationY": 0,
 "hfov": 5.9,
 "showEasing": "cubic_in",
 "hideEasing": "cubic_out",
 "rotationZ": 0,
 "popupMaxWidth": "95%",
 "id": "popup_3585CE71_1307_2A76_41A5_C16428D7FD8C",
 "rotationX": 0,
 "class": "PopupPanoramaOverlay",
 "loop": false,
 "pitch": 8.43,
 "popupDistance": 100,
 "showDuration": 500,
 "hideDuration": 500,
 "popupMaxHeight": "95%",
 "yaw": 35.21,
 "autoplay": true,
 "video": {
  "width": 2986,
  "mp4Url": "media/video_3BF8CD99_1305_6EA9_41A3_97DBAA5790E4.mp4",
  "height": 1680,
  "class": "VideoResource"
 }
},
{
 "thumbnailUrl": "media/panorama_DF08E4A2_D523_EB9A_41E5_F673F160A0A8_t.jpg",
 "overlays": [
  "this.overlay_C51B1B94_D718_07EE_41E5_BF17948B40FF",
  "this.overlay_E83FF66D_E7BB_3F8E_41BA_9FF899D524F7",
  "this.overlay_090197B7_1B3B_B3E7_41B3_6795EA5EB489"
 ],
 "adjacentPanoramas": [
  {
   "backwardYaw": -31.93,
   "yaw": -73.02,
   "panorama": "this.panorama_DF08F593_D523_F5BA_41E5_3AAEBE3AF892",
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "backwardYaw": 176.26,
   "yaw": 18.23,
   "panorama": "this.panorama_DF093389_D522_2D96_418B_B49E63F3C24E",
   "distance": 1,
   "class": "AdjacentPanorama"
  }
 ],
 "label": "Menuju Pintu Keluar",
 "id": "panorama_DF08E4A2_D523_EB9A_41E5_F673F160A0A8",
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_DF08E4A2_D523_EB9A_41E5_F673F160A0A8_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_DF08E4A2_D523_EB9A_41E5_F673F160A0A8_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_DF08E4A2_D523_EB9A_41E5_F673F160A0A8_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_DF08E4A2_D523_EB9A_41E5_F673F160A0A8_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_DF08E4A2_D523_EB9A_41E5_F673F160A0A8_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_DF08E4A2_D523_EB9A_41E5_F673F160A0A8_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_DF08E4A2_D523_EB9A_41E5_F673F160A0A8_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_DF08E4A2_D523_EB9A_41E5_F673F160A0A8_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_DF08E4A2_D523_EB9A_41E5_F673F160A0A8_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_DF08E4A2_D523_EB9A_41E5_F673F160A0A8_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_DF08E4A2_D523_EB9A_41E5_F673F160A0A8_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_DF08E4A2_D523_EB9A_41E5_F673F160A0A8_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_DF08E4A2_D523_EB9A_41E5_F673F160A0A8_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_DF08E4A2_D523_EB9A_41E5_F673F160A0A8_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_DF08E4A2_D523_EB9A_41E5_F673F160A0A8_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_DF08E4A2_D523_EB9A_41E5_F673F160A0A8_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_DF08E4A2_D523_EB9A_41E5_F673F160A0A8_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_DF08E4A2_D523_EB9A_41E5_F673F160A0A8_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_DF08E4A2_D523_EB9A_41E5_F673F160A0A8_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 180,
 "hfovMin": "150%",
 "pitch": 0,
 "hfov": 360,
 "hfovMax": 130,
 "partial": false,
 "class": "Panorama"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "initialPosition": {
  "yaw": 0,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_DF614CA2_D522_FB9A_41E1_A0F7B63CBAED_camera",
 "class": "PanoramaCamera"
},
{
 "easing": "cubic_in_out",
 "id": "effect_E4050FE6_F752_5E7A_41A4_343B7AE4E316",
 "duration": 1000,
 "class": "FadeOutEffect"
},
{
 "rotationY": 0,
 "hfov": 18.63,
 "popupMaxHeight": "60%",
 "rotationX": 0,
 "rotationZ": 0,
 "popupMaxWidth": "60%",
 "id": "popup_F838D999_F751_C2D6_41D7_DF61A641B54F",
 "hideEasing": "cubic_out",
 "image": {
  "levels": [
   {
    "url": "media/popup_F838D999_F751_C2D6_41D7_DF61A641B54F_0_1.png",
    "width": 1024,
    "height": 576,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "pitch": -12.72,
 "popupDistance": 100,
 "showDuration": 500,
 "hideDuration": 500,
 "showEasing": "cubic_in",
 "yaw": 17.48,
 "class": "PopupPanoramaOverlay"
},
{
 "headerBackgroundColorDirection": "vertical",
 "id": "window_BCED4CBA_B65D_3544_41D8_ACD07201F484",
 "closeButtonPressedBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "titlePaddingLeft": 5,
 "paddingBottom": 0,
 "minHeight": 20,
 "closeButtonBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "shadow": true,
 "headerPaddingLeft": 10,
 "closeButtonPressedIconLineWidth": 5,
 "closeButtonRollOverBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "headerBackgroundOpacity": 0,
 "closeButtonPressedBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "modal": true,
 "titlePaddingBottom": 5,
 "backgroundOpacity": 1,
 "bodyPaddingLeft": 0,
 "bodyPaddingBottom": 0,
 "shadowVerticalLength": 0,
 "verticalAlign": "middle",
 "closeButtonPressedBorderSize": 0,
 "paddingRight": 0,
 "closeButtonRollOverBorderSize": 0,
 "veilOpacity": 0.4,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "bodyPaddingTop": 0,
 "backgroundColor": [],
 "borderSize": 0,
 "veilShowEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeInEffect"
 },
 "closeButtonPaddingTop": 5,
 "closeButtonPressedBackgroundColorDirection": "vertical",
 "shadowSpread": 1,
 "closeButtonPressedBorderColor": "#000000",
 "headerPaddingRight": 0,
 "propagateClick": false,
 "closeButtonRollOverBackgroundColorDirection": "vertical",
 "bodyPaddingRight": 0,
 "bodyBackgroundColorDirection": "vertical",
 "closeButtonPressedIconColor": "#888888",
 "titlePaddingTop": 5,
 "closeButtonRollOverBackgroundOpacity": 0.3,
 "closeButtonIconColor": "#000000",
 "closeButtonPaddingLeft": 5,
 "closeButtonRollOverIconColor": "#666666",
 "scrollBarMargin": 2,
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "scrollBarWidth": 10,
 "closeButtonBorderColor": "#000000",
 "titleFontFamily": "Arial",
 "overflow": "scroll",
 "class": "Window",
 "closeButtonRollOverIconLineWidth": 5,
 "headerVerticalAlign": "middle",
 "backgroundColorDirection": "vertical",
 "layout": "vertical",
 "closeButtonBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "showEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeInEffect"
 },
 "scrollBarOpacity": 0.5,
 "children": [
  "this.viewer_uidB8AE685B_B665_5DC5_41BB_306851C7AC05"
 ],
 "shadowColor": "#000000",
 "closeButtonBackgroundColorDirection": "vertical",
 "closeButtonPaddingRight": 5,
 "veilColorRatios": [
  0,
  1
 ],
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "footerHeight": 5,
 "paddingTop": 0,
 "footerBackgroundOpacity": 0,
 "shadowBlurRadius": 6,
 "scrollBarVisible": "rollOver",
 "closeButtonBorderSize": 0,
 "scrollBarColor": "#000000",
 "horizontalAlign": "center",
 "minWidth": 20,
 "veilHideEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeOutEffect"
 },
 "closeButtonBackgroundOpacity": 0.3,
 "paddingLeft": 0,
 "shadowOpacity": 0.5,
 "contentOpaque": false,
 "headerPaddingBottom": 5,
 "closeButtonBorderRadius": 0,
 "hideEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeOutEffect"
 },
 "closeButtonPressedBackgroundOpacity": 0.3,
 "footerBackgroundColorDirection": "vertical",
 "borderRadius": 5,
 "titleFontSize": "1.29vmin",
 "gap": 10,
 "closeButtonIconHeight": 20,
 "titlePaddingRight": 5,
 "headerPaddingTop": 10,
 "backgroundColorRatios": [],
 "shadowHorizontalLength": 3,
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "bodyBackgroundOpacity": 0,
 "closeButtonRollOverBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "closeButtonPaddingBottom": 5,
 "closeButtonRollOverBorderColor": "#000000",
 "closeButtonIconLineWidth": 5,
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "closeButtonIconWidth": 20,
 "data": {
  "name": "Window590"
 }
},
{
 "levels": [
  {
   "url": "media/popup_E7C79148_F772_43B6_4172_B914AA9689FA_0_0.png",
   "width": 1920,
   "height": 1080,
   "class": "ImageResourceLevel"
  },
  {
   "url": "media/popup_E7C79148_F772_43B6_4172_B914AA9689FA_0_1.png",
   "width": 1024,
   "height": 576,
   "class": "ImageResourceLevel"
  },
  {
   "url": "media/popup_E7C79148_F772_43B6_4172_B914AA9689FA_0_2.png",
   "width": 512,
   "height": 288,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "ImageResource_EF25E965_F7B3_C27E_41DE_B8337C4B446F",
 "class": "ImageResource"
},
{
 "levels": [
  {
   "url": "media/popup_F9C9C64B_F604_1ADA_41D7_1ADF5FBC2C73_0_0.png",
   "width": 1920,
   "height": 1080,
   "class": "ImageResourceLevel"
  },
  {
   "url": "media/popup_F9C9C64B_F604_1ADA_41D7_1ADF5FBC2C73_0_1.png",
   "width": 1024,
   "height": 576,
   "class": "ImageResourceLevel"
  },
  {
   "url": "media/popup_F9C9C64B_F604_1ADA_41D7_1ADF5FBC2C73_0_2.png",
   "width": 512,
   "height": 288,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "ImageResource_E706DB1B_F60C_0A7A_41E9_3302C21F0E8E",
 "class": "ImageResource"
},
{
 "rotationY": 0,
 "hfov": 8.2,
 "popupMaxHeight": "60%",
 "rotationX": 0,
 "rotationZ": 0,
 "popupMaxWidth": "60%",
 "id": "popup_8C8E4019_9D24_7E64_41D0_F472E739C7F1",
 "hideEasing": "cubic_out",
 "image": {
  "levels": [
   {
    "url": "media/popup_8C8E4019_9D24_7E64_41D0_F472E739C7F1_0_1.png",
    "width": 1024,
    "height": 576,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "pitch": 9.56,
 "popupDistance": 100,
 "showDuration": 500,
 "hideDuration": 500,
 "showEasing": "cubic_in",
 "yaw": -11.77,
 "class": "PopupPanoramaOverlay"
},
{
 "items": [
  {
   "media": "this.video_31307D64_1305_2F9F_4183_6128BE5FB45C",
   "start": "this.viewer_uidB8ABE85B_B665_5DC5_41C3_11AFB37BB933VideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.PlayList_B96D9899_B665_5D44_41D3_E0DEF6457737, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.PlayList_B96D9899_B665_5D44_41D3_E0DEF6457737, 0)",
   "begin": "this.fixTogglePlayPauseButton(this.viewer_uidB8ABE85B_B665_5DC5_41C3_11AFB37BB933VideoPlayer)",
   "player": "this.viewer_uidB8ABE85B_B665_5DC5_41C3_11AFB37BB933VideoPlayer",
   "class": "VideoPlayListItem"
  }
 ],
 "id": "PlayList_B96D9899_B665_5D44_41D3_E0DEF6457737",
 "class": "PlayList"
},
{
 "rotationY": 0,
 "hfov": 4.95,
 "popupMaxHeight": "60%",
 "rotationX": 0,
 "rotationZ": 0,
 "popupMaxWidth": "60%",
 "id": "popup_E3D4E80F_F752_C1CA_41E1_6844F1334909",
 "hideEasing": "cubic_out",
 "image": {
  "levels": [
   {
    "url": "media/popup_E3D4E80F_F752_C1CA_41E1_6844F1334909_0_1.png",
    "width": 1024,
    "height": 576,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "pitch": -1.63,
 "popupDistance": 100,
 "showDuration": 500,
 "hideDuration": 500,
 "showEasing": "cubic_in",
 "yaw": -5.2,
 "class": "PopupPanoramaOverlay"
},
{
 "levels": [
  {
   "url": "media/popup_E7726334_F776_C7DE_41DD_3C7698230E38_0_0.png",
   "width": 1920,
   "height": 1080,
   "class": "ImageResourceLevel"
  },
  {
   "url": "media/popup_E7726334_F776_C7DE_41DD_3C7698230E38_0_1.png",
   "width": 1024,
   "height": 576,
   "class": "ImageResourceLevel"
  },
  {
   "url": "media/popup_E7726334_F776_C7DE_41DD_3C7698230E38_0_2.png",
   "width": 512,
   "height": 288,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "ImageResource_EF2D8974_F7B3_C25E_41DF_2D7B8E86B582",
 "class": "ImageResource"
},
{
 "thumbnailUrl": "media/panorama_DF0968AD_D521_DBEE_41E8_53FAFFC84B8C_t.jpg",
 "overlays": [
  "this.overlay_C1D65ADE_D708_011A_41E3_BD7F59845478",
  "this.overlay_C0320918_D708_00E5_41DC_F4B3AB0B96C4",
  "this.overlay_C05058D1_D708_0166_41BF_D0CB82EE610B",
  "this.overlay_23DE6D2E_12FD_2FEB_4175_E4E2377C4A7E",
  "this.overlay_3C654651_12FD_DDB9_41B3_2AE15FDCC56F",
  "this.popup_238F96F2_12FC_DA7A_4187_0483B970626B",
  "this.popup_235F54A4_12FF_DE9E_41A4_6F2D44E76287",
  "this.overlay_0AF014A7_1B38_D598_4179_395D1A3288B1",
  "this.overlay_E3E94AE7_ED42_8BA6_41E0_DBFB68D378DE",
  "this.popup_F92AE07E_F693_D3B9_41DA_7C9023FAE273"
 ],
 "adjacentPanoramas": [
  {
   "backwardYaw": 2.15,
   "yaw": -168.54,
   "panorama": "this.panorama_DF095A4F_D521_DEAA_41E5_B09830FCA2B6",
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "backwardYaw": 139.66,
   "yaw": 50.07,
   "panorama": "this.panorama_DF091129_D522_6A96_41CB_A7A82D7D5CF4",
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "backwardYaw": 175.19,
   "yaw": -76.79,
   "panorama": "this.panorama_DF0AF60D_D522_76A9_41E3_6D08C1C16B94",
   "distance": 1,
   "class": "AdjacentPanorama"
  }
 ],
 "label": "Menuju Maskerdam",
 "id": "panorama_DF0968AD_D521_DBEE_41E8_53FAFFC84B8C",
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_DF0968AD_D521_DBEE_41E8_53FAFFC84B8C_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_DF0968AD_D521_DBEE_41E8_53FAFFC84B8C_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_DF0968AD_D521_DBEE_41E8_53FAFFC84B8C_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_DF0968AD_D521_DBEE_41E8_53FAFFC84B8C_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_DF0968AD_D521_DBEE_41E8_53FAFFC84B8C_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_DF0968AD_D521_DBEE_41E8_53FAFFC84B8C_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_DF0968AD_D521_DBEE_41E8_53FAFFC84B8C_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_DF0968AD_D521_DBEE_41E8_53FAFFC84B8C_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_DF0968AD_D521_DBEE_41E8_53FAFFC84B8C_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_DF0968AD_D521_DBEE_41E8_53FAFFC84B8C_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_DF0968AD_D521_DBEE_41E8_53FAFFC84B8C_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_DF0968AD_D521_DBEE_41E8_53FAFFC84B8C_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_DF0968AD_D521_DBEE_41E8_53FAFFC84B8C_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_DF0968AD_D521_DBEE_41E8_53FAFFC84B8C_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_DF0968AD_D521_DBEE_41E8_53FAFFC84B8C_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_DF0968AD_D521_DBEE_41E8_53FAFFC84B8C_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_DF0968AD_D521_DBEE_41E8_53FAFFC84B8C_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_DF0968AD_D521_DBEE_41E8_53FAFFC84B8C_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_DF0968AD_D521_DBEE_41E8_53FAFFC84B8C_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 180,
 "hfovMin": "150%",
 "pitch": 0,
 "hfov": 360,
 "hfovMax": 130,
 "partial": false,
 "class": "Panorama"
},
{
 "easing": "cubic_in_out",
 "id": "effect_F1EE79B0_E679_B2C7_41EA_8B3612E0B253",
 "duration": 1000,
 "class": "FadeOutEffect"
},
{
 "levels": [
  {
   "url": "media/popup_E7090508_F772_43C3_41E6_FB3DCBCADC28_0_0.png",
   "width": 1920,
   "height": 1080,
   "class": "ImageResourceLevel"
  },
  {
   "url": "media/popup_E7090508_F772_43C3_41E6_FB3DCBCADC28_0_1.png",
   "width": 1024,
   "height": 576,
   "class": "ImageResourceLevel"
  },
  {
   "url": "media/popup_E7090508_F772_43C3_41E6_FB3DCBCADC28_0_2.png",
   "width": 512,
   "height": 288,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "ImageResource_EF374984_F7B3_C2BE_41C1_F20D808E3FD0",
 "class": "ImageResource"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -129.93,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "id": "camera_B9082E8C_B665_5543_41C3_2E68DB39A7A5",
 "class": "PanoramaCamera"
},
{
 "thumbnailUrl": "media/panorama_DF0AD51E_D522_6AAB_41E0_02491679C908_t.jpg",
 "overlays": [
  "this.overlay_C177FC17_D738_00EA_41DC_40D41D42EA3C",
  "this.overlay_0908E1DB_1B39_CFA8_41BA_3A37B6AE58BA",
  "this.overlay_E2191FB8_ED5F_89AB_41BE_E2E22A7C9E5C",
  "this.popup_F88BAF52_F753_DE5A_41EB_9180A476FA94"
 ],
 "adjacentPanoramas": [
  {
   "backwardYaw": 89.69,
   "yaw": -151.85,
   "panorama": "this.panorama_DF0AF60D_D522_76A9_41E3_6D08C1C16B94",
   "distance": 1,
   "class": "AdjacentPanorama"
  }
 ],
 "label": "Bale Pawedaan",
 "id": "panorama_DF0AD51E_D522_6AAB_41E0_02491679C908",
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_DF0AD51E_D522_6AAB_41E0_02491679C908_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_DF0AD51E_D522_6AAB_41E0_02491679C908_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_DF0AD51E_D522_6AAB_41E0_02491679C908_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_DF0AD51E_D522_6AAB_41E0_02491679C908_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_DF0AD51E_D522_6AAB_41E0_02491679C908_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_DF0AD51E_D522_6AAB_41E0_02491679C908_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_DF0AD51E_D522_6AAB_41E0_02491679C908_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_DF0AD51E_D522_6AAB_41E0_02491679C908_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_DF0AD51E_D522_6AAB_41E0_02491679C908_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_DF0AD51E_D522_6AAB_41E0_02491679C908_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_DF0AD51E_D522_6AAB_41E0_02491679C908_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_DF0AD51E_D522_6AAB_41E0_02491679C908_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_DF0AD51E_D522_6AAB_41E0_02491679C908_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_DF0AD51E_D522_6AAB_41E0_02491679C908_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_DF0AD51E_D522_6AAB_41E0_02491679C908_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_DF0AD51E_D522_6AAB_41E0_02491679C908_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_DF0AD51E_D522_6AAB_41E0_02491679C908_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_DF0AD51E_D522_6AAB_41E0_02491679C908_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_DF0AD51E_D522_6AAB_41E0_02491679C908_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 180,
 "hfovMin": "150%",
 "pitch": 0,
 "hfov": 360,
 "hfovMax": 130,
 "mapLocations": [
  {
   "map": "this.map_65C54D3C_6BC1_BCE6_41C8_91C0EDF11345",
   "x": 446.41,
   "angle": 0,
   "y": 222.99,
   "class": "PanoramaMapLocation"
  }
 ],
 "partial": false,
 "class": "Panorama"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "initialPosition": {
  "yaw": 28.85,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_B8867D52_B665_57C7_41E6_141996F508B7",
 "class": "PanoramaCamera"
},
{
 "rotationY": 0,
 "hfov": 4.01,
 "popupMaxHeight": "60%",
 "rotationX": 0,
 "rotationZ": 0,
 "popupMaxWidth": "60%",
 "id": "popup_8C5811A5_9D3C_C1AC_41E2_898EC55DF924",
 "hideEasing": "cubic_out",
 "image": {
  "levels": [
   {
    "url": "media/popup_8C5811A5_9D3C_C1AC_41E2_898EC55DF924_0_1.png",
    "width": 1024,
    "height": 576,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "pitch": -1.34,
 "popupDistance": 100,
 "showDuration": 500,
 "hideDuration": 500,
 "showEasing": "cubic_in",
 "yaw": 2.33,
 "class": "PopupPanoramaOverlay"
},
{
 "thumbnailUrl": "media/panorama_DF095A4F_D521_DEAA_41E5_B09830FCA2B6_t.jpg",
 "overlays": [
  "this.overlay_CF23B11E_D708_031A_41C6_E9E48FE96046",
  "this.overlay_CFA80D37_D708_032A_41CC_787435A701A3",
  "this.overlay_CF81971C_D718_0F1E_41E0_AD2B7AC37929",
  "this.overlay_0AAA945A_1B39_74A8_4191_F33AB27689EF",
  "this.overlay_FD5CA70E_ED41_BA67_41CA_50953D279C8C",
  "this.overlay_E277D69C_ED46_FA6B_41BB_ACA98AE91990",
  "this.popup_F9561C50_F694_B3C9_41E9_AA168EBE6368",
  "this.popup_F9C15111_F695_554A_41E5_D6CD11486A17",
  "this.overlay_0556E6F9_1440_93DE_41A4_94E1FF9016B8",
  "this.overlay_04CDAC68_1441_96FE_4193_29AC1110872E",
  "this.popup_07F8080A_1441_7E32_41B1_C0F25726E064",
  "this.popup_0439CC12_1441_9652_41AB_D3FBB769D261"
 ],
 "adjacentPanoramas": [
  {
   "backwardYaw": -168.54,
   "yaw": 2.15,
   "panorama": "this.panorama_DF0968AD_D521_DBEE_41E8_53FAFFC84B8C",
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "backwardYaw": 30.57,
   "yaw": 94.83,
   "panorama": "this.panorama_DF095ADC_D526_3FAE_41E8_221CDD95ABD4",
   "distance": 1,
   "class": "AdjacentPanorama"
  }
 ],
 "label": "Tempat penerimaan tamu",
 "id": "panorama_DF095A4F_D521_DEAA_41E5_B09830FCA2B6",
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_DF095A4F_D521_DEAA_41E5_B09830FCA2B6_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_DF095A4F_D521_DEAA_41E5_B09830FCA2B6_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_DF095A4F_D521_DEAA_41E5_B09830FCA2B6_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_DF095A4F_D521_DEAA_41E5_B09830FCA2B6_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_DF095A4F_D521_DEAA_41E5_B09830FCA2B6_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_DF095A4F_D521_DEAA_41E5_B09830FCA2B6_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_DF095A4F_D521_DEAA_41E5_B09830FCA2B6_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_DF095A4F_D521_DEAA_41E5_B09830FCA2B6_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_DF095A4F_D521_DEAA_41E5_B09830FCA2B6_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_DF095A4F_D521_DEAA_41E5_B09830FCA2B6_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_DF095A4F_D521_DEAA_41E5_B09830FCA2B6_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_DF095A4F_D521_DEAA_41E5_B09830FCA2B6_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_DF095A4F_D521_DEAA_41E5_B09830FCA2B6_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_DF095A4F_D521_DEAA_41E5_B09830FCA2B6_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_DF095A4F_D521_DEAA_41E5_B09830FCA2B6_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_DF095A4F_D521_DEAA_41E5_B09830FCA2B6_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_DF095A4F_D521_DEAA_41E5_B09830FCA2B6_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_DF095A4F_D521_DEAA_41E5_B09830FCA2B6_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_DF095A4F_D521_DEAA_41E5_B09830FCA2B6_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 180,
 "hfovMin": "150%",
 "pitch": 0,
 "hfov": 360,
 "hfovMax": 130,
 "partial": false,
 "class": "Panorama"
},
{
 "levels": [
  {
   "url": "media/popup_054E3524_1447_9676_4193_7B76CE2567A8_0_0.png",
   "width": 1920,
   "height": 1080,
   "class": "ImageResourceLevel"
  },
  {
   "url": "media/popup_054E3524_1447_9676_4193_7B76CE2567A8_0_1.png",
   "width": 1024,
   "height": 576,
   "class": "ImageResourceLevel"
  },
  {
   "url": "media/popup_054E3524_1447_9676_4193_7B76CE2567A8_0_2.png",
   "width": 512,
   "height": 288,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "ImageResource_07E1E9E7_1441_B1F2_419A_3510689E9C78",
 "class": "ImageResource"
},
{
 "thumbnailUrl": "media/panorama_DF08F593_D523_F5BA_41E5_3AAEBE3AF892_t.jpg",
 "overlays": [
  "this.overlay_C638048A_D718_01E5_41E4_4AF5308F3E9C",
  "this.overlay_F64FDEDB_E7E9_0C89_41E9_C12818A06857",
  "this.overlay_3BA07E7A_1307_2A6A_4155_C84AB01EBFCB",
  "this.popup_34360BE0_1305_2A97_41AD_952DA148E558",
  "this.overlay_3B38D8DA_1305_56AB_41B0_D0B2EB40AB9D",
  "this.popup_3B7B5904_133B_579E_4175_F10E2F35776C",
  "this.overlay_3BA26215_133B_55B9_41A5_75E520E064A3",
  "this.popup_3AE55A46_133C_F59A_41A3_E48781F5A841",
  "this.overlay_0AE2A815_1B3B_5CBB_41B9_D1F1E78B7D41"
 ],
 "adjacentPanoramas": [
  {
   "backwardYaw": -80.02,
   "yaw": 151.04,
   "panorama": "this.panorama_DF08C6FA_D523_D76A_41D5_7F86EC1FD1C3",
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "backwardYaw": -73.02,
   "yaw": -31.93,
   "panorama": "this.panorama_DF08E4A2_D523_EB9A_41E5_F673F160A0A8",
   "distance": 1,
   "class": "AdjacentPanorama"
  }
 ],
 "label": "Lorong Galeri",
 "id": "panorama_DF08F593_D523_F5BA_41E5_3AAEBE3AF892",
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_DF08F593_D523_F5BA_41E5_3AAEBE3AF892_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_DF08F593_D523_F5BA_41E5_3AAEBE3AF892_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_DF08F593_D523_F5BA_41E5_3AAEBE3AF892_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_DF08F593_D523_F5BA_41E5_3AAEBE3AF892_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_DF08F593_D523_F5BA_41E5_3AAEBE3AF892_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_DF08F593_D523_F5BA_41E5_3AAEBE3AF892_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_DF08F593_D523_F5BA_41E5_3AAEBE3AF892_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_DF08F593_D523_F5BA_41E5_3AAEBE3AF892_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_DF08F593_D523_F5BA_41E5_3AAEBE3AF892_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_DF08F593_D523_F5BA_41E5_3AAEBE3AF892_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_DF08F593_D523_F5BA_41E5_3AAEBE3AF892_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_DF08F593_D523_F5BA_41E5_3AAEBE3AF892_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_DF08F593_D523_F5BA_41E5_3AAEBE3AF892_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_DF08F593_D523_F5BA_41E5_3AAEBE3AF892_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_DF08F593_D523_F5BA_41E5_3AAEBE3AF892_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_DF08F593_D523_F5BA_41E5_3AAEBE3AF892_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_DF08F593_D523_F5BA_41E5_3AAEBE3AF892_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_DF08F593_D523_F5BA_41E5_3AAEBE3AF892_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_DF08F593_D523_F5BA_41E5_3AAEBE3AF892_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 180,
 "hfovMin": "150%",
 "pitch": 0,
 "hfov": 360,
 "hfovMax": 130,
 "partial": false,
 "class": "Panorama"
},
{
 "rotationY": 0,
 "hfov": 6.49,
 "popupMaxHeight": "60%",
 "rotationX": 0,
 "rotationZ": 0,
 "popupMaxWidth": "60%",
 "id": "popup_F89EFE78_F752_7E56_41D6_D9898D22BC4E",
 "hideEasing": "cubic_out",
 "image": {
  "levels": [
   {
    "url": "media/popup_F89EFE78_F752_7E56_41D6_D9898D22BC4E_0_1.png",
    "width": 1024,
    "height": 576,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "pitch": 0.77,
 "popupDistance": 100,
 "showDuration": 500,
 "hideDuration": 500,
 "showEasing": "cubic_in",
 "yaw": -135.53,
 "class": "PopupPanoramaOverlay"
},
{
 "easing": "cubic_in_out",
 "id": "effect_F1E1A9A7_E679_B2C9_41E0_BBE802B642A0",
 "duration": 1000,
 "class": "FadeOutEffect"
},
{
 "rotationY": 0,
 "hfov": 12.18,
 "popupMaxHeight": "60%",
 "rotationX": 0,
 "rotationZ": 0,
 "popupMaxWidth": "60%",
 "id": "popup_E7346AA2_F756_46FA_41E5_AF929DF86AE9",
 "hideEasing": "cubic_out",
 "image": {
  "levels": [
   {
    "url": "media/popup_E7346AA2_F756_46FA_41E5_AF929DF86AE9_0_1.png",
    "width": 1024,
    "height": 576,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "pitch": -9.26,
 "popupDistance": 100,
 "showDuration": 500,
 "hideDuration": 500,
 "showEasing": "cubic_in",
 "yaw": -74.54,
 "class": "PopupPanoramaOverlay"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "initialPosition": {
  "yaw": 106.98,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_B99B7FC5_B665_52CC_41DB_57E6DD291FA9",
 "class": "PanoramaCamera"
},
{
 "easing": "cubic_in_out",
 "id": "effect_F1ECB9AF_E679_B2D9_41E4_CF3DAE069B47",
 "duration": 1000,
 "class": "FadeOutEffect"
},
{
 "levels": [
  {
   "url": "media/popup_F8B6911A_F752_43CA_41D4_DAED5D716626_0_0.png",
   "width": 1920,
   "height": 1080,
   "class": "ImageResourceLevel"
  },
  {
   "url": "media/popup_F8B6911A_F752_43CA_41D4_DAED5D716626_0_1.png",
   "width": 1024,
   "height": 576,
   "class": "ImageResourceLevel"
  },
  {
   "url": "media/popup_F8B6911A_F752_43CA_41D4_DAED5D716626_0_2.png",
   "width": 512,
   "height": 288,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "ImageResource_EF17F945_F7B3_C3BE_41B9_077E702740E4",
 "class": "ImageResource"
},
{
 "rotationY": 0,
 "hfov": 14.81,
 "popupMaxHeight": "60%",
 "rotationX": 0,
 "rotationZ": 0,
 "popupMaxWidth": "60%",
 "id": "popup_E76B42A0_F771_C6F6_41D0_13870F845D3B",
 "hideEasing": "cubic_out",
 "image": {
  "levels": [
   {
    "url": "media/popup_E76B42A0_F771_C6F6_41D0_13870F845D3B_0_1.png",
    "width": 1024,
    "height": 576,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "pitch": 2.67,
 "popupDistance": 100,
 "showDuration": 500,
 "hideDuration": 500,
 "showEasing": "cubic_in",
 "yaw": 87.11,
 "class": "PopupPanoramaOverlay"
},
{
 "titleFontColor": "#000000",
 "headerBackgroundColorDirection": "vertical",
 "id": "window_ACAF8AAC_B81D_2109_41C6_1F69ADB14E93",
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "width": 400,
 "titleTextDecoration": "none",
 "titlePaddingLeft": 5,
 "paddingBottom": 0,
 "minHeight": 20,
 "headerBorderColor": "#000000",
 "closeButtonBackgroundColor": [],
 "shadow": true,
 "headerPaddingLeft": 10,
 "closeButtonPressedIconLineWidth": 3,
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "headerBackgroundOpacity": 1,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "modal": true,
 "headerBorderSize": 0,
 "titlePaddingBottom": 5,
 "backgroundOpacity": 1,
 "bodyPaddingLeft": 5,
 "bodyPaddingBottom": 5,
 "shadowVerticalLength": 0,
 "verticalAlign": "middle",
 "height": 600,
 "veilOpacity": 0.4,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "bodyPaddingTop": 5,
 "paddingRight": 0,
 "borderSize": 0,
 "title": "",
 "footerBorderColor": "#000000",
 "backgroundColor": [],
 "shadowSpread": 1,
 "closeButtonPaddingTop": 0,
 "headerPaddingRight": 10,
 "propagateClick": false,
 "bodyPaddingRight": 5,
 "veilShowEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeInEffect"
 },
 "bodyBackgroundColorDirection": "vertical",
 "closeButtonPressedIconColor": "#FFFFFF",
 "titlePaddingTop": 5,
 "closeButtonIconColor": "#000000",
 "closeButtonPaddingLeft": 0,
 "closeButtonRollOverIconColor": "#FFFFFF",
 "scrollBarMargin": 2,
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "scrollBarWidth": 10,
 "closeButtonBorderColor": "#000000",
 "titleFontFamily": "Arial",
 "overflow": "scroll",
 "class": "Window",
 "headerVerticalAlign": "middle",
 "backgroundColorDirection": "vertical",
 "footerBorderSize": 0,
 "layout": "vertical",
 "closeButtonBackgroundColorRatios": [],
 "showEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeInEffect"
 },
 "scrollBarOpacity": 0.5,
 "children": [
  "this.viewer_uidB8CE083B_B665_5D44_41D2_36D8CD662285"
 ],
 "shadowColor": "#000000",
 "closeButtonBackgroundColorDirection": "vertical",
 "closeButtonPaddingRight": 0,
 "veilColorRatios": [
  0,
  1
 ],
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "footerHeight": 5,
 "paddingTop": 0,
 "titleFontStyle": "normal",
 "footerBackgroundOpacity": 1,
 "shadowBlurRadius": 6,
 "scrollBarVisible": "rollOver",
 "closeButtonBorderSize": 0,
 "veilColorDirection": "horizontal",
 "scrollBarColor": "#000000",
 "horizontalAlign": "center",
 "minWidth": 20,
 "veilHideEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeOutEffect"
 },
 "closeButtonBackgroundOpacity": 1,
 "paddingLeft": 0,
 "shadowOpacity": 0.5,
 "contentOpaque": false,
 "headerPaddingBottom": 10,
 "closeButtonBorderRadius": 11,
 "hideEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeOutEffect"
 },
 "titleFontWeight": "normal",
 "footerBackgroundColorDirection": "vertical",
 "borderRadius": 5,
 "titleFontSize": "1.29vmin",
 "gap": 10,
 "closeButtonIconHeight": 12,
 "titlePaddingRight": 5,
 "headerPaddingTop": 10,
 "backgroundColorRatios": [],
 "shadowHorizontalLength": 3,
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "bodyBackgroundOpacity": 0,
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "closeButtonPaddingBottom": 0,
 "closeButtonIconLineWidth": 2,
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "closeButtonIconWidth": 12,
 "data": {
  "name": "Window9721"
 }
},
{
 "levels": [
  {
   "url": "media/popup_E3D4E80F_F752_C1CA_41E1_6844F1334909_0_0.png",
   "width": 1920,
   "height": 1080,
   "class": "ImageResourceLevel"
  },
  {
   "url": "media/popup_E3D4E80F_F752_C1CA_41E1_6844F1334909_0_1.png",
   "width": 1024,
   "height": 576,
   "class": "ImageResourceLevel"
  },
  {
   "url": "media/popup_E3D4E80F_F752_C1CA_41E1_6844F1334909_0_2.png",
   "width": 512,
   "height": 288,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "ImageResource_E3CB786A_F752_424A_41D3_63CEDBDDF94F",
 "class": "ImageResource"
},
{
 "easing": "cubic_in_out",
 "id": "effect_E406AD0A_F75E_43CA_41E7_3D8498F86DA4",
 "duration": 1000,
 "class": "FadeInEffect"
},
{
 "thumbnailUrl": "media/panorama_DF09300A_D522_2AAB_41C0_2217A91877F7_t.jpg",
 "overlays": [
  "this.overlay_CCCF027A_D708_011A_41E8_43DA41697A88",
  "this.overlay_F36E4DCA_E7A9_0C8B_41B1_CD9711C30845",
  "this.overlay_0ABEBC7F_1B38_D566_41AE_0800B58E441D",
  "this.overlay_E20925C1_ED42_99DD_41E2_F5B3E69B1C9E",
  "this.popup_E7414413_F772_41DA_41E1_304CFF0E193E",
  "this.popup_8C8E4019_9D24_7E64_41D0_F472E739C7F1",
  "this.overlay_8C266371_9D24_42A4_419F_E8490C36D1F4"
 ],
 "adjacentPanoramas": [
  {
   "backwardYaw": 177.21,
   "yaw": -11.66,
   "panorama": "this.panorama_DF62FED0_D522_37B6_41C2_93651E251542",
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "backwardYaw": -91.36,
   "yaw": 169.41,
   "panorama": "this.panorama_DF09605E_D522_6AAA_41E6_B94D5A810C57",
   "distance": 1,
   "class": "AdjacentPanorama"
  }
 ],
 "label": "Jembata Bale Telaga",
 "id": "panorama_DF09300A_D522_2AAB_41C0_2217A91877F7",
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_DF09300A_D522_2AAB_41C0_2217A91877F7_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_DF09300A_D522_2AAB_41C0_2217A91877F7_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_DF09300A_D522_2AAB_41C0_2217A91877F7_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_DF09300A_D522_2AAB_41C0_2217A91877F7_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_DF09300A_D522_2AAB_41C0_2217A91877F7_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_DF09300A_D522_2AAB_41C0_2217A91877F7_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_DF09300A_D522_2AAB_41C0_2217A91877F7_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_DF09300A_D522_2AAB_41C0_2217A91877F7_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_DF09300A_D522_2AAB_41C0_2217A91877F7_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_DF09300A_D522_2AAB_41C0_2217A91877F7_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_DF09300A_D522_2AAB_41C0_2217A91877F7_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_DF09300A_D522_2AAB_41C0_2217A91877F7_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_DF09300A_D522_2AAB_41C0_2217A91877F7_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_DF09300A_D522_2AAB_41C0_2217A91877F7_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_DF09300A_D522_2AAB_41C0_2217A91877F7_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_DF09300A_D522_2AAB_41C0_2217A91877F7_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_DF09300A_D522_2AAB_41C0_2217A91877F7_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_DF09300A_D522_2AAB_41C0_2217A91877F7_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_DF09300A_D522_2AAB_41C0_2217A91877F7_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 180,
 "hfovMin": "150%",
 "pitch": 0,
 "hfov": 360,
 "hfovMax": 130,
 "partial": false,
 "class": "Panorama"
},
{
 "easing": "cubic_in_out",
 "id": "effect_F1E3A9AA_E679_B2DB_41E4_32904A66CE81",
 "duration": 1000,
 "class": "FadeOutEffect"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "initialPosition": {
  "yaw": -3.69,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_A6EACBB9_B665_5344_41DB_6A2B9FCDE9DA",
 "class": "PanoramaCamera"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "initialPosition": {
  "yaw": -150.8,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_B9673DA0_B665_5744_41E1_DB16BDE1BBF0",
 "class": "PanoramaCamera"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "initialPosition": {
  "yaw": -6.36,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_B9465DF5_B665_56CC_41C8_332B13DF4A34",
 "class": "PanoramaCamera"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "initialPosition": {
  "yaw": 30.29,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_B971DDBF_B665_56BC_41CF_31679FE654A7",
 "class": "PanoramaCamera"
},
{
 "thumbnailUrl": "media/panorama_DF0AA7F2_D522_357A_41E7_BB88309A039D_t.jpg",
 "overlays": [
  "this.overlay_C10B7EF5_D738_012E_41C2_91A45C7B4F60",
  "this.overlay_C1B9FE66_D738_012A_417E_6FFC0632A8FD",
  "this.overlay_E93C1F41_E7A7_0DF9_41D7_1746535B520A",
  "this.overlay_0A8B9A37_1B3B_DCE6_41B9_513465C33775",
  "this.overlay_E26A1DA3_ED41_8E5E_41D4_DB4B01DA5C8B",
  "this.popup_F96A9BDD_F69D_D4FA_41DD_35686EE58D35",
  "this.popup_E694FA09_F7D3_C1B6_41EC_7B4A570F1172",
  "this.overlay_8C956C6C_9D3C_46BD_41D0_B86C8B7C674E",
  "this.overlay_8DA22EF7_9D3C_43AC_41B5_0D906CACD057",
  "this.overlay_8DDF8636_9D3F_C2AC_41C2_7088B4E57E1E",
  "this.popup_8DE088A3_9D24_4FAB_41E2_587E10FBE68E",
  "this.popup_8E757980_9D5C_4E65_41A8_642845C2CCFE",
  "this.popup_8F958FEE_9D5D_C1BC_41E0_4D3C8E890915"
 ],
 "adjacentPanoramas": [
  {
   "backwardYaw": 106.22,
   "yaw": -45.77,
   "panorama": "this.panorama_DF0B7220_D522_EE96_41E0_735AC8175FE5",
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "backwardYaw": -2.84,
   "yaw": -172,
   "panorama": "this.panorama_DF0AF60D_D522_76A9_41E3_6D08C1C16B94",
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "backwardYaw": -90,
   "yaw": 102.34,
   "panorama": "this.panorama_DF0AF41D_D522_2AA9_41EA_37FF14B377FE",
   "distance": 1,
   "class": "AdjacentPanorama"
  }
 ],
 "label": "Halaman tengah Maskerdam",
 "id": "panorama_DF0AA7F2_D522_357A_41E7_BB88309A039D",
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_DF0AA7F2_D522_357A_41E7_BB88309A039D_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_DF0AA7F2_D522_357A_41E7_BB88309A039D_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_DF0AA7F2_D522_357A_41E7_BB88309A039D_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_DF0AA7F2_D522_357A_41E7_BB88309A039D_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_DF0AA7F2_D522_357A_41E7_BB88309A039D_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_DF0AA7F2_D522_357A_41E7_BB88309A039D_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_DF0AA7F2_D522_357A_41E7_BB88309A039D_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_DF0AA7F2_D522_357A_41E7_BB88309A039D_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_DF0AA7F2_D522_357A_41E7_BB88309A039D_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_DF0AA7F2_D522_357A_41E7_BB88309A039D_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_DF0AA7F2_D522_357A_41E7_BB88309A039D_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_DF0AA7F2_D522_357A_41E7_BB88309A039D_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_DF0AA7F2_D522_357A_41E7_BB88309A039D_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_DF0AA7F2_D522_357A_41E7_BB88309A039D_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_DF0AA7F2_D522_357A_41E7_BB88309A039D_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_DF0AA7F2_D522_357A_41E7_BB88309A039D_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_DF0AA7F2_D522_357A_41E7_BB88309A039D_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_DF0AA7F2_D522_357A_41E7_BB88309A039D_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_DF0AA7F2_D522_357A_41E7_BB88309A039D_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 180,
 "hfovMin": "150%",
 "pitch": 0,
 "hfov": 360,
 "hfovMax": 130,
 "partial": false,
 "class": "Panorama"
},
{
 "thumbnailUrl": "media/panorama_DF14B7C6_D526_559A_41D4_10037B667899_t.jpg",
 "overlays": [
  "this.overlay_CE5923B5_D718_072F_41A8_4F9A38C34D4C",
  "this.overlay_158A8A48_1B28_DCA9_4197_C98797E6A962",
  "this.overlay_E2DDD33A_ED46_BAAF_41E1_CE63562BFAC8",
  "this.overlay_E2EF1CC7_ED42_8FE5_41C9_A89C78960F99",
  "this.popup_F9C9C64B_F604_1ADA_41D7_1ADF5FBC2C73"
 ],
 "adjacentPanoramas": [
  {
   "backwardYaw": -149.71,
   "yaw": 17.89,
   "panorama": "this.panorama_DF095ADC_D526_3FAE_41E8_221CDD95ABD4",
   "distance": 1,
   "class": "AdjacentPanorama"
  }
 ],
 "label": "Pintu Masuk ",
 "id": "panorama_DF14B7C6_D526_559A_41D4_10037B667899",
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_DF14B7C6_D526_559A_41D4_10037B667899_0/f/0/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "height": 2560,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_DF14B7C6_D526_559A_41D4_10037B667899_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_DF14B7C6_D526_559A_41D4_10037B667899_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_DF14B7C6_D526_559A_41D4_10037B667899_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_DF14B7C6_D526_559A_41D4_10037B667899_0/u/0/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "height": 2560,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_DF14B7C6_D526_559A_41D4_10037B667899_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_DF14B7C6_D526_559A_41D4_10037B667899_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_DF14B7C6_D526_559A_41D4_10037B667899_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_DF14B7C6_D526_559A_41D4_10037B667899_0/r/0/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "height": 2560,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_DF14B7C6_D526_559A_41D4_10037B667899_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_DF14B7C6_D526_559A_41D4_10037B667899_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_DF14B7C6_D526_559A_41D4_10037B667899_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_DF14B7C6_D526_559A_41D4_10037B667899_0/b/0/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "height": 2560,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_DF14B7C6_D526_559A_41D4_10037B667899_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_DF14B7C6_D526_559A_41D4_10037B667899_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_DF14B7C6_D526_559A_41D4_10037B667899_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_DF14B7C6_D526_559A_41D4_10037B667899_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_DF14B7C6_D526_559A_41D4_10037B667899_0/d/0/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "height": 2560,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_DF14B7C6_D526_559A_41D4_10037B667899_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_DF14B7C6_D526_559A_41D4_10037B667899_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_DF14B7C6_D526_559A_41D4_10037B667899_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_DF14B7C6_D526_559A_41D4_10037B667899_0/l/0/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "height": 2560,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_DF14B7C6_D526_559A_41D4_10037B667899_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "height": 1536,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_DF14B7C6_D526_559A_41D4_10037B667899_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_DF14B7C6_D526_559A_41D4_10037B667899_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 180,
 "hfovMin": "173%",
 "pitch": 0,
 "hfov": 360,
 "hfovMax": 130,
 "partial": false,
 "class": "Panorama"
},
{
 "audio": "this.audioresource_FF21C99D_EDC4_70CA_41AA_9B833DF0FBE0",
 "id": "audio_FEBB0319_EDC4_11CB_41E9_7AA5ED1EAA52",
 "data": {
  "label": "Sound Virtual Tour"
 },
 "autoplay": true,
 "class": "PanoramaAudio"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 103.21,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "id": "camera_A64E1B1C_B665_537C_41E6_C917D20EAFAB",
 "class": "PanoramaCamera"
},
{
 "headerBackgroundColorDirection": "vertical",
 "id": "window_BCED1CBB_B65D_3544_41E6_9A1BF63F0B8B",
 "closeButtonPressedBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "titlePaddingLeft": 5,
 "paddingBottom": 0,
 "minHeight": 20,
 "closeButtonBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "shadow": true,
 "headerPaddingLeft": 10,
 "closeButtonPressedIconLineWidth": 5,
 "closeButtonRollOverBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "headerBackgroundOpacity": 0,
 "closeButtonPressedBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "modal": true,
 "titlePaddingBottom": 5,
 "backgroundOpacity": 1,
 "bodyPaddingLeft": 0,
 "bodyPaddingBottom": 0,
 "shadowVerticalLength": 0,
 "verticalAlign": "middle",
 "closeButtonPressedBorderSize": 0,
 "paddingRight": 0,
 "closeButtonRollOverBorderSize": 0,
 "veilOpacity": 0.4,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "bodyPaddingTop": 0,
 "backgroundColor": [],
 "borderSize": 0,
 "veilShowEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeInEffect"
 },
 "closeButtonPaddingTop": 5,
 "closeButtonPressedBackgroundColorDirection": "vertical",
 "shadowSpread": 1,
 "closeButtonPressedBorderColor": "#000000",
 "headerPaddingRight": 0,
 "propagateClick": false,
 "closeButtonRollOverBackgroundColorDirection": "vertical",
 "bodyPaddingRight": 0,
 "bodyBackgroundColorDirection": "vertical",
 "closeButtonPressedIconColor": "#888888",
 "titlePaddingTop": 5,
 "closeButtonRollOverBackgroundOpacity": 0.3,
 "closeButtonIconColor": "#000000",
 "closeButtonPaddingLeft": 5,
 "closeButtonRollOverIconColor": "#666666",
 "scrollBarMargin": 2,
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "scrollBarWidth": 10,
 "closeButtonBorderColor": "#000000",
 "titleFontFamily": "Arial",
 "overflow": "scroll",
 "class": "Window",
 "closeButtonRollOverIconLineWidth": 5,
 "headerVerticalAlign": "middle",
 "backgroundColorDirection": "vertical",
 "layout": "vertical",
 "closeButtonBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "showEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeInEffect"
 },
 "scrollBarOpacity": 0.5,
 "children": [
  "this.viewer_uidB8BA186A_B665_5DC4_41C2_C250547C7BEB"
 ],
 "shadowColor": "#000000",
 "closeButtonBackgroundColorDirection": "vertical",
 "closeButtonPaddingRight": 5,
 "veilColorRatios": [
  0,
  1
 ],
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "footerHeight": 5,
 "paddingTop": 0,
 "footerBackgroundOpacity": 0,
 "shadowBlurRadius": 6,
 "scrollBarVisible": "rollOver",
 "closeButtonBorderSize": 0,
 "scrollBarColor": "#000000",
 "horizontalAlign": "center",
 "minWidth": 20,
 "veilHideEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeOutEffect"
 },
 "closeButtonBackgroundOpacity": 0.3,
 "paddingLeft": 0,
 "shadowOpacity": 0.5,
 "contentOpaque": false,
 "headerPaddingBottom": 5,
 "closeButtonBorderRadius": 0,
 "hideEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeOutEffect"
 },
 "closeButtonPressedBackgroundOpacity": 0.3,
 "footerBackgroundColorDirection": "vertical",
 "borderRadius": 5,
 "titleFontSize": "1.29vmin",
 "gap": 10,
 "closeButtonIconHeight": 20,
 "titlePaddingRight": 5,
 "headerPaddingTop": 10,
 "backgroundColorRatios": [],
 "shadowHorizontalLength": 3,
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "bodyBackgroundOpacity": 0,
 "closeButtonRollOverBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "closeButtonPaddingBottom": 5,
 "closeButtonRollOverBorderColor": "#000000",
 "closeButtonIconLineWidth": 5,
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "closeButtonIconWidth": 20,
 "data": {
  "name": "Window591"
 }
},
{
 "rotationY": 0,
 "hfov": 6.28,
 "popupMaxHeight": "60%",
 "rotationX": 0,
 "rotationZ": 0,
 "popupMaxWidth": "60%",
 "id": "popup_8DB67918_9D24_4E64_41DE_C052AA5B9BA4",
 "hideEasing": "cubic_out",
 "image": {
  "levels": [
   {
    "url": "media/popup_8DB67918_9D24_4E64_41DE_C052AA5B9BA4_0_1.png",
    "width": 1024,
    "height": 576,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "pitch": 8.13,
 "popupDistance": 100,
 "showDuration": 500,
 "hideDuration": 500,
 "showEasing": "cubic_in",
 "yaw": 167.78,
 "class": "PopupPanoramaOverlay"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "initialPosition": {
  "yaw": -4.81,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_A6D82C08_B665_5544_41C4_A95F833B423A",
 "class": "PanoramaCamera"
},
{
 "rotationY": 0,
 "hfov": 3.27,
 "popupMaxHeight": "60%",
 "rotationX": 0,
 "rotationZ": 0,
 "popupMaxWidth": "60%",
 "id": "popup_E7E6F278_F604_3AC6_41E5_EC28055128A1",
 "hideEasing": "cubic_out",
 "image": {
  "levels": [
   {
    "url": "media/popup_E7E6F278_F604_3AC6_41E5_EC28055128A1_0_1.png",
    "width": 1024,
    "height": 576,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "pitch": 8.43,
 "popupDistance": 100,
 "showDuration": 500,
 "hideDuration": 500,
 "showEasing": "cubic_in",
 "yaw": -57.58,
 "class": "PopupPanoramaOverlay"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "initialPosition": {
  "yaw": 0,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_DF093389_D522_2D96_418B_B49E63F3C24E_camera",
 "class": "PanoramaCamera"
},
{
 "audio": "this.audioresource_FF21C99D_EDC4_70CA_41AA_9B833DF0FBE0",
 "id": "audio_FE5C779A_EDC4_10C9_41E9_65DA8CCA10B0",
 "data": {
  "label": "Sound Virtual Tour"
 },
 "autoplay": true,
 "class": "PanoramaAudio"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "initialPosition": {
  "yaw": -168.16,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_B9C6B9B3_B665_5F44_41E0_353F17202A44",
 "class": "PanoramaCamera"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "initialPosition": {
  "yaw": -3.74,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_B9356E5D_B665_55FD_41D5_12A4E3EF061D",
 "class": "PanoramaCamera"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "displayOriginPosition": {
  "hfov": 165,
  "stereographicFactor": 1,
  "yaw": 0,
  "pitch": -90,
  "class": "RotationalCameraDisplayPosition"
 },
 "initialPosition": {
  "yaw": 0,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_DF14B7C6_D526_559A_41D4_10037B667899_camera",
 "displayMovements": [
  {
   "easing": "linear",
   "duration": 1000,
   "class": "TargetRotationalCameraDisplayMovement"
  },
  {
   "easing": "cubic_in_out",
   "targetPitch": 0,
   "targetStereographicFactor": 0,
   "duration": 3000,
   "class": "TargetRotationalCameraDisplayMovement"
  }
 ],
 "class": "PanoramaCamera"
},
{
 "rotationY": 0,
 "hfov": 7.09,
 "popupMaxHeight": "60%",
 "rotationX": 0,
 "rotationZ": 0,
 "popupMaxWidth": "60%",
 "id": "popup_8C35679B_9D3C_419B_41E2_840DF311F1F2",
 "hideEasing": "cubic_out",
 "image": {
  "levels": [
   {
    "url": "media/popup_8C35679B_9D3C_419B_41E2_840DF311F1F2_0_1.png",
    "width": 1024,
    "height": 576,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "pitch": 4.22,
 "popupDistance": 100,
 "showDuration": 500,
 "hideDuration": 500,
 "showEasing": "cubic_in",
 "yaw": 78.68,
 "class": "PopupPanoramaOverlay"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "initialPosition": {
  "yaw": 0,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_DF095A4F_D521_DEAA_41E5_B09830FCA2B6_camera",
 "class": "PanoramaCamera"
},
{
 "rotationY": 0,
 "hfov": 6.56,
 "popupMaxHeight": "60%",
 "rotationX": 0,
 "rotationZ": 0,
 "popupMaxWidth": "60%",
 "id": "popup_8E757980_9D5C_4E65_41A8_642845C2CCFE",
 "hideEasing": "cubic_out",
 "image": {
  "levels": [
   {
    "url": "media/popup_8E757980_9D5C_4E65_41A8_642845C2CCFE_0_1.png",
    "width": 1024,
    "height": 576,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "pitch": 4.8,
 "popupDistance": 100,
 "showDuration": 500,
 "hideDuration": 500,
 "showEasing": "cubic_in",
 "yaw": 34.81,
 "class": "PopupPanoramaOverlay"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "initialPosition": {
  "yaw": 14.56,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_B9A4BA0B_B665_5D45_41E3_A85F910782AB",
 "class": "PanoramaCamera"
},
{
 "items": [
  {
   "media": "this.panorama_DF14B7C6_D526_559A_41D4_10037B667899",
   "end": "this.setComponentVisibility(this.Image_F21B5780_E6C8_DEC7_41D4_D58CD4D9DCBD, false, -1, this.effect_F27B0280_EECB_0077_41EB_C02CAC477723, 'hideEffect', false)",
   "start": "this.keepComponentVisibility(this.Image_F21B5780_E6C8_DEC7_41D4_D58CD4D9DCBD, true)",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_012D7D88_1832_505A_41A8_71148FB9AB33_playlist, 0, 1); this.keepComponentVisibility(this.Image_F21B5780_E6C8_DEC7_41D4_D58CD4D9DCBD, false); this.setComponentVisibility(this.Image_F21B5780_E6C8_DEC7_41D4_D58CD4D9DCBD, true, -1, this.effect_F27B2280_EECB_0077_41CF_1452A9DB10A6, 'showEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_DF14B7C6_D526_559A_41D4_10037B667899_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_DF095ADC_D526_3FAE_41E8_221CDD95ABD4",
   "end": "this.setComponentVisibility(this.Image_F3594E3D_E6B7_AE39_41C8_FE19BB12D054, false, -1, this.effect_F1E7499A_E679_B2FB_41E8_F2F054FB1A11, 'hideEffect', false)",
   "start": "this.keepComponentVisibility(this.Image_F3594E3D_E6B7_AE39_41C8_FE19BB12D054, true)",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_012D7D88_1832_505A_41A8_71148FB9AB33_playlist, 1, 2); this.keepComponentVisibility(this.Image_F3594E3D_E6B7_AE39_41C8_FE19BB12D054, false); this.setComponentVisibility(this.Image_F3594E3D_E6B7_AE39_41C8_FE19BB12D054, true, -1, this.effect_F1E7599A_E679_B2FB_41E2_CB4F473D3B40, 'showEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_DF095ADC_D526_3FAE_41E8_221CDD95ABD4_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_DF095A4F_D521_DEAA_41E5_B09830FCA2B6",
   "end": "this.setComponentVisibility(this.Image_F23672C6_E649_564A_41EC_CD3F30DA5B23, false, -1, this.effect_F1E7D99B_E679_B2F9_41EC_9FCCFC120248, 'hideEffect', false)",
   "start": "this.keepComponentVisibility(this.Image_F23672C6_E649_564A_41EC_CD3F30DA5B23, true)",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_012D7D88_1832_505A_41A8_71148FB9AB33_playlist, 2, 3); this.keepComponentVisibility(this.Image_F23672C6_E649_564A_41EC_CD3F30DA5B23, false); this.setComponentVisibility(this.Image_F23672C6_E649_564A_41EC_CD3F30DA5B23, true, -1, this.effect_F1E7E99B_E679_B2F9_41D8_394AD35AF67B, 'showEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_DF095A4F_D521_DEAA_41E5_B09830FCA2B6_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_DF0968AD_D521_DBEE_41E8_53FAFFC84B8C",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_012D7D88_1832_505A_41A8_71148FB9AB33_playlist, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_DF0968AD_D521_DBEE_41E8_53FAFFC84B8C_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_DF0AF60D_D522_76A9_41E3_6D08C1C16B94",
   "end": "this.setComponentVisibility(this.Image_F208C464_E649_524F_41EC_07C9C78C6A02, false, -1, this.effect_F3F3B931_E649_F3C6_41A0_555BC55AB8F2, 'hideEffect', false)",
   "start": "this.keepComponentVisibility(this.Image_F208C464_E649_524F_41EC_07C9C78C6A02, true)",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_012D7D88_1832_505A_41A8_71148FB9AB33_playlist, 4, 5); this.keepComponentVisibility(this.Image_F208C464_E649_524F_41EC_07C9C78C6A02, false); this.setComponentVisibility(this.Image_F208C464_E649_524F_41EC_07C9C78C6A02, true, -1, this.effect_F1E6299C_E679_B2FF_41D5_17A0CD4AD434, 'showEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_DF0AF60D_D522_76A9_41E3_6D08C1C16B94_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_DF0AA7F2_D522_357A_41E7_BB88309A039D",
   "end": "this.setComponentVisibility(this.Image_F208C464_E649_524F_41EC_07C9C78C6A02, false, -1, this.effect_F1F11586_E649_D2CB_41DC_E565D30712B1, 'hideEffect', false)",
   "start": "this.keepComponentVisibility(this.Image_F208C464_E649_524F_41EC_07C9C78C6A02, true)",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_012D7D88_1832_505A_41A8_71148FB9AB33_playlist, 5, 6); this.keepComponentVisibility(this.Image_F208C464_E649_524F_41EC_07C9C78C6A02, false); this.setComponentVisibility(this.Image_F208C464_E649_524F_41EC_07C9C78C6A02, true, -1, this.effect_F1E6B99C_E679_B2FF_41E5_032D8D6B98D1, 'showEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_DF0AA7F2_D522_357A_41E7_BB88309A039D_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_DF0AF41D_D522_2AA9_41EA_37FF14B377FE",
   "end": "this.setComponentVisibility(this.Image_F208C464_E649_524F_41EC_07C9C78C6A02, false, -1, this.effect_F1BF7C0C_E679_B1DF_41C3_9AF442371265, 'hideEffect', false)",
   "start": "this.keepComponentVisibility(this.Image_F208C464_E649_524F_41EC_07C9C78C6A02, true)",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_012D7D88_1832_505A_41A8_71148FB9AB33_playlist, 6, 7); this.keepComponentVisibility(this.Image_F208C464_E649_524F_41EC_07C9C78C6A02, false); this.setComponentVisibility(this.Image_F208C464_E649_524F_41EC_07C9C78C6A02, true, -1, this.effect_F1E1499D_E679_B2F9_41E0_DBEE7A3BC874, 'showEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_DF0AF41D_D522_2AA9_41EA_37FF14B377FE_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_DF0AD51E_D522_6AAB_41E0_02491679C908",
   "end": "this.setComponentVisibility(this.Image_F20AC14B_E64F_D259_41D9_71B15433AB9E, false, -1, this.effect_F3F3A936_E649_F3CA_41C9_35102C1CC847, 'hideEffect', false)",
   "start": "this.keepComponentVisibility(this.Image_F20AC14B_E64F_D259_41D9_71B15433AB9E, true)",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_012D7D88_1832_505A_41A8_71148FB9AB33_playlist, 7, 8); this.keepComponentVisibility(this.Image_F20AC14B_E64F_D259_41D9_71B15433AB9E, false); this.setComponentVisibility(this.Image_F20AC14B_E64F_D259_41D9_71B15433AB9E, true, -1, this.effect_F1E6699E_E679_B2FB_41DF_D0E0CC45D289, 'showEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_DF0AD51E_D522_6AAB_41E0_02491679C908_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_DF0A8329_D522_2E96_41DA_0346C09AF2A0",
   "end": "this.setComponentVisibility(this.Image_F27D68F4_E648_B24E_41E1_900F5FB2363E, false, -1, this.effect_F1E149A7_E679_B2C9_41BF_82CFD001169B, 'hideEffect', false)",
   "start": "this.keepComponentVisibility(this.Image_F27D68F4_E648_B24E_41E1_900F5FB2363E, true)",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_012D7D88_1832_505A_41A8_71148FB9AB33_playlist, 8, 9); this.keepComponentVisibility(this.Image_F27D68F4_E648_B24E_41E1_900F5FB2363E, false); this.setComponentVisibility(this.Image_F27D68F4_E648_B24E_41E1_900F5FB2363E, true, -1, this.effect_F1E169A7_E679_B2C9_41D5_4DAD56770C71, 'showEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_DF0A8329_D522_2E96_41DA_0346C09AF2A0_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_DF0B7220_D522_EE96_41E0_735AC8175FE5",
   "end": "this.setComponentVisibility(this.Image_F2638C52_E648_F24B_4198_1B8B11C8C2F2, false, -1, this.effect_F1E1A9A7_E679_B2C9_41E0_BBE802B642A0, 'hideEffect', false)",
   "start": "this.keepComponentVisibility(this.Image_F2638C52_E648_F24B_4198_1B8B11C8C2F2, true)",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_012D7D88_1832_505A_41A8_71148FB9AB33_playlist, 9, 10); this.keepComponentVisibility(this.Image_F2638C52_E648_F24B_4198_1B8B11C8C2F2, false); this.setComponentVisibility(this.Image_F2638C52_E648_F24B_4198_1B8B11C8C2F2, true, -1, this.effect_F1E1F9A7_E679_B2C9_41CC_F0E20EE24FA4, 'showEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_DF0B7220_D522_EE96_41E0_735AC8175FE5_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_DF0B714D_D522_EAAE_41DB_DAFE02AA8C1C",
   "end": "this.setComponentVisibility(this.Image_F2528CB9_E649_5239_41D5_60765A8BAF32, false, -1, this.effect_F1E029A8_E679_B2C7_41D2_B0FAE0348311, 'hideEffect', false)",
   "start": "this.keepComponentVisibility(this.Image_F2528CB9_E649_5239_41D5_60765A8BAF32, true)",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_012D7D88_1832_505A_41A8_71148FB9AB33_playlist, 10, 11); this.keepComponentVisibility(this.Image_F2528CB9_E649_5239_41D5_60765A8BAF32, false); this.setComponentVisibility(this.Image_F2528CB9_E649_5239_41D5_60765A8BAF32, true, -1, this.effect_F1E049A8_E679_B2C7_41D5_4262D95BF530, 'showEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_DF0B714D_D522_EAAE_41DB_DAFE02AA8C1C_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_DF0BAF14_D522_36BE_4182_2D68BF6843DE",
   "end": "this.setComponentVisibility(this.Image_F24BE2FB_E649_D639_41EC_6C57AFF379C5, false, -1, this.effect_F1E0A9A9_E679_B2D9_41B6_6146C79DC054, 'hideEffect', false)",
   "start": "this.keepComponentVisibility(this.Image_F24BE2FB_E649_D639_41EC_6C57AFF379C5, true)",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_012D7D88_1832_505A_41A8_71148FB9AB33_playlist, 11, 12); this.keepComponentVisibility(this.Image_F24BE2FB_E649_D639_41EC_6C57AFF379C5, false); this.setComponentVisibility(this.Image_F24BE2FB_E649_D639_41EC_6C57AFF379C5, true, -1, this.effect_F1E0D9A8_E679_B2D8_41CD_47CBDE6D386F, 'showEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_DF0BAF14_D522_36BE_4182_2D68BF6843DE_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_DF0BFC23_D522_7A9A_41E2_705D7646CD69",
   "end": "this.setComponentVisibility(this.Image_F25988F0_E64B_5247_41E0_7C12462F1412, false, -1, this.effect_F1E319A9_E679_B2D9_41E1_A19C72DCD97A, 'hideEffect', false)",
   "start": "this.keepComponentVisibility(this.Image_F25988F0_E64B_5247_41E0_7C12462F1412, true)",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_012D7D88_1832_505A_41A8_71148FB9AB33_playlist, 12, 13); this.keepComponentVisibility(this.Image_F25988F0_E64B_5247_41E0_7C12462F1412, false); this.setComponentVisibility(this.Image_F25988F0_E64B_5247_41E0_7C12462F1412, true, -1, this.effect_F1E349A9_E679_B2D9_41DC_D44827BAF0C5, 'showEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_DF0BFC23_D522_7A9A_41E2_705D7646CD69_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_DF0B7A68_D522_5E96_41E4_2FA8606D5645",
   "end": "this.setComponentVisibility(this.Image_F2434354_E649_764F_41BC_C63404D9D8E7, false, -1, this.effect_F1E3A9AA_E679_B2DB_41E4_32904A66CE81, 'hideEffect', false)",
   "start": "this.keepComponentVisibility(this.Image_F2434354_E649_764F_41BC_C63404D9D8E7, true)",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_012D7D88_1832_505A_41A8_71148FB9AB33_playlist, 13, 14); this.keepComponentVisibility(this.Image_F2434354_E649_764F_41BC_C63404D9D8E7, false); this.setComponentVisibility(this.Image_F2434354_E649_764F_41BC_C63404D9D8E7, true, -1, this.effect_F1E3C9AA_E679_B2DB_41E2_F95924AFEC60, 'showEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_DF0B7A68_D522_5E96_41E4_2FA8606D5645_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_DF0B18B0_D522_3BF6_41E7_E97BDC8D73D5",
   "end": "this.setComponentVisibility(this.Image_F27F3E84_E648_EECE_41BB_679F3C0A06B5, false, -1, this.effect_F1E239AA_E679_B2DB_41E2_F8957BBAC1B9, 'hideEffect', false)",
   "start": "this.keepComponentVisibility(this.Image_F27F3E84_E648_EECE_41BB_679F3C0A06B5, true)",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_012D7D88_1832_505A_41A8_71148FB9AB33_playlist, 14, 15); this.keepComponentVisibility(this.Image_F27F3E84_E648_EECE_41BB_679F3C0A06B5, false); this.setComponentVisibility(this.Image_F27F3E84_E648_EECE_41BB_679F3C0A06B5, true, -1, this.effect_F1E259AA_E679_B2DB_41E7_8EE1EE8BE1ED, 'showEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_DF0B18B0_D522_3BF6_41E7_E97BDC8D73D5_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_DF08C6FA_D523_D76A_41D5_7F86EC1FD1C3",
   "end": "this.setComponentVisibility(this.Image_F25988F0_E64B_5247_41E0_7C12462F1412, false, -1, this.effect_E4066CFA_F75E_424A_41EE_14774651BB8C, 'hideEffect', false)",
   "start": "this.keepComponentVisibility(this.Image_F25988F0_E64B_5247_41E0_7C12462F1412, true)",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_012D7D88_1832_505A_41A8_71148FB9AB33_playlist, 15, 16); this.keepComponentVisibility(this.Image_F25988F0_E64B_5247_41E0_7C12462F1412, false); this.setComponentVisibility(this.Image_F25988F0_E64B_5247_41E0_7C12462F1412, true, -1, this.effect_F1E2E9AB_E679_B2D9_41E0_3F144649AE49, 'showEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_DF08C6FA_D523_D76A_41D5_7F86EC1FD1C3_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_DF08F593_D523_F5BA_41E5_3AAEBE3AF892",
   "end": "this.setComponentVisibility(this.Image_F25988F0_E64B_5247_41E0_7C12462F1412, false, -1, this.effect_3CB32CB4_2D32_3E69_4142_99A09103B214, 'hideEffect', false)",
   "start": "this.keepComponentVisibility(this.Image_F25988F0_E64B_5247_41E0_7C12462F1412, true)",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_012D7D88_1832_505A_41A8_71148FB9AB33_playlist, 16, 17); this.keepComponentVisibility(this.Image_F25988F0_E64B_5247_41E0_7C12462F1412, false); this.setComponentVisibility(this.Image_F25988F0_E64B_5247_41E0_7C12462F1412, true, -1, this.effect_F1ED59AB_E679_B2D8_41D1_F2B365FB7CEF, 'showEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_DF08F593_D523_F5BA_41E5_3AAEBE3AF892_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_DF08E4A2_D523_EB9A_41E5_F673F160A0A8",
   "end": "this.setComponentVisibility(this.Image_F25988F0_E64B_5247_41E0_7C12462F1412, false, -1, this.effect_E406CD0A_F75E_43CA_41E1_BBCE00732435, 'hideEffect', false)",
   "start": "this.keepComponentVisibility(this.Image_F25988F0_E64B_5247_41E0_7C12462F1412, true)",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_012D7D88_1832_505A_41A8_71148FB9AB33_playlist, 17, 18); this.keepComponentVisibility(this.Image_F25988F0_E64B_5247_41E0_7C12462F1412, false); this.setComponentVisibility(this.Image_F25988F0_E64B_5247_41E0_7C12462F1412, true, -1, this.effect_F1EDF9AC_E679_B2DF_4193_BEF20561D360, 'showEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_DF08E4A2_D523_EB9A_41E5_F673F160A0A8_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_DF093389_D522_2D96_418B_B49E63F3C24E",
   "end": "this.setComponentVisibility(this.Image_F25988F0_E64B_5247_41E0_7C12462F1412, false, -1, this.effect_F1E2D9AD_E679_B2D9_41DD_FE51FC8681A7, 'hideEffect', false)",
   "start": "this.keepComponentVisibility(this.Image_F25988F0_E64B_5247_41E0_7C12462F1412, true)",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_012D7D88_1832_505A_41A8_71148FB9AB33_playlist, 18, 19); this.keepComponentVisibility(this.Image_F25988F0_E64B_5247_41E0_7C12462F1412, false); this.setComponentVisibility(this.Image_F25988F0_E64B_5247_41E0_7C12462F1412, true, -1, this.effect_F1E2E9AD_E679_B2D9_41D2_9E3BB025401C, 'showEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_DF093389_D522_2D96_418B_B49E63F3C24E_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_DF09427F_D522_2F69_41E4_B7F711B0C20C",
   "end": "this.setComponentVisibility(this.Image_F25988F0_E64B_5247_41E0_7C12462F1412, false, -1, this.effect_F1ED59AE_E679_B2DB_41D6_F8949766EBA0, 'hideEffect', false)",
   "start": "this.keepComponentVisibility(this.Image_F25988F0_E64B_5247_41E0_7C12462F1412, true)",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_012D7D88_1832_505A_41A8_71148FB9AB33_playlist, 19, 20); this.keepComponentVisibility(this.Image_F25988F0_E64B_5247_41E0_7C12462F1412, false); this.setComponentVisibility(this.Image_F25988F0_E64B_5247_41E0_7C12462F1412, true, -1, this.effect_F1ED69AD_E679_B2D9_41C6_2B81F1D6AA5D, 'showEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_DF09427F_D522_2F69_41E4_B7F711B0C20C_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_DF091129_D522_6A96_41CB_A7A82D7D5CF4",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_012D7D88_1832_505A_41A8_71148FB9AB33_playlist, 20, 21)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_DF091129_D522_6A96_41CB_A7A82D7D5CF4_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_DF09605E_D522_6AAA_41E6_B94D5A810C57",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_012D7D88_1832_505A_41A8_71148FB9AB33_playlist, 21, 22)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_DF09605E_D522_6AAA_41E6_B94D5A810C57_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_DF09300A_D522_2AAB_41C0_2217A91877F7",
   "end": "this.setComponentVisibility(this.Image_F2412C1F_E64B_51F9_41EC_1CBA4E61E617, false, -1, this.effect_F1EC49AF_E679_B2D9_41D9_1F72127D31B8, 'hideEffect', false)",
   "start": "this.keepComponentVisibility(this.Image_F2412C1F_E64B_51F9_41EC_1CBA4E61E617, true)",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_012D7D88_1832_505A_41A8_71148FB9AB33_playlist, 22, 23); this.keepComponentVisibility(this.Image_F2412C1F_E64B_51F9_41EC_1CBA4E61E617, false); this.setComponentVisibility(this.Image_F2412C1F_E64B_51F9_41EC_1CBA4E61E617, true, -1, this.effect_F1EC69AE_E679_B2DB_41EA_DBEBD11F16F9, 'showEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_DF09300A_D522_2AAB_41C0_2217A91877F7_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_DF62FED0_D522_37B6_41C2_93651E251542",
   "end": "this.setComponentVisibility(this.Image_F278FEC0_E648_AE46_41A5_F679081499CE, false, -1, this.effect_F1ECB9AF_E679_B2D9_41E4_CF3DAE069B47, 'hideEffect', false)",
   "start": "this.keepComponentVisibility(this.Image_F278FEC0_E648_AE46_41A5_F679081499CE, true)",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_012D7D88_1832_505A_41A8_71148FB9AB33_playlist, 23, 24); this.keepComponentVisibility(this.Image_F278FEC0_E648_AE46_41A5_F679081499CE, false); this.setComponentVisibility(this.Image_F278FEC0_E648_AE46_41A5_F679081499CE, true, -1, this.effect_F1ECF9AF_E679_B2D9_41EA_6723E10391F0, 'showEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_DF62FED0_D522_37B6_41C2_93651E251542_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_DF60EDC1_D522_D596_41E5_9A31123BC0B0",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_012D7D88_1832_505A_41A8_71148FB9AB33_playlist, 24, 25)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_DF60EDC1_D522_D596_41E5_9A31123BC0B0_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_DF614CA2_D522_FB9A_41E1_A0F7B63CBAED",
   "end": "this.setComponentVisibility(this.Image_F25F581F_E64B_51F9_41EB_5A451DE584F3, false, -1, this.effect_E4056FE6_F752_5E7A_41E3_493CE4586822, 'hideEffect', false)",
   "start": "this.keepComponentVisibility(this.Image_F25F581F_E64B_51F9_41EB_5A451DE584F3, true)",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_012D7D88_1832_505A_41A8_71148FB9AB33_playlist, 25, 26); this.keepComponentVisibility(this.Image_F25F581F_E64B_51F9_41EB_5A451DE584F3, false); this.setComponentVisibility(this.Image_F25F581F_E64B_51F9_41EB_5A451DE584F3, true, -1, this.effect_E406AD0A_F75E_43CA_41E7_3D8498F86DA4, 'showEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_DF614CA2_D522_FB9A_41E1_A0F7B63CBAED_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_DF6F0B8F_D522_DDA9_41D6_D0B5D979483D",
   "end": "this.setComponentVisibility(this.Image_F26ED021_E64B_D1C9_41DB_0BC5116D3911, false, -1, this.effect_F1EE79B0_E679_B2C7_41EA_8B3612E0B253, 'hideEffect', false)",
   "start": "this.keepComponentVisibility(this.Image_F26ED021_E64B_D1C9_41DB_0BC5116D3911, true)",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_012D7D88_1832_505A_41A8_71148FB9AB33_playlist, 26, 27); this.keepComponentVisibility(this.Image_F26ED021_E64B_D1C9_41DB_0BC5116D3911, false); this.setComponentVisibility(this.Image_F26ED021_E64B_D1C9_41DB_0BC5116D3911, true, -1, this.effect_F1EF99B0_E679_B2C7_41D6_2A9BCAF5DB59, 'showEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_DF6F0B8F_D522_DDA9_41D6_D0B5D979483D_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_DF688AE7_D522_3F9A_41B2_CE1EBAC5DAF0",
   "end": "this.setComponentVisibility(this.Image_F25F581F_E64B_51F9_41EB_5A451DE584F3, false, -1, this.effect_E4050FE6_F752_5E7A_41A4_343B7AE4E316, 'hideEffect', false)",
   "start": "this.keepComponentVisibility(this.Image_F25F581F_E64B_51F9_41EB_5A451DE584F3, true)",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_012D7D88_1832_505A_41A8_71148FB9AB33_playlist, 27, 28); this.keepComponentVisibility(this.Image_F25F581F_E64B_51F9_41EB_5A451DE584F3, false); this.setComponentVisibility(this.Image_F25F581F_E64B_51F9_41EB_5A451DE584F3, true, -1, this.effect_E4069D0A_F75E_43CA_41D8_60C5BBE48AD4, 'showEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_DF688AE7_D522_3F9A_41B2_CE1EBAC5DAF0_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.video_30DFE58F_1307_5EA9_4188_54F3B3C4462E",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.ThumbnailList_012D7D88_1832_505A_41A8_71148FB9AB33_playlist, 28, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.ThumbnailList_012D7D88_1832_505A_41A8_71148FB9AB33_playlist, 28)",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setEndToItemIndex(this.ThumbnailList_012D7D88_1832_505A_41A8_71148FB9AB33_playlist, 28, 29)",
   "player": "this.MainViewerVideoPlayer",
   "class": "VideoPlayListItem"
  },
  {
   "media": "this.video_31307D64_1305_2F9F_4183_6128BE5FB45C",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.ThumbnailList_012D7D88_1832_505A_41A8_71148FB9AB33_playlist, 29, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.ThumbnailList_012D7D88_1832_505A_41A8_71148FB9AB33_playlist, 29)",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setEndToItemIndex(this.ThumbnailList_012D7D88_1832_505A_41A8_71148FB9AB33_playlist, 29, 30)",
   "player": "this.MainViewerVideoPlayer",
   "class": "VideoPlayListItem"
  },
  {
   "media": "this.video_3BF8CD99_1305_6EA9_41A3_97DBAA5790E4",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.ThumbnailList_012D7D88_1832_505A_41A8_71148FB9AB33_playlist, 30, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.ThumbnailList_012D7D88_1832_505A_41A8_71148FB9AB33_playlist, 30)",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setEndToItemIndex(this.ThumbnailList_012D7D88_1832_505A_41A8_71148FB9AB33_playlist, 30, 31)",
   "player": "this.MainViewerVideoPlayer",
   "class": "VideoPlayListItem"
  },
  {
   "media": "this.video_3C0E25A7_131B_3E9A_41B2_644B2E6D05A6",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.ThumbnailList_012D7D88_1832_505A_41A8_71148FB9AB33_playlist, 31, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.ThumbnailList_012D7D88_1832_505A_41A8_71148FB9AB33_playlist, 31)",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setEndToItemIndex(this.ThumbnailList_012D7D88_1832_505A_41A8_71148FB9AB33_playlist, 31, 32)",
   "player": "this.MainViewerVideoPlayer",
   "class": "VideoPlayListItem"
  },
  {
   "media": "this.video_23846E1D_1304_EDAE_41A7_F9A78FBD6DBF",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.ThumbnailList_012D7D88_1832_505A_41A8_71148FB9AB33_playlist, 32, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.ThumbnailList_012D7D88_1832_505A_41A8_71148FB9AB33_playlist, 32)",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setEndToItemIndex(this.ThumbnailList_012D7D88_1832_505A_41A8_71148FB9AB33_playlist, 32, 33)",
   "player": "this.MainViewerVideoPlayer",
   "class": "VideoPlayListItem"
  },
  {
   "media": "this.video_22D7311F_12FF_37A9_41A0_72053C56BDC0",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.ThumbnailList_012D7D88_1832_505A_41A8_71148FB9AB33_playlist, 33, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.ThumbnailList_012D7D88_1832_505A_41A8_71148FB9AB33_playlist, 33)",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setEndToItemIndex(this.ThumbnailList_012D7D88_1832_505A_41A8_71148FB9AB33_playlist, 33, 34)",
   "player": "this.MainViewerVideoPlayer",
   "class": "VideoPlayListItem"
  },
  {
   "media": "this.video_2303E0B1_12FF_56F6_41B2_B996127200EB",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.ThumbnailList_012D7D88_1832_505A_41A8_71148FB9AB33_playlist, 34, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.ThumbnailList_012D7D88_1832_505A_41A8_71148FB9AB33_playlist, 34)",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setEndToItemIndex(this.ThumbnailList_012D7D88_1832_505A_41A8_71148FB9AB33_playlist, 34, 35)",
   "player": "this.MainViewerVideoPlayer",
   "class": "VideoPlayListItem"
  },
  {
   "media": "this.video_20934DBA_151B_2EEA_418E_EF3DFDEACB48",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.ThumbnailList_012D7D88_1832_505A_41A8_71148FB9AB33_playlist, 35, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.ThumbnailList_012D7D88_1832_505A_41A8_71148FB9AB33_playlist, 35)",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setEndToItemIndex(this.ThumbnailList_012D7D88_1832_505A_41A8_71148FB9AB33_playlist, 35, 0)",
   "player": "this.MainViewerVideoPlayer",
   "class": "VideoPlayListItem"
  }
 ],
 "id": "ThumbnailList_012D7D88_1832_505A_41A8_71148FB9AB33_playlist",
 "class": "PlayList"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "initialPosition": {
  "yaw": 0,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_DF0BFC23_D522_7A9A_41E2_705D7646CD69_camera",
 "class": "PanoramaCamera"
},
{
 "easing": "cubic_in_out",
 "id": "effect_E4069D0A_F75E_43CA_41D8_60C5BBE48AD4",
 "duration": 1000,
 "class": "FadeInEffect"
},
{
 "rotationY": 0,
 "hfov": 2.68,
 "popupMaxHeight": "60%",
 "rotationX": 0,
 "rotationZ": 0,
 "popupMaxWidth": "60%",
 "id": "popup_E5884951_F752_4256_41DF_CFD2D4F43DF8",
 "hideEasing": "cubic_out",
 "image": {
  "levels": [
   {
    "url": "media/popup_E5884951_F752_4256_41DF_CFD2D4F43DF8_0_1.png",
    "width": 1024,
    "height": 576,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "pitch": -4.2,
 "popupDistance": 100,
 "showDuration": 500,
 "hideDuration": 500,
 "showEasing": "cubic_in",
 "yaw": -147.63,
 "class": "PopupPanoramaOverlay"
},
{
 "easing": "cubic_in_out",
 "id": "effect_F1E6699E_E679_B2FB_41DF_D0E0CC45D289",
 "duration": 1000,
 "class": "FadeInEffect"
},
{
 "levels": [
  {
   "url": "media/popup_3B7B5904_133B_579E_4175_F10E2F35776C_0_0.jpg",
   "width": 4080,
   "height": 1840,
   "class": "ImageResourceLevel"
  },
  {
   "url": "media/popup_3B7B5904_133B_579E_4175_F10E2F35776C_0_1.jpg",
   "width": 2048,
   "height": 923,
   "class": "ImageResourceLevel"
  },
  {
   "url": "media/popup_3B7B5904_133B_579E_4175_F10E2F35776C_0_2.jpg",
   "width": 1024,
   "height": 461,
   "class": "ImageResourceLevel"
  },
  {
   "url": "media/popup_3B7B5904_133B_579E_4175_F10E2F35776C_0_3.jpg",
   "width": 512,
   "height": 230,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "ImageResource_240F04E7_1505_DE99_41A5_48CA68C774EB",
 "class": "ImageResource"
},
{
 "rotationY": 0,
 "hfov": 5.91,
 "popupMaxHeight": "60%",
 "rotationX": 0,
 "rotationZ": 0,
 "popupMaxWidth": "60%",
 "id": "popup_8C0559AC_9D24_C1BC_41D8_C2A80CF1634E",
 "hideEasing": "cubic_out",
 "image": {
  "levels": [
   {
    "url": "media/popup_8C0559AC_9D24_C1BC_41D8_C2A80CF1634E_0_1.png",
    "width": 1024,
    "height": 576,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "pitch": 5.3,
 "popupDistance": 100,
 "showDuration": 500,
 "hideDuration": 500,
 "showEasing": "cubic_in",
 "yaw": -51.94,
 "class": "PopupPanoramaOverlay"
},
{
 "thumbnailUrl": "media/panorama_DF09427F_D522_2F69_41E4_B7F711B0C20C_t.jpg",
 "overlays": [
  "this.overlay_FEDE5047_E153_B100_41D2_0B28B5D595E3",
  "this.overlay_0AD3C348_1B39_4CA9_41B9_E3FE649ABBA2",
  "this.overlay_E2D3E10D_ED7E_966A_41EA_7F7717783932",
  "this.popup_E3B5E2B3_F75F_C6DA_41D7_B0A755BAF85C"
 ],
 "adjacentPanoramas": [
  {
   "backwardYaw": 101.07,
   "yaw": 156.83,
   "panorama": "this.panorama_DF08C6FA_D523_D76A_41D5_7F86EC1FD1C3",
   "distance": 1,
   "class": "AdjacentPanorama"
  }
 ],
 "label": "Lorong Galery",
 "id": "panorama_DF09427F_D522_2F69_41E4_B7F711B0C20C",
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_DF09427F_D522_2F69_41E4_B7F711B0C20C_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_DF09427F_D522_2F69_41E4_B7F711B0C20C_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_DF09427F_D522_2F69_41E4_B7F711B0C20C_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_DF09427F_D522_2F69_41E4_B7F711B0C20C_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_DF09427F_D522_2F69_41E4_B7F711B0C20C_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_DF09427F_D522_2F69_41E4_B7F711B0C20C_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_DF09427F_D522_2F69_41E4_B7F711B0C20C_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_DF09427F_D522_2F69_41E4_B7F711B0C20C_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_DF09427F_D522_2F69_41E4_B7F711B0C20C_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_DF09427F_D522_2F69_41E4_B7F711B0C20C_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_DF09427F_D522_2F69_41E4_B7F711B0C20C_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_DF09427F_D522_2F69_41E4_B7F711B0C20C_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_DF09427F_D522_2F69_41E4_B7F711B0C20C_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_DF09427F_D522_2F69_41E4_B7F711B0C20C_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_DF09427F_D522_2F69_41E4_B7F711B0C20C_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_DF09427F_D522_2F69_41E4_B7F711B0C20C_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_DF09427F_D522_2F69_41E4_B7F711B0C20C_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_DF09427F_D522_2F69_41E4_B7F711B0C20C_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_DF09427F_D522_2F69_41E4_B7F711B0C20C_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 180,
 "hfovMin": "150%",
 "pitch": 0,
 "hfov": 360,
 "hfovMax": 130,
 "partial": false,
 "class": "Panorama"
},
{
 "rotationY": 0,
 "hfov": 4.41,
 "showEasing": "cubic_in",
 "hideEasing": "cubic_out",
 "rotationZ": 0,
 "popupMaxWidth": "50%",
 "id": "popup_235F54A4_12FF_DE9E_41A4_6F2D44E76287",
 "rotationX": 0,
 "class": "PopupPanoramaOverlay",
 "loop": false,
 "pitch": 16.96,
 "popupDistance": 100,
 "showDuration": 500,
 "hideDuration": 500,
 "popupMaxHeight": "50%",
 "yaw": -77.32,
 "autoplay": true,
 "video": {
  "width": 1920,
  "mp4Url": "media/video_2303E0B1_12FF_56F6_41B2_B996127200EB.mp4",
  "height": 1080,
  "class": "VideoResource"
 }
},
{
 "levels": [
  {
   "url": "media/popup_E77CC4B2_F752_42DA_41D4_785EAA2AE93E_0_0.png",
   "width": 1920,
   "height": 1080,
   "class": "ImageResourceLevel"
  },
  {
   "url": "media/popup_E77CC4B2_F752_42DA_41D4_785EAA2AE93E_0_1.png",
   "width": 1024,
   "height": 576,
   "class": "ImageResourceLevel"
  },
  {
   "url": "media/popup_E77CC4B2_F752_42DA_41D4_785EAA2AE93E_0_2.png",
   "width": 512,
   "height": 288,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "ImageResource_EF299974_F7B3_C25E_41E8_3400FB28CA0B",
 "class": "ImageResource"
},
{
 "levels": [
  {
   "url": "media/popup_E73D8009_F751_C1B6_41D1_F545AA7B4716_0_0.png",
   "width": 1920,
   "height": 1080,
   "class": "ImageResourceLevel"
  },
  {
   "url": "media/popup_E73D8009_F751_C1B6_41D1_F545AA7B4716_0_1.png",
   "width": 1024,
   "height": 576,
   "class": "ImageResourceLevel"
  },
  {
   "url": "media/popup_E73D8009_F751_C1B6_41D1_F545AA7B4716_0_2.png",
   "width": 512,
   "height": 288,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "ImageResource_EF0CB935_F7B3_C3DE_41E3_3218615B3FBE",
 "class": "ImageResource"
},
{
 "thumbnailUrl": "media/panorama_DF0B7220_D522_EE96_41E0_735AC8175FE5_t.jpg",
 "overlays": [
  "this.overlay_C10B2452_D5E2_6ABA_41E0_309470984B1D",
  "this.overlay_C0919FF9_D5EE_3576_41E7_A997241135C5",
  "this.overlay_C22473EF_D738_073B_41DD_AB425EA1D525",
  "this.overlay_092E90C9_1B3F_4DAB_4167_2B0204563594",
  "this.overlay_FDC9AE15_ED42_8A65_41DA_17DD93C668D2",
  "this.overlay_E3B7DDC8_ED43_89EA_41EC_9081468A7839",
  "this.overlay_E3F1D20B_ED42_9A6D_41B8_0C0E981B105D",
  "this.overlay_E232325E_ED41_FAE7_41EB_79E24C5A890B",
  "this.overlay_E38E53B9_ED47_F9AD_41C9_DD16FB8A0B79",
  "this.popup_F891157B_F751_C24A_41EC_CC062028D60B",
  "this.popup_E71C2186_F75E_C2BA_41CB_2936957F9E63",
  "this.popup_E7E121CA_F75F_C24A_41C6_15C3FED09E72",
  "this.popup_F8F2401C_F75E_41CE_41B7_8A77F3C75537",
  "this.popup_E5884951_F752_4256_41DF_CFD2D4F43DF8"
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_DF0B714D_D522_EAAE_41DB_DAFE02AA8C1C",
   "class": "AdjacentPanorama"
  },
  {
   "backwardYaw": -166.06,
   "yaw": -54.05,
   "panorama": "this.panorama_DF0BAF14_D522_36BE_4182_2D68BF6843DE",
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "backwardYaw": -45.77,
   "yaw": 106.22,
   "panorama": "this.panorama_DF0AA7F2_D522_357A_41E7_BB88309A039D",
   "distance": 1,
   "class": "AdjacentPanorama"
  }
 ],
 "label": "Maskerdam",
 "id": "panorama_DF0B7220_D522_EE96_41E0_735AC8175FE5",
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_DF0B7220_D522_EE96_41E0_735AC8175FE5_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_DF0B7220_D522_EE96_41E0_735AC8175FE5_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_DF0B7220_D522_EE96_41E0_735AC8175FE5_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_DF0B7220_D522_EE96_41E0_735AC8175FE5_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_DF0B7220_D522_EE96_41E0_735AC8175FE5_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_DF0B7220_D522_EE96_41E0_735AC8175FE5_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_DF0B7220_D522_EE96_41E0_735AC8175FE5_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_DF0B7220_D522_EE96_41E0_735AC8175FE5_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_DF0B7220_D522_EE96_41E0_735AC8175FE5_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_DF0B7220_D522_EE96_41E0_735AC8175FE5_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_DF0B7220_D522_EE96_41E0_735AC8175FE5_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_DF0B7220_D522_EE96_41E0_735AC8175FE5_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_DF0B7220_D522_EE96_41E0_735AC8175FE5_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_DF0B7220_D522_EE96_41E0_735AC8175FE5_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_DF0B7220_D522_EE96_41E0_735AC8175FE5_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_DF0B7220_D522_EE96_41E0_735AC8175FE5_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_DF0B7220_D522_EE96_41E0_735AC8175FE5_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_DF0B7220_D522_EE96_41E0_735AC8175FE5_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_DF0B7220_D522_EE96_41E0_735AC8175FE5_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 180,
 "hfovMin": "150%",
 "pitch": 0,
 "hfov": 360,
 "hfovMax": 130,
 "mapLocations": [
  {
   "map": "this.map_65C54D3C_6BC1_BCE6_41C8_91C0EDF11345",
   "x": 218.63,
   "angle": 0,
   "y": 140.83,
   "class": "PanoramaMapLocation"
  }
 ],
 "partial": false,
 "class": "Panorama"
},
{
 "levels": [
  {
   "url": "media/popup_8E757980_9D5C_4E65_41A8_642845C2CCFE_0_0.png",
   "width": 1920,
   "height": 1080,
   "class": "ImageResourceLevel"
  },
  {
   "url": "media/popup_8E757980_9D5C_4E65_41A8_642845C2CCFE_0_1.png",
   "width": 1024,
   "height": 576,
   "class": "ImageResourceLevel"
  },
  {
   "url": "media/popup_8E757980_9D5C_4E65_41A8_642845C2CCFE_0_2.png",
   "width": 512,
   "height": 288,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "ImageResource_89CA3463_9D5C_46A4_41D5_DDA53C0D66E5",
 "class": "ImageResource"
},
{
 "rotationY": 0,
 "hfov": 13.97,
 "popupMaxHeight": "60%",
 "rotationX": 0,
 "rotationZ": 0,
 "popupMaxWidth": "60%",
 "id": "popup_F8ED935C_F752_C64E_41E5_0F7AE6839551",
 "hideEasing": "cubic_out",
 "image": {
  "levels": [
   {
    "url": "media/popup_F8ED935C_F752_C64E_41E5_0F7AE6839551_0_1.png",
    "width": 1024,
    "height": 576,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "pitch": 18.92,
 "popupDistance": 100,
 "showDuration": 500,
 "hideDuration": 500,
 "showEasing": "cubic_in",
 "yaw": 16.48,
 "class": "PopupPanoramaOverlay"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "initialPosition": {
  "yaw": 0,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_DF688AE7_D522_3F9A_41B2_CE1EBAC5DAF0_camera",
 "class": "PanoramaCamera"
},
{
 "rotationY": 0,
 "hfov": 7.96,
 "popupMaxHeight": "60%",
 "rotationX": 0,
 "rotationZ": 0,
 "popupMaxWidth": "60%",
 "id": "popup_F8E99BFB_F752_464A_41C1_1E4936CF3011",
 "hideEasing": "cubic_out",
 "image": {
  "levels": [
   {
    "url": "media/popup_F8E99BFB_F752_464A_41C1_1E4936CF3011_0_1.png",
    "width": 1024,
    "height": 576,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "pitch": 11.61,
 "popupDistance": 100,
 "showDuration": 500,
 "hideDuration": 500,
 "showEasing": "cubic_in",
 "yaw": -123.96,
 "class": "PopupPanoramaOverlay"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "initialPosition": {
  "yaw": 0,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_DF0AD51E_D522_6AAB_41E0_02491679C908_camera",
 "class": "PanoramaCamera"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "initialPosition": {
  "yaw": 0,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_DF0B7220_D522_EE96_41E0_735AC8175FE5_camera",
 "class": "PanoramaCamera"
},
{
 "audio": {
  "mp3Url": "media/audio_0B966D75_187E_30CB_419E_F42FE2FFF3A4.mp3",
  "oggUrl": "media/audio_0B966D75_187E_30CB_419E_F42FE2FFF3A4.ogg",
  "class": "AudioResource"
 },
 "id": "audio_0B966D75_187E_30CB_419E_F42FE2FFF3A4",
 "data": {
  "label": "Audio1"
 },
 "autoplay": true,
 "class": "MediaAudio"
},
{
 "rotationY": 0,
 "hfov": 8.19,
 "popupMaxHeight": "60%",
 "rotationX": 0,
 "rotationZ": 0,
 "popupMaxWidth": "60%",
 "id": "popup_E71C2186_F75E_C2BA_41CB_2936957F9E63",
 "hideEasing": "cubic_out",
 "image": {
  "levels": [
   {
    "url": "media/popup_E71C2186_F75E_C2BA_41CB_2936957F9E63_0_1.png",
    "width": 1024,
    "height": 576,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "pitch": 9.74,
 "popupDistance": 100,
 "showDuration": 500,
 "hideDuration": 500,
 "showEasing": "cubic_in",
 "yaw": -30.01,
 "class": "PopupPanoramaOverlay"
},
{
 "rotationY": 0,
 "hfov": 4.91,
 "showEasing": "cubic_in",
 "hideEasing": "cubic_out",
 "rotationZ": 0,
 "popupMaxWidth": "95%",
 "id": "popup_31F5B7A7_1305_3A9A_41AA_19829798A91D",
 "rotationX": 0,
 "class": "PopupPanoramaOverlay",
 "loop": false,
 "pitch": -30.56,
 "popupDistance": 100,
 "showDuration": 500,
 "hideDuration": 500,
 "popupMaxHeight": "95%",
 "yaw": -0.16,
 "autoplay": true,
 "video": {
  "width": 1920,
  "mp4Url": "media/video_30DFE58F_1307_5EA9_4188_54F3B3C4462E.mp4",
  "height": 1080,
  "class": "VideoResource"
 }
},
{
 "rotationY": 0,
 "hfov": 3.59,
 "popupMaxHeight": "60%",
 "rotationX": 0,
 "rotationZ": 0,
 "popupMaxWidth": "60%",
 "id": "popup_E7F3FA07_F61C_0A4A_41E5_2288D9E1B920",
 "hideEasing": "cubic_out",
 "image": {
  "levels": [
   {
    "url": "media/popup_E7F3FA07_F61C_0A4A_41E5_2288D9E1B920_0_1.png",
    "width": 1024,
    "height": 576,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "pitch": 7.69,
 "popupDistance": 100,
 "showDuration": 500,
 "hideDuration": 500,
 "showEasing": "cubic_in",
 "yaw": 61.73,
 "class": "PopupPanoramaOverlay"
},
{
 "items": [
  {
   "media": "this.video_30DFE58F_1307_5EA9_4188_54F3B3C4462E",
   "start": "this.viewer_uidB8A6184B_B665_5DC4_41E2_376DF56773FEVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.PlayList_B96A1899_B665_5D44_41E3_2D249F61D359, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.PlayList_B96A1899_B665_5D44_41E3_2D249F61D359, 0)",
   "begin": "this.fixTogglePlayPauseButton(this.viewer_uidB8A6184B_B665_5DC4_41E2_376DF56773FEVideoPlayer)",
   "player": "this.viewer_uidB8A6184B_B665_5DC4_41E2_376DF56773FEVideoPlayer",
   "class": "VideoPlayListItem"
  }
 ],
 "id": "PlayList_B96A1899_B665_5D44_41E3_2D249F61D359",
 "class": "PlayList"
},
{
 "rotationY": 0,
 "hfov": 5.59,
 "popupMaxHeight": "60%",
 "rotationX": 0,
 "rotationZ": 0,
 "popupMaxWidth": "60%",
 "id": "popup_F96A9BDD_F69D_D4FA_41DD_35686EE58D35",
 "hideEasing": "cubic_out",
 "image": {
  "levels": [
   {
    "url": "media/popup_F96A9BDD_F69D_D4FA_41DD_35686EE58D35_0_1.png",
    "width": 1024,
    "height": 576,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "pitch": 0.11,
 "popupDistance": 100,
 "showDuration": 500,
 "hideDuration": 500,
 "showEasing": "cubic_in",
 "yaw": -152.76,
 "class": "PopupPanoramaOverlay"
},
{
 "levels": [
  {
   "url": "media/popup_E750C153_F604_76CA_41E4_474C447C3E57_0_0.png",
   "width": 1920,
   "height": 1080,
   "class": "ImageResourceLevel"
  },
  {
   "url": "media/popup_E750C153_F604_76CA_41E4_474C447C3E57_0_1.png",
   "width": 1024,
   "height": 576,
   "class": "ImageResourceLevel"
  },
  {
   "url": "media/popup_E750C153_F604_76CA_41E4_474C447C3E57_0_2.png",
   "width": 512,
   "height": 288,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "ImageResource_E7D83B1F_F61C_0A7A_41E7_E2C0B7F405FF",
 "class": "ImageResource"
},
{
 "levels": [
  {
   "url": "media/popup_E7465D83_F756_C2BA_41DA_9684D5EE86E5_0_0.png",
   "width": 1920,
   "height": 1080,
   "class": "ImageResourceLevel"
  },
  {
   "url": "media/popup_E7465D83_F756_C2BA_41DA_9684D5EE86E5_0_1.png",
   "width": 1024,
   "height": 576,
   "class": "ImageResourceLevel"
  },
  {
   "url": "media/popup_E7465D83_F756_C2BA_41DA_9684D5EE86E5_0_2.png",
   "width": 512,
   "height": 288,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "ImageResource_EF156945_F7B3_C3BE_41E2_96CCC1143678",
 "class": "ImageResource"
},
{
 "rotationY": 0,
 "hfov": 6.54,
 "popupMaxHeight": "60%",
 "rotationX": 0,
 "rotationZ": 0,
 "popupMaxWidth": "60%",
 "id": "popup_8F958FEE_9D5D_C1BC_41E0_4D3C8E890915",
 "hideEasing": "cubic_out",
 "image": {
  "levels": [
   {
    "url": "media/popup_8F958FEE_9D5D_C1BC_41E0_4D3C8E890915_0_1.png",
    "width": 1024,
    "height": 576,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "pitch": 4.68,
 "popupDistance": 100,
 "showDuration": 500,
 "hideDuration": 500,
 "showEasing": "cubic_in",
 "yaw": 144.82,
 "class": "PopupPanoramaOverlay"
},
{
 "thumbnailUrl": "media/panorama_DF0A8329_D522_2E96_41DA_0346C09AF2A0_t.jpg",
 "overlays": [
  "this.overlay_E9538BFE_E7AB_348B_41DD_180C667923FD",
  "this.overlay_0910070A_1B39_54A8_41A0_D52DC74108FC",
  "this.overlay_E20AE291_ED41_9A7A_41E7_F9C86AF5EB4A",
  "this.popup_F8ED935C_F752_C64E_41E5_0F7AE6839551"
 ],
 "adjacentPanoramas": [
  {
   "backwardYaw": 3.31,
   "yaw": -168.59,
   "panorama": "this.panorama_DF0AF41D_D522_2AA9_41EA_37FF14B377FE",
   "distance": 1,
   "class": "AdjacentPanorama"
  }
 ],
 "label": "Bale Pamadesaan",
 "id": "panorama_DF0A8329_D522_2E96_41DA_0346C09AF2A0",
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_DF0A8329_D522_2E96_41DA_0346C09AF2A0_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_DF0A8329_D522_2E96_41DA_0346C09AF2A0_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_DF0A8329_D522_2E96_41DA_0346C09AF2A0_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_DF0A8329_D522_2E96_41DA_0346C09AF2A0_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_DF0A8329_D522_2E96_41DA_0346C09AF2A0_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_DF0A8329_D522_2E96_41DA_0346C09AF2A0_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_DF0A8329_D522_2E96_41DA_0346C09AF2A0_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_DF0A8329_D522_2E96_41DA_0346C09AF2A0_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_DF0A8329_D522_2E96_41DA_0346C09AF2A0_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_DF0A8329_D522_2E96_41DA_0346C09AF2A0_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_DF0A8329_D522_2E96_41DA_0346C09AF2A0_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_DF0A8329_D522_2E96_41DA_0346C09AF2A0_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_DF0A8329_D522_2E96_41DA_0346C09AF2A0_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_DF0A8329_D522_2E96_41DA_0346C09AF2A0_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_DF0A8329_D522_2E96_41DA_0346C09AF2A0_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_DF0A8329_D522_2E96_41DA_0346C09AF2A0_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_DF0A8329_D522_2E96_41DA_0346C09AF2A0_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_DF0A8329_D522_2E96_41DA_0346C09AF2A0_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_DF0A8329_D522_2E96_41DA_0346C09AF2A0_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 180,
 "hfovMin": "150%",
 "pitch": 0,
 "hfov": 360,
 "hfovMax": 130,
 "mapLocations": [
  {
   "map": "this.map_65C54D3C_6BC1_BCE6_41C8_91C0EDF11345",
   "x": 442.66,
   "angle": 0,
   "y": 148.6,
   "class": "PanoramaMapLocation"
  }
 ],
 "partial": false,
 "class": "Panorama"
},
{
 "levels": [
  {
   "url": "media/popup_8DE088A3_9D24_4FAB_41E2_587E10FBE68E_0_0.png",
   "width": 1920,
   "height": 1080,
   "class": "ImageResourceLevel"
  },
  {
   "url": "media/popup_8DE088A3_9D24_4FAB_41E2_587E10FBE68E_0_1.png",
   "width": 1024,
   "height": 576,
   "class": "ImageResourceLevel"
  },
  {
   "url": "media/popup_8DE088A3_9D24_4FAB_41E2_587E10FBE68E_0_2.png",
   "width": 512,
   "height": 288,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "ImageResource_89B51A06_9D24_426C_41E0_522EA18EA55E",
 "class": "ImageResource"
},
{
 "rotationY": 0,
 "hfov": 6.65,
 "popupMaxHeight": "60%",
 "rotationX": 0,
 "rotationZ": 0,
 "popupMaxWidth": "60%",
 "id": "popup_E7E121CA_F75F_C24A_41C6_15C3FED09E72",
 "hideEasing": "cubic_out",
 "image": {
  "levels": [
   {
    "url": "media/popup_E7E121CA_F75F_C24A_41C6_15C3FED09E72_0_1.png",
    "width": 1024,
    "height": 576,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "pitch": 21.79,
 "popupDistance": 100,
 "showDuration": 500,
 "hideDuration": 500,
 "showEasing": "cubic_in",
 "yaw": -56.8,
 "class": "PopupPanoramaOverlay"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "initialPosition": {
  "yaw": 0,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_DF0A8329_D522_2E96_41DA_0346C09AF2A0_camera",
 "class": "PanoramaCamera"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "initialPosition": {
  "yaw": -109.04,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_B8BCAD32_B665_5744_41C7_A7CC0E3387D5",
 "class": "PanoramaCamera"
},
{
 "thumbnailUrl": "media/panorama_DF0B7A68_D522_5E96_41E4_2FA8606D5645_t.jpg",
 "overlays": [
  "this.overlay_C4B51E9E_D708_011A_41E5_8C7F78B748F1",
  "this.overlay_091C4796_1B39_D3B8_41B5_DA88FCD2FD62",
  "this.overlay_E2B119DF_ED46_89E5_41EC_54B57AB333B2",
  "this.popup_F8B6911A_F752_43CA_41D4_DAED5D716626"
 ],
 "adjacentPanoramas": [
  {
   "backwardYaw": -75.14,
   "yaw": -158.07,
   "panorama": "this.panorama_DF0BFC23_D522_7A9A_41E2_705D7646CD69",
   "distance": 1,
   "class": "AdjacentPanorama"
  }
 ],
 "label": "Peralatan Raja",
 "id": "panorama_DF0B7A68_D522_5E96_41E4_2FA8606D5645",
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_DF0B7A68_D522_5E96_41E4_2FA8606D5645_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_DF0B7A68_D522_5E96_41E4_2FA8606D5645_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_DF0B7A68_D522_5E96_41E4_2FA8606D5645_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_DF0B7A68_D522_5E96_41E4_2FA8606D5645_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_DF0B7A68_D522_5E96_41E4_2FA8606D5645_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_DF0B7A68_D522_5E96_41E4_2FA8606D5645_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_DF0B7A68_D522_5E96_41E4_2FA8606D5645_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_DF0B7A68_D522_5E96_41E4_2FA8606D5645_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_DF0B7A68_D522_5E96_41E4_2FA8606D5645_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_DF0B7A68_D522_5E96_41E4_2FA8606D5645_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_DF0B7A68_D522_5E96_41E4_2FA8606D5645_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_DF0B7A68_D522_5E96_41E4_2FA8606D5645_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_DF0B7A68_D522_5E96_41E4_2FA8606D5645_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_DF0B7A68_D522_5E96_41E4_2FA8606D5645_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_DF0B7A68_D522_5E96_41E4_2FA8606D5645_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_DF0B7A68_D522_5E96_41E4_2FA8606D5645_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_DF0B7A68_D522_5E96_41E4_2FA8606D5645_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_DF0B7A68_D522_5E96_41E4_2FA8606D5645_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_DF0B7A68_D522_5E96_41E4_2FA8606D5645_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 180,
 "hfovMin": "150%",
 "pitch": 0,
 "hfov": 360,
 "hfovMax": 130,
 "partial": false,
 "class": "Panorama"
},
{
 "levels": [
  {
   "url": "media/popup_E7DAE6CC_F752_4E4E_41ED_B0F8AB9C6C25_0_0.png",
   "width": 1920,
   "height": 1080,
   "class": "ImageResourceLevel"
  },
  {
   "url": "media/popup_E7DAE6CC_F752_4E4E_41ED_B0F8AB9C6C25_0_1.png",
   "width": 1024,
   "height": 576,
   "class": "ImageResourceLevel"
  },
  {
   "url": "media/popup_E7DAE6CC_F752_4E4E_41ED_B0F8AB9C6C25_0_2.png",
   "width": 512,
   "height": 288,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "ImageResource_EF0FE935_F7B3_C3DE_41D8_8DB406F9837E",
 "class": "ImageResource"
},
{
 "rotationY": 0,
 "hfov": 3.99,
 "popupMaxHeight": "60%",
 "rotationX": 0,
 "rotationZ": 0,
 "popupMaxWidth": "60%",
 "id": "popup_8C801360_9D5C_42A5_419C_D68B2037FE16",
 "hideEasing": "cubic_out",
 "image": {
  "levels": [
   {
    "url": "media/popup_8C801360_9D5C_42A5_419C_D68B2037FE16_0_1.png",
    "width": 1024,
    "height": 576,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "pitch": 5.94,
 "popupDistance": 100,
 "showDuration": 500,
 "hideDuration": 500,
 "showEasing": "cubic_in",
 "yaw": -82.08,
 "class": "PopupPanoramaOverlay"
},
{
 "levels": [
  {
   "url": "media/popup_F8BD8C07_F752_C1BA_41E8_77B4093E763C_0_0.png",
   "width": 1920,
   "height": 1080,
   "class": "ImageResourceLevel"
  },
  {
   "url": "media/popup_F8BD8C07_F752_C1BA_41E8_77B4093E763C_0_1.png",
   "width": 1024,
   "height": 576,
   "class": "ImageResourceLevel"
  },
  {
   "url": "media/popup_F8BD8C07_F752_C1BA_41E8_77B4093E763C_0_2.png",
   "width": 512,
   "height": 288,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "ImageResource_EF033926_F7B3_C3FA_41D5_95848575EC3B",
 "class": "ImageResource"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "initialPosition": {
  "yaw": 0,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_DF091129_D522_6A96_41CB_A7A82D7D5CF4_camera",
 "class": "PanoramaCamera"
},
{
 "rotationY": 0,
 "hfov": 12.66,
 "popupMaxHeight": "60%",
 "rotationX": 0,
 "rotationZ": 0,
 "popupMaxWidth": "60%",
 "id": "popup_E7655172_F771_C25A_41AA_3B050C71F6D0",
 "hideEasing": "cubic_out",
 "image": {
  "levels": [
   {
    "url": "media/popup_E7655172_F771_C25A_41AA_3B050C71F6D0_0_1.png",
    "width": 1024,
    "height": 576,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "pitch": 15.77,
 "popupDistance": 100,
 "showDuration": 500,
 "hideDuration": 500,
 "showEasing": "cubic_in",
 "yaw": -1.61,
 "class": "PopupPanoramaOverlay"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "initialPosition": {
  "yaw": 177.16,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_B9CD8F29_B665_5345_41CB_8B290B36A63F",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "id": "panorama_DF0968AD_D521_DBEE_41E8_53FAFFC84B8C_camera",
 "class": "PanoramaCamera"
},
{
 "rotationY": 0,
 "hfov": 9.02,
 "showEasing": "cubic_in",
 "hideEasing": "cubic_out",
 "rotationZ": 0,
 "popupMaxWidth": "50%",
 "id": "popup_37C2403B_1304_D5E9_41A5_779C1CB8FA68",
 "rotationX": 0,
 "class": "PopupPanoramaOverlay",
 "loop": false,
 "pitch": 14.75,
 "popupDistance": 100,
 "showDuration": 500,
 "hideDuration": 500,
 "popupMaxHeight": "50%",
 "yaw": -29.14,
 "autoplay": true,
 "video": {
  "width": 2986,
  "mp4Url": "media/video_31307D64_1305_2F9F_4183_6128BE5FB45C.mp4",
  "height": 1680,
  "class": "VideoResource"
 }
},
{
 "easing": "cubic_in_out",
 "id": "effect_F1ED69AD_E679_B2D9_41C6_2B81F1D6AA5D",
 "duration": 1000,
 "class": "FadeInEffect"
},
{
 "thumbnailUrl": "media/panorama_DF62FED0_D522_37B6_41C2_93651E251542_t.jpg",
 "overlays": [
  "this.overlay_FC5443E1_E152_F701_41DD_EAE16EB97257",
  "this.overlay_093C9D29_1B38_B4E8_41B3_5A424CA49CA1",
  "this.overlay_E2C912C3_ED41_FBDD_41C3_D345AAEE53E7",
  "this.popup_E7655172_F771_C25A_41AA_3B050C71F6D0"
 ],
 "adjacentPanoramas": [
  {
   "backwardYaw": -11.66,
   "yaw": 177.21,
   "panorama": "this.panorama_DF09300A_D522_2AAB_41C0_2217A91877F7",
   "distance": 1,
   "class": "AdjacentPanorama"
  }
 ],
 "label": "bale telaga",
 "id": "panorama_DF62FED0_D522_37B6_41C2_93651E251542",
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_DF62FED0_D522_37B6_41C2_93651E251542_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_DF62FED0_D522_37B6_41C2_93651E251542_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_DF62FED0_D522_37B6_41C2_93651E251542_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_DF62FED0_D522_37B6_41C2_93651E251542_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_DF62FED0_D522_37B6_41C2_93651E251542_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_DF62FED0_D522_37B6_41C2_93651E251542_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_DF62FED0_D522_37B6_41C2_93651E251542_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_DF62FED0_D522_37B6_41C2_93651E251542_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_DF62FED0_D522_37B6_41C2_93651E251542_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_DF62FED0_D522_37B6_41C2_93651E251542_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_DF62FED0_D522_37B6_41C2_93651E251542_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_DF62FED0_D522_37B6_41C2_93651E251542_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_DF62FED0_D522_37B6_41C2_93651E251542_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_DF62FED0_D522_37B6_41C2_93651E251542_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_DF62FED0_D522_37B6_41C2_93651E251542_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_DF62FED0_D522_37B6_41C2_93651E251542_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_DF62FED0_D522_37B6_41C2_93651E251542_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_DF62FED0_D522_37B6_41C2_93651E251542_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_DF62FED0_D522_37B6_41C2_93651E251542_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 180,
 "hfovMin": "150%",
 "pitch": 0,
 "hfov": 360,
 "hfovMax": 130,
 "mapLocations": [
  {
   "map": "this.map_65C54D3C_6BC1_BCE6_41C8_91C0EDF11345",
   "x": 678.69,
   "angle": 0,
   "y": 137.58,
   "class": "PanoramaMapLocation"
  }
 ],
 "partial": false,
 "class": "Panorama"
},
{
 "rotationY": 0,
 "hfov": 12.32,
 "popupMaxHeight": "60%",
 "rotationX": 0,
 "rotationZ": 0,
 "popupMaxWidth": "60%",
 "id": "popup_E7465D83_F756_C2BA_41DA_9684D5EE86E5",
 "hideEasing": "cubic_out",
 "image": {
  "levels": [
   {
    "url": "media/popup_E7465D83_F756_C2BA_41DA_9684D5EE86E5_0_1.png",
    "width": 1024,
    "height": 576,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "pitch": -15.58,
 "popupDistance": 100,
 "showDuration": 500,
 "hideDuration": 500,
 "showEasing": "cubic_in",
 "yaw": -151.4,
 "class": "PopupPanoramaOverlay"
},
{
 "levels": [
  {
   "url": "media/popup_E74BE74A_F752_4E4A_41BD_AC488F852AFC_0_0.png",
   "width": 1920,
   "height": 1080,
   "class": "ImageResourceLevel"
  },
  {
   "url": "media/popup_E74BE74A_F752_4E4A_41BD_AC488F852AFC_0_1.png",
   "width": 1024,
   "height": 576,
   "class": "ImageResourceLevel"
  },
  {
   "url": "media/popup_E74BE74A_F752_4E4A_41BD_AC488F852AFC_0_2.png",
   "width": 512,
   "height": 288,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "ImageResource_EF091935_F7B3_C3DE_41E5_9AE1D12FE29A",
 "class": "ImageResource"
},
{
 "class": "Video",
 "label": "Puri Agung karangasem",
 "scaleMode": "fit_inside",
 "width": 2986,
 "loop": false,
 "id": "video_20934DBA_151B_2EEA_418E_EF3DFDEACB48",
 "thumbnailUrl": "media/video_20934DBA_151B_2EEA_418E_EF3DFDEACB48_t.jpg",
 "height": 1680,
 "video": {
  "width": 2986,
  "mp4Url": "media/video_20934DBA_151B_2EEA_418E_EF3DFDEACB48.mp4",
  "height": 1680,
  "class": "VideoResource"
 }
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "initialPosition": {
  "yaw": -78.93,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_B9B4FA31_B665_5D44_41DD_9C019B03BAEF",
 "class": "PanoramaCamera"
},
{
 "levels": [
  {
   "url": "media/popup_E3EBFFF2_F77F_DE5B_41EB_5F32E610EEEE_0_0.png",
   "width": 1920,
   "height": 1080,
   "class": "ImageResourceLevel"
  },
  {
   "url": "media/popup_E3EBFFF2_F77F_DE5B_41EB_5F32E610EEEE_0_1.png",
   "width": 1024,
   "height": 576,
   "class": "ImageResourceLevel"
  },
  {
   "url": "media/popup_E3EBFFF2_F77F_DE5B_41EB_5F32E610EEEE_0_2.png",
   "width": 512,
   "height": 288,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "ImageResource_E3D9F84B_F752_424A_41E5_B885894131DD",
 "class": "ImageResource"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "initialPosition": {
  "yaw": 0,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_DF0B7A68_D522_5E96_41E4_2FA8606D5645_camera",
 "class": "PanoramaCamera"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "initialPosition": {
  "yaw": 99.98,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_B98C3FA6_B665_534F_41B2_48DC3B2EA609",
 "class": "PanoramaCamera"
},
{
 "levels": [
  {
   "url": "media/popup_8C801360_9D5C_42A5_419C_D68B2037FE16_0_0.png",
   "width": 1920,
   "height": 1080,
   "class": "ImageResourceLevel"
  },
  {
   "url": "media/popup_8C801360_9D5C_42A5_419C_D68B2037FE16_0_1.png",
   "width": 1024,
   "height": 576,
   "class": "ImageResourceLevel"
  },
  {
   "url": "media/popup_8C801360_9D5C_42A5_419C_D68B2037FE16_0_2.png",
   "width": 512,
   "height": 288,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "ImageResource_89CFE463_9D5C_46A4_41DF_A3FBA671CACE",
 "class": "ImageResource"
},
{
 "rotationY": 0,
 "hfov": 7.61,
 "popupMaxHeight": "60%",
 "rotationX": 0,
 "rotationZ": 0,
 "popupMaxWidth": "60%",
 "id": "popup_F9C15111_F695_554A_41E5_D6CD11486A17",
 "hideEasing": "cubic_out",
 "image": {
  "levels": [
   {
    "url": "media/popup_F9C15111_F695_554A_41E5_D6CD11486A17_0_1.png",
    "width": 1024,
    "height": 576,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "pitch": -6.36,
 "popupDistance": 100,
 "showDuration": 500,
 "hideDuration": 500,
 "showEasing": "cubic_in",
 "yaw": -73.72,
 "class": "PopupPanoramaOverlay"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "initialPosition": {
  "yaw": 168.34,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_A6B9FC47_B665_55CD_41E6_444A039407E3",
 "class": "PanoramaCamera"
},
{
 "rotationY": 0,
 "hfov": 4.25,
 "popupMaxHeight": "60%",
 "rotationX": 0,
 "rotationZ": 0,
 "popupMaxWidth": "60%",
 "id": "popup_8DE088A3_9D24_4FAB_41E2_587E10FBE68E",
 "hideEasing": "cubic_out",
 "image": {
  "levels": [
   {
    "url": "media/popup_8DE088A3_9D24_4FAB_41E2_587E10FBE68E_0_1.png",
    "width": 1024,
    "height": 576,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "pitch": 6.91,
 "popupDistance": 100,
 "showDuration": 500,
 "hideDuration": 500,
 "showEasing": "cubic_in",
 "yaw": -64.75,
 "class": "PopupPanoramaOverlay"
},
{
 "levels": [
  {
   "url": "media/popup_E41D0776_F61C_3ACA_41E0_6E17BA1FFD39_0_0.png",
   "width": 1920,
   "height": 1080,
   "class": "ImageResourceLevel"
  },
  {
   "url": "media/popup_E41D0776_F61C_3ACA_41E0_6E17BA1FFD39_0_1.png",
   "width": 1024,
   "height": 576,
   "class": "ImageResourceLevel"
  },
  {
   "url": "media/popup_E41D0776_F61C_3ACA_41E0_6E17BA1FFD39_0_2.png",
   "width": 512,
   "height": 288,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "ImageResource_E7D58B1F_F61C_0A7A_41E2_684BD33CA361",
 "class": "ImageResource"
},
{
 "easing": "cubic_in_out",
 "id": "effect_F1E6B99C_E679_B2FF_41E5_032D8D6B98D1",
 "duration": 1000,
 "class": "FadeInEffect"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "initialPosition": {
  "yaw": 0,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_DF0B18B0_D522_3BF6_41E7_E97BDC8D73D5_camera",
 "class": "PanoramaCamera"
},
{
 "levels": [
  {
   "url": "media/popup_E3DF0A58_F772_4656_41E7_27E5A17BEC97_0_0.png",
   "width": 1920,
   "height": 1080,
   "class": "ImageResourceLevel"
  },
  {
   "url": "media/popup_E3DF0A58_F772_4656_41E7_27E5A17BEC97_0_1.png",
   "width": 1024,
   "height": 576,
   "class": "ImageResourceLevel"
  },
  {
   "url": "media/popup_E3DF0A58_F772_4656_41E7_27E5A17BEC97_0_2.png",
   "width": 512,
   "height": 288,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "ImageResource_E3EE083B_F752_41CA_41D6_5A20F2FC6C83",
 "class": "ImageResource"
},
{
 "levels": [
  {
   "url": "media/popup_E7D8F6BE_F752_4ECA_41BA_984FC4152B31_0_0.png",
   "width": 1920,
   "height": 1080,
   "class": "ImageResourceLevel"
  },
  {
   "url": "media/popup_E7D8F6BE_F752_4ECA_41BA_984FC4152B31_0_1.png",
   "width": 1024,
   "height": 576,
   "class": "ImageResourceLevel"
  },
  {
   "url": "media/popup_E7D8F6BE_F752_4ECA_41BA_984FC4152B31_0_2.png",
   "width": 512,
   "height": 288,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "ImageResource_EF0A6935_F7B3_C3DE_41D2_A72AD36439D8",
 "class": "ImageResource"
},
{
 "headerBackgroundColorDirection": "vertical",
 "id": "window_BCF2DCB5_B65D_354C_41D7_80D40E37CD77",
 "closeButtonPressedBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "titlePaddingLeft": 5,
 "paddingBottom": 0,
 "minHeight": 20,
 "closeButtonBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "shadow": true,
 "headerPaddingLeft": 10,
 "closeButtonPressedIconLineWidth": 5,
 "closeButtonRollOverBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "headerBackgroundOpacity": 0,
 "closeButtonPressedBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "modal": true,
 "titlePaddingBottom": 5,
 "backgroundOpacity": 1,
 "bodyPaddingLeft": 0,
 "bodyPaddingBottom": 0,
 "shadowVerticalLength": 0,
 "verticalAlign": "middle",
 "closeButtonPressedBorderSize": 0,
 "paddingRight": 0,
 "closeButtonRollOverBorderSize": 0,
 "veilOpacity": 0.4,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "bodyPaddingTop": 0,
 "backgroundColor": [],
 "borderSize": 0,
 "veilShowEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeInEffect"
 },
 "closeButtonPaddingTop": 5,
 "closeButtonPressedBackgroundColorDirection": "vertical",
 "shadowSpread": 1,
 "closeButtonPressedBorderColor": "#000000",
 "headerPaddingRight": 0,
 "propagateClick": false,
 "closeButtonRollOverBackgroundColorDirection": "vertical",
 "bodyPaddingRight": 0,
 "bodyBackgroundColorDirection": "vertical",
 "closeButtonPressedIconColor": "#888888",
 "titlePaddingTop": 5,
 "closeButtonRollOverBackgroundOpacity": 0.3,
 "closeButtonIconColor": "#000000",
 "closeButtonPaddingLeft": 5,
 "closeButtonRollOverIconColor": "#666666",
 "scrollBarMargin": 2,
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "scrollBarWidth": 10,
 "closeButtonBorderColor": "#000000",
 "titleFontFamily": "Arial",
 "overflow": "scroll",
 "class": "Window",
 "closeButtonRollOverIconLineWidth": 5,
 "headerVerticalAlign": "middle",
 "backgroundColorDirection": "vertical",
 "layout": "vertical",
 "closeButtonBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "showEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeInEffect"
 },
 "scrollBarOpacity": 0.5,
 "children": [
  "this.viewer_uidB8DC984B_B665_5DC4_41BA_9F6A0AACB90E"
 ],
 "shadowColor": "#000000",
 "closeButtonBackgroundColorDirection": "vertical",
 "closeButtonPaddingRight": 5,
 "veilColorRatios": [
  0,
  1
 ],
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "footerHeight": 5,
 "paddingTop": 0,
 "footerBackgroundOpacity": 0,
 "shadowBlurRadius": 6,
 "scrollBarVisible": "rollOver",
 "closeButtonBorderSize": 0,
 "scrollBarColor": "#000000",
 "horizontalAlign": "center",
 "minWidth": 20,
 "veilHideEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeOutEffect"
 },
 "closeButtonBackgroundOpacity": 0.3,
 "paddingLeft": 0,
 "shadowOpacity": 0.5,
 "contentOpaque": false,
 "headerPaddingBottom": 5,
 "closeButtonBorderRadius": 0,
 "hideEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeOutEffect"
 },
 "closeButtonPressedBackgroundOpacity": 0.3,
 "footerBackgroundColorDirection": "vertical",
 "borderRadius": 5,
 "titleFontSize": "1.29vmin",
 "gap": 10,
 "closeButtonIconHeight": 20,
 "titlePaddingRight": 5,
 "headerPaddingTop": 10,
 "backgroundColorRatios": [],
 "shadowHorizontalLength": 3,
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "bodyBackgroundOpacity": 0,
 "closeButtonRollOverBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "closeButtonPaddingBottom": 5,
 "closeButtonRollOverBorderColor": "#000000",
 "closeButtonIconLineWidth": 5,
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "closeButtonIconWidth": 20,
 "data": {
  "name": "Window587"
 }
},
{
 "levels": [
  {
   "url": "media/popup_8C3C6B67_9D25_C2AB_41D2_95FE5CEA254B_0_0.png",
   "width": 1920,
   "height": 1080,
   "class": "ImageResourceLevel"
  },
  {
   "url": "media/popup_8C3C6B67_9D25_C2AB_41D2_95FE5CEA254B_0_1.png",
   "width": 1024,
   "height": 576,
   "class": "ImageResourceLevel"
  },
  {
   "url": "media/popup_8C3C6B67_9D25_C2AB_41D2_95FE5CEA254B_0_2.png",
   "width": 512,
   "height": 288,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "ImageResource_89B8C9F6_9D24_41AD_41D7_A26D3F218DB9",
 "class": "ImageResource"
},
{
 "audio": "this.audioresource_FF21C99D_EDC4_70CA_41AA_9B833DF0FBE0",
 "id": "audio_FE0225AD_EDC4_10CB_41E6_F3F8FB8C60B3",
 "data": {
  "label": "Audio3"
 },
 "autoplay": true,
 "class": "PanoramaAudio"
},
{
 "rotationY": 0,
 "hfov": 3.8,
 "popupMaxHeight": "60%",
 "rotationX": 0,
 "rotationZ": 0,
 "popupMaxWidth": "60%",
 "id": "popup_F9561C50_F694_B3C9_41E9_AA168EBE6368",
 "hideEasing": "cubic_out",
 "image": {
  "levels": [
   {
    "url": "media/popup_F9561C50_F694_B3C9_41E9_AA168EBE6368_0_1.png",
    "width": 1024,
    "height": 576,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "pitch": -1.18,
 "popupDistance": 100,
 "showDuration": 500,
 "hideDuration": 500,
 "showEasing": "cubic_in",
 "yaw": -172.73,
 "class": "PopupPanoramaOverlay"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "initialPosition": {
  "yaw": 13.94,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_B9828A60_B665_5DC4_41E1_170FDC0AC930",
 "class": "PanoramaCamera"
},
{
 "rotationY": 0,
 "hfov": 13.82,
 "popupMaxHeight": "60%",
 "rotationX": 0,
 "rotationZ": 0,
 "popupMaxWidth": "60%",
 "id": "popup_E74BE74A_F752_4E4A_41BD_AC488F852AFC",
 "hideEasing": "cubic_out",
 "image": {
  "levels": [
   {
    "url": "media/popup_E74BE74A_F752_4E4A_41BD_AC488F852AFC_0_1.png",
    "width": 1024,
    "height": 576,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "pitch": -10.28,
 "popupDistance": 100,
 "showDuration": 500,
 "hideDuration": 500,
 "showEasing": "cubic_in",
 "yaw": -79.84,
 "class": "PopupPanoramaOverlay"
},
{
 "levels": [
  {
   "url": "media/popup_E71C2186_F75E_C2BA_41CB_2936957F9E63_0_0.png",
   "width": 1920,
   "height": 1080,
   "class": "ImageResourceLevel"
  },
  {
   "url": "media/popup_E71C2186_F75E_C2BA_41CB_2936957F9E63_0_1.png",
   "width": 1024,
   "height": 576,
   "class": "ImageResourceLevel"
  },
  {
   "url": "media/popup_E71C2186_F75E_C2BA_41CB_2936957F9E63_0_2.png",
   "width": 512,
   "height": 288,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "ImageResource_EF05D926_F7B3_C3FA_41DE_1A7AF09ECDBA",
 "class": "ImageResource"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "initialPosition": {
  "yaw": -90.31,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_B9EA2965_B665_5FCC_41E0_3BBFE2894E7C",
 "class": "PanoramaCamera"
},
{
 "levels": [
  {
   "url": "media/popup_E7F6672C_F61C_1A5E_41B8_6414A41B1AC0_0_0.png",
   "width": 1920,
   "height": 1080,
   "class": "ImageResourceLevel"
  },
  {
   "url": "media/popup_E7F6672C_F61C_1A5E_41B8_6414A41B1AC0_0_1.png",
   "width": 1024,
   "height": 576,
   "class": "ImageResourceLevel"
  },
  {
   "url": "media/popup_E7F6672C_F61C_1A5E_41B8_6414A41B1AC0_0_2.png",
   "width": 512,
   "height": 288,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "ImageResource_E7D86B1F_F61C_0A7A_41E8_C4FEC968219B",
 "class": "ImageResource"
},
{
 "rotationY": 0,
 "hfov": 14.4,
 "popupMaxHeight": "60%",
 "rotationX": 0,
 "rotationZ": 0,
 "popupMaxWidth": "60%",
 "id": "popup_E3B5E2B3_F75F_C6DA_41D7_B0A755BAF85C",
 "hideEasing": "cubic_out",
 "image": {
  "levels": [
   {
    "url": "media/popup_E3B5E2B3_F75F_C6DA_41D7_B0A755BAF85C_0_1.png",
    "width": 1024,
    "height": 576,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "pitch": -1.28,
 "popupDistance": 100,
 "showDuration": 500,
 "hideDuration": 500,
 "showEasing": "cubic_in",
 "yaw": -16.17,
 "class": "PopupPanoramaOverlay"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "initialPosition": {
  "yaw": 76.04,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_B9533E0E_B665_555C_4160_463FE7FC1BFD",
 "class": "PanoramaCamera"
},
{
 "rotationY": 0,
 "hfov": 3.94,
 "popupMaxHeight": "60%",
 "rotationX": 0,
 "rotationZ": 0,
 "popupMaxWidth": "60%",
 "id": "popup_E7F6672C_F61C_1A5E_41B8_6414A41B1AC0",
 "hideEasing": "cubic_out",
 "image": {
  "levels": [
   {
    "url": "media/popup_E7F6672C_F61C_1A5E_41B8_6414A41B1AC0_0_1.png",
    "width": 1024,
    "height": 576,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "pitch": 7.27,
 "popupDistance": 100,
 "showDuration": 500,
 "hideDuration": 500,
 "showEasing": "cubic_in",
 "yaw": 95.21,
 "class": "PopupPanoramaOverlay"
},
{
 "rotationY": 0,
 "hfov": 12.62,
 "popupMaxHeight": "95%",
 "rotationX": 0,
 "rotationZ": 0,
 "popupMaxWidth": "95%",
 "id": "popup_3B7B5904_133B_579E_4175_F10E2F35776C",
 "hideEasing": "cubic_out",
 "image": {
  "levels": [
   {
    "url": "media/popup_3B7B5904_133B_579E_4175_F10E2F35776C_0_2.jpg",
    "width": 1024,
    "height": 461,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "pitch": 22.74,
 "popupDistance": 100,
 "showDuration": 500,
 "hideDuration": 500,
 "showEasing": "cubic_in",
 "yaw": 36.78,
 "class": "PopupPanoramaOverlay"
},
{
 "rotationY": 0,
 "hfov": 7.42,
 "popupMaxHeight": "60%",
 "rotationX": 0,
 "rotationZ": 0,
 "popupMaxWidth": "60%",
 "id": "popup_F8BD8C07_F752_C1BA_41E8_77B4093E763C",
 "hideEasing": "cubic_out",
 "image": {
  "levels": [
   {
    "url": "media/popup_F8BD8C07_F752_C1BA_41E8_77B4093E763C_0_1.png",
    "width": 1024,
    "height": 576,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "pitch": -1.07,
 "popupDistance": 100,
 "showDuration": 500,
 "hideDuration": 500,
 "showEasing": "cubic_in",
 "yaw": 34.7,
 "class": "PopupPanoramaOverlay"
},
{
 "levels": [
  {
   "url": "media/popup_8C5811A5_9D3C_C1AC_41E2_898EC55DF924_0_0.png",
   "width": 1920,
   "height": 1080,
   "class": "ImageResourceLevel"
  },
  {
   "url": "media/popup_8C5811A5_9D3C_C1AC_41E2_898EC55DF924_0_1.png",
   "width": 1024,
   "height": 576,
   "class": "ImageResourceLevel"
  },
  {
   "url": "media/popup_8C5811A5_9D3C_C1AC_41E2_898EC55DF924_0_2.png",
   "width": 512,
   "height": 288,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "ImageResource_89B43A06_9D24_426C_41D4_3D3CB9A1C958",
 "class": "ImageResource"
},
{
 "easing": "cubic_in_out",
 "id": "effect_F1E169A7_E679_B2C9_41D5_4DAD56770C71",
 "duration": 1000,
 "class": "FadeInEffect"
},
{
 "levels": [
  {
   "url": "media/popup_3AE55A46_133C_F59A_41A3_E48781F5A841_0_0.jpg",
   "width": 4080,
   "height": 1840,
   "class": "ImageResourceLevel"
  },
  {
   "url": "media/popup_3AE55A46_133C_F59A_41A3_E48781F5A841_0_1.jpg",
   "width": 2048,
   "height": 923,
   "class": "ImageResourceLevel"
  },
  {
   "url": "media/popup_3AE55A46_133C_F59A_41A3_E48781F5A841_0_2.jpg",
   "width": 1024,
   "height": 461,
   "class": "ImageResourceLevel"
  },
  {
   "url": "media/popup_3AE55A46_133C_F59A_41A3_E48781F5A841_0_3.jpg",
   "width": 512,
   "height": 230,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "ImageResource_240C84E7_1505_DE99_41AA_8820474D06E5",
 "class": "ImageResource"
},
{
 "easing": "quad_out",
 "id": "effect_F740A96B_EE47_0089_41D8_D200D694DFA6",
 "duration": 500,
 "class": "FadeInEffect"
},
{
 "headerBackgroundColorDirection": "vertical",
 "id": "window_BCED7CB8_B65D_3544_41E2_3A2144110567",
 "closeButtonPressedBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "titlePaddingLeft": 5,
 "paddingBottom": 0,
 "minHeight": 20,
 "closeButtonBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "shadow": true,
 "headerPaddingLeft": 10,
 "closeButtonPressedIconLineWidth": 5,
 "closeButtonRollOverBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "headerBackgroundOpacity": 0,
 "closeButtonPressedBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "modal": true,
 "titlePaddingBottom": 5,
 "backgroundOpacity": 1,
 "bodyPaddingLeft": 0,
 "bodyPaddingBottom": 0,
 "shadowVerticalLength": 0,
 "verticalAlign": "middle",
 "closeButtonPressedBorderSize": 0,
 "paddingRight": 0,
 "closeButtonRollOverBorderSize": 0,
 "veilOpacity": 0.4,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "bodyPaddingTop": 0,
 "backgroundColor": [],
 "borderSize": 0,
 "veilShowEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeInEffect"
 },
 "closeButtonPaddingTop": 5,
 "closeButtonPressedBackgroundColorDirection": "vertical",
 "shadowSpread": 1,
 "closeButtonPressedBorderColor": "#000000",
 "headerPaddingRight": 0,
 "propagateClick": false,
 "closeButtonRollOverBackgroundColorDirection": "vertical",
 "bodyPaddingRight": 0,
 "bodyBackgroundColorDirection": "vertical",
 "closeButtonPressedIconColor": "#888888",
 "titlePaddingTop": 5,
 "closeButtonRollOverBackgroundOpacity": 0.3,
 "closeButtonIconColor": "#000000",
 "closeButtonPaddingLeft": 5,
 "closeButtonRollOverIconColor": "#666666",
 "scrollBarMargin": 2,
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "scrollBarWidth": 10,
 "closeButtonBorderColor": "#000000",
 "titleFontFamily": "Arial",
 "overflow": "scroll",
 "class": "Window",
 "closeButtonRollOverIconLineWidth": 5,
 "headerVerticalAlign": "middle",
 "backgroundColorDirection": "vertical",
 "layout": "vertical",
 "closeButtonBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "showEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeInEffect"
 },
 "scrollBarOpacity": 0.5,
 "children": [
  "this.viewer_uidB8ABE85B_B665_5DC5_41C3_11AFB37BB933"
 ],
 "shadowColor": "#000000",
 "closeButtonBackgroundColorDirection": "vertical",
 "closeButtonPaddingRight": 5,
 "veilColorRatios": [
  0,
  1
 ],
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "footerHeight": 5,
 "paddingTop": 0,
 "footerBackgroundOpacity": 0,
 "shadowBlurRadius": 6,
 "scrollBarVisible": "rollOver",
 "closeButtonBorderSize": 0,
 "scrollBarColor": "#000000",
 "horizontalAlign": "center",
 "minWidth": 20,
 "veilHideEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeOutEffect"
 },
 "closeButtonBackgroundOpacity": 0.3,
 "paddingLeft": 0,
 "shadowOpacity": 0.5,
 "contentOpaque": false,
 "headerPaddingBottom": 5,
 "closeButtonBorderRadius": 0,
 "hideEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeOutEffect"
 },
 "closeButtonPressedBackgroundOpacity": 0.3,
 "footerBackgroundColorDirection": "vertical",
 "borderRadius": 5,
 "titleFontSize": "1.29vmin",
 "gap": 10,
 "closeButtonIconHeight": 20,
 "titlePaddingRight": 5,
 "headerPaddingTop": 10,
 "backgroundColorRatios": [],
 "shadowHorizontalLength": 3,
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "bodyBackgroundOpacity": 0,
 "closeButtonRollOverBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "closeButtonPaddingBottom": 5,
 "closeButtonRollOverBorderColor": "#000000",
 "closeButtonIconLineWidth": 5,
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "closeButtonIconWidth": 20,
 "data": {
  "name": "Window589"
 }
},
{
 "levels": [
  {
   "url": "media/popup_E7414413_F772_41DA_41E1_304CFF0E193E_0_0.png",
   "width": 1920,
   "height": 1080,
   "class": "ImageResourceLevel"
  },
  {
   "url": "media/popup_E7414413_F772_41DA_41E1_304CFF0E193E_0_1.png",
   "width": 1024,
   "height": 576,
   "class": "ImageResourceLevel"
  },
  {
   "url": "media/popup_E7414413_F772_41DA_41E1_304CFF0E193E_0_2.png",
   "width": 512,
   "height": 288,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "ImageResource_EF210965_F7B3_C27E_41C5_791939355796",
 "class": "ImageResource"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "initialPosition": {
  "yaw": 0,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_DF095ADC_D526_3FAE_41E8_221CDD95ABD4_camera",
 "class": "PanoramaCamera"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "initialPosition": {
  "yaw": 134.23,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_B992BA80_B665_5D43_41D4_1038AEF2D89D",
 "class": "PanoramaCamera"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "initialPosition": {
  "yaw": -161.77,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_A6A9EC27_B665_554C_41C6_FF0837D7EB67",
 "class": "PanoramaCamera"
},
{
 "class": "Video",
 "label": "Kamar Tidur Raja",
 "scaleMode": "fit_inside",
 "width": 2986,
 "loop": false,
 "id": "video_3BF8CD99_1305_6EA9_41A3_97DBAA5790E4",
 "thumbnailUrl": "media/video_3BF8CD99_1305_6EA9_41A3_97DBAA5790E4_t.jpg",
 "height": 1680,
 "video": {
  "width": 2986,
  "mp4Url": "media/video_3BF8CD99_1305_6EA9_41A3_97DBAA5790E4.mp4",
  "height": 1680,
  "class": "VideoResource"
 }
},
{
 "easing": "cubic_in_out",
 "id": "effect_F3F3B931_E649_F3C6_41A0_555BC55AB8F2",
 "duration": 1000,
 "class": "FadeOutEffect"
},
{
 "items": [
  {
   "media": "this.map_65C54D3C_6BC1_BCE6_41C8_91C0EDF11345",
   "player": "this.MapViewerMapPlayer",
   "begin": "this.MapViewerMapPlayer.set('movementMode', 'constrained')",
   "class": "MapPlayListItem"
  }
 ],
 "id": "playList_B8C5982C_B665_5D43_41E5_C2F661F135DD",
 "class": "PlayList"
},
{
 "levels": [
  {
   "url": "media/popup_E7F6F2D2_F752_465B_41EE_91B264CBC794_0_0.png",
   "width": 1920,
   "height": 1080,
   "class": "ImageResourceLevel"
  },
  {
   "url": "media/popup_E7F6F2D2_F752_465B_41EE_91B264CBC794_0_1.png",
   "width": 1024,
   "height": 576,
   "class": "ImageResourceLevel"
  },
  {
   "url": "media/popup_E7F6F2D2_F752_465B_41EE_91B264CBC794_0_2.png",
   "width": 512,
   "height": 288,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "ImageResource_EF36C984_F7B3_C2BE_41D0_27A2E8A08D4B",
 "class": "ImageResource"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "initialPosition": {
  "yaw": -77.66,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_A63CFB6B_B665_53C5_41E0_A3621E0E6EF6",
 "class": "PanoramaCamera"
},
{
 "levels": [
  {
   "url": "media/popup_F88091C3_F752_42BA_41D8_BAE68EEED9DB_0_0.png",
   "width": 1920,
   "height": 1080,
   "class": "ImageResourceLevel"
  },
  {
   "url": "media/popup_F88091C3_F752_42BA_41D8_BAE68EEED9DB_0_1.png",
   "width": 1024,
   "height": 576,
   "class": "ImageResourceLevel"
  },
  {
   "url": "media/popup_F88091C3_F752_42BA_41D8_BAE68EEED9DB_0_2.png",
   "width": 512,
   "height": 288,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "ImageResource_EF13294F_F7B3_C24A_41EA_538B19750254",
 "class": "ImageResource"
},
{
 "headerBackgroundColorDirection": "vertical",
 "id": "window_BCEDFCBD_B65D_36BC_41C3_2710CB1A3E36",
 "closeButtonPressedBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "titlePaddingLeft": 5,
 "paddingBottom": 0,
 "minHeight": 20,
 "closeButtonBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "shadow": true,
 "headerPaddingLeft": 10,
 "closeButtonPressedIconLineWidth": 5,
 "closeButtonRollOverBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "headerBackgroundOpacity": 0,
 "closeButtonPressedBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "modal": true,
 "titlePaddingBottom": 5,
 "backgroundOpacity": 1,
 "bodyPaddingLeft": 0,
 "bodyPaddingBottom": 0,
 "shadowVerticalLength": 0,
 "verticalAlign": "middle",
 "closeButtonPressedBorderSize": 0,
 "paddingRight": 0,
 "closeButtonRollOverBorderSize": 0,
 "veilOpacity": 0.4,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "bodyPaddingTop": 0,
 "backgroundColor": [],
 "borderSize": 0,
 "veilShowEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeInEffect"
 },
 "closeButtonPaddingTop": 5,
 "closeButtonPressedBackgroundColorDirection": "vertical",
 "shadowSpread": 1,
 "closeButtonPressedBorderColor": "#000000",
 "headerPaddingRight": 0,
 "propagateClick": false,
 "closeButtonRollOverBackgroundColorDirection": "vertical",
 "bodyPaddingRight": 0,
 "bodyBackgroundColorDirection": "vertical",
 "closeButtonPressedIconColor": "#888888",
 "titlePaddingTop": 5,
 "closeButtonRollOverBackgroundOpacity": 0.3,
 "closeButtonIconColor": "#000000",
 "closeButtonPaddingLeft": 5,
 "closeButtonRollOverIconColor": "#666666",
 "scrollBarMargin": 2,
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "scrollBarWidth": 10,
 "closeButtonBorderColor": "#000000",
 "titleFontFamily": "Arial",
 "overflow": "scroll",
 "class": "Window",
 "closeButtonRollOverIconLineWidth": 5,
 "headerVerticalAlign": "middle",
 "backgroundColorDirection": "vertical",
 "layout": "vertical",
 "closeButtonBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "showEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeInEffect"
 },
 "scrollBarOpacity": 0.5,
 "children": [
  "this.viewer_uidB8BF886A_B665_5DC4_41B4_7ED8AF79C052"
 ],
 "shadowColor": "#000000",
 "closeButtonBackgroundColorDirection": "vertical",
 "closeButtonPaddingRight": 5,
 "veilColorRatios": [
  0,
  1
 ],
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "footerHeight": 5,
 "paddingTop": 0,
 "footerBackgroundOpacity": 0,
 "shadowBlurRadius": 6,
 "scrollBarVisible": "rollOver",
 "closeButtonBorderSize": 0,
 "scrollBarColor": "#000000",
 "horizontalAlign": "center",
 "minWidth": 20,
 "veilHideEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeOutEffect"
 },
 "closeButtonBackgroundOpacity": 0.3,
 "paddingLeft": 0,
 "shadowOpacity": 0.5,
 "contentOpaque": false,
 "headerPaddingBottom": 5,
 "closeButtonBorderRadius": 0,
 "hideEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeOutEffect"
 },
 "closeButtonPressedBackgroundOpacity": 0.3,
 "footerBackgroundColorDirection": "vertical",
 "borderRadius": 5,
 "titleFontSize": "1.29vmin",
 "gap": 10,
 "closeButtonIconHeight": 20,
 "titlePaddingRight": 5,
 "headerPaddingTop": 10,
 "backgroundColorRatios": [],
 "shadowHorizontalLength": 3,
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "bodyBackgroundOpacity": 0,
 "closeButtonRollOverBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "closeButtonPaddingBottom": 5,
 "closeButtonRollOverBorderColor": "#000000",
 "closeButtonIconLineWidth": 5,
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "closeButtonIconWidth": 20,
 "data": {
  "name": "Window592"
 }
},
{
 "rotationY": 0,
 "hfov": 13.14,
 "popupMaxHeight": "95%",
 "rotationX": 0,
 "rotationZ": 0,
 "popupMaxWidth": "95%",
 "id": "popup_34360BE0_1305_2A97_41AD_952DA148E558",
 "hideEasing": "cubic_out",
 "image": {
  "levels": [
   {
    "url": "media/popup_34360BE0_1305_2A97_41AD_952DA148E558_0_2.jpg",
    "width": 1024,
    "height": 461,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "pitch": 16.23,
 "popupDistance": 100,
 "showDuration": 500,
 "hideDuration": 500,
 "showEasing": "cubic_in",
 "yaw": -1.83,
 "class": "PopupPanoramaOverlay"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "initialPosition": {
  "yaw": 96.5,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_B9BE0F86_B665_534C_41E4_DA27CD3F4667",
 "class": "PanoramaCamera"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "initialPosition": {
  "yaw": -6.36,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_B97FDDCF_B665_56DC_41C1_134167A474A1",
 "class": "PanoramaCamera"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "initialPosition": {
  "yaw": 90,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_B9D97F38_B665_5344_41D9_E8144FC54594",
 "class": "PanoramaCamera"
},
{
 "rotationY": 0,
 "hfov": 10.13,
 "popupMaxHeight": "60%",
 "rotationX": 0,
 "rotationZ": 0,
 "popupMaxWidth": "60%",
 "id": "popup_054E3524_1447_9676_4193_7B76CE2567A8",
 "hideEasing": "cubic_out",
 "image": {
  "levels": [
   {
    "url": "media/popup_054E3524_1447_9676_4193_7B76CE2567A8_0_1.png",
    "width": 1024,
    "height": 576,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "pitch": 3.54,
 "popupDistance": 100,
 "showDuration": 500,
 "hideDuration": 500,
 "showEasing": "cubic_in",
 "yaw": 143.04,
 "class": "PopupPanoramaOverlay"
},
{
 "levels": [
  {
   "url": "media/popup_E76B42A0_F771_C6F6_41D0_13870F845D3B_0_0.png",
   "width": 1920,
   "height": 1080,
   "class": "ImageResourceLevel"
  },
  {
   "url": "media/popup_E76B42A0_F771_C6F6_41D0_13870F845D3B_0_1.png",
   "width": 1024,
   "height": 576,
   "class": "ImageResourceLevel"
  },
  {
   "url": "media/popup_E76B42A0_F771_C6F6_41D0_13870F845D3B_0_2.png",
   "width": 512,
   "height": 288,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "ImageResource_EF350984_F7B3_C2BE_41CA_7F3A86999B57",
 "class": "ImageResource"
},
{
 "levels": [
  {
   "url": "media/popup_E3B5E2B3_F75F_C6DA_41D7_B0A755BAF85C_0_0.png",
   "width": 1920,
   "height": 1080,
   "class": "ImageResourceLevel"
  },
  {
   "url": "media/popup_E3B5E2B3_F75F_C6DA_41D7_B0A755BAF85C_0_1.png",
   "width": 1024,
   "height": 576,
   "class": "ImageResourceLevel"
  },
  {
   "url": "media/popup_E3B5E2B3_F75F_C6DA_41D7_B0A755BAF85C_0_2.png",
   "width": 512,
   "height": 288,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "ImageResource_E401758F_F75E_42C9_41ED_6AFA716DAFB0",
 "class": "ImageResource"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "initialPosition": {
  "yaw": -73.78,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_B9C00F09_B665_5344_41E3_D4DA911ABFD7",
 "class": "PanoramaCamera"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "initialPosition": {
  "yaw": 0,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_DF09300A_D522_2AAB_41C0_2217A91877F7_camera",
 "class": "PanoramaCamera"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "initialPosition": {
  "yaw": -177.85,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_A6FADBD9_B665_52C5_41DC_28AAD08D3390",
 "class": "PanoramaCamera"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "initialPosition": {
  "yaw": -28.96,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_B89A2D81_B665_5745_41DF_A03E0C516C4F",
 "class": "PanoramaCamera"
},
{
 "thumbnailUrl": "media/panorama_DF0AF60D_D522_76A9_41E3_6D08C1C16B94_t.jpg",
 "overlays": [
  "this.overlay_C4AFE296_D562_2FBA_41E7_D91CB5600C2D",
  "this.overlay_D1F3623C_DF57_B107_41EB_C73075308A69",
  "this.overlay_D0DD0385_DF51_D701_41D0_4FAA1FB5E77A",
  "this.overlay_0AC1A563_1B3B_549F_41AD_A088D4968249",
  "this.overlay_E3B942E3_ED43_7BDD_41CB_58339C3D8549",
  "this.popup_F9264665_F693_7FCB_41D9_56AC90E2B230",
  "this.overlay_8DEF30F8_9D24_FFA4_41DE_E57BEF6C6E43",
  "this.overlay_8C6B8F55_9D24_42EF_41C4_D3312A21D664",
  "this.overlay_8C1B4D60_9D24_46A5_41D2_581F0D6C5068",
  "this.popup_8C3C6B67_9D25_C2AB_41D2_95FE5CEA254B",
  "this.popup_8C35679B_9D3C_419B_41E2_840DF311F1F2",
  "this.popup_8C0559AC_9D24_C1BC_41D8_C2A80CF1634E"
 ],
 "adjacentPanoramas": [
  {
   "backwardYaw": -151.85,
   "yaw": 89.69,
   "panorama": "this.panorama_DF0AD51E_D522_6AAB_41E0_02491679C908",
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "backwardYaw": -76.79,
   "yaw": 175.19,
   "panorama": "this.panorama_DF0968AD_D521_DBEE_41E8_53FAFFC84B8C",
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "backwardYaw": -172,
   "yaw": -2.84,
   "panorama": "this.panorama_DF0AA7F2_D522_357A_41E7_BB88309A039D",
   "distance": 1,
   "class": "AdjacentPanorama"
  }
 ],
 "label": "Halaman Maskerdam",
 "id": "panorama_DF0AF60D_D522_76A9_41E3_6D08C1C16B94",
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_DF0AF60D_D522_76A9_41E3_6D08C1C16B94_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_DF0AF60D_D522_76A9_41E3_6D08C1C16B94_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_DF0AF60D_D522_76A9_41E3_6D08C1C16B94_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_DF0AF60D_D522_76A9_41E3_6D08C1C16B94_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_DF0AF60D_D522_76A9_41E3_6D08C1C16B94_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_DF0AF60D_D522_76A9_41E3_6D08C1C16B94_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_DF0AF60D_D522_76A9_41E3_6D08C1C16B94_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_DF0AF60D_D522_76A9_41E3_6D08C1C16B94_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_DF0AF60D_D522_76A9_41E3_6D08C1C16B94_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_DF0AF60D_D522_76A9_41E3_6D08C1C16B94_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_DF0AF60D_D522_76A9_41E3_6D08C1C16B94_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_DF0AF60D_D522_76A9_41E3_6D08C1C16B94_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_DF0AF60D_D522_76A9_41E3_6D08C1C16B94_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_DF0AF60D_D522_76A9_41E3_6D08C1C16B94_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_DF0AF60D_D522_76A9_41E3_6D08C1C16B94_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_DF0AF60D_D522_76A9_41E3_6D08C1C16B94_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_DF0AF60D_D522_76A9_41E3_6D08C1C16B94_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_DF0AF60D_D522_76A9_41E3_6D08C1C16B94_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_DF0AF60D_D522_76A9_41E3_6D08C1C16B94_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 180,
 "hfovMin": "150%",
 "pitch": 0,
 "hfov": 360,
 "hfovMax": 130,
 "partial": false,
 "class": "Panorama"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "initialPosition": {
  "yaw": -2.79,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_B91E0EBE_B665_52BC_41E5_7C470972E5EC",
 "class": "PanoramaCamera"
},
{
 "thumbnailUrl": "media/panorama_DF0BFC23_D522_7A9A_41E2_705D7646CD69_t.jpg",
 "overlays": [
  "this.overlay_C3236023_D53E_6A9A_41E5_05B5A857D095",
  "this.overlay_C31A0A31_D53F_FEF6_41E3_E2F93B36C211",
  "this.overlay_C30E796C_D53E_3D6E_41B7_CB427261BC1E",
  "this.overlay_C4358F62_D708_1F2A_41DB_6A4F6C88DCFF",
  "this.overlay_090B1E2E_1B38_D4E9_4192_EAA54F6398FC",
  "this.overlay_FD1A724C_ED42_9AEB_41B3_E8C9D4242838",
  "this.overlay_E2B3580E_ED41_7667_41E9_3D28C3BCF58C",
  "this.overlay_FDA4F35C_ED41_9AEB_41E8_579189E18D76",
  "this.overlay_E2171D85_ED46_8E65_41B8_509CB5213645",
  "this.popup_E7465D83_F756_C2BA_41DA_9684D5EE86E5",
  "this.popup_E7346AA2_F756_46FA_41E5_AF929DF86AE9",
  "this.popup_E73E8690_F751_CED6_41EE_0116A96F93E8",
  "this.popup_E7D8F6BE_F752_4ECA_41BA_984FC4152B31"
 ],
 "adjacentPanoramas": [
  {
   "backwardYaw": -168.29,
   "yaw": 29.2,
   "panorama": "this.panorama_DF08C6FA_D523_D76A_41D5_7F86EC1FD1C3",
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "backwardYaw": 11.84,
   "yaw": -151.15,
   "panorama": "this.panorama_DF0BAF14_D522_36BE_4182_2D68BF6843DE",
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "backwardYaw": -158.07,
   "yaw": -75.14,
   "panorama": "this.panorama_DF0B7A68_D522_5E96_41E4_2FA8606D5645",
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "backwardYaw": -165.44,
   "yaw": 131.75,
   "panorama": "this.panorama_DF0B18B0_D522_3BF6_41E7_E97BDC8D73D5",
   "distance": 1,
   "class": "AdjacentPanorama"
  }
 ],
 "label": "Menuju Lorong Galeri",
 "id": "panorama_DF0BFC23_D522_7A9A_41E2_705D7646CD69",
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_DF0BFC23_D522_7A9A_41E2_705D7646CD69_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_DF0BFC23_D522_7A9A_41E2_705D7646CD69_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_DF0BFC23_D522_7A9A_41E2_705D7646CD69_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_DF0BFC23_D522_7A9A_41E2_705D7646CD69_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_DF0BFC23_D522_7A9A_41E2_705D7646CD69_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_DF0BFC23_D522_7A9A_41E2_705D7646CD69_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_DF0BFC23_D522_7A9A_41E2_705D7646CD69_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_DF0BFC23_D522_7A9A_41E2_705D7646CD69_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_DF0BFC23_D522_7A9A_41E2_705D7646CD69_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_DF0BFC23_D522_7A9A_41E2_705D7646CD69_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_DF0BFC23_D522_7A9A_41E2_705D7646CD69_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_DF0BFC23_D522_7A9A_41E2_705D7646CD69_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_DF0BFC23_D522_7A9A_41E2_705D7646CD69_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_DF0BFC23_D522_7A9A_41E2_705D7646CD69_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_DF0BFC23_D522_7A9A_41E2_705D7646CD69_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_DF0BFC23_D522_7A9A_41E2_705D7646CD69_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_DF0BFC23_D522_7A9A_41E2_705D7646CD69_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_DF0BFC23_D522_7A9A_41E2_705D7646CD69_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_DF0BFC23_D522_7A9A_41E2_705D7646CD69_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 180,
 "hfovMin": "150%",
 "pitch": 0,
 "hfov": 360,
 "hfovMax": 130,
 "partial": false,
 "class": "Panorama"
},
{
 "thumbnailUrl": "media/panorama_DF08C6FA_D523_D76A_41D5_7F86EC1FD1C3_t.jpg",
 "overlays": [
  "this.overlay_CD785272_D522_6F7A_41E2_2010DFC6AF65",
  "this.overlay_CD71AE37_D523_D6FA_41E0_213B048E111B",
  "this.overlay_C5466D29_D718_0326_41EA_A3FA0A3341EE",
  "this.overlay_0AE8237F_1B38_F368_41A6_C2A9539B8B8D",
  "this.overlay_E2E1975D_ED42_9AE5_41A0_52C5430CF2AA",
  "this.overlay_E24585AD_ED42_B9A5_41D8_8F18705922E1",
  "this.popup_F838D999_F751_C2D6_41D7_DF61A641B54F",
  "this.popup_E3DF0A58_F772_4656_41E7_27E5A17BEC97"
 ],
 "adjacentPanoramas": [
  {
   "backwardYaw": 156.83,
   "yaw": 101.07,
   "panorama": "this.panorama_DF09427F_D522_2F69_41E4_B7F711B0C20C",
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "backwardYaw": 151.04,
   "yaw": -80.02,
   "panorama": "this.panorama_DF08F593_D523_F5BA_41E5_3AAEBE3AF892",
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "backwardYaw": 29.2,
   "yaw": -168.29,
   "panorama": "this.panorama_DF0BFC23_D522_7A9A_41E2_705D7646CD69",
   "distance": 1,
   "class": "AdjacentPanorama"
  }
 ],
 "label": "Depan Lorong Galery",
 "id": "panorama_DF08C6FA_D523_D76A_41D5_7F86EC1FD1C3",
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_DF08C6FA_D523_D76A_41D5_7F86EC1FD1C3_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_DF08C6FA_D523_D76A_41D5_7F86EC1FD1C3_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_DF08C6FA_D523_D76A_41D5_7F86EC1FD1C3_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_DF08C6FA_D523_D76A_41D5_7F86EC1FD1C3_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_DF08C6FA_D523_D76A_41D5_7F86EC1FD1C3_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_DF08C6FA_D523_D76A_41D5_7F86EC1FD1C3_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_DF08C6FA_D523_D76A_41D5_7F86EC1FD1C3_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_DF08C6FA_D523_D76A_41D5_7F86EC1FD1C3_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_DF08C6FA_D523_D76A_41D5_7F86EC1FD1C3_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_DF08C6FA_D523_D76A_41D5_7F86EC1FD1C3_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_DF08C6FA_D523_D76A_41D5_7F86EC1FD1C3_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_DF08C6FA_D523_D76A_41D5_7F86EC1FD1C3_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_DF08C6FA_D523_D76A_41D5_7F86EC1FD1C3_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_DF08C6FA_D523_D76A_41D5_7F86EC1FD1C3_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_DF08C6FA_D523_D76A_41D5_7F86EC1FD1C3_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_DF08C6FA_D523_D76A_41D5_7F86EC1FD1C3_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_DF08C6FA_D523_D76A_41D5_7F86EC1FD1C3_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_DF08C6FA_D523_D76A_41D5_7F86EC1FD1C3_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_DF08C6FA_D523_D76A_41D5_7F86EC1FD1C3_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 180,
 "hfovMin": "150%",
 "pitch": 0,
 "hfov": 360,
 "hfovMax": 130,
 "partial": false,
 "class": "Panorama"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "initialPosition": {
  "yaw": 28.15,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_A6407AFD_B665_52BC_41D4_C6A6081BB319",
 "class": "PanoramaCamera"
},
{
 "thumbnailUrl": "media/panorama_DF0BAF14_D522_36BE_4182_2D68BF6843DE_t.jpg",
 "overlays": [
  "this.overlay_C349D42E_D708_013A_41B2_F1067B330D99",
  "this.overlay_C3484220_D708_0126_41BB_D0B8139C35E9",
  "this.overlay_C38E8C45_D708_016E_418B_751971D7B94B",
  "this.overlay_F6A8D851_E7EB_3396_41D4_D2BA1B60A166",
  "this.overlay_37A0EF2D_1307_6BEE_41A0_4B0AFE449AB9",
  "this.popup_37C2403B_1304_D5E9_41A5_779C1CB8FA68",
  "this.overlay_0A898849_1B3F_5CAB_41AD_E111C87C28A7",
  "this.overlay_E2992878_ED4E_96AB_41E1_8E037CACEB26",
  "this.overlay_E2C698E4_ED41_97DB_41C7_BA394984A981",
  "this.overlay_E27D53DE_ED43_B9E7_41E0_97D320384503",
  "this.popup_E74BE74A_F752_4E4A_41BD_AC488F852AFC",
  "this.popup_E7DAE6CC_F752_4E4E_41ED_B0F8AB9C6C25",
  "this.popup_E73D8009_F751_C1B6_41D1_F545AA7B4716"
 ],
 "adjacentPanoramas": [
  {
   "backwardYaw": -54.05,
   "yaw": -166.06,
   "panorama": "this.panorama_DF0B7220_D522_EE96_41E0_735AC8175FE5",
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "backwardYaw": 70.96,
   "yaw": -83.5,
   "panorama": "this.panorama_DF0B714D_D522_EAAE_41DB_DAFE02AA8C1C",
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "backwardYaw": 70.96,
   "yaw": -83.5,
   "panorama": "this.panorama_DF0B714D_D522_EAAE_41DB_DAFE02AA8C1C",
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "backwardYaw": -151.15,
   "yaw": 11.84,
   "panorama": "this.panorama_DF0BFC23_D522_7A9A_41E2_705D7646CD69",
   "distance": 1,
   "class": "AdjacentPanorama"
  }
 ],
 "label": "Ruang Diskusi Raja",
 "id": "panorama_DF0BAF14_D522_36BE_4182_2D68BF6843DE",
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_DF0BAF14_D522_36BE_4182_2D68BF6843DE_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_DF0BAF14_D522_36BE_4182_2D68BF6843DE_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_DF0BAF14_D522_36BE_4182_2D68BF6843DE_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_DF0BAF14_D522_36BE_4182_2D68BF6843DE_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_DF0BAF14_D522_36BE_4182_2D68BF6843DE_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_DF0BAF14_D522_36BE_4182_2D68BF6843DE_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_DF0BAF14_D522_36BE_4182_2D68BF6843DE_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_DF0BAF14_D522_36BE_4182_2D68BF6843DE_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_DF0BAF14_D522_36BE_4182_2D68BF6843DE_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_DF0BAF14_D522_36BE_4182_2D68BF6843DE_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_DF0BAF14_D522_36BE_4182_2D68BF6843DE_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_DF0BAF14_D522_36BE_4182_2D68BF6843DE_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_DF0BAF14_D522_36BE_4182_2D68BF6843DE_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_DF0BAF14_D522_36BE_4182_2D68BF6843DE_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_DF0BAF14_D522_36BE_4182_2D68BF6843DE_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_DF0BAF14_D522_36BE_4182_2D68BF6843DE_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_DF0BAF14_D522_36BE_4182_2D68BF6843DE_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_DF0BAF14_D522_36BE_4182_2D68BF6843DE_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_DF0BAF14_D522_36BE_4182_2D68BF6843DE_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 180,
 "hfovMin": "150%",
 "pitch": 0,
 "hfov": 360,
 "hfovMax": 130,
 "partial": false,
 "class": "Panorama"
},
{
 "levels": [
  {
   "url": "media/popup_F88BAF52_F753_DE5A_41EB_9180A476FA94_0_0.png",
   "width": 1920,
   "height": 1080,
   "class": "ImageResourceLevel"
  },
  {
   "url": "media/popup_F88BAF52_F753_DE5A_41EB_9180A476FA94_0_1.png",
   "width": 1024,
   "height": 576,
   "class": "ImageResourceLevel"
  },
  {
   "url": "media/popup_F88BAF52_F753_DE5A_41EB_9180A476FA94_0_2.png",
   "width": 512,
   "height": 288,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "ImageResource_EF799916_F7B3_C3DA_41E9_1BEC9074CC27",
 "class": "ImageResource"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 11.46,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "id": "camera_B9A4BF58_B665_53C3_41D1_16B0DD0A4F24",
 "class": "PanoramaCamera"
},
{
 "rotationY": 0,
 "hfov": 10.15,
 "popupMaxHeight": "60%",
 "rotationX": 0,
 "rotationZ": 0,
 "popupMaxWidth": "60%",
 "id": "popup_F8B56BF6_F752_C65A_41C1_F432514F4542",
 "hideEasing": "cubic_out",
 "image": {
  "levels": [
   {
    "url": "media/popup_F8B56BF6_F752_C65A_41C1_F432514F4542_0_1.png",
    "width": 1024,
    "height": 576,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "pitch": 0,
 "popupDistance": 100,
 "showDuration": 500,
 "hideDuration": 500,
 "showEasing": "cubic_in",
 "yaw": 86.31,
 "class": "PopupPanoramaOverlay"
},
{
 "thumbnailUrl": "media/panorama_DF091129_D522_6A96_41CB_A7A82D7D5CF4_t.jpg",
 "overlays": [
  "this.overlay_CC411BB5_D718_072E_41EA_868C73A94E4E",
  "this.overlay_CDFCA146_D708_036A_41A6_E29EDDA81158",
  "this.overlay_08DC4B82_1B39_D398_41A0_764BFF30472F"
 ],
 "adjacentPanoramas": [
  {
   "backwardYaw": 50.07,
   "yaw": 139.66,
   "panorama": "this.panorama_DF0968AD_D521_DBEE_41E8_53FAFFC84B8C",
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "backwardYaw": 177.83,
   "yaw": -2.47,
   "panorama": "this.panorama_DF09605E_D522_6AAA_41E6_B94D5A810C57",
   "distance": 1,
   "class": "AdjacentPanorama"
  }
 ],
 "label": "menuju Bale telaga",
 "id": "panorama_DF091129_D522_6A96_41CB_A7A82D7D5CF4",
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_DF091129_D522_6A96_41CB_A7A82D7D5CF4_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_DF091129_D522_6A96_41CB_A7A82D7D5CF4_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_DF091129_D522_6A96_41CB_A7A82D7D5CF4_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_DF091129_D522_6A96_41CB_A7A82D7D5CF4_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_DF091129_D522_6A96_41CB_A7A82D7D5CF4_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_DF091129_D522_6A96_41CB_A7A82D7D5CF4_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_DF091129_D522_6A96_41CB_A7A82D7D5CF4_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_DF091129_D522_6A96_41CB_A7A82D7D5CF4_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_DF091129_D522_6A96_41CB_A7A82D7D5CF4_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_DF091129_D522_6A96_41CB_A7A82D7D5CF4_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_DF091129_D522_6A96_41CB_A7A82D7D5CF4_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_DF091129_D522_6A96_41CB_A7A82D7D5CF4_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_DF091129_D522_6A96_41CB_A7A82D7D5CF4_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_DF091129_D522_6A96_41CB_A7A82D7D5CF4_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_DF091129_D522_6A96_41CB_A7A82D7D5CF4_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_DF091129_D522_6A96_41CB_A7A82D7D5CF4_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_DF091129_D522_6A96_41CB_A7A82D7D5CF4_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_DF091129_D522_6A96_41CB_A7A82D7D5CF4_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_DF091129_D522_6A96_41CB_A7A82D7D5CF4_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 180,
 "hfovMin": "150%",
 "pitch": 0,
 "hfov": 360,
 "hfovMax": 130,
 "partial": false,
 "class": "Panorama"
},
{
 "rotationY": 0,
 "hfov": 16.61,
 "popupMaxHeight": "60%",
 "rotationX": 0,
 "rotationZ": 0,
 "popupMaxWidth": "60%",
 "id": "popup_F8B6911A_F752_43CA_41D4_DAED5D716626",
 "hideEasing": "cubic_out",
 "image": {
  "levels": [
   {
    "url": "media/popup_F8B6911A_F752_43CA_41D4_DAED5D716626_0_1.png",
    "width": 1024,
    "height": 576,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "pitch": -14.21,
 "popupDistance": 100,
 "showDuration": 500,
 "hideDuration": 500,
 "showEasing": "cubic_in",
 "yaw": 25.56,
 "class": "PopupPanoramaOverlay"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "initialPosition": {
  "yaw": -40.34,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_A6C87BF8_B665_52C4_41C6_7B3280E9879F",
 "class": "PanoramaCamera"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "initialPosition": {
  "yaw": 0,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_DF62FED0_D522_37B6_41C2_93651E251542_camera",
 "class": "PanoramaCamera"
},
{
 "easing": "cubic_in_out",
 "id": "effect_F27B0280_EECB_0077_41EB_C02CAC477723",
 "duration": 1000,
 "class": "FadeOutEffect"
},
{
 "levels": [
  {
   "url": "media/popup_E5884951_F752_4256_41DF_CFD2D4F43DF8_0_0.png",
   "width": 1920,
   "height": 1080,
   "class": "ImageResourceLevel"
  },
  {
   "url": "media/popup_E5884951_F752_4256_41DF_CFD2D4F43DF8_0_1.png",
   "width": 1024,
   "height": 576,
   "class": "ImageResourceLevel"
  },
  {
   "url": "media/popup_E5884951_F752_4256_41DF_CFD2D4F43DF8_0_2.png",
   "width": 512,
   "height": 288,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "ImageResource_EF064926_F7B3_C3FA_41E1_7433167191DF",
 "class": "ImageResource"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "initialPosition": {
  "yaw": 0,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_DF08E4A2_D523_EB9A_41E5_F673F160A0A8_camera",
 "class": "PanoramaCamera"
},
{
 "rotationY": 0,
 "hfov": 2.71,
 "popupMaxHeight": "60%",
 "rotationX": 0,
 "rotationZ": 0,
 "popupMaxWidth": "60%",
 "id": "popup_E7414413_F772_41DA_41E1_304CFF0E193E",
 "hideEasing": "cubic_out",
 "image": {
  "levels": [
   {
    "url": "media/popup_E7414413_F772_41DA_41E1_304CFF0E193E_0_1.png",
    "width": 1024,
    "height": 576,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "pitch": 0.9,
 "popupDistance": 100,
 "showDuration": 500,
 "hideDuration": 500,
 "showEasing": "cubic_in",
 "yaw": -66.14,
 "class": "PopupPanoramaOverlay"
},
{
 "thumbnailUrl": "media/panorama_DF614CA2_D522_FB9A_41E1_A0F7B63CBAED_t.jpg",
 "overlays": [
  "this.overlay_C951637B_D778_071A_41D7_6C08CFA6DD45",
  "this.overlay_F74D953E_D778_031A_41E9_26739EB5B68D",
  "this.overlay_3CDCFDFB_131B_2E6A_41A6_FF25ABDF0DBB",
  "this.popup_3CE67610_131B_3DB6_4185_1A27BD411A2A",
  "this.overlay_0AF02738_1B37_B4E9_41AB_01871C5D5AED",
  "this.overlay_E22FC4CD_ED42_9FE5_41E9_9E97D98C6483",
  "this.overlay_E2C1DDAF_ED43_89A6_41E6_8AFD7B392EFD",
  "this.popup_E7EF8C8D_F776_C2CE_41ED_69746EB5B478",
  "this.popup_E77CC4B2_F752_42DA_41D4_785EAA2AE93E"
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_DF09300A_D522_2AAB_41C0_2217A91877F7",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_DF688AE7_D522_3F9A_41B2_CE1EBAC5DAF0",
   "class": "AdjacentPanorama"
  },
  {
   "backwardYaw": -10.03,
   "yaw": 172.7,
   "panorama": "this.panorama_DF60EDC1_D522_D596_41E5_9A31123BC0B0",
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "backwardYaw": 176.21,
   "yaw": -103.96,
   "panorama": "this.panorama_DF6F0B8F_D522_DDA9_41D6_D0B5D979483D",
   "distance": 1,
   "class": "AdjacentPanorama"
  }
 ],
 "label": "Menuju Bale Publik",
 "id": "panorama_DF614CA2_D522_FB9A_41E1_A0F7B63CBAED",
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_DF614CA2_D522_FB9A_41E1_A0F7B63CBAED_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_DF614CA2_D522_FB9A_41E1_A0F7B63CBAED_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_DF614CA2_D522_FB9A_41E1_A0F7B63CBAED_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_DF614CA2_D522_FB9A_41E1_A0F7B63CBAED_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_DF614CA2_D522_FB9A_41E1_A0F7B63CBAED_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_DF614CA2_D522_FB9A_41E1_A0F7B63CBAED_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_DF614CA2_D522_FB9A_41E1_A0F7B63CBAED_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_DF614CA2_D522_FB9A_41E1_A0F7B63CBAED_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_DF614CA2_D522_FB9A_41E1_A0F7B63CBAED_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_DF614CA2_D522_FB9A_41E1_A0F7B63CBAED_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_DF614CA2_D522_FB9A_41E1_A0F7B63CBAED_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_DF614CA2_D522_FB9A_41E1_A0F7B63CBAED_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_DF614CA2_D522_FB9A_41E1_A0F7B63CBAED_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_DF614CA2_D522_FB9A_41E1_A0F7B63CBAED_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_DF614CA2_D522_FB9A_41E1_A0F7B63CBAED_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_DF614CA2_D522_FB9A_41E1_A0F7B63CBAED_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_DF614CA2_D522_FB9A_41E1_A0F7B63CBAED_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_DF614CA2_D522_FB9A_41E1_A0F7B63CBAED_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_DF614CA2_D522_FB9A_41E1_A0F7B63CBAED_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 180,
 "hfovMin": "150%",
 "pitch": 0,
 "hfov": 360,
 "hfovMax": 130,
 "mapLocations": [
  {
   "map": "this.map_65C54D3C_6BC1_BCE6_41C8_91C0EDF11345",
   "x": 1012.4,
   "angle": 0,
   "y": 282.16,
   "class": "PanoramaMapLocation"
  }
 ],
 "partial": false,
 "class": "Panorama"
},
{
 "levels": [
  {
   "url": "media/popup_0439CC12_1441_9652_41AB_D3FBB769D261_0_0.png",
   "width": 1920,
   "height": 1080,
   "class": "ImageResourceLevel"
  },
  {
   "url": "media/popup_0439CC12_1441_9652_41AB_D3FBB769D261_0_1.png",
   "width": 1024,
   "height": 576,
   "class": "ImageResourceLevel"
  },
  {
   "url": "media/popup_0439CC12_1441_9652_41AB_D3FBB769D261_0_2.png",
   "width": 512,
   "height": 288,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "ImageResource_0439DC12_1441_9652_41AB_676FE76664A0",
 "class": "ImageResource"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "initialPosition": {
  "yaw": 21.93,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_B9D719E2_B665_5EC4_41E0_5647E1C82C9F",
 "class": "PanoramaCamera"
},
{
 "rotationY": 0,
 "hfov": 14.14,
 "popupMaxHeight": "60%",
 "rotationX": 0,
 "rotationZ": 0,
 "popupMaxWidth": "60%",
 "id": "popup_E34E3A17_F771_C1DA_41DD_F740EF28F316",
 "hideEasing": "cubic_out",
 "image": {
  "levels": [
   {
    "url": "media/popup_E34E3A17_F771_C1DA_41DD_F740EF28F316_0_1.png",
    "width": 1024,
    "height": 576,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "pitch": 9.86,
 "popupDistance": 100,
 "showDuration": 500,
 "hideDuration": 500,
 "showEasing": "cubic_in",
 "yaw": 4.22,
 "class": "PopupPanoramaOverlay"
},
{
 "levels": [
  {
   "url": "media/popup_F9561C50_F694_B3C9_41E9_AA168EBE6368_0_0.png",
   "width": 1920,
   "height": 1080,
   "class": "ImageResourceLevel"
  },
  {
   "url": "media/popup_F9561C50_F694_B3C9_41E9_AA168EBE6368_0_1.png",
   "width": 1024,
   "height": 576,
   "class": "ImageResourceLevel"
  },
  {
   "url": "media/popup_F9561C50_F694_B3C9_41E9_AA168EBE6368_0_2.png",
   "width": 512,
   "height": 288,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "ImageResource_F8C655B2_F751_C2DA_41E4_845E0876FA35",
 "class": "ImageResource"
},
{
 "levels": [
  {
   "url": "media/popup_F8F2401C_F75E_41CE_41B7_8A77F3C75537_0_0.png",
   "width": 1920,
   "height": 1080,
   "class": "ImageResourceLevel"
  },
  {
   "url": "media/popup_F8F2401C_F75E_41CE_41B7_8A77F3C75537_0_1.png",
   "width": 1024,
   "height": 576,
   "class": "ImageResourceLevel"
  },
  {
   "url": "media/popup_F8F2401C_F75E_41CE_41B7_8A77F3C75537_0_2.png",
   "width": 512,
   "height": 288,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "ImageResource_EF071926_F7B3_C3FA_41EB_D1B355DF5BC6",
 "class": "ImageResource"
},
{
 "levels": [
  {
   "url": "media/popup_E73E8690_F751_CED6_41EE_0116A96F93E8_0_0.png",
   "width": 1920,
   "height": 1080,
   "class": "ImageResourceLevel"
  },
  {
   "url": "media/popup_E73E8690_F751_CED6_41EE_0116A96F93E8_0_1.png",
   "width": 1024,
   "height": 576,
   "class": "ImageResourceLevel"
  },
  {
   "url": "media/popup_E73E8690_F751_CED6_41EE_0116A96F93E8_0_2.png",
   "width": 512,
   "height": 288,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "ImageResource_EF149945_F7B3_C3BE_41ED_2B154DDDBE00",
 "class": "ImageResource"
},
{
 "id": "MapViewerMapPlayer",
 "viewerArea": "this.MapViewer",
 "movementMode": "constrained",
 "class": "MapPlayer"
},
{
 "rotationY": 0,
 "hfov": 3.88,
 "popupMaxHeight": "60%",
 "rotationX": 0,
 "rotationZ": 0,
 "popupMaxWidth": "60%",
 "id": "popup_E3EBFFF2_F77F_DE5B_41EB_5F32E610EEEE",
 "hideEasing": "cubic_out",
 "image": {
  "levels": [
   {
    "url": "media/popup_E3EBFFF2_F77F_DE5B_41EB_5F32E610EEEE_0_1.png",
    "width": 1024,
    "height": 576,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "pitch": 5.11,
 "popupDistance": 100,
 "showDuration": 500,
 "hideDuration": 500,
 "showEasing": "cubic_in",
 "yaw": 2.56,
 "class": "PopupPanoramaOverlay"
},
{
 "levels": [
  {
   "url": "media/popup_8DB67918_9D24_4E64_41DE_C052AA5B9BA4_0_0.png",
   "width": 1920,
   "height": 1080,
   "class": "ImageResourceLevel"
  },
  {
   "url": "media/popup_8DB67918_9D24_4E64_41DE_C052AA5B9BA4_0_1.png",
   "width": 1024,
   "height": 576,
   "class": "ImageResourceLevel"
  },
  {
   "url": "media/popup_8DB67918_9D24_4E64_41DE_C052AA5B9BA4_0_2.png",
   "width": 512,
   "height": 288,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "ImageResource_89B6EA06_9D24_426C_41CE_3CAB16124F53",
 "class": "ImageResource"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "initialPosition": {
  "yaw": 0,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_DF08C6FA_D523_D76A_41D5_7F86EC1FD1C3_camera",
 "class": "PanoramaCamera"
},
{
 "levels": [
  {
   "url": "media/popup_E7EF8C8D_F776_C2CE_41ED_69746EB5B478_0_0.png",
   "width": 1920,
   "height": 1080,
   "class": "ImageResourceLevel"
  },
  {
   "url": "media/popup_E7EF8C8D_F776_C2CE_41ED_69746EB5B478_0_1.png",
   "width": 1024,
   "height": 576,
   "class": "ImageResourceLevel"
  },
  {
   "url": "media/popup_E7EF8C8D_F776_C2CE_41ED_69746EB5B478_0_2.png",
   "width": 512,
   "height": 288,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "ImageResource_EF28A984_F7B3_C2BE_41C7_9CC96A6969AA",
 "class": "ImageResource"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "initialPosition": {
  "yaw": -48.25,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_B8DA0CB4_B665_554C_41DC_9F4CD4AF603D",
 "class": "PanoramaCamera"
},
{
 "levels": [
  {
   "url": "media/popup_E7655172_F771_C25A_41AA_3B050C71F6D0_0_0.png",
   "width": 1920,
   "height": 1080,
   "class": "ImageResourceLevel"
  },
  {
   "url": "media/popup_E7655172_F771_C25A_41AA_3B050C71F6D0_0_1.png",
   "width": 1024,
   "height": 576,
   "class": "ImageResourceLevel"
  },
  {
   "url": "media/popup_E7655172_F771_C25A_41AA_3B050C71F6D0_0_2.png",
   "width": 512,
   "height": 288,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "ImageResource_EF239965_F7B3_C27E_41D2_9441F57D1827",
 "class": "ImageResource"
},
{
 "rotationY": 0,
 "hfov": 5.39,
 "popupMaxHeight": "60%",
 "rotationX": 0,
 "rotationZ": 0,
 "popupMaxWidth": "60%",
 "id": "popup_E7F49273_F772_465A_41D1_E40E63484A75",
 "hideEasing": "cubic_out",
 "image": {
  "levels": [
   {
    "url": "media/popup_E7F49273_F772_465A_41D1_E40E63484A75_0_1.png",
    "width": 1024,
    "height": 576,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "pitch": 5.1,
 "popupDistance": 100,
 "showDuration": 500,
 "hideDuration": 500,
 "showEasing": "cubic_in",
 "yaw": -165.51,
 "class": "PopupPanoramaOverlay"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "initialPosition": {
  "yaw": -3.79,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_A674AFF4_B665_52CC_41A5_AFDEAC9CB9E3",
 "class": "PanoramaCamera"
},
{
 "easing": "cubic_in_out",
 "id": "effect_F1E319A9_E679_B2D9_41E1_A19C72DCD97A",
 "duration": 1000,
 "class": "FadeOutEffect"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "initialPosition": {
  "yaw": -162.11,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_B8A61CE4_B665_56CC_41E2_871E08B4B75A",
 "class": "PanoramaCamera"
},
{
 "items": [
  {
   "media": "this.video_23846E1D_1304_EDAE_41A7_F9A78FBD6DBF",
   "start": "this.viewer_uidB8BA186A_B665_5DC4_41C2_C250547C7BEBVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.PlayList_B96CA899_B665_5D44_41D3_30BEF27CC551, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.PlayList_B96CA899_B665_5D44_41D3_30BEF27CC551, 0)",
   "begin": "this.fixTogglePlayPauseButton(this.viewer_uidB8BA186A_B665_5DC4_41C2_C250547C7BEBVideoPlayer)",
   "player": "this.viewer_uidB8BA186A_B665_5DC4_41C2_C250547C7BEBVideoPlayer",
   "class": "VideoPlayListItem"
  }
 ],
 "id": "PlayList_B96CA899_B665_5D44_41D3_30BEF27CC551",
 "class": "PlayList"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "initialPosition": {
  "yaw": 0,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_DF0AF41D_D522_2AA9_41EA_37FF14B377FE_camera",
 "class": "PanoramaCamera"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "initialPosition": {
  "yaw": 177.53,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_A60D2B8A_B665_5344_41C5_88FFF6EAC37A",
 "class": "PanoramaCamera"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "initialPosition": {
  "yaw": 148.07,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_B9293E3D_B665_55BC_41DC_1D4B37567BE0",
 "class": "PanoramaCamera"
},
{
 "toolTipShadowBlurRadius": 3,
 "id": "MainViewer",
 "left": 0,
 "toolTipPaddingBottom": 4,
 "toolTipFontSize": "1.73vmax",
 "toolTipTextShadowColor": "#000000",
 "toolTipOpacity": 1,
 "playbackBarBorderSize": 0,
 "minHeight": 50,
 "playbackBarProgressOpacity": 1,
 "playbackBarHeadBorderColor": "#000000",
 "playbackBarBackgroundOpacity": 1,
 "shadow": false,
 "progressLeft": 0,
 "paddingBottom": 0,
 "width": "100%",
 "playbackBarHeadBorderSize": 0,
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarHeadBorderRadius": 0,
 "playbackBarHeadShadowColor": "#000000",
 "toolTipTextShadowBlurRadius": 3,
 "toolTipShadowColor": "#FFFFFF",
 "toolTipFontWeight": "normal",
 "progressRight": 0,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "vrPointerSelectionTime": 2000,
 "progressOpacity": 1,
 "paddingRight": 0,
 "firstTransitionDuration": 0,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "borderSize": 0,
 "progressBottom": 0,
 "progressBackgroundOpacity": 1,
 "toolTipFontStyle": "normal",
 "height": "100%",
 "playbackBarOpacity": 1,
 "toolTipShadowOpacity": 1,
 "toolTipFontFamily": "Arial",
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "vrPointerColor": "#FFFFFF",
 "propagateClick": false,
 "progressHeight": 10,
 "toolTipShadowHorizontalLength": 0,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "toolTipTextShadowOpacity": 0,
 "playbackBarHeadShadowOpacity": 0.7,
 "progressBarOpacity": 1,
 "progressBorderSize": 0,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderRadius": 0,
 "toolTipShadowVerticalLength": 0,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "class": "ViewerArea",
 "toolTipFontColor": "#FFFFFF",
 "progressBackgroundColorRatios": [
  0
 ],
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarLeft": 0,
 "transitionDuration": 500,
 "displayTooltipInTouchScreens": true,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "playbackBarHeadHeight": 15,
 "toolTipBackgroundColor": "transparent",
 "progressBackgroundColorDirection": "vertical",
 "paddingTop": 0,
 "playbackBarBottom": 5,
 "transitionMode": "blending",
 "progressBorderColor": "#000000",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBarBorderColor": "#000000",
 "minWidth": 100,
 "playbackBarHeadOpacity": 1,
 "toolTipBorderSize": 4,
 "toolTipPaddingTop": 4,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipPaddingLeft": 6,
 "toolTipPaddingRight": 6,
 "paddingLeft": 0,
 "toolTipDisplayTime": 600,
 "playbackBarHeight": 10,
 "top": 0,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "borderRadius": 0,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarBackgroundColorDirection": "vertical",
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "playbackBarHeadWidth": 6,
 "playbackBarRight": 0,
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarHeadShadowVerticalLength": 0,
 "toolTipBorderRadius": 3,
 "progressBarBorderSize": 0,
 "playbackBarProgressBorderSize": 0,
 "toolTipBorderColor": "#000000",
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "toolTipShadowSpread": 0,
 "playbackBarBorderRadius": 0,
 "data": {
  "name": "Main Viewer"
 },
 "playbackBarProgressBorderColor": "#000000"
},
{
 "backgroundColorDirection": "vertical",
 "class": "WebFrame",
 "id": "WebFrame_C7ED43D4_DF56_7707_41DD_9E553529204B",
 "left": "0%",
 "paddingBottom": 0,
 "minHeight": 1,
 "shadow": false,
 "paddingTop": 0,
 "width": "78.76%",
 "minWidth": 1,
 "backgroundOpacity": 1,
 "bottom": "3.84%",
 "paddingRight": 0,
 "paddingLeft": 0,
 "backgroundColor": [
  "#FFFFFF"
 ],
 "borderSize": 0,
 "borderRadius": 0,
 "height": "76.861%",
 "propagateClick": false,
 "backgroundColorRatios": [
  0
 ],
 "insetBorder": false,
 "visible": false,
 "data": {
  "name": "WebFrame32483"
 },
 "scrollEnabled": true
},
{
 "class": "Image",
 "id": "Image_F1770450_E7A9_3397_41E4_B5E6CA5920C0",
 "paddingBottom": 0,
 "minHeight": 1,
 "shadow": false,
 "paddingTop": 0,
 "right": "18.83%",
 "width": "59.31%",
 "horizontalAlign": "center",
 "url": "skin/Image_F1770450_E7A9_3397_41E4_B5E6CA5920C0.png",
 "minWidth": 1,
 "maxWidth": 1460,
 "backgroundOpacity": 0,
 "maxHeight": 821,
 "paddingLeft": 0,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "top": "21.24%",
 "borderSize": 0,
 "borderRadius": 0,
 "height": "52.368%",
 "click": "if(!this.Image_F1770450_E7A9_3397_41E4_B5E6CA5920C0.get('visible')){ this.setComponentVisibility(this.Image_F1770450_E7A9_3397_41E4_B5E6CA5920C0, true, 0, null, null, false) } else { this.setComponentVisibility(this.Image_F1770450_E7A9_3397_41E4_B5E6CA5920C0, false, 0, null, null, false) }",
 "propagateClick": false,
 "scaleMode": "fit_inside",
 "visible": false,
 "data": {
  "name": "Image24031"
 }
},
{
 "toolTipShadowBlurRadius": 3,
 "id": "MapViewer",
 "left": "25.72%",
 "toolTipPaddingBottom": 4,
 "toolTipFontSize": "1.73vmax",
 "toolTipTextShadowColor": "#000000",
 "toolTipOpacity": 1,
 "minHeight": 1,
 "playbackBarProgressOpacity": 1,
 "playbackBarHeadBorderColor": "#000000",
 "playbackBarBackgroundOpacity": 1,
 "shadow": false,
 "progressLeft": 0,
 "paddingBottom": 0,
 "right": "21.51%",
 "playbackBarHeadBorderSize": 0,
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBorderSize": 0,
 "playbackBarHeadBorderRadius": 0,
 "playbackBarHeadShadowColor": "#000000",
 "toolTipTextShadowBlurRadius": 3,
 "toolTipShadowColor": "#FFFFFF",
 "toolTipFontWeight": "normal",
 "progressRight": 0,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "progressBarBackgroundColorDirection": "vertical",
 "maxHeight": 1000,
 "progressOpacity": 1,
 "firstTransitionDuration": 0,
 "vrPointerSelectionTime": 2000,
 "playbackBarHeadShadow": true,
 "paddingRight": 0,
 "borderSize": 0,
 "progressBottom": 2,
 "progressBackgroundOpacity": 1,
 "toolTipFontStyle": "normal",
 "playbackBarOpacity": 1,
 "toolTipShadowOpacity": 1,
 "toolTipFontFamily": "Arial",
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "vrPointerColor": "#FFFFFF",
 "propagateClick": false,
 "progressHeight": 10,
 "toolTipShadowHorizontalLength": 0,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "toolTipTextShadowOpacity": 0,
 "playbackBarHeadShadowOpacity": 0.7,
 "progressBarOpacity": 1,
 "progressBorderSize": 0,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderRadius": 0,
 "toolTipShadowVerticalLength": 0,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "class": "ViewerArea",
 "toolTipFontColor": "#FFFFFF",
 "progressBackgroundColorRatios": [
  0
 ],
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarLeft": 0,
 "transitionDuration": 500,
 "displayTooltipInTouchScreens": true,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "playbackBarHeadHeight": 15,
 "toolTipBackgroundColor": "transparent",
 "progressBackgroundColorDirection": "vertical",
 "paddingTop": 0,
 "transitionMode": "blending",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "playbackBarBottom": 0,
 "progressBarBorderColor": "#000000",
 "minWidth": 1,
 "maxWidth": 1000,
 "progressBorderColor": "#000000",
 "toolTipBorderSize": 4,
 "playbackBarHeadOpacity": 1,
 "toolTipPaddingTop": 4,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "bottom": "28.56%",
 "toolTipPaddingLeft": 6,
 "toolTipPaddingRight": 6,
 "paddingLeft": 0,
 "toolTipDisplayTime": 600,
 "playbackBarHeight": 10,
 "top": "20.82%",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "borderRadius": 0,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarBackgroundColorDirection": "vertical",
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "playbackBarHeadWidth": 6,
 "playbackBarRight": 0,
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarHeadShadowVerticalLength": 0,
 "toolTipBorderRadius": 3,
 "click": "this.setMediaBehaviour(this.playList_B8C5982C_B665_5D43_41E5_C2F661F135DD, 0); if(!this.MapViewer.get('visible')){ this.setComponentVisibility(this.MapViewer, true, 0, null, null, false) } else { this.setComponentVisibility(this.MapViewer, false, 0, null, null, false) }",
 "progressBarBorderSize": 0,
 "playbackBarProgressBorderSize": 0,
 "toolTipBorderColor": "#000000",
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "toolTipShadowSpread": 0,
 "visible": false,
 "playbackBarBorderRadius": 0,
 "data": {
  "name": "MapViewer"
 },
 "playbackBarProgressBorderColor": "#000000"
},
{
 "toolTipShadowBlurRadius": 3,
 "class": "Image",
 "toolTipFontColor": "#FFFFFF",
 "id": "Image_03F85B1B_1304_EBA9_4193_E1378CB84B21",
 "toolTipOpacity": 1,
 "toolTipPaddingBottom": 4,
 "toolTipFontSize": "1.73vmax",
 "toolTipTextShadowColor": "#000000",
 "paddingBottom": 0,
 "minHeight": 1,
 "toolTipBackgroundColor": "transparent",
 "shadow": false,
 "paddingTop": 0,
 "right": "0.07%",
 "width": "6.437%",
 "horizontalAlign": "center",
 "url": "skin/Image_03F85B1B_1304_EBA9_4193_E1378CB84B21.png",
 "toolTipTextShadowBlurRadius": 3,
 "minWidth": 1,
 "maxWidth": 1230,
 "toolTipShadowColor": "#FFFFFF",
 "toolTipFontWeight": "normal",
 "toolTipBorderSize": 4,
 "backgroundOpacity": 0,
 "toolTipPaddingRight": 6,
 "maxHeight": 941,
 "toolTipPaddingLeft": 6,
 "toolTipPaddingTop": 4,
 "paddingLeft": 0,
 "toolTipDisplayTime": 600,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "top": "1.75%",
 "borderSize": 0,
 "borderRadius": 0,
 "toolTipFontStyle": "normal",
 "height": "8.904%",
 "toolTip": "TOMBOL MAPS",
 "click": "if(!this.MapViewer.get('visible')){ this.setComponentVisibility(this.MapViewer, true, 0, null, null, false) } else { this.setComponentVisibility(this.MapViewer, false, 0, null, null, false) }",
 "toolTipShadowOpacity": 1,
 "toolTipFontFamily": "Arial",
 "toolTipBorderRadius": 3,
 "propagateClick": false,
 "toolTipShadowHorizontalLength": 0,
 "toolTipTextShadowOpacity": 0,
 "toolTipBorderColor": "#000000",
 "scaleMode": "fit_inside",
 "toolTipShadowSpread": 0,
 "data": {
  "name": "maps"
 },
 "toolTipShadowVerticalLength": 0
},
{
 "class": "Image",
 "id": "Image_071D4C32_130B_6DFA_41A6_E89D1DDE6EF2",
 "left": "2.01%",
 "paddingBottom": 0,
 "minHeight": 1,
 "shadow": false,
 "paddingTop": 0,
 "width": "6.986%",
 "horizontalAlign": "center",
 "url": "skin/Image_071D4C32_130B_6DFA_41A6_E89D1DDE6EF2.png",
 "minWidth": 1,
 "maxWidth": 1096,
 "backgroundOpacity": 0,
 "maxHeight": 1094,
 "paddingLeft": 0,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "top": "1.77%",
 "borderSize": 0,
 "borderRadius": 0,
 "height": "11.556%",
 "propagateClick": false,
 "scaleMode": "fit_inside",
 "data": {
  "name": "Image12912"
 }
},
{
 "toolTipShadowBlurRadius": 3,
 "class": "IconButton",
 "toolTipFontColor": "#FFFFFF",
 "id": "IconButton_F1CD224E_E1A7_3BA2_41C1_057A5177C98C",
 "left": "3.33%",
 "width": 51.8,
 "toolTipFontSize": "1.73vmax",
 "toolTipTextShadowColor": "#000000",
 "toolTipOpacity": 1,
 "paddingBottom": 0,
 "minHeight": 1,
 "toolTipBackgroundColor": "transparent",
 "shadow": false,
 "paddingTop": 0,
 "toolTipPaddingBottom": 4,
 "horizontalAlign": "center",
 "toolTipTextShadowBlurRadius": 3,
 "minWidth": 1,
 "maxWidth": 512,
 "toolTipShadowColor": "#FFFFFF",
 "toolTipFontWeight": "normal",
 "toolTipBorderSize": 4,
 "backgroundOpacity": 0,
 "toolTipPaddingTop": 4,
 "maxHeight": 512,
 "bottom": "3.94%",
 "toolTipPaddingLeft": 6,
 "paddingRight": 0,
 "paddingLeft": 0,
 "toolTipDisplayTime": 600,
 "verticalAlign": "middle",
 "height": 57.82,
 "toolTipPaddingRight": 6,
 "borderSize": 0,
 "borderRadius": 0,
 "mode": "push",
 "toolTipFontStyle": "normal",
 "toolTip": "TOMBOL INFORMASI",
 "click": "if(!this.Image_F1770450_E7A9_3397_41E4_B5E6CA5920C0.get('visible')){ this.setComponentVisibility(this.Image_F1770450_E7A9_3397_41E4_B5E6CA5920C0, true, 0, this.effect_F740A96B_EE47_0089_41D8_D200D694DFA6, 'showEffect', false) } else { this.setComponentVisibility(this.Image_F1770450_E7A9_3397_41E4_B5E6CA5920C0, false, 0, this.effect_F740496B_EE47_0089_41CF_FBFD1A13E87D, 'hideEffect', false) }",
 "toolTipShadowOpacity": 1,
 "toolTipFontFamily": "Arial",
 "toolTipBorderRadius": 3,
 "propagateClick": false,
 "transparencyActive": false,
 "toolTipShadowHorizontalLength": 0,
 "toolTipTextShadowOpacity": 0,
 "toolTipBorderColor": "#000000",
 "toolTipShadowSpread": 0,
 "iconURL": "skin/IconButton_F1CD224E_E1A7_3BA2_41C1_057A5177C98C.png",
 "data": {
  "name": "button informasi"
 },
 "toolTipShadowVerticalLength": 0,
 "cursor": "hand"
},
{
 "fontFamily": "Arial",
 "backgroundColorDirection": "vertical",
 "toolTipShadowBlurRadius": 3,
 "class": "Button",
 "toolTipFontColor": "#FFFFFF",
 "layout": "horizontal",
 "id": "Button_0B741BB5_1872_D04B_41B4_A1CF013C97B0",
 "left": "3.29%",
 "pressedIconWidth": 40,
 "width": 54.65,
 "toolTipFontSize": "1.73vmax",
 "toolTipTextShadowColor": "#000000",
 "toolTipOpacity": 1,
 "paddingBottom": 0,
 "minHeight": 1,
 "toolTipBackgroundColor": "transparent",
 "shadow": false,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "toolTipPaddingBottom": 4,
 "horizontalAlign": "center",
 "paddingTop": 0,
 "pressedRollOverIconHeight": 40,
 "shadowBlurRadius": 6,
 "toolTipTextShadowBlurRadius": 3,
 "minWidth": 1,
 "toolTipShadowColor": "#FFFFFF",
 "toolTipFontWeight": "normal",
 "toolTipBorderSize": 4,
 "rollOverIconWidth": 40,
 "backgroundOpacity": 0,
 "toolTipPaddingTop": 4,
 "borderColor": "#000000",
 "rollOverIconHeight": 40,
 "shadowColor": "#000000",
 "bottom": "22.09%",
 "toolTipPaddingLeft": 6,
 "paddingRight": 0,
 "paddingLeft": 0,
 "toolTipDisplayTime": 600,
 "click": "if(this.getGlobalAudio(this.audio_F9A511D2_EDC2_99FE_41DA_819E95EE51BB).get('state') == 'playing') { this.pauseGlobalAudio(this.audio_F9A511D2_EDC2_99FE_41DA_819E95EE51BB); } else { var src = this.playGlobalAudio(this.audio_F9A511D2_EDC2_99FE_41DA_819E95EE51BB); }",
 "verticalAlign": "middle",
 "height": 65.84,
 "toolTipPaddingRight": 6,
 "borderSize": 0,
 "borderRadius": 0,
 "mode": "toggle",
 "toolTipFontStyle": "normal",
 "backgroundColor": [
  "#F7931E"
 ],
 "toolTip": "TOMBOL MUSIK",
 "iconBeforeLabel": true,
 "iconHeight": 65,
 "shadowSpread": 1,
 "toolTipShadowOpacity": 1,
 "toolTipFontFamily": "Arial",
 "fontSize": 12,
 "toolTipBorderRadius": 3,
 "fontStyle": "normal",
 "propagateClick": false,
 "rollOverBackgroundOpacity": 0,
 "toolTipShadowHorizontalLength": 0,
 "backgroundColorRatios": [
  0
 ],
 "toolTipTextShadowOpacity": 0,
 "fontColor": "#FFFFFF",
 "toolTipBorderColor": "#000000",
 "rollOverBackgroundColor": [
  "#CE6700"
 ],
 "toolTipShadowSpread": 0,
 "iconWidth": 40,
 "gap": 5,
 "data": {
  "name": "Button Settings Mute"
 },
 "fontWeight": "normal",
 "pressedIconHeight": 65,
 "textDecoration": "none",
 "iconURL": "skin/Button_0B741BB5_1872_D04B_41B4_A1CF013C97B0.png",
 "cursor": "hand",
 "pressedRollOverIconURL": "skin/Button_0B741BB5_1872_D04B_41B4_A1CF013C97B0_pressed_rollover.png",
 "toolTipShadowVerticalLength": 0,
 "rollOverIconURL": "skin/Button_0B741BB5_1872_D04B_41B4_A1CF013C97B0_rollover.png"
},
{
 "id": "ThumbnailList_012D7D88_1832_505A_41A8_71148FB9AB33",
 "itemPaddingLeft": 3,
 "paddingBottom": 10,
 "minHeight": 1,
 "width": "36.422%",
 "shadow": false,
 "right": "29.16%",
 "itemThumbnailShadowSpread": 1,
 "itemThumbnailWidth": 100,
 "itemPaddingRight": 3,
 "itemLabelPosition": "bottom",
 "itemThumbnailShadow": true,
 "backgroundOpacity": 0.2,
 "itemThumbnailOpacity": 1,
 "itemPaddingTop": 3,
 "verticalAlign": "top",
 "itemBackgroundColor": [],
 "backgroundColor": [
  "#000000"
 ],
 "itemBackgroundColorRatios": [],
 "paddingRight": 20,
 "borderSize": 0,
 "itemOpacity": 1,
 "height": 126.43,
 "itemVerticalAlign": "middle",
 "itemBackgroundOpacity": 0,
 "propagateClick": false,
 "itemLabelTextDecoration": "none",
 "scrollBarMargin": 2,
 "itemThumbnailShadowBlurRadius": 4,
 "itemThumbnailBorderRadius": 5,
 "itemLabelFontWeight": "normal",
 "itemLabelFontSize": 14,
 "scrollBarWidth": 10,
 "itemThumbnailShadowHorizontalLength": 3,
 "class": "ThumbnailList",
 "backgroundColorDirection": "vertical",
 "itemThumbnailScaleMode": "fit_outside",
 "layout": "horizontal",
 "scrollBarOpacity": 0.5,
 "itemLabelFontColor": "#FFFFFF",
 "itemBackgroundColorDirection": "vertical",
 "scrollBarColor": "#FFFFFF",
 "paddingTop": 10,
 "scrollBarVisible": "rollOver",
 "minWidth": 1,
 "horizontalAlign": "left",
 "itemLabelGap": 5,
 "itemThumbnailShadowColor": "#000000",
 "bottom": "3.11%",
 "itemPaddingBottom": 3,
 "paddingLeft": 20,
 "itemThumbnailShadowVerticalLength": 3,
 "selectedItemLabelFontWeight": "bold",
 "itemMode": "normal",
 "itemLabelFontStyle": "normal",
 "itemHorizontalAlign": "center",
 "gap": 10,
 "borderRadius": 5,
 "itemLabelHorizontalAlign": "center",
 "itemThumbnailHeight": 75,
 "itemThumbnailShadowOpacity": 0.8,
 "itemLabelFontFamily": "Arial",
 "backgroundColorRatios": [
  0
 ],
 "playList": "this.ThumbnailList_012D7D88_1832_505A_41A8_71148FB9AB33_playlist",
 "itemBorderRadius": 0,
 "data": {
  "name": "ThumbnailList1355"
 }
},
{
 "toolTipShadowBlurRadius": 3,
 "class": "IconButton",
 "toolTipFontColor": "#FFFFFF",
 "id": "IconButton_A73FE202_A864_7DE3_41C2_FC61D2471417",
 "toolTipOpacity": 1,
 "width": 58.95,
 "toolTipFontSize": "1.73vmax",
 "toolTipTextShadowColor": "#000000",
 "paddingBottom": 0,
 "minHeight": 1,
 "toolTipBackgroundColor": "transparent",
 "shadow": false,
 "paddingTop": 0,
 "right": "1.38%",
 "toolTipPaddingBottom": 4,
 "horizontalAlign": "center",
 "toolTipTextShadowBlurRadius": 3,
 "minWidth": 1,
 "maxWidth": 512,
 "toolTipShadowColor": "#FFFFFF",
 "toolTipFontWeight": "normal",
 "toolTipBorderSize": 4,
 "backgroundOpacity": 0,
 "toolTipPaddingTop": 4,
 "maxHeight": 512,
 "bottom": "2.97%",
 "toolTipPaddingLeft": 6,
 "paddingRight": 0,
 "paddingLeft": 0,
 "toolTipDisplayTime": 600,
 "verticalAlign": "middle",
 "height": 64.95,
 "toolTipPaddingRight": 6,
 "borderSize": 0,
 "borderRadius": 0,
 "mode": "push",
 "toolTipFontStyle": "normal",
 "toolTip": "TOMBOL KEMBALI  KE WEBSITE",
 "click": "this.openLink('http://localhost/puriagung/virtualtour.html', '_top')",
 "toolTipShadowOpacity": 1,
 "toolTipFontFamily": "Arial",
 "toolTipBorderRadius": 3,
 "propagateClick": false,
 "transparencyActive": false,
 "toolTipShadowHorizontalLength": 0,
 "toolTipTextShadowOpacity": 0,
 "toolTipBorderColor": "#000000",
 "toolTipShadowSpread": 0,
 "iconURL": "skin/IconButton_A73FE202_A864_7DE3_41C2_FC61D2471417.png",
 "data": {
  "name": "IconButton6316"
 },
 "toolTipShadowVerticalLength": 0,
 "cursor": "hand"
},
{
 "pressedIconURL": "skin/IconButton_A237F9F3_B2DA_09E0_41C0_6B98723BB9D1_pressed.png",
 "toolTipShadowBlurRadius": 3,
 "class": "IconButton",
 "toolTipFontColor": "#FFFFFF",
 "id": "IconButton_A237F9F3_B2DA_09E0_41C0_6B98723BB9D1",
 "left": "3.23%",
 "width": 55.6,
 "toolTipFontSize": "1.73vmax",
 "toolTipTextShadowColor": "#000000",
 "toolTipOpacity": 1,
 "paddingBottom": 0,
 "minHeight": 0,
 "toolTipBackgroundColor": "transparent",
 "shadow": false,
 "toolTipPaddingBottom": 4,
 "paddingTop": 0,
 "toolTipTextShadowBlurRadius": 3,
 "minWidth": 0,
 "toolTipShadowColor": "#FFFFFF",
 "toolTipFontWeight": "normal",
 "toolTipBorderSize": 4,
 "backgroundOpacity": 0,
 "toolTipPaddingTop": 4,
 "bottom": "14.66%",
 "toolTipPaddingLeft": 6,
 "paddingRight": 0,
 "paddingLeft": 0,
 "toolTipDisplayTime": 600,
 "verticalAlign": "middle",
 "height": 42.09,
 "toolTipPaddingRight": 6,
 "borderSize": 0,
 "borderRadius": 0,
 "mode": "push",
 "toolTipFontStyle": "normal",
 "toolTip": "TOMBOL VIDEO",
 "click": "this.showPopupMedia(this.window_ACAF8AAC_B81D_2109_41C6_1F69ADB14E93, this.video_20934DBA_151B_2EEA_418E_EF3DFDEACB48, this.playList_B8CF782C_B665_5D43_41DE_7D80BF44AC19, '50%', '50%', true, true)",
 "toolTipShadowOpacity": 1,
 "toolTipFontFamily": "Arial",
 "toolTipBorderRadius": 3,
 "propagateClick": false,
 "transparencyActive": false,
 "toolTipShadowHorizontalLength": 0,
 "horizontalAlign": "center",
 "toolTipTextShadowOpacity": 0,
 "toolTipBorderColor": "#000000",
 "toolTipShadowSpread": 0,
 "iconURL": "skin/IconButton_A237F9F3_B2DA_09E0_41C0_6B98723BB9D1.png",
 "data": {
  "name": "Button22091"
 },
 "toolTipShadowVerticalLength": 0,
 "cursor": "hand",
 "pressedRollOverIconURL": "skin/IconButton_A237F9F3_B2DA_09E0_41C0_6B98723BB9D1_pressed_rollover.png"
},
{
 "class": "HTMLText",
 "id": "HTMLText_A2B43EC1_B33A_0A20_41D2_137EEB4C79C7",
 "left": "0.01%",
 "scrollBarOpacity": 0.5,
 "paddingBottom": 10,
 "minHeight": 1,
 "shadow": false,
 "paddingTop": 10,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "minWidth": 1,
 "backgroundOpacity": 0,
 "width": "11.005%",
 "paddingLeft": 10,
 "paddingRight": 10,
 "top": "12.75%",
 "borderSize": 0,
 "borderRadius": 0,
 "height": "10.014%",
 "propagateClick": false,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0vmin;color:#000000;font-family:'Segoe UI';\"><SPAN STYLE=\"color:#eba522;font-size:2.17vmin;font-family:'Poppins SemiBold';\">PURI AGUNG</SPAN><SPAN STYLE=\"font-size:2.17vmin;font-family:'Poppins SemiBold';\"> </SPAN><SPAN STYLE=\"font-size:2.03vmin;font-family:'Poppins SemiBold';\">KARANGASEM</SPAN></SPAN></DIV></div>",
 "scrollBarMargin": 2,
 "data": {
  "name": "HTMLText10196"
 },
 "scrollBarWidth": 10
},
{
 "class": "Image",
 "id": "Image_F21B5780_E6C8_DEC7_41D4_D58CD4D9DCBD",
 "left": "35%",
 "paddingBottom": 0,
 "minHeight": 1,
 "shadow": false,
 "paddingTop": 0,
 "right": "35%",
 "url": "skin/Image_F21B5780_E6C8_DEC7_41D4_D58CD4D9DCBD.png",
 "horizontalAlign": "center",
 "minWidth": 1,
 "maxWidth": 3203,
 "backgroundOpacity": 0,
 "maxHeight": 374,
 "paddingLeft": 0,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "top": "0%",
 "borderSize": 0,
 "borderRadius": 0,
 "height": "12.99%",
 "propagateClick": false,
 "scaleMode": "fit_inside",
 "visible": false,
 "data": {
  "name": "PINTU MASUK"
 }
},
{
 "class": "Image",
 "id": "Image_F3594E3D_E6B7_AE39_41C8_FE19BB12D054",
 "left": "35%",
 "paddingBottom": 0,
 "minHeight": 1,
 "shadow": false,
 "paddingTop": 0,
 "right": "35%",
 "url": "skin/Image_F3594E3D_E6B7_AE39_41C8_FE19BB12D054.png",
 "horizontalAlign": "center",
 "minWidth": 1,
 "maxWidth": 3200,
 "backgroundOpacity": 0,
 "maxHeight": 374,
 "paddingLeft": 0,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "top": "0%",
 "borderSize": 0,
 "borderRadius": 0,
 "height": "12.99%",
 "propagateClick": false,
 "scaleMode": "fit_inside",
 "visible": false,
 "data": {
  "name": "AREA JABE TENGAH"
 }
},
{
 "class": "Image",
 "id": "Image_F23672C6_E649_564A_41EC_CD3F30DA5B23",
 "left": "35%",
 "paddingBottom": 0,
 "minHeight": 1,
 "shadow": false,
 "paddingTop": 0,
 "right": "35%",
 "url": "skin/Image_F23672C6_E649_564A_41EC_CD3F30DA5B23.png",
 "horizontalAlign": "center",
 "minWidth": 1,
 "maxWidth": 3217,
 "backgroundOpacity": 0,
 "maxHeight": 372,
 "paddingLeft": 0,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "top": "0%",
 "borderSize": 0,
 "borderRadius": 0,
 "height": "12.99%",
 "propagateClick": false,
 "scaleMode": "fit_inside",
 "visible": false,
 "data": {
  "name": "AREA PENERIMAAN TAMU"
 }
},
{
 "class": "Image",
 "id": "Image_F208C464_E649_524F_41EC_07C9C78C6A02",
 "left": "35%",
 "paddingBottom": 0,
 "minHeight": 1,
 "shadow": false,
 "paddingTop": 0,
 "right": "35%",
 "url": "skin/Image_F208C464_E649_524F_41EC_07C9C78C6A02.png",
 "horizontalAlign": "center",
 "minWidth": 1,
 "maxWidth": 3215,
 "backgroundOpacity": 0,
 "maxHeight": 373,
 "paddingLeft": 0,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "top": "0%",
 "borderSize": 0,
 "borderRadius": 0,
 "height": "12.99%",
 "propagateClick": false,
 "scaleMode": "fit_inside",
 "visible": false,
 "data": {
  "name": "AREA MASKERDM"
 }
},
{
 "class": "Image",
 "id": "Image_F2638C52_E648_F24B_4198_1B8B11C8C2F2",
 "left": "35%",
 "paddingBottom": 0,
 "minHeight": 1,
 "shadow": false,
 "paddingTop": 0,
 "right": "35%",
 "url": "skin/Image_F2638C52_E648_F24B_4198_1B8B11C8C2F2.png",
 "horizontalAlign": "center",
 "minWidth": 1,
 "maxWidth": 3206,
 "backgroundOpacity": 0,
 "maxHeight": 374,
 "paddingLeft": 0,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "top": "0%",
 "borderSize": 0,
 "borderRadius": 0,
 "height": "12.99%",
 "propagateClick": false,
 "scaleMode": "fit_inside",
 "visible": false,
 "data": {
  "name": "MASKERDAM"
 }
},
{
 "class": "Image",
 "id": "Image_F20AC14B_E64F_D259_41D9_71B15433AB9E",
 "left": "35%",
 "paddingBottom": 0,
 "minHeight": 1,
 "shadow": false,
 "paddingTop": 0,
 "right": "35%",
 "url": "skin/Image_F20AC14B_E64F_D259_41D9_71B15433AB9E.png",
 "horizontalAlign": "center",
 "minWidth": 1,
 "maxWidth": 3212,
 "backgroundOpacity": 0,
 "maxHeight": 373,
 "paddingLeft": 0,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "top": "0%",
 "borderSize": 0,
 "borderRadius": 0,
 "height": "5.873%",
 "propagateClick": false,
 "scaleMode": "fit_inside",
 "visible": false,
 "data": {
  "name": "BALE PAWEDAAN"
 }
},
{
 "class": "Image",
 "id": "Image_F27D68F4_E648_B24E_41E1_900F5FB2363E",
 "left": "35.24%",
 "paddingBottom": 0,
 "minHeight": 1,
 "shadow": false,
 "paddingTop": 0,
 "right": "34.76%",
 "url": "skin/Image_F27D68F4_E648_B24E_41E1_900F5FB2363E.png",
 "horizontalAlign": "center",
 "minWidth": 1,
 "maxWidth": 3209,
 "backgroundOpacity": 0,
 "maxHeight": 373,
 "paddingLeft": 0,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "top": "0%",
 "borderSize": 0,
 "borderRadius": 0,
 "height": "7.821%",
 "propagateClick": false,
 "scaleMode": "fit_inside",
 "visible": false,
 "data": {
  "name": "BALE PAMEDASAN"
 }
},
{
 "class": "Image",
 "id": "Image_F278FEC0_E648_AE46_41A5_F679081499CE",
 "paddingBottom": 0,
 "minHeight": 1,
 "shadow": false,
 "paddingTop": 0,
 "right": "34.6%",
 "width": "29.984%",
 "horizontalAlign": "center",
 "url": "skin/Image_F278FEC0_E648_AE46_41A5_F679081499CE.png",
 "minWidth": 1,
 "maxWidth": 3209,
 "backgroundOpacity": 0,
 "maxHeight": 373,
 "paddingLeft": 0,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "top": "0%",
 "borderSize": 0,
 "borderRadius": 0,
 "height": "6.143%",
 "propagateClick": false,
 "scaleMode": "fit_inside",
 "visible": false,
 "data": {
  "name": "BALE TELAGA"
 }
},
{
 "class": "Image",
 "id": "Image_F2528CB9_E649_5239_41D5_60765A8BAF32",
 "left": "35.16%",
 "paddingBottom": 0,
 "minHeight": 1,
 "shadow": false,
 "paddingTop": 0,
 "right": "34.84%",
 "url": "skin/Image_F2528CB9_E649_5239_41D5_60765A8BAF32.png",
 "horizontalAlign": "center",
 "minWidth": 1,
 "maxWidth": 3215,
 "backgroundOpacity": 0,
 "maxHeight": 373,
 "paddingLeft": 0,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "top": "0%",
 "borderSize": 0,
 "borderRadius": 0,
 "height": "12.99%",
 "propagateClick": false,
 "scaleMode": "fit_inside",
 "visible": false,
 "data": {
  "name": "RUANG MAKAN RAJA"
 }
},
{
 "class": "Image",
 "id": "Image_F24BE2FB_E649_D639_41EC_6C57AFF379C5",
 "left": "34.89%",
 "paddingBottom": 0,
 "minHeight": 1,
 "shadow": false,
 "paddingTop": 0,
 "right": "34.62%",
 "url": "skin/Image_F24BE2FB_E649_D639_41EC_6C57AFF379C5.png",
 "horizontalAlign": "center",
 "minWidth": 1,
 "maxWidth": 3203,
 "backgroundOpacity": 0,
 "maxHeight": 374,
 "paddingLeft": 0,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "top": "0%",
 "borderSize": 0,
 "borderRadius": 0,
 "height": "12.991%",
 "propagateClick": false,
 "scaleMode": "fit_inside",
 "visible": false,
 "data": {
  "name": "RUANG DISKUSI"
 }
},
{
 "class": "Image",
 "id": "Image_F2434354_E649_764F_41BC_C63404D9D8E7",
 "paddingBottom": 0,
 "minHeight": 1,
 "shadow": false,
 "paddingTop": 0,
 "right": "34.6%",
 "width": "30%",
 "horizontalAlign": "center",
 "url": "skin/Image_F2434354_E649_764F_41BC_C63404D9D8E7.png",
 "minWidth": 1,
 "maxWidth": 3217,
 "backgroundOpacity": 0,
 "maxHeight": 372,
 "paddingLeft": 0,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "top": "0%",
 "borderSize": 0,
 "borderRadius": 0,
 "height": "12.99%",
 "propagateClick": false,
 "scaleMode": "fit_inside",
 "visible": false,
 "data": {
  "name": "RUANG PENYIMPANAN"
 }
},
{
 "class": "Image",
 "id": "Image_F27F3E84_E648_EECE_41BB_679F3C0A06B5",
 "paddingBottom": 0,
 "minHeight": 1,
 "shadow": false,
 "paddingTop": 0,
 "right": "34.76%",
 "width": "30%",
 "horizontalAlign": "center",
 "url": "skin/Image_F27F3E84_E648_EECE_41BB_679F3C0A06B5.png",
 "minWidth": 1,
 "maxWidth": 3201,
 "backgroundOpacity": 0,
 "maxHeight": 374,
 "paddingLeft": 0,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "top": "0%",
 "borderSize": 0,
 "borderRadius": 0,
 "height": "12.99%",
 "propagateClick": false,
 "scaleMode": "fit_inside",
 "visible": false,
 "data": {
  "name": "RUANG TIDUR"
 }
},
{
 "class": "Image",
 "id": "Image_F25988F0_E64B_5247_41E0_7C12462F1412",
 "paddingBottom": 0,
 "minHeight": 1,
 "shadow": false,
 "paddingTop": 0,
 "right": "34.84%",
 "width": "30%",
 "horizontalAlign": "center",
 "url": "skin/Image_F25988F0_E64B_5247_41E0_7C12462F1412.png",
 "minWidth": 1,
 "maxWidth": 3210,
 "backgroundOpacity": 0,
 "maxHeight": 373,
 "paddingLeft": 0,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "top": "0%",
 "borderSize": 0,
 "borderRadius": 0,
 "height": "12.99%",
 "propagateClick": false,
 "scaleMode": "fit_inside",
 "visible": false,
 "data": {
  "name": "RUANG GALERI"
 }
},
{
 "class": "Image",
 "id": "Image_F26ED021_E64B_D1C9_41DB_0BC5116D3911",
 "paddingBottom": 0,
 "minHeight": 1,
 "shadow": false,
 "paddingTop": 0,
 "right": "34.76%",
 "width": "30%",
 "horizontalAlign": "center",
 "url": "skin/Image_F26ED021_E64B_D1C9_41DB_0BC5116D3911.png",
 "minWidth": 1,
 "maxWidth": 3212,
 "backgroundOpacity": 0,
 "maxHeight": 373,
 "paddingLeft": 0,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "top": "0%",
 "borderSize": 0,
 "borderRadius": 0,
 "height": "12.99%",
 "propagateClick": false,
 "scaleMode": "fit_inside",
 "visible": false,
 "data": {
  "name": "BALE PUBLIK"
 }
},
{
 "class": "Image",
 "id": "Image_F25F581F_E64B_51F9_41EB_5A451DE584F3",
 "paddingBottom": 0,
 "minHeight": 1,
 "shadow": false,
 "paddingTop": 0,
 "right": "34.84%",
 "width": "30%",
 "horizontalAlign": "center",
 "url": "skin/Image_F25F581F_E64B_51F9_41EB_5A451DE584F3.png",
 "minWidth": 1,
 "maxWidth": 3225,
 "backgroundOpacity": 0,
 "maxHeight": 371,
 "paddingLeft": 0,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "top": "0%",
 "borderSize": 0,
 "borderRadius": 0,
 "height": "12.99%",
 "propagateClick": false,
 "scaleMode": "fit_inside",
 "visible": false,
 "data": {
  "name": "AREA BALE PUBLIK"
 }
},
{
 "class": "Image",
 "id": "Image_F2412C1F_E64B_51F9_41EC_1CBA4E61E617",
 "paddingBottom": 0,
 "minHeight": 1,
 "shadow": false,
 "paddingTop": 0,
 "right": "34.91%",
 "width": "30%",
 "horizontalAlign": "center",
 "url": "skin/Image_F2412C1F_E64B_51F9_41EC_1CBA4E61E617.png",
 "minWidth": 1,
 "maxWidth": 3209,
 "backgroundOpacity": 0,
 "maxHeight": 373,
 "paddingLeft": 0,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "top": "0%",
 "borderSize": 0,
 "borderRadius": 0,
 "height": "12.99%",
 "propagateClick": false,
 "scaleMode": "fit_inside",
 "visible": false,
 "data": {
  "name": "JEMBATAN BALE TELAGA"
 }
},
{
 "backgroundColorDirection": "vertical",
 "class": "UIComponent",
 "id": "veilPopupPanorama",
 "left": 0,
 "showEffect": {
  "easing": "cubic_in_out",
  "duration": 350,
  "class": "FadeInEffect"
 },
 "paddingBottom": 0,
 "minHeight": 0,
 "shadow": false,
 "paddingTop": 0,
 "right": 0,
 "minWidth": 0,
 "backgroundOpacity": 0.55,
 "bottom": 0,
 "paddingRight": 0,
 "paddingLeft": 0,
 "backgroundColor": [
  "#000000"
 ],
 "borderSize": 0,
 "borderRadius": 0,
 "top": 0,
 "propagateClick": false,
 "backgroundColorRatios": [
  0
 ],
 "visible": false,
 "data": {
  "name": "UIComponent2962"
 }
},
{
 "backgroundColorDirection": "vertical",
 "class": "ZoomImage",
 "id": "zoomImagePopupPanorama",
 "left": 0,
 "paddingBottom": 0,
 "minHeight": 0,
 "shadow": false,
 "paddingTop": 0,
 "right": 0,
 "minWidth": 0,
 "backgroundOpacity": 1,
 "bottom": 0,
 "paddingRight": 0,
 "paddingLeft": 0,
 "backgroundColor": [],
 "borderSize": 0,
 "borderRadius": 0,
 "top": 0,
 "propagateClick": false,
 "backgroundColorRatios": [],
 "scaleMode": "custom",
 "visible": false,
 "data": {
  "name": "ZoomImage2963"
 }
},
{
 "fontFamily": "Arial",
 "backgroundColorDirection": "vertical",
 "class": "CloseButton",
 "layout": "horizontal",
 "id": "closeButtonPopupPanorama",
 "showEffect": {
  "easing": "cubic_in_out",
  "duration": 350,
  "class": "FadeInEffect"
 },
 "paddingBottom": 5,
 "minHeight": 0,
 "iconLineWidth": 5,
 "shadow": false,
 "right": 10,
 "shadowBlurRadius": 6,
 "horizontalAlign": "center",
 "paddingTop": 5,
 "iconColor": "#000000",
 "minWidth": 0,
 "rollOverIconColor": "#666666",
 "iconBeforeLabel": true,
 "backgroundOpacity": 0.3,
 "borderColor": "#000000",
 "shadowColor": "#000000",
 "pressedIconColor": "#888888",
 "paddingRight": 5,
 "paddingLeft": 5,
 "verticalAlign": "middle",
 "backgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "borderSize": 0,
 "gap": 5,
 "borderRadius": 0,
 "mode": "push",
 "top": 10,
 "iconHeight": 20,
 "shadowSpread": 1,
 "fontSize": "1.29vmin",
 "label": "",
 "fontStyle": "normal",
 "propagateClick": false,
 "backgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "fontColor": "#FFFFFF",
 "iconWidth": 20,
 "visible": false,
 "data": {
  "name": "CloseButton2964"
 },
 "fontWeight": "normal",
 "textDecoration": "none",
 "cursor": "hand"
},
{
 "id": "viewer_uidB8AE685B_B665_5DC5_41BB_306851C7AC05VideoPlayer",
 "viewerArea": "this.viewer_uidB8AE685B_B665_5DC5_41BB_306851C7AC05",
 "displayPlaybackBar": true,
 "class": "VideoPlayer"
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_DF0BAF14_D522_36BE_4182_2D68BF6843DE, this.camera_B9BE0F86_B665_534C_41E4_DA27CD3F4667); this.mainPlayList.set('selectedIndex', 11)",
   "mapColor": "#FF0000",
   "toolTip": "MENUJU RUANG DISKUSI"
  }
 ],
 "maps": [
  {
   "hfov": 13.31,
   "yaw": 70.96,
   "image": {
    "levels": [
     {
      "url": "media/panorama_DF0B714D_D522_EAAE_41DB_DAFE02AA8C1C_1_HS_0_0_0_map.gif",
      "width": 37,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -25.47,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_FA379347_EE5B_00F8_41DF_0672C648A245",
   "yaw": 70.96,
   "pitch": -25.47,
   "hfov": 13.31,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_C010CDFA_D5E6_556A_41A0_E04BAFFF62ED",
 "data": {
  "label": "Circle Arrow 01b"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "if(this.isCardboardViewMode()) { this.showPopupPanoramaVideoOverlay(this.popup_31F5B7A7_1305_3A9A_41AA_19829798A91D, {'backgroundColorDirection':'vertical','paddingRight':5,'rollOverIconLineWidth':5,'pressedBackgroundOpacity':0.3,'pressedIconLineWidth':5,'pressedIconWidth':20,'borderSize':0,'paddingLeft':5,'rollOverIconColor':'#666666','iconWidth':20,'paddingBottom':5,'rollOverBackgroundOpacity':0.3,'pressedBorderColor':'#000000','rollOverBorderSize':0,'iconHeight':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'iconColor':'#000000','iconLineWidth':5,'rollOverIconWidth':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedBorderSize':0,'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000','rollOverIconHeight':20,'backgroundOpacity':0.3,'pressedIconHeight':20,'rollOverBackgroundColorDirection':'vertical','pressedIconColor':'#888888','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundColorDirection':'vertical'}, true) } else { this.showPopupMedia(this.window_BCF2ACB7_B65D_354C_41DF_C5911C46F027, this.video_30DFE58F_1307_5EA9_4188_54F3B3C4462E, this.PlayList_B96A1899_B665_5D44_41E3_2D249F61D359, '95%', '95%', true, true) }",
   "mapColor": "#FF0000",
   "toolTip": "INFORMASI VIDEO"
  }
 ],
 "maps": [
  {
   "hfov": 4.91,
   "yaw": -0.16,
   "image": {
    "levels": [
     {
      "url": "media/panorama_DF0B714D_D522_EAAE_41DB_DAFE02AA8C1C_1_HS_2_0_0_map.gif",
      "width": 16,
      "height": 24,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -30.56,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "items": [
  {
   "hfov": 4.91,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_DF0B714D_D522_EAAE_41DB_DAFE02AA8C1C_1_HS_2_0.png",
      "width": 94,
      "height": 141,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -30.56,
   "yaw": -0.16,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_321E8425_1305_5D9E_41AF_B1586822A95E",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 32.26,
   "yaw": 154.5,
   "image": {
    "levels": [
     {
      "url": "media/panorama_DF0B714D_D522_EAAE_41DB_DAFE02AA8C1C_1_HS_3_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -65,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "items": [
  {
   "hfov": 32.26,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_DF0B714D_D522_EAAE_41DB_DAFE02AA8C1C_1_HS_3_0.png",
      "width": 1261,
      "height": 1221,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -65,
   "yaw": 154.5,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_0AC49DA1_1B3F_D798_41A1_35B08A25672E",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.showPopupPanoramaOverlay(this.popup_F8BD8C07_F752_C1BA_41E8_77B4093E763C, {'backgroundColorDirection':'vertical','paddingRight':5,'rollOverIconLineWidth':5,'pressedBackgroundOpacity':0.3,'pressedIconLineWidth':5,'pressedIconWidth':20,'borderSize':0,'paddingLeft':5,'rollOverIconColor':'#666666','iconWidth':20,'paddingBottom':5,'rollOverBackgroundOpacity':0.3,'pressedBorderColor':'#000000','rollOverBorderSize':0,'iconHeight':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'iconColor':'#000000','iconLineWidth':5,'rollOverIconWidth':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedBorderSize':0,'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000','rollOverIconHeight':20,'backgroundOpacity':0.3,'pressedIconHeight':20,'rollOverBackgroundColorDirection':'vertical','pressedIconColor':'#888888','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundColorDirection':'vertical'}, this.ImageResource_EF033926_F7B3_C3FA_41D5_95848575EC3B, null, null, null, null, false)",
   "mapColor": "#FF0000",
   "toolTip": "INFORMASI MENGENAI TEMPAT MAKAN"
  }
 ],
 "maps": [
  {
   "hfov": 7.42,
   "yaw": 34.7,
   "image": {
    "levels": [
     {
      "url": "media/panorama_DF0B714D_D522_EAAE_41DB_DAFE02AA8C1C_1_HS_4_0_0_map.gif",
      "width": 22,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.07,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "items": [
  {
   "hfov": 7.42,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_DF0B714D_D522_EAAE_41DB_DAFE02AA8C1C_1_HS_4_0.png",
      "width": 122,
      "height": 85,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.07,
   "yaw": 34.7,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_E2C23A49_ED4E_8AED_41D5_B58F4CCEC081",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "toolTip": "MAAF TEMPAT INI DI LARANG MASUK"
  }
 ],
 "maps": [
  {
   "hfov": 12.07,
   "yaw": -11.78,
   "image": {
    "levels": [
     {
      "url": "media/panorama_DF688AE7_D522_3F9A_41B2_CE1EBAC5DAF0_1_HS_0_0_0_map.gif",
      "width": 27,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -45.72,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_FADF335B_EE5B_0089_41D3_975ACC4CA62C",
   "yaw": -11.78,
   "pitch": -45.72,
   "hfov": 12.07,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_C96CD58B_D778_03FA_41E2_A38892239547",
 "data": {
  "label": "Arrow 07a"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "toolTip": "MAAF TEMPAT INI DI LARANG MASUK"
  }
 ],
 "maps": [
  {
   "hfov": 11.35,
   "yaw": 86.41,
   "image": {
    "levels": [
     {
      "url": "media/panorama_DF688AE7_D522_3F9A_41B2_CE1EBAC5DAF0_1_HS_1_0_0_map.gif",
      "width": 27,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -13.45,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_FADF535B_EE5B_0089_41C6_6F20335C5DCD",
   "yaw": 86.41,
   "pitch": -13.45,
   "hfov": 11.35,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_C9B28322_D778_072A_41D9_1F66B5C67585",
 "data": {
  "label": "Arrow 07a"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_DF6F0B8F_D522_DDA9_41D6_D0B5D979483D, this.camera_B93F5E6C_B665_55DC_41C5_AAA0AD4D26AF); this.mainPlayList.set('selectedIndex', 26)",
   "mapColor": "#FF0000",
   "toolTip": "MENUJU BALE PUBLIK"
  }
 ],
 "maps": [
  {
   "hfov": 4.32,
   "yaw": 173.64,
   "image": {
    "levels": [
     {
      "url": "media/panorama_DF688AE7_D522_3F9A_41B2_CE1EBAC5DAF0_1_HS_3_0_0_map.gif",
      "width": 29,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -14.32,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_FADE835B_EE5B_0089_41D4_B1EE7AD54840",
   "yaw": 173.64,
   "pitch": -14.32,
   "hfov": 4.32,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_E82AD092_E7AA_F49B_41E0_6F98FC10B198",
 "data": {
  "label": "Arrow 01c"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 46.92,
   "yaw": -140.02,
   "image": {
    "levels": [
     {
      "url": "media/panorama_DF688AE7_D522_3F9A_41B2_CE1EBAC5DAF0_1_HS_7_0_0_map.gif",
      "width": 25,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -71.9,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "items": [
  {
   "hfov": 46.92,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_DF688AE7_D522_3F9A_41B2_CE1EBAC5DAF0_1_HS_7_0.png",
      "width": 2048,
      "height": 1272,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -71.9,
   "yaw": -140.02,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_092394B8_1B29_D5E9_4192_9E04D33F3998",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.showPopupPanoramaOverlay(this.popup_E7F6F2D2_F752_465B_41EE_91B264CBC794, {'backgroundColorDirection':'vertical','paddingRight':5,'rollOverIconLineWidth':5,'pressedBackgroundOpacity':0.3,'pressedIconLineWidth':5,'pressedIconWidth':20,'borderSize':0,'paddingLeft':5,'rollOverIconColor':'#666666','iconWidth':20,'paddingBottom':5,'rollOverBackgroundOpacity':0.3,'pressedBorderColor':'#000000','rollOverBorderSize':0,'iconHeight':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'iconColor':'#000000','iconLineWidth':5,'rollOverIconWidth':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedBorderSize':0,'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000','rollOverIconHeight':20,'backgroundOpacity':0.3,'pressedIconHeight':20,'rollOverBackgroundColorDirection':'vertical','pressedIconColor':'#888888','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundColorDirection':'vertical'}, this.ImageResource_EF36C984_F7B3_C2BE_41D0_27A2E8A08D4B, null, null, null, null, false)",
   "mapColor": "#FF0000",
   "toolTip": "INFORMASI MENGENAI PINTU MASUK KE PURI DANGIN TELAGA"
  }
 ],
 "maps": [
  {
   "hfov": 15.68,
   "yaw": -9.36,
   "image": {
    "levels": [
     {
      "url": "media/panorama_DF688AE7_D522_3F9A_41B2_CE1EBAC5DAF0_0_HS_8_0_0_map.gif",
      "width": 26,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.33,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "items": [
  {
   "hfov": 15.68,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_DF688AE7_D522_3F9A_41B2_CE1EBAC5DAF0_0_HS_8_0.png",
      "width": 259,
      "height": 157,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.33,
   "yaw": -9.36,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_FD7972AD_ED41_BBA5_41A9_49799A7F40DD",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.showPopupPanoramaOverlay(this.popup_F8B56BF6_F752_C65A_41C1_F432514F4542, {'backgroundColorDirection':'vertical','paddingRight':5,'rollOverIconLineWidth':5,'pressedBackgroundOpacity':0.3,'pressedIconLineWidth':5,'pressedIconWidth':20,'borderSize':0,'paddingLeft':5,'rollOverIconColor':'#666666','iconWidth':20,'paddingBottom':5,'rollOverBackgroundOpacity':0.3,'pressedBorderColor':'#000000','rollOverBorderSize':0,'iconHeight':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'iconColor':'#000000','iconLineWidth':5,'rollOverIconWidth':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedBorderSize':0,'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000','rollOverIconHeight':20,'backgroundOpacity':0.3,'pressedIconHeight':20,'rollOverBackgroundColorDirection':'vertical','pressedIconColor':'#888888','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundColorDirection':'vertical'}, this.ImageResource_EF31E984_F7B3_C2BE_41EA_7AEAD3E27AD9, null, null, null, null, false)",
   "mapColor": "#FF0000",
   "toolTip": "INFORMASI MENGENAI PEMEDALAN MERAJAN AGENG"
  }
 ],
 "maps": [
  {
   "hfov": 10.15,
   "yaw": 86.31,
   "image": {
    "levels": [
     {
      "url": "media/panorama_DF688AE7_D522_3F9A_41B2_CE1EBAC5DAF0_1_HS_9_0_0_map.gif",
      "width": 30,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "items": [
  {
   "hfov": 10.15,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_DF688AE7_D522_3F9A_41B2_CE1EBAC5DAF0_1_HS_9_0.png",
      "width": 167,
      "height": 88,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0,
   "yaw": 86.31,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_E2EC66DE_ED42_9BE7_41E3_1686BEDB5098",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.showPopupPanoramaOverlay(this.popup_F8E99BFB_F752_464A_41C1_1E4936CF3011, {'backgroundColorDirection':'vertical','paddingRight':5,'rollOverIconLineWidth':5,'pressedBackgroundOpacity':0.3,'pressedIconLineWidth':5,'pressedIconWidth':20,'borderSize':0,'paddingLeft':5,'rollOverIconColor':'#666666','iconWidth':20,'paddingBottom':5,'rollOverBackgroundOpacity':0.3,'pressedBorderColor':'#000000','rollOverBorderSize':0,'iconHeight':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'iconColor':'#000000','iconLineWidth':5,'rollOverIconWidth':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedBorderSize':0,'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000','rollOverIconHeight':20,'backgroundOpacity':0.3,'pressedIconHeight':20,'rollOverBackgroundColorDirection':'vertical','pressedIconColor':'#888888','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundColorDirection':'vertical'}, this.ImageResource_EF334994_F7B3_C2DE_41DD_A6E8B35C0F24, null, null, null, null, false)",
   "mapColor": "#FF0000",
   "toolTip": "INFORMASI MENGENAI BALE TELAGA"
  }
 ],
 "maps": [
  {
   "hfov": 7.96,
   "yaw": -123.96,
   "image": {
    "levels": [
     {
      "url": "media/panorama_DF688AE7_D522_3F9A_41B2_CE1EBAC5DAF0_1_HS_10_0_0_map.gif",
      "width": 27,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 11.61,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "items": [
  {
   "hfov": 7.96,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_DF688AE7_D522_3F9A_41B2_CE1EBAC5DAF0_1_HS_10_0.png",
      "width": 134,
      "height": 77,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 11.61,
   "yaw": -123.96,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_FDB78857_ED42_96E6_41E1_EACD282203C0",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_054E3524_1447_9676_4193_7B76CE2567A8, {'backgroundColorDirection':'vertical','paddingRight':5,'rollOverIconLineWidth':5,'pressedBackgroundOpacity':0.3,'pressedIconLineWidth':5,'pressedIconWidth':20,'borderSize':0,'paddingLeft':5,'rollOverIconColor':'#666666','iconWidth':20,'paddingBottom':5,'rollOverBackgroundOpacity':0.3,'pressedBorderColor':'#000000','rollOverBorderSize':0,'iconHeight':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'iconColor':'#000000','iconLineWidth':5,'rollOverIconWidth':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedBorderSize':0,'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000','rollOverIconHeight':20,'backgroundOpacity':0.3,'pressedIconHeight':20,'rollOverBackgroundColorDirection':'vertical','pressedIconColor':'#888888','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundColorDirection':'vertical'}, this.ImageResource_07E1E9E7_1441_B1F2_419A_3510689E9C78, null, null, null, null, false)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 10.13,
   "yaw": 143.04,
   "image": {
    "levels": [
     {
      "url": "media/panorama_DF688AE7_D522_3F9A_41B2_CE1EBAC5DAF0_1_HS_11_0_0_map.gif",
      "width": 30,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 3.54,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "items": [
  {
   "hfov": 10.13,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_DF688AE7_D522_3F9A_41B2_CE1EBAC5DAF0_1_HS_11_0.png",
      "width": 167,
      "height": 88,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 3.54,
   "yaw": 143.04,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_E255F68E_ED43_9A67_41E9_2888A5399357",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "id": "viewer_uidB8BF886A_B665_5DC4_41B4_7ED8AF79C052VideoPlayer",
 "viewerArea": "this.viewer_uidB8BF886A_B665_5DC4_41B4_7ED8AF79C052",
 "displayPlaybackBar": true,
 "class": "VideoPlayer"
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_DF08E4A2_D523_EB9A_41E5_F673F160A0A8, this.camera_A6A9EC27_B665_554C_41C6_FF0837D7EB67); this.mainPlayList.set('selectedIndex', 17)",
   "mapColor": "#FF0000",
   "toolTip": "KELUAR DARI LORONG GALERI"
  }
 ],
 "maps": [
  {
   "hfov": 7.08,
   "yaw": 176.26,
   "image": {
    "levels": [
     {
      "url": "media/panorama_DF093389_D522_2D96_418B_B49E63F3C24E_1_HS_0_0_0_map.gif",
      "width": 29,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -18.84,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_FACC0351_EE5B_0099_41C8_D7622DA65757",
   "yaw": 176.26,
   "pitch": -18.84,
   "hfov": 7.08,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_C6180E8A_D718_01FA_41C8_5BFB79830C7B",
 "data": {
  "label": "Arrow 01c"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 50.57,
   "yaw": 134.91,
   "image": {
    "levels": [
     {
      "url": "media/panorama_DF093389_D522_2D96_418B_B49E63F3C24E_1_HS_1_0_0_map.gif",
      "width": 20,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -51.98,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "items": [
  {
   "hfov": 50.57,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_DF093389_D522_2D96_418B_B49E63F3C24E_1_HS_1_0.png",
      "width": 1357,
      "height": 1035,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -51.98,
   "yaw": 134.91,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_0903BB73_1B38_B378_41A7_A73C709DDF97",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_DF14B7C6_D526_559A_41D4_10037B667899, this.camera_B8A61CE4_B665_56CC_41E2_871E08B4B75A); this.mainPlayList.set('selectedIndex', 0)",
   "mapColor": "#FF0000",
   "toolTip": "MENUJU  PINTU KELUAR"
  }
 ],
 "maps": [
  {
   "hfov": 5.99,
   "yaw": -149.71,
   "image": {
    "levels": [
     {
      "url": "media/panorama_DF095ADC_D526_3FAE_41E8_221CDD95ABD4_1_HS_2_0_0_map.gif",
      "width": 29,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -13.24,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_FA20733A_EE5B_008B_41E0_0646CFCF3C7D",
   "yaw": -149.71,
   "pitch": -13.24,
   "hfov": 5.99,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_CFBC25F2_D718_032A_41E9_372969E11668",
 "data": {
  "label": "Arrow 01c"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_DF095A4F_D521_DEAA_41E5_B09830FCA2B6, this.camera_B8A07CD4_B665_56CC_41D8_D7B842263DCD); this.mainPlayList.set('selectedIndex', 2)",
   "mapColor": "#FF0000",
   "toolTip": "MENUJU TEMPAT PENERIMAAN TAMU"
  }
 ],
 "maps": [
  {
   "hfov": 11.31,
   "yaw": 30.57,
   "image": {
    "levels": [
     {
      "url": "media/panorama_DF095ADC_D526_3FAE_41E8_221CDD95ABD4_1_HS_3_0_0_map.gif",
      "width": 37,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -10.81,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_FA27B33A_EE5B_008B_41B6_32E8E3C6F70C",
   "yaw": 30.57,
   "pitch": -10.81,
   "hfov": 11.31,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_CE509EFE_D718_011A_41DC_A37B8EA7204A",
 "data": {
  "label": "Circle Arrow 01b"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 13.42,
   "yaw": 164.56,
   "image": {
    "levels": [
     {
      "url": "media/panorama_DF095ADC_D526_3FAE_41E8_221CDD95ABD4_1_HS_8_0_0_map.gif",
      "width": 17,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -73.78,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "items": [
  {
   "hfov": 13.42,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_DF095ADC_D526_3FAE_41E8_221CDD95ABD4_1_HS_8_0.png",
      "width": 794,
      "height": 717,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -73.78,
   "yaw": 164.56,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_084A1FFE_1B38_F368_41B7_6BFE49D5209E",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.showPopupPanoramaOverlay(this.popup_E7E6F278_F604_3AC6_41E5_EC28055128A1, {'backgroundColorDirection':'vertical','paddingRight':5,'rollOverIconLineWidth':5,'pressedBackgroundOpacity':0.3,'pressedIconLineWidth':5,'pressedIconWidth':20,'borderSize':0,'paddingLeft':5,'rollOverIconColor':'#666666','iconWidth':20,'paddingBottom':5,'rollOverBackgroundOpacity':0.3,'pressedBorderColor':'#000000','rollOverBorderSize':0,'iconHeight':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'iconColor':'#000000','iconLineWidth':5,'rollOverIconWidth':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedBorderSize':0,'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000','rollOverIconHeight':20,'backgroundOpacity':0.3,'pressedIconHeight':20,'rollOverBackgroundColorDirection':'vertical','pressedIconColor':'#888888','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundColorDirection':'vertical'}, this.ImageResource_E7D4AB16_F61C_0A4A_41D0_793831DBD3EF, null, null, null, null, false)",
   "mapColor": "#FF0000",
   "toolTip": "INFORMASI MENGENAI BENCINGAH"
  }
 ],
 "maps": [
  {
   "hfov": 3.27,
   "yaw": -57.58,
   "image": {
    "levels": [
     {
      "url": "media/panorama_DF095ADC_D526_3FAE_41E8_221CDD95ABD4_1_HS_10_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 8.43,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "items": [
  {
   "hfov": 3.27,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_DF095ADC_D526_3FAE_41E8_221CDD95ABD4_1_HS_10_0.png",
      "width": 54,
      "height": 55,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 8.43,
   "yaw": -57.58,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_E270D143_ED41_B6DD_41D2_B1FCA9CE0A5C",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.showPopupPanoramaOverlay(this.popup_E41D0776_F61C_3ACA_41E0_6E17BA1FFD39, {'backgroundColorDirection':'vertical','paddingRight':5,'rollOverIconLineWidth':5,'pressedBackgroundOpacity':0.3,'pressedIconLineWidth':5,'pressedIconWidth':20,'borderSize':0,'paddingLeft':5,'rollOverIconColor':'#666666','iconWidth':20,'paddingBottom':5,'rollOverBackgroundOpacity':0.3,'pressedBorderColor':'#000000','rollOverBorderSize':0,'iconHeight':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'iconColor':'#000000','iconLineWidth':5,'rollOverIconWidth':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedBorderSize':0,'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000','rollOverIconHeight':20,'backgroundOpacity':0.3,'pressedIconHeight':20,'rollOverBackgroundColorDirection':'vertical','pressedIconColor':'#888888','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundColorDirection':'vertical'}, this.ImageResource_E7D58B1F_F61C_0A7A_41E2_684BD33CA361, null, null, null, null, false)",
   "mapColor": "#FF0000",
   "toolTip": "INFORMASI MENGENAI TEMPAT CUCI TANGAN"
  }
 ],
 "maps": [
  {
   "hfov": 3.53,
   "yaw": 0.17,
   "image": {
    "levels": [
     {
      "url": "media/panorama_DF095ADC_D526_3FAE_41E8_221CDD95ABD4_1_HS_11_0_0_map.gif",
      "width": 19,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -7.32,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "items": [
  {
   "hfov": 3.53,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_DF095ADC_D526_3FAE_41E8_221CDD95ABD4_1_HS_11_0.png",
      "width": 58,
      "height": 48,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -7.32,
   "yaw": 0.17,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_FC78B7AA_ED4E_B9AF_41CC_B757987C1E48",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.showPopupPanoramaOverlay(this.popup_E7AABE57_F61C_0AC9_41CA_5240C5F8CC5E, {'backgroundColorDirection':'vertical','paddingRight':5,'rollOverIconLineWidth':5,'pressedBackgroundOpacity':0.3,'pressedIconLineWidth':5,'pressedIconWidth':20,'borderSize':0,'paddingLeft':5,'rollOverIconColor':'#666666','iconWidth':20,'paddingBottom':5,'rollOverBackgroundOpacity':0.3,'pressedBorderColor':'#000000','rollOverBorderSize':0,'iconHeight':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'iconColor':'#000000','iconLineWidth':5,'rollOverIconWidth':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedBorderSize':0,'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000','rollOverIconHeight':20,'backgroundOpacity':0.3,'pressedIconHeight':20,'rollOverBackgroundColorDirection':'vertical','pressedIconColor':'#888888','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundColorDirection':'vertical'}, this.ImageResource_E7DA7B1F_F61C_0A7A_41D7_F2778487084E, null, null, null, null, false)",
   "mapColor": "#FF0000",
   "toolTip": "INFORMASI MENGENAI  PARISADHA HINDU INDONESIA"
  }
 ],
 "maps": [
  {
   "hfov": 3.95,
   "yaw": 132.85,
   "image": {
    "levels": [
     {
      "url": "media/panorama_DF095ADC_D526_3FAE_41E8_221CDD95ABD4_1_HS_12_0_0_map.gif",
      "width": 17,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 6.15,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "items": [
  {
   "hfov": 3.95,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_DF095ADC_D526_3FAE_41E8_221CDD95ABD4_1_HS_12_0.png",
      "width": 65,
      "height": 60,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 6.15,
   "yaw": 132.85,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_FD118DD1_ED4E_89FD_41D9_A24D7F5C2841",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.showPopupPanoramaOverlay(this.popup_E7F3FA07_F61C_0A4A_41E5_2288D9E1B920, {'backgroundColorDirection':'vertical','paddingRight':5,'rollOverIconLineWidth':5,'pressedBackgroundOpacity':0.3,'pressedIconLineWidth':5,'pressedIconWidth':20,'borderSize':0,'paddingLeft':5,'rollOverIconColor':'#666666','iconWidth':20,'paddingBottom':5,'rollOverBackgroundOpacity':0.3,'pressedBorderColor':'#000000','rollOverBorderSize':0,'iconHeight':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'iconColor':'#000000','iconLineWidth':5,'rollOverIconWidth':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedBorderSize':0,'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000','rollOverIconHeight':20,'backgroundOpacity':0.3,'pressedIconHeight':20,'rollOverBackgroundColorDirection':'vertical','pressedIconColor':'#888888','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundColorDirection':'vertical'}, this.ImageResource_E7DB4B1F_F61C_0A7A_41D7_80D7A8BB4296, null, null, null, null, false)",
   "mapColor": "#FF0000",
   "toolTip": "INFORMASI MENGENAI BALE SEKULU"
  }
 ],
 "maps": [
  {
   "hfov": 3.59,
   "yaw": 61.73,
   "image": {
    "levels": [
     {
      "url": "media/panorama_DF095ADC_D526_3FAE_41E8_221CDD95ABD4_1_HS_13_0_0_map.gif",
      "width": 18,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 7.69,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "items": [
  {
   "hfov": 3.59,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_DF095ADC_D526_3FAE_41E8_221CDD95ABD4_1_HS_13_0.png",
      "width": 59,
      "height": 52,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 7.69,
   "yaw": 61.73,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_E24E2B7D_ED41_8AA5_41E1_C1F77CE9EF5B",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.showPopupPanoramaOverlay(this.popup_E750C153_F604_76CA_41E4_474C447C3E57, {'backgroundColorDirection':'vertical','paddingRight':5,'rollOverIconLineWidth':5,'pressedBackgroundOpacity':0.3,'pressedIconLineWidth':5,'pressedIconWidth':20,'borderSize':0,'paddingLeft':5,'rollOverIconColor':'#666666','iconWidth':20,'paddingBottom':5,'rollOverBackgroundOpacity':0.3,'pressedBorderColor':'#000000','rollOverBorderSize':0,'iconHeight':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'iconColor':'#000000','iconLineWidth':5,'rollOverIconWidth':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedBorderSize':0,'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000','rollOverIconHeight':20,'backgroundOpacity':0.3,'pressedIconHeight':20,'rollOverBackgroundColorDirection':'vertical','pressedIconColor':'#888888','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundColorDirection':'vertical'}, this.ImageResource_E7D83B1F_F61C_0A7A_41E7_E2C0B7F405FF, null, null, null, null, false)",
   "mapColor": "#FF0000",
   "toolTip": "INFORMASI MENGENAI CANDI KURUNG"
  }
 ],
 "maps": [
  {
   "hfov": 3.27,
   "yaw": -143.49,
   "image": {
    "levels": [
     {
      "url": "media/panorama_DF095ADC_D526_3FAE_41E8_221CDD95ABD4_1_HS_14_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 7.51,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "items": [
  {
   "hfov": 3.27,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_DF095ADC_D526_3FAE_41E8_221CDD95ABD4_1_HS_14_0.png",
      "width": 54,
      "height": 55,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 7.51,
   "yaw": -143.49,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_FCF0B18F_EDC2_B665_41E8_37553E1C975C",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.showPopupPanoramaOverlay(this.popup_E7F6672C_F61C_1A5E_41B8_6414A41B1AC0, {'backgroundColorDirection':'vertical','paddingRight':5,'rollOverIconLineWidth':5,'pressedBackgroundOpacity':0.3,'pressedIconLineWidth':5,'pressedIconWidth':20,'borderSize':0,'paddingLeft':5,'rollOverIconColor':'#666666','iconWidth':20,'paddingBottom':5,'rollOverBackgroundOpacity':0.3,'pressedBorderColor':'#000000','rollOverBorderSize':0,'iconHeight':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'iconColor':'#000000','iconLineWidth':5,'rollOverIconWidth':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedBorderSize':0,'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000','rollOverIconHeight':20,'backgroundOpacity':0.3,'pressedIconHeight':20,'rollOverBackgroundColorDirection':'vertical','pressedIconColor':'#888888','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundColorDirection':'vertical'}, this.ImageResource_E7D86B1F_F61C_0A7A_41E8_C4FEC968219B, null, null, null, null, false)",
   "mapColor": "#FF0000",
   "toolTip": "INFORMASI MENGENAI POS KESEHATAN"
  }
 ],
 "maps": [
  {
   "hfov": 3.94,
   "yaw": 95.21,
   "image": {
    "levels": [
     {
      "url": "media/panorama_DF095ADC_D526_3FAE_41E8_221CDD95ABD4_0_HS_15_0_0_map.gif",
      "width": 17,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 7.27,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "items": [
  {
   "hfov": 3.94,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_DF095ADC_D526_3FAE_41E8_221CDD95ABD4_0_HS_15_0.png",
      "width": 65,
      "height": 60,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 7.27,
   "yaw": 95.21,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_E7E32CAC_F61C_0E5E_41EA_86F30548955B",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.showPopupPanoramaOverlay(this.popup_8C98FE42_9D2D_C2E5_41DF_0D1EAD01E28C, {'backgroundColorDirection':'vertical','paddingRight':5,'rollOverIconLineWidth':5,'pressedBackgroundOpacity':0.3,'pressedIconLineWidth':5,'pressedIconWidth':20,'borderSize':0,'paddingLeft':5,'rollOverIconColor':'#666666','iconWidth':20,'paddingBottom':5,'rollOverBackgroundOpacity':0.3,'pressedBorderColor':'#000000','rollOverBorderSize':0,'iconHeight':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'iconColor':'#000000','iconLineWidth':5,'rollOverIconWidth':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedBorderSize':0,'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000','rollOverIconHeight':20,'backgroundOpacity':0.3,'pressedIconHeight':20,'rollOverBackgroundColorDirection':'vertical','pressedIconColor':'#888888','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundColorDirection':'vertical'}, this.ImageResource_8945A9D7_9D24_41EC_41CF_EF6182D1B57B, null, null, null, null, false)",
   "mapColor": "#FF0000",
   "toolTip": "INFORMASI CANDI KURUNG"
  }
 ],
 "maps": [
  {
   "hfov": 3.77,
   "yaw": 36.06,
   "image": {
    "levels": [
     {
      "url": "media/panorama_DF095ADC_D526_3FAE_41E8_221CDD95ABD4_0_HS_17_0_0_map.gif",
      "width": 20,
      "height": 15,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 10.19,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "items": [
  {
   "hfov": 3.77,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_DF095ADC_D526_3FAE_41E8_221CDD95ABD4_0_HS_17_0.png",
      "width": 63,
      "height": 49,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 10.19,
   "yaw": 36.06,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_8D463D0C_9D25_C67C_41E2_1B20DE83FA84",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_DF0BFC23_D522_7A9A_41E2_705D7646CD69, this.camera_B8DA0CB4_B665_554C_41DC_9F4CD4AF603D); this.mainPlayList.set('selectedIndex', 12)",
   "mapColor": "#FF0000",
   "toolTip": "KELUAR DARI TEMPAT TIDUR RAJA"
  }
 ],
 "maps": [
  {
   "hfov": 10.2,
   "yaw": -165.44,
   "image": {
    "levels": [
     {
      "url": "media/panorama_DF0B18B0_D522_3BF6_41E7_E97BDC8D73D5_1_HS_1_0_0_map.gif",
      "width": 29,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -27.13,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_FAC8E34D_EE5B_0089_41E0_F3685F404C06",
   "yaw": -165.44,
   "pitch": -27.13,
   "hfov": 10.2,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_C47CC3F5_D708_072E_41D1_044AA8F7DA20",
 "data": {
  "label": "Arrow 01c"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "if(this.isCardboardViewMode()) { this.showPopupPanoramaVideoOverlay(this.popup_3585CE71_1307_2A76_41A5_C16428D7FD8C, {'backgroundColorDirection':'vertical','paddingRight':5,'rollOverIconLineWidth':5,'pressedBackgroundOpacity':0.3,'pressedIconLineWidth':5,'pressedIconWidth':20,'borderSize':0,'paddingLeft':5,'rollOverIconColor':'#666666','iconWidth':20,'paddingBottom':5,'rollOverBackgroundOpacity':0.3,'pressedBorderColor':'#000000','rollOverBorderSize':0,'iconHeight':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'iconColor':'#000000','iconLineWidth':5,'rollOverIconWidth':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedBorderSize':0,'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000','rollOverIconHeight':20,'backgroundOpacity':0.3,'pressedIconHeight':20,'rollOverBackgroundColorDirection':'vertical','pressedIconColor':'#888888','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundColorDirection':'vertical'}, true) } else { this.showPopupMedia(this.window_BCED4CBA_B65D_3544_41D8_ACD07201F484, this.video_3BF8CD99_1305_6EA9_41A3_97DBAA5790E4, this.PlayList_B96D3899_B665_5D44_41E3_58D6D3E34DAF, '95%', '95%', true, true) }",
   "mapColor": "#FF0000",
   "toolTip": "INFORMASI VIDEO"
  }
 ],
 "maps": [
  {
   "hfov": 5.9,
   "yaw": 35.21,
   "image": {
    "levels": [
     {
      "url": "media/panorama_DF0B18B0_D522_3BF6_41E7_E97BDC8D73D5_1_HS_3_0_0_map.gif",
      "width": 15,
      "height": 18,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 8.43,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "items": [
  {
   "hfov": 5.9,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_DF0B18B0_D522_3BF6_41E7_E97BDC8D73D5_1_HS_3_0.png",
      "width": 98,
      "height": 116,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 8.43,
   "yaw": 35.21,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_3B674023_1304_D59A_4199_43A43971BBB0",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 58.9,
   "yaw": 132.4,
   "image": {
    "levels": [
     {
      "url": "media/panorama_DF0B18B0_D522_3BF6_41E7_E97BDC8D73D5_1_HS_4_0_0_map.gif",
      "width": 25,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -62.46,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "items": [
  {
   "hfov": 58.9,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_DF0B18B0_D522_3BF6_41E7_E97BDC8D73D5_1_HS_4_0.png",
      "width": 2048,
      "height": 1304,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -62.46,
   "yaw": 132.4,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_0AC16DB8_1B39_B7E9_4199_1CAA02F61017",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.showPopupPanoramaOverlay(this.popup_F88091C3_F752_42BA_41D8_BAE68EEED9DB, {'backgroundColorDirection':'vertical','paddingRight':5,'rollOverIconLineWidth':5,'pressedBackgroundOpacity':0.3,'pressedIconLineWidth':5,'pressedIconWidth':20,'borderSize':0,'paddingLeft':5,'rollOverIconColor':'#666666','iconWidth':20,'paddingBottom':5,'rollOverBackgroundOpacity':0.3,'pressedBorderColor':'#000000','rollOverBorderSize':0,'iconHeight':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'iconColor':'#000000','iconLineWidth':5,'rollOverIconWidth':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedBorderSize':0,'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000','rollOverIconHeight':20,'backgroundOpacity':0.3,'pressedIconHeight':20,'rollOverBackgroundColorDirection':'vertical','pressedIconColor':'#888888','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundColorDirection':'vertical'}, this.ImageResource_EF13294F_F7B3_C24A_41EA_538B19750254, null, null, null, null, false)",
   "mapColor": "#FF0000",
   "toolTip": "INFORMASI MENGENAI TEMPAT TIDUR"
  }
 ],
 "maps": [
  {
   "hfov": 12.76,
   "yaw": 101.11,
   "image": {
    "levels": [
     {
      "url": "media/panorama_DF0B18B0_D522_3BF6_41E7_E97BDC8D73D5_1_HS_5_0_0_map.gif",
      "width": 24,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.73,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "items": [
  {
   "hfov": 12.76,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_DF0B18B0_D522_3BF6_41E7_E97BDC8D73D5_1_HS_5_0.png",
      "width": 211,
      "height": 140,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.73,
   "yaw": 101.11,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_E2EF0A6E_ED41_8AA7_41EB_E51795DAFE06",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "media": "this.panorama_DF095ADC_D526_3FAE_41E8_221CDD95ABD4",
 "end": "this.setComponentVisibility(this.Image_F3594E3D_E6B7_AE39_41C8_FE19BB12D054, false, -1, this.effect_F1E7499A_E679_B2FB_41E8_F2F054FB1A11, 'hideEffect', false)",
 "start": "this.keepComponentVisibility(this.Image_F3594E3D_E6B7_AE39_41C8_FE19BB12D054, true)",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_B888987A_B665_5DC7_41D2_F4B21C579137, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 1, 2); this.keepComponentVisibility(this.Image_F3594E3D_E6B7_AE39_41C8_FE19BB12D054, false); this.setComponentVisibility(this.Image_F3594E3D_E6B7_AE39_41C8_FE19BB12D054, true, -1, this.effect_F1E7599A_E679_B2FB_41E2_CB4F473D3B40, 'showEffect', false)",
 "player": "this.MainViewerPanoramaPlayer",
 "camera": "this.panorama_DF095ADC_D526_3FAE_41E8_221CDD95ABD4_camera",
 "id": "PanoramaPlayListItem_B888987A_B665_5DC7_41D2_F4B21C579137",
 "class": "PanoramaPlayListItem"
},
{
 "media": "this.panorama_DF0AD51E_D522_6AAB_41E0_02491679C908",
 "end": "this.setComponentVisibility(this.Image_F20AC14B_E64F_D259_41D9_71B15433AB9E, false, -1, this.effect_F3F3A936_E649_F3CA_41C9_35102C1CC847, 'hideEffect', false)",
 "start": "this.keepComponentVisibility(this.Image_F20AC14B_E64F_D259_41D9_71B15433AB9E, true)",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_B88DB87A_B665_5DC7_41D1_95821BC21EF5, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 7, 8); this.keepComponentVisibility(this.Image_F20AC14B_E64F_D259_41D9_71B15433AB9E, false); this.setComponentVisibility(this.Image_F20AC14B_E64F_D259_41D9_71B15433AB9E, true, -1, this.effect_F1E6699E_E679_B2FB_41DF_D0E0CC45D289, 'showEffect', false)",
 "player": "this.MainViewerPanoramaPlayer",
 "camera": "this.panorama_DF0AD51E_D522_6AAB_41E0_02491679C908_camera",
 "id": "PanoramaPlayListItem_B88DB87A_B665_5DC7_41D1_95821BC21EF5",
 "class": "PanoramaPlayListItem"
},
{
 "media": "this.panorama_DF0A8329_D522_2E96_41DA_0346C09AF2A0",
 "end": "this.setComponentVisibility(this.Image_F27D68F4_E648_B24E_41E1_900F5FB2363E, false, -1, this.effect_F1E149A7_E679_B2C9_41BF_82CFD001169B, 'hideEffect', false)",
 "start": "this.keepComponentVisibility(this.Image_F27D68F4_E648_B24E_41E1_900F5FB2363E, true)",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_B88D087A_B665_5DC7_41D7_C6753766CE0B, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 8, 9); this.keepComponentVisibility(this.Image_F27D68F4_E648_B24E_41E1_900F5FB2363E, false); this.setComponentVisibility(this.Image_F27D68F4_E648_B24E_41E1_900F5FB2363E, true, -1, this.effect_F1E169A7_E679_B2C9_41D5_4DAD56770C71, 'showEffect', false)",
 "player": "this.MainViewerPanoramaPlayer",
 "camera": "this.panorama_DF0A8329_D522_2E96_41DA_0346C09AF2A0_camera",
 "id": "PanoramaPlayListItem_B88D087A_B665_5DC7_41D7_C6753766CE0B",
 "class": "PanoramaPlayListItem"
},
{
 "media": "this.panorama_DF0B7220_D522_EE96_41E0_735AC8175FE5",
 "end": "this.setComponentVisibility(this.Image_F2638C52_E648_F24B_4198_1B8B11C8C2F2, false, -1, this.effect_F1E1A9A7_E679_B2C9_41E0_BBE802B642A0, 'hideEffect', false)",
 "start": "this.keepComponentVisibility(this.Image_F2638C52_E648_F24B_4198_1B8B11C8C2F2, true)",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_B88C787A_B665_5DC7_41D9_BC72C1524E59, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 9, 10); this.keepComponentVisibility(this.Image_F2638C52_E648_F24B_4198_1B8B11C8C2F2, false); this.setComponentVisibility(this.Image_F2638C52_E648_F24B_4198_1B8B11C8C2F2, true, -1, this.effect_F1E1F9A7_E679_B2C9_41CC_F0E20EE24FA4, 'showEffect', false)",
 "player": "this.MainViewerPanoramaPlayer",
 "camera": "this.panorama_DF0B7220_D522_EE96_41E0_735AC8175FE5_camera",
 "id": "PanoramaPlayListItem_B88C787A_B665_5DC7_41D9_BC72C1524E59",
 "class": "PanoramaPlayListItem"
},
{
 "media": "this.panorama_DF62FED0_D522_37B6_41C2_93651E251542",
 "end": "this.setComponentVisibility(this.Image_F278FEC0_E648_AE46_41A5_F679081499CE, false, -1, this.effect_F1ECB9AF_E679_B2D9_41E4_CF3DAE069B47, 'hideEffect', false)",
 "start": "this.keepComponentVisibility(this.Image_F278FEC0_E648_AE46_41A5_F679081499CE, true)",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_B8959889_B665_5D44_41A4_E12E7F895EC6, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 23, 24); this.keepComponentVisibility(this.Image_F278FEC0_E648_AE46_41A5_F679081499CE, false); this.setComponentVisibility(this.Image_F278FEC0_E648_AE46_41A5_F679081499CE, true, -1, this.effect_F1ECF9AF_E679_B2D9_41EA_6723E10391F0, 'showEffect', false)",
 "player": "this.MainViewerPanoramaPlayer",
 "camera": "this.panorama_DF62FED0_D522_37B6_41C2_93651E251542_camera",
 "id": "PanoramaPlayListItem_B8959889_B665_5D44_41A4_E12E7F895EC6",
 "class": "PanoramaPlayListItem"
},
{
 "media": "this.panorama_DF60EDC1_D522_D596_41E5_9A31123BC0B0",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_B894A889_B665_5D44_41D4_1B8D73B53EA0, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 24, 25)",
 "player": "this.MainViewerPanoramaPlayer",
 "camera": "this.panorama_DF60EDC1_D522_D596_41E5_9A31123BC0B0_camera",
 "id": "PanoramaPlayListItem_B894A889_B665_5D44_41D4_1B8D73B53EA0",
 "class": "PanoramaPlayListItem"
},
{
 "media": "this.panorama_DF614CA2_D522_FB9A_41E1_A0F7B63CBAED",
 "end": "this.setComponentVisibility(this.Image_F25F581F_E64B_51F9_41EB_5A451DE584F3, false, -1, this.effect_E4056FE6_F752_5E7A_41E3_493CE4586822, 'hideEffect', false)",
 "start": "this.keepComponentVisibility(this.Image_F25F581F_E64B_51F9_41EB_5A451DE584F3, true)",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_B8940889_B665_5D44_41D4_893851651DEA, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 25, 26); this.keepComponentVisibility(this.Image_F25F581F_E64B_51F9_41EB_5A451DE584F3, false); this.setComponentVisibility(this.Image_F25F581F_E64B_51F9_41EB_5A451DE584F3, true, -1, this.effect_E406AD0A_F75E_43CA_41E7_3D8498F86DA4, 'showEffect', false)",
 "player": "this.MainViewerPanoramaPlayer",
 "camera": "this.panorama_DF614CA2_D522_FB9A_41E1_A0F7B63CBAED_camera",
 "id": "PanoramaPlayListItem_B8940889_B665_5D44_41D4_893851651DEA",
 "class": "PanoramaPlayListItem"
},
{
 "media": "this.panorama_DF6F0B8F_D522_DDA9_41D6_D0B5D979483D",
 "end": "this.setComponentVisibility(this.Image_F26ED021_E64B_D1C9_41DB_0BC5116D3911, false, -1, this.effect_F1EE79B0_E679_B2C7_41EA_8B3612E0B253, 'hideEffect', false)",
 "start": "this.keepComponentVisibility(this.Image_F26ED021_E64B_D1C9_41DB_0BC5116D3911, true)",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_B8979889_B665_5D44_41DB_49B023988F24, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 26, 27); this.keepComponentVisibility(this.Image_F26ED021_E64B_D1C9_41DB_0BC5116D3911, false); this.setComponentVisibility(this.Image_F26ED021_E64B_D1C9_41DB_0BC5116D3911, true, -1, this.effect_F1EF99B0_E679_B2C7_41D6_2A9BCAF5DB59, 'showEffect', false)",
 "player": "this.MainViewerPanoramaPlayer",
 "camera": "this.panorama_DF6F0B8F_D522_DDA9_41D6_D0B5D979483D_camera",
 "id": "PanoramaPlayListItem_B8979889_B665_5D44_41DB_49B023988F24",
 "class": "PanoramaPlayListItem"
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_DF614CA2_D522_FB9A_41E1_A0F7B63CBAED, this.camera_B9533E0E_B665_555C_4160_463FE7FC1BFD); this.mainPlayList.set('selectedIndex', 25)",
   "mapColor": "#FF0000",
   "toolTip": "KELUAR DARI AREA BALE PUBLIK"
  }
 ],
 "maps": [
  {
   "hfov": 4.52,
   "yaw": 176.21,
   "image": {
    "levels": [
     {
      "url": "media/panorama_DF6F0B8F_D522_DDA9_41D6_D0B5D979483D_1_HS_0_0_0_map.gif",
      "width": 29,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -9.86,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_FAD9335A_EE5B_008B_41EA_5B2828FA0B47",
   "yaw": 176.21,
   "pitch": -9.86,
   "hfov": 4.52,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_F72A1C2B_D778_013A_41E8_842DF90AB09F",
 "data": {
  "label": "Arrow 01c"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_DF688AE7_D522_3F9A_41B2_CE1EBAC5DAF0, this.camera_B9465DF5_B665_56CC_41C8_332B13DF4A34); this.mainPlayList.set('selectedIndex', 22); this.mainPlayList.set('selectedIndex', 27); this.mainPlayList.set('selectedIndex', 27)",
   "mapColor": "#FF0000",
   "toolTip": "AREA BALE PUBLIK"
  }
 ],
 "maps": [
  {
   "hfov": 12.47,
   "yaw": -5.27,
   "image": {
    "levels": [
     {
      "url": "media/panorama_DF6F0B8F_D522_DDA9_41D6_D0B5D979483D_1_HS_1_0_0_map.gif",
      "width": 26,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -9.41,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_FAD9435A_EE5B_008B_41D3_B7F1E397DE72",
   "yaw": -5.27,
   "pitch": -9.41,
   "hfov": 12.47,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_C898FCB5_D778_012E_41E7_9C2F0B428C8C",
 "data": {
  "label": "Circle Arrow 01a"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 64.69,
   "yaw": 154.74,
   "image": {
    "levels": [
     {
      "url": "media/panorama_DF6F0B8F_D522_DDA9_41D6_D0B5D979483D_1_HS_4_0_0_map.gif",
      "width": 30,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -61.94,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "items": [
  {
   "hfov": 64.69,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_DF6F0B8F_D522_DDA9_41D6_D0B5D979483D_1_HS_4_0.png",
      "width": 2048,
      "height": 1069,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -61.94,
   "yaw": 154.74,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_095F9153_1B29_4CBF_41B9_84252B023885",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.showPopupPanoramaOverlay(this.popup_E76B42A0_F771_C6F6_41D0_13870F845D3B, {'backgroundColorDirection':'vertical','paddingRight':5,'rollOverIconLineWidth':5,'pressedBackgroundOpacity':0.3,'pressedIconLineWidth':5,'pressedIconWidth':20,'borderSize':0,'paddingLeft':5,'rollOverIconColor':'#666666','iconWidth':20,'paddingBottom':5,'rollOverBackgroundOpacity':0.3,'pressedBorderColor':'#000000','rollOverBorderSize':0,'iconHeight':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'iconColor':'#000000','iconLineWidth':5,'rollOverIconWidth':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedBorderSize':0,'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000','rollOverIconHeight':20,'backgroundOpacity':0.3,'pressedIconHeight':20,'rollOverBackgroundColorDirection':'vertical','pressedIconColor':'#888888','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundColorDirection':'vertical'}, this.ImageResource_EF350984_F7B3_C2BE_41CA_7F3A86999B57, null, null, null, null, false)",
   "mapColor": "#FF0000",
   "toolTip": "INFORMASI MENGENAI BALE PUBLIK"
  }
 ],
 "maps": [
  {
   "hfov": 14.81,
   "yaw": 87.11,
   "image": {
    "levels": [
     {
      "url": "media/panorama_DF6F0B8F_D522_DDA9_41D6_D0B5D979483D_1_HS_5_0_0_map.gif",
      "width": 28,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 2.67,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "items": [
  {
   "hfov": 14.81,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_DF6F0B8F_D522_DDA9_41D6_D0B5D979483D_1_HS_5_0.png",
      "width": 245,
      "height": 137,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 2.67,
   "yaw": 87.11,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_FD77CD6A_ED42_8EAF_41CA_40E4F469498E",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.showPopupPanoramaOverlay(this.popup_E7F49273_F772_465A_41D1_E40E63484A75, {'backgroundColorDirection':'vertical','paddingRight':5,'rollOverIconLineWidth':5,'pressedBackgroundOpacity':0.3,'pressedIconLineWidth':5,'pressedIconWidth':20,'borderSize':0,'paddingLeft':5,'rollOverIconColor':'#666666','iconWidth':20,'paddingBottom':5,'rollOverBackgroundOpacity':0.3,'pressedBorderColor':'#000000','rollOverBorderSize':0,'iconHeight':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'iconColor':'#000000','iconLineWidth':5,'rollOverIconWidth':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedBorderSize':0,'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000','rollOverIconHeight':20,'backgroundOpacity':0.3,'pressedIconHeight':20,'rollOverBackgroundColorDirection':'vertical','pressedIconColor':'#888888','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundColorDirection':'vertical'}, this.ImageResource_EF342984_F7B3_C2BE_41D5_6C2892D12623, null, null, null, null, false)",
   "mapColor": "#FF0000",
   "toolTip": "INFORMASI MENGENAI BALE KEMBAR"
  }
 ],
 "maps": [
  {
   "hfov": 5.39,
   "yaw": -165.51,
   "image": {
    "levels": [
     {
      "url": "media/panorama_DF6F0B8F_D522_DDA9_41D6_D0B5D979483D_1_HS_6_0_0_map.gif",
      "width": 23,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 5.1,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "items": [
  {
   "hfov": 5.39,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_DF6F0B8F_D522_DDA9_41D6_D0B5D979483D_1_HS_6_0.png",
      "width": 89,
      "height": 61,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 5.1,
   "yaw": -165.51,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_E2EBCD5F_ED47_8EE6_41DF_F3E48F45F715",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.showPopupPanoramaOverlay(this.popup_E7090508_F772_43C3_41E6_FB3DCBCADC28, {'backgroundColorDirection':'vertical','paddingRight':5,'rollOverIconLineWidth':5,'pressedBackgroundOpacity':0.3,'pressedIconLineWidth':5,'pressedIconWidth':20,'borderSize':0,'paddingLeft':5,'rollOverIconColor':'#666666','iconWidth':20,'paddingBottom':5,'rollOverBackgroundOpacity':0.3,'pressedBorderColor':'#000000','rollOverBorderSize':0,'iconHeight':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'iconColor':'#000000','iconLineWidth':5,'rollOverIconWidth':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedBorderSize':0,'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000','rollOverIconHeight':20,'backgroundOpacity':0.3,'pressedIconHeight':20,'rollOverBackgroundColorDirection':'vertical','pressedIconColor':'#888888','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundColorDirection':'vertical'}, this.ImageResource_EF374984_F7B3_C2BE_41C1_F20D808E3FD0, null, null, null, null, false)",
   "mapColor": "#FF0000",
   "toolTip": "INFORMASI MENGENAI BALE TELAGA"
  }
 ],
 "maps": [
  {
   "hfov": 5.27,
   "yaw": -83.07,
   "image": {
    "levels": [
     {
      "url": "media/panorama_DF6F0B8F_D522_DDA9_41D6_D0B5D979483D_1_HS_7_0_0_map.gif",
      "width": 23,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 13.09,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "items": [
  {
   "hfov": 5.27,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_DF6F0B8F_D522_DDA9_41D6_D0B5D979483D_1_HS_7_0.png",
      "width": 89,
      "height": 61,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 13.09,
   "yaw": -83.07,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_E22BE497_ED46_BE64_41DB_2B85F128F49A",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.showPopupPanoramaOverlay(this.popup_E3D4E80F_F752_C1CA_41E1_6844F1334909, {'backgroundColorDirection':'vertical','paddingRight':5,'rollOverIconLineWidth':5,'pressedBackgroundOpacity':0.3,'pressedIconLineWidth':5,'pressedIconWidth':20,'borderSize':0,'paddingLeft':5,'rollOverIconColor':'#666666','iconWidth':20,'paddingBottom':5,'rollOverBackgroundOpacity':0.3,'pressedBorderColor':'#000000','rollOverBorderSize':0,'iconHeight':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'iconColor':'#000000','iconLineWidth':5,'rollOverIconWidth':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedBorderSize':0,'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000','rollOverIconHeight':20,'backgroundOpacity':0.3,'pressedIconHeight':20,'rollOverBackgroundColorDirection':'vertical','pressedIconColor':'#888888','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundColorDirection':'vertical'}, this.ImageResource_E3CB786A_F752_424A_41D3_63CEDBDDF94F, null, null, null, null, false)",
   "mapColor": "#FF0000",
   "toolTip": "INFORMASI MENGENAI PINTU MASUK KE PURI DANGIN TELAGA"
  }
 ],
 "maps": [
  {
   "hfov": 4.95,
   "yaw": -5.2,
   "image": {
    "levels": [
     {
      "url": "media/panorama_DF6F0B8F_D522_DDA9_41D6_D0B5D979483D_0_HS_8_0_0_map.gif",
      "width": 31,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.63,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "items": [
  {
   "hfov": 4.95,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_DF6F0B8F_D522_DDA9_41D6_D0B5D979483D_0_HS_8_0.png",
      "width": 81,
      "height": 41,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.63,
   "yaw": -5.2,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_E3A30635_F752_41DE_41DC_5F7E29468841",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_DF0A8329_D522_2E96_41DA_0346C09AF2A0, this.camera_A62FCB5B_B665_53C4_41A4_66604273FF69); this.mainPlayList.set('selectedIndex', 8)",
   "mapColor": "#FF0000",
   "toolTip": "BALE PAMADESAN"
  }
 ],
 "maps": [
  {
   "hfov": 17.02,
   "yaw": 3.31,
   "image": {
    "levels": [
     {
      "url": "media/panorama_DF0AF41D_D522_2AA9_41EA_37FF14B377FE_1_HS_0_0_0_map.gif",
      "width": 37,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -21.27,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_FA3DE343_EE5B_00F8_41EA_346C3471BE9C",
   "yaw": 3.31,
   "pitch": -21.27,
   "hfov": 17.02,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_F4592328_E7A7_15B7_41C1_2C1F3745C640",
 "data": {
  "label": "Circle Arrow 01b"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_DF0AA7F2_D522_357A_41E7_BB88309A039D, this.camera_A63CFB6B_B665_53C5_41E0_A3621E0E6EF6); this.mainPlayList.set('selectedIndex', 5)",
   "mapColor": "#FF0000",
   "toolTip": "AREA MASKERDAM"
  }
 ],
 "maps": [
  {
   "hfov": 9.58,
   "yaw": -90,
   "image": {
    "levels": [
     {
      "url": "media/panorama_DF0AF41D_D522_2AA9_41EA_37FF14B377FE_1_HS_1_0_0_map.gif",
      "width": 29,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -15.34,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_FA3D7344_EE5B_00F8_41AF_ECAE739E3B19",
   "yaw": -90,
   "pitch": -15.34,
   "hfov": 9.58,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_F2AF5C9B_E7A9_0C8A_41EA_58D478C0001D",
 "data": {
  "label": "Arrow 01c"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 37.09,
   "yaw": 153.92,
   "image": {
    "levels": [
     {
      "url": "media/panorama_DF0AF41D_D522_2AA9_41EA_37FF14B377FE_1_HS_6_0_0_map.gif",
      "width": 19,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -61.7,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "items": [
  {
   "hfov": 37.09,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_DF0AF41D_D522_2AA9_41EA_37FF14B377FE_1_HS_6_0.png",
      "width": 1293,
      "height": 1044,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -61.7,
   "yaw": 153.92,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_0AA1D671_1B38_F57B_41B3_1E49320D4B25",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.showPopupPanoramaOverlay(this.popup_F89EFE78_F752_7E56_41D6_D9898D22BC4E, {'backgroundColorDirection':'vertical','paddingRight':5,'rollOverIconLineWidth':5,'pressedBackgroundOpacity':0.3,'pressedIconLineWidth':5,'pressedIconWidth':20,'borderSize':0,'paddingLeft':5,'rollOverIconColor':'#666666','iconWidth':20,'paddingBottom':5,'rollOverBackgroundOpacity':0.3,'pressedBorderColor':'#000000','rollOverBorderSize':0,'iconHeight':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'iconColor':'#000000','iconLineWidth':5,'rollOverIconWidth':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedBorderSize':0,'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000','rollOverIconHeight':20,'backgroundOpacity':0.3,'pressedIconHeight':20,'rollOverBackgroundColorDirection':'vertical','pressedIconColor':'#888888','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundColorDirection':'vertical'}, this.ImageResource_EF7E5916_F7B3_C3DA_41D4_63475B40AFB6, null, null, null, null, false)",
   "mapColor": "#FF0000",
   "toolTip": "INFORMASI MENGENAI AREA MASKERDAM"
  }
 ],
 "maps": [
  {
   "hfov": 6.49,
   "yaw": -135.53,
   "image": {
    "levels": [
     {
      "url": "media/panorama_DF0AF41D_D522_2AA9_41EA_37FF14B377FE_1_HS_11_0_0_map.gif",
      "width": 28,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.77,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "items": [
  {
   "hfov": 6.49,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_DF0AF41D_D522_2AA9_41EA_37FF14B377FE_1_HS_11_0.png",
      "width": 107,
      "height": 60,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.77,
   "yaw": -135.53,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_FD16FDA8_EDDE_89AB_41B5_20CFE6BD2555",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.showPopupPanoramaOverlay(this.popup_8C5811A5_9D3C_C1AC_41E2_898EC55DF924, {'backgroundColorDirection':'vertical','paddingRight':5,'rollOverIconLineWidth':5,'pressedBackgroundOpacity':0.3,'pressedIconLineWidth':5,'pressedIconWidth':20,'borderSize':0,'paddingLeft':5,'rollOverIconColor':'#666666','iconWidth':20,'paddingBottom':5,'rollOverBackgroundOpacity':0.3,'pressedBorderColor':'#000000','rollOverBorderSize':0,'iconHeight':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'iconColor':'#000000','iconLineWidth':5,'rollOverIconWidth':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedBorderSize':0,'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000','rollOverIconHeight':20,'backgroundOpacity':0.3,'pressedIconHeight':20,'rollOverBackgroundColorDirection':'vertical','pressedIconColor':'#888888','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundColorDirection':'vertical'}, this.ImageResource_89B43A06_9D24_426C_41D4_3D3CB9A1C958, null, null, null, null, false)",
   "mapColor": "#FF0000",
   "toolTip": "INFORMASI BALE PAMADESAN"
  }
 ],
 "maps": [
  {
   "hfov": 4.01,
   "yaw": 2.33,
   "image": {
    "levels": [
     {
      "url": "media/panorama_DF0AF41D_D522_2AA9_41EA_37FF14B377FE_0_HS_15_0_0_map.gif",
      "width": 16,
      "height": 25,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.34,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "items": [
  {
   "hfov": 4.01,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_DF0AF41D_D522_2AA9_41EA_37FF14B377FE_0_HS_15_0.png",
      "width": 66,
      "height": 104,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.34,
   "yaw": 2.33,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_8DE0FC7A_9D3C_C6A4_41D8_0395B3C8516E",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.showPopupPanoramaOverlay(this.popup_8DB67918_9D24_4E64_41DE_C052AA5B9BA4, {'backgroundColorDirection':'vertical','paddingRight':5,'rollOverIconLineWidth':5,'pressedBackgroundOpacity':0.3,'pressedIconLineWidth':5,'pressedIconWidth':20,'borderSize':0,'paddingLeft':5,'rollOverIconColor':'#666666','iconWidth':20,'paddingBottom':5,'rollOverBackgroundOpacity':0.3,'pressedBorderColor':'#000000','rollOverBorderSize':0,'iconHeight':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'iconColor':'#000000','iconLineWidth':5,'rollOverIconWidth':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedBorderSize':0,'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000','rollOverIconHeight':20,'backgroundOpacity':0.3,'pressedIconHeight':20,'rollOverBackgroundColorDirection':'vertical','pressedIconColor':'#888888','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundColorDirection':'vertical'}, this.ImageResource_89B6EA06_9D24_426C_41CE_3CAB16124F53, null, null, null, null, false)",
   "mapColor": "#FF0000",
   "toolTip": "INFORMASI BALE PAWEDAAN"
  }
 ],
 "maps": [
  {
   "hfov": 6.28,
   "yaw": 167.78,
   "image": {
    "levels": [
     {
      "url": "media/panorama_DF0AF41D_D522_2AA9_41EA_37FF14B377FE_0_HS_16_0_0_map.gif",
      "width": 16,
      "height": 23,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 8.13,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "items": [
  {
   "hfov": 6.28,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_DF0AF41D_D522_2AA9_41EA_37FF14B377FE_0_HS_16_0.png",
      "width": 104,
      "height": 152,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 8.13,
   "yaw": 167.78,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_8D948419_9D3D_C667_41E2_903E610E3900",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.showPopupPanoramaOverlay(this.popup_8C801360_9D5C_42A5_419C_D68B2037FE16, {'backgroundColorDirection':'vertical','paddingRight':5,'rollOverIconLineWidth':5,'pressedBackgroundOpacity':0.3,'pressedIconLineWidth':5,'pressedIconWidth':20,'borderSize':0,'paddingLeft':5,'rollOverIconColor':'#666666','iconWidth':20,'paddingBottom':5,'rollOverBackgroundOpacity':0.3,'pressedBorderColor':'#000000','rollOverBorderSize':0,'iconHeight':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'iconColor':'#000000','iconLineWidth':5,'rollOverIconWidth':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedBorderSize':0,'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000','rollOverIconHeight':20,'backgroundOpacity':0.3,'pressedIconHeight':20,'rollOverBackgroundColorDirection':'vertical','pressedIconColor':'#888888','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundColorDirection':'vertical'}, this.ImageResource_89CFE463_9D5C_46A4_41DF_A3FBA671CACE, null, null, null, null, false)",
   "mapColor": "#FF0000",
   "toolTip": "INFORMASI MASKERDAM"
  }
 ],
 "maps": [
  {
   "hfov": 3.99,
   "yaw": -82.08,
   "image": {
    "levels": [
     {
      "url": "media/panorama_DF0AF41D_D522_2AA9_41EA_37FF14B377FE_0_HS_17_0_0_map.gif",
      "width": 16,
      "height": 25,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 5.94,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "items": [
  {
   "hfov": 3.99,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_DF0AF41D_D522_2AA9_41EA_37FF14B377FE_0_HS_17_0.png",
      "width": 66,
      "height": 104,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 5.94,
   "yaw": -82.08,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_8C72CB11_9D3C_4264_41DE_A882A670EE94",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "mp3Url": "media/audio_FEA836FA_EDC4_1049_41E5_D4A0D991809D.mp3",
 "id": "audioresource_FF21C99D_EDC4_70CA_41AA_9B833DF0FBE0",
 "oggUrl": "media/audio_FEA836FA_EDC4_1049_41E5_D4A0D991809D.ogg",
 "class": "AudioResource"
},
{
 "map": {
  "width": 72.3,
  "x": 188.89,
  "image": {
   "levels": [
    {
     "url": "media/map_65C54D3C_6BC1_BCE6_41C8_91C0EDF11345_HS_0_map.gif",
     "width": 22,
     "height": 16,
     "class": "ImageResourceLevel"
    }
   ],
   "class": "ImageResource"
  },
  "offsetX": 0,
  "offsetY": 0,
  "height": 51.64,
  "y": 80.45,
  "class": "HotspotMapOverlayMap"
 },
 "image": {
  "x": 188.86,
  "y": 80.45,
  "width": 72.3,
  "image": {
   "levels": [
    {
     "url": "media/map_65C54D3C_6BC1_BCE6_41C8_91C0EDF11345_HS_0.png",
     "width": 72,
     "height": 51,
     "class": "ImageResourceLevel"
    }
   ],
   "class": "ImageResource"
  },
  "height": 51.64,
  "class": "HotspotMapOverlayImage"
 },
 "areas": [
  {
   "class": "HotspotMapOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 9)",
   "mapColor": "#FF0000",
   "toolTip": "KLIK MENUJU  MASKERDAM"
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_65C5DD3C_6BC1_BCE6_41C2_BD3925AE9F7B",
 "data": {
  "label": "Image"
 },
 "class": "AreaHotspotMapOverlay"
},
{
 "map": {
  "width": 57,
  "x": 279.69,
  "image": {
   "levels": [
    {
     "url": "media/map_65C54D3C_6BC1_BCE6_41C8_91C0EDF11345_HS_1_map.gif",
     "width": 16,
     "height": 23,
     "class": "ImageResourceLevel"
    }
   ],
   "class": "ImageResource"
  },
  "offsetX": 0,
  "offsetY": 0,
  "height": 83.02,
  "y": 441.83,
  "class": "HotspotMapOverlayMap"
 },
 "image": {
  "x": 279.61,
  "y": 441.8,
  "width": 57,
  "image": {
   "levels": [
    {
     "url": "media/map_65C54D3C_6BC1_BCE6_41C8_91C0EDF11345_HS_1.png",
     "width": 56,
     "height": 83,
     "class": "ImageResourceLevel"
    }
   ],
   "class": "ImageResource"
  },
  "height": 83.02,
  "class": "HotspotMapOverlayImage"
 },
 "areas": [
  {
   "class": "HotspotMapOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 1)",
   "mapColor": "#FF0000",
   "toolTip": "KLIK MENUJU AREA JABE"
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_65C5CD3C_6BC1_BCE6_41D0_BE4481105FE8",
 "data": {
  "label": "Image"
 },
 "class": "AreaHotspotMapOverlay"
},
{
 "map": {
  "width": 72.3,
  "x": 404.3,
  "image": {
   "levels": [
    {
     "url": "media/map_65C54D3C_6BC1_BCE6_41C8_91C0EDF11345_HS_2_map.gif",
     "width": 22,
     "height": 16,
     "class": "ImageResourceLevel"
    }
   ],
   "class": "ImageResource"
  },
  "offsetX": 0,
  "offsetY": 0,
  "height": 51.64,
  "y": 87.19,
  "class": "HotspotMapOverlayMap"
 },
 "image": {
  "x": 404.29,
  "y": 87.17,
  "width": 72.3,
  "image": {
   "levels": [
    {
     "url": "media/map_65C54D3C_6BC1_BCE6_41C8_91C0EDF11345_HS_2.png",
     "width": 72,
     "height": 51,
     "class": "ImageResourceLevel"
    }
   ],
   "class": "ImageResource"
  },
  "height": 51.64,
  "class": "HotspotMapOverlayImage"
 },
 "areas": [
  {
   "class": "HotspotMapOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 8)",
   "mapColor": "#FF0000",
   "toolTip": "KLIK MENUJU BALE PAMEDESAN"
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_65C5BD3C_6BC1_BCE6_41D0_BA416FB831FC",
 "data": {
  "label": "Image"
 },
 "class": "AreaHotspotMapOverlay"
},
{
 "map": {
  "width": 57,
  "x": 416.76,
  "image": {
   "levels": [
    {
     "url": "media/map_65C54D3C_6BC1_BCE6_41C8_91C0EDF11345_HS_3_map.gif",
     "width": 21,
     "height": 16,
     "class": "ImageResourceLevel"
    }
   ],
   "class": "ImageResource"
  },
  "offsetX": 0,
  "offsetY": 0,
  "height": 42.45,
  "y": 171.52,
  "class": "HotspotMapOverlayMap"
 },
 "image": {
  "x": 416.75,
  "y": 171.52,
  "width": 57,
  "image": {
   "levels": [
    {
     "url": "media/map_65C54D3C_6BC1_BCE6_41C8_91C0EDF11345_HS_3.png",
     "width": 56,
     "height": 42,
     "class": "ImageResourceLevel"
    }
   ],
   "class": "ImageResource"
  },
  "height": 42.45,
  "class": "HotspotMapOverlayImage"
 },
 "areas": [
  {
   "class": "HotspotMapOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 7)",
   "mapColor": "#FF0000",
   "toolTip": "KLIK MENUJU PAMADESAN"
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_65C5AD3C_6BC1_BCE6_41BE_8828A95EE5A0",
 "data": {
  "label": "Image"
 },
 "class": "AreaHotspotMapOverlay"
},
{
 "map": {
  "width": 43.22,
  "x": 659.19,
  "image": {
   "levels": [
    {
     "url": "media/map_65C54D3C_6BC1_BCE6_41C8_91C0EDF11345_HS_4_map.gif",
     "width": 16,
     "height": 24,
     "class": "ImageResourceLevel"
    }
   ],
   "class": "ImageResource"
  },
  "offsetX": 0,
  "offsetY": 0,
  "height": 67.71,
  "y": 71.34,
  "class": "HotspotMapOverlayMap"
 },
 "image": {
  "x": 659.17,
  "y": 71.23,
  "width": 43.22,
  "image": {
   "levels": [
    {
     "url": "media/map_65C54D3C_6BC1_BCE6_41C8_91C0EDF11345_HS_4.png",
     "width": 43,
     "height": 67,
     "class": "ImageResourceLevel"
    }
   ],
   "class": "ImageResource"
  },
  "height": 67.71,
  "class": "HotspotMapOverlayImage"
 },
 "areas": [
  {
   "class": "HotspotMapOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 23)",
   "mapColor": "#FF0000",
   "toolTip": "KLIK MENUJU BALE KAMBANG"
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_65C59D3C_6BC1_BCE6_41C6_EF468FD299C0",
 "data": {
  "label": "Image"
 },
 "class": "AreaHotspotMapOverlay"
},
{
 "map": {
  "width": 43.22,
  "x": 863.34,
  "image": {
   "levels": [
    {
     "url": "media/map_65C54D3C_6BC1_BCE6_41C8_91C0EDF11345_HS_5_map.gif",
     "width": 16,
     "height": 24,
     "class": "ImageResourceLevel"
    }
   ],
   "class": "ImageResource"
  },
  "offsetX": 0,
  "offsetY": 0,
  "height": 67.71,
  "y": 106.5,
  "class": "HotspotMapOverlayMap"
 },
 "image": {
  "x": 863.32,
  "y": 106.47,
  "width": 43.22,
  "image": {
   "levels": [
    {
     "url": "media/map_65C54D3C_6BC1_BCE6_41C8_91C0EDF11345_HS_5.png",
     "width": 43,
     "height": 67,
     "class": "ImageResourceLevel"
    }
   ],
   "class": "ImageResource"
  },
  "height": 67.71,
  "class": "HotspotMapOverlayImage"
 },
 "areas": [
  {
   "class": "HotspotMapOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 26)",
   "mapColor": "#FF0000",
   "toolTip": "KLIK MENUJU BALE PUBLIK"
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_65C58D3C_6BC1_BCE6_41B6_5FA7BD56BC97",
 "data": {
  "label": "Image"
 },
 "class": "AreaHotspotMapOverlay"
},
{
 "map": {
  "width": 44.97,
  "x": 744.33,
  "image": {
   "levels": [
    {
     "url": "media/map_65C54D3C_6BC1_BCE6_41C8_91C0EDF11345_HS_6_map.gif",
     "width": 16,
     "height": 28,
     "class": "ImageResourceLevel"
    }
   ],
   "class": "ImageResource"
  },
  "offsetX": 0,
  "offsetY": 0,
  "height": 79.41,
  "y": 158.96,
  "class": "HotspotMapOverlayMap"
 },
 "image": {
  "x": 744.28,
  "y": 158.94,
  "width": 44.97,
  "image": {
   "levels": [
    {
     "url": "media/map_65C54D3C_6BC1_BCE6_41C8_91C0EDF11345_HS_6.png",
     "width": 44,
     "height": 79,
     "class": "ImageResourceLevel"
    }
   ],
   "class": "ImageResource"
  },
  "height": 79.41,
  "class": "HotspotMapOverlayImage"
 },
 "areas": [
  {
   "class": "HotspotMapOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 24)",
   "mapColor": "#FF0000",
   "toolTip": "KLIK MENUJU BALE KEMBAR"
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_65C27D3C_6BC1_BCE6_41A4_6BC4B45EABD1",
 "data": {
  "label": "Image"
 },
 "class": "AreaHotspotMapOverlay"
},
{
 "map": {
  "width": 44.97,
  "x": 983.37,
  "image": {
   "levels": [
    {
     "url": "media/map_65C54D3C_6BC1_BCE6_41C8_91C0EDF11345_HS_7_map.gif",
     "width": 16,
     "height": 28,
     "class": "ImageResourceLevel"
    }
   ],
   "class": "ImageResource"
  },
  "offsetX": 0,
  "offsetY": 0,
  "height": 79.41,
  "y": 204.69,
  "class": "HotspotMapOverlayMap"
 },
 "image": {
  "x": 983.34,
  "y": 204.58,
  "width": 44.97,
  "image": {
   "levels": [
    {
     "url": "media/map_65C54D3C_6BC1_BCE6_41C8_91C0EDF11345_HS_7.png",
     "width": 44,
     "height": 79,
     "class": "ImageResourceLevel"
    }
   ],
   "class": "ImageResource"
  },
  "height": 79.41,
  "class": "HotspotMapOverlayImage"
 },
 "areas": [
  {
   "class": "HotspotMapOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 25)",
   "mapColor": "#FF0000",
   "toolTip": "KLIK MENUJU PERPUSTAKAAN"
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_65C26D3C_6BC1_BCE6_419F_BB2205DEE5B9",
 "data": {
  "label": "Image"
 },
 "class": "AreaHotspotMapOverlay"
},
{
 "map": {
  "width": 41.14,
  "x": 1038.85,
  "image": {
   "levels": [
    {
     "url": "media/map_65C54D3C_6BC1_BCE6_41C8_91C0EDF11345_HS_8_map.gif",
     "width": 16,
     "height": 16,
     "class": "ImageResourceLevel"
    }
   ],
   "class": "ImageResource"
  },
  "offsetX": 0,
  "offsetY": 0,
  "height": 41.14,
  "y": 3.02,
  "class": "HotspotMapOverlayMap"
 },
 "image": {
  "x": 1038.85,
  "y": 2.93,
  "width": 41.14,
  "image": {
   "levels": [
    {
     "url": "media/map_65C54D3C_6BC1_BCE6_41C8_91C0EDF11345_HS_8.png",
     "width": 41,
     "height": 41,
     "class": "ImageResourceLevel"
    }
   ],
   "class": "ImageResource"
  },
  "height": 41.14,
  "class": "HotspotMapOverlayImage"
 },
 "areas": [
  {
   "class": "HotspotMapOverlayArea",
   "mapColor": "#FF0000",
   "toolTip": "KLIK UNTUK MENUTUP MAPS"
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_65C25D3C_6BC1_BCE6_41DA_737A77F1F580",
 "data": {
  "label": "Image"
 },
 "class": "AreaHotspotMapOverlay"
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_DF614CA2_D522_FB9A_41E1_A0F7B63CBAED, this.camera_A6602AAF_B665_5D5D_414A_ED1F9E335C73); this.mainPlayList.set('selectedIndex', 25)",
   "mapColor": "#FF0000",
   "toolTip": "MENUJU AREA BALE PUBLIK"
  }
 ],
 "maps": [
  {
   "hfov": 14.76,
   "yaw": -10.03,
   "image": {
    "levels": [
     {
      "url": "media/panorama_DF60EDC1_D522_D596_41E5_9A31123BC0B0_1_HS_0_0_0_map.gif",
      "width": 26,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -19.59,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_FAC4E355_EE5B_0099_41E8_E1DC1A58BAB9",
   "yaw": -10.03,
   "pitch": -19.59,
   "hfov": 14.76,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_CBDE3018_D708_00E6_41D1_C41935A00517",
 "data": {
  "label": "Circle Arrow 01a"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_DF09605E_D522_6AAA_41E6_B94D5A810C57, this.camera_A6708ADE_B665_52FF_41DE_34EBEC8E77FE); this.mainPlayList.set('selectedIndex', 21)",
   "mapColor": "#FF0000",
   "toolTip": "MENUJU BALE TELAGA"
  }
 ],
 "maps": [
  {
   "hfov": 3.38,
   "yaw": 176.31,
   "image": {
    "levels": [
     {
      "url": "media/panorama_DF60EDC1_D522_D596_41E5_9A31123BC0B0_1_HS_2_0_0_map.gif",
      "width": 29,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -7.22,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_FAC47355_EE5B_0099_41E9_9D79C38B1034",
   "yaw": 176.31,
   "pitch": -7.22,
   "hfov": 3.38,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_F7EE103F_E7A7_1389_41E8_E1518C084A58",
 "data": {
  "label": "Arrow 01c"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "if(this.isCardboardViewMode()) { this.showPopupPanoramaVideoOverlay(this.popup_3C21C69D_1305_5AA9_41A8_2F10C20CC622, {'backgroundColorDirection':'vertical','paddingRight':5,'rollOverIconLineWidth':5,'pressedBackgroundOpacity':0.3,'pressedIconLineWidth':5,'pressedIconWidth':20,'borderSize':0,'paddingLeft':5,'rollOverIconColor':'#666666','iconWidth':20,'paddingBottom':5,'rollOverBackgroundOpacity':0.3,'pressedBorderColor':'#000000','rollOverBorderSize':0,'iconHeight':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'iconColor':'#000000','iconLineWidth':5,'rollOverIconWidth':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedBorderSize':0,'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000','rollOverIconHeight':20,'backgroundOpacity':0.3,'pressedIconHeight':20,'rollOverBackgroundColorDirection':'vertical','pressedIconColor':'#888888','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundColorDirection':'vertical'}, true) } else { this.showPopupMedia(this.window_BCED1CBB_B65D_3544_41E6_9A1BF63F0B8B, this.video_23846E1D_1304_EDAE_41A7_F9A78FBD6DBF, this.PlayList_B96CA899_B665_5D44_41D3_30BEF27CC551, '50%', '50%', true, true) }",
   "mapColor": "#FF0000",
   "toolTip": "INFORMASI VIDEO"
  }
 ],
 "maps": [
  {
   "hfov": 8.57,
   "yaw": -36.4,
   "image": {
    "levels": [
     {
      "url": "media/panorama_DF60EDC1_D522_D596_41E5_9A31123BC0B0_1_HS_5_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 4.54,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "items": [
  {
   "hfov": 8.57,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_DF60EDC1_D522_D596_41E5_9A31123BC0B0_1_HS_5_0.png",
      "width": 142,
      "height": 143,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 4.54,
   "yaw": -36.4,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_23F17F2F_1305_EBEA_416B_53E18D637B28",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 55.85,
   "yaw": 153.61,
   "image": {
    "levels": [
     {
      "url": "media/panorama_DF60EDC1_D522_D596_41E5_9A31123BC0B0_1_HS_6_0_0_map.gif",
      "width": 25,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -64.18,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "items": [
  {
   "hfov": 55.85,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_DF60EDC1_D522_D596_41E5_9A31123BC0B0_1_HS_6_0.png",
      "width": 2048,
      "height": 1296,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -64.18,
   "yaw": 153.61,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_0AEC1B99_1B37_B3AB_41B5_4F99C2AACB3E",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.showPopupPanoramaOverlay(this.popup_E7726334_F776_C7DE_41DD_3C7698230E38, {'backgroundColorDirection':'vertical','paddingRight':5,'rollOverIconLineWidth':5,'pressedBackgroundOpacity':0.3,'pressedIconLineWidth':5,'pressedIconWidth':20,'borderSize':0,'paddingLeft':5,'rollOverIconColor':'#666666','iconWidth':20,'paddingBottom':5,'rollOverBackgroundOpacity':0.3,'pressedBorderColor':'#000000','rollOverBorderSize':0,'iconHeight':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'iconColor':'#000000','iconLineWidth':5,'rollOverIconWidth':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedBorderSize':0,'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000','rollOverIconHeight':20,'backgroundOpacity':0.3,'pressedIconHeight':20,'rollOverBackgroundColorDirection':'vertical','pressedIconColor':'#888888','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundColorDirection':'vertical'}, this.ImageResource_EF2D8974_F7B3_C25E_41DF_2D7B8E86B582, null, null, null, null, false)",
   "mapColor": "#FF0000",
   "toolTip": "INFORMASI MENGENAI BALE KEMBAR"
  }
 ],
 "maps": [
  {
   "hfov": 11.5,
   "yaw": -62.15,
   "image": {
    "levels": [
     {
      "url": "media/panorama_DF60EDC1_D522_D596_41E5_9A31123BC0B0_0_HS_7_0_0_map.gif",
      "width": 27,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 1.92,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "items": [
  {
   "hfov": 11.5,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_DF60EDC1_D522_D596_41E5_9A31123BC0B0_0_HS_7_0.png",
      "width": 190,
      "height": 112,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 1.92,
   "yaw": -62.15,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_E24E2B2D_ED41_8AA5_41ED_3CEF2ABFF6E4",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.showPopupPanoramaOverlay(this.popup_E34E3A17_F771_C1DA_41DD_F740EF28F316, {'backgroundColorDirection':'vertical','paddingRight':5,'rollOverIconLineWidth':5,'pressedBackgroundOpacity':0.3,'pressedIconLineWidth':5,'pressedIconWidth':20,'borderSize':0,'paddingLeft':5,'rollOverIconColor':'#666666','iconWidth':20,'paddingBottom':5,'rollOverBackgroundOpacity':0.3,'pressedBorderColor':'#000000','rollOverBorderSize':0,'iconHeight':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'iconColor':'#000000','iconLineWidth':5,'rollOverIconWidth':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedBorderSize':0,'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000','rollOverIconHeight':20,'backgroundOpacity':0.3,'pressedIconHeight':20,'rollOverBackgroundColorDirection':'vertical','pressedIconColor':'#888888','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundColorDirection':'vertical'}, this.ImageResource_E3C0085A_F752_424B_41C7_0D7C3BA34915, null, null, null, null, false)",
   "mapColor": "#FF0000",
   "toolTip": "INFORMASI MENGENAI PERPUSTAKAAN"
  }
 ],
 "maps": [
  {
   "hfov": 14.14,
   "yaw": 4.22,
   "image": {
    "levels": [
     {
      "url": "media/panorama_DF60EDC1_D522_D596_41E5_9A31123BC0B0_0_HS_8_0_0_map.gif",
      "width": 34,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 9.86,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "items": [
  {
   "hfov": 14.14,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_DF60EDC1_D522_D596_41E5_9A31123BC0B0_0_HS_8_0.png",
      "width": 237,
      "height": 111,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 9.86,
   "yaw": 4.22,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_E23FEB65_ED41_8ADA_41EA_46AD016EC4E1",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "id": "viewer_uidB8CE083B_B665_5D44_41D2_36D8CD662285VideoPlayer",
 "viewerArea": "this.viewer_uidB8CE083B_B665_5D44_41D2_36D8CD662285",
 "displayPlaybackBar": true,
 "class": "VideoPlayer"
},
{
 "toolTipShadowBlurRadius": 3,
 "id": "viewer_uidB8DCE84B_B665_5DC4_41DA_992FD874F3E4",
 "toolTipOpacity": 1,
 "toolTipPaddingBottom": 4,
 "toolTipFontSize": "1.11vmin",
 "toolTipTextShadowColor": "#000000",
 "playbackBarHeadBorderRadius": 0,
 "playbackBarBorderSize": 0,
 "minHeight": 50,
 "playbackBarProgressOpacity": 1,
 "playbackBarHeadBorderColor": "#000000",
 "playbackBarBackgroundOpacity": 1,
 "shadow": false,
 "progressLeft": 0,
 "paddingBottom": 0,
 "width": "100%",
 "playbackBarHeadBorderSize": 0,
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarHeadShadowColor": "#000000",
 "toolTipTextShadowBlurRadius": 3,
 "toolTipShadowColor": "#333333",
 "toolTipFontWeight": "normal",
 "progressRight": 0,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "vrPointerSelectionTime": 2000,
 "progressOpacity": 1,
 "paddingRight": 0,
 "firstTransitionDuration": 0,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "borderSize": 0,
 "progressBottom": 2,
 "progressBackgroundOpacity": 1,
 "toolTipFontStyle": "normal",
 "height": "100%",
 "playbackBarOpacity": 1,
 "toolTipShadowOpacity": 1,
 "toolTipFontFamily": "Arial",
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "vrPointerColor": "#FFFFFF",
 "propagateClick": false,
 "progressHeight": 10,
 "toolTipShadowHorizontalLength": 0,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "toolTipTextShadowOpacity": 0,
 "playbackBarHeadShadowOpacity": 0.7,
 "progressBarOpacity": 1,
 "progressBorderSize": 0,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderRadius": 0,
 "toolTipShadowVerticalLength": 0,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "class": "ViewerArea",
 "toolTipFontColor": "#606060",
 "progressBackgroundColorRatios": [
  0
 ],
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarLeft": 0,
 "transitionDuration": 500,
 "displayTooltipInTouchScreens": true,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "playbackBarHeadHeight": 15,
 "toolTipBackgroundColor": "#F6F6F6",
 "progressBackgroundColorDirection": "vertical",
 "playbackBarBottom": 0,
 "transitionMode": "blending",
 "paddingTop": 0,
 "progressBorderColor": "#000000",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBarBorderColor": "#000000",
 "minWidth": 100,
 "playbackBarHeadOpacity": 1,
 "toolTipBorderSize": 1,
 "toolTipPaddingTop": 4,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipPaddingLeft": 6,
 "toolTipPaddingRight": 6,
 "paddingLeft": 0,
 "toolTipDisplayTime": 600,
 "playbackBarHeight": 10,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "borderRadius": 0,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarBackgroundColorDirection": "vertical",
 "playbackBarHeadWidth": 6,
 "playbackBarRight": 0,
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarHeadShadowVerticalLength": 0,
 "toolTipBorderRadius": 3,
 "progressBarBorderSize": 0,
 "playbackBarProgressBorderSize": 0,
 "toolTipBorderColor": "#767676",
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "toolTipShadowSpread": 0,
 "playbackBarBorderRadius": 0,
 "data": {
  "name": "ViewerArea2955"
 },
 "playbackBarProgressBorderColor": "#000000"
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_DF09300A_D522_2AAB_41C0_2217A91877F7, this.camera_A61AABAA_B665_5347_41CD_C4DFDD4A5A49); this.mainPlayList.set('selectedIndex', 22)",
   "mapColor": "#FF0000",
   "toolTip": "MENUJU JEMBATAN BALE TELAGA"
  }
 ],
 "maps": [
  {
   "hfov": 14.64,
   "yaw": -91.36,
   "image": {
    "levels": [
     {
      "url": "media/panorama_DF09605E_D522_6AAA_41E6_B94D5A810C57_1_HS_0_0_0_map.gif",
      "width": 26,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -21.04,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_FAC24352_EE5B_009B_41DB_38525F466747",
   "yaw": -91.36,
   "pitch": -21.04,
   "hfov": 14.64,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_CC734F2F_D708_1F3B_41C3_5A2B3FFC19DC",
 "data": {
  "label": "Circle Arrow 01a"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_DF60EDC1_D522_D596_41E5_9A31123BC0B0, this.camera_A6EACBB9_B665_5344_41DB_6A2B9FCDE9DA); this.mainPlayList.set('selectedIndex', 24)",
   "mapColor": "#FF0000",
   "toolTip": "MENUJU BALE PUBLIK"
  }
 ],
 "maps": [
  {
   "hfov": 13.15,
   "yaw": 0.1,
   "image": {
    "levels": [
     {
      "url": "media/panorama_DF09605E_D522_6AAA_41E6_B94D5A810C57_1_HS_1_0_0_map.gif",
      "width": 26,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -11.23,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_FAC1C352_EE5B_009B_41BD_4C6FE3078E52",
   "yaw": 0.1,
   "pitch": -11.23,
   "hfov": 13.15,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_CCC35A0F_D708_00FA_41E3_EB31BEE7A7F1",
 "data": {
  "label": "Circle Arrow 01a"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_DF091129_D522_6A96_41CB_A7A82D7D5CF4, this.camera_A60D2B8A_B665_5344_41C5_88FFF6EAC37A); this.mainPlayList.set('selectedIndex', 20)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 6.26,
   "yaw": 177.83,
   "image": {
    "levels": [
     {
      "url": "media/panorama_DF09605E_D522_6AAA_41E6_B94D5A810C57_1_HS_2_0_0_map.gif",
      "width": 29,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -10.69,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_FAC15353_EE5B_0099_41A4_68D737A40820",
   "yaw": 177.83,
   "pitch": -10.69,
   "hfov": 6.26,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_CB2D1A01_D708_00E6_41E0_8767EA42CA2C",
 "data": {
  "label": "Arrow 01c"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 26.36,
   "yaw": 152.56,
   "image": {
    "levels": [
     {
      "url": "media/panorama_DF09605E_D522_6AAA_41E6_B94D5A810C57_1_HS_4_0_0_map.gif",
      "width": 19,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -73.65,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "items": [
  {
   "hfov": 26.36,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_DF09605E_D522_6AAA_41E6_B94D5A810C57_1_HS_4_0.png",
      "width": 1547,
      "height": 1246,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -73.65,
   "yaw": 152.56,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_093BDD92_1B39_77B8_41B7_282D1296A620",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.showPopupPanoramaOverlay(this.popup_E7664036_F74E_41DA_41AF_D016E718C9C2, {'backgroundColorDirection':'vertical','paddingRight':5,'rollOverIconLineWidth':5,'pressedBackgroundOpacity':0.3,'pressedIconLineWidth':5,'pressedIconWidth':20,'borderSize':0,'paddingLeft':5,'rollOverIconColor':'#666666','iconWidth':20,'paddingBottom':5,'rollOverBackgroundOpacity':0.3,'pressedBorderColor':'#000000','rollOverBorderSize':0,'iconHeight':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'iconColor':'#000000','iconLineWidth':5,'rollOverIconWidth':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedBorderSize':0,'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000','rollOverIconHeight':20,'backgroundOpacity':0.3,'pressedIconHeight':20,'rollOverBackgroundColorDirection':'vertical','pressedIconColor':'#888888','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundColorDirection':'vertical'}, this.ImageResource_EF1B8955_F7B3_C25E_41E7_F1DA3839632D, null, null, null, null, false)",
   "mapColor": "#FF0000",
   "toolTip": "INFORMASI MENGENAI PAPAN INFORMASI"
  }
 ],
 "maps": [
  {
   "hfov": 9.59,
   "yaw": -133.78,
   "image": {
    "levels": [
     {
      "url": "media/panorama_DF09605E_D522_6AAA_41E6_B94D5A810C57_1_HS_5_0_0_map.gif",
      "width": 19,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.99,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "items": [
  {
   "hfov": 9.59,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_DF09605E_D522_6AAA_41E6_B94D5A810C57_1_HS_5_0.png",
      "width": 158,
      "height": 127,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.99,
   "yaw": -133.78,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_E2E4BD34_ED7F_8EBB_41E6_B754909D0481",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.showPopupPanoramaOverlay(this.popup_E7FF0CC9_F74E_42B6_41DC_67E697300E53, {'backgroundColorDirection':'vertical','paddingRight':5,'rollOverIconLineWidth':5,'pressedBackgroundOpacity':0.3,'pressedIconLineWidth':5,'pressedIconWidth':20,'borderSize':0,'paddingLeft':5,'rollOverIconColor':'#666666','iconWidth':20,'paddingBottom':5,'rollOverBackgroundOpacity':0.3,'pressedBorderColor':'#000000','rollOverBorderSize':0,'iconHeight':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'iconColor':'#000000','iconLineWidth':5,'rollOverIconWidth':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedBorderSize':0,'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000','rollOverIconHeight':20,'backgroundOpacity':0.3,'pressedIconHeight':20,'rollOverBackgroundColorDirection':'vertical','pressedIconColor':'#888888','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundColorDirection':'vertical'}, this.ImageResource_EF1AB965_F7B3_C27E_41C8_054514C5258E, null, null, null, null, false)",
   "mapColor": "#FF0000",
   "toolTip": "INFORMASI MENGENAI TEMPAT DUDUK"
  }
 ],
 "maps": [
  {
   "hfov": 10.88,
   "yaw": 92,
   "image": {
    "levels": [
     {
      "url": "media/panorama_DF09605E_D522_6AAA_41E6_B94D5A810C57_1_HS_6_0_0_map.gif",
      "width": 28,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -28.39,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "items": [
  {
   "hfov": 10.88,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_DF09605E_D522_6AAA_41E6_B94D5A810C57_1_HS_6_0.png",
      "width": 204,
      "height": 115,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -28.39,
   "yaw": 92,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_E2DE39D3_ED7E_89FE_41E2_7E23E8EB7971",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.showPopupPanoramaOverlay(this.popup_E7C79148_F772_43B6_4172_B914AA9689FA, {'backgroundColorDirection':'vertical','paddingRight':5,'rollOverIconLineWidth':5,'pressedBackgroundOpacity':0.3,'pressedIconLineWidth':5,'pressedIconWidth':20,'borderSize':0,'paddingLeft':5,'rollOverIconColor':'#666666','iconWidth':20,'paddingBottom':5,'rollOverBackgroundOpacity':0.3,'pressedBorderColor':'#000000','rollOverBorderSize':0,'iconHeight':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'iconColor':'#000000','iconLineWidth':5,'rollOverIconWidth':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedBorderSize':0,'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000','rollOverIconHeight':20,'backgroundOpacity':0.3,'pressedIconHeight':20,'rollOverBackgroundColorDirection':'vertical','pressedIconColor':'#888888','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundColorDirection':'vertical'}, this.ImageResource_EF25E965_F7B3_C27E_41DE_B8337C4B446F, null, null, null, null, false)",
   "mapColor": "#FF0000",
   "toolTip": "INFORMASI MENGENAI BALE KEMBAR"
  }
 ],
 "maps": [
  {
   "hfov": 8.28,
   "yaw": -11.11,
   "image": {
    "levels": [
     {
      "url": "media/panorama_DF09605E_D522_6AAA_41E6_B94D5A810C57_1_HS_7_0_0_map.gif",
      "width": 41,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 5.84,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "items": [
  {
   "hfov": 8.28,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_DF09605E_D522_6AAA_41E6_B94D5A810C57_1_HS_7_0.png",
      "width": 137,
      "height": 53,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 5.84,
   "yaw": -11.11,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_E2EE1C0B_ED41_8E6E_41D9_788CC38EABAA",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.showPopupPanoramaOverlay(this.popup_E3EBFFF2_F77F_DE5B_41EB_5F32E610EEEE, {'backgroundColorDirection':'vertical','paddingRight':5,'rollOverIconLineWidth':5,'pressedBackgroundOpacity':0.3,'pressedIconLineWidth':5,'pressedIconWidth':20,'borderSize':0,'paddingLeft':5,'rollOverIconColor':'#666666','iconWidth':20,'paddingBottom':5,'rollOverBackgroundOpacity':0.3,'pressedBorderColor':'#000000','rollOverBorderSize':0,'iconHeight':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'iconColor':'#000000','iconLineWidth':5,'rollOverIconWidth':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedBorderSize':0,'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000','rollOverIconHeight':20,'backgroundOpacity':0.3,'pressedIconHeight':20,'rollOverBackgroundColorDirection':'vertical','pressedIconColor':'#888888','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundColorDirection':'vertical'}, this.ImageResource_E3D9F84B_F752_424A_41E5_B885894131DD, null, null, null, null, false)",
   "mapColor": "#FF0000",
   "toolTip": "INFORMASI MENGENAI PERPUSTAKAAN"
  }
 ],
 "maps": [
  {
   "hfov": 3.88,
   "yaw": 2.56,
   "image": {
    "levels": [
     {
      "url": "media/panorama_DF09605E_D522_6AAA_41E6_B94D5A810C57_0_HS_8_0_0_map.gif",
      "width": 24,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 5.11,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "items": [
  {
   "hfov": 3.88,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_DF09605E_D522_6AAA_41E6_B94D5A810C57_0_HS_8_0.png",
      "width": 64,
      "height": 42,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 5.11,
   "yaw": 2.56,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_E2E3EE69_ED41_8AAA_41E4_CAAB39D66209",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "toolTipShadowBlurRadius": 3,
 "id": "viewer_uidB8A6184B_B665_5DC4_41E2_376DF56773FE",
 "toolTipOpacity": 1,
 "toolTipPaddingBottom": 4,
 "toolTipFontSize": "1.11vmin",
 "toolTipTextShadowColor": "#000000",
 "playbackBarHeadBorderRadius": 0,
 "playbackBarBorderSize": 0,
 "minHeight": 50,
 "playbackBarProgressOpacity": 1,
 "playbackBarHeadBorderColor": "#000000",
 "playbackBarBackgroundOpacity": 1,
 "shadow": false,
 "progressLeft": 0,
 "paddingBottom": 0,
 "width": "100%",
 "playbackBarHeadBorderSize": 0,
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarHeadShadowColor": "#000000",
 "toolTipTextShadowBlurRadius": 3,
 "toolTipShadowColor": "#333333",
 "toolTipFontWeight": "normal",
 "progressRight": 0,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "vrPointerSelectionTime": 2000,
 "progressOpacity": 1,
 "paddingRight": 0,
 "firstTransitionDuration": 0,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "borderSize": 0,
 "progressBottom": 2,
 "progressBackgroundOpacity": 1,
 "toolTipFontStyle": "normal",
 "height": "100%",
 "playbackBarOpacity": 1,
 "toolTipShadowOpacity": 1,
 "toolTipFontFamily": "Arial",
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "vrPointerColor": "#FFFFFF",
 "propagateClick": false,
 "progressHeight": 10,
 "toolTipShadowHorizontalLength": 0,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "toolTipTextShadowOpacity": 0,
 "playbackBarHeadShadowOpacity": 0.7,
 "progressBarOpacity": 1,
 "progressBorderSize": 0,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderRadius": 0,
 "toolTipShadowVerticalLength": 0,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "class": "ViewerArea",
 "toolTipFontColor": "#606060",
 "progressBackgroundColorRatios": [
  0
 ],
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarLeft": 0,
 "transitionDuration": 500,
 "displayTooltipInTouchScreens": true,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "playbackBarHeadHeight": 15,
 "toolTipBackgroundColor": "#F6F6F6",
 "progressBackgroundColorDirection": "vertical",
 "playbackBarBottom": 0,
 "transitionMode": "blending",
 "paddingTop": 0,
 "progressBorderColor": "#000000",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBarBorderColor": "#000000",
 "minWidth": 100,
 "playbackBarHeadOpacity": 1,
 "toolTipBorderSize": 1,
 "toolTipPaddingTop": 4,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipPaddingLeft": 6,
 "toolTipPaddingRight": 6,
 "paddingLeft": 0,
 "toolTipDisplayTime": 600,
 "playbackBarHeight": 10,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "borderRadius": 0,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarBackgroundColorDirection": "vertical",
 "playbackBarHeadWidth": 6,
 "playbackBarRight": 0,
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarHeadShadowVerticalLength": 0,
 "toolTipBorderRadius": 3,
 "progressBarBorderSize": 0,
 "playbackBarProgressBorderSize": 0,
 "toolTipBorderColor": "#767676",
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "toolTipShadowSpread": 0,
 "playbackBarBorderRadius": 0,
 "data": {
  "name": "ViewerArea2957"
 },
 "playbackBarProgressBorderColor": "#000000"
},
{
 "id": "viewer_uidB8DC984B_B665_5DC4_41BA_9F6A0AACB90EVideoPlayer",
 "viewerArea": "this.viewer_uidB8DC984B_B665_5DC4_41BA_9F6A0AACB90E",
 "displayPlaybackBar": true,
 "class": "VideoPlayer"
},
{
 "id": "viewer_uidB8DCE84B_B665_5DC4_41DA_992FD874F3E4VideoPlayer",
 "viewerArea": "this.viewer_uidB8DCE84B_B665_5DC4_41DA_992FD874F3E4",
 "displayPlaybackBar": true,
 "class": "VideoPlayer"
},
{
 "class": "HTMLText",
 "id": "htmlText_F81B9E36_F7F6_41DA_41D5_E3403B9A9408",
 "scrollBarOpacity": 0.5,
 "paddingBottom": 10,
 "minHeight": 0,
 "shadow": false,
 "paddingTop": 10,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "minWidth": 0,
 "backgroundOpacity": 0,
 "width": "100%",
 "paddingLeft": 10,
 "paddingRight": 10,
 "borderSize": 0,
 "borderRadius": 0,
 "height": "10%",
 "propagateClick": false,
 "scrollBarMargin": 2,
 "html": "<div style=\"text-align:left; color:#000; \"><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p></div>",
 "data": {
  "name": "HTMLText21833"
 },
 "scrollBarWidth": 10
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_DF08F593_D523_F5BA_41E5_3AAEBE3AF892, this.camera_B9293E3D_B665_55BC_41DC_1D4B37567BE0); this.mainPlayList.set('selectedIndex', 16)",
   "mapColor": "#FF0000",
   "toolTip": "LORONG GALERI"
  }
 ],
 "maps": [
  {
   "hfov": 9.54,
   "yaw": -73.02,
   "image": {
    "levels": [
     {
      "url": "media/panorama_DF08E4A2_D523_EB9A_41E5_F673F160A0A8_1_HS_1_0_0_map.gif",
      "width": 29,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -16.13,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_FACD6350_EE5B_0097_41ED_442536FBA448",
   "yaw": -73.02,
   "pitch": -16.13,
   "hfov": 9.54,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_C51B1B94_D718_07EE_41E5_BF17948B40FF",
 "data": {
  "label": "Arrow 01c"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_DF093389_D522_2D96_418B_B49E63F3C24E, this.camera_B9356E5D_B665_55FD_41D5_12A4E3EF061D); this.mainPlayList.set('selectedIndex', 18)",
   "mapColor": "#FF0000",
   "toolTip": "LORONG GALERI"
  }
 ],
 "maps": [
  {
   "hfov": 17.82,
   "yaw": 18.23,
   "image": {
    "levels": [
     {
      "url": "media/panorama_DF08E4A2_D523_EB9A_41E5_F673F160A0A8_1_HS_2_0_0_map.gif",
      "width": 26,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -14.96,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_FACC9350_EE5B_0097_41AF_71DC14199720",
   "yaw": 18.23,
   "pitch": -14.96,
   "hfov": 17.82,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_E83FF66D_E7BB_3F8E_41BA_9FF899D524F7",
 "data": {
  "label": "Circle Arrow 01a"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 49.31,
   "yaw": 129.21,
   "image": {
    "levels": [
     {
      "url": "media/panorama_DF08E4A2_D523_EB9A_41E5_F673F160A0A8_1_HS_5_0_0_map.gif",
      "width": 25,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -69.25,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "items": [
  {
   "hfov": 49.31,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_DF08E4A2_D523_EB9A_41E5_F673F160A0A8_1_HS_5_0.png",
      "width": 2048,
      "height": 1293,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -69.25,
   "yaw": 129.21,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_090197B7_1B3B_B3E7_41B3_6795EA5EB489",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "toolTipShadowBlurRadius": 3,
 "id": "viewer_uidB8AE685B_B665_5DC5_41BB_306851C7AC05",
 "toolTipOpacity": 1,
 "toolTipPaddingBottom": 4,
 "toolTipFontSize": "1.11vmin",
 "toolTipTextShadowColor": "#000000",
 "playbackBarHeadBorderRadius": 0,
 "playbackBarBorderSize": 0,
 "minHeight": 50,
 "playbackBarProgressOpacity": 1,
 "playbackBarHeadBorderColor": "#000000",
 "playbackBarBackgroundOpacity": 1,
 "shadow": false,
 "progressLeft": 0,
 "paddingBottom": 0,
 "width": "100%",
 "playbackBarHeadBorderSize": 0,
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarHeadShadowColor": "#000000",
 "toolTipTextShadowBlurRadius": 3,
 "toolTipShadowColor": "#333333",
 "toolTipFontWeight": "normal",
 "progressRight": 0,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "vrPointerSelectionTime": 2000,
 "progressOpacity": 1,
 "paddingRight": 0,
 "firstTransitionDuration": 0,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "borderSize": 0,
 "progressBottom": 2,
 "progressBackgroundOpacity": 1,
 "toolTipFontStyle": "normal",
 "height": "100%",
 "playbackBarOpacity": 1,
 "toolTipShadowOpacity": 1,
 "toolTipFontFamily": "Arial",
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "vrPointerColor": "#FFFFFF",
 "propagateClick": false,
 "progressHeight": 10,
 "toolTipShadowHorizontalLength": 0,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "toolTipTextShadowOpacity": 0,
 "playbackBarHeadShadowOpacity": 0.7,
 "progressBarOpacity": 1,
 "progressBorderSize": 0,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderRadius": 0,
 "toolTipShadowVerticalLength": 0,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "class": "ViewerArea",
 "toolTipFontColor": "#606060",
 "progressBackgroundColorRatios": [
  0
 ],
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarLeft": 0,
 "transitionDuration": 500,
 "displayTooltipInTouchScreens": true,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "playbackBarHeadHeight": 15,
 "toolTipBackgroundColor": "#F6F6F6",
 "progressBackgroundColorDirection": "vertical",
 "playbackBarBottom": 0,
 "transitionMode": "blending",
 "paddingTop": 0,
 "progressBorderColor": "#000000",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBarBorderColor": "#000000",
 "minWidth": 100,
 "playbackBarHeadOpacity": 1,
 "toolTipBorderSize": 1,
 "toolTipPaddingTop": 4,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipPaddingLeft": 6,
 "toolTipPaddingRight": 6,
 "paddingLeft": 0,
 "toolTipDisplayTime": 600,
 "playbackBarHeight": 10,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "borderRadius": 0,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarBackgroundColorDirection": "vertical",
 "playbackBarHeadWidth": 6,
 "playbackBarRight": 0,
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarHeadShadowVerticalLength": 0,
 "toolTipBorderRadius": 3,
 "progressBarBorderSize": 0,
 "playbackBarProgressBorderSize": 0,
 "toolTipBorderColor": "#767676",
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "toolTipShadowSpread": 0,
 "playbackBarBorderRadius": 0,
 "data": {
  "name": "ViewerArea2959"
 },
 "playbackBarProgressBorderColor": "#000000"
},
{
 "id": "viewer_uidB8ABE85B_B665_5DC5_41C3_11AFB37BB933VideoPlayer",
 "viewerArea": "this.viewer_uidB8ABE85B_B665_5DC5_41C3_11AFB37BB933",
 "displayPlaybackBar": true,
 "class": "VideoPlayer"
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_DF0AF60D_D522_76A9_41E3_6D08C1C16B94, this.camera_A6D82C08_B665_5544_41C4_A95F833B423A); this.mainPlayList.set('selectedIndex', 4)",
   "mapColor": "#FF0000",
   "toolTip": "MENUJU AREA MASKERDAM"
  }
 ],
 "maps": [
  {
   "hfov": 19.01,
   "yaw": -76.79,
   "image": {
    "levels": [
     {
      "url": "media/panorama_DF0968AD_D521_DBEE_41E8_53FAFFC84B8C_1_HS_4_0_0_map.gif",
      "width": 37,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -9.41,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_FA24233D_EE5B_0088_41EB_E3FA2DD030E4",
   "yaw": -76.79,
   "pitch": -9.41,
   "hfov": 19.01,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_C1D65ADE_D708_011A_41E3_BD7F59845478",
 "data": {
  "label": "Circle Arrow 01b"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_DF091129_D522_6A96_41CB_A7A82D7D5CF4, this.camera_A6C87BF8_B665_52C4_41C6_7B3280E9879F); this.mainPlayList.set('selectedIndex', 20)",
   "mapColor": "#FF0000",
   "toolTip": "MENUJU BALE TELAGA"
  }
 ],
 "maps": [
  {
   "hfov": 11.03,
   "yaw": 50.07,
   "image": {
    "levels": [
     {
      "url": "media/panorama_DF0968AD_D521_DBEE_41E8_53FAFFC84B8C_1_HS_5_0_0_map.gif",
      "width": 37,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -23.75,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_FA24433D_EE5B_0088_41ED_72DF47F688B8",
   "yaw": 50.07,
   "pitch": -23.75,
   "hfov": 11.03,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_C0320918_D708_00E5_41DC_F4B3AB0B96C4",
 "data": {
  "label": "Circle Arrow 01b Left-Up"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_DF095A4F_D521_DEAA_41E5_B09830FCA2B6, this.camera_A6FADBD9_B665_52C5_41DC_28AAD08D3390); this.mainPlayList.set('selectedIndex', 2)",
   "mapColor": "#FF0000",
   "toolTip": "MENUJU TEMPAT PENERIMAAN TAMU"
  }
 ],
 "maps": [
  {
   "hfov": 6.06,
   "yaw": -168.54,
   "image": {
    "levels": [
     {
      "url": "media/panorama_DF0968AD_D521_DBEE_41E8_53FAFFC84B8C_1_HS_6_0_0_map.gif",
      "width": 29,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -10.39,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_FA3BE33E_EE5B_0088_41E8_76BC930F2C39",
   "yaw": -168.54,
   "pitch": -10.39,
   "hfov": 6.06,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_C05058D1_D708_0166_41BF_D0CB82EE610B",
 "data": {
  "label": "Arrow 01c"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "if(this.isCardboardViewMode()) { this.showPopupPanoramaVideoOverlay(this.popup_238F96F2_12FC_DA7A_4187_0483B970626B, {'backgroundColorDirection':'vertical','paddingRight':5,'rollOverIconLineWidth':5,'pressedBackgroundOpacity':0.3,'pressedIconLineWidth':5,'pressedIconWidth':20,'borderSize':0,'paddingLeft':5,'rollOverIconColor':'#666666','iconWidth':20,'paddingBottom':5,'rollOverBackgroundOpacity':0.3,'pressedBorderColor':'#000000','rollOverBorderSize':0,'iconHeight':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'iconColor':'#000000','iconLineWidth':5,'rollOverIconWidth':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedBorderSize':0,'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000','rollOverIconHeight':20,'backgroundOpacity':0.3,'pressedIconHeight':20,'rollOverBackgroundColorDirection':'vertical','pressedIconColor':'#888888','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundColorDirection':'vertical'}, true) } else { this.showPopupMedia(this.window_BCF20CB4_B65D_354C_41E2_FCD94E85C249, this.video_22D7311F_12FF_37A9_41A0_72053C56BDC0, this.PlayList_B96AD899_B665_5D44_4193_6A5DBB15E867, '50%', '50%', true, true) }",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 7.64,
   "yaw": 23.83,
   "image": {
    "levels": [
     {
      "url": "media/panorama_DF0968AD_D521_DBEE_41E8_53FAFFC84B8C_1_HS_10_0_0_map.gif",
      "width": 33,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -32.57,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "items": [
  {
   "hfov": 7.64,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_DF0968AD_D521_DBEE_41E8_53FAFFC84B8C_1_HS_10_0.png",
      "width": 149,
      "height": 71,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -32.57,
   "yaw": 23.83,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_23DE6D2E_12FD_2FEB_4175_E4E2377C4A7E",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "if(this.isCardboardViewMode()) { this.showPopupPanoramaVideoOverlay(this.popup_235F54A4_12FF_DE9E_41A4_6F2D44E76287, {'backgroundColorDirection':'vertical','paddingRight':5,'rollOverIconLineWidth':5,'pressedBackgroundOpacity':0.3,'pressedIconLineWidth':5,'pressedIconWidth':20,'borderSize':0,'paddingLeft':5,'rollOverIconColor':'#666666','iconWidth':20,'paddingBottom':5,'rollOverBackgroundOpacity':0.3,'pressedBorderColor':'#000000','rollOverBorderSize':0,'iconHeight':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'iconColor':'#000000','iconLineWidth':5,'rollOverIconWidth':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedBorderSize':0,'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000','rollOverIconHeight':20,'backgroundOpacity':0.3,'pressedIconHeight':20,'rollOverBackgroundColorDirection':'vertical','pressedIconColor':'#888888','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundColorDirection':'vertical'}, true) } else { this.showPopupMedia(this.window_BCF2DCB5_B65D_354C_41D7_80D40E37CD77, this.video_2303E0B1_12FF_56F6_41B2_B996127200EB, this.PlayList_B96A5899_B665_5D44_41E3_354086DDCDE5, '50%', '50%', true, true) }",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 4.41,
   "yaw": -77.32,
   "image": {
    "levels": [
     {
      "url": "media/panorama_DF0968AD_D521_DBEE_41E8_53FAFFC84B8C_1_HS_11_0_0_map.gif",
      "width": 17,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 16.96,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "items": [
  {
   "hfov": 4.41,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_DF0968AD_D521_DBEE_41E8_53FAFFC84B8C_1_HS_11_0.png",
      "width": 76,
      "height": 68,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 16.96,
   "yaw": -77.32,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_3C654651_12FD_DDB9_41B3_2AE15FDCC56F",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 19.5,
   "yaw": 160.23,
   "image": {
    "levels": [
     {
      "url": "media/panorama_DF0968AD_D521_DBEE_41E8_53FAFFC84B8C_1_HS_12_0_0_map.gif",
      "width": 19,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -73.08,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "items": [
  {
   "hfov": 19.5,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_DF0968AD_D521_DBEE_41E8_53FAFFC84B8C_1_HS_12_0.png",
      "width": 1107,
      "height": 922,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -73.08,
   "yaw": 160.23,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_0AF014A7_1B38_D598_4179_395D1A3288B1",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.showPopupPanoramaOverlay(this.popup_F92AE07E_F693_D3B9_41DA_7C9023FAE273, {'backgroundColorDirection':'vertical','paddingRight':5,'rollOverIconLineWidth':5,'pressedBackgroundOpacity':0.3,'pressedIconLineWidth':5,'pressedIconWidth':20,'borderSize':0,'paddingLeft':5,'rollOverIconColor':'#666666','iconWidth':20,'paddingBottom':5,'rollOverBackgroundOpacity':0.3,'pressedBorderColor':'#000000','rollOverBorderSize':0,'iconHeight':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'iconColor':'#000000','iconLineWidth':5,'rollOverIconWidth':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedBorderSize':0,'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000','rollOverIconHeight':20,'backgroundOpacity':0.3,'pressedIconHeight':20,'rollOverBackgroundColorDirection':'vertical','pressedIconColor':'#888888','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundColorDirection':'vertical'}, this.ImageResource_F8CD65B2_F751_C2DA_41BA_5484C10A270E, null, null, null, null, false)",
   "mapColor": "#FF0000",
   "toolTip": "INFORMASI MENGENAI PRASTASTI PURI AGUNG KARANGASEM"
  }
 ],
 "maps": [
  {
   "hfov": 8.63,
   "yaw": -20.34,
   "image": {
    "levels": [
     {
      "url": "media/panorama_DF0968AD_D521_DBEE_41E8_53FAFFC84B8C_1_HS_13_0_0_map.gif",
      "width": 42,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -28.54,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "items": [
  {
   "hfov": 8.63,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_DF0968AD_D521_DBEE_41E8_53FAFFC84B8C_1_HS_13_0.png",
      "width": 162,
      "height": 61,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -28.54,
   "yaw": -20.34,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_E3E94AE7_ED42_8BA6_41E0_DBFB68D378DE",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_DF0AF60D_D522_76A9_41E3_6D08C1C16B94, this.camera_B9EA2965_B665_5FCC_41E0_3BBFE2894E7C); this.mainPlayList.set('selectedIndex', 4)",
   "mapColor": "#FF0000",
   "toolTip": "MENUJU AREA MASKERDAM"
  }
 ],
 "maps": [
  {
   "hfov": 11.31,
   "yaw": -151.85,
   "image": {
    "levels": [
     {
      "url": "media/panorama_DF0AD51E_D522_6AAB_41E0_02491679C908_1_HS_1_0_0_map.gif",
      "width": 29,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -30.35,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_FA330345_EE5B_00F8_41C0_483477969508",
   "yaw": -151.85,
   "pitch": -30.35,
   "hfov": 11.31,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_C177FC17_D738_00EA_41DC_40D41D42EA3C",
 "data": {
  "label": "Arrow 01c"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 35.55,
   "yaw": 149.59,
   "image": {
    "levels": [
     {
      "url": "media/panorama_DF0AD51E_D522_6AAB_41E0_02491679C908_1_HS_3_0_0_map.gif",
      "width": 20,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -62.87,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "items": [
  {
   "hfov": 35.55,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_DF0AD51E_D522_6AAB_41E0_02491679C908_1_HS_3_0.png",
      "width": 1289,
      "height": 1021,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -62.87,
   "yaw": 149.59,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_0908E1DB_1B39_CFA8_41BA_3A37B6AE58BA",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.showPopupPanoramaOverlay(this.popup_F88BAF52_F753_DE5A_41EB_9180A476FA94, {'backgroundColorDirection':'vertical','paddingRight':5,'rollOverIconLineWidth':5,'pressedBackgroundOpacity':0.3,'pressedIconLineWidth':5,'pressedIconWidth':20,'borderSize':0,'paddingLeft':5,'rollOverIconColor':'#666666','iconWidth':20,'paddingBottom':5,'rollOverBackgroundOpacity':0.3,'pressedBorderColor':'#000000','rollOverBorderSize':0,'iconHeight':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'iconColor':'#000000','iconLineWidth':5,'rollOverIconWidth':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedBorderSize':0,'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000','rollOverIconHeight':20,'backgroundOpacity':0.3,'pressedIconHeight':20,'rollOverBackgroundColorDirection':'vertical','pressedIconColor':'#888888','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundColorDirection':'vertical'}, this.ImageResource_EF799916_F7B3_C3DA_41E9_1BEC9074CC27, null, null, null, null, false)",
   "mapColor": "#FF0000",
   "toolTip": "INFORMASI MENGENAI BALE PAWEDAAN"
  }
 ],
 "maps": [
  {
   "hfov": 13.27,
   "yaw": 31.86,
   "image": {
    "levels": [
     {
      "url": "media/panorama_DF0AD51E_D522_6AAB_41E0_02491679C908_1_HS_4_0_0_map.gif",
      "width": 39,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 15.59,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "items": [
  {
   "hfov": 13.27,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_DF0AD51E_D522_6AAB_41E0_02491679C908_1_HS_4_0.png",
      "width": 227,
      "height": 92,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 15.59,
   "yaw": 31.86,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_E2191FB8_ED5F_89AB_41BE_E2E22A7C9E5C",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_DF095ADC_D526_3FAE_41E8_221CDD95ABD4, this.camera_B9B2BF77_B665_53CC_41E5_3447E551B687); this.mainPlayList.set('selectedIndex', 1)",
   "mapColor": "#FF0000",
   "toolTip": "MENUJU JABE TENGAH"
  }
 ],
 "maps": [
  {
   "hfov": 9.83,
   "yaw": 94.83,
   "image": {
    "levels": [
     {
      "url": "media/panorama_DF095A4F_D521_DEAA_41E5_B09830FCA2B6_1_HS_4_0_0_map.gif",
      "width": 29,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -17.99,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_FA26433C_EE5B_008F_41E2_F6A448D7DDB0",
   "yaw": 94.83,
   "pitch": -17.99,
   "hfov": 9.83,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_CF23B11E_D708_031A_41C6_E9E48FE96046",
 "data": {
  "label": "Arrow 01c"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_DF0968AD_D521_DBEE_41E8_53FAFFC84B8C, this.camera_B9A4BF58_B665_53C3_41D1_16B0DD0A4F24); this.mainPlayList.set('selectedIndex', 3)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 10.7,
   "yaw": 2.15,
   "image": {
    "levels": [
     {
      "url": "media/panorama_DF095A4F_D521_DEAA_41E5_B09830FCA2B6_1_HS_5_0_0_map.gif",
      "width": 37,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -8.19,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_FA25D33D_EE5B_0089_41C4_4AEEB3D151BF",
   "yaw": 2.15,
   "pitch": -8.19,
   "hfov": 10.7,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_CFA80D37_D708_032A_41CC_787435A701A3",
 "data": {
  "label": "Circle Arrow 01b"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "toolTip": "DiLarang Masuk"
  }
 ],
 "maps": [
  {
   "hfov": 5.84,
   "yaw": -171.57,
   "image": {
    "levels": [
     {
      "url": "media/panorama_DF095A4F_D521_DEAA_41E5_B09830FCA2B6_1_HS_6_0_0_map.gif",
      "width": 27,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -14.23,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_FA25133D_EE5B_0088_41E9_E7464B85DF2B",
   "yaw": -171.57,
   "pitch": -14.23,
   "hfov": 5.84,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_CF81971C_D718_0F1E_41E0_AD2B7AC37929",
 "data": {
  "label": "Arrow 07a"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 19.49,
   "yaw": 164.83,
   "image": {
    "levels": [
     {
      "url": "media/panorama_DF095A4F_D521_DEAA_41E5_B09830FCA2B6_1_HS_10_0_0_map.gif",
      "width": 17,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -69.94,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "items": [
  {
   "hfov": 19.49,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_DF095A4F_D521_DEAA_41E5_B09830FCA2B6_1_HS_10_0.png",
      "width": 939,
      "height": 840,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -69.94,
   "yaw": 164.83,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_0AAA945A_1B39_74A8_4191_F33AB27689EF",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.showPopupPanoramaOverlay(this.popup_F9C15111_F695_554A_41E5_D6CD11486A17, {'backgroundColorDirection':'vertical','paddingRight':5,'rollOverIconLineWidth':5,'pressedBackgroundOpacity':0.3,'pressedIconLineWidth':5,'pressedIconWidth':20,'borderSize':0,'paddingLeft':5,'rollOverIconColor':'#666666','iconWidth':20,'paddingBottom':5,'rollOverBackgroundOpacity':0.3,'pressedBorderColor':'#000000','rollOverBorderSize':0,'iconHeight':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'iconColor':'#000000','iconLineWidth':5,'rollOverIconWidth':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedBorderSize':0,'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000','rollOverIconHeight':20,'backgroundOpacity':0.3,'pressedIconHeight':20,'rollOverBackgroundColorDirection':'vertical','pressedIconColor':'#888888','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundColorDirection':'vertical'}, this.ImageResource_F8C575B2_F751_C2DA_4194_5980BD2D8334, null, null, null, null, false)",
   "mapColor": "#FF0000",
   "toolTip": "INFORMASI MENGENAI TEMPAT PENERIMAAN TAMU"
  }
 ],
 "maps": [
  {
   "hfov": 7.61,
   "yaw": -73.72,
   "image": {
    "levels": [
     {
      "url": "media/panorama_DF095A4F_D521_DEAA_41E5_B09830FCA2B6_1_HS_11_0_0_map.gif",
      "width": 18,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -6.36,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "items": [
  {
   "hfov": 7.61,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_DF095A4F_D521_DEAA_41E5_B09830FCA2B6_1_HS_11_0.png",
      "width": 126,
      "height": 110,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -6.36,
   "yaw": -73.72,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_FD5CA70E_ED41_BA67_41CA_50953D279C8C",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.showPopupPanoramaOverlay(this.popup_F9561C50_F694_B3C9_41E9_AA168EBE6368, {'backgroundColorDirection':'vertical','paddingRight':5,'rollOverIconLineWidth':5,'pressedBackgroundOpacity':0.3,'pressedIconLineWidth':5,'pressedIconWidth':20,'borderSize':0,'paddingLeft':5,'rollOverIconColor':'#666666','iconWidth':20,'paddingBottom':5,'rollOverBackgroundOpacity':0.3,'pressedBorderColor':'#000000','rollOverBorderSize':0,'iconHeight':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'iconColor':'#000000','iconLineWidth':5,'rollOverIconWidth':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedBorderSize':0,'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000','rollOverIconHeight':20,'backgroundOpacity':0.3,'pressedIconHeight':20,'rollOverBackgroundColorDirection':'vertical','pressedIconColor':'#888888','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundColorDirection':'vertical'}, this.ImageResource_F8C655B2_F751_C2DA_41E4_845E0876FA35, null, null, null, null, false)",
   "mapColor": "#FF0000",
   "toolTip": "INFORMASI MENGENAI PURI LONDON"
  }
 ],
 "maps": [
  {
   "hfov": 3.8,
   "yaw": -172.73,
   "image": {
    "levels": [
     {
      "url": "media/panorama_DF095A4F_D521_DEAA_41E5_B09830FCA2B6_1_HS_12_0_0_map.gif",
      "width": 16,
      "height": 20,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.18,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "items": [
  {
   "hfov": 3.8,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_DF095A4F_D521_DEAA_41E5_B09830FCA2B6_1_HS_12_0.png",
      "width": 62,
      "height": 78,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.18,
   "yaw": -172.73,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_E277D69C_ED46_FA6B_41BB_ACA98AE91990",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.showPopupPanoramaOverlay(this.popup_07F8080A_1441_7E32_41B1_C0F25726E064, {'backgroundColorDirection':'vertical','paddingRight':5,'rollOverIconLineWidth':5,'pressedBackgroundOpacity':0.3,'pressedIconLineWidth':5,'pressedIconWidth':20,'borderSize':0,'paddingLeft':5,'rollOverIconColor':'#666666','iconWidth':20,'paddingBottom':5,'rollOverBackgroundOpacity':0.3,'pressedBorderColor':'#000000','rollOverBorderSize':0,'iconHeight':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'iconColor':'#000000','iconLineWidth':5,'rollOverIconWidth':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedBorderSize':0,'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000','rollOverIconHeight':20,'backgroundOpacity':0.3,'pressedIconHeight':20,'rollOverBackgroundColorDirection':'vertical','pressedIconColor':'#888888','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundColorDirection':'vertical'}, this.ImageResource_0731D91F_1441_BE52_41A1_8273CB3EFC30, null, null, null, null, false)",
   "mapColor": "#FF0000",
   "toolTip": "INFORMASI MENGENAI TEMPAT PENERIMAAN TAMU"
  }
 ],
 "maps": [
  {
   "hfov": 2.44,
   "yaw": 2.52,
   "image": {
    "levels": [
     {
      "url": "media/panorama_DF095A4F_D521_DEAA_41E5_B09830FCA2B6_0_HS_13_0_0_map.gif",
      "width": 30,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.52,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "items": [
  {
   "hfov": 2.44,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_DF095A4F_D521_DEAA_41E5_B09830FCA2B6_0_HS_13_0.png",
      "width": 40,
      "height": 21,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.52,
   "yaw": 2.52,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_0556E6F9_1440_93DE_41A4_94E1FF9016B8",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.showPopupPanoramaOverlay(this.popup_0439CC12_1441_9652_41AB_D3FBB769D261, {'backgroundColorDirection':'vertical','paddingRight':5,'rollOverIconLineWidth':5,'pressedBackgroundOpacity':0.3,'pressedIconLineWidth':5,'pressedIconWidth':20,'borderSize':0,'paddingLeft':5,'rollOverIconColor':'#666666','iconWidth':20,'paddingBottom':5,'rollOverBackgroundOpacity':0.3,'pressedBorderColor':'#000000','rollOverBorderSize':0,'iconHeight':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'iconColor':'#000000','iconLineWidth':5,'rollOverIconWidth':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedBorderSize':0,'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000','rollOverIconHeight':20,'backgroundOpacity':0.3,'pressedIconHeight':20,'rollOverBackgroundColorDirection':'vertical','pressedIconColor':'#888888','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundColorDirection':'vertical'}, this.ImageResource_0439DC12_1441_9652_41AB_676FE76664A0, null, null, null, null, false)",
   "mapColor": "#FF0000",
   "toolTip": "INFORMASI MENGENAI TEMPAT PENERIMAAN TAMU"
  }
 ],
 "maps": [
  {
   "hfov": 7.61,
   "yaw": -73.72,
   "image": {
    "levels": [
     {
      "url": "media/panorama_DF095A4F_D521_DEAA_41E5_B09830FCA2B6_0_HS_14_0_0_map.gif",
      "width": 18,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -6.36,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "items": [
  {
   "hfov": 7.61,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_DF095A4F_D521_DEAA_41E5_B09830FCA2B6_0_HS_14_0.png",
      "width": 126,
      "height": 110,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -6.36,
   "yaw": -73.72,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_04CDAC68_1441_96FE_4193_29AC1110872E",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_DF08C6FA_D523_D76A_41D5_7F86EC1FD1C3, this.camera_B98C3FA6_B665_534F_41B2_48DC3B2EA609); this.mainPlayList.set('selectedIndex', 15)",
   "mapColor": "#FF0000",
   "toolTip": "LORONG GALERI"
  }
 ],
 "maps": [
  {
   "hfov": 9.12,
   "yaw": 151.04,
   "image": {
    "levels": [
     {
      "url": "media/panorama_DF08F593_D523_F5BA_41E5_3AAEBE3AF892_1_HS_1_0_0_map.gif",
      "width": 29,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -27.17,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_FACEB34F_EE5B_0089_41E9_36D2CBBA76FA",
   "yaw": 151.04,
   "pitch": -27.17,
   "hfov": 9.12,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_C638048A_D718_01E5_41E4_4AF5308F3E9C",
 "data": {
  "label": "Arrow 01c"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_DF08E4A2_D523_EB9A_41E5_F673F160A0A8, this.camera_B99B7FC5_B665_52CC_41DB_57E6DD291FA9); this.mainPlayList.set('selectedIndex', 17)",
   "mapColor": "#FF0000",
   "toolTip": "LORONG GALERI"
  }
 ],
 "maps": [
  {
   "hfov": 16.01,
   "yaw": -31.93,
   "image": {
    "levels": [
     {
      "url": "media/panorama_DF08F593_D523_F5BA_41E5_3AAEBE3AF892_1_HS_2_0_0_map.gif",
      "width": 26,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -29.8,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_FACED350_EE5B_0097_41ED_063EB6CAAACD",
   "yaw": -31.93,
   "pitch": -29.8,
   "hfov": 16.01,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_F64FDEDB_E7E9_0C89_41E9_C12818A06857",
 "data": {
  "label": "Circle Arrow 01a"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.showPopupPanoramaOverlay(this.popup_34360BE0_1305_2A97_41AD_952DA148E558, {'backgroundColorDirection':'vertical','paddingRight':5,'rollOverIconLineWidth':5,'pressedBackgroundOpacity':0.3,'pressedIconLineWidth':5,'pressedIconWidth':20,'borderSize':0,'paddingLeft':5,'rollOverIconColor':'#666666','iconWidth':20,'paddingBottom':5,'rollOverBackgroundOpacity':0.3,'pressedBorderColor':'#000000','rollOverBorderSize':0,'iconHeight':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'iconColor':'#000000','iconLineWidth':5,'rollOverIconWidth':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedBorderSize':0,'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000','rollOverIconHeight':20,'backgroundOpacity':0.3,'pressedIconHeight':20,'rollOverBackgroundColorDirection':'vertical','pressedIconColor':'#888888','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundColorDirection':'vertical'}, this.ImageResource_240FA4E7_1505_DE99_416F_45770CC1B910, null, null, null, null, false)",
   "mapColor": "#FF0000",
   "toolTip": "INFORMASI FOTO"
  }
 ],
 "maps": [
  {
   "hfov": 13.14,
   "yaw": -1.83,
   "image": {
    "levels": [
     {
      "url": "media/panorama_DF08F593_D523_F5BA_41E5_3AAEBE3AF892_1_HS_5_0_0_map.gif",
      "width": 16,
      "height": 18,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 16.23,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "items": [
  {
   "hfov": 13.14,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_DF08F593_D523_F5BA_41E5_3AAEBE3AF892_1_HS_5_0.png",
      "width": 226,
      "height": 267,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 16.23,
   "yaw": -1.83,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_3BA07E7A_1307_2A6A_4155_C84AB01EBFCB",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.showPopupPanoramaOverlay(this.popup_3B7B5904_133B_579E_4175_F10E2F35776C, {'backgroundColorDirection':'vertical','paddingRight':5,'rollOverIconLineWidth':5,'pressedBackgroundOpacity':0.3,'pressedIconLineWidth':5,'pressedIconWidth':20,'borderSize':0,'paddingLeft':5,'rollOverIconColor':'#666666','iconWidth':20,'paddingBottom':5,'rollOverBackgroundOpacity':0.3,'pressedBorderColor':'#000000','rollOverBorderSize':0,'iconHeight':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'iconColor':'#000000','iconLineWidth':5,'rollOverIconWidth':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedBorderSize':0,'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000','rollOverIconHeight':20,'backgroundOpacity':0.3,'pressedIconHeight':20,'rollOverBackgroundColorDirection':'vertical','pressedIconColor':'#888888','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundColorDirection':'vertical'}, this.ImageResource_240F04E7_1505_DE99_41A5_48CA68C774EB, null, null, null, null, false)",
   "mapColor": "#FF0000",
   "toolTip": "INFORMASI FOTO"
  }
 ],
 "maps": [
  {
   "hfov": 12.62,
   "yaw": 36.78,
   "image": {
    "levels": [
     {
      "url": "media/panorama_DF08F593_D523_F5BA_41E5_3AAEBE3AF892_1_HS_6_0_0_map.gif",
      "width": 16,
      "height": 18,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 22.74,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "items": [
  {
   "hfov": 12.62,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_DF08F593_D523_F5BA_41E5_3AAEBE3AF892_1_HS_6_0.png",
      "width": 226,
      "height": 267,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 22.74,
   "yaw": 36.78,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_3B38D8DA_1305_56AB_41B0_D0B2EB40AB9D",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.showPopupPanoramaOverlay(this.popup_3AE55A46_133C_F59A_41A3_E48781F5A841, {'backgroundColorDirection':'vertical','paddingRight':5,'rollOverIconLineWidth':5,'pressedBackgroundOpacity':0.3,'pressedIconLineWidth':5,'pressedIconWidth':20,'borderSize':0,'paddingLeft':5,'rollOverIconColor':'#666666','iconWidth':20,'paddingBottom':5,'rollOverBackgroundOpacity':0.3,'pressedBorderColor':'#000000','rollOverBorderSize':0,'iconHeight':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'iconColor':'#000000','iconLineWidth':5,'rollOverIconWidth':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedBorderSize':0,'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000','rollOverIconHeight':20,'backgroundOpacity':0.3,'pressedIconHeight':20,'rollOverBackgroundColorDirection':'vertical','pressedIconColor':'#888888','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundColorDirection':'vertical'}, this.ImageResource_240C84E7_1505_DE99_41AA_8820474D06E5, null, null, null, null, false)",
   "mapColor": "#FF0000",
   "toolTip": "INFORMASI FOTO"
  }
 ],
 "maps": [
  {
   "hfov": 12.9,
   "yaw": 98.62,
   "image": {
    "levels": [
     {
      "url": "media/panorama_DF08F593_D523_F5BA_41E5_3AAEBE3AF892_1_HS_7_0_0_map.gif",
      "width": 16,
      "height": 18,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 19.48,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "items": [
  {
   "hfov": 12.9,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_DF08F593_D523_F5BA_41E5_3AAEBE3AF892_1_HS_7_0.png",
      "width": 226,
      "height": 267,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 19.48,
   "yaw": 98.62,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_3BA26215_133B_55B9_41A5_75E520E064A3",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 62.1,
   "yaw": -109.78,
   "image": {
    "levels": [
     {
      "url": "media/panorama_DF08F593_D523_F5BA_41E5_3AAEBE3AF892_1_HS_8_0_0_map.gif",
      "width": 27,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -66.75,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "items": [
  {
   "hfov": 62.1,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_DF08F593_D523_F5BA_41E5_3AAEBE3AF892_1_HS_8_0.png",
      "width": 2048,
      "height": 1186,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -66.75,
   "yaw": -109.78,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_0AE2A815_1B3B_5CBB_41B9_D1F1E78B7D41",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "toolTipShadowBlurRadius": 3,
 "id": "viewer_uidB8CE083B_B665_5D44_41D2_36D8CD662285",
 "toolTipOpacity": 1,
 "toolTipPaddingBottom": 4,
 "toolTipFontSize": "1.11vmin",
 "toolTipTextShadowColor": "#000000",
 "playbackBarHeadBorderRadius": 0,
 "playbackBarBorderSize": 0,
 "minHeight": 50,
 "playbackBarProgressOpacity": 1,
 "playbackBarHeadBorderColor": "#000000",
 "playbackBarBackgroundOpacity": 1,
 "shadow": false,
 "progressLeft": 0,
 "paddingBottom": 0,
 "width": "100%",
 "playbackBarHeadBorderSize": 0,
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarHeadShadowColor": "#000000",
 "toolTipTextShadowBlurRadius": 3,
 "toolTipShadowColor": "#333333",
 "toolTipFontWeight": "normal",
 "progressRight": 0,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "vrPointerSelectionTime": 2000,
 "progressOpacity": 1,
 "paddingRight": 0,
 "firstTransitionDuration": 0,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "borderSize": 0,
 "progressBottom": 2,
 "progressBackgroundOpacity": 1,
 "toolTipFontStyle": "normal",
 "height": "100%",
 "playbackBarOpacity": 1,
 "toolTipShadowOpacity": 1,
 "toolTipFontFamily": "Arial",
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "vrPointerColor": "#FFFFFF",
 "propagateClick": false,
 "progressHeight": 10,
 "toolTipShadowHorizontalLength": 0,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "toolTipTextShadowOpacity": 0,
 "playbackBarHeadShadowOpacity": 0.7,
 "progressBarOpacity": 1,
 "progressBorderSize": 0,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderRadius": 0,
 "toolTipShadowVerticalLength": 0,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "class": "ViewerArea",
 "toolTipFontColor": "#606060",
 "progressBackgroundColorRatios": [
  0
 ],
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarLeft": 0,
 "transitionDuration": 500,
 "displayTooltipInTouchScreens": true,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "playbackBarHeadHeight": 15,
 "toolTipBackgroundColor": "#F6F6F6",
 "progressBackgroundColorDirection": "vertical",
 "playbackBarBottom": 0,
 "transitionMode": "blending",
 "paddingTop": 0,
 "progressBorderColor": "#000000",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBarBorderColor": "#000000",
 "minWidth": 100,
 "playbackBarHeadOpacity": 1,
 "toolTipBorderSize": 1,
 "toolTipPaddingTop": 4,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipPaddingLeft": 6,
 "toolTipPaddingRight": 6,
 "paddingLeft": 0,
 "toolTipDisplayTime": 600,
 "playbackBarHeight": 10,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "borderRadius": 0,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarBackgroundColorDirection": "vertical",
 "playbackBarHeadWidth": 6,
 "playbackBarRight": 0,
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarHeadShadowVerticalLength": 0,
 "toolTipBorderRadius": 3,
 "progressBarBorderSize": 0,
 "playbackBarProgressBorderSize": 0,
 "toolTipBorderColor": "#767676",
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "toolTipShadowSpread": 0,
 "playbackBarBorderRadius": 0,
 "data": {
  "name": "ViewerArea2954"
 },
 "playbackBarProgressBorderColor": "#000000"
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_DF62FED0_D522_37B6_41C2_93651E251542, this.camera_B91E0EBE_B665_52BC_41E5_7C470972E5EC); this.mainPlayList.set('selectedIndex', 23)",
   "mapColor": "#FF0000",
   "toolTip": "BALE TELAGA/BALE KAMBANG"
  }
 ],
 "maps": [
  {
   "hfov": 14.16,
   "yaw": -11.66,
   "image": {
    "levels": [
     {
      "url": "media/panorama_DF09300A_D522_2AAB_41C0_2217A91877F7_1_HS_0_0_0_map.gif",
      "width": 26,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.28,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_FAC7B353_EE5B_0099_41C4_2C6490108D45",
   "yaw": -11.66,
   "pitch": -3.28,
   "hfov": 14.16,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_CCCF027A_D708_011A_41E8_43DA41697A88",
 "data": {
  "label": "Circle Arrow 01a"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_DF09605E_D522_6AAA_41E6_B94D5A810C57, this.camera_B9EA4EDA_B665_52C4_41A6_6886F4C3D7C5); this.mainPlayList.set('selectedIndex', 21)",
   "mapColor": "#FF0000",
   "toolTip": "MENUJU DEPAB BALE TELAGA"
  }
 ],
 "maps": [
  {
   "hfov": 11.28,
   "yaw": 169.41,
   "image": {
    "levels": [
     {
      "url": "media/panorama_DF09300A_D522_2AAB_41C0_2217A91877F7_1_HS_1_0_0_map.gif",
      "width": 29,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -21.78,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_FAC71354_EE5B_009F_41D5_9C7C311BB715",
   "yaw": 169.41,
   "pitch": -21.78,
   "hfov": 11.28,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_F36E4DCA_E7A9_0C8B_41B1_CD9711C30845",
 "data": {
  "label": "Arrow 01c"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 40.29,
   "yaw": 164.61,
   "image": {
    "levels": [
     {
      "url": "media/panorama_DF09300A_D522_2AAB_41C0_2217A91877F7_1_HS_6_0_0_map.gif",
      "width": 23,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -70.83,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "items": [
  {
   "hfov": 40.29,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_DF09300A_D522_2AAB_41C0_2217A91877F7_1_HS_6_0.png",
      "width": 2029,
      "height": 1357,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -70.83,
   "yaw": 164.61,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_0ABEBC7F_1B38_D566_41AE_0800B58E441D",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.showPopupPanoramaOverlay(this.popup_E7414413_F772_41DA_41E1_304CFF0E193E, {'backgroundColorDirection':'vertical','paddingRight':5,'rollOverIconLineWidth':5,'pressedBackgroundOpacity':0.3,'pressedIconLineWidth':5,'pressedIconWidth':20,'borderSize':0,'paddingLeft':5,'rollOverIconColor':'#666666','iconWidth':20,'paddingBottom':5,'rollOverBackgroundOpacity':0.3,'pressedBorderColor':'#000000','rollOverBorderSize':0,'iconHeight':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'iconColor':'#000000','iconLineWidth':5,'rollOverIconWidth':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedBorderSize':0,'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000','rollOverIconHeight':20,'backgroundOpacity':0.3,'pressedIconHeight':20,'rollOverBackgroundColorDirection':'vertical','pressedIconColor':'#888888','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundColorDirection':'vertical'}, this.ImageResource_EF210965_F7B3_C27E_41C5_791939355796, null, null, null, null, false)",
   "mapColor": "#FF0000",
   "toolTip": "INFORMASI MENGENAI PANCORAN NAGA"
  }
 ],
 "maps": [
  {
   "hfov": 2.71,
   "yaw": -66.14,
   "image": {
    "levels": [
     {
      "url": "media/panorama_DF09300A_D522_2AAB_41C0_2217A91877F7_1_HS_7_0_0_map.gif",
      "width": 16,
      "height": 18,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.9,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "items": [
  {
   "hfov": 2.71,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_DF09300A_D522_2AAB_41C0_2217A91877F7_1_HS_7_0.png",
      "width": 44,
      "height": 51,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.9,
   "yaw": -66.14,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_E20925C1_ED42_99DD_41E2_F5B3E69B1C9E",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.showPopupPanoramaOverlay(this.popup_8C8E4019_9D24_7E64_41D0_F472E739C7F1, {'backgroundColorDirection':'vertical','paddingRight':5,'rollOverIconLineWidth':5,'pressedBackgroundOpacity':0.3,'pressedIconLineWidth':5,'pressedIconWidth':20,'borderSize':0,'paddingLeft':5,'rollOverIconColor':'#666666','iconWidth':20,'paddingBottom':5,'rollOverBackgroundOpacity':0.3,'pressedBorderColor':'#000000','rollOverBorderSize':0,'iconHeight':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'iconColor':'#000000','iconLineWidth':5,'rollOverIconWidth':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedBorderSize':0,'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000','rollOverIconHeight':20,'backgroundOpacity':0.3,'pressedIconHeight':20,'rollOverBackgroundColorDirection':'vertical','pressedIconColor':'#888888','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundColorDirection':'vertical'}, this.ImageResource_8989FA65_9D24_42AF_41D8_E1EDCA6A0B76, null, null, null, null, false)",
   "mapColor": "#FF0000",
   "toolTip": "INFORMASI BALE TELAGA"
  }
 ],
 "maps": [
  {
   "hfov": 8.2,
   "yaw": -11.77,
   "image": {
    "levels": [
     {
      "url": "media/panorama_DF09300A_D522_2AAB_41C0_2217A91877F7_0_HS_9_0_0_map.gif",
      "width": 16,
      "height": 18,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 9.56,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "items": [
  {
   "hfov": 8.2,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_DF09300A_D522_2AAB_41C0_2217A91877F7_0_HS_9_0.png",
      "width": 137,
      "height": 158,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 9.56,
   "yaw": -11.77,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_8C266371_9D24_42A4_419F_E8490C36D1F4",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_DF0AF60D_D522_76A9_41E3_6D08C1C16B94, this.camera_B9CD8F29_B665_5345_41CB_8B290B36A63F); this.mainPlayList.set('selectedIndex', 4)",
   "mapColor": "#FF0000",
   "toolTip": "MENUJU PINTU MASUK MASKERDAM"
  }
 ],
 "maps": [
  {
   "hfov": 5.69,
   "yaw": -172,
   "image": {
    "levels": [
     {
      "url": "media/panorama_DF0AA7F2_D522_357A_41E7_BB88309A039D_1_HS_3_0_0_map.gif",
      "width": 29,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -11.54,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_FA382342_EE5B_00F8_41DD_21AAE1270055",
   "yaw": -172,
   "pitch": -11.54,
   "hfov": 5.69,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_C10B7EF5_D738_012E_41C2_91A45C7B4F60",
 "data": {
  "label": "Arrow 01c"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_DF0B7220_D522_EE96_41E0_735AC8175FE5, this.camera_B9C00F09_B665_5344_41E3_D4DA911ABFD7); this.mainPlayList.set('selectedIndex', 9)",
   "mapColor": "#FF0000",
   "toolTip": "MASKERDAM"
  }
 ],
 "maps": [
  {
   "hfov": 8.87,
   "yaw": -45.77,
   "image": {
    "levels": [
     {
      "url": "media/panorama_DF0AA7F2_D522_357A_41E7_BB88309A039D_1_HS_4_0_0_map.gif",
      "width": 61,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -13.15,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_FA385342_EE5B_00F8_41D5_5C69B36A6895",
   "yaw": -45.77,
   "pitch": -13.15,
   "hfov": 8.87,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_C1B9FE66_D738_012A_417E_6FFC0632A8FD",
 "data": {
  "label": "Circle Arrow 01c Left-Up"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_DF0AF41D_D522_2AA9_41EA_37FF14B377FE, this.camera_B9D97F38_B665_5344_41D9_E8144FC54594); this.mainPlayList.set('selectedIndex', 6)",
   "mapColor": "#FF0000",
   "toolTip": "MENUJU BALE PEMADESAN"
  }
 ],
 "maps": [
  {
   "hfov": 9.08,
   "yaw": 102.34,
   "image": {
    "levels": [
     {
      "url": "media/panorama_DF0AA7F2_D522_357A_41E7_BB88309A039D_1_HS_6_0_0_map.gif",
      "width": 37,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -16.68,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_FA3FF342_EE5B_00F8_41A0_1E6B4187C5E7",
   "yaw": 102.34,
   "pitch": -16.68,
   "hfov": 9.08,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_E93C1F41_E7A7_0DF9_41D7_1746535B520A",
 "data": {
  "label": "Circle Arrow 01b"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 38.77,
   "yaw": 147.12,
   "image": {
    "levels": [
     {
      "url": "media/panorama_DF0AA7F2_D522_357A_41E7_BB88309A039D_1_HS_12_0_0_map.gif",
      "width": 22,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -65.69,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "items": [
  {
   "hfov": 38.77,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_DF0AA7F2_D522_357A_41E7_BB88309A039D_1_HS_12_0.png",
      "width": 1556,
      "height": 1130,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -65.69,
   "yaw": 147.12,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_0A8B9A37_1B3B_DCE6_41B9_513465C33775",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.showPopupPanoramaOverlay(this.popup_F96A9BDD_F69D_D4FA_41DD_35686EE58D35, {'backgroundColorDirection':'vertical','paddingRight':5,'rollOverIconLineWidth':5,'pressedBackgroundOpacity':0.3,'pressedIconLineWidth':5,'pressedIconWidth':20,'borderSize':0,'paddingLeft':5,'rollOverIconColor':'#666666','iconWidth':20,'paddingBottom':5,'rollOverBackgroundOpacity':0.3,'pressedBorderColor':'#000000','rollOverBorderSize':0,'iconHeight':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'iconColor':'#000000','iconLineWidth':5,'rollOverIconWidth':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedBorderSize':0,'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000','rollOverIconHeight':20,'backgroundOpacity':0.3,'pressedIconHeight':20,'rollOverBackgroundColorDirection':'vertical','pressedIconColor':'#888888','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundColorDirection':'vertical'}, this.ImageResource_F8F4E5C8_F751_C2B6_41E0_D756E541BEC6, null, null, null, null, false)",
   "mapColor": "#FF0000",
   "toolTip": "INFORMASI MENGENAI AREA MASKERDAM"
  }
 ],
 "maps": [
  {
   "hfov": 5.59,
   "yaw": -152.76,
   "image": {
    "levels": [
     {
      "url": "media/panorama_DF0AA7F2_D522_357A_41E7_BB88309A039D_1_HS_14_0_0_map.gif",
      "width": 27,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.11,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "items": [
  {
   "hfov": 5.59,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_DF0AA7F2_D522_357A_41E7_BB88309A039D_1_HS_14_0.png",
      "width": 92,
      "height": 54,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.11,
   "yaw": -152.76,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_E26A1DA3_ED41_8E5E_41D4_DB4B01DA5C8B",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "rotationY": 0,
 "hfov": 6.06,
 "popupMaxHeight": "50%",
 "rotationX": 0,
 "rotationZ": 0,
 "popupMaxWidth": "50%",
 "id": "popup_E694FA09_F7D3_C1B6_41EC_7B4A570F1172",
 "hideEasing": "cubic_out",
 "image": {
  "levels": [
   {
    "url": "media/popup_E694FA09_F7D3_C1B6_41EC_7B4A570F1172_0_4.png",
    "width": 819,
    "height": 1024,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "pitch": 7.94,
 "popupDistance": 100,
 "showDuration": 500,
 "hideDuration": 500,
 "showEasing": "cubic_in",
 "yaw": -82.07,
 "class": "PopupPanoramaOverlay"
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.showPopupPanoramaOverlay(this.popup_8DE088A3_9D24_4FAB_41E2_587E10FBE68E, {'backgroundColorDirection':'vertical','paddingRight':5,'rollOverIconLineWidth':5,'pressedBackgroundOpacity':0.3,'pressedIconLineWidth':5,'pressedIconWidth':20,'borderSize':0,'paddingLeft':5,'rollOverIconColor':'#666666','iconWidth':20,'paddingBottom':5,'rollOverBackgroundOpacity':0.3,'pressedBorderColor':'#000000','rollOverBorderSize':0,'iconHeight':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'iconColor':'#000000','iconLineWidth':5,'rollOverIconWidth':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedBorderSize':0,'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000','rollOverIconHeight':20,'backgroundOpacity':0.3,'pressedIconHeight':20,'rollOverBackgroundColorDirection':'vertical','pressedIconColor':'#888888','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundColorDirection':'vertical'}, this.ImageResource_89B51A06_9D24_426C_41E0_522EA18EA55E, null, null, null, null, false)",
   "mapColor": "#FF0000",
   "toolTip": "INFORMASI MASKERDAM"
  }
 ],
 "maps": [
  {
   "hfov": 4.25,
   "yaw": -64.75,
   "image": {
    "levels": [
     {
      "url": "media/panorama_DF0AA7F2_D522_357A_41E7_BB88309A039D_0_HS_23_0_0_map.gif",
      "width": 21,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 6.91,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "items": [
  {
   "hfov": 4.25,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_DF0AA7F2_D522_357A_41E7_BB88309A039D_0_HS_23_0.png",
      "width": 70,
      "height": 53,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 6.91,
   "yaw": -64.75,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_8C956C6C_9D3C_46BD_41D0_B86C8B7C674E",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.showPopupPanoramaOverlay(this.popup_8E757980_9D5C_4E65_41A8_642845C2CCFE, {'backgroundColorDirection':'vertical','paddingRight':5,'rollOverIconLineWidth':5,'pressedBackgroundOpacity':0.3,'pressedIconLineWidth':5,'pressedIconWidth':20,'borderSize':0,'paddingLeft':5,'rollOverIconColor':'#666666','iconWidth':20,'paddingBottom':5,'rollOverBackgroundOpacity':0.3,'pressedBorderColor':'#000000','rollOverBorderSize':0,'iconHeight':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'iconColor':'#000000','iconLineWidth':5,'rollOverIconWidth':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedBorderSize':0,'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000','rollOverIconHeight':20,'backgroundOpacity':0.3,'pressedIconHeight':20,'rollOverBackgroundColorDirection':'vertical','pressedIconColor':'#888888','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundColorDirection':'vertical'}, this.ImageResource_89CA3463_9D5C_46A4_41D5_DDA53C0D66E5, null, null, null, null, false)",
   "mapColor": "#FF0000",
   "toolTip": "INFORMASI BALE PAMADESAN"
  }
 ],
 "maps": [
  {
   "hfov": 6.56,
   "yaw": 34.81,
   "image": {
    "levels": [
     {
      "url": "media/panorama_DF0AA7F2_D522_357A_41E7_BB88309A039D_0_HS_24_0_0_map.gif",
      "width": 23,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 4.8,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "items": [
  {
   "hfov": 6.56,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_DF0AA7F2_D522_357A_41E7_BB88309A039D_0_HS_24_0.png",
      "width": 108,
      "height": 75,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 4.8,
   "yaw": 34.81,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_8DA22EF7_9D3C_43AC_41B5_0D906CACD057",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.showPopupPanoramaOverlay(this.popup_8F958FEE_9D5D_C1BC_41E0_4D3C8E890915, {'backgroundColorDirection':'vertical','paddingRight':5,'rollOverIconLineWidth':5,'pressedBackgroundOpacity':0.3,'pressedIconLineWidth':5,'pressedIconWidth':20,'borderSize':0,'paddingLeft':5,'rollOverIconColor':'#666666','iconWidth':20,'paddingBottom':5,'rollOverBackgroundOpacity':0.3,'pressedBorderColor':'#000000','rollOverBorderSize':0,'iconHeight':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'iconColor':'#000000','iconLineWidth':5,'rollOverIconWidth':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedBorderSize':0,'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000','rollOverIconHeight':20,'backgroundOpacity':0.3,'pressedIconHeight':20,'rollOverBackgroundColorDirection':'vertical','pressedIconColor':'#888888','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundColorDirection':'vertical'}, this.ImageResource_89C8C463_9D5C_46A4_41E3_86F77640D212, null, null, null, null, false)",
   "mapColor": "#FF0000",
   "toolTip": "INFORMASI BALE PAWEDAAN"
  }
 ],
 "maps": [
  {
   "hfov": 6.54,
   "yaw": 144.82,
   "image": {
    "levels": [
     {
      "url": "media/panorama_DF0AA7F2_D522_357A_41E7_BB88309A039D_0_HS_25_0_0_map.gif",
      "width": 22,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 4.68,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "items": [
  {
   "hfov": 6.54,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_DF0AA7F2_D522_357A_41E7_BB88309A039D_0_HS_25_0.png",
      "width": 108,
      "height": 76,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 4.68,
   "yaw": 144.82,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_8DDF8636_9D3F_C2AC_41C2_7088B4E57E1E",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_DF095ADC_D526_3FAE_41E8_221CDD95ABD4, this.camera_B971DDBF_B665_56BC_41CF_31679FE654A7); this.mainPlayList.set('selectedIndex', 1)",
   "mapColor": "#FF0000",
   "toolTip": "MASUK"
  }
 ],
 "maps": [
  {
   "hfov": 13.38,
   "yaw": 17.89,
   "image": {
    "levels": [
     {
      "url": "media/panorama_DF14B7C6_D526_559A_41D4_10037B667899_1_HS_1_0_0_map.gif",
      "width": 37,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -16.16,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_FA21C336_EE5B_009B_41E0_09B5C79C5777",
   "yaw": 17.89,
   "pitch": -16.16,
   "hfov": 13.38,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_CE5923B5_D718_072F_41A8_4F9A38C34D4C",
 "data": {
  "label": "Circle Arrow 01b"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 39.37,
   "yaw": 164.76,
   "image": {
    "levels": [
     {
      "url": "media/panorama_DF14B7C6_D526_559A_41D4_10037B667899_1_HS_13_0_0_map.gif",
      "width": 18,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -60.08,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "items": [
  {
   "hfov": 39.37,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_DF14B7C6_D526_559A_41D4_10037B667899_1_HS_13_0.png",
      "width": 1754,
      "height": 1511,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -60.08,
   "yaw": 164.76,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_158A8A48_1B28_DCA9_4197_C98797E6A962",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.showPopupPanoramaOverlay(this.popup_F9C9C64B_F604_1ADA_41D7_1ADF5FBC2C73, {'backgroundColorDirection':'vertical','paddingRight':5,'rollOverIconLineWidth':5,'pressedBackgroundOpacity':0.3,'pressedIconLineWidth':5,'pressedIconWidth':20,'borderSize':0,'paddingLeft':5,'rollOverIconColor':'#666666','iconWidth':20,'paddingBottom':5,'rollOverBackgroundOpacity':0.3,'pressedBorderColor':'#000000','rollOverBorderSize':0,'iconHeight':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'iconColor':'#000000','iconLineWidth':5,'rollOverIconWidth':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedBorderSize':0,'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000','rollOverIconHeight':20,'backgroundOpacity':0.3,'pressedIconHeight':20,'rollOverBackgroundColorDirection':'vertical','pressedIconColor':'#888888','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundColorDirection':'vertical'}, this.ImageResource_E706DB1B_F60C_0A7A_41E9_3302C21F0E8E, null, null, null, null, false)",
   "mapColor": "#FF0000",
   "toolTip": "INFORMASI MENGENAI TUGU PURI AGUNG KARANGASEM"
  }
 ],
 "maps": [
  {
   "hfov": 2.77,
   "yaw": 60.24,
   "image": {
    "levels": [
     {
      "url": "media/panorama_DF14B7C6_D526_559A_41D4_10037B667899_0_HS_17_0_0_map.gif",
      "width": 16,
      "height": 27,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 7.8,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "items": [
  {
   "hfov": 2.77,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_DF14B7C6_D526_559A_41D4_10037B667899_0_HS_17_0.png",
      "width": 62,
      "height": 108,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 7.8,
   "yaw": 60.24,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_E2DDD33A_ED46_BAAF_41E1_CE63562BFAC8",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.showWindow(this.window_F8144E36_F7F6_41DA_41E3_0EF2D9CA53C2, null, false)",
   "mapColor": "#FF0000",
   "toolTip": "LINK WEBSITE INFORMASI "
  }
 ],
 "maps": [
  {
   "hfov": 4.91,
   "yaw": 24.42,
   "image": {
    "levels": [
     {
      "url": "media/panorama_DF14B7C6_D526_559A_41D4_10037B667899_1_HS_18_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 19.89,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "items": [
  {
   "hfov": 4.91,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_DF14B7C6_D526_559A_41D4_10037B667899_1_HS_18_0.png",
      "width": 116,
      "height": 115,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 19.89,
   "yaw": 24.42,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_E2EF1CC7_ED42_8FE5_41C9_A89C78960F99",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "toolTipShadowBlurRadius": 3,
 "id": "viewer_uidB8BA186A_B665_5DC4_41C2_C250547C7BEB",
 "toolTipOpacity": 1,
 "toolTipPaddingBottom": 4,
 "toolTipFontSize": "1.11vmin",
 "toolTipTextShadowColor": "#000000",
 "playbackBarHeadBorderRadius": 0,
 "playbackBarBorderSize": 0,
 "minHeight": 50,
 "playbackBarProgressOpacity": 1,
 "playbackBarHeadBorderColor": "#000000",
 "playbackBarBackgroundOpacity": 1,
 "shadow": false,
 "progressLeft": 0,
 "paddingBottom": 0,
 "width": "100%",
 "playbackBarHeadBorderSize": 0,
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarHeadShadowColor": "#000000",
 "toolTipTextShadowBlurRadius": 3,
 "toolTipShadowColor": "#333333",
 "toolTipFontWeight": "normal",
 "progressRight": 0,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "vrPointerSelectionTime": 2000,
 "progressOpacity": 1,
 "paddingRight": 0,
 "firstTransitionDuration": 0,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "borderSize": 0,
 "progressBottom": 2,
 "progressBackgroundOpacity": 1,
 "toolTipFontStyle": "normal",
 "height": "100%",
 "playbackBarOpacity": 1,
 "toolTipShadowOpacity": 1,
 "toolTipFontFamily": "Arial",
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "vrPointerColor": "#FFFFFF",
 "propagateClick": false,
 "progressHeight": 10,
 "toolTipShadowHorizontalLength": 0,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "toolTipTextShadowOpacity": 0,
 "playbackBarHeadShadowOpacity": 0.7,
 "progressBarOpacity": 1,
 "progressBorderSize": 0,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderRadius": 0,
 "toolTipShadowVerticalLength": 0,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "class": "ViewerArea",
 "toolTipFontColor": "#606060",
 "progressBackgroundColorRatios": [
  0
 ],
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarLeft": 0,
 "transitionDuration": 500,
 "displayTooltipInTouchScreens": true,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "playbackBarHeadHeight": 15,
 "toolTipBackgroundColor": "#F6F6F6",
 "progressBackgroundColorDirection": "vertical",
 "playbackBarBottom": 0,
 "transitionMode": "blending",
 "paddingTop": 0,
 "progressBorderColor": "#000000",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBarBorderColor": "#000000",
 "minWidth": 100,
 "playbackBarHeadOpacity": 1,
 "toolTipBorderSize": 1,
 "toolTipPaddingTop": 4,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipPaddingLeft": 6,
 "toolTipPaddingRight": 6,
 "paddingLeft": 0,
 "toolTipDisplayTime": 600,
 "playbackBarHeight": 10,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "borderRadius": 0,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarBackgroundColorDirection": "vertical",
 "playbackBarHeadWidth": 6,
 "playbackBarRight": 0,
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarHeadShadowVerticalLength": 0,
 "toolTipBorderRadius": 3,
 "progressBarBorderSize": 0,
 "playbackBarProgressBorderSize": 0,
 "toolTipBorderColor": "#767676",
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "toolTipShadowSpread": 0,
 "playbackBarBorderRadius": 0,
 "data": {
  "name": "ViewerArea2960"
 },
 "playbackBarProgressBorderColor": "#000000"
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_DF08C6FA_D523_D76A_41D5_7F86EC1FD1C3, this.camera_B9B4FA31_B665_5D44_41DD_9C019B03BAEF); this.mainPlayList.set('selectedIndex', 15)",
   "mapColor": "#FF0000",
   "toolTip": "KELUAR DARI LORONG GALERI"
  }
 ],
 "maps": [
  {
   "hfov": 7.15,
   "yaw": 156.83,
   "image": {
    "levels": [
     {
      "url": "media/panorama_DF09427F_D522_2F69_41E4_B7F711B0C20C_1_HS_0_0_0_map.gif",
      "width": 29,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -14.3,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_FAC3F351_EE5B_0099_41EB_C5F48E639199",
   "yaw": 156.83,
   "pitch": -14.3,
   "hfov": 7.15,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_FEDE5047_E153_B100_41D2_0B28B5D595E3",
 "data": {
  "label": "Arrow 01c"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 69.45,
   "yaw": 131.89,
   "image": {
    "levels": [
     {
      "url": "media/panorama_DF09427F_D522_2F69_41E4_B7F711B0C20C_1_HS_2_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -39.53,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "items": [
  {
   "hfov": 69.45,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_DF09427F_D522_2F69_41E4_B7F711B0C20C_1_HS_2_0.png",
      "width": 1488,
      "height": 1457,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -39.53,
   "yaw": 131.89,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_0AD3C348_1B39_4CA9_41B9_E3FE649ABBA2",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.showPopupPanoramaOverlay(this.popup_E3B5E2B3_F75F_C6DA_41D7_B0A755BAF85C, {'backgroundColorDirection':'vertical','paddingRight':5,'rollOverIconLineWidth':5,'pressedBackgroundOpacity':0.3,'pressedIconLineWidth':5,'pressedIconWidth':20,'borderSize':0,'paddingLeft':5,'rollOverIconColor':'#666666','iconWidth':20,'paddingBottom':5,'rollOverBackgroundOpacity':0.3,'pressedBorderColor':'#000000','rollOverBorderSize':0,'iconHeight':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'iconColor':'#000000','iconLineWidth':5,'rollOverIconWidth':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedBorderSize':0,'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000','rollOverIconHeight':20,'backgroundOpacity':0.3,'pressedIconHeight':20,'rollOverBackgroundColorDirection':'vertical','pressedIconColor':'#888888','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundColorDirection':'vertical'}, this.ImageResource_E401758F_F75E_42C9_41ED_6AFA716DAFB0, null, null, null, null, false)",
   "mapColor": "#FF0000",
   "toolTip": "INFORMASI MENGENAI TOILET PENGUNJUNG"
  }
 ],
 "maps": [
  {
   "hfov": 14.4,
   "yaw": -16.17,
   "image": {
    "levels": [
     {
      "url": "media/panorama_DF09427F_D522_2F69_41E4_B7F711B0C20C_1_HS_3_0_0_map.gif",
      "width": 27,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.28,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "items": [
  {
   "hfov": 14.4,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_DF09427F_D522_2F69_41E4_B7F711B0C20C_1_HS_3_0.png",
      "width": 238,
      "height": 140,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.28,
   "yaw": -16.17,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_E2D3E10D_ED7E_966A_41EA_7F7717783932",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_DF0BAF14_D522_36BE_4182_2D68BF6843DE, this.camera_B9828A60_B665_5DC4_41E1_170FDC0AC930); this.mainPlayList.set('selectedIndex', 11)",
   "mapColor": "#FF0000",
   "toolTip": "MENUJU RUANG DISKUSI"
  }
 ],
 "maps": [
  {
   "hfov": 19.01,
   "yaw": -54.05,
   "image": {
    "levels": [
     {
      "url": "media/panorama_DF0B7220_D522_EE96_41E0_735AC8175FE5_1_HS_0_0_0_map.gif",
      "width": 37,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -38.09,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_FA31A345_EE5B_00F8_41E0_C407E1F47049",
   "yaw": -54.05,
   "pitch": -38.09,
   "hfov": 19.01,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_C10B2452_D5E2_6ABA_41E0_309470984B1D",
 "data": {
  "label": "Circle Arrow 01b"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 10)",
   "mapColor": "#FF0000",
   "toolTip": "MENUJU RUANG MAKAN RAJA"
  }
 ],
 "maps": [
  {
   "hfov": 16.67,
   "yaw": -133.36,
   "image": {
    "levels": [
     {
      "url": "media/panorama_DF0B7220_D522_EE96_41E0_735AC8175FE5_1_HS_1_0_0_map.gif",
      "width": 37,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -25.38,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_FA31C346_EE5B_00F8_41ED_7BF753546726",
   "yaw": -133.36,
   "pitch": -25.38,
   "hfov": 16.67,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_C0919FF9_D5EE_3576_41E7_A997241135C5",
 "data": {
  "label": "Circle Arrow 01b Right-Up"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_DF0AA7F2_D522_357A_41E7_BB88309A039D, this.camera_B992BA80_B665_5D43_41D4_1038AEF2D89D); this.mainPlayList.set('selectedIndex', 5)",
   "mapColor": "#FF0000",
   "toolTip": "MENUJU AREA MASKERDAM"
  }
 ],
 "maps": [
  {
   "hfov": 6.67,
   "yaw": 106.22,
   "image": {
    "levels": [
     {
      "url": "media/panorama_DF0B7220_D522_EE96_41E0_735AC8175FE5_1_HS_2_0_0_map.gif",
      "width": 29,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -26.88,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_FA317346_EE5B_00F8_41E5_A0DC13E93880",
   "yaw": 106.22,
   "pitch": -26.88,
   "hfov": 6.67,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_C22473EF_D738_073B_41DD_AB425EA1D525",
 "data": {
  "label": "Arrow 01c"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 42.43,
   "yaw": 160.63,
   "image": {
    "levels": [
     {
      "url": "media/panorama_DF0B7220_D522_EE96_41E0_735AC8175FE5_1_HS_6_0_0_map.gif",
      "width": 19,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -61.7,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "items": [
  {
   "hfov": 42.43,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_DF0B7220_D522_EE96_41E0_735AC8175FE5_1_HS_6_0.png",
      "width": 1479,
      "height": 1226,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -61.7,
   "yaw": 160.63,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_092E90C9_1B3F_4DAB_4167_2B0204563594",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.showPopupPanoramaOverlay(this.popup_F891157B_F751_C24A_41EC_CC062028D60B, {'backgroundColorDirection':'vertical','paddingRight':5,'rollOverIconLineWidth':5,'pressedBackgroundOpacity':0.3,'pressedIconLineWidth':5,'pressedIconWidth':20,'borderSize':0,'paddingLeft':5,'rollOverIconColor':'#666666','iconWidth':20,'paddingBottom':5,'rollOverBackgroundOpacity':0.3,'pressedBorderColor':'#000000','rollOverBorderSize':0,'iconHeight':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'iconColor':'#000000','iconLineWidth':5,'rollOverIconWidth':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedBorderSize':0,'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000','rollOverIconHeight':20,'backgroundOpacity':0.3,'pressedIconHeight':20,'rollOverBackgroundColorDirection':'vertical','pressedIconColor':'#888888','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundColorDirection':'vertical'}, this.ImageResource_EF7AA916_F7B3_C3DA_41DC_42F2668B68FA, null, null, null, null, false)",
   "mapColor": "#FF0000",
   "toolTip": "INFORMASI MENGENAI FOTO DI MASKERDAM(KANAN)"
  }
 ],
 "maps": [
  {
   "hfov": 4.3,
   "yaw": 22.24,
   "image": {
    "levels": [
     {
      "url": "media/panorama_DF0B7220_D522_EE96_41E0_735AC8175FE5_1_HS_7_0_0_map.gif",
      "width": 25,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.69,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "items": [
  {
   "hfov": 4.3,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_DF0B7220_D522_EE96_41E0_735AC8175FE5_1_HS_7_0.png",
      "width": 71,
      "height": 45,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.69,
   "yaw": 22.24,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_FDC9AE15_ED42_8A65_41DA_17DD93C668D2",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.showPopupPanoramaOverlay(this.popup_E71C2186_F75E_C2BA_41CB_2936957F9E63, {'backgroundColorDirection':'vertical','paddingRight':5,'rollOverIconLineWidth':5,'pressedBackgroundOpacity':0.3,'pressedIconLineWidth':5,'pressedIconWidth':20,'borderSize':0,'paddingLeft':5,'rollOverIconColor':'#666666','iconWidth':20,'paddingBottom':5,'rollOverBackgroundOpacity':0.3,'pressedBorderColor':'#000000','rollOverBorderSize':0,'iconHeight':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'iconColor':'#000000','iconLineWidth':5,'rollOverIconWidth':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedBorderSize':0,'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000','rollOverIconHeight':20,'backgroundOpacity':0.3,'pressedIconHeight':20,'rollOverBackgroundColorDirection':'vertical','pressedIconColor':'#888888','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundColorDirection':'vertical'}, this.ImageResource_EF05D926_F7B3_C3FA_41DE_1A7AF09ECDBA, null, null, null, null, false)",
   "mapColor": "#FF0000",
   "toolTip": "INFORMASI MENGENAI FOTO DI MASKERDAM(TENGAH)"
  }
 ],
 "maps": [
  {
   "hfov": 8.19,
   "yaw": -30.01,
   "image": {
    "levels": [
     {
      "url": "media/panorama_DF0B7220_D522_EE96_41E0_735AC8175FE5_1_HS_8_0_0_map.gif",
      "width": 24,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 9.74,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "items": [
  {
   "hfov": 8.19,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_DF0B7220_D522_EE96_41E0_735AC8175FE5_1_HS_8_0.png",
      "width": 137,
      "height": 90,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 9.74,
   "yaw": -30.01,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_E3B7DDC8_ED43_89EA_41EC_9081468A7839",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.showPopupPanoramaOverlay(this.popup_F8F2401C_F75E_41CE_41B7_8A77F3C75537, {'backgroundColorDirection':'vertical','paddingRight':5,'rollOverIconLineWidth':5,'pressedBackgroundOpacity':0.3,'pressedIconLineWidth':5,'pressedIconWidth':20,'borderSize':0,'paddingLeft':5,'rollOverIconColor':'#666666','iconWidth':20,'paddingBottom':5,'rollOverBackgroundOpacity':0.3,'pressedBorderColor':'#000000','rollOverBorderSize':0,'iconHeight':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'iconColor':'#000000','iconLineWidth':5,'rollOverIconWidth':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedBorderSize':0,'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000','rollOverIconHeight':20,'backgroundOpacity':0.3,'pressedIconHeight':20,'rollOverBackgroundColorDirection':'vertical','pressedIconColor':'#888888','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundColorDirection':'vertical'}, this.ImageResource_EF071926_F7B3_C3FA_41EB_D1B355DF5BC6, null, null, null, null, false)",
   "mapColor": "#FF0000",
   "toolTip": "INFORMASI MENGENAI FOTO DI MASKERDAM(TENGAH)"
  }
 ],
 "maps": [
  {
   "hfov": 6.09,
   "yaw": -97.61,
   "image": {
    "levels": [
     {
      "url": "media/panorama_DF0B7220_D522_EE96_41E0_735AC8175FE5_1_HS_9_0_0_map.gif",
      "width": 20,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 10.78,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "items": [
  {
   "hfov": 6.09,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_DF0B7220_D522_EE96_41E0_735AC8175FE5_1_HS_9_0.png",
      "width": 102,
      "height": 80,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 10.78,
   "yaw": -97.61,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_E3F1D20B_ED42_9A6D_41B8_0C0E981B105D",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.showPopupPanoramaOverlay(this.popup_E5884951_F752_4256_41DF_CFD2D4F43DF8, {'backgroundColorDirection':'vertical','paddingRight':5,'rollOverIconLineWidth':5,'pressedBackgroundOpacity':0.3,'pressedIconLineWidth':5,'pressedIconWidth':20,'borderSize':0,'paddingLeft':5,'rollOverIconColor':'#666666','iconWidth':20,'paddingBottom':5,'rollOverBackgroundOpacity':0.3,'pressedBorderColor':'#000000','rollOverBorderSize':0,'iconHeight':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'iconColor':'#000000','iconLineWidth':5,'rollOverIconWidth':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedBorderSize':0,'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000','rollOverIconHeight':20,'backgroundOpacity':0.3,'pressedIconHeight':20,'rollOverBackgroundColorDirection':'vertical','pressedIconColor':'#888888','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundColorDirection':'vertical'}, this.ImageResource_EF064926_F7B3_C3FA_41E1_7433167191DF, null, null, null, null, false)",
   "mapColor": "#FF0000",
   "toolTip": "INFORMASI MENGENAI FOTO DI MASKERDAM(KIRI)"
  }
 ],
 "maps": [
  {
   "hfov": 2.68,
   "yaw": -147.63,
   "image": {
    "levels": [
     {
      "url": "media/panorama_DF0B7220_D522_EE96_41E0_735AC8175FE5_1_HS_10_0_0_map.gif",
      "width": 18,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.2,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "items": [
  {
   "hfov": 2.68,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_DF0B7220_D522_EE96_41E0_735AC8175FE5_1_HS_10_0.png",
      "width": 44,
      "height": 39,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.2,
   "yaw": -147.63,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_E232325E_ED41_FAE7_41EB_79E24C5A890B",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.showPopupPanoramaOverlay(this.popup_E7E121CA_F75F_C24A_41C6_15C3FED09E72, {'backgroundColorDirection':'vertical','paddingRight':5,'rollOverIconLineWidth':5,'pressedBackgroundOpacity':0.3,'pressedIconLineWidth':5,'pressedIconWidth':20,'borderSize':0,'paddingLeft':5,'rollOverIconColor':'#666666','iconWidth':20,'paddingBottom':5,'rollOverBackgroundOpacity':0.3,'pressedBorderColor':'#000000','rollOverBorderSize':0,'iconHeight':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'iconColor':'#000000','iconLineWidth':5,'rollOverIconWidth':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedBorderSize':0,'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000','rollOverIconHeight':20,'backgroundOpacity':0.3,'pressedIconHeight':20,'rollOverBackgroundColorDirection':'vertical','pressedIconColor':'#888888','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundColorDirection':'vertical'}, this.ImageResource_EF017926_F7B3_C3FA_41E8_698DC1ADCE29, null, null, null, null, false)",
   "mapColor": "#FF0000",
   "toolTip": "INFORMASI MENGENAI ARSITEKTUR"
  }
 ],
 "maps": [
  {
   "hfov": 6.65,
   "yaw": -56.8,
   "image": {
    "levels": [
     {
      "url": "media/panorama_DF0B7220_D522_EE96_41E0_735AC8175FE5_1_HS_11_0_0_map.gif",
      "width": 28,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 21.79,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "items": [
  {
   "hfov": 6.65,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_DF0B7220_D522_EE96_41E0_735AC8175FE5_1_HS_11_0.png",
      "width": 118,
      "height": 66,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 21.79,
   "yaw": -56.8,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_E38E53B9_ED47_F9AD_41C9_DD16FB8A0B79",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "id": "viewer_uidB8A6184B_B665_5DC4_41E2_376DF56773FEVideoPlayer",
 "viewerArea": "this.viewer_uidB8A6184B_B665_5DC4_41E2_376DF56773FE",
 "displayPlaybackBar": true,
 "class": "VideoPlayer"
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_DF0AF41D_D522_2AA9_41EA_37FF14B377FE, this.camera_B95D3E1E_B665_557F_41DA_7A68CFFC5A1D); this.mainPlayList.set('selectedIndex', 6)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 14.7,
   "yaw": -168.59,
   "image": {
    "levels": [
     {
      "url": "media/panorama_DF0A8329_D522_2E96_41DA_0346C09AF2A0_1_HS_1_0_0_map.gif",
      "width": 29,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -38.83,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_FA32D345_EE5B_00F8_41CE_005AEDAF95FC",
   "yaw": -168.59,
   "pitch": -38.83,
   "hfov": 14.7,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_E9538BFE_E7AB_348B_41DD_180C667923FD",
 "data": {
  "label": "Arrow 01a"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 45.6,
   "yaw": 147.36,
   "image": {
    "levels": [
     {
      "url": "media/panorama_DF0A8329_D522_2E96_41DA_0346C09AF2A0_1_HS_2_0_0_map.gif",
      "width": 21,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -60.47,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "items": [
  {
   "hfov": 45.6,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_DF0A8329_D522_2E96_41DA_0346C09AF2A0_1_HS_2_0.png",
      "width": 1529,
      "height": 1162,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -60.47,
   "yaw": 147.36,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_0910070A_1B39_54A8_41A0_D52DC74108FC",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.showPopupPanoramaOverlay(this.popup_F8ED935C_F752_C64E_41E5_0F7AE6839551, {'backgroundColorDirection':'vertical','paddingRight':5,'rollOverIconLineWidth':5,'pressedBackgroundOpacity':0.3,'pressedIconLineWidth':5,'pressedIconWidth':20,'borderSize':0,'paddingLeft':5,'rollOverIconColor':'#666666','iconWidth':20,'paddingBottom':5,'rollOverBackgroundOpacity':0.3,'pressedBorderColor':'#000000','rollOverBorderSize':0,'iconHeight':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'iconColor':'#000000','iconLineWidth':5,'rollOverIconWidth':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedBorderSize':0,'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000','rollOverIconHeight':20,'backgroundOpacity':0.3,'pressedIconHeight':20,'rollOverBackgroundColorDirection':'vertical','pressedIconColor':'#888888','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundColorDirection':'vertical'}, this.ImageResource_EF7B0916_F7B3_C3DA_41EB_68FDE451ABFD, null, null, null, null, false)",
   "mapColor": "#FF0000",
   "toolTip": "INFORMASI MENGENAI BALE PAMADESAN"
  }
 ],
 "maps": [
  {
   "hfov": 13.97,
   "yaw": 16.48,
   "image": {
    "levels": [
     {
      "url": "media/panorama_DF0A8329_D522_2E96_41DA_0346C09AF2A0_1_HS_3_0_0_map.gif",
      "width": 18,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 18.92,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "items": [
  {
   "hfov": 13.97,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_DF0A8329_D522_2E96_41DA_0346C09AF2A0_1_HS_3_0.png",
      "width": 244,
      "height": 207,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 18.92,
   "yaw": 16.48,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_E20AE291_ED41_9A7A_41E7_F9C86AF5EB4A",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_DF0BFC23_D522_7A9A_41E2_705D7646CD69, this.camera_B9F45EF9_B665_52C4_41E4_CAEF390F85F7); this.mainPlayList.set('selectedIndex', 12)",
   "mapColor": "#FF0000",
   "toolTip": "KELUAR DARI TEMPAT PENYIMPANAN"
  }
 ],
 "maps": [
  {
   "hfov": 11.09,
   "yaw": -158.07,
   "image": {
    "levels": [
     {
      "url": "media/panorama_DF0B7A68_D522_5E96_41E4_2FA8606D5645_1_HS_1_0_0_map.gif",
      "width": 29,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -28.24,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_FAC9134C_EE5B_008F_41E0_28CFF82E9D6A",
   "yaw": -158.07,
   "pitch": -28.24,
   "hfov": 11.09,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_C4B51E9E_D708_011A_41E5_8C7F78B748F1",
 "data": {
  "label": "Arrow 01c"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 33.09,
   "yaw": 160.58,
   "image": {
    "levels": [
     {
      "url": "media/panorama_DF0B7A68_D522_5E96_41E4_2FA8606D5645_1_HS_3_0_0_map.gif",
      "width": 15,
      "height": 17,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -63.9,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "items": [
  {
   "hfov": 33.09,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_DF0B7A68_D522_5E96_41E4_2FA8606D5645_1_HS_3_0.png",
      "width": 1243,
      "height": 1344,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -63.9,
   "yaw": 160.58,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_091C4796_1B39_D3B8_41B5_DA88FCD2FD62",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.showPopupPanoramaOverlay(this.popup_F8B6911A_F752_43CA_41D4_DAED5D716626, {'backgroundColorDirection':'vertical','paddingRight':5,'rollOverIconLineWidth':5,'pressedBackgroundOpacity':0.3,'pressedIconLineWidth':5,'pressedIconWidth':20,'borderSize':0,'paddingLeft':5,'rollOverIconColor':'#666666','iconWidth':20,'paddingBottom':5,'rollOverBackgroundOpacity':0.3,'pressedBorderColor':'#000000','rollOverBorderSize':0,'iconHeight':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'iconColor':'#000000','iconLineWidth':5,'rollOverIconWidth':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedBorderSize':0,'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000','rollOverIconHeight':20,'backgroundOpacity':0.3,'pressedIconHeight':20,'rollOverBackgroundColorDirection':'vertical','pressedIconColor':'#888888','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundColorDirection':'vertical'}, this.ImageResource_EF17F945_F7B3_C3BE_41B9_077E702740E4, null, null, null, null, false)",
   "mapColor": "#FF0000",
   "toolTip": "INFORMASI MENGENAI TEMPAT PENYIMPANAN"
  }
 ],
 "maps": [
  {
   "hfov": 16.61,
   "yaw": 25.56,
   "image": {
    "levels": [
     {
      "url": "media/panorama_DF0B7A68_D522_5E96_41E4_2FA8606D5645_1_HS_4_0_0_map.gif",
      "width": 26,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -14.21,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "items": [
  {
   "hfov": 16.61,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_DF0B7A68_D522_5E96_41E4_2FA8606D5645_1_HS_4_0.png",
      "width": 283,
      "height": 171,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -14.21,
   "yaw": 25.56,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_E2B119DF_ED46_89E5_41EC_54B57AB333B2",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_DF09300A_D522_2AAB_41C0_2217A91877F7, this.camera_A6B9FC47_B665_55CD_41E6_444A039407E3); this.mainPlayList.set('selectedIndex', 22)",
   "mapColor": "#FF0000",
   "toolTip": "MENUJU JEMBATAN BALE TELAGA"
  }
 ],
 "maps": [
  {
   "hfov": 8.35,
   "yaw": 177.21,
   "image": {
    "levels": [
     {
      "url": "media/panorama_DF62FED0_D522_37B6_41C2_93651E251542_1_HS_1_0_0_map.gif",
      "width": 29,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -32.45,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_FAC5D355_EE5B_0099_4192_56428901FAF3",
   "yaw": 177.21,
   "pitch": -32.45,
   "hfov": 8.35,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_FC5443E1_E152_F701_41DD_EAE16EB97257",
 "data": {
  "label": "Arrow 01c"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 35.54,
   "yaw": 154.91,
   "image": {
    "levels": [
     {
      "url": "media/panorama_DF62FED0_D522_37B6_41C2_93651E251542_1_HS_3_0_0_map.gif",
      "width": 22,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -70.87,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "items": [
  {
   "hfov": 35.54,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_DF62FED0_D522_37B6_41C2_93651E251542_1_HS_3_0.png",
      "width": 1792,
      "height": 1279,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -70.87,
   "yaw": 154.91,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_093C9D29_1B38_B4E8_41B3_5A424CA49CA1",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.showPopupPanoramaOverlay(this.popup_E7655172_F771_C25A_41AA_3B050C71F6D0, {'backgroundColorDirection':'vertical','paddingRight':5,'rollOverIconLineWidth':5,'pressedBackgroundOpacity':0.3,'pressedIconLineWidth':5,'pressedIconWidth':20,'borderSize':0,'paddingLeft':5,'rollOverIconColor':'#666666','iconWidth':20,'paddingBottom':5,'rollOverBackgroundOpacity':0.3,'pressedBorderColor':'#000000','rollOverBorderSize':0,'iconHeight':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'iconColor':'#000000','iconLineWidth':5,'rollOverIconWidth':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedBorderSize':0,'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000','rollOverIconHeight':20,'backgroundOpacity':0.3,'pressedIconHeight':20,'rollOverBackgroundColorDirection':'vertical','pressedIconColor':'#888888','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundColorDirection':'vertical'}, this.ImageResource_EF239965_F7B3_C27E_41D2_9441F57D1827, null, null, null, null, false)",
   "mapColor": "#FF0000",
   "toolTip": "INFORMASI MENGENAI BALE TELAGE"
  }
 ],
 "maps": [
  {
   "hfov": 12.66,
   "yaw": -1.61,
   "image": {
    "levels": [
     {
      "url": "media/panorama_DF62FED0_D522_37B6_41C2_93651E251542_1_HS_4_0_0_map.gif",
      "width": 26,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 15.77,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "items": [
  {
   "hfov": 12.66,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_DF62FED0_D522_37B6_41C2_93651E251542_1_HS_4_0.png",
      "width": 217,
      "height": 132,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 15.77,
   "yaw": -1.61,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_E2C912C3_ED41_FBDD_41C3_D345AAEE53E7",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "toolTipShadowBlurRadius": 3,
 "id": "viewer_uidB8DC984B_B665_5DC4_41BA_9F6A0AACB90E",
 "toolTipOpacity": 1,
 "toolTipPaddingBottom": 4,
 "toolTipFontSize": "1.11vmin",
 "toolTipTextShadowColor": "#000000",
 "playbackBarHeadBorderRadius": 0,
 "playbackBarBorderSize": 0,
 "minHeight": 50,
 "playbackBarProgressOpacity": 1,
 "playbackBarHeadBorderColor": "#000000",
 "playbackBarBackgroundOpacity": 1,
 "shadow": false,
 "progressLeft": 0,
 "paddingBottom": 0,
 "width": "100%",
 "playbackBarHeadBorderSize": 0,
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarHeadShadowColor": "#000000",
 "toolTipTextShadowBlurRadius": 3,
 "toolTipShadowColor": "#333333",
 "toolTipFontWeight": "normal",
 "progressRight": 0,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "vrPointerSelectionTime": 2000,
 "progressOpacity": 1,
 "paddingRight": 0,
 "firstTransitionDuration": 0,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "borderSize": 0,
 "progressBottom": 2,
 "progressBackgroundOpacity": 1,
 "toolTipFontStyle": "normal",
 "height": "100%",
 "playbackBarOpacity": 1,
 "toolTipShadowOpacity": 1,
 "toolTipFontFamily": "Arial",
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "vrPointerColor": "#FFFFFF",
 "propagateClick": false,
 "progressHeight": 10,
 "toolTipShadowHorizontalLength": 0,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "toolTipTextShadowOpacity": 0,
 "playbackBarHeadShadowOpacity": 0.7,
 "progressBarOpacity": 1,
 "progressBorderSize": 0,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderRadius": 0,
 "toolTipShadowVerticalLength": 0,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "class": "ViewerArea",
 "toolTipFontColor": "#606060",
 "progressBackgroundColorRatios": [
  0
 ],
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarLeft": 0,
 "transitionDuration": 500,
 "displayTooltipInTouchScreens": true,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "playbackBarHeadHeight": 15,
 "toolTipBackgroundColor": "#F6F6F6",
 "progressBackgroundColorDirection": "vertical",
 "playbackBarBottom": 0,
 "transitionMode": "blending",
 "paddingTop": 0,
 "progressBorderColor": "#000000",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBarBorderColor": "#000000",
 "minWidth": 100,
 "playbackBarHeadOpacity": 1,
 "toolTipBorderSize": 1,
 "toolTipPaddingTop": 4,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipPaddingLeft": 6,
 "toolTipPaddingRight": 6,
 "paddingLeft": 0,
 "toolTipDisplayTime": 600,
 "playbackBarHeight": 10,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "borderRadius": 0,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarBackgroundColorDirection": "vertical",
 "playbackBarHeadWidth": 6,
 "playbackBarRight": 0,
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarHeadShadowVerticalLength": 0,
 "toolTipBorderRadius": 3,
 "progressBarBorderSize": 0,
 "playbackBarProgressBorderSize": 0,
 "toolTipBorderColor": "#767676",
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "toolTipShadowSpread": 0,
 "playbackBarBorderRadius": 0,
 "data": {
  "name": "ViewerArea2956"
 },
 "playbackBarProgressBorderColor": "#000000"
},
{
 "toolTipShadowBlurRadius": 3,
 "id": "viewer_uidB8ABE85B_B665_5DC5_41C3_11AFB37BB933",
 "toolTipOpacity": 1,
 "toolTipPaddingBottom": 4,
 "toolTipFontSize": "1.11vmin",
 "toolTipTextShadowColor": "#000000",
 "playbackBarHeadBorderRadius": 0,
 "playbackBarBorderSize": 0,
 "minHeight": 50,
 "playbackBarProgressOpacity": 1,
 "playbackBarHeadBorderColor": "#000000",
 "playbackBarBackgroundOpacity": 1,
 "shadow": false,
 "progressLeft": 0,
 "paddingBottom": 0,
 "width": "100%",
 "playbackBarHeadBorderSize": 0,
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarHeadShadowColor": "#000000",
 "toolTipTextShadowBlurRadius": 3,
 "toolTipShadowColor": "#333333",
 "toolTipFontWeight": "normal",
 "progressRight": 0,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "vrPointerSelectionTime": 2000,
 "progressOpacity": 1,
 "paddingRight": 0,
 "firstTransitionDuration": 0,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "borderSize": 0,
 "progressBottom": 2,
 "progressBackgroundOpacity": 1,
 "toolTipFontStyle": "normal",
 "height": "100%",
 "playbackBarOpacity": 1,
 "toolTipShadowOpacity": 1,
 "toolTipFontFamily": "Arial",
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "vrPointerColor": "#FFFFFF",
 "propagateClick": false,
 "progressHeight": 10,
 "toolTipShadowHorizontalLength": 0,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "toolTipTextShadowOpacity": 0,
 "playbackBarHeadShadowOpacity": 0.7,
 "progressBarOpacity": 1,
 "progressBorderSize": 0,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderRadius": 0,
 "toolTipShadowVerticalLength": 0,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "class": "ViewerArea",
 "toolTipFontColor": "#606060",
 "progressBackgroundColorRatios": [
  0
 ],
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarLeft": 0,
 "transitionDuration": 500,
 "displayTooltipInTouchScreens": true,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "playbackBarHeadHeight": 15,
 "toolTipBackgroundColor": "#F6F6F6",
 "progressBackgroundColorDirection": "vertical",
 "playbackBarBottom": 0,
 "transitionMode": "blending",
 "paddingTop": 0,
 "progressBorderColor": "#000000",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBarBorderColor": "#000000",
 "minWidth": 100,
 "playbackBarHeadOpacity": 1,
 "toolTipBorderSize": 1,
 "toolTipPaddingTop": 4,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipPaddingLeft": 6,
 "toolTipPaddingRight": 6,
 "paddingLeft": 0,
 "toolTipDisplayTime": 600,
 "playbackBarHeight": 10,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "borderRadius": 0,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarBackgroundColorDirection": "vertical",
 "playbackBarHeadWidth": 6,
 "playbackBarRight": 0,
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarHeadShadowVerticalLength": 0,
 "toolTipBorderRadius": 3,
 "progressBarBorderSize": 0,
 "playbackBarProgressBorderSize": 0,
 "toolTipBorderColor": "#767676",
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "toolTipShadowSpread": 0,
 "playbackBarBorderRadius": 0,
 "data": {
  "name": "ViewerArea2958"
 },
 "playbackBarProgressBorderColor": "#000000"
},
{
 "toolTipShadowBlurRadius": 3,
 "id": "viewer_uidB8BF886A_B665_5DC4_41B4_7ED8AF79C052",
 "toolTipOpacity": 1,
 "toolTipPaddingBottom": 4,
 "toolTipFontSize": "1.11vmin",
 "toolTipTextShadowColor": "#000000",
 "playbackBarHeadBorderRadius": 0,
 "playbackBarBorderSize": 0,
 "minHeight": 50,
 "playbackBarProgressOpacity": 1,
 "playbackBarHeadBorderColor": "#000000",
 "playbackBarBackgroundOpacity": 1,
 "shadow": false,
 "progressLeft": 0,
 "paddingBottom": 0,
 "width": "100%",
 "playbackBarHeadBorderSize": 0,
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarHeadShadowColor": "#000000",
 "toolTipTextShadowBlurRadius": 3,
 "toolTipShadowColor": "#333333",
 "toolTipFontWeight": "normal",
 "progressRight": 0,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "vrPointerSelectionTime": 2000,
 "progressOpacity": 1,
 "paddingRight": 0,
 "firstTransitionDuration": 0,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "borderSize": 0,
 "progressBottom": 2,
 "progressBackgroundOpacity": 1,
 "toolTipFontStyle": "normal",
 "height": "100%",
 "playbackBarOpacity": 1,
 "toolTipShadowOpacity": 1,
 "toolTipFontFamily": "Arial",
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "vrPointerColor": "#FFFFFF",
 "propagateClick": false,
 "progressHeight": 10,
 "toolTipShadowHorizontalLength": 0,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "toolTipTextShadowOpacity": 0,
 "playbackBarHeadShadowOpacity": 0.7,
 "progressBarOpacity": 1,
 "progressBorderSize": 0,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderRadius": 0,
 "toolTipShadowVerticalLength": 0,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "class": "ViewerArea",
 "toolTipFontColor": "#606060",
 "progressBackgroundColorRatios": [
  0
 ],
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarLeft": 0,
 "transitionDuration": 500,
 "displayTooltipInTouchScreens": true,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "playbackBarHeadHeight": 15,
 "toolTipBackgroundColor": "#F6F6F6",
 "progressBackgroundColorDirection": "vertical",
 "playbackBarBottom": 0,
 "transitionMode": "blending",
 "paddingTop": 0,
 "progressBorderColor": "#000000",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBarBorderColor": "#000000",
 "minWidth": 100,
 "playbackBarHeadOpacity": 1,
 "toolTipBorderSize": 1,
 "toolTipPaddingTop": 4,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipPaddingLeft": 6,
 "toolTipPaddingRight": 6,
 "paddingLeft": 0,
 "toolTipDisplayTime": 600,
 "playbackBarHeight": 10,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "borderRadius": 0,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarBackgroundColorDirection": "vertical",
 "playbackBarHeadWidth": 6,
 "playbackBarRight": 0,
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarHeadShadowVerticalLength": 0,
 "toolTipBorderRadius": 3,
 "progressBarBorderSize": 0,
 "playbackBarProgressBorderSize": 0,
 "toolTipBorderColor": "#767676",
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "toolTipShadowSpread": 0,
 "playbackBarBorderRadius": 0,
 "data": {
  "name": "ViewerArea2961"
 },
 "playbackBarProgressBorderColor": "#000000"
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_DF0AD51E_D522_6AAB_41E0_02491679C908, this.camera_A6407AFD_B665_52BC_41D4_C6A6081BB319); this.mainPlayList.set('selectedIndex', 7)",
   "mapColor": "#FF0000",
   "toolTip": "BALE PAWEDAAN"
  }
 ],
 "maps": [
  {
   "hfov": 16.12,
   "yaw": 89.69,
   "image": {
    "levels": [
     {
      "url": "media/panorama_DF0AF60D_D522_76A9_41E3_6D08C1C16B94_1_HS_1_0_0_map.gif",
      "width": 61,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -7.68,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_FA39E340_EE5B_00F8_41DF_C6CB22232F5A",
   "yaw": 89.69,
   "pitch": -7.68,
   "hfov": 16.12,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_C4AFE296_D562_2FBA_41E7_D91CB5600C2D",
 "data": {
  "label": "Circle 03c"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_DF0AA7F2_D522_357A_41E7_BB88309A039D, this.camera_A65F6B3C_B665_53BC_41E2_6DFE93907CB3); this.mainPlayList.set('selectedIndex', 5)",
   "mapColor": "#FF0000",
   "toolTip": "AREA MASKERDAM"
  }
 ],
 "maps": [
  {
   "hfov": 17.38,
   "yaw": -2.84,
   "image": {
    "levels": [
     {
      "url": "media/panorama_DF0AF60D_D522_76A9_41E3_6D08C1C16B94_1_HS_3_0_0_map.gif",
      "width": 37,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -18.9,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_FA391340_EE5B_00F8_41EC_F12D69656F3E",
   "yaw": -2.84,
   "pitch": -18.9,
   "hfov": 17.38,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_D1F3623C_DF57_B107_41EB_C73075308A69",
 "data": {
  "label": "Circle Arrow 01b"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_DF0968AD_D521_DBEE_41E8_53FAFFC84B8C, this.camera_A64E1B1C_B665_537C_41E6_C917D20EAFAB); this.mainPlayList.set('selectedIndex', 3)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 5.3,
   "yaw": 175.19,
   "image": {
    "levels": [
     {
      "url": "media/panorama_DF0AF60D_D522_76A9_41E3_6D08C1C16B94_1_HS_4_0_0_map.gif",
      "width": 29,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -19.81,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_FA395341_EE5B_00F8_41BF_04C71754CE6F",
   "yaw": 175.19,
   "pitch": -19.81,
   "hfov": 5.3,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_D0DD0385_DF51_D701_41D0_4FAA1FB5E77A",
 "data": {
  "label": "Arrow 01c"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 31.73,
   "yaw": 155.77,
   "image": {
    "levels": [
     {
      "url": "media/panorama_DF0AF60D_D522_76A9_41E3_6D08C1C16B94_1_HS_9_0_0_map.gif",
      "width": 18,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -55.87,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "items": [
  {
   "hfov": 31.73,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_DF0AF60D_D522_76A9_41E3_6D08C1C16B94_1_HS_9_0.png",
      "width": 935,
      "height": 794,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -55.87,
   "yaw": 155.77,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_0AC1A563_1B3B_549F_41AD_A088D4968249",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.showPopupPanoramaOverlay(this.popup_F9264665_F693_7FCB_41D9_56AC90E2B230, {'backgroundColorDirection':'vertical','paddingRight':5,'rollOverIconLineWidth':5,'pressedBackgroundOpacity':0.3,'pressedIconLineWidth':5,'pressedIconWidth':20,'borderSize':0,'paddingLeft':5,'rollOverIconColor':'#666666','iconWidth':20,'paddingBottom':5,'rollOverBackgroundOpacity':0.3,'pressedBorderColor':'#000000','rollOverBorderSize':0,'iconHeight':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'iconColor':'#000000','iconLineWidth':5,'rollOverIconWidth':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedBorderSize':0,'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000','rollOverIconHeight':20,'backgroundOpacity':0.3,'pressedIconHeight':20,'rollOverBackgroundColorDirection':'vertical','pressedIconColor':'#888888','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundColorDirection':'vertical'}, this.ImageResource_F8F025C1_F751_C2B6_41C4_B170115F1984, null, null, null, null, false)",
   "mapColor": "#FF0000",
   "toolTip": "INFORMASI MENGENAI AREA MASKERDAM"
  }
 ],
 "maps": [
  {
   "hfov": 8.51,
   "yaw": -107.39,
   "image": {
    "levels": [
     {
      "url": "media/panorama_DF0AF60D_D522_76A9_41E3_6D08C1C16B94_1_HS_10_0_0_map.gif",
      "width": 30,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 3.78,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "items": [
  {
   "hfov": 8.51,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_DF0AF60D_D522_76A9_41E3_6D08C1C16B94_1_HS_10_0.png",
      "width": 141,
      "height": 74,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 3.78,
   "yaw": -107.39,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_E3B942E3_ED43_7BDD_41CB_58339C3D8549",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.showPopupPanoramaOverlay(this.popup_8C0559AC_9D24_C1BC_41D8_C2A80CF1634E, {'backgroundColorDirection':'vertical','paddingRight':5,'rollOverIconLineWidth':5,'pressedBackgroundOpacity':0.3,'pressedIconLineWidth':5,'pressedIconWidth':20,'borderSize':0,'paddingLeft':5,'rollOverIconColor':'#666666','iconWidth':20,'paddingBottom':5,'rollOverBackgroundOpacity':0.3,'pressedBorderColor':'#000000','rollOverBorderSize':0,'iconHeight':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'iconColor':'#000000','iconLineWidth':5,'rollOverIconWidth':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedBorderSize':0,'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000','rollOverIconHeight':20,'backgroundOpacity':0.3,'pressedIconHeight':20,'rollOverBackgroundColorDirection':'vertical','pressedIconColor':'#888888','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundColorDirection':'vertical'}, this.ImageResource_89BE29F6_9D24_41AD_41DF_CC51545967B3, null, null, null, null, false)",
   "mapColor": "#FF0000",
   "toolTip": "INFORMASI MASKERDAM"
  }
 ],
 "maps": [
  {
   "hfov": 5.91,
   "yaw": -51.94,
   "image": {
    "levels": [
     {
      "url": "media/panorama_DF0AF60D_D522_76A9_41E3_6D08C1C16B94_0_HS_19_0_0_map.gif",
      "width": 29,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 5.3,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "items": [
  {
   "hfov": 5.91,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_DF0AF60D_D522_76A9_41E3_6D08C1C16B94_0_HS_19_0.png",
      "width": 98,
      "height": 53,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 5.3,
   "yaw": -51.94,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_8DEF30F8_9D24_FFA4_41DE_E57BEF6C6E43",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.showPopupPanoramaOverlay(this.popup_8C3C6B67_9D25_C2AB_41D2_95FE5CEA254B, {'backgroundColorDirection':'vertical','paddingRight':5,'rollOverIconLineWidth':5,'pressedBackgroundOpacity':0.3,'pressedIconLineWidth':5,'pressedIconWidth':20,'borderSize':0,'paddingLeft':5,'rollOverIconColor':'#666666','iconWidth':20,'paddingBottom':5,'rollOverBackgroundOpacity':0.3,'pressedBorderColor':'#000000','rollOverBorderSize':0,'iconHeight':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'iconColor':'#000000','iconLineWidth':5,'rollOverIconWidth':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedBorderSize':0,'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000','rollOverIconHeight':20,'backgroundOpacity':0.3,'pressedIconHeight':20,'rollOverBackgroundColorDirection':'vertical','pressedIconColor':'#888888','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundColorDirection':'vertical'}, this.ImageResource_89B8C9F6_9D24_41AD_41D7_A26D3F218DB9, null, null, null, null, false)",
   "mapColor": "#FF0000",
   "toolTip": "INFORMASI BALE PAMADESAN"
  }
 ],
 "maps": [
  {
   "hfov": 7.04,
   "yaw": 18.5,
   "image": {
    "levels": [
     {
      "url": "media/panorama_DF0AF60D_D522_76A9_41E3_6D08C1C16B94_0_HS_20_0_0_map.gif",
      "width": 27,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 7.94,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "items": [
  {
   "hfov": 7.04,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_DF0AF60D_D522_76A9_41E3_6D08C1C16B94_0_HS_20_0.png",
      "width": 117,
      "height": 69,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 7.94,
   "yaw": 18.5,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_8C6B8F55_9D24_42EF_41C4_D3312A21D664",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.showPopupPanoramaOverlay(this.popup_8C35679B_9D3C_419B_41E2_840DF311F1F2, {'backgroundColorDirection':'vertical','paddingRight':5,'rollOverIconLineWidth':5,'pressedBackgroundOpacity':0.3,'pressedIconLineWidth':5,'pressedIconWidth':20,'borderSize':0,'paddingLeft':5,'rollOverIconColor':'#666666','iconWidth':20,'paddingBottom':5,'rollOverBackgroundOpacity':0.3,'pressedBorderColor':'#000000','rollOverBorderSize':0,'iconHeight':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'iconColor':'#000000','iconLineWidth':5,'rollOverIconWidth':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedBorderSize':0,'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000','rollOverIconHeight':20,'backgroundOpacity':0.3,'pressedIconHeight':20,'rollOverBackgroundColorDirection':'vertical','pressedIconColor':'#888888','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundColorDirection':'vertical'}, this.ImageResource_89BBAA01_9D24_4264_41E3_79C30A1CD7ED, null, null, null, null, false)",
   "mapColor": "#FF0000",
   "toolTip": "INFORMASI BALE PAWEDAAN"
  }
 ],
 "maps": [
  {
   "hfov": 7.09,
   "yaw": 78.68,
   "image": {
    "levels": [
     {
      "url": "media/panorama_DF0AF60D_D522_76A9_41E3_6D08C1C16B94_0_HS_21_0_0_map.gif",
      "width": 27,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 4.22,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "items": [
  {
   "hfov": 7.09,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_DF0AF60D_D522_76A9_41E3_6D08C1C16B94_0_HS_21_0.png",
      "width": 117,
      "height": 69,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 4.22,
   "yaw": 78.68,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_8C1B4D60_9D24_46A5_41D2_581F0D6C5068",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_DF0B7A68_D522_5E96_41E4_2FA8606D5645, this.camera_B9D719E2_B665_5EC4_41E0_5647E1C82C9F); this.mainPlayList.set('selectedIndex', 13)",
   "mapColor": "#FF0000",
   "toolTip": "RUANG PENYIMPANAN"
  }
 ],
 "maps": [
  {
   "hfov": 17.35,
   "yaw": -75.14,
   "image": {
    "levels": [
     {
      "url": "media/panorama_DF0BFC23_D522_7A9A_41E2_705D7646CD69_1_HS_0_0_0_map.gif",
      "width": 37,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -36.99,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_FACBE34B_EE5B_0089_41C8_426914119A85",
   "yaw": -75.14,
   "pitch": -36.99,
   "hfov": 17.35,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_C3236023_D53E_6A9A_41E5_05B5A857D095",
 "data": {
  "label": "Circle Arrow 01b"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_DF0B18B0_D522_3BF6_41E7_E97BDC8D73D5, this.camera_B9A4BA0B_B665_5D45_41E3_A85F910782AB); this.mainPlayList.set('selectedIndex', 14)",
   "mapColor": "#FF0000",
   "toolTip": "TEMPAT TIDUR RAJA"
  }
 ],
 "maps": [
  {
   "hfov": 19.77,
   "yaw": 131.75,
   "image": {
    "levels": [
     {
      "url": "media/panorama_DF0BFC23_D522_7A9A_41E2_705D7646CD69_1_HS_1_0_0_map.gif",
      "width": 37,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -35.06,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_FACB034B_EE5B_0089_41C7_D0F15B687D8D",
   "yaw": 131.75,
   "pitch": -35.06,
   "hfov": 19.77,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_C31A0A31_D53F_FEF6_41E3_E2F93B36C211",
 "data": {
  "label": "Circle Arrow 01b"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_DF08C6FA_D523_D76A_41D5_7F86EC1FD1C3, this.camera_B9F96984_B665_5F4C_41E5_ED61989447B0); this.mainPlayList.set('selectedIndex', 15)",
   "mapColor": "#FF0000",
   "toolTip": "MENUJU LORONG GALERI"
  }
 ],
 "maps": [
  {
   "hfov": 19.07,
   "yaw": 29.2,
   "image": {
    "levels": [
     {
      "url": "media/panorama_DF0BFC23_D522_7A9A_41E2_705D7646CD69_1_HS_2_0_0_map.gif",
      "width": 37,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -37.87,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_FACAB34B_EE5B_0089_41E9_55124AF6398A",
   "yaw": 29.2,
   "pitch": -37.87,
   "hfov": 19.07,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_C30E796C_D53E_3D6E_41B7_CB427261BC1E",
 "data": {
  "label": "Circle Arrow 01b"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_DF0BAF14_D522_36BE_4182_2D68BF6843DE, this.camera_B9C6B9B3_B665_5F44_41E0_353F17202A44); this.mainPlayList.set('selectedIndex', 11)",
   "mapColor": "#FF0000",
   "toolTip": "MENUJU RUANG DISKUSI "
  }
 ],
 "maps": [
  {
   "hfov": 10.99,
   "yaw": -151.15,
   "image": {
    "levels": [
     {
      "url": "media/panorama_DF0BFC23_D522_7A9A_41E2_705D7646CD69_1_HS_3_0_0_map.gif",
      "width": 29,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -32.19,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_FACA334C_EE5B_008F_41E5_640DCDFAE945",
   "yaw": -151.15,
   "pitch": -32.19,
   "hfov": 10.99,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_C4358F62_D708_1F2A_41DB_6A4F6C88DCFF",
 "data": {
  "label": "Arrow 01c"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 39.04,
   "yaw": 156.03,
   "image": {
    "levels": [
     {
      "url": "media/panorama_DF0BFC23_D522_7A9A_41E2_705D7646CD69_1_HS_8_0_0_map.gif",
      "width": 18,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -56.85,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "items": [
  {
   "hfov": 39.04,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_DF0BFC23_D522_7A9A_41E2_705D7646CD69_1_HS_8_0.png",
      "width": 1180,
      "height": 1017,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -56.85,
   "yaw": 156.03,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_090B1E2E_1B38_D4E9_4192_EAA54F6398FC",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.showPopupPanoramaOverlay(this.popup_E7346AA2_F756_46FA_41E5_AF929DF86AE9, {'backgroundColorDirection':'vertical','paddingRight':5,'rollOverIconLineWidth':5,'pressedBackgroundOpacity':0.3,'pressedIconLineWidth':5,'pressedIconWidth':20,'borderSize':0,'paddingLeft':5,'rollOverIconColor':'#666666','iconWidth':20,'paddingBottom':5,'rollOverBackgroundOpacity':0.3,'pressedBorderColor':'#000000','rollOverBorderSize':0,'iconHeight':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'iconColor':'#000000','iconLineWidth':5,'rollOverIconWidth':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedBorderSize':0,'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000','rollOverIconHeight':20,'backgroundOpacity':0.3,'pressedIconHeight':20,'rollOverBackgroundColorDirection':'vertical','pressedIconColor':'#888888','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundColorDirection':'vertical'}, this.ImageResource_EF0B4935_F7B3_C3DE_41D8_271AC088866B, null, null, null, null, false)",
   "mapColor": "#FF0000",
   "toolTip": "INFORMASI MENGENAI TEMPAT PENYIMPANAN"
  }
 ],
 "maps": [
  {
   "hfov": 12.18,
   "yaw": -74.54,
   "image": {
    "levels": [
     {
      "url": "media/panorama_DF0BFC23_D522_7A9A_41E2_705D7646CD69_1_HS_9_0_0_map.gif",
      "width": 23,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -9.26,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "items": [
  {
   "hfov": 12.18,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_DF0BFC23_D522_7A9A_41E2_705D7646CD69_1_HS_9_0.png",
      "width": 204,
      "height": 138,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -9.26,
   "yaw": -74.54,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_FD1A724C_ED42_9AEB_41B3_E8C9D4242838",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.showPopupPanoramaOverlay(this.popup_E7D8F6BE_F752_4ECA_41BA_984FC4152B31, {'backgroundColorDirection':'vertical','paddingRight':5,'rollOverIconLineWidth':5,'pressedBackgroundOpacity':0.3,'pressedIconLineWidth':5,'pressedIconWidth':20,'borderSize':0,'paddingLeft':5,'rollOverIconColor':'#666666','iconWidth':20,'paddingBottom':5,'rollOverBackgroundOpacity':0.3,'pressedBorderColor':'#000000','rollOverBorderSize':0,'iconHeight':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'iconColor':'#000000','iconLineWidth':5,'rollOverIconWidth':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedBorderSize':0,'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000','rollOverIconHeight':20,'backgroundOpacity':0.3,'pressedIconHeight':20,'rollOverBackgroundColorDirection':'vertical','pressedIconColor':'#888888','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundColorDirection':'vertical'}, this.ImageResource_EF0A6935_F7B3_C3DE_41D2_A72AD36439D8, null, null, null, null, false)",
   "mapColor": "#FF0000",
   "toolTip": "INFORMASI MENGENAI TEMPAT TIDUR"
  }
 ],
 "maps": [
  {
   "hfov": 13.39,
   "yaw": 133.26,
   "image": {
    "levels": [
     {
      "url": "media/panorama_DF0BFC23_D522_7A9A_41E2_705D7646CD69_1_HS_10_0_0_map.gif",
      "width": 25,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -13.83,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "items": [
  {
   "hfov": 13.39,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_DF0BFC23_D522_7A9A_41E2_705D7646CD69_1_HS_10_0.png",
      "width": 227,
      "height": 144,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -13.83,
   "yaw": 133.26,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_E2B3580E_ED41_7667_41E9_3D28C3BCF58C",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.showPopupPanoramaOverlay(this.popup_E7465D83_F756_C2BA_41DA_9684D5EE86E5, {'backgroundColorDirection':'vertical','paddingRight':5,'rollOverIconLineWidth':5,'pressedBackgroundOpacity':0.3,'pressedIconLineWidth':5,'pressedIconWidth':20,'borderSize':0,'paddingLeft':5,'rollOverIconColor':'#666666','iconWidth':20,'paddingBottom':5,'rollOverBackgroundOpacity':0.3,'pressedBorderColor':'#000000','rollOverBorderSize':0,'iconHeight':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'iconColor':'#000000','iconLineWidth':5,'rollOverIconWidth':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedBorderSize':0,'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000','rollOverIconHeight':20,'backgroundOpacity':0.3,'pressedIconHeight':20,'rollOverBackgroundColorDirection':'vertical','pressedIconColor':'#888888','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundColorDirection':'vertical'}, this.ImageResource_EF156945_F7B3_C3BE_41E2_96CCC1143678, null, null, null, null, false)",
   "mapColor": "#FF0000",
   "toolTip": "INFORMASI MENGENAI RUANG DISKUSI"
  }
 ],
 "maps": [
  {
   "hfov": 12.32,
   "yaw": -151.4,
   "image": {
    "levels": [
     {
      "url": "media/panorama_DF0BFC23_D522_7A9A_41E2_705D7646CD69_1_HS_11_0_0_map.gif",
      "width": 26,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -15.58,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "items": [
  {
   "hfov": 12.32,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_DF0BFC23_D522_7A9A_41E2_705D7646CD69_1_HS_11_0.png",
      "width": 211,
      "height": 126,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -15.58,
   "yaw": -151.4,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_FDA4F35C_ED41_9AEB_41E8_579189E18D76",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.showPopupPanoramaOverlay(this.popup_E73E8690_F751_CED6_41EE_0116A96F93E8, {'backgroundColorDirection':'vertical','paddingRight':5,'rollOverIconLineWidth':5,'pressedBackgroundOpacity':0.3,'pressedIconLineWidth':5,'pressedIconWidth':20,'borderSize':0,'paddingLeft':5,'rollOverIconColor':'#666666','iconWidth':20,'paddingBottom':5,'rollOverBackgroundOpacity':0.3,'pressedBorderColor':'#000000','rollOverBorderSize':0,'iconHeight':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'iconColor':'#000000','iconLineWidth':5,'rollOverIconWidth':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedBorderSize':0,'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000','rollOverIconHeight':20,'backgroundOpacity':0.3,'pressedIconHeight':20,'rollOverBackgroundColorDirection':'vertical','pressedIconColor':'#888888','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundColorDirection':'vertical'}, this.ImageResource_EF149945_F7B3_C3BE_41ED_2B154DDDBE00, null, null, null, null, false)",
   "mapColor": "#FF0000",
   "toolTip": "INFORMASI MENGENAI LORONG GALERI"
  }
 ],
 "maps": [
  {
   "hfov": 6.16,
   "yaw": 27.87,
   "image": {
    "levels": [
     {
      "url": "media/panorama_DF0BFC23_D522_7A9A_41E2_705D7646CD69_1_HS_12_0_0_map.gif",
      "width": 18,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -7.49,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "items": [
  {
   "hfov": 6.16,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_DF0BFC23_D522_7A9A_41E2_705D7646CD69_1_HS_12_0.png",
      "width": 102,
      "height": 89,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -7.49,
   "yaw": 27.87,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_E2171D85_ED46_8E65_41B8_509CB5213645",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_DF08F593_D523_F5BA_41E5_3AAEBE3AF892, this.camera_B89A2D81_B665_5745_41DF_A03E0C516C4F); this.mainPlayList.set('selectedIndex', 16)",
   "mapColor": "#FF0000",
   "toolTip": "LORONG GALERI"
  }
 ],
 "maps": [
  {
   "hfov": 13.13,
   "yaw": -80.02,
   "image": {
    "levels": [
     {
      "url": "media/panorama_DF08C6FA_D523_D76A_41D5_7F86EC1FD1C3_1_HS_0_0_0_map.gif",
      "width": 37,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -18.75,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_FAC8D34E_EE5B_008B_41EC_B7CBE3B68EEC",
   "yaw": -80.02,
   "pitch": -18.75,
   "hfov": 13.13,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_CD785272_D522_6F7A_41E2_2010DFC6AF65",
 "data": {
  "label": "Circle Arrow 01b"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_DF09427F_D522_2F69_41E4_B7F711B0C20C, this.camera_B8910D71_B665_57C4_41E1_E5B4768A6071); this.mainPlayList.set('selectedIndex', 19)",
   "mapColor": "#FF0000",
   "toolTip": "LORONG GALERI"
  }
 ],
 "maps": [
  {
   "hfov": 11.1,
   "yaw": 101.07,
   "image": {
    "levels": [
     {
      "url": "media/panorama_DF08C6FA_D523_D76A_41D5_7F86EC1FD1C3_1_HS_1_0_0_map.gif",
      "width": 37,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -16.16,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_FAC8034F_EE5B_0089_41E4_A800F15846AC",
   "yaw": 101.07,
   "pitch": -16.16,
   "hfov": 11.1,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_CD71AE37_D523_D6FA_41E0_213B048E111B",
 "data": {
  "label": "Circle Arrow 01b"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_DF0BFC23_D522_7A9A_41E2_705D7646CD69, this.camera_B9673DA0_B665_5744_41E1_DB16BDE1BBF0); this.mainPlayList.set('selectedIndex', 12)",
   "mapColor": "#FF0000",
   "toolTip": "KELUAR DARI LORONG GALERI"
  }
 ],
 "maps": [
  {
   "hfov": 7.45,
   "yaw": -168.29,
   "image": {
    "levels": [
     {
      "url": "media/panorama_DF08C6FA_D523_D76A_41D5_7F86EC1FD1C3_1_HS_2_0_0_map.gif",
      "width": 29,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -36.24,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_FACFA34F_EE5B_0089_41EC_E21FD5FEA3AA",
   "yaw": -168.29,
   "pitch": -36.24,
   "hfov": 7.45,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_C5466D29_D718_0326_41EA_A3FA0A3341EE",
 "data": {
  "label": "Arrow 01c"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 55.02,
   "yaw": 144.1,
   "image": {
    "levels": [
     {
      "url": "media/panorama_DF08C6FA_D523_D76A_41D5_7F86EC1FD1C3_1_HS_6_0_0_map.gif",
      "width": 21,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -63.49,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "items": [
  {
   "hfov": 55.02,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_DF08C6FA_D523_D76A_41D5_7F86EC1FD1C3_1_HS_6_0.png",
      "width": 2038,
      "height": 1534,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -63.49,
   "yaw": 144.1,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_0AE8237F_1B38_F368_41A6_C2A9539B8B8D",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.showPopupPanoramaOverlay(this.popup_F838D999_F751_C2D6_41D7_DF61A641B54F, {'backgroundColorDirection':'vertical','paddingRight':5,'rollOverIconLineWidth':5,'pressedBackgroundOpacity':0.3,'pressedIconLineWidth':5,'pressedIconWidth':20,'borderSize':0,'paddingLeft':5,'rollOverIconColor':'#666666','iconWidth':20,'paddingBottom':5,'rollOverBackgroundOpacity':0.3,'pressedBorderColor':'#000000','rollOverBorderSize':0,'iconHeight':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'iconColor':'#000000','iconLineWidth':5,'rollOverIconWidth':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedBorderSize':0,'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000','rollOverIconHeight':20,'backgroundOpacity':0.3,'pressedIconHeight':20,'rollOverBackgroundColorDirection':'vertical','pressedIconColor':'#888888','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundColorDirection':'vertical'}, this.ImageResource_EF137955_F7B3_C25E_41D0_22CCF42E3AF1, null, null, null, null, false)",
   "mapColor": "#FF0000",
   "toolTip": "INFORMASI MENGENAI LORONG GALERI"
  }
 ],
 "maps": [
  {
   "hfov": 18.63,
   "yaw": 17.48,
   "image": {
    "levels": [
     {
      "url": "media/panorama_DF08C6FA_D523_D76A_41D5_7F86EC1FD1C3_1_HS_7_0_0_map.gif",
      "width": 24,
      "height": 15,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -12.72,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "items": [
  {
   "hfov": 18.63,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_DF08C6FA_D523_D76A_41D5_7F86EC1FD1C3_1_HS_7_0.png",
      "width": 315,
      "height": 206,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -12.72,
   "yaw": 17.48,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_E2E1975D_ED42_9AE5_41A0_52C5430CF2AA",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.showPopupPanoramaOverlay(this.popup_E3DF0A58_F772_4656_41E7_27E5A17BEC97, {'backgroundColorDirection':'vertical','paddingRight':5,'rollOverIconLineWidth':5,'pressedBackgroundOpacity':0.3,'pressedIconLineWidth':5,'pressedIconWidth':20,'borderSize':0,'paddingLeft':5,'rollOverIconColor':'#666666','iconWidth':20,'paddingBottom':5,'rollOverBackgroundOpacity':0.3,'pressedBorderColor':'#000000','rollOverBorderSize':0,'iconHeight':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'iconColor':'#000000','iconLineWidth':5,'rollOverIconWidth':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedBorderSize':0,'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000','rollOverIconHeight':20,'backgroundOpacity':0.3,'pressedIconHeight':20,'rollOverBackgroundColorDirection':'vertical','pressedIconColor':'#888888','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundColorDirection':'vertical'}, this.ImageResource_E3EE083B_F752_41CA_41D6_5A20F2FC6C83, null, null, null, null, false)",
   "mapColor": "#FF0000",
   "toolTip": "INFORMASI MENGENAI TOILET PENGUNJUNG"
  }
 ],
 "maps": [
  {
   "hfov": 5.46,
   "yaw": 101.65,
   "image": {
    "levels": [
     {
      "url": "media/panorama_DF08C6FA_D523_D76A_41D5_7F86EC1FD1C3_1_HS_8_0_0_map.gif",
      "width": 26,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.96,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "items": [
  {
   "hfov": 5.46,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_DF08C6FA_D523_D76A_41D5_7F86EC1FD1C3_1_HS_8_0.png",
      "width": 90,
      "height": 55,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.96,
   "yaw": 101.65,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_E24585AD_ED42_B9A5_41D8_8F18705922E1",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_DF0BFC23_D522_7A9A_41E2_705D7646CD69, this.camera_B8867D52_B665_57C7_41E6_141996F508B7); this.mainPlayList.set('selectedIndex', 12)",
   "mapColor": "#FF0000",
   "toolTip": "MENUJU LORONG GALERI"
  }
 ],
 "maps": [
  {
   "hfov": 13.31,
   "yaw": 11.84,
   "image": {
    "levels": [
     {
      "url": "media/panorama_DF0BAF14_D522_36BE_4182_2D68BF6843DE_1_HS_4_0_0_map.gif",
      "width": 61,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -15.78,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_FA362349_EE5B_0089_41E3_D4472CE6C4F0",
   "yaw": 11.84,
   "pitch": -15.78,
   "hfov": 13.31,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_C349D42E_D708_013A_41B2_F1067B330D99",
 "data": {
  "label": "Circle Arrow 01c"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_DF0B714D_D522_EAAE_41DB_DAFE02AA8C1C, this.camera_B8BCAD32_B665_5744_41C7_A7CC0E3387D5); this.mainPlayList.set('selectedIndex', 10); this.mainPlayList.set('selectedIndex', 10)",
   "mapColor": "#FF0000",
   "toolTip": "MENUJU RUANG MAKAN RAJA"
  }
 ],
 "maps": [
  {
   "hfov": 10.39,
   "yaw": -83.5,
   "image": {
    "levels": [
     {
      "url": "media/panorama_DF0BAF14_D522_36BE_4182_2D68BF6843DE_1_HS_5_0_0_map.gif",
      "width": 29,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -39.27,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_FA364349_EE5B_0089_41ED_407B23E75D6B",
   "yaw": -83.5,
   "pitch": -39.27,
   "hfov": 10.39,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_C3484220_D708_0126_41BB_D0B8139C35E9",
 "data": {
  "label": "Arrow 01c"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_DF0B7220_D522_EE96_41E0_735AC8175FE5, this.camera_B8AD5D03_B665_5744_41D0_629CC3A5E4CD); this.mainPlayList.set('selectedIndex', 9)",
   "mapColor": "#FF0000",
   "toolTip": "MENUJU MASKERDAM"
  }
 ],
 "maps": [
  {
   "hfov": 11.9,
   "yaw": -166.06,
   "image": {
    "levels": [
     {
      "url": "media/panorama_DF0BAF14_D522_36BE_4182_2D68BF6843DE_1_HS_6_0_0_map.gif",
      "width": 29,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -36.69,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_FA35E349_EE5B_0089_41EC_7C0CB44E4F64",
   "yaw": -166.06,
   "pitch": -36.69,
   "hfov": 11.9,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_C38E8C45_D708_016E_418B_751971D7B94B",
 "data": {
  "label": "Arrow 01c"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "toolTip": "MAAF DI LARANG MASUK"
  }
 ],
 "maps": [
  {
   "hfov": 15,
   "yaw": 106.67,
   "image": {
    "levels": [
     {
      "url": "media/panorama_DF0BAF14_D522_36BE_4182_2D68BF6843DE_1_HS_7_0_0_map.gif",
      "width": 36,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -49.87,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_FA35734A_EE5B_008B_41E6_D72A0592F88C",
   "yaw": 106.67,
   "pitch": -49.87,
   "hfov": 15,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_F6A8D851_E7EB_3396_41D4_D2BA1B60A166",
 "data": {
  "label": "Arrow 07b"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "if(this.isCardboardViewMode()) { this.showPopupPanoramaVideoOverlay(this.popup_37C2403B_1304_D5E9_41A5_779C1CB8FA68, {'backgroundColorDirection':'vertical','paddingRight':5,'rollOverIconLineWidth':5,'pressedBackgroundOpacity':0.3,'pressedIconLineWidth':5,'pressedIconWidth':20,'borderSize':0,'paddingLeft':5,'rollOverIconColor':'#666666','iconWidth':20,'paddingBottom':5,'rollOverBackgroundOpacity':0.3,'pressedBorderColor':'#000000','rollOverBorderSize':0,'iconHeight':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'iconColor':'#000000','iconLineWidth':5,'rollOverIconWidth':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedBorderSize':0,'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000','rollOverIconHeight':20,'backgroundOpacity':0.3,'pressedIconHeight':20,'rollOverBackgroundColorDirection':'vertical','pressedIconColor':'#888888','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundColorDirection':'vertical'}, true) } else { this.showPopupMedia(this.window_BCED7CB8_B65D_3544_41E2_3A2144110567, this.video_31307D64_1305_2F9F_4183_6128BE5FB45C, this.PlayList_B96D9899_B665_5D44_41D3_E0DEF6457737, '50%', '50%', true, true) }",
   "mapColor": "#FF0000",
   "toolTip": "INFORMASI VIDEO"
  }
 ],
 "maps": [
  {
   "hfov": 9.02,
   "yaw": -29.14,
   "image": {
    "levels": [
     {
      "url": "media/panorama_DF0BAF14_D522_36BE_4182_2D68BF6843DE_1_HS_12_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 14.75,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "items": [
  {
   "hfov": 9.02,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_DF0BAF14_D522_36BE_4182_2D68BF6843DE_1_HS_12_0.png",
      "width": 154,
      "height": 145,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 14.75,
   "yaw": -29.14,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_37A0EF2D_1307_6BEE_41A0_4B0AFE449AB9",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 45.38,
   "yaw": 155.02,
   "image": {
    "levels": [
     {
      "url": "media/panorama_DF0BAF14_D522_36BE_4182_2D68BF6843DE_1_HS_13_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -55.53,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "items": [
  {
   "hfov": 45.38,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_DF0BAF14_D522_36BE_4182_2D68BF6843DE_1_HS_13_0.png",
      "width": 1325,
      "height": 1294,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -55.53,
   "yaw": 155.02,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_0A898849_1B3F_5CAB_41AD_E111C87C28A7",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.showPopupPanoramaOverlay(this.popup_E73D8009_F751_C1B6_41D1_F545AA7B4716, {'backgroundColorDirection':'vertical','paddingRight':5,'rollOverIconLineWidth':5,'pressedBackgroundOpacity':0.3,'pressedIconLineWidth':5,'pressedIconWidth':20,'borderSize':0,'paddingLeft':5,'rollOverIconColor':'#666666','iconWidth':20,'paddingBottom':5,'rollOverBackgroundOpacity':0.3,'pressedBorderColor':'#000000','rollOverBorderSize':0,'iconHeight':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'iconColor':'#000000','iconLineWidth':5,'rollOverIconWidth':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedBorderSize':0,'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000','rollOverIconHeight':20,'backgroundOpacity':0.3,'pressedIconHeight':20,'rollOverBackgroundColorDirection':'vertical','pressedIconColor':'#888888','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundColorDirection':'vertical'}, this.ImageResource_EF0CB935_F7B3_C3DE_41E3_3218615B3FBE, null, null, null, null, false)",
   "mapColor": "#FF0000",
   "toolTip": "INFORMASI MENGENAI RUANGAN PRIBADI"
  }
 ],
 "maps": [
  {
   "hfov": 14.45,
   "yaw": 106.19,
   "image": {
    "levels": [
     {
      "url": "media/panorama_DF0BAF14_D522_36BE_4182_2D68BF6843DE_1_HS_14_0_0_map.gif",
      "width": 18,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -11.97,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "items": [
  {
   "hfov": 14.45,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_DF0BAF14_D522_36BE_4182_2D68BF6843DE_1_HS_14_0.png",
      "width": 244,
      "height": 207,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -11.97,
   "yaw": 106.19,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_E2992878_ED4E_96AB_41E1_8E037CACEB26",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.showPopupPanoramaOverlay(this.popup_E7DAE6CC_F752_4E4E_41ED_B0F8AB9C6C25, {'backgroundColorDirection':'vertical','paddingRight':5,'rollOverIconLineWidth':5,'pressedBackgroundOpacity':0.3,'pressedIconLineWidth':5,'pressedIconWidth':20,'borderSize':0,'paddingLeft':5,'rollOverIconColor':'#666666','iconWidth':20,'paddingBottom':5,'rollOverBackgroundOpacity':0.3,'pressedBorderColor':'#000000','rollOverBorderSize':0,'iconHeight':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'iconColor':'#000000','iconLineWidth':5,'rollOverIconWidth':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedBorderSize':0,'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000','rollOverIconHeight':20,'backgroundOpacity':0.3,'pressedIconHeight':20,'rollOverBackgroundColorDirection':'vertical','pressedIconColor':'#888888','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundColorDirection':'vertical'}, this.ImageResource_EF0FE935_F7B3_C3DE_41D8_8DB406F9837E, null, null, null, null, false)",
   "mapColor": "#FF0000",
   "toolTip": "INFORMASI MENGENAI RUANG DISKUSI"
  }
 ],
 "maps": [
  {
   "hfov": 11.96,
   "yaw": 12.3,
   "image": {
    "levels": [
     {
      "url": "media/panorama_DF0BAF14_D522_36BE_4182_2D68BF6843DE_1_HS_15_0_0_map.gif",
      "width": 25,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 18.97,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "items": [
  {
   "hfov": 11.96,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_DF0BAF14_D522_36BE_4182_2D68BF6843DE_1_HS_15_0.png",
      "width": 209,
      "height": 129,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 18.97,
   "yaw": 12.3,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_E2C698E4_ED41_97DB_41C7_BA394984A981",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.showPopupPanoramaOverlay(this.popup_E74BE74A_F752_4E4A_41BD_AC488F852AFC, {'backgroundColorDirection':'vertical','paddingRight':5,'rollOverIconLineWidth':5,'pressedBackgroundOpacity':0.3,'pressedIconLineWidth':5,'pressedIconWidth':20,'borderSize':0,'paddingLeft':5,'rollOverIconColor':'#666666','iconWidth':20,'paddingBottom':5,'rollOverBackgroundOpacity':0.3,'pressedBorderColor':'#000000','rollOverBorderSize':0,'iconHeight':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'iconColor':'#000000','iconLineWidth':5,'rollOverIconWidth':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedBorderSize':0,'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000','rollOverIconHeight':20,'backgroundOpacity':0.3,'pressedIconHeight':20,'rollOverBackgroundColorDirection':'vertical','pressedIconColor':'#888888','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundColorDirection':'vertical'}, this.ImageResource_EF091935_F7B3_C3DE_41E5_9AE1D12FE29A, null, null, null, null, false)",
   "mapColor": "#FF0000",
   "toolTip": "INFORMASI MENGENAI TEMPAT MAKAN"
  }
 ],
 "maps": [
  {
   "hfov": 13.82,
   "yaw": -79.84,
   "image": {
    "levels": [
     {
      "url": "media/panorama_DF0BAF14_D522_36BE_4182_2D68BF6843DE_1_HS_16_0_0_map.gif",
      "width": 39,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -10.28,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "items": [
  {
   "hfov": 13.82,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_DF0BAF14_D522_36BE_4182_2D68BF6843DE_1_HS_16_0.png",
      "width": 232,
      "height": 95,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -10.28,
   "yaw": -79.84,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_E27D53DE_ED43_B9E7_41E0_97D320384503",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_DF0968AD_D521_DBEE_41E8_53FAFFC84B8C, this.camera_B9082E8C_B665_5543_41C3_2E68DB39A7A5); this.mainPlayList.set('selectedIndex', 3)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 11.53,
   "yaw": 139.66,
   "image": {
    "levels": [
     {
      "url": "media/panorama_DF091129_D522_6A96_41CB_A7A82D7D5CF4_1_HS_0_0_0_map.gif",
      "width": 26,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -16.28,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_FAC29351_EE5B_0099_41EB_C3E64ABF4FB0",
   "yaw": 139.66,
   "pitch": -16.28,
   "hfov": 11.53,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_CC411BB5_D718_072E_41EA_868C73A94E4E",
 "data": {
  "label": "Arrow 02b Right-Up"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_DF09605E_D522_6AAA_41E6_B94D5A810C57, this.camera_B9148EAB_B665_5545_41D3_26C952D0F328); this.mainPlayList.set('selectedIndex', 21)",
   "mapColor": "#FF0000",
   "toolTip": "MENUJU BALE TELAGA"
  }
 ],
 "maps": [
  {
   "hfov": 15.88,
   "yaw": -2.47,
   "image": {
    "levels": [
     {
      "url": "media/panorama_DF091129_D522_6A96_41CB_A7A82D7D5CF4_1_HS_1_0_0_map.gif",
      "width": 37,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -17.67,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_FAC2C352_EE5B_009B_41CF_65BAD333576C",
   "yaw": -2.47,
   "pitch": -17.67,
   "hfov": 15.88,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_CDFCA146_D708_036A_41A6_E29EDDA81158",
 "data": {
  "label": "Circle Arrow 01b"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 50.19,
   "yaw": 149.7,
   "image": {
    "levels": [
     {
      "url": "media/panorama_DF091129_D522_6A96_41CB_A7A82D7D5CF4_1_HS_4_0_0_map.gif",
      "width": 31,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -74.93,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "items": [
  {
   "hfov": 50.19,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_DF091129_D522_6A96_41CB_A7A82D7D5CF4_1_HS_4_0.png",
      "width": 2048,
      "height": 1047,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -74.93,
   "yaw": 149.7,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_08DC4B82_1B39_D398_41A0_764BFF30472F",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_DF6F0B8F_D522_DDA9_41D6_D0B5D979483D, this.camera_A674AFF4_B665_52CC_41A5_AFDEAC9CB9E3); this.mainPlayList.set('selectedIndex', 22); this.mainPlayList.set('selectedIndex', 27); this.mainPlayList.set('selectedIndex', 26)",
   "mapColor": "#FF0000",
   "toolTip": "MENUJU BALE PUBLIK"
  }
 ],
 "maps": [
  {
   "hfov": 13.41,
   "yaw": -103.96,
   "image": {
    "levels": [
     {
      "url": "media/panorama_DF614CA2_D522_FB9A_41E1_A0F7B63CBAED_1_HS_0_0_0_map.gif",
      "width": 26,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -10.5,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_FADAF357_EE5B_0099_41D3_A0AFE7F6319A",
   "yaw": -103.96,
   "pitch": -10.5,
   "hfov": 13.41,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_C951637B_D778_071A_41D7_6C08CFA6DD45",
 "data": {
  "label": "Circle Arrow 01a"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_DF60EDC1_D522_D596_41E5_9A31123BC0B0, this.camera_A6690FD4_B665_52CC_4165_CD90D79208E2); this.mainPlayList.set('selectedIndex', 24)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 5.25,
   "yaw": 172.7,
   "image": {
    "levels": [
     {
      "url": "media/panorama_DF614CA2_D522_FB9A_41E1_A0F7B63CBAED_1_HS_2_0_0_map.gif",
      "width": 29,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -9.49,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_FAD98358_EE5B_0097_41CE_402E8AA28028",
   "yaw": 172.7,
   "pitch": -9.49,
   "hfov": 5.25,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_F74D953E_D778_031A_41E9_26739EB5B68D",
 "data": {
  "label": "Arrow 01c"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "if(this.isCardboardViewMode()) { this.showPopupPanoramaVideoOverlay(this.popup_3CE67610_131B_3DB6_4185_1A27BD411A2A, {'backgroundColorDirection':'vertical','paddingRight':5,'rollOverIconLineWidth':5,'pressedBackgroundOpacity':0.3,'pressedIconLineWidth':5,'pressedIconWidth':20,'borderSize':0,'paddingLeft':5,'rollOverIconColor':'#666666','iconWidth':20,'paddingBottom':5,'rollOverBackgroundOpacity':0.3,'pressedBorderColor':'#000000','rollOverBorderSize':0,'iconHeight':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'iconColor':'#000000','iconLineWidth':5,'rollOverIconWidth':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedBorderSize':0,'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000','rollOverIconHeight':20,'backgroundOpacity':0.3,'pressedIconHeight':20,'rollOverBackgroundColorDirection':'vertical','pressedIconColor':'#888888','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundColorDirection':'vertical'}, true) } else { this.showPopupMedia(this.window_BCEDFCBD_B65D_36BC_41C3_2710CB1A3E36, this.video_3C0E25A7_131B_3E9A_41B2_644B2E6D05A6, this.PlayList_B96C5899_B665_5D44_41DB_C910EF711450, '50%', '50%', true, true) }",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 9.92,
   "yaw": -137.72,
   "image": {
    "levels": [
     {
      "url": "media/panorama_DF614CA2_D522_FB9A_41E1_A0F7B63CBAED_1_HS_6_0_0_map.gif",
      "width": 34,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 1.81,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "items": [
  {
   "hfov": 9.92,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_DF614CA2_D522_FB9A_41E1_A0F7B63CBAED_1_HS_6_0.png",
      "width": 164,
      "height": 75,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 1.81,
   "yaw": -137.72,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_3CDCFDFB_131B_2E6A_41A6_FF25ABDF0DBB",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 60.28,
   "yaw": 152.94,
   "image": {
    "levels": [
     {
      "url": "media/panorama_DF614CA2_D522_FB9A_41E1_A0F7B63CBAED_1_HS_7_0_0_map.gif",
      "width": 37,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -69.84,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "items": [
  {
   "hfov": 60.28,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_DF614CA2_D522_FB9A_41E1_A0F7B63CBAED_1_HS_7_0.png",
      "width": 2048,
      "height": 865,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -69.84,
   "yaw": 152.94,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_0AF02738_1B37_B4E9_41AB_01871C5D5AED",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.showPopupPanoramaOverlay(this.popup_E77CC4B2_F752_42DA_41D4_785EAA2AE93E, {'backgroundColorDirection':'vertical','paddingRight':5,'rollOverIconLineWidth':5,'pressedBackgroundOpacity':0.3,'pressedIconLineWidth':5,'pressedIconWidth':20,'borderSize':0,'paddingLeft':5,'rollOverIconColor':'#666666','iconWidth':20,'paddingBottom':5,'rollOverBackgroundOpacity':0.3,'pressedBorderColor':'#000000','rollOverBorderSize':0,'iconHeight':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'iconColor':'#000000','iconLineWidth':5,'rollOverIconWidth':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedBorderSize':0,'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000','rollOverIconHeight':20,'backgroundOpacity':0.3,'pressedIconHeight':20,'rollOverBackgroundColorDirection':'vertical','pressedIconColor':'#888888','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundColorDirection':'vertical'}, this.ImageResource_EF299974_F7B3_C25E_41E8_3400FB28CA0B, null, null, null, null, false)",
   "mapColor": "#FF0000",
   "toolTip": "INFORMASI MENGENAI PERPUSTAKAAN"
  }
 ],
 "maps": [
  {
   "hfov": 8.78,
   "yaw": 18.58,
   "image": {
    "levels": [
     {
      "url": "media/panorama_DF614CA2_D522_FB9A_41E1_A0F7B63CBAED_1_HS_9_0_0_map.gif",
      "width": 22,
      "height": 15,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.1,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "items": [
  {
   "hfov": 8.78,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_DF614CA2_D522_FB9A_41E1_A0F7B63CBAED_1_HS_9_0.png",
      "width": 145,
      "height": 103,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.1,
   "yaw": 18.58,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_E22FC4CD_ED42_9FE5_41E9_9E97D98C6483",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.showPopupPanoramaOverlay(this.popup_E7EF8C8D_F776_C2CE_41ED_69746EB5B478, {'backgroundColorDirection':'vertical','paddingRight':5,'rollOverIconLineWidth':5,'pressedBackgroundOpacity':0.3,'pressedIconLineWidth':5,'pressedIconWidth':20,'borderSize':0,'paddingLeft':5,'rollOverIconColor':'#666666','iconWidth':20,'paddingBottom':5,'rollOverBackgroundOpacity':0.3,'pressedBorderColor':'#000000','rollOverBorderSize':0,'iconHeight':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'iconColor':'#000000','iconLineWidth':5,'rollOverIconWidth':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedBorderSize':0,'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000','rollOverIconHeight':20,'backgroundOpacity':0.3,'pressedIconHeight':20,'rollOverBackgroundColorDirection':'vertical','pressedIconColor':'#888888','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundColorDirection':'vertical'}, this.ImageResource_EF28A984_F7B3_C2BE_41C7_9CC96A6969AA, null, null, null, null, false)",
   "mapColor": "#FF0000",
   "toolTip": "INFORMASI MENGENAI BALE KEMBAR"
  }
 ],
 "maps": [
  {
   "hfov": 8.8,
   "yaw": -158.62,
   "image": {
    "levels": [
     {
      "url": "media/panorama_DF614CA2_D522_FB9A_41E1_A0F7B63CBAED_1_HS_10_0_0_map.gif",
      "width": 22,
      "height": 15,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 2.43,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "items": [
  {
   "hfov": 8.8,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_DF614CA2_D522_FB9A_41E1_A0F7B63CBAED_1_HS_10_0.png",
      "width": 145,
      "height": 103,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 2.43,
   "yaw": -158.62,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_E2C1DDAF_ED43_89A6_41E6_8AFD7B392EFD",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "id": "viewer_uidB8BA186A_B665_5DC4_41C2_C250547C7BEBVideoPlayer",
 "viewerArea": "this.viewer_uidB8BA186A_B665_5DC4_41C2_C250547C7BEB",
 "displayPlaybackBar": true,
 "class": "VideoPlayer"
},
{
 "frameCount": 24,
 "colCount": 4,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_DF0B714D_D522_EAAE_41DB_DAFE02AA8C1C_1_HS_0_0.png",
   "width": 1220,
   "height": 780,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "AnimatedImageResource_FA379347_EE5B_00F8_41DF_0672C648A245",
 "frameDuration": 41,
 "class": "AnimatedImageResource"
},
{
 "frameCount": 24,
 "colCount": 4,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_DF688AE7_D522_3F9A_41B2_CE1EBAC5DAF0_1_HS_0_0.png",
   "width": 1040,
   "height": 900,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "AnimatedImageResource_FADF335B_EE5B_0089_41D3_975ACC4CA62C",
 "frameDuration": 41,
 "class": "AnimatedImageResource"
},
{
 "frameCount": 24,
 "colCount": 4,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_DF688AE7_D522_3F9A_41B2_CE1EBAC5DAF0_1_HS_1_0.png",
   "width": 1040,
   "height": 900,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "AnimatedImageResource_FADF535B_EE5B_0089_41C6_6F20335C5DCD",
 "frameDuration": 41,
 "class": "AnimatedImageResource"
},
{
 "frameCount": 9,
 "colCount": 3,
 "rowCount": 3,
 "levels": [
  {
   "url": "media/panorama_DF688AE7_D522_3F9A_41B2_CE1EBAC5DAF0_1_HS_3_0.png",
   "width": 330,
   "height": 180,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "AnimatedImageResource_FADE835B_EE5B_0089_41D4_B1EE7AD54840",
 "frameDuration": 62,
 "class": "AnimatedImageResource"
},
{
 "frameCount": 9,
 "colCount": 3,
 "rowCount": 3,
 "levels": [
  {
   "url": "media/panorama_DF093389_D522_2D96_418B_B49E63F3C24E_1_HS_0_0.png",
   "width": 330,
   "height": 180,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "AnimatedImageResource_FACC0351_EE5B_0099_41C8_D7622DA65757",
 "frameDuration": 62,
 "class": "AnimatedImageResource"
},
{
 "frameCount": 9,
 "colCount": 3,
 "rowCount": 3,
 "levels": [
  {
   "url": "media/panorama_DF095ADC_D526_3FAE_41E8_221CDD95ABD4_1_HS_2_0.png",
   "width": 330,
   "height": 180,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "AnimatedImageResource_FA20733A_EE5B_008B_41E0_0646CFCF3C7D",
 "frameDuration": 62,
 "class": "AnimatedImageResource"
},
{
 "frameCount": 24,
 "colCount": 4,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_DF095ADC_D526_3FAE_41E8_221CDD95ABD4_1_HS_3_0.png",
   "width": 1220,
   "height": 780,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "AnimatedImageResource_FA27B33A_EE5B_008B_41B6_32E8E3C6F70C",
 "frameDuration": 41,
 "class": "AnimatedImageResource"
},
{
 "frameCount": 9,
 "colCount": 3,
 "rowCount": 3,
 "levels": [
  {
   "url": "media/panorama_DF0B18B0_D522_3BF6_41E7_E97BDC8D73D5_1_HS_1_0.png",
   "width": 330,
   "height": 180,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "AnimatedImageResource_FAC8E34D_EE5B_0089_41E0_F3685F404C06",
 "frameDuration": 62,
 "class": "AnimatedImageResource"
},
{
 "frameCount": 9,
 "colCount": 3,
 "rowCount": 3,
 "levels": [
  {
   "url": "media/panorama_DF6F0B8F_D522_DDA9_41D6_D0B5D979483D_1_HS_0_0.png",
   "width": 330,
   "height": 180,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "AnimatedImageResource_FAD9335A_EE5B_008B_41EA_5B2828FA0B47",
 "frameDuration": 62,
 "class": "AnimatedImageResource"
},
{
 "frameCount": 24,
 "colCount": 4,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_DF6F0B8F_D522_DDA9_41D6_D0B5D979483D_1_HS_1_0.png",
   "width": 1220,
   "height": 1110,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "AnimatedImageResource_FAD9435A_EE5B_008B_41D3_B7F1E397DE72",
 "frameDuration": 41,
 "class": "AnimatedImageResource"
},
{
 "frameCount": 24,
 "colCount": 4,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_DF0AF41D_D522_2AA9_41EA_37FF14B377FE_1_HS_0_0.png",
   "width": 1220,
   "height": 780,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "AnimatedImageResource_FA3DE343_EE5B_00F8_41EA_346C3471BE9C",
 "frameDuration": 41,
 "class": "AnimatedImageResource"
},
{
 "frameCount": 9,
 "colCount": 3,
 "rowCount": 3,
 "levels": [
  {
   "url": "media/panorama_DF0AF41D_D522_2AA9_41EA_37FF14B377FE_1_HS_1_0.png",
   "width": 330,
   "height": 180,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "AnimatedImageResource_FA3D7344_EE5B_00F8_41AF_ECAE739E3B19",
 "frameDuration": 62,
 "class": "AnimatedImageResource"
},
{
 "frameCount": 24,
 "colCount": 4,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_DF60EDC1_D522_D596_41E5_9A31123BC0B0_1_HS_0_0.png",
   "width": 1220,
   "height": 1110,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "AnimatedImageResource_FAC4E355_EE5B_0099_41E8_E1DC1A58BAB9",
 "frameDuration": 41,
 "class": "AnimatedImageResource"
},
{
 "frameCount": 9,
 "colCount": 3,
 "rowCount": 3,
 "levels": [
  {
   "url": "media/panorama_DF60EDC1_D522_D596_41E5_9A31123BC0B0_1_HS_2_0.png",
   "width": 330,
   "height": 180,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "AnimatedImageResource_FAC47355_EE5B_0099_41E9_9D79C38B1034",
 "frameDuration": 62,
 "class": "AnimatedImageResource"
},
{
 "frameCount": 24,
 "colCount": 4,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_DF09605E_D522_6AAA_41E6_B94D5A810C57_1_HS_0_0.png",
   "width": 1220,
   "height": 1110,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "AnimatedImageResource_FAC24352_EE5B_009B_41DB_38525F466747",
 "frameDuration": 41,
 "class": "AnimatedImageResource"
},
{
 "frameCount": 24,
 "colCount": 4,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_DF09605E_D522_6AAA_41E6_B94D5A810C57_1_HS_1_0.png",
   "width": 1220,
   "height": 1110,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "AnimatedImageResource_FAC1C352_EE5B_009B_41BD_4C6FE3078E52",
 "frameDuration": 41,
 "class": "AnimatedImageResource"
},
{
 "frameCount": 9,
 "colCount": 3,
 "rowCount": 3,
 "levels": [
  {
   "url": "media/panorama_DF09605E_D522_6AAA_41E6_B94D5A810C57_1_HS_2_0.png",
   "width": 330,
   "height": 180,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "AnimatedImageResource_FAC15353_EE5B_0099_41A4_68D737A40820",
 "frameDuration": 62,
 "class": "AnimatedImageResource"
},
{
 "frameCount": 9,
 "colCount": 3,
 "rowCount": 3,
 "levels": [
  {
   "url": "media/panorama_DF08E4A2_D523_EB9A_41E5_F673F160A0A8_1_HS_1_0.png",
   "width": 330,
   "height": 180,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "AnimatedImageResource_FACD6350_EE5B_0097_41ED_442536FBA448",
 "frameDuration": 62,
 "class": "AnimatedImageResource"
},
{
 "frameCount": 24,
 "colCount": 4,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_DF08E4A2_D523_EB9A_41E5_F673F160A0A8_1_HS_2_0.png",
   "width": 1220,
   "height": 1110,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "AnimatedImageResource_FACC9350_EE5B_0097_41AF_71DC14199720",
 "frameDuration": 41,
 "class": "AnimatedImageResource"
},
{
 "frameCount": 24,
 "colCount": 4,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_DF0968AD_D521_DBEE_41E8_53FAFFC84B8C_1_HS_4_0.png",
   "width": 1220,
   "height": 780,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "AnimatedImageResource_FA24233D_EE5B_0088_41EB_E3FA2DD030E4",
 "frameDuration": 41,
 "class": "AnimatedImageResource"
},
{
 "frameCount": 24,
 "colCount": 4,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_DF0968AD_D521_DBEE_41E8_53FAFFC84B8C_1_HS_5_0.png",
   "width": 1220,
   "height": 780,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "AnimatedImageResource_FA24433D_EE5B_0088_41ED_72DF47F688B8",
 "frameDuration": 41,
 "class": "AnimatedImageResource"
},
{
 "frameCount": 9,
 "colCount": 3,
 "rowCount": 3,
 "levels": [
  {
   "url": "media/panorama_DF0968AD_D521_DBEE_41E8_53FAFFC84B8C_1_HS_6_0.png",
   "width": 330,
   "height": 180,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "AnimatedImageResource_FA3BE33E_EE5B_0088_41E8_76BC930F2C39",
 "frameDuration": 62,
 "class": "AnimatedImageResource"
},
{
 "frameCount": 9,
 "colCount": 3,
 "rowCount": 3,
 "levels": [
  {
   "url": "media/panorama_DF0AD51E_D522_6AAB_41E0_02491679C908_1_HS_1_0.png",
   "width": 330,
   "height": 180,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "AnimatedImageResource_FA330345_EE5B_00F8_41C0_483477969508",
 "frameDuration": 62,
 "class": "AnimatedImageResource"
},
{
 "frameCount": 9,
 "colCount": 3,
 "rowCount": 3,
 "levels": [
  {
   "url": "media/panorama_DF095A4F_D521_DEAA_41E5_B09830FCA2B6_1_HS_4_0.png",
   "width": 330,
   "height": 180,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "AnimatedImageResource_FA26433C_EE5B_008F_41E2_F6A448D7DDB0",
 "frameDuration": 62,
 "class": "AnimatedImageResource"
},
{
 "frameCount": 24,
 "colCount": 4,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_DF095A4F_D521_DEAA_41E5_B09830FCA2B6_1_HS_5_0.png",
   "width": 1220,
   "height": 780,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "AnimatedImageResource_FA25D33D_EE5B_0089_41C4_4AEEB3D151BF",
 "frameDuration": 41,
 "class": "AnimatedImageResource"
},
{
 "frameCount": 24,
 "colCount": 4,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_DF095A4F_D521_DEAA_41E5_B09830FCA2B6_1_HS_6_0.png",
   "width": 1040,
   "height": 900,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "AnimatedImageResource_FA25133D_EE5B_0088_41E9_E7464B85DF2B",
 "frameDuration": 41,
 "class": "AnimatedImageResource"
},
{
 "frameCount": 9,
 "colCount": 3,
 "rowCount": 3,
 "levels": [
  {
   "url": "media/panorama_DF08F593_D523_F5BA_41E5_3AAEBE3AF892_1_HS_1_0.png",
   "width": 330,
   "height": 180,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "AnimatedImageResource_FACEB34F_EE5B_0089_41E9_36D2CBBA76FA",
 "frameDuration": 62,
 "class": "AnimatedImageResource"
},
{
 "frameCount": 24,
 "colCount": 4,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_DF08F593_D523_F5BA_41E5_3AAEBE3AF892_1_HS_2_0.png",
   "width": 1220,
   "height": 1110,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "AnimatedImageResource_FACED350_EE5B_0097_41ED_063EB6CAAACD",
 "frameDuration": 41,
 "class": "AnimatedImageResource"
},
{
 "frameCount": 24,
 "colCount": 4,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_DF09300A_D522_2AAB_41C0_2217A91877F7_1_HS_0_0.png",
   "width": 1220,
   "height": 1110,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "AnimatedImageResource_FAC7B353_EE5B_0099_41C4_2C6490108D45",
 "frameDuration": 41,
 "class": "AnimatedImageResource"
},
{
 "frameCount": 9,
 "colCount": 3,
 "rowCount": 3,
 "levels": [
  {
   "url": "media/panorama_DF09300A_D522_2AAB_41C0_2217A91877F7_1_HS_1_0.png",
   "width": 330,
   "height": 180,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "AnimatedImageResource_FAC71354_EE5B_009F_41D5_9C7C311BB715",
 "frameDuration": 62,
 "class": "AnimatedImageResource"
},
{
 "frameCount": 9,
 "colCount": 3,
 "rowCount": 3,
 "levels": [
  {
   "url": "media/panorama_DF0AA7F2_D522_357A_41E7_BB88309A039D_1_HS_3_0.png",
   "width": 330,
   "height": 180,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "AnimatedImageResource_FA382342_EE5B_00F8_41DD_21AAE1270055",
 "frameDuration": 62,
 "class": "AnimatedImageResource"
},
{
 "frameCount": 24,
 "colCount": 4,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_DF0AA7F2_D522_357A_41E7_BB88309A039D_1_HS_4_0.png",
   "width": 1220,
   "height": 480,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "AnimatedImageResource_FA385342_EE5B_00F8_41D5_5C69B36A6895",
 "frameDuration": 41,
 "class": "AnimatedImageResource"
},
{
 "frameCount": 24,
 "colCount": 4,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_DF0AA7F2_D522_357A_41E7_BB88309A039D_1_HS_6_0.png",
   "width": 1220,
   "height": 780,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "AnimatedImageResource_FA3FF342_EE5B_00F8_41A0_1E6B4187C5E7",
 "frameDuration": 41,
 "class": "AnimatedImageResource"
},
{
 "frameCount": 24,
 "colCount": 4,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_DF14B7C6_D526_559A_41D4_10037B667899_1_HS_1_0.png",
   "width": 1220,
   "height": 780,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "AnimatedImageResource_FA21C336_EE5B_009B_41E0_09B5C79C5777",
 "frameDuration": 41,
 "class": "AnimatedImageResource"
},
{
 "frameCount": 9,
 "colCount": 3,
 "rowCount": 3,
 "levels": [
  {
   "url": "media/panorama_DF09427F_D522_2F69_41E4_B7F711B0C20C_1_HS_0_0.png",
   "width": 330,
   "height": 180,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "AnimatedImageResource_FAC3F351_EE5B_0099_41EB_C5F48E639199",
 "frameDuration": 62,
 "class": "AnimatedImageResource"
},
{
 "frameCount": 24,
 "colCount": 4,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_DF0B7220_D522_EE96_41E0_735AC8175FE5_1_HS_0_0.png",
   "width": 1220,
   "height": 780,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "AnimatedImageResource_FA31A345_EE5B_00F8_41E0_C407E1F47049",
 "frameDuration": 41,
 "class": "AnimatedImageResource"
},
{
 "frameCount": 24,
 "colCount": 4,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_DF0B7220_D522_EE96_41E0_735AC8175FE5_1_HS_1_0.png",
   "width": 1220,
   "height": 780,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "AnimatedImageResource_FA31C346_EE5B_00F8_41ED_7BF753546726",
 "frameDuration": 41,
 "class": "AnimatedImageResource"
},
{
 "frameCount": 9,
 "colCount": 3,
 "rowCount": 3,
 "levels": [
  {
   "url": "media/panorama_DF0B7220_D522_EE96_41E0_735AC8175FE5_1_HS_2_0.png",
   "width": 330,
   "height": 180,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "AnimatedImageResource_FA317346_EE5B_00F8_41E5_A0DC13E93880",
 "frameDuration": 62,
 "class": "AnimatedImageResource"
},
{
 "frameCount": 9,
 "colCount": 3,
 "rowCount": 3,
 "levels": [
  {
   "url": "media/panorama_DF0A8329_D522_2E96_41DA_0346C09AF2A0_1_HS_1_0.png",
   "width": 330,
   "height": 180,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "AnimatedImageResource_FA32D345_EE5B_00F8_41CE_005AEDAF95FC",
 "frameDuration": 62,
 "class": "AnimatedImageResource"
},
{
 "frameCount": 9,
 "colCount": 3,
 "rowCount": 3,
 "levels": [
  {
   "url": "media/panorama_DF0B7A68_D522_5E96_41E4_2FA8606D5645_1_HS_1_0.png",
   "width": 330,
   "height": 180,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "AnimatedImageResource_FAC9134C_EE5B_008F_41E0_28CFF82E9D6A",
 "frameDuration": 62,
 "class": "AnimatedImageResource"
},
{
 "frameCount": 9,
 "colCount": 3,
 "rowCount": 3,
 "levels": [
  {
   "url": "media/panorama_DF62FED0_D522_37B6_41C2_93651E251542_1_HS_1_0.png",
   "width": 330,
   "height": 180,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "AnimatedImageResource_FAC5D355_EE5B_0099_4192_56428901FAF3",
 "frameDuration": 62,
 "class": "AnimatedImageResource"
},
{
 "frameCount": 24,
 "colCount": 4,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_DF0AF60D_D522_76A9_41E3_6D08C1C16B94_1_HS_1_0.png",
   "width": 1080,
   "height": 420,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "AnimatedImageResource_FA39E340_EE5B_00F8_41DF_C6CB22232F5A",
 "frameDuration": 41,
 "class": "AnimatedImageResource"
},
{
 "frameCount": 24,
 "colCount": 4,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_DF0AF60D_D522_76A9_41E3_6D08C1C16B94_1_HS_3_0.png",
   "width": 1220,
   "height": 780,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "AnimatedImageResource_FA391340_EE5B_00F8_41EC_F12D69656F3E",
 "frameDuration": 41,
 "class": "AnimatedImageResource"
},
{
 "frameCount": 9,
 "colCount": 3,
 "rowCount": 3,
 "levels": [
  {
   "url": "media/panorama_DF0AF60D_D522_76A9_41E3_6D08C1C16B94_1_HS_4_0.png",
   "width": 330,
   "height": 180,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "AnimatedImageResource_FA395341_EE5B_00F8_41BF_04C71754CE6F",
 "frameDuration": 62,
 "class": "AnimatedImageResource"
},
{
 "frameCount": 24,
 "colCount": 4,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_DF0BFC23_D522_7A9A_41E2_705D7646CD69_1_HS_0_0.png",
   "width": 1220,
   "height": 780,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "AnimatedImageResource_FACBE34B_EE5B_0089_41C8_426914119A85",
 "frameDuration": 41,
 "class": "AnimatedImageResource"
},
{
 "frameCount": 24,
 "colCount": 4,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_DF0BFC23_D522_7A9A_41E2_705D7646CD69_1_HS_1_0.png",
   "width": 1220,
   "height": 780,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "AnimatedImageResource_FACB034B_EE5B_0089_41C7_D0F15B687D8D",
 "frameDuration": 41,
 "class": "AnimatedImageResource"
},
{
 "frameCount": 24,
 "colCount": 4,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_DF0BFC23_D522_7A9A_41E2_705D7646CD69_1_HS_2_0.png",
   "width": 1220,
   "height": 780,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "AnimatedImageResource_FACAB34B_EE5B_0089_41E9_55124AF6398A",
 "frameDuration": 41,
 "class": "AnimatedImageResource"
},
{
 "frameCount": 9,
 "colCount": 3,
 "rowCount": 3,
 "levels": [
  {
   "url": "media/panorama_DF0BFC23_D522_7A9A_41E2_705D7646CD69_1_HS_3_0.png",
   "width": 330,
   "height": 180,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "AnimatedImageResource_FACA334C_EE5B_008F_41E5_640DCDFAE945",
 "frameDuration": 62,
 "class": "AnimatedImageResource"
},
{
 "frameCount": 24,
 "colCount": 4,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_DF08C6FA_D523_D76A_41D5_7F86EC1FD1C3_1_HS_0_0.png",
   "width": 1220,
   "height": 780,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "AnimatedImageResource_FAC8D34E_EE5B_008B_41EC_B7CBE3B68EEC",
 "frameDuration": 41,
 "class": "AnimatedImageResource"
},
{
 "frameCount": 24,
 "colCount": 4,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_DF08C6FA_D523_D76A_41D5_7F86EC1FD1C3_1_HS_1_0.png",
   "width": 1220,
   "height": 780,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "AnimatedImageResource_FAC8034F_EE5B_0089_41E4_A800F15846AC",
 "frameDuration": 41,
 "class": "AnimatedImageResource"
},
{
 "frameCount": 9,
 "colCount": 3,
 "rowCount": 3,
 "levels": [
  {
   "url": "media/panorama_DF08C6FA_D523_D76A_41D5_7F86EC1FD1C3_1_HS_2_0.png",
   "width": 330,
   "height": 180,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "AnimatedImageResource_FACFA34F_EE5B_0089_41EC_E21FD5FEA3AA",
 "frameDuration": 62,
 "class": "AnimatedImageResource"
},
{
 "frameCount": 24,
 "colCount": 4,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_DF0BAF14_D522_36BE_4182_2D68BF6843DE_1_HS_4_0.png",
   "width": 1220,
   "height": 480,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "AnimatedImageResource_FA362349_EE5B_0089_41E3_D4472CE6C4F0",
 "frameDuration": 41,
 "class": "AnimatedImageResource"
},
{
 "frameCount": 9,
 "colCount": 3,
 "rowCount": 3,
 "levels": [
  {
   "url": "media/panorama_DF0BAF14_D522_36BE_4182_2D68BF6843DE_1_HS_5_0.png",
   "width": 330,
   "height": 180,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "AnimatedImageResource_FA364349_EE5B_0089_41ED_407B23E75D6B",
 "frameDuration": 62,
 "class": "AnimatedImageResource"
},
{
 "frameCount": 9,
 "colCount": 3,
 "rowCount": 3,
 "levels": [
  {
   "url": "media/panorama_DF0BAF14_D522_36BE_4182_2D68BF6843DE_1_HS_6_0.png",
   "width": 330,
   "height": 180,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "AnimatedImageResource_FA35E349_EE5B_0089_41EC_7C0CB44E4F64",
 "frameDuration": 62,
 "class": "AnimatedImageResource"
},
{
 "frameCount": 24,
 "colCount": 4,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_DF0BAF14_D522_36BE_4182_2D68BF6843DE_1_HS_7_0.png",
   "width": 1040,
   "height": 690,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "AnimatedImageResource_FA35734A_EE5B_008B_41E6_D72A0592F88C",
 "frameDuration": 41,
 "class": "AnimatedImageResource"
},
{
 "frameCount": 24,
 "colCount": 4,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_DF091129_D522_6A96_41CB_A7A82D7D5CF4_1_HS_0_0.png",
   "width": 400,
   "height": 360,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "AnimatedImageResource_FAC29351_EE5B_0099_41EB_C3E64ABF4FB0",
 "frameDuration": 41,
 "class": "AnimatedImageResource"
},
{
 "frameCount": 24,
 "colCount": 4,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_DF091129_D522_6A96_41CB_A7A82D7D5CF4_1_HS_1_0.png",
   "width": 1220,
   "height": 780,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "AnimatedImageResource_FAC2C352_EE5B_009B_41CF_65BAD333576C",
 "frameDuration": 41,
 "class": "AnimatedImageResource"
},
{
 "frameCount": 24,
 "colCount": 4,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_DF614CA2_D522_FB9A_41E1_A0F7B63CBAED_1_HS_0_0.png",
   "width": 1220,
   "height": 1110,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "AnimatedImageResource_FADAF357_EE5B_0099_41D3_A0AFE7F6319A",
 "frameDuration": 41,
 "class": "AnimatedImageResource"
},
{
 "frameCount": 9,
 "colCount": 3,
 "rowCount": 3,
 "levels": [
  {
   "url": "media/panorama_DF614CA2_D522_FB9A_41E1_A0F7B63CBAED_1_HS_2_0.png",
   "width": 330,
   "height": 180,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "AnimatedImageResource_FAD98358_EE5B_0097_41CE_402E8AA28028",
 "frameDuration": 62,
 "class": "AnimatedImageResource"
}],
 "verticalAlign": "top",
 "desktopMipmappingEnabled": false,
 "gap": 10,
 "height": "100%",
 "propagateClick": false,
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "mouseWheelEnabled": true,
 "data": {
  "name": "Player436"
 },
 "scrollBarWidth": 10,
 "backgroundPreloadEnabled": true,
 "overflow": "visible"
};

    
    function HistoryData(playList) {
        this.playList = playList;
        this.list = [];
        this.pointer = -1;
    }

    HistoryData.prototype.add = function(index){
        if(this.pointer < this.list.length && this.list[this.pointer] == index) {
            return;
        }
        ++this.pointer;
        this.list.splice(this.pointer, this.list.length - this.pointer, index);
    };

    HistoryData.prototype.back = function(){
        if(!this.canBack()) return;
        this.playList.set('selectedIndex', this.list[--this.pointer]);
    };

    HistoryData.prototype.forward = function(){
        if(!this.canForward()) return;
        this.playList.set('selectedIndex', this.list[++this.pointer]);
    };

    HistoryData.prototype.canBack = function(){
        return this.pointer > 0;
    };

    HistoryData.prototype.canForward = function(){
        return this.pointer >= 0 && this.pointer < this.list.length-1;
    };
    //

    if(script.data == undefined)
        script.data = {};
    script.data["history"] = {};    //playListID -> HistoryData

    TDV.PlayerAPI.defineScript(script);
})();
