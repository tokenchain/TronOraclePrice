(window.webpackJsonp=window.webpackJsonp||[]).push([[98],{1349:function(e,t,n){var r=n(1),o=r.each,map=r.map,l=r.isFunction,d=r.createHashMap,c=r.noop,h=n(484).createTask,_=n(283).getUID,f=n(697),v=n(710),y=n(42).normalizeToArray;function m(e,t,n,r){this.ecInstance=e,this.api=t,this.unfinished;n=this._dataProcessorHandlers=n.slice(),r=this._visualHandlers=r.slice();this._allHandlers=n.concat(r),this._stageTaskMap=d()}var T=m.prototype;function k(e,t,n,r,l){var d;function c(e,t){return e.setDirty&&(!e.dirtyMap||e.dirtyMap.get(t.__pipeline.id))}l=l||{},o(t,(function(t,o){if(!l.visualType||l.visualType===t.visualType){var h=e._stageTaskMap.get(t.uid),_=h.seriesTaskMap,f=h.overallTask;if(f){var v,y=f.agentStubMap;y.each((function(e){c(l,e)&&(e.dirty(),v=!0)})),v&&f.dirty(),M(f,r);var m=e.getPerformArgs(f,l.block);y.each((function(e){e.perform(m)})),d|=f.perform(m)}else _&&_.each((function(o,h){c(l,o)&&o.dirty();var _=e.getPerformArgs(o,l.block);_.skip=!t.performRawSeries&&n.isSeriesFiltered(o.context.model),M(o,r),d|=o.perform(_)}))}})),e.unfinished|=d}T.restoreData=function(e,t){e.restoreData(t),this._stageTaskMap.each((function(e){var t=e.overallTask;t&&t.dirty()}))},T.getPerformArgs=function(e,t){if(e.__pipeline){var n=this._pipelineMap.get(e.__pipeline.id),r=n.context,o=!t&&n.progressiveEnabled&&(!r||r.progressiveRender)&&e.__idxInPipeline>n.blockIndex?n.step:null,l=r&&r.modDataCount;return{step:o,modBy:null!=l?Math.ceil(l/o):null,modDataCount:l}}},T.getPipeline=function(e){return this._pipelineMap.get(e)},T.updateStreamModes=function(e,view){var t=this._pipelineMap.get(e.uid),n=e.getData().count(),r=t.progressiveEnabled&&view.incrementalPrepareRender&&n>=t.threshold,o=e.get("large")&&n>=e.get("largeThreshold"),l="mod"===e.get("progressiveChunkMode")?n:null;e.pipelineContext=t.context={progressiveRender:r,modDataCount:l,large:o}},T.restorePipelines=function(e){var t=this,n=t._pipelineMap=d();e.eachSeries((function(e){var r=e.getProgressive(),o=e.uid;n.set(o,{id:o,head:null,tail:null,threshold:e.getProgressiveThreshold(),progressiveEnabled:r&&!(e.preventIncremental&&e.preventIncremental()),blockIndex:-1,step:Math.round(r||700),count:0}),O(t,e,e.dataTask)}))},T.prepareStageTasks=function(){var e=this._stageTaskMap,t=this.ecInstance.getModel(),n=this.api;o(this._allHandlers,(function(r){var l=e.get(r.uid)||e.set(r.uid,[]);r.reset&&function(e,t,n,r,o){var l=n.seriesTaskMap||(n.seriesTaskMap=d()),c=t.seriesType,_=t.getTargetSeries;t.createOnAllSeries?r.eachRawSeries(f):c?r.eachRawSeriesByType(c,f):_&&_(r,o).each(f);function f(n){var d=n.uid,c=l.get(d)||l.set(d,h({plan:P,reset:S,count:C}));c.context={model:n,ecModel:r,api:o,useClearVisual:t.isVisual&&!t.isLayout,plan:t.plan,reset:t.reset,scheduler:e},O(e,n,c)}var v=e._pipelineMap;l.each((function(e,t){v.get(t)||(e.dispose(),l.removeKey(t))}))}(this,r,l,t,n),r.overallReset&&function(e,t,n,r,l){var c=n.overallTask=n.overallTask||h({reset:x});c.context={ecModel:r,api:l,overallReset:t.overallReset,scheduler:e};var _=c.agentStubMap=c.agentStubMap||d(),f=t.seriesType,v=t.getTargetSeries,y=!0,m=t.modifyOutputEnd;f?r.eachRawSeriesByType(f,T):v?v(r,l).each(T):(y=!1,o(r.getSeries(),T));function T(t){var n=t.uid,r=_.get(n);r||(r=_.set(n,h({reset:D,onDirty:w})),c.dirty()),r.context={model:t,overallProgress:y,modifyOutputEnd:m},r.agent=c,r.__block=y,O(e,t,r)}var k=e._pipelineMap;_.each((function(e,t){k.get(t)||(e.dispose(),c.dirty(),_.removeKey(t))}))}(this,r,l,t,n)}),this)},T.prepareView=function(view,e,t,n){var r=view.renderTask,o=r.context;o.model=e,o.ecModel=t,o.api=n,r.__block=!view.incrementalPrepareRender,O(this,e,r)},T.performDataProcessorTasks=function(e,t){k(this,this._dataProcessorHandlers,e,t,{block:!0})},T.performVisualTasks=function(e,t,n){k(this,this._visualHandlers,e,t,n)},T.performSeriesTasks=function(e){var t;e.eachSeries((function(e){t|=e.dataTask.perform()})),this.unfinished|=t},T.plan=function(){this._pipelineMap.each((function(e){var t=e.tail;do{if(t.__block){e.blockIndex=t.__idxInPipeline;break}t=t.getUpstream()}while(t)}))};var M=T.updatePayload=function(e,t){"remain"!==t&&(e.context.payload=t)};function x(e){e.overallReset(e.ecModel,e.api,e.payload)}function D(e,t){return e.overallProgress&&E}function E(){this.agent.dirty(),this.getDownstream().dirty()}function w(){this.agent&&this.agent.dirty()}function P(e){return e.plan&&e.plan(e.model,e.ecModel,e.api,e.payload)}function S(e){e.useClearVisual&&e.data.clearAllVisual();var t=e.resetDefines=y(e.reset(e.model,e.ecModel,e.api,e.payload));return t.length>1?map(t,(function(e,t){return R(t)})):I}var I=R(0);function R(e){return function(t,n){var data=n.data,r=n.resetDefines[e];if(r&&r.dataEach)for(var i=t.start;i<t.end;i++)r.dataEach(data,i);else r&&r.progress&&r.progress(t,data)}}function C(e){return e.data.count()}function O(e,t,n){var r=t.uid,o=e._pipelineMap.get(r);!o.head&&(o.head=n),o.tail&&o.tail.pipe(n),o.tail=n,n.__idxInPipeline=o.count++,n.__pipeline=o}function B(e){H=null;try{e(A,V)}catch(e){}return H}m.wrapStageHandler=function(e,t){return l(e)&&(e={overallReset:e,seriesType:B(e)}),e.uid=_("stageHandler"),t&&(e.visualType=t),e};var H,A={},V={};function F(e,t){for(var n in t.prototype)e[n]=c}F(A,f),F(V,v),A.eachSeriesByType=A.eachRawSeriesByType=function(e){H=e},A.eachComponent=function(e){"series"===e.mainType&&e.subType&&(H=e.subType)};var U=m;e.exports=U},484:function(e,t,n){var r=n(1),o=(r.assert,r.isArray);n(49).__DEV__;function l(e){e=e||{},this._reset=e.reset,this._plan=e.plan,this._count=e.count,this._onDirty=e.onDirty,this._dirty=!0,this.context}var d=l.prototype;d.perform=function(e){var t,n=this._upstream,r=e&&e.skip;if(this._dirty&&n){var l=this.context;l.data=l.outputData=n.context.outputData}this.__pipeline&&(this.__pipeline.currentTask=this),this._plan&&!r&&(t=this._plan(this.context));var d,c=y(this._modBy),_=this._modDataCount||0,f=y(e&&e.modBy),v=e&&e.modDataCount||0;function y(e){return!(e>=1)&&(e=1),e}c===f&&_===v||(t="reset"),(this._dirty||"reset"===t)&&(this._dirty=!1,d=function(e,t){var progress,n;e._dueIndex=e._outputDueEnd=e._dueEnd=0,e._settedOutputEnd=null,!t&&e._reset&&((progress=e._reset(e.context))&&progress.progress&&(n=progress.forceFirstProgress,progress=progress.progress),o(progress)&&!progress.length&&(progress=null));e._progress=progress,e._modBy=e._modDataCount=null;var r=e._downstream;return r&&r.dirty(),n}(this,r)),this._modBy=f,this._modDataCount=v;var m=e&&e.step;if(this._dueEnd=n?n._outputDueEnd:this._count?this._count(this.context):1/0,this._progress){var T=this._dueIndex,k=Math.min(null!=m?this._dueIndex+m:1/0,this._dueEnd);if(!r&&(d||T<k)){var progress=this._progress;if(o(progress))for(var i=0;i<progress.length;i++)h(this,progress[i],T,k,f,v);else h(this,progress,T,k,f,v)}this._dueIndex=k;var M=null!=this._settedOutputEnd?this._settedOutputEnd:k;this._outputDueEnd=M}else this._dueIndex=this._outputDueEnd=null!=this._settedOutputEnd?this._settedOutputEnd:this._dueEnd;return this.unfinished()};var c=function(){var e,t,n,r,o,l={reset:function(s,h,_,f){t=s,e=h,n=_,r=f,o=Math.ceil(r/n),l.next=n>1&&r>0?c:d}};return l;function d(){return t<e?t++:null}function c(){var l=t%o*n+Math.ceil(t/o),d=t>=e?null:l<r?l:t;return t++,d}}();function h(e,progress,t,n,r,o){c.reset(t,n,r,o),e._callingProgress=progress,e._callingProgress({start:t,end:n,count:n-t,next:c.next},e.context)}d.dirty=function(){this._dirty=!0,this._onDirty&&this._onDirty(this.context)},d.unfinished=function(){return this._progress&&this._dueIndex<this._dueEnd},d.pipe=function(e){(this._downstream!==e||this._dirty)&&(this._downstream=e,e._upstream=this,e.dirty())},d.dispose=function(){this._disposed||(this._upstream&&(this._upstream._downstream=null),this._downstream&&(this._downstream._upstream=null),this._dirty=!1,this._disposed=!0)},d.getUpstream=function(){return this._upstream},d.getDownstream=function(){return this._downstream},d.setOutputEnd=function(e){this._outputDueEnd=this._settedOutputEnd=e},t.createTask=function(e){return new l(e)}}}]);