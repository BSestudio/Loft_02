(function () {
    var c = {};
    function trans(e, f) {
        var g = arguments['length'] === 0x1 ? [arguments[0x0]] : Array['apply'](null, arguments);
        c[g[0x0]] = g;
        return '';
    }
    function regTextVar(h, i) {
        var j = ![];
        i = i['toLowerCase']();
        var k = function () {
            var t = this['get']('data');
            t['updateText'](t['translateObjs'][h]);
        };
        var l = function (u) {
            var v = u['data']['nextSelectedIndex'];
            if (v >= 0x0) {
                var w = u['source']['get']('items')[v];
                var x = function () {
                    w['unbind']('start', x, this);
                    k['call'](this);
                };
                w['bind']('start', x, this);
            } else
                k['call'](this);
        };
        var m = function (y) {
            return function (z) {
                if (y in z) {
                    k['call'](this);
                }
            }['bind'](this);
        };
        var n = function (A, B) {
            return function (C, D) {
                if (A == C && B in D) {
                    k['call'](this);
                }
            }['bind'](this);
        };
        var o = function (E, F, G) {
            for (var H = 0x0; H < E['length']; ++H) {
                var I = E[H];
                var J = I['get']('selectedIndex');
                if (J >= 0x0) {
                    var K = F['split']('.');
                    var L = I['get']('items')[J];
                    if (G !== undefined && !G['call'](this, L))
                        continue;
                    for (var M = 0x0; M < K['length']; ++M) {
                        if (L == undefined)
                            return '';
                        L = 'get' in L ? L['get'](K[M]) : L[K[M]];
                    }
                    return L;
                }
            }
            return '';
        };
        var p = function (N) {
            var O = N['get']('player');
            return O !== undefined && O['get']('viewerArea') == this['getMainViewer']();
        };
        switch (i) {
        case 'title':
        case 'subtitle':
            var r = function () {
                switch (i) {
                case 'title':
                    return 'media.label';
                case 'subtitle':
                    return 'media.data.subtitle';
                }
            }();
            if (r) {
                return function () {
                    var P = this['_getPlayListsWithViewer'](this['getMainViewer']());
                    if (!j) {
                        for (var Q = 0x0; Q < P['length']; ++Q) {
                            P[Q]['bind']('changing', l, this);
                        }
                        j = !![];
                    }
                    return o['call'](this, P, r, p);
                };
            }
            break;
        default:
            if (i['startsWith']('quiz.') && 'Quiz' in TDV) {
                var s = undefined;
                var r = function () {
                    switch (i) {
                    case 'quiz.questions.answered':
                        return TDV['Quiz']['PROPERTY']['QUESTIONS_ANSWERED'];
                    case 'quiz.question.count':
                        return TDV['Quiz']['PROPERTY']['QUESTION_COUNT'];
                    case 'quiz.items.found':
                        return TDV['Quiz']['PROPERTY']['ITEMS_FOUND'];
                    case 'quiz.item.count':
                        return TDV['Quiz']['PROPERTY']['ITEM_COUNT'];
                    case 'quiz.score':
                        return TDV['Quiz']['PROPERTY']['SCORE'];
                    case 'quiz.score.total':
                        return TDV['Quiz']['PROPERTY']['TOTAL_SCORE'];
                    case 'quiz.time.remaining':
                        return TDV['Quiz']['PROPERTY']['REMAINING_TIME'];
                    case 'quiz.time.elapsed':
                        return TDV['Quiz']['PROPERTY']['ELAPSED_TIME'];
                    case 'quiz.time.limit':
                        return TDV['Quiz']['PROPERTY']['TIME_LIMIT'];
                    case 'quiz.media.items.found':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_ITEMS_FOUND'];
                    case 'quiz.media.item.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_ITEM_COUNT'];
                    case 'quiz.media.questions.answered':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                    case 'quiz.media.question.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTION_COUNT'];
                    case 'quiz.media.score':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_SCORE'];
                    case 'quiz.media.score.total':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_TOTAL_SCORE'];
                    case 'quiz.media.index':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'];
                    case 'quiz.media.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_COUNT'];
                    case 'quiz.media.visited':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_VISITED_COUNT'];
                    default:
                        var R = /quiz\.([\w_]+)\.(.+)/['exec'](i);
                        if (R) {
                            s = R[0x1];
                            switch ('quiz.' + R[0x2]) {
                            case 'quiz.score':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['SCORE'];
                            case 'quiz.score.total':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['TOTAL_SCORE'];
                            case 'quiz.media.items.found':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEMS_FOUND'];
                            case 'quiz.media.item.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEM_COUNT'];
                            case 'quiz.media.questions.answered':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                            case 'quiz.media.question.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTION_COUNT'];
                            case 'quiz.questions.answered':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTIONS_ANSWERED'];
                            case 'quiz.question.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTION_COUNT'];
                            case 'quiz.items.found':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEMS_FOUND'];
                            case 'quiz.item.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEM_COUNT'];
                            case 'quiz.media.score':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_SCORE'];
                            case 'quiz.media.score.total':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_TOTAL_SCORE'];
                            }
                        }
                    }
                }();
                if (r) {
                    return function () {
                        var S = this['get']('data')['quiz'];
                        if (S) {
                            if (!j) {
                                if (s != undefined)
                                    if (s == 'global') {
                                        var U = this['get']('data')['quizConfig'];
                                        var W = U['objectives'];
                                        for (var Y = 0x0, a0 = W['length']; Y < a0; ++Y) {
                                            S['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], n['call'](this, W[Y]['id'], r), this);
                                        }
                                    } else {
                                        S['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], n['call'](this, s, r), this);
                                    }
                                else
                                    S['bind'](TDV['Quiz']['EVENT_PROPERTIES_CHANGE'], m['call'](this, r), this);
                                j = !![];
                            }
                            try {
                                var a1 = 0x0;
                                if (s != undefined) {
                                    if (s == 'global') {
                                        var U = this['get']('data')['quizConfig'];
                                        var W = U['objectives'];
                                        for (var Y = 0x0, a0 = W['length']; Y < a0; ++Y) {
                                            a1 += S['getObjective'](W[Y]['id'], r);
                                        }
                                    } else {
                                        a1 = S['getObjective'](s, r);
                                    }
                                } else {
                                    a1 = S['get'](r);
                                    if (r == TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'])
                                        a1 += 0x1;
                                }
                                return a1;
                            } catch (a2) {
                                return undefined;
                            }
                        }
                    };
                }
            }
            break;
        }
        return '';
    }
    function createQuizConfig(player, a3) {
        var a4 = {};
        a4['player'] = player;
        a4['playList'] = a3;
        function a5(a8) {
            for (var a9 = 0x0; a9 < a8['length']; ++a9) {
                var aa = a8[a9];
                if ('id' in aa)
                    player[aa['id']] = aa;
            }
        }
        if (a4['questions']) {
            a5(a4['questions']);
            for (var a6 = 0x0; a6 < a4['questions']['length']; ++a6) {
                var a7 = a4['questions'][a6];
                a5(a7['options']);
            }
        }
        if (a4['objectives']) {
            a5(a4['objectives']);
        }
        if (a4['califications']) {
            a5(a4['califications']);
        }
        if (a4['score']) {
            player[a4['score']['id']] = a4['score'];
        }
        if (a4['question']) {
            player[a4['question']['id']] = a4['question'];
        }
        if (a4['timeout']) {
            player[a4['timeout']['id']] = a4['timeout'];
        }
        player['get']('data')['translateObjs'] = c;
        return a4;
    }
    var d = {"backgroundColorRatios":[0],"definitions": [{"initialPosition":{"hfov":120,"yaw":0,"pitch":0,"class":"PanoramaCameraPosition"},"automaticZoomSpeed":10,"hoverFactor":0,"class":"PanoramaCamera","initialSequence":"this.sequence_96A6FB50_9CA4_0F39_41D5_BC22918ED515","id":"panorama_95518387_9CA4_3F26_41E3_50C1908CAA6A_camera"},{"frames":[{"cube":{"levels":[{"width":12288,"rowCount":4,"colCount":24,"class":"TiledImageResourceLevel","height":2048,"tags":"ondemand","url":"media/panorama_954D010F_9CA4_7B27_41D2_8232EB540991_0/{face}/0/{row}_{column}.jpg"},{"width":6144,"rowCount":2,"colCount":12,"class":"TiledImageResourceLevel","height":1024,"tags":"ondemand","url":"media/panorama_954D010F_9CA4_7B27_41D2_8232EB540991_0/{face}/1/{row}_{column}.jpg"},{"width":3072,"rowCount":1,"colCount":6,"class":"TiledImageResourceLevel","height":512,"tags":["ondemand","preload"],"url":"media/panorama_954D010F_9CA4_7B27_41D2_8232EB540991_0/{face}/2/{row}_{column}.jpg"},{"width":9216,"rowCount":1,"colCount":6,"class":"TiledImageResourceLevel","height":1536,"tags":"mobilevr","url":"media/panorama_954D010F_9CA4_7B27_41D2_8232EB540991_0/{face}/vr/0.jpg"},{"width":12288,"rowCount":1,"colCount":6,"class":"TiledImageResourceLevel","height":2048,"tags":"mobilevr2gen","url":"media/panorama_954D010F_9CA4_7B27_41D2_8232EB540991_0/{face}/vr2gen/0.jpg"}],"class":"ImageResource"},"class":"CubicPanoramaFrame","thumbnailUrl":"media/panorama_954D010F_9CA4_7B27_41D2_8232EB540991_t.jpg"}],"thumbnailUrl":"media/panorama_954D010F_9CA4_7B27_41D2_8232EB540991_t.jpg","vfov":180,"hfovMin":"110%","overlays":["this.overlay_8C1BCAB7_9CCE_855A_41CF_E19CCFA95D4A"],"class":"Panorama","pitch":0,"id":"panorama_954D010F_9CA4_7B27_41D2_8232EB540991","label":trans('panorama_954D010F_9CA4_7B27_41D2_8232EB540991.label'),"hfovMax":130,"hfov":360,"data":{"label":"Loft 02 - B House"},"partial":false,"adjacentPanoramas":[{"panorama":"this.panorama_954CBD5D_9CA4_0B2B_41C0_E2645E0AB1D3","yaw":146.47,"select":"this.overlay_8C1BCAB7_9CCE_855A_41CF_E19CCFA95D4A.get('areas').forEach(function(a){ a.trigger('click') })","class":"AdjacentPanorama","distance":3.45,"backwardYaw":170.33,"data":{"overlayID":"overlay_8C1BCAB7_9CCE_855A_41CF_E19CCFA95D4A"}}]},{"frames":[{"cube":{"levels":[{"width":12288,"rowCount":4,"colCount":24,"class":"TiledImageResourceLevel","height":2048,"tags":"ondemand","url":"media/panorama_95518387_9CA4_3F26_41E3_50C1908CAA6A_0/{face}/0/{row}_{column}.jpg"},{"width":6144,"rowCount":2,"colCount":12,"class":"TiledImageResourceLevel","height":1024,"tags":"ondemand","url":"media/panorama_95518387_9CA4_3F26_41E3_50C1908CAA6A_0/{face}/1/{row}_{column}.jpg"},{"width":3072,"rowCount":1,"colCount":6,"class":"TiledImageResourceLevel","height":512,"tags":["ondemand","preload"],"url":"media/panorama_95518387_9CA4_3F26_41E3_50C1908CAA6A_0/{face}/2/{row}_{column}.jpg"},{"width":9216,"rowCount":1,"colCount":6,"class":"TiledImageResourceLevel","height":1536,"tags":"mobilevr","url":"media/panorama_95518387_9CA4_3F26_41E3_50C1908CAA6A_0/{face}/vr/0.jpg"},{"width":12288,"rowCount":1,"colCount":6,"class":"TiledImageResourceLevel","height":2048,"tags":"mobilevr2gen","url":"media/panorama_95518387_9CA4_3F26_41E3_50C1908CAA6A_0/{face}/vr2gen/0.jpg"}],"class":"ImageResource"},"class":"CubicPanoramaFrame","thumbnailUrl":"media/panorama_95518387_9CA4_3F26_41E3_50C1908CAA6A_t.jpg"}],"thumbnailUrl":"media/panorama_95518387_9CA4_3F26_41E3_50C1908CAA6A_t.jpg","vfov":180,"hfovMin":"110%","overlays":["this.overlay_8F04BBC3_9CE4_0F18_41CA_1B8F11964887","this.overlay_91D348CA_9CC6_8535_41DF_25406C09BA27"],"class":"Panorama","pitch":0,"id":"panorama_95518387_9CA4_3F26_41E3_50C1908CAA6A","label":trans('panorama_95518387_9CA4_3F26_41E3_50C1908CAA6A.label'),"hfovMax":130,"hfov":360,"data":{"label":"Loft 02 - B House"},"partial":false,"adjacentPanoramas":[{"panorama":"this.panorama_900E2735_9CA4_077B_41E3_06E0AAA6A104","yaw":146.63,"select":"this.overlay_8F04BBC3_9CE4_0F18_41CA_1B8F11964887.get('areas').forEach(function(a){ a.trigger('click') })","class":"AdjacentPanorama","distance":2.44,"backwardYaw":36.84,"data":{"overlayID":"overlay_8F04BBC3_9CE4_0F18_41CA_1B8F11964887"}},{"panorama":"this.panorama_954CBD5D_9CA4_0B2B_41C0_E2645E0AB1D3","yaw":-19.43,"select":"this.overlay_91D348CA_9CC6_8535_41DF_25406C09BA27.get('areas').forEach(function(a){ a.trigger('click') })","class":"AdjacentPanorama","distance":2.96,"backwardYaw":121.46,"data":{"overlayID":"overlay_91D348CA_9CC6_8535_41DF_25406C09BA27"}}]},{"initialPosition":{"hfov":120,"yaw":0,"pitch":0,"class":"PanoramaCameraPosition"},"automaticZoomSpeed":10,"hoverFactor":0,"class":"PanoramaCamera","initialSequence":"this.sequence_96A6AB50_9CA4_0F39_41C0_AC37569131C7","id":"panorama_954CBD5D_9CA4_0B2B_41C0_E2645E0AB1D3_camera"},{"items":[{"player":"this.MainViewerPanoramaPlayer","camera":"this.panorama_900E2735_9CA4_077B_41E3_06E0AAA6A104_camera","media":"this.panorama_900E2735_9CA4_077B_41E3_06E0AAA6A104","class":"PanoramaPlayListItem","begin":"this.setEndToItemIndex(this.mainPlayList, 0, 1)"},{"player":"this.MainViewerPanoramaPlayer","camera":"this.panorama_95518387_9CA4_3F26_41E3_50C1908CAA6A_camera","media":"this.panorama_95518387_9CA4_3F26_41E3_50C1908CAA6A","class":"PanoramaPlayListItem","begin":"this.setEndToItemIndex(this.mainPlayList, 1, 2)"},{"player":"this.MainViewerPanoramaPlayer","camera":"this.panorama_954CBD5D_9CA4_0B2B_41C0_E2645E0AB1D3_camera","media":"this.panorama_954CBD5D_9CA4_0B2B_41C0_E2645E0AB1D3","class":"PanoramaPlayListItem","begin":"this.setEndToItemIndex(this.mainPlayList, 2, 3)"},{"player":"this.MainViewerPanoramaPlayer","camera":"this.panorama_954D2746_9CA4_0719_4194_E734E7280177_camera","media":"this.panorama_954D2746_9CA4_0719_4194_E734E7280177","class":"PanoramaPlayListItem","begin":"this.setEndToItemIndex(this.mainPlayList, 3, 4)"},{"player":"this.MainViewerPanoramaPlayer","camera":"this.panorama_954D010F_9CA4_7B27_41D2_8232EB540991_camera","media":"this.panorama_954D010F_9CA4_7B27_41D2_8232EB540991","class":"PanoramaPlayListItem","begin":"this.setEndToItemIndex(this.mainPlayList, 4, 0)","end":"this.trigger('tourEnded')"}],"class":"PlayList","id":"mainPlayList"},{"initialPosition":{"hfov":120,"yaw":0,"pitch":0,"class":"PanoramaCameraPosition"},"automaticZoomSpeed":10,"hoverFactor":0,"class":"PanoramaCamera","initialSequence":"this.sequence_96A66B50_9CA4_0F39_41C0_9F3AA1B17920","id":"panorama_954D010F_9CA4_7B27_41D2_8232EB540991_camera"},{"initialPosition":{"hfov":120,"yaw":0,"pitch":0,"class":"PanoramaCameraPosition"},"automaticZoomSpeed":10,"hoverFactor":0,"class":"PanoramaCamera","initialSequence":"this.sequence_96A21B4F_9CA4_0F27_41D2_E599A34CC4C2","displayMovements":[{"easing":"linear","duration":1000,"class":"TargetRotationalCameraDisplayMovement"},{"easing":"cubic_in_out","targetHfov":120,"duration":3000,"class":"TargetRotationalCameraDisplayMovement","targetStereographicFactor":0,"targetPitch":0}],"displayOriginPosition":{"hfov":165,"yaw":0,"stereographicFactor":1,"pitch":90,"class":"RotationalCameraDisplayPosition"},"id":"panorama_900E2735_9CA4_077B_41E3_06E0AAA6A104_camera"},{"subtitlesEnabled":true,"shadow":false,"playbackBarHeadShadowOpacity":0.7,"class":"ViewerArea","subtitlesVerticalAlign":"bottom","toolTipFontFamily":"Arial","playbackBarHeadBorderSize":0,"displayTooltipInSurfaceSelection":true,"subtitlesTextShadowHorizontalLength":1,"data":{"name":"Main Viewer"},"toolTipBorderRadius":3,"width":"100%","toolTipShadowOpacity":1,"playbackBarProgressBackgroundColorRatios":[0],"paddingLeft":0,"playbackBarProgressBackgroundColorDirection":"vertical","id":"MainViewer","playbackBarBackgroundColor":["#FFFFFF"],"playbackBarBorderColor":"#FFFFFF","playbackBarHeadBorderColor":"#000000","toolTipBackgroundColor":"#F6F6F6","progressBackgroundColorRatios":[0],"playbackBarBorderSize":0,"toolTipFontSize":"1.11vmin","subtitlesFontWeight":"normal","paddingRight":0,"toolTipTextShadowColor":"#000000","progressRight":0,"subtitlesFontFamily":"Arial","toolTipBorderColor":"#767676","playbackBarOpacity":1,"transitionMode":"blending","subtitlesTextShadowVerticalLength":1,"progressBarBackgroundColorDirection":"vertical","progressOpacity":1,"progressBarBorderColor":"#000000","toolTipHorizontalAlign":"center","playbackBarBackgroundColorDirection":"vertical","progressBarBackgroundColorRatios":[0],"subtitlesTop":0,"translationTransitionDuration":1000,"progressBackgroundColorDirection":"vertical","playbackBarHeadShadow":true,"subtitlesGap":0,"playbackBarRight":0,"subtitlesTextShadowColor":"#000000","playbackBarHeadBackgroundColorDirection":"vertical","subtitlesFontSize":"3vmin","playbackBarHeadShadowVerticalLength":0,"toolTipPaddingLeft":6,"playbackBarHeadBackgroundColor":["#111111","#666666"],"displayTooltipInTouchScreens":true,"progressBackgroundOpacity":1,"progressBarBackgroundColor":["#3399FF"],"playbackBarHeight":10,"progressBorderColor":"#000000","doubleClickAction":"toggle_fullscreen","subtitlesFontColor":"#FFFFFF","subtitlesBackgroundOpacity":0.2,"subtitlesPaddingLeft":5,"progressBackgroundColor":["#FFFFFF"],"playbackBarBorderRadius":0,"progressBarOpacity":1,"playbackBarProgressBorderColor":"#000000","progressBottom":0,"subtitlesHorizontalAlign":"center","borderSize":0,"subtitlesTextShadowBlurRadius":0,"subtitlesBorderColor":"#FFFFFF","minWidth":100,"toolTipPaddingRight":6,"minHeight":50,"subtitlesPaddingBottom":5,"toolTipTextShadowOpacity":0,"subtitlesTextDecoration":"none","progressHeight":10,"toolTipFontStyle":"normal","playbackBarHeadShadowHorizontalLength":0,"playbackBarBackgroundOpacity":1,"progressBarBorderRadius":0,"playbackBarProgressBorderRadius":0,"paddingTop":0,"playbackBarHeadOpacity":1,"transitionDuration":500,"toolTipFontColor":"#606060","toolTipShadowSpread":0,"paddingBottom":0,"propagateClick":false,"playbackBarLeft":0,"toolTipPaddingBottom":4,"progressBorderRadius":0,"subtitlesOpacity":1,"progressBarBorderSize":0,"toolTipTextShadowBlurRadius":3,"toolTipShadowHorizontalLength":0,"playbackBarProgressBackgroundColor":["#3399FF"],"playbackBarHeadShadowColor":"#000000","playbackBarHeadHeight":15,"playbackBarHeadBackgroundColorRatios":[0,1],"toolTipFontWeight":"normal","surfaceReticleColor":"#FFFFFF","firstTransitionDuration":0,"subtitlesBorderSize":0,"progressBorderSize":0,"subtitlesBottom":50,"progressLeft":0,"toolTipShadowColor":"#333333","vrPointerSelectionTime":2000,"surfaceReticleSelectionColor":"#66FF00","height":"100%","subtitlesPaddingRight":5,"playbackBarHeadBorderRadius":0,"surfaceReticleOpacity":0.6,"subtitlesShadow":false,"toolTipPaddingTop":4,"toolTipBorderSize":1,"toolTipDisplayTime":600,"surfaceReticleSelectionOpacity":0.5,"subtitlesTextShadowOpacity":1,"toolTipOpacity":1,"vrPointerSelectionColor":"#FF6600","playbackBarHeadShadowBlurRadius":3,"subtitlesBackgroundColor":"#000000","borderRadius":0,"toolTipShadowVerticalLength":0,"toolTipShadowBlurRadius":3,"subtitlesPaddingTop":5,"playbackBarProgressOpacity":1,"playbackBarBottom":5,"playbackBarHeadWidth":6,"vrPointerColor":"#FFFFFF","playbackBarProgressBorderSize":0},{"displayPlaybackBar":true,"adjacentPanoramaPositionsEnabled":false,"viewerArea":"this.MainViewer","class":"PanoramaPlayer","aaEnabled":true,"surfaceSelectionEnabled":true,"mouseControlMode":"drag_rotation","arrowKeysAction":"translate","touchControlMode":"drag_rotation","gyroscopeVerticalDraggingEnabled":true,"zoomEnabled":true,"id":"MainViewerPanoramaPlayer"},{"frames":[{"cube":{"levels":[{"width":12288,"rowCount":4,"colCount":24,"class":"TiledImageResourceLevel","height":2048,"tags":"ondemand","url":"media/panorama_900E2735_9CA4_077B_41E3_06E0AAA6A104_0/{face}/0/{row}_{column}.jpg"},{"width":6144,"rowCount":2,"colCount":12,"class":"TiledImageResourceLevel","height":1024,"tags":"ondemand","url":"media/panorama_900E2735_9CA4_077B_41E3_06E0AAA6A104_0/{face}/1/{row}_{column}.jpg"},{"width":3072,"rowCount":1,"colCount":6,"class":"TiledImageResourceLevel","height":512,"tags":["ondemand","preload"],"url":"media/panorama_900E2735_9CA4_077B_41E3_06E0AAA6A104_0/{face}/2/{row}_{column}.jpg"},{"width":9216,"rowCount":1,"colCount":6,"class":"TiledImageResourceLevel","height":1536,"tags":"mobilevr","url":"media/panorama_900E2735_9CA4_077B_41E3_06E0AAA6A104_0/{face}/vr/0.jpg"},{"width":12288,"rowCount":1,"colCount":6,"class":"TiledImageResourceLevel","height":2048,"tags":"mobilevr2gen","url":"media/panorama_900E2735_9CA4_077B_41E3_06E0AAA6A104_0/{face}/vr2gen/0.jpg"}],"class":"ImageResource"},"class":"CubicPanoramaFrame","thumbnailUrl":"media/panorama_900E2735_9CA4_077B_41E3_06E0AAA6A104_t.jpg"}],"thumbnailUrl":"media/panorama_900E2735_9CA4_077B_41E3_06E0AAA6A104_t.jpg","vfov":180,"hfovMin":"110%","overlays":["this.overlay_8D515A50_9CA4_0939_41D0_83640329F9AC","this.overlay_8F968DFD_9CA4_0AE8_41D4_E22B47FAA024"],"class":"Panorama","pitch":0,"id":"panorama_900E2735_9CA4_077B_41E3_06E0AAA6A104","label":trans('panorama_900E2735_9CA4_077B_41E3_06E0AAA6A104.label'),"hfovMax":130,"hfov":360,"data":{"label":"Loft 02 - B House"},"partial":false,"adjacentPanoramas":[{"panorama":"this.panorama_95518387_9CA4_3F26_41E3_50C1908CAA6A","yaw":36.84,"select":"this.overlay_8D515A50_9CA4_0939_41D0_83640329F9AC.get('areas').forEach(function(a){ a.trigger('click') })","class":"AdjacentPanorama","distance":2.49,"backwardYaw":146.63,"data":{"overlayID":"overlay_8D515A50_9CA4_0939_41D0_83640329F9AC"}}]},{"initialPosition":{"hfov":120,"yaw":0,"pitch":0,"class":"PanoramaCameraPosition"},"automaticZoomSpeed":10,"hoverFactor":0,"class":"PanoramaCamera","initialSequence":"this.sequence_96A64B50_9CA4_0F39_41DD_4AAB35A8A8A8","id":"panorama_954D2746_9CA4_0719_4194_E734E7280177_camera"},{"frames":[{"cube":{"levels":[{"width":12288,"rowCount":4,"colCount":24,"class":"TiledImageResourceLevel","height":2048,"tags":"ondemand","url":"media/panorama_954D2746_9CA4_0719_4194_E734E7280177_0/{face}/0/{row}_{column}.jpg"},{"width":6144,"rowCount":2,"colCount":12,"class":"TiledImageResourceLevel","height":1024,"tags":"ondemand","url":"media/panorama_954D2746_9CA4_0719_4194_E734E7280177_0/{face}/1/{row}_{column}.jpg"},{"width":3072,"rowCount":1,"colCount":6,"class":"TiledImageResourceLevel","height":512,"tags":["ondemand","preload"],"url":"media/panorama_954D2746_9CA4_0719_4194_E734E7280177_0/{face}/2/{row}_{column}.jpg"},{"width":9216,"rowCount":1,"colCount":6,"class":"TiledImageResourceLevel","height":1536,"tags":"mobilevr","url":"media/panorama_954D2746_9CA4_0719_4194_E734E7280177_0/{face}/vr/0.jpg"},{"width":12288,"rowCount":1,"colCount":6,"class":"TiledImageResourceLevel","height":2048,"tags":"mobilevr2gen","url":"media/panorama_954D2746_9CA4_0719_4194_E734E7280177_0/{face}/vr2gen/0.jpg"}],"class":"ImageResource"},"class":"CubicPanoramaFrame","thumbnailUrl":"media/panorama_954D2746_9CA4_0719_4194_E734E7280177_t.jpg"}],"thumbnailUrl":"media/panorama_954D2746_9CA4_0719_4194_E734E7280177_t.jpg","vfov":180,"hfovMin":"110%","overlays":["this.overlay_92233E73_9CC5_BDDA_41D8_70FC4633932F"],"class":"Panorama","pitch":0,"id":"panorama_954D2746_9CA4_0719_4194_E734E7280177","label":trans('panorama_954D2746_9CA4_0719_4194_E734E7280177.label'),"hfovMax":130,"hfov":360,"data":{"label":"Loft 02 - B House"},"partial":false,"adjacentPanoramas":[{"panorama":"this.panorama_954CBD5D_9CA4_0B2B_41C0_E2645E0AB1D3","yaw":-55.59,"select":"this.overlay_92233E73_9CC5_BDDA_41D8_70FC4633932F.get('areas').forEach(function(a){ a.trigger('click') })","class":"AdjacentPanorama","distance":2.22,"backwardYaw":-94.85,"data":{"overlayID":"overlay_92233E73_9CC5_BDDA_41D8_70FC4633932F"}}]},{"frames":[{"cube":{"levels":[{"width":12288,"rowCount":4,"colCount":24,"class":"TiledImageResourceLevel","height":2048,"tags":"ondemand","url":"media/panorama_954CBD5D_9CA4_0B2B_41C0_E2645E0AB1D3_0/{face}/0/{row}_{column}.jpg"},{"width":6144,"rowCount":2,"colCount":12,"class":"TiledImageResourceLevel","height":1024,"tags":"ondemand","url":"media/panorama_954CBD5D_9CA4_0B2B_41C0_E2645E0AB1D3_0/{face}/1/{row}_{column}.jpg"},{"width":3072,"rowCount":1,"colCount":6,"class":"TiledImageResourceLevel","height":512,"tags":["ondemand","preload"],"url":"media/panorama_954CBD5D_9CA4_0B2B_41C0_E2645E0AB1D3_0/{face}/2/{row}_{column}.jpg"},{"width":9216,"rowCount":1,"colCount":6,"class":"TiledImageResourceLevel","height":1536,"tags":"mobilevr","url":"media/panorama_954CBD5D_9CA4_0B2B_41C0_E2645E0AB1D3_0/{face}/vr/0.jpg"},{"width":12288,"rowCount":1,"colCount":6,"class":"TiledImageResourceLevel","height":2048,"tags":"mobilevr2gen","url":"media/panorama_954CBD5D_9CA4_0B2B_41C0_E2645E0AB1D3_0/{face}/vr2gen/0.jpg"}],"class":"ImageResource"},"class":"CubicPanoramaFrame","thumbnailUrl":"media/panorama_954CBD5D_9CA4_0B2B_41C0_E2645E0AB1D3_t.jpg"}],"thumbnailUrl":"media/panorama_954CBD5D_9CA4_0B2B_41C0_E2645E0AB1D3_t.jpg","vfov":180,"hfovMin":"110%","overlays":["this.overlay_92F2898C_9CC7_874E_41D8_C284AC819861","this.overlay_92A8979E_9CC6_8B4D_41D4_2CB40CEDC06E","this.overlay_93D60E9A_9CC5_7D55_41D8_87026E5CF1A3"],"class":"Panorama","pitch":0,"id":"panorama_954CBD5D_9CA4_0B2B_41C0_E2645E0AB1D3","label":trans('panorama_954CBD5D_9CA4_0B2B_41C0_E2645E0AB1D3.label'),"hfovMax":130,"hfov":360,"data":{"label":"Loft 02 - B House"},"partial":false,"adjacentPanoramas":[{"panorama":"this.panorama_95518387_9CA4_3F26_41E3_50C1908CAA6A","yaw":121.46,"select":"this.overlay_92F2898C_9CC7_874E_41D8_C284AC819861.get('areas').forEach(function(a){ a.trigger('click') })","class":"AdjacentPanorama","distance":3.92,"backwardYaw":-19.43,"data":{"overlayID":"overlay_92F2898C_9CC7_874E_41D8_C284AC819861"}},{"panorama":"this.panorama_954D2746_9CA4_0719_4194_E734E7280177","yaw":-94.85,"select":"this.overlay_93D60E9A_9CC5_7D55_41D8_87026E5CF1A3.get('areas').forEach(function(a){ a.trigger('click') })","class":"AdjacentPanorama","distance":1.5,"backwardYaw":-55.59,"data":{"overlayID":"overlay_93D60E9A_9CC5_7D55_41D8_87026E5CF1A3"}},{"panorama":"this.panorama_954D010F_9CA4_7B27_41D2_8232EB540991","yaw":170.33,"select":"this.overlay_92A8979E_9CC6_8B4D_41D4_2CB40CEDC06E.get('areas').forEach(function(a){ a.trigger('click') })","class":"AdjacentPanorama","distance":100,"backwardYaw":146.47,"data":{"overlayID":"overlay_92A8979E_9CC6_8B4D_41D4_2CB40CEDC06E"}}]},{"id":"TDVAuthor","label":"BS ESTÚDIO","class":"PlayerMenuItem"},{"class":"PanoramaCameraSequence","movements":[{"easing":"cubic_in","yawDelta":18.5,"yawSpeed":7.96,"class":"DistancePanoramaCameraMovement"},{"easing":"linear","yawDelta":323,"yawSpeed":7.96,"class":"DistancePanoramaCameraMovement"},{"easing":"cubic_out","yawDelta":18.5,"yawSpeed":7.96,"class":"DistancePanoramaCameraMovement"}],"restartMovementOnUserInteraction":false,"id":"sequence_96A6FB50_9CA4_0F39_41D5_BC22918ED515"},{"areas":["this.HotspotPanoramaOverlayArea_8C199AB9_9CCE_8556_41D1_DF0140D74172"],"maps":[],"enabledInSurfaceSelection":false,"class":"HotspotPanoramaOverlay","useHandCursor":true,"id":"overlay_8C1BCAB7_9CCE_855A_41CF_E19CCFA95D4A","enabledInCardboard":true,"items":[{"image":"this.AnimatedImageResource_8DE1B073_9CC5_85DB_41DC_50EDACA25132","distance":100,"yaw":146.47,"class":"HotspotPanoramaOverlayImage","scaleMode":"fit_inside","horizontalAlign":"center","hfov":6.46,"data":{"label":"Circle Point 01c"},"roll":-5.1,"verticalAlign":"middle","pitch":-26.23,"vfov":3.36}],"data":{"label":"Circle Point 01c","hasPanoramaAction":true}},{"areas":["this.HotspotPanoramaOverlayArea_8F354BE4_9CE4_0F18_41C0_EE7ECE01279E"],"maps":[],"enabledInSurfaceSelection":false,"class":"HotspotPanoramaOverlay","useHandCursor":true,"id":"overlay_8F04BBC3_9CE4_0F18_41CA_1B8F11964887","enabledInCardboard":true,"items":[{"image":"this.AnimatedImageResource_8DE17072_9CC5_85D5_41D8_E886993CF108","distance":100,"yaw":146.63,"class":"HotspotPanoramaOverlayImage","scaleMode":"fit_inside","horizontalAlign":"center","hfov":8.53,"data":{"label":"Circle Point 01c"},"roll":10.99,"verticalAlign":"middle","pitch":-34.82,"vfov":3.36}],"data":{"label":"Circle Point 01c","hasPanoramaAction":true}},{"areas":["this.HotspotPanoramaOverlayArea_918D38E5_9CC6_86FF_41DD_4AC76B5DC94C"],"maps":[],"enabledInSurfaceSelection":false,"class":"HotspotPanoramaOverlay","useHandCursor":true,"id":"overlay_91D348CA_9CC6_8535_41DF_25406C09BA27","enabledInCardboard":true,"items":[{"image":"this.AnimatedImageResource_8DE09072_9CC5_85D5_41D1_4D482BAA5C8A","distance":100,"yaw":-19.43,"class":"HotspotPanoramaOverlayImage","vfov":3.36,"horizontalAlign":"center","hfov":12,"data":{"label":"Circle Point 01c"},"verticalAlign":"middle","pitch":-29.86,"scaleMode":"fit_inside"}],"data":{"label":"Circle Point 01c","hasPanoramaAction":true}},{"class":"PanoramaCameraSequence","movements":[{"easing":"cubic_in","yawDelta":18.5,"yawSpeed":7.96,"class":"DistancePanoramaCameraMovement"},{"easing":"linear","yawDelta":323,"yawSpeed":7.96,"class":"DistancePanoramaCameraMovement"},{"easing":"cubic_out","yawDelta":18.5,"yawSpeed":7.96,"class":"DistancePanoramaCameraMovement"}],"restartMovementOnUserInteraction":false,"id":"sequence_96A6AB50_9CA4_0F39_41C0_AC37569131C7"},{"class":"PanoramaCameraSequence","movements":[{"easing":"cubic_in","yawDelta":18.5,"yawSpeed":7.96,"class":"DistancePanoramaCameraMovement"},{"easing":"linear","yawDelta":323,"yawSpeed":7.96,"class":"DistancePanoramaCameraMovement"},{"easing":"cubic_out","yawDelta":18.5,"yawSpeed":7.96,"class":"DistancePanoramaCameraMovement"}],"restartMovementOnUserInteraction":false,"id":"sequence_96A66B50_9CA4_0F39_41C0_9F3AA1B17920"},{"class":"PanoramaCameraSequence","movements":[{"easing":"cubic_in","yawDelta":18.5,"yawSpeed":7.96,"class":"DistancePanoramaCameraMovement"},{"easing":"linear","yawDelta":323,"yawSpeed":7.96,"class":"DistancePanoramaCameraMovement"},{"easing":"cubic_out","yawDelta":18.5,"yawSpeed":7.96,"class":"DistancePanoramaCameraMovement"}],"restartMovementOnUserInteraction":false,"id":"sequence_96A21B4F_9CA4_0F27_41D2_E599A34CC4C2"},{"areas":["this.HotspotPanoramaOverlayArea_8ED59AD4_9CA4_0938_41C5_997181F6A033"],"maps":[],"enabledInSurfaceSelection":false,"class":"HotspotPanoramaOverlay","useHandCursor":true,"id":"overlay_8D515A50_9CA4_0939_41D0_83640329F9AC","enabledInCardboard":true,"items":[{"image":"this.AnimatedImageResource_8DE7E071_9CC5_85D7_41D3_0EB6E4E50FC5","distance":100,"yaw":36.84,"class":"HotspotPanoramaOverlayImage","vfov":3.36,"horizontalAlign":"center","hfov":12,"data":{"label":"Circle Point 01c"},"verticalAlign":"middle","pitch":-34.34,"scaleMode":"fit_inside"}],"data":{"label":"Circle Point 01c","hasPanoramaAction":true}},{"areas":["this.HotspotPanoramaOverlayArea_8FF3CE24_9CA4_0918_41DD_074CF41803BD"],"maps":[],"class":"HotspotPanoramaOverlay","useHandCursor":true,"items":[{"image":{"levels":[{"height":154,"width":152,"url":"media/panorama_900E2735_9CA4_077B_41E3_06E0AAA6A104_HS_iops16pp.png","class":"ImageResourceLevel"}],"class":"ImageResource"},"distance":50,"yaw":134.13,"pitch":-88.94,"class":"HotspotPanoramaOverlayImage","vfov":9.32,"hfov":9.18}],"data":{"label":"Poligono"},"enabledInCardboard":true,"id":"overlay_8F968DFD_9CA4_0AE8_41D4_E22B47FAA024"},{"class":"PanoramaCameraSequence","movements":[{"easing":"cubic_in","yawDelta":18.5,"yawSpeed":7.96,"class":"DistancePanoramaCameraMovement"},{"easing":"linear","yawDelta":323,"yawSpeed":7.96,"class":"DistancePanoramaCameraMovement"},{"easing":"cubic_out","yawDelta":18.5,"yawSpeed":7.96,"class":"DistancePanoramaCameraMovement"}],"restartMovementOnUserInteraction":false,"id":"sequence_96A64B50_9CA4_0F39_41DD_4AAB35A8A8A8"},{"areas":["this.HotspotPanoramaOverlayArea_92333E8A_9CC5_BD4A_41C6_4E037A27FDB5"],"maps":[],"enabledInSurfaceSelection":false,"class":"HotspotPanoramaOverlay","useHandCursor":true,"id":"overlay_92233E73_9CC5_BDDA_41D8_70FC4633932F","enabledInCardboard":true,"items":[{"image":"this.AnimatedImageResource_8DE67072_9CC5_85D5_41E3_568BC96441D6","distance":100,"yaw":-55.59,"class":"HotspotPanoramaOverlayImage","scaleMode":"fit_inside","horizontalAlign":"center","hfov":12,"data":{"label":"Circle Point 01c"},"roll":11.28,"verticalAlign":"middle","pitch":-37.43,"vfov":3.36}],"data":{"label":"Circle Point 01c","hasPanoramaAction":true}},{"areas":["this.HotspotPanoramaOverlayArea_92F1398F_9CC7_874A_41CC_FEF5DC81A418"],"maps":[],"enabledInSurfaceSelection":false,"class":"HotspotPanoramaOverlay","useHandCursor":true,"id":"overlay_92F2898C_9CC7_874E_41D8_C284AC819861","enabledInCardboard":true,"items":[{"image":"this.AnimatedImageResource_8DE0E072_9CC5_85D5_41D5_3C4B9E949B09","distance":100,"yaw":121.46,"class":"HotspotPanoramaOverlayImage","vfov":3.36,"horizontalAlign":"center","hfov":12,"data":{"label":"Circle Point 01c"},"verticalAlign":"middle","pitch":-23.45,"scaleMode":"fit_inside"}],"data":{"label":"Circle Point 01c","hasPanoramaAction":true}},{"areas":["this.HotspotPanoramaOverlayArea_92B927A1_9CC6_8B77_41DA_D16B9298F275"],"maps":[],"class":"HotspotPanoramaOverlay","useHandCursor":true,"items":[{"image":"this.AnimatedImageResource_8DE6E072_9CC5_85D5_41D4_FF7F66774EE6","distance":100,"yaw":170.33,"class":"HotspotPanoramaOverlayImage","scaleMode":"fit_inside","horizontalAlign":"center","hfov":7.71,"data":{"label":"Circle Door 01"},"roll":1.97,"verticalAlign":"middle","pitch":3.91,"vfov":6.97}],"data":{"label":"Circle Door 01"},"enabledInCardboard":true,"id":"overlay_92A8979E_9CC6_8B4D_41D4_2CB40CEDC06E"},{"areas":["this.HotspotPanoramaOverlayArea_93D4CE9C_9CC5_7D4D_41E1_7E4A4FF2A772"],"maps":[],"enabledInSurfaceSelection":false,"class":"HotspotPanoramaOverlay","useHandCursor":true,"id":"overlay_93D60E9A_9CC5_7D55_41D8_87026E5CF1A3","enabledInCardboard":true,"items":[{"image":"this.AnimatedImageResource_8DE63072_9CC5_85D5_41E3_51883C2926C9","distance":100,"yaw":-94.85,"class":"HotspotPanoramaOverlayImage","vfov":3.36,"horizontalAlign":"center","hfov":12,"data":{"label":"Circle Point 01c"},"verticalAlign":"middle","pitch":-48.56,"scaleMode":"fit_inside"}],"data":{"label":"Circle Point 01c","hasPanoramaAction":true}},{"click":"this.mainPlayList.set('selectedIndex', 2)","mapColor":"any","class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_8C199AB9_9CCE_8556_41D1_DF0140D74172"},{"colCount":4,"rowCount":6,"frameDuration":41,"class":"AnimatedImageResource","id":"AnimatedImageResource_8DE1B073_9CC5_85DB_41DC_50EDACA25132","levels":[{"height":420,"width":1000,"url":"media/res_8FE7C4EE_9CBC_FAE9_41DD_694019C32772_0.png","class":"ImageResourceLevel"}],"frameCount":22},{"click":"this.mainPlayList.set('selectedIndex', 0)","mapColor":"any","class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_8F354BE4_9CE4_0F18_41C0_EE7ECE01279E"},{"colCount":4,"rowCount":6,"frameDuration":41,"class":"AnimatedImageResource","id":"AnimatedImageResource_8DE17072_9CC5_85D5_41D8_E886993CF108","levels":[{"height":420,"width":1000,"url":"media/res_8FE7C4EE_9CBC_FAE9_41DD_694019C32772_0.png","class":"ImageResourceLevel"}],"frameCount":22},{"click":"this.mainPlayList.set('selectedIndex', 2)","mapColor":"any","class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_918D38E5_9CC6_86FF_41DD_4AC76B5DC94C"},{"colCount":4,"rowCount":6,"frameDuration":41,"class":"AnimatedImageResource","id":"AnimatedImageResource_8DE09072_9CC5_85D5_41D1_4D482BAA5C8A","levels":[{"height":420,"width":1000,"url":"media/res_8FE7C4EE_9CBC_FAE9_41DD_694019C32772_0.png","class":"ImageResourceLevel"}],"frameCount":22},{"click":"this.mainPlayList.set('selectedIndex', 1)","mapColor":"any","class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_8ED59AD4_9CA4_0938_41C5_997181F6A033"},{"colCount":4,"rowCount":6,"frameDuration":41,"class":"AnimatedImageResource","id":"AnimatedImageResource_8DE7E071_9CC5_85D7_41D3_0EB6E4E50FC5","levels":[{"height":420,"width":1000,"url":"media/res_8FE7C4EE_9CBC_FAE9_41DD_694019C32772_0.png","class":"ImageResourceLevel"}],"frameCount":22},{"click":"this.openLink(this.translate('LinkBehaviour_8E780750_9CBC_0739_41D6_554E3A60E043.source'), '_blank')","mapColor":"image","class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_8FF3CE24_9CA4_0918_41DD_074CF41803BD"},{"click":"this.mainPlayList.set('selectedIndex', 2)","mapColor":"any","class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_92333E8A_9CC5_BD4A_41C6_4E037A27FDB5"},{"colCount":4,"rowCount":6,"frameDuration":41,"class":"AnimatedImageResource","id":"AnimatedImageResource_8DE67072_9CC5_85D5_41E3_568BC96441D6","levels":[{"height":420,"width":1000,"url":"media/res_8FE7C4EE_9CBC_FAE9_41DD_694019C32772_0.png","class":"ImageResourceLevel"}],"frameCount":22},{"click":"this.mainPlayList.set('selectedIndex', 1)","mapColor":"any","class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_92F1398F_9CC7_874A_41CC_FEF5DC81A418"},{"colCount":4,"rowCount":6,"frameDuration":41,"class":"AnimatedImageResource","id":"AnimatedImageResource_8DE0E072_9CC5_85D5_41D5_3C4B9E949B09","levels":[{"height":420,"width":1000,"url":"media/res_8FE7C4EE_9CBC_FAE9_41DD_694019C32772_0.png","class":"ImageResourceLevel"}],"frameCount":22},{"click":"this.mainPlayList.set('selectedIndex', 4)","mapColor":"any","class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_92B927A1_9CC6_8B77_41DA_D16B9298F275"},{"colCount":4,"rowCount":6,"frameDuration":41,"class":"AnimatedImageResource","id":"AnimatedImageResource_8DE6E072_9CC5_85D5_41D4_FF7F66774EE6","levels":[{"height":978,"width":652,"url":"media/res_933D4DCB_9CCA_BECB_41D7_951FAB5ABB69_0.png","class":"ImageResourceLevel"}],"frameCount":24},{"click":"this.mainPlayList.set('selectedIndex', 3)","mapColor":"any","class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_93D4CE9C_9CC5_7D4D_41E1_7E4A4FF2A772"},{"colCount":4,"rowCount":6,"frameDuration":41,"class":"AnimatedImageResource","id":"AnimatedImageResource_8DE63072_9CC5_85D5_41E3_51883C2926C9","levels":[{"height":420,"width":1000,"url":"media/res_8FE7C4EE_9CBC_FAE9_41DD_694019C32772_0.png","class":"ImageResourceLevel"}],"frameCount":22}],"class":"Player","data":{"name":"Player535","defaultLocale":"pt","locales":{"pt":"locale/pt.txt"},"textToSpeechConfig":{"stopBackgroundAudio":false,"volume":1,"speechOnInfoWindow":false,"speechOnTooltip":false,"speechOnQuizQuestion":false,"pitch":1,"rate":1}},"gap":10,"mediaActivationMode":"window","backgroundOpacity":1,"width":"100%","paddingTop":0,"left":556.65,"paddingLeft":0,"mouseWheelEnabled":true,"paddingBottom":0,"propagateClick":false,"horizontalAlign":"left","id":"rootPlayer","overflow":"hidden","scrollBarMargin":2,"verticalAlign":"top","paddingRight":0,"vrPolyfillScale":0.75,"desktopMipmappingEnabled":false,"mobileMipmappingEnabled":false,"children":["this.MainViewer"],"contentOpaque":false,"scrollBarOpacity":0.5,"toolTipHorizontalAlign":"center","layout":"absolute","height":"100%","backgroundColor":["#FFFFFF"],"scrollBarVisible":"rollOver","backgroundPreloadEnabled":true,"scrollBarWidth":10,"borderRadius":0,"scrollBarColor":"#000000","menu":["this.TDVAuthor"],"scripts":{"translate":TDV.Tour.Script.translate,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"quizShowScore":TDV.Tour.Script.quizShowScore,"downloadFile":TDV.Tour.Script.downloadFile,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"mixObject":TDV.Tour.Script.mixObject,"initAnalytics":TDV.Tour.Script.initAnalytics,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"setMapLocation":TDV.Tour.Script.setMapLocation,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"registerKey":TDV.Tour.Script.registerKey,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"getKey":TDV.Tour.Script.getKey,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"quizStart":TDV.Tour.Script.quizStart,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"showWindow":TDV.Tour.Script.showWindow,"clone":TDV.Tour.Script.clone,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"openLink":TDV.Tour.Script.openLink,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"init":TDV.Tour.Script.init,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"initQuiz":TDV.Tour.Script.initQuiz,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"getOverlays":TDV.Tour.Script.getOverlays,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"isPanorama":TDV.Tour.Script.isPanorama,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"getMediaByName":TDV.Tour.Script.getMediaByName,"getMainViewer":TDV.Tour.Script.getMainViewer,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"quizFinish":TDV.Tour.Script.quizFinish,"historyGoBack":TDV.Tour.Script.historyGoBack,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"shareSocial":TDV.Tour.Script.shareSocial,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"historyGoForward":TDV.Tour.Script.historyGoForward,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"showPopupImage":TDV.Tour.Script.showPopupImage,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"cloneCamera":TDV.Tour.Script.cloneCamera,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"getPixels":TDV.Tour.Script.getPixels,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"setLocale":TDV.Tour.Script.setLocale,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"getComponentByName":TDV.Tour.Script.getComponentByName,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"setValue":TDV.Tour.Script.setValue,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"existsKey":TDV.Tour.Script.existsKey,"playAudioList":TDV.Tour.Script.playAudioList,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"textToSpeech":TDV.Tour.Script.textToSpeech,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"unregisterKey":TDV.Tour.Script.unregisterKey,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"resumePlayers":TDV.Tour.Script.resumePlayers},"defaultVRPointer":"laser","downloadEnabled":false,"borderSize":0,"start":"this.get('data').surfaceSelectionHotspotMode = 'invisible'; this.init()","minWidth":20,"shadow":false,"minHeight":20,"backgroundColorDirection":"vertical"};
    if (d['data'] == undefined)
        d['data'] = {};
    d['data']['translateObjs'] = c;
    d['data']['history'] = {};
    d['scripts']['createQuizConfig'] = createQuizConfig;
    TDV['PlayerAPI']['defineScript'](d);
}());
//# sourceMappingURL=http://localhost:9000/script_device_v2021.2.3.js.map
//Generated with v2021.2.3, Thu Jun 8 2023