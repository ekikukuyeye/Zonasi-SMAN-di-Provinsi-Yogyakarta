// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"url:widgets/Search/setting/QuerySourceSetting.html":'\x3cdiv\x3e\r\n  \x3cdiv class\x3d"source-url-section"\x3e\r\n    \x3ctable class\x3d"source-table"\x3e\r\n      \x3ctbody\x3e\r\n        \x3ctr\x3e\r\n          \x3ctd class\x3d"first"\x3e\r\n            \x3cspan class\x3d"source-label"\x3e${nls.layerSource}\x3c/span\x3e\r\n          \x3c/td\x3e\r\n          \x3ctd class\x3d"second"\x3e\r\n            \x3cdiv data-dojo-attach-point\x3d"sourceUrl" data-dojo-type\x3d"dijit/form/ValidationTextBox" data-dojo-props\x3d"required:true,trim:true,disabled:true,style:{width:\'100%\'}"\x3e\x3c/div\x3e\r\n          \x3c/td\x3e\r\n          \x3ctd class\x3d"third"\x3e\r\n            \x3cspan title\x3d"${nls.set}" class\x3d"jimu-btn" data-dojo-attach-event\x3d"click:_onSetSourceClick"\x3e${nls.set}\x3c/span\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr data-dojo-attach-point\x3d"messageTr"\x3e\r\n          \x3ctd class\x3d"first"\x3e\x3c/td\x3e\r\n          \x3ctd class\x3d"second" colspan\x3d"2"\x3e\r\n            \x3cspan data-dojo-attach-point\x3d"messageNode" class\x3d"tip error-message"\x3e\x3c/span\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n      \x3c/tbody\x3e\r\n    \x3c/table\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv class\x3d"source-details-section"\x3e\r\n    \x3ctable class\x3d"source-table"\x3e\r\n      \x3ctr\x3e\r\n        \x3ctd class\x3d"first"\x3e\r\n          \x3cspan class\x3d"source-label"\x3e${nls.name}\x3c/span\x3e\r\n        \x3c/td\x3e\r\n        \x3ctd class\x3d"second"\x3e\r\n          \x3cdiv data-dojo-attach-point\x3d"sourceName" data-dojo-type\x3d"dijit/form/ValidationTextBox" data-dojo-attach-event\x3d"Blur:_onSourceNameBlur" data-dojo-props\x3d"trim:true,required:true,style:{width:\'100%\'}"\x3e\x3c/div\x3e\r\n        \x3c/td\x3e\r\n      \x3c/tr\x3e\r\n      \x3ctr\x3e\r\n        \x3ctd class\x3d"first"\x3e\r\n          \x3cspan class\x3d"source-label"\x3e${nls.placeholder}\x3c/span\x3e\r\n        \x3c/td\x3e\r\n        \x3ctd class\x3d"second"\x3e\r\n          \x3cdiv data-dojo-attach-point\x3d"placeholder" data-dojo-type\x3d"dijit/form/ValidationTextBox" data-dojo-attach-event\x3d"Blur:_onPlaceholderBlur" data-dojo-props\x3d"trim:true,style:{width:\'100%\'}"\x3e\x3c/div\x3e\r\n        \x3c/td\x3e\r\n      \x3c/tr\x3e\r\n      \x3ctr\x3e\r\n        \x3ctd class\x3d"first"\x3e\r\n          \x3cspan class\x3d"source-label"\x3e${nls.searchFields}\x3c/span\x3e\r\n        \x3c/td\x3e\r\n        \x3ctd class\x3d"second"\x3e\r\n          \x3cdiv class\x3d"search-fields"\x3e\r\n            \x3c!-- \x3cspan class\x3d"fields jimu-float-leading" data-dojo-attach-point\x3d"fieldsNode"\x3e\x3c/span\x3e --\x3e\r\n            \x3cdiv data-dojo-attach-point\x3d"searchFields" data-dojo-type\x3d"dijit/form/ValidationTextBox" data-dojo-props\x3d"required:true,trim:true,disabled:true,style:{width:\'95%\'}"\x3e\x3c/div\x3e\r\n            \x3cdiv class\x3d"search-fields-selector jimu-float-trailing" data-dojo-attach-point\x3d"fieldsSelectorNode" data-dojo-attach-event\x3d"click:_onFieldsSelectorClick"\x3e\x3c/div\x3e\r\n          \x3c/div\x3e\r\n        \x3c/td\x3e\r\n      \x3c/tr\x3e\r\n      \x3ctr\x3e\r\n        \x3ctd class\x3d"first"\x3e\r\n          \x3cspan class\x3d"source-label"\x3e${nls.displayField}\x3c/span\x3e\r\n        \x3c/td\x3e\r\n        \x3ctd class\x3d"second"\x3e\r\n          \x3cdiv data-dojo-attach-point\x3d"displayField" data-dojo-type\x3d"dijit/form/Select" data-dojo-props\x3d\'style:{width:"100%"}\'\x3e\x3c/div\x3e\r\n        \x3c/td\x3e\r\n      \x3c/tr\x3e\r\n      \x3ctr\x3e\r\n        \x3ctd class\x3d"first"\x3e\r\n          \x3cspan class\x3d"source-label"\x3e${nls.maxSuggestions}\x3c/span\x3e\r\n        \x3c/td\x3e\r\n        \x3ctd class\x3d"second"\x3e\r\n          \x3cdiv class\x3d"source-tips" title\x3d"${nls.searchLayerTips}" data-dojo-attach-point\x3d"tipsNode"\x3e\r\n            \x3cem\x3e${nls.searchLayerTips}\x3c/em\x3e\r\n          \x3c/div\x3e\r\n          \x3cdiv data-dojo-attach-point\x3d"maxSuggestions" data-dojo-type\x3d"dijit/form/NumberTextBox" data-dojo-props\x3d"constraints:{min:0,places:0},style:{width:\'100%\'},value:6"\x3e\x3c/div\x3e\r\n        \x3c/td\x3e\r\n      \x3c/tr\x3e\r\n      \x3ctr\x3e\r\n        \x3ctd class\x3d"first"\x3e\r\n          \x3cspan class\x3d"source-label"\x3e${nls.maxResults}\x3c/span\x3e\r\n        \x3c/td\x3e\r\n        \x3ctd class\x3d"second"\x3e\r\n          \x3cdiv data-dojo-attach-point\x3d"maxResults" data-dojo-type\x3d"dijit/form/NumberTextBox" data-dojo-props\x3d"constraints:{min:1,places:0},style:{width:\'100%\'},value:6"\x3e\x3c/div\x3e\r\n        \x3c/td\x3e\r\n      \x3c/tr\x3e\r\n      \x3ctr data-dojo-attach-point\x3d"zoomScaleTr"\x3e\r\n        \x3ctd class\x3d"first"\x3e\r\n          \x3cspan class\x3d"source-label"\x3e${nls.locateResults}\x3c/span\x3e\r\n        \x3c/td\x3e\r\n        \x3ctd class\x3d"second"\x3e\r\n          \x3ctable class\x3d""\x3e\r\n            \x3ctbody\x3e\r\n              \x3ctr\x3e\r\n                \x3ctd class\x3d"second-sub-td" style\x3d"width:30%;"\x3e\r\n                  \x3cinput data-dojo-attach-point\x3d"panToRadio" data-dojo-type\x3d"dijit/form/RadioButton" name\x3d"locateResults" type\x3d"radio" class\x3d"jimu-radio-btn"/\x3e\r\n                  \x3clabel\x3e${nls.panTo}\x3clabel\x3e\r\n                \x3c/td\x3e\r\n                \x3ctd class\x3d"second-sub-td" style\x3d"width:30%;"\x3e\r\n                  \x3cinput data-dojo-attach-point\x3d"zoomToRadio" data-dojo-type\x3d"dijit/form/RadioButton" name\x3d"locateResults" type\x3d"radio" class\x3d"jimu-radio-btn"/\x3e\r\n                  \x3clabel\x3e${nls.zoomToScale}\x3c/label\x3e\r\n                \x3c/td\x3e\r\n                \x3ctd class\x3d"second-sub-td" style\x3d"width:40%;"\x3e\r\n                  \x3cspan class\x3d"jimu-float-leading" style\x3d"line-height:30px;"\x3e1: \x3c/span\x3e\r\n                  \x3cdiv class\x3d"jimu-float-trailing" data-dojo-attach-point\x3d"zoomScale" data-dojo-type\x3d"dijit/form/NumberTextBox" data-dojo-props\x3d"constraints:{min:1},style:{width:\'85%\'}"\x3e\x3c/div\x3e\r\n                \x3c/td\x3e\r\n              \x3c/tr\x3e\r\n            \x3c/tbody\x3e\r\n          \x3c/table\x3e\r\n        \x3c/td\x3e\r\n      \x3c/tr\x3e\r\n    \x3c/table\x3e\r\n    \x3ctable class\x3d"source-table"\x3e\r\n      \x3ctbody\x3e\r\n        \x3ctr\x3e\r\n          \x3ctd class\x3d"first"\x3e\r\n            \x3cdiv data-dojo-attach-point\x3d"exactMatch"\x3e\x3c/div\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr\x3e\r\n          \x3ctd class\x3d"first"\x3e\r\n            \x3cdiv data-dojo-attach-point\x3d"searchInCurrentMapExtent"\x3e\x3c/div\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n      \x3c/tbody\x3e\r\n    \x3c/table\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv data-dojo-attach-point\x3d"shelter" data-dojo-type\x3d"jimu/dijit/LoadingShelter" data-dojo-props\x3d"hidden:true"\x3e\x3c/div\x3e\r\n\x3c/div\x3e\r\n'}});
define("dojo/_base/declare dojo/_base/html dijit/_WidgetBase dijit/_TemplatedMixin dijit/_WidgetsInTemplateMixin dojo/text!./QuerySourceSetting.html dojo/_base/lang dojo/_base/array dojo/on dojo/query dojo/Deferred dojo/Evented jimu/dijit/_FeaturelayerSourcePopup jimu/portalUrlUtils esri/request esri/lang jimu/utils jimu/dijit/Popup jimu/dijit/CheckBox jimu/dijit/LoadingShelter dijit/form/ValidationTextBox dojo/NodeList-data".split(" "),function(t,d,u,v,w,x,f,h,l,m,y,z,A,p,B,C,k,D,n){return t([u,
v,w,z],{baseClass:"jimu-widget-search-query-source-setting",templateString:x,nls:null,appConfig:null,map:null,tr:null,config:null,fieldsPopup:null,_layerDefinition:null,_fieldsCheckBox:null,_layerId:null,_suggestible:!1,_clickSet:!1,_defaultZoomScale:null,postCreate:function(){this.inherited(arguments);this.zoomScale.set("placeHolder",window.jimuNls.common.defaults);this.exactMatch=new n({checked:!1,label:this.nls.exactMatch},this.exactMatch);this.searchInCurrentMapExtent=new n({checked:!1,label:this.nls.searchInCurrentMapExtent},
this.searchInCurrentMapExtent);this._layerDefinition={};this._fieldsCheckBox=[];this._setMessageNodeContent("");this.own(l(this.panToRadio,"click",f.hitch(this,this._onRadioClicke)));this.own(l(this.zoomToRadio,"click",f.hitch(this,this._onRadioClicke)))},setDefinition:function(a){this._layerDefinition=a||{}},getDefinition:function(){return this._layerDefinition},setRelatedTr:function(a){this.tr=a},getRelatedTr:function(){return this.tr},setConfig:function(a){if("[object Object]"===Object.prototype.toString.call(a)){var b=
a.url;b&&(this.config=a,this.shelter.show(),this._layerDefinition.url!==b?this._getDefinitionFromRemote(b).then(f.hitch(this,function(c){b&&c&&"error"!==c.type?(this._layerDefinition=c,this._layerDefinition.url=b,this._setSourceItems(),this._setMessageNodeContent("")):b&&c&&"error"===c.type&&(this._setSourceItems(),this._disableSourceItems(),this._setMessageNodeContent(C.substitute({URL:c.url},f.clone(this.nls.invalidUrlTip)),!0));this.shelter.hide()})):(this._setMessageNodeContent(""),this._setSourceItems(),
this.shelter.hide()))}},isValidConfig:function(){var a=this.getConfig();return a.url&&a.name&&a.displayField?!0:!1},showValidationTip:function(){this._showValidationErrorTip(this.sourceUrl);this._showValidationErrorTip(this.sourceName)},getConfig:function(){return{layerId:this._layerId,url:this.sourceUrl.get("value"),name:k.stripHTML(this.sourceName.get("value")),placeholder:k.stripHTML(this.placeholder.get("value")),searchFields:this._getSearchFields(),displayField:this.displayField.get("value"),
exactMatch:this.exactMatch.getValue(),searchInCurrentMapExtent:this.searchInCurrentMapExtent.checked,panToScale:this.panToRadio.get("checked")?!0:!1,zoomScale:this.zoomScale.get("value")||this._defaultZoomScale,maxSuggestions:this.maxSuggestions.get("value"),maxResults:this.maxResults.get("value")||6,type:"query"}},destroy:function(){this.inherited(arguments);this.fieldsPopup&&(this.fieldsPopup.close(),this.fieldsPopup=null);this.tr=this.nls=this.config=this._layerDefinition=null},_onSourceNameBlur:function(){this.sourceName.set("value",
k.stripHTML(this.sourceName.get("value")))},_onPlaceholderBlur:function(){this.placeholder.set("value",k.stripHTML(this.placeholder.get("value")))},_disableSourceItems:function(){this.sourceName.set("disabled",!0);this.placeholder.set("disabled",!0);d.setStyle(this.fieldsSelectorNode,"display","none");this.displayField.set("disabled",!0);this.maxSuggestions.set("disabled",!0);this.maxResults.set("disabled",!0);this.zoomScale.set("disabled",!0)},_enableSourceItems:function(){this.sourceName.set("disabled",
!1);this.placeholder.set("disabled",!1);d.setStyle(this.fieldsSelectorNode,"display","inline-block");this.displayField.set("disabled",!1);this.maxSuggestions.set("disabled",!1);this.maxResults.set("disabled",!1);this._controlZoomScaleTextBox()},_setSourceItems:function(){this.sourceUrl.set("value",this.config.url);this.sourceName.set("value",k.stripHTML(this.config.name||""));this.placeholder.set("value",k.stripHTML(this.config.placeholder||""));this._setSearchFields2Node();this.searchFields.set("value",
this._getSearchFieldsAlias());this._setDisplayFieldOptions();this.displayField.set("value",this.config.displayField||"");this.exactMatch.setValue(!!this.config.exactMatch);this.searchInCurrentMapExtent.setValue(!!this.config.searchInCurrentMapExtent);this.config.panToScale?this.panToRadio.set("checked",!0):this.zoomToRadio.set("checked",!0);this.zoomScale.set("value",this.config.zoomScale||this._defaultZoomScale);this.maxSuggestions.set("value",this.config.maxSuggestions);this.maxResults.set("value",
this.config.maxResults||6);this._layerId=this.config.layerId;(this._suggestible=this._layerDefinition&&this._layerDefinition.advancedQueryCapabilities&&this._layerDefinition.advancedQueryCapabilities.supportsPagination)?this._hideSuggestibleTips():this._showSuggestibleTips();this._enableSourceItems()},_getDefinitionFromRemote:function(a){var b=new y,c=B({url:a,content:{f:"json"},handleAs:"json",callbackParamName:"callback"});this.own(c);c.then(f.hitch(this,function(g){b.resolve(g)}),f.hitch(this,
function(g){console.error(g);b.resolve({type:"error",url:this._getRequestUrl(a)})}));return b.promise},_setMessageNodeContent:function(a,b){d.empty(this.messageNode);a.nodeType||(a=d.toDom(a));d.place(a,this.messageNode);b?d.setStyle(this.messageTr,"display",""):d.setStyle(this.messageTr,"display","none")},_getRequestUrl:function(a){var b=window.location.protocol;return"http:"===b?p.setHttpProtocol(a):"https:"===b?p.setHttpsProtocol(a):a},_setSearchFields2Node:function(){var a=null,b=this._layerDefinition&&
this._layerDefinition.fields&&0<this._layerDefinition.fields.length;this.config&&this.config.searchFields&&0<this.config.searchFields.length||(a=[]);if(b){var c=this._layerDefinition.fields;a=h.filter(this.config.searchFields,function(g){return h.some(c,function(e){return e.name===g})})}else a=this.config.searchFields;this.searchFields.set("_fields",a)},_setDisplayFieldOptions:function(){var a=[];this._layerDefinition&&this._layerDefinition.fields&&0<this._layerDefinition.fields.length?a=h.map(this._layerDefinition.fields,
function(b){return{label:b.alias||b.name||"",value:b.name||""}}):this.config&&this.config.displayField&&(a=[{label:this.config.displayField,value:this.config.displayField}]);this.displayField.set("options",a)},_getSearchFieldsAlias:function(){var a=this._getSearchFields();if(!(a&&0<a.length))return"";if(this._layerDefinition&&this._layerDefinition.fields&&0<this._layerDefinition.fields.length){for(var b=this._layerDefinition.fields,c=h.map(b,function(q){return q&&q.name}),g=[],e=0,E=a.length;e<E;e++){var r=
c.indexOf(a[e]);-1<r&&g.push(b[r].alias)}return g.join(",")}return a.join(",")},_getSearchFields:function(){return this.searchFields.get("_fields")},_setSearchFields:function(a){this.searchFields.set("_fields",a)},_onSetSourceClick:function(){this._clickSet=!0;this._openServiceChooser()},_openQuerySourceChooser:function(){this._clickSet=!1;this._openServiceChooser()},_openServiceChooser:function(){var a=new A({titleLabel:this.nls.setLayerSource,dijitArgs:{multiple:!1,createMapResponse:this.map.webMapResponse,
portalUrl:this.appConfig.portalUrl,style:{height:"100%"}}});l.once(a,"ok",f.hitch(this,function(b){a.close();this.setDefinition(b.definition||{});this.setConfig({layerId:b.layerInfo&&b.layerInfo.id||null,url:b.url,name:b.name||"",placeholder:"",searchFields:[],displayField:this._layerDefinition.displayField||"",exactMatch:!1,zoomScale:this._defaultZoomScale,maxSuggestions:6,maxResults:6,type:"query"});a=null;this._setMessageNodeContent("");this._clickSet?this.emit("reselect-query-source-ok",b):this.emit("select-query-source-ok",
b)}));l.once(a,"cancel",f.hitch(this,function(){a.close();a=null;this.emit("select-query-source-cancel")}))},_onFieldsSelectorClick:function(){var a=d.create("div",{style:{maxHeight:"480px"}}),b=this._layerDefinition.fields;this._fieldsCheckBox=[];h.forEach(b,f.hitch(this,function(c,g){var e=new n({checked:this._isSearchable(c),label:c.alias||c.name});d.addClass(e.domNode,"fields-checkbox");d.addClass(e.labelNode,"jimu-ellipsis");d.setAttr(e.domNode,{title:c.alias||c.name});0===g%3&&(window.isRTL?
d.setStyle(e.domNode,"marginRight",0):d.setStyle(e.domNode,"marginLeft",0));e.placeAt(a);m(e.domNode).data("fieldName",c.name);this._fieldsCheckBox.push(e)}));this.fieldsPopup=new D({titleLabel:this.nls.setSearchFields,autoHeight:!0,content:a,container:window.jimuConfig.layoutId,width:640,maxHeight:600,buttons:[{label:this.nls.ok,onClick:f.hitch(this,"_onSearchFieldsOk")},{label:this.nls.cancel,classNames:["jimu-btn-vacation"]}],onClose:f.hitch(this,function(){this.fieldsPopup=null})});d.addClass(this.fieldsPopup.domNode,
"jimu-widget-search-query-source-setting-fields")},_onSearchFieldsOk:function(){var a=[];h.forEach(this._fieldsCheckBox,function(b){if(b.getValue()){var c=m(b.domNode).data("fieldName");a.push(c[0]);m(b.domNode).removeData()}});this._setSearchFields(a);this.searchFields.set("value",this._getSearchFieldsAlias());this.fieldsPopup.close()},_isSearchable:function(a){var b=this._getSearchFields();return h.some(b,f.hitch(this,function(c){return a.name===c}))},_showSuggestibleTips:function(){d.addClass(this.tipsNode,
"source-tips-show");d.setStyle(this.maxSuggestions.domNode,"display","none")},_hideSuggestibleTips:function(){d.removeClass(this.tipsNode,"source-tips-show");d.setStyle(this.maxSuggestions.domNode,"display","block")},_showValidationErrorTip:function(a){if(!a.validate()&&a.domNode&&a.focusNode){var b=a.get("disabled");b&&a.set("disabled",!1);a.focusNode.focus();setTimeout(f.hitch(this,function(){a.focusNode.blur();b&&a.set("disabled",!0);a=null}),100)}},_controlZoomScaleTextBox:function(){this.panToRadio.get("checked")?
this.zoomScale.set("disabled",!0):this.zoomToRadio.get("checked")&&this.zoomScale.set("disabled",!1)},_onRadioClicke:function(){this._controlZoomScaleTextBox()}})});