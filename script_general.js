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
    var d = {"borderRadius":0,"shadow":false,"gap":10,"definitions": [{"hoverFactor":0,"initialPosition":{"yaw":0,"hfov":120,"class":"PanoramaCameraPosition","pitch":0},"displayOriginPosition":{"yaw":0,"hfov":165,"class":"RotationalCameraDisplayPosition","pitch":90,"stereographicFactor":1},"automaticZoomSpeed":10,"class":"PanoramaCamera","displayMovements":[{"easing":"linear","duration":1000,"class":"TargetRotationalCameraDisplayMovement"},{"easing":"cubic_in_out","targetHfov":120,"targetPitch":0,"duration":3000,"class":"TargetRotationalCameraDisplayMovement","targetStereographicFactor":0}],"initialSequence":"this.sequence_96A21B4F_9CA4_0F27_41D2_E599A34CC4C2","id":"panorama_900E2735_9CA4_077B_41E3_06E0AAA6A104_camera"},{"class":"PlayList","items":[{"player":"this.MainViewerPanoramaPlayer","camera":"this.panorama_900E2735_9CA4_077B_41E3_06E0AAA6A104_camera","media":"this.panorama_900E2735_9CA4_077B_41E3_06E0AAA6A104","class":"PanoramaPlayListItem","begin":"this.setEndToItemIndex(this.mainPlayList, 0, 1)"},{"player":"this.MainViewerPanoramaPlayer","camera":"this.panorama_95518387_9CA4_3F26_41E3_50C1908CAA6A_camera","media":"this.panorama_95518387_9CA4_3F26_41E3_50C1908CAA6A","class":"PanoramaPlayListItem","begin":"this.setEndToItemIndex(this.mainPlayList, 1, 2)"},{"player":"this.MainViewerPanoramaPlayer","camera":"this.panorama_954CBD5D_9CA4_0B2B_41C0_E2645E0AB1D3_camera","media":"this.panorama_954CBD5D_9CA4_0B2B_41C0_E2645E0AB1D3","class":"PanoramaPlayListItem","begin":"this.setEndToItemIndex(this.mainPlayList, 2, 3)"},{"player":"this.MainViewerPanoramaPlayer","camera":"this.panorama_954D2746_9CA4_0719_4194_E734E7280177_camera","media":"this.panorama_954D2746_9CA4_0719_4194_E734E7280177","class":"PanoramaPlayListItem","begin":"this.setEndToItemIndex(this.mainPlayList, 3, 4)"},{"player":"this.MainViewerPanoramaPlayer","camera":"this.panorama_954D010F_9CA4_7B27_41D2_8232EB540991_camera","media":"this.panorama_954D010F_9CA4_7B27_41D2_8232EB540991","class":"PanoramaPlayListItem","begin":"this.setEndToItemIndex(this.mainPlayList, 4, 0)","end":"this.trigger('tourEnded')"}],"id":"mainPlayList"},{"hoverFactor":0,"initialPosition":{"yaw":0,"hfov":120,"class":"PanoramaCameraPosition","pitch":0},"automaticZoomSpeed":10,"class":"PanoramaCamera","initialSequence":"this.sequence_96A6AB50_9CA4_0F39_41C0_AC37569131C7","id":"panorama_954CBD5D_9CA4_0B2B_41C0_E2645E0AB1D3_camera"},{"hoverFactor":0,"initialPosition":{"yaw":0,"hfov":120,"class":"PanoramaCameraPosition","pitch":0},"automaticZoomSpeed":10,"class":"PanoramaCamera","initialSequence":"this.sequence_96A64B50_9CA4_0F39_41DD_4AAB35A8A8A8","id":"panorama_954D2746_9CA4_0719_4194_E734E7280177_camera"},{"hfovMin":"110%","thumbnailUrl":"media/panorama_954D010F_9CA4_7B27_41D2_8232EB540991_t.jpg","partial":false,"frames":[{"cube":{"levels":[{"width":12288,"rowCount":4,"url":"media/panorama_954D010F_9CA4_7B27_41D2_8232EB540991_0/{face}/0/{row}_{column}.jpg","tags":"ondemand","height":2048,"colCount":24,"class":"TiledImageResourceLevel"},{"width":6144,"rowCount":2,"url":"media/panorama_954D010F_9CA4_7B27_41D2_8232EB540991_0/{face}/1/{row}_{column}.jpg","tags":"ondemand","height":1024,"colCount":12,"class":"TiledImageResourceLevel"},{"width":3072,"rowCount":1,"url":"media/panorama_954D010F_9CA4_7B27_41D2_8232EB540991_0/{face}/2/{row}_{column}.jpg","tags":["ondemand","preload"],"height":512,"colCount":6,"class":"TiledImageResourceLevel"},{"width":9216,"rowCount":1,"url":"media/panorama_954D010F_9CA4_7B27_41D2_8232EB540991_0/{face}/vr/0.jpg","tags":"mobilevr","height":1536,"colCount":6,"class":"TiledImageResourceLevel"},{"width":12288,"rowCount":1,"url":"media/panorama_954D010F_9CA4_7B27_41D2_8232EB540991_0/{face}/vr2gen/0.jpg","tags":"mobilevr2gen","height":2048,"colCount":6,"class":"TiledImageResourceLevel"}],"class":"ImageResource"},"thumbnailUrl":"media/panorama_954D010F_9CA4_7B27_41D2_8232EB540991_t.jpg","class":"CubicPanoramaFrame"}],"vfov":180,"pitch":0,"label":trans('panorama_954D010F_9CA4_7B27_41D2_8232EB540991.label'),"id":"panorama_954D010F_9CA4_7B27_41D2_8232EB540991","hfovMax":130,"class":"Panorama","data":{"label":"Loft 02 - B House"},"hfov":360},{"hoverFactor":0,"initialPosition":{"yaw":0,"hfov":120,"class":"PanoramaCameraPosition","pitch":0},"automaticZoomSpeed":10,"class":"PanoramaCamera","initialSequence":"this.sequence_96A66B50_9CA4_0F39_41C0_9F3AA1B17920","id":"panorama_954D010F_9CA4_7B27_41D2_8232EB540991_camera"},{"hfovMin":"110%","thumbnailUrl":"media/panorama_954CBD5D_9CA4_0B2B_41C0_E2645E0AB1D3_t.jpg","partial":false,"frames":[{"cube":{"levels":[{"width":12288,"rowCount":4,"url":"media/panorama_954CBD5D_9CA4_0B2B_41C0_E2645E0AB1D3_0/{face}/0/{row}_{column}.jpg","tags":"ondemand","height":2048,"colCount":24,"class":"TiledImageResourceLevel"},{"width":6144,"rowCount":2,"url":"media/panorama_954CBD5D_9CA4_0B2B_41C0_E2645E0AB1D3_0/{face}/1/{row}_{column}.jpg","tags":"ondemand","height":1024,"colCount":12,"class":"TiledImageResourceLevel"},{"width":3072,"rowCount":1,"url":"media/panorama_954CBD5D_9CA4_0B2B_41C0_E2645E0AB1D3_0/{face}/2/{row}_{column}.jpg","tags":["ondemand","preload"],"height":512,"colCount":6,"class":"TiledImageResourceLevel"},{"width":9216,"rowCount":1,"url":"media/panorama_954CBD5D_9CA4_0B2B_41C0_E2645E0AB1D3_0/{face}/vr/0.jpg","tags":"mobilevr","height":1536,"colCount":6,"class":"TiledImageResourceLevel"},{"width":12288,"rowCount":1,"url":"media/panorama_954CBD5D_9CA4_0B2B_41C0_E2645E0AB1D3_0/{face}/vr2gen/0.jpg","tags":"mobilevr2gen","height":2048,"colCount":6,"class":"TiledImageResourceLevel"}],"class":"ImageResource"},"thumbnailUrl":"media/panorama_954CBD5D_9CA4_0B2B_41C0_E2645E0AB1D3_t.jpg","class":"CubicPanoramaFrame"}],"vfov":180,"pitch":0,"label":trans('panorama_954CBD5D_9CA4_0B2B_41C0_E2645E0AB1D3.label'),"id":"panorama_954CBD5D_9CA4_0B2B_41C0_E2645E0AB1D3","hfovMax":130,"class":"Panorama","data":{"label":"Loft 02 - B House"},"hfov":360},{"hfovMin":"110%","thumbnailUrl":"media/panorama_900E2735_9CA4_077B_41E3_06E0AAA6A104_t.jpg","partial":false,"frames":[{"cube":{"levels":[{"width":12288,"rowCount":4,"url":"media/panorama_900E2735_9CA4_077B_41E3_06E0AAA6A104_0/{face}/0/{row}_{column}.jpg","tags":"ondemand","height":2048,"colCount":24,"class":"TiledImageResourceLevel"},{"width":6144,"rowCount":2,"url":"media/panorama_900E2735_9CA4_077B_41E3_06E0AAA6A104_0/{face}/1/{row}_{column}.jpg","tags":"ondemand","height":1024,"colCount":12,"class":"TiledImageResourceLevel"},{"width":3072,"rowCount":1,"url":"media/panorama_900E2735_9CA4_077B_41E3_06E0AAA6A104_0/{face}/2/{row}_{column}.jpg","tags":["ondemand","preload"],"height":512,"colCount":6,"class":"TiledImageResourceLevel"},{"width":9216,"rowCount":1,"url":"media/panorama_900E2735_9CA4_077B_41E3_06E0AAA6A104_0/{face}/vr/0.jpg","tags":"mobilevr","height":1536,"colCount":6,"class":"TiledImageResourceLevel"},{"width":12288,"rowCount":1,"url":"media/panorama_900E2735_9CA4_077B_41E3_06E0AAA6A104_0/{face}/vr2gen/0.jpg","tags":"mobilevr2gen","height":2048,"colCount":6,"class":"TiledImageResourceLevel"}],"class":"ImageResource"},"thumbnailUrl":"media/panorama_900E2735_9CA4_077B_41E3_06E0AAA6A104_t.jpg","class":"CubicPanoramaFrame"}],"vfov":180,"overlays":["this.overlay_8D515A50_9CA4_0939_41D0_83640329F9AC","this.overlay_8F968DFD_9CA4_0AE8_41D4_E22B47FAA024"],"label":trans('panorama_900E2735_9CA4_077B_41E3_06E0AAA6A104.label'),"id":"panorama_900E2735_9CA4_077B_41E3_06E0AAA6A104","hfovMax":130,"class":"Panorama","data":{"label":"Loft 02 - B House"},"pitch":0,"adjacentPanoramas":[{"distance":2.49,"yaw":36.84,"select":"this.overlay_8D515A50_9CA4_0939_41D0_83640329F9AC.get('areas').forEach(function(a){ a.trigger('click') })","panorama":"this.panorama_95518387_9CA4_3F26_41E3_50C1908CAA6A","class":"AdjacentPanorama","data":{"overlayID":"overlay_8D515A50_9CA4_0939_41D0_83640329F9AC"}}],"hfov":360},{"borderRadius":0,"playbackBarProgressBorderRadius":0,"toolTipFontFamily":"Arial","playbackBarBackgroundColor":["#FFFFFF"],"playbackBarHeadOpacity":1,"subtitlesTextShadowVerticalLength":1,"playbackBarBorderColor":"#FFFFFF","subtitlesBackgroundColor":"#000000","playbackBarBorderSize":0,"playbackBarBorderRadius":0,"toolTipBorderRadius":3,"toolTipShadowSpread":0,"subtitlesHorizontalAlign":"center","toolTipShadowOpacity":1,"playbackBarHeight":10,"playbackBarProgressBorderColor":"#000000","id":"MainViewer","playbackBarHeadBorderSize":0,"playbackBarHeadBackgroundColorRatios":[0,1],"width":"100%","paddingRight":0,"progressBackgroundColorRatios":[0],"paddingLeft":0,"toolTipBackgroundColor":"#F6F6F6","subtitlesFontColor":"#FFFFFF","subtitlesVerticalAlign":"bottom","toolTipShadowVerticalLength":0,"toolTipFontSize":"1.11vmin","playbackBarHeadBackgroundColorDirection":"vertical","toolTipTextShadowColor":"#000000","progressOpacity":1,"progressRight":0,"toolTipBorderColor":"#767676","playbackBarHeadWidth":6,"progressBarBorderColor":"#000000","transitionMode":"blending","progressBarBackgroundColorDirection":"vertical","progressBarBackgroundColorRatios":[0],"toolTipHorizontalAlign":"center","height":"100%","progressBackgroundColorDirection":"vertical","translationTransitionDuration":1000,"playbackBarBottom":5,"subtitlesTextShadowColor":"#000000","playbackBarProgressBackgroundColor":["#3399FF"],"subtitlesPaddingLeft":5,"toolTipFontStyle":"normal","playbackBarProgressBorderSize":0,"subtitlesTop":0,"subtitlesFontSize":"3vmin","subtitlesPaddingTop":5,"progressBorderColor":"#000000","progressBackgroundOpacity":1,"subtitlesPaddingBottom":5,"toolTipPaddingLeft":6,"subtitlesBottom":50,"displayTooltipInTouchScreens":true,"subtitlesBackgroundOpacity":0.2,"playbackBarHeadHeight":15,"progressBarBackgroundColor":["#3399FF"],"doubleClickAction":"toggle_fullscreen","progressBackgroundColor":["#FFFFFF"],"toolTipFontWeight":"normal","progressBarOpacity":1,"playbackBarHeadBorderRadius":0,"progressBottom":0,"class":"ViewerArea","minHeight":50,"playbackBarHeadShadowBlurRadius":3,"vrPointerSelectionColor":"#FF6600","playbackBarBackgroundOpacity":1,"subtitlesPaddingRight":5,"borderSize":0,"toolTipPaddingRight":6,"playbackBarHeadShadowHorizontalLength":0,"minWidth":100,"progressHeight":10,"subtitlesOpacity":1,"subtitlesBorderSize":0,"progressBorderSize":0,"toolTipShadowHorizontalLength":0,"subtitlesFontFamily":"Arial","toolTipTextShadowBlurRadius":3,"progressBarBorderSize":0,"paddingTop":0,"propagateClick":false,"toolTipTextShadowOpacity":0,"subtitlesTextShadowBlurRadius":0,"playbackBarHeadShadowColor":"#000000","firstTransitionDuration":0,"paddingBottom":0,"toolTipFontColor":"#606060","progressBarBorderRadius":0,"subtitlesBorderColor":"#FFFFFF","transitionDuration":500,"progressBorderRadius":0,"subtitlesFontWeight":"normal","toolTipPaddingBottom":4,"playbackBarProgressOpacity":1,"playbackBarHeadShadow":true,"playbackBarHeadShadowOpacity":0.7,"playbackBarProgressBackgroundColorDirection":"vertical","progressLeft":0,"playbackBarProgressBackgroundColorRatios":[0],"surfaceReticleColor":"#FFFFFF","subtitlesTextShadowHorizontalLength":1,"surfaceReticleOpacity":0.6,"subtitlesTextDecoration":"none","toolTipShadowColor":"#333333","subtitlesTextShadowOpacity":1,"surfaceReticleSelectionColor":"#FFFFFF","playbackBarOpacity":1,"vrPointerSelectionTime":2000,"playbackBarLeft":0,"playbackBarHeadBorderColor":"#000000","toolTipBorderSize":1,"surfaceReticleSelectionOpacity":1,"toolTipDisplayTime":600,"toolTipPaddingTop":4,"subtitlesShadow":false,"subtitlesEnabled":true,"playbackBarBackgroundColorDirection":"vertical","toolTipOpacity":1,"subtitlesGap":0,"playbackBarHeadShadowVerticalLength":0,"displayTooltipInSurfaceSelection":true,"vrPointerColor":"#FFFFFF","playbackBarRight":0,"playbackBarHeadBackgroundColor":["#111111","#666666"],"toolTipShadowBlurRadius":3,"shadow":false,"data":{"name":"Main Viewer"}},{"displayPlaybackBar":true,"surfaceSelectionEnabled":true,"zoomEnabled":true,"viewerArea":"this.MainViewer","class":"PanoramaPlayer","gyroscopeVerticalDraggingEnabled":true,"aaEnabled":true,"adjacentPanoramaPositionsEnabled":false,"arrowKeysAction":"translate","touchControlMode":"drag_rotation","mouseControlMode":"drag_rotation","id":"MainViewerPanoramaPlayer"},{"hfovMin":"110%","thumbnailUrl":"media/panorama_95518387_9CA4_3F26_41E3_50C1908CAA6A_t.jpg","partial":false,"frames":[{"cube":{"levels":[{"width":12288,"rowCount":4,"url":"media/panorama_95518387_9CA4_3F26_41E3_50C1908CAA6A_0/{face}/0/{row}_{column}.jpg","tags":"ondemand","height":2048,"colCount":24,"class":"TiledImageResourceLevel"},{"width":6144,"rowCount":2,"url":"media/panorama_95518387_9CA4_3F26_41E3_50C1908CAA6A_0/{face}/1/{row}_{column}.jpg","tags":"ondemand","height":1024,"colCount":12,"class":"TiledImageResourceLevel"},{"width":3072,"rowCount":1,"url":"media/panorama_95518387_9CA4_3F26_41E3_50C1908CAA6A_0/{face}/2/{row}_{column}.jpg","tags":["ondemand","preload"],"height":512,"colCount":6,"class":"TiledImageResourceLevel"},{"width":9216,"rowCount":1,"url":"media/panorama_95518387_9CA4_3F26_41E3_50C1908CAA6A_0/{face}/vr/0.jpg","tags":"mobilevr","height":1536,"colCount":6,"class":"TiledImageResourceLevel"},{"width":12288,"rowCount":1,"url":"media/panorama_95518387_9CA4_3F26_41E3_50C1908CAA6A_0/{face}/vr2gen/0.jpg","tags":"mobilevr2gen","height":2048,"colCount":6,"class":"TiledImageResourceLevel"}],"class":"ImageResource"},"thumbnailUrl":"media/panorama_95518387_9CA4_3F26_41E3_50C1908CAA6A_t.jpg","class":"CubicPanoramaFrame"}],"vfov":180,"pitch":0,"label":trans('panorama_95518387_9CA4_3F26_41E3_50C1908CAA6A.label'),"id":"panorama_95518387_9CA4_3F26_41E3_50C1908CAA6A","hfovMax":130,"class":"Panorama","data":{"label":"Loft 02 - B House"},"hfov":360},{"hoverFactor":0,"initialPosition":{"yaw":0,"hfov":120,"class":"PanoramaCameraPosition","pitch":0},"automaticZoomSpeed":10,"class":"PanoramaCamera","initialSequence":"this.sequence_96A6FB50_9CA4_0F39_41D5_BC22918ED515","id":"panorama_95518387_9CA4_3F26_41E3_50C1908CAA6A_camera"},{"hfovMin":"110%","thumbnailUrl":"media/panorama_954D2746_9CA4_0719_4194_E734E7280177_t.jpg","partial":false,"frames":[{"cube":{"levels":[{"width":12288,"rowCount":4,"url":"media/panorama_954D2746_9CA4_0719_4194_E734E7280177_0/{face}/0/{row}_{column}.jpg","tags":"ondemand","height":2048,"colCount":24,"class":"TiledImageResourceLevel"},{"width":6144,"rowCount":2,"url":"media/panorama_954D2746_9CA4_0719_4194_E734E7280177_0/{face}/1/{row}_{column}.jpg","tags":"ondemand","height":1024,"colCount":12,"class":"TiledImageResourceLevel"},{"width":3072,"rowCount":1,"url":"media/panorama_954D2746_9CA4_0719_4194_E734E7280177_0/{face}/2/{row}_{column}.jpg","tags":["ondemand","preload"],"height":512,"colCount":6,"class":"TiledImageResourceLevel"},{"width":9216,"rowCount":1,"url":"media/panorama_954D2746_9CA4_0719_4194_E734E7280177_0/{face}/vr/0.jpg","tags":"mobilevr","height":1536,"colCount":6,"class":"TiledImageResourceLevel"},{"width":12288,"rowCount":1,"url":"media/panorama_954D2746_9CA4_0719_4194_E734E7280177_0/{face}/vr2gen/0.jpg","tags":"mobilevr2gen","height":2048,"colCount":6,"class":"TiledImageResourceLevel"}],"class":"ImageResource"},"thumbnailUrl":"media/panorama_954D2746_9CA4_0719_4194_E734E7280177_t.jpg","class":"CubicPanoramaFrame"}],"vfov":180,"pitch":0,"label":trans('panorama_954D2746_9CA4_0719_4194_E734E7280177.label'),"id":"panorama_954D2746_9CA4_0719_4194_E734E7280177","hfovMax":130,"class":"Panorama","data":{"label":"Loft 02 - B House"},"hfov":360},{"class":"PlayerMenuItem","label":"BS ESTÚDIO","id":"TDVAuthor"},{"movements":[{"easing":"cubic_in","yawDelta":18.5,"class":"DistancePanoramaCameraMovement","yawSpeed":7.96},{"easing":"linear","yawDelta":323,"class":"DistancePanoramaCameraMovement","yawSpeed":7.96},{"easing":"cubic_out","yawDelta":18.5,"class":"DistancePanoramaCameraMovement","yawSpeed":7.96}],"class":"PanoramaCameraSequence","restartMovementOnUserInteraction":false,"id":"sequence_96A21B4F_9CA4_0F27_41D2_E599A34CC4C2"},{"movements":[{"easing":"cubic_in","yawDelta":18.5,"class":"DistancePanoramaCameraMovement","yawSpeed":7.96},{"easing":"linear","yawDelta":323,"class":"DistancePanoramaCameraMovement","yawSpeed":7.96},{"easing":"cubic_out","yawDelta":18.5,"class":"DistancePanoramaCameraMovement","yawSpeed":7.96}],"class":"PanoramaCameraSequence","restartMovementOnUserInteraction":false,"id":"sequence_96A6AB50_9CA4_0F39_41C0_AC37569131C7"},{"movements":[{"easing":"cubic_in","yawDelta":18.5,"class":"DistancePanoramaCameraMovement","yawSpeed":7.96},{"easing":"linear","yawDelta":323,"class":"DistancePanoramaCameraMovement","yawSpeed":7.96},{"easing":"cubic_out","yawDelta":18.5,"class":"DistancePanoramaCameraMovement","yawSpeed":7.96}],"class":"PanoramaCameraSequence","restartMovementOnUserInteraction":false,"id":"sequence_96A64B50_9CA4_0F39_41DD_4AAB35A8A8A8"},{"movements":[{"easing":"cubic_in","yawDelta":18.5,"class":"DistancePanoramaCameraMovement","yawSpeed":7.96},{"easing":"linear","yawDelta":323,"class":"DistancePanoramaCameraMovement","yawSpeed":7.96},{"easing":"cubic_out","yawDelta":18.5,"class":"DistancePanoramaCameraMovement","yawSpeed":7.96}],"class":"PanoramaCameraSequence","restartMovementOnUserInteraction":false,"id":"sequence_96A66B50_9CA4_0F39_41C0_9F3AA1B17920"},{"useHandCursor":true,"class":"HotspotPanoramaOverlay","areas":["this.HotspotPanoramaOverlayArea_8ED59AD4_9CA4_0938_41C5_997181F6A033"],"maps":[],"data":{"hasPanoramaAction":true,"label":"Circle Point 01c"},"id":"overlay_8D515A50_9CA4_0939_41D0_83640329F9AC","items":[{"image":"this.AnimatedImageResource_88CFBFDC_9CA4_0729_41D0_C977BC4CB143","distance":100,"yaw":36.84,"horizontalAlign":"center","class":"HotspotPanoramaOverlayImage","vfov":3.36,"data":{"label":"Circle Point 01c"},"verticalAlign":"middle","hfov":12,"pitch":-34.34,"scaleMode":"fit_inside"}],"enabledInCardboard":true,"enabledInSurfaceSelection":false},{"areas":["this.HotspotPanoramaOverlayArea_8FF3CE24_9CA4_0918_41DD_074CF41803BD"],"maps":[],"items":[{"image":{"class":"ImageResource","levels":[{"height":154,"width":152,"class":"ImageResourceLevel","url":"media/panorama_900E2735_9CA4_077B_41E3_06E0AAA6A104_HS_iops16pp.png"}]},"distance":50,"yaw":134.13,"vfov":9.32,"class":"HotspotPanoramaOverlayImage","hfov":9.18,"pitch":-88.94}],"data":{"label":"Poligono"},"useHandCursor":true,"class":"HotspotPanoramaOverlay","enabledInCardboard":true,"id":"overlay_8F968DFD_9CA4_0AE8_41D4_E22B47FAA024"},{"movements":[{"easing":"cubic_in","yawDelta":18.5,"class":"DistancePanoramaCameraMovement","yawSpeed":7.96},{"easing":"linear","yawDelta":323,"class":"DistancePanoramaCameraMovement","yawSpeed":7.96},{"easing":"cubic_out","yawDelta":18.5,"class":"DistancePanoramaCameraMovement","yawSpeed":7.96}],"class":"PanoramaCameraSequence","restartMovementOnUserInteraction":false,"id":"sequence_96A6FB50_9CA4_0F39_41D5_BC22918ED515"},{"mapColor":"any","class":"HotspotPanoramaOverlayArea","click":"this.mainPlayList.set('selectedIndex', 1)","id":"HotspotPanoramaOverlayArea_8ED59AD4_9CA4_0938_41C5_997181F6A033"},{"rowCount":6,"frameDuration":41,"frameCount":22,"colCount":4,"class":"AnimatedImageResource","levels":[{"height":420,"width":1000,"class":"ImageResourceLevel","url":"media/res_8FE7C4EE_9CBC_FAE9_41DD_694019C32772_0.png"}],"id":"AnimatedImageResource_88CFBFDC_9CA4_0729_41D0_C977BC4CB143"},{"mapColor":"image","class":"HotspotPanoramaOverlayArea","click":"this.openLink(this.translate('LinkBehaviour_8E780750_9CBC_0739_41D6_554E3A60E043.source'), '_blank')","id":"HotspotPanoramaOverlayArea_8FF3CE24_9CA4_0918_41DD_074CF41803BD"}],"width":"100%","mediaActivationMode":"window","overflow":"hidden","paddingTop":0,"propagateClick":false,"backgroundOpacity":1,"scrollBarMargin":2,"paddingBottom":0,"id":"rootPlayer","mouseWheelEnabled":true,"menu":["this.TDVAuthor"],"scripts":{"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"quizFinish":TDV.Tour.Script.quizFinish,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"unregisterKey":TDV.Tour.Script.unregisterKey,"getKey":TDV.Tour.Script.getKey,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"openLink":TDV.Tour.Script.openLink,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"clone":TDV.Tour.Script.clone,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"showWindow":TDV.Tour.Script.showWindow,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"initAnalytics":TDV.Tour.Script.initAnalytics,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"init":TDV.Tour.Script.init,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"isPanorama":TDV.Tour.Script.isPanorama,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"getMainViewer":TDV.Tour.Script.getMainViewer,"historyGoBack":TDV.Tour.Script.historyGoBack,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"existsKey":TDV.Tour.Script.existsKey,"cloneCamera":TDV.Tour.Script.cloneCamera,"showPopupImage":TDV.Tour.Script.showPopupImage,"getMediaByName":TDV.Tour.Script.getMediaByName,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"resumePlayers":TDV.Tour.Script.resumePlayers,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"initQuiz":TDV.Tour.Script.initQuiz,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"historyGoForward":TDV.Tour.Script.historyGoForward,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"mixObject":TDV.Tour.Script.mixObject,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"quizShowScore":TDV.Tour.Script.quizShowScore,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"setMapLocation":TDV.Tour.Script.setMapLocation,"textToSpeech":TDV.Tour.Script.textToSpeech,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"getPixels":TDV.Tour.Script.getPixels,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"getComponentByName":TDV.Tour.Script.getComponentByName,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"shareSocial":TDV.Tour.Script.shareSocial,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"setLocale":TDV.Tour.Script.setLocale,"playAudioList":TDV.Tour.Script.playAudioList,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"setValue":TDV.Tour.Script.setValue,"downloadFile":TDV.Tour.Script.downloadFile,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"getOverlays":TDV.Tour.Script.getOverlays,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"quizStart":TDV.Tour.Script.quizStart,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"registerKey":TDV.Tour.Script.registerKey,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"translate":TDV.Tour.Script.translate,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname},"paddingRight":0,"paddingLeft":0,"horizontalAlign":"left","vrPolyfillScale":0.75,"verticalAlign":"top","contentOpaque":false,"scrollBarOpacity":0.5,"desktopMipmappingEnabled":false,"defaultVRPointer":"laser","toolTipHorizontalAlign":"center","height":"100%","backgroundColor":["#FFFFFF"],"layout":"absolute","scrollBarVisible":"rollOver","scrollBarWidth":10,"mobileMipmappingEnabled":false,"scrollBarColor":"#000000","children":["this.MainViewer"],"downloadEnabled":false,"backgroundPreloadEnabled":true,"start":"this.get('data').surfaceSelectionHotspotMode = 'invisible'; this.init()","class":"Player","minHeight":20,"data":{"defaultLocale":"pt","name":"Player535","textToSpeechConfig":{"speechOnQuizQuestion":false,"volume":1,"pitch":1,"stopBackgroundAudio":false,"speechOnInfoWindow":false,"speechOnTooltip":false,"rate":1},"locales":{"pt":"locale/pt.txt"}},"backgroundColorDirection":"vertical","minWidth":20,"backgroundColorRatios":[0],"borderSize":0};
    if (d['data'] == undefined)
        d['data'] = {};
    d['data']['translateObjs'] = c;
    d['data']['history'] = {};
    d['scripts']['createQuizConfig'] = createQuizConfig;
    TDV['PlayerAPI']['defineScript'](d);
}());
//# sourceMappingURL=http://localhost:9000/script_device_v2021.2.3.js.map
//Generated with v2021.2.3, Thu Jun 8 2023